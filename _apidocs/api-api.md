# AG Document Library API
# hallways.cap.gsa.gov
---

<!-- Alpha status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <strong>
       This project is providing AG Document Library API
     </strong>
     <p class="usa-alert-text">
       Have feedback or questions? <a href="https://github.com/GSA/ag-api/issues">Please let us know</a>!</p>
   </div>
 </div>
<!-- end Alpha status alert -->


## Overview

In addition to being published and available at <a href="https://hallways.cap.gsa.gov/app/#/tutorials/document-library">Document Library</a>, the documents for hallways.cap.gsa.gov is also available via APIs.

**Please note that the API `v1.0` is available, now.**

The URL for the API is `https://api.gsa.gov/acquisition/cap/v1/`, and it exposes 3 routes to query data:

- `/tag-groups/<group id>/`
- `/search/documents/<keyword>`
- `/documents`
- `/documents/<document id>`

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |


<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="ag-api/v1/openapi.yaml">Open API specification file for the Document Library API</a>

<p><small><a href="#">Back to top</a></small></p>


## The Response

The response represents the rows in the `data` array in the JSON reports that can be downloaded. You may also downlow the document files. 

They are returned as an array of JSON objects. Here is an example of one such object:

```
{
    "id": 0,
    "self": "string",
    "title": "string",
    "node_type": "string",
    "description": "string",
    "excerpt": "string",
    "agency": {
      "label": "string",
      "id": 0
    },
    "type": [
      {}
    ],
    "acquisition_stage": [
      {}
    ],
    "contract_type": [
      {}
    ],
    "format": "string",
    "public_private": true,
    "file": [
      null
    ],
    "date_uploaded": "string",
    "tags": [
      null
    ],
    "relevance": 0,
    "views": 0,
    "downloads": 0,
    "comment_count": 0,
    "updated": 0,
    "sections": [
      {}
    ]
  }
```

Note that it has the following properties:

- `id`: The primary key of the data point
- `title`: The name of the document
- `description`: The description of the document
- `agency`: The name of the data point's agency
- `type`: The type of document

## Querying documents - API Calls

Documents can be queried...

{% include swagger-section-header-disable-try-it-out.html %}
    url: "ag-api/v1/openapi.yaml", 
{% include swagger-section-footer-disable-try-it-out.html %}


## Filtering/Sorting documents by parameters

Documents can be queried by filtering/sorting ?filter[key]=value&sorted

Ex. /documents?filter[id]=4138

It will return document id 4138. In this case, it is also equivalent to /documents/4138

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parameters that were provided. |
| 403 | API key is not correct or was not provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

<p><small><a href="#">Back to top</a></small></p>


## Contact Us

To suggest a feature or ask for help, please [file an issue in our project repository]
(https://github.com/GSA/ag-api/issues).    

<p><small><a href="#">Back to top</a></small></p>

