/* global lunr */

(function(baseurl) {
  if (baseurl === undefined) {
    baseurl = "";
  }

  console.log("DATA", searchData);

  function initSearchPage() {

    var searchTerm = getSearchQuery();
    if (searchTerm) {
      var url = baseurl + "/api/v1/pages.json";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var pagesData = JSON.parse(xhr.responseText);
            search(pagesData.entries, searchTerm);
          } else {
            var $results = document.getElementById("search-results");
            var output = '<p>There was an error while searching. Please try again.</p>';
            output += '<p>' + xhr.statusText + '</p>';
            $results.innerHTML = output;
          }
        }
      };
      xhr.onerror = function () {
        var $results = document.getElementById("search-results");
        var output = '<p>There was an error while searching. Please try again.</p>';
        output += '<p>' + xhr.statusText + '</p>';
        $results.innerHTML = output;
      };
      xhr.send(null);
    }
  }

  function search(pages, searchTerm) {
    document.getElementById("search-field").setAttribute("value", searchTerm);
    var lunrIndex = lunr(function () {
      // console.log("THIS", this);
      this.ref("id");
      this.field("title", { boost: 10 });
      this.field("body");
      this.field("category");
      this.field("tags");
    });


    for (var i in searchData){
      pages.push(searchData[i]);
    }

    for (var index in pages) {
      console.log("page", pages[index]);
      lunrIndex.add({
        id: index,
        title: pages[index].title,
        body: pages[index].body,
        category: pages[index].category,
        tags: pages[index].tags
      });
    }

    var matches = lunrIndex.search(searchTerm);

    displayResults(matches, pages, searchData);
  }

  function getSearchQuery() {
    var rawParams = window.location.search.replace(/^\?/, "");
    var params = rawParams.split("&");
    for (var index in params) {
      var keyValuePair = params[index].split("=");
      var key = keyValuePair[0];
      var value = keyValuePair[1];
      if (key === "search") {
        return decodeURIComponent(value.replace(/\+/g, " "));
      }
    }
  }

  function displayResults(matches, pages, searchData) {
    console.log("MATCHES", matches);
    console.log("PAGES", pages);


    var $results = document.getElementById("search-results");
    if (matches.length > 0) {
      var output = '<ul class="usa-unstyled-list">';
      for (var index in matches) {

        //apis matches are breaking... need to display api results and page results
        // console.log("THE SEARCH RESULT", pages[matches[index].ref]);

        var page = pages[matches[index].ref];

        var icon = '<i class="fa fa-bar-chart flag"></i>';

        switch (page.category) {
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
            icon = '<i class="fa fa-bar-chart flag"></i>';

        }

        var title = '<h3>' + '<a href="' + page.url + '">' + page.title + '</a></h3>';
        var copy = '<p>' + page.body.substring(0, 200) + ' ...</p>';
        var outputTags = '';
        //loop through tags and parse
        for( var tag in page.tags ){
          console.log('tag', page.tags[tag]);
          outputTags  += '<span class="usa-label">' + page.tags[tag] + '</span>';
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
