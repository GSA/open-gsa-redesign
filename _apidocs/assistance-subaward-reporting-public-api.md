---
title: SAM.gov Assistance Subaward Reporting Public API 
banner-heading: SAM.gov Assistance Subaward Reporting Public API 
---

## Overview

The Assistance Subaward Reporting Public API provides users with metadata on new and existing subawards and sub-assistance and deleted subaward and sub-assistance data. This API requires pagination, and the response will be provided to users synchronously.


**Key Features of the Assistance Subaward Outbound API**

* It offers several optional search parameters, filtering by sections AND (&) condition to obtain the desired data.
* It returns synchronous responses.
* It returns 25 records per page by default. User can configure page size by passing it as a query string in URL. Options for status is Published or Deleted. If no status is passed as parameter default value is 'Published'. E.g. https://api.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=10
* Pagination: By using the page number and page size parameters, it is possible to retrieve any desired number of records from an API. This allows for efficient retrieval of data in smaller, manageable chunks rather than retrieving all records at once.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

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
pageSize | Total number of records to be retrieved per page. This field must be a number Max Value = 1000. | No | Int | v1
pageNumber | Indicates the page index. Default offset starts with 0. | No | Int | v1
status | Allows users to request submitted records that were deleted. If the user does not pass any value, the system will default status = Published | No | string | v1   

**Search Filters**

Users can search by any of the below request filters. 

Filter | Description | Required | Data Type | Applicable Versions 
----- | ------| ----- | ----- | -----
uniqueAwardKey | Business key to identify subawards under each prime. Unique for a contract and gives complete subaward information pertaining to that contract  | Yes | Alphanumeric | v1
fain | Unique Identifier for grant awards. | No | Alphanumeric | v1
agencyCode | Allows user to pull prime information to identify the contract family. | No | Numeric | v1
fromDate | Allows users to filter by From Date. | No | string | v1
toDate | Allows users to filter by From Date. | No | string | v1


### Status Values 

Status Name | Value 
----- | ----- 
Published | Returns all published subaward information pertaining to contract. If no status is passed, the default will return all published records.
Deleted | Returns deleted records that were submitted for the contract. Delete must be passed as a status to return deletd records


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


## Examples


### Example 1: Published_IDV_From2020-01-01-To'currentDate'

<details>
    <summary>Request URL</summary>

Production URL:  <br>
 <br>
Alpha URL:  <br>

</details>

<details>
    <summary>Sample Response (JSON Output) v1</summary>

<p>
<code><pre>

</pre></code>
</p>
</details>

### Example 2: PublishedUnchecked_IDV_From2020-01-01-To'currentDate'

<details>
    <summary>Request URL</summary>
Production URL:   <br>
 <br>
Alpha URL:   <br>
</details>

<details>
    <summary>Response (JSON Output)</summary>

<p>
<code><pre>

</pre></code>
</p>
</details>

### Example 3: Deleted_IDV_From2020-01-01-To'currentDate'

<details>
    <summary>Request URL</summary>
Production URL:   <br>
 <br>
Alpha URL:   <br>
</details>

<details>
    <summary>Response (JSON Output)</summary>

<p>
<code><pre>

</pre></code>
</p>
</details>

### Example 4: Published_AWARD_4732_From2021-02-01-To2021-02-28

<details>
    <summary>Request URL</summary>
Production URL:   <br>
 <br>
Alpha URL:   <br>
</details>

<details>
    <summary>Response (JSON Output)</summary>

<p>
<code><pre>

</pre></code>
</p>
</details>

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov) for inquiries and help desk support. 

## Change Log

Date | Version | Description
------|---------------|---------
mm/dd/yyy | v1.0 | Base Version






<p><small><a href="#">Back to top</a></small></p>
