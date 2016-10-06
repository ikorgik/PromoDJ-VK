
var items = document.querySelectorAll('.track2 .title');

Array.prototype.forEach.call(items, function (item) {
  var title = item.querySelector('a.invert').innerHTML.replace('&amp;', '%26').replace('&nbsp;', ' ');
  console.log(title);
 // Sia – The Greatest (Amice Remix)
  // Sia&nbsp;–&nbsp;The Greatest (Amice Remix)

  var vkLink = document.createElement('a');
  vkLink.appendChild(document.createTextNode("[vk]"));
  vkLink.title = title;
  vkLink.target = "_blank";
  vkLink.href = "https://vk.com/search?c[q]=" + title + "&c[section]=audio";
  item.appendChild(vkLink);

  var ymLink = document.createElement('a');
  ymLink.appendChild(document.createTextNode("[ym]"));
  ymLink.title = title;
  ymLink.target = "_blank";
  ymLink.href = "https://music.yandex.ru/search?text=" + title;

  item.appendChild(ymLink);
});
// Alternative of DOMContentLoaded (doesn't work somewhy).
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var items = document.querySelectorAll('.trendy div.playerr_title');

    Array.prototype.forEach.call(items, function (item) {
      //var title = item.querySelector('a').innerHTML.replace('&nbsp;', " ").replace('&amp;', '%26');
      var title = item.querySelector('a').innerHTML;
      title = title.replaceHtmlEntites();
      title = encodeURI(title);
      //title = title.replace(/&/g, '%26').replace(/#/g, '%23');

      console.log(title);



      var vkLink = document.createElement('a');
      vkLink.appendChild(document.createTextNode("[vk]"));
      vkLink.title = title;
      vkLink.target = "_blank";
      vkLink.href = "https://vk.com/search?c[q]=" + title + "&c[section]=audio";
      item.appendChild(vkLink);

      var ymLink = document.createElement('a');
      ymLink.appendChild(document.createTextNode("[ym]"));
      ymLink.title = title;
      ymLink.target = "_blank";
      ymLink.href = "https://music.yandex.ru/search?text=" + title;

      item.appendChild(ymLink);
    });

  }
}

String.prototype.replaceHtmlEntites = function() {
  var s = this;
  var translate_re = /&(nbsp|amp|quot|lt|gt);|#/g;
  var translate = {"nbsp": " ", "amp" : "%26", "quot": "\"","lt"  : "<","gt"  : ">", "#": "%23"};
  return ( s.replace(translate_re, function(match, entity) {
    return translate[entity];
  }) );
};

