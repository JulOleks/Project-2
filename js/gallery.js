class Gallery extends Component {
	constructor(sSelector) {
		super(sSelector);

		this.pics = this.findObject(".gallery__pics");
		this.arrowPrev = this.findObject(".preview__arrow_prev");
		this.arrowNext = this.findObject(".preview__arrow_next");
		this.preview = this.findObject(".preview");
		this.prevPic = this.findObject(".preview__img");
		this.maxPics = this.pics.length;
		this.currentPicsIndex = 0;
		this.createEvents();
	}

	showPreview(event){
		let resPics = $(event.currentTarget); //reason of event
		//console.log(resPics);
		this.currentPicsIndex = this.pics.index(resPics);
		//console.log(this.currentPicsIndex);

		this.showImg(null, 0);  //это сдвиг 
		this.preview.addClass("preview__shown");

	}

	hidePreview(event){
		if(!event || $(event.target).hasClass("preview")){
			this.preview.removeClass("preview__shown");
		}
	}

	escHidePreview(event){
		// console.log(event.which);
		if (event.which == 27) {
			this.hidePreview();
		}
	}
	arrowShowNext(){
		if (event.which == 39){
			this.showNext();
		}
	}
	arrowShowPrevious(){
		if(event.which == 37){
			this.showPrevious();
		}

	}

	showPrevious(event){
		this.showImg(null, -1);
	}

	showNext(event){
		this.showImg(null, +1);
	}

	showImg(event, iStep){
		this.currentPicsIndex += iStep;
		if(this.currentPicsIndex >= this.maxPics){
			this.currentPicsIndex = 0;
		} else if( this.currentPicsIndex < 0){
			this.currentPicsIndex = this.maxPics - 1;
		}

		let jqPics = this.pics.eq(this.currentPicsIndex);
		//console.log(jqPics);
		let jqImage = jqPics.children(".pic__img");
		let ImgSrc = jqImage.attr("src");

		this.prevPic.attr("src", ImgSrc);


	}

	createEvents(){
		this.pics.click(this.showPreview.bind(this));
		this.arrowNext.click(this.showNext.bind(this));
		this.arrowPrev.click(this.showPrevious.bind(this));
		this.preview.click(this.hidePreview.bind(this));
		$("body").keyup(this.escHidePreview.bind(this));
		this.arrowNext.keyup(this.arrowShowNext.bind(this));
		this.arrowPrev.keyup(this.arrowShowPrevious.bind(this));
	}


}