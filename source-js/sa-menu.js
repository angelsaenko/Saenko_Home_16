var $items = $('.menu li a');
$items.on('click', function(){
    $items.removeClass('active');
    $(this).addClass('active');
});
