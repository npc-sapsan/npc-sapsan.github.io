$(function(){
    const crs = $("#carousel");
    crs.Cloud9Carousel({
        yOrigin: 42,
        yRadius: 40,
        itemClass: "card",
        bringToFront: true,
        onLoaded: function () {
            crs.css('visibility', 'visible')
            crs.css('display', 'none')
            crs.fadeIn(1500)
        },
        speed:2,
        frontItemClass: 'carousel-big',
        mirror: {
            gap: 12,     /* 12 pixel gap between item and reflection */
            height: 0.2, /* 20% of item height */
            opacity: 0.4 /* 40% opacity at the top */
        }
    });
});

function fillname() {
    const info = document.querySelector('#info');
    info.textContent = this.dataset.name;
}
const cards = document.querySelectorAll(".card");
cards.forEach(card=>card.addEventListener('click', fillname));