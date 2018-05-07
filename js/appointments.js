$(document).ready(function() {
  $('#appointmentForm').submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#appointmentDescription").val();
    var dateInput = $("input#dateOfAppointment").val();
    var timeInput = $("input#appointmentTime").val();
    event.preventDefault();
  });
});
