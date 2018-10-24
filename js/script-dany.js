$('.container.test img').on('click', function (event) {
    $('#carouselGaleria').carousel(parseInt($(this).attr('data-carousel-index')))
})