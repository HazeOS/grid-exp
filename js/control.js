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
    if(Width>812 && Width<=1900){       //TABLET
        script.src = "js/gameSquareTablet.js";
        $("body").append(script);
    }

    if(Width>=500 && Width<=812){       //MOBILE
            script.src = "js/gameMobileTest.js";
            $("body").append(script);
    }


});

