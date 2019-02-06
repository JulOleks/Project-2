function Feedback(sSelector) {
	var f = this;
	f.feedback = $(sSelector);

	f.textfields = f.feedback.find(".feedback__textfield");


	f.checkTextfield = function(textfield){
		console.log(textfield.length);
		//смотрим лежит ли что-то в поле
		//var currentTextfield = textfield.length
		var currentTextfield = textfield.length ? textfield : $(this), //мы понимает то ли было вызвано потерей фокуса или при нажатии на кнопку!
		currentTextfieldVal = currentTextfield.val() ;
		var regexps = {
			"name":"^[A-Za-zА-Яа-яёЁЇїЄєҐґ\-]{2,64}$",
			"email":"^([a-z0-9\\-._]{1,255}@[a-z0-9\\.]{1,64}[a-z]{2,20})$",
			"fbMessage":"^[A-Za-zА-Яа-яёЁЇїЄєҐґ]{3,255})$"
		},
		currentTextfieldName = currentTextfield.attr("name") //получаем атрибут, который служит нам ключем в массиве
		//получаем значение текстового поля
		currentRegExp = new RegExp(regexps[currentTextfieldName]),
		isTextfieldError = ! currentTextfieldVal.match(currentRegExp),// делаем проверку на ошибку введеных данных и РВ
		currentTextfield.toggleClass("b-textfield_error", isTextfieldError);
		//console.log(isTextfieldError);
		return isTextfieldError;
	}

	f.checkTextfieldGroup = function(event){
		event.preventDefault(); //предотвращает событие по упомолчанию
		var isFormError = false;
		f.textfields.each(function(){
			var currentTextfield = $(this);
			isTextfieldError = f.checkTextfield(currentTextfield);
			if(isTextfieldError){
				isFormError = true;
			}

		})
		if (isFormError == true){
			alert("There is mistake =(")
		};
		

	}
	f.textfields.blur(f.checkTextfield);
	f.feedback.submit(f.checkTextfieldGroup);
}