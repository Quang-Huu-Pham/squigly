$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: `<button type='button' class='slick-prev arrow'><i class="bx bxs-chevron-left" ></i></button>`,
        nextArrow: `<button type='button' class='slick-next arrow'><i class="bx bxs-chevron-right"></i></button>`,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 737,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
});