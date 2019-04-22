/* global lunr */

(function () {
  const actualBaseUrl = (window.baseurl === undefined) ? '' : window.baseurl;

  function getSearchQuery() {
    const rawParams = window.location.search.replace(/^\?/, '');
    const params = rawParams.split('&');
    let query = '';
    params.forEach((param) => {
      const keyValuePair = param.split('=');
      const key = keyValuePair[0];
      const value = keyValuePair[1];
      if (key === 'search') {
        query = decodeURIComponent(value.replace(/\+/g, ' '));
      }
    });
    return query;
  }

  function displayResults(matches, pages) {
    const $results = document.getElementById('search-results');
    if (matches.length > 0) {
      let output = '<ul class="usa-unstyled-list">';
      matches.forEach((match) => {
        const page = pages[match.ref];

        let icon = '<i class="fa fa-file-text flag"></i>';
        if (page.meta.category) {
          switch (page.meta.category.toLowerCase()) {
            case 'data':
              icon = '<i class="fa fa-bar-chart flag"></i>';
              break;
            case 'code':
              icon = '<i class="fa fa-code flag alt2"></i>';
              break;
            case 'apis':
              icon = '<i class="fa fa-cogs flag alt"></i>';
              break;
            case 'events':
              icon = '<i class="fa fa-calendar flag alt3"></i>';
              break;
            case 'articles':
              icon = '<i class="fa fa-file-text flag"></i>';
              break;
            default:
              icon = '<i class="fa fa-file-text flag"></i>';
          }
        }

        const title = `<h3><a href="${page.url}">${page.title}</a></h3>`;
        const copy = `<p>${page.body.substring(0, 200)} ...</p>`;

        let outputTags = '';
        const tags = Array.isArray(page.tags) ? page.tags : [page.tags];
        tags.forEach((tag) => {
          outputTags += `<span class="usa-label">${tag}</span>`;
        });

        // final output for search
        output += `<li class="result-item"><div class="usa-grid"><div class="usa-width-one-third">${icon}</div><div class="usa-width-two-thirds">${title} ${copy} ${outputTags}</div></div></li><hr>`;
      });
      output += '</ul>';
      $results.innerHTML = output;
    } else {
      $results.innerHTML = '<p>No results found. Try searching something like API, Data, or Code!</p>';
    }
  }

  function search(pages, searchTerm) {
    document.getElementById('search-field').setAttribute('value', searchTerm);
    const lunrIndex = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('body');
      this.field('category');
      this.field('tags');
    });

    pages.forEach((page, index) => {
      lunrIndex.add({
        id: index,
        title: page.title,
        body: page.body,
        category: page.category,
        tags: page.tags,
      });
    });

    const matches = lunrIndex.search(searchTerm);

    displayResults(matches, pages);
  }

  /**
   * Initialize the search page content.
   */
  function initSearchPage() {
    const searchTerm = getSearchQuery();
    if (searchTerm) {
      const url = `${actualBaseUrl}/api/v1/pages.json`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const pagesData = JSON.parse(xhr.responseText);
            search(pagesData.entries, searchTerm);
          } else {
            const $results = document.getElementById('search-results');
            let output = '<p>There was an error while searching. Please try again.</p>';
            output += `<p>${xhr.statusText}</p>`;
            $results.innerHTML = output;
          }
        }
      };
      xhr.onerror = function () {
        const $results = document.getElementById('search-results');
        let output = '<p>There was an error while searching. Please try again.</p>';
        output += `<p>${xhr.statusText}</p>`;
        $results.innerHTML = output;
      };
      xhr.send(null);
    }
  }

  initSearchPage();
}());
