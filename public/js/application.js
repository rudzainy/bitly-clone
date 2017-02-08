$(document).ready(function(){
  console.log("jQuery ready!");


  var form = $('#shortener_form');
  form.on('submit', function(formSubmissionEvent){
    formSubmissionEvent.preventDefault();
    console.log("Prevented default action!");

    $('body').prepend('<img src="/img/spinner.gif" id="spinner"/>');

    $.ajax({
      url: form.attr('action'),
      method: form.attr('method'),
      data: form.serialize(),
      dataType: 'JSON',
      success: function(response) {

        $('#spinner').hide();
        console.log(response);

        $('tbody').append('\
          <tr class="tr-content">\
            <td>0.</td>\
            <td>' + response.long_url + '</td>\
            <td>' + response.short_url + '</td>\
            <td class="center">0</td>\
          </tr>');
      }
    });
  })
})