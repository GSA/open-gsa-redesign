---
title: analytics.usa.gov API
banner-heading: analytics.usa.gov API
---


<!-- Alpha status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <h3 class="usa-alert-heading">
       This project is in BETA
     </h3>
     <p class="usa-alert-text">
       This API is under active development, and breaking changes may be made without warning.
       Have feedback or questions? <a href="https://github.com/18F/analytics.usa.gov/issues">Please let us know</a>!

       Please note we have recently updated to `v1.1`, please update your requests accordingly.
     </p>
   </div>
 </div>
<!-- end Alpha status alert -->


## Overview

In addition to being published and available for download, the data generated for analytics.usa.gov  is also available via an API.

**Please note we have recently updated to `v1.1`, please update your requests accordingly.**

The URL for the API is `https://api.gsa.gov/analytics/dap/v1.1`, and it exposes 3 routes to query data:

- `/reports/<report name>/data`
- `/agencies/<agency name>/reports/<report name>/data`
- `/domain/<domain>/reports/<report name>/data`


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key here: [API key signup page on api.data.gov](https://api.data.gov/signup/).

After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |




<p><small><a href="#">Back to top</a></small></p>

## API Description


## The Response

The response represents the rows in the `data` array in the JSON reports that can be downloaded, or the rows in the CSV files that can be downloaded. They are returned as an array of JSON objects. Here is an example of one such object:

```
{
  "id": 60716,
  "report_name": "today",
  "report_agency": "justice",
  "date_time": "2017-04-07T14:00:00.000Z",
  "data": {
    "visits": "4240"
  },
  "created_at": "2017-04-07T04:23:55.792Z",
  "updated_at": "2017-04-07T04:23:55.792Z"
}
```

Note that is has the following properties:

- `id`: The primary key of the data point
- `report_name`: The name of the data point's report
- `report_agency`: The name of the data point's agency
- `date_time`: The data/time the data in the data point corresponds to
- `data`: The data associated with the data point. This may contain child properties such as visits, browser, screen size, and so on, depending on the report

## Querying reports

Reports can be queried by substituting `<report name>` in the path with the name of the report.

The following reports can be queried using the API:

- download  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/download/data?api_key=DEMO_KEY1))_
- traffic-source  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/traffic-source/data?api_key=DEMO_KEY1))_
- device-model  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/device-model/data?api_key=DEMO_KEY1))_
- domain  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/domain/data?api_key=DEMO_KEY1))_
- site  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/site/data?api_key=DEMO_KEY1))_
- second-level-domain  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/second-level-domain/data?api_key=DEMO_KEY1))_
- language  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/language/data?api_key=DEMO_KEY1))_
- os-browser  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/os-browser/data?api_key=DEMO_KEY1))_
- windows-browser  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/windows-browser/data?api_key=DEMO_KEY1))_
- browser  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/browser/data?api_key=DEMO_KEY1))_
- windows-ie  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/windows-ie/data?api_key=DEMO_KEY1))_
- os  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/os/data?api_key=DEMO_KEY1))_
- windows  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/windows/data?api_key=DEMO_KEY1))_
- ie  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/ie/data?api_key=DEMO_KEY1))_
- device  _([example](https://api.gsa.gov/analytics/dap/v1.1/reports/device/data?api_key=DEMO_KEY1))_

## Filtering based on agencies

Reports can be queried by substituting `<agency name>` in the path with the name of the agency. If the path without an agency name parameter is used, the reports correspond to government wide data.

The list of valid agency names includes:

- agency-international-development  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/agency-international-development/reports/site/data?api_key=DEMO_KEY1))_
- agriculture  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/agriculture/reports/site/data?api_key=DEMO_KEY1))_
- commerce  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/commerce/reports/site/data?api_key=DEMO_KEY1))_
- defense  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/defense/reports/site/data?api_key=DEMO_KEY1))_
- education  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/education/reports/site/data?api_key=DEMO_KEY1))_
- energy  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/energy/reports/site/data?api_key=DEMO_KEY1))_
- environmental-protection-agency  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/environmental-protection-agency/reports/site/data?api_key=DEMO_KEY1))_
- executive-office-president  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/executive-office-president/reports/site/data?api_key=DEMO_KEY1))_
- general-services-administration  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/general-services-administration/reports/site/data?api_key=DEMO_KEY1))_
- health-human-services  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/health-human-services/reports/site/data?api_key=DEMO_KEY1))_
- homeland-security  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/homeland-security/reports/site/data?api_key=DEMO_KEY1))_
- housing-urban-development  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/housing-urban-development/reports/site/data?api_key=DEMO_KEY1))_
- interior  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/interior/reports/site/data?api_key=DEMO_KEY1))_
- justice  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/justice/reports/site/data?api_key=DEMO_KEY1))_
- labor  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/labor/reports/site/data?api_key=DEMO_KEY1))_
- national-aeronautics-space-administration  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/national-aeronautics-space-administration/reports/site/data?api_key=DEMO_KEY1))_
- national-archives-records-administration  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/national-archives-records-administration/reports/site/data?api_key=DEMO_KEY1))_
- national-science-foundation  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/national-science-foundation/reports/site/data?api_key=DEMO_KEY1))_
- nuclear-regulatory-commission  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/nuclear-regulatory-commission/reports/site/data?api_key=DEMO_KEY1))_
- office-personnel-management  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/office-personnel-management/reports/site/data?api_key=DEMO_KEY1))_
- postal-service  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/postal-service/reports/site/data?api_key=DEMO_KEY1))_
- small-business-administration  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/small-business-administration/reports/site/data?api_key=DEMO_KEY1))_
- social-security-administration  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/social-security-administration/reports/site/data?api_key=DEMO_KEY1))_
- state  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/state/reports/site/data?api_key=DEMO_KEY1))_
- transportation  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/transportation/reports/site/data?api_key=DEMO_KEY1))_
- treasury  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/treasury/reports/site/data?api_key=DEMO_KEY1))_
- veterans-affairs  _([example](https://api.gsa.gov/analytics/dap/v1.1/agencies/veterans-affairs/reports/site/data?api_key=DEMO_KEY1))_

## Filtering by domain
For the `site`, `domain`, `download`, and `second-level-domain` reports you may use the `domain` route, to only return results by domain.

## Query params

The following query params are supported to work with the data:

- `limit`: Limit the number of data points that are rendered. The default is 1000 and the max is 10,000
- `page`: Pages through the results. If the limit is set to `1000`, using `page=2` will render the 1001st through 2000th data point.
- `after`: Limit the results to in dates on or after the date specified. Expects `YYYY-MM-DD`. 
- `before`: Limit the results to in dates on or before the date specified. Expects `YYYY-MM-DD`.


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

To suggest a feature or ask for help, please [file an issue in our project repository](https://github.com/18F/analytics.usa.gov/issues).    

<p><small><a href="#">Back to top</a></small></p>
