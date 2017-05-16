/**
 * Created by Stefan on 10/05/2017.
 */
(function ($) {
    $(document).ready(function () {
        var base = drupalSettings.path.baseUrl + 'themes/custom/spitfireclub/';
        $(".path-frontpage").backstretch([
            base + "images/gele-spit.jpg",
            base + "images/rode-spit.jpg"
        ],{
            fade: 750,
            duration: 4000
        });
    });
})(jQuery);
