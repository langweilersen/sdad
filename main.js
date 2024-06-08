$(function() {
    $('.ikan')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span', '.ikan').css({ top: relY, left: relX })
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span', '.ikan').css({ top: relY, left: relX })
        });
});

// Get the cursor glow element
$(document).mousemove(function(e) {
    $(".cursor-glow").css({
        left: e.pageX - 300,
        top: e.pageY - 300
    });
});