$(document).ready(function() {
  $("button#food").click(function() {
    $("#initially-hidden").slideToggle();
    $("button#food").removeClass();
    $("button#food").addClass("white");
  });
});
