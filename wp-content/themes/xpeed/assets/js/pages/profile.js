$(document).ready(function () {
    const $button = $(".menu__tablet-more");
    const $sidebar = $(".account__sidebar");
    const $sidebarClose = $(".sidebar__close-icon");

    if ($button.length) {
        $button.click(function () {
            $sidebar.addClass("active");
        });
    }

    if ($sidebarClose.length) {
        $sidebarClose.click(function () {
            $sidebar.removeClass("active");
        });
    }
});