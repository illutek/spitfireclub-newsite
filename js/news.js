/**
 * Created by stefan on 29.06.17.
 *
 */
(function ($) {
    $(document).ready(function () {
        $('.news-wrap').removeClass('news-wrap-hide');
        $('.show-hide-icon').addClass('angle-down');

        $('.show-hide-icon').click(function () {
            $('.news-wrap').toggleClass('news-wrap-hide');

            $(this).toggleClass('angle-up angle-down');
        });

    });
})(jQuery);