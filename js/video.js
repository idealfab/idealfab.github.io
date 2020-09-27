var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause"), pauseButton_icon = document.getElementById("vidpause-icon");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton_icon.classList.remove("fa-pause-circle");
     pauseButton_icon.classList.add("fa-play-circle");
}

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
		vid.play();
		pauseButton_icon.classList.remove("fa-play-circle");
		pauseButton_icon.classList.add("fa-pause-circle");
	} else {
        vid.pause();
        pauseButton_icon.classList.remove("fa-pause-circle");
        pauseButton_icon.classList.add("fa-play-circle");
	}
})
