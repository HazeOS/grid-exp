// Get the video
var video = $("#matrix");

// Get the button
var body = $("body");

// Pause and play the video, and change the button text
body.click(function () {
    if(video.get(0).paused){
        video.get(0).play();
    }
    else{
        video.get(0).pause();
    }
});
