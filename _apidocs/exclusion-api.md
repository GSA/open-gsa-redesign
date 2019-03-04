---
title: Exclusions  API
banner-heading: Exclusions API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
The Exclusions API will allow users to request Public Exclusion Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner.

API also offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to 
obtain the desired data.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Exclusions API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/sam-exclusions?api_key=< value >
* https://api-alpha.sam.gov/prodlike/sam-exclusions?api_key=< value >

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

<p><small><a href="#">Back to top</a></small></p>

## API Description

**Endpoint:** https://api.sam.gov/prod/sam-exclusions?api_key=< value >

**Description** Restful endpoint to retrieve Exclusion detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| classification | Allows a string (Individual, Firm, Vessel, Special Entity Designation, null).<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&classification=Firm' |
| exclusionName | Allows partial text or a complete text. <br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&exclusionName=SAM' |
| exclusionType | Allows a string (IP, IC, PR, VE,  Ineligible (Proceedings Pending), Ineligible (Proceedings Completed), Prohibition/Restriction, Voluntary Exclusion).<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&exclusionType=IP' |
| exclusionProgram | Allows a string (RE, NP, PR, Reciprocal, Non-Procurement, Procurement).<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&exclusionProgram=Y' |
| stateProvince | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&stateProvince=AR' |
| country  | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&country=USA' |
| zipCode  | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&zipCode=20171' |
| duns | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&duns=9725565' |
| excludingAgencyCode | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&excludingAgencyCode=AF' |
| excludingAgencyName | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&excludingAgencyName=FEDERAL' |
| ctCode | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&ctCode=ZZ' |
| activationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&activationDate=02/12/1999' |
| creationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&creationDate=02/12/1999' |
| updateDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&updateDate=02/12/1999' |
| terminationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&terminationDate=02/12/1999' |
| cageCode | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&cageCode=0Y5L9' |
| npi  | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&npi=1053373266' |
| ssn  | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&ssn=XXXXXXXXX' |
| tin  | Allows a string.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&tin=XXXXX' |
| includeSections | Allows to filter data by sections, exclusionDetails, exclusionIdentification, exclusionActions, exclusionAddress, exclusionOtherInformation and vesselDetails.<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&includeSections=exclusionOtherInformation,exclusionDetails' |
| format | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'https://api.sam.gov/prod/sam-exclusions?api_key=< value >&format=csv' |

**Expected Result**

API response consists of Sections, Sub-sections and Tags underneath each of the Sections or Sub-sections

| Section/Sub-section/Tag | Description |
| ---- |  ----------- |
| **exclusionDetails** |
| classificationType (string) | Classification Type |
| exclusionType (string) | Exclusion Type  |
| exclusionProgram (string) | Exclusion Program | 
| excludingAgencyCode (string) | Excluding Agency Code  |
| excludingAgencyName (string) | Excluding Agency Name  |
| **exclusionIdentification** |
| duns (string) | DUNS  |
| duns4 (string) | DUNS4   |
| cageCode (string) | Cage Code  | 
| npi (string) | NPI | 
| prefix (string) | Prefix | 
| firstName (string) | First Name  | 
| middleName (string) | Middle Name   |
| lastName (string) | Last Name   |
| suffix (string) | Suffix   |
| name (string) | Company Name  |
| **exclusionActions  --> listOfActions** |
| createDate (string) | Create Date   |
| updateDate (string) | Update Date  |
| activateDate (string) | Activate Date |
| terminationDate (string) | Termination Date   |
| terminationType(string) | Termination Type   |
| recordStatus  (string) | Record Status  |
| **exclusionAddress** |
| address1 (string) | Address 1  | 
| address2 (string) | Address 2  | 
| addressCity (string) | Address City  | 
| addressState (string) | Address State |
| addressProvince (string) | Address Province |
| addressZipOrPostalCode (string) | Address Zip OR Postal Code  |
| country (string) | Country  |
| **exclusionOtherInformation** |
| additionalComments (string) | Additional Comments  |
| ctCode (string) | CT Code  |
| dnbInvestigationStatus (string) | DNB Investigation Status    |
| **references --> referencesList**   |
| name (string) | Name  |
| type (string) | Type  |
| moreLocations (list) |  More Locations   |
| **vesselDetails** |
| callSign (string) | Call Sign  |
| type (string) | Type  |
| tonnage (string) | Tonnage  |
| grt (string) | GRT  |
| flag (string) | Flag  |
| owner (string) | Owner |
| secondaryAddress (string) | Secondary Address  |


## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/exclusion_api.yaml">Open API specification file for the Exclusion API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages:<br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * Invalid Input Parameters. <br><br> * The parameter: 'exclusionName' or 'includeSections' is not permitted inside Query Param(q). <br><br> * The value null/empty is not valid for parameter ‘Query Param (q). <br><br>  * A maximum of 100 DUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. |
| 403 | API key is not correct or was not provided. |

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>