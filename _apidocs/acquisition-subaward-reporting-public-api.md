---
title: SAM.gov Acquisition Subaward Reporting Public API 
banner-heading: SAM.gov Acquisition Subaward Reporting Public API 
---

## Overview

The Acquisition Subaward Reporting Public API provides users with metadata on new and existing subawards and subcontracts and deleted subaward and subcontract data. This API requires pagination, and the response will be provided to users synchronously.


**Key Features of the Acquisition Subaward Outbound API**

* It offers several optional search parameters, filtering by sections AND (&) condition to obtain the desired data.
* It returns synchronous responses.
* It returns 100 records per page by default. User can configure page size by passing it as a query string in URL. Options for status is Published or Deleted. If no status is passed as parameter default value is 'Published'. E.g. https://api.sam.gov/contract/v1/subcontracts/search?pageNumber=1&pageSize=25
* Pagination: By using the page number and page size parameters, it is possible to retrieve any desired number of records from an API. This allows for efficient retrieval of data in smaller, manageable chunks rather than retrieving all records at once.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \
* To improve performance when search results may return thousands of records, set the page size to 1000.

## Getting Started

Acquisition Subaward Reporting Public API can be accessed from Production or Alpha via the following environments:

### Version Control - v1 

**Production**
* https://api.sam.gov/contract/v1/subcontracts/search
* https://api.sam.gov/contract/v1/subcontracts/search?status=Deleted

**Alpha**
* https://api-alpha.sam.gov/contract/v1/subcontracts/search
* https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Deleted


## Authentication and API Keys
User of this public API must provide an API key to use the Acquisition Subaward Reporting Public API. Request per day are limited based on the federal or non-federal or general roles. 
Note: User can request a public API Key in the Account Details page on SAM.gov (if testing in production), else on alpha.sam.gov (if testing in prodlike).

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on SAM.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## Acquisition Subaward Reporting API Description 

The Acquisition Subaward Reporting Public API offers several optional search parameters that can be provided independently or in combination with each other to retrieve prime information. 

### GET Contracts Request Parameters - v1

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
uniqueAwardKey | Business key to identify subawards under each prime. Unique for a contract and gives complete subaward information pertaining to that contract  | Yes | Alphanumeric | v1
piid | Allows user to pull one single record with multiple subawards. The total records that will be shown is the number of subawards. | No | Alphanumeric | v1
agencyId | Allows user to pull prime information to identify the contract family. | No | Numeric | v1
referencedIdvPIID | Allows user to pull prime information to identify the contract family. | No | Alphanumeric | v1
referencedIDVAgencyID | Allows user to pull prime information to identify the contract family. | No | Alphanumeric | v1
primeAwardType | Type of Prime Award. | No | string | v1
fromDate | Allows users to filter by From Date. By specifying From and To Dates, records can be retreived spanning multiple years with no yearly limit. If both From Date and To Date are provided, user will retrieve records that fall within that inclusive date range. | No | string | v1
toDate | Allows users to filter by To Date. If only the From Date is provided, the query will automatically set the To Date as current date. | No | string | v1


### Status Values 

Status Name | Value 
----- | ----- 
Published | Returns all published subaward information pertaining to contract. If no status is passed, the default will return all published records.
Deleted | Returns deleted records that were submitted for the contract. Delete must be passed as a status to return deleted records


## GET Acquisition Response Parameters

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

You can view the full details of this API in the OpenAPI Specification file available here: 
<a href="v1/ffata-search-openapi.yml" download="ffata-search-openapi">OpenAPI File</a>

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/get-opportunities-v2.yml" download="get-opportunities-v2">OpenAPI File</a>

<details>
<summary>Acquisition Subaward Outbound v1</summary>
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
      - name: piid
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
406 | Not Acceptable Error
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


### Example 1: Search by IDV from 2020-01-07 to 2021-01-06 

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?pageSize=25&pageNumber=0&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageSize=25&pageNumber=0&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
</details>

<details>
    <summary>Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 5,
  "totalRecords": 116,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=1&pageSize=1",
  "previousPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=0&pageSize=1",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_SPE8EM20F111S_9700_SPM8EJ14D0011_9700",
      "piid": "SPE8EM20F111S",
      "agencyId": "9700",
      "referencedIDVPIID": "SPM8EJ14D0011",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88543458",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "89394bbe-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2020-03-11",
      "subAwardNumber": "1071211",
      "subAwardAmount": "48688",
      "subAwardDate": "2020-02-20",
      "subEntityLegalBusinessName": "L&C PROTEC, INC.",
      "subEntityUei": "DKLBZLX4D674",
      "primeAwardType": "AWARD",
      "totalContractValue": "58660.0",
      "primeEntityUei": "GJMSFBCNMSK3",
      "primeEntityName": "ATLANTIC DIVING SUPPLY, INC.",
      "baseAwardDateSigned": "2020-02-19",
      "descriptionOfRequirement": "4549096622!UH1Y CANOPY AND NOSE COVER",
      "primeNaics": {
        "code": "423850",
        "description": "SERVICE ESTABLISHMENT EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "fundingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "contractingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "contractingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "216 LAFAYETTE RD UNIT 201",
        "streetAddress2": null,
        "city": "north hampton",
        "congressionalDistrict": "01",
        "state": {
          "code": "NH",
          "name": "New Hampshire"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "038622445"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "ADS",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 2: Search IDV from 2020-01-01 to Current Date

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}}  <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 5,
  "totalRecords": 116,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=1&pageSize=1",
  "previousPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=0&pageSize=1",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_SPE8EM20F111S_9700_SPM8EJ14D0011_9700",
      "piid": "SPE8EM20F111S",
      "agencyId": "9700",
      "referencedIDVPIID": "SPM8EJ14D0011",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88543458",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "89394bbe-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2020-03-11",
      "subAwardNumber": "1071211",
      "subAwardAmount": "48688",
      "subAwardDate": "2020-02-20",
      "subEntityLegalBusinessName": "L&C PROTEC, INC.",
      "subEntityUei": "DKLBZLX4D674",
      "primeAwardType": "AWARD",
      "totalContractValue": "58660.0",
      "primeEntityUei": "GJMSFBCNMSK3",
      "primeEntityName": "ATLANTIC DIVING SUPPLY, INC.",
      "baseAwardDateSigned": "2020-02-19",
      "descriptionOfRequirement": "4549096622!UH1Y CANOPY AND NOSE COVER",
      "primeNaics": {
        "code": "423850",
        "description": "SERVICE ESTABLISHMENT EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "fundingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "contractingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "contractingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "216 LAFAYETTE RD UNIT 201",
        "streetAddress2": null,
        "city": "north hampton",
        "congressionalDistrict": "01",
        "state": {
          "code": "NH",
          "name": "New Hampshire"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "038622445"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "ADS",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 3: Search deleted records by IDV from 2020-01-01 to Current Date

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?status=Deleted&pageSize=25&pageNumber=0&referencedIDVPIID=FA860415D7976&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Deleted&pageSize=25&pageNumber=0&referencedIDVPIID=FA860415D7976&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 1,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_FA860420F6109_9700_FA860415D7976_9700",
      "piid": "FA860420F6109",
      "agencyId": "9700",
      "referencedIDVPIID": "FA860415D7976",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88337198",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "7543a08c-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-12-15",
      "subAwardNumber": "15S-0032",
      "subAwardAmount": "52500",
      "subAwardDate": "2021-11-18",
      "subEntityLegalBusinessName": "NORTHROP GRUMMAN SYSTEMS CORPORATION",
      "subEntityUei": "JJHBEYM2DJ66",
      "primeAwardType": "AWARD",
      "totalContractValue": "2249962.0",
      "primeEntityUei": "YXRLX5PDCWK4",
      "primeEntityName": "RADIANCE TECHNOLOGIES, INC.",
      "baseAwardDateSigned": "2020-02-18",
      "descriptionOfRequirement": "ADVANCED TECHNICAL EXPLOITATION PROGRAM TWO",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "5700",
          "name": "DEPT OF THE AIR FORCE"
        },
        "fundingOffice": {
          "code": "F4FTAX",
          "name": "F4FTAX NASIC GS"
        },
        "contractingAgency": {
          "code": "5700",
          "name": "DEPT OF THE AIR FORCE"
        },
        "contractingOffice": {
          "code": "FA8604",
          "name": "FA8604 AFLCMC PZI"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "6120 LONGBOW DR",
        "streetAddress2": null,
        "city": "boulder",
        "congressionalDistrict": "02",
        "state": {
          "code": "CO",
          "name": "Colorado"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "803013206"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": "NKVZLJL93QT6",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "5907698",
          "fullname": "Mark A Caylor"
        },
        {
          "salary": "19620379",
          "fullname": "Kathy J Warden"
        },
        {
          "salary": "5265039",
          "fullname": "Christopher T Jones"
        },
        {
          "salary": "6134096",
          "fullname": "Janis G Pamiljans"
        },
        {
          "salary": "6031920",
          "fullname": "Kenneth L Bedingfield"
        }
      ],
      "subEntityParentLegalBusinessName": "NORTHROP GRUMMAN CORPORATION"
    }
  ]
}
</pre></code>
</p>
</details>

### Example 4: Search by Agency ID from 2021-02-01 to 2021-02-28

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&primeAwardType=AWARD&agencyId=4732&fromDate=2021-02-01&toDate=2021-02-28&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&primeAwardType=AWARD&agencyId=4732&fromDate=2021-02-01&toDate=2021-02-28&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 1,
  "totalRecords": 17,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=0&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271461",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2b8058-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010254613",
      "subAwardAmount": "332020",
      "subAwardDate": "2021-01-29",
      "subEntityLegalBusinessName": "ANSYS, INC.",
      "subEntityUei": "TY4MJLKVJJ27",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2600 ANSYS DR",
        "streetAddress2": null,
        "city": "canonsburg",
        "congressionalDistrict": "14",
        "state": {
          "code": "PA",
          "name": "Pennsylvania"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "153170404"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": "TY4MJLKVJJ27",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "ANSYS, INC."
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271628",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e34e08a-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010251976",
      "subAwardAmount": "7661658",
      "subAwardDate": "2020-09-09",
      "subEntityLegalBusinessName": "JOHN H NORTHROP & ASSOCIATES INC",
      "subEntityUei": "K3W6V7GFVHQ4",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "11602 LAWTER LANE",
        "streetAddress2": null,
        "city": "clifton",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201242259"
      },
      "subBusinessType": [
        {
          "code": "27",
          "name": "Self-Certified Small Disadvantaged Business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271750",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e37e582-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010254372",
      "subAwardAmount": "1500000",
      "subAwardDate": "2021-01-20",
      "subEntityLegalBusinessName": "SALINAS TECHNOLOGIES INC",
      "subEntityUei": "RFHNZMBC9L17",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1000 W MICHIGAN AVE",
        "streetAddress2": null,
        "city": "pensacola",
        "congressionalDistrict": "01",
        "state": {
          "code": "FL",
          "name": "Florida"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "325052320"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "27",
          "name": "Self-Certified Small Disadvantaged Business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "PI",
          "name": "Hispanic American Owned"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271491",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2c0bfe-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010243897",
      "subAwardAmount": "2750000",
      "subAwardDate": "2019-09-23",
      "subEntityLegalBusinessName": "BROCKWELL TECHNOLOGIES, INC.",
      "subEntityUei": "Q3MZZE4YNBS9",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "4970 CORPORATE DR NW STE 110",
        "streetAddress2": null,
        "city": "huntsville",
        "congressionalDistrict": "05",
        "state": {
          "code": "AL",
          "name": "Alabama"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "358056230"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "8W",
          "name": null
        },
        {
          "code": "A2",
          "name": "Woman-Owned Business"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": "Q3MZZE4YNBS9",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "BROCKWELL TECHNOLOGIES, INC."
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271551",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2d1cce-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252777",
      "subAwardAmount": "50186",
      "subAwardDate": "2020-10-14",
      "subEntityLegalBusinessName": "EN-NET SERVICES, L.L.C.",
      "subEntityUei": "WDNQMYKXBTV5",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "712 N EAST STREET",
        "streetAddress2": null,
        "city": "frederick",
        "congressionalDistrict": "06",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "217015239"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFPA20F0025_4732_GS00Q14OADS619_4732",
      "piid": "47QFPA20F0025",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADS619",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88269298",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6df1686e-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-10",
      "subAwardNumber": "TRI20025",
      "subAwardAmount": "1452243",
      "subAwardDate": "2020-06-01",
      "subEntityLegalBusinessName": "ALPHA OMEGA GROUP",
      "subEntityUei": "DZXWD6BZBLJ3",
      "primeAwardType": "AWARD",
      "totalContractValue": "766804.3",
      "primeEntityUei": "EETHKKLA2VB4",
      "primeEntityName": "TECOLOTE RESEARCH, INC.",
      "baseAwardDateSigned": "2020-04-30",
      "descriptionOfRequirement": "SAF2 - ADVISORY AND ASSISTANCE SERVICES FOR SPACE AND MISSILE SYSTEMS CENTER ATLAS X DIVISION",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "5700",
          "name": "DEPT OF THE AIR FORCE"
        },
        "fundingOffice": {
          "code": "F2TATL",
          "name": "F2TATL SMC ATLAS CORPS SMC AT"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFPA",
          "name": "GSA FAS AAS REGION 9"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "17 VIA COSTA VERDE",
        "streetAddress2": null,
        "city": "rancho palos verdes",
        "congressionalDistrict": "46",
        "state": {
          "code": "CA",
          "name": "California"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "902754880"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "FR",
          "name": "Asian-Pacific American Owned"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271504",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2c3b2e-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010254331",
      "subAwardAmount": "31934",
      "subAwardDate": "2021-01-20",
      "subEntityLegalBusinessName": "CRITICAL IO, LLC",
      "subEntityUei": "KK62PWHW5ZR8",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "36 EXECUTIVE PARK STE 150",
        "streetAddress2": null,
        "city": "irvine",
        "congressionalDistrict": "48",
        "state": {
          "code": "CA",
          "name": "California"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "926144715"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271692",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e3665e0-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252861",
      "subAwardAmount": "3000000",
      "subAwardDate": "2020-10-22",
      "subEntityLegalBusinessName": "NORTHROP GRUMMAN SYSTEMS CORPORATION",
      "subEntityUei": "EHBBTWLFSMW1",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2340 DULLES CORNER BLVD",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201713400"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "NKVZLJL93QT6",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "6145690",
          "fullname": "Mark A Caylor"
        },
        {
          "salary": "13342307",
          "fullname": "Kathy J Warden"
        },
        {
          "salary": "5917430",
          "fullname": "Kenneth L Bedingfield"
        },
        {
          "salary": "24185259",
          "fullname": "Wesley G Bush"
        },
        {
          "salary": "8094153",
          "fullname": "Blake E Larson"
        }
      ],
      "subEntityParentLegalBusinessName": "NORTHROP GRUMMAN CORPORATION"
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0066_4732_H9222215D0022_9700",
      "piid": "47QFSA20F0066",
      "agencyId": "4732",
      "referencedIDVPIID": "H9222215D0022",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88271905",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e3b9330-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "106768SB2B5",
      "subAwardAmount": "104999",
      "subAwardDate": "2021-01-25",
      "subEntityLegalBusinessName": "MADISON SPRINGFIELD INC.",
      "subEntityUei": "FUPBY1L1EEA8",
      "primeAwardType": "AWARD",
      "totalContractValue": "1307724.3",
      "primeEntityUei": "JCBMLGPE6Z71",
      "primeEntityName": "BOOZ ALLEN HAMILTON INC.",
      "baseAwardDateSigned": "2020-05-28",
      "descriptionOfRequirement": "J3 INTERNATIONAL SUPPORT",
      "primeNaics": {
        "code": "541611",
        "description": "ADMINISTRATIVE MANAGEMENT AND GENERAL MANAGEMENT CONSULTING SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "fundingOffice": {
          "code": "H92139",
          "name": "HQ USSOCOM J3"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "13809 RESEARCH BLVD STE 500",
        "streetAddress2": null,
        "city": "austin",
        "congressionalDistrict": "31",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "787501223"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": "FUPBY1L1EEA8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "MADISON SPRINGFIELD INC."
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271626",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e34d626-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252854",
      "subAwardAmount": "6000000",
      "subAwardDate": "2020-10-21",
      "subEntityLegalBusinessName": "JANUS RESEARCH GROUP, LLC",
      "subEntityUei": "Q6S9MZTEFMS5",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "600 PONDER PLACE DR",
        "streetAddress2": null,
        "city": "evans",
        "congressionalDistrict": "10",
        "state": {
          "code": "GA",
          "name": "Georgia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "308093185"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "Q6S9MZTEFMS5",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "295348",
          "fullname": "John K Dewey"
        },
        {
          "salary": "252855",
          "fullname": "Jeannette C Loop"
        },
        {
          "salary": "216177",
          "fullname": "Joseph W Bailey"
        },
        {
          "salary": "355348",
          "fullname": "Robert L Elich"
        },
        {
          "salary": "290874",
          "fullname": "Tony L Loop"
        }
      ],
      "subEntityParentLegalBusinessName": "JANUS RESEARCH GROUP, LLC"
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271754",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e37f7e8-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252899",
      "subAwardAmount": "1000000",
      "subAwardDate": "2020-10-22",
      "subEntityLegalBusinessName": "SELECT GROUP FEDERAL, LLC THE",
      "subEntityUei": "GB2QDKVY9A43",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7930 JONES BRANCH DR STE 200",
        "streetAddress2": null,
        "city": "mc lean",
        "congressionalDistrict": "08",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "221023388"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "VHHLEJG67DG5",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "SELECT GROUP LLC, THE"
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271797",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e38daaa-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252810",
      "subAwardAmount": "5000000",
      "subAwardDate": "2020-10-16",
      "subEntityLegalBusinessName": "TEKSYSTEMS, INC.",
      "subEntityUei": "KBFUKJJSJW69",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7437 RACE RD",
        "streetAddress2": null,
        "city": "hanover",
        "congressionalDistrict": "03",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "210761112"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": "GVWENMHJ4Y87",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "Allegis Group, Inc."
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFPA20F0025_4732_GS00Q14OADS619_4732",
      "piid": "47QFPA20F0025",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADS619",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88269361",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6df27e0c-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-10",
      "subAwardNumber": "TRI20026",
      "subAwardAmount": "4287451",
      "subAwardDate": "2020-06-01",
      "subEntityLegalBusinessName": "OMNI CONSULTING SOLUTIONS LLC",
      "subEntityUei": "Y4PCM34SMQV5",
      "primeAwardType": "AWARD",
      "totalContractValue": "766804.3",
      "primeEntityUei": "EETHKKLA2VB4",
      "primeEntityName": "TECOLOTE RESEARCH, INC.",
      "baseAwardDateSigned": "2020-04-30",
      "descriptionOfRequirement": "SAF2 - ADVISORY AND ASSISTANCE SERVICES FOR SPACE AND MISSILE SYSTEMS CENTER ATLAS X DIVISION",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "5700",
          "name": "DEPT OF THE AIR FORCE"
        },
        "fundingOffice": {
          "code": "F2TATL",
          "name": "F2TATL SMC ATLAS CORPS SMC AT"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFPA",
          "name": "GSA FAS AAS REGION 9"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1730 E HOLLY AVE",
        "streetAddress2": null,
        "city": "el segundo",
        "congressionalDistrict": "36",
        "state": {
          "code": "CA",
          "name": "California"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "902454404"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271448",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2b3184-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252821",
      "subAwardAmount": "500000",
      "subAwardDate": "2020-10-20",
      "subEntityLegalBusinessName": "AFUZION INC.",
      "subEntityUei": "ZMM2BJTSJJL9",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "801 S GRAND AVE STE 1607",
        "streetAddress2": null,
        "city": "los angeles",
        "congressionalDistrict": "34",
        "state": {
          "code": "CA",
          "name": "California"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "900174674"
      },
      "subBusinessType": [
        {
          "code": "27",
          "name": "Self-Certified Small Disadvantaged Business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271465",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e2b9bf6-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252726",
      "subAwardAmount": "500000",
      "subAwardDate": "2020-10-12",
      "subEntityLegalBusinessName": "ART OFFICE CORP.",
      "subEntityUei": "L97GJYDLJ456",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1020 CORKWOOD ST",
        "streetAddress2": null,
        "city": "hollywood",
        "congressionalDistrict": "20",
        "state": {
          "code": "FL",
          "name": "Florida"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "330194879"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "G9",
          "name": "Other than one of the preceding"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271625",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e34d270-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010254367",
      "subAwardAmount": "10000000",
      "subAwardDate": "2021-01-20",
      "subEntityLegalBusinessName": "JACOBS TECHNOLOGY INC.",
      "subEntityUei": "S7NNWN1J6JP9",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1030 TITAN COURT STE 200",
        "streetAddress2": null,
        "city": "fort walton beach",
        "congressionalDistrict": "01",
        "state": {
          "code": "FL",
          "name": "Florida"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "325476638"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": "MKCAUUG2K7H6",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "JACOBS ENGINEERING GROUP INC."
    },
    {
      "uniqueAwardKey": "CONT_AWD_47QFSA20F0057_4732_GS00Q14OADU428_4732",
      "piid": "47QFSA20F0057",
      "agencyId": "4732",
      "referencedIDVPIID": "GS00Q14OADU428",
      "referencedIDVAgencyId": "4732",
      "subAwardReportId": "88271694",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "6e366d56-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-02",
      "subAwardNumber": "P010252644",
      "subAwardAmount": "5000000",
      "subAwardDate": "2020-10-07",
      "subEntityLegalBusinessName": "NOVA TECH SOLUTIONS LLC",
      "subEntityUei": "KMU9NTZ6MN75",
      "primeAwardType": "AWARD",
      "totalContractValue": "1838389.31",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-05-05",
      "descriptionOfRequirement": "SOFTWARE LIFE CYCLE DEVELOPMENT",
      "primeNaics": {
        "code": "541712",
        "description": "RESEARCH AND DEVELOPMENT IN THE PHYSICAL, ENGINEERING, AND LIFE SCIENCES (EXCEPT BIOTECHNOLOGY)"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "W90BWX",
          "name": "USA CCDC AVIATION AND MISSILE CENTE"
        },
        "contractingAgency": {
          "code": "4732",
          "name": "FEDERAL ACQUISITION SERVICE"
        },
        "contractingOffice": {
          "code": "47QFSA",
          "name": "GSA FAS AAS REGION 4"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "4700",
          "name": "GENERAL SERVICES ADMINISTRATION"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "113 MULRY DR",
        "streetAddress2": null,
        "city": "niceville",
        "congressionalDistrict": "01",
        "state": {
          "code": "FL",
          "name": "Florida"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "325782398"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 5: Search by Agency ID, ReferenceIDVPIID, and Unique Award Key from 2020-01-07 to 2022-01-14 

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&primeAwardType=AWARD&agencyId=9700&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&primeAwardType=AWARD&agencyId=9700&referencedIDVPIID=SPM8EJ14D0011&fromDate=2020-01-07&toDate=2021-01-06&api_key={{api_key}} <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 5,
  "totalRecords": 116,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=1&pageSize=1",
  "previousPageLink": "https://api-alpha.sam.gov/contract/v1/subcontracts/search?pageNumber=0&pageSize=1",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_SPE8EM20F111S_9700_SPM8EJ14D0011_9700",
      "piid": "SPE8EM20F111S",
      "agencyId": "9700",
      "referencedIDVPIID": "SPM8EJ14D0011",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88543458",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "89394bbe-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2020-03-11",
      "subAwardNumber": "1071211",
      "subAwardAmount": "48688",
      "subAwardDate": "2020-02-20",
      "subEntityLegalBusinessName": "L&C PROTEC, INC.",
      "subEntityUei": "DKLBZLX4D674",
      "primeAwardType": "AWARD",
      "totalContractValue": "58660.0",
      "primeEntityUei": "GJMSFBCNMSK3",
      "primeEntityName": "ATLANTIC DIVING SUPPLY, INC.",
      "baseAwardDateSigned": "2020-02-19",
      "descriptionOfRequirement": "4549096622!UH1Y CANOPY AND NOSE COVER",
      "primeNaics": {
        "code": "423850",
        "description": "SERVICE ESTABLISHMENT EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "fundingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "contractingAgency": {
          "code": "97AS",
          "name": "DEFENSE LOGISTICS AGENCY"
        },
        "contractingOffice": {
          "code": "SPE8EM",
          "name": "DLA TROOP SUPPORT"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "216 LAFAYETTE RD UNIT 201",
        "streetAddress2": null,
        "city": "north hampton",
        "congressionalDistrict": "01",
        "state": {
          "code": "NH",
          "name": "New Hampshire"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "038622445"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "ADS",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    }
  ]
}
</pre></code>
</p>
</details>

### Example 6: Search by ReferenceIDVPIID

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&referencedIDVPIID=W52P1J18DA075&api_key=%7B%7Bapi_key%7D%7D <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/contract/v1/subcontracts/search?status=Published&pageSize=25&pageNumber=0&referencedIDVPIID=W52P1J18DA075&api_key=%7B%7Bapi_key%7D%7D <br>
</details>

<details>
    <summary> Sample Response (JSON Output) v1</summary>

<p>
<code><pre>
{
  "totalPages": 6,
  "totalRecords": 138,
  "pageNumber": 0,
  "nextPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=1&pageSize=25",
  "previousPageLink": "https://api-alpha.sam.gov/comp/contract/v1/subcontracts/search?pageNumber=0&pageSize=25",
  "data": [
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605804",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471f2f6-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2020-04-28",
      "subAwardNumber": "P010247869",
      "subAwardAmount": "1436478",
      "subAwardDate": "2020-03-16",
      "subEntityLegalBusinessName": "TRIBALCO, LLC",
      "subEntityUei": "XVNBJ1QJY5N4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7735 OLD GEORGETOWN RD FL 12",
        "streetAddress2": null,
        "city": "bethesda",
        "congressionalDistrict": "08",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "208146193"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "XVNBJ1QJY5N4",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "402672",
          "fullname": "Joseph  Castro"
        },
        {
          "salary": "327603",
          "fullname": "Theodore  Rybicki"
        },
        {
          "salary": "379830",
          "fullname": "Michele  Friedman"
        },
        {
          "salary": "338162",
          "fullname": "Claudius  Atkinson"
        },
        {
          "salary": "339400",
          "fullname": "Marc  Eliot"
        }
      ],
      "subEntityParentLegalBusinessName": "TRIBALCO, LLC"
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605842",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94727564-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-02-22",
      "subAwardNumber": "P010262471",
      "subAwardAmount": "247125",
      "subAwardDate": "2022-01-28",
      "subEntityLegalBusinessName": "WORLD WIDE TECHNOLOGY, LLC",
      "subEntityUei": "C8VFSNKTMQB6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 WORLD WIDE WAY",
        "streetAddress2": null,
        "city": "saint louis",
        "congressionalDistrict": "02",
        "state": {
          "code": "MO",
          "name": "Missouri"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "631463002"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "XLLLFFAR2YT7",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "World Wide Technology Holding Co., LLC"
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605838",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94726452-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-04-25",
      "subAwardNumber": "P010272368",
      "subAwardAmount": "1889659",
      "subAwardDate": "2023-03-10",
      "subEntityLegalBusinessName": "WORLD WIDE TECHNOLOGY LLC",
      "subEntityUei": "C8VFSNKTMQB6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 WORLD WIDE WAY",
        "streetAddress2": null,
        "city": "saint louis",
        "congressionalDistrict": "02",
        "state": {
          "code": "MO",
          "name": "Missouri"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "631463002"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "C1X5PJL441B8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605837",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94726146-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-04-25",
      "subAwardNumber": "P010272642",
      "subAwardAmount": "1182009",
      "subAwardDate": "2023-03-22",
      "subEntityLegalBusinessName": "WORLD WIDE TECHNOLOGY LLC",
      "subEntityUei": "C8VFSNKTMQB6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 WORLD WIDE WAY",
        "streetAddress2": null,
        "city": "saint louis",
        "congressionalDistrict": "02",
        "state": {
          "code": "MO",
          "name": "Missouri"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "631463002"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "C1X5PJL441B8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605779",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94719a18-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2024-02-27",
      "subAwardNumber": "P010279514",
      "subAwardAmount": "608792",
      "subAwardDate": "2024-01-31",
      "subEntityLegalBusinessName": "IRON BOW TECHNOLOGIES, LLC",
      "subEntityUei": "Q2M4FYALZJ89",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2121 COOPERATIVE WAY\nSTE 500",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201715346"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "461354",
          "fullname": "Richard W Hartman III"
        },
        {
          "salary": "859817",
          "fullname": "Mark H Mercilliott"
        },
        {
          "salary": "1521012",
          "fullname": "Rene B LaVigne"
        },
        {
          "salary": "1209719",
          "fullname": "Charles L Curran"
        },
        {
          "salary": "643582",
          "fullname": "Stuart T Strang"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605776",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94719004-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-02-22",
      "subAwardNumber": "P010262490",
      "subAwardAmount": "291591",
      "subAwardDate": "2022-01-28",
      "subEntityLegalBusinessName": "IRON BOW TECHNOLOGIES, LLC",
      "subEntityUei": "Q2M4FYALZJ89",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2121COOPERATIVE WAY STE 500",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "20171"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "HG4LTWDKQ5M9",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "728325",
          "fullname": "Charles L Curran"
        },
        {
          "salary": "699600",
          "fullname": "Mark H Mercilliott"
        },
        {
          "salary": "1392000",
          "fullname": "Rene B LaVigne"
        },
        {
          "salary": "900750",
          "fullname": "Stuart T Strang"
        },
        {
          "salary": "340644",
          "fullname": "Richard W Hartman III"
        }
      ],
      "subEntityParentLegalBusinessName": "Hig Capital Management, Inc."
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605808",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "947200c0-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-11-30",
      "subAwardNumber": "P010247869",
      "subAwardAmount": "2345188",
      "subAwardDate": "2020-03-16",
      "subEntityLegalBusinessName": "TRIBALCO, LLC",
      "subEntityUei": "XVNBJ1QJY5N4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7735 OLD GEORGETOWN RD FL 12",
        "streetAddress2": null,
        "city": "bethesda",
        "congressionalDistrict": "08",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "208146193"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "XVNBJ1QJY5N4",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "334450",
          "fullname": "Kevin  Moss"
        },
        {
          "salary": "427159",
          "fullname": "Joseph  Castro"
        },
        {
          "salary": "395790",
          "fullname": "Michele  Friedman"
        },
        {
          "salary": "334450",
          "fullname": "Andrew  Stern"
        },
        {
          "salary": "408130",
          "fullname": "Marc  Tommer"
        }
      ],
      "subEntityParentLegalBusinessName": "TRIBALCO, LLC"
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605752",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "947137da-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-02-24",
      "subAwardNumber": "P010254186",
      "subAwardAmount": "277456",
      "subAwardDate": "2021-01-06",
      "subEntityLegalBusinessName": "FIRST NETWORK CO.,LTD.",
      "subEntityUei": "K2FBQNPL3FC6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "94 CHUPAL 2-GIL, PAENGSEONG-EUP",
        "streetAddress2": null,
        "city": "pyeongtaek",
        "congressionalDistrict": null,
        "state": {
          "code": "ZZ",
          "name": "Non-US"
        },
        "country": {
          "code": "KR",
          "name": "Korea, South"
        },
        "zip": null
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605800",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471e568-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2024-02-27",
      "subAwardNumber": "P010247869",
      "subAwardAmount": "6748680",
      "subAwardDate": "2020-03-16",
      "subEntityLegalBusinessName": "TRIBALCO LLC",
      "subEntityUei": "XVNBJ1QJY5N4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7735 OLD GEORGETOWN RD\nFL 12",
        "streetAddress2": null,
        "city": "bethesda",
        "congressionalDistrict": "08",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "208146193"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "PMXRWJCNCDQ8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "334591",
          "fullname": "Andrew  Stern"
        },
        {
          "salary": "373862",
          "fullname": "Marc  Tommer"
        },
        {
          "salary": "334591",
          "fullname": "Kevin  Moss"
        },
        {
          "salary": "436470",
          "fullname": "Justin  Takasaki"
        },
        {
          "salary": "342895",
          "fullname": "Joseph  Castro"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605799",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471e252-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2024-02-27",
      "subAwardNumber": "P010263806",
      "subAwardAmount": "316021",
      "subAwardDate": "2022-03-30",
      "subEntityLegalBusinessName": "STEELGATE LLC",
      "subEntityUei": "R5N5T4PC5YU3",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "21525 RIDGETOP CIR STE 270",
        "streetAddress2": null,
        "city": "sterling",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201666510"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605785",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471ada0-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-04-25",
      "subAwardNumber": "P010254373",
      "subAwardAmount": "1183025",
      "subAwardDate": "2021-01-20",
      "subEntityLegalBusinessName": "IRON BOW TECHNOLOGIES, LLC",
      "subEntityUei": "Q2M4FYALZJ89",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2121 COOPERATIVE WAY\r\nSTE 500",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201715346"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "728325",
          "fullname": "Charles L Curran"
        },
        {
          "salary": "900750",
          "fullname": "Stuart T Strang"
        },
        {
          "salary": "340644",
          "fullname": "Richard W Hartman III"
        },
        {
          "salary": "1392000",
          "fullname": "Rene B LaVigne"
        },
        {
          "salary": "699600",
          "fullname": "Mark H Mercilliott"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605731",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9470ee42-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-02-23",
      "subAwardNumber": "P010271335",
      "subAwardAmount": "66841",
      "subAwardDate": "2023-01-31",
      "subEntityLegalBusinessName": "DELL FEDERAL SYSTEMS L.P.",
      "subEntityUei": "N1C5QLNPJLS4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 DELL WAY",
        "streetAddress2": null,
        "city": "round rock",
        "congressionalDistrict": "31",
        "state": {
          "code": "TX",
          "name": "Texas"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "786827000"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "TJCDPVN6RNP7",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "1014453",
          "fullname": "Ray  McDuffie"
        },
        {
          "salary": "684544",
          "fullname": "Cameron  Chehreh"
        },
        {
          "salary": "716339",
          "fullname": "Suri  Durvasula"
        },
        {
          "salary": "935947",
          "fullname": "Jim  Kelly"
        },
        {
          "salary": "1038715",
          "fullname": "John  Griffin"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605729",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9470e7ee-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-02-22",
      "subAwardNumber": "P010262098",
      "subAwardAmount": "169640",
      "subAwardDate": "2022-01-14",
      "subEntityLegalBusinessName": "CARAHSOFT TECHNOLOGY CORP.",
      "subEntityUei": "DT8KJHZXVJH5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "11493 SUNSET HILLS RD",
        "streetAddress2": null,
        "city": "reston",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201905230"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605767",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94716de0-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-04-25",
      "subAwardNumber": "P010263664",
      "subAwardAmount": "107968",
      "subAwardDate": "2022-03-24",
      "subEntityLegalBusinessName": "HYPERION, INC.",
      "subEntityUei": "L2BEJTQ3DBN5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "11480 COMMERCE PARK DR STE 120",
        "streetAddress2": null,
        "city": "reston",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201911554"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "XS",
          "name": "S Corporation"
        }
      ],
      "subParentUei": "L2BEJTQ3DBN5",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "HYPERION, INC."
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605745",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94711cc8-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2024-02-27",
      "subAwardNumber": "P010250718",
      "subAwardAmount": "1566661",
      "subAwardDate": "2020-07-16",
      "subEntityLegalBusinessName": "DIRECTVIZ SOLUTIONS, LLC",
      "subEntityUei": "YXH4AGD2LGF5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1595 SPRING HILL ROAD\nSTE 600",
        "streetAddress2": null,
        "city": "vienna",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "221822228"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "FR",
          "name": "Asian-Pacific American Owned"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "250000",
          "fullname": "Hanh  McLellen"
        },
        {
          "salary": "400000",
          "fullname": "Michael  McHugh"
        },
        {
          "salary": "500000",
          "fullname": "Vinh Q Tran"
        },
        {
          "salary": "235000",
          "fullname": "Eric  White"
        },
        {
          "salary": "172200",
          "fullname": "Lily  Duong"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605744",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "947119a8-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2024-05-26",
      "subAwardNumber": "P010250718",
      "subAwardAmount": "1151284",
      "subAwardDate": "2020-07-16",
      "subEntityLegalBusinessName": "DIRECTVIZ SOLUTIONS, LLC",
      "subEntityUei": "YXH4AGD2LGF5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1595 SPRING HILL ROAD\nSTE 600",
        "streetAddress2": null,
        "city": "vienna",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "221822228"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "FR",
          "name": "Asian-Pacific American Owned"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": [
        {
          "salary": "250000",
          "fullname": "Hanh  McLellen"
        },
        {
          "salary": "500000",
          "fullname": "Vinh Q Tran"
        },
        {
          "salary": "172200",
          "fullname": "Lily  Duong"
        },
        {
          "salary": "235000",
          "fullname": "Eric  White"
        },
        {
          "salary": "400000",
          "fullname": "Michael  McHugh"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605737",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471027e-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-04-25",
      "subAwardNumber": "P010250718",
      "subAwardAmount": "326650",
      "subAwardDate": "2020-07-16",
      "subEntityLegalBusinessName": "DIRECTVIZ SOLUTIONS LLC",
      "subEntityUei": "YXH4AGD2LGF5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1595 SPRING HILL RD STE 600",
        "streetAddress2": null,
        "city": "vienna",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "221822228"
      },
      "subBusinessType": [
        {
          "code": "23",
          "name": "Minority-Owned business"
        },
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "A5",
          "name": "Veteran Owned Business"
        },
        {
          "code": "FR",
          "name": "Asian-Pacific American Owned"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "QF",
          "name": "Service Disabled Veteran Owned"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "500000",
          "fullname": "Vinh  Tran"
        },
        {
          "salary": "300000",
          "fullname": "Chuck  Thompson"
        },
        {
          "salary": "400000",
          "fullname": "Michael  McHugh"
        },
        {
          "salary": "164800",
          "fullname": "Lily  Duong"
        },
        {
          "salary": "250000",
          "fullname": "Hanh  McLellen"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605725",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9470d8f8-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-07-27",
      "subAwardNumber": "P010265664",
      "subAwardAmount": "275528",
      "subAwardDate": "2022-06-13",
      "subEntityLegalBusinessName": "CARAHSOFT TECHNOLOGY CORP",
      "subEntityUei": "DT8KJHZXVJH5",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "11493 SUNSET HILLS RD\r\nSTE 100",
        "streetAddress2": null,
        "city": "reston",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201905230"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        }
      ],
      "subParentUei": "DT8KJHZXVJH5",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": "CARAHSOFT TECHNOLOGY CORP"
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605721",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9470cafc-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2021-08-26",
      "subAwardNumber": "P010258377",
      "subAwardAmount": "34945",
      "subAwardDate": "2021-07-28",
      "subEntityLegalBusinessName": "BRIDGES SYSTEM INTEGRATION LLC",
      "subEntityUei": "V7L5MN65VCX3",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "516 HERNDON PKWY STE A",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "11",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201706230"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605720",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9470c7aa-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-02-22",
      "subAwardNumber": "P010262099",
      "subAwardAmount": "835728",
      "subAwardDate": "2022-01-14",
      "subEntityLegalBusinessName": "BLUE TECH INC.",
      "subEntityUei": "MDC5LDZKQAM4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "4025 HANCOCK ST SUITE 100",
        "streetAddress2": null,
        "city": "san diego",
        "congressionalDistrict": "52",
        "state": {
          "code": "CA",
          "name": "California"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "921105167"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "8W",
          "name": null
        },
        {
          "code": "A2",
          "name": "Woman-Owned Business"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": null,
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "208809",
          "fullname": "Pao  Lee"
        },
        {
          "salary": "932614",
          "fullname": "Guy A Stone"
        },
        {
          "salary": "209388",
          "fullname": "Dylan  Slay"
        },
        {
          "salary": "244265",
          "fullname": "Brian  Godlesky"
        },
        {
          "salary": "1205406",
          "fullname": "Susan W Stone"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605827",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94723fcc-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-02-23",
      "subAwardNumber": "P010271209",
      "subAwardAmount": "118470",
      "subAwardDate": "2023-01-25",
      "subEntityLegalBusinessName": "WORLD WIDE TECHNOLOGY LLC",
      "subEntityUei": "C8VFSNKTMQB6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 WORLD WIDE WAY",
        "streetAddress2": null,
        "city": "saint louis",
        "congressionalDistrict": "02",
        "state": {
          "code": "MO",
          "name": "Missouri"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "631463002"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "C1X5PJL441B8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605803",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "9471ef7c-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2020-10-27",
      "subAwardNumber": "P010247869",
      "subAwardAmount": "1056687",
      "subAwardDate": "2020-03-16",
      "subEntityLegalBusinessName": "TRIBALCO, LLC",
      "subEntityUei": "XVNBJ1QJY5N4",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "7735 OLD GEORGETOWN RD FL 12",
        "streetAddress2": null,
        "city": "bethesda",
        "congressionalDistrict": "08",
        "state": {
          "code": "MD",
          "name": "Maryland"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "208146193"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        },
        {
          "code": "MF",
          "name": "Manufacturer of Goods"
        }
      ],
      "subParentUei": "XVNBJ1QJY5N4",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "402672",
          "fullname": "Joseph  Castro"
        },
        {
          "salary": "338162",
          "fullname": "Claudius  Atkinson"
        },
        {
          "salary": "379830",
          "fullname": "Michele  Friedman"
        },
        {
          "salary": "339400",
          "fullname": "Marc  Eliot"
        },
        {
          "salary": "327603",
          "fullname": "Theodore  Rybicki"
        }
      ],
      "subEntityParentLegalBusinessName": "TRIBALCO, LLC"
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605830",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94724a1c-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2023-12-20",
      "subAwardNumber": "P010278253",
      "subAwardAmount": "151060",
      "subAwardDate": "2023-11-29",
      "subEntityLegalBusinessName": "WORLD WIDE TECHNOLOGY LLC",
      "subEntityUei": "C8VFSNKTMQB6",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "1 WORLD WIDE WAY",
        "streetAddress2": null,
        "city": "saint louis",
        "congressionalDistrict": "02",
        "state": {
          "code": "MO",
          "name": "Missouri"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "631463002"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "C1X5PJL441B8",
      "subEntityDoingBusinessAsName": null,
      "subTopPayEmployee": null,
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605780",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "94719da6-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-09-26",
      "subAwardNumber": "P010267112",
      "subAwardAmount": "748023",
      "subAwardDate": "2022-08-18",
      "subEntityLegalBusinessName": "IRON BOW TECHNOLOGIES, LLC",
      "subEntityUei": "Q2M4FYALZJ89",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2121 COOPERATIVE WAY STE 500",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201715346"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "HG4LTWDKQ5M9",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "340644",
          "fullname": "Richard W Hartman III"
        },
        {
          "salary": "728325",
          "fullname": "Charles L Curran"
        },
        {
          "salary": "699600",
          "fullname": "Mark H Mercilliott"
        },
        {
          "salary": "1392000",
          "fullname": "Rene B LaVigne"
        },
        {
          "salary": "900750",
          "fullname": "Stuart T Strang"
        }
      ],
      "subEntityParentLegalBusinessName": null
    },
    {
      "uniqueAwardKey": "CONT_AWD_W91QVN20F0157_9700_W52P1J18DA075_9700",
      "piid": "W91QVN20F0157",
      "agencyId": "9700",
      "referencedIDVPIID": "W52P1J18DA075",
      "referencedIDVAgencyId": "9700",
      "subAwardReportId": "88605777",
      "subEntityEFTIndicator": null,
      "subAwardReportNumber": "947193d8-666d-11ef-ba05-25022c356cb4",
      "submittedDate": "2022-07-27",
      "subAwardNumber": "P010254373",
      "subAwardAmount": "355980",
      "subAwardDate": "2021-01-20",
      "subEntityLegalBusinessName": "IRON BOW TECHNOLOGIES, LLC",
      "subEntityUei": "Q2M4FYALZJ89",
      "primeAwardType": "AWARD",
      "totalContractValue": "9601082.99",
      "primeEntityUei": "MMLKPW9JLX64",
      "primeEntityName": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
      "baseAwardDateSigned": "2020-01-31",
      "descriptionOfRequirement": "CYBERSECURITY, NETWORK OPERATIONS&MAINTENANCE (O&M) OF INFORMATION TECHNOLOGY SUPPORT FOR USACISA-P",
      "primeNaics": {
        "code": "541519",
        "description": "OTHER COMPUTER RELATED SERVICES"
      },
      "primeOrganizationInfo": {
        "fundingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "fundingOffice": {
          "code": "WT4G3U",
          "name": "0001 SC HQ     HHC AUG"
        },
        "contractingAgency": {
          "code": "2100",
          "name": "DEPT OF THE ARMY"
        },
        "contractingOffice": {
          "code": "W91QVN",
          "name": "411TH CONTRACTING SUPORT BRIGAGE AU"
        },
        "fundingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        },
        "contractingDepartment": {
          "code": "9700",
          "name": "DEPT OF DEFENSE"
        }
      },
      "entityPhysicalAddress": {
        "streetAddress": "2121 COOPERATIVE WAY STE 500",
        "streetAddress2": null,
        "city": "herndon",
        "congressionalDistrict": "10",
        "state": {
          "code": "VA",
          "name": "Virginia"
        },
        "country": {
          "code": "USA",
          "name": "United States"
        },
        "zip": "201715346"
      },
      "subBusinessType": [
        {
          "code": "2X",
          "name": "For-Profit Organization"
        },
        {
          "code": "LJ",
          "name": "Limited Liability Company"
        }
      ],
      "subParentUei": "HG4LTWDKQ5M9",
      "subEntityDoingBusinessAsName": "SAIC",
      "subTopPayEmployee": [
        {
          "salary": "340644",
          "fullname": "Richard W Hartman III"
        },
        {
          "salary": "728325",
          "fullname": "Charles L Curran"
        },
        {
          "salary": "1392000",
          "fullname": "Rene B LaVigne"
        },
        {
          "salary": "900750",
          "fullname": "Stuart T Strang"
        },
        {
          "salary": "699600",
          "fullname": "Mark H Mercilliott"
        }
      ],
      "subEntityParentLegalBusinessName": null
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
