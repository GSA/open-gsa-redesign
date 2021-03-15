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

The URL for the API is `https://api.gsa.gov/acquisition/cap/v1/`, and it exposes 4 routes to query data:

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



{% raw %}
<div id="ag-api_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-ag-api',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/acquisition/cap/v1/documents?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://github.com/GSA/ag-api/issues',

    // OPTIONAL: Set to true to verify the user's e-mail address by only
    // sending them their API key via e-mail, and not displaying it on the
    // signup confirmation web page. Defaults to false.
    // verifyEmail: true,

    // OPTIONAL: Set to false to disable sending a welcome e-mail to the
    // user after signing up. Defaults to true.
    // sendWelcomeEmail: false,

    // OPTIONAL: Provide the name of your developer site. This will appear
    // in the subject of the welcome e-mail as "Your {{siteName}} API key".
    // Defaults to "api.data.gov".
    // siteName: 'GSA Developer Network',

    // OPTIONAL: Provide a custom sender name for who the welcome email
    // appears from. The actual address will be "noreply@api.data.gov", but
    // this will change the name of the displayed sender in this fashion:
    // "{{emailFromName}} <noreply@api.data.gov>". Defaults to "".
    // emailFromName: 'GSA Developer Network',

    // OPTIONAL: Provide an extra input field to ask for the user's website.
    // Defaults to false.
    // websiteInput: true,

    // OPTIONAL: Provide an extra checkbox asking the user to agree to terms
    // and conditions before signing up. Defaults to false.
    // termsCheckbox: true,

    // OPTIONAL: If the terms & conditions checkbox is enabled, link to this
    // URL for your API's terms & conditions. Defaults to "".
    // termsUrl: "https://agency.gov/api-terms/",
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

To suggest a feature or ask for help, please [file an issue in our project repository](https://github.com/GSA/ag-api/issues).    

<p><small><a href="#">Back to top</a></small></p>

