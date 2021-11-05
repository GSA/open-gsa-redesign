---
title: SAM.gov Exclusions  API
banner-heading: SAM.gov Exclusions API
---

## Overview
The Exclusions API will allow users to request Public Exclusion Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner.

**Key Features of the Exclusion API:**
* It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!), WILD CARD(*) conditions and a free text search q to obtain the desired data. Please note that q does not support null (''), not-null (!'') or not (!) searches. Additionally, q accepts only AND, OR, :, =, * (denotes wild card) operators.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \
* Values involving / must be enclosed within double quotes if they are to be requested via a search parameter.

**Additional Features of the Exclusion API:** It can serve as an Extract API with the addition of “format” parameter in the request. Following are the key features of the Exclusion Extract API:
* It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!), WILD CARD(*) conditions and a free text search q to obtain the desired data. Please note that q does not support null (''), not-null (!'') or not (!) searches. Additionally, q accepts only AND, OR, :, =, * (denotes wild card) operators.
* It returns asynchronous responses by sending file downloadable links in the browser and in the user emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Exclusions API can be accessed from Production or Alpha via the following version 1 and version 2 endpoints:
* Production Version 1: https://api.sam.gov/entity-information/v1/exclusions?api_key=< value >
* Production Version 2: https://api.sam.gov/entity-information/v2/exclusions?api_key=< value >
* Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/exclusions?api_key=< value >
* Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< value ><br><br>


Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page. This page can be accessed here: <a href="https://sam.gov/profile/details" target="_blank">Account Details page on sam.gov</a>
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

Type of Connections and Rate Limits
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Connecting Source</b></th>
<th style="background-color: #f1f1f1;"><b>Type of Connection</b></th>
<th style="background-color: #f1f1f1;"><b>Default Rate Limit</b></th>
</tr>
<tr>
<td>Non-federal user with no role</td>
<td>Personal API key</td>
<td>10 requests/day</td>
</tr>
<tr>
<td>Non-federal user with a role</td>
<td>Personal API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Federal User</td>
<td>Personal API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Non-federal system</td>
<td>System account API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Federal system</td>
<td>System account API key</td>
<td>10,000 requests/day</td>
</tr>
</table>

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

| Parameter Name | Description | Applicable Versions |
| ---- | ----------- | ----------- |
| classification | Allows a partial text or a complete text (Individual, Firm, Vessel, Special Entity Designation).<br><br> This parameter can be used inside the 'q' parameter. <br><br> Example: 'classification=Firm', 'classification=!INDIVIDUAL', 'classification=[Vessel~Special]', 'q=((classification:Vessel) OR (classification:Special))' |  v1<br>v2 |
| exclusionName | Allows a partial text or a complete text.<br><br> This parameter must not be used inside the 'q' parameter.<br><br> This parameter accepts multi-text values in any order and in any case, and will apply the AND operator between the texts.<br><br> Examples: 'exclusionName=J Roy', 'exclusionName=ROY j' |  v1<br>v2 |
| exclusionType | Allows a partial text or a complete text (a string).<br><br> Allowable values are: Ineligible (Proceedings Pending), Ineligible (Proceedings Completed), Prohibition/Restriction and Voluntary Exclusion.<br><br> This parameter can be used inside the 'q' parameter. When not used inside the 'q' parameter, this parameter will apply the AND operator if a multi-text value is provided in any order and in any case.<br><br> Examples: 'q=exclusionType:Ineligible (Proceedings Pending)', 'exclusionType=Ineligible PENDING', 'exclusionType=[Pending~Voluntary]' |  v1<br>v2 |
| exclusionProgram | Allows a complete text (a string).<br><br> Allowable values are: Reciprocal, NonProcurement and Procurement.<br><br> This parameter can be used inside the 'q' parameter.<br><br> Examples: 'q=((exclusionProgram:Reciprocal) OR (exclusionProgram:Procurement))', 'exclusionProgram=[NonProcurement~RECIPROCAL]', 'exclusionProgram=!NonProcurement'|  v1<br>v2 |
| addressLine1  | Mainly used to search Individuals with their address. Allows a partial text, a complete text and null.<br><br> This parameter must not be used inside the 'q' parameter. <br><br> Examples: 'addressLine1=""', 'addressLine1="7th Floor, Buraengdang Building 530-14"'<br><br> NOTE: If addressLine1 is used in a request with exclusionName, it must match 85% of an Individual's address in order for the address information to be returned in the response (not case sensitive). |  v1<br>v2 |
| addressLine2  | Mainly used to search Individuals with their address. Allows a partial text, a complete text and null.<br><br> This parameter must not be used inside the 'q' parameter. <br><br> Examples: 'addressLine2=""', 'addressLine2="Dapsipri, 5 Dong, Dongdaemun-K"'<br><br> NOTE: If addressLine2 is used in a request with exclusionName, it must match 85% of an Individual's address in order for the address information to be returned in the response (not case sensitive). |  v1<br>v2 |
| stateProvince | Allows 2-character codes for the USA, names for foreign countries and null (a string).<br><br> Examples: 'stateProvince=AR', 'stateProvince=[VA~MICHOACÁN]', 'stateProvince=""' |  v1<br>v2 |
| country  | Allows 3-character codes, numerical values and null (a string).<br><br> Examples: 'country=USA' 'country=[RUS~292~mex]', 'country=!""', 'q=((country:RUS) OR (country:292) OR (country:mex))' |  v1<br>v2 |
| zipCode  | Allows 5-digit values for the USA, any value as it was provided for foreign countries and null (a string).<br><br> Example: 'zipCode=20171', 'zipCode=[901-2132~V3M 5P8~C.P. 44890]', 'zipCode=""', 'q=((zipCode:901-2132) OR (zipCode:20147))' |  v1<br>v2 |
| ueiDUNS | Denotes Unique Entity Identifier DUNS.<br><br> Allows any complete value as it was provided, null and also wildcard searches.<br><br> Examples: 'ueiDUNS=9725565', 'ueiDUNS=[001*~""]', 'q=((ueiDUNS:9725565) OR (ueiDUNS:047795005))' |  v1<br>v2<br>Valid until April 2022 |
| ueiSAM | Denotes Unique Entity Identifier SAM.<br><br> Allows 12-character values, null and also wildcard searches.<br><br> Examples: 'ueiSAM=""', 'ueiSAM=!""', 'ueiSAM=P*X*1', 'q=((ueiSAM:PMC9YQMXJZU1) OR (ueiSAM:PG4XZ77WRC21))' |  v1<br>v2 |
| excludingAgencyCode | Allows a partial text, a complete text and null (a string).<br><br> Examples: 'excludingAgencyCode=ICE', 'excludingAgencyCode=DHS-ICE', 'excludingAgencyCode=[AF~HUD~""]', 'q=((excludingAgencyCode:AF) OR (excludingAgencyCode:HUD))' |  v1<br>v2 |
| excludingAgencyName | Allows a partial text, a complete text and null (a string).<br><br> This parameter can be used inside the 'q' parameter. When not used inside the 'q' parameter, this parameter will apply the AND operator if a multi-text value is provided in any order and in any case<br><br> Examples: 'excludingAgencyName=Of URBAN housing',  'excludingAgencyName=[Geological~Navy]', q=((excludingAgencyName:Geological) OR (excludingAgencyName:Navy)) |  v1<br>v2 |
| ctCode | Allows a complete text, null and also wild card searches (a string).<br><br> Examples: 'ctCode=*SDN*', 'ctCode=[AA~""], 'q=((ctCode:AA) OR (ctCode:03-SDN-01))' |  v1<br>v2 |
| activationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'activationDate=01/01/2019', 'activationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| creationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'creationDate=01/01/2019', 'creationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| updateDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br>  Examples: 'updateDate=01/01/2019', 'updateDate=[01/01/2019,05/29/2019]'' |  v1<br>v2 |
| terminationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'terminationDate=01/01/2019', 'terminationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| cageCode | Allows a complete value, null and also wild card searches (a string).<br><br> Examples: 'cageCode=0*0', 'cageCode=[0XLE0~1CM51~""]', 'q=((cageCode:0XLE0) OR (cageCode:1CM51))' |  v1<br>v2 |
| npi  | Allows 1234567890 (this is masked data) and null (a string).<br><br> Examples: 'npi=1234567890', 'npi=""', 'npi=!""' |  v1<br>v2 |
| recordStatus | The API returns only Active records.<br><br> Allows a complete text (a string).<br><br> Allowable value is: Active, active <br><br> Example: 'recordStatus=active' | v1<br>v2 |
| page  | Denotes a page number.<br><br> Allowable values are 0 to 999.<br><br> Example: 'page=0' |  v1<br>v2 |
| size  | Denotes the number of records returned per page.<br><br> Allowable values are 1 to 10.<br><br> Example: 'size=1' |  v1<br>v2 |
| includeSections | Allows to filter data by sections, exclusionDetails, exclusionIdentification, exclusionActions, exclusionAddress, exclusionOtherInformation and vesselDetails.<br><br> Example: 'includeSections=exclusionOtherInformation,exclusionDetails' |  v1<br>v2 |
| format | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'format=csv' |  v1<br>v2 |
| emailId | Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.<br>Example: emailId= Yes<br>Applicable to non-SAM registrants. |  v1<br>v2 |
| ssnOrTinOrEin | Allows a 9-digit value or null.<br><br> This parameter must not be used inside the 'q' parameter.<br><br> This parameter must be used in conjunction with the exclusionName parameter.<br><br> Example: 'ssnOrTinOrEin=123456789' | v1<br>v2 |

**Expected Result**

API response consists of Sections, Sub-sections and Tags underneath each of the Sections or Sub-sections. There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database.

| Section/Sub-section/Tag | Type | Description | Applicable Versions | 
| ---- | ---- | ----------- | ----------- |
| **exclusionDetails** |
| classificationType | string | Classification Type | v1<br>v2 |
| exclusionType | string | Exclusion Type  | v1<br>v2 |
| exclusionProgram | string | Exclusion Program | v1<br>v2 | 
| excludingAgencyCode | string | Excluding Agency Code  | v1<br>v2 |
| excludingAgencyName | string | Excluding Agency Name  | v1<br>v2 |
| **exclusionIdentification** |
| ueiSAM | string | Unique Entity Identifier SAM   | v1<br>v2 |
| ueiDUNS | string | Unique Entity Identifier DUNS  | v1<br>v2<br>Valid until April 2022 |
| entityEFTIndicator | string | Entity EFT Indicator   | v1<br>v2 |
| cageCode | string | CAGE Code  |  v1<br>v2 |
| npi | string| NPI |  v1<br>v2 |
| prefix | string | Prefix |  v1<br>v2 |
| firstName | string | First Name  |  v1<br>v2 |
| middleName | string | Middle Name   | v1<br>v2 |
| lastName | string | Last Name   | v1<br>v2 |
| suffix | string | Suffix   | v1<br>v2 |
| name/entityName | string | Firm Name <br><br> NOTE: This parameter is being renamed.  name is in V1 and entityName will be V2.  | v1<br>v2 |
| dnbOpenData | string | DNB Open Data | v2 |
| **exclusionActions  --> listOfActions** |
| createDate | string | Create Date   | v1<br>v2 |
| updateDate | string | Update Date  | v1<br>v2 |
| activateDate | string | Activate Date | v1<br>v2 |
| terminationDate | string | Termination Date   | v1<br>v2 |
| terminationType | string | Termination Type   | v1<br>v2 |
| recordStatus | string | Record Status  | v1<br>v2 |
| **exclusionAddress/exclusionPrimaryAddress** | | NOTE: This section is being renamed. It is exclusionAddress in V1 and will be exclusionPrimaryAddress in V2. | |
| addressLine1 | string | Address Line 1  |  v1<br>v2 |
| addressLine2 | string | Address Line 2  |  v1<br>v2 |
| city | string | Address City  |  v1<br>v2 | 
| stateOrProvinceCode | string | Address State or Province Code |  v1<br>v2 |
| zipCode | string | Address Zip OR Postal Code  |  v1<br>v2 |
| zipCodePlus4 | string | Address Zip Plus 4  |  v1<br>v2 |
| countryCode | string | Country Code |  v1<br>v2 |
| **exclusionSecondaryAddress** |
| addressLine1 | string | Address Line 1  |  v2 |
| addressLine2 | string | Address Line 2  |  v2 |
| city | string | Address City  |  v2 | 
| stateOrProvinceCode | string | Address State or Province Code |  v2 |
| zipCode | string | Address Zip OR Postal Code  | v2 |
| zipCodePlus4 | string | Address Zip Plus 4  |  v2 |
| countryCode | string | Country Code |  v2 |
| **exclusionOtherInformation** |
| additionalComments | string | Additional Comments  |  v1<br>v2 |
| ctCode | string | CT Code  |  v1<br>v2 |
| dnbInvestigationStatus/evsInvestigationStatus | string | EVS Investigation Status  <br><br>NOTE: This parameter is being renamed. dnbInvestigationStatus is in V1 and evsInvestigationStatus will be V2.   |  v1<br>v2 |
| **exclusionOtherInformation  --> references --> referencesList**   |
| name/exclusionName | string | Exclusion Name <br><br>NOTE:  This parameter is being renamed.  name is in V1 and exclusionName will be V2.|  v1<br>v2 |
| type | string | Type  |  v1<br>v2 |
| **exclusionOtherInformation --> moreLocations** |
| exclusionName | string | Exclusion Name | v2 |
| duns | string | DUNS | v2<br>Valid until April 2022 |
| cageCode | string | CAGE Code | v2 |
| npi | string | NPI | v2 |
| **exclusionOtherInformation --> moreLocations --> primaryAddress** |
| addressLine1 | string | Address Line 1 | v2 |
| addressLine2 | string | Address Line 2 | v2 |
| city | string | City | v2 |
| stateOrProvinceCode | string | State or Province Code | v2 |
| zipCode | string | Zip Code | v2 |
| zipCodePlus4 | string | Zip Code Plus 4 | v2 |
| countryCode | string | Country Code | v2 |
| **exclusionOtherInformation --> moreLocations --> secondaryAddress** |
| addressLine1 | string | Address Line 1 | v2 |
| addressLine2 | string | Address Line 2 | v2 |
| city | string | City | v2 |
| stateOrProvinceCode | string | State or Province Code | v2 |
| zipCode | string | Zip Code | v2 |
| zipCodePlus4 | string | Zip Code Plus 4 | v2 |
| countryCode | string | Country Code | v2 |
| **vesselDetails** |
| callSign | string | Call Sign  |  v1<br>v2 |
| type | string | Type  |  v1<br>v2 |
| tonnage | string | Tonnage  |  v1<br>v2 |
| grt | string | GRT  |  v1<br>v2 |
| flag | string | Flag  |  v1<br>v2 |
| owner | string | Owner |  v1<br>v2 |
| **vesselDetails --> secondaryAddress**  |
| addressLine1 | string | Address Line 1  |  v1<br>v2 Production only |
| addressLine2 | string | Address Line 2  |  v1<br>v2 Production only |
| city | string | Address City  |  v1<br>v2 Production only |
| stateOrProvinceCode | string | Address State or Province Code |  v1<br>v2 Production only |
| zipCode | string | Address Zip OR Postal Code  |  v1<br>v2 Production only |
| zipCodePlus4 | string | Address Zip Plus 4  |  v1<br>v2 Production only |
| countryCode | string | Country Code |  v1<br>v2 Production only |

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
| 400 | Application Level Error Messages:<br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * Invalid Input Parameters. <br><br> * The parameter: 'emailId', 'format', 'exclusionName', 'includeSections', 'addressLine1', 'addressLine2', or 'ssnOrTinOrEin' is not permitted inside Query Param(q). <br><br> * The value null/empty is not valid for parameter ‘Query Param (q). <br><br>  * A maximum of 100 ueiDUNS is allowed.<br>(Valid until April 2022) <br><br>  * A maximum of 100 CAGE Codes is allowed. <br><br>  * The Parameter emailId must be provided in conjunction with the parameter format. <br><br>  * Extract File Generation is Still in Progress. <br><br> * Requested File is Expired and cannot be downloaded. <br><br> * Extract File Not Found and we are not able to process your request. <br><br>  * includeSections contains invalid value <value><br><br> * The search parameter, 'ssnOrTinOrEin' will only accept one complete 9 digit value (e.g.: ssnOrTinOrEin=000000000)<br><br> * ssnOrTinOrEin filter must be provided in conjunction with exclusionName.<br><br> * exclusionName will only accept one value when it is provided in conjunction with addressLine1 and addressLine2 |
| 403 | API key is not correct or was not provided. |

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Eample 1: Post April 2022, get me all the Firms whose Physical Address is in Virginia.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/exclusions?api_key=< PUBLIC API Key >& includeSections=exclusionIdentification<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< PUBLIC API Key >&includeSections=exclusionIdentification<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Public Response for one record is provided as an example <br>
<p>
<code>
<pre>
"exclusionIdentification": {
  "ueiSAM": "G6XJYD71J617",
  "cageCode": "0XLE0",
  "npi": null,
  "prefix": null,
  "firstName": null,
  "middleName": null,
  "lastName": null,
  "suffix": null,
  "entityName": "USA REMEDIATION SERVICES, INC",
  "dnbOpenData": null
}
</pre>
</code>
</p>
</details>

### Example 2: Post April 2022, get me all the Firms whose Physical Address is in Virginia in a CSV file format.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/exclusions?api_key=< PUBLIC API Key >&classification=Firm&stateProvince=VA&includeSections=exclusionIdentification&format=CSV<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< PUBLIC API Key >&classification=Firm&stateProvince=VA&includeSections=exclusionIdentification&format=CSV<br>
<br>
</details>

<details>
<summary>Response</summary>
<p>
Extract File will be available for download with url: https://api.sam.gov/entity-information/v2/download-exclusions?api_key=REPLACE_WITH_API_KEY&token=< TOKEN > in some time. If you have requested for an email notification, you will receive it once the file is ready for download.<br><br>
Downloading the CSV file using the Token:
https://api.sam.gov/entity-information/v2/download-exclusions?api_key=< PUBLIC API KEY >&token=< TOKEN ><br><br>
Click to view CSV Response for one record <a href="v1/Sample CSV Response.csv" taget="_blank">Sample CSV Response.</a>
</p>
</details>

### Example 3: Get Individual or Special Entity Designation Exclusion records that are not excluded by DOJ, that belong to Korea and that contain CHONG anywhere in the response.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key=< a valid Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< a valid Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Public Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 5,

A sample record is provided here:

  "excludedEntity": [
    {
      "exclusionDetails": {
        "classificationType": "Individual",
        "exclusionType": "Ineligible (Proceedings Completed)",
        "exclusionProgram": "Reciprocal",
        "excludingAgencyCode": "ARMY",
        "excludingAgencyName": "DEPT OF THE ARMY"
      },
      "exclusionIdentification": {
        "ueiSAM": null,
        "ueiDUNS": null,
        "cageCode": null,
        "npi": null,
        "prefix": "Ms.",
        "firstName": "Chong",
        "middleName": "Sun",
        "lastName": "Hwang",
        "suffix": null,
        "entityName": "Ms. Chong Sun Hwang",
        "dnbOpenData": null
      },
      "exclusionActions": {
        "listOfActions": [
          {
            "createDate": "07-27-2012",
            "updateDate": "07-27-2012",
            "activateDate": "12-12-2011",
            "terminationDate": "11-08-2029",
            "terminationType": "Definite",
            "recordStatus": "Active"
          }
        ]
      },
      "exclusionPrimaryAddress": {
        "addressLine1": null,
        "addressLine2": null,
        "city": "Dongjak-gu, Seoul",
        "stateOrProvinceCode": null,
        "zipCode": null,
        "zipCodePlus4": null,
        "countryCode": "KOR"
      },
      "exclusionSecondaryAddress": [],
      "exclusionOtherInformation": {
        "additionalComments": null,
        "ctCode": "A",
        "evsInvestigationStatus": null,
        "references": {
          "referencesList": [
            {
              "exclusionName": null,
              "type": null
            }
          ]
        },
        "moreLocations": [
          {
            "exclusionName": null,
            "duns": null,
            "cageCode": null,
            "npi": null,
            "primaryAddress": {
              "addressLine1": null,
              "addressLine2": null,
              "city": null,
              "stateOrProvinceCode": null,
              "zipCode": null,
              "zipCodePlus4": null,
              "countryCode": null
            },
            "secondaryAddress": [
              {
                "addressLine1": null,
                "addressLine2": null,
                "city": null,
                "stateOrProvinceCode": null,
                "zipCode": null,
                "zipCodePlus4": null,
                "countryCode": null
              }
            ]
          }
        ]
      },
      "vesselDetails": {
        "callSign": null,
        "type": null,
        "tonnage": null,
        "grt": null,
        "flag": null,
        "owner": null
      }
    },
    
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&classification=[Individual~Special%20Entity%20Designation&excludingAgencyCode=!DOJ&country=KOR&q=CHONG&page=0&size=10",
    
  }
</pre>
</code>
</p>
</details>

### Example 4: Get details and address of the Ineligible (Proceedings Completed) or Prohibition/Restriction type of Firm Exclusion records that belong to Korea, China or Germany, by using the "q" parameter.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key= < a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Public Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 63,

A sample record is provided here:

  "excludedEntity": [
    {
      "exclusionDetails": {
        "classificationType": "Firm",
        "exclusionType": "Ineligible (Proceedings Completed)",
        "exclusionProgram": "Reciprocal",
        "excludingAgencyCode": "AF",
        "excludingAgencyName": "DEPT OF THE AIR FORCE"
      },
      "exclusionIdentification": {
        "ueiSAM": "H2XFNNKK2NZ9",
        "ueiDUNS": "U00000615",
        "cageCode": null,
        "npi": null,
        "prefix": null,
        "firstName": null,
        "middleName": null,
        "lastName": null,
        "suffix": null,
        "entityName": "Shenzhen Hongdark Electronics Co., Ltd.",
        "dnbOpenData": null
      },
      "exclusionPrimaryAddress": {
        "addressLine1": null,
        "addressLine2": null,
        "city": "Shenzhen",
        "stateOrProvinceCode": null,
        "zipCode": null,
        "zipCodePlus4": null,
        "countryCode": "CHN"
      },
      "exclusionSecondaryAddress": []
    },

"links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 5: To receive a file downloadable link in the email for the requested CSV results.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key=< a valid Public API Key >&ueiDUNS=!””&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=Y<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< a valid Public API Key >&ueiDUNS=!””&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=Y<br>
<br>
</details>

<details>
<summary>Response</summary>
Click to view CSV Response for one record <a href="v1/exclusion-sample-csv-1.xlsx">Sample CSV Response</a><br>
</details>

<p><small><a href="#">Back to top</a></small></p>

## Additional Information
You can view the full details of the differences between the SAM legacy API and SAM.gov API 
<br> available here: <a href="LegacySAMvsBetaSAM-ExclusionsAPI.pdf">Variance Document</a><br>

Disclaimer: 
**Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**
* This website contains data supplied by third party information suppliers, one of which is D&B. For the purposes of the following limitation on permissible use of D&B data, which includes each entity's DUNS Number and its associated business information, "D&B Open Data" is defined as the following data elements: Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code.
* D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
* Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of "bots" or "spiders", is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
* GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided "as is" without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the SAM.gov team at <a href="https://www.fsd.gov" target="_blank">www.fsd.gov</a> for inquiries and help desk support.
    * Before contacting the help desk, conduct your own initial troubleshooting
        * Conduct a recent review of the open.gsa.gov/api specifications
        * Confirm you are using an API tool, not a browser to send the request. (FOUO & Sensitive Calls)
        * Confirm you are using the username/password for the system account that created the API key in the authentication header. (Sensitive Calls)
        * Confirm you used POST and not GET for this request (Sensitive Calls)
        * Confirm that the API key is from a system account (FOUO & Sensitive Calls)
        * Confirm that the API key being used is still active
        * Confirm that the system account you are using has “read fouo” or “read sensitive” permissions as applicable (FOUO & Sensitive Calls)
        * <b>Confirm that the IP addresses registered with your system account are current</b>
    * When submitting help desk tickets for API or system connection issues, provide the following:
        * The exact API requests that you were trying to send
        * The exact error messages that you were receiving
        * The exact dates and times when you received the errors
        * Screenshots (with the actual API request and the error)  [Attach to the ticket]
        * The System Account ID/Name that was trying to make API calls
        * Screenshots of the parameters used for API call   [Attach to the ticket]
        * Screenshots of the Headers used for the API call   [Attach to the ticket]
* Users requesting access to the test site (alpha.sam.gov) should follow the below steps.  These steps ONLY apply to alpha.sam.gov access requests.
    1. Navigate to <a href="https://www.fsd.gov" target="_blank">www.fsd.gov</a>
    2. Sign into the FSD platform using your FSD credentials
    3. Select "Create an Incident"
    4. Create an Incident
        <ol type="a">
        <li><b>System Name:</b> System for Award Management (SAM)</li>
        <li><b>Is this related to the American Rescue Plan Act?:</b> No</li>
        <li><b>Issue Type:</b> Other</li>
        <li><b>Business Type:</b> Other</li>
        <li><b>Subject (select 1):</b>
           <ol type="i">
           <li><b>Option A:</b> I need a role to test in alpha.sam.gov.</li>
           <li><b>Option B:</b> System account approval in alpha.sam.gov</li>
           </ol>
        </li>
        <li><b>Please describe the issue:</b> (Copy and paste the below information into the ticket, filling in your information within the brackets)
           <ol type="i">
           <li><b>Option A:</b> I have already navigated to alpha.sam.gov and created a user account, following the same steps for <a href="https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=81d067071b80b0109ac5ddb6bc4bcb63" target="_blank">creating an account</a> in sam.gov.  I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov.   The account that needs role assignment is associated with [EMAIL ADDRESS].  I request a [ROLE] role for the  [DOMAIN] domain in alpha.sam.gov.</li>
           <li><b>Option B:</b> I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval.   I would like to request alpha.sam.gov system account review and approval for [Name of the alpha.sam.gov system account].</li>
           </ol>
        </li>
        </ol>

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
06/03/2019 | v1.0 | Base Version
08/15/2019 | v1.1 | * Added Beta.SAM.Gov to the page title. <br><br> *Updated the Alpha endpoint to v1. <br><br> *Added Secondary Address fields.
09/25/2019 | v1.2 | Beta endpoints for public FOUO and Sensitive API were updated from version 0.9 to version 1.0.
11/25/2019 | v1.3 | * Added D&B Disclaimer in the Additional Information section.<br><br> * Updated the specifications to include parameters and fields that will be included in v2 of the API.
12/20/2019 | v1.4 | Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.
02/25/2020 | v1.5 | * Added Examples for v2 requests and responses. <br><br> * Updated Alpha endpoint to meet new API standards.
02/28/2020 | v1.6 | * Updated Beta endpoint to meet new API standards. <br><br> * Removed "COMING SOON" information in Getting Started section.
05/04/2020 | v1.7 | * Added V2 endpoint information.
10/15/2020 | v1.8 | * Updated the Beta V1 endpoint
12/07/2020 | v1.9 | * Updated moreLocations for API response.<br><br> * Updated vesselDetails --> secondaryAddress to mention v2 Beta only. <br><br> * Added exclusionSecondaryAddress to API response.<br><br> * Changed exclusionAddress to exclusionAddress/exclusionPrimaryAddress in the API response.
01/22/2021 | v2.0 | * Added the highlighted changes message under the "Getting Started" section.<br><br> * Added Beta V2 endpoint.
02/05/2021 | v2.1 | * Updated description for emailId parameter. <br><br> * Updated parameter definitions and examples.<br><br> * Added message about non-allowable characters.<br><br> * Removed tin and ssn parameters.<br><br> * Added addressLine1 and addressLine2 parameters.
03/12/2021 | v2.2 | * Added ssnOrTinOrEin parameter to the Query String Parameters table.<br><br> * Added note to addressLine1 and addressLine2 parameters regarding use with exclusionName parameter.<br><br> * Updated error messages
04/08/2021 | v2.3 | Updated Contact Us information.
04/29/2021 | v2.4 | * Updated openapi spec file.
05/12/2021 | v2.5 | * Updated instances of beta.sam.gov to SAM.gov.<br><br> * Removed non-relevant information for Beta api.
07/16/2021 | v2.6 | * Updated description for recordStatus parameter.<br><br> * Added message stating that the slash character must be enclosed with double quotes if being used inside of a search parameter.<br><br> * Added the Type of Connections and Rate Limits table<br><br> * Updated the examples<br><br> * Updated the Contact Us information
10/06/2021 | v2.7 | * Updated the "Contact Us" section.
10/21/2021 | v2.8 | * Updated Examples - Added Example 1 and Example 2.<br><br> * Added note that uieDuns is only valid until April 2022

<p><small><a href="#">Back to top</a></small></p>
