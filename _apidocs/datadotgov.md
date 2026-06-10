---
title: Data.gov Catalog API
banner-heading: Data.gov Catalog API
---

## Overview

The Data.gov Catalog API provides access to metadata about datasets published by federal, state, local, and tribal governments. You can use it to search for datasets, filter by organization or topic, and retrieve detailed information about individual records.

Note: This metadata includes URLs, descriptions, and DCAT-US fields for each dataset. It does not include the underlying data itself.

Complete API documentation is available at [resources.data.gov/catalog-api](https://resources.data.gov/catalog-api/).
<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

| HTTP Header Name | Description |
| --- | --- |
| x-api-key | API key from api.data.gov. For sample purposes, you can use `DEMO_KEY` as an API key. |

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
    exampleApiUrl: 'https://api.gsa.gov/systems/datagov/3/action/package_search?api_key={{api_key}}',

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

## API Description

### Endpoints

| Endpoint | Description |
| --- | --- |
| `GET /search` | Search datasets by keyword, organization, topic, or geography |
| `GET /api/organizations` | List all organizations publishing datasets in the catalog |
| `GET /api/keywords` | List the most commonly used dataset keywords |
| `GET /api/locations/search` | Search for location names to use with spatial filtering |
| `GET /api/location/{location_id}` | Retrieve the geographic boundary (GeoJSON) for a location |
| `GET /harvest_record/{record_id}` | Retrieve harvest record metadata for a specific dataset |
| `GET /harvest_record/{record_id}/raw` | Retrieve the original source payload for a harvest record |
| `GET /harvest_record/{record_id}/transformed` | Retrieve the transformed DCAT-US payload for a harvest record |

### Key features

- **Full-text search** with keyword, organization, and geographic filters
- **DCAT-US metadata** returned for every dataset result
- **Cursor-based pagination** for reliable traversal of large result sets
- **Spatial filtering** by GeoJSON geometry or named location

Complete documentation, including request parameters, response field definitions, and pagination details, is available at [resources.data.gov/catalog-api](https://resources.data.gov/catalog-api/).

### Previous CKAN-based API

The prior CKAN endpoint (`https://api.gsa.gov/technology/datagov/v3/`) remains available in a read-only state for existing integrations. New development should use the Catalog API described above.

[Back to top](#)

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: [Open API specification file for the Data.gov Catalog API](https://open.gsa.gov/api/datadotgov/v4/open.json).

[Back to top](#)

## Contact Us

For questions or help, use the [Data.gov Contact page](https://www.data.gov/contact).

[Back to top](#)

