$(document).ready(function getWidth() {
    var script = document.createElement('script');
    var Height =window.screen.availHeight;
    var Width = window.screen.availWidth;

    if(Width>=1900 && Width<=3840){
        script.src = "js/gameHD.js";
        $("body").append(script);
    }

    if(Width>=500 && Width<=812){
            script.src = "js/gameMobileTest.js";
            $("body").append(script);
    }
});
