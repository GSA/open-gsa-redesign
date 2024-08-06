---
title: SAM.gov Acquisition Subaward Reporting Public API 
banner-heading: SAM.gov Acquisition Subaward Reporting Public API 
---

## Overview

The Acquisition Subaward Reporting Public API provides users with metadata on new and existing subawards and subcontracts and deleted subaward and subcontract data. This API requires pagination, and the response will be provided to users synchronously. The API key generated out of a non-Federal individual, non-Federal system, Federal individual or Federal system account that has "Read" permission to the Contract Opportunities, Contract Data or both the domains shall be able to acccess the API. 


**Key Features of the Acquisition Subaward Outbound API**

* It offers several optional search parameters, filtering by sections AND (&) condition to obtain the desired data.
* It returns synchronous responses.
* It returns 25 records per page by default. User can configure page size by passing it as a query string in URL. Options for status is Published or Deleted. If no status is passed as parameter default value is 'Published'. E.g. https://api.sam.gov/acquisition/v1/subawards/search?pageNumber=0&pageSize=10
* Pagination: By using the page number and page size parameters, it is possible to retrieve any desired number of records from an API. This allows for efficient retrieval of data in smaller, manageable chunks rather than retrieving all records at once.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

## Getting Started

Acquisition Subaward Reporting Public API can be accessed from Production or Alpha via the following environments:

### Version Control - v1 

* Production: <br>  https://api.sam.gov/acquisition/v1/subawards/search?api_key=
* Alpha: <br> https://api-alpha.sam.gov/acquisition/v1/subawards/search?api_key= 

## Authentication and API Keys
User of this public API must provide an API key to use the Acquisition Subaward Reporting Public API. Request per day are limited based on the federal or non-federal or general roles. 
Note: User can request a public API Key in the Account Details page on SAM.gov (if testing in production), else on alpha.sam.gov (if testing in prodlike).

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on SAM.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## User Requirements

**To Access Public Data**

* Users must have a non-Federal/Federal individual (Personal) account and the respective API Key, a non-Federal/Federal System Account with the "Read Public" Permission and the respective API Key in SAM.gov. 
* Users can make GET calls using any browser or a Restful API Client such as Postman.

**Individual (Personal) Accounts**

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, "Public API Key".
* Click on the 'Eye' icon, enter the "Enter One-Time Password" (this value will be sent to your email address that is associated with your registered account), and hit 'Submit' for the API Key value to appear in the box.

**System Accounts**

* The SAM.gov non-Federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts” widget on their SAM.gov “Workspace” page.
* The SAM.gov Federal registered users must contact their CCB representatives for obtaining the “System Accounts” widget on their SAM.gov “Workspace” page.
* Users must create their System Account using the “System Accounts” widget and get it approved.
* Users must then set the password for the System Account.
* After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.

System Accounts must satisfy the following criteria to successfully utilize the Acquisition Subaward Reporting Public API:

* System Information Unique System ID: The System Account ID
* Security Information - IP Address: List all the IP Addresses that the System invokes the API from.
* Type of Connection: REST APIs
* System Account Password 
* System Account API Key 

## API Key Rate Limits

Type of User Account | Type of API Key | Default API Daiy Rate Limit 
----- | ----- | ----- | -----
Non-Federal User with no role in SAM.gov | Personal API Key | 10 requests/day 
Non-Federal User with a role in SAM.gov | Personal API Key | 1,000 requests/day 
Federal User | Personal API Key | 1,000 requests/day 
Non-Federal System User | System Account API Key | 1,000 requests/day 
Federal System User | System Account API | 10,000 requests/day 


## Acquisition Subaward Reporting API Description 

The Acquisition Subaward Reporting Public API offers several optional search parameters that can be provided independently or in combination with each other to retrieve prime information. 

### Contract Search Endpoint - v1

**Search Parameters**

Users can search by any of the below request parameters based on date and browse through prime information. 

Field Name	| Description | Required| Data Type| Applicable Versions
----- | ----- | ----- | ----- | -----
api_key | Public key of users. | Yes | String | v1
uniqueAwardKey | Business key to identify subawards under each prime. Unique for a contract and gives complete subaward information pertaining to that contract  | Yes | Alphanumeric | v1
piid | Allows user to pull one single record with multiple subawards. The total records that will be showed is the number of subawards. | No | Alphanumeric | v1
agencyId | Allows user to pull prime information to identify the contract family. | No | Numeric | v1
referencedIdvPIID | Allows user to pull prime information to identify the contract family. | No | Alphanumeric |v1
referencedIDVAgencyID | Allows user to pull prime information to identify the contract family. | No | Alphanumeric | v1
primeAwardType | Type of Prime Award. | No | string | v1
fromDate | Allows users to filter by From Date. | No | string | v1
toDate | Allows users to filter by From Date. | No | string | v1
limit | Total number of records to be retrieved per page. This field must be a number Max Value = 1000. | Yes | Int | v1
offset | Indicates the page index. Default offset starts with 0. | No | Int | v1
status | Allows users to request submitted records that were deleted. If the user does not pass any value, the system will default status = Published | No | string | v1    

### Status Values 

Status Name | Value 
----- | ----- 
Published | Returns all published subaward information pertaining to contract. If no status is passed, the default will return all published records.
Deleted | Returns deleted records that were submitted for the contract. Delete must be passed as a status to return deletd records


## Response Schema

Based on the request parameters, the API response shall return a JSON summarized view of the subawards. The Acquisition Subaward Reporting Public API offers several response elements that are described in the following sections. 

Field Name	| Description | Data Type|Applicable Versions
----- | ----- | ----- | -----  
totalPages | Total Pages | int | v1
totalRecords | Total Records | int | v1
pageNumber | Page Number. If the user does not pass any value, the system will default pageNumber = 0  | int | v1
nextPageLink | Next Page Link | string | v1
previousPageLink | Previous Page Link | string | v1
uniqueAwardKey | Unique Award Key | string | v1
piid | Piid | string | v1
agencyId | Agency ID | string | v1
referencedIDVPIID | Reference IDV PIID | string | v1
referencedIDVAgencyId | Reference IDV Agency PIID | string | v1
subawardReportId | Subaward Report ID | string | v1 
subawardReportNumber | Subaward Report Number | string | v1
submittedDate | Submitted Date | string | v1
subAwardNumber | Subaward Number | string | v1
subAwardAmount | Subaward Amount | string | v1
subAwardDate | Subaward Date | string | v1
subEntityUei | Sub Entity UEI | string | v1
subEntityEFTIndicator | Sub Entity EFT Indicator | string | v1
subEntityLegalBusinessName | Sub Entity Legal Business Name | string | v1
subEntityDoingBusinessAsName | Sub Entity Doing Business As | string | v1
primeAwardType | Award Type | string | v1 
totalContractValue | Total Contract Value | string | v1
primeEntityUei | Prime Awardee UEI | string | v1 
primeEntityName | Prime Awardee Legal Business Name | string | v1
baseAwardDateSigned | Base Award Date Signed | string | v1
descriptionOfRequirement | Description of Requirement | string | v1
primeNaics | NAICS Code | string | v1
primeOrganizationInfo | Contracting Subtier Name | string | v1
subEntityPhysicalAddress | Sub Entity Physical Address | string | v1
subBusinessType | Sub Business Type | string | v1 
subEntityParentLegalBusinessName | Sub Entity Parent Legal Business Name | string | v1 
subParentUei | Sub Parent UEI | string | v1
subEntityTopPayEmployee | Sub Entity Top Pay Employee | string | v1


## Open API Specification File 

You can view the full details of this API’s in the OpenAPI Specification file available here: Link to openapi. yaml specification file

## HTTP Response Codes 

HTTP Response Code | Description 
----- | ----- 
200 | Successful
400 | Bad Request 
401 | Unauthorized Error
403 | Forbidden 
406 | Not Acceptable Error
500 | Internal Server Error 


## Examples


### Example 1: Search for summarized view of the subawards.

<details>
    <summary>Request URL</summary>

Production URL:  <br>
 <br>
Alpha URL: <br>

</details>

<details>
    <summary>Sample Response (JSON Output) v2</summary>

{
    "totalPages": 1,
    "totalRecords": 1,
    "pageNumber": 0,
    "nextPageLink": "/api/v1/search?pageNumber=0&pageSize=25",
    "previousPageLink": "/api/v1/search?pageNumber=0&pageSize=25",
    "data": [
        {
            "uniqueAwardKey": "N0018918FZ5849700N0018916DZ043",
            "piid": "N0018918FZ584",
            "agencyId": "9700",
            "referencedIDVPIID": "N0018916DZ043",
            "referencedIDVAgencyId": "9700",
            "subAwardReportId": "21735499",
            "subAwardReportNumber": "8b66f14a-eace-11ee-849e-53580f311605",
            "submittedDate": "2019-01-18",
            "subAwardNumber": "102745-3",
            "subAwardAmount": "233682",
            "subAwardDate": "2018-12-11",
            "subEntityName": "SYSTEMS PLANNING AND ANALYSIS, INC.",
            "subEntityUei": "TRE8LWVNNXL3",
            "primeAwardType": "IDV",
            "totalContractValue": "100000.0",
            "primeEntityUei": "JCBMLGPE6Z71",
            "primeEntityName": "BOOZ ALLEN HAMILTON INC",
            "baseAwardDateSigned": "2020-06-02",
            "descriptionOfRequirement": "MODIFICATION TO EXTENDED PERIOD OF PERFORMANCE TO 2/28/2022",
            "primeNaics": {
                "code": "541620",
                "description": "ENVIRONMENTAL CONSULTING SERVICES"
            },
            "primeOrganizationInfo": {
                "funding_agency": {
                    "code": "4740",
                    "name": "PUBLIC BUILDINGS SERVICE"
                },
                "funding_office": {
                    "code": "47PJ00",
                    "name": "PBS R8"
                },
                "contracting_office": {
                    "code": "47PJ00",
                    "name": "PBS R8"
                },
                "funding_department": {
                    "code": "4700",
                    "name": "GENERAL SERVICES ADMINISTRATION"
                },
                "contracting_department": {
                    "code": "4700",
                    "name": "GENERAL SERVICES ADMINISTRATION"
                },
                "contracting_agency": {
                    "code": "4740",
                    "name": "PUBLIC BUILDINGS SERVICE"
                }
            },
            "subEntityEFTIndicator": null,  ( eftIndicator -> subEntityEFTIndicator)
            "subEntityLegalBusinessName": "SYSTEMS PLANNING AND ANALYSIS, INC.",
            "subEntityDoingBusinessAsName": " SYSTEMS PLANNING AND ANALYSIS, INC.",
            "entityPhysicalAddress": [  (code attribute update)
                {
                 "streetAddress": "2690 W UNION AVE",
                "streetAddress2": null,
                "city": "englewood",
                "congressional_district": "01",
                "state": {
                    "code": "CO",
                    "name": "Colorado"
                },
                "country": {
                    "code": "USA",
                    "name": "United States"
                },
                "zip": "801105307"
                }
            ],
           "subBusinessType": [      
                {
                    "subBusinessTypeCode": "2X",
                    "subBusinessTypeDesc": "For Profit Organization"
                }
             ],
            "subEntityParentLegalBusinessName": "R&J Krogel",
            "subParentUei": "CL5MNLQQVLL9",
            "subEntityTopPayEmployees":[   
                {
                  "fullName":{ "type": "string" },
                   "salary": { "type": "string" } ]
               }
        }
    ]
},


### Example 2: Search without selecting To or From Date

<details>
    <summary>Request URL</summary>

Production URL:  <br>
 <br>
Alpha URL: <br>

</details>

### Example 3: Search with To/From Date and other Parameters

<details>
    <summary>Request URL</summary>

Production URL:  <br>
 <br>
Alpha URL: <br>

</details>






## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov) for inquiries and help desk support. 



## Change Log

Date | Version | Description
------|---------------|---------
mm/dd/yyy | v1.0 | Base Version






<p><small><a href="#">Back to top</a></small></p>
