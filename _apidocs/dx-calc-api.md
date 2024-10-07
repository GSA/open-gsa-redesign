---
title: Digital Experience (DX) CALC+ Quick Rate API
banner-heading: Digital Experience (DX) CALC+ Quick Rate API
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
        This project is providing Digital Experience (DX) CALC+ Quick Rate API. 
        Have feedback or questions? <a href="mailto: fasdigitalsupport@gsa.gov">Please let us know</a>!
     </p>
   </div>
 </div>
<!-- end Alpha status alert -->

<div class="usa-alert usa-alert-error" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <h3>
       LEGACY RATES API DECOMMISSION
     </h3>
     <h4>DECOMMISSION DATE: February 2025</h4>
     <p>
        <a href="https://api.gsa.gov/acquisition/calc/v2/api/rates/">The legacy Rates API is being retired.</a> Users should migrate their systems and applications to use the modernized Ceiling-Rates API as soon as possible. 
    </p>
    <p>    
        The new Ceiling-Rates API documentation can be found below.
     </p>
     <p>
        The legacy CALC Rates API has been replaced by a modernized version powered by AWS OpenSearch with a broad range of feature enhancements, optimizations, and data quality improvements.
     </p>
     <p>
        The new CALC+ application (and APIs) can be experienced at the following URL:
        <a href="https://buy.gsa.gov/pricing/">https://buy.gsa.gov/pricing/</a>
     </p>     
   </div>
 </div>

## Overview

The CALC+ Labor Ceiling Rates tool is a pricing research tool located on buy.gsa.gov to support
government acquisition professionals in services pricing business intelligence. Acquisition staff
can use Labor Ceiling Rates data to help conduct market research with price analysis, develop
Independent Government Cost Estimates (IGCEs), and aid in benchmarking competitive pricing.

Access to the CALC+ Prices Paid tool begins with Pricing Central, <a href="https://buy.gsa.gov/pricing/">https://buy.gsa.gov/pricing/</a>. 
Access to this tool does not require user credentials or authentication.

The CALC+ Labor Ceiling Rates tool is powered by the CEILINGRATES API.

The CEILINGRATES API data is refreshed everyday overnight.

## Entrypoint

The legacy URL is being retired and you should not use it.
Please see decommissioning message above.
https://api.gsa.gov/acquisition/calc/v2/api/rates/

**The URL for the CALC+ Quick Rate API is** 

`https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/`

The default API URL used within our application is 
```
https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?
page=1
&page_size=20
&ordering=current_price
&sort=asc
&filter=experience_range:0,45
&filter=price_range:15,500
```
We use this to provide a sensible default experience for all users when first loading the application.




## JSON Response

A CEILINGRATES API JSON response will consist of an array of objects nested within a `hits` object.
Here is an example:

```
"hits": {
    "total": {
        "value": 10000,
        "relation": "gte"
    },
    "max_score": null,
    "hits": [
        {
            "_index": "ceilingrates",
            "_type": "_doc",
            "_id": "6340611",
            "_score": null,
            "_source": {
                "contract_end": "2028-12-17",
                "security_clearance": "No",
                "next_year_price": 17.52,
                "second_year_price": 17.52,
                "vendor_name": "ALCAZAR TRADES, INC.",
                "idv_piid": "GS21F026BA",
                "business_size": "S",
                "contract_start": "2013-12-18",
                "labor_category": "Special Event Set-Up",
                "schedule": "MAS Consolidated MOD Refresh 15+",
                "cont_end_dtg": "20281217",
                "min_years_experience": 1,
                "sin": "561210FAC",
                "worksite": "Customer Facility",
                "education_level": "HS",
                "id": 6340611,
                "current_price": 17.52,
                "dt_termg": null,
                "category": "Facilities",
                "subcategory": "Facilities Maintenance and Repair",
                "_timestamp": "2024-05-02T10:00:24Z",
                "cont_beg_dtg": "20131218"
            },
            "sort": [
                17.52
            ]
        },
        ...etc
    ]
}
```




## Valid Fields

**Note**
- These are important to remember as the API will only respond to properly formed requests against valid fields.

| Suggestion/Search/Keyword Fields | Filter Fields | Ordering Fields |
| ----------- | ----------- | ----------- |
| labor_category | education_level | labor_category |
| vendor_name | experience_range | current_price |
| idv_piid | min_years_experience | education_level |
|  | price_range | keywords |
|  | current_price | certifications |
|  | worksite | min_years_experience |
|  | business_size | vendor_name |
|  | security_clearance | schedule |
|  | sin |
|  | category |
|  | subcategory |




## API Examples

## Suggestions

- Suggestions are useful for retrieving actual values contained within the CEILINGRATES data set. 
- It's useful to pair these suggestions within your `search=` API calls.


### Suggest (Legacy)

**Note**
- Think, begins with...

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=labor_category:co">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=labor_category:co</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=vendor_name:te">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=vendor_name:te</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=idv_piid:47q">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=idv_piid:47q</a>

### Multiple Suggestions 

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=labor_category:co&suggest=vendor_name:te&suggest=idv_piid:47q">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest=labor_category:co&suggest=vendor_name:te&suggest=idv_piid:47q</a>



### Suggest-Contains (Recommended)

**Note**
- Think, should contain...
- Does not support submission of multiple suggesters at once.
- Two character minimum

#### Labor Category
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:chief">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:chief</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:sys">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:sys</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:pr">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=labor_category:pr</a>

#### Vendor Name
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=vendor_name:adv">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=vendor_name:adv</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=vendor_name:group,">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=vendor_name:group,</a>

#### Contract Numbers
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:012">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:012</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:f02">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:f02</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:20">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?suggest-contains=idv_piid:20</a>




## Exact Match Search 

**Note**
- Think, exact match

#### Labor Category
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Engineer+II&page=1&page_size=100">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Engineer+II&page=1&page_size=100</a>

#### Vendor Name
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=vendor_name:Management+Consulting,+Inc.&page=1&page_size=100">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=vendor_name:Management+Consulting,+Inc.&page=1&page_size=100</a>

#### Contract Numbers
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100</a>




## Keyword Search

**Note**
- Think, wildcard
- Keyword search for partial strings (two character minimum)
- Keyword searching looks at the following fields:
  - labor_category
  - vendor_name
  - idv_piid


<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=soft">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=soft</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=king">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=king</a>
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=f00">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&keyword=f00</a>




## Filtering

**Note**
- You can submit one or many filters at once
- You can combine filters with search or keyword API calls

### Single filter
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=education_level:BA">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=education_level:BA</a>

### Many filters
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=200&filter=education_level:BA|HS&filter=price_range:10,30&filter=experience_range:3,40">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=200&filter=education_level:BA|HS&filter=price_range:10,30&filter=experience_range:3,40</a>

### education_level

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=education_level:MA">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=education_level:MA</a>

### experience_range

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=experience_range:25,40">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=experience_range:25,40</a>

### min_years_experience

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=min_years_experience:12">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=min_years_experience:12</a>

###  price_range
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=price_range:10,80">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=price_range:10,80</a>

### current_price
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=current_price:29.62">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=current_price:29.62</a>

### worksite

possible values: contractor, customer, both

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=worksite:Contractor">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=worksite:Contractor</a>

### business_size

possible values: S, O  
: S=Small Business 
: O=Other than Small Business

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=business_size:S">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=business_size:S</a>

### security_clearance

possible values: yes, no  
: yes, will pull all variations of 'yes'
: no, will pull all variations of 'no'

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=security_clearance:yes">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=security_clearance:yes</a>

### sin
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=sin:541330ENG">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=sin:541330ENG</a>

### category
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=category:Transportation%20and%20Logistics%20Services">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=category:Transportation%20and%20Logistics%20Services</a>

### subcategory
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=subcategory:Testing%20and%20Analysis">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?page=1&page_size=100&filter=subcategory:Testing%20and%20Analysis</a>




## Searching and Filtering

#### Search + Filters
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Project+Manager+II&page=1&page_size=100&filter=education_level:BA|HS|MA&filter=price_range:60,130&filter=experience_range:3,40&filter=business_size:S&filter=site:customer">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Project+Manager+II&page=1&page_size=100&filter=education_level:BA|HS|MA&filter=price_range:60,130&filter=experience_range:3,40&filter=business_size:S&filter=site:customer</a>

#### Keyword + Filters
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=Project&page=1&page_size=100&filter=education_level:BA&filter=price_range:60,130&filter=experience_range:3,40&filter=business_size:S&filter=site:customer&filter=security_clearance:no&filter=sin:541620.0">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=Project&page=1&page_size=100&filter=education_level:BA&filter=price_range:60,130&filter=experience_range:3,40&filter=business_size:S&filter=site:customer&filter=security_clearance:no</a>




## Ordering

**Note**
- Default order is ascending on current_price
- You can sort by multiple fields
- Parameters should be passed in pairs with **ordering** first, then **sort** second

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=labor_category&sort=asc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=labor_category&sort=asc</a>

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=vendor_name&sort=asc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=vendor_name&sort=asc</a>

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=education_level&sort=desc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=education_level&sort=desc</a>

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=min_years_experience&sort=desc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=min_years_experience&sort=desc</a>

### Ordering with Multiple Fields 

The API will process field and sort(asc/desc) based on the order the parameters are sent

| 1 | 2 |
| :----: | :----: |
| &**ordering**=performance_state&**sort**=desc | &**ordering**=performance_city&**sort**=asc |

`&ordering=performance_state&sort=desc&ordering=performance_city&sort=asc`

**Examples**

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Engineer+II&page=1&page_size=100&ordering=education_level&sort=asc&ordering=current_price&sort=desc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=labor_category:Engineer+II&page=1&page_size=100&ordering=education_level&sort=asc&ordering=current_price&sort=desc</a>

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=min_years_experience&sort=desc&ordering=vendor_name&sort=desc">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=project&page=1&page_size=300&ordering=min_years_experience&sort=desc&ordering=vendor_name&sort=desc</a>




## Excluding

**Note**
- Pass in records to exclude by separating them with a pipe `|`
- Use the `_id` field from a specific record ` "_id": "6340611",` to exclude it from results 
- The excluded row is simply omitted from the result set, it is not deleted.
- Since the excluded rows are not part of the result set returned, they are also not a part of any calculations or aggregations.
- Since the excluded rows are not part of the result set returned, they will not be included in any exported file.

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100&exclude=6275099|6275111|6275123">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100&exclude=6275099|6275111|6275123</a>




## Exporting

**Note**
- Export results to a CSV file
- add `&export=y` to any API call

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100&exclude=6275099|6275111|6275123&export=y">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?search=idv_piid:GS10F0303V&page=1&page_size=100&exclude=6275099|6275111|6275123&export=y</a>




## Pagination

**Note**
- **page** and **page_size** should be passed in every api call

<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=king&page=1&page_size=20">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=king&page=1&page_size=20</a> 
<a href="https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=king&page=8&page_size=50">https://api.gsa.gov/acquisition/calc/v3/api/ceilingrates/?keyword=king&page=8&page_size=50</a> 




## Aggregations

**Note**
- Aggregations are returned with every API call
- They reflect the counts of respective data within the current query result set
- They are useful to create menu filtering options

```
"aggregations": {
    "labor_category": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "Driver",
                "doc_count": 4
            },
            {
                "key": "ADMINISTRATOR, PROPERTY, LEVEL 1  ",
                "doc_count": 2
            },
            {
                "key": "General Clerk II",
                "doc_count": 2
            },
            {
                "key": "Accounting Clerk III",
                "doc_count": 1
            },
            {
                "key": "Admin Assistant",
                "doc_count": 1
            },
            {
                "key": "Customer Service Manager",
                "doc_count": 1
            },
            {
                "key": "Customer Service Representative - Senior",
                "doc_count": 1
            },
            {
                "key": "Tire Repairer",
                "doc_count": 1
            },
            {
                "key": "Truckdriver, Tractor-Trailer",
                "doc_count": 1
            }
        ]
    },
    "security_clearance": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "No",
                "doc_count": 32
            },
            {
                "key": "As Required",
                "doc_count": 2
            },
            {
                "key": "N/A",
                "doc_count": 1
            },
            {
                "key": "None",
                "doc_count": 1
            },
            {
                "key": "Yes",
                "doc_count": 1
            }
        ]
    },
    "worksite": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "Both",
                "doc_count": 41
            },
            {
                "key": "Customer Site",
                "doc_count": 7
            },
            {
                "key": "Customer",
                "doc_count": 6
            },
            {
                "key": "Contractor Facility",
                "doc_count": 3
            },
            {
                "key": "Customer Facility",
                "doc_count": 3
            }
        ]
    },
    "min_years_experience": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "3",
                "doc_count": 28
            },
            {
                "key": "5",
                "doc_count": 18
            },
            {
                "key": "4",
                "doc_count": 6
            },
            {
                "key": "10",
                "doc_count": 4
            },
            {
                "key": "7",
                "doc_count": 1
            }
        ]
    },
    "education_level": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "HS",
                "doc_count": 33
            },
            {
                "key": "BA",
                "doc_count": 18
            },
            {
                "key": "AA",
                "doc_count": 9
            }
        ]
    },
    "wage_histogram": {
        "buckets": [
            {
                "min": 19.65999984741211,
                "key": 19.69499969482422,
                "max": 19.729999542236328,
                "doc_count": 2
            },
            {
                "min": 20.780000686645508,
                "key": 20.780000686645508,
                "max": 20.780000686645508,
                "doc_count": 1
            },
            {
                "min": 22.06999969482422,
                "key": 22.06999969482422,
                "max": 22.06999969482422,
                "doc_count": 1
            },
            {
                "min": 22.6299991607666,
                "key": 22.759999593098957,
                "max": 22.959999084472656,
                "doc_count": 3
            },
            {
                "min": 23.8700008392334,
                "key": 23.8700008392334,
                "max": 23.8700008392334,
                "doc_count": 3
            },
            {
                "min": 24.489999771118164,
                "key": 24.641666730244953,
                "max": 24.940000534057617,
                "doc_count": 6
            },
            {
                "min": 25.75,
                "key": 25.82599983215332,
                "max": 25.920000076293945,
                "doc_count": 5
            },
            {
                "min": 26.15999984741211,
                "key": 26.34799995422363,
                "max": 26.530000686645508,
                "doc_count": 5
            },
            {
                "min": 26.899999618530273,
                "key": 27.018749952316284,
                "max": 27.25,
                "doc_count": 8
            },
            {
                "min": 27.459999084472656,
                "key": 27.610000133514404,
                "max": 27.780000686645508,
                "doc_count": 4
            },
            {
                "min": 28.010000228881836,
                "key": 28.495384509746845,
                "max": 28.889999389648438,
                "doc_count": 13
            },
            {
                "min": 29.360000610351562,
                "key": 29.720000161064995,
                "max": 29.969999313354492,
                "doc_count": 9
            }
        ]
    },
    "current_price": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "27.00",
                "doc_count": 6
            },
            {
                "key": "23.87",
                "doc_count": 3
            },
            {
                "key": "25.82",
                "doc_count": 3
            },
            {
                "key": "28.76",
                "doc_count": 1
            },
            {
                "key": "28.89",
                "doc_count": 1
            },
            {
                "key": "29.36",
                "doc_count": 1
            },
            {
                "key": "29.97",
                "doc_count": 1
            }
        ]
    },
    "business_size": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
            {
                "key": "S",
                "doc_count": 52
            },
            {
                "key": "O",
                "doc_count": 8
            }
        ]
    },
    "median_price": {
        "values": {
            "50.0": 27.0
        }
    },
    "wage_stats": {
        "count": 60,
        "min": 19.65999984741211,
        "max": 29.969999313354492,
        "avg": 26.58933334350586,
        "sum": 1595.3600006103516,
        "sum_of_squares": 42803.63203610231,
        "variance": 6.401219616299446,
        "variance_population": 6.401219616299446,
        "variance_sampling": 6.509714864033335,
        "std_deviation": 2.530063164488082,
        "std_deviation_population": 2.530063164488082,
        "std_deviation_sampling": 2.5514142870246173,
        "std_deviation_bounds": {
            "upper": 31.649459672482024,
            "lower": 21.529207014529696,
            "upper_population": 31.649459672482024,
            "lower_population": 21.529207014529696,
            "upper_sampling": 31.692161917555094,
            "lower_sampling": 21.486504769456626
        }
    }
}
```




## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |




## Contact Us

To suggest a feature or ask for help, Please <a href="mailto: fasdigitalsupport@gsa.gov">Contact Us</a>.

<p><small><a href="#">Back to top</a></small></p>