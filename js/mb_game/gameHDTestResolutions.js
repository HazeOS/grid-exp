

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
   game.load.spritesheet('rus','./resources/info/russia.png');
   game.load.spritesheet('eng','./resources/info/united-kingdom.png');

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

var result = "Drag Something";
var placeholderRUS = "Ваше имя";
var placeholderENG = "Your name";

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
var restart_button;

var rus;
var eng;

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

//resolutions_coordinates_data_objects
var details_scale;
var procX,procY;
var powX,powY;
var batX,batY;
var multiX,multiY;
var resX, resY;
var startX,startY;
var sataX,sataY;
var sata_bX, sata_bY;
var soundX, soundY;
var usbX,usbY;

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

var rusX, rusY;
var engX, engY;

//tolerance
var miss_radius;

var proc_tolX,proc_tolXX, proc_tolY, proc_tolYY , proc_idealX, proc_idealY;
var pow_tolX, pow_tolXX, pow_tolY, pow_tolYY , pow_idealX, pow_idealY;
var bat_tolX, bat_tolXX, bat_tolY, bat_tolYY, bat_idealX, bat_idealY;
var multi_tolX, multi_tolXX, multi_tolY, multi_tolYY, multi_idealX, multi_idealY;
var res_tolX, res_tolXX, res_tolY, res_tolYY, res_idealX, res_idealY;
var start_tolX, start_tolXX, start_tolY, start_tolYY, start_idealX, start_idealY;
var sata_tolX, sata_tolXX, sata_tolY, sata_tolYY, sata_idealX, sata_idealY;
var sata_b_tolX, sata_b_tolXX, sata_b_tolY, sata_b_tolYY, sata_b_idealX, sata_b_idealY;
var sound_tolX, sound_tolXX, sound_tolY, sound_tolYY, sound_idealX, sound_idealY;
var usb_tolX, usb_tolXX, usb_tolY, usb_tolYY, usb_idealX, usb_idealY;


function create () {

//Resolution Controls
    if(Width>=1000 && Width<=1024 && Height>=768 && Height<=1024)
    {
        details_scale = 0.375;
        procX = 700; procY = 70;
        powX = 870; powY = 70;
        batX = 910; batY = 70;
        multiX = 930; multiY = 235;
        resX = 927; resY = 165;
        startX = 923; startY = 130;
        sataX = 927; sataY = 195;
        sata_bX = 700; sata_bY = 235;
        soundX = 765; soundY = 235;
        usbX = 835; usbY = 235;

        textX = 735;textY = 10;
        timeTextX = 770;timeTextY = 480;
        clockX = 770;clockY = 525;
        scoreX = 735;scoreY = 370;
        true_countX = 720; true_countY = 410;
        false_countX = 870; false_countY = 410;
        rightX = 720; rightY = 440;
        wrongX = 870;wrongY = 440;

        proc_tolX = 272;proc_tolXX = 404; proc_tolY = 133; proc_tolYY = 211; proc_idealX = 313;proc_idealY = 152;
        pow_tolX = 630;pow_tolXX = 662; pow_tolY = 177; pow_tolYY = 268; pow_idealX = 645;pow_idealY = 204;
        bat_tolX = 369;bat_tolXX = 404; bat_tolY = 454; bat_tolYY = 500; bat_idealX = 389;bat_idealY = 478;
        multi_tolX = 40;multi_tolXX = 80; multi_tolY = 462; multi_tolYY = 561; multi_idealX = 55;multi_idealY = 482;
        res_tolX = 262;res_tolXX = 280; res_tolY = 630; res_tolYY = 650; res_idealX = 270;res_idealY = 640;
        start_tolX = 217;start_tolXX = 240; start_tolY = 622; start_tolYY = 651; start_idealX = 230;start_idealY = 639;
        sata_tolX = 549;sata_tolXX = 589; sata_tolY = 637; sata_tolYY = 655; sata_idealX = 570;sata_idealY = 648;
        sata_b_tolX = 630;sata_b_tolXX = 672; sata_b_tolY = 443; sata_b_tolYY = 517; sata_b_idealX = 653;sata_b_idealY = 470;
        sound_tolX = 13;sound_tolXX = 63; sound_tolY = 572; sound_tolYY = 615; sound_idealX = 34;sound_idealY = 591;
        usb_tolX = 0;usb_tolXX = 40; usb_tolY = 191; usb_tolYY = 229; usb_idealX = 12;usb_idealY = 210;

        miss_radius = 694;

        button_pauseX = 950; button_pauseY = 690;
        button_resumeX = 875; button_resumeY = 690;

        rusX = 930; rusY = 20;
        engX = 970; engY = 20;
    }
    if(Width>=1025 && Width<=1366 && Height>=768 && Height<=1024)
        {
            details_scale = 0.429;
            procX = 800; procY = 70;
            powX = 1015; powY = 70;
            batX = 1060; batY = 70;
            multiX = 1045; multiY = 285;
            resX = 1080; resY = 185;
            startX = 1075; startY = 145;
            sataX = 1070; sataY = 225;
            sata_bX = 800; sata_bY = 285;
            soundX = 865; soundY = 285;
            usbX = 935; usbY = 285;

            textX = 905;textY = 10;
            timeTextX = 840;timeTextY = 600;
            clockX = 840;clockY = 650;
            scoreX = 840;scoreY = 470;
            true_countX = 840; true_countY = 520;
            false_countX = 1020; false_countY = 520;
            rightX = 840; rightY = 550;
            wrongX = 1020;wrongY = 550;

            proc_tolX = 303;proc_tolXX = 412; proc_tolY = 137; proc_tolYY = 207; proc_idealX = 354;proc_idealY = 174;
            pow_tolX = 718;pow_tolXX = 754; pow_tolY = 203; pow_tolYY = 257; pow_idealX = 738;pow_idealY = 232;
            bat_tolX = 430;bat_tolXX = 460; bat_tolY = 530; bat_tolYY = 565; bat_idealX = 445;bat_idealY = 544;
            multi_tolX = 49;multi_tolXX = 82; multi_tolY = 530; multi_tolYY = 569; multi_idealX = 63;multi_idealY = 552;
            res_tolX = 299;res_tolXX = 319; res_tolY = 719; res_tolYY = 739; res_idealX = 310;res_idealY = 731;
            start_tolX = 246;start_tolXX = 277; start_tolY = 717; start_tolYY = 742; start_idealX = 263;start_idealY = 730;
            sata_tolX = 628;sata_tolXX = 676; sata_tolY = 729; sata_tolYY = 755; sata_idealX = 652;sata_idealY = 741;
            sata_b_tolX = 727;sata_b_tolXX = 764; sata_b_tolY = 516; sata_b_tolYY = 559; sata_b_idealX = 746;sata_b_idealY = 539;
            sound_tolX = 24;sound_tolXX = 63; sound_tolY = 644; sound_tolYY = 694; sound_idealX = 39;sound_idealY = 676;
            usb_tolX = 0;usb_tolXX = 56; usb_tolY = 221; usb_tolYY = 256; usb_idealX = 14;usb_idealY = 242;

            miss_radius = 768;

            button_pauseX = 1125; button_pauseY = 690;
            button_resumeX = 1050; button_resumeY = 690;

            rusX = 1100; rusY = 20;
            engX = 1140; engY = 20;
        }

    if(Width>=1367 && Width<=1599 && Height>=768 && Height<=1000)
        {
            details_scale = 0.429;
            procX = 925; procY = 70;
            powX = 1115; powY = 70;
            batX = 1160; batY = 70;
            multiX = 1170; multiY = 285;
            resX = 1180; resY = 185;
            startX = 1175; startY = 145;
            sataX = 1170; sataY = 225;
            sata_bX = 925; sata_bY = 285;
            soundX = 990; soundY = 285;
            usbX = 1060; usbY = 285;

            textX = 1025;textY = 10;
            timeTextX = 955;timeTextY = 575;
            clockX = 955;clockY = 620;
            scoreX = 955;scoreY = 470;
            true_countX = 955; true_countY = 520;
            false_countX = 1150; false_countY = 520;
            rightX = 955; rightY = 550;
            wrongX = 1150;wrongY = 550;

            proc_tolX = 303;proc_tolXX = 412; proc_tolY = 137; proc_tolYY = 207; proc_idealX = 354;proc_idealY = 174;
            pow_tolX = 718;pow_tolXX = 754; pow_tolY = 203; pow_tolYY = 257; pow_idealX = 738;pow_idealY = 232;
            bat_tolX = 430;bat_tolXX = 460; bat_tolY = 530; bat_tolYY = 565; bat_idealX = 445;bat_idealY = 544;
            multi_tolX = 49;multi_tolXX = 82; multi_tolY = 530; multi_tolYY = 569; multi_idealX = 63;multi_idealY = 552;
            res_tolX = 299;res_tolXX = 319; res_tolY = 719; res_tolYY = 739; res_idealX = 310;res_idealY = 731;
            start_tolX = 246;start_tolXX = 277; start_tolY = 717; start_tolYY = 742; start_idealX = 263;start_idealY = 730;
            sata_tolX = 628;sata_tolXX = 676; sata_tolY = 729; sata_tolYY = 755; sata_idealX = 652;sata_idealY = 741;
            sata_b_tolX = 727;sata_b_tolXX = 764; sata_b_tolY = 516; sata_b_tolYY = 559; sata_b_idealX = 746;sata_b_idealY = 539;
            sound_tolX = 24;sound_tolXX = 63; sound_tolY = 644; sound_tolYY = 694; sound_idealX = 39;sound_idealY = 676;
            usb_tolX = 0;usb_tolXX = 56; usb_tolY = 221; usb_tolYY = 256; usb_idealX = 14;usb_idealY = 242;

            miss_radius = 768;

            button_pauseX = 1125; button_pauseY = 690;
            button_resumeX = 1050; button_resumeY = 690;

            rusX = 1220; rusY = 20;
            engX = 1260; engY = 20;
        }

    if(Width>=1600 && Width<=2560 && Height>=1001 && Height<=1200)
        {
            details_scale = 0.58;
            procX = 1090; procY = 70;
            powX = 1350; powY = 70;
            batX = 1400; batY = 70;
            multiX = 1500; multiY = 70;
            resX = 1420; resY = 200;
            startX = 1415; startY = 155;
            sataX = 1100; sataY = 350;
            sata_bX = 1200; sata_bY = 350;
            soundX = 1300; soundY = 350;
            usbX = 1400; usbY = 350;

            textX = 1250;textY = 10;
            timeTextX = 1600;timeTextY = 140;
            clockX = 1600;clockY = 200;
            scoreX = 1600;scoreY = 10;
            true_countX = 1600; true_countY = 60;
            false_countX = 1780; false_countY = 60;
            rightX = 1600; rightY = 100;
            wrongX = 1780;wrongY = 100;

            proc_tolX = 420;proc_tolXX = 510; proc_tolY = 190; proc_tolYY = 260; proc_idealX = 480;proc_idealY = 235;
            pow_tolX = 987;pow_tolXX = 1008; pow_tolY = 295; pow_tolYY = 334; pow_idealX = 997;pow_idealY = 312;
            bat_tolX = 584;bat_tolXX = 621; bat_tolY = 710; bat_tolYY = 750; bat_idealX = 602;bat_idealY = 737;
            multi_tolX = 74;multi_tolXX = 101; multi_tolY = 726; multi_tolYY = 760; multi_idealX = 85;multi_idealY = 746;
            res_tolX = 410;res_tolXX = 427; res_tolY = 976; res_tolYY = 999; res_idealX = 418;res_idealY = 988;
            start_tolX = 345;start_tolXX = 369; start_tolY = 972; start_tolYY = 999; start_idealX = 355;start_idealY = 986;
            sata_tolX = 868;sata_tolXX = 904; sata_tolY = 989; sata_tolYY = 1014; sata_idealX = 882;sata_idealY = 1003;
            sata_b_tolX = 993;sata_b_tolXX = 1022; sata_b_tolY = 703; sata_b_tolYY = 769; sata_b_idealX = 1009;sata_b_idealY = 729;
            sound_tolX = 37;sound_tolXX = 73; sound_tolY = 891; sound_tolYY = 935; sound_idealX = 53;sound_idealY = 912;
            usb_tolX = 0;usb_tolXX = 67; usb_tolY = 307; usb_tolYY = 341; usb_idealX = 16;usb_idealY = 326;

            miss_radius = 1073;

            button_pauseX = 1840; button_pauseY = 960;
            button_resumeX = 1765; button_resumeY = 960;

            rusX = 1800; rusY = 150;
            engX = 1840; engY = 150;
        }

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.tileSprite(0, 0, Width, Height, 'background');
    background.alpha = 1;
    background.scale.scaleMode  = Phaser.ScaleManager.EXACT_FIT;

//TEXT
    text = game.add.text(textX,textY,"Детали",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    timeText = game.add.text(timeTextX,timeTextY,"Таймер",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    clock = game.add.text(clockX,clockY,minutes+seconds,
        {font: "bold 24px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    score = game.add.text(scoreX,scoreY,"Результат",
        {font: "bold 48px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    true_count = game.add.text(true_countX,true_countY,"Верно",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    right = game.add.text(rightX,rightY,counterTrue,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    false_count = game.add.text(false_countX,false_countY,"Неверно",
        {font: "bold 32px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    wrong = game.add.text(wrongX,wrongY,counterFalse,
        {font: "bold 28px Consolas", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});

    win = game.add.text(game.world.centerX,Height+200,"Вы победили!",
        {font: "bold 128px Consolas", fill: "#fff", align:"center",boundsAlignH: "center", boundsAlignV: "middle"});
    win.anchor.setTo(0.45,0.5);

    lose = game.add.text(game.world.centerX,Height-2000,"Вы проиграли",
        {font: "bold 128px Consolas", fill: "#fff", align:"center",boundsAlignH: "center", boundsAlignV: "middle"});
    lose.anchor.setTo(0.45,0.5);


//TEXT

//TIME
    timer = game.time.create();
    timerEvent = timer.add(Phaser.Timer.MINUTE * 1 + Phaser.Timer.SECOND * 40, endTimer, this);
    timer.start();
//TIME

    motherboard = game.add.sprite(0, 0, 'motherboard');
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

    battery = group.create(batX,batY,'battery');
    battery.scale.setTo(details_scale);
    battery.input.enabled=true;
    battery.input.enableDrag();
    battery.events.onDragStart.add(onDragStart, this);
    battery.events.onDragStop.add(onDragStop, this);
    battery.events.onDragStop.add(mistakeCounter, this);

    multicontroller = group.create(multiX,multiY,'multicontroller');
    multicontroller.scale.setTo(details_scale);
    multicontroller.input.enabled=true;
    multicontroller.input.enableDrag();
    multicontroller.events.onDragStart.add(onDragStart, this);
    multicontroller.events.onDragStop.add(onDragStop, this);
    multicontroller.events.onDragStop.add(mistakeCounter, this);

    reset_button = group.create(resX,resY,'reset_button');
    reset_button.scale.setTo(details_scale);
    reset_button.input.enabled=true;
    reset_button.input.enableDrag();
    reset_button.events.onDragStart.add(onDragStart, this);
    reset_button.events.onDragStop.add(onDragStop, this);
    reset_button.events.onDragStop.add(mistakeCounter, this);

    start_button = group.create(startX,startY,'start_button');
    start_button.scale.setTo(details_scale);
    start_button.input.enabled=true;
    start_button.input.enableDrag();
    start_button.events.onDragStart.add(onDragStart, this);
    start_button.events.onDragStop.add(onDragStop, this);
    start_button.events.onDragStop.add(mistakeCounter, this);

    sata1 = group.create(sataX,sataY,'sata1');
    sata1.scale.setTo(details_scale);
    sata1.input.enabled=true;
    sata1.input.enableDrag();
    sata1.events.onDragStart.add(onDragStart, this);
    sata1.events.onDragStop.add(onDragStop, this);
    sata1.events.onDragStop.add(mistakeCounter, this);

    sata_block = group.create(sata_bX,sata_bY,'sata_block');
    sata_block.scale.setTo(details_scale);
    sata_block.input.enabled=true;
    sata_block.input.enableDrag();
    sata_block.events.onDragStart.add(onDragStart, this);
    sata_block.events.onDragStop.add(onDragStop, this);
    sata_block.events.onDragStop.add(mistakeCounter, this);

    soundboard = group.create(soundX,soundY,'soundboard');
    soundboard.scale.setTo(details_scale);
    soundboard.input.enabled=true;
    soundboard.input.enableDrag();
    soundboard.events.onDragStart.add(onDragStart, this);
    soundboard.events.onDragStop.add(onDragStop, this);
    soundboard.events.onDragStop.add(mistakeCounter, this);

    usb_block = group.create(usbX,usbY,'usb_block');
    usb_block.scale.setTo(details_scale);
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

    button_pause = game.add.button(button_pauseX,button_pauseY, 'pause', pause, this);
    button_pause.inputEnabled = true;
    button_pause.events.onInputUp.add(create_resume_button, this);
    button_pause.scale.setTo(1);

    rus = game.add.button(rusX,rusY, 'rus', switchRUS, this);
    rus.inputEnabled = true;
    rus.scale.setTo(1);

    eng = game.add.button(engX,engY, 'eng', switchENG, this);
    eng.inputEnabled = true;
    eng.scale.setTo(1);

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
        placeHolder: placeholderRUS
    });

}

function render() {
/*
    var mousex = game.input.mousePointer.x;
    var mousey = game.input.mousePointer.y;

    right.setText(counterTrue);
    wrong.setText(counterFalse);*/

    if (timer.running) {
        clock.setText(formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)));
    }
/*
    game.debug.text(result, 100, 700);
    game.debug.text(counterTrue, 100, 740);
    game.debug.text(counterFalse, 100, 760);

    game.debug.text(Height, 400, 680);
    game.debug.text(Width, 400, 700);

    game.debug.text(mousex, 600, 700);
    game.debug.text(mousey, 600, 740);*/


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

    if (sprite.x >= bat_tolX && sprite.x <= bat_tolXX && sprite.y >= bat_tolY && sprite.y <= bat_tolYY && sprite.key === 'battery') {
        sprite.x = bat_idealX;
        sprite.y = bat_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= multi_tolX && sprite.x <= multi_tolXX && sprite.y >= multi_tolY && sprite.y <= multi_tolYY && sprite.key === 'multicontroller') {
        sprite.x = multi_idealX;
        sprite.y = multi_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= res_tolX && sprite.x <= res_tolXX && sprite.y >= res_tolY && sprite.y <= res_tolYY && sprite.key === 'reset_button') {
        sprite.x = res_idealX;
        sprite.y = res_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= start_tolX && sprite.x <= start_tolXX && sprite.y >= start_tolY && sprite.y <= start_tolYY && sprite.key === 'start_button') {
        sprite.x = start_idealX;
        sprite.y = start_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= sata_tolX && sprite.x <= sata_tolXX && sprite.y >= sata_tolY && sprite.y <= sata_tolYY && sprite.key === 'sata1') {
        sprite.x = sata_idealX;
        sprite.y = sata_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= sata_b_tolX && sprite.x <= sata_b_tolXX && sprite.y >= sata_b_tolY && sprite.y <= sata_b_tolYY && sprite.key === 'sata_block') {
        sprite.x = sata_b_idealX;
        sprite.y = sata_b_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= sound_tolX && sprite.x <= sound_tolXX && sprite.y >= sound_tolY && sprite.y <= sound_tolYY && sprite.key === 'soundboard') {
        sprite.x = sound_idealX;
        sprite.y = sound_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if (sprite.x >= usb_tolX && sprite.x <= usb_tolXX && sprite.y >= usb_tolY && sprite.y <= usb_tolYY && sprite.key === 'usb_block') {
        sprite.x = usb_idealX;
        sprite.y = usb_idealY;
        counterTrue++;
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
        popup_text(pointer.x, pointer.y - 30, this);
    }

    if(counterTrue===10){
        timer.stop();
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
    button_resume = game.add.button(button_resumeX,button_resumeY, 'play', resume, this);
    button_resume.inputEnabled = true;
}

//MISTAKES
function mistakeCounter(sprite,pointer) {
    if(sprite.x !== proc_idealX && sprite.y !== proc_idealY && sprite.x < miss_radius && sprite.key === 'processor' ) {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== pow_idealX && sprite.y !== pow_idealY && sprite.x < miss_radius && sprite.key === 'power') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== bat_idealX && sprite.y !== bat_idealY && sprite.x < miss_radius && sprite.key === 'battery') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== multi_idealX && sprite.y !== multi_idealY && sprite.x < miss_radius && sprite.key === 'multicontroller') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== res_idealX && sprite.y !== res_idealY && sprite.x < miss_radius && sprite.key === 'reset_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== start_idealX && sprite.y !== start_idealY && sprite.x < miss_radius && sprite.key === 'start_button') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== sata_idealX && sprite.y !== sata_idealY && sprite.x < miss_radius && sprite.key === 'sata1') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== sata_b_idealX && sprite.y !== sata_b_idealY && sprite.x < miss_radius && sprite.key === 'sata_block') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== sound_idealX && sprite.y !== sound_idealY && sprite.x < miss_radius && sprite.key === 'soundboard') {
        popup_text_miss(pointer.x, pointer.y - 50, this);
        counterFalse++;
    }

    if(sprite.x !== usb_idealX && sprite.y !== usb_idealY && sprite.x < miss_radius && sprite.key === 'usb_block') {
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

function switchRUS() {
    text.text = "Детали";
    score.text = "Результат";
    timeText.text = "Таймер";
    true_count.text = "Верно";
    false_count.text = "Неверно";
    win.text = "Вы победили!";
    lose.text = "Вы проиграли";
    inputDB.placeHolder.text = placeholderRUS;
}
function switchENG() {
    text.text = "Details";
    score.text = "Score";
    timeText.text = "Timer";
    true_count.text = "True";
    false_count.text = "False";
    win.text = "You win!";
    lose.text = "You lose";
    inputDB.placeHolder.text = placeholderENG;
}