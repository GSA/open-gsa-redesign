---
title: SAM.gov Subaward reporting Bulk Upload API 
banner-heading: SAM.gov Subaward reporting Bulk Upload API
---

## Overview 

The API for Federal Funding Accountability and Transparency Act (FFATA) Reporting will allow Prime awardees (i.e. prime contractors and prime assistance recipients) to report subaward and executive compensation data regarding their first-tier Subawards to meet the FFATA reporting requirements. Using this API, the users will be able to file multiple Subaward reports at once. 

**NOTE:** The specifications on this page are for a future API.  Check back here or be in contact with IAE for the release date and testing session.

**API Version: v1.0**

## Getting Started

Subaward reporting Bulk Upload API can be accessed from Production or Alpha via the following endpoints:

* Production: https://api.sam.gov
* Alpha: https://api-alpha.SAM.gov

### Authentication and Authorization

To begin using this API, you will need to register for a System Account and obtain an API Key. After registration, you will need to provide this API key in the <i>x-api-key</i> HTTP header with every API request.
* To request a System account wiht permission to use the Subaward APIs, the user must first create a user account in SAM.gov and request a "Non-Federal System Administrator" via FSD.
* A user will be able to access the System Accounts widget from their Workspace page after logging in. They can then select “New Account” by navigating from the widget and fill out the required sections and submit their System Account. When creating a System Account, the user must specify the following to successfully utilize the Subaward API:
	* System Information
   		** System Account Name: Unique name for the System Account
	* Permissions
   		** Subaward reporting: Write --> Gives access to Create/Update/Delete/s.
	* Security Information
		** IP Address: List all the IP Addresses that the System invokes the API from.
		** Type of Connection: REST APIs
* The requested system account will be sent for approval. Upon approval, the user will be notified via an email and will be able to see the status of their request in the System Account widget.

**NOTE:** If user does not have the “Non-Federal System Administrator” user role in SAM.gov, they will be able to request for a new system account, however, the user account will not have the permissions required to access the Subaward endpoints. Therefore, getting this user role is a prerequisite.

#### Generating a System Account API Key
In order to utilize the Subaward API endpoints, users will need to generate the System account API Key to make API calls.
* Once the system account is approved, as per the instructions above, the user can select their System account from the Tier2 workspace and access the API key and Password section to set up new system account password
* After setting up the password for the system account, the user will see a new section for generating a system account API Key. The user must enter their password again to generate the API Key
* The user will have the option to copy the API key to their clipboard to store the key
* The API key will be hidden at all times and the user will need to enter the system account password to reveal the key
* The API keys have a validity of 90 days and a new key will be auto generated at 75 days. For a period of 15 days 76th to 90th day) both the old and new keys remain active and will be visible for the user to use. You must ensure that the new keys are rotated on your API call during this time
* This API Key will be used for all API calls as described in this documentation

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
To be able to perform the various operations provided under the Subaward API, a user will require a SAM.gov non-federal user account with either 'Admin' or 'Data Entry' role and 'Create/Edit/Delete Subaward report' permission.

<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta-Data

#### Recovery Model Questions (Compensation Questions) - Contract Subaward Reports

To submit a Contract Subaward report, compensation questions for the Prime, as well as Subcontractor will need to be responded to. The tables below outlines the Compensation Questions and their corresponding codes to be used in the requests.

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Subcontractor Question 1| __1__	            | As provided to you by your subcontractor, in your subcontractor’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive $25,000,000 or more in annual gross revenues from Federal contracts (and subcontracts), loans, grants (and subgrants), cooperative agreements, and other forms of Federal financial assistance? |
| Subcontractor Question 2| __2__	            | As provided to you by your subcontractor, in your subcontractor’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive 80 percent or more of its annual gross revenues from Federal contracts (and subcontracts), loans, grants (and subgrants), cooperative agreements, and other forms of Federal financial assistance?|
| Subcontractor Question 3| __3__	            | As provided to you by your subcontractor, does the public have access to information about the compensation of the executives in the subcontractor's business or organization (the legal entity to which the Unique Entity ID (SAM) it provided belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

#### Recovery Model Questions (Compensation Questions) - Assistance Subaward Reports

To submit an Assistance Subaward report, compensation questions for the Prime, as well as Subrecipient will need to be responded to. The tables below outlines the Compensation Questions and their corresponding codes to be used in the requests.

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Subrecipient Question 1| __1__	            | As provided to you by your subrecipient, in your subrecipient’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive $25,000,000 or more in annual gross revenue from Federal procurement contracts (and subcontracts) and Federal awards (and subawards) subject to the Transparency Act, as defined at § 170.300? |
| Subrecipient Question 2| __2__	            | As provided to you by your subrecipient, in your subrecipient’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive 80 percent or more of its annual gross revenue in Federal procurement contracts (and subcontracts) and Federal awards (and subawards) subject to the Transparency Act, as defined at § 170.300?|
| Subrecipient Question 3| __3__	            | As provided to you by your subrecipient, does the public have access to information about the compensation of the executives in the subrecipient’s business or organization (the legal entity to which the Unique Entity ID (SAM) it provided belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the Subaward reports.

Code | Value     | Description
-----|-----------------|-----------------
1     | Draft | This status is used when the report has been saved in the system but still requires additional updates to pass all validation checks. NOTE: The reports saved from the User Interface of SAM.gov may also be in this status if the user has partially added the report data and needs to add more details before submitting the report.
2     | Published | This status is used when the report has passed all validation checks and has been successfully published (submitted).
3     | Reopened | This status is used when updates are needed for a report that is in "Published" status. Until the report has passed all validations and is published again, it will stay in this status.
4     | Deleted | This status is used for reports that have been deleted by the user. NOTE: Deleted reports will not be available for general view.

<p><small><a href="#">Back to top</a></small></p>

## GENC Standardization
SAM.gov uses the "GENC Standardization" of country and administrative data to ensure there are no countries or states currently being inserted into SAM that are not correctly vetted and recognized by the United States. To ensure any country/state data entered by the Users through Subaward reporting meets the standard, validations will be run when receiving this data. Please refer to the error messages section for specific details for these errors.

Refer : 
https://geonames.nga.mil/geonames/GeographicNamesSearch/

API Fields

Field Name | Data Source  | Valid Statuses  | Input Type
---------------|------------|----------|------------
Country Code |  Country_Code MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources | Active, Inactive (GET calls Only) | Three (3) characters
Country Name |  fullName MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources |   | TEXT
State | State MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources   | Listed from the selected country | Two (2) characters

<p><small><a href="#">Back to top</a></small></p>

## Version Control

All API v1 versions will utilize the API Key mechanism as outlined in this documentation. 

## FSRS Subaward reporting Bulk Upload API Request and Responses

This API has 10 endpoints as outlined below. 

Endpoint Name | Short Description |
-----|-----------------
Submit Subcontract report (Contracts)     | Used to submit one or more Subaward reports for reporting on one (or more) Contracts.
Submit Subaward report (Assistance)     | Used to submit one or more Subaward reports for reporting on one (or more) Assistance awards.
Update Subcontract report (Contracts)     | Used to update a previously published Subaward report for a Contract.
Update Subaward report (Assistance)     | Used to update a previously published Subaward report for an Assistance award.
Delete Subcontract report (Contracts)     | Used to delete Subaward report for a Contract.
Delete Subaward report (Assistance)     | Used to delete Subaward reports for an Assistance award.
Get Subcontract report (Contracts)     | Used to get details for a Subaward report for a Contract. 
Get Subaward report (Assistance)     | Used to get details for a Subaward report for an Assistance award.
Search Subcontract report (Contracts)     | Used to get Subaward reports for Contracts based on optional search criteria. 
Search Subaward report (Assistance)     | Used to get Subaward reports for Assistance awards based on optional search criteria.

The following section describes each of the above endpoints in detail.

### Submit Subcontract report (Contracts)

------- | ------- |
**Request Type** | POST 
**URL** | /contract/v1/subcontracts
**Summary** | A User will be able to submit one or multiple Subcontract reports for Contracts using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subcontract report Contract JSON](#submit-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
201 Created | string | At least one subcontract report was created 
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

For details on specific error messages under each of the above status codes, refer to the [General Error Messages](#general-error-messages) section. 

Note: Even if some subcontract reports fail to process, the overall status code will be 201 if at least one subcontract report is processed successfully.

The API will handle each subcontract report in the request as below:
* If a subcontract report request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status.  
* If any validations fail, then the report is saved in "Draft" status and the validation error messages are sent back as a part of the response body. 

The overall response will be a JSON array containing the status of each subcontract report in the request. See the [Response JSON](#response-json) section for the response structure and specific examples. 

#### Examples

<details>
<summary>Example 1: Submit Subcontract report for multiple Contracts and multiple Subcontracts under them. Example includes Task Order where IDV Reference number is required, and scenario when Top Pay Employees information for the Subcontractor is not mandatory to be provided.</summary>
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
         "subawardDataList":[
            {
               "subawardUEI":"ABC987654321",
               "subawardNumber":"2303-TEST-05-0",
               "subawardAmount":"100567.99",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description",
               "placeOfPerformance":{
                  "city":"Alexandria",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "stateOrProvince":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"123456789"
               },
               "recoveryModelQuestions":[
                  {
                     "code":"1",
                     "isSelected":"true"
                  },
                  {
                     "code":"2",
                     "isSelected":"false"
                  },
                  {
                     "code":"3",
                     "isSelected":"false"
                  }
               ],
               "topPayEmployees":[
                  {
                     "fullName":"John White",
                     "salary":"100000"
                  },
                  {
                     "fullName":"Employee Green",
                     "salary":"120000"
                  },
                  {
                     "fullName":"Employee Red",
                     "salary":"96000"
                  },
                  {
                     "fullName":"Employee Orange",
                     "salary":"250000"
                  },
                  {
                     "fullName":"Employee Blue",
                     "salary":"290000"
                  }
               ]
            },
            {
               "subawardUEI":"XYZ987654321",
               "subawardNumber":"2303-TEST-06-1",
               "subawardAmount":"80000",
               "subawardDate":"2023-05-14",
               "subawardDescription":"test Description2",
               "placeOfPerformance":{
                  "city":"Brambleton",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "stateOrProvince":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"678901234"
               },
               "recoveryModelQuestions":[
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
         "contractNumber":"W9123823PTESTCHILD",
         "reportingAgencyCode":"9700",
         "programTitle":"Title of the program",
         "subawardDataList":[
            {
               "subawardUEI":"ABC999999999",
               "subawardNumber":"9999-TEST",
               "subawardAmount":"80000",
               "subawardDate":"2023-04-28",
               "subawardDescription":"test Description3",
               "placeOfPerformance":{
                  "city":"Atlanta",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "stateOrProvince":{
                     "code":"GA",
                     "name":"Georgia"
                  },
                  "zipPlus4":"12345"
               },
               "recoveryModelQuestions":[
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
<summary>Example 2: Submit Subcontract report with partial data. In this case, the report will be saved in Draft status and validation errors will be sent back. </summary>
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
         "subawardDataList":[
            {
               "subawardUEI":"ABC987654321",
               "placeOfPerformance":{
                  "city":"Alexandria",
                  "country":{
                     "code":"USA",
                     "name":"UNITED STATES"
                  },
                  "stateOrProvince":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"12345"
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

### Submit Subaward report (Assistance)

------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards
**Summary** | A user will be able to submit one or multiple Subaward reports for Assistance awards using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1


#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Assistance JSON](#submit-subaward-report-grant-json)

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
201 Created | string | At least one subrecipient report was created 
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

For details on specific error messages under each of the above status codes, refer to the [General Error Messages](#general-error-messages) section. 

Note: Even if some subrecipient reports fail to process, the overall status code will be 201 if at least one subrecipient report is processed successfully.

The API will handle each subrecipient report in the request as below:
* If a subrecipient report request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status.  
* If any validations fail, then the report is saved in "Draft" status and the validation error messages are sent back as a part of the response body. 

The overall response will be a JSON array containing the status of each subrecipient report in the request. See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Submit Assistance Subaward report for multiple Assistance awards and their Subawards. Example includes scenario when Top Pay Employees information for the Subawardee is not mandatory to be provided.</summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "fain": "1001KS1420",
      "agencyCode": "9999",
      "subawardDataList": [
        {
          "subawardNumber": "XX-YY-00008",
          "uei": "ABC123456789",
          "subawardAmount": "100000",
          "subawardDate": "2010-10-01",
          "subawardDescription": "My Description",
          "placeOfPerformance": {
            "city": "Alexandria",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvince": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "123456789"
          },
          "recoveryModelQuestions": [
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
              "fullName": "John White",
              "salary": "100000"
            },
            {
              "fullName": "Employee Green",
              "salary": "120000"
            },
            {
              "fullName": "Employee Red",
              "salary": "96000"
            },
            {
              "fullName": "Employee Orange",
              "salary": "250000"
            },
            {
              "fullName": "Employee Blue",
              "salary": "290000"
            }
          ]
        }
      ]
    },
    {
      "fain": "1001ZZZ420",
      "subawardDataList": [
        {
          "subawardNumber": "XX-YY-12345",
          "uei": "zzz123456789",
          "subawardAmount": "150000",
          "subawardDate": "2023-04-17",
          "subawardDescription": "My Description",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvince": {
              "code": "GA",
              "name": "Georgia"
            },
            "zipPlus4": "123456789"
          },
          "recoveryModelQuestions": [
            {
              "code": "3",
              "isSelected": "false"
            }
          ]
        },
        {
          "subawardNumber": "AA-YY-12345",
          "uei": "XYZ123456789",
          "subawardAmount": "150055",
          "subawardDate": "2023-04-17",
          "subawardDescription": "My Description",
          "placeOfPerformance": {
            "city": "Brambleton",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvince": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "678901234"
          },
          "recoveryModelQuestions": [
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
</pre></code>
</p>
</details>

<details>
<summary>Example 2: Submit Subaward Assistance Report with partial data. In this case, the report will be saved in Draft status and validation errors will be sent back. </summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "fain": "1001ZZZ420",
      "subawardDataList": [
        {
          "subawardNumber": "",
          "uei": "zzz123456789",
          "subawardAmount": "",
          "subawardDate": "",
          "subawardDescription": "",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvince": {
              "code": "GA",
              "name": "Georgia"
            },
            "zipPlus4": "123456789"
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

### Update Subcontract report (Contracts)

------- | -------
**Request Type** | PUT
**URL** | /contract/v1/subcontracts/{subawardReportNumber}
**Summary** | A user will be able to update a subcontract report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subcontract report Contract JSON](#submit-subaward-report-contract-json)

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report was updated
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

For details on specific error messages under each of the above status codes, refer to the [General Error Messages](#general-error-messages) section. 

The API will handle the subcontract report in the request as below:
* If the request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, the report status is updated as described below:
	* If the update are being performed on a "Draft" report, then the report is updated to "Published" status
 	* If the updates are being performed on a "Published" report, then a new report record is created in "Published" status and the previous "Published" record for the report is archived.
* If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described below:
	* If the updates are being performed on a "Draft" report, then the report stays in "Draft" status
 	* If the updates are being performed on a "Published" report, a new report record is created in "Reopened" status and the previous "Published" record stays.
  
See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples: 
<details>
<summary>Example 1: Update a Subcontract report with all required information.</summary>
<p>
<code><pre>
{
   "contractData":{
      "contractNumber":"W9123823PTEST",
      "reportingAgencyCode":"2100",
      "idvReferenceNumber":"GSTEST001",
      "referenceAgencyCode":"2147",
      "programTitle":"Title of the program",
      "subawardData":{
         "subawardUEI":"ABC987654321",
         "subawardNumber":"2303-TEST-05-0",
         "subawardAmount":"100567.99",
         "subawardDate":"2023-05-14",
         "subawardDescription":"test Description",
         "placeOfPerformance":{
            "city":"Alexandria",
            "country":{
               "code":"USA",
               "name":"UNITED STATES"
            },
            "stateOrProvince":{
               "code":"VA",
               "name":"Virginia"
            },
            "zipPlus4":"123456789"
         },
         "recoveryModelQuestions":[
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
               "fullName":"John White",
               "salary":"100000"
            },
            {
               "fullName":"Employee Green",
               "salary":"120000"
            },
            {
               "fullName":"Employee Red",
               "salary":"96000"
            },
            {
               "fullName":"Employee Orange",
               "salary":"250000"
            },
            {
               "fullName":"Employee Blue",
               "salary":"290000"
            }
         ]
      }
   }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 2: Update Subcontract report with partial data. In this case, the report will be saved in Reopened status and validation errors will be sent back. </summary>
<p>
<code><pre>
{
   "contractData":{
      "contractNumber":"W9123823PTEST",
      "reportingAgencyCode":"2100",
      "idvReferenceNumber":"GSTEST001",
      "referenceAgencyCode":"2147",
      "programTitle":"Title of the program",
      "subawardDataList":{
         "subawardUEI":"ABC987654321",
         "subawardNumber":"",
         "subawardAmount":"",
         "subawardDate":"",
         "subawardDescription":"",
         "placeOfPerformance":{
            "city":"Alexandria",
            "country":{
               "code":"USA",
               "name":"UNITED STATES"
            },
            "stateOrProvince":{
               "code":"VA",
               "name":"Virginia"
            },
            "zipPlus4":"123456789"
         }
      }
   }
}	
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update Subaward report (Assistance)

------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | Used to update a Assistance subaward report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Assistance JSON](#submit-subaward-report-grant-json)

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subrecipient report was updated
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

For details on specific error messages under each of the above status codes, refer to the [General Error Messages](#general-error-messages) section. 

The API will handle the subrecipient report in the request as below:
* If the request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, the report status is updated as described below:
	* If the update are being performed on a "Draft" report, then the report is updated to "Published" status
 	* If the updates are being performed on a "Published" report, then a new report record is created in "Published" status and the previous "Published" record for the report is archived.
* If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described below:
	* If the updates are being performed on a "Draft" report, then the report stays in "Draft" status
 	* If the updates are being performed on a "Published" report, a new report record is created in "Reopened" status and the previous "Published" record stays.
  
See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples: 

<details>
<summary>Example 1: Update Assistance Subaward report with all required information.</summary>
<p>
<code><pre>
{
   "assistanceData":{
      "fain":"1001KS1420",
      "subawardDataList":{
         "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
         "subawardNumber":"XX-YY-00008",
         "uei":"ABC123456789",
         "subawardAmount":"100000",
         "subawardDate":"2010-10-01",
         "subawardDescription":"My Description",
         "placeOfPerformance":{
            "city":"Alexandria",
            "country":{
               "code":"USA",
               "name":"UNITED STATES"
            },
            "stateOrProvince":{
               "code":"VA",
               "name":"Virginia"
            },
            "zipPlus4":"123456789"
         },
         "recoveryModelQuestions":[
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
               "fullName":"John White",
               "salary":"100000"
            },
            {
               "fullName":"Employee Green",
               "salary":"120000"
            },
            {
               "fullName":"Employee Red",
               "salary":"96000"
            },
            {
               "fullName":"Employee Orange",
               "salary":"250000"
            },
            {
               "fullName":"Employee Blue",
               "salary":"290000"
            }
         ]
      }
   }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 2: Update Assistance Subaward Report with partial data. In this case, the report will be saved in Reopened status and validation failure messages will be sent back. </summary>
<p>
<code><pre>
{
   "assistanceData":{
      "fain":"1001ZZZ420",
      "subawardDataList":{
         "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
         "subawardNumber":"",
         "uei":"zzz123456789",
         "subawardAmount":"",
         "subawardDate":"",
         "subawardDescription":"",
         "placeOfPerformance":{
            "city":"Atlanta",
            "country":{
               "code":"USA",
               "name":"UNITED STATES"
            },
            "stateOrProvince":{
               "code":"GA",
               "name":"Georgia"
            },
            "zipPlus4":"123456789"
         }
      }
   }
}	
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Subcontract report (Contracts)

------- | -------
**Request Type** | DELETE
**URL** | /contract/v1/subcontracts/{subawardReportNumber}
**Summary** | Used to delete subcontract report(s)
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes |[Refer Delete Subaward report Contract JSON](#delete-subaward-report-contract-json)

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report(s) successfully deleted
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

This API will return HTTP Status code 200 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete subcontract report for the given status.</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Delete request to delete a subcontract report in all statuses (Published, Reopened or Draft) for a Contract when status is not provided</summary>
<p>
Do not provide any status in the request.
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Subaward report (Assistance)


------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | Used to delete assistance subaward report(s)
**Consumes** | Request Parameters
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Delete Subaward report Assistance JSON ](#delete-subaward-report-grant-json)

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subrecipient report(s) successfully deleted
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

This API will return HTTP Status code 200 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete an Assistance Subaward report</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Delete request to delete Subaward reports in all statuses (Published, Reopened or Draft) when status is not provided</summary>
<p>
Do not provide any status in the request.
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get Subcontract report (Contracts)

------- | -------
**Request Type** | GET
**URL** | /contract/v1/subcontracts/{subawardReportNumber}
**Summary** |  User will be able to retrieve a specific subcontract report
**Consumes** | Request Parameters
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | UUID | Yes | The SubawardReportNumber of the subaward report to fetch
status | query | string | No | Status of the report (Draft, Published or Reopened)

#### Examples

<details>
<summary>Example 1: Get Subaward reports for a specific contract based on the Subaward report Number and report status</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Get all Subaward reports for a specific subawardReportNumber when status is not provided.</summary>
<p>
Do not provide any status in the request.
</p>
</details>

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report(s) successfully retrieved [Refer  Contract JSON](#get-subaward-report-contract-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

NOTE: Will return JSON response same as POST Response JSON. The subawardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Get Subaward report (Assistance) 

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | User will be able to retrieve a specific assistance subaward report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | UUID | Yes | The SubawardReportNumber of the subaward report to fetch
status | query | string | No | Status of the report (Draft, Published or Reopened)

#### Examples

<details>
<summary>Example 1: Get Assistance Subaward reports for a specific Assistance based on the Subaward report Number and report status </summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Get all Subaward reports for a specific Assistance subawardReportNumber when no status is provided.</summary>
<p>
Do not provide any status in the request.
</p>
</details>

#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subrecipient report(s) successfully retrieved [Refer  Contract JSON](#get-subaward-report-grant-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

NOTE: Will return JSON response same as POST Response JSON. The subawardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Search Subcontract report (Contracts)

------- | -------
**Request Type** | GET
**URL** | /contract/v1/subcontracts
**Summary** |  User will be able to retrieve specific subcontract reports based on the provided search criteria
**Consumes** | Request Parameters as described below
**Produces** | A paginated response. Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
contractNumber | query | string | No | The piid for the contract
reportingAgencyCode | query | string | No | The agencyCode for the contract
idvReferenceNumber | query | string | No | The Reference IDV for the contract
referenceAgencyCode | query | string | No | The Reference Agency Code for the Reference IDV
subawardReportNumber | query | string | No | The UUID for the subcontract report
reportStatus | query | string | No | The status of the Subaward Report to fetch (Draft, Published or Reopened)
page | query | string | No | The page number for the response to be retrieved (default is 0 which is the first page)
size | query | string | No | The page size (default is 10)

#### Examples

<details>
<summary>Example 1: Get Subaward reports for a specific contract based on the Subaward report Number and report status</summary>
<p>
Provide subawardReportNumber and reportStatus (Draft, Published or Reopened) as query Params in the request.
</p>
</details>

<details>
<summary>Example 2: Get all Published Subaward reports.</summary>
<p>
Provide reportStatus as 'Published' as a query Param in the request.
</p>
</details>

<details>
<summary>Example 3: Get all Subaward reports for a specific contract</summary>
<p>
Provide contractNumber query Param in the request.
</p>
</details>

<details>
<summary>Example 4: Get a specific page of multi-page results for a search.</summary>
<p>
<code><pre>
By default, the page is set as '0' (first page), and size is set as '10' (10 records per page). The response returns the totalPages along with the totalElements. To get results from a specific page, provide the page number (0,1,2 ...) as a part of the page query param. 
</pre></code>
</p>
</details>

<details>
<summary>Example 5: Get a specific number of elements in a page for a search.</summary>
<p>
<code><pre>
By default, the page is set as '0' (first page), and size is set as '10' (10 records per page). To get a specific number of elements on a page, set the size element as a query param. 
</pre></code>
</p>
</details>


#### Responses

The overall HTTP status code for the response will be determined as follows:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 | string | Report was successfully retrieved [Refer  Contract JSON](#get-subaward-report-contract-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

NOTE: Will return JSON response same as POST Response JSON. The subawardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Search Subaward report (Assistance) 

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/subawards
**Summary** |  User will be able to retrieve specific assistance subaward reports based on the provided search criteria
**Consumes** | Request Parameters as described below
**Produces** | A paginated response. Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
FAIN | query | string | No | The FAIN number for the assistance award
agencyCode | query | string | No | The agencyCode for the assistance award
subawardReportNumber | query | string | No | The UUID for the assistance subaward report number
reportStatus | query | string | No | The status of the Subaward Report to fetch (Draft, Published or Reopened)
page | query | string | No | The page number for the response to be retrieved (default is 0 which is the first page)
size | query | string | No | The page size (default is 10)

#### Examples

<details>
<summary>Example 1: Get Assistance Subaward reports for a specific Assistance based on the Subaward report Number and report status </summary>
<p>
Provide subawardReportNumber and reportStatus (Draft, Published or Reopened) as query Params in the request.
</p>
</details>

<details>
<summary>Example 2: Get all Published Subaward reports for a specific Assistance</summary>
<p>
Provide reportStatus as 'Published' as a query Param in the reques
</p>
</details>

<details>
<summary>Example 3: Get all Subaward reports for a specific Assistance award</summary>
<p>
Provide fain query Param in the request.
</p>
</details>

<details>
<summary>Example 4: Get a specific page of multi-page results for a search.</summary>
<p>
<code><pre>
By default, the page is set as '0' (first page), and size is set as '10' (10 records per page). The response returns the totalPages along with the totalElements. To get results from a specific page, provide the page number (0,1,2 ...) as a part of the page query param. 
</pre></code>
</p>
</details>

<details>
<summary>Example 5: Get a specific number of elements in a page for a search.</summary>
<p>
<code><pre>
By default, the page is set as '0' (first page), and size is set as '10' (10 records per page). To get a specific number of elements on a page, set the size element as a query param. 
</pre></code>
</p>
</details>

#### Responses

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200	|JSON|	Report was successfully retrieved [Refer Submit Subaward report Assistance JSON](#submit-subaward-report-grant-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

NOTE: Will return JSON response same as POST response JSON. The subAwardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

## API JSON Structures
### Response JSON

All Subaward API endpoints return a response JSON. The generic structure of the response JSON along with the endpoint specific differences are outlined in the table below:

Response Element | Response Type | Description
-----------------|---------------|------------
 _ | JSON Array | One element for each Subaward report in request
id | string | For a contract report, it is the concatenated values of contractNumber, reportingAgency, idvRefrenceNumber, referenceAgencyCode, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a Assistance report, it is the concatenated value of fainNumber, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a GET or DELETE request, if the request is unsuccessful, then it is the concatenated value of the search parameters separated by ":".
statusCode | string | The Http Status code for the Subaward report element
transactionId | string | Internal id that SAM.gov support team can use to trace issues. Users can provide this to support team in case of any issues with their request
timeStamp | string | Date and time when the request was processed
subawardReportNumber | string | Unique identifier for the Subaward report. This id can be used for any subsequent update/delete calls
reportStatus | string | Status of the Subaward report. 
message | string | Message indicating status of the operation. Also includes any informative warning messages.
errors | JSON Array | If there are validation errors, they are sent back as a part of this errors array.

NOTE: In an effort to keep the user informed on the actions performed through the API, some descriptive messages will be sent back as a part of the "message" element. This will be done for the Create (POST) and Update (PUT) requests for Contracts. The scenarios when these informational messages will be provided are outlined below:
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward ID and the Subaward Date.
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward ID and the Subaward Date submitted on the same date.
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward ID and the Subaward Date submitted on the same date with the same Subaward amount.
* When the Date of the Subaward provided matches the Date of the Subaward of the previous Subaward report.
* When the Subaward Amount provided matches the Subaward Amount of the previous Subaward report.
* When the Subaward Amount provided is greater than the total contract value.

#### Examples (Contracts)
<details>
<summary>Example 1: Contracts: Create (POST) request for three Subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, and third could not be created. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 2: Contracts: Update (PUT) request for ar Subaward report, report was successfully Published. </summary>
<p>
<code><pre>
{
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 3: Contracts: Update (PUT) request for ar Subaward report, when report was saved in Draft status and error messages were sent back. </summary>
<p>
<code><pre>
{
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 4: Contracts: Delete (DELETE) request for a Subaward report when only the subawardReportNumber was provided, Published and Reopened reports existed and both were deleted successfully. One element is returned for each deleted report. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully deleted.",
    "errors": []
  },
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 5: Contracts: Delete (DELETE) request for a Subaward report when delete request was not successful. </summary>
<p>
<code><pre>
{
  {
    "id": "",
    "statusCode": "400",
    "transactionId": null,
    "timeStamp": "2024-02-25T16:58:09.183947300",
    "message": "The report could not be deleted. Please fix the errors and submit the delete request again.",
    "errors": [
      "Please provide a valid value for the report status. It can be Draft, Published, Reopened or left blank."
    ]
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 5: Contracts: Paginated GET request for a contract with 9 Subaward reports, and page size of 2. Search is executed when the contractNumber is provided in the query parameters. One element is returned for each Subaward report.</summary>
<p>
<code><pre>
{
   "responseList":[
      {
         "id":"contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
         "statusCode":"200",
         "transactionId":"48e2fad8-7b43-4b62-a870-45b3f250ea72",
         "timeStamp":"2024-02-20T19:51:24.915924",
         "reportStatus":"Published",
         "message":{
            "contractData":[
               {
                  "contractNumber":"string",
                  "reportingAgencyCode":"string",
                  "idvReferenceNumber":"string",
                  "referenceAgencyCode":"string",
                  "programTitle":"string",
                  "subawardDataList":[
                     {
                        "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
                        "submittedDate":"2024-02-12",
                        "subawardUEI":"string",
                        "subawardNumber":"string",
                        "subawardAmount":"string",
                        "subawardDate":"string",
                        "subawardDescription":"string",
                        "placeOfPerformance":{
                           "city":"string",
                           "country":{
                              "code":"string",
                              "name":"string"
                           },
                           "stateOrProvince":{
                              "code":"string",
                              "name":"string"
                           },
                           "zip":"string",
                           "congressional_district":"string"
                        },
                        "recoveryModelQuestions":[
                           {
                              "code":"1",
                              "isSelected":true
                           },
                           {
                              "code":"2",
                              "isSelected":false
                           }
                        ],
                        "topPayEmployees":[
                           {
                              "fullName":"sub1",
                              "salary":"100"
                           },
                           {
                              "fullName":"sub2",
                              "salary":"200"
                           },
                           {
                              "fullName":"sub3",
                              "salary":"300"
                           },
                           {
                              "fullName":"sub4",
                              "salary":"400"
                           },
                           {
                              "fullName":"sub5",
                              "salary":"500"
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         "errors":[
            
         ]
      },
      {
         "id":"contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
         "statusCode":"200",
         "transactionId":"58e2fad8-7b43-4b62-a870-45b3f250ea72",
         "timeStamp":"2024-02-20T19:51:24.915924",
         "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
         "reportStatus":"Published",
         "message":{
            "contractData":[
               {
                  "contractNumber":"string",
                  "reportingAgencyCode":"string",
                  "idvReferenceNumber":"string",
                  "referenceAgencyCode":"string",
                  "programTitle":"string",
                  "subawardDataList":[
                     {
                        "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
                        "submittedDate":"2024-02-12",
                        "subawardUEI":"string",
                        "subawardNumber":"string",
                        "subawardAmount":"string",
                        "subawardDate":"string",
                        "subawardDescription":"string",
                        "placeOfPerformance":{
                           "city":"string",
                           "country":{
                              "code":"string",
                              "name":"string"
                           },
                           "stateOrProvince":{
                              "code":"string",
                              "name":"string"
                           },
                           "zip":"string",
                           "congressional_district":"string"
                        },
                        "recoveryModelQuestions":[
                           {
                              "code":"1",
                              "isSelected":false
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         "errors":[
            
         ]
      }
   ],
   "page":0,
   "size":2,
   "totalElements":5,
   "totalPages":3
}
</pre></code>
</p>
</details>

<details>
<summary>Example 6: Contracts: Get request for a specific Subaward report in Published status.</summary>
<p>
<code><pre>
[
   {
      "id":"contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
      "statusCode":"200",
      "transactionId":"58e2fad8-7b43-4b62-a870-45b3f250ea72",
      "timeStamp":"2024-02-20T19:51:24.915924",
      "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
      "reportStatus":"Published",
      "message":{
         "contractData":[
            {
               "contractNumber":"string",
               "reportingAgencyCode":"string",
               "idvReferenceNumber":"string",
               "referenceAgencyCode":"string",
               "programTitle":"string",
               "subawardDataList":[
                  {
                     "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
                     "submittedDate":"2024-02-12",
                     "subawardUEI":"string",
                     "subawardNumber":"string",
                     "subawardAmount":"string",
                     "subawardDate":"string",
                     "subawardDescription":"string",
                     "placeOfPerformance":{
                        "city":"string",
                        "country":{
                           "code":"string",
                           "name":"string"
                        },
                        "stateOrProvince":{
                           "code":"string",
                           "name":"string"
                        },
                        "zip":"string",
                        "congressional_district":"string"
                     },
                     "recoveryModelQuestions":[
                        {
                           "code":"1",
                           "isSelected":false
                        }
                     ]
                  }
               ]
            }
         ]
      },
      "errors":[]
   }
]
</pre></code>
</p>
</details>

#### Examples (Assistance )
<details>
<summary>Example 1: Assistance: Create (POST) request for three Subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, and third could not be created. </summary>
<p>
<code><pre>
[
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  },
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "400",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915972",
    "subawardReportNumber": "",
    "reportStatus": "Not Saved",
    "message": "Could not save the report. Please fix the errors and submit again.",
    "errors": [
      "Sub assistanceor UNIQUE ENTITY ID # is required"
    ]
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example 2: Assistance: Update (PUT) request for ar Subaward report, report was successfully Published. </summary>
<p>
<code><pre>
{
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 3: Assistance: Update (PUT) request for ar Subaward report, when report was saved in Draft status and error messages were sent back. </summary>
<p>
<code><pre>
{
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Draft",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required",
      "Sub award Place of Performance Section - City provided is invalid."
    ]
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 4: Assistance: Delete (DELETE) request for a Subaward report when only the subawardReportNumber was provided, Published and Reopened reports existed and both were deleted successfully. One element is returned for each deleted report. </summary>
<p>
<code><pre>
[
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully deleted.",
    "errors": []
  },
  {
    "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 5: Assistance: Delete (DELETE) request for a Subaward report when delete request was not successful. </summary>
<p>
<code><pre>
{
  {
    "id": "",
    "statusCode": "400",
    "transactionId": null,
    "timeStamp": "2024-02-25T16:58:09.183947300",
    "message": "The report could not be deleted. Please fix the errors and submit the delete request again.",
    "errors": [
      "Please provide a valid value for the report status. It can be Draft, Published, Reopened or left blank."
    ]
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Example 5: Assistance: Paginated GET request for a assistance with 9 Subaward reports, and page size of 2. Search is executed when the fain is provided in the query parameters. One element is returned for each Subaward report.</summary>
<p>
<code><pre>
{
   "responseList":[
      {
         "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
         "statusCode":"200",
         "transactionId":"48e2fad8-7b43-4b62-a870-45b3f250ea72",
         "timeStamp":"2024-02-20T19:51:24.915924",
         "reportStatus":"Published",
         "message":{
            "assistanceData":[
               {
                  "fain":"string",
                  "agencyCode":"string",
                  "subawardDataList":[
                     {
                        "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
                        "submittedDate":"2024-02-12",
                        "subawardUEI":"string",
                        "subawardNumber":"string",
                        "subawardAmount":"string",
                        "subawardDate":"string",
                        "subawardDescription":"string",
                        "placeOfPerformance":{
                           "city":"string",
                           "country":{
                              "code":"string",
                              "name":"string"
                           },
                           "stateOrProvince":{
                              "code":"string",
                              "name":"string"
                           },
                           "zip":"string",
                           "congressional_district":"string"
                        },
                        "recoveryModelQuestions":[
                           {
                              "code":"1",
                              "isSelected":true
                           },
                           {
                              "code":"2",
                              "isSelected":false
                           }
                        ],
                        "topPayEmployees":[
                           {
                              "fullName":"sub1",
                              "salary":"100"
                           },
                           {
                              "fullName":"sub2",
                              "salary":"200"
                           },
                           {
                              "fullName":"sub3",
                              "salary":"300"
                           },
                           {
                              "fullName":"sub4",
                              "salary":"400"
                           },
                           {
                              "fullName":"sub5",
                              "salary":"500"
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         "errors":[
            
         ]
      },
      {
         "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
         "statusCode":"200",
         "transactionId":"58e2fad8-7b43-4b62-a870-45b3f250ea72",
         "timeStamp":"2024-02-20T19:51:24.915924",
         "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
         "reportStatus":"Published",
         "message":{
            "assistanceData":[
               {
                  "fain":"string",
                  "agencyCode":"string",
                  "subawardDataList":[
                     {
                        "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
                        "submittedDate":"2024-02-12",
                        "subawardUEI":"string",
                        "subawardNumber":"string",
                        "subawardAmount":"string",
                        "subawardDate":"string",
                        "subawardDescription":"string",
                        "placeOfPerformance":{
                           "city":"string",
                           "country":{
                              "code":"string",
                              "name":"string"
                           },
                           "stateOrProvince":{
                              "code":"string",
                              "name":"string"
                           },
                           "zip":"string",
                           "congressional_district":"string"
                        },
                        "recoveryModelQuestions":[
                           {
                              "code":"1",
                              "isSelected":false
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         "errors":[
            
         ]
      }
   ],
   "page":0,
   "size":2,
   "totalElements":5,
   "totalPages":3
}
</pre></code>
</p>
</details>

<details>
<summary>Example 6: Assistance: Get request for a specific Subaward report in Published status.</summary>
<p>
<code><pre>
[
   {
      "id": "fain:subawardNumber:subawardDate:subawardAmount:submittedDate",
      "statusCode":"200",
      "transactionId":"58e2fad8-7b43-4b62-a870-45b3f250ea72",
      "timeStamp":"2024-02-20T19:51:24.915924",
      "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
      "reportStatus":"Published",
      "message":{
         "assistanceData":[
            {
               "fain":"string",
               "agencyCode":"string",
               "subawardDataList":[
                  {
                     "subawardReportNumber":"71e2fad8-7b43-4b62-a870-45b3f250ea98",
                     "submittedDate":"2024-02-12",
                     "subawardUEI":"string",
                     "subawardNumber":"string",
                     "subawardAmount":"string",
                     "subawardDate":"string",
                     "subawardDescription":"string",
                     "placeOfPerformance":{
                        "city":"string",
                        "country":{
                           "code":"string",
                           "name":"string"
                        },
                        "stateOrProvince":{
                           "code":"string",
                           "name":"string"
                        },
                        "zip":"string",
                        "congressional_district":"string"
                     },
                     "recoveryModelQuestions":[
                        {
                           "code":"1",
                           "isSelected":false
                        }
                     ]
                  }
               ]
            }
         ]
      },
      "errors":[]
   }
]
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Submit Subaward report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Required |Description 
-----|-----------|-------|------------|------------
contractData | JSON Array | NA|Yes|Information about the prime Contractor and the Subaward report(s). If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractData Details| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the Federal awarding agency as from FPDS-NG
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task Order on a Contract |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the Federal awarding agency associated with the IDV Reference Number
contractData.programTitle | string || No | Program or Project Title 
contractData.subawardDataList |string  ||Yes  |Information about the Subawardees. If the report is being submitted for multiple Subawardees, then this array will have multiple elements, one for each of the Subawardee.
contractData.subawardDataList Details | | | | 
subawardDataList.subawardReportNumber | string | 13 characters | Yes, for an update request (PUT) to update a report. | The id of the Subaward report. Will be blank/ignored for a POST request to create a Subaward report. 
subawardDataList.subawardUEI | string | 13 characters | Yes | Subawardee UEI
subawardDataList.subawardNumber | string |32 characters  | Yes | Number assigned by the Prime Contractor to track this subaward
subawardDataList.subawardAmount |string  |32 characters | Yes | Amount for this award to this Subawardee 
subawardDataList.subawardDate |string |TIMESTAMP | Yes| Date subaward was made in YYYY-MM-DD format
subawardDataList.subawardDescription |string  || Yes | Describes the Subaward requirements. This is from FPDS.
subawardDataList.placeOfPerformance | JSON Object |NA |Yes | Subawardee Principal Place of Performance (POP)
subawardDataList.placeOfPerformance.city | string || Yes |Subawardee POP City Name
subawardDataList.placeOfPerformance.stateOrProvince | JSON Object |NA |Yes|Subawardee POP State Information. The State Code and name need to be specified.
subawardDataList.placeOfPerformance.stateOrProvince.code | string |||Subawardee POP State Code
subawardDataList.placeOfPerformance.stateOrProvince.name | string ||  |Subawardee POP State Name
subawardDataList.placeOfPerformance.country | JSON Object | NA |Yes|Subawardee POP Country Information. The Country Code and name need to be specified.
subawardDataList.placeOfPerformance.country.code | string || |Subawardee POP Country Code
subawardDataList.placeOfPerformance.country.name | string ||  |Subawardee POP Country Name
subawardDataList.placeOfPerformance.zipPlus4 | string ||Yes|Subawardee POP zip+4 Code
subawardDataList.recoveryModelQuestions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subawardee. | Array of Compensation questions for the Subawardee. There will be 2 questions, and therefore 2 elements in this array
subawardDataList.recoveryModelQuestions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subawardDataList.recoveryModelQuestions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
subawardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the Array requires 5 elements| This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if response to compensation question 1 is true and compensation question 2 is false. If the responses to the compensation questions are already provided with the SAM registration for this entity, then this information is not required to be provided.
subawardDataList.topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top pay employee
subawardDataList.topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Submit Subaward report Assistance JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array | NA| Yes | Information about the prime Assistance awardee. If the report is being submitted for multiple prime Assistance awards, then this array will have multiple elements, one for each of the prime Assistance.
assistanceData Details||||
assistanceData.fain | string |  255 characters | Yes | This is the Federal Award Identifier Number (FAIN) for the prime assistance award. 
assistanceData.subawardDataList |string  ||Yes  |Information about the sub Contractors. If the report is being submitted for multiple Subawards, then this array will have multiple elements, one for each of the sub Contracts.
assistanceData.subawardDataList Details | || | 
subawardDataList.subawardNumber | string  | 32 characters |Yes  | Number assigned by the Prime to track this sub Assistance
subawardDataList.uei |string | 13 characters | Yes | Subawardee UEI
subawardDataList.subawardAmount |string  | 20 characters| Yes | Amount for this award to this Subaward
subawardDataList.subawardDate|string ||Yes |Date subaward was made in YYYY-MM-DD format 
subawardDataList.subawardDescription |string  |   | Yes |
subawardDataList.placeOfPerformance | JSON Object ||Yes | SubAwardee Principal Place of Performance (POP)
subawardDataList.placeOfPerformance.city | string || Yes |Subawardee POP City Name
subawardDataList.placeOfPerformance.stateOrProvince | JSON Object ||Yes|Subawardee POP State Information. The State Code and name need to be specified.
subawardDataList.placeOfPerformance.stateOrProvince.code | string |||Subawardee POP State Code
subawardDataList.placeOfPerformance.stateOrProvince.name | string ||  |Subawardee POP State Name
subawardDataList.placeOfPerformance.country | JSON Object ||Yes|Subawardee POP Country Information. The Country Code and name need to be specified.
subawardDataList.placeOfPerformance.country.code | string || |Subawardee POP Country Code
subawardDataList.placeOfPerformance.country.name | string ||  |Subawardee POP Country Name
subawardDataList.placeOfPerformance.zipPlus4 | string ||Yes|Subawardee POP zip+4 Code
subawardDataList.recoveryModelQuestions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subawardee. | Array of Compensation questions for the Subawardee. There will be 2 questions, and therefore 2 elements in this array
subawardDataList.recoveryModelQuestions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subawardDataList.recoveryModelQuestions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
subawardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the Array requires 5 elements| This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if response to compensation question 1 is true and compensation question 2 is false. If the responses to the compensation questions are already provided with the SAM registration for this entity, then this information is not required to be provided.
subawardDataList.topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top pay employee
subawardDataList.topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Delete Subaward report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
contractData | JSON Array  | | Yes, at least one element in the array is required. At least one field is required for the fields in each element. | Information about the report to be deleted. If there are multiple reports to be deleted, then this array will have multiple elements, one for each of the delete requests.
contractData Details| | | | 
contractData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the subaward. This is returned as a part of the response for the Create, Update and Get calls for the Subaward report.
contractData.reportStatus | string |32 characters  | No | The status of the report to be deleted. If no status is provided, then all associated reports (in all statuses) will be deleted.

<p><small><a href="#">Back to top</a></small></p>

### Delete Subaward report Assistance JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length|  Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array  |  | Yes, at least one element in the array is required. At least one field is required for the fields in each element. |Information about the prime Assistance awardee. If the request is being submitted for multiple prime assistance awards, then this array will have multiple elements, one for each of the prime Assistance.
assistanceData Details| | | | 
assistanceData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the subaward. This is returned as a part of the response for the Create, Update and Get calls for the Subaward report.
assistanceData.reportStatus | string |32 characters  | No | The status of the report to be deleted. If no status is provided, then all associated reports (in all statuses) will be deleted.

<p><small><a href="#">Back to top</a></small></p>

### Get Subaward Report Contract JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length| Required | Description
-----|-----------|--------|--------|------------
contractData | JSON Array | NA|Yes|Information about the prime Contractor and the Subaward report(s). If the report is being submitted for multiple prime contracts, then this array will have multiple elements, one for each of the prime Contract
contractData Details| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the Federal awarding agency as from FPDS-NG
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task Order on a Contract |If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the Federal awarding agency associated with the IDV Reference Number
contractData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the subaward. This is returned as a part of the response for the Create, Update calls for the Subaward report.
contractData.reportStatus | string |32 characters  | No | The status of the report to be retrieved.

<p><small><a href="#">Back to top</a></small></p>

### Get Subaward Report Assistance JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|----------------|------------|-------
assistanceData | JSON Array  |   |Yes |Information about the prime Assistance and the Subaward report(s). If the report is being submitted for multiple prime assistance awards, then this array will have multiple elements, one for each of the prime Assistance.
assistanceData Details| | | | 
fain | string  |255 characters |Yes | This is the Federal Award Identifier Number (FAIN) for the prime Assistance award.
assistanceData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Assistance awardee to track the subaward. This is returned as a part of the response for the Create, Update calls for the Subaward report.
assistanceData.reportStatus | string |32 characters  | No | The status of the report to be retrieved.

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/subawardapi.yml" download="fsrsapi">OpenAPI File</a>

## Error Messages

### General Error Messages

The following error messages will be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one error.

NOTE: Error codes may change depending on an error given; in such a case the document will update accordingly.

Error Code |	Error Message	| Reason/Description | Operation |
---------- | ------------- | ------------------ | --------- |
401	|	Provide valid authorization email.	|	Authorization Email associated with the user System Account is required	|	All |
401	|	Provide a valid API Key.	|	The System Account API Key is required and should be a valid API Key	|	All |
401	|	This IP address is not associated with your system account. All requests must come from an IP address listed on your system account.	|	The IP Address associated with the System Account	|	All |
403	|	Access denied. Your account is not authorized.	|	Account does not have appropriate privileges to perform the operation	|	All |
500	|	We are experiencing an internal server error. Please try again later.	|	Internal Server Error	|	All |
400	|	Provide a valid JSON format.	|	Please check the request JSON structure and try again	|	All |
400	|	Provide a valid JSON structure. We require at least one contractData element.	|	Request Body JSON structure is invalid. At least one contractData element is required for Subaward reporting	|	All (Contracts) |
400	|	Provide a valid JSON structure. We require at least one assistanceData element.	|	Request Body JSON structure is invalid. At least one assistanceData element is required for Subaward reporting	|	All (Assistance) |
400	|	No record found for the contractID and reportingAgencyCode provided.	|	No record found for the Contract Number and Reporting Agency Code combination (Combination of contractData.contractNumber and contractData.reportingAgencyCode in the Request Body).	|	submitSubawardReport, updateSubawardReport (Contracts) |
400	|	No record found for the FAIN Number provided.	|	As provided in assistanceData.fain, FAIN Number not found	|	submitSubawardReport, updateSubawardReport(Assistance) |
400	|	Multiple records found for the contractID and reportingAgencyCode provided. Add the idvReferenceNumber to identify the contract.	|	User needs to specify the idvReferenceNumber to correctly identify the record as multiple records were found for the contractNumber and reportingAgency combination	|	submitSubawardReport, updateSubawardReport (Contracts) |
400	|	Provide the prime contractor's contractID.	|	contractData.contractNumber was not provided.	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Provide a reportingAgencyCode.	|	contractData.reportingAgencyCode is a required field.	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Provide at least one contractData element.	|	At least one contractData element is required for the Subaward reporting	|	submitSubawardReport, updateSubawardReport (Contracts and Assistance) |
400	|	Provide a subawardee Unique Entity ID.	|	The SAM.gov registration UEI for the subawardee is required	|	submitSubawardReport ,updateSubawardReport(Contracts and Assistance) |
400	|	Provide a valid Unique Entity ID.	|	Invalid UEI provided for the Subawardee	|	submitSubawardReport, updateSubawardReport(Contracts and Assistance) |
400	|	No record found for the subawardID provided.	|	No Report found for the specified subawardReportNumber. |	updateSubawardReport(Contracts, Assistance) |
400	|	Provide at least one data element. Add a contractID, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber, or subawardReportNumber.	|	contractNumber, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber and subawardReportNumber are missing for at least one element in the request	|	getSubawardReport(Contracts and Assistance) |
400	|	Provide at least one data element. |	Search Criteria are missing for at least one element in the request.	|	getSubawardReport(Contracts and Assistance) |
400	|	Provide at least one contractData element to delete.	|	At least one contractData element is required for deleting	|	deleteSubawardReport(Contracts) |
400	|	Provide at least one assistanceData element to delete.	|	At least one assistanceData element is required for deleting	|	deleteSubawardReport(Assistance) |
400	|	No record found for the data provided.	|	No report found matching the specified parameters for the report.	|	deleteSubawardReport(Contracts and Assistance) |

<p><small><a href="#">Back to top</a></small></p>

### Validation Failure Error Messages

This section details possible validation failure error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.

HTTP Status Code|Field | Error Message | Reason/Description | Operation |
-----|------|---------------|--------------------|----------|
201|subawardDataList.subawardNumber|	Subaward ID is required | Subaward ID is required | submitSubawardReport(Contracts)
201|subawardDataList.subawardDollars |	Subaward Amount is required | Subaward Amount is required| submitSubawardReport(Contracts)
201|subawardDataList.subawardDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| submitSubawardReport(Contracts)
201|subawardDataList.subawardDate | Subaward Date is required | Subaward Date is required | submitSubawardReport(Contracts)
201|subawardDataList.subawardDate | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubawardReport(Contracts)
201|subawardDataList.subawardDate | The Subaward Date cannot be in the future. | The Subaward Date cannot be in the future. |  submitSubawardReport(Contracts)
201|subawardDataList.subawardDescription   subawardDataList.subawardDescription |	Subaward overall description is required. |	Subaward overall description is required. |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.subawardDescription   subawardDataList.subawardDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance is required. |	Subaward Place of Performance is required. |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance Section - Country is required |	Subaward Place of Performance Section - Country is required | submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters | submitSubawardReport(Contracts and Assistance
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - Country is required |	Only for US addresses: Subaward Place of Performance Section - Country is required |  submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance|	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid |	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid | submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince  is required |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince  is required |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince provided is invalid |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince provided is invalid|	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City is required	| Only for US addresses: Subaward Place of Performance Section - City is required | submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City provided is invalid| Only for US addresses: Subaward Place of Performance Section - City provided is invalid | submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 is required | Only for US addresses: Subaward Place of Performance Section - zip+4 is required |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.topPayEmployees      subawardDataList.topPayEmployees | Sub Top Employer Compensation - full name and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.topPayEmployees.salary    subawardDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.topPayEmployees.salary    subawardDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.topPayEmployees.fullName | Sub topPayEmployees.fullName is required |Sub topPayEmployees.fullName is required |	submitSubawardReport(Contracts and Assistance)
201|subawardDataList.subawardNumber | Subaward ID is required |Subaward ID is required |	submitSubawardReport(Assistance)
201|subawardDataList.subawardAmount |	Subaward Amount is required	| Subaward Amount is required | submitSubawardReport(Assistance)
201|subawardDataList.subawardAmount |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | submitSubawardReport(Assistance)
201|subawardDataList. subawardDate |	Subaward Date is required | Subaward Date is required| submitSubawardReport(Assistance)
201|subawardDataList. subawardDate |	Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubawardReport(Assistance)
201|subawardDataList. subawardDate |	The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | submitSubawardReport(Assistance)
200|recoveryModelQuestions |	Responses to Compensation Questions were not found under SAM registration for the UEI <UEI Number>. Please provide the responses to the compensation questions under recoveryModelQuestions JSON element |Responses to compensation questions are required  if they are not available for the Prime Entity's SAM registration| updateSubawardReport(Contracts and Assistance)
200|recoveryModelQuestions |	Compensation Q1 code and response are required |Compensation Q1 code and response are required if responses to compensation questions is provided|updateSubawardReport(Contracts and Assistance)
200|recoveryModelQuestions |Since you responded true to the first compensation question, a response for the second compensation question is required.|	Compensation Q2 code and response are required	| updateSubawardReport(Contracts and Assistance)
200|recoveryModelQuestions |An incorrect compensation question code was provided for the Prime/Subawardee. Please refer to the Lookup table information for the correct codes to use.| Compensation question code provided did not match expected codes |	updateSubawardReport(Contracts and Assistance)
200|recoveryModelQuestions |	Compensation question isSelected value can only be true or false | Compensation question isSelected value can only be true or false | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.subawardNumber|	Subaward ID is required | Subaward ID is required | updateSubawardReport(Contracts)
200|subawardDataList.subawardNumber|	Subaward ID should be unique across multiple elements of subawardDataList  | Subaward ID should be unique across multiple elements of subawardDataList  | updateSubawardReport(Contracts)
200|subawardDataList.subawardDollars |	Subaward Amount is required | Subaward Amount is requiredn| updateSubawardReport(Contracts)
200|subawardDataList.subawardDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| updateSubawardReport(Contracts)
200|subawardDataList.subawardDate | Subaward Date is required | Subaward Date is required | updateSubawardReport(Contracts)
200|subawardDataList.subawardDate | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubawardReport(Contracts)
200|subawardDataList.subawardDate | The Subaward Date cannot be in the future. | The Subaward Date cannot be in the future. |  updateSubawardReport(Contracts)
200|subawardDataList.subawardDescription   subawardDataList.subawardDescription |	Subaward overall description is required. |	Subaward overall description is required. |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.subawardDescription   subawardDataList.subawardDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance is required. |	Subaward Place of Performance is required. |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance Section - Country is required |	Subaward Place of Performance Section - Country is required | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - Country is required |	Only for US addresses: Subaward Place of Performance Section - Country is required |  updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance|	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid |	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince  is required |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince  is required |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince provided is invalid |	Only for US addresses: Subaward Place of Performance Section - StateOrProvince provided is invalid|	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City is required	| Only for US addresses: Subaward Place of Performance Section - City is required | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City provided is invalid| Only for US addresses: Subaward Place of Performance Section - City provided is invalid | updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 is required | Only for US addresses: Subaward Place of Performance Section - zip+4 is required |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.placeOfPerformance    subawardDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.topPayEmployees      subawardDataList.topPayEmployees | Sub Top Employer Compensation - full name and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.topPayEmployees.salary    subawardDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.topPayEmployees.salary    subawardDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.topPayEmployees.fullName | Sub topPayEmployees.fullName is required |Sub topPayEmployees.fullName is required |	updateSubawardReport(Contracts and Assistance)
200|subawardDataList.subawardNumber | Subaward ID is required |Subaward ID is required |	updateSubawardReport(Assistance)
200|subawardDataList.subawardAmount |	Subaward Amount is required	| Subaward Amount is required | updateSubawardReport(Assistance)
200|subawardDataList.subawardAmount |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | updateSubawardReport(Assistance)
200|subawardDataList. subawardDate |	Subaward Date is required | Subaward Date is required| updateSubawardReport(Assistance)
200|subawardDataList. subawardDate |	Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubawardReport(Assistance)
200|subawardDataList. subawardDate |	The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | updateSubawardReport(Assistance)

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* A User can reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
--------- | --------------- | ---------
07/15/2023 | v0.1 | Base Version
11/21/2024 | v0.2 | Updates to documenation with examples

<p><small><a href="#">Back to top</a></small></p>
