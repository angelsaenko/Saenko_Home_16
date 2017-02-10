function saAccordeon(id) {
    var root = $('#' + id);
    root.find("h4 a").click(function (e) {
        var link = $(this);
        var id = $(this).attr('href');
        // Activate head
        root.find('h4.active').removeClass('active');
        link.parent().addClass('active');

        // Activate accordeon
        root.find('.acord.active').removeClass('active').slideUp(800);
        root.find(id).slideDown(800);
        root.find(id).addClass('active');

        return false;
    });

}
