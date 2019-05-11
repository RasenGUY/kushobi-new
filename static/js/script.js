// wait for document to load

    // initialize foundation
    $(document).foundation();

    // initiate scrollmagic function
    scrollMenu();
    scrollContact();
    animateChar();
    animateMockup();
    


    // navigation 

    // select navigation
    var menuMain = $('#menu-main');
    var menuDrop = $('#menu-drop');
    var logo = $('#logo');

    // select animation boxes
    var animateBox = $('.animate-box');
    var mockUp = $('.mockUp');

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
    var heroTween = TweenMax.to('#landing-hero', 5, {opacity: 1, ease:Power0.easeNone, repeat:1, yoyo: true, yoyoEase:true, onComplete: function () {this.restart()}});
    
    // .contact scrollMagic
    function scrollMenu () {

        // initialize controller
        var ctrl = new ScrollMagic.Controller()
        
        // animation
        var tween = TweenMax.to('.menu-main', 0.25, {y:'0%'});
        var tweenTwo = TweenMax.to('#target-2', 0.25, {y: '-7%'});

        var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger-1',
            // offset: '',
            triggerHook: 0
        })
        .setTween([tween, tweenTwo])
        .addTo(ctrl)
    }

    function scrollContact () {
        // initiate controller
        var controller = new ScrollMagic.Controller();
        //  add multiple tweens
        var timeline = new TimelineMax();
        var tween = TweenMax.to("#target-2", 2, {top: '6.5%'});
        var tweenTwo = TweenMax.to('.menu-main', 0.25, {y:'-105%'});

        var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger-2',
            duration: 150,
            offset: 15,
            triggerHook: 1
        })
        // .setTween(tween)
        .setTween([tween, tweenTwo])
        .addTo(controller)
    };

    // function for general animations
    function animateEl () {
        // create scrollMagic controller
        var ctrl = new ScrollMagic.Controller();
        // iterate over each box
        $.each(animateBox, (index, box ) => {

            // create a tween
            var animation = TweenMax.fromTo(box, 1,{opacity: 0, y: '40%'}, {opacity:1, y: '0%', ease: Circ.easeOut});
            
            // for each element create a scrollmagic scene
            var scene = new ScrollMagic.Scene({triggerElement: box, offset: -200})
            .setTween(animation)
            .addTo(ctrl)
            .on("enter", ()=>{
                setInterval(()=>{
                    animation.play()
                }, 1500);
            })
            .on("leave", ()=>{
                scene.removeTween();
            })
        })
    }
    animateEl();


    // function for animation of characters
    function animateChar(){
        // select all characters
        var char = $('.character img');

        // initialize new controller
        var ctrl = new ScrollMagic.Controller();

        // create timeline with tweens
        var tl = new TimelineMax();
        // iterate over characters and add the tween
        
        for (let i = 0; i<char.length; i++){
            if ((i <= 2 )|| (i > 5 && i <= 7 ) ){
                tl.add(TweenMax.fromTo(char[i], 0.35, {opacity: 0, x: '-100%'}, {opacity: 1, x: '0%', ease: Circ.easeOut}))
                // console.log("from left added tween")
            } else {
                tl.add(TweenMax.fromTo(char[i], 0.35, {opacity: 0, x: '100%'}, {opacity: 1, x: '0%', ease: Circ.easeOut}))
                // console.log('from right added tween')
            } 
        }

        // create new scrollMagic scene
        var scene = new ScrollMagic.Scene({triggerElement: '#characters-section'})
        .setTween(tl)
        .addTo(ctrl)
        .on('leave', ()=>{
            scene.removeTween();
        })
    };

    // function for animation of mockup
    function animateMockup(){
        // select targets
        var targets = $('.target-3');
        // initiate scrollMagic
        var ctrl = new ScrollMagic.Controller();
        
        $.each(targets, (index, target) => {

            // create tween
            var tween = TweenMax.fromTo(target, 1,{opacity: 0, x: '100%'}, {opacity:1, x: '0%', ease: Circ.easeOut});        
            // initiate scene
            var scene = new ScrollMagic.Scene({triggerElement: target, offset: -100})
            .setTween(tween)
            .addTo(ctrl)
            .on('enter', ()=>{
                tween.play()
            })
            .on('leave', ()=>{
                scene.removeTween();
            });
        });
    };


