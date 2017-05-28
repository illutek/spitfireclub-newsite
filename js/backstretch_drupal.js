/**
 * Created by Stefan on 10/05/2017.
 */
(function ($) {
    $(document).ready(function () {
        var base = drupalSettings.path.baseUrl + 'themes/custom/spitfireclub/';
        $(".path-frontpage").backstretch([
            base + "images/frontpage-images/gele-spit.jpg",
            base + "images/frontpage-images/groene-MKI-spit.jpg",
            base + "images/frontpage-images/rode-spit.jpg",
            base + "images/frontpage-images/groene-spit.jpg",
            base + "images/frontpage-images/groep.jpg"
        ],{
            fade: 750,
            duration: 4000
        });
    });
})(jQuery);
