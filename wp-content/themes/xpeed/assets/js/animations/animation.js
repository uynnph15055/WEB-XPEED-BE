$(document).ready(function () {
  // ---------------------------------------------------------------COMMON--------------------------------------------------------------
  // Animation when stroll
  let lastScrollTop = 46;
  $(window).scroll(function () {
    const currentScrollTop = $(this).scrollTop();
    $(".header__cart").removeClass("is-active");
    $(".overlay").removeClass("is-active");
    $(".language-list").removeClass("show");

    if (currentScrollTop > lastScrollTop) {
      $(".header_main").addClass("sub-header");
      $("#backToTop").fadeIn();
    } else if (currentScrollTop < 46) {
      $(".header_main").css({
        transform: "",
        transition: "",
      });
      $(".header_main").removeClass("sub-header");
      $("#backToTop").fadeOut();
    } else {
      $(".header_main").removeClass("sub-header");
    }

    lastScrollTop = currentScrollTop;
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $("#show-cart").on("click", function () {
    if ($(this).find(".header__cart").hasClass("is-active")) {
      $(this).find(".header__cart").removeClass("is-active");
      $(".overlay").removeClass("is-active");
    } else {
      $(this).find(".header__cart").addClass("is-active");
      $(".overlay").addClass("is-active");
    }
  });

  $(".overlay").on("click", function () {
    $(".header__cart").removeClass("is-active");
    $(".overlay").removeClass("is-active");
    $(".language-list").removeClass("show");
  });

  // -------Header-------

  const $languageSelected = $(".language-selected");
  $languageSelected.on("click", function () {
    if ($(".language-list").hasClass("show")) {
      $(".language-list").removeClass("show");
      $(".overlay").removeClass("is-active");
    } else {
      $(".language-list").addClass("show");
      $(".overlay").addClass("is-active");
    }
  });

  // $(document).on("click", function () {
  //   $(".header__cart").removeClass("is-active");
  //   $(".header__cart-overlay").removeClass("is-active");
  // });

  // ---------------------------------------------------------------HOME--------------------------------------------------------------
  // Slider Banner
  loadItemBanner();
  let currentSliderIndex = 0;
  $(".banner_dots-item").on("click", function () {
    let $currentSlide = "";
    var index = $(this).index();
    if (currentSliderIndex == index) return;

    currentSliderIndex = index;
    // Xóa lớp 'is-active' khỏi tất cả các dots và slider-items
    $(".banner_dots-item").removeClass("is-active");
    $(".banner_item").removeClass("is-active");

    // Thêm lớp 'is-active' cho dot và slider-item hiện tại
    $(this).addClass("is-active");
    $currentSlide = $(".banner_item").eq(index);
    $currentSlide.addClass("is-active");

    $(
      ".banner_item .banner-content__heading, .banner_item .banner-content__subheading, .banner_item .banner_image"
    ).removeClass("is-visible");

    ScrollReveal().reveal($currentSlide.find(".banner_image"), {
      opacity: 0,
      duration: 500,
      easing: "ease-in-out",
      afterReveal: function (el) {
        el.classList.add("is-visible");
      },
      reset: true,
    });
  });
});

const loadItemBanner = () => {
  ScrollReveal().reveal(".header_headline-one", {
    opacity: 0,
    duration: 1000,
    easing: "ease-in-out",
    reset: false,
  });

  // Banner
  ScrollReveal().reveal(".banner_image", {
    opacity: 0,
    duration: 500,
    easing: "ease-in-out",
    afterReveal: function (el) {
      el.classList.add("is-visible");
    },
    reset: false,
  });

  ScrollReveal().reveal(".banner-content__heading", {
    origin: "bottom",
    distance: "40px",
    duration: 2000,
    easing: "ease-in-out",
    reset: false,
  });

  ScrollReveal().reveal(".banner-content__subheading", {
    origin: "bottom",
    distance: "30px",
    duration: 2500,
    easing: "ease-in-out",
    reset: false,
  });
};
