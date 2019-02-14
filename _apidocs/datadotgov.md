---
title: Sample API
banner-heading: Sample API
---


## Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non augue tortor. In sit amet ligula sem. Cras id convallis nisi. Vivamus porta accumsan tempus. Nunc congue gravida quam in tristique. Quisque pharetra massa arcu, eu dictum ante pretium non. Fusce et est elementum, molestie sapien quis, convallis ipsum. Integer rutrum semper lacus et iaculis. Fusce vel dolor posuere, luctus velit ac, tempus mauris. Morbi diam nulla, tristique quis sapien a, egestas semper massa. Etiam accumsan semper nisl non ultrices. Cras nec vehicula nisi. Nunc accumsan urna mauris, vitae bibendum magna ornare eu. Vivamus non sagittis dui, in tincidunt elit. Donec sagittis nulla mauris, eget volutpat quam faucibus sed. Cras lobortis arcu vel odio vehicula congue.

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
    exampleApiUrl: 'https://api.gsa.gov/systems/digital-registry/v1/agencies.json?api_key={{api_key}}&format=JSON'

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



| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |




<p><small><a href="#">Back to top</a></small></p>

## API Description



This API has two primary endpoints:

**Endpoint 1:** https://api.gsa.gov/travel/citypairs/v0/airfares

**Description**   Negotiated airfares

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| award_year string | Year of airfare award. Example: '2017' |
| origin_airport_abbrev string | Origin airport abbreviation. Example: 'ABQ'. Must include either this or the destination airport abbreviation. |
| destination_airport_abbrev | Destination airport abbreviation. Example: 'BWI'. Must include either this or the origination airport abbreviation. |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| ID (integer, optional) | Generated unique identifier. |
| ITEM_NUM (string, optional) | Item number. |
| AWARD_YEAR (string, optional) | Award Year. |
| ORIGIN_AIRPORT_ABBREV (string, optional) | Origin Airport Abbreviation. |
| DESTINATION_AIRPORT_ABBREV (string, optional) | Destinatoin Airport Abbreviation. |
| ORIGIN_CITY_NAME (string, optional) | Original City Name. |
| ORIGIN_STATE (string, optional) | Origin State. |
| ORIGIN_COUNTRY (string, optional) | Origin Country. |
| DESTINATION_CITY_NAME (string, optional) | Destination City Name. |
| DESTINATION_STATE (string, optional) | Destination State. |
| DESTINATION_COUNTRY (string, optional) | Destination Country. |
| AIRLINE_ABBREV (string, optional) | Airline Abbreviation. |
| AWARDED_SERV (string, optional) | Awarded Serv. |
| PAX_COUNT (string, optional) | PAX Count. |
| YCA_FARE (integer, optional) | YCA Fare. |
| XCA_FARE (integer, optional) | XCA Fare. |
| BUSINESS_FARE (integer, optional) | Business Fare. |
| ORIGIN_AIRPORT_LOCATION (string, optional) | Origin Airport Location. |
| DESTINATION_AIRPORT_LOCATION (string, optional) | Destination Airport Location. |
| ORIGIN_CITY_STATE_AIRPORT (string, optional) | Origin City State Airport. |
| DESTINATION_CITY_STATE_AIRPORT (string, optional) | Destination City State Airport. |
| EFFECTIVE_DATE (string, optional) | Expiration Date. |
| EXPIRATION_DATE (string, optional) | Expiration Date. |



**Endpoint 2:** https://api.gsa.gov/travel/citypairs/v0/airfares/{id}

**Description**   Individual airfare by ID

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| id integer | Unique Identifier |

**Expected Result**
(Same response as endpoint 1)

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Sample API</a>

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


## FAQ

Integer velit ex, sollicitudin sed dolor vitae, consectetur cursus urna. Quisque lacus urna, vulputate non efficitur ut, ornare ac leo. Sed varius, lacus vitae mollis semper, magna lorem pretium erat, non maximus elit justo pretium dolor. Phasellus pellentesque bibendum turpis, eu venenatis eros facilisis sit amet. Pellentesque aliquet dolor ac metus luctus interdum. Vivamus est nibh, blandit non finibus id, tincidunt sed justo. Integer ullamcorper sapien neque, ut lobortis risus interdum ac. Aenean finibus, nibh vitae molestie viverra, nibh mi iaculis lacus, interdum dictum ipsum magna sit amet est. Phasellus vitae faucibus felis. Vivamus non molestie felis, at suscipit lectus. Phasellus ac pulvinar purus, luctus porta elit. Morbi a aliquet tellus. Vivamus mollis, ligula sed egestas euismod, elit lacus auctor dolor, sit amet facilisis purus eros ac augue.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

Praesent id cursus magna, sodales rutrum mauris. Nulla eget quam at nisl iaculis interdum. In condimentum, mi nec blandit consequat, velit nulla dictum lorem, non scelerisque ex nulla non ex. Sed vitae sem semper, pharetra massa at, vulputate urna. Pellentesque dapibus a ex sit amet pellentesque. Sed eget risus ut felis fringilla ullamcorper vitae a ligula. Aliquam finibus vitae ex sed vehicula.

<p><small><a href="#">Back to top</a></small></p>
