gsap.registerPlugin(ScrollTrigger);

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

const timeline = gsap.timeline();
timeline.from("#menu-button", {opacity:0, duration:1, y:-100, ease: Power3.easeInOut});
timeline.from("#first > *",{opacity:0,y:-100, duration:1, ease: Power3.easeInOut}, "-=1");
timeline.from("#vidpause",{x:-200,duration:0.2, ease: Power3.easeInOut});
timeline.from(".gfromRight",{x:200, duration:1, stagger:0.1, ease: Power3.easeInOut},"-=0.2");

gsap.from("#timeline_1 .g-fromLeft", {scrollTrigger: { trigger: "#timeline_1", start: "0px 80%"},opacity: 0, duration:1.5, x:-100, ease: "power1.out"});
gsap.from("#timeline_1 .g-fromRight", {scrollTrigger: { trigger: "#timeline_1", start: "0px 80%"},opacity: 0, duration: 1.5, x: 100, ease: "power1.out"});
gsap.from("#timeline_1 .g-opacity", {scrollTrigger: { trigger: "#timeline_1 .g-opacity", start: "0px 90%"},opacity: 0, duration: 1.5, ease: "power1.out"});

gsap.from("#timeline_2 .g-fromLeft", {scrollTrigger: { trigger: "#timeline_2", start: "0px 80%"},opacity: 0, duration: 1.5, x:-100, ease: "power1.out"});
gsap.from("#timeline_2 .g-fromRight", {scrollTrigger: { trigger: "#timeline_2", start: "0px 80%"},opacity: 0, duration: 1.5, x: 100, ease: "power1.out"});
gsap.from("#timeline_2 .g-opacity", {scrollTrigger: { trigger: "#timeline_2", start: "0px 80%"},opacity: 0, duration: 1.5, ease: "power1.out"});

gsap.from("#service .g-opacity", {scrollTrigger: {trigger: "#service", start: "0px 80%"}, opacity: 0, duration: 1.5, ease: "power1.out"});
gsap.from("#service .g-card", {scrollTrigger: {trigger: "#service", start: "0px 80%"}, opacity: 0, duration: 1.5, y: 200, ease: "power1.out", stagger: 0.3});

gsap.from("#projectsHead", {scrollTrigger: {trigger: "#projectsHead", start: "0px 80%"}, opacity: 0, duration: 1.5, ease: "power1.out"});
gsap.from("#service2 .g-card", {scrollTrigger: {trigger: "#service2", start: "0px 80%"}, opacity: 0, duration: 1.5, y: 200, ease: "power1.out", stagger: 0.3});

gsap.from("#contactMain .g-opacity", {scrollTrigger: {trigger: "#contactMain", start: "0px 80%"}, opacity: 0, duration: 1.5, ease: "power1.out"});
gsap.from("#contactSecond .g-fromLeft", {scrollTrigger: { trigger: "#contactSecond", start: "0px 80%"},opacity: 0, duration: 1.5, x:-100, ease: "power1.out"});
gsap.from("#contactSecond .g-fromRight", {scrollTrigger: { trigger: "#contactSecond", start: "0px 80%"},opacity: 0, duration: 1.5, x: 100, ease: "power1.out"});


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
