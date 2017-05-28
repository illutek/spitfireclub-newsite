/**
 * Created by Stefan on 11/05/2017.
 */
(function ($) {
    $(document).ready(function () {
        $('.menu-left-wrapper').removeClass('menu-left__visible');

        $('.btn-hamburger_menu').click(function () {
            $('.menu-left-wrapper').addClass('menu-left__visible');
        });

        $('.close-btn').click(function () {
            $('.menu-left-wrapper').removeClass('menu-left__visible');
        });
    });
})(jQuery);
