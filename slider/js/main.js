$(function(){

    const crs = $("#carousel");

    const data = [
        {
            'name':"«НПЦ «Сапсан»",
            'logo':"npc-sapsan_sm.jpg"
        },
        {
            'name':"АО «Автоматика»",
            'logo':"avtomatika_sm.jpg"
        },
        {
            'name':"АО «Брянский электромеханический завод»",
            'logo':"bryansk_sm.jpg"
        },
        {
            'name':"ПАО «Брянское специальное конструкторское бюро»",
            'logo':"bskb_sm.jpg"
        },
        {
            'name':"АО «Всероссийский научно-исследовательский институт «Градиент»",
            'logo':"gradient_sm.jpg"
        },
        {
            'name':"АО «Научно-производственное объединение «Квант»",
            'logo':"kvant_sm.jpg"
        },
        {
            'name':"АО «Научно-производственное объединение «Радиоэлектроника» имени В.И.Шимко»",
            'logo':"shimko_sm.jpg"
        },
        {
            'name':"АО «Радий»",
            'logo':"radii_sm.jpg"
        },
        {
            'name':"АО «Научно-исследовательский институт авиационного оборудования»",
            'logo':"aviapribor_sm.jpg"
        }
    ];

    data.forEach(item=>{
        let el = `
        <div class="card" data-name="${item.name}">
            <img src="img/${item.logo}" alt="${item.name}"/>
            <!--p><a href="#">${item.name}</a></p-->
        </div>
        `;
        crs.append(el);
    })

    crs.Cloud9Carousel({
        buttonLeft: $(".slider-control-left"),
        buttonRight: $(".slider-control-right"),
        yOrigin: 42,
        yRadius: 40,
        itemClass: "card",
        bringToFront: true,
        onLoaded: function () {
            crs.css('visibility', 'visible')
            crs.css('display', 'none')
            crs.fadeIn(1500)
        },
        speed:1,
        frontItemClass: 'carousel-big'
    });

    function fillname() {
        const info = document.querySelector('#info');
        info.textContent = this.dataset.name;
    }
    const cards = document.querySelectorAll(".card");
    cards.forEach(card=>card.addEventListener('click', fillname));
    document.querySelector('#info').textContent = data[0].name;
});
