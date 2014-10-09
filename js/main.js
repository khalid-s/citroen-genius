// Toggle the account's options 
$( "#accnt" ).click(function() {
    $( ".accnt-option" ).stop().toggle(150);
});

// ------------ End -----------------------

// Move back up the page button
jQuery(document).ready(function() {
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
});