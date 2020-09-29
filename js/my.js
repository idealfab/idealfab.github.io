const timeline = gsap.timeline();
timeline.from("#first > img, #first > a",{opacity:0,y:-100, duration:1, ease: "none"});
timeline.from("#vidpause",{x:-200,duration:0.2, ease: Power3.easeInOut});
timeline.from(".gfromRight",{x:200, duration:1, stagger:0.1, ease: Power3.easeInOut},"-=0.2");

gsap.from(".g-opacity", 1, {opacity:0 , y:-100, ease: Power3.easeInOut, scrollTrigger: ".g-opacity"});
gsap.from(".g-fromLeft", 1, {opacity:0, x:-200, ease: Power3.easeInOut, scrollTrigger: ".g-fromLeft"});
gsap.from(".g-fromRight", 1, {opacity:0, x:200, ease: Power3.easeInOut, scrollTrigger: ".g-fromRight"});

/*var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	duration: 100;
	offset: 50;
}).setPin('#timeline').addTo(controller);*/

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
