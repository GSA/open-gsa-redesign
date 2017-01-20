---
layout: page
title: Search
permalink: /search/
image: /assets/img/search-pattern.png
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
