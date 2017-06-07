$(document).ready(function(){
  $.getJSON('/burritos').then(function(burritos){
    for(var i = 0; i < burritos.length; i++){
      var $li = $('<li>', {
        text: `${burritos[i].name} - ${burritos[i].hasBeans}`
      });
      $('#burrito-list').append($li)
    }
  })
  $("form").on('submit', function(event){
    event.preventDefault();

    var formData = $('form').serializeArray().reduce(function(acc, next){
      acc[next.name] = next.value
      return acc;
    }, {})

    $.ajax({
      method: "POST",
      url: "/burritos",
      data: formData
    }).then(function(response){
      var $newBurrito = $('<li>', {
        text: `${response.name} - ${response.hasBeans}`
      })
      $('#burrito-list').append($newBurrito)
      $("form").trigger('reset')
    })
  })
});


