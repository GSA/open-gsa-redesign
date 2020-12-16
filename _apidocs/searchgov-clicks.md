### Click Tracking API Instructions

The click tracking API endpoint lets you send in click events, which allows you to see click data on your [Admin Click Analytics](http://localhost:3000/sites/6/clicks/new) page. We also use this click data to strengthen the search results algorithm for your site.

Read more about click tracking [here](https://search.gov/manual/clicks.html). This API uses the **post** method for click tracking.

## Getting Started

The endpoint is `https://search.usa.gov/api/v2/clicks`

Parameters include:
* url
* query
* affiliate
* position
* module_code
* access_key


A full example of this is 

`curl -i -X POST \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Content-Length: 0" \
-A "user agent string" \
"https://api.gsa.gov/technology/searchgov/v2/clicks/?url=https://foo.gov/clicked&affiliate=<AFFILIATE_NAME>&access_key=<AFFILIATE_ACCESS_KEY>&module_code=BOOS&query=test%20query&position=1"`

Please note that we only support this particular content type
`(application/x-www-form-urlencoded).`

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yml">Open API specification file for the Results API</a>



## Required Parameters

All parameters below are required unless noted otherwise. As a reminder, all parameters must be uri-encoded.
* You can find your site handle on the Search.gov Admin Center Settings page.
* Your access key is unique to your site handle so they must be paired properly to return results. If you have more than one search site set up, make sure you’ve selected the right one to get the right handle/key combination.


 | Parameters                      | Description
  | :--								| :--
  | url			| The URL of the link that was clicked.
  |query		| The search term that surfaced this result and ended in a click.
  | affiliate		| You can find your site handle in the Admin Center on your settings page.
  | position | The position/rank of the result on your search results page. Was it the first result or the second?
  | module_code         | The module code for the source of the clicked result. Must be a valid module code. See [https://search.gov/manual/module-codes.html](https://search.gov/manual/module-codes.html)
  | access_key          | Your API access key. You can find this under Your Site > Activate > API Key. **Note:** The API key from api.data.gov will *not* work for this API. It must be the one from Search.gov's admin center.

-----


## Expected Results

*   **Success** - A response status code of 200 and empty body.
*   **Missing Required Parameters** - A response status code of 400 and an error message describing the missing parameters. `["Query can't be blank"]`
*   **Invalid Or Inactive Affiliate** - A response status code of 401 and an error message. `["Affiliate is invalid"]`
*   **Invalid API Access Key** - A response status code of 401 and an error message. `["Access key is invalid"]`
*   **Unparseable URL** - A response status code of 401 and an error message. `["Url is not a valid format"]`
*   **Invalid Module Code** - A response status code of 401 and an error message. `["Module code {MODULE} is not a valid module"]`
​

## Terms of Service

​
By using this API, you agree to our [Terms of Service](https://search.gov/tos).