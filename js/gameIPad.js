var result = "Drag Something";
var counterTrue = 0;
var counterFalse = 0;
var Height = window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });

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
var text;
var score;

function preload() {
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
}


//Управление разрешениями
function create () {
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    background = game.add.tileSprite(0, 0, Width, Height, 'background');
    background.alpha = 1;

    text = game.add.text(815,10,"Details",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    score = game.add.text(835,405,"Score",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    game.add.text(800,450,"True",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    right = game.add.text(800,480,counterTrue,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    game.add.text(920,450,"False",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    wrong = game.add.text(920,480,counterFalse,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    motherboard = game.add.sprite(0, 0, 'motherboard');
    motherboard.scale.setTo(0.42);
    game.scale.pageAlignVertically = true;

    group = game.add.group();
    group.inputEnableChildren = true;


    processor = group.create(780, 70, 'processor');
    processor.scale.setTo(0.42);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);
    processor.events.onDragStop.add(mistakeCounter, this);

    power = group.create(990,250,'power');
    power.scale.setTo(0.42);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);
    power.events.onDragStop.add(mistakeCounter, this);

    battery = group.create(960,70,'battery');
    battery.scale.setTo(0.42);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);
    battery.events.onDragStop.add(mistakeCounter, this);

    multicontroller = group.create(940,315,'multicontroller');
    multicontroller.scale.setTo(0.42);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);
    multicontroller.events.onDragStop.add(mistakeCounter, this);

    reset_button = group.create(978,160,'reset_button');
    reset_button.scale.setTo(0.42);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);
    reset_button.events.onDragStop.add(mistakeCounter, this);

    start_button = group.create(974,129,'start_button');
    start_button.scale.setTo(0.42);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);
    start_button.events.onDragStop.add(mistakeCounter, this);

    sata1 = group.create(965,200,'sata1');
    sata1.scale.setTo(0.42);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);
    sata1.events.onDragStop.add(mistakeCounter, this);

    sata_block = group.create(780,250,'sata_block');
    sata_block.scale.setTo(0.42);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);
    sata_block.events.onDragStop.add(mistakeCounter, this);

    soundboard = group.create(835,250,'soundboard');
    soundboard.scale.setTo(0.42);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);
    soundboard.events.onDragStop.add(mistakeCounter, this);

    usb_block = group.create(895,250,'usb_block');
    usb_block.scale.setTo(0.42);
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

    button_pause = game.add.button(950,695, 'pause', pause, this);
    button_pause.inputEnabled = true;
    button_pause.events.onInputUp.add(create_resume_button, this);
    button_pause.scale.setTo(1);
}

function render() {

    var mousex = game.input.mousePointer.x;
    var mousey = game.input.mousePointer.y;

    right.setText(counterTrue);
    wrong.setText(counterFalse);

    game.debug.text(result, 690, 620);
    game.debug.text(counterTrue,800,660);
    game.debug.text(counterFalse,800,680);

    game.debug.text(Height,850,660);
    game.debug.text(Width,850,680);

    game.debug.text(mousex, 950, 660);
    game.debug.text(mousey, 950, 680);
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
//x:408 - 422 y:201 - 214
    if(sprite.x >= 295 && sprite.x <=408 && sprite.y>=97 && sprite.y <=205 && sprite.key === 'processor')
    {
        sprite.x = 347;
        sprite.y = 170;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:857 - 860 y:268 - 274
    if(sprite.x >= 710 && sprite.x <=737 && sprite.y>=199 && sprite.y <=250 && sprite.key ==='power')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 722;
        sprite.y = 228;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 421 && sprite.x <=453 && sprite.y>=517 && sprite.y <=547 && sprite.key ==='battery')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 435;
        sprite.y = 534;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:72 - 75 y:642 - 646
    if(sprite.x >= 52 && sprite.x <=77 && sprite.y>=523 && sprite.y <=556 && sprite.key ==='multicontroller')
    {
        sprite.x = 61;
        sprite.y = 541;
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:360 - 362  y:851 - 854
    if(sprite.x >= 290 && sprite.x <=314 && sprite.y>=704 && sprite.y <=732 && sprite.key ==='reset_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 303;
        sprite.y = 716;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:  y:
    if(sprite.x >= 239 && sprite.x <=276 && sprite.y>=698 && sprite.y <=731 && sprite.key ==='start_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 257;
        sprite.y = 715;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }


//x:  y:
    if(sprite.x >= 619 && sprite.x <=664 && sprite.y>=712 && sprite.y <=739 && sprite.key ==='sata1')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 638;
        sprite.y = 726;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    //x:  y:
    if(sprite.x >= 711 && sprite.x <=744 && sprite.y>=488 && sprite.y <=555 && sprite.key ==='sata_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 730;
        sprite.y = 529;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 22 && sprite.x <=62 && sprite.y>=624 && sprite.y <=683 && sprite.key ==='soundboard')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 38;
        sprite.y = 661;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 0 && sprite.x <=49 && sprite.y>=207 && sprite.y <=256 && sprite.key ==='usb_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        sprite.x = 12;
        sprite.y = 235;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
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
    var text = ["Right!","++","Yes!"];
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
    button_resume = game.add.button(875,695, 'play', resume, this);
    button_resume.inputEnabled = true;
}

//MISTAKES
function mistakeCounter(sprite,pointer) {
    if(sprite.x !== 347 && sprite.y !== 170 && sprite.x < 766 && sprite.key === 'processor' ) {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 722 && sprite.y !== 228 && sprite.x < 766 && sprite.key === 'power') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 435 && sprite.y !== 534 && sprite.x < 766 && sprite.key === 'battery') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 61 && sprite.y !== 541 && sprite.x < 766 && sprite.key === 'multicontroller') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 303 && sprite.y !== 716 && sprite.x < 766 && sprite.key === 'reset_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 257 && sprite.y !== 715 && sprite.x < 766 && sprite.key === 'start_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 638 && sprite.y !== 726 && sprite.x < 766 && sprite.key === 'sata1') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 730 && sprite.y !== 529 && sprite.x < 766 && sprite.key === 'sata_block') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 38 && sprite.y !== 661 && sprite.x < 766 && sprite.key === 'soundboard') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== 12 && sprite.y !== 235 && sprite.x < 766 && sprite.key === 'usb_block') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }
}


