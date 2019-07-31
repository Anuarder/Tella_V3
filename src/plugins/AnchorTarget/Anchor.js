import $ from "jquery"

export default (anchor) => {
    $(document).ready(function() {
        // go to section when click anchor
        $(anchor).bind('click', function(e){
            e.preventDefault(); // prevent hard jump, the default behavior
            let target = $(this).attr("href"); // Set the target as variable
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            let top = $(target).offset().top - 150;
            $('html, body').animate({
                scrollTop: top,
            }, 400);
            return false;
        });
        // Change active on target
        // $(window).scroll(function() {
        //     let scrollDistance = $(window).scrollTop();
        //     // Assign active class to nav links while scolling
        //     $(section).each(function(i) {
        //         if (($(this).position().top - 400) <= scrollDistance) {
        //             $(`${anchor}.active`).removeClass('active');
        //             $(anchor).eq(i).addClass('active');
        //         }
        //     });
        // }).scroll();
    })
    
}