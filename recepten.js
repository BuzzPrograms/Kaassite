$(document).ready(function() {
  let id = findGetParameter("id")
  let file = findGetParameter("file")
  let picture = findGetParameter("p")
  if (id != null || id != undefined && file != null || file != undefined & picture != null || picture != undefined ) {
    $.ajax({
      url: 'https://api.github.com/gists/' + id,
      type: 'GET',
      dataType: 'jsonp'
    }).success(function(gistdata) {
      var content = gistdata.data.files[file].content
      var converter = new showdown.Converter(),
        text = gistdata.data.files[file].content,
        html = converter.makeHtml(text);
      $('#lekker').remove();
      $('#lekker2').remove()
      $('#main').append('<img allign="right" src='+ picture +'></img> <div>' + html + '</div>');
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
        $('#main').append('<div class="recept" style="background: url('+ content.recipies[i].photo +'); background-size: cover;"><a id="ft"'+ [i] +' class="recept" href="?id=' + content.recipies[i].id + '&file=' + content.recipies[i].file + '&p='+ content.recipies[i].photo +'">' + content.recipies[i].name + '</a></div>');
      }
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
