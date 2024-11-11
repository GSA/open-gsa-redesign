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
* https://api.sam.gov/assistance/v1/subawards/search?status=Deleted

**Alpha**
* https://api-alpha.sam.gov/assistance/v1/subawards/search
* https://api-alpha.sam.gov/assistance/v1/subawards/search?status=Deleted


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
PIID | PIID | string | v1
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

You can view the full details of this API in the OpenAPI Specification file available here: 
<a href="v1/ffata-search-openapi.yml" download="ffata-search-openapi">OpenAPI File</a>


<details>
<summary>Assistance Subaward Outbound v1</summary>
<p>
<code><pre>
 /{type}/v1/{subType}/search:
    get:
      tags:
      - Subaward Search Module API
      - OpenSearch APIs
      summary: Search entries
      description: Search entries
      operationId: search
      parameters:
      - name: pageNumber
        in: query
        required: false
        schema:
          type: string
          default: "0"
      - name: pageSize
        in: query
        required: false
        schema:
          type: string
          default: "100"
      - name: status
        in: query
        required: false
        schema:
          type: string
          default: Published
      - name: uniqueAwardKey
        in: query
        required: false
        schema:
          type: string
      - name: PIID
        in: query
        required: false
        schema:
          type: string
      - name: agencyId
        in: query
        required: false
        schema:
          type: string
      - name: referencedIDVAgencyId
        in: query
        required: false
        schema:
          type: string
      - name: primeAwardType
        in: query
        required: false
        schema:
          type: string
      - name: referencedIDVPIID
        in: query
        required: false
        schema:
          type: string
      - name: fain
        in: query
        required: false
        schema:
          type: string
      - name: agencyCode
        in: query
        required: false
        schema:
          type: string
      - name: fromDate
        in: query
        required: false
        schema:
          type: string
      - name: toDate
        in: query
        required: false
        schema:
          type: string
      - name: type
        in: path
        required: true
        schema:
          type: string
      - name: subType
        in: path
        required: true
        schema:
          type: string
      responses:
        "500":
          description: Internal Server Error
          content:
            '*/*':
              schema:
                type: object
        "200":
          description: successful operation
          content:
            '*/*':
              schema:
                type: object
        "404":
          description: Not Found
          content:
            '*/*':
              schema:
                type: object
        "403":
          description: Forbidden
          content:
            '*/*':
              schema:
                type: object
        "400":
          description: Bad Request
          content:
            '*/*':
              schema:
                type: object
        "501":
          description: Not Implemented
          content:
            '*/*':
              schema:
                type: object
        "405":
          description: Validation exception
          content:
            '*/*':
              schema:
                type: object
</pre></code>
</p>
</details>


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
PIID value is invalid. | PIID value must be alphanumeric. 
ReferencedIDVPIID value is invalid. | Referenced IDV PIID value must be alphanumeric. 
AgencyID value is invalid. | Agency ID value must be a four-digit number. 
ReferencedIDV value is invalid. | ReferencedIDV agency ID value must be a four-digit number.
PrimeAwardType value is invalid. | Prime award type value must be alphanumeric.
API Key is invalid. | An invalid API key was supplied.
No API Key is provided. | No API key was supplied. Please submit with a valid API key.


## Examples


### Example 1: Search Published Records by UniqueAwardKey

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&uniqueAwardKey=ASST_NON_27MN12002L97E1_6925&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&uniqueAwardKey=ASST_NON_27MN12002L97E1_6925&api_key={{api_key}} <br>
</details>

<details>
    <summary>Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 1,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "status": "Published",
      "submittedDate": "2012-10-31",
      "subVendorName": "CROW WING COUNTY (INC)",
      "subVendorUei": "KRPSCRWNEPM3",
      "subAwardNumber": "018-630-005",
      "subAwardAmount": "30307",
      "subAwardDate": "2012-09-19",
      "reportUpdatedDate": "2012-10-31",
      "subawardReportId": "84924255",
      "subawardReportNumber": "67e15942-6353-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Crow Wing County",
        "congressionalDistrict": "08",
        "state": {
          "code": "MN",
          "name": "Minnesota"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "564421200"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "20.205 Highway Planning and Construction",
      "subawardDescription": "County State Aid Highway 3: Emergency Relief Work, Aggregate BASE, Bituminous Pavement REPLacement, AGGregate SHouLder, Culvert Replacement, Erosion Repair",
      "fain": "27MN12002L97E1",
      "actionDate": "2012-09-04",
      "totalFedFundingAmount": "37600.0",
      "baseObligationDate": "2012-09-04",
      "projectDescription": "ALONG TH 11: DEVELOP A CORRIDOR MGMT PLAN FOR THE WATERS OF THE DANCING SKY SCENIC BYWAYS",
      "baseAssistanceTypeCode": "03",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "6925",
      "assistanceType": null,
      "primeEntityUei": "JL4EX4R4A647",
      "primeEntityName": "Minnesota Department Of Transportation",
      "uniqueAwardKey": "ASST_NON_27MN12002L97E1_6925",
      "vendorPhysicalAddress": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": null,
        "congressionalDistrict": null,
        "state": {
          "code": null,
          "name": null
        },
        "country": {
          "code": null,
          "name": null
        },
        "zip": null
      },
      "subDbaName": null,
      "subParentName": null,
      "subParentUei": null,
      "subBusinessType": null,
      "subTopPayEmployee": null
    }
  ]
}
</pre></code>
</p>
</details>


### Example 2: Search Published Records by FAIN and Agency Code

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fain=27MN12002L97E1&agencyCode=6925&fromDate=2012-01-01&toDate=2013-12-31&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fain=27MN12002L97E1&agencyCode=6925&fromDate=2012-01-01&toDate=2013-12-31&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 1,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "status": "Published",
      "submittedDate": "2012-10-31",
      "subVendorName": "CROW WING COUNTY (INC)",
      "subVendorUei": "KRPSCRWNEPM3",
      "subAwardNumber": "018-630-005",
      "subAwardAmount": "30307",
      "subAwardDate": "2012-09-19",
      "reportUpdatedDate": "2012-10-31",
      "subawardReportId": "84924255",
      "subawardReportNumber": "67e15942-6353-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Crow Wing County",
        "congressionalDistrict": "08",
        "state": {
          "code": "MN",
          "name": "Minnesota"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "564421200"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "20.205 Highway Planning and Construction",
      "subawardDescription": "County State Aid Highway 3: Emergency Relief Work, Aggregate BASE, Bituminous Pavement REPLacement, AGGregate SHouLder, Culvert Replacement, Erosion Repair",
      "fain": "27MN12002L97E1",
      "actionDate": "2012-09-04",
      "totalFedFundingAmount": "37600.0",
      "baseObligationDate": "2012-09-04",
      "projectDescription": "ALONG TH 11: DEVELOP A CORRIDOR MGMT PLAN FOR THE WATERS OF THE DANCING SKY SCENIC BYWAYS",
      "baseAssistanceTypeCode": "03",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "6925",
      "assistanceType": null,
      "primeEntityUei": "JL4EX4R4A647",
      "primeEntityName": "Minnesota Department Of Transportation",
      "uniqueAwardKey": "ASST_NON_27MN12002L97E1_6925",
      "vendorPhysicalAddress": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": null,
        "congressionalDistrict": null,
        "state": {
          "code": null,
          "name": null
        },
        "country": {
          "code": null,
          "name": null
        },
        "zip": null
      },
      "subDbaName": null,
      "subParentName": null,
      "subParentUei": null,
      "subBusinessType": null,
      "subTopPayEmployee": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 3: Search Published Records by FAIN, Agency Code, and Unique Award Key

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fain=27MN12002L97E1&uniqueAwardKey=ASST_NON_27MN12002L97E1_6925&agencyCode=6925&fromDate=2012-01-01&toDate=2013-09-29&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fain=27MN12002L97E1&uniqueAwardKey=ASST_NON_27MN12002L97E1_6925&agencyCode=6925&fromDate=2012-01-01&toDate=2013-09-29&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 1,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "status": "Published",
      "submittedDate": "2012-10-31",
      "subVendorName": "CROW WING COUNTY (INC)",
      "subVendorUei": "KRPSCRWNEPM3",
      "subAwardNumber": "018-630-005",
      "subAwardAmount": "30307",
      "subAwardDate": "2012-09-19",
      "reportUpdatedDate": "2012-10-31",
      "subawardReportId": "84924255",
      "subawardReportNumber": "67e15942-6353-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Crow Wing County",
        "congressionalDistrict": "08",
        "state": {
          "code": "MN",
          "name": "Minnesota"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "564421200"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "20.205 Highway Planning and Construction",
      "subawardDescription": "County State Aid Highway 3: Emergency Relief Work, Aggregate BASE, Bituminous Pavement REPLacement, AGGregate SHouLder, Culvert Replacement, Erosion Repair",
      "fain": "27MN12002L97E1",
      "actionDate": "2012-09-04",
      "totalFedFundingAmount": "37600.0",
      "baseObligationDate": "2012-09-04",
      "projectDescription": "ALONG TH 11: DEVELOP A CORRIDOR MGMT PLAN FOR THE WATERS OF THE DANCING SKY SCENIC BYWAYS",
      "baseAssistanceTypeCode": "03",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "6925",
      "assistanceType": null,
      "primeEntityUei": "JL4EX4R4A647",
      "primeEntityName": "Minnesota Department Of Transportation",
      "uniqueAwardKey": "ASST_NON_27MN12002L97E1_6925",
      "vendorPhysicalAddress": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": null,
        "congressionalDistrict": null,
        "state": {
          "code": null,
          "name": null
        },
        "country": {
          "code": null,
          "name": null
        },
        "zip": null
      },
      "subDbaName": null,
      "subParentName": null,
      "subParentUei": null,
      "subBusinessType": null,
      "subTopPayEmployee": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 4: Search Deleted Records by yyyy-MM-dd to yyyy-MM-dd

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&fromDate=2010-04-15&toDate=2019-04-15&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&fromDate=2010-04-15&toDate=2019-04-15&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 3,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "status": "Deleted",
      "submittedDate": "2016-10-24",
      "subVendorName": "VINTON, TOWN OF",
      "subVendorUei": "FBA2ZQK26QV3",
      "subAwardNumber": "109611",
      "subAwardAmount": "74400",
      "subAwardDate": "2016-09-25",
      "reportUpdatedDate": "2016-10-24",
      "subawardReportId": "85005788",
      "subawardReportNumber": "cdabe7ce-6353-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "vinton",
        "congressionalDistrict": "09",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "241772531"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "20.205 Highway Planning and Construction",
      "subawardDescription": "TOWN OF VINTON ",
      "fain": "515128374M3001",
      "actionDate": "2016-09-25",
      "totalFedFundingAmount": "74400.0",
      "baseObligationDate": "2016-09-25",
      "projectDescription": "TOWN OF VINTON",
      "baseAssistanceTypeCode": "03",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "6925",
      "assistanceType": null,
      "primeEntityUei": "G7FMER65EXJ9",
      "primeEntityName": "Va Dept Of Transportation",
      "uniqueAwardKey": "ASST_NON_515128374M3001_6925",
      "vendorPhysicalAddress": {
        "streetAddress": "311 S POLLARD STREET",
        "streetAddress2": null,
        "city": "vinton",
        "congressionalDistrict": "06",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "241790000"
      },
      "subDbaName": null,
      "subParentName": "VINTON, TOWN OF",
      "subParentUei": "FBA2ZQK26QV3",
      "subBusinessType": [
        {
          "code": "12",
          "name": "U.S. Local Government"
        },
        {
          "code": "C6",
          "name": "Municipality"
        },
        {
          "code": "FO",
          "name": "Township"
        }
      ],
      "subTopPayEmployee": null
    },
    {
      "status": "Deleted",
      "submittedDate": "2012-06-28",
      "subVendorName": "MANCHESTER, CITY OF",
      "subVendorUei": "CNSJJ8B31T48",
      "subAwardNumber": "2011CD37",
      "subAwardAmount": "25000",
      "subAwardDate": "2011-06-08",
      "reportUpdatedDate": "2012-06-28",
      "subawardReportId": "84568403",
      "subawardReportNumber": "43cd5f9c-6353-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Manchester",
        "congressionalDistrict": "01",
        "state": {
          "code": "NH",
          "name": "New Hampshire"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "031012101"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "16.727 Enforcing Underage Drinking Laws Program",
      "subawardDescription": "Enforcing underage drinking laws, compliance checks, party patrols",
      "fain": "2010AHFX0058",
      "actionDate": "2010-06-07",
      "totalFedFundingAmount": "356400.0",
      "baseObligationDate": "2010-06-07",
      "projectDescription": "2010 Enforcing Underage Drinking Laws Program",
      "baseAssistanceTypeCode": "04",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "1550",
      "assistanceType": null,
      "primeEntityUei": "RQ3MKLRJ4LV6",
      "primeEntityName": "State of New Hampshire",
      "uniqueAwardKey": "ASST_NON_2010AHFX0058_1550",
      "vendorPhysicalAddress": {
        "streetAddress": "351 CHESTNUT ST",
        "streetAddress2": null,
        "city": "manchester",
        "congressionalDistrict": "01",
        "state": {
          "code": "NH",
          "name": "New Hampshire"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "031012201"
      },
      "subDbaName": null,
      "subParentName": "MANCHESTER, CITY OF",
      "subParentUei": "Z93ZBNUC43X8",
      "subBusinessType": [
        {
          "code": "12",
          "name": "U.S. Local Government"
        },
        {
          "code": "C6",
          "name": "Municipality"
        }
      ],
      "subTopPayEmployee": null
    },
    {
      "status": "Deleted",
      "submittedDate": "2013-04-15",
      "subVendorName": "AUSTIN COMMUNITY COLLEGE",
      "subVendorUei": "ZSFBTJE461W5",
      "subAwardNumber": "13008-8-1925-1",
      "subAwardAmount": "19114",
      "subAwardDate": "2013-04-03",
      "reportUpdatedDate": "2013-04-15",
      "subawardReportId": "83532699",
      "subawardReportNumber": "da0ef0e8-6352-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Austin",
        "congressionalDistrict": "25",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "787524341"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "47.076 Education and Human Resources",
      "subawardDescription": "This proposed project is a 2-year Capacity Building project on the Noyce Scholarship track at Texas State University-San Marcos, in collaboration with San Antonio College and Austin Community College, two neighboring 2-year colleges.  The main goal of the project is to foster a thriving community of undergraduate students at Texas State who identify as science educatiors, which will serve in the future as the supply of applicants to a Noyce Phase I Scholarship Project.  The community will be built and supported via two major mechanisms:  the \"Communities\" component and the \"Pathways\" component, which is alignment of STEM degrees with teacher certifications.  ",
      "fain": "1240036",
      "actionDate": "2012-07-26",
      "totalFedFundingAmount": "350000.0",
      "baseObligationDate": "2012-07-26",
      "projectDescription": "\"Communities & Pathways\": Cultivating Science Educator Identity for Undergraduates through an Inclusive Physics Learning Assistant Program & STEM Tea",
      "baseAssistanceTypeCode": "04",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "4900",
      "assistanceType": null,
      "primeEntityUei": "HS5HWWK1AAU5",
      "primeEntityName": "Texas State University-San Marcos",
      "uniqueAwardKey": "ASST_NON_1240036_4900",
      "vendorPhysicalAddress": {
        "streetAddress": "9101 TUSCANY WAY",
        "streetAddress2": null,
        "city": "austin",
        "congressionalDistrict": "10",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "787544700"
      },
      "subDbaName": null,
      "subParentName": "AUSTIN COMMUNITY COLLEGE",
      "subParentUei": "ZSFBTJE461W5",
      "subBusinessType": [
        {
          "code": "A8",
          "name": "Nonprofit Organization"
        },
        {
          "code": "M8",
          "name": "Educational Institution"
        },
        {
          "code": "OH",
          "name": "State Controlled Institution of Higher Learning"
        }
      ],
      "subTopPayEmployee": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 5: Search Deleted Records by FAIN, Agency Code, Unique Award Key

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&uniqueAwardKey=ASST_NON_1240036_4900&fain=1240036&agencyCode=4900&fromDate=2013-01-01&toDate=2013-12-31&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&uniqueAwardKey=ASST_NON_1240036_4900&fain=1240036&agencyCode=4900&fromDate=2013-01-01&toDate=2013-12-31&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 1,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "status": "Deleted",
      "submittedDate": "2013-04-15",
      "subVendorName": "AUSTIN COMMUNITY COLLEGE",
      "subVendorUei": "ZSFBTJE461W5",
      "subAwardNumber": "13008-8-1925-1",
      "subAwardAmount": "19114",
      "subAwardDate": "2013-04-03",
      "reportUpdatedDate": "2013-04-15",
      "subawardReportId": "83532699",
      "subawardReportNumber": "da0ef0e8-6352-11ef-a436-4bf2d183e71f",
      "placeOfPerformance": {
        "streetAddress": null,
        "streetAddress2": null,
        "city": "Austin",
        "congressionalDistrict": "25",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "787524341"
      },
      "organizationInfo": null,
      "asistanceListingNumber": "47.076 Education and Human Resources",
      "subawardDescription": "This proposed project is a 2-year Capacity Building project on the Noyce Scholarship track at Texas State University-San Marcos, in collaboration with San Antonio College and Austin Community College, two neighboring 2-year colleges.  The main goal of the project is to foster a thriving community of undergraduate students at Texas State who identify as science educatiors, which will serve in the future as the supply of applicants to a Noyce Phase I Scholarship Project.  The community will be built and supported via two major mechanisms:  the \"Communities\" component and the \"Pathways\" component, which is alignment of STEM degrees with teacher certifications.  ",
      "fain": "1240036",
      "actionDate": "2012-07-26",
      "totalFedFundingAmount": "350000.0",
      "baseObligationDate": "2012-07-26",
      "projectDescription": "\"Communities & Pathways\": Cultivating Science Educator Identity for Undergraduates through an Inclusive Physics Learning Assistant Program & STEM Tea",
      "baseAssistanceTypeCode": "04",
      "baseAssistanceTypeDesc": null,
      "agencyCode": "4900",
      "assistanceType": null,
      "primeEntityUei": "HS5HWWK1AAU5",
      "primeEntityName": "Texas State University-San Marcos",
      "uniqueAwardKey": "ASST_NON_1240036_4900",
      "vendorPhysicalAddress": {
        "streetAddress": "9101 TUSCANY WAY",
        "streetAddress2": null,
        "city": "austin",
        "congressionalDistrict": "10",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "787544700"
      },
      "subDbaName": null,
      "subParentName": "AUSTIN COMMUNITY COLLEGE",
      "subParentUei": "ZSFBTJE461W5",
      "subBusinessType": [
        {
          "code": "A8",
          "name": "Nonprofit Organization"
        },
        {
          "code": "M8",
          "name": "Educational Institution"
        },
        {
          "code": "OH",
          "name": "State Controlled Institution of Higher Learning"
        }
      ],
      "subTopPayEmployee": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 6: Search Published Records from Past 24 Hours 

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fromDate=2024-11-07&toDate=2024-11-08&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?pageSize=25&pageNumber=0&fromDate=2024-11-07&toDate=2024-11-08&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
    "totalPages": 8,
    "totalRecords": 8,
    "pageNumber": 0,
    "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=1&pageSize=1&status=Published&fromDate=2024-11-07&toDate=2024-11-08",
    "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=1&status=Published&fromDate=2024-11-07&toDate=2024-11-08",
    "data": [
        {
            "status": "Published",
            "submittedDate": "2024-11-07",
            "subVendorName": "WATERPLAY INC.",
            "subVendorUei": "FZNJF7KWUE87",
            "subAwardNumber": "MAWNOV08-2",
            "subAwardAmount": "56000.0",
            "subAwardDate": "2024-11-04",
            "reportUpdatedDate": "2024-11-07",
            "subawardReportId": "123477605",
            "subawardReportNumber": "758a9b27-a804-485a-8a14-cd99cc5998d2",
            "placeOfPerformance": {
                "streetAddress": null,
                "streetAddress2": null,
                "city": "OKLAHOMA CITY",
                "congressionalDistrict": "Oklahoma 05",
                "state": {
                    "code": null,
                    "name": "Oklahoma"
                },
                "country": {
                    "code": null,
                    "name": "UNITED STATES"
                },
                "zip": "73152"
            },
            "organizationInfo": null,
            "assistanceListingNumber": {
                "title": "Federal Disaster Assistance to Individuals and Households in Presidential Declared Disaster Areas",
                "number": "97.048"
            },
            "subawardDescription": "test",
            "fain": "4438DROKTTHP     04",
            "actionDate": null,
            "totalFedFundingAmount": "1.0006742E7",
            "baseObligationDate": "2019-06-04",
            "projectDescription": "PASS THROUGH GRANT FOR FAMILIES IN DISASTER AREA",
            "baseAssistanceTypeCode": "06",
            "baseAssistanceTypeDesc": "direct payment for specified use, as a subsidy or other non-reimbursable direct financial aid (C)",
            "agencyCode": "7022",
            "assistanceType": null,
            "primeEntityUei": "PCBXEVWE3V75",
            "primeEntityName": "OKLAHOMA STATE OF",
            "uniqueAwardKey": "ASST_NON_4438DROKTTHP     04_7022",
            "vendorPhysicalAddress": {
                "streetAddress": "8858 SOUTH PRINCETON",
                "streetAddress2": null,
                "city": "CHICAGO",
                "congressionalDistrict": null,
                "state": {
                    "code": "IL",
                    "name": "ILLINOIS"
                },
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                },
                "zip": "60620"
            },
            "subDbaName": null,
            "subParentName": "OKLAHOMA, STATE OF",
            "subParentUei": "EMSCXBHK78V7",
            "subBusinessType": [
                {
                    "code": "23",
                    "name": "Minority-Owned Business"
                },
                {
                    "code": "27",
                    "name": "Self Certified Small Disadvantaged Business"
                },
                {
                    "code": "F",
                    "name": "Business or Organization"
                },
                {
                    "code": "XS",
                    "name": "Subchapter S Corporation"
                }
            ],
            "subTopPayEmployee": []
        }
    ]
}
</pre></code>
</p>
</details>

### Example 7: Search Deleted Records from Past 24 Hours 

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&fromDate=2024-11-07&toDate=2024-11-08&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/assistance/v1/subawards/search?status=Deleted&pageSize=25&pageNumber=0&fromDate=2024-11-07&toDate=2024-11-08&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
     "totalPages": 2,
    "totalRecords": 2,
    "pageNumber": 0,
    "nextPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=1&pageSize=1&status=Deleted&fromDate=2024-11-07&toDate=2024-11-08",
    "previousPageLink": "https://api-alpha.sam.gov/assistance/v1/subawards/search?pageNumber=0&pageSize=1&status=Deleted&fromDate=2024-11-07&toDate=2024-11-08",
    "data": [
        {
            "status": "Deleted",
            "submittedDate": "2024-11-08",
            "subVendorName": null,
            "subVendorUei": "VE5GG6T6ERN5",
            "subAwardNumber": "BulkuploadScenario11_newdata",
            "subAwardAmount": "43534.65",
            "subAwardDate": "2019-10-10",
            "reportUpdatedDate": "2024-11-08",
            "subawardReportId": "123477850",
            "subawardReportNumber": "70a0605d-43bc-4a3e-adee-296dc78d10ce",
            "placeOfPerformance": {
                "streetAddress": null,
                "streetAddress2": null,
                "city": "TEMPE",
                "congressionalDistrict": "Arizona 09",
                "state": {
                    "code": null,
                    "name": "Arizona"
                },
                "country": {
                    "code": null,
                    "name": "UNITED STATES"
                },
                "zip": "85281"
            },
            "organizationInfo": null,
            "assistanceListingNumber": {
                "title": "Geosciences",
                "number": "47.05"
            },
            "subawardDescription": "BulkuploadScenario7",
            "fain": "1250440",
            "actionDate": null,
            "totalFedFundingAmount": "135654.0",
            "baseObligationDate": "2013-06-25",
            "projectDescription": "Building the Deccan Traps:  What Can We Learn from Lava Flow Morphology in Large Igneous Provinces?",
            "baseAssistanceTypeCode": "04",
            "baseAssistanceTypeDesc": null,
            "agencyCode": "4900",
            "assistanceType": null,
            "primeEntityUei": "NTLHJXM55KZ6",
            "primeEntityName": "Arizona State University",
            "uniqueAwardKey": "ASST_NON_1250440_4900",
            "vendorPhysicalAddress": {
                "streetAddress": "6521 HIGHWAY 69 S Ste O",
                "streetAddress2": "null",
                "city": "TUSCALOOSA",
                "congressionalDistrict": "null",
                "state": {
                    "code": "AL",
                    "name": "Alabama"
                },
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                },
                "zip": "35405"
            },
            "subDbaName": null,
            "subParentName": "ARIZONA STATE UNIVERSITY",
            "subParentUei": "HX59VKHQH1V7",
            "subBusinessType": [],
            "subTopPayEmployee": [
                {
                    "salary": "100",
                    "fullname": "sub1"
                },
                {
                    "salary": "200",
                    "fullname": "sub2"
                },
                {
                    "salary": "300",
                    "fullname": "sub3"
                },
                {
                    "salary": "400",
                    "fullname": "sub4"
                },
                {
                    "salary": "500",
                    "fullname": "sub5"
                }
            ]
        }
    ]
}
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
