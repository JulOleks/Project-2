class Menu extends Component{
	constructor(sSelector) {
		super(sSelector);

		this.menu = $(sSelector);
		this.menuItems = this.findObject("li");
		this.createEvents();
	}

	showSubmenu(event) {
		console.log("mouseover element:", this.className);
		$(event.currentTarget).children(".submenu")
			// .show();
			.stop()
			.css("display", "block")
			.animate({ opacity: 1 }, 600);
	}

	hideSubmenu(event) {
		$(event.currentTarget).children(".submenu")
			// .hide();
			.animate({ opacity: 0 }, 600, function () {
				$(this).css("display", "none");
			});

	}

	createEvents() {
		this.menuItems
			.mouseover(this.showSubmenu.bind(this))
			.mouseout(this.hideSubmenu.bind(this));
	}
}