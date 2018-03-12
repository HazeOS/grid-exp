var result = "Drag Something";
var counterTrue = 0;
var counterFalse = 0;
var Height = window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });

function preload() {

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
var scale;
var x;
var y;
if(Width<=812){
    scale = 0.2;
}
//Управление разрешениями
function create () {
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    var motherboard = game.add.sprite(0, 0, 'motherboard');
    motherboard.scale.setTo(0.5);
    game.scale.pageAlignVertically = true;

    var group = game.add.group();
    group.inputEnableChildren = true;


    var processor = group.create(950, 70, 'processor');
    processor.scale.setTo(0.5);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);

    var power = group.create(1200,70,'power');
    power.scale.setTo(0.5);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);

    var battery = group.create(1450,70,'battery');
    battery.scale.setTo(0.5);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);

    var multicontroller = group.create(1300,70,'multicontroller');
    multicontroller.scale.setTo(0.5);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);

    var reset_button = group.create(1400,110,'reset_button');
    reset_button.scale.setTo(0.5);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);

    var start_button = group.create(1400,70,'start_button');
    start_button.scale.setTo(0.5);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);

    var sata1 = group.create(950,300,'sata1');
    sata1.scale.setTo(0.5);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);

    var sata_block = group.create(1050,300,'sata_block');
    sata_block.scale.setTo(0.5);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);

    var soundboard = group.create(1150,300,'soundboard');
    soundboard.scale.setTo(0.5);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);

    var usb_block = group.create(1250,300,'usb_block');
    usb_block.scale.setTo(0.5);
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
function onDragStop(sprite) {

    result = sprite.key + " dropped at x:" + sprite.x + " y: " + sprite.y;
//x:408 - 422 y:201 - 214
    if(sprite.x >= 408 && sprite.x <=422 && sprite.y>=201 && sprite.y <=214 && sprite.key === 'processor')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+140,sprite.y+5,this);
    }
//x:857 - 860 y:268 - 274
    if(sprite.x >= 857 && sprite.x <=860 && sprite.y>=268 && sprite.y <=274 && sprite.key ==='power')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+5,this);
    }

    if(sprite.x >= 516 && sprite.x <=521 && sprite.y>=631 && sprite.y <=639 && sprite.key ==='battery')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+5,this);
    }
//x:72 - 75 y:642 - 646
    if(sprite.x >= 72 && sprite.x <=75 && sprite.y>=642 && sprite.y <=646 && sprite.key ==='multicontroller')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+5,this);
    }
//x:360 - 362  y:851 - 854
    if(sprite.x >= 360 && sprite.x <=362 && sprite.y>=851 && sprite.y <=854 && sprite.key ==='reset_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+5,this);
    }
//x:  y:
    if(sprite.x >= 305 && sprite.x <=308 && sprite.y>=848 && sprite.y <=851 && sprite.key ==='start_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+10,this);
    }


//x:  y:
    if(sprite.x >= 758 && sprite.x <=763 && sprite.y>=861 && sprite.y <=865 && sprite.key ==='sata1')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+10,this);
    }

    //x:  y:
    if(sprite.x >= 867 && sprite.x <=870 && sprite.y>=624 && sprite.y <=631 && sprite.key ==='sata_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+10,this);
    }

    if(sprite.x >= 42 && sprite.x <=46 && sprite.y>=785 && sprite.y <=789 && sprite.key ==='soundboard')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+10,this);
    }

    if(sprite.x >= 4 && sprite.x <=19 && sprite.y>=276 && sprite.y <=285 && sprite.key ==='usb_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(sprite.x+70,sprite.y+10,this);
    }
}

function popup_text(x,y,sprite) {
     new FloatingText(sprite, {
        text: "+1!",
        animation: "explode",
        textOptions: {
            fontSize: 32,
            fill: "#ff18aa"
        },
        x: x,
        y: y,
        timeToLive: 400 // ms
    });
}
function render() {
    game.debug.text(result, 1200, 20);
    game.debug.text(counterTrue,1200,40);
    game.debug.text(counterFalse,1200,60);

    game.debug.text(Height,1300,40);
    game.debug.text(Width,1300,60);
}
