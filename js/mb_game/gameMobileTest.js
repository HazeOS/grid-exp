var result = "Drag Something";
var counterTrue = 0;
var counterFalse = 0;
var Height =window.screen.availHeight;
var Width = window.screen.availWidth;

var game = new Phaser.Game(Width, Height, Phaser.AUTO, 'phaser-example',
    { preload: preload, create: create, render: render });

function preload() {
   game.load.image('background','./resources/background2.jpg');
   game.load.image('motherboard','./resources/Mobile/mobileMother.png');
   game.load.image('processor','./resources/Mobile/mobileIntel.png');
   game.load.image('power', './resources/Mobile/mobilePower.png');
   game.load.image('battery','./resources/Mobile/mobileBattery.png');
   game.load.image('multicontroller', './resources/Mobile/mobileMultiController.png');
   game.load.image('ram','./resources/RAM.png');//change (bad texture)
   game.load.image('reset_button','./resources/Mobile/mobileReset.png');
   game.load.image('sata1','./resources/Mobile/mobileSATA.png');
   game.load.image('sata_block','./resources/Mobile/mobileSATAblock.png');
   game.load.image('soundboard','./resources/Mobile/mobileSoundboard.png');
   game.load.image('start_button','./resources/Mobile/mobileStart.png');
   game.load.image('usb_block','./resources/Mobile/mobileUSBblock.png');
   //game.load.image('videocard','./resources/Mobile/videocard.png');// not used

}

//Управление разрешениями
function create () {
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    game.add.tileSprite(0, 0, Width, Height, 'background');

    var motherboard = game.add.sprite(0, 0, 'motherboard');
    motherboard.scale.setTo(0.85);
    game.scale.pageAlignVertically = true;

    var group = game.add.group();
    group.inputEnableChildren = true;


    var processor = group.create(320, 10, 'processor');
    processor.scale.setTo(0.85);
    processor.inputEnabled = true;
    processor.input.enableDrag();
    processor.events.onDragStart.add(onDragStart, this);
    processor.events.onDragStop.add(onDragStop, this);

    var power = group.create(410,10,'power');
    power.scale.setTo(0.85);
    power.input.enabled=true;
    power.input.enableDrag();
    power.events.onDragStart.add(onDragStart, this);
    power.events.onDragStop.add(onDragStop, this);

    var battery = group.create(450,10,'battery');
    battery.scale.setTo(0.85);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);

    var multicontroller = group.create(480,10,'multicontroller');
    multicontroller.scale.setTo(0.85);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);

    var reset_button = group.create(455,40,'reset_button');
    reset_button.scale.setTo(0.85);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);

    var start_button = group.create(455,60,'start_button');
    start_button.scale.setTo(0.85);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);

    var sata1 = group.create(480,50,'sata1');
    sata1.scale.setTo(1);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);

    var sata_block = group.create(320,110,'sata_block');
    sata_block.scale.setTo(0.85);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);

    var soundboard = group.create(350,110,'soundboard');
    soundboard.scale.setTo(0.85);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);

    var usb_block = group.create(380,110,'usb_block');
    usb_block.scale.setTo(0.85);
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
    if(sprite.x >= 133 && sprite.x <=141 && sprite.y>=71 && sprite.y <=76 && sprite.key === 'processor')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }
//x:857 - 860 y:268 - 274
    if(sprite.x >= 857 && sprite.x <=860 && sprite.y>=268 && sprite.y <=274 && sprite.key ==='power')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }

    if(sprite.x >= 516 && sprite.x <=521 && sprite.y>=631 && sprite.y <=639 && sprite.key ==='battery')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }
//x:72 - 75 y:642 - 646
    if(sprite.x >= 72 && sprite.x <=75 && sprite.y>=642 && sprite.y <=646 && sprite.key ==='multicontroller')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }
//x:360 - 362  y:851 - 854
    if(sprite.x >= 360 && sprite.x <=362 && sprite.y>=851 && sprite.y <=854 && sprite.key ==='reset_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }
//x:  y:
    if(sprite.x >= 305 && sprite.x <=308 && sprite.y>=848 && sprite.y <=851 && sprite.key ==='start_button')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }


//x:  y:
    if(sprite.x >= 758 && sprite.x <=763 && sprite.y>=861 && sprite.y <=865 && sprite.key ==='sata1')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }

    //x:  y:
    if(sprite.x >= 867 && sprite.x <=870 && sprite.y>=624 && sprite.y <=631 && sprite.key ==='sata_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }

    if(sprite.x >= 42 && sprite.x <=46 && sprite.y>=785 && sprite.y <=789 && sprite.key ==='soundboard')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
    }

    if(sprite.x >= 4 && sprite.x <=19 && sprite.y>=276 && sprite.y <=285 && sprite.key ==='usb_block')
    {
        //result = 'drag disabled on'+ sprite.key;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x,pointer.y-10,this);
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
    game.debug.text(result, 320, 300);
    game.debug.text(counterTrue,320,340);
    game.debug.text(counterFalse,320,360);

    game.debug.text(Height,350,340);
    game.debug.text(Width,350,360);
}
