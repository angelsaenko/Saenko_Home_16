function saModal(id){
    var root = $('#'+id);
    root.addClass('active');
    root.find('.sa-close').click(function() {
        root.removeClass('active');
    });
}
