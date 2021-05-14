//1.
$(function() {
  $('.btn').click(function() {
    var $title = $('#title')
    
    $title.css('color', 'red');
    $title.html('<h2>jqueryの基礎を勉強しています。</h2>');
    $title.fadeOut(1000);

    $('#text').css('color', 'blue').html('<p>プログラミングの世界へようこそ！</p>').fadeOut(1000);
  });
});

//2.1 findメソッドで全てのaタグの文字を変更
$(function() {
 $('#find-method').click(function() {
  $('#wrapper').find('a').css('color','red');
 });
});

//2.2 childrenメソッドで1階層下のaタグの文字を変更
$(function() {
  $('#children-method').click(function() {
   $('#wrapper').children('a').fadeOut();
  });
 });





