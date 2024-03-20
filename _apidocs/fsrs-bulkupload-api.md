---
title: SAM.gov Subaward reporting Bulk Upload API 
banner-heading: SAM.gov Subaward reporting Bulk Upload API
---

## Overview 

The API for Federal Funding Accountability and Transparency Act (FFATA) Reporting will allow Prime awardees (i.e. prime contractors and prime grants recipients) to report subaward and executive compensation data regarding their first-tier Subawards to meet the FFATA reporting requirements. Using this API, the users will be able to file multiple Subaward reports at once. 

**NOTE:** The specifications on this page are for a future API.  Check back here or be in contact with IAE for the release date and testing session.

**API Version: v1.0**

## Getting Started

Subaward reporting Bulk Upload API can be accessed from Production or Alpha via the following endpoints:

* Production: https://api.SAM.gov
* Alpha: https://api-alpha.SAM.gov

### Authentication and Authorization

To begin using this API, you will need to register for a System Account and obtain an API Key. After registration, you will need to provide this API key in the <i>x-api-key</i> HTTP header with every API request.
* To request a System account wiht permission to use the Subaward APIs, the user must first create a user account in SAM.gov and request a "Non-Federal System Administrator" via FSD.
* A user will be able to access the System Accounts widget from their Workspace page after logging in. They can then select “New Account” by navigating from the widget and fill out the required sections and submit their System Account. When creating a System Account, the user must specify the following to successfully utilize the Subaward API:
	* System Information
   		** System Account Name: Unique name for the System Account
	* Permissions
   		** Subaward reporting: Write --> Gives access to Create/Update/Delete/Get Subaward reports.
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

#### Recovery Model Questions (Compensation Questions)

To submit a Subaward report, compensation questions for the Prime, as well as Subawardee will need to be responded to. The table below outlines the Compensation Questions and their corresponding codes to be used in the requests.

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Subawardee Question 1| __1__	            | As provided to you by your Subawardee, in your Subawardee's business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) receive (1) 80 percent or more of its annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements? |
| Subawardee Question 2| __2__	            | As provided to you by your Subawardee, does the public have access to information about the compensation of the executives in the Subawardee's business or organization (the legal entity to which the UNIQUE ENTITY ID (SAM) number it provided belongs) through periodic reports filed under section13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the Subaward reports.

Code | Value     | Description
-----|-----------------|-----------------
1     | Draft | This status is used when the report has been saved in the system but still requires an additional update to pass all validation checks. NOTE: The reports saved from the User Interface of SAM.gov may also be in this status if the user has partially added the report data and needs to add more details before submitting the report.
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

This API has 8 endpoints as outlined below. 

Endpoint Name | Short Description |
-----|-----------------
Submit Subaward report (Contracts)     | Used to submit Subaward reports for reporting on one or more Contracts.
Submit Subaward report (Grants)     | Used to submit Subaward reports for reporting on one or more Grants.
Update Subaward report (Contracts)     | Used to update one or more previously published Subaward reports for Contracts.
Update Subaward report (Grants)     | Used to update one or more previously published Subaward reports for Grants.
Delete Subaward report (Contracts)     | Used to delete one or more previously published Subaward reports for Contracts.
Delete Subaward report (Grants)     | Used to delete one or more previously published Subaward reports for Grants.
Get Subaward report (Contracts)     | Used to get one or more previously published Subaward reports for Contracts. 
Get Subaward report (Grants)     | Used to get one or more previously published Subaward reports for Grants.

The following section describes each of the above endpoints in detail.

### Submit Subaward report (Contracts)

------- | ------- |
**Request Type** | POST 
**URL** | /acquisition/v1/subawards
**Summary** | A User will be able to submit one or multiple Subaward reports for Contracts using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Contract JSON](#submit-subaward-report-contract-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was created | As described below

The API will process each request as described for all Subawardees within the request. 
* If the Subawardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the Subaward report for the Subawardee will be created and HTTP Status code 201 will be returned.
* If the Subawardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status.
* If any validations fail, then the report is saved in "Draft" status and the validation error messages are sent back as a part of the response body. (See the [Response JSON](#response-json) section for the response structure and specific examples.) The API will return other HTTP Status codes in case of any errors as specified in the [General Error Messages](#general-error-messages) section.

#### Examples

<details>
<summary>Example 1: Submit Subaward report for multiple Contracts and multiple Subawards. Example includes Task Order where IDV Reference number is required, and scenario when Top Pay Employees information for the Subawardee is not mandatory to be provided.</summary>
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"123456789"
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"678901234"
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
                  "stateOrProvidence":{
                     "code":"GA",
                     "name":"Georgia"
                  },
                  "zipPlus4":"123456789"
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
<summary>Example 2: Submit Subaward report with minimal data. In this case, the report will be saved in Draft status and validation errors will be sent back. </summary>
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"123456789"
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

### Submit Subaward report (Grants)


------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards
**Summary** | A user will be able to submit one or multiple Subaward report for Grants using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1


#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Grant JSON](#submit-subaward-report-grant-json)

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Report was created | As described below

The API will process each request as described for all Subawardees within the request. 
* If the Subawardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the Subaward report for the Subawardee will be created and HTTP Status code 201 will be returned.
* If the Subawardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report is saved in "Published" status.
* If any validations fail, then the report is saved in "Draft" status and the validation error messages are sent back as a part of the response body. (See the [Response JSON](#response-json) section for the response structure and specific examples.) The API will return other HTTP Status codes in case of any errors as specified in the [General Error Messages](#general-error-messages) section.

#### Examples

<details>
<summary>Example 1: Submit Grant Subaward report for multiple awards and multiple Subawards. Example includes scenario when Top Pay Employees information for the Subawardee is not mandatory to be provided.</summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "1001KS1420",
      "eftIndicator": "9999",
      "subAssistanceDataList": [
        {
          "subAssistanceNumber": "XX-YY-00008",
          "uei": "ABC123456789",
          "eftIndicator": "1111",
          "subAssistanceDollars": "100000",
          "subAssistanceObligationOrActionDate": "2010-10-01",
          "overallDescription": "My Description",
          "placeOfPerformance": {
            "city": "Alexandria",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "123456789"
          },
          "recovery_model_questions": [
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
      "primeFAIN": "1001ZZZ420",
      "eftIndicator": "8978",
      "subAssistanceDataList": [
        {
          "subAssistanceNumber": "XX-YY-12345",
          "uei": "zzz123456789",
          "eftIndicator": "1234",
          "subAssistanceDollars": "150000",
          "subAssistanceObligationOrActionDate": "2023-04-17",
          "overallDescription": "My Description",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "GA",
              "name": "Georgia"
            },
            "zipPlus4": "123456789"
          },
          "recovery_model_questions": [
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
            "city": "Brambleton",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "678901234"
          },
          "recovery_model_questions": [
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
<summary>Example 2: Submit Subaward Grant Report with minimal data. In this case, the report will be saved in Draft status and validation errors will be sent back. </summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "1001ZZZ420",
      "eftIndicator": "8978",
      "subAssistanceDataList": [
        {
          "subAssistanceNumber": "",
          "uei": "zzz123456789",
          "eftIndicator": "",
          "subAssistanceDollars": "",
          "subAssistanceObligationOrActionDate": "",
          "overallDescription": "",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
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

### Update Subaward report (Contracts)


------- | -------
**Request Type** | PUT
**URL** | /acquisition/v1/subawards
**Summary** | Used to update one or multiple previously published contract reports
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Contract JSON](#submit-subaward-report-contract-json)

NOTE: For an update request, the subawardReportNumber element in the request JSON structure will be required for each Subaward report to be updated.

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string |  Report successfully updated| As described below

The API will process each request as described for all Subawardees within the request. 
* If the Subawardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the Subaward report will be updated successfully and HTTP Status code 200 will be returned.
* If the Subawardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report will save in "Published" status.
* If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described below:
	* If the updates are being performed on a "Draft" report, then the report stays in "Draft" status
 	* If the updates are being performed on a "Published" report, a new subawardReportNumber is assigned to the update request. The report status is set to "Reopened"
* If there are no validation failures, the report status is updated as described below:
	* If the update are being performed on a "Draft" report, then the report is updated to "Published" status
 	* If the updates are being performed on a "Published" report, then the report moves to "Published" status and the previous "Published" report is archived.
  
See the [Response JSON](#response-json) section for the response structure and specific examples. The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 
<details>
<summary>Example 1: Update Subaward report for multiple Contracts and multiple Subawards. Example includes Task Order where IDV Reference number is required, and the scenario when Top Pay Employees information is not mandatory to be provided.</summary>
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
               "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"123456789"
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
               "subawardReportNumber":"45e2fad8-7b43-4b62-a870-45b3f250ea31",
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"678901234"
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
         "subawardDataList":[
            {
               "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
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
                  "stateOrProvidence":{
                     "code":"GA",
                     "name":"Georgia"
                  },
                  "zipPlus4":"123456789"
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
<summary>Example 2: Update Subaward report with minimal data. In this case, the report will be saved in Draft status and validation errors will be sent back. </summary>
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
               "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
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
                  "stateOrProvidence":{
                     "code":"VA",
                     "name":"Virginia"
                  },
                  "zipPlus4":"123456789"
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

### Update Subaward report (Grants)


------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/subawards
**Summary** | Used to update one or multiple previously published grant reports
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Grant JSON](#submit-subaward-report-grant-json)

NOTE: For update requests, the subawardReportNumber element in the request JSON structure will be required for each Subaward report to be updated.

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report successfully updated | As described below

The API will process each request as described for all Subawardees within the request. 
* If the Subawardee request passes all validations as specified in the [General Error Messages](#general-error-messages) section, the Subaward report will be updated successfully and HTTP Status code 200 will be returned.
* If the Subawardee request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, then the report will save in "Published" status.
* If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described below:
	* If the updates are being performed on a "Draft" report, then the report stays in "Draft" status
 	* If the updates are being performed on a "Published" report, a new subawardReportNumber is assigned to the update request. The report status is set to "Reopened"
* If there are no validation failures, the report status is updated as described below:
	* If the update are being performed on a "Draft" report, then the report is updated to "Published" status
 	* If the updates are being performed on a "Published" report, then the report moves to "Published" status and the previous "Published" report is archived.
  
See the [Response JSON](#response-json) section for the response structure and specific examples. The API will return other HTTP Status codes in case of any other errors and the report will not be updated. Refer to the [General Error Messages](#general-error-messages) for specific details.

#### Examples: 

<details>
<summary>Example 1: Update Grant Subaward report for multiple awards and multiple Subawards. Example includes scenario when Top Pay Employees information for the Subawardee is not mandatory to be provided.</summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "1001KS1420",
      "eftIndicator": "9999",
      "subAssistanceDataList": [
        {
          "subawardReportNumber":"51e2fad8-7b43-4b62-a870-45b3f250ea99",
	  "subAssistanceNumber": "XX-YY-00008",
          "uei": "ABC123456789",
          "eftIndicator": "1111",
          "subAssistanceDollars": "100000",
          "subAssistanceObligationOrActionDate": "2010-10-01",
          "overallDescription": "My Description",
          "placeOfPerformance": {
            "city": "Alexandria",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "123456789"
          },
          "recovery_model_questions": [
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
      "primeFAIN": "1001ZZZ420",
      "eftIndicator": "8978",
      "subAssistanceDataList": [
        {
          "subawardReportNumber":"45e2fad8-7b43-4b62-a870-45b3f250ea31",
	  "subAssistanceNumber": "XX-YY-12345",
          "uei": "zzz123456789",
          "eftIndicator": "1234",
          "subAssistanceDollars": "150000",
          "subAssistanceObligationOrActionDate": "2023-04-17",
          "overallDescription": "My Description",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "GA",
              "name": "Georgia"
            },
            "zipPlus4": "123456789"
          },
          "recovery_model_questions": [
            {
              "code": "3",
              "isSelected": "false"
            }
          ]
        },
        {
          "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
	  "subAssistanceNumber": "AA-YY-12345",
          "uei": "XYZ123456789",
          "eftIndicator": "4455",
          "subAssistanceDollars": "150055",
          "subAssistanceObligationOrActionDate": "2023-04-17",
          "overallDescription": "My Description",
          "placeOfPerformance": {
            "city": "Brambleton",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
              "code": "VA",
              "name": "Virginia"
            },
            "zipPlus4": "678901234"
          },
          "recovery_model_questions": [
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
<summary>Example 2: Update Subaward Grant Report with minimal data.  </summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "1001ZZZ420",
      "eftIndicator": "8978",
      "subAssistanceDataList": [
        {
          "subawardReportNumber":"45b3f2d8-7b43-4b62-a870-45b3f250b435",
	  "subAssistanceNumber": "",
          "uei": "zzz123456789",
          "eftIndicator": "",
          "subAssistanceDollars": "",
          "subAssistanceObligationOrActionDate": "",
          "overallDescription": "",
          "placeOfPerformance": {
            "city": "Atlanta",
            "country": {
              "code": "USA",
              "name": "UNITED STATES"
            },
            "stateOrProvidence": {
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

### Delete Subaward report (Contracts)


------- | -------
**Request Type** | DELETE
**URL** | /acquisition/v1/subawards
**Summary** | Used to delete previously published contracts report(s)
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

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report(s) successfully deleted | As described below

This API will return HTTP Status code 200 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete multiple Subaward reports for Contracts based on status provided</summary>
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
<summary>Example 2: Delete request to delete Subaward reports in all statuses (Published, Reopened) for a Contract when status is not provided</summary>
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

### Delete Subaward report (Grants)


------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/subawards
**Summary** | Used to delete previously submitted grants report(s)
**Consumes** | Request Parameters
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Delete Subaward report Grant JSON ](#delete-subaward-report-grant-json)

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report(s) successfully deleted | As described below

The API will return HTTP Status code 200 if the report is deleted successfully. The API will return other HTTP Status codes in case of any other errors and the report will not be deleted. Refer to the [Error Messages](#error-messages) for specific details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete multiple Grant Subaward reports</summary>
<p>
<code><pre>
{
  "assistanceData": [
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
<summary>Example 2: Delete request to delete Subaward reports in all statuses (Published, Reopened) for a Grant when status is not provided</summary>
<p>
<code><pre>
{
  "assistanceData": [
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

### Get Subaward report (Contracts)

------- | -------
**Request Type** | POST
**URL** | /acquisition/v1/subawards/get
**Summary** |  User will be able to retrieve specific contract reports based on the provided search criteria
**Consumes** | Request Parameters
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized SAM user email ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes, at least one contractData element is required. From the fields, at least one field is required | [Refer Get Subaward report Contract JSON](#get-subaward-report-contract-json) 

#### Examples

<details>
<summary>Example 1: Get Subaward reports for a specific contract based on the Subaward report Number and report status</summary>
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
<summary>Example 2: Get all Published Subaward reports for a specific contract</summary>
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
<summary>Example 3: Get all Subaward reports for a specific contract</summary>
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
<summary>Example 4: Get request for multiple contracts</summary>
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
200 | string | Report was successfully retrieved | [Refer Get Subaward report Contract JSON](#get-subaward-report-contract-json)

NOTE: Will return JSON response same as POST Response JSON. The generated subawardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Get Subaward report (Grants) 

------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards/get
**Summary** | User will be able to retrieve specific grant reports based on the provided search criteria
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization	| Header | string |	Yes |	Valid and authorized SAM user email ID
api_key |	query |	string |	Yes |	Valid System Account API Key
Request JSON|	Body|	JSON|	Yes, at least one assistanceData element is required. From the fields, at least one field is required|	[Refer Get Subaward report Grant JSON](#get-subaward-report-grant-json)

#### Examples

<details>
<summary>Example 1: Get Grant Subaward reports for a specific Grant based on the Subaward report Number and report status </summary>
<p>
<code><pre>
 {
  "assistanceData": [
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
<summary>Example 2: Get all Published Subaward reports for a specific Grant</summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "ABCDY2324235",
      "reportStatus": "Published"
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Example 3: Get all Subaward reports for a specific grant</summary>
<p>
<code><pre>
{
  "assistanceData": [
    {
      "primeFAIN": "ABCDY2324235"
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Example 4: Get request for multiple Grants</summary>
<p>
<code><pre>
{
   "assistanceData":[
      {
         "primeFAIN":"ABCDY2324235",
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
200	|JSON|	Report was successfully retrieved | [Refer Submit Subaward report Grant JSON](#submit-subaward-report-grant-json)

NOTE: Will return JSON response same as POST response JSON. The generated subAwardReportNumber and the reportStatus will be sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

## API JSON Structures
### Response JSON

All Subaward API endpoints return a response JSON. The generic structure of the response JSON along with the endpoint specific differences are outlined in the table below:

Response Element | Response Type | Description
-----------------|---------------|------------
 _ | JSON Array | One element for each Subaward report in request
id | string | For a contract report, it is the concatenated values of contractNumber, reportingAgency, idvRefrenceNumber, referenceAgencyCode, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a Grant report, it is the concatenated value of fainNumber, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a GET or DELETE request, if the request is unsuccessful, then it is the concatenated value of the search parameters separated by ":".
statusCode | string | The Http Status code for the Subaward report element
transactionId | string | Internal id that SAM.gov support team can use to trace issues. Users can provide this to support team in case of any issues with their request
timeStamp | string | Date and time when the request was processed
subawardReportNumber | string | Unique identifier for the Subaward report. This id can be used for any subsequent update/delete calls
reportStatus | string | Status of the Subaward report. 
message | string | Message indicating status of the operation. Also includes any informative warning messages.
errors | JSON Array | If there are validation errors, they are sent back as a part of this errors array.

NOTE: In an effort to keep the user informed on the actions performed through the API, some descriptive messages will be sent back as a part of the "message" element. This will be done for the Create (POST) and Update (PUT) requests for Contracts. The scenarios when these informational messages will be provided are outlined below:
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date.
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date submitted on the same date.
* When there are existing Subaward reports for the Contract Number, Reporting Agency, IDV Reference Number, Reference Agency, Subaward Number and the Subaward Date submitted on the same date with the same Subaward amount.
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
<summary>Example 2: Contracts: Update (PUT) request for four Subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, third was saved in Reopened status since a Published version already exists for the subawardReportNumber, and fourth report could not be updated. </summary>
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
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Reopened",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required"
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
      "No report found matching the specified parameters for the report."
    ]
  }
]
</pre></code>
</p>
</details>

<details>
<summary>Example 3: Contracts: Delete (DELETE) request for a Subaward report when only the subawardReportNumber was provided, Published and Reopened reports existed and both were deleted successfully. One element is returned for each deleted report. </summary>
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
<summary>Example 4: Contracts: Delete (DELETE) request for two Subaward reports. First was a Draft report that was successfully Deleted, and second delete request was not successful. </summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 5: Contracts: Get (POST) request for a contract with 2 Subaward reports, when the request is successful. One element is returned for each Subaward report.</summary>
<p>
<code><pre>
[
  {
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
          "subawardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subawardUEI": "string",
              "subawardNumber": "string",
              "subawardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "stateOrProvidence": {
                  "code": "string",
                  "name": "string"
                },
                "zipPlus4": "string"
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
                  "fullName": "sub1",
                  "salary": "100"
                },
                {
                  "fullName": "sub2",
                  "salary": "200"
                },
                {
                  "fullName": "sub3",
                  "salary": "300"
                },
                {
                  "fullName": "sub4",
                  "salary": "400"
                },
                {
                  "fullName": "sub5",
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
    "id": "contractNumber:reportingAgency:idvRefrenceNumber:referenceAgencyCode:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
          "subawardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subawardUEI": "string",
              "subawardNumber": "string",
              "subawardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "stateOrProvidence": {
                  "code": "string",
                  "name": "string"
                },
                "zipPlus4": "string"
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
<summary>Example 6: Contracts: Get (POST) request for a contract with 2 Subaward reports, when the request is not successful for both for different reasons. One element is returned for each Subaward report.</summary>
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
      "At least one contractData element is required for the contract reporting"
    ]
  }
]
</pre></code>
</p>
</details>

#### Examples (Grants)
<details>
<summary>Example 1: Grants: Create (POST) request for three Subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, and third could not be created. </summary>
<p>
<code><pre>
[
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 2: Grants: Update (PUT) request for four Subaward reports, when first was successfully Published, second was saved in Draft status with Validation failures, third was saved in Reopened status since a Published version already exists for the subawardReportNumber, and fourth report could not be updated. </summary>
<p>
<code><pre>
[
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully saved.",
    "errors": []
  },
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "201",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915968",
    "subawardReportNumber": "51e2fad8-9b43-4b62-a870-45b3f250ea14",
    "reportStatus": "Reopened",
    "message": "Report was saved but failed some validations. Please fix the errors and submit an update request.",
    "errors": [
      "Subaward Amount is required"
    ]
  },
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 3: Grants: Delete (DELETE) request for a Subaward report when only the subawardReportNumber was provided, Published and Reopened reports existed and both were deleted successfully. One element is returned for each deleted report. </summary>
<p>
<code><pre>
[
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "204",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": "Report was successfully deleted.",
    "errors": []
  },
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 4: Grants: Delete (DELETE) request for two Subaward reports. First was a Draft report that was successfully Deleted, and second delete request was not successful. </summary>
<p>
<code><pre>
[
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
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
<summary>Example 5: Grants: Get (POST) request for a contract with 2 Subaward reports, when the request is successful. One element is returned for each Subaward report.</summary>
<p>
<code><pre>
[
  {
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "200",
    "transactionId": "48e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "51e2fad8-7b43-4b62-a870-45b3f250ea99",
    "reportStatus": "Published",
    "message": {
      "assistanceData": [
        {
          "primeFAIN": "string",
          "subawardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subawardUEI": "string",
              "subawardNumber": "string",
              "subawardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "stateOrProvidence": {
                  "code": "string",
                  "name": "string"
                },
                "zipPlus4": "string"
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
                  "fullName": "sub1",
                  "salary": "100"
                },
                {
                  "fullName": "sub2",
                  "salary": "200"
                },
                {
                  "fullName": "sub3",
                  "salary": "300"
                },
                {
                  "fullName": "sub4",
                  "salary": "400"
                },
                {
                  "fullName": "sub5",
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
    "id": "primeFAIN:subawardNumber:subawardDate:subawardAmount:submittedDate",
    "statusCode": "200",
    "transactionId": "58e2fad8-7b43-4b62-a870-45b3f250ea72",
    "timeStamp": "2024-02-20T19:51:24.915924",
    "subawardReportNumber": "71e2fad8-7b43-4b62-a870-45b3f250ea98",
    "reportStatus": "Published",
    "message": {
      "assistanceData": [
        {
          "primeFAIN": "string",
          "subawardDataList": [
            {
              "submittedDate": "2024-02-12",
              "subawardUEI": "string",
              "subawardNumber": "string",
              "subawardAmount": "string",
              "subawardDate": "string",
              "subawardDescription": "string",
              "placeOfPerformance": {
                "city": "string",
                "country": {
                  "code": "string",
                  "name": "string"
                },
                "stateOrProvidence": {
                  "code": "string",
                  "name": "string"
                },
                "zipPlus4": "string"
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
<summary>Example 6: Grants: Get (POST) request for a contract with 2 Subaward reports, when the request is not successful for both for different reasons. One element is returned for each Subaward report.</summary>
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
      "At least one assistanceData element is required for the grant reporting"
    ]
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
subawardDataList.placeOfPerformance.stateOrProvidence | JSON Object |NA |Yes|Subawardee POP State Information. The State Code and name need to be specified.
subawardDataList.placeOfPerformance.stateOrProvidence.code | string |||Subawardee POP State Code
subawardDataList.placeOfPerformance.stateOrProvidence.name | string ||  |Subawardee POP State Name
subawardDataList.placeOfPerformance.country | JSON Object | NA |Yes|Subawardee POP Country Information. The Country Code and name need to be specified.
subawardDataList.placeOfPerformance.country.code | string || |Subawardee POP Country Code
subawardDataList.placeOfPerformance.country.name | string ||  |Subawardee POP Country Name
subawardDataList.placeOfPerformance.zipPlus4 | string ||Yes|Subawardee POP zip+4 Code
subawardDataList.recovery_model_questions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subawardee. | Array of Compensation questions for the Subawardee. There will be 2 questions, and therefore 2 elements in this array
subawardDataList.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subawardDataList.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
subawardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the Array requires 5 elements| This is the compensation information for the top 5 employees. The array will have 5 elements for the 5 top pay Employees. This is required if response to compensation question 1 is true and compensation question 2 is false. If the responses to the compensation questions are already provided with the SAM registration for this entity, then this information is not required to be provided.
subawardDataList.topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top pay employee
subawardDataList.topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top pay employee

<p><small><a href="#">Back to top</a></small></p>

### Submit Subaward report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array | NA| Yes | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
assistanceData Details||||
assistanceData.primeFAIN | string |  255 characters | Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award. 
assistanceData.eftIndicator | string | 10 characters | No |If your organization has the eftIndicator to indicate specific payment locations within your organization as registered in SAM, this information will be picked up from the SAM registration. Otherwise, if applicable, you would note it here. 
assistanceData.subawardDataList |string  ||Yes  |Information about the sub Contractors. If the report is being submitted for multiple Subawards, then this array will have multiple elements, one for each of the sub Contracts.
assistanceData.subawardDataList Details | || | 
subawardDataList.subAssistanceNumber | string  | 32 characters |Yes  | Number assigned by the Prime to track this sub Grant
subawardDataList.uei |string | 13 characters | Yes | Subawardee UEI
subawardDataList.eftIndicator | string | 10 characters | No |If the Subawardee organization has the eftIndicator to indicate specific payment locations within your organization as registered in SAM, this information will be picked up from the SAM registration. Otherwise, if applicable, you would note it here. 
subawardDataList.subAssistanceDollars |string  | 20 characters| Yes | Amount for this award to this Subaward
subawardDataList.subAssistanceObligationOrActionDate|string ||Yes |Date subaward was made in YYYY-MM-DD format 
subawardDataList.overallDescription |string  |   | Yes |
subawardDataList.placeOfPerformance | JSON Object ||Yes | SubAwardee Principal Place of Performance (POP)
subawardDataList.placeOfPerformance.city | string || Yes |Subawardee POP City Name
subawardDataList.placeOfPerformance.stateOrProvidence | JSON Object ||Yes|Subawardee POP State Information. The State Code and name need to be specified.
subawardDataList.placeOfPerformance.stateOrProvidence.code | string |||Subawardee POP State Code
subawardDataList.placeOfPerformance.stateOrProvidence.name | string ||  |Subawardee POP State Name
subawardDataList.placeOfPerformance.country | JSON Object ||Yes|Subawardee POP Country Information. The Country Code and name need to be specified.
subawardDataList.placeOfPerformance.country.code | string || |Subawardee POP Country Code
subawardDataList.placeOfPerformance.country.name | string ||  |Subawardee POP Country Name
subawardDataList.placeOfPerformance.zipPlus4 | string ||Yes|Subawardee POP zip+4 Code
subawardDataList.recovery_model_questions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subawardee. | Array of Compensation questions for the Subawardee. There will be 2 questions, and therefore 2 elements in this array
subawardDataList.recovery_model_questions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. This will be 1 for the first question and 2 for the second compensation question. Refer to the Recovery Model Questions (Compensation Questions) section for details.
subawardDataList.recovery_model_questions.isSelected |string  || Yes, if Compensation question responses are being provided. | Boolean value representing the response to the compensation question.
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

### Delete Subaward report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length|  Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array  |  | Yes, at least one element in the array is required. At least one field is required for the fields in each element. |Information about the prime Grantor. If the request is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
assistanceData Details| | | | 
assistanceData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Contractor to track the subaward. This is returned as a part of the response for the Create, Update and Get calls for the Subaward report.
assistanceData.reportStatus | string |32 characters  | No | The status of the report to be deleted. If no status is provided, then all associated reports (in all statuses) will be deleted.

<p><small><a href="#">Back to top</a></small></p>

###  Get Subaward report Contract JSON

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

### Get Subaward report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length | Required | Description
-----|-----------|----------------|------------|-------
assistanceData | JSON Array  |   |Yes |Information about the prime Grantee and the Subaward report(s). If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
assistanceData Details| | | | 
primeFAIN | string  |255 characters |Yes | This is the Federal Award Identifier Number (FAIN) for the prime grant award.
assistanceData.subawardReportNumber | string |32 characters  | No | Number assigned by the Prime Grantee to track the subaward. This is returned as a part of the response for the Create, Update calls for the Subaward report.
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
401	|	Please provide valid Authorization Email & API Key	|	API Key and/or Authorization Email are required	|	All |
401	|	Encountered error authenticating user. Invalid JWT provided	|	Invalid Authorization Email provided	|	All |
403	|	You do not have permissions to access this resource	|	Account does not have appropriate privileges to perform the operation	|	All |
404	|	Requested URL not found	|	Not found	|	All |
500	|	Internal Server Error encountered. Please try after sometime	|	Internal Server Error	|	All |
501	|	Invalid request	|	Not Implemented	|	All |
400	|	Error processing the request	|	Invalid JSON format provided	|	All |
400	|	Invalid JSON structure. assistanceData is required	|	The assistanceData element is required in the request body.	|	submitSubawardReport, updateSubawardReport(Grants) |
400	|	Invalid JSON structure: At least one contractData is required for Subaward reporting.	|	Request Body JSON structure is invalid. At least one contractData.contractData element is required for Subaward reporting	|	All (Contracts) |
400	|	Invalid JSON structure: At least one assistanceData is required for grant reporting.	|	Request Body JSON structure is invalid. At least one assistanceData element is required for  grant reporting	|	submitSubawardReport, updateSubawardReport(Grants) |
400	|	Ensure that the FAIN Number is correct. No matching Grant found for the provided FAIN number	|	As provided in assistanceData.primeFAIN, FAIN Number not found	|	submitSubawardReport, updateSubawardReport(Grants) |
400	|	Could not find a record matching the contractNumber and reportingAgencyCode provided	|	No record found for the Contract Number and Reporting Agency Code combination (Combination of contractData.contractNumber and contractData.reportingAgencyCode in the Request Body).	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Could not find a record associating the IDV reference number with the Contract number	|	IDV Reference Number not found associated with the Contract Number (Combination of contractData.contractNumber and contractData.idvReferenceNumber)	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Please specify the idvReferenceNumber to correctly identify the contract being reported on	|	User needs to specify the idvReferenceNumber to correctly identify the record as multiple records were found for the contractNumber and reportingAgency combination	|	submitSubawardReport(Contracts) |
400	|	Cannot update. A Subaward report for the specified subawardReportNumber does not exist.	|	No Report found for the specified subawardReportNumber. |	updateSubawardReport(Contracts, Grants) |
400	|	Contract Number is required for Prime Entity	|	contractData.contractNumber was not provided.	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Please provide the Federal awarding Agency Code	|	contractData.reportingAgencyCode is a required field.	|	submitSubawardReport, updateSubawardReport(Contracts) |
400	|	Please provide the correct format for the Federal awarding Agency Code	|	contractData.reportingAgencyCode provided is invalid.	|	submitSubawardReport ,updateSubawardReport(Contracts) |
400	|	At least one contractData element is required for the Subaward reporting	|	At least one contractData element is required for the Subaward reporting	|	getSubawardReport(Contracts) |
400	|	At least one assistanceData element is required for the grant reporting	|	At least one assistanceData element is required for the grant reporting	|	getSubawardReport(Grants) |
400	|	Subawardee UNIQUE ENTITY ID # is required	|	Subawardee UNIQUE ENTITY ID # is required	|	submitSubawardReport ,updateSubawardReport(Contracts and Grants) |
400	|	At least one search criteria needs to be specified. One of contractNumber, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber, subawardReportNumber	|	contractNumber, reportingAgencyCode, idvReferenceNumber, referenceAgencyCode, subawardNumber and subawardReportNumber are missing for at least one element in the request	|	getSubawardReport(Contracts and Grants) |
400	|	At least one search criteria needs to be specified. |	Search Criteria are missing for at least one element in the request.	|	getSubawardReport(Contracts and Grants) |
400	|	At least one contractData element is required for deleting	|	At least one contractData element is required for deleting	|	deleteSubawardReport(Contracts) |
400	|	At least one assistanceData element is required for deleting	|	At least one assistanceData element is required for deleting	|	deleteSubawardReport(Grants) |
400	|	No report found matching the specified parameters for the report	|	No report found matching the specified parameters for the report.	|	deleteSubawardReport(Contracts and Grants) |

<p><small><a href="#">Back to top</a></small></p>

### Validation Failure Error Messages

This section details possible validation failure error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.

HTTP Status Code|Field | Error Message | Reason/Description | Operation |
-----|------|---------------|--------------------|----------|
201|subawardDataList|	Invalid JSON format: At least one Subawardee information is required for the reporting | At least one Subawardee information is required for the reporting | submitSubawardReport(Contracts)
201|subawardDataList.subawardNumber|	Subaward number is required | Subaward number is required | submitSubawardReport(Contracts)
201|subawardDataList.subawardNumber|	Subaward number should be unique across multiple elements of subawardDataList  | Subaward number should be unique across multiple elements of subawardDataList  | submitSubawardReport(Contracts)
201|subawardDataList.subawardDollars |	Subaward Amount is required | Subaward Amount is required| submitSubawardReport(Contracts)
201|subawardDataList.subawardDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| submitSubawardReport(Contracts)
201|subawardDataList.periodOfPerformanceStartDate | Subaward Date is required | Subaward Date is required | submitSubawardReport(Contracts)
201|subawardDataList.periodOfPerformanceStartDate | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubawardReport(Contracts)
201|subawardDataList.periodOfPerformanceStartDate | The Subaward Date cannot be in the future. | The Subaward Date cannot be in the future. |  submitSubawardReport(Contracts)
201|subawardDataList.uei  subAssistanceDataList.uei | Sub UNIQUE ENTITY ID # must be exactly 12 characters |	Sub UNIQUE ENTITY ID # must be exactly 12 characters  | submitSubawardReport(Contracts)
201|subawardDataList.uei  subAssistanceDataList.uei |	TBD(The Subawardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov) |	TBD(The Subawardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov.) |	submitSubawardReport(Contracts)
201|subawardDataList.overallDescription   subAssistanceDataList.overallDescription |	Subaward overall description is required. |	Subaward overall description is required. |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.overallDescription   subAssistanceDataList.overallDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance is required. |	Subaward Place of Performance is required. |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance Section - Country is required |	Subaward Place of Performance Section - Country is required | submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters | submitSubawardReport(Contracts and Grants
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - Country is required |	Only for US addresses: Subaward Place of Performance Section - Country is required |  submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance|	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid |	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid | submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - State is required |	Only for US addresses: Subaward Place of Performance Section - State is required |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - State provided is invalid |	Only for US addresses: Subaward Place of Performance Section - State provided is invalid|	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City is required	| Only for US addresses: Subaward Place of Performance Section - City is required | submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City provided is invalid| Only for US addresses: Subaward Place of Performance Section - City provided is invalid | submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 is required | Only for US addresses: Subaward Place of Performance Section - zip+4 is required |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | submitSubawardReport(Contracts and Grants)
201|subawardDataList.topPayEmployees      subAssistanceDataList.topPayEmployees | Sub Top Employer Compensation - full name and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	submitSubawardReport(Contracts and Grants)
201|subawardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	submitSubawardReport(Contracts and Grants)
201|subawardDataList.topPayEmployees.fullName | Sub topPayEmployees.fullName is required |Sub topPayEmployees.fullName is required |	submitSubawardReport(Contracts and Grants)
201|subAssistanceDataList | At least one Subawardee information is required for the reporting |At least one Subawardee information is required for the reporting |	submitSubawardReport(Grants)
201|subAssistanceDataList.subAssistanceNumber | Subaward number is required |Subaward number is required |	submitSubawardReport(Grants)
201|subAssistanceDataList.subAssistanceNumber| Subaward number should be unique across multiple elements of subawardDataList  |Subaward number should be unique across multiple elements of subawardDataList |	submitSubawardReport(Grants)
201|subAssistanceDataList.subAssistanceDollars |	Subaward Amount is required	| Subaward Amount is required | submitSubawardReport(Grants)
201|subAssistanceDataList.subAssistanceDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | submitSubawardReport(Grants)
201|subAssistanceDataList. subAssistanceObligationOrActionDate |	Subaward Date is required | Subaward Date is required| submitSubawardReport(Grants)
201|subAssistanceDataList. subAssistanceObligationOrActionDate |	Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | submitSubawardReport(Grants)
201|subAssistanceDataList. subAssistanceObligationOrActionDate |	The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | submitSubawardReport(Grants)
200|recovery_model_questions |	Responses to Compensation Questions were not found under SAM registration for the UEI <UEI Number>. Please provide the responses to the compensation questions under recovery_model_questions JSON element |Responses to compensation questions are required  if they are not available for the Prime Entity's SAM registration| updateSubawardReport(Contracts and Grants)
200|recovery_model_questions |	Compensation Q1 code and response are required |Compensation Q1 code and response are required if responses to compensation questions is provided|updateSubawardReport(Contracts and Grants)
200|recovery_model_questions |Since you responded true to the first compensation question, a response for the second compensation question is required.|	Compensation Q2 code and response are required	| updateSubawardReport(Contracts and Grants)
200|recovery_model_questions |An incorrect compensation question code was provided for the Prime/Subawardee. Please refer to the Lookup table information for the correct codes to use.| Compensation question code provided did not match expected codes |	updateSubawardReport(Contracts and Grants)
200|recovery_model_questions |	Compensation question isSelected value can only be true or false | Compensation question isSelected value can only be true or false | updateSubawardReport(Contracts and Grants)
200|subawardDataList|	Invalid JSON format: At least one Subawardee information is required for the reporting | At least one Subawardee information is required for the reporting | updateSubawardReport(Contracts)
200|subawardDataList.subawardNumber|	Subaward number is required | Subaward number is required | updateSubawardReport(Contracts)
200|subawardDataList.subawardNumber|	Subaward number should be unique across multiple elements of subawardDataList  | Subaward number should be unique across multiple elements of subawardDataList  | updateSubawardReport(Contracts)
200|subawardDataList.subawardDollars |	Subaward Amount is required | Subaward Amount is requiredn| updateSubawardReport(Contracts)
200|subawardDataList.subawardDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)s| updateSubawardReport(Contracts)
200|subawardDataList.periodOfPerformanceStartDate | Subaward Date is required | Subaward Date is required | updateSubawardReport(Contracts)
200|subawardDataList.periodOfPerformanceStartDate | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubawardReport(Contracts)
200|subawardDataList.periodOfPerformanceStartDate | The Subaward Date cannot be in the future. | The Subaward Date cannot be in the future. |  updateSubawardReport(Contracts)
200|subawardDataList.uei  subAssistanceDataList.uei | Sub UNIQUE ENTITY ID # must be exactly 12 characters |	Sub UNIQUE ENTITY ID # must be exactly 12 characters  | updateSubawardReport(Contracts)
200|subawardDataList.uei  subAssistanceDataList.uei |	TBD(The Subawardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov) |	TBD(The Subawardee Unique Entity ID provided does not match with either an active Entity Management Registration, or a UEI registrant at SAM.gov.) |	updateSubawardReport(Contracts)
200|subawardDataList.overallDescription   subAssistanceDataList.overallDescription |	Subaward overall description is required. |	Subaward overall description is required. |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.overallDescription   subAssistanceDataList.overallDescription |	Program or Project Title exceeds 250 character limit. | Program or Project Title exceeds 250 character limit. |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance is required. |	Subaward Place of Performance is required. |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance Section - Country is required |	Subaward Place of Performance Section - Country is required | updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters |	Subaward Place of Performance Section - zip+4 Code cannot exceed 9 characters | updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - Country is required |	Only for US addresses: Subaward Place of Performance Section - Country is required |  updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance|	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid |	Only for US addresses: Subaward Place of Performance Section - Country provided is invalid | updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - State is required |	Only for US addresses: Subaward Place of Performance Section - State is required |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - State provided is invalid |	Only for US addresses: Subaward Place of Performance Section - State provided is invalid|	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City is required	| Only for US addresses: Subaward Place of Performance Section - City is required | updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance |	Only for US addresses: Subaward Place of Performance Section - City provided is invalid| Only for US addresses: Subaward Place of Performance Section - City provided is invalid | updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 is required | Only for US addresses: Subaward Place of Performance Section - zip+4 is required |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	Only for US addresses: Subaward Place of Performance Section - zip+4 provided is invalid |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.placeOfPerformance    subAssistanceDataList.placeOfPerformance | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | updateSubawardReport(Contracts and Grants)
200|subawardDataList.topPayEmployees      subAssistanceDataList.topPayEmployees | Sub Top Employer Compensation - full name and amount are required for all 5 top pay employees. |If Compensation Question 1 answer is true and Compensation Question 2 answer is false: topPayEmployees is required|	updateSubawardReport(Contracts and Grants)
200|subawardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub Top Employer Compensation: amount must contain only digits and not exceed 12 digits |Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.topPayEmployees.salary    subAssistanceDataList.topPayEmployees.salary | Sub topPayEmployees.salary is required |Sub topPayEmployees.salary is required |	updateSubawardReport(Contracts and Grants)
200|subawardDataList.topPayEmployees.fullName | Sub topPayEmployees.fullName is required |Sub topPayEmployees.fullName is required |	updateSubawardReport(Contracts and Grants)
200|subAssistanceDataList | At least one Subawardee information is required for the reporting |At least one Subawardee information is required for the reporting |	updateSubawardReport(Grants)
200|subAssistanceDataList.subAssistanceNumber | Subaward number is required |Subaward number is required |	updateSubawardReport(Grants)
200|subAssistanceDataList.subAssistanceNumber| Subaward number should be unique across multiple elements of subawardDataList  |Subaward number should be unique across multiple elements of subawardDataList |	updateSubawardReport(Grants)
200|subAssistanceDataList.subAssistanceDollars |	Subaward Amount is required	| Subaward Amount is required | updateSubawardReport(Grants)
200|subAssistanceDataList.subAssistanceDollars |	Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents)	| Subaward Amount must contain only numbers and up to 2 decimal places (18 digits plus cents) | updateSubawardReport(Grants)
200|subAssistanceDataList. subAssistanceObligationOrActionDate |	Subaward Date is required | Subaward Date is required| updateSubawardReport(Grants)
200|subAssistanceDataList. subAssistanceObligationOrActionDate |	Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | Date of Subaward for Subawardee: (XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format) | updateSubawardReport(Grants)
200|subAssistanceDataList. subAssistanceObligationOrActionDate |	The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | The Subaward Date cannot be in the future and should be on or after the Base Obligation Date for the assistance | updateSubawardReport(Grants)

<p><small><a href="#">Back to top</a></small></p>

## FAQ

TBD

## Contact Us

* A User can reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
--------- | --------------- | ---------
07/15/2023 | v0.1 | Base Version
10/12/2023 | v0.2 | Updates to GET calls and minor cosmetic changes
11/10/2023 | v0.3 | Updates to remove FFATA and use Subaward
03/06/2024 | v0.4 | Updates to align with new Data Model


<p><small><a href="#">Back to top</a></small></p>
