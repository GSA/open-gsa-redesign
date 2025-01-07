---
title: SAM.gov Subaward reporting Bulk Upload API 
banner-heading: SAM.gov Subaward reporting Bulk Upload API
---

## Overview 

This documentation provides information for publishing subcontract and subaward reports to SAM.gov. 
Only the SAM.gov test environment - alpha.SAM.gov - is available to test subcontract and subaward report uploads. The production Subaward Reporting Bulk Upload API has a target launch date of Spring 2025.

**Tips and Key Features of the Subaward Reporting Bulk Upload API** 
* You must have an alpha.SAM.gov system account with reporting permissions and a system account API key to use this API to report subcontracts and subawards.
* You can use the same system account for an entity and any of its child entities. You do not need separate system accounts for each child entity.
* You need separate system accounts to bulk report for entities not in the same hierarchy.
* API requests must use a REST API connection type.
* API requests must come from the IP address(es) listed on your system account application.

## Getting Started

Access the Subaward Reporting Bulk Upload API from the following Production or Alpha environments:

**Production** 
* Target availability in Spring 2025

**Alpha** 
* https://api-alpha.SAM.gov/prodlike

### Authentication, Authorization and API Keys

#### Get a System Account
A system account enables you to use this API to publish multiple subcontract or subaward reports to alpha.SAM.gov at once using software or web services. Follow these steps to get a system account with subaward reporting permissions:
1. Get an entity reporting Data Entry or Administrator role with subaward permissions enabled on your alpha.SAM.gov user account. If you do not have the entity reporting role, request it from your Entity Administrator.
2. Request the Non-Federal System Administrator role by reaching out to samtesting@gsa.gov
3. Once you have the Non-Federal System Administrator role, sign in to alpha.SAM.gov. Locate the System Account section in your Workspace and select the section title.
4. Select the **New Account** button. Enter the required information and submit the application.

The General Services Administration reviews system account applications. You will be notified by email when an application is approved or rejected.

If you apply for a system account without receiving the Non-Federal System Administrator role, you can still use a system account to pull other types of alpha.SAM.gov data by API, but you will not have the permissions required to publish subcontract or subaward reports to alpha.SAM.gov. 

#### Get a System Account API Key 
We require a system account API key to use this API. Once your system account is approved, get an API key from the System Account Workspace. When your system account is new, you must set up a system account password before generating your API key. Once your password is set up, you must enter it to get your API key. 

API keys are valid for 90 days. New keys are automatically generated 15 days before the key expires. New and current keys are active and valid during the 15-day period until the current key expires on the 90th day.

If using the Alpha environment API, get your API key from your alpha.SAM.gov System Account Workspace.  

#### API Key Rate Limits 
We limit call rates by day and account type.

|   Type of Account   | Type of API Key   | API Daily Rate Limit   |
| ---------------------------------- | ----------------- | ----------------- |
| Non-federal user with no role to an entity in alpha.SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a role to an entity in alpha.SAM.gov |  Personal API key | 1,000 requests/day |
| Non-federal system account user | System account API key | 1,000 requests/day |

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Subcontract and Subaward Reports Executive Compensation Questions

alpha.SAM.gov requires responses to subcontractor and subrecipient executive compensation questions to submit subcontract and subaward reports. If your subcontractor or subrecipient does not have responses to these questions on their alpha.SAM.gov entity record, you must provide responses in your request. The tables below outline the questions and corresponding codes for your requests.

#### Subcontractor Questions

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Subcontractor Question 1| __1__	            | As provided to you by your subcontractor, in your subcontractor’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive $25,000,000 or more in annual gross revenues from Federal contracts (and subcontracts), loans, grants (and subgrants), cooperative agreements, and other forms of Federal financial assistance? |
| Subcontractor Question 2| __2__	            | As provided to you by your subcontractor, in your subcontractor’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive 80 percent or more of its annual gross revenues from Federal contracts (and subcontracts), loans, grants (and subgrants), cooperative agreements, and other forms of Federal financial assistance?|
| Subcontractor Question 3| __3__	            | As provided to you by your subcontractor, does the public have access to information about the compensation of the executives in the subcontractor's business or organization (the legal entity to which the Unique Entity ID (SAM) it provided belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

#### Subrecipient Questions

|                                   | Code              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| Subrecipient Question 1| __1__	            | As provided to you by your subrecipient, in your subrecipient’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive $25,000,000 or more in annual gross revenue from Federal procurement contracts (and subcontracts) and Federal awards (and subawards) subject to the Transparency Act, as defined at § 170.300? |
| Subrecipient Question 2| __2__	            | As provided to you by your subrecipient, in your subrecipient’s business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the Unique Entity ID it provided belongs) receive 80 percent or more of its annual gross revenue in Federal procurement contracts (and subcontracts) and Federal awards (and subawards) subject to the Transparency Act, as defined at § 170.300?|
| Subrecipient Question 3| __3__	            | As provided to you by your subrecipient, does the public have access to information about the compensation of the executives in the subrecipient’s business or organization (the legal entity to which the Unique Entity ID (SAM) it provided belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal Revenue Code of 1986?|

<p><small><a href="#">Back to top</a></small></p>

### Report Status

The table below lists subcontract and subaward report statuses.

Code | Value     | Description
-----|-----------------|-----------------
1     | Draft | A report has been started and saved but has not been published and requires additional information or updates to be published. 
2     | Published | A report has all required information and is successfully published.
3     | Reopened | When you update a published report, we create a reopened version. alpha.SAM.gov keeps the published version public until you publish the updates.
4     | Deleted | A report has been deleted. Deleted reports are not publicly available.

<p><small><a href="#">Back to top</a></small></p>

## GENC Standards
alpha.SAM.gov uses the [Geopolitical Entities, Names, and Codes (GENC) standards](https://geonames.nga.mil/geonames/GeographicNamesSearch/), which provide country and administrative area codes recognized by the U.S. government. Please refer to the [Error Messages](#validation-failure-error-messages)  section for specific details for these errors.

### API Fields

Field Name | Data Source  | Valid Statuses  | Input Type
---------------|------------|----------|------------
Country Code |  Country_Code MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources | Active, Inactive (GET calls Only) | Three (3) characters
Country Name |  fullName MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources |   | TEXT
State | State MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources   | Listed from the selected country | Two (2) characters

<p><small><a href="#">Back to top</a></small></p>

## Version Control

All API v1 versions use the API Key mechanism outlined in this documentation.

## SAM.gov Subaward reporting Bulk Upload API Request and Responses

### Subcontract API Endpoints  

Endpoint Name | Description |
-----|-----------------
Submit subcontract report | Used to submit subcontract reports for reporting on one or more contracts.
Update subcontract report | Used to update a previously published subcontract report for a contract.
Delete subcontract report | Used to delete a subcontract report for a contract.
Get subcontract report | Used to get details for a subcontract report for a contract. 
Search subcontract report | Used to get subcontract reports for contracts based on optional search criteria. 

### Subaward API Endpoints  

Endpoint Name | Description |
-----|-----------------
Submit subaward report | Used to submit subaward reports for reporting on one or more assistance awards.
Update subaward report | Used to update a previously published subaward report for an assistance award.
Delete subaward report | Used to delete subaward reports for an assistance award.
Get subaward report | Used to get details for a subaward report for an assistance award.
Search subaward report | Used to get subaward reports for assistance awards based on optional search criteria.

The following section describes each of the above endpoints in detail.

### Submit Subcontract report

------- | ------- |
**Request Type** | POST 
**URL** | /contract/v1/subcontracts/
**Summary** | You can publish one or more subcontract reports using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subcontract report Contract JSON](#submit-subcontract-report-contract-json)

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
201 Created | string | At least one subcontract report was created 
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

Go to the [General Error Messages](#general-error-messages) section for details on the status code error message. The overall status code 201 displays if at least one subcontract report is processed successfully, even if some subcontract reports fail to process. 

The API handles subcontract report requests as follows:
* If a subcontract report request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, the report is saved in the **Published** status.  
* If any validations fail, the report is saved in **Draft** status, and validation error messages are sent back as a part of the response body. 

The overall response is a JSON array containing the status of each subcontract report in the request. Each subcontract report created is assigned a unique Id **subawardReportNumber** that is sent back as a part of the response. The **subawardReportNumber** is used to make any update, delete or get calls. See the [Response JSON](#response-json) section for the response structure and specific examples. 

#### Examples

<details>
<summary>Example 1: Submit subcontract reports for multiple contracts and subcontracts under them. The example includes task order where the Referenced IDV is required, and the subcontractor’s executive compensation information is already on the subcontractor’s alpha.SAM.gov entity record.</summary>
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
<summary>Example 2: Submit subcontract reports with partial data. The report will be saved in Draft status, and validation errors will be returned. </summary>
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

### Submit Subaward Report

------- | -------
**Request Type** | POST
**URL** | /assistance/v1/subawards/
**Summary** | You can publish one or more subaward reports using this endpoint
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Submit Subaward report Assistance JSON](#submit-subaward-report-assistance-json)

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
201 Created | string | At least one subaward report was created 
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

Go to the [General Error Messages](#general-error-messages) section for details on the status code error message. The overall status code 201 displays if at least one subaward report is processed successfully, even if some subaward reports fail to process.

The API handles subaward report requests as follows:

* If a subaward report request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, the report is saved in the **Published** status.  
* If any validations fail, the report is saved in **Draft** status, and validation error messages are sent back as a part of the response body. 

The overall response is a JSON array containing the status of each subaward report in the request. Each subaward report created is assigned a unique Id **subawardReportNumber** that is sent back as a part of the response. The **subawardReportNumber** is used to make any update, delete or get calls. See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Submit subaward reports for multiple assistance awards and subawards under them. The example includes the subrecipient’s executive compensation information is already on the subrecipient’s alpha.SAM.gov entity record.</summary>
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
<summary>Example 2: Submit subaward reports with partial data. The report will be saved in Draft status, and validation errors will be returned. </summary>
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

### Update Subcontract Report

------- | -------
**Request Type** | PUT
**URL** | /contract/v1/subcontracts/{subawardReportNumber}
**Summary** | You can update a subcontract report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subcontract report.
Request JSON | Body | JSON | Yes | [Refer Update Subcontract report Contract JSON](#update-subcontract-report-contract-json)

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report was updated
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

Go to the [General Error Messages](#general-error-messages) section for details on the status code error message. 

If the request passes all validations as specified in the [Validation Failure Error Messages](#validation-failure-error-messages) section, the report status is updated as follows:
* Updates on a **Draft** report are updated to **Published**.
* Updates on a **Published** report create a new report in the Published status. The previous Published report is archived.

If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described:
* Updates on a **Draft** report stay in **Draft** status.
* Updates on a **Published** report create a report in the **Reopened** status, and the Published record remains public.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples: 
<details>
<summary>Example 1: Update a subcontract report with all required information.</summary>
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
<summary>Example 2: Update a subcontract report with partial data. In this case, the report will be saved in the Reopened status, and validation errors will be returned. </summary>
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

### Update Subaward Report

------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | You can update a subaward report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
Content-Type | header |  string | Yes | application/json
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subaward report.
Request JSON | Body | JSON | Yes | [Refer Update Subaward report Assistance JSON](#update-subaward-report-assistance-json)

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subaward report was updated
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

Go to the [General Error Messages](#general-error-messages) section for details on the status code error message.

The API handles subaward report requests as follows:

* Updates on a **Draft** report are updated to **Published**.
* Updates on a **Published** report create a new report in the Published status. The previous Published report is archived.

If any validations fail, validation error messages are sent back as a part of the response body. The report status is updated as described:
* Updates on a **Draft** report stay in **Draft** status.
* Updates on a **Published** report create a report in the **Reopened** status, and the Published record remains public.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples: 

<details>
<summary>Example 1: Update subaward report with all required information.</summary>
<p>
<code><pre>
{
   "assistanceData":{
      "fain":"1001KS1420",
      "subawardData":{
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
<summary>Example 2: Update subaward report with partial data. The report will be saved in Reopened status and validation failure messages will be returned. </summary>
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

### Delete Subcontract Report

------- | -------
**Request Type** | DELETE
**URL** | /contract/v1/subcontracts/{subawardReportNumber}
**Summary** | User will be able to delete subcontract report(s)
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subcontract report.
status | query | string | No | Status of the subcontract report.

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report(s) successfully deleted
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

This API returns the HTTP Status code 200 when the report is deleted successfully. If other errors occur, the API returns other HTTP Status codes and the report will not be deleted. Refer to the [Error Messages](#error-messages) section for details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete subcontract report for the given status.</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Delete request to delete a subcontract report in all statuses, Published, Reopened or Draft, for a contract when status is not provided</summary>
<p>
Do not provide any status in the request.
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Subaward Report

------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | User will be able to delete subaward report(s)
**Consumes** | Request Parameters
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subaward report.
status | query | string | No | Status of the subaward report.

#### Responses

The following section describes HTTP status codes and the response type:

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subaward report(s) successfully deleted
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
400 Bad Request | string | Malformed request or invalid data 
500 Internal Server Error | string | Unexpected error occurred during processing

This API returns the HTTP Status code 200 when the report is deleted successfully. If other errors occur, the API returns other HTTP Status codes and the report will not be deleted. Refer to the [Error Messages](#error-messages) for details.

See the [Response JSON](#response-json) section for the response structure and specific examples.

#### Examples

<details>
<summary>Example 1: Delete request to delete a subaward report</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Delete request to delete subaward reports in all statuses, Published, Reopened, or Draft, when status is not provided</summary>
<p>
Do not provide any status in the request.
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get Subcontract Report

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
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subcontract report.
status | query | string | No | Status of the subcontract report

#### Examples

<details>
<summary>Example 1: Get subcontract reports for a specific contract based on the subcontract report number and report status. </summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Get all subcontract reports for a specific subaward report number when status is not provided.</summary>
<p>
Do not provide any status in the request.
</p>
</details>

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subcontract report(s) successfully retrieved [Refer Contract JSON](#submit-subcontract-report-contract-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

Requests return a JSON response that is the same as the POST Response JSON. The subawardReportNumber and the reportStatus are sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Get Subaward Report 

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/subawards/{subawardReportNumber}
**Summary** | User will be able to retrieve a specific subaward report
**Consumes** | application/JSON
**Produces** | Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
subawardReportNumber | path | string | Yes | Unique identifier for the subaward report.
status | query | string | No | Status of the subaward report

#### Examples

<details>
<summary>Example 1: Get subaward reports for a specific assistance award based on the subaward report number and report status.</summary>
<p>
Provide the status (Draft, Published or Reopened as a Query Param) in the request.
</p>
</details>

<details>
<summary>Example 2: Get all subaward reports for a specific assistance award based on the subaward report number when no status is provided.</summary>
<p>
Do not provide any status in the request.
</p>
</details>

#### Responses

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 Ok | string | Subaward report(s) successfully retrieved [Refer  Contract JSON](#submit-subaward-report-assistance-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

Requests return a JSON response that is the same as the POST Response JSON. The subawardReportNumber and the reportStatus are sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Search Subcontract report

------- | -------
**Request Type** | GET
**URL** | /contract/v1/subcontracts
**Summary** |  You can get specific subcontract reports based on the provided search criteria.
**Consumes** | Request Parameters as described below
**Produces** | A paginated response. Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
contractNumber | query | string | No | The Contract ID (PIID)
reportingAgencyCode | query | string | No | The agency code for the contract
idvReferenceNumber | query | string | No | The Referenced IDV for the contract
referenceAgencyCode | query | string | No | The Reference Agency Code for the Referenced IDV
subawardReportNumber | query | string | No | Unique identifier for the subcontract report
reportStatus | query | string | No | The status of the Subaward Report to fetch (Draft, Published or Reopened)
page | query | string | No | The page number for the response to be retrieved (default is 0 which is the first page)
size | query | string | No | The page size (default is 10)

#### Examples

<details>
<summary>Example 1: Get subcontract reports for a specific contract based on the subcontract report number and report status.</summary>
<p>
Provide subawardReportNumber and reportStatus (Draft, Published or Reopened) as query Params in the request.
</p>
</details>

<details>
<summary>Example 2: Get all published subcontract reports.</summary>
<p>
Provide reportStatus as 'Published' as a query Param in the request.
</p>
</details>

<details>
<summary>Example 3: Get all subcontract reports for a specific contract.</summary>
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

The following section describes HTTP status codes and the response type.

HTTP Status Code | Response Type | Description
-----------------|---------------|------------
200 | string | Report was successfully retrieved [Refer Contract JSON](#submit-subcontract-report-contract-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

Requests return a JSON response that is the same as the POST Response JSON. The subcontract report number and the report status are sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

### Search Subaward Report 

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/subawards
**Summary** |  You can get specific subaward reports based on the provided search criteria
**Consumes** | Request Parameters as described below
**Produces** | A paginated response. Refer [Response JSON](#response-json)
**Active Versions** | v1

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized alpha.SAM.gov user email ID
api_key | query | string | Yes | Valid System Account API Key
FAIN | query | string | No | The Award ID (FAIN) for the award
agencyCode | query | string | No | The agency code for the assistance award
subawardReportNumber | query | string | No | Unique identifier for the subaward report 
reportStatus | query | string | No | The status of the subaward Report to fetch (Draft, Published or Reopened)
page | query | string | No | The page number for the response to be retrieved (default is 0 which is the first page)
size | query | string | No | The page size (default is 10)

#### Examples

<details>
<summary>Example 1: Get subaward reports for a specific assistance award based on the Subaward ID and report status.</summary>
<p>
Provide subawardReportNumber and reportStatus (Draft, Published or Reopened) as query Params in the request.
</p>
</details>

<details>
<summary>Example 2: Get all published subaward reports for a specific assistance award.</summary>
<p>
Provide reportStatus as 'Published' as a query Param in the reques
</p>
</details>

<details>
<summary>Example 3: Get all subaward reports for a specific assistance award</summary>
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
200	|JSON|	Report was successfully retrieved [Refer Submit Subaward report Assistance JSON](#submit-subaward-report-assistance-json)
401 Unauthorized | string | Authentication failed or was not provided 
403 Forbidden | string | Authenticated, but do not have appropriate permissions
500 Internal Server Error | string | Unexpected error occurred during processing

Requests return a JSON response that is the same as the POST Response JSON. The subaward report number and the report status are sent back as a part of the response. See the [Response JSON](#response-json) section for the response structure and specific examples.

<p><small><a href="#">Back to top</a></small></p>

## API JSON Structures
### Response JSON

All subcontract and subaward API endpoints return a response JSON. The following section describes the generic structure of the response JSON and the differences in the endpoints.

Response Element | Response Type | Description
-----------------|---------------|------------
 _ | JSON Array | One element for each Subaward report in request
id | string | For a contract report, it is the concatenated values of contractNumber, reportingAgency, idvRefrenceNumber, referenceAgencyCode, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a Assistance report, it is the concatenated value of fainNumber, subawardNumber, subawardDate, subawardAmount and submittedDate separated by ':'. For a GET or DELETE request, if the request is unsuccessful, then it is the concatenated value of the search parameters separated by ":".
statusCode | string | The HTTP Status code for the Subaward report element
transactionId | string | Internal ID used by the alpha.SAM.gov support team to trace issues. You can provide this to the support team if you report an issue.
timeStamp | string | Date and time when the request was processed
subawardReportNumber | string | Unique identifier for the subcontract or subaward report. This ID can be used for any subsequent update/delete calls
reportStatus | string | Status of the subcontract or subaward report. 
message | string | Message indicating status of the operation. Also includes any informative warning messages.
errors | JSON Array | If there are validation errors, they are sent back as a part of this errors array.

#### Subcontract report Warnings
The API sends descriptive messages in the **message** element on create(POST) and update(PUT) requests for subcontract reports in the following scenarios:
* When the sum of all subcontract amounts for the contract is greater than the Total Contract Value.
* When the subcontract amount is greater than the Total Contract Value.
* When the subcontract amount provided matches the subcontract amount of the previous subcontract report for the same subcontractor.
* When the date of the subcontract provided matches the date of the subcontract of the previous subcontract report for the same subcontractor.
* When there are existing subcontract reports for the same contract number and the same subcontractor with the same Subcontract ID and Subcontract Date.
* When there are existing subcontract reports for the same Contract Number and the same subcontractor with the same Subcontract ID and Subcontract Date submitted today.
* When there are existing subcontract reports for the same Contract Number and the same subcontractor with the same Subcontract id, Subcontract Date and Subcontract Amount submitted today.

#### Subaward report Warnings
The API sends descriptive messages in the **message** element on create(POST) and update(PUT) requests for subaward reports in the following scenarios:
* When the sum of all subaward amounts for the assistance is greater than the Total Award Value.
* When the subaward amount is greater than the Total Award Value.
* When the subaward amount provided matches the subaward amount of the previous subaward report for the same subrecipient.
* When the date of the subaward provided matches the date of the subaward of the previous subaward report for the same subrecipient.
* When there are existing subaward reports for the same assistance number and the same subrecipient with the same Subaward ID and Subaward Date.
* When there are existing subaward reports for the same Assistance Number and the same subrecipient with the same Subaward ID and Subaward Date submitted today.
* When there are existing subaward reports for the same Assistance Number and the same subrecipient with the same Subaward id, Subaward Date and Subaward Amount submitted today.


#### Contract example Responses
<details>
<summary>Example 1: Create (POST) request for three subcontract reports and the first was successfully published, the second was saved in Draft status with validation failures, and the third could not be created. </summary>
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
<summary>Example 2: Update (PUT) request for a subcontract report and the report was successfully published. </summary>
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
<summary>Example 3: Update (PUT) request for a subcontract report when the report was saved in Draft status and error messages are returned. </summary>
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
<summary>Example 4: Delete (DELETE) request for a subcontract report when only the subcontractReportNumber was provided, Published and Reopened reports exist, and both are deleted successfully. One element is returned for each deleted report. </summary>
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
<summary>Example 5: Delete (DELETE) request for a subcontract report and the delete request is not successful. </summary>
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
<summary>Example 6: Paginated GET request for a contract with nine subcontract reports and two pages. Search is executed with a Contract ID (PIID) in the query parameters. One element is returned for each subcontract report.</summary>
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
<summary>Example 7: Contracts: GET request for a specific subcontract report in the Published status.</summary>
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

#### Assistance example Responses
<details>
<summary>Example 1: Create (POST) request for three subaward reports and the first was successfully published, the second was saved in Draft status with validation failures, and the third could not be created. </summary>
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
<summary>Example 2: Update (PUT) request for a subaward report and the report is successfully published. </summary>
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
<summary>Example 3: Update (PUT) request for a subaward report and the report is saved in Draft status, and error messages are returned. </summary>
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
<summary>Example 4: Delete (DELETE) request for a subaward report when only the subawardReportNumber is provided, published and reopened reports exist, and both are deleted successfully. One element is returned for each deleted report. </summary>
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
<summary>Example 5: Delete (DELETE) request for a subaward report and the delete request is not successful. </summary>
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
<summary>Example 6: Paginated GET request for an assistance award with nine subaward reports and two pages. Search is executed with an Award ID (FAIN) in the query parameters. One element is returned for each subaward report.</summary>
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
<summary>Example 7: GET request for a specific subaward report in the Published status.</summary>
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

### Submit Subcontract Report Contract JSON

* Field headers in the table must match with the field headers shown in the JSON example.  

Name | Data Type |Field Length | Required |Description 
-----|-----------|-------|------------|------------
contractData | JSON Array | NA|Yes|Information about the prime contractor and the subcontract report(s). If the report is submitted for multiple prime contracts, then this array has multiple elements, one for each of the prime contract.
**contractData Details**| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is submitted for a contract, the contractNumber field should match the Contract ID for your contract as reported in FPDS.gov. The idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the federal awarding agency as from FPDS.gov.
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task order on a contract | If this report is submitted for a task order on a contract, enter the task order number in contractNumber field. Enter the contract number that matches the Referenced IDV field in FPDS.gov into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the federal awarding agency associated with the IDV Referenced Number.
contractData.programTitle | string || No | The program or project title. 
contractData.subawardDataList |string  ||Yes  |Information about the subcontractor. If the report is submitted for multiple subcontractors, then this array will have multiple elements, one for each subcontractor.
**contractData.subawardDataList Details** | | | |  
subawardDataList.subawardUEI | string | 13 characters | Yes | Subcontractor’s Unique Entity ID.
subawardDataList.subawardNumber | string |32 characters  | Yes | A number assigned by the prime contractor to track this subcontract report.
subawardDataList.subawardAmount |string  |32 characters | Yes | Subcontract amount for this award to this subcontractor. 
subawardDataList.subawardDate |string |TIMESTAMP | Yes| The date subcontract was made in YYYY-MM-DD format.
subawardDataList.subawardDescription |string  || Yes | Describes the subcontract requirements and is pulled from FPDS.gov.
**contractData.subawardDataList. placeOfPerformance Details** | | | |  
placeOfPerformance | JSON Object |NA |Yes | Subcontractor’s principal place of performance.
placeOfPerformance.city | string || Yes |Subcontractor’s place of performance city name.
placeOfPerformance.stateOrProvince | JSON Object |NA |Yes|Subcontractor’s place of performance state information. Specify the State Code and name.
placeOfPerformance.stateOrProvince.code | string |||Subcontractor’s place of performance state code.
placeOfPerformance.stateOrProvince.name | string ||  |Subcontractor’s place of performance state name.
placeOfPerformance.country | JSON Object | NA |Yes|Subcontractor’s place of performance country Information. Specify the country code and name.
placeOfPerformance.country.code | string || |Subcontractor’s place of performance country code.
placeOfPerformance.country.name | string ||  |Subcontractor’s place of performance country name.
placeOfPerformance.zipPlus4 | string ||Yes|Subcontractor’s place of performance ZIP Code +4.
**contractData.subawardDataList. recoveryModelQuestions Details** | | | |  
recoveryModelQuestions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subcontractor. | Subcontractor’s executive compensation questions. There are three questions and three elements in this array.
recoveryModelQuestions.code |string||Yes, if compensation question responses are being provided. | Code for the compensation question. Refer to the Subcontract and Subaward Reports Executive Compensation Questions section for details.
recoveryModelQuestions.isSelected |string  || Yes, if compensation question responses are being provided. | A Boolean value representing the response to the compensation question.
**contractData.subawardDataList. topPayEmployees Details** | | | |  
topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the array requires 5 elements| This is the compensation information for the top five employees. The array has five elements for the five top-paid employees. This is required if the response to compensation question one is true, compensaion question two is true and compensation question three is false. If responses to the compensation questions are provided on the subcontractor’s alpha.SAM.gov entity registration, then this information is not required.
topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top-paid employees.
topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top-paid employees.

<p><small><a href="#">Back to top</a></small></p>

### Submit Subaward report Assistance JSON

* Field headers in the table must match the field headers shown in the JSON example. 

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array | NA| Yes | Information about the prime assistance awardee. If the report is submitted for multiple prime assistance awards, then this array has multiple elements, one for each of the prime assistance awards.
**assistanceData Details**||||
fain | string |  255 characters | Yes | The Award ID (FAIN) for the prime assistance award. 
subawardDataList |string  ||Yes  |Information about the subrecipients. If the report is submitted for multiple subawards, then this array has multiple elements, one for each of the subawards.
**assistanceData.subawardDataList Details** | || | 
subawardDataList.subawardNumber | string  | 32 characters |Yes  | Number assigned by the Prime to track this subaward.
subawardDataList.uei |string | 13 characters | Yes | Subrecipient’s Unique Entity ID
subawardDataList.subawardAmount |string  | 20 characters| Yes | The subaward amount for this award.
subawardDataList.subawardDate|string ||Yes |The date the subaward was made in YYYY-MM-DD format. 
subawardDataList.subawardDescription |string  |   | Yes |
**assistanceData.subawardDataList. placeOfPerformance Details** | | | |  
placeOfPerformance | JSON Object ||Yes | Subrecipient’s principal place of performance
placeOfPerformance.city | string || Yes |Subrecipient’s place of performance city name
placeOfPerformance.stateOrProvince | JSON Object ||Yes|Subrecipient’s place of performance state information. Specify the state code and name.
placeOfPerformance.stateOrProvince.code | string |||Subrecipient’s place of performance state code
placeOfPerformance.stateOrProvince.name | string ||  |Subrecipient’s place of performance state name.
placeOfPerformance.country | JSON Object ||Yes|Subrecipient’s place of performance country information. Specify the country code and name.
placeOfPerformance.country.code | string || |Subrecipient’s place of performance country code
placeOfPerformance.country.name | string ||  |Subrecipient’s place of performance country name
placeOfPerformance.zipPlus4 | string ||Yes|Subrecipient’s place of performance  ZIP Code +4.
**assistanceData.subawardDataList. recoveryModelQuestions Details** | | | |  
recoveryModelQuestions |JSON Array|NA |Yes, if Compensation question responses are being provided. | Subrecipient’s executive compensation questions. There are two questions and two elements in this array.
recoveryModelQuestions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. The code is 1 for the first question, 2 for the second question and 3 for the third question. Refer to the Subcontract and Subaward Reports Executive Compensation Questions section for details.
recoveryModelQuestions.isSelected |string  || Yes, if Compensation question responses are being provided. | A Boolean value representing the response to the compensation question.
subawardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the array requires 5 elements| This is the compensation information for the top five employees. The array has five elements for the five top-paid employees. This is required if the response to compensation question one is true and compensation question two is false. If responses to the compensation questions are provided on the subrecipient’s alpha.SAM.gov entity registration, then this information is not required.
**assistanceData.subawardDataList. topPayEmployees Details** | | | |  
topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top-paid employees.
topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top-paid employees.

<p><small><a href="#">Back to top</a></small></p>

### Update Subcontract Report Contract JSON

* Field headers in the table must match with the field headers shown in the JSON example.  

Name | Data Type |Field Length | Required |Description 
-----|-----------|-------|------------|------------
contractData | JSON Array | NA|Yes|Information about the prime contractor and the subcontract report(s). If the report is submitted for multiple prime contracts, then this array has multiple elements, one for each of the prime contract.
**contractData Details**| | | | 
contractData.contractNumber | string | 50 characters  | Yes |If this report is submitted for a contract, the contractNumber field should match the Contract ID for your contract as reported in FPDS.gov. The idvReferenceNumber should be left blank
contractData.reportingAgencyCode | string | 32 characters  | Yes | The ID of the federal awarding agency as from FPDS.gov.
contractData.idvReferenceNumber | string | 50 characters |Yes, if the report is for a Task order on a contract | If this report is submitted for a task order on a contract, enter the task order number in contractNumber field. Enter the contract number that matches the Referenced IDV field in FPDS.gov into the idvReferenceNumber field.
contractData.referenceAgencyCode | string | 32 characters  | Yes, if the idvReferenceNumber is provided | The ID of the federal awarding agency associated with the IDV Referenced Number.
contractData.programTitle | string || No | The program or project title. 
contractData.subawardDataList |string  ||Yes  |Information about the subcontractor. If the report is submitted for multiple subcontractors, then this array will have multiple elements, one for each subcontractor.
**contractData.subawardData Details** | | | |  
subawardData.subawardUEI | string | 13 characters | Yes | Subcontractor’s Unique Entity ID.
subawardData.subawardNumber | string |32 characters  | Yes | A number assigned by the prime contractor to track this subcontract report.
subawardData.subawardAmount |string  |32 characters | Yes | Subcontract amount for this award to this subcontractor. 
subawardData.subawardDate |string |TIMESTAMP | Yes| The date subcontract was made in YYYY-MM-DD format.
subawardData.subawardDescription |string  || Yes | Describes the subcontract requirements and is pulled from FPDS.gov.
**contractData.subawardData. placeOfPerformance Details** | | | |  
placeOfPerformance | JSON Object |NA |Yes | Subcontractor’s principal place of performance.
placeOfPerformance.city | string || Yes |Subcontractor’s place of performance city name.
placeOfPerformance.stateOrProvince | JSON Object |NA |Yes|Subcontractor’s place of performance state information. Specify the State Code and name.
placeOfPerformance.stateOrProvince.code | string |||Subcontractor’s place of performance state code.
placeOfPerformance.stateOrProvince.name | string ||  |Subcontractor’s place of performance state name.
placeOfPerformance.country | JSON Object | NA |Yes|Subcontractor’s place of performance country Information. Specify the country code and name.
placeOfPerformance.country.code | string || |Subcontractor’s place of performance country code.
placeOfPerformance.country.name | string ||  |Subcontractor’s place of performance country name.
placeOfPerformance.zipPlus4 | string ||Yes|Subcontractor’s place of performance ZIP Code +4.
**contractData.subawardData. recoveryModelQuestions Details** | | | |  
recoveryModelQuestions |JSON Array|NA |Yes, if the SAM registration for the entity does not already have this information for the Subcontractor. | Subcontractor’s executive compensation questions. There are three questions and three elements in this array.
recoveryModelQuestions.code |string||Yes, if compensation question responses are being provided. | Code for the compensation question. Refer to the Subcontract and Subaward Reports Executive Compensation Questions section for details.
recoveryModelQuestions.isSelected |string  || Yes, if compensation question responses are being provided. | A Boolean value representing the response to the compensation question.
**contractData.subawardData. topPayEmployees Details** | | | |  
topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the array requires 5 elements| This is the compensation information for the top five employees. The array has five elements for the five top-paid employees. This is required if the response to compensation question one is true, compensaion question two is true and compensation question three is false. If responses to the compensation questions are provided on the subcontractor’s alpha.SAM.gov entity registration, then this information is not required.
topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top-paid employees.
topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top-paid employees.

<p><small><a href="#">Back to top</a></small></p>

### Update Subaward report Assistance JSON

* Field headers in the table must match the field headers shown in the JSON example. 

Name | Data Type | Field Length | Required | Description
-----|-----------|---------|----------|------------
assistanceData | JSON Array | NA| Yes | Information about the prime assistance awardee. If the report is submitted for multiple prime assistance awards, then this array has multiple elements, one for each of the prime assistance awards.
**assistanceData Details**||||
fain | string |  255 characters | Yes | The Award ID (FAIN) for the prime assistance award. 
subawardDataList |string  ||Yes  |Information about the subrecipients. If the report is submitted for multiple subawards, then this array has multiple elements, one for each of the subawards.
**assistanceData.subawardData Details** | || | 
subawardData.subawardNumber | string  | 32 characters |Yes  | Number assigned by the Prime to track this subaward.
subawardData.uei |string | 13 characters | Yes | Subrecipient’s Unique Entity ID
subawardData.subawardAmount |string  | 20 characters| Yes | The subaward amount for this award.
subawardData.subawardDate|string ||Yes |The date the subaward was made in YYYY-MM-DD format. 
subawardData.subawardDescription |string  |   | Yes |
**assistanceData.subawardData. placeOfPerformance Details** | | | |  
placeOfPerformance | JSON Object ||Yes | Subrecipient’s principal place of performance
placeOfPerformance.city | string || Yes |Subrecipient’s place of performance city name
placeOfPerformance.stateOrProvince | JSON Object ||Yes|Subrecipient’s place of performance state information. Specify the state code and name.
placeOfPerformance.stateOrProvince.code | string |||Subrecipient’s place of performance state code
placeOfPerformance.stateOrProvince.name | string ||  |Subrecipient’s place of performance state name.
placeOfPerformance.country | JSON Object ||Yes|Subrecipient’s place of performance country information. Specify the country code and name.
placeOfPerformance.country.code | string || |Subrecipient’s place of performance country code
placeOfPerformance.country.name | string ||  |Subrecipient’s place of performance country name
placeOfPerformance.zipPlus4 | string ||Yes|Subrecipient’s place of performance  ZIP Code +4.
**assistanceData.subawardData. recoveryModelQuestions Details** | | | |  
recoveryModelQuestions |JSON Array|NA |Yes, if Compensation question responses are being provided. | Subrecipient’s executive compensation questions. There are two questions and two elements in this array.
recoveryModelQuestions.code |string||Yes, if Compensation question responses are being provided. | Code for the compensation question. The code is 1 for the first question, 2 for the second question and 3 for the third question. Refer to the Subcontract and Subaward Reports Executive Compensation Questions section for details.
recoveryModelQuestions.isSelected |string  || Yes, if Compensation question responses are being provided. | A Boolean value representing the response to the compensation question.
subawardDataList.topPayEmployees|JSON Array|NA |Conditional - see Description. If required, the array requires 5 elements| This is the compensation information for the top five employees. The array has five elements for the five top-paid employees. This is required if the response to compensation question one is true and compensation question two is false. If responses to the compensation questions are provided on the subrecipient’s alpha.SAM.gov entity registration, then this information is not required.
**assistanceData.subawardData. topPayEmployees Details** | | | |  
topPayEmployees.fullName |string  ||Yes if subawardDataList.topPayEmployees is required| The full name of the top-paid employees.
topPayEmployees.salary | string  ||Yes if subawardDataList.topPayEmployees is required|The total compensation of the top-paid employees.

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/subawardapi.yml" download="subawardapi">OpenAPI File</a>

## Error Messages

### General Error Messages

Error messages are returned as part of the web service call response. Errors are not specific to one method and may apply to more than one error.

|Error Code |	Error Message	| Description | Operation |
|---------- | ------------- | ------------------ | --------- |
|401	|	Provide valid authorization email.	|	Authorized email associated with your system account is required.	|	All |	
|401	|	Provide a valid API Key.	|	Your valid  system account API key is required.	|	All |	
|401	|This IP address is not associated with your system account. All requests must come from an IP address listed on your system account.	|	You entered an IP Address that was not included on your system account application.	|	All |	
|403	|	Access denied. Your account is not authorized.	|	Your account does not have appropriate privileges.	|	All |	
|500	|	We are experiencing an internal server error. Please try again later.	|	Internal Server Error	|	All |	
|400	|	Provide a valid JSON format.	|	Check the request JSON structure and try again.	|	submitSubcontractReport, updateSubcontractReport, submitSubawardReport, updateSubawardReport|	
|400	|	Provide a valid JSON structure. We require at least one contractData element.	|	The request Body JSON structure is invalid. At least one contractData element is required for subcontract reporting.	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide a valid JSON structure. We require at least one assistanceData element.	|	The request Body JSON structure is invalid. At least one assistanceData element is required for subaward reporting	|	submitSubawardReport, updateSubawardReport|	
|400	|	No record found for the contractID and reportingAgencyCode provided.	|	No record found for the contract ID (PIID)  and reporting agency code combination in the request body (Combination of contractData.contractNumber and contractData.reportingAgencyCode).	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	No record found for the FAIN Number and agencyCode provided.	|	No record found for the FAIN Number and agency code combination in the request body (Combination of assistanceData.fain and assistanceData.agencyCode). |	submitSubawardReport, updateSubawardReport	|
|400	|	Multiple records found for the contractID and reportingAgencyCode provided. Add the idvReferenceNumber to identify the contract.	|	You must specify the idvReferenceNumber to correctly identify the record because multiple records were found for the contract ID (PIID)  and reporting agency code combination. |	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide the prime contractor's contractID.	|	contractData.contractNumber was not provided.	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide a reportingAgencyCode.	|	contractData.reportingAgencyCode is a required field.	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide the prime awardee's FainID.	|	assistanceData.fain was not provided.	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide the fundingAgencyCode.	|	assistanceData.agencyCode is a required field.	|	submitSubcontractReport, updateSubcontractReport	|
|400	|	Provide a subawardee Unique Entity ID.	|	The subcontractor or subrecipient’s Unique Entity ID is required.	|	submitSubcontractReport, updateSubcontractReport, submitSubawardReport, updateSubawardReport|	
|400	|	Provide a valid Unique Entity ID.	|	You provided an invalided subcontractor or subawardee Unique Entity ID.	|	submitSubcontractReport, updateSubcontractReport, submitSubawardReport, updateSubawardReport|	
|400	|	No record found for the data provided.	|	No Report found for the subawardReportNumber you provided. |	updateSubcontractReport, updateSubawardReport, deleteSubcontractReport, deleteSubawardReport, getSubcontractReport, getSubawardReport, searchSubcontractReport, searchSubawardReport	|

<p><small><a href="#">Back to top</a></small></p>

### Validation Failure Error Messages

The following section describes validation failure messages that are returned as a part of submitSubcontractReport, updateSubcontractReport, submitSubawardReport and updateSubawardReport.

|	Field 	|	 Error Message 	|	Description 	|
|	-----	|	------	|	---------------	|
|	**Subaward Data validations**	|		|		|
|	subawardNumber	|	Subaward ID required	|	Subaward ID is required	|
|	subawardAmount 	|	Subaward Amount required	|	Subaward Amount is required	|
|	subawardAmount 	|	Use numbers only up to 18 digits for Subaward Amount.	|	Subaward Amount must contain only numbers and up to two decimal places (18 digits plus cents)	|
|	subawardDate 	|	Subaward Date required	|	Subaward Date is required	|
|	subawardDate 	|	Use YYYY-MM-DD format.	|	Date of Subaward for Subawardee:(XXXXXXXXX) is not valid (Expecting YYYY-MM-DD Format)	|
|	subawardDate 	|	Subaward Date cannot be in the future.	|	The Subaward Date cannot be in the future.	|
|	subawardDescription	|	Subaward description required.	|	Subaward description is required.	|
|	**placeOfPerformance validations**	|		|		|
|	placeOfPerformance 	|	Subaward Place of Performance required.	|	Subaward Place of Performance is required.	|
|	country	|	Subaward Place of Performance  country required	|	Subaward Place of Performance Section - Country is required	|
|	country.code	|	Subaward Place of Performance  country code required	|	Subaward Place of Performance Section - Country code is required	|
|	country.code	|	Invalid subaward Place of Performance country code.	|	Subaward Place of Performance Section - Country code is invalid	|
|	country.name	|	Subaward Place of Performance  country name required	|	Subaward Place of Performance Section - Country name is required	|
|	country.name	|	Invalid subaward Place of Performance country name.	|	Subaward Place of Performance Section - Country name is invalid	|
|	country.code and country.name	|	Subaward Place of Performance  country code and country name do not match.	|	Subaward Place of Performance Section - Country code and country name combination does not match	|
|	stateOrProvince	|	Subaward Place of Performance stateOrProvince required.	|	Subaward Place of Performance Section - stateOrProvince is required	|
|	stateOrProvince	|	Subaward Place of Performance state code and state name do not match.	|	Subaward Place of Performance Section - stateOrProvince code and stateOrProvince name combination does not match	|
|	stateOrProvince	|	Invalid subaward Place of Performance state.	|	Only for US addresses: Subaward Place of Performance Section - State provided is invalid	|
|	city	|	Subaward Place of Performance city required.	|	Only for US addresses: Subaward Place of Performance Section - City is required	|
|	city	|	Invalid subaward Place of Performance city.	|	Only for US addresses: Subaward Place of Performance Section - City provided is invalid	|
|	zipPlus4	|	Subaward Place of Performance ZIP Code +4 required.	|	Only for US addresses: Subaward Place of Performance Section - ZIP +4 is required	|
|	zipPlus4	|	Invalid subaward Place of Performance ZIP Code +4.	|	Only for US addresses: Subaward Place of Performance Section - ZIP +4 provided is invalid	|
|	zipPlus4	|	No congressional district found for the address provided. Try again with 9 digits ZIP Code or enter a different address.	|	Only for US addresses: Subaward Place of Performance Section - Congressional District could not be derived with the information provided.	|
|	zipPlus4	|	Subaward Place of Performance ZIP Code +4 cannot exceed 9 characters.	|	Subaward Place of Performance Section - ZIP Code +4 cannot exceed nine characters	|
|	**recoveryModelQuestions validations**	|		|		|
|	recoveryModelQuestions 	|	No executive compensation information found for the Unique Entity ID provided. Answer executive compensation questions on the recoveryModelQuestions JSON element.	|	Responses to compensation questions are required if they are not available for the subcontractor's or subrecepient's alpha.SAM.gov registration	|
|	recoveryModelQuestions 	|	Compensation question one code and response required.	|	Compensation Q1 code and response are required if responses to compensation questions is provided	|
|	recoveryModelQuestions 	|	Compensation questions two code and response required.	|	Compensation Q2 code and response are required	|
|	recoveryModelQuestions 	|	Compensation questions three code and response required.	|	Compensation Q3 code and response are required	|
|	recoveryModelQuestions.code	|	Invalid compensation question code.	|	Compensation question code provided did not match expected codes	|
|	recoveryModelQuestions.isSelected	|	Compensation question isSelected value can only be true or false	|	Compensation question isSelected value can only be true or false	|
|	**topPayEmployees validations**	|		|		|
|	topPayEmployees	|	Name and total compensation required for subawardee’s top five executives.	|	If compensation question one answer is true, compensation question two answer is true, and compensation question three answer is false, then topPayEmployees is required	|
|	topPayEmployees.salary	|	Use numbers only up to 12 digits for total compensation.	|	Sub Top Pay Employees: salary must contain only digits and not exceed 12 digits	|
|	topPayEmployees.salary	|	Compensation amount required.	|	Sub topPayEmployees.salary is required	|
|	topPayEmployees.fullName 	|	Executive name required.	|	Sub topPayEmployees.fullName is required	|

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Go to [www.fsd.gov](https://www.fsd.gov) for support.

<p><small><a href="#">Back to top</a></small></p>
