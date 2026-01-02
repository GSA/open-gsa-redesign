---
title: SearchGov results API
banner-heading: SearchGov results API
---

## Overview

[SearchGov](https://digital.gov/guides/search) is the search engine built specifically for federal websites. 

SearchGov supports over 200 million searches a year across one-third of federal domains by providing a configurable search engine that allows you to customize search experiences for the public.

Most customers use the hosted search results page, but you can use our two SearchGov APIs you to display results within your own website.

1. Results API. Use the results API to receive web results, best bets, news, and videos in one JSON call.
2. [Clicks API](https://open.gsa.gov/api/searchgov-clicks/). Use the clicks API with the search results API to send us click data. This data improves the relevance of your web results.

While using the APIs gives you more control over the look and feel of the search results, you will need a team of designers, engineers, and other digital service experts to create your search experience and maintain it over time.

## Getting started

[Set up your search experience](https://digital.gov/guides/search/set-up) in the [Admin Center](https://search.usa.gov/sites). 

After creating the new site, you need to add the domains for the content you want included in the search results.

We use your [robots.txt file](https://digital.gov/resources/introduction-robots-txt-files) and [XML sitemap](https://digital.gov/resources/introduction-xml-sitemaps) to crawl of your website and index your content. Be sure to properly configure them to [optimize your content](https://digital.gov/guides/search/optimize).

If we do not have your content indexed, you will not see results in the API.

## API parameters

The API endpoint is `https://api.gsa.gov/technology/searchgov/v2/results/i14y`. You must use https. 

Three parameters are required: 
1. affiliate
2. access_key
3. query

  | Required parameters             | Description
  | :--								| :--
  | affiliate						| Your site's unique 'site handle' that you created when you set up your search experience. Find your site handle on the Settings page in the [Admin Center](https://search.usa.gov/sites). <br><br> Example: `affiliate=agencygov`
  |	access\_key						| Your site's unique API access key that we autonmatically generated when you set up your search experience. Find your access key on the API Access Key page in the [Admin Center](https://search.usa.gov/sites). <br><br> Example: `access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=`
  | query						    | The query entered by a user via your site's search box. <br><br> Example: `query=hello+world`

Each access key is unique to each site handle, so they must be paired properly to return results. If you have more than one site set up in the Admin Center, be sure to use the correct combination.

The following API query contains all three required parameters using these examples. 

```https://api.gsa.gov/technology/searchgov/v2/results/i14y?affiliate=agencygov&access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=&query=hello+world```

All other parameters are optional.

  | Optional parameters				| Description
  | :--								| :--
  | enable\_highlighting			| By default, we highlight all relevant, matched keywords in the search results (`enable_highlighting=true`). The opening Unicode character for highlighting is 'U+E000' and the closing character is 'U+E001'. You need to decide how to display these characters &mdash; whether as bold, italic, or another style. You can use 'false' to remove the highlighting. <br><br> Example: `enable_highlighting=false`
  | limit							| By default, we return 20 results. You can specify between 1 and 50 results. <br><br> Example: `limit=50`
  | offset							| By default, we set the offset to 0. The offset defines the number of results skipped from the first result. You can use the offset parameter to implement pagination. The maximum value is 999. <br><br> Example: `offset=10`
  | sort\_by						| By default, we return results sorted by relevance (`sort_by=relevance`). You can also sort by date. <br><br> Example: `sort_by=date` 
  | sitelimit						| By default, we return all results within the scope of the domains you set up in the Admin Center. You can use the sitelimit parameter to limits the results to only content within specific subdomains or subfolders. You can include multiple sitelimit values using a space-separated list. The sitelimit values must be within the scope of the domains set up in the Admin Center. <br><br> Example 1: `sitelimit=digital.gov/guides` and Example 2: `sitelimit=pra.digital.gov` for a site set up to search across the entire digital.gov domain by default
  | api\_key						| By default, you can make 1,000 requests per hour using your SearchGov access key. If you need higher rate limits, please [email the SearchGov team](mailto:search@gsa.gov) for information on how to set up an [API.Data.gov API key][https://api.data.gov/docs/developer-manual/] to increase them.

Preformatted request strings with your unique values are provided on the Search Results API Instructions in the Activate section of the [Admin Center](https://search.usa.gov/sites/). 

You can also view the full details of this API in the [Open API specification file for the Results API](https://open.gsa.gov/api/searchgov-clicks/v2/openapi.yml).

## Expected results

Each item returns a unique set of fields. Each array will only have contents if there are results in that search feature matching the query.

### query
  
We return the query to you for use in the results page display.

### web:total

Total number of results available.

### web:next_offset

Offset for the subsequent results.

### web:spelling_correction

Spelling correction for the query term, if any.
	
### web:results

Web results based on the domain you set up in the Admin Center.
      
      | Values           | Description
      | :--              | :--
      | title            | Document title
      | url              | Document URL
      | snippet          | Document summary
      | publication_date | Document publication date
      | thumbnail_url    | [Open Graph](https://ogp.me/) image associated with the document

### text\_best_bets

[Best bets](https://digital.gov/guides/search/optimize#recommend-content-with-best-bets), recommended contents that appears only when the user's query matches the title, description, or keyword of a best bet you set up in the Admin Center.

      | Values      | Description
      | :--         | :--
      | id          | ID of the best bet
      | title       | Title of the best bet
      | url         | URL of the best bet
      | description | Description of the best bet

## Routed queries

If you have routed queries set up in your Admin Center, then any matching query terms will change the API response. For example, if you set the query 'usa' to route to 'https://www.usa.gov', then the expected response will be the following:

```{"route_to":"https://www.usa.gov/"}```

To implement routed queries, you need to add logic to process this response and redirect users. 

## Request support

Review our guide, [Optimizing site search with SearchGov](https://digital.gov/guides/search), for more information on how to set up, design, optimize, and analyze your search experience. You can also check the system status and review the terms of service.

If you have any other questions, please [email the SearchGov team](mailto:search@gsa.gov).
