---
title: TMSS 2.0 Freight Rate Query API
banner-heading: TMSS 2.0 Freight Rate Query API
---


## Introduction

This document provides detailed technical information about the Rate query API offered by the TMSS 2.0. These services make use of industry standard methods for API authentication and connectivity, which should make it easier and faster for developers to interface Federal agency with TMSS 2.0. This API can be used to retrieve shipment cost for a regular Freight (FRT) shipment.

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

•	After registration, you will need to request the Agency Token by sending an email to transportation.programs@gsa.gov.
 
•	Then you will need to provide this API key in the x-api-key and Agency Token in the x-agency-token of HTTP header with every API request.
 
| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For testing purposes, you can use `DEMO_KEY` as an API key. |
| x-agency-token | Agency Token provided by the FMP (Freight Management Program) team. For testing you can use GSA2021_API_TOKEN as the Agency Token. |



<p><small><a href="#">Back to top</a></small></p>

## API Description



This API has one primary endpoint:

**Endpoint 1:** https://api.gsa.gov/travel/tmss/v1/ratequery/frt

 
 
**Description**   This API can be used to retrieve shipment cost for a regular Freight (FRT) shipment.

**API Payload Request Parameters**

| Request Element | Description |
| ---- | ----------- |
| agencyLocationCode |	Customer Location Code |
| queryType	| Tpe of Query |
| pickupDate	| Pick up/ Move Date |
| sroType	| Shipment/Rate Type |
| sroId	| Shipment / SRO Id |
| estimatedWeight	| Estimated weight of the Shipment |
| estimatedMileage	| Miles |
| originZip	| Pickup/ Orgin Zip code |
| destinationZip	| Delivery/Destination Zip code |
| originCountryCode	| Pickup/Orgin Country Code |
| destinationCountryCode	| Delivery/Destination Country Code |
| originProvince	| Pickup/Origin province code if the Origin country is Canada |
| destinProvince	| Delivery/Destinationprovince code if the Destination country is Canada |
| accessorials	| group element for entering accessorials |
| accessorialCode	| accessorial code |
| quantity	| Quantity |
| usage	| Usage (Pickup or Delivery) |


**Response Object**

| Response Element|	Description |
| ---- | ----------- |
|  agencyLocationCode |Customer Location Code |
| queryType |Tpe of Query |
| sroType |Shipment/SROType |
| carrierId |carrier id (data base id) for reference |
| rateId |rate id (DB id) for reference |
| rateTypeId |rate type id (DB id) for reference |
| rateType |Type of rate applied (LTL or TL) |
| ltlCostFinal |Final LTL cost calculated |
| tlCostFinal |Final TL cost calculated |
| linehaulCostFinal |Final Linehaul Cost Applied |
| scac |TSP's SCAC code |
| scacName |TSP Name |
| tenderId |Selected Rate's tende id |
| queryId |internal query id for reference/logging |
| smartWayId |To identify a TSP is Smartway TSP or not |
| smartWayScore |Integer |
| phone |TSP's phone number |
| email |TSP's Email |
| sro |Selected SRO  |
| fuelSurchargeCost |Total Fuel Surcharge cost applied for this shipment query |
| fuelSurchargeEffDate |Fuels Surcharge effective Date |
| fuelSurchargeExpDate |Fuels Surcharge expiry Date |
| totalAccessorialCost |Total accessorial cost applied |
| totalEstimatedCost |Total estimated cost of the shipment (linehaulCostFinal + fuelSurchargeCost + totalAccessorialCost) |
| linehaulCalculation |Linehaul calculation formula applied |
| socioEconomicInd |TSP's social economic indicator(s) |
| originProvince |Origin province  fom the request |
| originZip |Origin Zip submitted  fom the request |
| destinationZip |Destination Zip  fom the request |
| destinationProvince |Destination province  fom the request |
| originCountryCode |Origin Country Code  fom the request |
| destinationCountryCode |Destination country code  fom the request |
| estimatedMileage |Estimated mileage computed |
| estimatedWeight |Estimated weight fom the request |
| pickupDate |pickup date  fom the request |
| rateEffectiveDate |Rate Effective Date |
| rateExpiryDate |Rate Expiry Date |
| rateEffectiveDate |Rate Effective Date |
| accessorialsResults |Accessorials results |
| estimatedCost |total cost of the individual accessorial  |
| frtAccessorialId |DB id of the accessoral code |
| unitsId |DB id of the acessorial unit type |
| quantity |applicable quantity |
| accessorialCode |accessorial code from the request |
| accessorialCost |acessorial cost in integer |
| usage |Usage from the request |


## API Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
[TMSS FRT Rate Query API spec.xlsx](https://github.com/GSA/open-gsa-redesign/files/11850796/TMSS.FRT.Rate.Query.API.spec.xlsx)


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
Request URL: https://api.gsa.gov/travel/tmss/v1/ratequery/frt

Request Payload for a FRT Domestic Shipment:  
```
{
   "agencyLocationCode": 1312,
   "queryType":"FRT",
   "pickupDate": "2020-06-16",
   "sroType":"General",
   "sroId":"GENTL",
   "estimatedWeight":1000,
   "estimatedMileage":100,
   "estimatedCuFt":null,
   "originZip":"23059",
   "destinationZip":"60611",
   "originCountryCode":"US00",
   "destinationCountryCode":"US00",
   "originProvince":null,
   "destnProvince":null,
   "accessorials": [
   		{
            "accessorialCode": "550",
            "quantity": 0,
            "usage": "Pickup"
       },
       {
           "accessorialCode": "480"
        }
    ]
}
```
  
Response :  
```
[
    {
        "agencyLocationCode": 1312,
        "queryType": "FRT",
        "sroType": "General",
        "sro": "GENLTL",
        "carrierId": 2425,
        "rateId": 5869,
        "rateTypeId": 19,
        "rateType": "LTL - 1000",
        "ltlCostFinal": 205.74,
        "tlCostFinal": 0,
        "linehaulCostFinal": "205.74",
        "scac": "RDWY",
        "scacName": "ROADWAY TRANSPORT",
        "tenderId": "3020",
        "queryId": 5675,
        "smartWayId": true,
        "phone": "7036237688",
        "email": "test34@gmail.com",
        "fuelSurchargeCost": "55.55",
        "fuelSurchargeEffDate": "2023-06-14T04:00:00.000+0000",
        "fuelSurchargeExpDate": "2023-06-20T04:00:00.000+0000",
        "totalAccessorialCost": "702.31",
        "totalEstimatedCost": "963.60",
        "linehaulCalculation": "178.9 * (115.0/100 ) (Base Charge * (%LTL Surcharge/100))",
        "socioEconomicInd": "v,dv,s,w,o,8a,h",
        "originProvince": null,
        "originZip": "23059",
        "destinationZip": "60611",
        "destinationProvince": null,
        "originCountryCode": "US00",
        "destinationCountryCode": "US00",
        "estimatedMileage": 783.1,
        "estimatedWeight": 1000,
        "pickupDate": "2020-06-16T00:00:00.000+0000",
        "rateEffectiveDate": "2018-10-01T05:00:00.000+0000",
        "rateExpiryDate": "2023-10-01T04:59:59.000+0000",
        "accessorialsResults": [
            {
                "estimatedCost": "68.00",
                "frtAccessorialId": 15,
                "unitsId": null,
                "quantity": 0,
                "accessorialCode": "550",
                "accessorialCost": 68,
                "usage": "Pickup"
            },
            {
                "estimatedCost": "634.31",
                "frtAccessorialId": 13,
                "unitsId": null,
                "quantity": null,
                "accessorialCode": "480",
                "accessorialCost": 634.3110000000001,
                "usage": null
            }
        ]
    }
]
```
<p><small><a href="#">Back to top</a></small></p>

## Feedback

For further assistance and feedback, please contact:  
  
Phone: 1-866-668-3472  
Email: gsatmsshelp@gsa.gov  
  
<p><small><a href="#">Back to top</a></small></p>
