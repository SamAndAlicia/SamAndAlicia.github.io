var $form = $('form#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbzof6Rv25-NQExh3aDp9p-ZRAFTrG1XqTpKXLS5cJJ6VGpRyZ6VWIA-bchY1Xi0KPP5Vw/exec'

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
