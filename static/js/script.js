// initialize foundation
    $(document).foundation();

// navigation 

// select navigation
var menuMain = $('#menu-main');
var menuDrop = $('#menu-drop');
var logo = $('#logo');


// load enquire.js
enquire.register("screen and (max-width: 639px)", {
    
    // convert menu into vertical dropdown on smaller screens
    match: function () {
        // toggle class align-center on main menu
        menuMain.toggleClass("align-center");
        
        // toggle class menu expanded on main menu
        menuDrop.toggleClass('menu expanded');
        
        // toggle class vertical menu expanded on dropdown menu
        menuDrop.toggleClass('vertical menu expanded')

        // change logo css display to none
        logo.css("display", "none");

    },

    unmatch: function () {
        // toggle class align-center on main menu
        menuMain.toggleClass("align-center");
        
        // toggle class menu expanded on main menu
        menuDrop.toggleClass('menu expanded');
        
        // toggle class vertical menu expanded on dropdown menu
        menuDrop.toggleClass('vertical menu expanded')

        // change logo css to display contents
        logo.css("display", "contents");
    }

});
