$(document).ready(function () {
  // ---------------------------------------------------------------COMMON--------------------------------------------------------------
  // Animation when stroll
  let lastScrollTop = 46;
  $(window).scroll(function () {
    const currentScrollTop = $(this).scrollTop();

    if (currentScrollTop > lastScrollTop) {
      $(".header_main").addClass("sub-header");
      $(".header_main").css("transform", "translateY(0");
      $(".header_main").css("transition", "all 0.5s ease");
      $("#backToTop").fadeIn();
    } else if (currentScrollTop < 46) {
      $(".header_main").css({
        transform: "",
        transition: "",
      });
      $(".header_main").removeClass("sub-header");
      $("#backToTop").fadeOut();
    } else {
      $(".header_main").css("transform", "translateY(0");
      $(".header_main").css("transition", "all 0.5s ease");
      $(".header_main").removeClass("sub-header");
    }

    lastScrollTop = currentScrollTop;
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $("#show-cart").on("click", function () {
    if (
      $(".header__cart").hasClass("is-active") ||
      $("header__cart-overlay").hasClass("is-active")
    ) {
      $(this).find(".header__cart").removeClass("is-active");
      $(this).find(".header__cart-overlay").removeClass("is-active");
    } else {
      $(this).find(".header__cart").addClass("is-active");
      $(this).find(".header__cart-overlay").addClass("is-active");
    }
  });

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

    // Áp dụng ScrollReveal cho các phần tử trong slide hiện tại
    ScrollReveal().reveal($currentSlide.find(".banner-content__heading"), {
      origin: "bottom",
      distance: "40px",
      duration: 2000,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal($currentSlide.find(".banner-content__subheading"), {
      origin: "bottom",
      distance: "30px",
      duration: 2500,
      easing: "ease-in-out",
      reset: true,
    });

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
