$(document).ready(function () {
    $('.menu-toggle').click(function (e) {
    
        //click event for left clicks only! http://www.jacklmoore.com/notes/click-events
        if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
            e.preventDefault();
            
            let menuContainer = $(this).parent().find('.menu');
            let parent = $(this).parent();
            
            if (menuContainer.hasClass('expanded-mobile-menu')) {
                $(this).removeClass('expanded-menu-toggle');
                parent.removeClass('nav-expanded');
                menuContainer.removeClass('expanded-mobile-menu');
            } else {
                $(this).addClass('expanded-menu-toggle');
                parent.addClass('nav-expanded');
                menuContainer.addClass('expanded-mobile-menu');
            }
        }
    });
});
