// Get the video
var video = $("#matrix");

// Get the button
var anim = $(".anim");

// Pause and play the video, and change the button text
anim.click(function () {
    if(video.get(0).paused){
        video.get(0).play();
    }
    else{
        video.get(0).pause();
    }
});
