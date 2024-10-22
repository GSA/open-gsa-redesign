---
title: SAM.gov Assistance Subaward Reporting Public API 
banner-heading: SAM.gov Assistance Subaward Reporting Public API 
---

## Overview

The Assistance Subaward Reporting Public API provides users with metadata on new and existing subawards and sub-assistance and deleted subaward and sub-assistance data. This API requires pagination, and the response will be provided to users synchronously.


**Key Features of the Assistance Subaward Outbound API**

* It offers several optional search parameters, filtering by sections AND (&) condition to obtain the desired data.
* It returns synchronous responses.
* It returns 100 records per page by default. User can configure page size by passing it as a query string in URL. Options for status is Published or Deleted. If no status is passed as parameter default value is 'Published'. E.g. https://api.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=10
* Pagination: By using the page number and page size parameters, it is possible to retrieve any desired number of records from an API. This allows for efficient retrieval of data in smaller, manageable chunks rather than retrieving all records at once.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \
* To improve performance when search results may return thousands of records, set the page size to 1000.

## Getting Started

Assistance Subaward Reporting Public API can be accessed from Production or Alpha via the following environments:

### Version Control - v1 

**Production**
* https://api.sam.gov/assistance/v1/subawards/search
* https://api.sam.gov/assistance/v1/subawards/search?status=Delete

**Alpha**
* https://api-alpha.sam.gov/assistance/v1/subawards/search
* https://api-alpha.sam.gov/assistance/v1/subawards/search?status=Delete


## Authentication and API Keys
User of this public API must provide an API key to use the Assistance Subaward Reporting Public API. Request per day are limited based on the federal or non-federal or general roles. 
Note: User can request a public API Key in the Account Details page on SAM.gov (if testing in production), else on alpha.sam.gov (if testing in prodlike).

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on SAM.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## Assistance Subaward Reporting API Description 

The Assistance Subaward Reporting Public API offers several optional search parameters that can be provided independently or in combination with each other to retrieve prime information. 

## GET Grants Request Parameters - v1

Users can provide below parameters to limit the results.

Field Name	| Description | Required| Data Type| Applicable Versions
----- | ----- | ----- | ----- | -----
api_key | Public key of users. | Yes | String | v1
pageSize | Total number of records to be retrieved per page. This field must be a number Max Value = 1000. Default page size is 100. | No | Int | v1
pageNumber | Indicates the page index. Default offset starts with 0. | No | Int | v1
status | Allows users to request submitted records that were deleted. If the user does not pass any value, the system will default status = Published | No | string | v1   

**Search Filters**

Users can search by any of the below request filters. 

Filter | Description | Required | Data Type | Applicable Versions 
----- | ------| ----- | ----- | -----
uniqueAwardKey | Business key to identify subawards under each prime. Unique for a contract and gives complete subaward information pertaining to that contract  | No | Alphanumeric | v1
fain | Unique Identifier for grant awards. | No | Alphanumeric | v1
agencyCode | Allows user to pull prime information to identify the contract family. | No | Numeric | v1
fromDate | Allows users to filter by From Date. By specifying From and To Dates, records can be retreived spanning multiple years with no yearly limit. If both From Date and To Date are provided, user will retrieve records that fall within that inclusive date range. | No | string | v1
toDate | Allows users to filter by To Date. If only the From Date is provided, the query will automatically set the To Date as current date.| No | string | v1


### Status Values 

Status Name | Value 
----- | ----- 
Published | Returns all published subaward information pertaining to contract. If no status is passed, the default will return all published records.
Deleted | Returns deleted records that were submitted for the contract. Delete must be passed as a status to return deleted records


## GET Assistance Response Parameters

Based on the request filters, the API response shall return a JSON summarized view of the subawards. The Assistance Subaward Reporting Public API offers several response elements that are described in the following sections. 

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
subTopPayEmployee | Sub Top Pay Employee | string | v1
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
405 | Method Not Allowed
500 | Internal Server Error 


## Error Messages

Scenario | Error Messages
------ | ------
For page size, user provides page size <=0 or >1000. | PageSize valid range is 1-1,000. Please provide valid input. 
For page number, user provides page number < 0. | PageNumber must be a positive number.
For limit, user provides range beyond 1000. | Limit valid range is 0-1000. Please provide valid input.
For limit or offset, user inputs characters/special characters. | Limit/Offset must be a positive integer.
From Date has invalid date format. | Invalid FromDate. Date must be in format 'yyyy-MM-dd'.
To Date has invalid date format. | Invalid To Date. Date must be in format 'yyyy-MM-dd'. 
From Date value is after To Date value. | From Date cannot be after To date. Please provide valid input. 
To Date value is after Current Date value. | To Date cannot be after the current date. Please provide valid input.
Content in Description link is not available. | Description Not Found.
Status Value is invalid. | Valid status values are: Deleted, Published. 
UniqueAwardKey is invalid. | UniqueAwardKey must consist of alphanumeric characters only, with the underscore '_' being the only allowed special character.
Piid value is invalid. | Piid value must be alphanumeric. 
ReferencedIDVPIID value is invalid. | Referenced IDV Piid value must be alphanumeric. 
AgencyID value is invalid. | Agency ID value must be a four-digit number. 
ReferencedIDV value is invalid. | ReferencedIDV agency ID value must be a four-digit number.
PrimeAwardType value is invalid. | Prime award type value must be alphanumeric.
API Key is invalid. | An invalid API key was supplied.
No API Key is provided. | No API key was supplied. Please submit with a valid API key.


## Examples


### Example 1: PublishedUnchecked_IDV_From2020-01-01-To 'currentDate'

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary>Response (JSON Output) v1</summary>

<p>
<code><pre>
{}
</pre></code>
</p>
</details>

### Example 2: Published_IDV_From2020-01-01-to 'currentDate'

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{}
</pre></code>
</p>
</details>

### Example 3: Deleted_IDV_From2020-01-01-To 'currentDate'

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{}
</pre></code>
</p>
</details>

### Example 4: Published_AWARD_4732_From2021-02-01-To2021-02-28

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{}
</pre></code>
</p>
</details>

### Example 5: Published_AWARD_9700_RefPiid_uniqueAwardKey_From2020-01-07-To2022-01-14

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{}
</pre></code>
</p>
</details>

### Example 6: Published_referencedIDVPIID

<details>
    <summary>Request URL</summary>

Production URL: <br>
 <br>
Alpha URL: <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>
</details>

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov) for inquiries and help desk support. 

## Change Log

Date | Version | Description
------|---------------|---------
mm/dd/yyy | v1.0 | Base Version






<p><small><a href="#">Back to top</a></small></p>
