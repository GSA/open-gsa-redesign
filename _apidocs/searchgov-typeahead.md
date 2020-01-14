---
title: Search.gov Type-Ahead API
banner-heading: Search.gov Type-Ahead API
---

## Overview

This API is specific to Search.gov and exposes the type-ahead suggestions that usually appear below your search box as searchers enter their search terms.

## Getting Started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/sayt`.

You must use https and send a new call for every character strike. Whenever a user selects a query from the drop-down list, this will become the new query sent to our system.

<p><small><a href="#">Back to top</a></small></p>

## Parameters
  
  Two parameters are required: (1) `name`, and (2) `q`.
  
  `https://api.gsa.gov/technology/searchgov/v2/sayt?name=YOUR_SITE_HANDLE&q=YOUR_SEARCH_TERM`

  * The value for the `name` parameter is your site handle on the Settings page. You can find this through the Search.gov Admin Center > Your Search Site > Dashboard > Settings.
  *	Replace `YOUR_SEARCH_TERM` with a word or phrase of your choice. A minimum of a 2-character term is required.

## Expected Results

You will see an array of suggestions. Suggestions are derived from the searches performed on your website.

Up to five suggestions related to your visitors' search term are returned and are updated in near real time.

A given term/phrase must be searched 10 times in a 24 hour period to appear as a suggestion. Suggestions will drop from the list if they don't maintain the 10 times per 24 hour period threshold.

If you want a given term to always appear as a suggestion, please contact our team.

Note: inappropriate terms are filtered by our system and will not be presented as suggestions.

<p><small><a href="#">Back to top</a></small></p>

## Terms of Service

By using this API, you agree to our [Terms of Service](https://search.gov/tos).

##Contact Us

Please never hesitate to reach out! [Email the Search.gov team](search@support.digitalgov.gov). 

<p><small><a href="#">Back to top</a></small></p>