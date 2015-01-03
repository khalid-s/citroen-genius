jQuery(document).ready(function() {
	
	
// tabs page Incontournables	
// Wait until the DOM has loaded before querying the document
	
	$('ul.tabs').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and it's associated content
		var $active, $content, $links = $(this).find('a');

		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active.attr('href'));

		// Hide the remaining content
		$links.not($active).each(function () {
			$($(this).attr('href')).hide();
		});

		// Bind the click event handler
		$(this).on('click', 'a', function(e){
			// Make the old tab inactive.
			$active.removeClass('active');
			$content.hide();

			// Update the variables with the new link and content
			$active = $(this);
			$content = $($(this).attr('href'));

			// Make the tab active.
			$active.addClass('active');
			$content.show();

			// Prevent the anchor's default click action
			e.preventDefault();
		});
	});





	
// Toggle info-content on login page
    $(".info").hover(function(){
        $(".info-content", this).stop().toggle();
    });

// Toggle info-content on login page
    $(".infoB").hover(function(){
        $(".infoB-content", this).stop().toggle();
    });
	
// Toggle the account's options 
    $( "#accnt" ).hover(function() {
        $( ".accnt-option" ).stop().toggle(150);
    });

// Toggle the account's options 
    $( "#accnt2" ).hover(function() {
        $( ".accnt2-option" ).stop().toggle(150);
    });
/* ADD by tmenu */
// Toggle the notif's options 
    $( "#notifs i" ).click(function() {
        $( ".notifs-option" ).stop().show(150);
        $('body').append('<div id="notif-out"></div>');
    });
    $(document).on('click', '#notif-out', function() {
        event.preventDefault();
        $('.notifs-option').stop().hide(150);
        $('#notif-out').remove();
    });
/* END ADD by tmenu */
// Placeholder for old browser
// This placeholder is initiated here but uses the library jquery-placeholder.js
$('input, textarea').placeholder();

// ------------ End toggle accounts -----------------------
/* ADD by tmenu */
// traductions moment.js
    moment.locale('fr', {
        months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            LTS : "HH:mm:ss",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D MMMM YYYY LT"
        },
        calendar : {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "dans %s",
            past : "il y a %s",
            s : "quelques secondes",
            m : "une minute",
            mm : "%d minutes",
            h : "une heure",
            hh : "%d heures",
            d : "un jour",
            dd : "%d jours",
            M : "un mois",
            MM : "%d mois",
            y : "une année",
            yy : "%d années"
        },
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'ème');
        },
        week : {
            //dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
// ------------ End traductions moment.js -----------------------
/* END ADD by tmenu */
// Move back up the page button
    var offset = 1000; /* EDIT by tmenu */
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.up-btn').stop().fadeIn(duration); /* EDIT by tmenu */
        } else {
            jQuery('.up-btn').stop().fadeOut(duration); /* EDIT by tmenu */
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
        /* EDIT by tmenu */
        { startDate: thisMonth + '-03', endDate: thisMonth + '-03', startHour: '10', endHour: '11', title: 'An Event2',  img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: thisMonth + '-03', endDate: thisMonth + '-03', startHour: '12', endHour: '16', title: 'An lonnnng event3',  img:'../img/event-today-image-2.png', url: 'http://citroen.fr', event_name: 'event-2' },
        { startDate: thisMonth + '-03', endDate: thisMonth + '-03', startHour: '16', endHour: '18', title: 'An Event3',  img:'../img/event-today-image-2.png', url: 'http://citroen.fr', event_name: 'event-2' },
        { startDate: thisMonth + '-11', endDate: thisMonth + '-11', startHour: '10', endHour: '11', title: 'An Event4',  img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: thisMonth + '-10', endDate: thisMonth + '-10', startHour: '10', endHour: '11', title: 'An Event42', img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-2' },
        { startDate: thisMonth + '-10', endDate: thisMonth + '-10', startHour: '10', endHour: '11', title: 'An Event43', img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: thisMonth + '-17', endDate: thisMonth + '-17', startHour: '10', endHour: '11', title: 'An Event17', img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: thisMonth + '-31', endDate: '2014-10-31',      startHour: '10', endHour: '11', title: 'An Event5',  img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: '2015-03-01',      endDate: '2015-03-01',      startHour: '10', endHour: '11', title: 'An Event6',  img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' },
        { startDate: '2015-03-31',      endDate: '2015-03-31',      startHour: '10', endHour: '11', title: 'An Event7',  img:'../img/event-today-image-1.png', url: 'http://citroen.fr', event_name: 'event-1' }
        /* END EDIT by tmenu */
    ];
      // the order of the click handlers is predictable.
      // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
      // then onMonthChange (if the month changed).
      // finally onYearChange (if the year changed).

    /* ADD by tmenu */
    // Affichage date du jour
    $('.btn.today').click(function(){
        $('td.day').removeClass('selected');
        var now = moment();

        calendars.clndr.setMonth(now._d.getMonth());
        calendars.clndr.setYear(now._d.getFullYear());

        var classe = 'calendar-day-' + now._d.getFullYear() + '-' + (now._d.getMonth()+1) + '-' + now._d.getDate() + '';
        $('.' + classe).addClass('selected');

        return false;
    });
    /* END ADD by tmenu */

    // calendar config for home page .cal
    calendars.clndr = $('#cal').clndr({
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
                console.log(target);

                /* ADD by tmenu */
                $('td.day').removeClass('selected');
                $(target.element).addClass('selected');
                /* END ADD by tmenu */

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

    
    /* ADD by tmenu */
    // Pour l'exemple, date sélectionnée : 17 novembre 2014
    $('.calendar-day-2014-12-17').addClass('selected');
    /* END ADD by tmenu */

    // calendar config for agenda page
    /* EDIT by tmenu */
    var schedulesList = [
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

    calendars.clndr = $('#cal-agenda').clndr({
        daysOfTheWeek: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        // set weekOffset to 0 to begin the calendar on sunday instead of monday
        weekOffset: 1,
        template: $('#template-calendar-agenda').html(),
        events: eventArray,
        clickEvents: {
            click: function(target) {
                console.log(target);

                $('td.day').removeClass('selected');
                $(target.element).addClass('selected');

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
            endDate: 'endDate',
            location: 'url'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });
    /* END EDIT by tmenu */

    /* ADD by tmenu */
    // Pour l'exemple, date sélectionnée : 17 novembre 2014
    $('.calendar-day-2014-12-17').addClass('selected');
    /* END ADD by tmenu */

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
/* ADD by tmenu */
// --------------- End calendar -----------------
// popin
    $('.popin-link').click(function(event){
        event.preventDefault();
        
        var popin_name = $(this).attr('rel');
        var popURL = $(this).attr('href');

        $('#' + popin_name).fadeIn().prepend('<a href="#" class="popin-close">&times;</a>');

        var popMargTop = ($('#' + popin_name).height() + 80) / 2;
        var popMargLeft = ($('#' + popin_name).width() + 80) / 2;

        $('#' + popin_name).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });

        $('body').append('<div id="popin-fade"></div>');
        $('#popin-fade').fadeIn();

        return false;
    });

    $(document).on('click', '.popin-close, #popin-fade', function() {
        $('#popin-fade , .popin-block').fadeOut(function() {
            $('#popin-fade, a.popin-close').remove(); 
        });
        return false;
    });
// --------------- End popin -----------------
// zoom
    $('#zoom-in').click(function(event){
        //event.preventDefault();
        var zoom = ($('main').css('zoom') == 'normal') ? 1 : $('main').css('zoom');
        console.log(zoom);
        $('main').css('zoom', zoom + 0.02);
    });

    $('#zoom-out').click(function(event){
        event.preventDefault();
        $('main').css('zoom', '-=0.02');
    });
// End zoom
// clickable table row
    $(".clickable-row").click(function() {
        window.document.location = $(this).attr("href");
    });
// End clickable table row

    $.datepicker.regional['fr'] = {
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
            'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        monthNamesShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
            'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
        dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
        dayNamesMin: ['D','L','M','M','J','V','S'],
        weekHeader: 'Sem.',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['fr']);

    $('.datepicker').datepicker( );
/* END ADD by tmenu */
});
