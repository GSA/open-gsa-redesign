---
title: Digital Experience (DX) SolutionId Library API
banner-heading: Digital Experience (DX) SolutionId Library API
---

<!--link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" -->
<!--link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" -->

<!-- Alpha status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <strong>
       This project is in BETA       
     </strong>
     <p class="usa-alert-text">
        This project is providing Digital Experience (DX) SolutionId Library API
        </br>
        Have feedback or questions? <a href="mailto: fasdigitalsupport@gsa.gov">Please let us know</a>!
     </p>
   </div>
 </div>
<!-- end Alpha status alert -->


## Overview

The GSA API provides a set of definations and protocols to build and integrate content for <a href="https://buy.gsa.gov">https://buy.gsa.gov</a>


The URL for the API is `https://api.gsa.gov/acquisition/dx/sourcedata/v2/`, and it exposes 2 routes to query data:

- `/mas/`
- `/non-mas/`

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |



{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-dx-api',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/acquisition/dx/sourcedata/v2/mas/?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/",
    //contactUrl: 'https://github.com/GSA/ag-api/issues',

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

## The Response

The response represents the rows in the `data` array in the JSON reports that can be downloaded. You may also downlow the document files. 

They are returned as an array of JSON objects. Here is an example of one such object for MAS:

```
{
  "mras_naics": "integer",
  "mras_naics_title": "string",
  { 
    "sin": "integer",
    "sin_title": "string",
    "contract_vehicle": "string",
    "schedule_number": "string",
    "fss19_schedule_number": "string",
    "category": "string",
    "subcategory": "string",
    "contract_expiration": "timestamp",
    "best_in_class": "boolean",
    "keywords": "string",
    "schedule_identity": "integer",
    "title1": "string",
    "cvr_fname": "string",
    "cvr_lname": "string",
    "cvr_phone": "string",
    "cvr_email": "string",
    "office_symbol": "string",
    "solicitation_url": "string",
    "pdf_url": "string",
    "is_gwac": "string",
    "pdf_url_desc": "string",
    "note": "string",
    "do_not_display": "string",
    "type_id": "integer",
    "hide_in_ebuy": "integer",
    "sin_identity": "integer",
    "special_item_number": "string",
    "sin_group_title": "string",
    "sin_description1": "string",
    "sin_description2": "string",
    "sin_order": "string",
    "co_fname": "string",
    "co_lname": "string",
    "co_phone": "string",
    "co_email": "string",
    "sin_ancillary": "string",
    "sin_ancra": "string",
    "sin_238910": "string",
    "sin_olm": "string",
    "complimentary_sin": "integer",
    "type": "string",
    "type_description": "string"
  }
}
```

Here is an example of one such object for NON-MAS:

```
{
  "mras_naics": "string",
  "mras_naics_title": "string",
  "mras_sin": "string",
  "mras_sin_title": "string",
  "mras_contract_vehicle": "string",
  "mras_schedule_number": "string",
  "mras_fss19_schedule_number": "string",
  "mras_large_category": "string",
  "mras_subcategory": "string",
  "sin_contract_description": "string",
  "mras_pool": "string",
  "mras_constellation": "string",
  "mras_zone": "string",
  "mras_zone_geography": "string",
  "mras_contract_expiration": "timestamp",
  "mras_best_in_class": "boolean",
  "keywords": "string",
  "schedule_identity": "integer",
  "fss19_schedule_number": "string",
  "title1": "string",
  "cvr_fname": "string",
  "cvr_lname": "string",
  "cvr_phone": "string",
  "cvr_email": "string",
  "office_symbol": "string",
  "solicitation_url": "string",
  "pdf_url": "string",
  "is_gwac": "string",
  "pdf_url_desc": "string",
  "note": "string",
  "do_not_display": "boolean",
  "type_id": "boolean",
  "hide_in_ebuy": "integer",
  "sin_identity": "integer",
  "special_item_number": "integer",
  "sin_group_title": "string",
  "sin_description1": "string",
  "sin_description2": "string",
  "sin_order": "string",
  "co_fname": "string",
  "co_lname": "string",
  "co_phone": "string",
  "co_email": "string",
  "sin_ancillary": "string",
  "sin_ancra": "string",
  "sin_238910": "string",
  "sin_olm": "string",
  "complimentary_sin": "integer",
  "type": "string",
  "type_description": "string"
}
```

## Querying documents - API Calls

MAS documents can be querried from your browser using the following URL

https://api.gsa.gov/acquisition/dx/sourcedata/v2/mas/?api_key=<KEY>

NON-MAS documents can be querried from your browser using the following URL

https://api.gsa.gov/acquisition/dx/sourcedata/v2/non-mas/?api_key=<KEY>

- <KEY> can be obtained from SIGNUP above.

## Paging documents by parameters

Documents can be paged through using ?page=<PAGE_NO>&api_key=......

Ex. /mas/?page=3&api_key=<KEY>
    It will return the third page of MAS documents.
    /non_mas/?page=2&api_key=<KEY>
    It will return the second page of NON-MAS documents.


## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parameters that were provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

<p><small><a href="#">Back to top</a></small></p>


## Contact Us

To suggest a feature or ask for help, Please <a href="mailto: fasdigitalsupport@gsa.gov">Contact Us</a>.

<p><small><a href="#">Back to top</a></small></p>

