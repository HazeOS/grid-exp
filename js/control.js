$(document).ready(function getWidth() {
    var script = document.createElement('script');
    var Height =window.screen.availHeight;
    var Width = window.screen.availWidth;

    if(Height>Width) {
        $("body").append("<div>");
        var text = $("div");
        text.addClass("textErr");
        text.text("Goto landscape and refresh page plz");
        Phaser.game.destroy();
    }

    if(Width>=1900 && Width<=2560){     //HD
        script.src = "js/gameHD.js";
        $("body").append(script);
    }

    if(Width===1280){       //SQUARE + IPad Pro
        script.src = "js/gameSquare.js";
        $("body").append(script);
    }

    if(Width===1024){       //IPAD
        script.src = "js/gameIPad.js";
        $("body").append(script);
    }

    if(Width>=500 && Width<=812){       //MOBILE
            script.src = "js/gameMobileTest.js";
            $("body").append(script);
    }

    if(Width>=1200 && Width <= 1680){  //NOTEBOOKS
        script.src = "js/gameLowHeight.js";
        $("body").append(script);
    }

});

