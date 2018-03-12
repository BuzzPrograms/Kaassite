$(document).ready(function() {
  let id = findGetParameter("id")
  let file = findGetParameter("file")
  if (id != null || id != undefined && file != null || file != undefined) {
    $.ajax({
      url: 'https://api.github.com/gists/' + id,
      type: 'GET',
      dataType: 'jsonp'
    }).success(function(gistdata) {
      var content = gistdata.data.files[file].content
      var converter = new showdown.Converter(),
        text = gistdata.data.files[file].content,
        html = converter.makeHtml(text);
      $('#main').append('<div>' + html + '</div>');
    }).error(function(e) {
        alert("Error");
    });
  } else {
    $.ajax({
      url: 'https://api.github.com/gists/bb3522bee8c03ab8562e1bc59ec70b76',
      type: 'GET',
      dataType: 'jsonp'
    }).success(function(gistdata) {
      var content = JSON.parse(gistdata.data.files["Gists.json"].content);
      for (var i = 0; i < content["recipies"].length; i++) {
        $('#main').append('<div class="recept" style="background: url('+ content.recipies[i].photo +'); background-size: cover;"><a id="ft" class="recept" href="?id=' + content.recipies[i].id + '&file=' + content.recipies[i].file + '">' + content.recipies[i].name + '</a></div>');
      }
      $("#ft").fitText();
    }).error(function(e) {
      alert("Error");
    });
  }
});


function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
