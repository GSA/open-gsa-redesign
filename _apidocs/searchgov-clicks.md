---
title: SearchGov clicks API
banner-heading: SearchGov clicks API
---

## About SearchGov

[SearchGov](https://digital.gov/guides/search) is the search engine built specifically for federal websites. We support over 200 million searches a year across one-third of federal domains by providing a configurable search engine that allows you to customize search experiences for the public.

Most customers use our hosted search results page, but you can use our two APIs to display results within your website. 

1. **Results API** to receive search results. Be sure to review the related documentation for the [results API](https://open.gsa.gov/api/searchgov-results/).
2. **Clicks API** to send us click data. Keep reading for more information on the clicks API.

You must use both APIs for a complete search experience.

While using the APIs gives you more control over the look and feel of the search results, you will need a team of designers, engineers, and other digital service experts to create your search experience and maintain it over time.

## Getting started with the clicks API

The first thing you need to do is [set up your search experience](https://digital.gov/guides/search/set-up). Follow the prompts to create an account and the required five steps to go live with SearchGov, including adding the domains you want included in your search results.

Then, you need to set up the [results API](https://open.gsa.gov/api/searchgov-results/). 

After the results API is working as expected, you can set up the clicks API.

Sending us your click data provides you with insight into what resources are valued by your users. The data also helps us monitor your search service for problems. Visit our guide for more information about [how to analyze your search analytics](https://digital.gov/guides/search/analyze), including search terms and clicks.

## Clicks API endpoint and parameters

The endpoint is:

```https://api.gsa.gov/technology/searchgov/v2/clicks/```

Six parameters are required. 

| Required parameters   | Description
| :--								    | :--
| affiliate		          | The unique site handle you created for the affiliate site when you set up your search experience. Find your site handle on the Settings page in the Admin Center. Example: <br><br> `affiliate=agencygov`
| access\_key           | The site's unique API access key that was automatically generated when you set up your search experience. Find your access key on the API Access Key page in the Admin Center. Example: <br><br> `access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=`
|query		              | The query entered by a user via your site's search box, which resulted in a click. Example: <br><br> `query=hello%20world`
| url			              | The URL of the result that was clicked on search results page.
| position              | The ranked position of the clicked result, such as 1 or 2.
| module_code           | The module code of the clicked result. Must be a valid module code.

These are the valid module codes.

| Code            | Module
| :--							| :--
| AIDOC     	    | Collections
| BOOS	     	    | Text best bets
| I14Y		     	  | Web results
| QRTD		     	  | Routed queries

Three parameters are optional.

| Optional parameters     | Description
| :--								      | :--
| client_ip             | The IP address of the user who clicked on the result.
| user_agent            | The user agent of the user who clicked on the result.
| referrer		            | The URL of the page the user was on when clicking on the result.

Each access key is unique to its associated site handle. If you have more than one affiliate site set up in the Admin Center, be sure to pair them properly.

This API uses the `POST` method to send us the click data. Here is an API query that contains all six required parameters using these examples: 

```curl -i -X POST \```<br>
```-H "Content-Type: application/x-www-form-urlencoded" \```<br>
```-H "Content-Length: 0" \```<br>
```-A "user agent string" \```<br>
```"https://api.gsa.gov/technology/searchgov/v2/clicks/?affiliate=agencygov&access_key=k-zbHnApYd0PfakAdWA7BBWT43S5jos7CJfa_OQ7MS4=&query=hello%20world&url=https://www.agency.gov/policy/very-important-page.gov&position=3&module_code=I14Y"```

You can also view the full details of this clicks API in the [Open API specification file for the SearchGov Clicks API](https://open.gsa.gov/api/searchgov-clicks/v2/openapi.yml).

## Expected results

We return a response status code of 200 with an empty body.

We might return a 400 or 401 response code with an error message if you are:

* Missing required parameters (400 error with a message such as 'Query can't be blank')
* Using an invalid or inactive affiliate site (401 error with a message such as 'Affiliate is invalid')
* Using an invalid access key (401 error with a message such as 'Access key is invalid')
* Posting an unparseable URL (401 error with a message such as 'URL is not a valid format')
* Posting an invalid module code (401 error with a message such as 'Module code DOC is not a valid module')

## Request support

Review our guide, [Optimizing site search with SearchGov](https://digital.gov/guides/search), for more information on how to set up, design, optimize, and analyze your search experience. You can also check the system status and review the terms of service.

If you have any other questions, please [email the SearchGov team](mailto:search@gsa.gov).
