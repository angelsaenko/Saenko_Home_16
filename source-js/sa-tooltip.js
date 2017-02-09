function saTooltip(id) {
    var root = $('#'+id);
    root.mouseover(function() {
        var tooltip = $('.sa-tooltip');
        var title = root.attr('title');
        var bounds = root.get(0).getBoundingClientRect();
        tooltip.html(title);
        tooltip.css({
            top: bounds.top-bounds.height-tooltip.height()-3,
            left: bounds.left
        });
        tooltip.fadeIn('slow');
    });
    root.mouseout(function() {
        $('.sa-tooltip').fadeOut('slow');
    });
}

