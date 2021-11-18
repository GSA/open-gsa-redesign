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



To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.


{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-open-ratequery',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/travel/tmss/v1/ratequery/hhg/shipmentcost?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'mailto:gsatmsshelp@gsa.gov',

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

•	After registration, you will need to request the Agency Token (x-agency-token) by sending an email to errc@gsa.gov.
 
•	Every API request must have the API key in the x-api-key and Agency Token in the x-agency-token of HTTP header with every API request.
 
| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For testing purposes, you can use `DEMO_KEY` as an API key. |
| x-agency-token | Agency Token provided by the ERRC team. |



<p><small><a href="#">Back to top</a></small></p>

## API Description



This API has one primary endpoint:

**Endpoint 1:** https://api.gsa.gov/travel/tmss/v1/ratequery/hhg

 
 
**Description**   This API can be used to retrieve shipment cost for a regular Household Goods (HHG) shipment or for an Extended Storage (EXSTG) shipment.

**API Payload Query Parameters**

| Request Payload Fields | Description |
| ---- | ----------- |
| agencyLocationCode | Customer Location Code |
| queryType |	Tpe of Query |
| pickupDate |	Pick up/ Move Date |
| shipmentType |	Shipment/Rate Type |
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
| miles | Miles|
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
[TMSS 2.0 HHG Rate Query API spec.xlsx](https://github.com/GSA/open-gsa-redesign/files/7564795/TMSS.HHG.Rate.Query.API.spec.xlsx)





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

The connection to the API endpoints is secured and authenticated using the registered token provided by the form above.  
 
Sample Request and Response
Request URL: https://api.gsa.gov/travel/tmss/v1/ratequery/hhg
 

Request Payload for a HHG Domestic Shipment:  
```
{
    "agencyLocationCode": 1730,
    "queryType":"HHG",
    "pickupDate":"2020-04-12",
    "shipmentType":"General",
    "sroId":"GENRL",
    "containerizedShipments":false,
    "vehicleClass":"Class 1",
    "estimatedWeight": 10000,
    "originZip":"32714",
    "originProvince":null,
    "destinationZip":"23059",
    "destinationProvince":null,
    "originCountryCode":"US00",
    "destinationCountryCode":"US00",
    "miles": 0,
    "uabWeight":0
}
```
  
Response for a HHG Domestic Shipment:  
```
{  
       "agencyLocationCode": 697,  
        "queryType": "HHGAPI",  
        "pickupDate": "2020-04-12T00:00:00.000+0000",  
        "shipmentType": "General",  
        "sroId": "GENRL",  
        "containerizedShipments": false,  
        "vehicleClass": "Class 1",  
        "estimatedWeight": 10000,  
        "originZip": "32714",  
        "originProvince": null,  
        "destinationZip": "23059",  
        "destinationProvince": null,  
        "originCountryCode": "US00",  
        "destinationCountryCode": "US00",  
        "miles": 739.0,  
        "uabWeight": 150,  
        "rateId": 4265664,  
        "queryId": 4488,  
        "rateType": "G",  
        "scac": "(New) BUSV",  
        "zefflag": false,  
        "companyName": "BURNHAM SERVICE COMPANY INC",  
        "telephone": "800-955-5421",  
        "socioEconomicInd": "s",  
        "tender": "N613",  
        "csi": "0.00",  
        "vi": "33.4030",  
        "surfacePercentage": 37,  
        "surfaceCharge": "7367.75",  
        "uabPercentage": 0,  
        "uabCharge": "0.00",  
        "vehicleCharge": "1101.11",  
        "totalCharge": "8468.86",  
        "sitRatePercentage": 47,  
        "thirtyDayCharge": "3457.32",  
        "sixtyDayCharge": "4289.22",  
        "ninetyDayCharge": "5121.12",  
        "sitOrigin185ACharge": "658.47",  
        "sitOrigin185BCharge": "27.73",  
        "sitOrigin210ACharge": "1994.68",  
        "sitDest185ACharge": "658.47",  
        "sitDest185BCharge": "27.73",  
        "sitDest210ACharge": "1994.68",  
        "originThirtyDayCharge": "3669.29",  
        "originSixtyDayCharge": "4585.79",  
        "originNinetyDayCharge": "5502.29",  
        "exsPackagingCharge": null,  
        "exsMonthlyStorageCharge": null,  
        "exsWarehouseCharge": null,  
        "exsTotal1MonthCharge": null,  
        "exsTotal6MonthCharge": null,  
        "exsTotal12MonthCharge": null,  
        "exsDeliveryWithin50Miles": null,  
        "exsDeliveryHandlingOut": null,  
        "exsDeliveryOver50Miles": null,  
        "exsDiscountApplied": null,  
        "rateEffectiveDate": "2019-05-01T05:00:00.000+0000",  
        "rateExpiryDate": "2020-05-31T05:00:00.000+0000"  
}  
```

Request Payload for a HHG International Shipment:  
```
 {
    "agencyLocationCode": 1730,
    "queryType":"HHG",
    "pickupDate":"2020-04-12",  
    "shipmentType":"General",  
    "sroId":"GENRL",  
    "containerizedShipments":false,  
    "vehicleClass":"Class 1",  
    "estimatedWeight": 10000,  
    "originZip":"32714",  
    "originProvince":null,  
    "destinationZip":null,  
    "destinationProvince":null,  
    "originCountryCode":"US00",  
    "destinationCountryCode":"1250",  
    "miles":0,  
    "uabWeight":150  
}
```
 
Response for a HHG International Shipment:  
```
 {
        "agencyLocationCode": 1730,
        "queryType": "HHG",
        "pickupDate": "2020-04-12T00:00:00.000+0000",
        "shipmentType": "General",
        "sroId": "GENRL",
        "containerizedShipments": false,
        "vehicleClass": "Class 1",
        "estimatedWeight": 10000,
        "originZip": "32714",
        "originProvince": null,
        "destinationZip": null,
        "destinationProvince": null,
        "originCountryCode": "US00",
        "destinationCountryCode": "1250",
        "miles": 0,
        "uabWeight": 150,
        "rateId": 14183679,
        "queryId": 4198,
        "rateType": "G",
        "scac": "SDHR",
        "zefflag": false,
        "companyName": "SUDDATH RELOCATION SERVICES, I",
        "telephone": "800-365-5463",
        "socioEconomicInd": null,
        "tender": "GS05",
        "csi": "109.02",
        "vi": "115.6721",
        "surfacePercentage": 250,
        "surfaceCharge": "21392.50",
        "uabPercentage": 1600,
        "uabCharge": "1262.82",
        "vehicleCharge": "7000.00",
        "totalCharge": "29655.32",
        "sitRatePercentage": 120,
        "destThirtyDayCharge": "990.00",
        "destSixtyDayCharge": "1284.00",
        "destNinetyDayCharge": "1578.00",
        "sitOrigin1stDayCharge": "0.00",
        "sitOriginAddnlDayCharge": "0.00",
        "sitOriginDlvOutUnder50milesCharge": "1294.80",
        "sitDest1stDayCharge": "0.00",
        "sitDestAddnlDayCharge": "0.00",
        "sitDestDlvOutUnder50milesCharge": "360.00",
        "originThirtyDayCharge": "2390.40",
        "originSixtyDayCharge": "3002.40",
        "originNinetyDayCharge": "3614.40",
        "exsPackagingCharge": null,
        "exsMonthlyStorageCharge": null,
        "exsWarehouseCharge": null,
        "exsTotal1MonthCharge": null,
        "exsTotal6MonthCharge": null,
        "exsTotal12MonthCharge": null,
        "exsDeliveryWithin50Miles": null,
        "exsDeliveryHandlingOut": null,
        "exsDeliveryOver50Miles": null,
        "exsDiscountApplied": null,
        "rateEffectiveDate": "2020-01-01T05:00:00.000+0000",
        "rateExpiryDate": "2020-04-30T04:00:00.000+0000"
    } 
```

Request Payload for a HHG Extended Storage Shipment:  
```
{  
    "agencyLocationCode": 1730,
    "queryType":"HHG",
    "pickupDate":"2020-04-12",  
    "shipmentType":"Extended Storage",  
    "sroId":"EXSTG",  
    "containerizedShipments":false,
    "estimatedWeight": 10000,
    "originZip":"32714",
    "originProvince":null,
    "destinationZip":null,
    "destinationProvince":null,
    "originCountryCode":"US00",
    "destinationCountryCode":"US00"
} 
```
  
Response for a HHG Extended Storage Shipment:  
```
{
        "agencyLocationCode": 1730,
        "queryType": "HHG",
        "pickupDate": "2020-04-12T00:00:00.000+0000",
        "shipmentType": "Extended Storage",
        "sroId": "EXSTG",
        "containerizedShipments": false,
        "vehicleClass": null,
        "estimatedWeight": 10000,
        "originZip": "32714",
        "originProvince": null,
        "destinationZip": null,
        "destinationProvince": null,
        "originCountryCode": "US00",
        "destinationCountryCode": "US00",
        "miles": 0,
        "uabWeight": null,
        "rateId": 12691288,
        "queryId": 4199,
        "rateType": "G",
        "scac": "SVLM",
        "zefflag": true,
        "companyName": "Stevens Moving & Storage, Inc.",
        "telephone": "800-955-5421",
        "socioEconomicInd": "w,s",
        "tender": "SX01",
        "csi": null,
        "vi": null,
        "surfacePercentage": null,
        "surfaceCharge": null,
        "uabPercentage": null,
        "uabCharge": null,
        "vehicleCharge": null,
        "totalCharge": null,
        "sitRatePercentage": null,
        "destThirtyDayCharge": null,
        "destSixtyDayCharge": null,
        "destNinetyDayCharge": null,
        "sitOrigin1stDayCharge": null,
        "sitOriginAddnlDayCharge": null,
        "sitOriginDlvOutUnder50milesCharge": null,
        "sitDest1stDayCharge": null,
        "sitDestAddnlDayCharge": null,
        "sitDestDlvOutUnder50milesCharge": null,
        "originThirtyDayCharge": null,
        "originSixtyDayCharge": null,
        "originNinetyDayCharge": null,
        "exsPackagingCharge": "4800.00",
        "exsMonthlyStorageCharge": "500.00",
        "exsWarehouseCharge": "600.00",
        "exsTotal1MonthCharge": "5900.00",
        "exsTotal6MonthCharge": "8400.00",
        "exsTotal12MonthCharge": "11400.00",
        "exsDeliveryWithin50Miles": "2800.00",
        "exsDeliveryHandlingOut": "400.00",
        "exsDeliveryOver50Miles": "4019.74",
        "exsDiscountApplied": 51,
        "rateEffectiveDate": "2020-01-01T05:00:00.000+0000",
        "rateExpiryDate": "2020-04-30T04:00:00.000+0000"
    }
```
  

<p><small><a href="#">Back to top</a></small></p>

## Feedback

For further assistance and feedback, please contact:  
  
Phone: 1-866-668-3472  
Email: gsatmsshelp@gsa.gov  
  
<p><small><a href="#">Back to top</a></small></p>
