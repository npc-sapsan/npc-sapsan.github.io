$(function(){

    const crs = $("#carousel");
    const kret_diag = $("#kret_diag");
    const xproc = $("#xproc");
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

    data.forEach(item=>{
        let el = `
        <div class="card" id="${item.id}" data-name="${item.name}">
            <img src="img/${item.logo}" alt="${item.name}"/>
            <!--p><a href="#">${item.name}</a></p-->
        </div>
        `;
        crs.append(el);
    });

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
            let idx = crs.data("carousel").nearestIndex();
            let el = getDataElement(idx);
            document.querySelector('#info').textContent = el.name;
            let selectedItem = document.querySelector('.carousel-big');
            selectedItem.addEventListener('click', function(){
                if(selectedItem.getAttribute('id')== 0)
                    window.location.assign('select.html');
            })
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


    function fillname() {
        const info = document.querySelector('#info');
        info.textContent = this.dataset.name;
    }
    const cards = document.querySelectorAll(".card");
    cards.forEach(card=>card.addEventListener('click', fillname));
    document.querySelector('#info').textContent = data[0].name;

    function findMatches(wordToMatch, data){
        return data.filter(org=> {
            const regex = new RegExp(wordToMatch, 'gi');
            return org.name.match(regex);
        });
    };

    let suggLi = document.querySelectorAll('.suggestions li');
    function displayMatches(){
        const matchArray = findMatches(this.value, data);
        const html = matchArray.map(org=>{
            const regex = new RegExp(this.value, 'gi');
            const orgName = org.name.replace(regex, `${this.value}`);
            return `
                    <li>
                        <span class="name" data-id="${org.id}">${orgName}</span>
                    </li>  
                    `;
        }).join('');
        suggestions.innerHTML = html;
        suggLi = document.querySelectorAll('.suggestions li');
        suggLi.forEach(li=>li.addEventListener('click',function(){
            let selectedId = li.firstChild.nextSibling.dataset.id;
            crs.data('carousel').goTo(selectedId);
        }));
    };

    const searchInput = document.querySelector('#search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('keyup', displayMatches);
});
