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

Exclusions API can be accessed from Production or Alpha with the following version 4 endpoints:
* Production Version 4: https://api.sam.gov/entity-information/v4/exclusions?api_key=< value >
* Alpha Version 4: https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< value ><br><br>

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

| Parameter Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Applicable Versions |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| classification      | Allows a partial text or a complete text (Individual, Firm, Vessel, Special Entity Designation).<br><br> This parameter can be used inside the 'q' parameter. <br><br> Example: 'classification=Firm', 'classification=!INDIVIDUAL', 'classification=[Vessel~Special]', 'q=((classification:Vessel) OR (classification:Special))'                                                                                                                                                                                                                                       | v4                  |
| exclusionName       | Allows a partial text or a complete text.<br><br> This parameter must not be used inside the 'q' parameter.<br><br> This parameter accepts multi-text values in any order and in any case, and will apply the AND operator between the texts.<br><br> Examples: 'exclusionName=J Roy', 'exclusionName=ROY j'                                                                                                                                                                                                                                                            | v4                  |
| exclusionType       | Allows a partial text or a complete text (a string).<br><br> Allowable values are: Ineligible (Proceedings Pending), Ineligible (Proceedings Completed), Prohibition/Restriction and Voluntary Exclusion.<br><br> This parameter can be used inside the 'q' parameter. When not used inside the 'q' parameter, this parameter will apply the AND operator if a multi-text value is provided in any order and in any case.<br><br> Examples: 'q=exclusionType:Ineligible (Proceedings Pending)', 'exclusionType=Ineligible PENDING', 'exclusionType=[Pending~Voluntary]' | v4                  |
| exclusionProgram    | Allows a complete text (a string).<br><br> Allowable values are: Reciprocal, NonProcurement and Procurement.<br><br> This parameter can be used inside the 'q' parameter.<br><br> Examples: 'q=((exclusionProgram:Reciprocal) OR (exclusionProgram:Procurement))', 'exclusionProgram=[NonProcurement~RECIPROCAL]', 'exclusionProgram=!NonProcurement'                                                                                                                                                                                                                   | v4                  |
| addressLine1        | Mainly used to search Individuals with their address. Allows a partial text, a complete text and null.<br><br> This parameter must not be used inside the 'q' parameter. <br><br> Examples: 'addressLine1=""', 'addressLine1="7th Floor, Buraengdang Building 530-14"'<br><br> NOTE: If addressLine1 is used in a request with exclusionName, it must match 85% of an Individual's address in order for the address information to be returned in the response (not case sensitive).                                                                                    | v4                  |
| addressLine2        | Mainly used to search Individuals with their address. Allows a partial text, a complete text and null.<br><br> This parameter must not be used inside the 'q' parameter. <br><br> Examples: 'addressLine2=""', 'addressLine2="Dapsipri, 5 Dong, Dongdaemun-K"'<br><br> NOTE: If addressLine2 is used in a request with exclusionName, it must match 85% of an Individual's address in order for the address information to be returned in the response (not case sensitive).                                                                                            | v4                  |
| stateProvince       | Allows 2-character codes for the USA, names for foreign countries and null (a string).<br><br> Examples: 'stateProvince=AR', 'stateProvince=[VA~MICHOACÁN]', 'stateProvince=""'                                                                                                                                                                                                                                                                                                                                                                                         | v4                  |
| country             | Allows 3-character codes, numerical values and null (a string).<br><br> Examples: 'country=USA' 'country=[RUS~292~mex]', 'country=!""', 'q=((country:RUS) OR (country:292) OR (country:mex))'                                                                                                                                                                                                                                                                                                                                                                           | v4                  |
| zipCode             | Allows 5-digit values for the USA, any value as it was provided for foreign countries and null (a string).<br><br> Example: 'zipCode=20171', 'zipCode=[901-2132~V3M 5P8~C.P. 44890]', 'zipCode=""', 'q=((zipCode:901-2132) OR (zipCode:20147))'                                                                                                                                                                                                                                                                                                                         | v4                  |
| ueiSAM              | Denotes Unique Entity Identifier SAM.<br><br> Allows 12-character values, null and also wildcard searches.<br><br> Examples: 'ueiSAM=""', 'ueiSAM=!""', 'ueiSAM=P*X*1', 'q=((ueiSAM:PMC9YQMXJZU1) OR (ueiSAM:PG4XZ77WRC21))'                                                                                                                                                                                                                                                                                                                                            | v4                  |
| excludingAgencyCode | Allows a partial text, a complete text and null (a string).<br><br> Examples: 'excludingAgencyCode=ICE', 'excludingAgencyCode=DHS-ICE', 'excludingAgencyCode=[AF~HUD~""]', 'q=((excludingAgencyCode:AF) OR (excludingAgencyCode:HUD))'                                                                                                                                                                                                                                                                                                                                  | v4                  |
| excludingAgencyName | Allows a partial text, a complete text and null (a string).<br><br> This parameter can be used inside the 'q' parameter. When not used inside the 'q' parameter, this parameter will apply the AND operator if a multi-text value is provided in any order and in any case<br><br> Examples: 'excludingAgencyName=Of URBAN housing',  'excludingAgencyName=[Geological~Navy]', q=((excludingAgencyName:Geological) OR (excludingAgencyName:Navy))                                                                                                                       | v4                  |
| ctCode              | Allows a complete text, null and also wild card searches (a string).<br><br> Examples: 'ctCode=*SDN*', 'ctCode=[AA~""], 'q=((ctCode:AA) OR (ctCode:03-SDN-01))'                                                                                                                                                                                                                                                                                                                                                                                                         | v4                  |
| activationDate      | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'activationDate=01/01/2019', 'activationDate=[01/01/2019,05/29/2019]'                                                                                                                                                                                                                                                                                                                                                                                          | v4                  |
| creationDate        | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'creationDate=01/01/2019', 'creationDate=[01/01/2019,05/29/2019]'                                                                                                                                                                                                                                                                                                                                                                                              | v4                  |
| updateDate          | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br>  Examples: 'updateDate=01/01/2019', 'updateDate=[01/01/2019,05/29/2019]''                                                                                                                                                                                                                                                                                                                                                                                                | v4                  |
| terminationDate     | Allows a single Date or Date range. <br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br><br> Examples: 'terminationDate=01/01/2019', 'terminationDate=[01/01/2019,05/29/2019]'                                                                                                                                                                                                                                                                                                                                                                                        | v4                  |
| cageCode            | Allows a complete value, null and also wild card searches (a string).<br><br> Examples: 'cageCode=0*0', 'cageCode=[0XLE0~1CM51~""]', 'q=((cageCode:0XLE0) OR (cageCode:1CM51))'                                                                                                                                                                                                                                                                                                                                                                                         | v4                  |
| npi                 | Allows 1234567890 (this is masked data) and null (a string).<br><br> Examples: 'npi=1234567890', 'npi=""', 'npi=!""'                                                                                                                                                                                                                                                                                                                                                                                                                                                    | v4                  |
| recordStatus        | The API returns only Active records.<br><br> Allows a complete text (a string).<br><br> Allowable value is: Active, active <br><br> Example: 'recordStatus=active'                                                                                                                                                                                                                                                                                                                                                                                                      | v4                  |
| page                | Denotes a page number.<br><br> Allowable values are 0 to 999.<br><br> Example: 'page=0'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | v4                  |
| size                | Denotes the number of records returned per page.<br><br> Allowable values are 1 to 10.<br><br> Example: 'size=1'                                                                                                                                                                                                                                                                                                                                                                                                                                                        | v4                  |
| includeSections     | Allows to filter data by sections, exclusionDetails, exclusionIdentification, exclusionActions, exclusionAddress, exclusionOtherInformation and vesselDetails.<br><br> Example: 'includeSections=exclusionOtherInformation,exclusionDetails'                                                                                                                                                                                                                                                                                                                            | v4                  |
| format              | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'format=csv'                                                                                                                                                                                                                                                                                                                                                                                                                                                       | v4                  |
| emailId             | Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.<br>Example: emailId= Yes<br>Applicable to non-SAM registrants.                                                                                                                                                                                                                                                                                                                      | v4                  |
| ssnOrTinOrEin       | Allows a 9-digit value or null.<br><br> This parameter must not be used inside the 'q' parameter.<br><br> This parameter must be used in conjunction with the exclusionName parameter.<br><br> Example: 'ssnOrTinOrEin=123456789'                                                                                                                                                                                                                                                                                                                                       | v4                  |
| fascsaOrder         | Allows Yes and No.<br><br> This parameter accepts either value, in any case.<br><br> Examples: fascsaOrder=Yes, fascsaOrder=yes, fascsaOrder=No, fascsaOrder=no                                                                                                                                                                                                                                                                                                                                                                                                         | v4                  |

**Expected Result**

API response consists of Sections, Sub-sections and Tags underneath each of the Sections or Sub-sections. There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database. Additionally,

| Section/Sub-section/Tag                                              | Type   | Description                                                                                                                                     | Applicable Versions | 
|----------------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| **exclusionDetails**                                                 |
| classificationType                                                   | string | Classification Type                                                                                                                             | v4                  |
| exclusionType                                                        | string | Exclusion Type                                                                                                                                  | v4                  |
| exclusionProgram                                                     | string | Exclusion Program                                                                                                                               | v4                  | 
| excludingAgencyCode                                                  | string | Excluding Agency Code                                                                                                                           | v4                  |
| excludingAgencyName                                                  | string | Excluding Agency Name                                                                                                                           | v4                  |
| **exclusionIdentification**                                          |
| ueiSAM                                                               | string | Unique Entity Identifier SAM                                                                                                                    | v4                  |
| cageCode                                                             | string | CAGE Code                                                                                                                                       | v4                  |
| npi                                                                  | string | NPI                                                                                                                                             | v4                  |
| prefix                                                               | string | Prefix                                                                                                                                          | v4                  |
| firstName                                                            | string | First Name                                                                                                                                      | v4                  |
| middleName                                                           | string | Middle Name                                                                                                                                     | v4                  |
| lastName                                                             | string | Last Name                                                                                                                                       | v4                  |
| suffix                                                               | string | Suffix                                                                                                                                          | v4                  |
| name/entityName                                                      | string | Firm Name <br><br> NOTE: This parameter is being renamed.  name is in V1 and entityName will be V2.                                             | v4                  |
| dnbOpenData                                                          | string | DNB Open Data                                                                                                                                   | v4                  |
| **exclusionActions  --> listOfActions**                              |
| createDate                                                           | string | Create Date                                                                                                                                     | v4                  |
| updateDate                                                           | string | Update Date                                                                                                                                     | v4                  |
| activateDate                                                         | string | Activate Date                                                                                                                                   | v4                  |
| terminationDate                                                      | string | Termination Date                                                                                                                                | v4                  |
| terminationType                                                      | string | Termination Type                                                                                                                                | v4                  |
| recordStatus                                                         | string | Record Status                                                                                                                                   | v4                  |
| **exclusionAddress/exclusionPrimaryAddress**                         |        | NOTE: This section is being renamed. It is exclusionAddress in V1 and will be exclusionPrimaryAddress in V2.                                    |                     |
| addressLine1                                                         | string | Address Line 1                                                                                                                                  | v4                  |
| addressLine2                                                         | string | Address Line 2                                                                                                                                  | v4                  |
| city                                                                 | string | Address City                                                                                                                                    | v4                  | 
| stateOrProvinceCode                                                  | string | Address State or Province Code                                                                                                                  | v4                  |
| zipCode                                                              | string | Address Zip OR Postal Code                                                                                                                      | v4                  |
| zipCodePlus4                                                         | string | Address Zip Plus 4                                                                                                                              | v4                  |
| countryCode                                                          | string | Country Code                                                                                                                                    | v4                  |
| **exclusionSecondaryAddress**                                        |
| addressLine1                                                         | string | Address Line 1                                                                                                                                  | v4                  |
| addressLine2                                                         | string | Address Line 2                                                                                                                                  | v4                  |
| city                                                                 | string | Address City                                                                                                                                    | v4                  | 
| stateOrProvinceCode                                                  | string | Address State or Province Code                                                                                                                  | v4                  |
| zipCode                                                              | string | Address Zip OR Postal Code                                                                                                                      | v4                  |
| zipCodePlus4                                                         | string | Address Zip Plus 4                                                                                                                              | v4                  |
| countryCode                                                          | string | Country Code                                                                                                                                    | v4                  |
| **exclusionOtherInformation**                                        |
| isFASCSAOrder                                                        | string | FASCSA Order Exclusion Indicator                                                                                                                | v4                  |
| additionalComments                                                   | string | Additional Comments                                                                                                                             | v4                  |
| ctCode                                                               | string | CT Code                                                                                                                                         | v4                  |
| dnbInvestigationStatus/evsInvestigationStatus                        | string | EVS Investigation Status  <br><br>NOTE: This parameter is being renamed. dnbInvestigationStatus is in V1 and evsInvestigationStatus will be V2. | v4                  |
| **exclusionOtherInformation  --> references --> referencesList**     |
| name/exclusionName                                                   | string | Exclusion Name <br><br>NOTE:  This parameter is being renamed.  name is in V1 and exclusionName will be V2.                                     | v4                  |
| type                                                                 | string | Type                                                                                                                                            | v4                  |
| **exclusionOtherInformation --> moreLocations**                      |
| exclusionName                                                        | string | Exclusion Name                                                                                                                                  | v4                  |
| ueiSAM                                                               | string | ueiSAM                                                                                                                                          | v4                  |
| cageCode                                                             | string | CAGE Code                                                                                                                                       | v4                  |
| npi                                                                  | string | NPI                                                                                                                                             | v4                  |
| **exclusionOtherInformation --> moreLocations --> primaryAddress**   |
| addressLine1                                                         | string | Address Line 1                                                                                                                                  | v4                  |
| addressLine2                                                         | string | Address Line 2                                                                                                                                  | v4                  |
| city                                                                 | string | City                                                                                                                                            | v4                  |
| stateOrProvinceCode                                                  | string | State or Province Code                                                                                                                          | v4                  |
| zipCode                                                              | string | Zip Code                                                                                                                                        | v4                  |
| zipCodePlus4                                                         | string | Zip Code Plus 4                                                                                                                                 | v4                  |
| countryCode                                                          | string | Country Code                                                                                                                                    | v4                  |
| **exclusionOtherInformation --> moreLocations --> secondaryAddress** |
| addressLine1                                                         | string | Address Line 1                                                                                                                                  | v4                  |
| addressLine2                                                         | string | Address Line 2                                                                                                                                  | v4                  |
| city                                                                 | string | City                                                                                                                                            | v4                  |
| stateOrProvinceCode                                                  | string | State or Province Code                                                                                                                          | v4                  |
| zipCode                                                              | string | Zip Code                                                                                                                                        | v4                  |
| zipCodePlus4                                                         | string | Zip Code Plus 4                                                                                                                                 | v4                  |
| countryCode                                                          | string | Country Code                                                                                                                                    | v4                  |
| **vesselDetails**                                                    |
| callSign                                                             | string | Call Sign                                                                                                                                       | v4                  |
| type                                                                 | string | Type                                                                                                                                            | v4                  |
| tonnage                                                              | string | Tonnage                                                                                                                                         | v4                  |
| grt                                                                  | string | GRT                                                                                                                                             | v4                  |
| flag                                                                 | string | Flag                                                                                                                                            | v4                  |
| owner                                                                | string | Owner                                                                                                                                           | v4                  |
| **vesselDetails --> secondaryAddress**                               |
| addressLine1                                                         | string | Address Line 1                                                                                                                                  | v4 Production only  |
| addressLine2                                                         | string | Address Line 2                                                                                                                                  | v4 Production only  |
| city                                                                 | string | Address City                                                                                                                                    | v4 Production only  |
| stateOrProvinceCode                                                  | string | Address State or Province Code                                                                                                                  | v4 Production only  |
| zipCode                                                              | string | Address Zip OR Postal Code                                                                                                                      | v4 Production only  |
| zipCodePlus4                                                         | string | Address Zip Plus 4                                                                                                                              | v4 Production only  |
| countryCode                                                          | string | Country Code                                                                                                                                    | v4 Production only  |

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Exclusion API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

<table>
  <tr>
    <th style="background-color: #f1f1f1; width:33%"><b>HTTP Response Code</b></th>
    <th style="background-color: #f1f1f1;"><b>Description</b></th>
  </tr>
  <tr>
    <td>200</td>
    <td>The API call is successful.</td>
  </tr>
  <tr>
    <td>400</td>
    <td>Application Level Error Messages:<br><br>1. Invalid "Date" format:<br>v4: "message":"Dates must be specified in the MM/DD/YYYY format.", "detail":"Any Date parameter must be provided in the MM/DD/YYYY format.".<br><br>2. Invalid Input Parameters:<br> v4: "message":"The search parameter, < user-provided invalid parameter > does not exist.","detail":"Please refer to https://open.gsa.gov/api/exclusions-api/ for a list of allowable search parameters.".<br><br>3. If ‘includeSections’, ‘emailId’, ‘format’, ‘exclusionName’, ‘includeSections’, ‘addressLine1’, ‘addressLine2’, or ‘ssnOrTinOrEin’ is sent in the "q" parameter:<br>v4: "message":"The search parameters 'emailId', 'format', 'exclusionName', 'includeSections', 'addressLine1', 'addressLine2', and 'ssnOrTinOrEin' are not permitted inside Query Param(q)","detail":"Please provide these parameters separately.".<br><br>4. A null or an empty value is sent in the "q" parameter:<br>v4: "message":"Invalid input","detail":"The value null/empty is not valid for parameter ‘Query Param (q)’".<br><br>5. More than 100 "cageCode" values are sent:<br>v4: "message":"More than 100 CAGE Codes are not allowed.","detail":"Please limit the number of CAGE Codes to 100."<br><br>6. If "emailId" is sent on its own:<br>v4: "message":"The search parameter 'emailId' must be provided in conjunction with the search parameter 'format'.","detail":"Users can opt for receiving the requested JSON/CSV files in their emails."<br><br>7. If "includeSections" contains an invalid value:<br>v4: "message":"The search parameter 'includeSections' contains an invalid value - < user-provided invalid parameter >,"detail":"Please refer to https://open.gsa.gov/api/exclusions-api/ for a list of allowable values.".<br><br>8. If "ssnOrTinOrEin" is provided on its own:<br>v4: "message":"The search parameter 'ssnOrTinOrEin' must be provided in conjunction with the search parameter 'exclusionName'.","detail":"The 'ssnOrTinOrEin' parameter cannot be provided on its own.".<br><br>9. Invalid "ssnOrTinOrEin" length or "ssnOrTinOrEin" has more than one value:<br>v4: "message":"The search parameter 'ssnOrTinOrEin' will only accept one complete 9 digit value.","detail":"An example value is 000000000.".<br><br>10. More than one "exclusionName" value is provided with "addressLine1" and "addressLine2":<br>v4: "message":"The search parameter 'exclusionName' will only accept one value when it is provided in conjunction with 'addressLine1' and 'addressLine2'.","detail":"Use 'exclusionName' on its own or in conjunction with non-address search parameters.".<br><br>11.  Invalid "recordStatus" value: <br>v4: "message":"The search parameter 'recordStatus' will only accept Active as the value.","detail":"Only Active records are returned.<br><br>12. "Invalid "format" value:<br>v4: "message":"Invalid input value for format","detail":"The allowable values are JSON and CSV."<br><br>13. JSON or CSV file generation is in-progress:<br>v4: "message":"The requested JSON or CSV file is not generated yet. Please try again later.","detail":"Larger files will take some time to process.".<br><br>14. A non-existent token is used for downloading a JSON or a CSV file:<br>v4: "message":"The requested JSON or CSV file token could not be found.","detail":"Please verify the token number."<br><br>15. An expired token is used for downloading a JSON or a CSV file:<br>v4: "message":"The requested JSON or CSV file token is expired.","detail":"Please verify the token number."</td> 
  </tr>
  <tr>
    <td>403</td>
    <td>1. Missing API Key:<br>v4: No api_key was supplied in request body. Please submit with a valid API key.<br><br>2. An invalid API Key:<br>v4: An invalid API key was supplied. Please submit with a valid API key.</td>
  </tr>
  <tr>
    <td>405</td>
    <td>If any method other than "GET" is used:<br>v4: Method Not Allowed.</td>
  </tr>
  <tr>
    <td colspan="2"> NOTE:<br>Error messages in v4 are returned in this fashion: Status, timestamp, message, detail, errorCode, transaction_id</td>
  </tr>
</table>

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Example 1: Post April 3, 2022, get me all the firms whose physical address is in Virginia.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v4/exclusions?api_key=< PUBLIC API Key >&classification=Firm&stateProvince=VA<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< PUBLIC API Key >&classification=Firm&stateProvince=VA<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
This is an example public response for one record.
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "excludedEntity": [
    {
      "exclusionDetails": {
        "classificationType": "Firm",
        "exclusionType": "Ineligible (Proceedings Pending)",
        "exclusionProgram": "Reciprocal",
        "excludingAgencyCode": "DLA",
        "excludingAgencyName": "DEFENSE LOGISTICS AGENCY"
      },
      "exclusionIdentification": {
        "ueiSAM": "KQKWLLDBMDL5",
        "cageCode": null,
        "npi": null,
        "prefix": null,
        "firstName": null,
        "middleName": null,
        "lastName": null,
        "suffix": null,
        "entityName": "Supreme Fuels GmbH & Co. KG",
        "dnbOpenData": null
      },
      "exclusionActions": {
        "listOfActions": [
          {
            "createDate": "03-19-2015",
            "updateDate": "03-19-2015",
            "activateDate": "03-13-2015",
            "terminationDate": null,
            "terminationType": "Indefinite",
            "recordStatus": "Active"
          }
        ]
      },
      "exclusionPrimaryAddress": {
        "addressLine1": "Rembrandtstr. 17",
        "addressLine2": null,
        "city": "Frankfurt am Main",
        "stateOrProvinceCode": null,
        "zipCode": "60596",
        "zipCodePlus4": null,
        "countryCode": "DEU"
      },
      "exclusionSecondaryAddress": [],
      "exclusionOtherInformation": {
        "isFASCSAOrder": "No",
        "additionalComments": "Supreme Foodservice GmbH and Supreme Foodservice FZE",
        "ctCode": null,
        "evsInvestigationStatus": null,
        "references": {
          "referencesList": [
            {
              "exclusionName": "Supreme Fuels GmbH & Co. KG, Frankfurt am Main (D), Zweigniederlassung Glarus (480015629)- Zwinglistrasse 6 , GLARUS , GL ,8750,CHE",
              "type": "Cross-Reference"
            }
          ]
        },
        "moreLocations": [
          {
            "exclusionName": "Supreme Fuels GmbH & Co. KG, Frankfurt am Main (D), Zweigniederlassung Glarus (480015629)- Zwinglistrasse 6 , GLARUS , GL ,8750,CHE",
            "ueiSAM": "XLLLJD1L9SE3",
            "cageCode": null,
            "npi": null,
            "primaryAddress": {
              "addressLine1": "Zwinglistrasse 6",
              "addressLine2": null,
              "city": "GLARUS",
              "stateOrProvinceCode": "GL",
              "zipCode": "8750",
              "zipCodePlus4": null,
              "countryCode": "CHE"
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
    }
  ],
</pre>
</code>
</p>
</details>

### Example 2: Post April 3, 2022, get me all the firms in a CSV file format.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v4/exclusions?api_key=< PUBLIC API Key >&classification=Firm&format=CSV<br><br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< PUBLIC API Key >&classification=Firm&format=CSV<br>
<br>
</details>

<details>
<summary>Response</summary>
This is an example public response for one record.
<p>
Extract File will be available for download with url: https://api.sam.gov/entity-information/v4/download-exclusions?api_key=REPLACE_WITH_API_KEY&token=< TOKEN > in some time. If you have requested for an email notification, you will receive it once the file is ready for download.<br><br>
Download the CSV file using the token:
https://api.sam.gov/entity-information/v4/download-exclusions?api_key=< PUBLIC API KEY >&token=< TOKEN ><br><br>
</p>
<p>
View an example CSV response for one record <a href="v4/v4-CSV.xlsx" taget="_blank">Sample CSV Response.</a>
</p>
</details>

### Example 3: Get individual or special entity designation exclusion records that are not excluded by DOJ, that belong to Korea and that contain CHONG anywhere in the response.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&classification=[Individual~Special Entity Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
This is an example public response for one record.
<p>
<code>
<pre>
{
  "totalRecords": 5,
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
    }
  ],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v4/exclusions?api_key=REPLACE_WITH_API_KEY&classification=[Individual~Special%20Entity%20Designation]&excludingAgencyCode=!DOJ&country=KOR&q=CHONG&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 4: Get details and address of the ineligible (proceedings completed) or prohibition/restriction type of firm exclusion records that belong to Korea, China or Germany, by using the "q" parameter.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v4/exclusions?api_key= < a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
This is an example public response for one record. <br>
<p>
<code>
<pre>
{
  "totalRecords": 63,
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
    }
  ],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v4/exclusions?api_key=REPLACE_WITH_API_KEY&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v4/exclusions?api_key=REPLACE_WITH_API_KEY&q=(country=KOR%20OR%20country=CHN%20OR%20country=DEU)&classification=Firm&exclusionType=[Ineligible%20(Proceedings%20Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 5: Get details for FASCSA order exclusion records only.

<details>
<summary>Request URL</summary>
<b>Production URL:</b>  https://api.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&fascsaOrder=Yes<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&fascsaOrder=Yes<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
This is an example public response for one record.<br>
<p>
<code>
<pre>
{
    "totalRecords": 16,
    "excludedEntity": [
    {
            "exclusionDetails": {
                "classificationType": "Firm",
                "exclusionType": "Prohibition/Restriction",
                "exclusionProgram": "Reciprocal",
                "excludingAgencyCode": "AF",
                "excludingAgencyName": "DEPT OF THE AIR FORCE"
            },
            "exclusionIdentification": {
                "ueiSAM": "J27QHBBBL1V3",
                "cageCode": null,
                "npi": null,
                "prefix": null,
                "firstName": null,
                "middleName": null,
                "lastName": null,
                "suffix": null,
                "entityName": "Foxtrot Research Corp",
                "dnbOpenData": null
            },
            "exclusionActions": {
                "listOfActions": [
                    {
                        "createDate": "10-31-2023",
                        "updateDate": "10-31-2023",
                        "activateDate": "10-30-2023",
                        "terminationDate": null,
                        "terminationType": "Indefinite",
                        "recordStatus": "Active"
                    }
                ]
            },
            "exclusionPrimaryAddress": {
                "addressLine1": null,
                "addressLine2": null,
                "city": null,
                "stateOrProvinceCode": "FL",
                "zipCode": null,
                "zipCodePlus4": null,
                "countryCode": "USA"
            },
            "exclusionSecondaryAddress": [],
            "exclusionOtherInformation": {
                "isFASCSAOrder": "Yes",
                "additionalComments": null,
                "ctCode": null,
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
                        "ueiSAM": null,
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
    ],
    "links": {
        "selfLink": "https://api.sam.gov/entity-information/v4/exclusions?api_key=REPLACE_WITH_API_KEY&fascsaOrder=Yes&page=0&size=10",
        "nextLink": "https://api.sam.gov/entity-information/v4/exclusions?api_key=REPLACE_WITH_API_KEY&fascsaOrder=Yes&page=1&size=10"
    }
}
</pre>
</code>
</p>
</details>

### Example 6: To receive a file downloadable link in the email for the requested CSV results.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=Y<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v4/exclusions?api_key=< a valid Public API Key >&q=(country=KOR OR country=CHN OR country=DEU)&classification=Firm&exclusionType=[Ineligible (Proceedings Completed)~Prohibition/Restriction]&includeSections=exclusionDetails,exclusionIdentification,exclusionAddress&format=CSV&emailId=Y<br>
<br>
</details>

<details>
<summary>Response</summary>
View an example CSV response for one record <a href="v4/exclusion-sample-csv-1.xlsx">Sample CSV Response.</a><br>
</details>

<p><small><a href="#">Back to top</a></small></p>

## Additional Information
You can view the full details of the differences between the SAM legacy API and SAM.gov API
<br> available here: <a href="LegacySAMvsBetaSAM-ExclusionsAPI.pdf">Variance Document</a><br>

Disclaimer:
**Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**
* This website contains data supplied by third party information suppliers, including Dun & Bradstreet (D&B). For the purposes of the following limitation on permissible use of D&B data, which includes each entity's DUNS Number and its associated business information, "D&B Open Data" is defined as the following data elements: Legal Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code.  Entity registration, exclusion, or contract award records in SAM may contain D&B-supplied data. Applicable records containing D&B data include all entity registration records with a last updated date earlier than 4/4/2022, all exclusions records with a created date earlier than 4/4/2022, and all base award notices with an award date earlier than 4/4/2022. These records show the Entity Validation Service (EVS) Source as D&B in outbound data streams.
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

Date | Version  | Description
------|----------|---------
06/03/2019 | v1.0     | Base Version
08/15/2019 | v1.1     | * Added Beta.SAM.Gov to the page title. <br><br> *Updated the Alpha endpoint to v1. <br><br> *Added Secondary Address fields.
09/25/2019 | v1.2     | Beta endpoints for public FOUO and Sensitive API were updated from version 0.9 to version 1.0.
11/25/2019 | v1.3     | * Added D&B Disclaimer in the Additional Information section.<br><br> * Updated the specifications to include parameters and fields that will be included in v2 of the API.
12/20/2019 | v1.4     | Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.
02/25/2020 | v1.5     | * Added Examples for v2 requests and responses. <br><br> * Updated Alpha endpoint to meet new API standards.
02/28/2020 | v1.6     | * Updated Beta endpoint to meet new API standards. <br><br> * Removed "COMING SOON" information in Getting Started section.
05/04/2020 | v1.7     | * Added V2 endpoint information.
10/15/2020 | v1.8     | * Updated the Beta V1 endpoint
12/07/2020 | v1.9     | * Updated moreLocations for API response.<br><br> * Updated vesselDetails --> secondaryAddress to mention v2 Beta only. <br><br> * Added exclusionSecondaryAddress to API response.<br><br> * Changed exclusionAddress to exclusionAddress/exclusionPrimaryAddress in the API response.
01/22/2021 | v2.0     | * Added the highlighted changes message under the "Getting Started" section.<br><br> * Added Beta V2 endpoint.
02/05/2021 | v2.1     | * Updated description for emailId parameter. <br><br> * Updated parameter definitions and examples.<br><br> * Added message about non-allowable characters.<br><br> * Removed tin and ssn parameters.<br><br> * Added addressLine1 and addressLine2 parameters.
03/12/2021 | v2.2     | * Added ssnOrTinOrEin parameter to the Query String Parameters table.<br><br> * Added note to addressLine1 and addressLine2 parameters regarding use with exclusionName parameter.<br><br> * Updated error messages
04/08/2021 | v2.3     | Updated Contact Us information.
04/29/2021 | v2.4     | * Updated openapi spec file.
05/12/2021 | v2.5     | * Updated instances of beta.sam.gov to SAM.gov.<br><br> * Removed non-relevant information for Beta api.
07/16/2021 | v2.6     | * Updated description for recordStatus parameter.<br><br> * Added message stating that the slash character must be enclosed with double quotes if being used inside of a search parameter.<br><br> * Added the Type of Connections and Rate Limits table<br><br> * Updated the examples<br><br> * Updated the Contact Us information
10/06/2021 | v2.7     | * Updated the "Contact Us" section.
10/21/2021 | v2.8     | * Updated Examples - Added Example 1 and Example 2 to indicate the post April 3rd, 2022 behavior.<br><br> * Added notes in the Query String Parameters, Expected Result and HTTP Response Codes sections to highlight the until and after April 3rd, 2022 behavior.
02/01/2022 | v2.9     | * Added exclusions V3 endpoint information to the Getting Started section. <br><br> * Updated the Query String Parameters and Expected Results sections to reflect available parameters and response fields in V3.<br><br> * Updated the Example 1 and Example 2 to indicate the V3 behavior.<br><br> * Updated the section, "HTTP Response Codes" to indicate the v3 behavior.<br><br> * Update the OpenAPI Specification File to include the V3 endpoints.
04/04/2022 | v3.0     | * Provided the v3 end point for Production.<br><br> * Removed ueiDUNS occurrences from the sections, Query String Parameters, Expected Result, HTTP Response Codes and Examples.
12/01/2023 | v4.0     | A new V4 Exclusions API has been created, enabling the search and response for FASCSA Order Exclusion records. As part of this change, below are the associated changes made to this OpenGSA page: <br><br> * Added exclusions V4 endpoint information to the Getting Started section.<br><br> * Updated the Query String Parameters and Expected Results sections to reflect available parameters and response fields in V4.<br><br> * Moved the existing Example 5 to Example 6; inserted a new Example 5 to indicate V4 behavior.<br><br> * Updated the section, “HTTP Response Codes” to indicate the v4 behavior.<br><br> * Updated the OpenAPI Specification File to include the V4 endpoints.
02/29/2024 | v4.1     | * Updated Getting Started section to remove deprecated endpoint versions. 
03/14/2024 | v4.2     | * Replaced Examples section with v4 requests and responses.
08/29/2024 | v4.3     | * Update decommission timelines for v1 v2 and v3 versions.
09/13/2024 | v4.4     | * Exclusions API V1/2/3 have been retired, and are no longer available.<br><br> * Removed references of V1/2/3 Exclusions API from the following sections: API Description (Query String Parameters, Expected Result), OpenAPI Specification File, HTTP Response Codes, Change Log.


<p><small><a href="#">Back to top</a></small></p>
