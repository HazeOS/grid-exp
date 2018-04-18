var result = "Drag Something";
var counterTrue = 0;
var counterFalse = 0;

var right;
var wrong;

var Height = window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });



function preload() {
   game.add.plugin(PhaserInput.Plugin);
   game.load.image('background','./resources/background2.jpg');
   game.load.image('motherboard','./resources/motherboard.png');
   game.load.image('processor','./resources/Intel_CPU.png');
   game.load.image('power', './resources/mbpower.png');
   game.load.image('battery','./resources/battery.png');
   game.load.image('multicontroller', './resources/multicontroller.png');
   game.load.image('ram','./resources/RAM.png');//ЗАМЕНИТЬ
   game.load.image('reset_button','./resources/reset_button.png');
   game.load.image('sata1','./resources/sata1.png');
   game.load.image('sata_block','./resources/sata-block.png');
   game.load.image('soundboard','./resources/soundboard.png');
   game.load.image('start_button','./resources/start_button.png');
   game.load.image('usb_block','./resources/usb-block.png');
   game.load.image('videocard','./resources/videocard.png');

   game.load.spritesheet('pause','./resources/controls/pause.png');
   game.load.spritesheet('play','./resources/controls/play.png');

   game.load.spritesheet('cpu','./resources/end/CPU.svg');
   game.load.spritesheet('hd','./resources/end/HD.svg');
   game.load.spritesheet('js','./resources/end/JS.svg');
   game.load.spritesheet('pc','./resources/end/PC.svg');
   game.load.spritesheet('ram','./resources/end/RAM.svg');
   game.load.spritesheet('usb','./resources/end/USB.svg');
   game.load.spritesheet('continue','./resources/end/continue.png')
}
var background;
var motherboard;
var group;
var processor;
var power;
var battery;
var multicontroller;
var reset_button;
var start_button;
var sata1;
var sata_block;
var soundboard;
var usb_block;


var button_pause;
var button_resume;
var continue_button;

var text;
var score;
var true_count;
var false_count;
var win;

var timer;

var inputDB;
//Управление разрешениями
function create () {
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.tileSprite(0, 0, Width, Height, 'background');
    background.alpha = 1;


//TEXT
    text = game.add.text(1300,10,"Details",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    score = game.add.text(1700,10,"Score",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    true_count = game.add.text(1670,60,"True",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    right = game.add.text(1670,100,counterTrue,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    false_count = game.add.text(1780,60,"False",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    wrong = game.add.text(1780,100,counterFalse,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    win = game.add.text(game.world.centerX,Height+200,"YOU WON!",
        {font: "bold 128px Consolas", fill: "#fff", align:"center",boundsAlignH: "center", boundsAlignV: "middle"});
    win.anchor.setTo(0.45,0.5);
    win.bringToTop(this);

//TEXT

//TIME

//TIME

    motherboard = game.add.sprite(0, 0, 'motherboard');
    motherboard.scale.setTo(0.58);
    game.scale.pageAlignVertically = true;

    group = game.add.group();
    group.inputEnableChildren = true;


    processor = group.create(1090, 70, 'processor');
    processor.scale.setTo(0.58);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);
    processor.events.onDragStop.add(mistakeCounter, this);

    power = group.create(1350,70,'power');
    power.scale.setTo(0.58);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);
    power.events.onDragStop.add(mistakeCounter, this);

    battery = group.create(1400,70,'battery');
    battery.scale.setTo(0.58);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);
    battery.events.onDragStop.add(mistakeCounter, this);

    multicontroller = group.create(1500,70,'multicontroller');
    multicontroller.scale.setTo(0.58);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);
    multicontroller.events.onDragStop.add(mistakeCounter, this);

    reset_button = group.create(1420,200,'reset_button');
    reset_button.scale.setTo(0.58);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);
    reset_button.events.onDragStop.add(mistakeCounter, this);

    start_button = group.create(1415,155,'start_button');
    start_button.scale.setTo(0.58);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);
    start_button.events.onDragStop.add(mistakeCounter, this);

    sata1 = group.create(1100,350,'sata1');
    sata1.scale.setTo(0.58);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);
    sata1.events.onDragStop.add(mistakeCounter, this);

    sata_block = group.create(1200,350,'sata_block');
    sata_block.scale.setTo(0.58);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);
    sata_block.events.onDragStop.add(mistakeCounter, this);

    soundboard = group.create(1300,350,'soundboard');
    soundboard.scale.setTo(0.58);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);
    soundboard.events.onDragStop.add(mistakeCounter, this);

    usb_block = group.create(1400,350,'usb_block');
    usb_block.scale.setTo(0.58);
    usb_block.input.enabled=true;
    usb_block.input.enableDrag();
    usb_block.events.onDragStart.add(onDragStart, this);
    usb_block.events.onDragStop.add(onDragStop, this);
    usb_block.events.onDragStop.add(mistakeCounter, this);

    /*var videocard = group.create(1700,70,'videocard');
    videocard.scale.setTo(0.5);
    videocard.input.enabled=true;
    videocard.input.enableDrag();
    videocard.events.onDragStart.add(onDragStart, this);
    videocard.events.onDragStop.add(onDragStop, this);*/

    group.onChildInputDown.add(onDown,this);

    button_pause = game.add.button(1840,960, 'pause', pause, this);
    button_pause.inputEnabled = true;
    button_pause.events.onInputUp.add(create_resume_button, this);
    button_pause.scale.setTo(1);

    continue_button = game.add.button(game.world.centerX,Height+200, 'continue', gotoResults, this);
    continue_button.inputEnabled = true;
    continue_button.anchor.setTo(0.5,0.5);
    continue_button.scale.setTo(1);
    continue_button.events.onInputOver.add(_rotate,this);

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

    //var mousex = game.input.mousePointer.x;
    //var mousey = game.input.mousePointer.y;

    right.setText(counterTrue);
    wrong.setText(counterFalse);

    /*game.debug.text(result, 1200, 960);
    game.debug.text(counterTrue, 1200, 980);
    game.debug.text(counterFalse, 1200, 1000);

    game.debug.text(Height, 1300, 980);
    game.debug.text(Width, 1300, 1000);

    game.debug.text(mousex, 1400, 980);
    game.debug.text(mousey, 1400, 1000);*/


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
    if (sprite.x >= 420 && sprite.x <= 510 && sprite.y >= 190 && sprite.y <= 260 && sprite.key === 'processor') {
        sprite.x = 480;
        sprite.y = 235;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 987 && sprite.x <= 1008 && sprite.y >= 295 && sprite.y <= 334 && sprite.key === 'power') {
        sprite.x = 997;
        sprite.y = 312;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 584 && sprite.x <= 621 && sprite.y >= 710 && sprite.y <= 750 && sprite.key === 'battery') {
        sprite.x = 602;
        sprite.y = 737;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 74 && sprite.x <= 101 && sprite.y >= 726 && sprite.y <= 760 && sprite.key === 'multicontroller') {
        sprite.x = 85;
        sprite.y = 746;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 410 && sprite.x <= 427 && sprite.y >= 976 && sprite.y <= 999 && sprite.key === 'reset_button') {
        sprite.x = 418;
        sprite.y = 988;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 345 && sprite.x <= 369 && sprite.y >= 972 && sprite.y <= 999 && sprite.key === 'start_button') {
        sprite.x = 355;
        sprite.y = 986;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 868 && sprite.x <= 904 && sprite.y >= 989 && sprite.y <= 1014 && sprite.key === 'sata1') {
        sprite.x = 882;
        sprite.y = 1003;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 993 && sprite.x <= 1022 && sprite.y >= 703 && sprite.y <= 769 && sprite.key === 'sata_block') {
        sprite.x = 1009;
        sprite.y = 729;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 37 && sprite.x <= 73 && sprite.y >= 891 && sprite.y <= 935 && sprite.key === 'soundboard') {
        sprite.x = 53;
        sprite.y = 912;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= 0 && sprite.x <= 67 && sprite.y >= 307 && sprite.y <= 341 && sprite.key === 'usb_block') {
        sprite.x = 16;
        sprite.y = 326;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if(counterTrue===10){
        game.physics.arcade.enable([processor, power, battery, multicontroller,
            reset_button, start_button, sata1, sata_block, soundboard, usb_block]);

        processor.body.velocity.setTo(200, 200);
        processor.body.collideWorldBounds = false;

        power.body.velocity.setTo(-100, -100);
        power.body.collideWorldBounds = false;

        battery.body.velocity.setTo(200, 200);
        battery.body.collideWorldBounds = false;

        multicontroller.body.velocity.setTo(-100, -100);
        multicontroller.body.collideWorldBounds = false;

        reset_button.body.velocity.setTo(200, 200);
        reset_button.body.collideWorldBounds = false;

        start_button.body.velocity.setTo(-100, -100);
        start_button.body.collideWorldBounds = false;

        sata1.body.velocity.setTo(200, 200);
        sata1.body.collideWorldBounds = false;

        sata_block.body.velocity.setTo(-100, -100);
        sata_block.body.collideWorldBounds = false;

        soundboard.body.velocity.setTo(200, 200);
        soundboard.body.collideWorldBounds = false;

        usb_block.body.velocity.setTo(-100, -100);
        usb_block.body.collideWorldBounds = false;

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
    battery.inputEnabled=false;
    multicontroller.inputEnabled=false;
    reset_button.inputEnabled=false;
    start_button.inputEnabled=false;
    sata1.inputEnabled=false;
    sata_block.inputEnabled=false;
    soundboard.inputEnabled=false;
    usb_block.inputEnabled=false;
}

function resume() {
    game.paused = false;
    button_resume.destroy();
    processor.inputEnabled=true;
    power.inputEnabled=true;
    battery.inputEnabled=true;
    multicontroller.inputEnabled=true;
    reset_button.inputEnabled=true;
    start_button.inputEnabled=true;
    sata1.inputEnabled=true;
    sata_block.inputEnabled=true;
    soundboard.inputEnabled=true;
    usb_block.inputEnabled=true;
}

function create_resume_button() {
    button_resume = game.add.button(1765,960, 'play', resume, this);
    button_resume.inputEnabled = true;
}

//MISTAKES
function mistakeCounter(sprite,pointer) {
    if(sprite.x !== 480 && sprite.y !== 235 && sprite.x < 1073 && sprite.key === 'processor' ) {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 997 && sprite.y !== 312 && sprite.x < 1073 && sprite.key === 'power') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 602 && sprite.y !== 737 && sprite.x < 1073 && sprite.key === 'battery') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 85 && sprite.y !== 746 && sprite.x < 1073 && sprite.key === 'multicontroller') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 418 && sprite.y !== 988 && sprite.x < 1073 && sprite.key === 'reset_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 355 && sprite.y !== 986 && sprite.x < 1073 && sprite.key === 'start_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 882 && sprite.y !== 1003 && sprite.x < 1073 && sprite.key === 'sata1') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 1009 && sprite.y !== 729 && sprite.x < 1073 && sprite.key === 'sata_block') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 53 && sprite.y !== 912 && sprite.x < 1073 && sprite.key === 'soundboard') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 16 && sprite.y !== 326 && sprite.x < 1073 && sprite.key === 'usb_block') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }
}


function fadeDetails() {
    //DETAILS FADE
    game.add.tween(motherboard).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(processor).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(power).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(battery).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(multicontroller).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(reset_button).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(start_button).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(sata1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(sata_block).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(soundboard).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(usb_block).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

    //TEXT FADE
    game.add.tween(text).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(score).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(true_count).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(false_count).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(right).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(wrong).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

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
function _rotate() {
    game.add.tween(continue_button).to( { angle:360 }, 2000, Phaser.Easing.Exponential.InOut,true);
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