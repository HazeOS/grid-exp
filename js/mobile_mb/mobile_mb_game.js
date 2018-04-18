
var Height = window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });



function preload() {
    game.add.plugin(PhaserInput.Plugin);
    game.load.image('background','./resources/background2.jpg');
    game.load.image('motherboard','./resources/mobile_game/mobile_mb.png');
    game.load.image('processor','./resources/mobile_game/processor.png');
    game.load.image('power', './resources/mobile_game/power.png');
    game.load.image('memory','./resources/mobile_game/flash_memory.png');
    game.load.image('powercontroller', './resources/mobile_game/power_controller.png');
    game.load.image('condensator', './resources/mobile_game/cond.png');

    game.load.spritesheet('pause','./resources/controls/pause.png');
    game.load.spritesheet('play','./resources/controls/play.png');

    game.load.spritesheet('cpu','./resources/end/CPU.svg');
    game.load.spritesheet('hd','./resources/end/HD.svg');
    game.load.spritesheet('js','./resources/end/JS.svg');
    game.load.spritesheet('pc','./resources/end/PC.svg');
    game.load.spritesheet('ram','./resources/end/RAM.svg');
    game.load.spritesheet('usb','./resources/end/USB.svg');
    game.load.spritesheet('continue','./resources/end/continue.png');
    game.load.spritesheet('restart','./resources/end/restart.png');

    game.load.bitmapFont('desyrel', './resources/fonts/desyrel.png', './resources/fonts/desyrel.xml');
}
var group;
var background;
var motherboard;
var processor;
var power;
var memory;
var powercontroller;
var condensator;

var button_pause;
var button_resume;
var continue_button;
var restart_button;

var text;
var score;
var true_count;
var false_count;
var right;
var wrong;
var counterTrue = 0;
var counterFalse = 0;
var win;
var lose;
var timeText;
var clock;

var timerEvent;
var timer;
var seconds = 0;
var minutes = 0;

var inputDB;
var result;

//resolutions_coordinates_data_objects
var details_scale;
var motherX, motherY;
var procX,procY;
var powX,powY;
var memX,memY;
var pow_contX, pow_contY;
var condX , condY;


//resolutions_coordinates_data_text
var textX,textY;
var timeTextX,timeTextY;
var clockX, clockY;
var scoreX,scoreY;
var true_countX, true_countY;
var false_countX, false_countY;
var rightX, rightY;
var wrongX,wrongY;
var button_pauseX, button_pauseY;
var button_resumeX, button_resumeY;

//tolerance
var miss_radiusX , miss_radiusY;
var miss_radiusXX, miss_radiusYY;

var proc_tolX,proc_tolXX, proc_tolY, proc_tolYY , proc_idealX, proc_idealY;
var pow_tolX, pow_tolXX, pow_tolY, pow_tolYY , pow_idealX, pow_idealY;
var mem_tolX, mem_tolXX, mem_tolY, mem_tolYY, mem_idealX, mem_idealY;
var pow_cont_tolX, pow_cont_tolXX, pow_cont_tolY, pow_cont_tolYY, pow_cont_idealX, pow_cont_idealY;
var cond_tolX, cond_tolXX, cond_tolY, cond_tolYY, cond_idealX, cond_idealY;

//Управление разрешениями
function create () {

//Resolution Controls

    if(Width>=1001 && Width<=1366 && Height>=768 && Height<=1024)
    {
        details_scale = 0.5;
        motherX = 50; motherY = 400;
        procX = 50; procY = 200;
        powX = 190; powY = 200;
        memX = 300; memY = 200;
        pow_contX = 450; pow_contY = 200;
        condX = 550; condY = 200;

        textX = 50;textY = 20;
        timeTextX = 775;timeTextY = 110;
        clockX = 775;clockY = 160;
        scoreX = 775;scoreY = 20;
        true_countX = 725; true_countY = 60;
        false_countX = 880; false_countY = 60;
        rightX = 725; rightY = 90;
        wrongX = 880;wrongY = 90;

        proc_tolX = 445;proc_tolXX = 495; proc_tolY = 399; proc_tolYY = 462; proc_idealX = 471;proc_idealY = 435;
        pow_tolX = 818;pow_tolXX = 875; pow_tolY = 406; pow_tolYY = 426; pow_idealX = 840;pow_idealY = 415;
        mem_tolX = 299;mem_tolXX = 361; mem_tolY = 390; mem_tolYY = 448; mem_idealX = 318;mem_idealY = 421;
        pow_cont_tolX = 630;pow_cont_tolXX = 668; pow_cont_tolY = 434; pow_cont_tolYY = 484; pow_cont_idealX = 645;pow_cont_idealY = 457;
        cond_tolX = 857;cond_tolXX = 870; cond_tolY = 471; cond_tolYY = 497; cond_idealX = 856;cond_idealY = 482;


        miss_radiusX = 100;
        miss_radiusXX = 1015;
        miss_radiusY = 400;
        miss_radiusYY = 580;

        button_pauseX = 920; button_pauseY = 690;
        button_resumeX = 845; button_resumeY = 690;
    }

    if(Width>=1367 && Width<=1599 && Height>=768 && Height<=1000)
    {
        details_scale = 0.5;
        motherX = 100; motherY = 400;
        procX = 100; procY = 200;
        powX = 240; powY = 200;
        memX = 350; memY = 200;
        pow_contX = 500; pow_contY = 200;
        condX = 600; condY = 200;

        textX = 100;textY = 20;
        timeTextX = 1020;timeTextY = 110;
        clockX = 1020;clockY = 160;
        scoreX = 1020;scoreY = 20;
        true_countX = 955; true_countY = 60;
        false_countX = 1150; false_countY = 60;
        rightX = 955; rightY = 90;
        wrongX = 1150;wrongY = 90;

        proc_tolX = 495;proc_tolXX = 545; proc_tolY = 399; proc_tolYY = 462; proc_idealX = 521;proc_idealY = 435;
        pow_tolX = 868;pow_tolXX = 925; pow_tolY = 406; pow_tolYY = 426; pow_idealX = 890;pow_idealY = 415;
        mem_tolX = 349;mem_tolXX = 411; mem_tolY = 390; mem_tolYY = 448; mem_idealX = 368;mem_idealY = 421;
        pow_cont_tolX = 680;pow_cont_tolXX = 718; pow_cont_tolY = 434; pow_cont_tolYY = 484; pow_cont_idealX = 695;pow_cont_idealY = 457;
        cond_tolX = 897;cond_tolXX = 920; cond_tolY = 471; cond_tolYY = 497; cond_idealX = 906;cond_idealY = 482;


        miss_radiusX = 100;
        miss_radiusXX = 1015;
        miss_radiusY = 400;
        miss_radiusYY = 580;

        button_pauseX = 1125; button_pauseY = 690;
        button_resumeX = 1050; button_resumeY = 690;
    }

    if(Width>=1600 && Width<=2560 && Height>=1001 && Height<=1200)
    {
        details_scale = 0.5;
        motherX = 100; motherY = 400;
        procX = 100; procY = 200;
        powX = 240; powY = 200;
        memX = 350; memY = 200;
        pow_contX = 500; pow_contY = 200;
        condX = 600; condY = 200;

        textX = 100;textY = 50;
        timeTextX = 1700;timeTextY = 140;
        clockX = 1707;clockY = 200;
        scoreX = 1700;scoreY = 10;
        true_countX = 1670; true_countY = 60;
        false_countX = 1780; false_countY = 60;
        rightX = 1670; rightY = 100;
        wrongX = 1780;wrongY = 100;

        proc_tolX = 495;proc_tolXX = 545; proc_tolY = 399; proc_tolYY = 462; proc_idealX = 521;proc_idealY = 435;
        pow_tolX = 868;pow_tolXX = 925; pow_tolY = 406; pow_tolYY = 426; pow_idealX = 890;pow_idealY = 415;
        mem_tolX = 349;mem_tolXX = 411; mem_tolY = 390; mem_tolYY = 448; mem_idealX = 368;mem_idealY = 421;
        pow_cont_tolX = 680;pow_cont_tolXX = 718; pow_cont_tolY = 434; pow_cont_tolYY = 484; pow_cont_idealX = 695;pow_cont_idealY = 457;
        cond_tolX = 897;cond_tolXX = 920; cond_tolY = 471; cond_tolYY = 497; cond_idealX = 906;cond_idealY = 482;


        miss_radiusX = 100;
        miss_radiusXX = 1015;
        miss_radiusY = 400;
        miss_radiusYY = 580;

        button_pauseX = 1840; button_pauseY = 960;
        button_resumeX = 1765; button_resumeY = 960;
    }

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.tileSprite(0, 0, Width, Height, 'background');
    background.alpha = 1;
    background.scale.scaleMode  = Phaser.ScaleManager.EXACT_FIT;

//TEXT
    text = game.add.text(textX,textY,"Details",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    timeText = game.add.text(timeTextX,timeTextY,"Timer",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    clock = game.add.text(clockX,clockY,minutes+seconds,
        {font: "bold 24px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    score = game.add.text(scoreX,scoreY,"Score",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    true_count = game.add.text(true_countX,true_countY,"True",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    right = game.add.text(rightX,rightY,counterTrue,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    false_count = game.add.text(false_countX,false_countY,"False",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    wrong = game.add.text(wrongX,wrongY,counterFalse,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    win = game.add.text(game.world.centerX,Height+200,"YOU WON!",
        {font: "bold 128px Consolas", fill: "#fff", align:"center",boundsAlignH: "center", boundsAlignV: "middle"});
    win.anchor.setTo(0.45,0.5);

    lose = game.add.text(game.world.centerX,Height-2000,"YOU LOSE",
        {font: "bold 128px Consolas", fill: "#fff", align:"center",boundsAlignH: "center", boundsAlignV: "middle"});
    lose.anchor.setTo(0.45,0.5);


//TEXT

//TIME
    timer = game.time.create();
    timerEvent = timer.add(Phaser.Timer.MINUTE * 1 + Phaser.Timer.SECOND * 40, endTimer, this);
    timer.start();
//TIME

    motherboard = game.add.sprite(motherX, motherY, 'motherboard');
    motherboard.scale.setTo(details_scale);
    game.scale.pageAlignVertically = true;

    group = game.add.group();
    group.inputEnableChildren = true;


    processor = group.create(procX, procY, 'processor');
    processor.scale.setTo(details_scale);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);
    processor.events.onDragStop.add(mistakeCounter, this);

    power = group.create(powX,powY,'power');
    power.scale.setTo(details_scale);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);
    power.events.onDragStop.add(mistakeCounter, this);

    memory = group.create(memX,memY,'memory');
    memory.scale.setTo(details_scale);
    memory.input.enabled=true;
    memory.input.enableDrag();
    memory.events.onDragStart.add(onDragStart, this);
    memory.events.onDragStop.add(onDragStop, this);
    memory.events.onDragStop.add(mistakeCounter, this);

    powercontroller = group.create(pow_contX,pow_contY,'powercontroller');
    powercontroller.scale.setTo(details_scale);
    powercontroller.input.enabled=true;
    powercontroller.input.enableDrag();
    powercontroller.events.onDragStart.add(onDragStart, this);
    powercontroller.events.onDragStop.add(onDragStop, this);
    powercontroller.events.onDragStop.add(mistakeCounter, this);

    condensator = group.create(condX,condY,'condensator');
    condensator.scale.setTo(details_scale);
    condensator.input.enabled=true;
    condensator.input.enableDrag();
    condensator.events.onDragStart.add(onDragStart, this);
    condensator.events.onDragStop.add(onDragStop, this);
    condensator.events.onDragStop.add(mistakeCounter, this);

    group.onChildInputDown.add(onDown,this);

    button_pause = game.add.button(button_pauseX,button_pauseY, 'pause', pause, this);
    button_pause.inputEnabled = true;
    button_pause.events.onInputUp.add(create_resume_button, this);
    button_pause.scale.setTo(1);

    continue_button = game.add.button(game.world.centerX,Height+200, 'continue', gotoResults, this);
    continue_button.inputEnabled = true;
    continue_button.anchor.setTo(0.5,0.5);
    continue_button.scale.setTo(1);
    continue_button.events.onInputOver.add(_rotate,this);

    restart_button = game.add.button(game.world.centerX,Height+200, 'restart', gotoRestart, this);
    restart_button.inputEnabled = true;
    restart_button.anchor.setTo(0.5,0.5);
    restart_button.scale.setTo(1);
    restart_button.events.onInputOver.add(_rotate,this);

    inputDB = game.add.inputField(game.world.centerX-400, Height+200, {
        font: '18px Arial',
        fill: '#212121',
        fontWeight: 'bold',
        width: 250,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Your Name'
    });

}

function render() {

    var mousex = game.input.mousePointer.x;
    var mousey = game.input.mousePointer.y;

    right.setText(counterTrue);
    wrong.setText(counterFalse);

    if (timer.running) {
        clock.setText(formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)));
    }

    game.debug.text(result, 1200, 960);
    game.debug.text(counterTrue, 1200, 980);
    game.debug.text(counterFalse, 1200, 1000);

    game.debug.text(Height, 1300, 980);
    game.debug.text(Width, 1300, 1000);

    game.debug.text(mousex, 1400, 980);
    game.debug.text(mousey, 1400, 1000);


}

function onDown(sprite) {

    result = "Down " + sprite.key;

    console.log('down', sprite.key);

}

function onDragStart(sprite) {

    result = "Dragging " + sprite.key;

}


//HD - 1920:1080
function onDragStop(sprite,pointer) {

    result = sprite.key + " dropped at x:" + sprite.x + " y: " + sprite.y;
    if (sprite.x >= proc_tolX && sprite.x <= proc_tolXX && sprite.y >= proc_tolY && sprite.y <= proc_tolYY && sprite.key === 'processor') {
        sprite.x = proc_idealX;
        sprite.y = proc_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= pow_tolX && sprite.x <= pow_tolXX && sprite.y >= pow_tolY && sprite.y <= pow_tolYY && sprite.key === 'power') {
        sprite.x = pow_idealX;
        sprite.y = pow_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= mem_tolX && sprite.x <= mem_tolXX && sprite.y >= mem_tolY && sprite.y <= mem_tolYY && sprite.key === 'memory') {
        sprite.x = mem_idealX;
        sprite.y = mem_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= pow_cont_tolX && sprite.x <= pow_cont_tolXX && sprite.y >= pow_cont_tolY && sprite.y <= pow_cont_tolYY && sprite.key === 'powercontroller') {
        sprite.x = pow_cont_idealX;
        sprite.y = pow_cont_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= cond_tolX && sprite.x <= cond_tolXX && sprite.y >= cond_tolY && sprite.y <= cond_tolYY && sprite.key === 'condensator') {
        sprite.x = cond_idealX;
        sprite.y = cond_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if(counterTrue===5){
        timer.stop();
        game.physics.arcade.enable([processor, power, memory, powercontroller,condensator]);

        processor.body.velocity.setTo(200, 200);
        processor.body.collideWorldBounds = false;

        power.body.velocity.setTo(-100, -100);
        power.body.collideWorldBounds = false;

        memory.body.velocity.setTo(200, 200);
        memory.body.collideWorldBounds = false;

        powercontroller.body.velocity.setTo(-100, -100);
        powercontroller.body.collideWorldBounds = false;

        condensator.body.velocity.setTo(200, 200);
        condensator.body.collideWorldBounds = false;

        fadeDetails();
        win_text();
        matrix();
    }
}



function popup_text(x,y,sprite) {
    new FloatingText(sprite, {
        text: randText(),
        animation: "explode",
        textOptions: {
            fontSize: 28,
            fill: "#1ff416",
            font:"Consolas"
        },
        x: x,
        y: y,
        timeToLive: 400 // ms
    });
}

function popup_text_miss(x,y,sprite) {
    new FloatingText(sprite, {
        text: "Miss" ,
        animation: "explode",
        textOptions: {
            fontSize: 28,
            fill: "#C61600",
            font:"Consolas"
        },
        x: x,
        y: y,
        timeToLive: 400 // ms
    });
}

function randText() {
    var text = ["Right","++","Yes!"];
    return  text[Math.floor(Math.random() * (text.length))]
}

function pause() {
    game.paused = true;
    processor.inputEnabled=false;
    power.inputEnabled=false;
    memory.inputEnabled=false;
    powercontroller.inputEnabled=false;
    condensator.inputEnabled = false;
}

function resume() {
    game.paused = false;
    button_resume.destroy();
    processor.inputEnabled=true;
    power.inputEnabled=true;
    memory.inputEnabled=true;
    powercontroller.inputEnabled=true;
    condensator.inputEnabled = true;
}

function create_resume_button() {
    button_resume = game.add.button(button_resumeX,button_resumeY, 'play', resume, this);
    button_resume.inputEnabled = true;
}

//MISTAKES
function mistakeCounter(sprite,pointer) {
    if(sprite.x !== proc_idealX && sprite.y !== proc_idealY && sprite.x >= miss_radiusX && sprite.x <=miss_radiusXX && sprite.y >=miss_radiusY && sprite.y <= miss_radiusYY && sprite.key === 'processor' ) {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== pow_idealX && sprite.y !== pow_idealY && sprite.x >= miss_radiusX && sprite.x <=miss_radiusXX && sprite.y >=miss_radiusY && sprite.y <= miss_radiusYY && sprite.key === 'power') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== mem_idealX && sprite.y !== mem_idealY && sprite.x >= miss_radiusX && sprite.x <=miss_radiusXX && sprite.y >=miss_radiusY && sprite.y <= miss_radiusYY && sprite.key === 'memory') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== pow_cont_idealX && sprite.y !== pow_cont_idealY && sprite.x >= miss_radiusX && sprite.x <=miss_radiusXX && sprite.y >=miss_radiusY && sprite.y <= miss_radiusYY && sprite.key === 'powercontroller') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== cond_idealX && sprite.y !== cond_idealY && sprite.x >= miss_radiusX && sprite.x <=miss_radiusXX && sprite.y >=miss_radiusY && sprite.y <= miss_radiusYY && sprite.key === 'condensator') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

}


function fadeDetails() {
    //DETAILS FADE
    game.add.tween(motherboard).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(processor).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(power).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(memory).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(powercontroller).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(condensator).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

    //TEXT FADE
    game.add.tween(text).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(score).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(true_count).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(false_count).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(right).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(wrong).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(timeText).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(clock).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

    //BUTTON FADE
    game.add.tween(button_pause).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //event.onComplete.add(win_text,this);
}
function win_text() {
    var tween = game.add.tween(win).to( { x:game.world.centerX,y:game.world.centerY-100 }, 3000, Phaser.Easing.Elastic.InOut);
    tween.start();
    tween.onComplete.add(input_db,this);
}
function matrix() {
    var emitter = game.add.emitter(game.world.centerX, 0, 400);

    emitter.width = game.world.width;
    // emitter.angle = 30; // uncomment to set an angle for the rain.

    emitter.makeParticles(randNumber());


    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.4;

    emitter.bounce =1;

    emitter.setYSpeed(100, 300);
    emitter.setXSpeed(-5, 10);

    emitter.minRotation = 0;
    emitter.maxRotation = 50;

    emitter.start(false, 4000, 5, 0);
}

function _continue() {

    var tween1 = game.add.tween(continue_button).to( { x:game.world.centerX,y:game.world.centerY+50 }, 2000, Phaser.Easing.Exponential.InOut);
    tween1.start();
    tween1.onComplete.add(_rotate,this);
}
function gotoResults() {
    window.open("http://www.google.com", "_blank");
}
function _rotate(sprite) {
    game.add.tween(sprite).to( { angle:-360 }, 2000, Phaser.Easing.Exponential.InOut,true);
}
function randNumber() {
    var sprite = ['cpu','hd','js','pc','ram','usb'];
    return  sprite[Math.floor(Math.random() * (sprite.length))]
}
function input_db() {
    var input_tween = game.add.tween(inputDB).to( { x:game.world.centerX-120,y:game.world.centerY-50 }, 2000, Phaser.Easing.Exponential.InOut);
    input_tween.start();
    input_tween.onComplete.add(_continue,this);
}

function formatTime(s) {
    minutes = "0"+Math.floor(s / 60);
    seconds = "0"+(s - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

function endTimer() {
    timer.stop();
    fadeDetails();
    lose_text();
}
function lose_text() {
    var tween = game.add.tween(lose).to( { x:game.world.centerX,y:game.world.centerY-100 }, 3000, Phaser.Easing.Bounce.Out);
    tween.start();
    tween.onComplete.add(restart,this);
}
function restart() {
    var tween1 = game.add.tween(restart_button).to( { x:game.world.centerX,y:game.world.centerY+50 }, 2000, Phaser.Easing.Exponential.InOut);
    tween1.start();
    tween1.onComplete.add(_rotate,this);
}
function gotoRestart() {
    game.state.restart();
}