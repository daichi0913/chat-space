$(function(){
  function buildHTML(message) {


    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="main0" data-message-id="${message.id}">
           <div class="main1">
             ${message.user_name}
              <div class="main2x">
                ${message.date}
              </div>
            </div>
            <div class="main3x">
              ${content}
              ${img}
            </div>
         </div>`
   return html;

 }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href);
        $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
       $('.messages').append(html);
       $('#new_message')[0].reset(); 
       $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      return false
    })


    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })

    .always(function(data){
      $('.footer4').prop('disabled', false); 
    })
  })

  var reloadMessages = function() {
    
    last_message_id = $('.main0:last').data('message-id')
    $.ajax({
    
      url: "api/messages",
    
      type: 'get',
      dataType: 'json',
      
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
        messages.forEach(function(message){
      
          var html = buildHTML(message);

          $('.main0:last').append(html);
    })
  })
  //   };
  //  fail(function(){
  //   alert('自動更新ができませんでした');
  // })
  $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
 };
  
    setInterval(reloadMessages, 5000);
  });

