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
* The SAM.gov non-federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts widget on their SAM.gov workspace.
* The users will be able to access the System Accounts widget from their Workspace page after logging in. They can then select “New Account” by navigating from the widget and fill out the required sections and submit their System Account. When creating a System Account, users must specify the following to successfully utilize the Subawards API:
	* System Information
   		** System Account Name: Unique name for the System Account
	* Permissions
   		** Subaward Reporting: Write --> Gives access to Create/Update/Delete/Get Subaward Reports.
	* Security Information
		** IP Address: List all the IP Addresses that the System invokes the API from.
		** Type of Connection: REST APIs
* The requested system account will then be sent for an approval. After approval, the user will be notified via an email and they will also be able to see the status of their request in the System Account widget.

#### Generating a System Account API Key
In order to utilize the SubAwards API endpoints, users will need to generate the System account API Key to make API calls.
* Once the system account is approved as per the instructions above, the user can select “Go to System Accounts” in the widget from their workspace and enter a new system account password. 
* After setting up the password for the system account, the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the API Key. 
* This API Key will be used for all API calls as described in this documentation.

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
To be able to perform the various operations provided under the SubAwards API, users will need to have a SAM.gov non-federal user account with either 'Admin' or 'Data Entry' role and 'Create/Edit/Delete Subaward Report' permission.

**Note:** sam.gov is moving towards utilizing OAuth 2.0 workflow leveraging OKTA for Authentication of System Accounts. As a result of this implementation, API Keys will be replaced with the usage of client credentials, namely clientId and secret. Clients will first need to request for the access token, which will then be required to be sent along with the API requests. To support this change, future versions of all APIs outlined in this documentation will be released.

<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta-Data

#### Recovery Model Questions (Compensation Questions)

To submit a SubAward Report, compensation questions for the Prime, as well as sub-awardee need to be responded to. The table below outlines the Compensation Questions and their corresponding codes to be used in the requests.

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Sub-Awardee Question 1| __1__	            | As provided to you by your sub-awardee, in your sub-awardee's business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) receive (1) 80 percent or more of its annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements? |
| Sub-Awardee Question 2| __2__	            | As provided to you by your sub-awardee, does the public have access to information about the compensation of the executives in the sub-awardee's business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) through periodic reports filed under section13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the SubAward Reports.

Code | Value     | Description
-----|-----------------|-----------------
1     | Draft | This status is used when the report has been saved in the system but still need additional updates to pass all validation checks. Note that reports published from the User Interface of sam.gov may be in this status if the user has partially added the report data and needs to add more details before submitting the report.
2     | Published | This status is used when the report has passed all validation checks and has been successfully published.
3     | Reopened | This status is used when updates are needed for a report that is in published status. Until the report is published, and it has passed all validations, it will stay in this status.
4     | Deleted | This status is used for reports that have been deleted by the user. Deleted reports will not be available for general view.

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

v1 versions of APIs will be utilizing the API Key mechanism as outlined in this documentation. Future versions of APIs will be made available to support OAuth 2.0 as soon as possible. The documentation will be updated as soon as more information is available for the oAuth implementation.  

## FSRS SubAward Reporting Bulk Upload API Request and Responses

This API has 8 endpoints as outlined below. 

Endpoint Name | Short Description |
-----|-----------------
Submit SubAward Report (Contracts)     | Can be used to submit SubAward Reports for reporting on one or more Contracts.
Submit SubAward Report (Grants)     | Can be used to submit SubAward Reports for reporting on one or more Grants.
Update SubAward Report (Contracts)     | Can be used to update one or more previously published SubAward Reports for Contracts.
Update SubAward Report (Grants)     | Can be used to update one or more previously published SubAward Reports for Grants.
Delete SubAward Report (Contracts)     | Can be used to delete one or more previously published SubAward Reports for Contracts.
Delete SubAward Report (Grants)     | Can be used to delete one or more previously published SubAward Reports for Grants.
Get SubAward Report (Contracts)     | Can be used to get one or more previously published SubAward Reports for Contracts. 
Get SubAward Report (Grants)     | Can be used to get one or more previously published SubAward Reports for Grants.

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
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Contract JSON](#submit-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was created | As described below

For each sub awardee in the request, the API will process the request as described. If the sub awardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the subaward report for the sub awardee will be created and HTTP Status code 201 will be returned. If the sub awardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status. If any validations fail, then the report is saved in "Draft" status and the validation error messages are sent back as a part of the response body. See the [Response JSON](#response-json) section for the response structure and specific examples.

The API will return other HTTP Status codes in case of any errors as specified in the [General Error Messages](#general-error-messages) section.

#### Examples

<details>
<summary>Example: Submit SubAward Report for multiple Contracts and multiple subawards. Example includes Task Order where IDV Reference number is required, and scenario when Top Pay Employees information is not mandatory to be provided.</summary>
<p>
<code><pre>
{
   "contractData":[
      {
         "contractNumber":"W9123823PTEST",
         "reportingAgencyCode":"2100",
         "idvReferenceNumber":"GSTEST001",
         "referenceAgencyCode":"2147",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardUei":"ABC987654321",
               "subAwardNumber":"2303-TEST-05-0",
               "subawardAmount":"100567.99",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description",
               "placeOfPerformance":{
                  "city":"Alexandria",
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
               "subawardUei":"XYZ987654321",
               "subAwardNumber":"2303-TEST-06-1",
               "subawardAmount":"80000",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description2",
               "placeOfPerformance":{
                  "city":"Brambleton",
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
                     "code":"1",
                     "isSelected":"true"
                  },
                  {
                     "code":"2",
                     "isSelected":"true"
                  }
               ]
            }
         ]
      },
      {
         "contractNumber":"W91238PTESTTWO",
         "reportingAgencyCode":"9700",
         "idvReferenceNumber":"",
         "referenceAgencyCode":"",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardUei":"ABC999999999",
               "subAwardNumber":"9999-TEST",
               "subawardAmount":"80000",
               "subawardDate":"2023-04-28",
               "subawardDescription":"test Description3",
               "placeOfPerformance":{
                  "city":"Atlanta",
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
                     "code":"1",
                     "isSelected":"false"
                  }
               ]
            }
         ]
      }
   ]
}
</pre></code>
</p>
</details>

<details>
<summary>Example: Submit SubAward Report with minimal data. In this case, report will be saved in Draft status and validation errors will be sent back. </summary>
<p>
<code><pre>
{
   "contractData":[
      {
         "contractNumber":"W9123823PTEST",
         "reportingAgencyCode":"2100",
         "idvReferenceNumber":"GSTEST001",
         "referenceAgencyCode":"2147",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardUei":"ABC987654321",
               "subAwardNumber":"",
               "subawardAmount":"",
               "subawardDate":"",
               "subawardDescription":"",
               "placeOfPerformance":{
                  "city":"Alexandria",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "state":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zip":"12345"
               }
            }
         ]
      }
   ]
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
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Grant JSON](#submit-subaward-report-grant-json)

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was successfully created | As described below

The API will return HTTP Status code 201 if the report is saved. If the request passes all validations, then the report is saved in Published status. If any validations fail, then the report is saved in "Work In Progress" status and the validation error messages are sent back as a part of the response body. see [Validation Failure Error Messages](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send an Update SubAward Report (Grants) request to update the report so it can be published successfully.

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
**Summary** | This endpoint can be used to update one or multiple previously published contracts report
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Contract JSON](#submit-subaward-report-contract-json)

Note: For update requests, the subawardReportNumber element in the JSON structure will be required for each subaward report to be updated.

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string |  Report successfully updated| As described below

For each sub awardee in the request, the API will process the request as described. If the sub awardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the subaward report will be updated successfully and HTTP Status code 200 will be returned. If the sub awardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status. If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described below. 
	* If the updates are being performed on a "Draft" report, and there are validation failures, then the report stays in "Draft" status. If there are no validation failures, the report is updated to "Published" status.
 	* If the updates are being performed on a "Published" report, a new subawardReportNumber is assigned to the update request. If there are validation failures, then the report status is set to "Reopened". If there are no validation failures, the new subaward report moves to "Published" status and the previous "Published" report is archived.
  
See the [Response JSON](#response-json) section for the response structure and specific examples.

The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 
<details>
<summary>Example: Update SubAward Report for multiple Contracts and multiple subawards. Example includes Task Order where IDV Reference number is required, and scenario when Top Pay Employees information is not mandatory to be provided.</summary>
<p>
<code><pre>
{
   "contractData":[
      {
         "contractNumber":"W9123823PTEST",
         "reportingAgencyCode":"2100",
         "idvReferenceNumber":"GSTEST001",
         "referenceAgencyCode":"2147",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
               "subawardUei":"ABC987654321",
               "subAwardNumber":"2303-TEST-05-0",
               "subawardAmount":"100567.99",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description",
               "placeOfPerformance":{
                  "city":"Alexandria",
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
               "subawardReportNumber":"45e2fad8-7b43-4b62-a870-45b3f250ea31",
               "subawardUei":"XYZ987654321",
               "subAwardNumber":"2303-TEST-06-1",
               "subawardAmount":"80000",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description2",
               "placeOfPerformance":{
                  "city":"Brambleton",
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
                     "code":"1",
                     "isSelected":"true"
                  },
                  {
                     "code":"2",
                     "isSelected":"true"
                  }
               ]
            }
         ]
      },
      {
         "contractNumber":"W91238PTESTTWO",
         "reportingAgencyCode":"9700",
         "idvReferenceNumber":"",
         "referenceAgencyCode":"",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
               "subawardUei":"ABC999999999",
               "subAwardNumber":"9999-TEST",
               "subawardAmount":"80000",
               "subawardDate":"2023-04-28",
               "subawardDescription":"test Description3",
               "placeOfPerformance":{
                  "city":"Atlanta",
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
                     "code":"1",
                     "isSelected":"false"
                  }
               ]
            }
         ]
      }
   ]
}
</pre></code>
</p>
</details>

<details>
<summary>Example: Submit SubAward Report with minimal data. In this case, report will be saved in Draft status and validation errors will be sent back. </summary>
<p>
<code><pre>
{
   "contractData":[
      {
         "contractNumber":"W9123823PTEST",
         "reportingAgencyCode":"2100",
         "idvReferenceNumber":"GSTEST001",
         "referenceAgencyCode":"2147",
         "programTitle":"Title of the program",
         "subAwardDataList":[
            {
               "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
               "subawardUei":"ABC987654321",
               "subAwardNumber":"",
               "subawardAmount":"",
               "subawardDate":"",
               "subawardDescription":"",
               "placeOfPerformance":{
                  "city":"Alexandria",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "state":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zip":"12345"
               }
            }
         ]
      }
   ]
}	
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update SubAward Report (Grants)


------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/subawards
**Summary** | This endpoint can be used to update one or multiple previously published grants report
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit SubAward Report Grant JSON](#submit-subaward-report-grant-json)

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report successfully updated | As described below

The API will return HTTP Status code 200 if the report is updated successfully. If the request passes all validations, then the report is updated to Published status. If any validations fail, then the report stays in "Work In Progress" status and the validation error messages are sent back as a part of the response body. See [Validation Failure Error Messages](#validation-failure-error-messages) for more information about validation errors. Users are expected to fix the validation errors and send the update request again to update the report so it can be published successfully.

The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 
For examples, refer to Submit SubAward Report (Grants) examples.

<p><small><a href="#">Back to top</a></small></p>

### Delete SubAward Report (Contracts)


------- | -------
**Request Type** | DELETE
**URL** | /acquisition/v1/subawards
**Summary** | This endpoint can be used to delete previously published contracts report(s)
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes |[Refer Delete SubAward Report Contract JSON](#delete-subaward-report-contract-json)

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | As described below

The API will return HTTP Status code 204 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example: Delete request to delete multiple SubAward Reports for Contracts based on status provided</summary>
<p>
<code><pre>
{
  "contractData": [
    {
      "subawardReportNumber": "2fad851e-7b43-4b62-a870-45b3f250ea99",
      "reportStatus": "Published"
    },
    {
      "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea55",
      "reportStatus": "Draft"
    },
    {
      "subawardReportNumber": "41e2fad8-7b43-4b62-a870-45b3f250ea91",
      "reportStatus": "Reopened"
    }		
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Example: Delete request to delete SubAward Reports in all statuses (Published, Reopened) for a Contract when status is not provided</summary>
<p>
<code><pre>
{
  "contractData": [
    {
      "subawardReportNumber": "2fad851e-7b43-4b62-a870-45b3f250ea99",
      "reportStatus": ""
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
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Delete SubAward Report Grant JSON ](#delete-subaward-report-grant-json)

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
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes, at least one contractData element is required. From the fields, at least one field is required | [Refer Get SubAward Report Contract JSON](#get-subaward-report-contract-json) 

#### Examples

<details>
<summary>Get SubAward Reports for a specific contract based on the Subaward Report Number and report status</summary>
<p>
<code><pre>
{
  "contractData": [
    {
      "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
      "reportStatus": "Draft"
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Get all Published SubAward Reports for a specific contract</summary>
<p>
<code><pre>
{
  "contractData": [
    {
      "contractNumber": "ABCDY2324235",
      "reportingAgencyCode": "4700",
      "reportStatus": "Published"
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Get all SubAward Reports for a specific contract</summary>
<p>
<code><pre>
{
  "contractData": [
    {
      "contractNumber": "ABCDY2324235",
      "reportingAgencyCode": "4700"
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Get request for multiple contracts</summary>
<p>
<code><pre>
{
   "contractData":[
      {
         "contractNumber":"ABCDY2324235",
         "reportingAgencyCode":"4700",
         "reportStatus":"Published"
      },
      {
         "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
         "reportStatus":"Draft"
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

Note: Will return JSON response same as POST Request JSON. The generated subAwardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

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
Authorization	| Header | string |	Yes |	Valid and authorized SAM user email ID
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

<p><small><a href="#">Back to top</a></small></p>

## API JSON Structures
### Response JSON

All Subaward API endpoints return a response JSON. The generic structure of the response JSON along with the endpoint specific differences are outlined in the table below:

Response Element | Response Type | Description
-----------------|---------------|------------
 _ | JSON Array | One element for each subaward report in request
id | string | For a contract report, it is the concatenated values of contractNumber, reportingAgency, idvRefrenceNumber, referenceAgencyCode, subAwardNumber, subAwardDate, subAwardAmount and submittedDate separated by ':'. For a Grant report, it is the concatenated value of fainNumber, reportingPeriodMonth and reportingPeriodYear separated by ":". For a GET or DELETE request, if the request is unsuccessful, then it is the concatenated value of the search parameters separated by ":".
statusCode | string | The Http Status code for the subaward report element
transactionId | string | Internal id that sam.gov support team can use to trace issues. Users can provide this to support team in case of any issues with their request
timeStamp | string | Date and time when the request was processed
subawardReportNumber | string | Unique identifier for the subaward report. This id can be used for any subsequent update/delete calls
reportStatus | string | Status of the subaward report. 
message | string | Message indicating status of the operation. Also includes any informative warning messages.
errors | JSON Array | If there are validation errors, they are sent back as a part of this errors array.

Note: To keep the user informed on the actions being done through the API, some descriptive messages will be sent back as a part of the "message" element. This will be done for the Create (POST) and Update (PUT) requests for Contracts. The scenarios when these informational messages will be provided are outlined below:
* When there are existing Subaward Reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date.
* When there are existing Subaward Reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date submitted on the same date.
* When there are existing Subaward Reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date submitted on the same date with the same Subaward amount.
* When the Date of the Subaward provided matches the Date of the Subcontract of the previous Subaward report.
* When the Subaward Amount provided matches the Subaward Amount of the previous Subaward report.
* When the Subaward Amount provided is greater than the total contract value.

#### Examples
<details>
<summary>Example: Create (POST) request for three subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, and third could not be created. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Sub-contract Amount should be lower than the Total contract amount",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "400",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915972",
    "subawardReportNumber": "",
    "reportStatus": "Not Saved",
    "message": "Could not save the report. Please fix the errors and submit again.",
    "errors": [
      "Sub contractor UNIQUE ENTITY ID # is required"
    ]
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example: Update (PUT) request for four subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, third was saved in Reopened status since a Published version already exists for the subawardReportNumber, and fourth report could not be updated. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Sub-contract Amount should be lower than the Total contract amount",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Reopened",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Sub-contract Amount should be lower than the Total contract amount"
    ]
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "400",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915972",
    "subawardReportNumber": "",
    "reportStatus": "Not Saved",
    "message": "Could not save the report. Please fix the errors and submit again.",
    "errors": [
      "No report found matching the specified parameters for the report."
    ]
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example: Delete (DELETE) request for a subaward report when only the subawardReportNumber was provided, Published and Reopened reports existed and both were deleted successfully. One element is returned for each deleted report. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully deleted.",
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Reopened",
    "message": "Report was successfully deleted.",
    "errors": []
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example: Delete (DELETE) request for two subaward reports. First was a Draft report that was successfully Deleted, and second delete request was not successful. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "28e1fad9-7b43-4b62-a870-45b3f250ea32",
    "reportStatus": "Draft",
    "message": "Report was successfully deleted.",
    "errors": []
  },
  {
    "id": "search params concatenated",
    "statusCode": "400",
    "transactionId": null,
    "timeStamp": "2024-02-25T16:58:09.183947300",
    "message": "The report could not be deleted. Please fix the errors and submit the delete request again.",
    "errors": [
      "Please provide a valid value for the report status. It can be Draft, Published, Reopened or left blank."
    ]
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example: Get (POST) request for a contract with 2 subaward reports, when the request is successful. One element is returned for each subaward report.</summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "200",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": {
      "contractData": [
        {
          "contractNumber": "string",
          "reportingAgencyCode": "string",
          "idvReferenceNumber": "string",
          "referenceAgencyCode": "string",
          "programTitle": "string",
          "subAwardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subAwardUei": "string",
              "subAwardNumber": "string",
              "subAwardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "state": {
                  "code": "string",
                  "name": "string"
                },
                "zip": "string"
              },
              "recovery_model_questions": [
                {
                  "code": "1",
                  "isSelected": true
                },
                {
                  "code": "2",
                  "isSelected": false
                }
              ],
              "topPayEmployees": [
                {
                  "full_name": "sub1",
                  "salary": "100"
                },
                {
                  "full_name": "sub2",
                  "salary": "200"
                },
                {
                  "full_name": "sub3",
                  "salary": "300"
                },
                {
                  "full_name": "sub4",
                  "salary": "400"
                },
                {
                  "full_name": "sub5",
                  "salary": "500"
                }
              ]
            }
          ]
        }
      ]
    },
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subAwardNumber:subAwardDate:subAwardAmount:submittedDate",
    "statusCode": "200",
    "transactionId": "58e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "71e2fad8-7b43-4b62-a870-45b3f250ea98",
    "reportStatus": "Published",
    "message": {
      "contractData": [
        {
          "contractNumber": "string",
          "reportingAgencyCode": "string",
          "idvReferenceNumber": "string",
          "referenceAgencyCode": "string",
          "programTitle": "string",
          "subAwardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subAwardUei": "string",
              "subAwardNumber": "string",
              "subAwardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "state": {
                  "code": "string",
                  "name": "string"
                },
                "zip": "string"
              },
              "recovery_model_questions": [
                {
                  "code": "1",
                  "isSelected": false
                }
              ]
            }
          ]
        }
      ]
    },
    "errors": []
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example: Get (POST) request for a contract with 2 subaward reports, when the request is not successful for both for different reasons. One element is returned for each subaward report.</summary>
<p>
<code><pre>
[
  {
    "id": "search params concatenated",
    "statusCode": "400",
    "transactionId": "c4aa7163-03fb-40e2-9234-9c8f0fcd9947",
    "timeStamp": "2024-02-28T20:23:32.672006",
    "message": "No data matching the search criteria found",
    "errors": []
  },
  {
    "id": "search params concatenated",
    "statusCode": "400",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915972",
    "message": "Could not retrieve the report. Please fix the errors and try again.",
    "errors": [
      "Please provide a valid value for the reporting period month. It is expected to be a 2 digit month"
    ]
  }
]
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Submit SubAward Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Required |Description 
-----|-----------|-------|------------|------------
contractData | JSON Array | NA|Yes|Information about the prime Contractor and the subaward report(s). If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractData Details| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the Federal awarding agency as from FPDS-NG
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task Order on a Contract |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the Federal awarding agency associated with the IDV Reference Number
contractData.programTitle | string || No | Program or Project Title 
contractData.subAwardDataList |string  ||Yes  |Information about the sub Awardees. If the report is being submitted for multiple sub awardees, then this array will have multiple elements, one for each of the sub Awardee.
contractData.subAwardDataList Details | | | | 
subAwardDataList.subawardReportNumber | string | 13 characters | Yes, for an update request (PUT) to update a report. | The id of the subaward report. Will be blank/ignored for a POST request to create a subaward report. 
subAwardDataList.subAwardUei | string | 13 characters | Yes | Sub Awardee UEI
subAwardDataList.subAwardNumber | string |32 characters  | Yes | Number assigned by the Prime Contractor to track this sub-contract
subAwardDataList.subAwardAmount |string  |32 characters | Yes | Amount for this award to this sub Awardee 
subAwardDataList.subawardDate |string |TIMESTAMP | Yes| Date subaward was made in YYYY-MM-DD format
subAwardDataList.subawardDescription |string  || Yes | Describes the contract requirements. This is from FPDS.
subAwardDataList.placeOfPerformance | JSON Object |NA |Yes | Sub Awardee Principal Place of Performance
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
primeEntityInformation.reportPeriodMon | string | 10 characters  | Yes | This field should reflect the Reporting Month of the report being published. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
primeEntityInformation.reportPeriodYear | string  | 10 characters | Yes | This field should reflect the Reporting Year of the report being published. 
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
contractData | JSON Array  | | Yes, at least one element in the array is required. At least one field is required for the fields in each element. | Information about the report to be deleted. If there are multiple reports to be deleted, then this array will have multiple elements, one for each of the delete requests.
contractData.subAwardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the sub-contract. This is returned as a part of the response for the Create, Update and Get calls for the subaward report.
contractData.reportStatus | string |32 characters  | No | The status of the report to be deleted. If no status is provided, then all associated reports (in all statuses) will be deleted.

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
contractData | JSON Array | NA|Yes|Information about the prime Contractor and the subaward report(s). If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractData Details| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the Federal awarding agency as from FPDS-NG
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task Order on a Contract |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the Federal awarding agency associated with the IDV Reference Number
contractData.subAwardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the sub-contract. This is returned as a part of the response for the Create, Update calls for the subaward report.
contractData.reportStatus | string |32 characters  | No | The status of the report to be retrieved.

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
401	|	Encountered error authenticating user. Invalid JWT provided	|	Invalid Authorization Email provided	|	All |
403	|	You do not have permissions to access this resource	|	Account does not have appropriate privileges to perform the operation	|	All |
404	|	Requested URL not found	|	Not found	|	All |
500	|	Internal Server Error encountered. Please try after sometime	|	Internal Server Error	|	All |
501	|	Invalid request	|	Not Implemented	|	All |
400	|	Error processing the request	|	Invalid JSON format provided	|	All |
400	|	Invalid JSON structure. assistanceData is required	|	The assistanceData element is required in the request body.	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Invalid JSON structure: At least one contractData is required for contract reporting.	|	Request Body JSON structure is invalid. At least one contractData.contractData element is required for contract reporting	|	All (Contracts) |
400	|	Invalid JSON structure: At least one primeEntityInformation is required for grant reporting.	|	Request Body JSON structure is invalid. At least one assistanceData.primeEntityInformation element is required for  grant reporting	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Ensure that the FAIN Number is correct. No matching Grant found for the provided FAIN number	|	As provided in assistanceData.primeEntityInformation.primeFAIN, FAIN Number not found	|	submitSubAwardReport,updateSubAwardReport(Grants) |
400	|	Could not find a record matching the contractNumber and reportingAgencyCode provided	|	No record found for the Contract Number and Reporting Agency Code combination (Combination of contractData.contractNumber and contractData.reportingAgencyCode in the Request Body).	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Could not find a record associating the IDV reference number with the Contract number	|	IDV Reference Number not found associated with the Contract Number (Combination of contractData.contractData.contractNumber and contractData.contractData.idvReferenceNumber)	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Report Already Exists for the specified Month/Year  - Status: Submitted; Created By - User Name	|	A SubAward report for this grant already exists in the system for the given reporting period (Combination of primeFAIN:reportPeriodMon:ReportPeriodYear)	|	submitSubAwardReport(Grants) |
400	|	Please specify the idvReferenceNumber to correctly identify the contract being reported on	|	User needs to specify the idvReferenceNumber to correctly identify the record as multiple records were found for the contractNumber and reportingAgency combination	|	submitSubAwardReport(Contracts) |
400	|	Cannot update. A SubAward report for the specified month/year does not exist for the Grant.	|	No Report found for the specified Grant for the Month/Year. Combination of primeFAIN:reportPeriodMon:ReportPeriodYear	|	updateSubAwardReport(Grants) |
400	|	Contract Number is required for Prime Entity	|	contractData.contractNumber was not provided.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Reporting period month is required for Prime Entity	|	For Grants assistanceData.reportPeriodMon is a required field.	|	submitSubAwardReport ,updateSubAwardReport (Grants) |
400	|	Please provide a valid value for the reporting period month. It is expected to be a 2 digit month	|	reportPeriodMon is expected as a 2 digit number (01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December)	|	submitSubAwardReport ,updateSubAwardReport(Grants) |
400	|	Reporting period year is required for Prime Entity.	|	For Grants, assistanceData.reportPeriodYearreportPeriodYear is a required field.	|	submitSubAwardReport ,updateSubAwardReport(Grants) |
400	|	Please provide a valid value for the reporting period year. It is expected to be a 4 digit year	| For Grants, assistanceData.reportPeriodYear should be a 4 digit year.	|	submitSubAwardReport ,updateSubAwardReport(Grants) |
400	|	Please provide the Federal awarding Agency Code	|	contractData.reportingAgencyCode is a required field.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	Please provide the correct format for the Federal awarding Agency Code	|	contractData.reportingAgencyCode provided is invalid.	|	submitSubAwardReport ,updateSubAwardReport(Contracts) |
400	|	At least one contractData element is required for the contract reporting	|	At least one contractData element is required for the contract reporting	|	getSubAwardReport(Contracts) |
400	|	At least one primeEntityInformation element is required for the grant reporting	|	At least one primeEntityInformation element is required for the grant reporting	|	getSubAwardReport(Grants) |
400	|	Sub contractor UNIQUE ENTITY ID # is required	|	Sub contractor UNIQUE ENTITY ID # is required	|	submitSubAwardReport ,updateSubAwardReport(Contracts and Grants) |
400	|	At least one search criteria needs to be specified. One of contractNumber, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber,subawardReportNumber	|	contractNumber, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber and subawardReportNumber are missing for at least one element in the request	|	getSubAwardReport(Contracts and Grants) |
400	|	At least one search criteria needs to be specified. One of primeFAIN, reportPeriodMon, reportPeriodYear	|	primeFAIN, reportPeriodMon and reportPeriodYear are missing for at least one element in the request.	|	getSubAwardReport(Contracts and Grants) |
400	|	At least one contractData element is required for deleting	|	At least one contractData element is required for deleting	|	deleteSubAwardReport(Contracts) |
400	|	At least one primeEntityInformation element is required for deleting	|	At least one primeEntityInformation element is required for deleting	|	deleteSubAwardReport(Grants) |
400	|	No report found matching the specified parameters for the report	|	No report found matching the specified parameters for the report.	|	deleteSubAwardReport(Contracts and Grants) |

<p><small><a href="#">Back to top</a></small></p>

### Validation Failure Error Messages

This section details possible validation failure error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.

HTTP Status Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
201|subAwardDataList|	Invalid JSON format: At least one Sub-Awardee information is required for the reporting | At least one Sub-Awardee information is required for the reporting | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardNumber|	Sub-contract number is required | Sub-contract number is required | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardNumber|	Sub-contract number should be unique across multiple elements of subAwardDataList  | Sub-contract number should be unique across multiple elements of subAwardDataList  | submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars |	Sub-contract Amount is required | Sub-contract Amount is requiredn| submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars |	Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Sub-contract Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| submitSubAwardReport(Contracts)
201|subAwardDataList.subAwardDollars| Sub-contract Amount should be lower than the Total contract amount | Sub-contract Amount should be lower than the Total contract amount | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | Subcontract Date is required | Subcontract Date is required | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subcontract for subcontractor:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubAwardReport(Contracts)
201|subAwardDataList.periodOfPerformanceStartDate | The Subcontract Date cannot be in the future. | The Subcontract Date cannot be in the future. |  submitSubAwardReport(Contracts)
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

<p><small><a href="#">Back to top</a></small></p>

## FAQ

TBD

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
--------- | --------------- | ---------
07/15/2023 | v0.1 | Base Version
10/12/2023 | v0.2 | Updates to GET calls and minor cosmetic changes
11/10/2023 | v0.3 | Updates to remove FFATA and use SubAwards
03/06/2024 | v0.4 | Updates to align with new Data Model


<p><small><a href="#">Back to top</a></small></p>
