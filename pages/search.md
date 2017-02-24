---
layout: search
title: Search
banner-heading: Explore GSA Open Technology
banner-text:
hero-text: Enter a search term below.
permalink: /search/
image: /assets/img/data-pattern.png
category: search
---
<section>
  {% include search.html %}
</section>
<div id="search-results"></div>

<script>
  var baseurl = "{{ site.baseurl }}";
  var searchData = {{ site.data.search | jsonify }};
</script>


<script src="{{ '/assets/js/lib/lunr.min.js' | prepend: site.baseurl  }}"></script>
<script src="{{ '/assets/js/search.js' | prepend: site.baseurl  }}"></script>
