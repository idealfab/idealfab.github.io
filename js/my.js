const timeline = gsap.timeline();
timeline.from("#first > *",{opacity:0,y:-100, duration:1, ease: "none"});
timeline.from("#vidpause",{x:-200,duration:0.2, ease: Power3.easeInOut});
timeline.from(".gfromRight",{x:200, duration:1, stagger:0.1, ease: Power3.easeInOut},"-=0.2");

/*var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
					.from(".gsap-anim", 1.5, {rotationY: 180, scale: 0.7, opacity: 0})
					.to(".gsap-anim", 1.5, {rotationY: 180, scale: 0.7, opacity: 0, delay: 7});


				// build scene
				new ScrollMagic.Scene({
									triggerElement: "#timeline",
									triggerHook: "onEnter", // show, when scrolled 10% into view
									duration: "100%", // use full viewport
									offset: 50 // move trigger to center of element
								})
								.setTween(tween)
								.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
								.addTo(controller);*/

$(function()
{
    var button = $('.button');

    function switchToNext()
    {
        var _this = $(this);
        
        if(_this.hasClass('active'))
            return false;
        else
        {
            $('.button.active').removeClass('active');
            _this.addClass('active');
        }
    }

    button.on('click',switchToNext);
});
