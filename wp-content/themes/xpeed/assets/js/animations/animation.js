$(document).ready(function () {
  loadItemBanner();
  let currentSliderIndex = 0;
  // Sub Header
  $(".header_main-nav--item").on("click", function (event) {
    event.stopPropagation();

    if ($(".header_main-submenu").hasClass("active")) {
      $(".header_main-submenu").removeClass("active");
    } else {
      const documentWidth = $(document).width();
      const viewportWidth = $(window).width();
      const submenuX = documentWidth - viewportWidth;
      if (submenuX) {
        $(this).find(".header_main-submenu").css("left", `-${submenuX}px`);
      } else {
        $(this).find(".header_main-submenu").css("left", "0");
      }
      $(this).find(".header_main-submenu").addClass("active");
    }
  });

  $(document).on("click", function () {
    $(".header_main-submenu").removeClass("active");
  });

  // Animation when stroll
  let lastScrollTop = 46;
  $(window).scroll(function () {
    const currentScrollTop = $(this).scrollTop();

    if (currentScrollTop > 0) {
      if (!$(".header_main").hasClass("sub-header")) {
        $(".header_main").addClass("sub-header");
      }
    } else {
      // Scrolling up
      if ($(".header_main").hasClass("sub-header")) {
        $(".header_main").removeClass("sub-header");
      }
    }

    lastScrollTop = currentScrollTop;
  });

  // Slider Banner
  $(document).ready(function () {
    $(".banner_dots-item").on("click", function () {
      var index = $(this).index();
      if (currentSliderIndex == index) return;

      currentSliderIndex = index;
      // Xóa lớp 'is-active' khỏi tất cả các dots và slider-items
      $(".banner_dots-item").removeClass("is-active");
      $(".banner_item").removeClass("is-active");

      // Thêm lớp 'is-active' cho dot và slider-item hiện tại
      $(this).addClass("is-active");
      var $currentSlide = $(".banner_item").eq(index);
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

function updateHeader(title, imageUrl = null) {
  const header = document.querySelector(".about__header");
  const titleElement = document.getElementById("about-title");

  titleElement.textContent = title;

  if (imageUrl) {
    header.classList.add("has-image");
    header.style.setProperty("--header-image-url", `url(${imageUrl})`);
  } else {
    header.classList.remove("has-image");
    header.style.removeProperty("--header-image-url");
  }
}

const title = "About Us";
const imageUrl = "https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg";

updateHeader(title, imageUrl);

const navItems = document.querySelectorAll(".about__nav-item-group");
navItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const clickedItem = event.currentTarget;

    navItems.forEach((i) => i.classList.remove("active"));

    clickedItem.classList.add("active");
  });
});
