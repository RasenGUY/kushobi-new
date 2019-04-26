
// initialize controller
var controller = new ScrollMagic.Controller({
    addIndicators: 'true'
});

// create tween 
var tween = TweenMax.to("#boxOne", 2, {y:500});

// create test scene
var testScene = new ScrollMagic.Scene({
    triggerElement: '#trigger', // starting point of scene
    duration: 200,
    offset: 400
})
.setTween(tween)
.addTo(controller)


// get the current scroll offset for the start and end of the scene.
var start = testScene.scrollOffset();
var end = testScene.scrollOffset() + testScene.duration();
console.log("the scene starts at", start, "and ends at", end);