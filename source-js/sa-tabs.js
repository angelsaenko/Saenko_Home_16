/* Tabs */
function saTabs(id) {
    var root = $('#'+id);
    root.find(".head a").click(function(e) {
        var link = $(this);
        var id = $(this).attr('href');
        // Activate head
        root.find('.head li.active').removeClass('active');
        link.parent().addClass('active');
        // Activate tab
        root.find('.tab.active').removeClass('active');

        root.find(id).addClass('active');

        return false;
    });
}
/* Tabs End */