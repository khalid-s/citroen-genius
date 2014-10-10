jQuery(document).ready(function() {
// Toggle the account's options 
    $( "#accnt" ).click(function() {
        $( ".accnt-option" ).stop().toggle(150);
    });
// ------------ End -----------------------

// Move back up the page button
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.up-btn').fadeIn(duration);
        } else {
            jQuery('.up-btn').fadeOut(duration);
        }
    });
    
    jQuery('.up-btn').click(function(event) {
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
// --------------- End move up page -----------------

// slider init and options
    $('.banner').unslider({
        speed: 500,
        delay: 3000,
        complete: function() {},
        keys: true,
        dots: true,
        fluid: false
    });
// --------------- End move up page -----------------

// nav icons hover and active. Rename the src by adding -active to the png
        $("nav ul li")
            .mouseover(function() { 
                var src = $(this).find('img').attr("src").replace(".png", "-active.png");
                $(this).find('img').attr("src", src);
            }).stop()
            .mouseout(function() {
                var src = $(this).find('img').attr("src").replace("-active.png", ".png");
                $(this).find('img').attr("src", src);
            }).stop();
});