$(document).ready(function() {
  $("button#food").click(function() {
    $("#initially-hidden").slideToggle();
    $("button#food").removeClass();
    $("button#food").addClass("white");
  });
  $("#blanks form").submit(function(event) {
     var person1Input = $("input#person1").val();
     $(".person1").alert("congratulations")

    event.preventDefault();
  });
});
