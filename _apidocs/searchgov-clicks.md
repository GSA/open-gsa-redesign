---
title: SearchGov clicks API
banner-heading: SearchGov clicks API
---

## Overview

[SearchGov](https://digital.gov/guides/search) is the search engine built specifically for federal websites. 

SearchGov supports over 200 million searches a year across one-third of federal domains by providing a configurable search engine that allows you to customize search experiences for the public.

This API exposes all relevant clicks in a single JSON call. Use this clicks API along with the [SearchGov results API](searchgov-results.html) to optimize your search results.

## Tracking clicks 

Use this Clicks API endpoint to send in click events. This allows you to:
* Access click data in the Analytics section of the Admin Center
* Improve the relevance of search results because we use click data to rank results 

This API uses the **post** method for click tracking.

Visit our guide for more information about [how to analyze your search analytics](https://digital.gov/guides/search/analyze), including search terms and clicks. 

## Getting started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/clicks/`. You must use https.

Parameters include:
* url
* query
* affiliate
* position
* module_code
* access_key

A full example of this is: 

`curl -i -X POST \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Content-Length: 0" \
-A "user agent string" \
"https://api.gsa.gov/technology/searchgov/v2/clicks/?url=https://foo.gov/clicked&affiliate=<AFFILIATE_NAME>&access_key=<AFFILIATE_ACCESS_KEY>&module_code=BOOS&query=test%20query&position=1"`

Please note that we only support this particular content type
`(application/x-www-form-urlencoded).`

Get your access key on the API Access Key page in the [Admin Center](https://search.usa.gov/sites).

View the full details of this API in the <a href="v2/openapi.yml">Open API specification file for the Clicks API</a>. 

## API parameters

All parameters below are required unless noted otherwise. As a reminder, all parameters must be uri-encoded.
* Get your site handle on the Settings page in the Admin Center.
* Your access key is unique to your site handle, so it must be paired properly with the site handle to return results. If you have more than one search site set up, make sure you select the right one to get the right handle/key combination.

 | Parameters                      | Description
  | :--								| :--
  | url			| The URL of the link that was clicked.
  |query		| The search term that surfaced this result and ended in a click.
  | affiliate		| You can find your site handle in the Admin Center on your settings page.
  | position | The position/rank of the result on your search results page. Was it the first result or the second?
  | module_code         | The module code for the source of the clicked result. Must be a valid module code.
  | access_key          | Your API access key. You can find this under Your Site > Activate > API Key in the [Admin Center](https://search.usa.gov/sites). Be sure to use the API key from the Admin Center, not the API key from api.data.gov.

-----

## Expected results

*   **Success:** Response status code of 200 and empty body.
*   **Missing Required Parameters:** Response status code of 400 and an error message describing the missing parameters. `["Query can't be blank"]`
*   **Invalid Or Inactive Affiliate:** Response status code of 401 and an error message. `["Affiliate is invalid"]`
*   **Invalid API Access Key:** Response status code of 401 and an error message. `["Access key is invalid"]`
*   **Unparseable URL:** Response status code of 401 and an error message. `["Url is not a valid format"]`
*   **Invalid Module Code:** Response status code of 401 and an error message. `["Module code {MODULE} is not a valid module"]`
​
## Request support

Review our guide, [Optimizing site search with SearchGov](https://digital.gov/guides/search), for more information on how to set up, design, optimize, and analyze your search experience. You can also check the system status and review the terms of service.

If you have any other questions, please [email the SearchGov team](mailto:search@gsa.gov).
