---
title: Digital Experience (DX) CALC Library API
banner-heading: Digital Experience (DX) CALC Library API
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
        This project is providing Digital Experience (DX) CALC Library API. 
        Have feedback or questions? <a href="mailto: fasdigitalsupport@gsa.gov">Please let us know</a>!
     </p>
   </div>
 </div>
<!-- end Alpha status alert -->


## Overview

The GSA API provides a set of definations and protocols to build and integrate content for <a href="https://buy.gsa.gov">https://buy.gsa.gov</a>


The URL for the CALC RATES API is `https://api.gsa.gov/acquisition/calc/v2/api/rates`

<p><small><a href="#">Back to top</a></small></p>


## The Response

The response represents the rows in the `data` array in the JSON reports that can be downloaded. You may also download the document files.

They are returned as an array of JSON objects. Here is an example of one such object for RATES:

```
{
  "id": "integer",
  "idv_piid": "string",
  "vendor_name": "string",
  "labor_category": "string",
  "education_level": "string",
  "min_years_experience": "integer",
  "hourly_rate_year1": "decimal 5,2",
  "current_price": "decimal 5,2",
  "next_year_price": "decimal 5,2",
  "second_year_price": "decimal 5,2",
  "schedule": "string",
  "sin": "string",
  "contractor_site": "string",
  "business_size": "string",
  "keywords": "string",
  "certifications": "string",
  "security_clearance": "string",
  "modified_date": "timestamp"
}
```

## Querying documents - API Calls

Rates JSON documents can be queried from your browser using the following URL

https://api.gsa.gov/acquisition/calc/v2/api/rates

## Paging documents by parameters

Documents can be paged through using ?page=<PAGE_NO>......

Ex.
- https://api.gsa.gov/acquisition/calc/v2/api/rates/?page=3 - It will return the third page of RATES documents.



## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

<p><small><a href="#">Back to top</a></small></p>


## Contact Us

To suggest a feature or ask for help, Please <a href="mailto: fasdigitalsupport@gsa.gov">Contact Us</a>.

<p><small><a href="#">Back to top</a></small></p>