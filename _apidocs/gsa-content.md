---
title: GSA.gov Content API
banner-heading: GSA.gov Content API
---


## Overview

The GSA.gov content API is an XML feed which supplies the public with a means to extract data out of the GSA.gov website. When the API returns multiple content items, it list them with the newest item(s) first, and oldest last. 

You can download the OpenAPI Specification File <a href="https://open.gsa.gov/api/perdiem/gsa-content-api.swagger.yml">from here (gsa-content-api.swagger.yml)</a>

<p><small><a href="#">Back to top</a></small></p>

## Getting Started



To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.


{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-open',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/technology/gsa-content/v2/by-type/event?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://github.com/gsa/gsa-apis/issues',

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

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |


<p><small><a href="#">Back to top</a></small></p>

## API Description



This API has two primary endpoints:

**Endpoint 1:** https://api.gsa.gov/technology/gsa-content/v2/by-type/{type}

**Description:**   Information by Content Type

**Example:** https://api.gsa.gov/technology/gsa-content/v2/by-type/event

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| Content Types | There are three options: Events - `event`; Topic Pages (meta data about GSA.gov web pages) - `cmp_page`; or Text Assets (snippets which display on pages of the site) - `text_asset`  |
| Page Number | Each page displays 25 items, to get more results, you can goto "page 2" by adding a `/2` to the end of the URL, or "page 3" by adding a `/3`, etc. |


**Expected Result**

| Name  | Description |
| ---- | ----------- |
| title | The title of the content-item |
| type | The content-type of the content-item |
| body | A blob of text contained as the body of this content item |
| public_url | The public URL for this content item on GSA.gov |
| navigation_title | The Navigation-Title for this page |
| created | A unix timestamp indicating when the content-item was created |
| last_updated | A unix timestamp indicating when the content-item was last edited |
| content_id | A numerical unique ID for this content item in this system |
| last_modified_by | The user who last modified this content-item |
| owner | A numerical identifier that indicates who owns this content in this system. This is a reference to another items content_id |
| poc | A numerical identifier that indicates who the POC is for this content in this system. This is a reference to another items content_id |
| page_content_area | A numerical identifier that indicates which content item is used as the main-body-area for this page |
| page_children | A numerical identifier that indicates which pages are considered child-pages to this one |
| contacts | A numerical identifier that indicates which individuals are considered to be reachable contacts related to this content |
| generic_contact | A numerical identifier that indicates which group of individuals are considered to be reachable contacts related to this content |
| info_infoblock | A numerical identifier that indicates which content item shall be used as a right-side-bar for this page |
| rotating_feature_block | A numerical identifier that indicates which content item shall be used as slide-show on this page |
| expiration_date | The date at which the page will expire on GSA.gov (in unix epoch time) |

**Endpoint 2:** https://api.gsa.gov/technology/gsa-content/v2/by-id/{id}

**Description:**   An individual piece of content based on its content ID.  

**Example** https://api.gsa.gov/technology/gsa-content/v2/by-id/73

**Query String Parameters**

| Name  | Description |
| ---- | ----------- |
| title | The title of the content-item |
| type | The content-type of the content-item |
| body | A blob of text contained as the body of this content item |
| created | A unix timestamp indicating when the content-item was created |
| last_updated | A unix timestamp indicating when the content-item was last edited |
| content_id | A numerical unique ID for this content item in this system |
| author | The user who last modified this content-item |
| owner | A numerical identifier that indicates who owns this content in this system. This is a reference to another items content_id |
| owner | A numerical identifier that indicates who the POC is for this content in this system. This is a reference to another items content_id |


<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="https://open.gsa.gov/api/sample-api/v1/openapi.yaml">Open API specification file for the Sample API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parmaters that were provided. |
| 403 | API key is not correct or was not provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

<p><small><a href="#">Back to top</a></small></p>


## Contact Us

If you have questions or need help, please email us at [ocmweb@gsa.gov](mailto:ocmweb@gsa.gov) or file an issue in this [GitHub issue tracker](https://github.com/gsa/gsa-apis/issues).  

<p><small><a href="#">Back to top</a></small></p>
