
$(function() {
    $( ".paircontainer").draggable();
});

$(document).ready(function() {
    $(".folderpaircontainer").click(function() {
        $(this).parent().nextAll('.toggleitem').first().toggle();
    });
});

$(document).ready(function(){
  $(".c").click(function(){
    $(".ca").toggle();

  });
});