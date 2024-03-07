// topbanner x버튼 클릭하면 topbanner 없어지기
let topbanner = document.querySelector('.topBanner');
let closeBtn = document.querySelector('.topBanner  a');

closeBtn.addEventListener('click', function() {
    topbanner.style.height = 0;
})

// 스크롤 내려오면 nav의 색깔 바뀌기
window.addEventListener('scroll', goScroll)

function goScroll () {
    let scroll = window.pageYOffset;
    let nav = document.querySelector('nav');

    if ( scroll > 1110 ) {
        nav.classList.add('on');
    } else {
        nav.classList.remove('on');
    }
}
goScroll();

// swiper slide
let swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.mainVisual-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.mainSlideNext',
        prevEl: '.mainSlidePrev',
    }
});


let swiperbest = new Swiper('.swiper-best', {
    slidesPerView: 4,
    spaceBetween: 15,

    loop: true,
    autoplay: {
        delay:2500
    },

    navigation: {
        prevEl: '.bestPrev',
        nextEl: '.bestNext'
    }
});


// goTop 버튼 클릭시 제일 상단으로 이동
let goTop = document.querySelector('.goTop');

goTop.addEventListener('click', function() {
    window.scrollTo( { top: 0, behavior: 'smooth'});
})



// a에 마우스가 올라가면 div에..drop 클래스가 붙음
let shop = document.querySelector('.shop');
let shopDiv = document.querySelector('.shopDiv');

shop.addEventListener('mouseenter', function() {
    shopDiv.classList.add('shopDrop');
})
shop.addEventListener('mouseleave', function() {
    shopDiv.classList.remove('shopDrop');
})

let community = document.querySelector('.community');
let communityDiv = document.querySelector('.communityDiv');


community.addEventListener('mouseenter', function() {
    communityDiv.classList.add('communityDrop');
})
community.addEventListener('mouseleave', function() {
    communityDiv.classList.remove('communityDrop');
})





// // footer familysite //

// // a에 마우스를 올리면 동생인 div에 클래스명 drop이 붙음.

// let familySite = document.querySelector('.familySite');
// let up = document.querySelector('.familySite a');
// let div = document.querySelector('.familySite div');

// // a에 마우스가 올라가면 .familySite의 높이가 210
// // 마우스가 나가면 .familySite의 높이가 52

// up.addEventListener('mouseenter', function() {
//     div.classList.add('drop');
// })
// up.addEventListener('mouseleave', function() {
//     div.classList.remove('drop');
// })

// if ( div.classList.contains('drop')) {
//     familySite.style.height = 210 + 'px';
// } else {
//     familySite.style.height = 52 + 'px';
// }
// // 모르겠어요 몰라몰라..