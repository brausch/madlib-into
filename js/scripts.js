$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var adjectiveInput = $("input#adjective").val();
    var activityInput = $("input#activity").val();
    var exclamationInput = $("input#exclamation").val();
    var emotionInput = $("input#emotion").val();

    $(".person1").text(person1Input);
    $(".adjective").text(adjectiveInput);
    $(".activity").text(activityInput);
    $(".exclamation").text(exclamationInput);
    $(".emotion").text(emotionInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#letter form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letterOutput").show();

    event.preventDefault();
  });
});
