---
layout: search
title: Search
banner-heading: Explore GSA Open Technology
banner-text:
hero-text: Enter a search term below.
permalink: search.html
image: /assets/img/data-pattern.png
category: search
---
<section class="usa-section test-class">
  <div class="usa-grid">
    <div class="usa-width-one-whole">
      {% include search.html %}
    </div>
  </div>
</section>

<section>
  <div class="usa-grid">
    <div class="usa-width-one-whole">
      <div id="search-results"></div>
    </div>
  </div>
</section>

<script>
  var baseurl = "{{ site.baseurl }}";
  var searchData = {{ site.data.search | jsonify }};
</script>


<script src="{{ '/assets/js/lib/lunr.min.js' | prepend: site.baseurl  }}"></script>
<script src="{{ '/assets/js/search.js' | prepend: site.baseurl  }}"></script>
