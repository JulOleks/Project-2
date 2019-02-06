function Menu(sSelector){
	var m = this;

	m.menu = $(sSelector);
	m.menuItems = m.menu.children("li");

	m.showSubmenu = function(){
		console.log("mouseover element:", this);
		$(this).children(".submenu")
		// .show();
		 .stop()
		 .css("display","block")
		 .animate({opacity:1},600);
	}

	m.hideSubmenu= function(){
		$(this).children(".submenu")
		// .hide();
			 .animate({opacity:0},600, function(){
				$(this).css("display","none");
			});
		
	}


m.menuItems
	.mouseover(m.showSubmenu)
	.mouseout(m.hideSubmenu);
}