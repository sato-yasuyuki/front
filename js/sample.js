$(function() {
    $("#hide-text").click(function() {
      $("#text").slideDown();
    }); 
});

$(function() {
  $('li').click(function() {
      $(this).css('color', 'red')
  });
});
