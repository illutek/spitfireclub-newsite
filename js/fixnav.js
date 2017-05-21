/**
 * Created by stefan on 21.05.17.
 *
 */
(function ($) {
    $(document).ready(function () {
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
        if (startchange.length){
            $(document).scroll(function() {
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $(".navbar-fixed-top").addClass("fixednav");
                } else {
                    $('.navbar-fixed-top').removeClass("fixednav");
                }
            });
        }
    });
})(jQuery);