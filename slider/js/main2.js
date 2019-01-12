$(function(){

    const crs = $("#carousel");
    const kret_diag = $("#kret_diag");
    const xproc = $("#xproc");
    $('.descr').hide();
    xproc.hide();
    kret_diag.hide();

    const data = [
        {
            'name':'АО "КПКБ"',
            'did':3,
            'divis':"ГО",
            'type':"НИИ"
        },
        {
            'name':'АО "НПО "ЭлТом"',
            'did':5,
            'divis':"Прочие",
            'type':"Завод"
        },
        {
            'name':'АО "НПО "Квант"',
            'did':2,
            'divis':"РЭБ",
            'type':"Завод"
        },
        {
            'name':'АО "ННПО имени М.В.Фрунзе"',
            'did':4,
            'divis':"ИА",
            'type':"Завод"
        },
        {
            'name':'"НПЦ "Сапсан"',
            'did':5,
            'divis':"Прочие",
            'type':"НПЦ"
        },
        {
            'name':'АО "Фазотрон-ВМЗ"',
            'did':1,
            'divis':"БРЭО",
            'type':"Завод"
        },
        {
            'name':'АО "ВНИИ "Градиент"',
            'did':2,
            'divis':"РЭБ",
            'type':"НИИ"
        },
        {
            'name':'АО "НИИРС и ИСЭ"',
            'did':3,
            'divis':"ГО",
            'type':"НИИ"
        },
        {
            'name':'АО "УППО"',
            'did':1,
            'divis':"БРЭО",
            'type':"Завод"
        },
        {
            'name':'АО "НИИП имени В.В. Тихомирова"',
            'did':1,
            'divis':"БРЭО",
            'type':"НИИ"
        },
        {
            'name':'АО "НПП "Измеритель"',
            'did':1,
            'divis':"БРЭО",
            'type':"Завод"
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

    document.querySelector('.swapper').addEventListener('click',function(){
       window.location.assign('index1.html');
    });

    $('#sapsan_diag').click(function(){
        window.location.assign('select.html');
    });

    $('#sapsan_ava').click(function(){
        window.location.assign('select.html');
    });

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
                        <span class="name" data-id="${org.did}">${orgName}</span>
                    </li>  
                    `;
        }).join('');
        suggestions.innerHTML = html;
        suggLi = document.querySelectorAll('.suggestions li');
        suggLi.forEach(li=>li.addEventListener('click',function(){
            let selectedId = li.firstChild.nextSibling.dataset.id-1;
            crs.data('carousel').goTo(selectedId);
        }));
    };

    const searchInput = document.querySelector('#search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('keyup', displayMatches);
});
