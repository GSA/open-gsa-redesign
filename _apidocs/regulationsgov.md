---
title: Regulations.gov API
banner-heading: Regulations.gov API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >

<!-- Beta status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <strong>
       This project is in BETA
     </strong>
     <p class="usa-alert-text">
       This documentation provides a preview of the new API endpoints that will be made available soon. 
       During the Beta period, breaking changes may be made without warning.
       Have feedback or questions? <a href="https://beta.regulations.gov/support">Please let us know</a>!
     </p>
   </div>
 </div>
<!-- end Beta status alert -->


## Overview

When Congress passes laws, federal agencies implement those laws through regulations. These regulations vary in subject, but include everything from ensuring water is safe to drink to setting health care standards. Regulations.gov is the place where users can find and comment on regulations. The APIs allow for users to find creative ways to present regulatory data. To learn more about the program visit the [About Us](https://beta.regulations.gov/about) page.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key here: [API key signup page on api.data.gov](https://api.data.gov/signup/).

After registration, you will need to provide this API key in the `X-Api-Key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| X-Api-Key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |

<p><small><a href="#">Back to top</a></small></p>

## API Description

Regulations.gov offers a GET API for documents, comments, and dockets and a POST API for comments. These endpoints can be used for searching document, comments and dockets, and posting a comment.

#### Searching for documents

You can search for a list of documents based on the criteria passed by using the endpoint `/v4/documents`. The search operation supports full text keyword searches and filtering based on a number of available parameters.

#### Detailed information for a single document

In order to obtain more details about a single document, you can use the endpoint `/v4/documents/{documentId}`. A document is defined by one of the following types: Proposed Rule, Rule, Supporting & Related, or Other. Each document type has its own set of attributes, which vary based on the Agency posting the document. Another defining characteristic is if the document is part of a Rulemaking or Nonrulemaking Docket.

You can choose to include attachments using include parameter. Attachments are not included by default.

#### Searching for comments

You can search for a list of comments based on the criteria passed by using the endpoint `/v4/comments`. The search operation supports full text keyword searches and filtering based on a number of available parameters.

#### Detailed information for a single comment

In order to obtain more details about a single comment, you can use the endpoint `/v4/comments/{commentId}`. Each comment has its own set of attributes, which vary based on the Agency posting the comment. Another defining characteristic is if the comment is part of a Rulemaking or Nonrulemaking Docket.

You can choose to include attachments using include parameter. Attachments are not included by default.

#### Searching for dockets

A docket is an organizational folder containing multiple documents. Dockets can be searched using the endpoint: `/v4/dockets`.

#### Detailed information for a single docket

In order to obtain more details about a single docket, you can use the endpoint `/v4/dockets/{docketId}`. Each docket has its own set of attributes, which vary based on the Agency posting the docket. Another defining characteristic is if the docket is a Rulemaking or a Nonrulemaking Docket

#### Posting a comment

User can post a comment using the endpoint `/v4/comments`. User can post the comment using one of the following submitter types:

* Individual
* Organization
* Anonymous

If user would like to attach files with their submission, user can get a presigned url for the amazon s3 bucket using the endpoint `/v4/file-upload-urls`

A submissionKey can be retrieved using `/v4/submission-keys` endpoint.

submissionType should be set to API.

<p><small><a href="#">Back to top</a></small></p>

## Examples

<div style="padding: 15px; border: 1px solid; margin-bottom: 20px; border-radius: 4px; color: gray; background: rgba(90, 90, 90, 0.04); border-color: #cccccc;">
   
Note: The example URI added in this section shows unencoded [ and ] characters simply for readability. In practice, these characters should be percent-encoded. See <a href="https://jsonapi.org/format/1.1/#appendix-query-details-square-brackets" target="_blank">Square Brackets in Parameter Names</a> section in json-api standards for complete information.

</div>

#### Searching for documents

Here are few example queries for searching documents:

* Search for term water: 
  ```
  https://api.regulations.gov/v4/documents?filter[searchTerm]=water&api_key=DEMO_KEY
  ```

* Filter documents by a specific date: 
  ```
  https://api.regulations.gov/v4/documents?filter[postedDate]=2020-09-01&api_key=DEMO_KEY
  ```

* Filter documents by a date range: 
  ```
  https://api.regulations.gov/v4/documents?filter[postedDate][ge]=2020-09-01&filter[postedDate][le]=2020-09-01&api_key=DEMO_KEY
  ```

* Search for a documentId: 
  ```
  https://api.regulations.gov/v4/documents?filter[searchTerm]=FDA-2009-N-0501-0012&api_key=DEMO_KEY
  ```

* Sort documents by posted date in asc: 
  ```
  https://api.regulations.gov/v4/documents?sort=postedDate&api_key=DEMO_KEY
  ```

* Sort documents by posted date in desc: 
  ```
  https://api.regulations.gov/v4/documents?sort=-postedDate&api_key=DEMO_KEY
  ```

#### Detailed information for a single document

There are few ways a user can query `documents` endpoint to retrieve detailed information for a document.

* Get document details without attachments: 
  ```
  https://api.regulations.gov/v4/documents/FDA-2009-N-0501-0012?api_key=DEMO_KEY
  ```

* Get document details with attachments: 
  ```
  https://api.regulations.gov/v4/documents/FDA-2009-N-0501-0012?include=attachments&api_key=DEMO_KEY
  ```

#### Searching for comments

Here are few example queries for searching comments:

* Search for term water: 
  ```
  https://api.regulations.gov/v4/comments?filter[searchTerm]=water&api_key=DEMO_KEY
  ```

* Filter comments by a specific date: 
  ```
  https://api.regulations.gov/v4/comments?filter[postedDate]=2020-09-01&api_key=DEMO_KEY
  ```

* Filter comments by a date range: 
  ```
  https://api.regulations.gov/v4/comments?filter[postedDate][ge]=2020-09-01&filter[postedDate][le]=2020-09-01&api_key=DEMO_KEY
  ```

* Search for a commentId: 
  ```
  https://api.regulations.gov/v4/comments?filter[searchTerm]=HHS-OCR-2018-0002-5313&api_key=DEMO_KEY
  ```

* Sort comments by posted date in asc: 
  ```
  https://api.regulations.gov/v4/comments?sort=postedDate&api_key=DEMO_KEY
  ```

* Sort comments by posted date in desc: 
  ```
  https://api.regulations.gov/v4/comments?sort=-postedDate&api_key=DEMO_KEY
  ```

#### Detailed information for a single comment

There are few ways a user can query `comments` endpoint to retrieve detailed information for a comment:

* Get comment details without attachments: 
  ```
  https://api.regulations.gov/v4/comments/HHS-OCR-2018-0002-5313?api_key=DEMO_KEY
  ```

* Get comment details with attachments: 
  ```
  https://api.regulations.gov/v4/comments/HHS-OCR-2018-0002-5313?include=attachments&api_key=DEMO_KEY
  ```

#### Searching for dockets

Here are few example queries for searching dockets:

* Search for term water: 
  ```
  https://api.regulations.gov/v4/dockets?filter[searchTerm]=water&api_key=DEMO_KEY
  ```

* Search for a docketId: 
  ```
  https://api.regulations.gov/v4/dockets?filter[searchTerm]=EPA-HQ-OAR-2003-0129&api_key=DEMO_KEY
  ```

* Filter dockets by multiple agencyIds: 
  ```
  https://api.regulations.gov/v4/dockets?filter[agencyId]=GSA,EPA&api_key=DEMO_KEY
  ```

* Sort dockets by title in asc order: 
  ```
  https://api.regulations.gov/v4/dockets?sort=title&api_key=DEMO_KEY
  ```

* Sort dockets by title in desc order: 
  ```
  https://api.regulations.gov/v4/dockets?sort=-title&api_key=DEMO_KEY
  ```

#### Detailed information for a single docket

To retrieve detailed information on a docket, the following query can be used:

```
https://api.regulations.gov/v4/dockets/EPA-HQ-OAR-2003-0129?api_key=DEMO_KEY
```

#### Posting a comment

* Posting an anonymous comment without attachment:

  ```json
  POST https://api.regulations.gov/v4/comments {
    "data":{
      "attributes":{
        "commentOnDocumentId":"FDA-2009-N-0501-0012",
        "comment":"test comment",
        "submissionType":"API",
        "submitterType":"ANONYMOUS",
        "files":[]
      },
      "type":"comments"
    }
  }
  ```

  Note: No submission key is needed for comments with no attached files.

* Posting an anonymous comment with attachment:

  * Step 1: Get a submission key: 
  ```json
  POST https://api.regulations.gov/v4/submission-keys {
    "data":{
      "type":"submission-keys"
    }
  }
  ```

  * Step 2: Get presigned url for each attachment:
  ```json
  POST https://api.regulations.gov/v4/file-upload-urls {
    "data":{
      "type":"file-upload-urls",
      "attributes":{
        "fileName":"test.jpg",
        "submissionKey":"kex-d31z-fe04",
        "contentType":"image/jpeg"
      }
    }
  }
  ```

  * Step 3: Upload binaries to presigned url

  * Step 4: Submit your comment
  ```json
  POST https://api.regulations.gov/v4/comments {
    "data":{
      "attributes":{
        "commentOnDocumentId":"FDA-2009-N-0501-0012",
        "comment":"test comment",
        "submissionType":"API",
        "submissionKey":"kex-d31z-fe04",
        "submitterType":"ANONYMOUS",
        "files":[ test.jpg ]
      },
      "type":"comments"
    }
  }
  ```

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v4/openapi.yaml">Open API specification file for the Regulations.gov API</a>

<p><small><a href="#">Back to top</a></small></p>

## API Calls

{% include swagger-section-header-disable-try-it-out.html %} 
url: "v4/openapi.yaml", 
{% include swagger-section-footer-disable-try-it-out.html %}

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you have any questions or would like to provide feedback, please contact <a href="https://beta.regulations.gov/support">Regulations.gov Help desk</a>.

<p><small><a href="#">Back to top</a></small></p>
