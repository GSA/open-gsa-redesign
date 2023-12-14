---
title: SAM.gov SubAwards Reporting Bulk Upload API 
banner-heading: SAM.gov SubAwards Reporting Bulk Upload API
---

## Overview 

The API for Federal Funding Accountability and Transparency Act (FFATA) Reporting will allow Prime awardees (i.e. prime contractors and prime grants recipients) to report subaward and executive compensation data regarding their first-tier subawards to meet the FFATA reporting requirements. Using this API, the users will be able to file multiple subaward reports at once. 

**Note:** The specifications on this page are for a future API.  Check back here or be in contact with IAE for the release date and testing session.

**API Version: v1.0**

## Getting Started

SubAwards Reporting Bulk Upload API can be accessed from Production or Alpha via the following endpoints:

* Production: https://api.sam.gov
* Alpha: https://api-alpha.sam.gov

### Authentication and Authorization

To begin using this API, you will need to register for a System Account and obtain an API Key. After registration, you will need to provide this API key in the <i>x-api-key</i> HTTP header with every API request.
* Registered Non-federal users with appropriate role and permission assigned to them by their Entity Administrator (Please note that the role/permission is being finalized) can request for a system account with "Write" permission (Please note that the permission name is being finalized) to be able to create, update, view and/or delete SubAward reports.
* The user will be able to access the System Accounts widget from their Workspace page after logging in. They can then select “New Account” by navigating from the widget and fill out the required sections with appropriate SubAwards reporting permissions and required information.
* The requested system account will then be sent for an approval. After approval, the user will be notified via an email and they will also be able to see the status of their request in the System Account widget.

#### Generating a System Account API Key
In order to utilize the SubAwards API endpoints, users will need to generate the System account API Key to make API calls.
* Once the system account is approved as per the instructions above, the user can select “Go to System Accounts” in the widget from their workspace and enter a new system account password. 
* After setting up the password for the system account, the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the API Key. 
* This API Key will be used for all API calls as described in this documentation.

#### System Account Authentication
In order to utilize the SubAwards Reporting Bulk Upload API, the following is required:
* Valid SAM.gov Non-federal system account with SubAward permission and Non-federal user account with relevant user role and permission (role name/permission to be finalized).

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
To be able to perform the various operations provided under the SubAwards API, users will need to have the correct role and permissions (final role name and permission is being finalized) to perform various operations.The permissions required for operations by role are listed in the table below (this is a draft):

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

Role/Permission(TBD)   | Submit SubAward Report | Update SubAward Report | Get SubAward Report | Delete SubAward Report
-------------|---------------|---------------------|---------------------|------------------------------
Create and delete permission for SubAwards under Entity Reporting | Yes | Yes | Yes | Yes
Read permission for SubAwards under Entity Reporting | No | No | Yes | No

**Note:** sam.gov is moving towards utilizing OAuth 2.0 workflow leveraging OKTA for Authentication of System Accounts. As a result of this implementation, API Keys will be replaced with the usage of client credentials, namely clientId and secret. Clients will first need to request for the access token, which will then be required to be sent along with the API requests. To support this change, future versions of all APIs outlined in this documentation will be released.

<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta-Data

#### Recovery Model Questions (Compensation Questions)

To submit a SubAward Report, compensation questions for the Prime, as well as sub-awardee need to be responded to. The table below outlines the Compensation Questions and their corresponding codes to be used in the requests.

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Prime Awardee Question 1| __1__	            | In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number,belongs) receive (1) 80 percent or more of your annual gross revenues in U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements? |
| Prime Awardee Question 2| __2__	            | Does the public have access to information about the compensation of the executives in your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number, belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal RevenueCode of 1986?|
| Sub-Awardee Question 1| __3__	            | As provided to you by your sub-awardee, in your sub-awardee's business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) receive (1) 80 percent or more of its annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements? |
| Sub-Awardee Question 2| __4__	            | As provided to you by your sub-awardee, does the public have access to information about the compensation of the executives in the sub-awardee's business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) through periodic reports filed under section13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the SubAward Reports.

Code | Value     | Description
-----|-----------------|-----------------
1     | Work In Progress | This status is used when the report has been saved in the system but still need additional updates to pass all validation checks. Note that reports submitted from the User Interface of sam.gov may be in this status if the user has partially added the report data and needs to add more details before submitting the report.
2     | Submitted | This status is used when the report has been successfully submitted and it has passed all validation checks.
3     | Deleted | This status is used for reports that have been deleted by the user. Deleted reports will not be available for general view.

<p><small><a href="#">Back to top</a></small></p>

## GENC Standardization
SAM.gov uses GENC Standardization of country and administrative data to ensure no countries or states are being inserted into SAM that are not correctly recognized by the United States. To ensure any country/state data that is input by the users through SubAward reporting meets these standards, validations will be run when receiving this data. Please refer to the error messages section for specific details for these errors.

Refer : 
https://geonames.nga.mil/geonames/GeographicNamesSearch/

API Fields

Field Name | Data Source  | Valid Statuses  | Input Type
---------------|------------|----------|------------
Country Code |  Country_Code MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources | Active, Inactive (GET calls Only) | Three Character
Country Name |  Full_Name MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources |   | TEXT
State | State MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources   | Listed from the selected country | Two Character

<p><small><a href="#">Back to top</a></small></p>

## Version Control

V1 versions of APIs will be utilizing the API Key mechanism as outlined in this documentation. Future versions of APIs will be made available to support OAuth 2.0 as soon as possible. The documentation will be updated as soon as more information is available for the oAuth implementation.  

## FSRS SubAward Reporting Bulk Upload API Request and Responses

This API has 8 endpoints as outlined below. 

Endpoint Name | Short Description |
-----|-----------------
Submit SubAward Report (Contracts)     | Can be used to submit SubAward Reports for reporting on one or more Contracts.
Submit SubAward Report (Grants)     | Can be used to submit SubAward Reports for reporting on one or more Grants.
Update SubAward Report (Contracts)     | Can be used to update one or more previously submitted SubAward Reports for Contracts.
Update SubAward Report (Grants)     | Can be used to update one or more previously submitted SubAward Reports for Grants.
Delete SubAward Report (Contracts)     | Can be used to delete one or more previously submitted SubAward Reports for Contracts.
Delete SubAward Report (Grants)     | Can be used to delete one or more previously submitted SubAward Reports for Grants.
Get SubAward Report (Contracts)     | Can be used to get one or more previously submitted SubAward Reports for Contracts. 
Get SubAward Report (Grants)     | Can be used to get one or more previously submitted SubAward Reports for Grants.

The following section describes each of the above endpoints in detail.

### Submit SubAward Report (Contracts)

------- | ------- |
**Request Type** | POST 
**URL** | /acquisition/v1/subawards
**Summary** | Submit one or multiple SubAward reports for Contracts
**Consumes** | application/json
**Produces** | NA
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Contract JSON](#submit-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was created | As described below

The API will return HTTP Status code 201 if the report is saved successfully. If the request passes all validations, then the report is saved in Submitted status. If any validations fail, then the report is saved in "Work In Progress" status and the validation error messages are sent back as a part of the response body. see [s](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send an Update SubAward Report (Contracts) request to update the report so it can be submitted successfully.

The API will return other HTTP Status codes in case of any other errors and the report will not be saved. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples

<details>
<summary>Example: Submit SubAward Contract Report for multiple Contracts and multiple subawards</summary>
<p>
<code><pre>
{
   "contractData": {  
      "primeEntityInformation": [
         {
            "contractNumber": "W9123823PTEST", 
            "idvReferenceNumber": "GSTEST001", 
            "reportPeriodMon": "06",
            "reportPeriodYear": "2023",
            "reportingAgency": "2100",
            "treasurySymbol": "12-3456",
            "programTitle": "Title of the program",
            "recovery_model_questions": 
             [
                 {
                   "code": "1",
                   "isSelected": "true"
                 },
                 {
                   "code": "2",
                   "isSelected": "true"
                 }                                 
             ],
            "subAwardDataList": [
               { 
                  "subAwardNumber": "2303-TEST-05-0", 
                  "subAwardDollars": "100000",
                  "periodOfPerformanceStartDate": "2023-05-14",
                  "uei": "ABC987654321",
                  "overallDescription": "tEST Description",
                  "placeOfPerformance": {
                     "streetAddress": "1800 F Street, NW",
                     "streetAddress2": "",
                     "city": "Alexandria",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "true"
                      },
                      {
                        "code": "4",
                        "isSelected": "false"
                      }                                          
                  ],
                  "topPayEmployees": [
                     {
                        "full_name": "John White",
                        "salary": "100000"
                     },
                     {
                        "full_name": "Employee Green",
                        "salary": "120000"
                     },
                     {
                        "full_name": "Employee Red",
                        "salary": "96000"
                     },
                     {
                        "full_name": "Employee Orange",
                        "salary": "250000"
                     },
                     {
                        "full_name": "Employee Blue",
                        "salary": "290000"
                     }                                         
                  ]
               },
              { 
                  "subAwardNumber": "2303-TEST-06-1", 
                  "subAwardDollars": "80000",
                  "periodOfPerformanceStartDate": "2023-05-14",
                  "uei": "XYZ987654321",
                  "overallDescription": "Test Description2",
                  "placeOfPerformance": {
                     "streetAddress": "street 123",
                     "streetAddress2": "alley 4",
                     "city": "Brambleton",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "67890"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "true"
                      },
                      {
                        "code": "4",
                        "isSelected": "true"
                      }                                          
                  ]
               }                           
            ]
         },
        {
            "contractNumber": "W91238PTESTTWO", 
            "idvReferenceNumber": "", 
            "reportPeriodMon": "06",
            "reportPeriodYear": "2023",
            "reportingAgency": "9700",
            "treasurySymbol": "01-9999",
            "programTitle": "Title of the program",
            "recovery_model_questions": 
             [
                 {
                   "code": "1",
                   "isSelected": "false"
                 }                                
             ],
            "subAwardDataList": [
               { 
                  "subAwardNumber": "9999-TEST", 
                  "subAwardDollars": "800000",
                  "periodOfPerformanceStartDate": "2023-04-28",
                  "uei": "ABC999999999",
                  "overallDescription": "Test Description",
                  "placeOfPerformance": {
                     "streetAddress": "Test place",
                     "streetAddress2": "",
                     "city": "Atlanta",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "GA",
                        "name": "Georgia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "false"
                      }                                       
                  ]
               }                           
            ]
         }                 
      ]
   }
}
</pre></code>
</p>
</details>

<details>
<summary>Example: Submit SubAward Contract Report when not required to provide Top Pay Employees information </summary>
<p>
<code><pre>
{
   "contractData": {  
      "primeEntityInformation": [
        {
            "contractNumber": "W91238PTESTTWO", 
            "idvReferenceNumber": "", 
            "reportPeriodMon": "06",
            "reportPeriodYear": "2023",
            "reportingAgency": "9700",
            "treasurySymbol": "01-9999",
            "programTitle": "Title of the program",
            "recovery_model_questions": 
             [
                 {
                   "code": "1",
                   "isSelected": "false"
                 }                                
             ],
            "subAwardDataList": [
               { 
                  "subAwardNumber": "9999-TEST", 
                  "subAwardDollars": "800000",
                  "periodOfPerformanceStartDate": "2023-04-28",
                  "uei": "ABC999999999",
                  "overallDescription": "Test Description",
                  "placeOfPerformance": {
                     "streetAddress": "Test place",
                     "streetAddress2": "",
                     "city": "Atlanta",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "GA",
                        "name": "Georgia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "false"
                      }                                       
                  ]
               },
	       { 
                  "subAwardNumber": "2303-TEST-06-1", 
                  "subAwardDollars": "80000",
                  "periodOfPerformanceStartDate": "2023-05-14",
                  "uei": "XYZ987654321",
                  "overallDescription": "Test Description2",
                  "placeOfPerformance": {
                     "streetAddress": "street 123",
                     "streetAddress2": "alley 4",
                     "city": "Brambleton",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "67890"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "true"
                      },
                      {
                        "code": "4",
                        "isSelected": "true"
                      }                                          
                  ]
               }  	
            ]
         }                 
      ]
   }
}	
</pre></code>
</p>
</details>
<p><small><a href="#">Back to top</a></small></p>

### Submit SubAward Report (Grants)


------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards
**Summary** | Using this endpoint, users will be able to submit one or multiple SubAward report for Grants
**Consumes** | application/JSON
**Produces** | NA
**Active Versions** | v1


#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Grant JSON](#submit-subaward-report-grant-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was successfully created | As described below

The API will return HTTP Status code 201 if the report is saved successfully. If the request passes all validations, then the report is saved in Submitted status. If any validations fail, then the report is saved in "Work In Progress" status and the validation error messages are sent back as a part of the response body. see [s](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send an Update SubAward Report (Grants) request to update the report so it can be submitted successfully.

The API will return other HTTP Status codes in case of any other errors and the report will not be saved. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples

<details>
<summary>Example: Submit Grant SubAward Report for multiple awards and multiple subawards</summary>
<p>
<code><pre>
{
   "assistanceData":{
      "primeEntityInformation":[
         {
            "primeFAIN":"1001KS1420",
            "reportPeriodMon":"05",
            "reportPeriodYear":"2023",
            "eftIndicator":"9999",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"true"
               },
               {
                  "code":"2",
                  "isSelected":"false"
               }
            ],
            "topPayEmployees":[
               {
                  "full_name":"John Doe",
                  "salary":"100000"
               },
               {
                  "full_name":"George Simpson",
                  "salary":"120000"
               },
               {
                  "full_name":"Diana Smith",
                  "salary":"96000"
               },
               {
                  "full_name":"Tina White",
                  "salary":"250000"
               },
               {
                  "full_name":"Andy Dev",
                  "salary":"290000"
               }
            ],
            "subAssistanceDataList":[
               {
                  "subAssistanceNumber":"XX-YY-00008",
                  "uei":"ABC123456789",
                  "eftIndicator":"1111",
                  "subAssistanceDollars":"100000",
                  "subAssistanceObligationOrActionDate":"2010-10-01",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"1800 F Street, NW",
                     "streetAddress2":"",
                     "city": "Alexandria",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"false"
                     }
                  ],
                  "topPayEmployees":[
                     {
                        "full_name":"John White",
                        "salary":"100000"
                     },
                     {
                        "full_name":"Employee Green",
                        "salary":"120000"
                     },
                     {
                        "full_name":"Employee Red",
                        "salary":"96000"
                     },
                     {
                        "full_name":"Employee Orange",
                        "salary":"250000"
                     },
                     {
                        "full_name":"Employee Blue",
                        "salary":"290000"
                     }
                  ]
               }
            ]
         },
         {
            "primeFAIN":"1001ZZZ420",
            "reportPeriodMon":"05",
            "reportPeriodYear":"2023",
            "eftIndicator":"8978",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"true"
               },
               {
                  "code":"2",
                  "isSelected":"true"
               }
            ],
            "subAssistanceDataList":[
               {
                  "subAssistanceNumber":"XX-YY-12345",
                  "uei":"zzz123456789",
                  "eftIndicator":"1234",
                  "subAssistanceDollars":"150000",
                  "subAssistanceObligationOrActionDate":"2023-04-17",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"Test place",
                     "streetAddress2":"",
                     "city": "Atlanta",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"GA",
                        "name":"Georgia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"false"
                     }
                  ]
               },
               {
                  "subAssistanceNumber":"AA-YY-12345",
                  "uei":"XYZ123456789",
                  "eftIndicator":"4455",
                  "subAssistanceDollars":"150055",
                  "subAssistanceObligationOrActionDate":"2023-04-17",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"street 123",
                     "streetAddress2":"alley 4",
                     "city": "Brambleton",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"67890"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"true"
                     }
                  ]
               }
            ]
         }
      ]
   }
}
</pre></code>
</p>
</details>

<details>
<summary>Example: Submit SubAward Grant Report when not required to provide Top Pay Employees information </summary>
<p>
<code><pre>
{
   "assistanceData": {
      "primeEntityInformation": [
         {
            "primeFAIN": "1001ZZZ420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "8978",
            "recovery_model_questions": 
             [
                 {
                   "code": "1",
                   "isSelected": "true"
                 },
                 {
                   "code": "2",
                   "isSelected": "true"
                 }                                 
             ],
            "subAssistanceDataList": [
               {
                  "subAssistanceNumber": "XX-YY-12345",                 
                  "uei": "zzz123456789",
                  "eftIndicator": "1234",
                  "subAssistanceDollars": "150000",
                  "subAssistanceObligationOrActionDate": "2023-04-17",
                  "overallDescription": "My Description",
                                    "placeOfPerformance": {
                     "streetAddress": "Test place",
                     "streetAddress2": "",
                     "city": "Atlanta",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "GA",
                        "name": "Georgia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "false"
                      }                                        
                  ]
               },
               {
                  "subAssistanceNumber": "AA-YY-12345",                 
                  "uei": "XYZ123456789",
                  "eftIndicator": "4455",
                  "subAssistanceDollars": "150055",
                  "subAssistanceObligationOrActionDate": "2023-04-17",
                  "overallDescription": "My Description",
                                   "placeOfPerformance": {
                     "streetAddress": "street 123",
                     "streetAddress2": "alley 4",
                     "city": "Brambleton",
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "67890"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "3",
                        "isSelected": "true"
                      },
                      {
                        "code": "4",
                        "isSelected": "true"
                      }                                          
                  ]
               }                           
            ]
         }                 
      ]
   }
}	
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update SubAward Report (Contracts)


------- | -------
**Request Type** | PUT
**URL** | /acquisition/v1/subawards
**Summary** | This endpoint can be used to update one or multiple previously submitted contracts report
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Contract JSON](#submit-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string |  Report successfully updated| As described below

The API will return HTTP Status code 200 if the report is updated successfully. If the request passes all validations, then the report is updated to Submitted status. If any validations fail, then the report stays in "Work In Progress" status and the validation error messages are sent back as a part of the response body. see [s](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send the update request again to update the report so it can be submitted successfully.

The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 
For examples, refer to Submit SubAward Report (Contracts) examples.

<p><small><a href="#">Back to top</a></small></p>

### Update SubAward Report (Grants)


------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/subawards
**Summary** | This endpoint can be used to update one or multiple previously submitted grants report
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Grant JSON](#submit-subaward-report-grant-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report successfully updated | As described below

The API will return HTTP Status code 200 if the report is updated successfully. If the request passes all validations, then the report is updated to Submitted status. If any validations fail, then the report stays in "Work In Progress" status and the validation error messages are sent back as a part of the response body. see [s](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send the update request again to update the report so it can be submitted successfully.

The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 
For examples, refer to Submit SubAward Report (Grants) examples.

<p><small><a href="#">Back to top</a></small></p>

### Delete SubAward Report (Contracts)


------- | -------
**Request Type** | DELETE
**URL** | /acquisition/v1/subawards
**Summary** | This endpoint can be used to delete previously submitted contracts report(s)
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes |[Refer Delete SubAward Report Contract JSON](#delete-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | As described below

The API will return HTTP Status code 204 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

#### Examples

<details>
<summary>Example: Delete request to delete multiple Contract SubAward Reports</summary>
<p>
<code><pre>
{
   "primeEntityInformation":[
      {
         "contractNumber":"W91238PTESTTWO",
         "idvReferenceNumber":"",
         "reportPeriodMon":"06",
         "reportPeriodYear":"2023",
         "reportingAgency":"9700"
      },
      {
         "contractNumber":"W9123823PTEST",
         "idvReferenceNumber":"GSTEST001",
         "reportPeriodMon":"06",
         "reportPeriodYear":"2023",
         "reportingAgency":"2100"
      }
   ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete SubAward Report (Grants)


------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/subawards
**Summary** | This endpoint can be used to delete previously submitted grants report(s)
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Delete SubAward Report Grant JSON ](#delete-subaward-report-grant-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | As described below

The API will return HTTP Status code 204 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

#### Examples

<details>
<summary>Example: Delete request to delete multiple Grant SubAward Reports</summary>
<p>
<code><pre>
{
   "primeEntityInformation":[
      {
         "primeFAIN":"1001KS1420",
         "reportPeriodMon":"05",
         "reportPeriodYear":"2023"
      },
      {
         "primeFAIN":"1001ZZZ420",
         "reportPeriodMon":"05",
         "reportPeriodYear":"2023"
      }
   ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get SubAward Report (Contracts)

------- | -------
**Request Type** | POST
**URL** | /acquisition/v1/subawards/get
**Summary** |  Using this endpoint, user will be able to retrieve specific contract reports based on the provided search criteria
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes, at least one primeEntityInformation element is required. From the fields, at least one field is required | [Refer Get SubAward Report Contract JSON](#get-subaward-report-contract-json) 

<p><small><a href="#">Back to top</a></small></p>

#### Examples
Note: Will return JSON response same as POST Request JSON
<details>
<summary>GET Contract SubAward Report for a specific contract and all reports for specific month and year </summary>
<p>
<code><pre>
{
   "primeEntityInformation":[
      {
         "contractNumber":"W9123823PTEST",
         "idvReferenceNumber":"GSTEST001",
         "reportPeriodMon":"06",
         "reportPeriodYear":"2023",
         "reportingAgency":"2100"
      },
      {
         "reportPeriodMon":"06",
         "reportPeriodYear":"2023"
      }
   ]
}
</pre></code>
</p>
</details>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report was successfully retrieved | [Refer Get SubAward Report Contract JSON](#get-subaward-report-contract-json)

#### Examples
<details>
<summary> Example: Response for a Get request for multiple contracts </summary>
<p>
<code><pre>
 {
   "contractData":{
      "primeEntityInformation":[
         {
            "contractNumber":"W9123823PTEST",
            "idvReferenceNumber":"GSTEST001",
            "reportPeriodMon":"06",
            "reportPeriodYear":"2023",
            "reportingAgency":"2100",
            "treasurySymbol":"12-3456",
            "programTitle":"Title of the program",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"true"
               },
               {
                  "code":"2",
                  "isSelected":"true"
               }
            ],
            "subAwardDataList":[
               {
                  "subAwardNumber":"2303-TEST-05-0",
                  "subAwardDollars":"100000",
                  "periodOfPerformanceStartDate":"2023-05-14",
                  "uei":"ABC987654321",
                  "overallDescription":"tEST Description",
                  "placeOfPerformance":{
                     "streetAddress":"1800 F Street, NW",
                     "streetAddress2":"",
                     "city": "Alexandria",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"true"
                     }
                  ],
                  "topPayEmployees":[
                     {
                        "full_name":"John White",
                        "salary":"100000"
                     },
                     {
                        "full_name":"Employee Green",
                        "salary":"120000"
                     },
                     {
                        "full_name":"Employee Red",
                        "salary":"96000"
                     },
                     {
                        "full_name":"Employee Orange",
                        "salary":"250000"
                     },
                     {
                        "full_name":"Employee Blue",
                        "salary":"290000"
                     }
                  ]
               },
               {
                  "subAwardNumber":"2303-TEST-06-1",
                  "subAwardDollars":"80000",
                  "periodOfPerformanceStartDate":"2023-05-14",
                  "uei":"XYZ987654321",
                  "overallDescription":"Test Description2",
                  "placeOfPerformance":{
                     "streetAddress":"street 123",
                     "streetAddress2":"alley 4",
                     "city": "Brambleton",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"67890"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"false"
                     }
                  ]
               }
            ]
         },
         {
            "contractNumber":"W91238PTESTTWO",
            "idvReferenceNumber":"",
            "reportPeriodMon":"06",
            "reportPeriodYear":"2023",
            "reportingAgency":"9700",
            "treasurySymbol":"01-9999",
            "programTitle":"Title of the program",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"false"
               },
               {
                  "code":"2",
                  "isSelected":"false"
               }
            ],
            "subAwardDataList":[
               {
                  "subAwardNumber":"9999-TEST",
                  "subAwardDollars":"800000",
                  "periodOfPerformanceStartDate":"2023-04-28",
                  "uei":"ABC999999999",
                  "overallDescription":"Test Description",
                  "placeOfPerformance":{
                     "streetAddress":"Test place",
                     "streetAddress2":"",
                     "city": "Atlanta",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"GA",
                        "name":"Georgia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"false"
                     },
                     {
                        "code":"4",
                        "isSelected":"false"
                     }
                  ]
               }
            ]
         }
      ]
   }
}
</pre></code>
</p>
<p><small><a href="#">Back to top</a></small></p>
</details>

### Get SubAward Report (Grants) 

------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards/get
**Summary** | Using this endpoint, user will be able to retrieve specific grants reports based on the provided search criteria
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization	| Header | string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Account API Key
Request JSON|	Body|	JSON|	Yes, at least one primeEntityInformation element is required. From the fields, at least one field is required|	[Refer Get SubAward Report Grant JSON](#get-subaward-report-grant-json)

#### Examples
Note: Will return JSON response same as POST Request JSON
<details>
<summary>Example: GET Grant SubAward Report for a specific Grant in a given month and year and for all months for a grant  </summary>
<p>
<code><pre>
 {
   "primeEntityInformation":[
      {
         "primeFAIN":"1001KS1420",
         "reportPeriodMon":"05",
         "reportPeriodYear":"2023"
      },
      {
         "primeFAIN":"1001ZZZ4201"
      }
   ]
}
</pre></code>
</p>
</details>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Report was successfully retrieved | [Refer Submit SubAward Report Grant JSON](#submit-subaward-report-grant-json)

#### Examples
<details>
<summary>Example: Response for a Get request for multiple Grants </summary>
<p>
<code><pre>
{
   "assistanceData":{
      "primeEntityInformation":[
         {
            "primeFAIN":"1001KS1420",
            "reportPeriodMon":"05",
            "reportPeriodYear":"2023",
            "eftIndicator":"9999",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"true"
               },
               {
                  "code":"2",
                  "isSelected":"false"
               }
            ],
            "subAssistanceDataList":[
               {
                  "subAssistanceNumber":"XX-YY-00008",
                  "uei":"ABC123456789",
                  "eftIndicator":"1111",
                  "subAssistanceDollars":"100000",
                  "subAssistanceObligationOrActionDate":"2010-10-01",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"1800 F Street, NW",
                     "streetAddress2":"",
                     "city": "Alexandria",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"true"
                     }
                  ],
                  "topPayEmployees":[
                     {
                        "full_name":"John White",
                        "salary":"100000"
                     },
                     {
                        "full_name":"Employee Green",
                        "salary":"120000"
                     },
                     {
                        "full_name":"Employee Red",
                        "salary":"96000"
                     },
                     {
                        "full_name":"Employee Orange",
                        "salary":"250000"
                     },
                     {
                        "full_name":"Employee Blue",
                        "salary":"290000"
                     }
                  ]
               }
            ]
         },
         {
            "primeFAIN":"1001ZZZ420",
            "reportPeriodMon":"05",
            "reportPeriodYear":"2023",
            "eftIndicator":"8978",
            "recovery_model_questions":[
               {
                  "code":"1",
                  "isSelected":"true"
               },
               {
                  "code":"2",
                  "isSelected":"true"
               }
            ],
            "subAssistanceDataList":[
               {
                  "subAssistanceNumber":"XX-YY-12345",
                  "uei":"zzz123456789",
                  "eftIndicator":"1234",
                  "subAssistanceDollars":"150000",
                  "subAssistanceObligationOrActionDate":"2023-04-17",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"Test place",
                     "streetAddress2":"",
                     "city": "Atlanta",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"GA",
                        "name":"Georgia"
                     },
                     "zip":"12345"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"false"
                     },
                     {
                        "code":"4",
                        "isSelected":"false"
                     }
                  ]
               },
               {
                  "subAssistanceNumber":"AA-YY-12345",
                  "uei":"XYZ123456789",
                  "eftIndicator":"4455",
                  "subAssistanceDollars":"150055",
                  "subAssistanceObligationOrActionDate":"2023-04-17",
                  "overallDescription":"My Description",
                  "placeOfPerformance":{
                     "streetAddress":"street 123",
                     "streetAddress2":"alley 4",
                     "city": "Brambleton",
                     "country":{
                        "code":"USA",
                        "name":"UNITED STATES"
                     },
                     "state":{
                        "code":"VA",
                        "name":"Virginia"
                     },
                     "zip":"67890"
                  },
                  "recovery_model_questions":[
                     {
                        "code":"3",
                        "isSelected":"true"
                     },
                     {
                        "code":"4",
                        "isSelected":"false"
                     }
                  ]
               }
            ]
         }
      ]
   }
}
</pre></code>
</p>
</details>

## API Contract JSON

### Submit SubAward Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Required |Description 
-----|-----------|-------|------------|------------
contractData | JSON Object |NA |Yes|  
contractData.primeEntityInformation | JSON Array | NA|Yes|Information about the prime Contractor. If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractData.primeEntityInformation Details| | | | 
primeEntityInformation.contractNumber | string | 50 characters  | Yes |If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank
primeEntityInformation.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task Order on a Contract |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
primeEntityInformation.reportPeriodMon |string  | 10 characters | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
primeEntityInformation.reportPeriodYear |string  || Yes | This field should reflect the Reporting Year of the report being submitted. 
primeEntityInformation.reportingAgency | string | 32 characters  | Yes | The ID of the Federal awarding agency as from FPDS-NG
primeEntityInformation.treasurySymbol |string  || The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
primeEntityInformation.programTitle | string || No | Program or Project Title 
primeEntityInformation.recovery_model_questions |JSON Array||No | Array of the Compensation Questions for the prime Awardee. There will be 2 questions, and therefore atmost 2 elements in this array
primeEntityInformation.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
primeEntityInformation.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
primeEntityInformation.subAwardDataList |string  ||Yes  |Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
primeEntityInformation.subAwardDataList Details | | | | 
subAwardDataList.subAwardNumber | string |32 characters  | Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDataList.subAwardDollars |string  |32 characters | Yes | Amount for this award to this sub contractor 
subAwardDataList.periodOfPerformanceStartDate |string |TIMESTAMP | Yes| Date subaward was made in YYYY-MM-DD format
subAwardDataList.uei | string | 13 characters | Yes | Sub Contractor UEI
subAwardDataList.overallDescription |string  || Yes | Describes the contract requirements. This is from FPDS.
subAwardDataList.placeOfPerformance | JSON Object |NA |Yes | Sub contractor Principal Place of Performance
subAwardDataList.placeOfPerformance.streetAddess | string ||Yes|Sub Awardee POP Street Address
subAwardDataList.placeOfPerformance.streetAddess2 | string ||No|Sub Awardee POP Street Address2
subAwardDataList.placeOfPerformance.city | string || Yes |Sub Awardee POP City Name
subAwardDataList.placeOfPerformance.state | JSON Object |NA |Yes|Sub Awardee POP State Information. The State Code and name need to be specified.
subAwardDataList.placeOfPerformance.state.code | string |||Sub Awardee POP State Code
subAwardDataList.placeOfPerformance.state.name | string ||  |Sub Awardee POP State Name
subAwardDataList.placeOfPerformance.country | JSON Object | NA |Yes|Sub Awardee POP Country Information. The Country Code and name need to be specified.
subAwardDataList.placeOfPerformance.country.code | string || |Sub Awardee POP Country Code
subAwardDataList.placeOfPerformance.country.name | string ||  |Sub Awardee POP Country Name
subAwardDataList.placeOfPerformance.zip | string ||Yes|Sub Awardee POP ZIP Code
subAwardDataList.recovery_model_questions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the sub contractor. | Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 3 for the first question and 4 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subAwardDataList.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
subAwardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the Array requires 5 elements| This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if response to compensation question 1 is true and compensation question 2 is false. If the responses to the compensation questions are already provided with the SAM registration for this entity, then this information is not required to be provided.
subAwardDataList.topPayEmployees.full_name |string  ||Yes if subAwardDataList.topPayEmployees is required| The full name of the top pay employee
subAwardDataList.topPayEmployees.salary | string  ||Yes if subAwardDataList.topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Submit SubAward Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Object |NA | NA | NA
assistanceData.primeEntityInformation | JSON Array | NA| Yes | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
assistanceData.primeEntityInformation Details||||
primeEntityInformation.primeFAIN | string |  255 characters | Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award. 
primeEntityInformation.reportPeriodMon | string | 10 characters  | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
primeEntityInformation.reportPeriodYear | string  | 10 characters | Yes | This field should reflect the Reporting Year of the report being submitted. 
primeEntityInformation.eftIndicator | string | 10 characters | No |If your organization has the eftIndicator to indicate specific payment locations within your organization as registered in SAM, this information will be picked up from the SAM registration. Otherwise, if applicable, you would note it here. 
primeEntityInformation.recovery_model_questions |JSON Array||No | Array of the Compensation Questions for the prime Awardee. There will be 2 questions, and therefore atmost 2 elements in this array
primeEntityInformation.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
primeEntityInformation.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
primeEntityInformation.subAwardDataList |string  ||Yes  |Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
primeEntityInformation.subAwardDataList Details | || | 
subAwardDataList.subAssistanceNumber | string  | 32 characters |Yes  | Number assigned by the Prime to track this sub Grant
subAwardDataList.uei |string | 13 characters | Yes | Sub Awardee UEI
subAwardDataList.eftIndicator | string | 10 characters | No |If the subawardee organization has the eftIndicator to indicate specific payment locations within your organization as registered in SAM, this information will be picked up from the SAM registration. Otherwise, if applicable, you would note it here. 
subAwardDataList.subAssistanceDollars |string  | 20 characters| Yes | Amount for this award to this sub award
subAwardDataList.subAssistanceObligationOrActionDate|string ||Yes |Date subaward was made in YYYY-MM-DD format 
subAwardDataList.overallDescription |string  |   | Yes |
subAwardDataList.placeOfPerformance | JSON Object ||Yes | Sub contractor Principal Place of Performance
subAwardDataList.placeOfPerformance.streetAddess | string ||Yes|Sub Awardee POP Street Address
subAwardDataList.placeOfPerformance.streetAddess2 | string ||No|Sub Awardee POP Street Address2
subAwardDataList.placeOfPerformance.city | string || Yes |Sub Awardee POP City Name
subAwardDataList.placeOfPerformance.state | JSON Object ||Yes|Sub Awardee POP State Information. The State Code and name need to be specified.
subAwardDataList.placeOfPerformance.state.code | string |||Sub Awardee POP State Code
subAwardDataList.placeOfPerformance.state.name | string ||  |Sub Awardee POP State Name
subAwardDataList.placeOfPerformance.country | JSON Object ||Yes|Sub Awardee POP Country Information. The Country Code and name need to be specified.
subAwardDataList.placeOfPerformance.country.code | string || |Sub Awardee POP Country Code
subAwardDataList.placeOfPerformance.country.name | string ||  |Sub Awardee POP Country Name
subAwardDataList.placeOfPerformance.zip | string ||Yes|Sub Awardee POP ZIP Code
subAwardDataList.recovery_model_questions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the sub contractor. | Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 3 for the first question and 4 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subAwardDataList.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
subAwardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the Array requires 5 elements| This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if response to compensation question 1 is true and compensation question 2 is false. If the responses to the compensation questions are already provided with the SAM registration for this entity, then this information is not required to be provided.
subAwardDataList.topPayEmployees.full_name |string  ||Yes if subAwardDataList.topPayEmployees is required| The full name of the top pay employee
subAwardDataList.topPayEmployees.salary | string  ||Yes if subAwardDataList.topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Delete SubAward Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
contractData.primeEntityInformation | JSON Array  | | | Information about the prime Contractor. If the request is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract.
contractNumber | string  | 50 characters | Yes | If this report being deleted is for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank.
idvReferenceNumber | string | 50 characters  | Conditional - Yes |If this report being deleted is for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon | string  | 10 characters| Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear | string | | Yes | This field should reflect the Reporting Year of the report being submitted.
reportingAgency |string  |32 characters| Yes | The ID of the Federal awarding agency

<p><small><a href="#">Back to top</a></small></p>

### Delete SubAward Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length|  Required | Description
-----|-----------|---------|----------|------------
assistanceData.primeEntityInformation | JSON Array  |  | |Information about the prime Grantor. If the request is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN | string  |255 character|Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award.
reportPeriodMon | string  | 10 characters| Yes | Reporting Month of the report. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |string  |  | Yes | Reporting Year of the report.

<p><small><a href="#">Back to top</a></small></p>

###  Get SubAward Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length| Required | Description
-----|-----------|--------|--------|------------
contractData.primeEntityInformation |JSON Array  |  | | Information about the prime Contractor. This array can have multiple elements.
contractNumber | string  |50 characters|Yes | contractNumber or the Award ID for your contract as reported in FPDS. Or can be Task Order Number
idvReferenceNumber | string  | 50 characters|  |If Task Order Number is specified in contractNumber field then enter the contract number which matches the Reference IDV field in FPDS.
reportPeriodMon | string  | 10 characters| Yes | Reporting Month of the report. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear | string  | | Yes | Reporting Year of the report.
reportingAgency | string  | 32 characters| Yes  | The ID of the Federal awarding agency

<p><small><a href="#">Back to top</a></small></p>

### Get SubAward Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|----------------|------------|-------
assistanceData.primeEntityInformation | JSON Array  |   |Yes |Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN | string  |255 characters |Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award.
reportPeriodMon | string | 10 characters |Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear | string  | | Yes | Reporting Year of the report.

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/subawardapi.yml" download="fsrsapi">OpenAPI File</a>

## Error Messages

### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error codes may change depending on the error given; document will be updated accordingly.

Error Code |	Error Message	| Reason/Description | Operation |
---------- | ------------- | ------------------ | --------- |
401	|	Please provide valid Authorization Email & API Key	|	API Key and/or Authorization Email are required	|	All |
401	|	Encountered error authenticating user.Invalid JWT provided	|	Invalid Authorization Email provided	|	All |
403	|	You do not have permissions to access this resource	|	Account does not have appropriate privileges to perform the operation	|	All |
404	|	Requested URL not found	|	Not found	|	All |
500	|	Internal Server Error encountered. Please try after sometime	|	Internal Server Error	|	All |
501	|	Invalid request	|	Not Implemented	|	All |
400	|	Error processing the request	|	Invalid JSON format provided	|	All |
400	|	primeEntityInformation is required	|	primeEntityInformation element is missing or empty	|	All |
400	|	Invalid JSON structure. contractData is required	|	The contractData element is required in the request body.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Invalid JSON structure. assistanceData is required	|	The assistanceData element is required in the request body.	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Invalid JSON structure: At least one primeEntityInformation is required for contract reporting.	|	Request Body JSON structure is invalid. At least one contractData.primeEntityInformation element is required for contract reporting	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Invalid JSON structure: At least one primeEntityInformation is required for grant reporting.	|	Request Body JSON structure is invalid. At least one assistanceData.primeEntityInformation element is required for  grant reporting	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Ensure that the FAIN Number is correct. No matching Grant found for the provided FAIN number	|	As provided in assistanceData.primeEntityInformation.primeFAIN, FAIN Number not found	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Could not find a record matching the contractNumber and reportingAgency provided	|	No record found for the Contract Number and Reporting Agency combination (Combination of contractData.primeEntityInformation.contractNumber and contractData.primeEntityInformation.reportingAgency in the Request Body).	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Could not find a record associating the IDV reference number with the Contract number	|	IDV Reference Number not found associated with the Contract Number (Combination of contractData.primeEntityInformation.contractNumber and contractData.primeEntityInformation.idvReferenceNumber)	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Report Already Exists for the specified Month/Year  - Status: Submitted; Created By - User Name	|	A SubAward report for this contract already exists in the system for the given reporting period (Combination of contractNumber:idvReferenceNumber:reportPeriodMon:reportPeriodYear:reportingAgency)	|	submitSubAwardReport(Contracts) |
400	|	Report Already Exists for the specified Month/Year  - Status: Submitted; Created By - User Name	|	A SubAward report for this grant already exists in the system for the given reporting period (Combination of primeFAIN:reportPeriodMon:ReportPeriodYear)	|	submitSubAwardReport(Grants) |
400	|	Please specify the idvReferenceNumber to correctly identify the contract being reported on	|	User needs to specify the idvReferenceNumber to correctly identify the record as multiple records were found for the contractNumber and reportingAgency combination	|	submitSubAwardReport(Contracts) |
400	|	Cannot update. A SubAward report for the specified month/year does not exist for the Contract.	|	No Report found for the specified Contract for the Month/Year. Combination of contractNumber:idvReferenceNumber:reportPeriodMon:reportPeriodYear:reportingAgency does not exist	|	updateSubAwardReport(Contracts) |
400	|	Cannot update. A SubAward report for the specified month/year does not exist for the Grant.	|	No Report found for the specified Grant for the Month/Year. Combination of primeFAIN:reportPeriodMon:ReportPeriodYear	|	updateSubAwardReport(Grants) |
400	|	Contract Number is required for Prime Entity	|	contractData.primeEntityInformation.contractNumber was not provided.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Reporting period month is required for Prime Entity	|	For Contracts contractData.reportPeriodMon is a required field. For Grants assistanceData.reportPeriodMon is a required field.	|	submitSubAwardReport ,updateSubAwardReport (Contracts and Grants) |
400	|	Please provide a valid value for the reporting period month. It is expected to be a 2 digit month	|	reportPeriodMon is expected as a 2 digit number (01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December)	|	submitSubAwardReport ,updateSubAwardReport(Contracts and Grants) |
400	|	Reporting period year is required for Prime Entity.	|	For Contracts, contractData.reportPeriodYear is a required field. For Grants, assistanceData.reportPeriodYearreportPeriodYear is a required field.	|	submitSubAwardReport ,updateSubAwardReport(Contracts and Grants) |
400	|	Please provide a valid value for the reporting period year. It is expected to be a 4 digit year	|	For Contracts, contractData.reportPeriodYear should be a 4 digit year. For Grants, assistanceData.reportPeriodYear should be a 4 digit year.	|	submitSubAwardReport ,updateSubAwardReport(Contracts and Grants) |
400	|	Please provide the Federal awarding agency Id	|	contractData.reportingAgency is a required field.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Please provide the correct format for the Reporting Agency	|	contractData.reportingAgency provided is invalid.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	At least one primeEntityInformation element is required for the contract reporting	|	At least one primeEntityInformation element is required for the contract reporting	|	getSubAwardReport(Contracts) |
400	|	At least one primeEntityInformation element is required for the grant reporting	|	At least one primeEntityInformation element is required for the grant reporting	|	getSubAwardReport(Grants) |
400	|	At least one search criteria needs to be specified. One of contractNumber, idvReferenceNumber, reportPeriodMon, reportPeriodYear, reportingAgency	|	contractNumber, idvReferenceNumber, reportPeriodMon, reportPeriodYear and reportingAgency are missing for at least one element in the request	|	getSubAwardReport(Contracts and Grants) |
400	|	At least one search criteria needs to be specified. One of primeFAIN, reportPeriodMon, reportPeriodYear	|	primeFAIN, reportPeriodMon and reportPeriodYear are missing for at least one element in the request.	|	getSubAwardReport(Contracts and Grants) |
400	|	At least one primeEntityInformation element is required for deleting	|	At least one primeEntityInformation element is required for deleting	|	deleteSubAwardReport(Contracts and Grants) |
400	|	No report found matching the specified parameters for the report	|	No report found matching the specified parameters for the report.	|	deleteSubAwardReport(Contracts and Grants) |

<p><small><a href="#">Back to top</a></small></p>

### Validation Failure Error Messages

This section details possible validation failure error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.

HTTP Status Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
201|recovery_model_questions |	Responses to Compensation Questions were not found under SAM registration for the UEI <UEI Number>. Please provide the responses to the compensation questions under recovery_model_questions json element |Responses to compensation questions are required  if they are not available for the Prime Entity's SAM registration| submitSubAwardReport(Contracts and Grants)
201|recovery_model_questions |	Compensation Q1 code and response are required |Compensation Q1 code and response are required if responses to compensation questions is provided|submitSubAwardReport(Contracts and Grants)
201|recovery_model_questions |Since you responded true to the first compensation question, a response for the second compensation question is required.|	Compensation Q2 code and response are required	| submitSubAwardReport(Contracts and Grants)
201|recovery_model_questions |An incorrect compensation question code was provided for the Prime/Sub Awardee. Please refer to the Lookup table information for the correct codes to use.| Compensation question code provided did not match expected codes |	submitSubAwardReport(Contracts and Grants)
201|recovery_model_questions |	Compensation question isSelected value can only be true or false | Compensation question isSelected value can only be true or false | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList|	Invalid JSON format: At least one Sub-Awardee information is required for the reporting | At least one Sub-Awardee information is required for the reporting | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardNumber|	Sub-contract number is required | Sub-contract number is required | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardNumber|	Sub-contract number should be unique across multiple elements of subAwardDataList  | Sub-contract number should be unique across multiple elements of subAwardDataList  | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars |	Sub-contract Amount is required | Sub-contract Amount is requiredn| submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars| Sub-contract Amount should be lower than the Total contract amount | Sub-contract Amount should be lower than the Total contract amount | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | Subcontract Date is required | Subcontract Date is required | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | The Subcontract Date cannot be in the future. | The Subcontract Date cannot be in the future. |  submitSubAwardReport(Contracts)
201|subAwardDataList.uei  subAssistanceDataList.uei | Sub contractor UNIQUE ENTITY ID # is required |Sub contractor UNIQUE ENTITY ID # is required |  submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.uei  subAssistanceDataList.uei | Sub UNIQUE ENTITY ID # must be exactly 12 characters |	Sub UNIQUE ENTITY ID # must be exactly 12 characters  | submitSubAwardReport(Contracts)
201|subAwardDataList.uei  subAssistanceDataList.uei |	TBD(The Sub Awardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov) |	TBD(The Sub Awardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov.) |	submitSubAwardReport(Contracts)
201|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Sub-contract overall description is required. |	Sub-contract overall description is required. |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performace is required. |	Sub-contract Place of Performace is required. |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - Country is required |	Sub-contract Place of Performance Section - Country is required | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters | submitSubAwardReport(Contracts and Grants
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |  submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance|	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid|	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City is required	| Only for US addresses: Sub-contract Place of Performance Section - City is required | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid| Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.topPayEmployees      subAssistanceDataList.topPayEmployees | Sub Top Employer Compensation - fullname and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	submitSubAwardReport(Contracts and Grants)
201|subAwardDataList.topPayEmployees.full_name | Sub topPayEmployees.full_name is required |Sub topPayEmployees.full_name is required |	submitSubAwardReport(Contracts and Grants)
201|subAssistanceDataList | At least one Sub-Awardee information is required for the reporting |At least one Sub-Awardee information is required for the reporting |	submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceNumber | Sub-contract number is required |Sub-contract number is required |	submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceNumber| Sub-contract number should be unique across multiple elements of subAwardDataList  |Sub-contract number should be unique across multiple elements of subAwardDataList |	submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount is required	| Sub-contract Amount is required | submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount should be lower than the Total grant amount |	Sub-contract Amount should be lower than the Total grant amount |	 submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceObligationOrActionDate |	Subcontract Date is required | Subcontract Date is required| submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceObligationOrActionDate |	Date of Subcontract for subAssistance: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subcontract for subAssistance: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubAwardReport(Grants)
201|subAssistanceDataList.subAssistanceObligationOrActionDate |	The Subcontract Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subcontract Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | submitSubAwardReport(Grants)
200|recovery_model_questions |	Responses to Compensation Questions were not found under SAM registration for the UEI <UEI Number>. Please provide the responses to the compensation questions under recovery_model_questions json element |Responses to compensation questions are required  if they are not available for the Prime Entity's SAM registration| updateSubAwardReport(Contracts and Grants)
200|recovery_model_questions |	Compensation Q1 code and response are required |Compensation Q1 code and response are required if responses to compensation questions is provided|updateSubAwardReport(Contracts and Grants)
200|recovery_model_questions |Since you responded true to the first compensation question, a response for the second compensation question is required.|	Compensation Q2 code and response are required	| updateSubAwardReport(Contracts and Grants)
200|recovery_model_questions |An incorrect compensation question code was provided for the Prime/Sub Awardee. Please refer to the Lookup table information for the correct codes to use.| Compensation question code provided did not match expected codes |	updateSubAwardReport(Contracts and Grants)
200|recovery_model_questions |	Compensation question isSelected value can only be true or false | Compensation question isSelected value can only be true or false | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList|	Invalid JSON format: At least one Sub-Awardee information is required for the reporting | At least one Sub-Awardee information is required for the reporting | updateSubAwardReport(Contracts)
200|subAwardDataList.subAwardNumber|	Sub-contract number is required | Sub-contract number is required | updateSubAwardReport(Contracts)
200|subAwardDataList.subAwardNumber|	Sub-contract number should be unique across multiple elements of subAwardDataList  | Sub-contract number should be unique across multiple elements of subAwardDataList  | updateSubAwardReport(Contracts)
200|subAwardDataList.subAwardDollars |	Sub-contract Amount is required | Sub-contract Amount is requiredn| updateSubAwardReport(Contracts)
200|subAwardDataList.subAwardDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| updateSubAwardReport(Contracts)
200|subAwardDataList.subAwardDollars| Sub-contract Amount should be lower than the Total contract amount | Sub-contract Amount should be lower than the Total contract amount | updateSubAwardReport(Contracts)
200|subAwardDataList.periodOfPerformanceStartDate | Subcontract Date is required | Subcontract Date is required | updateSubAwardReport(Contracts)
200|subAwardDataList.periodOfPerformanceStartDate | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubAwardReport(Contracts)
200|subAwardDataList.periodOfPerformanceStartDate | The Subcontract Date cannot be in the future. | The Subcontract Date cannot be in the future. |  updateSubAwardReport(Contracts)
200|subAwardDataList.uei  subAssistanceDataList.uei | Sub contractor UNIQUE ENTITY ID # is required |Sub contractor UNIQUE ENTITY ID # is required |  updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.uei  subAssistanceDataList.uei | Sub UNIQUE ENTITY ID # must be exactly 12 characters |	Sub UNIQUE ENTITY ID # must be exactly 12 characters  | updateSubAwardReport(Contracts)
200|subAwardDataList.uei  subAssistanceDataList.uei |	TBD(The Sub Awardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov) |	TBD(The Sub Awardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov.) |	updateSubAwardReport(Contracts)
200|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Sub-contract overall description is required. |	Sub-contract overall description is required. |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performace is required. |	Sub-contract Place of Performace is required. |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - Country is required |	Sub-contract Place of Performance Section - Country is required | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters | updateSubAwardReport(Contracts and Grants
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |  updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance|	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid|	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City is required	| Only for US addresses: Sub-contract Place of Performance Section - City is required | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid| Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.topPayEmployees      subAssistanceDataList.topPayEmployees | Sub Top Employer Compensation - fullname and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	updateSubAwardReport(Contracts and Grants)
200|subAwardDataList.topPayEmployees.full_name | Sub topPayEmployees.full_name is required |Sub topPayEmployees.full_name is required |	updateSubAwardReport(Contracts and Grants)
200|subAssistanceDataList | At least one Sub-Awardee information is required for the reporting |At least one Sub-Awardee information is required for the reporting |	updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceNumber | Sub-contract number is required |Sub-contract number is required |	updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceNumber| Sub-contract number should be unique across multiple elements of subAwardDataList  |Sub-contract number should be unique across multiple elements of subAwardDataList |	updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount is required	| Sub-contract Amount is required | updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceDollars |	Sub-contract Amount should be lower than the Total grant amount |	Sub-contract Amount should be lower than the Total grant amount |	 updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceObligationOrActionDate |	Subcontract Date is required | Subcontract Date is required| updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceObligationOrActionDate |	Date of Subcontract for subAssistance: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subcontract for subAssistance: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubAwardReport(Grants)
200|subAssistanceDataList.subAssistanceObligationOrActionDate |	The Subcontract Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subcontract Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | updateSubAwardReport(Grants)

## FAQ

TBD

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)


## Change Log

Date | Version | Description
--------- | --------------- | ---------
07/15/2023 | v0.1 | Base Version
10/12/2023 | v0.2 | Updates to GET calls and minor cosmetic changes
11/10/2023 | v0.3 | Updates to remove FFATA and use SubAwards


<p><small><a href="#">Back to top</a></small></p>
