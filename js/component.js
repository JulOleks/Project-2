class Component{
	constructor(sSelector){
		this.elem = $(sSelector);
		if(!this.elem.length){
			console.log("Проверь id в строке вызова конструктора класса в html")
		}
	}

	findObject(sSelector){
		let currentElem = this.elem.find(sSelector);
		if(!currentElem.length){
			console.log(`проверьте имя класса - ${sSelector}`)
		}
		return currentElem; 


	}
}