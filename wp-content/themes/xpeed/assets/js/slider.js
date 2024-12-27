$(document).ready(function () {
  $(".shopify__product-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><ion-icon name="arrow-back-outline"></ion-icon></button>', // Nút Prev
    nextArrow:
      '<button type="button" class="slick-next"><ion-icon name="arrow-forward-outline"></ion-icon></button>', // Nút Next
    infinite: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
