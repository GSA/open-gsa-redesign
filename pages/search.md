---
layout: page
title: Search
permalink: /search/
image: /assets/img/search-pattern.png
---

<form class="usa-search" action="{{ '/search' | prepend: site.baseurl }}" method="get">
  <div role="search">
    <label class="usa-sr-only" for="search-field">Search</label>
    <input id="search-field" type="search" name="search">
    <button type="submit">
      <span class="usa-search-submit-text">Search</span>
    </button>
  </div>
</form>

<div id="search-results"></div>

<script>
  var baseurl = "{{ site.baseurl }}";
  var searchData = {{ site.data.search | jsonify }};
</script>


<script src="{{ '/assets/js/lib/lunr.min.js' | prepend: site.baseurl  }}"></script>
<script src="{{ '/assets/js/search.js' | prepend: site.baseurl  }}"></script>
