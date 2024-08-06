// topback show hide
$(function() {
  var navi = $("#topback");
  var startPos = 0;
  $(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      if ($(window).scrollTop() >= 500) {
        $(navi).css("transform", "translateY(300%)");
      }
    } else {
      $(navi).css("transform", "translateY(0)");
    }
    startPos = currentPos;
  });
});