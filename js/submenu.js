function Submenu(sSelector) {
	var s = this;
	s.submenu = $(sSelector);
	s.submenuItems = s.submenu.children("li");

	s.showSubmenu = function () {
		console.log("mouseover element:", this);
		$(this).children(".sandwichsubmenu")
			// .show();
			.stop()
			.css("display", "block")
			.animate({ opacity: 1 }, 600);
	}

	s.hideSubmenu = function () {
		$(this).children(".sandwichsubmenu")
			// .hide();
			.animate({ opacity: 0 }, 600, function () {
				$(this).css("display", "none");
			});
		}

	s.submenuItems
		.mouseover(s.showSubmenu)
		.mouseout(s.hideSubmenu);
}
