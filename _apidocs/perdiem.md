---
title: Per Diem API - Draft
banner-heading: Per Diem API - Draft
---


## Overview

Per Diem Rates are the allowed reimbursement rates for hotel stays and meals for federal travelers. Rates are set for each of the federal government's fiscal years (October 1st to September 30th) GSA is responsible for setting the rates in the continental United States. Many businesses and other organizations adopt these rates as well. This API provides access to the current rate information.  

Use of this API is subject to [Terms of Service for GSA.gov's Developer Resources](https://www.gsa.gov/technology/government-it-initiatives/digital-strategy/per-diem-apis/terms-of-service-for-gsagovs-developer-resources).

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
     exampleApiUrl: 'https://api.gsa.gov/travel/perdiem/rates/city/Fairfax/state/VA/year/2019?api_key={{api_key}}',

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

## Rate Limits

The default rate limit is 1,000 hits per hour.  If you need to request a rate limit change, please email us at [ocmweb@gsa.gov](mailto:ocmweb@gsa.gov)

<p><small><a href="#">Back to top</a></small></p>

## API Description


This API has five primary endpoints:

**Endpoint 1:** https://api.gsa.gov/travel/perdiem/v2/rates/city/{city}/state/{ST}/year/{year}

**Description:**  Rates by city/state/year

**Example:**  https://api.gsa.gov/travel/perdiem/v2/rates/city/Fairfax/state/VA/year/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| city | Destination city | Fairfax |
| state | Destination state | VA |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| meals | Meal rates per day, in dollars |
| value | Lodging rates per day, in dollars |



**Endpoint 2:** https://api.gsa.gov/travel/perdiem/v2/rates/state/{ST}/year/{year}

**Description:**  Rates by state/year

**Example:** https://api.gsa.gov/travel/perdiem/v2/rates/state/VA/year/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| state | Destination state | VA |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| meals | Meal rates per day, in dollars |
| value | Lodging rates per day, in dollars |


**Endpoint 3:** https://api.gsa.gov/travel/perdiem/v2/rates/zip/{zip}/year/{year}

**Description:**  Rates by zip/year

**Example:** https://api.gsa.gov/travel/perdiem/v2/rates/zip/20171/year/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| zip | Destination zip code | 20171 |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| meals | Meal rates per day, in dollars |
| value | Lodging rates per day, in dollars |



**Endpoint 4:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/{year}

**Description:**  Lodging Rates for the Continental U.S. by Year

**Example:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| meals | Meal rates per day, in dollars |
| DID | Destination ID; a unique ID for the city and state pair |



**Endpoint 5:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/mie/{year}

**Description:**   Meals and Incidental Expense (M&IE) Breakdown Rates by Year

**Example:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/mie/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |


**Expected Result**

| Name  | Description |
| ---- | ----------- |
| total | Total PerDiem |
| breakfast | PerDiem for breakfast |
| lunch | PerDiem for lunch |
| dinner | PerDiem for dinner |
| incidental | PerDiem for incidents |
| FirstLastDay | PerDiem for the first and last day |


**Endpoint 6:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/{year}

**Description:**   Mapping of Destination-IDs to ZipCode and State locations

**Example:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/2019

**Query Parameters**

| Name  | Description | Example |
| ---- | ----------- | ----------- |
| year | Fiscal year of travel.  Available back to 2010. | 2019 |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| DID | A destination-ID |
| Zip | The ZipCode this destination-ID resides within |
| ST | The state this destination-ID resides within |


<p><small><a href="#">Back to top</a></small></p>

## About Per Diem Rates  

GSA sets rates for geographic areas it determines called "primary destinations." Areas outside the primary destinations are covered by the same, nation-wide "standard rate." The Per Diem Rate database is organized by location and fiscal year. The meals value applies to the entire year.

On the first and last days of a trip, the allowed meal reimbursement is 75% of the Per Diem Rate.

For more details on Per Diem Rates please consult the [Federal Travel Regulations](https://www.gsa.gov/ftr) .

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
