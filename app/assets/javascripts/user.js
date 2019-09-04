$(function() {

  var searchResult = $("#user-search-result");

  function searchUser(user){  
  
    var html = `<div class="chat-group-user clearfix">  
                  <p class="chat-group-user__name">${ user.user_name }</p>  
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.user_id } data-user-name=${ user.user_name }>追加</a>  
                </div>`  
    searchResult.append(html);  
  }  


  function searchNoUser(user) {  
    console.log(user)
    var html = `<div class="chat-group-user clearfix">  
                  <p class="chat-group-user__name">${ user }</p>  
                </div>`  
    searchResult.append(html);  
  }  

  var members = $("#chat-group-users")  
  function addUser(id, name) {  
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>  
                <input name='group[user_ids][]' type='hidden' value=${ id }>  
                <p class='chat-group-user__name'>${ name }</p>  
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>  
                </div>`  
    members.append(html);  
  }  
$("#user-search-field").on('keyup', function(e){
  var input = $("#user-search-field").val();  

  $.ajax({
    type: 'get',
    url: '/users',
    data: { keyword: input },
    dataType: 'json'
  })
  .done(function(users){   
    $('#user-search-result').empty();             // usersにjson形式のuser変数が代入される。複数形なので配列型で入ってくる
    if (input.length !== 0) {         // フォームの文字列長さが0であれば、インクリメンタルサーチ結果を表示しないようにする
        users.forEach(function(user){ // users情報をひとつずつとりだしてuserに代入
            searchUser(user);
        });
    }

    else {
        searchNoUser("ユーザーはいません");
    }
})

.fail(function() {
    alert('ユーザー検索に失敗しました');
});
});

  $(document).on("click", ".user-search-add", function(){  
    var user_id = $(this).data("user-id")  
    var user_name = $(this).data("user-name")  
    addUser( user_id, user_name );  
    $(this).parent().remove();  
  });  
  $(document).on("click", ".user-search-remove", function() {  
    $(this).parent().remove();  
});  

});


