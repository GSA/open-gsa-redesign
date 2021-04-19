---
title: TMSS 2.0 ratequeryhhg API
banner-heading: ratequeryhhg API
---


## Introduction

This document provides detailed technical information about the Rate query API offered by the TMSS 2.0. These services make use of industry standard methods for API authentication and connectivity, which should make it easier and faster for developers to interface Federal agency with TMSS 2.0. This API can be used to retrieve shipment cost for a regular Household Goods (HHG) shipment or for an Extended Storage (EXSTG) shipment.

<p><small><a href="#">Back to top</a></small></p>

## Document Overview
This document captures the specifications for the TMSS 2.0 Rate Query API to be consumed by Federal agency customers.

This document is organized by the following major sections:
 - Getting Started
 - API Description
 - API Query Params
 - API Expected Response
 - API Specification File
 - HTTP Response Codes
 - API Details
 - Feedback

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key here: [API key signup page on api.data.gov](https://api.data.gov/signup/).

After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |




<p><small><a href="#">Back to top</a></small></p>

## API Description



This API has one primary endpoint:

**Endpoint 1:** https://api.gsa.gov/tmss/ratequeryhhg/v1/shipmentcost

**Description**   This API can be used to retrieve shipment cost for a regular Household Goods (HHG) shipment or for an Extended Storage (EXSTG) shipment.

**API Payload Query Parameters**

| Request Payload Fields | Description |
| ---- | ----------- |
| agencyLocationCode | Customer Location Code |
| queryType |	Tpe of Query |
| pickupDate |	Pick up/ Move Date |
| rateType |	Shipment/Rate Type |
| sroId |	Shipment / SRO Id  |
| containerizedShipments |	To pull only Containerized Shipment costs |
| originCountryCode |	Pickup/Orgin Country Code |
| originZip |	Pickup/ Orgin Zip code |
| originProvince |	Pickup/Origin province code if the Origin country is Canada |
| destinationCountryCode |	Delivery/Destination Country Code |
| destinationZip |	Delivery/Destination Zip code |
| destinationProvince |	Delivery/Destinationprovince code if the Destination country is Canada |
| estimatedWeight |	Estimated weight of the Shipment |
| vehicleClass |	Class of the Vehicle | 
| uabWeight |	UAB weight in lbs |


**Expected Response**

| Response Object |	Description |
| ---- | ----------- |
| agencyLocationCode | Customer Location Code |
| queryType	| Tpe of Query |
| pickupDate | Pick up/ Move Date |
| shipmentType | Shipment/Rate Type | 
| sroId | Shipment / SRO Id | 
| containerizedShipments | To pull only Containerized Shipment costs | 
| vehicleClass | Class of the Vehicle |  
| estimatedWeight | Estimated weight of the Shipment | 
| originZip | Pickup/ Orgin Zip code | 
| originProvince | Pickup/Origin province code if the Origin country is Canada | 
| destinationZip | Delivery/Destination Zip code |
| destinationProvince |	Delivery/Destinationprovince code if the Destination country is Canada |
| originCountryCode | Pickup/Orgin Country Code |
| destinationCountryCode | Delivery/Destination Country Code |
| miles | Miles only for USA to Canada |
| uabWeight | UAB weight in lbs |
| rateId | Integer |
| queryId | Integer |
| rateType | Type of Rate |
| scac | TSP's SCAC code |
| zefflag |	Zero Emission Footprint indicator for the TSP |
| companyName |	Name of the TSP |
| telephone	| TSP's contact phone number |
| socioEconomicInd | TSP's Socio Economic Indicator |
| tender | Tender Id used in the selected rate |
| csi | Customer Satisfaction Index of the TSP |
| vi | Value Index of the TSP |
| surfacePercentage | Linehaul Discount applied towards Surface Charge |
| surfaceCharge | Surface Charge |
| uabPercentage	| UAB discount applied |
| uabCharge	| UAB Cost |
| vehicleCharge	| Vehicle Transporation Cost |
| totalCharge |	Total Transportation Cost |
| sitRatePercentage | SIT Rate discount applied |
| destThirtyDayCharge |	Standard SIT cost for 30 days at Destination |
| destSixtyDayCharge | Standard SIT cost for 60 days at Destination |
| destNinetyDayCharge |	Standard SIT cost for 90 days at Destination |
| sitOrigin1stDayCharge	| SIT cost at Origin for the 1st Day |
| sitOriginAddnlDayCharge |	SIT cost at Origin for each additional day |
| sitOriginDlvOutUnder50milesCharge | SIT cost at Origin for delivery out under 50 miles |
| sitDest1stDayCharge |	SIT cost at Destination for the 1st Day |
| sitDestAddnlDayCharge | SIT cost at Destination for each additional day |
| sitDestDlvOutUnder50milesCharge |	SIT cost at Destination for delivery out under 50 miles |
| originThirtyDayCharge | Standard SIT cost for 30 days at Origin |
| originSixtyDayCharge | Standard SIT cost for 60 days at Origin |
| originNinetyDayCharge | Standard SIT cost for 90 days at Origin |
| exsPackagingCharge | Extended Storage Packing Charge |
| exsMonthlyStorageCharge |	Extended Storage Delivery over 50 miles cost|
| exsWarehouseCharge |	Extended Storage Warehouse Charge |
| exsTotal1MonthCharge | Extended Storage 1 month Charge |
| exsTotal6MonthCharge | Extended Storage 6 month Charge |
| exsTotal12MonthCharge	 | Extended Storage 12 month Charge |
| exsDeliveryWithin50Miles | Extended Storage Delivery within 50 miles cost |
| exsDeliveryHandlingOut | Extended Storage Delivery handling out cost |
| exsDeliveryOver50Miles | Extended Storage Delivery over 50 miles cost |
| exsDiscountApplied | Extended Storage Rate discount applied |
| rateEffectiveDate | Rate Effective Date |
| rateExpiryDate | Rate Expiry Date |



## API Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the ratehhg API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parmaters that were provided. |
| 403 | API key is not correct or was not provided. |
| 404	| Not Found
| 408	| Request Timeout
| 413 | Payload too large
| 417	| Expectation Failed
| 429	| Too many requests
| 500	| Internal Server Error
| 502	| Bad Gateway
| 503	| Service Unavailable
| 504	|Gateway Timeout


<p><small><a href="#">Back to top</a></small></p>


## API Details

Request:
All request payloads must be in JSON data structure specified in the Data dictionary section of this document.

Response:
All response must be in JSON data structure specified in the Data dictionary section of this document.

The connection to the API endpoints is secured and authenticated using the registered token provided by api.data.gov


<p><small><a href="#">Back to top</a></small></p>

## Feedback

For further assistance and feedback, please contact:

Phone: 1-866-668-3472
Email: gsatmsshelp@gsa.gov

<p><small><a href="#">Back to top</a></small></p>
