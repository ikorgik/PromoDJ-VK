
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
        addListLinks(listItems);

        // Trendy page.
        var trendyItems = document.querySelectorAll('.trendy div.playerr_title');
        addListLinks(trendyItems);

        // Song detail page.
        var songTitle = document.querySelectorAll('.generic_title h5');
        Array.prototype.forEach.call(songTitle, function(item) {
          var title = item.innerHTML.substring(0, item.innerHTML.indexOf('<nobr>')).cleanTitle();
          item.addVKLink(title);
        });
      }
    }, 1500);
  }
}

/**
 * Adds VK links to each song.
 */
function addListLinks(items) {
  Array.prototype.forEach.call(items, function(item) {
    var title = item.querySelector('a').innerHTML.cleanTitle();
    item.addVKLink(title);
  });
}

/**
 * Clean up string.
 */
String.prototype.cleanTitle = function() {
  var title = this.trim().replaceHtmlEntites();
  title = encodeURI(title);
  return title.replace(/&/g, '%26').replace(/#/g, '%23');
};

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

/**
 * Generates link to VK with song title as parameter.
 */
Element.prototype.addVKLink = function(title) {
  var href = 'https://vk.com/search?c[q]=' + title + '&c[section]=audio';
  this.insertAdjacentHTML('beforeend', '<a class="find-in-vk-link" target="_blank" href="' + href + '"></a>');
};
