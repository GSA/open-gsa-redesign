---
title: SearchGov results API
banner-heading: SearchGov results API
---

## About SearchGov

[SearchGov](https://digital.gov/guides/search) is the search engine built specifically for federal websites. We support over 200 million searches a year across one-third of federal domains by providing a configurable search engine that allows you to customize search experiences for the public.

Most customers use our hosted search results page, but you can use our two APIs to display results within your own website.

1. **Results API** to receive search results. Keep reading for more information on the results API.
2. **Clicks API** to send us click data. Sending us this data improves the relevance of your web results. Be sure to review the related documentation for the [clicks API](https://open.gsa.gov/api/searchgov-clicks/).

You must use both APIs for a complete search experience.

While using these APIs gives you more control over the look and feel of the search results, you will need a team of designers, engineers, and other digital service experts to create your search experience and maintain it over time.

## Getting started with the results API

The first thing you need to do is [set up your search experience](https://digital.gov/guides/search/set-up). Follow the prompts to create an account and the required five steps to go live with SearchGov, including adding the domains you want included in your search results.

We use your [robots.txt file](https://digital.gov/resources/introduction-robots-txt-files) and [XML sitemap](https://digital.gov/resources/introduction-xml-sitemaps) to crawl of your website and index your content. Be sure to properly configure them to [optimize your content](https://digital.gov/guides/search/optimize).

If we do not have your content indexed, you will not receive any search results via the results API.

After the results API is working as expected, you will also need to set up the [clicks API](https://open.gsa.gov/api/searchgov-clicks/).

## Results API endpoint and parameters

The endpoint is:

```https://api.gsa.gov/technology/searchgov/v2/results/i14y```

Three parameters are required.

  | Required parameters             | Descriptions and examples
  | :--								| :--
  | affiliate						| The unique site handle you created for the affiliate site when you set up your search experience. Find your site handle on the Settings page in the Admin Center. Example: <br><br> `affiliate=agencygov`
  |	access\_key						| The site's unique API access key that was automatically generated when you set up your search experience. Find your access key on the API Access Key page in the Admin Center. Example: <br><br> `access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=`
  | query						    | The query entered by a user via your site's search box. Example: <br><br> `query=hello%20world`

Each access key is unique to its associated site handle. If you have more than one affiliate site set up in the Admin Center, be sure to pair them properly.

Here is an API query that contains all three required parameters using these examples: 

```https://api.gsa.gov/technology/searchgov/v2/results/i14y?affiliate=agencygov&access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=&query=hello%20world```

All other parameters are optional.

| Optional parameters				| Descriptions and examples
| :--								| :--
| enable\_highlighting			| By default, we highlight all relevant, matched keywords in the search results by setting this value to 'true'. <br><br>The opening Unicode character for highlighting is 'U+E000' and the closing character is 'U+E001'. You need to decide how to display these characters &mdash; whether as bold, italic, or another style. <br><br>You can use 'false' to remove the highlighting. Example: <br><br> `enable_highlighting=false`
| limit							| By default, we return 20 results. You can specify between 1 and 50 results. Example: <br><br> `limit=50`
| offset							| By default, we set the offset to 0. The offset defines the number of results skipped from the first result. You can use the offset parameter to implement pagination. The maximum value is 999. Example: <br><br> `offset=10`
| sort\_by						| By default, we return results sorted by 'relevance'. You can also sort by 'date'. Example: <br><br> `sort_by=date` 
| sitelimit						| By default, we return all results within the scope of the domains you set up in the Admin Center. <br><br>You can use the sitelimit parameter to limits the results to only content within specific subdomains or subfolders. You can include multiple sitelimit values using a space-separated list. The sitelimit values must be within the scope of the domains set up in the Admin Center. Examples: <br><br> `sitelimit=pra.digital.gov` or `sitelimit=digital.gov/guides` for a site set up to search across the entire digital.gov domain by default
| api\_key						| By default, you can make 1,000 requests per hour using your SearchGov access key. <br><br>If you need higher rate limits, please [email the SearchGov team](mailto:search@gsa.gov) for information on how to set up an [API.Data.gov API key](https://api.data.gov/docs/developer-manual/) to increase these limits.

You can also view the full details of this API in the [Open API specification file for the Results API](https://open.gsa.gov/api/searchgov-results/v2/openapi.yml).

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
| thumbnail\_url    | [Open Graph](https://ogp.me/) image associated with the document

### text\_best_bets

[Best bets](https://digital.gov/guides/search/optimize#recommend-content-with-best-bets), if any. Best bets are recommendations that appear when the user's query matches the title, description, or keyword of a best bet you set up in the Admin Center.

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
