---
title: Beta.SAM.Gov Exclusions  API
banner-heading: Beta.SAM.Gov Exclusions API
---

## Overview
The Exclusions API will allow users to request Public Exclusion Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner.

**Key Features of the Exclusion API:**
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.

**Additional Features of the Exclusion API:** It can serve as an Extract API with the addition of “format” parameter in the request. Following are the key features of the Exclusion Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the user emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

**IMPORTANT:**  Please note the version number of the end point you are using as it is subject to change.  Version 0.9 of the API will be deprecated in Alpha starting the evening of 8/14/19 and Version 1 will be made active.  The same will occur in Beta on a date to be determined.

Exclusions API can be accessed from Beta or Alpha via the following end points:
* Beta: https://api.sam.gov/prod/entity-information/v0.9/api/exclusions?api_key= < value >
* Alpha: https://api-alpha.sam.gov/prodlike/entity-information/v1/api/exclusions?api_key= < value >

Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page. This page can be accessed here: <a href="https://beta.sam.gov/profile/details" target="_blank">Account Details page on beta.sam.gov</a>
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

Generating a System Account API Key:
* Users registered with a non-government email address and associated with an entity OR users registered with a government email address may request a system account for public data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select 'Go to System Accounts' from the widget and fill out the required sections.
* The requested system account will then need to be approved.  After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select 'Go to System Accounts' again in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key.
* The user must enter their password again to retrieve the key.

Utilizing the Exclusion API as an extract:
* To utilize this API as an Extract an additional parameter called ‘format’ has been implemented.
* To retrieve Exclusion data in a CSV format, the parameter ‘&format=csv’ must be provided in the request.
* To retrieve Exclusion data in a JSON format, the parameter ‘&format=json’ must be provided in the request.
* If the requests that contain the ‘format’ parameter are executed successfully, then they will provide the user with a file downloadable URL in the response.
* In the file downloadable URL, the phrase REPLACE_WITH_API_KEY must be deleted and replaced with a valid API Key and sent as another request.
* If the file is ready for download, then the users can retrieve it. If the file is not ready for download, then the users will need to try again in some time.
* Users can also provide another parameter, “emailId” with a valid email address if they choose to receive the file downloadable link in their emails.

<p><small><a href="#">Back to top</a></small></p>

## API Description

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| classification | Allows a string (Individual, Firm, Vessel, Special Entity Designation, null).<br><br> Example: 'classification=Firm' |
| exclusionName | Allows partial text or a complete text. <br><br> Example: 'exclusionName=SAM' |
| exclusionType | Allows a string (IP, IC, PR, VE,  Ineligible (Proceedings Pending), Ineligible (Proceedings Completed), Prohibition/Restriction, Voluntary Exclusion).<br><br> Example: 'exclusionType=IP' |
| exclusionProgram | Allows a string (RE, NP, PR, Reciprocal, Non-Procurement, Procurement).<br><br> Example: 'exclusionProgram=Y' |
| stateProvince | Allows a string.<br><br> Example: 'stateProvince=AR' |
| country  | Allows a string.<br><br> Example: 'country=USA' |
| zipCode  | Allows a string.<br><br> Example: 'zipCode=20171' |
| ueiDUNS | Unique Entity Identifier DUNS- 9 digit value (9725565, TF118652, 047795005, null).<br><br> Example: 'ueiDUNS=9725565' |
| ueiSAM | TBD |
| excludingAgencyCode | Allows a string (AF, DOJ, FEMA-IOD, null).<br><br> Example: 'excludingAgencyCode=AF' |
| excludingAgencyName | Allows a string (FEDERAL, FEDERAL EMERGENCY MANAGEMENT AGENCY, null).<br><br> Example: 'excludingAgencyName=FEDERAL' |
| ctCode | Allows a string.<br><br> Example: 'ctCode=ZZ' |
| activationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'activationDate=01/01/2019', 'activationDate=[01/01/2019,05/29/2019]' |
| creationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'creationDate=01/01/2019', 'creationDate=[01/01/2019,05/29/2019]' |
| updateDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br>  Examples: 'updateDate=01/01/2019', 'updateDate=[01/01/2019,05/29/2019]'' |
| terminationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'terminationDate=01/01/2019', 'terminationDate=[01/01/2019,05/29/2019]' |
| cageCode | Allows a string.<br><br> Example: 'cageCode=0Y5L9' |
| npi  | Allows a string.<br><br> Example: 'npi=1053373266' |
| ssn  | Allows a string.<br><br> Example: 'ssn=XXXXXXXXX' |
| tin  | Allows a string.<br><br> Example: 'tin=XXXXX' |
| page  | Page number.<br><br> Example: 'page=0' |
| size  | Retrieves Records size per page.<br><br> Example: 'size=1' |
| includeSections | Allows to filter data by sections, exclusionDetails, exclusionIdentification, exclusionActions, exclusionAddress, exclusionOtherInformation and vesselDetails.<br><br> Example: 'includeSections=exclusionOtherInformation,exclusionDetails' |
| format | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'format=csv' |
| emailId | User email Id for notification message .<br><br> Example: 'emailId=test@gsa.gov' |

**Expected Result**

API response consists of Sections, Sub-sections and Tags underneath each of the Sections or Sub-sections. There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database.

| Section/Sub-section/Tag | Type | Description |
| ---- | ---- | ----------- |
| **exclusionDetails** |
| classificationType | string | Classification Type |
| exclusionType | string | Exclusion Type  |
| exclusionProgram | string | Exclusion Program | 
| excludingAgencyCode | string | Excluding Agency Code  |
| excludingAgencyName | string | Excluding Agency Name  |
| **exclusionIdentification** |
| ueiSAM | string | Unique Entity Identifier SAM   |
| ueiDUNS | string | Unique Entity Identifier DUNS  |
| entityEFTIndicator | string | Entity EFT Indicator   |
| cageCode | string | CAGE Code  | 
| npi | string| NPI | 
| prefix | string | Prefix | 
| firstName | string | First Name  | 
| middleName | string | Middle Name   |
| lastName | string | Last Name   |
| suffix | string | Suffix   |
| name | string | Company Name  |
| **exclusionActions  --> listOfActions** |
| createDate | string | Create Date   |
| updateDate | string | Update Date  |
| activateDate | string | Activate Date |
| terminationDate | string | Termination Date   |
| terminationType | string | Termination Type   |
| recordStatus | string | Record Status  |
| **exclusionAddress** |
| addressLine1 | string | Address Line 1  | 
| addressLine2 | string | Address Line 2  | 
| city | string | Address City  | 
| stateOrProvinceCode | string | Address State or Province Code |
| zipCode | string | Address Zip OR Postal Code  |
| zipCodePlus4 | string | Address Zip Plus 4  |
| countryCode | string | Country Code |
| **exclusionOtherInformation** |
| additionalComments | string | Additional Comments  |
| ctCode | string | CT Code  |
| dnbInvestigationStatus | string | DNB Investigation Status    |
| **references --> referencesList**   |
| name | string | Name  |
| type | string | Type  |
| moreLocations | string |  More Locations   |
| **vesselDetails** |
| callSign | string | Call Sign  |
| type | string | Type  |
| tonnage | string | Tonnage  |
| grt | string | GRT  |
| flag | string | Flag  |
| owner | string | Owner |
| **vesselDetails --> secondaryAddress**  |
| addressLine1 | string | Address Line 1  | 
| addressLine2 | string | Address Line 2  | 
| city | string | Address City  | 
| stateOrProvinceCode | string | Address State or Province Code |
| zipCode | string | Address Zip OR Postal Code  |
| zipCodePlus4 | string | Address Zip Plus 4  |
| countryCode | string | Country Code |

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Exclusion API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages:<br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * Invalid Input Parameters. <br><br> * The parameter: 'emailId', 'format', 'exclusionName' or 'includeSections' is not permitted inside Query Param(q). <br><br> * The value null/empty is not valid for parameter ‘Query Param (q). <br><br>  * A maximum of 100 ueiDUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. <br><br>  * The Parameter emailId must be provided in conjunction with the parameter format. <br><br>  * Extract File Generation is Still in Progress. <br><br> * Requested File is Expired and cannot be downloaded. <br><br> * Extract File Not Found and we are not able to process your request. <br><br>  * includeSections contains invalid value <value> |
| 403 | API key is not correct or was not provided. |

<p><small><a href="#">Back to top</a></small></p>

## Explanation of the API using Examples
Functionality of the Exclusion API has been explained with the following examples:

**User requirement:** 
To get Individual or Special Entity Designation Exclusion records that are based off of Korea, that are not excluded by DOJ and that contain CHONG anywhere in the response.

**API request:** 
https://api.sam.gov/prodlike/entity-information/v0.9/api/exclusions?api_key=<API Key>&classification=[Individual~Special Entity Designation]
&excludingAgencyCode=!DOJ&country=KOR&q=CHONG

**User requirement:** 
To receive the JSON file downloadable link in the email for only exclusionDetails, exclusionIdentification and exclusionAddress sections of the Excluded 
Firm records of type Ineligible (Proceedings Completed) or Prohibition/Restriction that are based off of Korea, China or Germany and that have a non-null ueiDUNS.

**API request:**
https://api.sam.gov/prod/entity-information/v0.9/api/exclusions?api_key=<API Key>&ueiDUNS=!””&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm
&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=JSON
&emailId= < a valid email address >

<p><small><a href="#">Back to top</a></small></p>

## Additional Information
You can view the full details of the differences between the SAM legacy API and Beta API 
<br> available here: <a href="LegacySAMvsBetaSAM-ExclusionsAPI.pdf">Variance Document</a>

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov).

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
06/03/2019 | v1.0 | Base Version
08/15/2019 | v1.1 | * Added Beta.SAM.Gov to the page title. <br><br> *Updated the Alpha endpoint to v1. <br><br> *Added Secondary Address fields.

<p><small><a href="#">Back to top</a></small></p>
