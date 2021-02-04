---
title: Beta.SAM.Gov Exclusions  API
banner-heading: Beta.SAM.Gov Exclusions API
---

## Overview
The Exclusions API will allow users to request Public Exclusion Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner.

**Key Features of the Exclusion API:**
* It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!) conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

**Additional Features of the Exclusion API:** It can serve as an Extract API with the addition of “format” parameter in the request. Following are the key features of the Exclusion Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the user emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

**IMPORTANT**: There will be a period from early 2021 through the integration of SAM.gov into Beta.SAM.gov where Alpha and Beta functionality of the APIs will not be in sync. During this time, we recommend you primarily test the functionality of the APIs in Alpha. Please pay close attention to the parameter and schema "Description" and "Applicable Version" columns as all differences are noted there. Some of the key differences between Alpha and Beta API functionality are highlighted here:
* Some minor schema differences between V2 API in Alpha vs Beta
* New parameters/parameter functionality differences

Exclusions API can be accessed from Beta or Alpha via the following version 1 and version 2 endpoints:
* Beta Version 1: https://api.sam.gov/entity-information/v1/exclusions?api_key=< value >
* Beta Version 2: https://api.sam.gov/entity-information/v2/exclusions?api_key=< value >
* Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/exclusions?api_key=< value >
* Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< value ><br><br>


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

| Parameter Name | Description | Applicable Versions |
| ---- | ----------- | ----------- |
| classification | Allows a string (Individual, Firm, Vessel, Special Entity Designation, null).<br><br> Example: 'classification=Firm' |  v1<br>v2 |
| exclusionName | Allows a partial text or a complete text.<br><br> This parameter must not be used inside the 'q' parameter.<br><br> This parameter accepts multi-text values in any order and in any case, and will apply the AND operator between the texts.<br><br> Examples: 'exclusionName=J Roy',  'exclusionName=ROY j'  |  v1<br>v2 |
| exclusionType | Allows a partial text or a complete text (a string).<br><br> Allowable values are: Ineligible (Proceedings Pending), Ineligible (Proceedings Completed), Prohibition/Restriction and Voluntary Exclusion.<br><br> This parameter can be used inside the 'q' parameter. <br><br> When not used inside the 'q' parameter, this parameter will apply the AND operator if a multi-text value is provided in any order and in any case.<br><br> Examples: 'q=exclusionType:Ineligible (Proceedings Pending)', 'exclusionType=Ineligible PENDING', 'exclusionType=[Pending~Voluntary]' |  v1<br>v2 |
| exclusionProgram | Allows a complete text (a string).<br><br> Allowable values are: Reciprocal, NonProcurement and Procurement.<br><br> This parameter can be used inside the 'q' parameter. <br><br> Examples: 'q=((exclusionProgram:Reciprocal) OR (exclusionProgram:Procurement))', 'exclusionProgram=[NonProcurement~RECIPROCAL]', 'exclusionProgram=!NonProcurement'|  v1<br>v2 |
| stateProvince | Allows a string.<br><br> Example: 'stateProvince=AR' |  v1<br>v2 |
| country  | Allows a string.<br><br> Example: 'country=USA' |  v1<br>v2 |
| zipCode  | Allows a string.<br><br> Example: 'zipCode=20171' |  v1<br>v2 |
| ueiDUNS | Unique Entity Identifier DUNS- 9 digit value (9725565, TF118652, 047795005, null).<br><br> Example: 'ueiDUNS=9725565' |  v1<br>v2 |
| ueiSAM | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric. <br><br> Example: ueiSAM=025114695AST |  v1<br>v2 |
| excludingAgencyCode | Allows a string (AF, DOJ, FEMA-IOD, null).<br><br> When not used inside the 'q' parameter, it will apply the AND operator if a multi-text value is provided in any order and in any case.<br><br> Example: 'excludingAgencyCode=AF' |  v1<br>v2 |
| excludingAgencyName | Allows a string (FEDERAL, FEDERAL EMERGENCY MANAGEMENT AGENCY, null).<br><br> Example: 'excludingAgencyName=FEDERAL' |  v1<br>v2 |
| ctCode | Allows a string.<br><br> Example: 'ctCode=ZZ' |  v1<br>v2 |
| activationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'activationDate=01/01/2019', 'activationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| creationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'creationDate=01/01/2019', 'creationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| updateDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br>  Examples: 'updateDate=01/01/2019', 'updateDate=[01/01/2019,05/29/2019]'' |  v1<br>v2 |
| terminationDate | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'terminationDate=01/01/2019', 'terminationDate=[01/01/2019,05/29/2019]' |  v1<br>v2 |
| cageCode | Allows a string.<br><br> Example: 'cageCode=0Y5L9' |  v1<br>v2 |
| npi  | Allows a string.<br><br> Example: 'npi=1053373266' |  v1<br>v2 |
| ssn  | Allows a string.<br><br> Example: 'ssn=XXXXXXXXX' |  v1<br>v2 |
| tin  | Allows a string.<br><br> Example: 'tin=XXXXX' |  v1<br>v2 |
| page  | Page number.<br><br> Example: 'page=0' |  v1<br>v2 |
| size  | Retrieves Records size per page.<br><br> Example: 'size=1' |  v1<br>v2 |
| includeSections | Allows to filter data by sections, exclusionDetails, exclusionIdentification, exclusionActions, exclusionAddress, exclusionOtherInformation and vesselDetails.<br><br> Example: 'includeSections=exclusionOtherInformation,exclusionDetails' |  v1<br>v2 |
| format | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'format=csv' |  v1<br>v2 |
| emailId | Beta (The following functionality is soon to be deprecated in Beta. Please review the below Alpha functionality for future Beta implementation):<br>Allows user to get file download links to email. Email Id should be provided in conjunction with format.<br>Example: emailId=test@gsa.gov<br>Applicable to non-SAM registrants.<br><br>Alpha:<br>Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.<br>Example: emailId= Yes<br>Applicable to non-SAM registrants. |  v1<br>v2 |
| recordStatus | Allows a string (Active, Inactive) <br><br> Example: 'recordStatus=Active' | v1<br>v2 |

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
| ueiDUNS | string | Unique Entity Identifier DUNS  | v1<br>v2 |
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
| **exclusionAddress/exclusionPrimaryAddress** | | NOTE: This section is being renamed. It is exclusionAddress is in V1 and will be exclusionPrimaryAddress in V2. The V2 change is available in Alpha now but will remain exclusionAddress in both V1 and V2 in Beta until a later date. | |
| addressLine1 | string | Address Line 1  |  v1<br>v2 |
| addressLine2 | string | Address Line 2  |  v1<br>v2 |
| city | string | Address City  |  v1<br>v2 | 
| stateOrProvinceCode | string | Address State or Province Code |  v1<br>v2 |
| zipCode | string | Address Zip OR Postal Code  |  v1<br>v2 |
| zipCodePlus4 | string | Address Zip Plus 4  |  v1<br>v2 |
| countryCode | string | Country Code |  v1<br>v2 |
| **exclusionSecondaryAddress** |
| addressLine1 | string | Address Line 1  |  v2<br>Alpha Only, Beta Coming Soon |
| addressLine2 | string | Address Line 2  |  v2<br>Alpha Only, Beta Coming Soon |
| city | string | Address City  |  v2<br>Alpha Only, Beta Coming Soon | 
| stateOrProvinceCode | string | Address State or Province Code |  v2<br>Alpha Only, Beta Coming Soon |
| zipCode | string | Address Zip OR Postal Code  | v2<br>Alpha Only, Beta Coming Soon |
| zipCodePlus4 | string | Address Zip Plus 4  |  v2<br>Alpha Only, Beta Coming Soon |
| countryCode | string | Country Code |  v2<br>Alpha Only, Beta Coming Soon |
| **exclusionOtherInformation** |
| additionalComments | string | Additional Comments  |  v1<br>v2 |
| ctCode | string | CT Code  |  v1<br>v2 |
| dnbInvestigationStatus/evsInvestigationStatus | string | EVS Investigation Status  <br><br>NOTE: This parameter is being renamed. dnbInvestigationStatus is in V1 and evsInvestigationStatus will be V2.   |  v1<br>v2 |
| **exclusionOtherInformation  --> references --> referencesList**   |
| name/exclusionName | string | Exclusion Name <br><br>NOTE:  This parameter is being renamed.  name is in V1 and exclusionName will be V2.|  v1<br>v2 |
| type | string | Type  |  v1<br>v2 |
| **exclusionOtherInformation --> moreLocations** |
| exclusionName | string | Exclusion Name | v2<br>Alpha Only, Beta Coming Soon |
| duns | string | DUNS | v2<br>Alpha Only, Beta Coming Soon |
| cageCode | string | CAGE Code | v2<br>Alpha Only, Beta Coming Soon |
| npi | string | NPI | v2<br>Alpha Only, Beta Coming Soon |
| **exclusionOtherInformation --> moreLocations --> primaryAddress** |
| addressLine1 | string | Address Line 1 | v2<br>Alpha Only, Beta Coming Soon |
| addressLine2 | string | Address Line 2 | v2<br>Alpha Only, Beta Coming Soon |
| city | string | City | v2<br>Alpha Only, Beta Coming Soon |
| stateOrProvinceCode | string | State or Province Code | v2<br>Alpha Only, Beta Coming Soon |
| zipCode | string | Zip Code | v2<br>Alpha Only, Beta Coming Soon |
| zipCodePlus4 | string | Zip Code Plus 4 | v2<br>Alpha Only, Beta Coming Soon |
| countryCode | string | Country Code | v2<br>Alpha Only, Beta Coming Soon |
| **exclusionOtherInformation --> moreLocations --> secondaryAddress** |
| addressLine1 | string | Address Line 1 | v2<br>Alpha Only, Beta Coming Soon |
| addressLine2 | string | Address Line 2 | v2<br>Alpha Only, Beta Coming Soon |
| city | string | City | v2<br>Alpha Only, Beta Coming Soon |
| stateOrProvinceCode | string | State or Province Code | v2<br>Alpha Only, Beta Coming Soon |
| zipCode | string | Zip Code | v2<br>Alpha Only, Beta Coming Soon |
| zipCodePlus4 | string | Zip Code Plus 4 | v2<br>Alpha Only, Beta Coming Soon |
| countryCode | string | Country Code | v2<br>Alpha Only, Beta Coming Soon |
| **vesselDetails** |
| callSign | string | Call Sign  |  v1<br>v2 |
| type | string | Type  |  v1<br>v2 |
| tonnage | string | Tonnage  |  v1<br>v2 |
| grt | string | GRT  |  v1<br>v2 |
| flag | string | Flag  |  v1<br>v2 |
| owner | string | Owner |  v1<br>v2 |
| **vesselDetails --> secondaryAddress**  |
| addressLine1 | string | Address Line 1  |  v1<br>v2 Beta Only |
| addressLine2 | string | Address Line 2  |  v1<br>v2 Beta Only |
| city | string | Address City  |  v1<br>v2 Beta Only |
| stateOrProvinceCode | string | Address State or Province Code |  v1<br>v2 Beta Only |
| zipCode | string | Address Zip OR Postal Code  |  v1<br>v2 Beta Only |
| zipCodePlus4 | string | Address Zip Plus 4  |  v1<br>v2 Beta Only |
| countryCode | string | Country Code |  v1<br>v2 Beta Only |

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

## Examples

### Example 1: Get Individual or Special Entity Designation Exclusion records
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key= < Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Public Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 14,
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
        "ueiDUNS": "",
        "entityEFTIndicator": null,
        "cageCode": "",
        "npi": "",
        "prefix": "MS.",
        "firstName": "CHONG",
        "middleName": "SUN",
        "lastName": "HWANG",
        "suffix": "",
        "entityName": ""
        “dnbOpenData”: “N”
      },
      "exclusionActions": {
        "listOfActions": [
          {
            "createDate": "Currently Not Available",
            "updateDate": "Currently Not Available",
            "activateDate": "12-12-2011",
            "terminationDate": "11-08-2029",
            "terminationType": "Definite",
            "recordStatus": "Active"
          }
        ]
      },
      "exclusionAddress": {
        "addressLine1": null,
        "addressLine2": null,
        "city": "CITY",
        "stateOrProvinceCode": "",
        "zipCode": "",
        "zipCodePlus4": null,
        "countryCode": "ABC"
      },
      "exclusionOtherInformation": {
        "additionalComments": "",
        "ctCode": "A",
        "evsInvestigationStatus": "Currently Not Available",
        "references": {
          "referencesList": [
            {
              "exclusionName": " KWANG PAK",
              "type": "Currently Not Available"
            },
            {
              "exclusionName": " TAEK CHI",
              "type": "Currently Not Available"
            },
            {
              "exclusionName": " SOUKDAI KO",
              "type": "Currently Not Available"
            },
            {
              "exclusionName": " MYOUNG KIM",
              "type": "Currently Not Available"
            },
            {
              "exclusionName": " KI NAM",
              "type": "Currently Not Available"
            }
          ]
        },
        "moreLocations": [
          "Currently Not Available"
        ]
      },
      "vesselDetails": {
        "callSign": "Currently Not Available",
        "type": "Currently Not Available",
        "tonnage": "Currently Not Available",
        "grt": "Currently Not Available",
        "flag": "Currently Not Available",
        "owner": "Currently Not Available",
        "secondaryAddress": [
          {
            "addressLine1": "Currently Not Available",
            "addressLine2": "Currently Not Available",
            "city": "Currently Not Available",
            "stateOrProvinceCode": "Currently Not Available",
            "zipCode": "Currently Not Available",
            "zipCodePlus4": "Currently Not Available",
            "countryCode": "Currently Not Available"
          }
        ]
      }
    },
],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&classification=[Individual~Special%20Entity%20Designation]%20&excludingAgencyCode=!DOJ&country=KOR&q=CHONG&isActive=true&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&classification=[Individual~Special%20Entity%20Designation]%20&excludingAgencyCode=!DOJ&country=KOR&q=CHONG&isActive=true&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 2: Get Firm Exclusion records of type Ineligible (Proceedings Completed) or Prohibition/Restriction
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key= < Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Public Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 53,
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
        "ueiSAM": null,
        "ueiDUNS": "",
        "entityEFTIndicator": null,
        "cageCode": "",
        "npi": "",
        "prefix": "",
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "entityName": "SHENZHEN HONGDARK ELECTRONICS CO., LTD."
        “dnbOpenData”: “N”
      },
      "exclusionAddress": {
        "addressLine1": "",
        "addressLine2": "",
        "city": "CITY",
        "stateOrProvinceCode": "",
        "zipCode": "",
        "zipCodePlus4": null,
        "countryCode": "ABC"
      }
    },
  ],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&ueiDUNS=!%E2%80%9D%E2%80%9D&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&isActive=true&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/exclusions?api_key=REPLACE_WITH_API_KEY&ueiDUNS=!%E2%80%9D%E2%80%9D&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&isActive=true&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 3: To receive a link in the email to the Exclusions Extract in CSV format
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/exclusions?api_key=< a Public API Key >&ueiDUNS=!””&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=< a valid email address ><br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/exclusions?api_key=< Public API Key >&ueiDUNS=!””&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=< a valid email address ><br>
<br>
</details>

<details>
<summary>Response</summary>
Click to view CSV Response for one record <a href="v1/exclusion-sample-csv.xlsx">Sample CSV Response</a><br>
</details>

<p><small><a href="#">Back to top</a></small></p>



## Additional Information
You can view the full details of the differences between the SAM legacy API and Beta API 
<br> available here: <a href="LegacySAMvsBetaSAM-ExclusionsAPI.pdf">Variance Document</a><br>

Disclaimer: 
**Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**
* This website contains data supplied by third party information suppliers, one of which is D&B. For the purposes of the following limitation on permissible use of D&B data, which includes each entity's DUNS Number and its associated business information, "D&B Open Data" is defined as the following data elements: Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code.
* D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
* Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of "bots" or "spiders", is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
* GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided "as is" without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov).

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
12/07/2020 | v1.9 | * Updated moreLocations for API response. <br><br> * Updated vesselDetails --> secondaryAddress to mention v2 Beta only. <br><br> * Added exclusionSecondaryAddress to API response.<br><br> * Changed exclusionAddress to exclusionAddress/exclusionPrimaryAddress in the API response.
01/22/2021 | v2.0 | * Added the highlighted changes message under the "Getting Started" section.<br><br> * Added Beta V2 endpoint.
02/03/2021 | V2.1 | * Updated description for emailId parameter. <br><br> * Updated description for exclusionName, exclusionsType, exclusionProgram and excludingAgencyName parameters.<br><br> * Added message about non-allowable characters.

<p><small><a href="#">Back to top</a></small></p>
