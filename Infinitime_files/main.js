jQuery(window).load(function() {


//Primary Nav in both scene 

    var windowWidth = jQuery(window).width();
    var nav = ".main-nav";
    //    for sub menu arrow

    //    for sub menu arrow
    jQuery('.main-nav >li:has("ul")>a').each(function() {
        jQuery(this).addClass('below');
    });
    jQuery('ul:not(.main-nav)>li:has("ul")>a').each(function() {
        jQuery(this).addClass('side');
    });
    if (windowWidth > 991) {

        jQuery('#showbutton').off('click');
        jQuery('.im-hiding').css('display', 'block');
        jQuery(nav).off('mouseenter', 'li');
        jQuery(nav).off('mouseleave', 'li');
        jQuery(nav).off('click', 'li');
        jQuery(nav).off('click', 'a');
        jQuery(nav).on('mouseenter', 'li', function() {
            jQuery(this).children('ul').stop().hide();
            jQuery(this).children('ul').slideDown(400);
        });
        jQuery(nav).on('mouseleave', 'li', function() {
            jQuery(this).children('ul').stop().slideUp(350);
        });
    } else {

        jQuery('#showbutton').off('click');
        jQuery('.im-hiding').css('display', 'none');
        jQuery(nav).off('mouseenter', 'li');
        jQuery(nav).off('mouseleave', 'li');
        jQuery(nav).off('click', 'li');
        jQuery(nav).off('click', 'a');
        jQuery(nav).on('click', 'a', function(e) {
            jQuery(this).next('ul').attr('style=""');
            jQuery(this).next('ul').slideToggle();
            if (jQuery(this).next('ul').length !== 0) {
                e.preventDefault();
            }
        });
        // for hide menu
        jQuery('#showbutton').on('click', function() {

            jQuery('.im-hiding').slideToggle();
        });
    }
    jQuery(window).resize(function() {
        windowWidth = jQuery(window).width();
        jQuery(nav + ' ul').each(function() {
            jQuery(this).attr('style', '" "');
        });
        if (windowWidth > 991) {
            jQuery('#showbutton').off('click');
            jQuery('.im-hiding').css('display', 'block');
            jQuery(nav).off('mouseenter', 'li');
            jQuery(nav).off('mouseleave', 'li');
            jQuery(nav).off('click', 'li');
            jQuery(nav).off('click', 'a');
            jQuery(nav).on('mouseenter', 'li', function() {
                jQuery(this).children('ul').stop().hide();
                jQuery(this).children('ul').slideDown(400);
            });
            jQuery(nav).on('mouseleave', 'li', function() {
                jQuery(this).children('ul').stop().slideUp(350);
            });
        } else {
            jQuery('#showbutton').off('click');
            jQuery('.im-hiding').css('display', 'none');
            jQuery(nav).off('mouseenter', 'li');
            jQuery(nav).off('mouseleave', 'li');
            jQuery(nav).off('click', 'li');
            jQuery(nav).off('click', 'a');
            jQuery(nav).on('click', 'a', function(e) {
                jQuery(this).next('ul').attr('style=""');
                jQuery(this).next('ul').slideToggle();
                if (jQuery(this).next('ul').length !== 0) {
                    e.preventDefault();
                }
            });
            // for hide menu
            jQuery('#showbutton').on('click', function() {

                jQuery('.im-hiding').slideToggle();
            });
        }
    });
    
    

    /* nav bar fixed */
    jQuery(window).scroll(function () {

      

      if (jQuery(window).scrollTop() > 30) {
        jQuery('.main-header').addClass('navbar-fixed-top');
      }

      if (jQuery(window).scrollTop() < 31) {
        jQuery('.main-header').removeClass('navbar-fixed-top');
      }
    });


});


