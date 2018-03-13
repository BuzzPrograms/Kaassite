$(document).ready(function() {
  //Create a Gist with token from above
  $.ajax({
    url: 'https://api.github.com/gists',
    type: 'POST',
    // beforeSend: function(xhr) {
    //   xhr.setRequestHeader("Authorization", "token TOKEN-FROM-AUTHORIZATION-CALL");
    // },
    data: '{"description": "a gist for a user with token api call via ajax","public": true,"files": {"file1.txt": {"content": "String file contents via ajax"}}}'
  }).done(function(response) {
    console.log(response);
  });

  // //Using Gist ID from the response above, we edit the Gist with Ajax PATCH request
  // $.ajax({
  //   url: 'https://api.github.com/gists/4bf87d29334d462149059e5ffd9c23a6',
  //   type: 'PATCH',
  //   // beforeSend: function(xhr) {
  //   //   xhr.setRequestHeader("Authorization", "token TOKEN-FROM-AUTHORIZATION-CALL");
  //   // },
  //   data: '{"description": "updated gist via ajax","public": true,"files": {"file1.txt": {"content": "updated String file contents via ajax"}}}'
  // }).done(function(response) {
  //   console.log(response);
  // });
});
