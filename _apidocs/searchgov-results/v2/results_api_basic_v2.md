---
title: Search.gov Results API
banner-heading: Search.gov Results API
---

## Overview

Search.gov is a service of the General Services Administration, providing search engine capability to federal agencies for their public websites. To learn more about Search.gov and how to set up your site for search, please review the [site launch guide](https://search.gov/manual/site-launch-guide.html).

This API exposes all relevant Search.gov results “modules” in a single JSON call, including the following:

  * Web results
  * Best bets
  * Health topics
  * Job openings
  * Recent tweets
  * Recent news
  * Recent video news
  * Federal Register documents
  * Related searches

## Getting Started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/results/i14y`.

You must use https.

<p><small><a href="#">Back to top</a></small></p>

  * You can find your access key on the API Access Key page of the Search.gov Admin Center.


## Note about Web Results and Endpoints

The endpoint you use to retrieve web results through this API will depend on the method we used to index your content. If we don't yet have your content indexed, you won't see results in the API.
  
We can index content using your [XML sitemap](https://search.gov/blog/sitemaps.html) (preferred) or [RSS feeds](https://search.gov/manual/rss.html)}). We can also deploy a crawler on a limited basis.
  
Sites indexed via sitemaps or crawling will use the `/i14y` endpoint. Because most users are in this category, the example API calls below are to this endpoint. Sites indexed via RSS will use the top level `/` endpoint, please modify your calls accordingly.

<p><small><a href="#">Back to top</a></small></p>

## API Description

  ## Required Parameters
  
  Three parameters are required: `affiliate`, `access_key`, and `query`. All others are optional.
  `https://api.gsa.gov/technology/searchgov/v2/results/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX`

  * You can find your site handle on the Settings page.
  * Replace `SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX` with the query entered by the searchers using your website's search box.
  * Preformatted request strings with your unique values are provided in the Admin Center.

  Note that your access key is unique to your site handle so they must be paired properly to return results.

  | Parameters                      | Description
  | :--								| :--
  | affiliate (required)			| Site handle
  |	access\_key (required)			| The key used to access the API
  | query (required)			    | Search term
  |									|`https://search.usa.gov/api/v2/search/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX&sort_by=date`
  | enable\_highlighting (optional) | Enables or disables the highlighting of keywords in the results. The default is 'true' so use 'false' to disable highlighting. The opening and closing highlighting characters are `<U+E000>` and `<U+E001>`, which both look like "". You can learn more about them [here](http://unicodesymbols.wikia.com/wiki/U%2BE000) and [here](http://unicodesymbols.wikia.com/wiki/U%2BE001) (external resources). Your team will determine how to display the characters, whether as bold, italics, or some other preferred highlighting style.
  |									|`https://search.usa.gov/api/v2/search/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX&enable_highlighting=false`
  | limit (optional)                | Defines the number of results to return. The default is 20, but you can specify between 1 and 50 results.
  |									|`https://search.usa.gov/api/v2/search/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX&limit=5`
  | offset (optional)               | Defines the number of results you want to skip from the first result. The default is 0 and the maximum is 999.
  |									|`https://search.usa.gov/api/v2/search/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX&offset=20`
  | sort\_by (optional)             | Sort the results by date. The default is sort by relevance.
  |									|`https://search.usa.gov/api/v2/search/i14y?affiliate=YOUR_SITE_HANDLE&access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER&query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX&sort_by=date`

  ## Expected Results

  Each item returns a unique set of fields. Each array will only have contents if there are results in that search feature matching the query.

  * ### web:results

      Web results from our Search.gov indexes.

      | Values           | Description
      | :--              | :--
      | title            | Title of the document
      | url              | URL of the document
      | snippet          | Summary of the document
      | publication_date | Publication date of the document (not available on commercial results)

  * ### web:total

      Total number of results available.

  * ### web:next_offset

      Offset for the subsequent results.

  * ### web:spelling_correction

    Spelling correction for your search term.

  * ### text\_best_bets

      Text best bets, which appear only when the query matches the text of the best bet’s title, description, or keywords.

      | Values      | Description
      | :--         | :--
      | title       | Title of the best bet
      | url         | URL of the best bet
      | description | Description of the best bet

  * ### graphic\_best_bets

      Graphic best bets, which appear only when the query matches the text of the best bet’s title, description, or keywords.

      | Values         	| Description
      | :--            	| :--
      | title          	| Title of the graphic best bet
      | title\_url      | URL of the graphic best bet
      | image\_url      | URL of the graphic image
      | image\_alt_text | Alternative text of the image
      | links          	| An array of links in the graphic best bet. Each link contains a title and a URL

  * ### health_topics

      | Values         	| Description
      | :--            	| :--
      | title          	| Title of the health topic
      | url            	| URL of the health topic
      | snippet        	| Snippet of the health topic
      | related\_topics | An array of topics related to the health topic. Each topic contains a title and a URL
      | related_sites  	| An array of sites related to the the health topic. Each site contains a title and a URL

  * ### job_openings

      | Values             	| Description
      | :--                	| :--
      | position\_title     | Position title of the job opening
      | organization\_name  | Organization name of the job opening
      | rate\_interval\_code| Rate interval code of the job opening
      | minimum             | Minimum salary of the job opening
      | maximum            	| Maximum salary of the job opening
      | start\_date         | Start date of the job opening
      | end_date           	| End date of the job opening
      | locations          	| An array of locations of the job opening
      | url                	| URL of the job opening

  * ### recent_tweets

      | Values            	| Description
      | :--               	| :--
      | text              	| Text of the tweet
      | url               	| URL of the tweet
      | name              	| Name of the tweet author
      | screen\_name       	| Screen name of the tweet author
      | profile\_image_url 	| URL of the tweet author profile image

  * ### recent_news

      Recent news from our Search.gov indexes. Only available with commercial results.

      | Values           | Description
      | :--              | :--
      | title            | Title of the recent news
      | url              | URL of the recent news
      | snippet          | Snippet of the recent news
      | publication_date | Publication date of the recent news
      | source           | Source of the recent news

  * ### recent\_video_news

      Recent video news from our Search.gov indexes. Only available with commercial results.

      | Values           | Description
      | :--              | :--
      | title            | Title of the recent video news
      | url              | URL of the recent video news
      | snippet          | Snippet of the recent video news
      | publication\_date | Publication date of the recent video news
      | source           | Source of the recent video news
      | thumbnail_url    | Thumbnail URL of the recent video news

  * ### federal\_register_documents

      Federal Register documents

      | Values              | Description
      | :--                 | :--
      | id                  | The ID of the document as known to usasearch
      | document\_number    | Document number of the federal register document
      | document\_type      | Document type of the federal register document
      | title               | Title of the federal register document
      | url                 | URL of the federal register document
      | agency\_names       | An array of agency names of the federal register document
      | page\_length        | Page length of the federal register document
      | start\_page         | Start page of the federal register document
      | end\_page           | End page of the federal register document
      | publication\_date   | Publication date of the federal register document
      | comments\_close_date| Comments close date of the federal register document

  * ### related\_search_terms

      An array of related search terms, which are based on recent, common searches on the your site. Users will need to render each of these into a link that would make a new API call with that query term as they query

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

Please never hesitate to reach out! [Email us](search@support.digitalgov.gov) or call us at 202-969-7426. 

<p><small><a href="#">Back to top</a></small></p>