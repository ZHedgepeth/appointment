$("#blanks form").submit(function(event) {
  var nameInput = $("input#name").val();
  var dateInput = $("input#date").val();
  var startTimeInput = $("input#startTime").val();
  var endTimeInput = $("input#endTime").val();

  $(".name").text(nameInput);
  $(".date").text(dateInput);
  $(".startTime").text(startTimeInput);
  $(".endTime").text(endTimeInput);

  $("#receipt").show();

  event.preventDefault();

});
