class FormChecker extends Component {
	constructor(sSelector){
		super(sSelector);//вызов конструктора родительского класса
		console.log(this.elem);
	//свойства
	

	this.textfields = this.findObject(".feedback__textfield"); //текстовые поля 
	this.errorMessage = this.findObject(".b-form__message_error"); //див с сообщением об ошибке

	this.createEvents();
	}
	//methods
	checkTextfield (event, textfield = {}){
		//console.log(textfield.length);
		let currentTextfield = textfield.length ? textfield : $(event.currentTarget),
		currentTextfieldVal = currentTextfield.val(),
		regexps  = {
			"name":"^[A-za-zа-яёА-ЯЁ ]{3,15}$",
			"email":"^[A-Za-z_\\-]{1,15}$",
			"fbMessage":"^[0-9]{2,6}$",
		},
		currentTextfieldName = currentTextfield.attr("name"),
		currentRegExp = new RegExp(regexps[currentTextfieldName]),
		
		isTextfieldError = ! currentTextfieldVal.match(currentRegExp)
		;
		currentTextfield.toggleClass("b-textfield_error", isTextfieldError);
		//console.log(isTextfieldError);
		return isTextfieldError;
	}
	checkTextfieldsGroup (event) {
		event.preventDefault(); //предотвращает событие по упомолчанию
		let isFormError = false;
		this.textfields.each((i, textfield)=>{
			console.log(textfield);
			let currentTextfield = $(textfield),
			isTextfieldError = this.checkTextfield(null, currentTextfield);
			if (isTextfieldError){
				isFormError = true;
			}
		});
		//isFormError ? this.errorMessage.stop().slideDown() : this.errorMessage.stop().slideUp();
		let methodType = isFormError ? "slideDown" :" slideUp"; //подстановка названия метода через переменную
		this.errorMessage.stop()[methodType](); 
	}

	createEvents(){
	//events
	this.textfields.blur(this.checkTextfield.bind(this)); //при потере фокуса полем - метод проверки одного поля blur()
	this.elem.submit(this.checkTextfieldsGroup.bind(this)); //при отправке данных на сервер - метод проверки всех полей формы
	}
}