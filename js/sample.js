$(function() {
  $('.btn').click(function() {
    var $title = $('#title')
    
    $title.css('color', 'red');
    $title.html('<h2>jqueryの基礎を勉強しています。</h2>');
    $title.fadeOut(1000);

    $('#text').css('color', 'blue').html('<p>プログラミングの世界へようこそ！</p>').fadeOut(1000);
  });
});

