// wait for document to load

    // initialize foundation
    $(document).foundation();

    // initiate scrollmagic function
    scrollMenu();
    scrollContact();

    // navigation 

    // select navigation
    var menuMain = $('#menu-main');
    var menuDrop = $('#menu-drop');
    var logo = $('#logo');

// general rule make all buttons including hero small on small device md on med device, on large make all buttons except hero button md (hero is large) 
    // load enquire.js
    enquire.register("screen and (max-width: 639px)", {
        
        // convert menu into vertical dropdown on smaller screens
        match: function () {
            // toggle class align-center on main menu
            menuMain.toggleClass("align-center");
            
            // toggle class menu expanded on main menu
            menuDrop.toggleClass('menu expanded');
            
            // toggle class vertical menu expanded on dropdown menu
            menuDrop.toggleClass('vertical menu expanded');

            // change logo css display to none
            logo.css("display", "none");

        },

        unmatch: function () {
            // toggle class align-center on main menu
            menuMain.toggleClass("align-center");
            
            // toggle class menu expanded on main menu
            menuDrop.toggleClass('menu expanded');
            
            // toggle class vertical menu expanded on dropdown menu
            menuDrop.toggleClass('vertical menu expanded');

            // change logo css to display contents
            logo.css("display", "contents");
        }
    });

    // Tween hero yoyo
    var heroTween = TweenMax.to('#landing-hero', 3, {opacity: 1, ease:Power0.easeNone, repeat:1, yoyo: true, yoyoEase:true, onComplete: function () {this.restart()}});
    // var someTween = TweenMax.to('.menu-main', 1, {y:'130%'});
    
    // .contact scrollMagic
    function scrollMenu () {
        // initialize controller
        var ctrl = new ScrollMagic.Controller()
        
        // animation 
        var tween = TweenMax.to('.menu-main', 0.25, {y:'130%'});

        var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger-1',
            offset: '-180',
            triggerHook: 0
        })
        .addTo(ctrl)
        .setTween(tween)
    }
    function scrollContact () {
   
        // initiate controller
        var controller = new ScrollMagic.Controller();

        var tween = TweenMax.to("#target-2", 2, {y: '-91%'});

        var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger-2',
            duration: 150,
            offset: 15,
            triggerHook: 1
        })
        .addTo(controller)
        .setTween(tween)
    };