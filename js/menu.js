/**
 * Created by Stefan on 11/05/2017.
 */
(function ($) {
    $(document).ready(function () {
        $('.menu-left-wrapper').removeClass('menu-left__visible');
        $('.hamburger-img').removeClass('menu-wrap__visible');

        $('.hamburger-img').click(function () {
            $('.menu-left-wrapper').addClass('menu-left__visible');
            $('.hamburger-img').addClass('menu-wrap__visible');
        });

        $('.close-btn').click(function () {
            $('.menu-left-wrapper').removeClass('menu-left__visible');
            $('.hamburger-img').removeClass('menu-wrap__visible');
        });
    });
})(jQuery);
