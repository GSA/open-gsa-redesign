/* global lunr */

(function(baseurl) {
  if (baseurl === undefined) {
    baseurl = "";
  }

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
    });

    var apis = [{
        "title": "API 1",
        "body": "blah blah blah api dog cat tech sooooo what",
        "tags": [],
        "url": "www.google.com",
        "category": "cat 1"
    }, {
        "title": "API 2",
        "body": "blah blah blah api dog cat tech sooooo what",
        "tags": [],
        "url": "www.google.com",
        "category": "cat 2"
    }, {
        "title": "API 3",
        "body": "blah blah blah api dog cat tech sooooo what",
        "tags": [],
        "url": "www.google.com",
        "category": "cat 3"
    }];


    for (var i in apis){
      // console.log("api", apis[i]);
      pages.push(apis[i]);
    }

    for (var index in pages) {
      console.log("page", pages[index]);
      lunrIndex.add({
        id: index,
        title: pages[index].title,
        body: pages[index].body,
        category: pages[index].category
      });
    }
    // console.log("PAGES!!!!!", pages);



    // console.log("LUNR", lunrIndex);

    var matches = lunrIndex.search(searchTerm);

    displayResults(matches, pages, apis);
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

  function displayResults(matches, pages, apis) {
    console.log("MATCHES", matches);
    console.log("PAGES", pages);


    var $results = document.getElementById("search-results");
    if (matches.length > 0) {
      var output = '<ul class="usa-unstyled-list">';
      for (var index in matches) {

        //apis matches are breaking... need to display api results and page results
        console.log("THE SEARCH RESULT", pages[matches[index].ref]);

        var page = pages[matches[index].ref];

        output += '<li><h3><a href="' + page.url + '">' + page.title + '</a></h3><p>' + page.body.substring(0, 200) + ' ...</p></li>';

        console.log(output);
      }
      output += "</ul>";
      $results.innerHTML = output;
    } else {
      $results.innerHTML = "<p>No results found.</p>";
    }
  }

  initSearchPage();

})(window.baseurl);
