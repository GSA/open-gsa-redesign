---
title: analytics.usa.gov API
banner-heading: analytics.usa.gov API
---

<!-- Beta status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <strong>
       This project is in BETA
     </strong>
     <p class="usa-alert-text">
       This API is under active development, and breaking changes may be made without warning.
       Have feedback or questions? <a href="https://github.com/18F/analytics.usa.gov/issues">Please let us know</a>!

       Please note we have recently updated to `v2.0.0`, please update your requests accordingly.
     </p>
   </div>
 </div>
<!-- end Beta status alert -->

## Overview

The analytics data recorded provide a window into how people are interacting
with the government online. The data come from a unified Google Analytics
account for U.S. federal government agencies known as the Digital Analytics
Program (DAP). This program helps government agencies understand how people
find, access, and use government services online. The program does not track
individuals and anonymizes the IP addresses of visitors.

A subset of the DAP analytics data reports are available via the DAP API. These
reports may be limited to a specific domain or agency to support a wide range of
user needs. Data may be subject to sampling and should not be relied upon for
100% accuracy. This data should be used to examine high-level trends and provide
general insights into user demographics and behavior.

The URL for the API is `https://api.gsa.gov/analytics/dap`, and it
exposes 3 routes to query DAP analytics data:

- `/v<version number>/reports/<report name>/data`
- `/v<version number>/agencies/<agency name>/reports/<report name>/data`
- `/v<version number>/domain/<domain>/reports/<report name>/data`

Quick Links:
- [Getting started](#getting-started)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Migrating from API V1 to API V2](#migrating-from-api-v1-to-api-v2)
- [Contact us](#contact-us)

<p><small><a href="#">Back to top</a></small></p>

## Getting started

To begin using this API, you will need to register for an API Key. See the
[Authentication](#authentication) section for details.

### Common use cases

Below are a few examples of API calls and their use cases. For the example calls
below we'll use the `curl` library and a placeholder API key `1234`.

#### Find data for a date range

To limit a call to a certain time frame, use the `before` and `after` query
params

```
# Get 7 days of site data
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/reports/site/data?after=2024-06-01&before=2024-06-07
```

#### Find data for a particular domain name

To limit results to a certain domain, use the `/domain/my.domain.com` path

```
# Get top 10 downloads for ssa.gov
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/domain/www.ssa.gov/reports/download/data?limit=10
```

#### Find data for a particular agency

To limit results to a certain agency, use the `/agencies/some-agency` path

```
# Get traffic source data for the Department of State
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/agencies/state/reports/traffic-source/data
```

## Authentication

You can sign up for an API key below. After registration, you will need to
provide this API key in the `x-api-key` HTTP header with every API request.

{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-dap',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/analytics/dap/v2.0.0/reports/site/data?api_key={{api_key}}',

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

## Endpoints

There are 3 supported endpoints in the API. All endpoints are read-only, and
accessed with HTTP GET requests. All endpoints are preceded by an API version

Endpoint quick links:
- [API versions](#api-versions)
- [/reports](#reports)
- [/agencies](#agencies)
- [/domain](#domain)
- [Query params](#query-params)
- [Response structure](#response-structure)
- [HTTP response codes](#http-response-codes)
- [OpenAPI specification file](#openapi-specification-file)

### API versions

DAP API V1 returns data from Google Analytics V3, also known as Universal
Analytics (UA). DAP API V1 data includes data recorded in UA by DAP from January
1st 2018 to Google's retirement date for UA (June 24 2024).

Google has retired UA and new data may only be recorded in their new version,
Google Analytics V4 (GA4).

DAP API V2 returns data recorded in GA4 by DAP beginning on DAP's launch
date for GA4 recording code, August 1st 2023 to the present.

The GA4 data returned has some slightly different fields which are described
in [Migrating from API V1 to API V2](#migrating-from-api-v1-to-api-v2).

Valid API versions are `1.1` and `2`. API version should be included in the path
for all endpoints like the following examples

```
# API V1
https://api.gsa.gov/analytics/dap/v1.1/reports/site/data

# API V2
https://api.gsa.gov/analytics/dap/v2/reports/site/data
```

### /reports

This route returns data at a government wide scope. Report metrics will be
totals combining metrics for participating hostnames in all DAP agencies. See
[available reports](#available-reports) for a list of all supported report
names. The `report_agency` field in the response data will be empty string or
undefined in these reports because they apply to all DAP agencies.

#### Path structure

Replace `<report name>` with the API name of the desired report.

`/reports/<report name>/data`

#### Example

```
# Get 30 days of government wide user language demographics data
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/reports/language/data?after=2024-06-01&before=2024-06-30
```

### /agencies

This route returns data at an agency scope. Report metrics will be totals
combining participating hostnames belonging to the requested agency. See
[available agencies](#available-agencies) for a list of agencies which
participate in the DAP program and their API agency name. See
[available reports](#available-reports) for a list of all supported report
names.

#### Path structure

Replace `<agency name>` with the API name of the agency. Replace `<report name>`
with the API name of the desired report.

`/agencies/<agency name>/reports/<report name>/data`

#### Example

```
# Get 30 days of user operating system demographics data for the Department of
# Defense
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/agencies/defense/reports/os/data?after=2024-06-01&before=2024-06-30
```

### /domain

This route returns data at a domain scope. Report metrics will be totals
for the requested domain. The domain route supports only the `site`, `domain`,
`download`, and `second-level-domain` report names.

#### Path structure

Replace `<domain>` with the desired domain for the report. Replace
`<report name>` with the API name of the desired report.

`/domain/<domain>/reports/<report name>/data`

#### Example

```
# Get 30 days of visit data for www.ssa.gov
curl --header "x-api-key: 1234" https://api.gsa.gov/analytics/dap/v2/domain/www.ssa.gov/reports/site/data?after=2024-06-01&before=2024-06-30
```

### Query params

The following query params are supported by all endpoints:

- `limit`: Limit the number of data points that are rendered. The default is
1000 and the max is 10,000
- `page`: Pages through the results. If the limit is set to `1000`, using
`page=2` will render the 1001st through 2000th data point. Defaults to page 1.
- `after`: Limit the results to data with dates on or after the date specified.
Expects `YYYY-MM-DD` date format.
- `before`: Limit the results to data with dates on or before the date
specified. Expects `YYYY-MM-DD` date format. Defaults to the current date.

### Response structure

All endpoints follow the same response structure. The response represents the
rows in the `data` array in the JSON reports that can be downloaded from
analytics.usa.gov, or the rows in the CSV files that can be downloaded. They are
returned as an array of JSON objects.

Here is an example of one such object:

```
{
  "id": 60716,
  "report_name": "today",
  "report_agency": "justice",
  "date": "2017-04-07T14:00:00.000Z",
  "visits": "4240",
  "created_at": "2017-04-07T04:23:55.792Z",
  "updated_at": "2017-04-07T04:23:55.792Z"
}
```

Note that is has the following properties:

- `id`: The primary key of the data point entry in the DAP API database.
- `report_name`: The name of the data point's report
- `report_agency`: The name of the data point's agency. This will be empty or
undefined when the data point is at the government wide scope
- `date`: The date/time corresponding to the data in the data point
- `visits`: The requested visit data for the data point. This is shown as an
example of possible data fields that will be included as siblings to the
required properties above. Properties such as visits, browser, screen size,
and so on, can be included depending on the report. See [analytics definitions](https://analytics.usa.gov/definitions)
for more details on dimensions and metrics.

### HTTP response codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parmaters that were provided. |
| 403 | API key is not correct or was not provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

### OpenAPI specification file

You can view the full details of this API in the OpenAPI Specification file
available here:
<a href="v2/openapi.yaml">Open API specification file for the Digital Analytics Program API</a>

<p><small><a href="#">Back to top</a></small></p>

### Available reports

The following reports can be queried using the API:

| API report name | description | example /reports API call |
| ------------------- | ------------------- | ------------------- |
| download | The count of download events for each downloaded file | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/download/data?api_key=DEMO_KEY1))_ |
| traffic-source | The count of visitors for each traffic source | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/traffic-source/data?api_key=DEMO_KEY1))_ |
| device-model | The count of visitors for each device model |_([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/device-model/data?api_key=DEMO_KEY1))_ |
| domain | The count of visitors for each domain | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/domain/data?api_key=DEMO_KEY1))_ |
| site | The count of visitors for each hostname | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/site/data?api_key=DEMO_KEY1))_ |
| second-level-domain | The count of visitors to participating second-level-domains | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/second-level-domain/data?api_key=DEMO_KEY1))_ |
| language | The count of visitors for each browser language code | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/language/data?api_key=DEMO_KEY1))_ |
| os-browser | The count of visitors broken down by browser and operating system | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/os-browser/data?api_key=DEMO_KEY1))_ |
| windows-browser | The count of visitors broken down by Windows versions and browser | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/windows-browser/data?api_key=DEMO_KEY1))_ |
| browser | The count of visitors for each browser | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/browser/data?api_key=DEMO_KEY1))_ |
| windows-ie | The count of visitors broken down by Windows version and Internet Explorer versions (this report is only in API version 1.1) | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/windows-ie/data?api_key=DEMO_KEY1))_ |
| os | The count of visitors for each operating system | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/os/data?api_key=DEMO_KEY1))_ |
| windows | The count of visitors for each Windows version | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/windows/data?api_key=DEMO_KEY1))_ |
| ie | The count of users for each Internet Explorer version (this report is only in API version 1.1) | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/ie/data?api_key=DEMO_KEY1))_ |
| device | The count of users for each device type (desktop/mobile/tablet) | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/reports/device/data?api_key=DEMO_KEY1))_ |

### Available agencies

The following agencies can be queried using the API:

| agency | API agency name | example /agencies API call |
| --------- | --------- | --------- |
| Agency for International Development | agency-international-development | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/agency-international-development/reports/site/data?api_key=DEMO_KEY1))_ |
| American Battle Monuments Commission | american-battle-monuments-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/american-battle-monuments-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Commodity Futures Trading Commission | commodity-futures-trading-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/commodity-futures-trading-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Consumer Financial Protection Bureau | consumer-financial-protection-bureau | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/consumer-financial-protection-bureau/reports/site/data?api_key=DEMO_KEY1))_ |
| Consumer Product Safety Commission | consumer-product-safety-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/consumer-product-safety-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Corporation for National and Community Service | corporation-national-community-service | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/corporation-national-community-service/reports/site/data?api_key=DEMO_KEY1))_ |
| Defense Nuclear Facilities Safety Board | defense-nuclear-facilities-safety-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/defense-nuclear-facilities-safety-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Agriculture | agriculture | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/agriculture/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Commerce | commerce | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/commerce/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Defense | defense  | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/defense/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Education | education | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/education/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Energy | energy  | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/energy/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Health and Human Services | health-human-services | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/health-human-services/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Homeland Security | homeland-security | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/homeland-security/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Housing and Urban Development | housing-urban-development | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/housing-urban-development/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of the Interior | interior | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/interior/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Justice | justice | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/justice/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Labor | labor | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/labor/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of State | state | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/state/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Transportation | transportation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/transportation/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of the Treasury | treasury | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/treasury/reports/site/data?api_key=DEMO_KEY1))_ |
| Department of Veterans Affairs | veterans-affairs | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/veterans-affairs/reports/site/data?api_key=DEMO_KEY1))_ |
| Environmental Protection Agency | environmental-protection-agency | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/environmental-protection-agency/reports/site/data?api_key=DEMO_KEY1))_ |
| Equal Employment Opportunity Commission | equal-employment-opportunity-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/equal-employment-opportunity-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Executive Office of the President | executive-office-president | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/executive-office-president/reports/site/data?api_key=DEMO_KEY1))_ |
| Farm Credit Administration | farm-credit-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/farm-credit-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Deposit Insurance Corporation | federal-deposit-insurance-corporation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-deposit-insurance-corporation/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Election Commission | federal-election-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-election-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Energy Regulatory Commission | federal-energy-regulatory-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-energy-regulatory-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Housing Finance Agency | federal-housing-finance-agency | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-housing-finance-agency/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Maritime Commission | federal-maritime-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-maritime-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Mine Safety and Health Review Commission | federal-mine-safety-health-review-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-mine-safety-health-review-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Retirement Thrift Investment Board | federal-retirement-thrift-investment-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-retirement-thrift-investment-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Federal Trade Commission | federal-trade-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/federal-trade-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| General Services Administration | general-services-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/general-services-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| Institute of Museum and Library Services | institute-museum-library-services | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/institute-museum-library-services/reports/site/data?api_key=DEMO_KEY1))_ |
| Inter-American Foundation | inter-american-foundation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/inter-american-foundation/reports/site/data?api_key=DEMO_KEY1))_ |
| International Development Finance Corporation | international-development-finance-corporation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/international-development-finance-corporation/reports/site/data?api_key=DEMO_KEY1))_ |
| Merit Systems Protection Board | merit-systems-protection-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/merit-systems-protection-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Millennium Challenge Corporation | millennium-challenge-corporation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/millennium-challenge-corporation/reports/site/data?api_key=DEMO_KEY1))_ |
| National Aeronautics and Space Administration | national-aeronautics-space-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-aeronautics-space-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| National Archives and Records Administration | national-archives-records-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-archives-records-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| National Capital Planning Commission | national-capital-planning-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-capital-planning-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| National Council on Disability | national-council-disability | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-council-disability/reports/site/data?api_key=DEMO_KEY1))_ |
| National Credit Union Administration | national-credit-union-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-credit-union-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| National Education Association | national-education-association | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-education-association/reports/site/data?api_key=DEMO_KEY1))_ |
| National Endowment For The Humanities | national-endowment-humanities | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-endowment-humanities/reports/site/data?api_key=DEMO_KEY1))_ |
| National Labor Relations Board | national-labor-relations-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-labor-relations-board/reports/site/data?api_key=DEMO_KEY1))_ |
| National Mediation Board | national-mediation-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-mediation-board/reports/site/data?api_key=DEMO_KEY1))_ |
| National Reconnaissance Office | national-reconnaissance-office | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-reconnaissance-office/reports/site/data?api_key=DEMO_KEY1))_ |
| National Science Foundation | national-science-foundation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-science-foundation/reports/site/data?api_key=DEMO_KEY1))_ |
| National Transportation Safety Board | national-transportation-safety-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/national-transportation-safety-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Nuclear Regulatory Commission | nuclear-regulatory-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/nuclear-regulatory-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Nuclear Waste Technical Review Board | nuclear-waste-technical-review-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/nuclear-waste-technical-review-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Office of the Director of National Intelligence | office-director-national-intelligence | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/office-director-national-intelligence/reports/site/data?api_key=DEMO_KEY1))_ |
| Office of Government Ethics | office-government-ethics | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/office-government-ethics/reports/site/data?api_key=DEMO_KEY1))_ |
| Office of Navajo and Hopi Indian Relocation | office-navajo-hopi-indian-relocation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/office-navajo-hopi-indian-relocation/reports/site/data?api_key=DEMO_KEY1))_ |
| Office of Personnel Management | office-personnel-management | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/office-personnel-management/reports/site/data?api_key=DEMO_KEY1))_ |
| Peace Corps | peace-corps | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/peace-corps/reports/site/data?api_key=DEMO_KEY1))_ |
| Pension Benefit Guaranty Corporation | pension-benefit-guaranty-corporation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/pension-benefit-guaranty-corporation/reports/site/data?api_key=DEMO_KEY1))_ |
| Postal Regulatory Commission | postal-regulatory-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/postal-regulatory-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Privacy and Civil Liberties Oversight Board | privacy-civil-liberties-oversight-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/privacy-civil-liberties-oversight-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Public Buildings Reform Board | public-buildings-reform-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/public-buildings-reform-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Securities and Exchange Commission | securities-exchange-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/securities-exchange-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| Small Business Adminstration | small-business-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/small-business-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| Social Security Administration | social-security-administration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/social-security-administration/reports/site/data?api_key=DEMO_KEY1))_ |
| Special Inspector General for Afghanistan Reconstruction | special-inspector-general-afghanistan-restoration | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/special-inspector-general-afghanistan-restoration/reports/site/data?api_key=DEMO_KEY1))_ |
| Surface Transportation Board | surface-transportation-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/surface-transportation-board/reports/site/data?api_key=DEMO_KEY1))_ |
| Udall Foundation | udall-foundation | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/udall-foundation/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Access Board | access-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/access-board/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Agency for Global Media | agency-global-media | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/agency-global-media/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Commission on Civil Rights | commission-civil-rights | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/commission-civil-rights/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. International Trade Commission | international-trade-commission | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/international-trade-commission/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Postal Inspection Service | postal-inspection-service | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/postal-inspection-service/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Postal Service | postal-service | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/postal-service/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Railroad Retirement Board | railroad-retirement-board | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/railroad-retirement-board/reports/site/data?api_key=DEMO_KEY1))_ |
| U.S. Trade and Development Agency | trade-development-agency | _([example](https://api.gsa.gov/analytics/dap/v2.0.0/agencies/trade-development-agency/reports/site/data?api_key=DEMO_KEY1))_ |

<p><small><a href="#">Back to top</a></small></p>

## Migrating from API V1 to API V2

### Background

As described in [API versions](#api-versions), API V1 returns data from Google
Analytics version 3, and DAP API V2 returns data from Google Analytics version
4.

The GA4 data returned has some slightly different fields which are described
below.

### Requests

The DAP API endpoints are the same between V1 and V2, the only difference
for API requests is the API version string.

### Responses

Response data is slightly different in DAP API V2.  This change is due to the
data provided by Google Analytics. Some data fields were retired in GA4, and
some other useful data fields were added. The changes follow:

#### Deprecated fields from V1

- browser_version
- has_social_referral
- exits
- exit_page

#### New fields in V2

##### file_name

The page path of a downloaded file.

##### language_code

The ISO639 language setting of the user's device.  e.g. 'en-us'

##### session_default_channel_group

An enum which describes the session. Possible values:

'Direct', 'Organic Search', 'Paid Social', 'Organic Social', 'Email',
'Affiliates', 'Referral', 'Paid Search', 'Video', and 'Display'

<p><small><a href="#">Back to top</a></small></p>

## Contact us

To suggest a feature or ask for help, please [file an issue in our project repository](https://github.com/18F/analytics.usa.gov/issues).

<p><small><a href="#">Back to top</a></small></p>
