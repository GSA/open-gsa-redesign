---
title: Per Diem API - Draft
banner-heading: Per Diem API - Draft
---


## Overview

Per Diem Rates are the allowed reimbursement rates for hotel stays and meals for federal travelers. Rates are set for each of the federal government's fiscal years (October 1st to September 30th) GSA is responsible for setting the rates in the continental United States. Many businesses and other organizations adopt these rates as well. This API provides access to the current rate information.  

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key here: [API key signup page on api.data.gov](https://api.data.gov/signup/).

After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

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

## About Per Diem Rates  

GSA sets rates for geographic areas it determines called "primary destinations." Areas outside the primary destinations are covered by the same, nation-wide "standard rate." The Per Diem Rate database is organized by ZIP Code and fiscal year. Each row in the database corresponds to an individual ZIP code for a particular fiscal year. Each row contains 12 values for the hotel reimbursement for each of the 12 months in the Fiscal Year. The meals value applies to the entire year.

If the ZIP code *is* in a primary destination, then the row also contains entries for the following: City (one or more cities most prominent in that area), County, State, and the "Destination ID." The DestinationID is an arbitrary value used internally to group ZIP codes. It is not typically presented to the general public.

If the ZIP code *is not* in a primary destination, then the DestinationID is given as "0" (zero), the City value is "Standard Rate" and County is empty. The State is included along with the standard monthly hotel rates and the annual meal rate.

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


## FAQ

Integer velit ex, sollicitudin sed dolor vitae, consectetur cursus urna. Quisque lacus urna, vulputate non efficitur ut, ornare ac leo. Sed varius, lacus vitae mollis semper, magna lorem pretium erat, non maximus elit justo pretium dolor. Phasellus pellentesque bibendum turpis, eu venenatis eros facilisis sit amet. Pellentesque aliquet dolor ac metus luctus interdum. Vivamus est nibh, blandit non finibus id, tincidunt sed justo. Integer ullamcorper sapien neque, ut lobortis risus interdum ac. Aenean finibus, nibh vitae molestie viverra, nibh mi iaculis lacus, interdum dictum ipsum magna sit amet est. Phasellus vitae faucibus felis. Vivamus non molestie felis, at suscipit lectus. Phasellus ac pulvinar purus, luctus porta elit. Morbi a aliquet tellus. Vivamus mollis, ligula sed egestas euismod, elit lacus auctor dolor, sit amet facilisis purus eros ac augue.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

Praesent id cursus magna, sodales rutrum mauris. Nulla eget quam at nisl iaculis interdum. In condimentum, mi nec blandit consequat, velit nulla dictum lorem, non scelerisque ex nulla non ex. Sed vitae sem semper, pharetra massa at, vulputate urna. Pellentesque dapibus a ex sit amet pellentesque. Sed eget risus ut felis fringilla ullamcorper vitae a ligula. Aliquam finibus vitae ex sed vehicula.

<p><small><a href="#">Back to top</a></small></p>
