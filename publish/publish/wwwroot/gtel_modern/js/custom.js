const swiperCustom = new Swiper('.top-banner-active', {
    slidesPerView: 1,
    autoplay: {
        delay: 100000,
    },
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-banner-button-next',
        prevEl: '.swiper-banner-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        768: {
            navigation: {
                enabled: true,
            }
        },
        0: {
            navigation: {
                enabled: false,
            }
        }
    }
});