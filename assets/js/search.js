/* global lunr */

(function(baseurl) {
  if (baseurl === undefined) {
    baseurl = '';
  }

  /**
   * Initialize the search page content.
   */
  function initSearchPage() {
    const searchTerm = getSearchQuery();
    if (searchTerm) {
      const url = baseurl + '/api/v1/pages.json';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const pagesData = JSON.parse(xhr.responseText);
            search(pagesData.entries, searchTerm);
          } else {
            const $results = document.getElementById('search-results');
            let output = '<p>There was an error while searching. Please try again.</p>';
            output += '<p>' + xhr.statusText + '</p>';
            $results.innerHTML = output;
          }
        }
      };
      xhr.onerror = function() {
        const $results = document.getElementById('search-results');
        let output = '<p>There was an error while searching. Please try again.</p>';
        output += '<p>' + xhr.statusText + '</p>';
        $results.innerHTML = output;
      };
      xhr.send(null);
    }
  }

  function search(pages, searchTerm) {
    document.getElementById('search-field').setAttribute('value', searchTerm);
    const lunrIndex = lunr(function() {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('body');
      this.field('category');
      this.field('tags');
    });

    for (let index in pages) {
      lunrIndex.add({
        id: index,
        title: pages[index].title,
        body: pages[index].body,
        category: pages[index].category,
        tags: pages[index].tags
      });
    }

    const matches = lunrIndex.search(searchTerm);

    displayResults(matches, pages);
  }

  function getSearchQuery() {
    const rawParams = window.location.search.replace(/^\?/, '');
    const params = rawParams.split('&');
    for (let index in params) {
      const keyValuePair = params[index].split('=');
      const key = keyValuePair[0];
      const value = keyValuePair[1];
      if (key === 'search') {
        return decodeURIComponent(value.replace(/\+/g, ' '));
      }
    }
  }

  function displayResults(matches, pages) {
    const $results = document.getElementById('search-results');
    if (matches.length > 0) {
      let output = '<ul class="usa-unstyled-list">';
      for (let index in matches) {
        const page = pages[matches[index].ref];
        let icon = '<i class="fa fa-bar-chart flag"></i>';

        switch (page.category) {
          case 'Data':
            icon = '<i class="fa fa-bar-chart flag"></i>';
            break;
          case 'Code':
            icon = '<i class="fa fa-code flag alt2"></i>';
            break;
          case 'APIs':
            icon = '<i class="fa fa-cogs flag alt"></i>';
            break;
          case 'Events':
            icon = '<i class="fa fa-calendar flag alt3"></i>';
            break;
          case 'Articles':
            icon = '<i class="fa fa-file-text flag"></i>';
            break;
          default:
            icon = '<i class="fa fa-file-text flag"></i>';
        }

        const title = '<h3>' + '<a href="' + page.url + '">' + page.title + '</a></h3>';
        const copy = '<p>' + page.body.substring(0, 200) + ' ...</p>';
        let outputTags = '';
        //loop through tags and parse
        const tags = Array.isArray(page.tags) ? page.tags : [page.tags];
        for(let tag of tags ){
          outputTags  += '<span class="usa-label">' + tag + '</span>';
        }

        //final output for search
        output += '<li class="result-item">' + '<div class="usa-grid"><div class="usa-width-one-third">' + icon + '</div>'+ '<div class="usa-width-two-thirds">' + title  + copy + outputTags + '</div></div>' +  '</li> <hr>';
      }
      output += "</ul>";
      $results.innerHTML = output;
    } else {
      $results.innerHTML = "<p>No results found. Try searching something like API, Data, or Code!</p>";
    }
  }

  initSearchPage();
})(window.baseurl);
