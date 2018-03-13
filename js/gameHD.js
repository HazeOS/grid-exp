var result = "Drag Something";
var counterTrue = 0;
var counterFalse = 0;
var Height = window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });

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
}


//Управление разрешениями
function create () {
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    game.add.tileSprite(0, 0, Width, Height, 'background');

    var motherboard = game.add.sprite(0, 0, 'motherboard');
    motherboard.scale.setTo(0.58);
    game.scale.pageAlignVertically = true;

    var group = game.add.group();
    group.inputEnableChildren = true;


    var processor = group.create(1100, 70, 'processor');
    processor.scale.setTo(0.58);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);

    var power = group.create(1350,70,'power');
    power.scale.setTo(0.58);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);

    var battery = group.create(1400,70,'battery');
    battery.scale.setTo(0.58);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);

    var multicontroller = group.create(1500,70,'multicontroller');
    multicontroller.scale.setTo(0.58);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);

    var reset_button = group.create(1420,200,'reset_button');
    reset_button.scale.setTo(0.58);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);

    var start_button = group.create(1415,155,'start_button');
    start_button.scale.setTo(0.58);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);

    var sata1 = group.create(1100,350,'sata1');
    sata1.scale.setTo(0.58);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);

    var sata_block = group.create(1200,350,'sata_block');
    sata_block.scale.setTo(0.58);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);

    var soundboard = group.create(1300,350,'soundboard');
    soundboard.scale.setTo(0.58);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);

    var usb_block = group.create(1400,350,'usb_block');
    usb_block.scale.setTo(0.58);
    usb_block.input.enabled=true;
    usb_block.input.enableDrag();
    usb_block.events.onDragStart.add(onDragStart, this);
    usb_block.events.onDragStop.add(onDragStop, this);

    /*var videocard = group.create(1700,70,'videocard');
    videocard.scale.setTo(0.5);
    videocard.input.enabled=true;
    videocard.input.enableDrag();
    videocard.events.onDragStart.add(onDragStart, this);
    videocard.events.onDragStop.add(onDragStop, this);*/

    group.onChildInputDown.add(onDown,this);

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
    if(sprite.x >= 471 && sprite.x <=492 && sprite.y>=226 && sprite.y <=242 && sprite.key === 'processor')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:857 - 860 y:268 - 274
    if(sprite.x >= 993 && sprite.x <=1000 && sprite.y>=311 && sprite.y <=319 && sprite.key ==='power')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 598 && sprite.x <=606 && sprite.y>=732 && sprite.y <=740 && sprite.key ==='battery')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:72 - 75 y:642 - 646
    if(sprite.x >= 83 && sprite.x <=89 && sprite.y>=742 && sprite.y <=749 && sprite.key ==='multicontroller')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:360 - 362  y:851 - 854
    if(sprite.x >= 416 && sprite.x <=421 && sprite.y>=985 && sprite.y <=991 && sprite.key ==='reset_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }
//x:  y:
    if(sprite.x >= 351 && sprite.x <=357 && sprite.y>=983 && sprite.y <=988 && sprite.key ==='start_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }


//x:  y:
    if(sprite.x >= 879 && sprite.x <=886 && sprite.y>=998 && sprite.y <=1006 && sprite.key ==='sata1')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    //x:  y:
    if(sprite.x >= 1003 && sprite.x <=1012 && sprite.y>=723 && sprite.y <=733 && sprite.key ==='sata_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 50 && sprite.x <=56 && sprite.y>=909 && sprite.y <=914 && sprite.key ==='soundboard')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-30,this);
    }

    if(sprite.x >= 9 && sprite.x <=22 && sprite.y>=322 && sprite.y <=329 && sprite.key ==='usb_block')
    {
        //result = 'drag disabled on'+ sprite.key;
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
function randText() {
    var text = ["Consolas!","++","Yes!"];
    return  text[Math.floor(Math.random() * (text.length))]
}

function render() {
    var mousex = game.input.mousePointer.x;
    var mousey = game.input.mousePointer.y;

    game.debug.text(result, 1200, 20);
    game.debug.text(counterTrue,1200,40);
    game.debug.text(counterFalse,1200,60);

    game.debug.text(Height,1300,40);
    game.debug.text(Width,1300,60);

    game.debug.text(mousex,1400,40);
    game.debug.text(mousey,1400,60);
}
