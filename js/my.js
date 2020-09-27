const guru = gsap.timeline();
guru.add(ani1());


// guru animations

function ani1(){
	const tl = gsap.timeline();
	tl.from("#first > img, #first > a",{opacity:0,y:-100, duration:1, ease: "none"});
	tl.from("#vidpause",{x:-200,duration:0.2, ease: Power3.easeInOut});
	tl.from(".gfromRight",{x:200, duration:1, stagger:0.1, ease: Power3.easeInOut},"-=0.2");
}