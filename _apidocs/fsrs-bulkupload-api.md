---
title: SAM.gov FFATA Subaward Reporting Bulk Upload API 
banner-heading: SAM.gov FFATA Subaward Reporting Bulk Upload API
---

## Overview

The API for FFATA Subaward Reporting will allow authorized users to submit FFATA Reports for their Contracts or Grants. Using this API, users will be able to file multiple FFATA reports at once. 

**Note:** The specifications on this page are for a future API.  Check back here or be in contact with IAE for the release date and testing session.

**API Version: v1.0**

## Getting Started

FFATA Subaward Reporting Bulk Upload API can be accessed from Production or Alpha via the following endpoints:

* Production: https://api.sam.gov
* Alpha: https://api-alpha.sam.gov

###	Authentication and Authorization

To begin using this API, you will need to register for a System Account and obtain an API Key. After registration, you will need to provide this API key in the <i>x-api-key</i> HTTP header with every API request.
* Registered users (Federal and non-federal) with appropriate roles for FFATA under Entity Reporting domain can request for a system account with ‘read Sensitive’ or ‘read FOUO’ permissions to be able to view FFATA reports. 
* Registered users (Federal and non-federal) with appropriate roles for FFATA under Entity Reporting domain can request for a system account with ‘Write Sensitive’  permissions to be able to create, update and/or delete FFATA reports.
* If a user has the appropriate roles for FFATA reporting, and therefore satisfies the above registration criteria, they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “New Account” by navigating from the widget and fill out the required sections with appropriate FFATA reporting permissions and required information..
* The requested system account will then be sent for an approval. After approval, the user will be notified via an email and they will also be able to see the status of their request in the System Account widget.

#### Generating a System Account API Key
In order to utilize the FFATA API endpoints, users will need to generate the System account API Key to make API calls.
* Once the system account is approved as per the instructions above, the user can select “Go to System Accounts” in the widget from their workspace and enter a new system account password. 
* After setting up the password for the system account, the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the API Key. 
* This API Key will be used for all API calls as described in this documentation.

#### System Account Authentication
In order to utilize the FFATA Subaward Reporting Bulk Upload API, the following is required:
* Valid SAM.gov federal government system account or non-fed user account with relevant FFATA permissions under Entity Reporting domain.

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
To be able to perform the various operations provided under the FFATA API, users will need to have permissions under ‘Entity Reporting’ domain for FFATA to perform various operations.The permissions required for operations by role are listed in the table below:

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

Role/Permission    | Submit FFATA Report | Update FFATA Report | Get FFATA Report | Delete FFATA Report
-------------|---------------|---------------------|---------------------|------------------------------
Create and delete permission for FFATA under Entity Reporting | Yes | Yes | Yes | Yes
Read permission for FFATA under Entity Reporting | No | No | Yes | No

**Note:** sam.gov is moving towards utilizing OAuth 2.0 workflow leveraging OKTA for Authentication of System Accounts. As a result of this implementation, API Keys will be replaced with the usage of client credentials, namely clientId and secret. As a result of this implementation, clients will first need to request for the access token, which will then be required to be sent along with the API requests. To support this change, v2 versions of all APIs outlined in this documentation will be released.

Refer : 
https://www.ibm.com/docs/en/tfim/6.2.2.6?topic=overview-oauth-20-workflow

<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta-Data

#### Recovery Model Questions (Compensation Questions)

To submit a FFATA Report, compensation questions for the Prime, as well as sub-awardee need to be responded to. The table below outlines the Compensation Questions and their corresponding codes to be used in the requests.

| Code              | Description                                   |
| ----------------- | --------------------------------------------- |
| __0__	            | In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number,belongs) receive (1) 80 percent or more of your annual gross revenues in U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements? |
| __1__	            | Does the public have access to information about the compensation of the executives in your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number, belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal RevenueCode of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the FFATA Reports.

Code | Value
-----|-----------------
acc     | Submitted
drt     | Draft/Work-In-Progress

<p><small><a href="#">Back to top</a></small></p>

## GENC Standardization
SAM.gov uses GENC Standardization of country and administrative data to ensure no countries or states are being inserted into SAM that are not correctly recognized by the United States. To ensure any country/state data that is input by the users through FFATA Subaward reporting meets these standards, validations will be run when receiving this data. Please refer to the error messages section for specific details for these errors.

Refer : 
https://geonames.nga.mil/geonames/GeographicNamesSearch/

API Fields

Field Name | Data Source  | Valid Statuses  | Input Type
---------------|------------|----------|------------
Country Code |  Country_Code MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources | Active, Inactive (GET calls Only) | Three Character
Country Name |  Full_Name' MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources |   | TEXT
State | State MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources   | Listed from the selected country | Two Character

<p><small><a href="#">Back to top</a></small></p>

## Version Control (need to determine if we need this section)

V1 versions of APIs will be utilizing the API Key mechanism as outlined in this documentation. V2 versions of APIs will be made available to support OAuth 2.0 as soon as possible. The documentation will be updated as soon as more information is available for the oAuth implementation.  

## FSRS Subaward Reporting Bulk Upload API Request and Responses
This API has 8 endpoints as outlined below. 
Endpoint Name | Short Description |
-----|-----------------
Submit FFATA Report (Contracts)     | Can be used to submit FFATA Subaward Reports for reporting on one or more Contracts.
Submit FFATA Report (Grants)     | Can be used to submit FFATA Subaward Reports for reporting on one or more Grants.
Update FFATA Report (Contracts)     | Can be used to update one or more previously submitted FFATA Subaward Reports for Contracts.
Update FFATA Report (Grants)     | Can be used to update one or more previously submitted FFATA Subaward Reports for Grants.
Delete FFATA Report (Contracts)     | Can be used to delete one or more previously submitted FFATA Subaward Reports for Contracts.
Delete FFATA Report (Grants)     | Can be used to delete one or more previously submitted FFATA Subaward Reports for Grants.
Get FFATA Report (Contracts)     | Can be used to get one or more previously submitted FFATA Subaward Reports for Contracts. 
Get FFATA Report (Grants)     | Can be used to get one or more previously submitted FFATA Subaward Reports for Grants.

The following section describes each of the above endpoints in detail.

### Submit FFATA Report (Contracts)

------- | ------- |
**Request Type** | POST
**URL** | /acquisition/v1/FFATA
**Summary** | Submit a FFATA report for Contracts
**Consumes** | application/json
**Produces** | NA
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit FFATA Report Contract JSON](#submit-ffata-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Draft Opportunity successfully created | returns Opportunity ID in response header

Examples

<details>
<summary>Example: Submit FFATA Subaward Contract Report for multiple Contracts </summary>
<p>
<code><pre>
{
   "contractFFATAData": {  
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
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
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
                     "city": {
                        "code": "1000",
                        "name": "Alexandria"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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
                     "city": {
                        "code": "9192",
                        "name": "Brambleton"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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
                   "code": "0",
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
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
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
<summary>Example: Submit FFATA Subaward Contract Report without Top Pay Employees information for Subcontract </summary>
<p>
<code><pre>
{
   "contractFFATAData": {  
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
                   "code": "0",
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
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
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
<p><small><a href="#">Back to top</a></small></p>

### Submit FFATA Grant


------- | -------
**Request Type** | POST
**URL** | /assistance/v1/FFATA
**Summary** | Using this endpoint, users will be able to submit a FFATA report for Grants
**Consumes** | application/JSON
**Produces** | NA
**Active Versions** | v1


Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit FFAATA Report Grant JSON](#submit-ffata-grant-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was successfully created | Report successfully submitted

Examples

<details>
<summary>Example: Submit FAATA Grant Subaward Report for multiple awards</summary>
<p>
<code><pre>
{
   "assistanceFFATAData": {
      "primeEntityInformation": [
         {
            "primeFAIN": "1001KS1420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "9999",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
                   "isSelected": "false"
                 }                                 
             ],
            "subAssistanceDataList": [
               {
                  "subAssistanceNumber": "XX-YY-00008",                 
                  "uei": "ABC123456789",
                  "eftIndicator": "1111",
                  "subAssistanceDollars": "100000",
                  "subAssistanceObligationOrActionDate": "2010-10-01",
                  "overallDescription": "My Description",
                  "placeOfPerformance": {
                     "streetAddress": "1800 F Street, NW",
                     "streetAddress2": "",
                     "city": {
                        "code": "1000",
                        "name": "Alexandria"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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
               }
            ]
         },
         {
            "primeFAIN": "1001ZZZ420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "8978",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
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
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
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
                     "city": {
                        "code": "9192",
                        "name": "Brambleton"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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

<details>
<summary>Example: Submit FFATA Subaward Grant Report without Top Pay Employees information for sub assistance </summary>
<p>
<code><pre>
{
   "assistanceFFATAData": {
      "primeEntityInformation": [
         {
            "primeFAIN": "1001ZZZ420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "8978",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
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
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
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
                     "city": {
                        "code": "9192",
                        "name": "Brambleton"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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

### Update FFATA Contract 


------- | -------
**Request Type** | PUT
**URL** | /acquisition/v1/FFATA
**Summary** | This endpoint can be used to update a previously submitted contracts report
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Update FAATA Contract JSON](#update-faata-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string |  Report successfully updated| 

Examples

<details>
<summary>Example: Update FFATA Contract Subaward Report </summary>
<p>
<code><pre>
 {
   "contractFFATAData": {  
      "primeEntityInformation": [
        {
            "contractNumber": "W91238PTESTTWO", 
            "idvReferenceNumber": "", 
            "reportPeriodMon": "06",
            "reportPeriodYear": "2023",
            "reportingAgency": "9700",
            "treasurySymbol": "01-9999",
            "programTitle": "Title of the program updated",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
                   "isSelected": "true"
                 }                                				 
             ],
            "subAwardDataList": [
               { 
                  "subAwardNumber": "9999-TEST", 
                  "subAwardDollars": "800000",
                  "periodOfPerformanceStartDate": "2023-05-28",
                  "uei": "ABC999999999",
                  "overallDescription": "updated periodOfPerformanceStartDate and placeOfPerformance",
                  "placeOfPerformance": {
                     "streetAddress": "Test place updated",
                     "streetAddress2": "",
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
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

<p><small><a href="#">Back to top</a></small></p>

### Update FFATA Report Grant


------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/FFATA
**Summary** | This endpoint can be used to update a previously submitted grants report
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Update FFATA Report Grant JSON](#)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report successfully updated | 

Examples

<details>
<summary>Example: Update Grant FFATA Subaward report</summary>
<p>
<code><pre>
{
   "assistanceFFATAData": {
      "primeEntityInformation": [
         {
            "primeFAIN": "1001KS1420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "9999",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
                   "isSelected": "false"
                 }                                 
             ],
            "subAssistanceDataList": [
               {
                  "subAssistanceNumber": "XX-YY-00008",                 
                  "uei": "ABC123456789",
                  "eftIndicator": "1111",
                  "subAssistanceDollars": "100000",
                  "subAssistanceObligationOrActionDate": "2010-10-01",
                  "overallDescription": "My Description updates for example",
                  "placeOfPerformance": {
                     "streetAddress": "1800 xyz, NW",
                     "streetAddress2": "",
                     "city": {
                        "code": "1000",
                        "name": "Alexandria"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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
               }
            ]
         },
         {
            "primeFAIN": "1001ZZZ420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "8978",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
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
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
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
                        "code": "0",
                        "isSelected": "false"
                      },
                      {
                        "code": "1",
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
                     "city": {
                        "code": "9192",
                        "name": "Brambleton"
                     },
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
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
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

### DELETE FFATA Report Contract


------- | -------
**Request Type** | DELETE
**URL** | /acquisition/v1/FFATA
**Summary** | This endpoint can be used to delete previously submitted contracts report(s)
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v2/v3

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes |[Refer DELETE FAATA Report Contract JSON](#)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | 

Examples

<details>
<summary>Example: Delete FAATA Contract Subaward Report</summary>
<p>
<code><pre>
{
  "primeEntityInformation": [
	{
      	"contractNumber": "W91238PTESTTWO",
      	"idvReferenceNumber": "",
      	"reportPeriodMon": "06",
  	"reportPeriodYear": "2023",
      	"reportingAgency": "9700"
	}
  ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### DELETE FFATA Report Grant


------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/FFATA
**Summary** | This endpoint can be used to delete previously submitted grants report(s)
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer FFATA Report Grant JSON ](#)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | JSON (see below)


Examples

<details>
<summary>History Response</summary>
<p>
<code><pre>
{
 "primeEntityInformation": [
 {
 "primeFAIN": "string",
 "reportPeriodMon" : "number",
 "reportPeriodYear": "number",
 }
 ]
 }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### GET FFATA Report Contract

------- | -------
**Request Type** | GET
**URL** | /acquisition/v1/FFATA
**Summary** |  Using this endpoint, user will be able to retrieve specific contract reports based on the provided search criteria
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | Yes, at least one primeEntityInformation element is required. From the fields, at least one field is required

<p><small><a href="#">Back to top</a></small></p>

Examples
Note: Will return JSON response same as POST Request JSON
<p>
<code><pre>
 {
 "primeEntityInformation": [
 {
 "contractNumber": "W9123823PTEST",
 "idvReferenceNumber": "GSTEST001",
 "reportPeriodMon" : "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "2100"
 },
 {
 "reportPeriodMon" : "06",
 "reportPeriodYear": "2023",
 }
 ]
 }
</pre></code>
</p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report was successfully retrieved | Return Contract FAATA JSON

Examples
<p>
<code><pre>
 {
 "contractFFATAData": {
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
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
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
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
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
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
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
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
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
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
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
 "code": "0",
 "isSelected": "false"
 },
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
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
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
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
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
<p><small><a href="#">Back to top</a></small></p>


### GET FAATA Report Grant ###

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/FFATA
**Summary** | Using this endpoint, user will be able to retrieve specific grants reports based on the provided search criteria
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization	| Header | string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Account API Key
Request JSON|	Body|	JSON|	Yes|	[Refer GET FAATA GRANT JSON](#delete-notice-contract-json)

Examples
Note: Will return JSON response same as POST Request JSON
<p>
<code><pre>
 {
 "primeEntityInformation": [
 {
 "primeFAIN": "1001KS1420",
 "reportPeriodMon" : "05",
 "reportPeriodYear": "2023"
 },
 {
 "primeFAIN": "1001ZZZ420"
 }
 ]
 }
</pre></code>
</p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Report was successfully retrieved | returns GrantFFATA JSON

Examples

<p>
<code><pre>
{
 "assistanceFFATAData": {
 "primeEntityInformation": [
 {
 "primeFAIN": "1001KS1420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "9999",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ],
 "subAssistanceDataList": [
 {
 "subAssistanceNumber": "XX-YY-00008",
 "uei": "ABC123456789",
 "eftIndicator": "1111",
 "subAssistanceDollars": "100000",
 "subAssistanceObligationOrActionDate": "2010-10-01",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "1800 F Street, NW",
 "streetAddress2": "",
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
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
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
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
 }
 ]
 },
 {
 "primeFAIN": "1001ZZZ420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "8978",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
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
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
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
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
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
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
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
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
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

## API Contract JSON

### SUBMIT FAATA Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Allowed Values | Required |Description | 
-----|-----------|-------|-------------------|------------|------------  
assistanceFFATAData | JSON Object |NA | NA | NA | NA
assistanceFFATAData.primeEntityInformation | JSON Array | NA| | Yes | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN |  |   | | YeS | This is the Federal Award Identifier Number (FAIN) for the prime grant award. 
reportPeriodMon |  |  | | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | | Yes | This field should reflect the Reporting Year of the report being submitted. 
reportingAgency |  | NA |NA | Yes | The ID of the Federal awarding agency 
treasurySymbol |  | |  | The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
programTitle | | | | No | Program or Project Title 
assistanceFFATAData.primeEntityInformation.recovery_model_questions |  |  | |Yes | Array of the Compensation Questions. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList |  | |  |Yes  | Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
subAwardNumber |  | |  | Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDollars |  | | | Yes | Amount for this award to this sub contractor 
periodOfPerformanceStartDate | | | | Yes| Date subaward was made in YYYY-MM-DD format
uei | | | |  | Yes | Sub Contractor UEI
overallDescription |  | | |   | Yes | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance | JSON Object |NA |NA |Yes | Sub contractor Principal Place of Performance
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess | string | | |  |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess2 | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city | JSON Object |  |  |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>code | string | | | No  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city.<br/>name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state | JSON Object |NA | NA |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>code | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.country | JSON Object | NA | NA | |
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.code | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.zip | string | | | |
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.recovery_model_questions |  | |  | Yes| Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.topPayEmployees |  | |  | Conditional | This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if compensation question 1 is true and compensation question 2 is false
recovery_model_questions.isSelected |  | | | Yes | Boolean value representing the response to the compensation question.
topPayEmployees.full_name |  | NA | NA | Yes if topPayEmployees is required | The full name of the top pay employee
topPayEmployees.salary |  | NA | NA |Yes if topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>


### Submit FAATA Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Allowed Values | Required |Description | 
-----|-----------|-------|-------------------|------------|------------
contractFFATAData | JSON Object | |  |  |  |
contractFFATAData.primeEntityInformation | JSON Array | NA| | |Yes | Information about the prime Contractor. If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractNumber |  |   | | Yes | If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank 
idvReferenceNumber |  |  | | Yes, if the report is for a Task Order on a Contract | If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon |  |  | | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | | Yes | This field should reflect the Reporting Year of the report being submitted. 
reportingAgency |  | NA |NA | Yes | The ID of the Federal awarding agency 
treasurySymbol |  | |  | The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
programTitle | | | | No | Program or Project Title 
contractFFATAData.primeEntityInformation.recovery_model_questions |  |  | |Yes | Array of the Compensation Questions. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList |  | |  |Yes  | Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
subAwardNumber |  | |  | Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDollars |  | | | Yes | Amount for this award to this sub contractor 
periodOfPerformanceStartDate | | | | Yes| Date subaward was made in YYYY-MM-DD format
uei | | | |  | Yes | Sub Contractor UEI
overallDescription |  | | |   | Yes | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance | JSON Object |NA |NA |Yes | Sub contractor Principal Place of Performance
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess | string | | |  |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess2 | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city | JSON Object |  |  |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>code | string | | | No  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city.<br/>name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state | JSON Object |NA | NA |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>code | string | | | | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.country | JSON Object | NA | NA | |
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.code | string | | | | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.zip | string | | | |
contractFFATAData.primeEntityInformation.subAssistanceDataList.recovery_model_questions |  | |  | Yes| Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
contractFFATAData.primeEntityInformation.subAssistanceDataList.topPayEmployees |  | |  | Conditional | This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if compensation question 1 is true and compensation question 2 is false
recovery_model_questions.isSelected |  | | | Yes | Boolean value representing the response to the compensation question.
topPayEmployees.full_name |  | NA | NA | Yes if topPayEmployees is required | The full name of the top pay employee
topPayEmployees.salary |  | NA | NA |Yes if topPayEmployees is required|The total compensation of the top pay employee


<p><small><a href="#">Back to top</a></small></p>

### Update FAATA Report Grant JSON 

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
assistanceFFATAData | JSON Object |NA | NA | NA | NA
assistanceFFATAData.primeEntityInformation | JSON Array | NA| | Yes | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN |  | | Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award. 
reportPeriodMon |  |  | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | Yes | This field should reflect the Reporting Year of the report being submitted. 
reportingAgency |  | NA | Yes | The ID of the Federal awarding agency 
treasurySymbol |  | |  | The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
programTitle | | |  No | Program or Project Title 
assistanceFFATAData.primeEntityInformation.recovery_model_questions |  |  | Yes | Array of the Compensation Questions. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList |  | | Yes  | Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
subAwardNumber |  | |  Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDollars |  | | Yes | Amount for this award to this sub contractor 
periodOfPerformanceStartDate | | | Yes| Date subaward was made in YYYY-MM-DD format
uei | | | Yes | Sub Contractor UEI
overallDescription |  | | Yes | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance | JSON Object | | Yes | Sub contractor Principal Place of Performance
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess2 | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city | JSON Object |  |  |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>code | string | | | No  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city.<br/>name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state | JSON Object |NA | NA |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>code | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.country | JSON Object | NA | NA | |
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.code | string | | | | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.name | string | | |  | 
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.zip | string | | | |
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.recovery_model_questions |  | |  | Yes| Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
assistanceFFATAData.primeEntityInformation.subAssistanceDataList.topPayEmployees |  | |  | Conditional | This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if compensation question 1 is true and compensation question 2 is false
recovery_model_questions.isSelected |  | | Yes | Boolean value representing the response to the compensation question.
topPayEmployees.full_name |  |  | Yes if topPayEmployees is required | The full name of the top pay employee
topPayEmployees.salary |  |  | Yes if topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Update FAATA report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
contractFFATAData | JSON Object |NA | NA | NA 
contractFFATAData.primeEntityInformation | JSON Array | | Yes | Information about the prime Contractor. If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract.
contractNumber |  |   | Yes | If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank 
idvReferenceNumber |  |  | Yes, if the report is for a Task Order on a Contract | If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon |  |  |  Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | Yes | This field should reflect the Reporting Year of the report being submitted. 
reportingAgency |  |  |Yes | The ID of the Federal awarding agency 
treasurySymbol |  | |  The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
programTitle | | | No | Program or Project Title 
contractFFATAData.primeEntityInformation.recovery_model_questions |  |  | Yes | Array of the Compensation Questions. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList |  | | Yes  | Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
subAwardNumber |  | |  Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDollars |  | |  Yes | Amount for this award to this sub contractor 
periodOfPerformanceStartDate | | |Yes| Date subaward was made in YYYY-MM-DD format
uei | | | Yes | Sub Contractor UEI
overallDescription |  | | Yes | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance | JSON Object | |Yes | Sub contractor Principal Place of Performance
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess | string | | |  |  
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>streetAddess2 | string | | |  
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city | JSON Object |  |  |  
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>code | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.city.<br/>name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state | JSON Object | |  |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>code | string | | | | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.state.<br/>name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.country | JSON Object |  |  | |
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.code | string | | | | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.<br/>country.name | string | | |  | 
contractFFATAData.primeEntityInformation.subAssistanceDataList.placeOfPerformance.zip | string | | | |
contractFFATAData.primeEntityInformation.subAssistanceDataList.recovery_model_questions |  | |  | Yes| Array of Compensation questions for the sub contract. There will be 2 questions, and therefore 2 elements in this array
contractFFATAData.primeEntityInformation.subAssistanceDataList.topPayEmployees |  | |  | Conditional | This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if compensation question 1 is true and compensation question 2 is false
recovery_model_questions.isSelected |  | | | Yes | Boolean value representing the response to the compensation question.
topPayEmployees.full_name |  | NA | NA | Yes if topPayEmployees is required | The full name of the top pay employee
topPayEmployees.salary |  | NA | NA |Yes if topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### DELETE FAATA Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
contractFFATAData.primeEntityInformation |  |  |  | Information about the prime Contractor. If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract.
contractNumber |  | | Yes | If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank.
idvReferenceNumber | |  |  |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon |  |  | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | Yes | This field should reflect the Reporting Year of the report being submitted.
reportingAgency |  | | Yes  | The ID of the Federal awarding agency

<p><small><a href="#">Back to top</a></small></p>

### DELETE FAATA Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
assistanceFFATAData.primeEntityInformation |  |  |  | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN |   | |Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award.
reportPeriodMon |  |  | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | Yes | This field should reflect the Reporting Year of the report being submitted.

<p><small><a href="#">Back to top</a></small></p>

##  GET FAATA Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
contractFFATAData.primeEntityInformation |  |  |  | Information about the prime Contractor. If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract.
contractNumber |   | |Yes | If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank.
idvReferenceNumber | |  |  |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon |  |  | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | Yes | This field should reflect the Reporting Year of the report being submitted.
reportingAgency |  | | Yes  | The ID of the Federal awarding agency

<p><small><a href="#">Back to top</a></small></p>

### GET FAATA Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length |Allowed Values | Required | Description
-----|-----------|----------------|----------|------------|-------
assistanceFFATAData.primeEntityInformation |  |  |  |Yes |Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
primeFAIN |   | | |Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award.
reportPeriodMon |  |  | |Yes | This field should reflect the Reporting Month of the report being submitted. Use two digits numbers for the month: 01 - January; 02 - February; 03 - March; 04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportingAgency |  | | |Yes  | The ID of the Federal awarding agency

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="fsrs-bulkupload-api/v1/openapi.yaml" download="OpenAPI">OpenAPI File</a>

## Error Messages

### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error codes may change depending on the error given; document will be updated accordingly.

Error Code|Error Message | Reason/Description
----------|--------------|-------------------
200|Succesfully Submitted | Successful Operation
400|Error processing the request | Invalid JSON format provided
400|primeEntityInformation is required | primeEntityInformation is empty
401|Encountered error authenticating user.Invalid JWT provided | Invalid Authorization Email provided
401|Please provide valid Authorization Email & API Key | API Key and/or Authorization Email is required
401|Insufficient privileges to perform the operation |	Account does not have appropriate privileges to perform the operation
403|You dont have permission to access this resource | Forbidden
404|Requested URL not found	| Not found
405|Insufficient privileges to edit opportunity | Validation exception
500| Internal Server Error please try after sometime | Internal Server Error
501| Invalid request |Not Implemented


<p><small><a href="#">Back to top</a></small></p>

### Specific Error Messages

This section details possible error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.


Error Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
400|contractFFATAData |	Invalid JSON structure. contractFFATAData is required |	contractFFATAData is required |	submitFFATAReport ,updateFFATAReport(Contract)
400|assistanceFFATAData |Invalid JSON structure. assistanceFFATAData is required |	assistanceFFATAData is required	| submitFFATAReport,updateFFATAReport(Grant)
400|primeEntityInformation | Invalid JSON structure: At least one primeEntityInformation is required for contract reporting. | At least one primeEntityInformation element is required for the contract reporting | submitFFATAReport ,updateFFATAReport(Contract)
400|primeEntityInformation | Invalid JSON structure: At least one primeEntityInformation is required for grant reporting. |At least one primeEntityInformation element is required for the grant reporting | submitFFATAReport,updateFFATAReport(Grant)
400|assistanceFFATAData.primeEntityInformation.primeFAIN |Ensure that the FAIN Number is correct. No matching Grant found for the provided FAIN number	| For Grants - FAIN Number not found | submitFFATAReport,updateFFATAReport(Grant)
400|Combination of contractFFATAData.primeEntityInformation.contractNumber and contractFFATAData.primeEntityInformation.reportingAgency | Could not find a record matching the contractNumber and reportingAgency provided	| No record found for the Contract Number and Reporting Agency combination. | submitFFATAReport ,updateFFATAReport(Contract)
400|Combination of contractFFATAData.primeEntityInformation.contractNumber and contractFFATAData.primeEntityInformation.idvReferenceNumber |	Could not find a record associating the IDV reference number with the Contract number	| IDV Reference Number not found associated with the Contract Number |submitFFATAReport ,updateFFATAReport(Contract)
400|Combination of contractNumber:idvReferenceNumber:reportPeriodMon:reportPeriodYear:reportingAgency |	Report Already Exists for the specified Month/Year  - Status: Submitted; Created By - User Name | A FFATA report for this contract already exists in the system for the given reporting period |submitFFATAReport(Contract)
400|Combination of primeFAIN:reportPeriodMon:ReportPeriodYear |	Report Already Exists for the specified Month/Year  - Status: Submitted; Created By - User Name| A FFATA report for this grant already exists in the system for the given reporting period | submitFFATAReport(Grant)
400|idvReferenceNumber is not provided and multiple records are found for the contractNumber and reportingAgency |	Please specify the idvReferenceNumber to correctly identify the contract being reported on	| User needs to specify the idvReferenceNumber to correctly identify the record as multiple records were found for the contractNumber and reportingAgency combination	| submitFFATAReport(Contract)
400|Combination of contractNumber:idvReferenceNumber:reportPeriodMon:reportPeriodYear:reportingAgency |	No Report found for the specified Contract for the Month/Year | Cannot update. A FFATA report for the specified month/year does not exist for the Contract. |updateFFATAReport(Contract)
404|For Contracts - Combination of contractNumber:idvReferenceNumber:reportPeriodMon:reportPeriodYear:reportingAgency
For Grants - Combination of primeFAIN:reportPeriodMon:ReportPeriodYear | No Report found for the specified Grant for the Month/Year | Cannot update. A FFATA report for the specified month/year does not exist for the Grant. | updateFFATAReport(Contract and Grant)
400|contractFFATAData.primeEntityInformation.contractNumber | Contract Number is required for Prime Entity | Contract Number is required for Prime Entity | submitFFATAReport ,updateFFATAReport(Contract)
400|For Contracts | TBD	| The contract does not require FFATA reporting because the dollars obligated is less than $25,000 | submitFFATAReport(Contract)
400|For Contracts contractFFATAData.reportPeriodMon                                                      For Grants assistanceFFATAData.reportPeriodMon | Please specify the month for the reporting period	| reportPeriodMon is required | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|For Contracts contractFFATAData.reportPeriodMon     For Grants assistanceFFATAData.reportPeriodMon | Please provide a valid value for the reporting period month. It is expected to be a 2 digit month (i.e. 01 for January, 10 for October). 	| reportPeriodMon is expecting 2 digit month (i.e. 01 for January, 10 for October) | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|For Contracts contractFFATAData.reportPeriodYear            For Grants assistanceFFATAData.reportPeriodYear| Please specify the reporting period year.	| reportPeriodYear is required.  | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|For Contracts contractFFATAData.reportPeriodYear For Grants assistanceFFATAData.reportPeriodYear | Please provide a valid value for the reporting period year. It is expected to be a 4 digit year	| reportPeriodYear is expecting 4 digit year | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|contractFFATAData.reportingAgency |	Please provide the Federal awarding agency Id |	reportingAgency is required | submitFFATAReport ,updateFFATAReport(Contracts)
400|Please provide the Federal Awarding Agency Id |Please provide the correct format for the Reporting Agency |	reportingAgency provided is invalid. |	submitFFATAReport ,updateFFATAReport(Contracts)
400|contractFFATAData.treasurySymbol |	TBD |	The first 6 characters in the Treasury Account Symbol field are required (i.e. xx-xxxx) |submitFFATAReport ,updateFFATAReport(Contracts)
400|contractFFATAData.treasurySymbol |	TBD |	Invalid Chararacter in Treasury Account Symbol: only alpha number and ()-/. | submitFFATAReport ,updateFFATAReport(Contracts)
400|contractFFATAData.treasurySymbol   | TBD |	Treasury Account Symbol field must not exceed 11 characters (xx-xxxx-xxx), 9 characters and 2 dashes  |	submitFFATAReport ,updateFFATAReport(Contracts)
400|recovery_model_questions |	Please provide the responses to the compensation questions as captured under recovery_model_questions json element |	recovery_model_questions are required  | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|recovery_model_questions |	Compensation Q1 code and response are required |Compensation Q1 code and response are required |submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|recovery_model_questions |	TBD |	Compensation Q2 code and response are required	| submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|recovery_model_questions |	 | Compensation question code provided did not match expected codes |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|recovery_model_questions |	Compensation question isSelected value can only be true or false | Compensation question isSelected value can only be true or false | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList|	Invalid JSON format: At least one Sub-Awardee information is required for the reporting | At least one Sub-Awardee information is required for the reporting | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.subAwardNumber|	Sub-contract number is required | Sub-contract number is required | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.subAwardNumber|	Sub-contract number should be unique across multiple elements of subAwardDataList  | Sub-contract number should be unique across multiple elements of subAwardDataList  | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.subAwardDollars |	Sub-contract Amount is required | Sub-contract Amount is requiredn| submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.subAwardDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.subAwardDollars| Sub-contract Amount should be lower than the Total contract amount | Sub-contract Amount should be lower than the Total contract amount | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.periodOfPerformanceStartDate | Subcontract Date is required | Subcontract Date is required | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.periodOfPerformanceStartDate | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM- DD Format) | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM- DD Format) | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.periodOfPerformanceStartDate | The Subcontract Date cannot be in the future. | The Subcontract Date cannot be in the future. |  submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.uei  subAssistanceDataList.uei | Sub contractor UNIQUE ENTITY ID (SAM) # is required |Sub contractor UNIQUE ENTITY ID (SAM) # is required |  submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.uei  subAssistanceDataList.uei | Sub UNIQUE ENTITY ID (SAM) # must be exactly 12 characters |	Sub UNIQUE ENTITY ID (SAM) # must be exactly 12 characters  | submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.uei  subAssistanceDataList.uei |	TBD |	TBD |	submitFFATAReport ,updateFFATAReport(Contracts)
400|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Sub-contract overall description is required. |	Sub-contract overall description is required. |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.overallDescription   subAssistanceDataList.overallDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performace is required. |	Sub-contract Place of Performace is required. |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - Country is required |	Sub-contract Place of Performance Section - Country is required | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters |	Sub-contract Place of Performance Section - ZIP Code cannot exceed 20 characters | submitFFATAReport ,updateFFATAReport(Contracts and Grants
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |	Only for US addresses: Sub-contract Place of Performance Section - Country is required |  submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance|	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - Country provided is invalid | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	Only for US addresses: Sub-contract Place of Performance Section - State is required |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - State provided is invalid|	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City is required	| Only for US addresses: Sub-contract Place of Performance Section - City is required | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid| Only for US addresses: Sub-contract Place of Performance Section - City provided is invalid | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required | Only for US addresses: Sub-contract Place of Performance Section - ZIP is required |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	Only for US addresses: Sub-contract Place of Performance Section - ZIP provided is invalid |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.topPayEmployees      subAssistanceDataList.topPayEmployees | Sub Top Employer Compensation - fullname and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|subAwardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	submitFFATAReport ,updateFFATAReport(Contracts and Grants)
400|Awardee State | Award Details Section - State is required |State Code is required if the Awardee name is provided instead of ueiSAM# |	Publish
400|Awardee State | Award Details Section - State provided is invalid |State Code provided is invalid |	Publish
400|Awardee City | Award Details Section - City is required |City Code is required if the Awardee name is provided instead of ueiSAM# |	Publish
400|Awardee City | Award Details Section - City provided is invalid |City Code provided is invalid |	Publish
400|Contract Line Item number |	The Contract Line Item number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces	| The Contract Line Item number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces. | Publish
400|Task/Delivery Order Number |	Task/Delivery Order Number max length is 255 characters and allows only alphanumeric and - _ ( ) characters with no spaces	| Task/Delivery Order Number max length is 255 characters and allows only alphanumeric and - _ ( ) characters with no spaces | Publish
400|Point of Contact Type |	$.data.pointOfContact[0].type: does not have a value in the enumeration [primary, secondary, owner] |	Point of Contact Type is required |	Create Opportunity
400|Primary Contact |	Primary Contact is required | Primary Contact is required  for all types except Award| Publish
400|Primary Contact Full Name |	Primary Contact - Full Name is required | Point of Contact Email is required for all types except Award | Publish
400|Primary Contact Full Name |	Primary Contact - Name limit is 500 characters | Point of Contact Name limit is 500 characters | Publish
400|Primary Contact Email |	Primary Contact - Email is required | Point of Contact Email is required for all types except Award | Publish
400|Primary Contact Email |	Primary Contact - Please enter a valid Internet email address. Format: username@host.domain | Primary Contact invalid Email format | Publish
400|Primary Contact Email |	Primary Contact - email character limit is 255 characters | Primary Contact email limit is 255 | Publish
400|Primary Contact Phone |	Primary Contact - phone character limit is 255 characters | Primary Contact phone limit is 255 | Publish
400|Primary Contact Phone |	Primary Contact - fax character limit is 255 characters | Primary Contact fax limit is 255 | Publish
400|Resources -  attType |	Attachment must have AttType of file or link |	Attachment type must be a file or a link |	Create Resource, Create And Publish
400 | Resources - ExplicitAccess | ExplicitAccess is invalid for PackageLevel public | The resources.packageAccessLevel has been set to ‘public’, so the resources.explicitAccess can not be ‘1’. If a ‘1’ is entered, this is a conflict as the file shows one setting for controlled and the other for public | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
400 | Resources - ExplicitAccess | ExplicitAccess is invalid for PackageLevel private | The resources.packageAccessLevel has been set to 'private', so a corresponding '1' MUST appear in the resources.explicitAccess. If anything other then '1' is entered, this is a conflict as the file shows one setting for controlled and the other for public | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
400 | Resources - packageAccessLevel | Invalid package access level, must be public or private | The packageAccessLevel must specify 'public' or 'private'. Any other character will return as error | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
400|Resources - resourceName | Attachment must have a name | Attachment Name is a required field |	Create Resource, Create And Publish
400|Resources - resourceName | File name should have valid file type specified | Attachment Name should have valid file extension |	Create Resource, Update Resource, Create And Publish
400|Resources - resourceName | File name should contain only Alpha numeric characters with spaces, hyphen, underscore and () | Attachment Name can contain only  the allowed character set |	Create Resource, Update Resource, Create And Publish
400|Resources - content |Attachment must have content | File content is missing |	Create Resource, Create And Publish
400|Resources - description | Link Resource must have a description | Link provided is missing description |	Create Resource, Create And Publish
400|Resources - description | Link with the display text {}  already exists | Link with the same description/name already exists on the notice | Create Resource, Update Resource,  Create And Publish
400|Resources - link | Link Resource must have a link | Link URL is missing |	Create Resource, Create And Publish
400|Resources - link | Please enter a valid url. [protocol]://hostname.domain. Protocol can be ftp, http, or https. Spaces are not allowed | Link URL is not valid |	Create Resource, Create And Publish
400|Resources - link | Link {} already exists| Link URL is already added to the notice |	Create Resource, Create And Publish
400|Resources - resourceName | The file type that you are trying to upload is not supported | File extension provided is unsupported |	Create Resource, Create And Publish
400|Resources - resourceName | Attachment with the name {} already exists | File with the same name is already added to the notice |	Create Resource, Create And Publish
400|Resources - content | The file size should be greater than zero bytes and less than 250 MB | File Size doesn't meet the specified limits |	Create Resource, Create And Publish
400|Archive |	This opportunity is not the latest published |	Draft Opportunity cannot be archived	| Archive
400|Archive |	Opportunity already inactive |	Opportunity is already archived	| Archive
400|Update |	Opportunity cannot be updated |	Opportunity is either in draft, archived or cancelled status	| Update
400|Cancel |	This opportunity cannot be cancelled. This opportunity should be published |	This opportunity cannot be cancelled. This opportunity should be published	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is a revision |	This opportunity cannot be cancelled. This opportunity is a revision	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is already inactive |	This opportunity cannot be cancelled. This opportunity is already inactive	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is already cancelled |	This opportunity cannot be cancelled. This opportunity is already cancelled	| Cancel
400|Cancel - Description |	This opportunity cannot be cancelled. The cancel request is missing `Cancellation description` field |	This opportunity cannot be cancelled. The cancel request is missing `Cancellation description` field	| Cancel
400|Uncancel, Delete |	This opportunity is not published |	This opportunity is not published.	| Uncancel, Delete
400|Uncancel |	This opportunity is a revision |	This opportunity is a revision	| Uncancel
400|Uncancel |	This opportunity is not cancelled |	This opportunity is not cancelled	| Uncancel
400|Uncancel -Description |	Description is required |	Description is required	| Uncancel
400|Unarchive |	Opportunity is active |	Active opportunity	| UnArchive
400|Unarchive |	Opportunity is cancelled |	Cancelled opportunity	| UnArchive
400|UnArchive, Uncancel - Archive Date |	New archive date is required |	New archive date is required  |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date |	New archive date provided is in an invalid format |	New archive date provided is in an invalid format |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date|	New archive date provided is in the past |	New archive date provided is before today's date |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date |	New archive type is invalid |	archive type is not one of the following "auto15", "autocustom", "auto30"	| Unarchive, Uncancel
400|UnArchive, Uncancel - Award Date |	New contract award date provided is in the past |	New contract award date provided is in the past | Unarchive, Uncancel
400|UnArchive, Uncancel - Award Date |	New contract award date is not provided |	New contract award date is not provided | Unarchive, Uncancel
400|UnArchive, Uncancel - Response Date |	New response date is required |	Unarchive requires new response date	| UnArchive
400|UnArchive, Uncancel - Response Date |	New response date provided is in an invalid format |	Invalid date format	| UnArchive
400|Delete |	This opportunity cannot be deleted. This opportunity is a revision |	This opportunity cannot be deleted. This opportunity is a revision.	| Delete
400|Delete |	Opportunity has been already deleted |	Opportunity has been already deleted	| Delete
400|Delete |	This opportunity cannot be deleted. The delete request is missing `Delete option` field |	This opportunity cannot be deleted. The delete request is missing `Delete option` field.	| Delete
400|Delete |	This opportunity cannot be deleted. The `Delete option` provided is not supported |	This opportunity cannot be deleted. The `Delete option` provided is not supported.	| Delete
400|Delete |	This opportunity cannot be deleted. The `Delete option` provided is not supported for deleting original published notice. |	This opportunity cannot be deleted. The `Delete option` provided is not supported for deleting original published notice.	| Delete
400|Attachment |	has unknown issue/missing, please remove this attachment and republish. | has unknown issue/missing, please remove this attachment and republish |	Publish
400|Attachment |	is PENDING, please try to publish at a later time | is PENDING, please try to publish at a later time |	Publish
400|Attachment |	is ENCRYPTED, please remove this attachment and republish | is ENCRYPTED, please remove this attachment and republish |	Publish
400|Attachment |	is INFECTED, please remove this attachment and republish | is INFECTED, please remove this attachment and republish |	Publish
400|Attachment |	FILE SIZE GT 250MB or larger, please remove this attachment and republish | FILE SIZE GT 250MB or larger, please remove this attachment and republish |	Publish
400|Attachment |	is a UNSUPPORTED FILE TYPE, please remove this attachment and republish | is a UNSUPPORTED FILE TYPE, please remove this attachment and republish |	Publish
400|Attachment |	Exception occured while trying to validate attachments, Please retry at a later time | Exception occured while trying to validate attachments, Please retry at a later time. |	Publish
400|Attachment |	Unknown type was found for Resource named: | Unknown type was found for Resource named: |	Publish
400|IVL |	This opportunity cannot be published. Interested Vendors List Add is a required field |Interested Vendors List Add is a required |	Publish
400|IVL |	Interested Vendors List Read is a required field. |Interested Vendors List Read is a required field |	Publish
400|IVL |	Interested Vendors List should be enabled for this organization |Interested Vendors List should be enabled for this organization when FORCE ON |	Publish
400|IVL |	Interested Vendors List should not be enabled for this organization |Interested Vendors List should not be enabled for this organization when FORCE OFF |	Publish
400|Revise | Opportunity cannot be updated | An Opportunity cannot be revised if that Opporutnity was revised previously and is currently in draft state  | Revise
400|Vendor Data |	Duplicate request. Vendor is already added as an authorized party on the notice | Request already exists for the vendor on the notice	| AddAuthorizedParty
400|VendorData| fname should not be empty| fname should not be empty| AddAuthorizedParty
400|VendorData| lname should not be empty| lname should not be empty| AddAuthorizedParty
400|VendorData| Email should not be empty| Email should not be empty| AddAuthorizedParty
400|VendorData| ueiSAM should not be empty| ueiSAM should not be empty| AddAuthorizedParty
400|ueiSAM# |	No contact match on vendor data provided	| Not a Valid email or ueiSAM#	| AddAuthorizedParty
404|Opportunity Id,  VendorData	|No request found for the notice and the vendor data provided|	Unable to find a request for the opportunity and vendor details provided.|	Approve or Reject Explicit Access Request By Vendor Data.
401|Authorization|	Error code: 401 ; User does not have sufficient privileges to perform this action|	Invalid API key is used other than write sensitive permission	|Add Authorized Party
400|Authorization	|Error code: 400 ; Duplicate request. Vendor is already added as an authorized party on the notice	| If a party is already added and is being added again by a contract writing individual|	Add Authorized Party
401|Authorization|	Error code: 401 ; Your request did not get processed! Please verify your permission/roles|	If nonfed email id is used in authorization	|Get Authorized Party
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCases) not found	| Requirement Strategies not found |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCase) not found	| Requirement Strategies not found |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCase)not found	| Requirement Strategies not found |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|POP - State | State provided is invalid | When user enters the invalid state code |	Create And Publish
400|POP - Zip Code | Invalid zipcode. Please enter the 5 digit zipcode | When user enters the invalid zip code |	Create And Publish
400|Award section - State | Award Details Section - State provided is invalid | When user enters the invalid state code |	Create And Publish
400|Award section - Zip Code | Award Details Section - Invalid zipcode. Please enter the 5 digit zipcode | When user enters the invalid zip code |	Create And Publish



## FAQ

TBD

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)


## Change Log

Date | Version | Description
--------- | --------------- | ---------
07/15/2023 | v0.1 | Base Version


<p><small><a href="#">Back to top</a></small></p>