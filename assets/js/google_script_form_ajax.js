var $form = $('form#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbyI0kiN9NHxFF8tDarj4M9f-npvwRZ5aUQI-ONX30C6mRtgg5BH0EKcaQjmogoUPRTQ3w/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault()
  var ajaxReq = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success:function(data) {
      document.getElementById("rsvp-form").reset();
       $('#msg').html("Thank you for your RSVP").fadeIn('slow') //also show a success message
       $('#msg').delay(5000).fadeOut('slow');
   }
 });
})
