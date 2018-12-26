$(function(){

    const crs = $("#carousel");
    const kret_diag = $("#kret_diag");
    const xproc = $("#xproc");
    $('.descr').hide();
    xproc.hide();
    kret_diag.hide();

    const data = [
        {
            id: 0,
            'name':"«НПЦ «Сапсан»",
            'logo':"npc-sapsan_sm.jpg"
        },
        {
            id: 1,
            'name':"АО «Автоматика»",
            'logo':"avtomatika_sm.jpg"
        },
        {
            id: 2,
            'name':"АО «Брянский электромеханический завод»",
            'logo':"bryansk_sm.jpg"
        },
        {
            id: 3,
            'name':"ПАО «Брянское специальное конструкторское бюро»",
            'logo':"bskb_sm.jpg"
        },
        {
            id: 4,
            'name':"АО «Всероссийский научно-исследовательский институт «Градиент»",
            'logo':"gradient_sm.jpg"
        },
        {
            id: 5,
            'name':"АО «Научно-производственное объединение «Квант»",
            'logo':"kvant_sm.jpg"
        },
        {
            id: 6,
            'name':"АО «Научно-производственное объединение «Радиоэлектроника» имени В.И.Шимко»",
            'logo':"shimko_sm.jpg"
        },
        {
            id: 7,
            'name':"АО «Радий»",
            'logo':"radii_sm.jpg"
        },
        {
            id: 8,
            'name':"АО «Научно-исследовательский институт авиационного оборудования»",
            'logo':"aviapribor_sm.jpg"
        }
    ];

    function getDataElement(id){
        let found = null;
        data.forEach(el=> {
            if(el['id'] == id) {
                found = el;
            }
        });
        return found;
    };

    crs.Cloud9Carousel({
        buttonLeft: $(".slider-control-left"),
        buttonRight: $(".slider-control-right"),
        yOrigin: 42,
        yRadius: 40,
        itemClass: "card",
        bringToFront: true,
        onLoaded: function () {
            crs.css('visibility', 'visible');
            crs.css('display', 'none');
            crs.fadeIn(1500);
        },
        onRendered: function(){
            $('.descr').hide();
            $('.carousel-big .descr').toggle();
        },
        speed:1,
        frontItemClass: 'carousel-big'
    });

    // buttons
    document.querySelector('#print').addEventListener('click', function () {
        print();
    });

    let on = true;
    document.querySelector("#xproc_btn").addEventListener('click', function () {
        document.querySelector('#info').textContent = '';
        if(on) {
            this.textContent = 'x%';
            kret_diag.hide();
            xproc.show();
            on = false;
        } else {
            this.textContent = '100%';
            kret_diag.show();
            xproc.hide();
            on = true;
        }

        //kret_diag.hide();
        crs.hide();
    });

    document.querySelector("#D3").addEventListener('click', function(){
        document.querySelector('#info').textContent = '';
        crs.toggle();
        //$("#svg_menu").toggle();
        if(on) {
            kret_diag.toggle();
        } else {
            xproc.hide();
        }
    });

    $('#sapsan_diag').click(function(){
        window.location.assign('select.html');
    });

    $('#sapsan_ava').click(function(){
        window.location.assign('select.html');
    });
});
