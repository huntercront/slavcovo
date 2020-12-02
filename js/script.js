// WebFontConfig = {
//     google: { families: ['Inter:400,600,700'] }
// };

// (function(d) {
//     var wf = d.createElement('script'),
//         s = d.scripts[0];
//     wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
//     wf.async = true;
//     s.parentNode.insertBefore(wf, s);
// })(document);

// (function(d) {
//     var st = d.createElement('script'),
//         s = d.scripts[0];
//     st.src = '../js/zuck.min.js';
//     st.async = true;
//     s.parentNode.insertBefore(st, s);
// })(document);



var Loader = function() {}
Loader.prototype = {
    require: function(scripts, callback) {
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function(evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function(src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function(e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}

var l = new Loader();
l.require([

        "../js/zuck.min.js",
        "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        "https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU"
    ],
    function() {


        var timestamp = function() {
            var timeIndex = 0;
            var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

            var now = new Date();
            var shift = shifts[timeIndex++] || 0;
            var date = new Date(now - shift * 1000);

            return date.getTime() / 1000;
        };



        var getCurrentSkin = function() {

            var skin = location.href.split('skin=')[1];

            if (!skin) {
                skin = 'Snapgram';
            }

            if (skin.indexOf('#') !== -1) {
                skin = skin.split('#')[0];
            }

            var skins = {
                Snapgram: {
                    avatars: true,
                    list: false,
                    autoFullScreen: false,
                    cubeEffect: true,
                    paginationArrows: false
                },

                VemDeZAP: {
                    avatars: false,
                    list: true,
                    autoFullScreen: false,
                    cubeEffect: false,
                    paginationArrows: true
                },

                FaceSnap: {
                    avatars: true,
                    list: false,
                    autoFullScreen: true,
                    cubeEffect: false,
                    paginationArrows: true
                },

                Snapssenger: {
                    avatars: false,
                    list: false,
                    autoFullScreen: false,
                    cubeEffect: false,
                    paginationArrows: false
                }
            };

            var el = document.querySelectorAll('#skin option');
            var total = el.length;
            for (var i = 0; i < total; i++) {
                var what = skin == el[i].value ? true : false;

                if (what) {
                    el[i].setAttribute('selected', 'selected');

                    header.innerHTML = skin;
                    header.className = skin;
                } else {
                    el[i].removeAttribute('selected');
                }
            }

            return {
                name: skin,
                params: skins[skin]
            };
        };



        var currentSkin = getCurrentSkin();
        var stories = new Zuck('stories', {
            backNative: false,
            previousTap: true,
            skin: currentSkin['name'],
            autoFullScreen: currentSkin['params']['autoFullScreen'],
            paginationArrows: currentSkin['params']['paginationArrows'],
            list: currentSkin['params']['list'],
            cubeEffect: currentSkin['params']['cubeEffect'],
            localStorage: true,
            stories: [
                Zuck.buildTimelineItem(
                    "Flame",
                    "../img/stories/flame/about-flame-prew.jpg",
                    "Зана костра",
                    "",
                    timestamp(), [
                        ["Flame-1", "photo", 4, "../img/stories/flame/about-flame-1.jpg", '', false, false, timestamp()],
                        ["Flame-2", "photo", 4, "../img/stories/flame/about-flame-2.jpg", '', false, false, timestamp()],
                        ["Flame-3", "photo", 4, "../img/stories/flame/about-flame-3.jpg", '', false, false, timestamp()],
                        ["Flame-4", "photo", 4, "../img/stories/flame/about-flame-4.jpg", '', false, false, timestamp()],
                        ["Flame-5", "photo", 4, "../img/stories/flame/about-flame-5.jpg", '', false, false, timestamp()]
                    ]
                ),
                Zuck.buildTimelineItem(
                    "gorillaz",
                    "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
                    "Gorillaz",
                    "",
                    timestamp(), [
                        ["gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()],
                        ["gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()],
                    ]
                ),
                Zuck.buildTimelineItem(
                    "ladygaga",
                    "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
                    "Lady Gaga",
                    "",
                    timestamp(), [
                        ["ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()],
                        ["ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'http://ladygaga.com', false, false, timestamp()],
                    ]
                ),
                Zuck.buildTimelineItem(
                    "starboy",
                    "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
                    "The Weeknd",
                    "",
                    timestamp(), [
                        ["starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp()]
                    ]
                ),
                Zuck.buildTimelineItem(
                    "riversquomo",
                    "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
                    "Rivers Cuomo",
                    "",
                    timestamp(), [
                        ["riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp()]
                    ]
                )
            ]
        });


        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                    center: [57.345559964846025, 37.03712280293274],
                    zoom: 17,
                    controls: ['zoomControl'],
                    behaviors: ['drag']
                }),


                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: '<div class="hint-map">Тверская область, Кашинский г.о. Славково</div>',
                }, {


                    iconLayout: 'default#image',

                    iconImageHref: '../img/map-pin.svg',

                    iconImageSize: [100, 100],
                    iconImageOffset: [-15, -15]
                });

            myMap.geoObjects
                .add(myPlacemark)
                // myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
                // myMap.panes.get('ground').getElement().style.opacity = "0.1";
        });



    });

WebFontConfig = {
    google: { families: ['Inter:400,600,700'] }
};


var header = document.querySelector('.blur')
var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
    if ((document.querySelector('.hero').getBoundingClientRect().top < -100) && (window.matchMedia("(min-width: 1024px)").matches)) {
        header.classList.add('blur-active')
    } else {
        header.classList.remove('blur-active')
    }
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll(".animate");


function scrolling(e) {

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        }
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    return ((top >= 0) && (bottom <= window.innerHeight));
}


var menuButton = document.querySelector('.mobile-icon')
var menuIcon = document.querySelector('.ham');
var mobBlur = document.querySelector('.mob-blur');
var blur = document.querySelector('.blur');
var navOuter = document.querySelector('.nav-outer');
var headerBg = document.querySelector('.header-overlay');


function menuShow() {
    menuIcon.classList.add('active')
    mobBlur.classList.add('blur-active')
    blur.classList.add("menu-open");
    navOuter.classList.add('menu-show');
    headerBg.classList.add('overlay-active')
}

function menuhide() {
    menuIcon.classList.remove('active')
    mobBlur.classList.remove('blur-active')
    blur.classList.remove("menu-open");
    navOuter.classList.remove('menu-show');
    headerBg.classList.remove('overlay-active')
}

menuButton.addEventListener('click', function() {
    console.log('calick')
    if (navOuter.classList.contains('menu-show')) {
        menuhide()
    } else {
        menuShow()
    }
})

headerBg.addEventListener('click', function() {
    console.log(navOuter.classList.contains('menu-show'))
    if (navOuter.classList.contains('menu-show')) {
        menuhide()
    }
})