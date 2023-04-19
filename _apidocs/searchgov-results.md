---
title: Search.gov Results API
banner-heading: Search.gov Results API
---

## Overview

Search.gov is a service of the General Services Administration, providing search engine capability to federal agencies for their public websites. To learn more about Search.gov and how to set up your site for search, please review the [site launch guide](https://search.gov/get-started/site-launch-guide.html).

This API exposes all relevant Search.gov results “modules” in a single JSON call, including the following:

  * Web results
  * Best bets
  * Health topics
  * Job openings
  * Recent news
  * Recent video news
  * Federal Register documents
  * Related searches

## Getting Started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/results/i14y`. You must use https. 

You can find your access key in the [Search.gov Admin Center](https://search.usa.gov/login). On the left side navigation, click the "Activate" (`</>`) icon, and select the API Access Key page.

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v2/openapi.yml">Open API specification file for the Results API</a>

<p><small><a href="#">Back to top</a></small></p>

## Note about Web Results and Endpoints

The endpoint you use to retrieve web results through this API will depend on the method we used to index your content. If we don't yet have your content indexed, you won't see results in the API.
  
We can index content using your [XML sitemap](https://search.gov/indexing/sitemaps.html) (preferred) or [RSS feeds](https://search.gov/admin-center/content/rss.html). We can also deploy a crawler on a limited basis.
  
Sites indexed via sitemaps or crawling will use the `/i14y` endpoint. Because most users are in this category, the example API calls below are to this endpoint. Sites using our [Supplemental URLs feature](https://search.gov/admin-center/content/domains-advanced.html) will use the top level `/` endpoint, please modify your calls accordingly.

<p><small><a href="#">Back to top</a></small></p>

## API Description

## Parameters
  
  Three parameters are required: (1) `affiliate`, (2) `access_key`, and (3) `query`. All others are optional.

  * You can find your site handle on the Search.gov Admin Center Settings page.
  * Your access key is unique to your site handle so they must be paired properly to return results. If you have more than one search site set up, make sure you've selected the right one to get the right handle/key combination.
  * Replace `SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX` with the query entered by the searchers using your website's search box.
  * Preformatted request strings with your unique values are provided in the [Search.gov Admin Center](https://search.usa.gov/sites/) > Your Site > Activate > Search Results API Instructions. 

  | Parameters                      | Description
  | :--								| :--
  | affiliate (required)			| Site handle <br> Example: `affiliate=YOUR_SITE_HANDLE`
  |	access\_key (required)			| The key used to access the API <br> Example: `access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER`
  | query (required)			    | Search term <br> Example: `query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX`
  | enable\_highlighting (optional) | Enables or disables the highlighting of keywords in the results. The default is 'true' so use 'false' to disable highlighting. The opening and closing highlighting characters are `<U+E000>` and `<U+E001>`, which both look like "". You can learn more about them [here](http://unicodesymbols.wikia.com/wiki/U%2BE000) and [here](http://unicodesymbols.wikia.com/wiki/U%2BE001) (external resources). Your team will determine how to display the characters, whether as bold, italics, or some other preferred highlighting style. <br> Example: `enable_highlighting=false`
  | limit (optional)                | Defines the number of results to return. The default is 20, but you can specify between 1 and 50 results. <br> Example: `limit=5`
  | offset (optional)               | Defines the number of results you want to skip from the first result. The offset is used for implementing pagination. The default is 0 and the maximum is 999. <br> Example: `offset=20`
  | sort\_by (optional)             | Allowed variables are date and relevance. The default sort is relevance. Add `sort_by=date` to sort by date.
  | sitelimit (optional)             | Limits the results to the subdomains and/or subfolders provided. Multiple values can be passed using a space-separated list. Example: `sitelimit=search.gov/about search.gov/get-started`. The values passed in the sitelimit must be in scope of the Domains list in the Search.gov Admin Center for your search site.

  Faceted search offers a set of filters people can use to narrow their results. We support filters for tags, audience, content type, file (MIME) type, and three custom use fields. To enable faceted search on your results page, use the parameters below. You must set `include_facets=true` for these parameters to be applied. For more context on how we index content into these fields, see our [metadata documentation](https://search.gov/indexing/metadata.html).

  Faceted search is available only through the /i14y endpoint. 

  | Parameters                      | Description
  | :--								| :--
  | include_facets      			| The default is `false`. To enable facet features, set this to `true` 
  | audience                        | Returns results that match any of the specified terms in the Audience field. Ex. `audience=students, policymakers` would return results with an audience of students **or** policymakers. Accepts a comma-separated list of strings. 
  | content_type                    | Returns results that match any of the specified terms in the Content Type field. Ex. `content_type=article, blog post` would return results with a content type of article **or** blog post. Accepts a comma-separated list of strings. 
  | created_since                   | Sets a lower bound for the `created` date. Date must be in ISO Format (YYYY-MM-DD).
  | created_until                   | Sets an upper bound for the `created` date. Date must be in ISO Format (YYYY-MM-DD).
  | mime_type                       | Returns results that match any of the specified terms in the mime_type field, which indicates the file type of the document. Ex. `mime_type=text/html, application/pdf` would return results with a MIME type of text/html **or** application/pdf. Accepts a comma-separated list of strings. [Read about common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).
  | searchgov_custom1               | Returns results that match any of the specified terms in the searchgov_custom1 field. Accepts a comma-separated list of strings.
  | searchgov_custom2               | Returns results that match any of the specified terms in the searchgov_custom2 field. Accepts a comma-separated list of strings.
  | searchgov_custom3               | Returns results that match any of the specified terms in the searchgov_custom3 field. Accepts a comma-separated list of strings.
  | tags                            | Returns results that match any of the specified terms in the tags field. Accepts a comma-separated list of strings.
  | updated_since                   | Sets a lower bound for the `changed` date. Date must be in ISO Format (YYYY-MM-DD).
  | updated_until                   | Sets an upper bound for the `changed` date. Date must be in ISO Format (YYYY-MM-DD).


## Expected Results

  Each item returns a unique set of fields. Each array will only have contents if there are results in that search feature matching the query.
  
  Before you begin: If you set up the Routed Query feature in the Search.gov Admin Center, you will need to set up some additional logic. If there's a match between the query and the Routed Query, we'll return only the `route_to` URL. Otherwise we'll return the full results set. See <a href="#rq">Routed Queries</a>.

  If you have `facets_enabled=true`, you will receive additional fields as noted below.

  * ### query
  
      We return the query to you for use in the results page display.

  * ### web:total

      Total number of results available.

  * ### web:next_offset

      Offset for the subsequent results.

  * ### web:include_facets

      Shows `true` if facets are enabled, and `false` if not.

  * ### web:spelling_correction

    Spelling correction for your search term.
	
  * ### web:results

      Web results from our Search.gov indexes.
      
      | Values           | Description
      | :--              | :--
      | title            | Title of the document
      | url              | URL of the document
      | snippet          | Summary of the document
      | publication_date | Publication date of the document (not available on commercial results)
      | thumbnail_url    | The [Open Graph](https://ogp.me/) image associated with the document

      **If `include_facets=true` in your request**, the following fields may show as well. We only display fields with content, so some result sets may not have all fields indicated here.

      | Values       | Description
      | :--          | :--
      | audience | Audience of the document
      | content_type | Content type of the document
      | mime_type    | MIME type (i.e. file type) of the document
      | tags         | Tags associated with the document
      | searchgov_custom1 | Search.gov custom field 1 content associated with the document
      | searchgov_custom2 | Search.gov custom field 2 content associated with the document
      | searchgov_custom3 | Search.gov custom field 3 content associated with the document
      | updated_date      | The last updated date of the document 

  * ### web:aggregations
    
    Aggregated information on facet fields, values, and their associated document counts. This is only shown if `include_facets=true`.

    Each object in the aggregations array will have the following properties:

    | Values       | Description
    | :--          | :--
    | agg_key | Name of the facet value
    | doc_count | Number of documents matching the facet value

    If the field represents a date range, additional properties will be present to indicate the start and end dates of the range.

    | Values       | Description
    | :--          | :--
    | to           | Returns the upper bound of the date range in Unix epoch time
    | from         | Returns the lower bound of the date range in Unix epoch time
    | to_as_string | Returns the upper bound of the date range as a string in M/D/YYYY format
    | from_as_string | Returns the lower bound of the date range as a string in M/D/YYYY format

  * ### text\_best_bets

      Text best bets, which appear only when the query matches the text of the best bet’s title, description, or keywords.

      | Values      | Description
      | :--         | :--
      | id          | ID of the best bet
      | title       | Title of the best bet
      | url         | URL of the best bet
      | description | Description of the best bet

  * ### graphic\_best_bets

      Graphic best bets, which appear only when the query matches the text of the best bet’s title, description, or keywords.

      | Values         	| Description
      | :--            	| :--
      | id          	| ID of the graphic best bet
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

      | Values           				| Description
      | :--                				| :--
      | position\_id        			| ID of the job opening
      | position\_title     			| Position title of the job opening
      | position\_uri       			| URI of the job opening
      | apply\_uri     					| An array which includes the URI of the application
      | position\_location\_display     | Text of the position location
      | position\_location          	| An array of locations of the job opening      
      | organization\_name  			| Organization name of the job opening
      | department\_name  				| Name of the department with opening
      | sub\_agency		  				| Name of the department's agency with opening
      | job\_category		  			| An array of job classification and code
      | job\_grade			  			| An array of job grade
      | position\_schedule		  		| An array of job schedule
      | position\_offering\_type		| An array of job type
      | qualification\_summary		  	| Summary of the job's required qualifications
      | position\_remuneration		  	| An array of salary information
      | position\_start\_date         	| Start date of the job opening
      | position_end\_date           	| End date of the job opening
      | publication\_start\_date        | Application start date
      | application\_close\_date        | Application close date
      | position\_formatted\_description| Array of formatting options for job posting
      | user\_area        				| Array for additional user-input information for the position
      | url                				| URL of the job opening
      | locations          				| An array of locations of the job opening
      | minimum             			| Minimum salary of the job opening
      | maximum            				| Maximum salary of the job opening
      | rate\_interval\_code			| Rate interval code of the job opening
      | org\_codes						| Organization codes

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



<p><small><a href="#">Back to top</a></small></p>

<a name="rq"/>
## Routed Queries

If you have [Routed Queries](https://search.gov/admin-center/content/routed-queries.html) set up in your Admin Center, then any matching query terms will change the API response.

For instance, if you set the query `example` to route to `https://www.search.gov`, then the expected response will be the following:

`{"route_to":"https://www.search.gov/"}`

To fully implement this, you will have to add logic that will process this response and redirect the user. A site-specific API call and javascript sample are available within the [Search.gov Admin Center](https://search.usa.gov/sites/) > Your Site > Activate > Search Results API Instructions.

## Contact Us

Please never hesitate to reach out! [Email the Search.gov team](mailto:search@gsa.gov). 

<p><small><a href="#">Back to top</a></small></p>
