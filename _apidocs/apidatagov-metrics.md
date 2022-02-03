---
title: Api.Data.Gov Metrics API
banner-heading: Api.Data.Gov Metrics API
---


<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >

## Overview

[api.data.gov](https://api.data.gov) is a free API management service for federal agencies. This API offers access to high level metrics for the APIs that are using the shared service.  

This API is used to power the [api.data.gov metrics page](https://api.data.gov/metrics).  

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
    // exampleApiUrl: 'https://api.gsa.gov/systems/datagov/3/action/package_search?api_key={{api_key}}',

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
    verifyEmail: true,

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

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |




## API Description

This API has one primary endpoints:

**Endpoint 1:** https://api.gsa.gov/operations/api-data-gov/v0/analytics/summary.json

**Expected Result**

#### Overall

| Name  | Description |
| ---- | ----------- |
| total_hits | Number of API hits processed by the api.data.gov system over all time |
| total_users | Number of API keys that accessed APIs through the api.data.gov system over all time |


#### Hits by Month

| Name  | Description |
| ---- | ----------- |
| year | Year in which the results took place |
| month | Month in which the results took place |
| count |  Number of API hits processed by the api.data.gov system in that month and year |


#### Production APIs

| Name  | Description |
| ---- | ----------- |
| api_backend_count | Year in which the results took place |
| organization_count | Month in which the results took place |
| api_backend_url_match_count |  Number of API hits processed by the api.data.gov system in that month and year |

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="https://open.gsa.gov/api/apidatagov-metrics/v1/openapi.yaml">Open API specification file for the api.data.gov metrics API</a>

## Contact Us

* Reach out to the api.data.gov team at [api.data.gov@gsa.gov](mailto:api.data.gov@gsa.gov).  

<p><small><a href="#">Back to top</a></small></p>
