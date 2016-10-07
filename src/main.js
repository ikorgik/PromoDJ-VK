
document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    var oldURL = '';

    // Periodically check page url to support no page reload behaviour.
    setInterval(function() {
      var currentURL = window.location.href;

      if (currentURL != oldURL) {
        oldURL = currentURL;

        // Track list page.
        var listItems = document.querySelectorAll('.track2 .title');
        addLinks(listItems);

        // Trendy page.
        var trendyItems = document.querySelectorAll('.trendy div.playerr_title');
        addLinks(trendyItems);
      }
    }, 1500);
  }
}

/**
 * Adds VK links to each song.
 */
function addLinks(items) {
  Array.prototype.forEach.call(items, function (item) {
    // Prepares song title.
    var title = item.querySelector('a').innerHTML.replaceHtmlEntites();
    title = encodeURI(title);
    title = title.replace(/&/g, '%26').replace(/#/g, '%23');

    // Generates link to VK with song title as parameter.
    var href = 'https://vk.com/search?c[q]=' + title + '&c[section]=audio';
    item.insertAdjacentHTML('beforeend', '<a class="find-in-vk-link" target="_blank" href="' + href + '"></a>');
  });
}

/**
 * Replaces special chars to clean up title before using in link.
 */
String.prototype.replaceHtmlEntites = function() {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {'nbsp': ' ', 'amp' : '&', 'quot': '\'','lt'  : '<','gt'  : '>'};
  return (this.replace(translate_re, function(match, entity) {
    return translate[entity];
  }));
};
