jQuery(document).ready(function() {
// Toggle info-content on login page
    $(".info").hover(function(){
        $(".info-content", this).stop().toggle();
    });
// Toggle the account's options 
    $( "#accnt" ).hover(function() {
        $( ".accnt-option" ).stop().toggle(150);
    });
// ------------ End toggle accounts -----------------------

// Placeholder for old browser
// This placeholder is initiated here but uses the library jquery-placeholder.js
$('input, textarea').placeholder();

// -------------------------------------------



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
    });
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
// --------------- End slider -----------------

// nav icons hover and active. Rename the src by adding -active to the png
    $("nav > ul > li")
        .mouseover(function() { 
            var src = $('img', this).attr("src").replace(".png", "-active.png");
            $('img', this).attr("src", src);
        }).stop()
        .mouseout(function() {
            var src = $('img', this).attr("src").replace("-active.png", ".png");
            $('img', this).attr("src", src);
        }).stop();
// --------------- End nav icons hover -----------------

// nav sub menus
    $("nav ul li")
        .mouseover(function(){
            $('ul', this).addClass("active");
        }).stop().mouseout(function(){
            $('ul', this).removeClass('active');
        }).stop();

// --------------- End nav sub menus -----------------

// styled scroll bar
    $(".scrollable form").mCustomScrollbar({
        theme:"minimal-dark",
        mouseWheel:{ scrollAmount: 128 },
        scrollInertia: 300
    }).removeClass('mCS-autoHide');
    
// --------------- End styled scroll bar -----------------

// checkboxes
    $("input[type=checkbox]").picker();

    $(window).one("pronto.load", function() {
        $("input[type=checkbox]").picker("destroy");
    });

// --------------- End checkboxes -----------------
// calendar

    var calendars = {};

    var thisMonth = moment().format('YYYY-MM');

    var eventArray = [
        { startDate: thisMonth + '-03', endDate: thisMonth + '-03', startTime: '09:30', endTime: '10:30', title: 'An Event2', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-03', endDate: thisMonth + '-03', title: 'An Event3', img:'../img/event-today-image-2.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-11', endDate: thisMonth + '-11', title: 'An Event4', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-10', endDate: thisMonth + '-10', title: 'An Event42', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-10', endDate: thisMonth + '-10', title: 'An Event43', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-17', endDate: thisMonth + '-17', title: 'An Event17', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: thisMonth + '-31', endDate: '2014-10-31', title: 'An Event5', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: '2015-03-01', endDate: '2015-03-01', title: 'An Event6', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' },
        { startDate: '2015-03-31', endDate: '2015-03-31', title: 'An Event7', img:'../img/event-today-image-1.png', url: 'http://citroen.fr' }
    ];
    console.info(eventArray);
      // the order of the click handlers is predictable.
      // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
      // then onMonthChange (if the month changed).
      // finally onYearChange (if the year changed).


    // calendar config for home page .cal
    calendars.clndr = $('.cal').clndr({
        daysOfTheWeek: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        // set weekOffset to 0 to begin the calendar on sunday instead of monday
        weekOffset: 1,
        template: $('#template-calendar').html(),
        events: eventArray,
        // constraints: {
        //   startDate: '2013-11-01',
        //   endDate: '2013-11-15'
        // },
        clickEvents: {
            click: function(target) {
                // console.log(target);
                // if you turn the `constraints` option on, try this out:
                // if($(target.element).hasClass('inactive')) {
                //   console.log('not a valid datepicker date.');
                // } else {
                //   console.log('VALID datepicker date.');
                // }
            },
            // nextMonth: function() {
            // console.log('next month.');
            // },
            // previousMonth: function() {
            // console.log('previous month.');
            // },
            // onMonthChange: function() {
            // console.log('month changed.');
            // },
            // nextYear: function() {
            // console.log('next year.');
            // },
            // previousYear: function() {
            // console.log('previous year.');
            // },
            // onYearChange: function() {
            // console.log('year changed.');
            // }
        },
        multiDayEvents: {
            startDate: 'startDate',
            endDate: 'endDate'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });

    

    // calendar config for agenda page
    calendars.clndr = $('.cal-agenda').clndr({
        daysOfTheWeek: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        // set weekOffset to 0 to begin the calendar on sunday instead of monday
        weekOffset: 1,
        template: $('#template-calendar').html(),
        events: eventArray,
        multiDayEvents: {
            startDate: 'startDate',
            endDate: 'endDate',
            location: 'url'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });

      // bind both clndrs to the left and right arrow keys
    $(document).keydown( function(e) {
        if(e.keyCode == 37) {
            // left arrow
            calendars.clndr.back();
        }
        if(e.keyCode == 39) {
            // right arrow
            calendars.clndr.forward();
        }
    });
// --------------- End calendar -----------------
});