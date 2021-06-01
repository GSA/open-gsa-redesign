---
title: Regulations.gov API
banner-heading: Regulations.gov API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >

## Overview

When Congress passes laws, federal agencies implement those laws through regulations. These regulations vary in subject, but include everything from ensuring water is safe to drink to setting health care standards. Regulations.gov is the place where users can find and comment on regulations. The APIs allow for users to find creative ways to present regulatory data. To learn more about the program visit the [About Us](https://www.regulations.gov/about) page.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key here: [API key signup page on api.data.gov](https://api.data.gov/signup/).

If you want to use commenting API, you MUST use the form below to register for an API key.

{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-regulations',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'E41mzkIX0ZReJvQbcSFtqhckpqFnTtkcsjFWAx1Z',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: '',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://beta.regulations.gov/support',

    // OPTIONAL: Set to true to verify the user's e-mail address by only
    // sending them their API key via e-mail, and not displaying it on the
    // signup confirmation web page. Defaults to false.
    verifyEmail: true,

    // OPTIONAL: Set to false to disable sending a welcome e-mail to the
    // user after signing up. Defaults to true.
    // sendWelcomeEmail: false,

    // OPTIONAL: Provide the name of your developer site. This will appear
    // in the subject of the welcome e-mail as "Your {{siteName}} API key".
    // Defaults to "api.data.gov".
    siteName: 'Regulations.gov API',

    // OPTIONAL: Provide a custom sender name for who the welcome email
    // appears from. The actual address will be "noreply@api.data.gov", but
    // this will change the name of the displayed sender in this fashion:
    // "{{emailFromName}} <noreply@api.data.gov>". Defaults to "".
    emailFromName: 'eRulemaking Help Desk',

    // OPTIONAL: Provide an extra input field to ask for the user's website.
    // Defaults to false.
    websiteInput: true,

    // OPTIONAL: Provide an extra checkbox asking the user to agree to terms
    // and conditions before signing up. Defaults to false.
    termsCheckbox: true,

    // OPTIONAL: If the terms & conditions checkbox is enabled, link to this
    // URL for your API's terms & conditions. Defaults to "".
    termsUrl: 'https://open.gsa.gov/api/regulationsgov/#terms-of-participation'
  };

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var apiUmbrella = document.createElement('script'); apiUmbrella.type = 'text/javascript'; apiUmbrella.async = true;
    apiUmbrella.src = 'https://api.data.gov/static/javascripts/signup_embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(apiUmbrella);
  })();
</script>
<noscript>Please enable JavaScript to signup for an <a href="http://api.data.gov/">api.data.gov</a> API key.</noscript>
{% endraw %}  

In order to enable commenting, please contact the [Regulations.gov Help desk](https://www.regulations.gov/support) and provide the first 5 digits of your API key, organization name, organization full address, organization phone number, tax ID and the email address used to sign up for the key. You will be notified when your API key is ready for posting comments. In order to activate your API key, these data elements are required to run an entity validation search.

After registration, you will need to provide this API key in the `X-Api-Key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| X-Api-Key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |

<p><small><a href="#">Back to top</a></small></p>

## Terms of Participation

The eRulemaking post Application Programming Interface (API), informally referred to as the Comment API, is provided as a convenience to facilitate the bulk upload of comments from a number of different commenters. The use of the Comment API requires a key, which may be obtained through the [open GSA](https://open.gsa.gov/api/regulationsgov/#getting-started) website. 

By registering for, receiving and using a key to the Comment API, the key holder agrees to the following terms and conditions:

1. When developing interfaces for commenters who will submit comment language and/or attachments through the Comment API, the key holder will include in the interface:
      1. A link to the same [terms of participation](https://www.regulations.gov/user-notice) and [privacy notice](https://www.regulations.gov/privacy-notice) that users encounter on the comment form for Regulations.gov, and
      2. A link to the Federal Register notice or other specific document in Regulations.gov for which the key holder is collecting or facilitating comments to be delivered through the Comment API.

2. The key holder certifies that:
      1. I will only submit comments through the Comment API that it has gathered through lawful means and that, to the best of the key holder’s knowledge, represent comments from real persons, and 
      2. It has not and will not submit comments of its own creation under fictitious or misappropriated identities or otherwise in violation of federal law.

3. The API key may be disabled if an API key holder is determined to have violated these Terms of Participation. 

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
   
Note: The examples below use unencoded bracket characters `[` and `]` for readability, however, these characters should be percent-encoded using `%5B` and `%5D`.  For example, the posted date search filter should be specified as `filter%5BpostedDate%5D`. See <a href="https://jsonapi.org/format/1.1/#appendix-query-details-square-brackets" target="_blank">Square Brackets in Parameter Names</a> section in json-api standards for additional information.

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
  
* Retrieve all comments for a docket where number of comments is less than 5000:
  
  * Step 1: Get all documents for the docketId FAA-2018-1084: 
    ```
    https://api.regulations.gov/v4/documents?filter[docketId]=FAA-2018-1084&api_key=DEMO_KEY
    ```
    It returns two documents, FAA-2018-1084-0001 and FAA-2018-1084-0002. Each document metadata includes an objectId attribute.
  
  * Step 2: Get all comments for each document using objectId:
    ```
    https://api.regulations.gov/v4/comments?filter[commentOnId]=0900006483a6cba3&api_key=DEMO_KEY
    ```
    The above request returns a list of comments for document FAA-2018-1084-0001.
    
    Note: Step 2 should be repeated for FAA-2018-1084-0002 in the above example.

* Retrieve all comments for a docket where number of comments is greater than 5000:
  
  * Step 1: Get all documents for the docketId EOIR-2020-0003: 
    ```
    https://api.regulations.gov/v4/documents?filter[docketId]=EOIR-2020-0003&api_key=DEMO_KEY
    ```
    The above query returns five documents where four documents are Supporting & Related Material documents and one document is a Proposed Rule. Response for the above request includes an attribute objectId for each document and its set to 09000064846eebaf for the Proposed Rule, EOIR-2020-0003-0001.
      
  * Step 2: Get all comments for each document using objectId:
    ```
    https://api.regulations.gov/v4/comments?filter[commentOnId]=09000064846eebaf&api_key=DEMO_KEY
    ```
    The above request returns a list of comments for document EOIR-2020-0003-0001, the only Proposed Rule in the docket. 
    totalElements under meta attribute shows that this document has total 88,061 comments. 
    
    Note: Step 2 should be repeated for each document. 
    
  * Step 3: Page through the first set of 5000 documents:
    ```
    https://api.regulations.gov/v4/comments?filter[commentOnId]=09000064846eebaf&page[size]=250&page[number]=N&sort=lastModifiedDate,documentId&api_key=DEMO_KEY
    ```   
    The first 5000 documents can be retrieved using the query above and paging through the results where N is the page number between 1 and 20. 
    Please note we are sorting the results by lastModifiedDate to ensure we can filter our data by lastModifiedDate later.
    On the last page of this set, please note the lastModifiedDate of the last document. In our case, EOIR-2020-0003-5548 is the last document on page 20 and the lastModifiedDate attribute of the document is 2020-08-10T15:58:52Z. We will be filtering the data in the next step using this date.
    
  * Step 4: Page through the next set of 5000 documents:
    ```
    https://api.regulations.gov/v4/comments?filter[commentOnId]=09000064846eebaf&filter[lastModifiedDate][ge]=2020-08-10 11:58:52&page[size]=250&page[number]=N&sort=lastModifiedDate,documentId&api_key=DEMO_KEY
    ```
    The next 5000 documents can be retrieved using the query above and paging through the results where N is the page number between 1 and 20.
    
    The lastModifiedDate attribute of the last document in the first set (Step 3) was `2020-08-10T15:58:52Z`. This date translates to `2020-08-10 11:58:52` in Eastern time. Running the above query should return all documents where lastModifiedDate is greater than or equal to `2020-08-10T15:58:52Z`. Its important to note that we are running a "greater than or equal to" query to ensure we do not miss any documents where last modified date is `2020-08-10T15:58:52Z`.

    On the last page of this set, please note the lastModifiedDate of the last document and repeat.
   
    Note: Step 4 should be repeated for as many times as needed to retrieve all 88,061 comments.

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
    "data": {
      "attributes": {
        "commentOnDocumentId":"FDA-2009-N-0501-0012",
        "comment":"test comment",
        "submissionType":"API",
        "submitterType":"ANONYMOUS"
      },
      "type":"comments"
    }
  }
  ```

  Note: No submission key is needed for comments with no attached files.

* Posting a comment with attachment:

  * Step 1: Get a submission key: 
  
    ```json
    POST https://api.regulations.gov/v4/submission-keys {
      "data": {
        "type":"submission-keys"
      }
    }
    ```

  * Step 2: Get presigned url for each attachment:
  
    ```json
    POST https://api.regulations.gov/v4/file-upload-urls {
      "data": {
        "type":"file-upload-urls",
        "attributes": {
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
      "data": {
        "attributes": {
          "commentOnDocumentId":"FDA-2009-N-0501-0012",
          "comment":"test comment",
          "submissionType":"API",
          "submissionKey":"kex-d31z-fe04",
          "submitterType":"ANONYMOUS",
          "files":[ "test.jpg" ]
        },
        "type":"comments"
      }
    }
    ```

* Posting a comment with agency category:

  * Step 1: Get agency categories for agency: 
  
    ```
    https://api.regulations.gov/v4/agency-categories?filter[acronym]=FDA&api_key=DEMO_KEY
    ```

  * Step 2: Submit your comment with category:
  
    ```json
    POST https://api.regulations.gov/v4/comments {
      "data": {
        "attributes": {
          "commentOnDocumentId":"FDA-2009-N-0501-0012",
          "comment":"test comment",
          "submissionType":"API",
          "submitterType":"ANONYMOUS",
          "category":"Academia - E0007"
        },
        "type":"comments"
      }
    }
    ```
* Posting multiple submissions in a single comment:

  To post a comment with attachment that carries 5 submissions, user should follow the following steps:

  * Step 1: Get a submission key: 
  
    ```json
    POST https://api.regulations.gov/v4/submission-keys {
      "data": {
        "type":"submission-keys"
      }
    }
    ```

  * Step 2: Get presigned url for the attachment with multiple submissions:
  
    ```json
    POST https://api.regulations.gov/v4/file-upload-urls {
      "data": {
        "type":"file-upload-urls",
        "attributes": {
          "fileName":"multipleSubmissions.pdf",
          "submissionKey":"kex-d31z-fe04",
          "contentType":"image/jpeg"
        }
      }
    }
    ```

  * Step 3: Upload binaries to presigned url

  * Step 4: Submit your comment with 
  
    ```json
    POST https://api.regulations.gov/v4/comments {
      "data": {
        "attributes": {
          "commentOnDocumentId":"FDA-2009-N-0501-0012",
          "comment":"test comment",
          "submissionType":"API",
          "submissionKey":"kex-d31z-fe04",
          "submitterType":"ANONYMOUS",
          "files":[ "multipleSubmissions.pdf" ],
          "numItemsReceived": 5
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

## Frequently Asked Questions

#### I am not seeing all fields returned by v3/documents endpoint in v4/documents endpoint. How do I access this information?

Our v3 API had a single search endpoint which returned information about documents, comments and dockets. To streamline our data, we have split our search into three endpoints:
    
* Document Search
* Comment Search
* Docket Search

Further, some data that could be retrieved using search in v3 has now been moved under details endpoint. For example, you can retrieve RIN for a docket using /dockets/{docketId} endpoint. The rin is not returned by /documents endpoint anymore.

#### How do I get document status from the new `/documents` endpoint?

The new `/v4/documents` carries a withdrawn field. This is a boolean field. If set to true, the document is withdrawn otherwise it’s a posted document.

#### There are strict pagination limits in v4. How do I retrieve all comments in a docket posted on the same day if the number of comments is greater than 2500?

We have added an example that shows how to retrieve more than 5000 comments on a docket. Please see the example section.

Please note the new parameter `lastModifiedDate` is in beta and may be removed when we have a permanent bulk download solution available.

#### I submitted a comment, but I am unable to find it on regs. What happened to my comment?

Comments created via API are not made available in Regulations.gov right away. Agencies need to approve before the newly created comment can be posted out to Regulations.gov.

#### I am seeing 400 errors from commenting API. What am I doing wrong?

Please make sure you are setting Content-Type to application/vnd.api+json in request header.

#### What is DEMO_KEY api key?

As indicated by name, DEMO_KEY should only be used for demonstration purposes. We have added this api_key to our examples to make it easier for users to copy/paste the urls. It should not be used for anything more than exploring our APIs. 

#### What is the staging API url?

Users should be able to access our staging API at https://api-staging.regulations.gov. Please use this environment for testing purposes.

#### I have an API key. How many requests can I make per hour and how do I know I am about to reach my request limit?

Please review https://api.data.gov/docs/rate-limits/ for information on rate limits. Commenting API is restricted to 50 requests per minute with a secondary limit of 500 requests per hour.
  
#### Can I request rate limit increases for my keys? 

GSA may grant a rate limit increase on the GET keys for an indefinite period. Such requests must establish the need to justify the rate limit increases. Each submission will be reviewed and considered on a case-by-case basis. GSA is unable to increase the rate limits for POST API keys upon requests at this time. However, the current POST API key holders can request one additional key without going through the validation process again.
  
<p><small><a href="#">Back to top</a></small></p>

## API Calls

{% include swagger-section-header-disable-try-it-out.html %} 
url: "v4/openapi.yaml", 
{% include swagger-section-footer-disable-try-it-out.html %}

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you have any questions or would like to provide feedback, please contact <a href="https://www.regulations.gov/support">Regulations.gov Help desk</a>.

<p><small><a href="#">Back to top</a></small></p>
