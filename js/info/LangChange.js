$(document).ready(function () {
    var russian = $('#russian');
    var british = $('#british');

    russian.click(function () {
        //Navbar
        $("#main").text( "Главная");
        $("#game").text( "Игра");
        $("#navbarDropdownMenuLink").text( "Котакты");
        //

        //toc_menu
        $("#proccessor_link").text( "Центральный процессор");
        $("#ram_link").text( "Оперативная память");
        $("#chipset_link").text( "Чипсет");
        $("#graph_processor_link").text( "Графический процессор ");
        $("#motherboard_link").text( "Материнская плата");
        $("#battery_link").text( "CMOS Батарея");
        $("#hdd_link").text( "Жёсткий диск");
        $("#power_link").text( "Блок питания");
        $("#usb_link").text( "USB");
        $("#vga_link").text( "VGA");
        //

        //processor
        $("#processor").text( "Центральный процессор");
        $("#processor_cite").text("С четырьмя параметрами он может описать слона, а с пятым — заставить его махать хоботом.");
        $("#processor_person").text("©Джон Фон Нейман");
        $("#processor_text").text("Процессор - это очень сложная микросхема обрабатывающая машинный код," + "отвечающая за выполнение различных операций и управление компьютерной периферии." + "Интегрируется практически в любой электронной технике: телевизор, видеоплейер, современные кухонные приборы," + "а смартфоны сами по себе являются компьютерами, хоть и отличающимися по конструкции.");
        //

        //ram
        $("#ram").text("Оперативная память");
        $("#ram_cite").text("Меня два раза спрашивали: «Скажите на милость, мистер Бэббидж, что случится, если вы введете в машину неверные цифры? Cможем ли мы получить правильный ответ?» Я не могу себе даже представить какая путаница в голове может привести к подобному вопросу.");
        $("#ram_person").text("©Чарльз Бэббидж");
        $("#ram_text").text("Оперативная память — относительно быстрая энергозависимая память компьютера с произвольным" + "доступом, в которой осуществляются большинство операций обмена данными между устройствами." + "Является энергозависимой, то есть при отключении питания, все данные на ней стираются." + "Оперативная память является хранилищем всех потоков информации, которые необходимо обработать" + "процессору или же они дожидаются в оперативной памяти своей очереди. Все устройства, связывается с" + "оперативной памятью через системную шину, а с ней в свою очередь обмениваются через кэш или же напрямую.");
        //

        //chipset
        $("#chipset").text("Чипсет");
        $("#chipset_cite").text("Это то, что действительно радует в работе с компьютерами. Они не спорят, они все помнят, и они никогда не выпьют все ваше пиво.");
        $("#chipset_person").text("©Пол Лери");
        $("#chipset_text").text("Чипсет – это набор микросхем (расположенных на материнской плате)," + "который связывает память, процессор, видеоадаптер, устройства ввода вывода и другие элементы ПК," + "для выполнения совместных функций. То есть, является очень важным элементом материнской платы. Фактически 90%" + "функциональности материнской платы зависят от выбора чипсета. Чипсет определяет тип процессора, тип памяти, который" + "будет установлен в системе, также чипсетом определяется возможность подключения тех или иных периферийных устройств.");
        //

        //graph
        $("#graph-processor").text("Графический процессор");
        $("#graph_processor_cite").text("Бог придумал устройство, а сатана – драйвера.");
        $("#graph_processor_person").text("©NULL");
        $("#graph_processor_text").text("GPU (Graphics Processing Unit) — это процессор, предназначенный исключительно для" + "операций по обработке графики и вычислений с плавающей точкой. Он в первую очередь существует для того," + "чтобы облегчить работу основного процессора, когда дело касается ресурсоемких игр или приложений с 3D-графикой." + "Когда вы играете в какую-либо игру, GPU отвечает за создание графики, цветов и текстур, в то время как CPU" + "может заняться искусственным интеллектом или расчетами механики игры.");
        //

        //motherboard
        $("#motherboard").text("Материнская плата");
        $("#motherboard_cite").text("Программы без ошибок можно написать двумя способами, но работает - третий.");
        $("#motherboard_person").text("©Алан Дж.Перлис");
        $("#motherboard_text").text("Материнская плата компьютера , или системная плата, основное устройство, определяющее возможности компьютера." +
            "На материнской плате прежде всего размещаются:" +
            "центральный процессор," +
            "оперативная память, сверхоперативное запоминающее устройство (кэш-память)," +
            "постоянное запоминающее устройство с системой BIOS (базовой системой ввода/вывода информации)," +
            "набор управляющих микросхем - чипсет, вспомогательных микросхем и контроллеров ввода/вывода информации," +
            "КМОП-память с данными об аппаратных настройках и аккумулятором для ее питания," +
            "разъемы расширения, или слоты," +
            "разъемы для подключения интерфейсных кабелей жестких дисков, дисководов, последовательного и параллельного портов, инфракрасного порта, а также универсальной последовательной шины USB," +
            " разъемы питания," +
            "преобразователь напряжения для питания процессора," +
            "разъем для подключения клавиатуры.");
        //

        //CMOS battery
        $("#battery").text("CMOS Батарея");
        $("#battery_cite").text("Попытка выявить предприятия, зависящие от высоких технологий, столь же глупая затея," + "как попытка выявить предприятия, зависящие от телефона.");
        $("#battery_person").text("©Алан Купер");
        $("#battery_text").text("«CMOS» — это память, в которой хранятся все настройки и параметры, установленные в BIOS." +
            "Физически, CMOS — это набор микросхем на материнской плате. Однако, память CMOS, в отличие от, например," +
            "памяти жёсткого диска, является энергозависимой. Это означает, что ей постоянно нужен электрический источник" +
            "питания. В противном случае, все параметры установленные в ней сбрасываются (в том числе и системное время" +
            "компьютера). В качестве такого источника питания и выступает небольшая плоская батарейка на материнской плате.");
        //

        //hdd
        $("#hdd").text("Жёсткий диск");
        $("#hdd_cite").text("Один из важнейших уроков, преподанных компьютерной индустрии, заключается в том, что" +
            "для пользователя ценность компьютера определяется преимущественно качеством и многообразием существующих" +
            "программ. Мы все, занятые в этой индустрии, усвоили этот урок. Кто-то учился на чужих ошибках, а кто-то —" +
            "на своих.");
        $("#hdd_person").text("©Билл Гейтс");
        $("#hdd_text").text("Жёсткий диск — накопитель информации основанный на" + "магнитных пластинах и эффекте магнетизма.");
        //

        //power
        $("#power").text("Блок питания");
        $("#power_cite").text("На скорости 1 000 000 операций в секунду результаты больше напоминают магию.");
        $("#power_person").text("©Стив Джобс");
        $("#power_text").text("Блок питания — устройство, предназначенное для формирования напряжения, необходимого системе," + "из напряжения электрической сети. Чаще всего блоки питания преобразуют переменный ток сети 220 В частотой 50 Гц" + "в заданный постоянный ток.");
        //

        //usb
        $("#usb").text("USB");
        $("#usb_cite").text("Два самых известных продукта, созданных в Университете Беркли — это UNIX и LSD. Это не может быть просто совпадением.");
        $("#usb_person").text("©Джереми  С.Андерсон");
        $("#usb_text").text("USB – универсальный интерфейс для связи различных цифровых электронных устройств между собой." + "Аббревиатура USB расшифровывается как — UNIVERSAL SERIAL BUS, что в переводе означает - универсальная" + "последовательная шина. Первая версия USB появилась в 1996 году.");
        //

        //vga
        $("#vga").text("VGA");
        $("#vga_cite").text("640 Кб должно хватить для любых задач.");
        $("#vga_person").text("©Билл Гейтс, 1981г.");
        $("#vga_text").text("VGA - Первый стандарт подключения, используемый и посей день, был разработан в 1987 году" + "ведущим в то время производителем компьютеров IBM для своих ПК серии PS/2." + "VGA - сокращенное Video Graphics Array (массив пикселов), в свое время именно так называлась видеоплата в" + "компьютерах PS/2, разрешение которой составляло 640x480, часто встречающееся в технической литературе сочетание «VGA-разрешение» означает именно эту величину.");
        //
    });

    british.click(function () {
        //Navbar
        $("#main").text( "Main Page");
        $("#game").text( "Game");
        $("#navbarDropdownMenuLink").text( "Contacts");
        //

        //toc_menu
        $("#proccessor_link").text( "Central Processor");
        $("#ram_link").text( "RAM");
        $("#chipset_link").text( "Chipset");
        $("#graph_processor_link").text( "Graphic Processor");
        $("#motherboard_link").text( "Motherboard");
        $("#battery_link").text( "CMOS Battery");
        $("#hdd_link").text( "HDD");
        $("#power_link").text( "Power Supply");
        $("#usb_link").text( "USB");
        $("#vga_link").text( "VGA");
        //

        //processor
        $("#processor").text( "Central Processor");
        $("#processor_cite").text("With four parameters, he can describe an elephant, and with the fifth, he can make him wiggle with a trunk.");
        $("#processor_person").text("©John von Neumann");
        $("#processor_text").text("The processor is a very complex chip that processes the machine code,responsible for performing various operations and managing computer peripherals.Integrates in virtually any electronic technology: TV, video player, modern kitchen appliances,and smartphones.");
        //

        //ram
        $("#ram").text("RAM");
        $("#ram_cite").text("I was asked twice:" +
            "Tell me, Mr. Babbage, what will happen if you enter the wrong numbers in the machine? Can we get the right answer? " +
            "I can not imagine what confusion in head can lead to such a question");
        $("#ram_person").text("©Charles Babbage");
        $("#ram_text").text("RAM is a relatively fast, volatile random access memory, in which most of the data exchange operations between devices are performed. It is volatile, that is, when the power is turned off, all data on it is erased. RAM is the storehouse of all information flows that need to be processed by the processor or they wait in the memory of their queue. All devices are connected to RAM through the system bus, and with it in turn are exchanged through the cache or directly.");
        //

        //chipset
        $("#chipset").text("Chipset");
        $("#chipset_cite").text("This is something that really pleases in working with computers. They do not argue, they remember all, and they will never drink all your beer.");
        $("#chipset_person").text("©Paul Leary");
        $("#chipset_text").text("A chipset is a bunch of microchips (located on the motherboard) that connects memory, processor, video adapter, input devices and other PC elements to perform joint functions. It is a very important element of the motherboard. In fact, 90% of the functionality of the motherboard depends on the choice of chipset. The chipset determines the type of processor, the type of memory that will be installed in the system, and the possibility of connecting certain peripherals is also determined by the chipset.");
        //

        //graph
        $("#graph-processor").text("Graphic Processor");
        $("#graph_processor_cite").text("God invented the device, and Satan invented the driver.");
        $("#graph_processor_person").text("©NULL");
        $("#graph_processor_text").text("GPU (Graphics Processing Unit) is a processor designed exclusively for graphics processing and floating point calculations. It primarily exists in order to facilitate the work of the main processor, when it comes to resource-intensive games or applications with 3D graphics. When you play a game, the GPU is responsible for creating graphics, colors and textures, while the CPU can do artificial intelligence or calculate the mechanics of the game.");
        //

        //motherboard
        $("#motherboard").text("Motherboard ");
        $("#motherboard_cite").text("Programs without errors can be written in two ways, but works - the third.");
        $("#motherboard_person").text("©Alan Jay Perlis");
        $("#motherboard_text").text("The motherboard of the computer, or the motherboard, is the main device that determines the capabilities of the computer. The motherboard primarily contains: a central processor, RAM, a cache memory, a read-only memory with a BIOS (basic information input / output system), a set of control chips - a chipset, auxiliary chips and I/O controllers information, CMOS memory with data about hardware settings and battery for its power supply, expansion connectors, or slots, connectors for connecting hard disk drives, disk drives, serial second and parallel port, infrared port, USB, power connectors, power converter for processor power, connector for the keyboard.");
        //

        //CMOS battery
        $("#battery").text("CMOS Battery");
        $("#battery_cite").text("An attempt to identify enterprises that depend on high technology is just as foolish an undertaking as an attempt to identify enterprises that depend on the phone.");
        $("#battery_person").text("©Alan Cooper");
        $("#battery_text").text("CMOS is a memory in which all the settings and parameters set in the BIOS are stored. Physically, CMOS is a chipset on the motherboard. However, CMOS memory, unlike, for example, hard disk memory, is volatile. This means that she constantly needs an electrical power source. Otherwise, all the parameters set in it are reset (including the system time of the computer). As such a power source and serves a small flat battery on the motherboard.");
        //

        //hdd
        $("#hdd").text("HDD");
        $("#hdd_cite").text("One of the most important lessons taught in the computer industry is that for a user the value of a computer is determined primarily by the quality and variety of existing programs. We all who are engaged in this industry have learned this lesson. Someone learned from other people's mistakes, and someone - on their own.");
        $("#hdd_person").text("©Bill Gates");
        $("#hdd_text").text("A hard disk is a drive of information based on magnetic plates and the effect of magnetism.");
        //

        //power
        $("#power").text("Power");
        $("#power_cite").text("At a speed of 1,000,000 operations per second, the results are more like magic.");
        $("#power_person").text("©Steve Jobs");
        $("#power_text").text("The power supply is a device designed to generate the voltage required by the system from the mains voltage. Most often, power supplies convert an alternating current of 220 V with a frequency of 50 Hz into a predetermined direct current.");
        //

        //usb
        $("#usb").text("USB");
        $("#usb_cite").text("The two most famous products created at the University of Berkeley are UNIX and LSD. It can not just be a coincidence.");
        $("#usb_person").text("©Jeremy S.Anderson");
        $("#usb_text").text("USB is a universal interface for connecting various digital electronic devices to each other. The abbreviation USB stands for - UNIVERSAL SERIAL BUS. The first version of USB appeared in 1996.");
        //

        //vga
        $("#vga").text("VGA");
        $("#vga_cite").text("640 KB should be enough for any tasks.");
        $("#vga_person").text("©Bill Gates, 1981");
        $("#vga_text").text("VGA - The first connection standard, used and sowing day, was developed in 1987 by the then-leading computer manufacturer IBM for its PC series PS / 2. VGA - a shortened Video Graphics Array (an array of pixels), at one time that was the name of the video card in PS / 2 computers, the resolution of which was 640x480, often the combination of VGA resolution in technical literature means exactly this value.");
        //
    });
});