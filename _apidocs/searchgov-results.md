---
title: SearchGov results API
banner-heading: SearchGov results API
---

## Overview

[SearchGov](https://digital.gov/guides/search) is the search engine built specifically for federal websites. 

SearchGov supports over 200 million searches a year across one-third of federal domains by providing a configurable search engine that allows you to customize search experiences for the public.

This API exposes all relevant search results in a single JSON call.

## Getting started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/results/i14y`. You must use https. 

Get your access key on the API Access Key page in the [Admin Center](https://search.usa.gov/sites).

View the full details of this API in the <a href="v2/openapi.yml">Open API specification file for the Results API</a>.

## Web results and endpoints

The endpoint you use to retrieve web results through this API will depend on the method we used to index your content. If we do not have your content indexed, you will not see results in the API.
  
We use your [robots.txt file](https://digital.gov/resources/introduction-robots-txt-files) and [XML sitemap](https://digital.gov/resources/introduction-xml-sitemaps) to crawl of your website and index your content. Be sure to properly configure them to [optimize your content](https://digital.gov/guides/search/optimize).

## API parameters and description  
Three parameters are required: `affiliate`, `access_key`, and `query`. All other parameters are optional.

  * Get your site handle on the Settings page in the Admin Center.
  * Your access key is unique to your site handle, so it must be paired properly with the site handle to return results. If you have more than one search site set up, make sure you select the right one to get the right handle/key combination.
  * Replace `SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX` with the query entered by the searchers using your website's search box.
  * Preformatted request strings with your unique values are provided in the [Admin Center](https://search.usa.gov/sites/) > Your Site > Activate > Search Results API Instructions. 

  | Parameters                      | Description
  | :--								| :--
  | affiliate (required)			| Site handle <br> Example: `affiliate=YOUR_SITE_HANDLE`
  |	access\_key (required)			| The key used to access the API <br> Example: `access_key=YOUR_UNIQUE_ACCESS_KEY_FROM_ADMIN_CENTER`
  | query (required)			    | Search term <br> Example: `query=SEARCH_TERM_ENTERED_IN_YOUR_SEARCH_BOX`
  | enable\_highlighting (optional) | Enables or disables the highlighting of keywords in the results. The default is 'true' so use 'false' to disable highlighting. The opening and closing highlighting characters are `<U+E000>` and `<U+E001>`, which both look like "". You can learn more about them [here](http://unicodesymbols.wikia.com/wiki/U%2BE000) and [here](http://unicodesymbols.wikia.com/wiki/U%2BE001) (external resources). Your team will determine how to display the characters, whether as bold, italics, or some other preferred highlighting style. <br> Example: `enable_highlighting=false`
  | limit (optional)                | Defines the number of results to return. The default is 20, but you can specify between 1 and 50 results. <br> Example: `limit=5`
  | offset (optional)               | Defines the number of results you want to skip from the first result. The offset is used for implementing pagination. The default is 0 and the maximum is 999. <br> Example: `offset=20`
  | sort\_by (optional)             | Allowed variables are date and relevance. The default sort is relevance. Add `sort_by=date` to sort by date.
  | sitelimit (optional)             | Limits the results to the subdomains and/or subfolders provided. Multiple values can be passed using a space-separated list. Example: `sitelimit=digital.gov/guides`. The values passed in the sitelimit must be in scope of the Domains list in the Admin Center for your search site.

Faceted search offers a set of filters people can use to narrow their results. We support filters for tags, audience, content type, file (MIME) type, and three custom use fields. To enable faceted search on your results page, use the parameters below. You must set `include_facets=true` for these parameters to be applied. 

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

## Expected results

Each item returns a unique set of fields. Each array will only have contents if there are results in that search feature matching the query.

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

      Web results from our indexes.
      
      | Values           | Description
      | :--              | :--
      | title            | Document title
      | url              | Document URL
      | snippet          | Document summary
      | publication_date | Document publication date
      | thumbnail_url    | [Open Graph](https://ogp.me/) image associated with the document

      **If `include_facets=true` in your request**, the following fields may show as well. We only display fields with content, so some result sets may not have all fields indicated here.

      | Values       | Description
      | :--          | :--
      | audience | Audience of the document
      | content_type | Content type of the document
      | mime_type    | MIME type (i.e. file type) of the document
      | tags         | Tags associated with the document
      | searchgov_custom1 | Custom field 1 content associated with the document
      | searchgov_custom2 | Custom field 2 content associated with the document
      | searchgov_custom3 | Custom field 3 content associated with the document
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

## Routed queries

If you have routed queries set up in your Admin Center, then any matching query terms will change the API response. For example, if you set the query `usa` to route to `https://www.usa.gov`, then the expected response will be the following:

`{"route_to":"https://www.usa.gov/"}`

To implement routed queries, you need to add logic to process this response and redirect users. 

## Request support

Review our guide, [Optimizing site search with SearchGov](https://digital.gov/guides/search), for more information on how to set up, design, optimize, and analyze your search experience. You can also check the system status and review the terms of service.

If you have any other questions, please [email the SearchGov team](mailto:search@gsa.gov).
