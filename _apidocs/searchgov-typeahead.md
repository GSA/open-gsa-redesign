---
title: Search.gov Type-Ahead API
banner-heading: Search.gov Type-Ahead API
---

## Overview

This API exposes the type-ahead suggestions that usually appear below your search box as searchers enter their search terms.

## Getting Started

The endpoint is `https://api.gsa.gov/technology/searchgov/v2/sayt'.

You must use https. You can find your access key on the API Access Key page of the Search.gov Admin Center.

<p><small><a href="#">Back to top</a></small></p>

## Parameters
  
  Two parameters are required: (1) `name`, and (2) `q`.
  
  `https://api.gsa.gov/technology/searchgov/v2/sayt?name=dawn-h1&q={YOUR_SEARCH_TERM}

  * The value for the name parameter is your site handle on the [Settings](https://search.usa.gov/sites/7905/setting/edit) page.
  *	Replace {YOUR_SEARCH_TERM} with a word or phrase of your choice. A minimum of 2 characters term is required.

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
