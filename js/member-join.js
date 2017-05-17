/**
 * Created by Stefan on 11/05/2017.
 */
(function ($) {
    $(document).ready(function () {
        $('.member-join-wrap').removeClass('member-join__visible');

        $('.member-join_link').click(function () {
            $('.member-join-wrap').addClass('member-join__visible');
        });

        $('.close-btn').click(function () {
            $('.member-join-wrap').removeClass('member-join__visible');
        });
    });
})(jQuery);
