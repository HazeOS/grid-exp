// Get the video
var wrap = $(".wrap");

// Get the button
var anim = $(".anim");
var disable = $("#disable");

// Pause and play the video, and change the button text
anim.click(function () {
    wrap.css('animation','none');
    wrap.css('-webkit-animation','none');
    wrap.css('-moz-animation','none');
});

disable.click(function () {
    wrap.css('animation','none');
    wrap.css('-webkit-animation','none');
    wrap.css('-moz-animation','none');
});
