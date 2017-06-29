/**
 * Created by stefan on 29.06.17.
 *
 */
(function ($) {
    $(document).ready(function () {
        $('.news-body').removeClass('news-body-hide');
        $('.show-hide-icon').addClass('angle-down');

        $('.show-hide-icon').click(function () {
            $('.news-body').toggleClass('news-body-hide');
            $(this).toggleClass('angle-up angle-down');
        });
    });
})(jQuery);