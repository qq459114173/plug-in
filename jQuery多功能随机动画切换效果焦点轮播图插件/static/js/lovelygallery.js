jQuery(document).ready(function () {
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && scripts[i].src.match(/lovelygallery\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#html5zoo-1").html5zoo({
        jsfolder: jsFolder,
        skinsfoldername: "",
        loadimageondemand: false,
        isresponsive: false,
        autoplayvideo: false,
        pauseonmouseover: true,
        addmargin: true,
        randomplay: false,
        slideinterval: 3000,
        enabletouchswipe: true,
        transitiononfirstslide: false,
        loop: 0,
        autoplay: true,
        navpreviewheight: 60,
        timerheight: 2,
        shownumbering: false,
        skin: "Frontpage",
        addgooglefonts: true,
        navshowplaypause: true,
        navshowplayvideo: true,
        navshowplaypausestandalonemarginx: 8,
        navshowplaypausestandalonemarginy: 8,
        navbuttonradius: 0,
        navthumbnavigationarrowimageheight: 32,
        navmarginy: 20,
        showshadow: false,
        navfeaturedarrowimagewidth: 16,
        navpreviewwidth: 120,
        googlefonts: "Inder",
        textpositionmarginright: 24,
        bordercolor: "#ffffff",
        navthumbnavigationarrowimagewidth: 32,
        navthumbtitlehovercss: "text-decoration:underline;",
        navcolor: "#999999",
        arrowwidth: 48,
        texteffecteasing: "easeOutCubic",
        texteffect: "fade",
        navspacing: 12,

        navwidth: 24,
        showribbon: false,
        timeropacity: 0.6,

        navshowplaypausestandalone: false,
        navpreviewbordercolor: "#ffffff",
        ribbonposition: "topleft",

        arrowstyle: "mouseover",
        navthumbtitleheight: 20,
        textpositionmargintop: 24,
        navswitchonmouseover: false,

        arrowtop: 50,
        textstyle: "static",
        playvideoimageheight: 64,
        navfonthighlightcolor: "#666666",
        showbackgroundimage: false,
        navpreviewborder: 4,
        navopacity: 0.8,
        shadowcolor: "#aaaaaa",
        navbuttonshowbgimage: true,


        navdirection: "horizontal",
        navborder: 4,
        bottomshadowimagewidth: 110,
        showtimer: true,
        navradius: 0,
        navshowpreview: true,
        navpreviewarrowheight: 8,
        navmarginx: 16,

        navfeaturedarrowimageheight: 8,
        navstyle: "bullets",
        textpositionmarginleft: 24,


        backgroundimagetop: -10,
        timercolor: "#ffffff",
        numberingformat: "%NUM/%TOTAL ",
        navfontsize: 12,
        navhighlightcolor: "#333333",
        navheight: 24,
        navshowplaypausestandaloneautohide: false,
        navbuttoncolor: "#999999",
        navshowarrow: true,
        navshowfeaturedarrow: false,
        ribbonimagey: 0,
        ribbonimagex: 0,
        navshowplaypausestandaloneposition: "bottomright",
        shadowsize: 5,
        arrowhideonmouseleave: 1000,
        navshowplaypausestandalonewidth: 28,
        navshowplaypausestandaloneheight: 28,
        backgroundimagewidth: 120,
        textautohide: true,
        navthumbtitlewidth: 120,
        navpreviewposition: "top",
        playvideoimagewidth: 64,
        arrowheight: 48,
        arrowmargin: 0,
        texteffectduration: 1000,
        border: 0,
        timerposition: "bottom",
        navfontcolor: "#333333",
        navthumbnavigationstyle: "arrow",
        borderradius: 0,
        navbuttonhighlightcolor: "#333333",
        textpositionstatic: "bottom",
        navthumbstyle: "imageonly",
        navbordercolor: "#ffffff",
        showbottomshadow: true,
        textpositionmarginstatic: 0,
        backgroundimage: "",
        navposition: "bottom",
        navpreviewarrowwidth: 16,
        bottomshadowimagetop: 100,
        textpositiondynamic: "bottomleft",
        navshowbuttons: true,

        textpositionmarginbottom: 24,
        ribbonmarginy: 0,
        ribbonmarginx: 0,
        slide: {
            duration: 1000,
            easing: "easeOutCubic",
            checked: true
        },
        crossfade: {
            duration: 1000,
            easing: "easeOutCubic",
            checked: true
        },
        threedhorizontal: {
            checked: true,
            bgcolor: "#222222",
            perspective: 1000,
            slicecount: 1,
            duration: 1500,
            easing: "easeOutCubic",
            fallback: "slice",
            scatter: 5,
            perspectiveorigin: "bottom"
        },
        slice: {
            duration: 1500,
            easing: "easeOutCubic",
            checked: true,
            effects: "up,down,updown",
            slicecount: 10
        },
        fade: {
            duration: 1000,
            easing: "easeOutCubic",
            checked: true
        },
        blocks: {
            columncount: 5,
            checked: true,
            rowcount: 5,
            effects: "topleft,bottomright,top,bottom,random",
            duration: 1500,
            easing: "easeOutCubic"
        },
        blinds: {
            duration: 2000,
            easing: "easeOutCubic",
            checked: true,
            slicecount: 3
        },
        shuffle: {
            duration: 1500,
            easing: "easeOutCubic",
            columncount: 5,
            checked: true,
            rowcount: 5
        },
        threed: {
            checked: true,
            bgcolor: "#222222",
            perspective: 1000,
            slicecount: 5,
            duration: 1500,
            easing: "easeOutCubic",
            fallback: "slice",
            scatter: 5,
            perspectiveorigin: "right"
        },
        transition: "slide,crossfade,threedhorizontal,slice,fade,blocks,blinds,shuffle,threed"
    });
});