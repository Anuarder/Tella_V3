import $ from "jquery"

export default (anchor, section) => {
    // go to section when click anchor
    $(anchor).bind('click', function(e){
        
        e.preventDefault(); // prevent hard jump, the default behavior
        let target = $(this).attr("href"); // Set the target as variable
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 400, () => {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
        return false;
    });
    
    // Change active on target
    $(window).scroll(function() {
        let scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $(section).each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $(`${anchor}.active`).removeClass('active');
                $(anchor).eq(i).addClass('active');
            }
        });
    }).scroll();
}