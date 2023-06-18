$(document).ready(function () {
    $('.wapper__slider1').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        autoplay: true,
        arrows: false,
        // fade: true,
        draggable: false,
        cssEase: 'linear'

    });
    $('.wapper__slider2').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        autoplay: true,
        arrows: false,
        // fade: true,
        draggable: false,
        cssEase: 'linear'

    });
    $('.wapper__slider3').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        autoplay: true,
        arrows: false,
        // fade: true,
        draggable: false,
        cssEase: 'linear'

    });
});
let nav__menu_a_search = document.querySelectorAll('#nav__menu_a-search')

nav__menu_a_search.forEach(el => {
    el.addEventListener("click", () => {
        el.querySelector(".proinput").classList.toggle('active')
    })
})

var proinputs = document.querySelectorAll('.proinput')
proinputs.forEach(proinput =>{
    proinput.addEventListener('click', function (event) {
        event.stopPropagation()
    })
})




let show_menu_mobis = document.querySelectorAll('.js_show_menu-mobi')

show_menu_mobis.forEach(show_menu_mobi => {
    show_menu_mobi.addEventListener('click', () => {
        document.querySelector('.nav__menu-ul ').classList.toggle('active')
        // console.log(show_menu_mobi)

    })
})