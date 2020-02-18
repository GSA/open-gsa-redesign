---
title: Search.gov Type-Ahead Suggestions API
banner-heading: Search.gov Type-Ahead Suggestions API
---

## Overview

This API is specific to Search.gov and exposes the type-ahead suggestions that can appear below your search box as searchers enter their search terms.

We have a script available that calls this API for you, which you can use as an alternative to using this API directly. Find it in [Admin Center](https://search.usa.gov/login) > YourSite > Activate > Code Snippets.

## Getting Started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/sayt`.

You must use https and send a new call for every keystroke. Whenever a user selects a query from the drop-down list, send this selection to us as a new query request.

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yml">Open API specification file for the Search.gov Type-Ahead Suggestions API</a>
 
## Parameters
  
Three parameters are required: (1) `name`, (2) `q`, and (3) `api_key`.
  
`https://api.gsa.gov/technology/searchgov/v2/sayt?api_key=YOUR_API_KEY&name=YOUR_SITE_HANDLE&q=YOUR_SEARCH_TERM`

  * The value for the `name` parameter is your site handle on the Settings page. You can find this through the Search.gov Admin Center > Your Search Site > Dashboard > Settings.
  *	Replace `YOUR_SEARCH_TERM` with a word or phrase of your choice. A minimum of a 2-character term is required.
  * Your `api_key` is provided through api.data.gov.

## Expected Results

You will see an array of suggestions. Suggestions are derived from the searches performed on your website.

Up to five suggestions related to your visitors' search term are returned and are updated in near real time.

A given term/phrase must be searched 10 times in a 24 hour period to appear as a suggestion. Suggestions will drop from the list if they don't maintain the 10 times per 24 hour period threshold.

If you want a given term to always appear as a suggestion, please [contact our team](mailto:search@support.digitalgov.gov).

Note: inappropriate terms are filtered by our system and will not be presented as suggestions.

<p><small><a href="#">Back to top</a></small></p>

## Terms of Service

By using this API, you agree to our [Terms of Service](https://search.gov/tos).

## Contact Us

Please never hesitate to reach out! [Email the Search.gov team](mailto:search@support.digitalgov.gov). 

<p><small><a href="#">Back to top</a></small></p>