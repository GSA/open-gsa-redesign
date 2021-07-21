---
title: SAM.gov Entity Management  API
banner-heading: SAM.gov Entity Management API
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

## Overview
The Entity Management API will allow users to request Public Entity Information based on various optional request parameters.


**Key Features of the Entity Management API:**

* It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!) conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

**Additional Features of the Entity Management API:** It can serve as an Extract API with the addition of "format" parameter in the request. Following are the key features of the Entity Management Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the user emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Public and FOUO Entity Details can be accessed from Production or Alpha via the following version 1, version 2 and version 3 endpoints:
* Production Version 1: https://api.sam.gov/entity-information/v1/entities?api_key= < value >
* Production Version 2: https://api.sam.gov/entity-information/v2/entities?api_key= < value >
* Production Version 3: COMING SOON
* Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/entities?api_key= < value >
* Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/entities?api_key= < value >
* Alpha Version 3: https://api-alpha.sam.gov/entity-information/v3/entities?api_key= < value >

These are GET calls.

Sensitive Entity Details can be accessed from Production or Alpha via the following version 1, version 2 and version 3 end points:
* Production Version 1: https://api.sam.gov/entity-information/v1/entities?
* Production Version 2: https://api.sam.gov/entity-information/v2/entities?
* Production Version 3: COMING SOON
* Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/entities?
* Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/entities?
* Alpha Version 3: https://api-alpha.sam.gov/entity-information/v2/entities?

These are POST calls. Please refer to the "Sensitive API Process" under "Sensitive API Information" section for additional information.

Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page. This page can be accessed here: <a href="https://sam.gov/profile/details" target="_blank">Account Details page on SAM.gov</a>
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

Generating a System Account API Key:
* Users registered with a non-government email address and associated with an entity OR users registered with a government email address may request a system account for public data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select "Go to System Accounts" from the widget and fill out the required sections.
* The requested system account will then need to be approved.  After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select 'Go to System Accounts' again in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key.
* The user must enter their password again to retrieve the key.
* NOTE: To obtain access to the FOUO/Sensitive Entity API data with a system account the user must be registered with a government email address.

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
<td>Personal API key</td>
<td>10,000 requests/day</td>
</tr>
</table>

Utilizing the Entity API as an extract:
* To utilize this API as an Extract an additional parameter called 'format' has been implemented.
* To retrieve Entity data in a CSV format, the parameter '&format=csv' must be provided in the request.
* To retrieve Entity data in a JSON format, the parameter '&format=json' must be provided in the request.
* If the requests that contain the 'format' parameter are executed successfully, then they will provide the user with a file downloadable URL in the response.
* In the file downloadable URL, the phrase REPLACE_WITH_API_KEY must be deleted and replaced with a valid API Key and sent as another request.
* If the file is ready for download, then the users can retrieve it. If the file is not ready for download, then the users will need to try again in some time.
* Users can also provide another parameter, "emailId" with a valid email address if they choose to receive the file downloadable link in their emails.

<p><small><a href="#">Back to top</a></small></p>

## API Description

If you are using Chrome, subsections that can be expanded are denoted with an arrow.

### Public API Information

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td rowspan="2">samRegistered</td>
<td>Allows Yes. 
<br>Yes signifies SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
<td>v2</td>
</tr>

<tr>
<td>Allows Yes or No.
<br>Yes signifies SAM registrants.
<br>No signifies non-SAM registrants.
<br>Example: samRegistered=Yes
<br> 
NOTES: 
<br>1. If this search parameter is not sent in the request, then the API will return SAM registrants by default with the current schema.
<br>2. If samRegistered=No is sent in the request, then the API will return the new non-SAM registrants schema.
</td>
<td>v3</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS
<br>Allows 9 digit value; a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM
<br>Allow a 12 character value; a maximum of up to 100 values can be sent.
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>Allows D or null.
<br>Examples: exclusionStatusFlag=D, exclusionStatusFlag=""</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>Allows Y or N.
<br>Examples: exclusionStatusFlag=Y, exclusionStatusFlag=N</td>
<td>v3</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows partial or complete value search.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows a 2 digit code.
<br>Example: physicalAddressCongressionalDistrict=08
<br>Applicable to SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows a 3 character code for SAM registrants and also a 2 character code for non-SAM registrants.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows a 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>SAM registrants:
<br>Allows a 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Non-SAM registrants:
<br>Allows a 5 or a 9 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Examples: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054, physicalAddressZipPostalCode=21202-3117
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections.
<br>SAM registrants:
<br>The applicable sections are entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact. To return all the sections, provide a value of 'All'. The repsAndCerts section will be returned only if explicitly requested.
<br>Non-SAM registrants:
<br>The applicable sections are entityRegistration and coreData.
<br>Examples: includeSections=entityRegistration,coreData, includeSections=All, includeSections=repsAndCerts
<br>Applicable to both SAM and non-SAM registrants.<br><br>
 Note: The repsAndCerts section will only be returned if included in this parameter.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download data into the JSON and CSV file formats.
<br>Example: format=csv
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get JSON or CSV file download links sent to the email address associated to the API key used in the request, when used in conjunction with the format parameter.
<br>Example: emailId=Yes&format=JSON
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>
</details>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<tr>
<td>There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database.</td>
</tr>
<details>
<summary>entityRegistration Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>samRegistered</td>
<td>string</td>
<td>SAM Registered Entity
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br>Applicable to both SAM and non-SAM registrants</td>
<td>v1<br>v2<br>v3<br>v3</td>
</tr>


<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sourceType</td>
<td>string</td>
<td><br>Source of the SAM and non-SAM registrants.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: This response tag will soon be updated to evsSource.</td>
<td>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">publicDisplayFlag</td>
<td>string</td>
<td>Returns noPublicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Returns publicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns D (Debarred) or null.
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns Y (Debarred) or N (not Debarred).
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v3</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>coreData Section</summary><br>
<summary>entityInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1 and Mailing Address Line 1.
<br>Only Physical Address Line 1 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<table>		
<tr>		
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>		
<th style="background-color: #f1f1f1;"><b>Type</b></th>		
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>	
</tr>		
<tr>		
<td>congressionalDistrict</td>		
<td>string</td>		
<td>Physical Address Congressional District</td>
<td>v1<br>v2<br>v3</td>
</tr>		
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Description</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>businessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeCode</td>
<td>string</td>
<td>Business Type Code</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>string</td>
<td>Business Type Description</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>sbaBusinessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>string</td>
<td>SBA Business Type Code</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>string</td>
<td>SBA Business Type Description</td>
</tr>

<tr>
<td>certificationEntryDate</td>
<td>string</td>
<td>Certification Entry Date</td>
</tr>

<tr>
<td>certificationExitDate</td>
<td>string</td>
<td>Certification Exit Date</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>Financial Information Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>assertions Section</summary><br>
<summary>goodsAndServices Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>naicsList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>Whether or not the NAICS Code is indicated as an SBA small business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>pscList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>pscCode</td>
<td>string</td>
<td>PSC Code</td>
</tr>
<tr>
<td>pscDescription</td>
<td>string</td>
<td>PSC Description</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>geographicalAreaServed</td>
<td>list</td>
<td>
<details>
<summary>geographicalAreaServed contains these fields</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>geographicalAreaServedStateCode</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedStateName</td>
<td>string</td>
<td>State name</td>
</tr>

<tr>
<td>geographicalAreaServedCountyCode</td>
<td>string</td>
<td>County code</td>
</tr>

<tr>
<td>geographicalAreaServedCountyName</td>
<td>string</td>
<td>County name</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaCode</td>
<td>string</td>
<td>Metropolitan Statistical Area Code</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaName</td>
<td>string</td>
<td>Metropolitan Statistical Area Name</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>ediInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
The repsAndCerts section will only be returned in the response if requested via the includeSections parameter, otherwise it will not be returned by default.<br><br>
The repsAndCerts section is not available for use with the format parameter.
<br>
<br>
<summary>certifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>fARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>

<details>
<summary>dFARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>


<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>qualifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>architectEngineerResponses</td>
<td>Object</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>financialAssistanceCertifications Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>grantsCertificationStatus</td>
<td>string</td>
<td>Grants Certification Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>grantsCertifyingResponse</td>
<td>string</td>
<td>Grants Certifying Response</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierFirstName</td>
<td>string</td>
<td>Certifier First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierLastName</td>
<td>string</td>
<td>Certifier Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierMiddleInitial</td>
<td>string</td>
<td>Certifier Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pdfLinks Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>farPDF</td>
<td>string</td>
<td>FAR PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>farAndDfarsPDF</td>
<td>string</td>
<td>FAR and DFARS PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>architectEngineeringPDF</td>
<td>string</td>
<td>Architect Engineering PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>financialAssistanceCertificationsPDF</td>
<td>string</td>
<td>Financial Assistance Certifications PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

<details>
<summary>pointsOfContact Section</summary><br>
<summary>governmentBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email.<br>Defaulted value is "FOUO Only"</td>
<td>v1</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

### FOUO API Information

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td rowspan="2">samRegistered</td>
<td>Allows Yes. 
<br>Yes signifies SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
<td>v2</td>
</tr>

<tr>
<td>Allows Yes or No.
<br>Yes signifies SAM registrants.
<br>No signifies non-SAM registrants.
<br>Example: samRegistered=Yes
<br> 
NOTES: 
<br>1. If this search parameter is not sent in the request, then the API will return SAM registrants by default with the current schema.
<br>2. If samRegistered=No is sent in the request, then the API will return the new non-SAM registrants schema.
</td>
<td>v3</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS
<br>Allows 9 digit value; a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM
<br>Allow a 12 character value; a maximum of up to 100 values can be sent.
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>Allows D or null.
<br>Examples: exclusionStatusFlag=D, exclusionStatusFlag=""</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>Allows Y or N.
<br>Examples: exclusionStatusFlag=Y, exclusionStatusFlag=N</td>
<td>v3</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows partial or complete value search.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows a 2 digit code.
<br>Example: physicalAddressCongressionalDistrict=08
<br>Applicable to SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows a 3 character code for SAM registrants and also a 2 character code for non-SAM registrants.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows a 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>SAM registrants:
<br>Allows a 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Non-SAM registrants:
<br>Allows a 5 or a 9 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Examples: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054, physicalAddressZipPostalCode=21202-3117
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections.
<br>SAM registrants:
<br>The applicable sections are entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact. To return all the sections, provide a value of 'All'. The repsAndCerts section will be returned only if explicitly requested.
<br>Non-SAM registrants:
<br>The applicable sections are entityRegistration and coreData.
<br>Examples: includeSections=entityRegistration,coreData, includeSections=All, includeSections=repsAndCerts
<br>Applicable to both SAM and non-SAM registrants.<br><br>
 Note: The repsAndCerts section will only be returned if included in this parameter.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download data into the JSON and CSV file formats.
<br>Example: format=csv
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get JSON or CSV file download links sent to the email address associated to the API key used in the request, when used in conjunction with the format parameter.
<br>Example: emailId=Yes&format=JSON
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>edi</td>
<td>Allows text.
<br>Example: edi=YES/NO</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>Allows 2 character code.
<br>Example: companySecurityLevelCode=92</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>Allows text.
<br>Example: companySecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>Allows text.
<br>Example: highestEmployeeSecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ultimateParentUEIDUNS</td>
<td>Allows text.
<br>Example: ultimateParentUEIDUNS=090123451</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ultimateParentUEISAM</td>
<td>Allows text.
<br>Example: ultimateParentUEISAM=RQ56IG5JM6G9</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>Allows text.
<br>Example: agencyBusinessPurposeDesc=Buyer and Seller</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sensitivity</td>
<td>By default your API key determines the sensitivity level of the API response. If you would like to receive a response that is at a sensitivity level lower than your API key you can utilize this parameter.
<br>Example: sensitivity=public</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<tr>
<td>There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database.<br><br>
NOTE: Only system account keys can be used to access FOUO data.<br><br></td>
</tr>
<details>
<summary>entityRegistration Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>samRegistered</td>
<td>string</td>
<td>SAM Registered Entity
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br>Applicable to both SAM and non-SAM registrants</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sourceType</td>
<td>string</td>
<td><br>Source of the SAM and non-SAM registrants.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: This response tag will soon be updated to evsSource.</td>
<td>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">publicDisplayFlag</td>
<td>string</td>
<td>Returns noPublicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Returns publicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns D (Debarred) or null.
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns Y (Debarred) or N (not Debarred).
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v3</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>coreData Section</summary><br>

<summary>entityHierarchyInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>immediateParentEntity</td>
<td>object</td>
<td>
<details>
<summary>immediateParentEntity contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy</td>
<td>v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>

</table>

</details>
</td>
<td>v1<br>v2<br>v3</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>intermediateParentEntities</td>
<td>List</td>
<td>
<details>
<summary>intermediateParentEntities contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>domesticParent</td>
<td>object</td>
<td>
<details>
<summary>domesticParent contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy
<br><br>NOTE: This field is only available in v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>

</table>
</details>
</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hqParent</td>
<td>object</td>
<td>
<details>
<summary>hqParent contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy
<br><br>NOTE: This field is only available in v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>


</table>
</details>
</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>


</table>
</details>
</td>
</tr>

<tr>
<td>ultimateParentEntity</td>
<td>object</td>
<td>
<details>
<summary>ultimateParentEntity contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy</td>
<td>v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>


</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>evsMonitoring</td>
<td>object</td>
<td>
<details>
<summary>evsMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>
dnbMonitoring
</td>
<td>object</td>
<td>
<details>
<summary>dnbMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>
</table>
</details>
</td>
<td>v1</td>
</tr>

<tr>
<td>
samMonitoring
</td>
<td>object</td>
<td>
<details>
<summary>samMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>
</table>
</details>
</td>
<td>v1</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v2<br>v3</td>
</tr>

</table>
</details>
</td>
</tr>

</table>

<summary>federalHierarchy Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>source</td>
<td>string</td>
<td>Source</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>


<summary>entityInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1 and Mailing Address Line 1.
<br>Only Physical Address Line 1 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<table>		
<tr>		
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>		
<th style="background-color: #f1f1f1;"><b>Type</b></th>		
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>	
</tr>		
<tr>		
<td>congressionalDistrict</td>		
<td>string</td>		
<td>Physical Address Congressional District</td>	
<td>v1<br>v2<br>v3</td>	
</tr>		
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>string</td>
<td>Agency Business Purpose Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>string</td>
<td>Agency Business Purpose Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDescription</td>
<td>string</td>
<td>Entity Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of IncorporationCode</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of IncorporationDescription</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>string</td>
<td>Company Security Level Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>string</td>
<td>Company Security Level Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>string</td>
<td>Highest Employee Security Level Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>string</td>
<td>Highest Employee Security Level Description</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>businessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeCode</td>
<td>string</td>
<td>Business Type Code</td>
</tr>
<tr>
<td>businessTypeDescription</td>
<td>string</td>
<td>Business Type Description</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>


<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>sbaBusinessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>string</td>
<td>SBA Business Type Code</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>string</td>
<td>SBA Business Type Description</td>
</tr>

<tr>
<td>certificationEntryDate</td>
<td>string</td>
<td>Certification Entry Date</td>
</tr>

<tr>
<td>certificationExitDate</td>
<td>string</td>
<td>Certification Exit Date</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>Financial Information Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>assertions Section</summary><br>
<summary>goodsAndServices Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>naicsList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>Whether or not the NAICS Code is indicated as an SBA small business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>pscList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>pscCode</td>
<td>string</td>
<td>PSC Code</td>
</tr>

<tr>
<td>pscDescription</td>
<td>string</td>
<td>PSC Description</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bondingLevels</td>
<td>list</td>
<td>
<details>
<summary>Bonding Levels contains these fields</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>type</td>
<td>string</td>
<td>Type of bonding level</td>
</tr>

<tr>
<td>value</td>
<td>string</td>
<td>Value of bonding level</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>geographicalAreaServed</td>
<td>list</td>
<td>
<details>
<summary>geographicalAreaServed contains these fields</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>geographicalAreaServedStateCode</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedStateName</td>
<td>string</td>
<td>State name</td>
</tr>

<tr>
<td>geographicalAreaServedCountyCode</td>
<td>string</td>
<td>County Code</td>
</tr>

<tr>
<td>geographicalAreaServedCountyName</td>
<td>string</td>
<td>County name</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaCode</td>
<td>string</td>
<td>Metropolitan Statistical Area Code</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaName</td>
<td>string</td>
<td>Metropolitan Statistical Area Name</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>sizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>averageAnnualRevenue</td>
<td>string</td>
<td>Average Annual Revenue</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>sizeMetricDetails Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>employeesLocation</td>
<td>string</td>
<td>Employees Location</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>industrySpecificSizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>barrelsCapacity</td>
<td>string</td>
<td>Barrels Capacity</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>ediInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>ISA Qualifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>ISA Identifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
The repsAndCerts section will only be returned in the response if requested via the includeSections parameter, otherwise it will not be returned by default.<br><br>
The repsAndCerts section is not available for use with the format parameter.
<br>
<br>
<summary>certifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>fARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>


<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>

<details>
<summary>dFARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>qualifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>architectEngineerResponses</td>
<td>Object</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>financialAssistanceCertifications Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>grantsCertificationStatus</td>
<td>string</td>
<td>Grants Certification Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>grantsCertifyingResponse</td>
<td>string</td>
<td>Grants Certifying Response</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierFirstName</td>
<td>string</td>
<td>Certifier First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierLastName</td>
<td>string</td>
<td>Certifier Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierMiddleInitial</td>
<td>string</td>
<td>Certifier Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pdfLinks Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>farPDF</td>
<td>string</td>
<td>FAR PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>farAndDfarsPDF</td>
<td>string</td>
<td>FAR and DFARS PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>architectEngineeringPDF</td>
<td>string</td>
<td>Architect Engineering PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>financialAssistanceCertificationsPDF</td>
<td>string</td>
<td>Financial Assistance Certifications PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

<details>
<summary>pointsOfContact Section</summary><br>
<summary>governmentBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>partyPerformingCertificationPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>soleProprietorshipPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>accountsReceivablePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>accountsPayablePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>ediPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>eliminationsPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>salesPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

### Sensitive API Information
<details>
<summary><b>Sensitive API Process</b></summary>
<ul>
<li> All requests must be sent as POST calls using clients like Postman. These requests cannot be sent through browsers.</li>
<li> The System Account User ID and Password must be sent as "Basic Auth" under the "Authorization" Header. The combination needs to be base 64 encoded as base64(username:password).</li>
<li> The Sensitive api_key parameter with its value must be sent in the "Headers" as "x-api-key" and not directly in the request URL</li>
<li> Only system account keys can be used to access Sensitive data.</li>
<li> "Accept" parameter must be passed in "Headers" with value, "application/json".</li>
<li> "Content-Type" parameter must be passed in "Headers" with value, "application/json".</li>
<li> All the optional search filters can be sent in the request URL or in the "Body".</li> <br><br>
</ul>
</details>
<details>
<summary><b>An example of the Sensitive entity management POST call using curl</b></summary>
<div style="font-family:Source sans pro; color: #212121; line-height: 1.5"><br>
<b>Curl request with basic auth token:</b><br>
curl -X POST "https://api.sam.gov/entity-information/v2/entities?ueiDUNS=< UEI Duns >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/json" --header "Authorization: Basic < auth token >"<br><br>
<b>Curl request with username and password:</b><br>
curl -X POST "https://api.sam.gov/entity-information/v2/entities?ueiDUNS=< UEI Duns >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/json" --user "< username >:< password >"</div><br><br>
</details>
<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td rowspan="2">samRegistered</td>
<td>Allows Yes. 
<br>Yes signifies SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
<td>v2</td>
</tr>

<tr>
<td>Allows Yes or No.
<br>Yes signifies SAM registrants.
<br>No signifies non-SAM registrants.
<br>Example: samRegistered=Yes
<br> 
NOTES: 
<br>1. If this search parameter is not sent in the request, then the API will return SAM registrants by default with the current schema.
<br>2. If samRegistered=No is sent in the request, then the API will return the new non-SAM registrants schema.
</td>
<td>v3</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS
<br>Allows 9 digit value; a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM
<br>Allow a 12 character value; a maximum of up to 100 values can be sent.
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>Allows D or null.
<br>Examples: exclusionStatusFlag=D, exclusionStatusFlag=""</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>Allows Y or N.
<br>Examples: exclusionStatusFlag=Y, exclusionStatusFlag=N</td>
<td>v3</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows partial or complete value search.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows a 2 digit code.
<br>Example: physicalAddressCongressionalDistrict=08
<br>Applicable to SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows a 3 character code for SAM registrants and also a 2 character code for non-SAM registrants.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows a 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>SAM registrants:
<br>Allows a 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Non-SAM registrants:
<br>Allows a 5 or a 9 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Examples: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054, physicalAddressZipPostalCode=21202-3117
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections.
<br>SAM registrants:
<br>The applicable sections are entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact. To return all the sections, provide a value of 'All'. The repsAndCerts section will be returned only if explicitly requested.
<br>Non-SAM registrants:
<br>The applicable sections are entityRegistration and coreData.
<br>Examples: includeSections=entityRegistration,coreData, includeSections=All, includeSections=repsAndCerts
<br>Applicable to both SAM and non-SAM registrants.<br><br>
 Note: The repsAndCerts section will only be returned if included in this parameter.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download data into the JSON and CSV file formats.
<br>Example: format=csv
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get JSON or CSV file download links sent to the email address associated to the API key used in the request, when used in conjunction with the format parameter.
<br>Example: emailId=Yes&format=JSON
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>edi</td>
<td>Allows text.
<br>Example: edi=YES/NO</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>Allows 2 character code.
<br>Example: companySecurityLevelCode=92</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>Allows text.
<br>Example: companySecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>Allows text.
<br>Example: highestEmployeeSecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ultimateParentUEIDUNS</td>
<td>Allows text.
<br>Example: ultimateParentUEIDUNS=090123451</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ultimateParentUEISAM</td>
<td>Allows text.
<br>Example: ultimateParentUEISAM=RQ56IG5JM6G9</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>Allows text.
<br>Example: agencyBusinessPurposeDesc=Buyer and Seller</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>routingNumber</td>
<td>Allows a text.
<br>Example: routingNumber=0123456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bankName</td>
<td>Allows a text.
<br>Example: bankName=TEST</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>accountNumber</td>
<td>Allows a text.
<br>Example: accountNumber=012323456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>eftWaiverFlag</td>
<td>Allows a text.
<br>Example: eftWaiverFlag=Y</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyLocationCode</td>
<td>Allows a text.
<br>Example: agencyLocationCode=1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>disbursingOfficeSymbol</td>
<td>Allows a text.
<br>Example: disbursingOfficeSymbol=1093</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>taxpayerName</td>
<td>Allows a text.
<br>Example: taxpayerName=test</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>Allows a text.
<br>Example: taxpayerIdentificationNumber=01234</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sensitivity</td>
<td>By default your API key determines the sensitivity level of the API response. If you would like to receive a response that is at a sensitivity level lower than your API key you can utilize this parameter.
<br>Example: sensitivity=public
<br>NOTE: If you use this parameter with a sensitive key you must use a POST call for all request types.</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<tr>
<td>There are a few placeholder elements that return ‘Currently Not Available’ until they are made available in the database.</td>
</tr>
<details>
<summary>entityRegistration Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>samRegistered</td>
<td>string</td>
<td>SAM Registered Entity
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br>Applicable to both SAM and non-SAM registrants</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>sourceType</td>
<td>string</td>
<td><br>Source of the SAM and non-SAM registrants.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: This response tag will soon be updated to evsSource.</td>
<td>v3</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td rowspan="2">publicDisplayFlag</td>
<td>string</td>
<td>Returns noPublicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Returns publicDisplayFlag.
<br>Applicable to both SAM and non-SAM registrants.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY non-SAM registrants.</td>
<td>v3</td>
</tr>

<tr>
<td rowspan="2">exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns D (Debarred) or null.
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>string</td>
<td>Exclusion Status Flag
<br>Returns Y (Debarred) or N (not Debarred).
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v3</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br>Applicable to both SAM and non-SAM registrants.</td>
<td>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>coreData Section</summary><br>

<summary>entityHierarchyInformation</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>immediateParentEntity</td>
<td>object</td>
<td>
<details>
<summary>immediateParentEntity contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy</td>
<td>v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>

</table>

</details>
</td>
<td>v1<br>v2<br>v3</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>intermediateParentEntities</td>
<td>List</td>
<td>
<details>
<summary>intermediateParentEntities contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>domesticParent</td>
<td>object</td>
<td>
<details>
<summary>domesticParent contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy
<br><br>NOTE: This field is only available in v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>

</table>
</details>
</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hqParent</td>
<td>object</td>
<td>
<details>
<summary>hqParent contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy
<br><br>NOTE: This field is only available in v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>


</table>
</details>
</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>


</table>
</details>
</td>
</tr>

<tr>
<td>ultimateParentEntity</td>
<td>object</td>
<td>
<details>
<summary>ultimateParentEntity contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the SAM registrant hierarchy</td>
<td>v3</td>
</tr>

<tr>
<div style="width: 20px">
<td>physicalAddress</td>
<td>object</td>
<td>
<details>
<summary>physicalAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country</td>
</tr>

</table>


</details>
</td>
<td>v1<br>v2<br>v3</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>evsMonitoring</td>
<td>object</td>
<td>
<details>
<summary>evsMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>
dnbMonitoring
</td>
<td>object</td>
<td>
<details>
<summary>dnbMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>
</table>
</details>
</td>
<td>v1</td>
</tr>

<tr>
<td>
samMonitoring
</td>
<td>object</td>
<td>
<details>
<summary>samMonitoring contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>
</table>
</details>
</td>
<td>v1</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v2<br>v3</td>
</tr>

</table>
</details>
</td>
</tr>

</table>

<summary>federalHierarchy Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>source</td>
<td>string</td>
<td>Source</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>tinInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>taxpayerName</td>
<td>string</td>
<td>Taxpayer Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>taxpayerIdentificationType</td>
<td>string</td>
<td>Taxpayer Identification Type</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>string</td>
<td>Taxpayer Identification Number</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>entityInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>mpin</td>
<td>string</td>
<td>mpin</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Physical Address Line 1 and Mailing Address Line 1.
<br>Only Physical Address Line 1 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<table>		
<tr>		
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>		
<th style="background-color: #f1f1f1;"><b>Type</b></th>		
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>	
</tr>		
<tr>		
<td>congressionalDistrict</td>		
<td>string</td>		
<td>Physical Address Congressional District</td>
<td>v1<br>v2<br>v3</td>		
</tr>		
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>string</td>
<td>Agency Business Purpose Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>string</td>
<td>Agency Business Purpose Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization StructureCode</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization StructureDesc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Desc</td>
<td>v1<br>v2<br>v3</td>
</tr>
<tr>
<td>companySecurityLevelCode</td>
<td>string</td>
<td>Company Security Level Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>string</td>
<td>Company Security Level Description</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>string</td>
<td>Highest Employee Security Level Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>string</td>
<td>Highest Employee Security Level Description</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>businessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeCode</td>
<td>string</td>
<td>Business Type Code</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>string</td>
<td>Business Type Description</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>


<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>sbaBusinessTypeList contains these fields</summary>
<details>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>string</td>
<td>SBA Business Type Code</td>
</tr>

<tr>
<td>sbaBusinessTypeDescription</td>
<td>string</td>
<td>SBA Business Type Description</td>
</tr>

<tr>
<td>certificationEntryDate</td>
<td>string</td>
<td>Certification Entry Date</td>
</tr>

<tr>
<td>certificationExitDate</td>
<td>string</td>
<td>Certification Exit Date</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>financialInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>financialAccount</td>
<td>object</td>
<td>
<details>
<summary>financialAccount contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>authorizationDate</td>
<td>string</td>
<td>Authorization Date</td>
</tr>

<tr>
<td>eftInformation</td>
<td>string</td>
<td>EFT Information</td>
</tr>

<tr>
<td>accountType</td>
<td>string</td>
<td>Account Type</td>
</tr>

<tr>
<td>accountNumber</td>
<td>string</td>
<td>Account Number</td>
</tr>

<tr>
<td>abaRoutingNumber</td>
<td>string</td>
<td>ABA Routing Number</td>
</tr>

<tr>
<td>eftWaiver</td>
<td>string</td>
<td>EFT Waiver</td>
</tr>

<tr>
<td>lockboxNumber</td>
<td>string</td>
<td>Lock box Number</td>
</tr>

<tr>
<td>merchantID1</td>
<td>string</td>
<td>Merchant ID1</td>
</tr>

<tr>
<td>merchantID2</td>
<td>string</td>
<td>Merchant ID2</td>
</tr>

<tr>
<td>departmentCode</td>
<td>string</td>
<td>Department Code</td>
</tr>

<tr>
<td>agencyLocationCode</td>
<td>string</td>
<td>Agency Location Code</td>
</tr>

<tr>
<td>disbursingOfficeSymbol</td>
<td>string</td>
<td>Disbursing Office Symbol</td>
</tr>

<tr>
<td>accountingStation</td>
<td>string</td>
<td>Accounting Station</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>achInformation</td>
<td>object</td>
<td>
<details>
<summary>ACH Information below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non US Phone</td>
</tr>

<tr>
<td>faxNumber</td>
<td>string</td>
<td>Fax Number</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>remittanceInformation</td>
<td>object</td>
<td>
<details>
<summary>Remittance Information below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
</tr>
<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>ZipCode</td>
</tr>
<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>ZipCode Plus4</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

<details>
<summary>assertions Section</summary><br>
<summary>goodsAndServices Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>naicsList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>Whether or not the NAICS Code is indicated as an SBA small business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>pscList contains these fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>pscCode</td>
<td>string</td>
<td>PSC Code</td>
</tr>
<tr>
<td>pscDescription</td>
<td>string</td>
<td>PSC Description</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>bondingLevels</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>geographicalAreaServed</td>
<td>list</td>
<td>
<details>
<summary>geographicalAreaServed contains these fields</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>geographicalAreaServedStateCode</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedStateName</td>
<td>string</td>
<td>State name</td>
</tr>

<tr>
<td>geographicalAreaServedCountyCode</td>
<td>string</td>
<td>County code</td>
</tr>

<tr>
<td>geographicalAreaServedCountyName</td>
<td>string</td>
<td>County name</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaCode</td>
<td>string</td>
<td>Metropolitan Statistical Area Code</td>
</tr>

<tr>
<td>geographicalAreaServedmetropolitanStatisticalAreaName</td>
<td>string</td>
<td>Metropolitan Statistical Area Name</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>sizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>averageAnnualRevenue</td>
<td>string</td>
<td>Average Annual Revenue</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>sizeMetricDetails Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>employeesLocation</td>
<td>string</td>
<td>Employees Location</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>industrySpecificSizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>barrelsCapacity</td>
<td>string</td>
<td>Barrels Capacity</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>ediInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>ISA Qualifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>ISA Identifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
The repsAndCerts section will only be returned in the response if requested via the includeSections parameter, otherwise it will not be returned by default.<br><br>
The repsAndCerts section is not available for use with the format parameter.
<br>
<br>
<summary>certifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>fARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>

<details>
<summary>dFARResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>qualifications Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>architectEngineerResponses</td>
<td>Object</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision ID</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>questionText</td>
<td>string</td>
<td>Question Text</td>
</tr>

<tr>
<td>answerId</td>
<td>string</td>
<td>Answer ID</td>
</tr>

<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>
<details>
<summary>company contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>TIN</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>highestLevelOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>
<details>
<summary>immediateOwnerCage contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>hasOwner</td>
<td>string</td>
<td>Has Owner</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>
<details>
<summary>personDetails contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>
<details>
<summary>pointOfContact contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>telephoneNumber</td>
<td>string</td>
<td>Telephone Number</td>
</tr>

<tr>
<td>extension</td>
<td>string</td>
<td>Extension</td>
</tr>

<tr>
<td>internationalNumber</td>
<td>string</td>
<td>InterNationalNumber</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>architectExperiencesList</td>
<td>List</td>
<td>
<details>
<summary>architectExperiencesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>

<tr>
<td>experienceDescription</td>
<td>string</td>
<td>Experience Description</td>
</tr>

<tr>
<td>annualAvgRevenueCode</td>
<td>string</td>
<td>Annual Avg Revenue Code</td>
</tr>

<tr>
<td>annualAvgRevenueDescription</td>
<td>string</td>
<td>Annual Avg Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>disciplineInfoList</td>
<td>List</td>
<td>
<details>
<summary>disciplineInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>disciplineID</td>
<td>string</td>
<td>Discipline ID</td>
</tr>

<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Firm Num of Employees</td>
</tr>

<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Branch Num of Employees</td>
</tr>

<tr>
<td>disciplineDescription</td>
<td>string</td>
<td>Discipline Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>endProductsList</td>
<td>string</td>
<td>
<details>
<summary>endProductsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>ProductType</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>foreignGovtEntitiesList</td>
<td>string</td>
<td>
<details>
<summary>foreignGovtEntitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>controlledEntityName</td>
<td>string</td>
<td>Controlled Entity Name</td>
</tr>

<tr>
<td>interestDescription</td>
<td>string</td>
<td>Interest Description</td>
</tr>

<tr>
<td>ownershipPercentageType</td>
<td>string</td>
<td>Ownership Percentage Type</td>
</tr>

<tr>
<td>address</td>
<td>object</td>
<td>
<details>
<summary>address contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>govtCountry</td>
<td>string</td>
<td>Govt Country</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>formerFirmsList</td>
<td>List</td>
<td>
<details>
<summary>formerFirmsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>fscInfoList</td>
<td>List</td>
<td>
<details>
<summary>fscInfoList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>placeOfManufacture</td>
<td>string</td>
<td>Place of Manufacture</td>
</tr>

<tr>
<td>fscCode</td>
<td>string</td>
<td>FSC Code</td>
</tr>

<tr>
<td>description</td>
<td>string</td>
<td>Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>jointVentureCompaniesList</td>
<td>List</td>
<td>
<details>
<summary>jointVentureCompaniesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>tin</td>
<td>string</td>
<td>Tin</td>
</tr>

<tr>
<td>duns</td>
<td>string</td>
<td>DUNS</td>
</tr>

<tr>
<td>yearEstablished</td>
<td>string</td>
<td>Year Established</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>laborSurplusConcernsList</td>
<td>List</td>
<td>
<details>
<summary>laborSurplusConcernsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>surplusArea</td>
<td>string</td>
<td>Surplus Area</td>
</tr>

<tr>
<td>civilJurisdiction</td>
<td>string</td>
<td>Civil Jurisdiction</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>naicsList</td>
<td>List</td>
<td>
<details>
<summary>naicsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>NAICS Code</td>
</tr>

<tr>
<td>naicsName</td>
<td>string</td>
<td>NAICS Name</td>
</tr>

<tr>
<td>isPrimary</td>
<td>string</td>
<td>Is Primary</td>
</tr>

<tr>
<td>isSmallBusiness</td>
<td>string</td>
<td>Is Small Business</td>
</tr>

<tr>
<td>exceptionCounter</td>
<td>string</td>
<td>Exception Counter</td>
</tr>

<tr>
<td>hasSBAProtest</td>
<td>string</td>
<td>Has SBA Protest</td>
</tr>

<tr>
<td>hasSizeChanged</td>
<td>string</td>
<td>Has Size Changed</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>predecessorsList</td>
<td>List</td>
<td>
<details>
<summary>predecessorsList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>ncageCode</td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samFacilitiesList</td>
<td>List</td>
<td>
<details>
<summary>samFacilitiesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>plantAddress</td>
<td>object</td>
<td>
<details>
<summary>plantAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>ownerName</td>
<td>string</td>
<td>Owner Name</td>
</tr>

<tr>
<td>ownerAddress</td>
<td>object</td>
<td>
<details>
<summary>ownerAddress contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>line1</td>
<td>string</td>
<td>Line 1</td>
</tr>

<tr>
<td>line2</td>
<td>string</td>
<td>Line 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Zip</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>samPointsOfContactList</td>
<td>List</td>
<td>
<details>
<summary>samPointsOfContactList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>servicesRevenuesList</td>
<td>List</td>
<td>
<details>
<summary>servicesRevenuesList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>federalRevenueCode</td>
<td>string</td>
<td>Federal Revenue Code</td>
</tr>

<tr>
<td>federalRevenueDescription</td>
<td>string</td>
<td>Federal Revenue Description</td>
</tr>

<tr>
<td>nonFedRevenueCode</td>
<td>string</td>
<td>Non Fed Revenue Code</td>
</tr>

<tr>
<td>nonFedRevenueDescription</td>
<td>string</td>
<td>Non Fed Revenue Description</td>
</tr>

<tr>
<td>totalRevenueCode</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>

<tr>
<td>totalRevenueDescription</td>
<td>string</td>
<td>Total Revenue Description</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>softwareList</td>
<td>List</td>
<td>
<details>
<summary>softwareList contains below fields</summary><br>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>id</td>
<td>string</td>
<td>ID</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

<tr>
<td>productType</td>
<td>string</td>
<td>Product Type</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>urlList</td>
<td>List</td>
<td>URL List</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>financialAssistanceCertifications Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>
<tr>
<td>grantsCertificationStatus</td>
<td>string</td>
<td>Grants Certification Status</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>grantsCertifyingResponse</td>
<td>string</td>
<td>Grants Certifying Response</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierFirstName</td>
<td>string</td>
<td>Certifier First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierLastName</td>
<td>string</td>
<td>Certifier Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>certifierMiddleInitial</td>
<td>string</td>
<td>Certifier Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pdfLinks Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>farPDF</td>
<td>string</td>
<td>FAR PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>farAndDfarsPDF</td>
<td>string</td>
<td>FAR and DFARS PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>architectEngineeringPDF</td>
<td>string</td>
<td>Architect Engineering PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>financialAssistanceCertificationsPDF</td>
<td>string</td>
<td>Financial Assistance Certifications PDF</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

<details>
<summary>pointsOfContact Section</summary><br>
<summary>governmentBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>partyPerformingCertificationPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>soleProprietorshipPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>accountsReceivablePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>accountsPayablePOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>ediPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>eliminationsPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

<summary>salesPOC Sub Sections</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>

</details>

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Entity Management API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON/CSV format. |
| 400 | Application Level Error Messages: <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * ueiDUNS can only be 9 digits. <br><br> * ueiDUNS Should Contain Only Numeric value. <br><br> * Invalid Input Parameters. <br><br>  * The parameters: 'includeSections', 'emailId' or 'format' are not permitted inside Query Param(q) <br><br>  * A maximum of 100 ueiSAM is allowed. <br><br>  * A maximum of 100 ueiDUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. <br><br> * The parameter emailId must be provided in conjunction with the parameter format. <br><br> * No api_key was supplied in request body. Please submit with a valid API key. <br><br> * No system account credentials are provided. Please provide credentials via basic authentication. <br><br> * entityEFTIndicator filter must be provided in conjunction with ueiDUNS filter or ueiSAM filter. <br><br> * IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system. <br><br> * Type of Connection chosen in your user profile does not allow access to this api. |
| 406 | Invalid Accept Header. |
| 415 | Invalid Content-Type Header. |

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Example 1: Get the "entityRegistration" and "coreData" sections for all the 'Joint Venture Women' or 'Asian-Pacific' Entities that are registered for "All Awards" or "Federal Assistance Awards".
<details>
<summary>Request URL</summary>
<b>Production URL:</b>    https://api.sam.gov/entity-information/v2/entities?api_key=< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
    "totalRecords": 15963,

A sample record is shown below:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "V4EUJ1MPVH45",
                "ueiDUNS": "118094699",
                "entityEFTIndicator": null,
                "cageCode": "92G16",
                "dodaac": null,
                "legalBusinessName": "HH Real Estate Properties Corporation",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z1",
                "purposeOfRegistrationDesc": "Federal Assistance Awards",
                "registrationStatus": "Active",
                "registrationDate": "2021-06-23",
                "lastUpdateDate": "2021-06-24",
                "registrationExpirationDate": "2022-06-23",
                "activationDate": "2021-06-24",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2022-06-23",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "Currently Not Available",
                        "dbaName": "Currently Not Available",
                        "outOfBusinessFlag": "Currently Not Available",
                        "monitoringStatus": "Currently Not Available",
                        "lastUpdated": "Currently Not Available",
                        "addressLine1": "Currently Not Available",
                        "addressLine2": "Currently Not Available",
                        "city": "Currently Not Available",
                        "postalCode": "Currently Not Available",
                        "stateOrProvinceCode": "Currently Not Available",
                        "countryCode": "Currently Not Available"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": null,
                    "entityDivisionName": null,
                    "entityDivisionNumber": null,
                    "entityStartDate": "2021-05-17",
                    "fiscalYearEndCloseDate": "12/31",
                    "submissionDate": "2021-06-23",
                },
"physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": "09",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "2L",
                    "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2X",
                    "profitStructureDesc": "For Profit Organization",
                    "organizationStructureCode": null,
                    "organizationStructureDesc": null,
                    "stateOfIncorporationCode": "TN",
                    "stateOfIncorporationDesc": "TENNESSEE",
                    "countryOfIncorporationCode": "USA",
                    "countryOfIncorporationDesc": "UNITED STATES",
                    "companySecurityLevelCode": null,
                    "companySecurityLevelDesc": null,
                    "highestEmployeeSecurityLevelCode": null,
                    "highestEmployeeSecurityLevelDesc": null
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "23",
                            "businessTypeDesc": "Minority Owned Business"
                        },
                        {
                            "businessTypeCode": "2X",
                            "businessTypeDesc": "For Profit Organization"
                        },
                        {
                            "businessTypeCode": "8C",
                            "businessTypeDesc": "Joint Venture Women Owned Small Business"
                        },
                        {
                            "businessTypeCode": "8W",
                            "businessTypeDesc": "Woman Owned Small Business"
                        },
                        {
                            "businessTypeCode": "A2",
                            "businessTypeDesc": "Woman Owned Business"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        },
                        {
                            "businessTypeCode": "HK",
                            "businessTypeDesc": "Community Development Corporation Owned Firm"
                        },
                        {
                            "businessTypeCode": "OY",
                            "businessTypeDesc": "Black American Owned"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
   "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      }
    },

 "links": {
        "selfLink": "https://api.sam.gov/entity-information/v2/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=0&size=10",
        "nextLink": "https://api.sam.gov/entity-information/v2/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=1&size=10"
    }
}
</pre>
</code>
</p>
</details>

### Example 2: Get Entities with no Hierarchy, a small hierarchy and a large Hierarchy.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key=< A valid FOUO API Key >&ueiDUNS=[075211119~439307625~261471459]&includeSections=entityRegistration,coreData <br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?< A valid FOUO API Key >&ueiDUNS=[075211119~439307625~261471459]&includeSections=entityRegistration,coreData <br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
    "totalRecords": 3,

Entity with no Hierarchy:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JK9SLMFNHKP4",
                "ueiDUNS": "075211119",
                "entityEFTIndicator": null,
                "cageCode": "87AW0",
                "dodaac": null,
                "legalBusinessName": "BRADLEY DEFENSE SOLUTIONS INC",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Inactive",
                "registrationDate": "2018-11-19",
                "lastUpdateDate": "2021-01-21",
                "registrationExpirationDate": "2019-11-19",
                "activationDate": "2018-11-29",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2019-11-19",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": null
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "Currently Not Available",
                        "dbaName": "Currently Not Available",
                        "outOfBusinessFlag": "Currently Not Available",
                        "monitoringStatus": "Currently Not Available",
                        "lastUpdated": "Currently Not Available",
                        "addressLine1": "Currently Not Available",
                        "addressLine2": "Currently Not Available",
                        "city": "Currently Not Available",
                        "postalCode": "Currently Not Available",
                        "stateOrProvinceCode": "Currently Not Available",
                        "countryCode": "Currently Not Available"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": null,
                    "entityDivisionName": null,
                    "entityDivisionNumber": null,
                    "entityStartDate": "2018-05-01",
                    "fiscalYearEndCloseDate": "05/01",
                    "submissionDate": "2018-11-19",
                },
"physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": "00",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "2L",
                    "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2X",
                    "profitStructureDesc": "For Profit Organization",
                    "organizationStructureCode": "MF",
                    "organizationStructureDesc": "Manufacturer of Goods",
                    "stateOfIncorporationCode": "NY",
                    "stateOfIncorporationDesc": "NEW YORK",
                    "countryOfIncorporationCode": "USA",
                    "countryOfIncorporationDesc": "UNITED STATES",
                    "companySecurityLevelCode": null,
                    "companySecurityLevelDesc": null,
                    "highestEmployeeSecurityLevelCode": null,
                    "highestEmployeeSecurityLevelDesc": null
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "2X",
                            "businessTypeDesc": "For Profit Organization"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        },
                        {
                            "businessTypeCode": "MF",
                            "businessTypeDesc": "Manufacturer of Goods"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "Y",
                    "debtSubjectToOffset": "N",
                },
                
            }
        }
    ],

Entity with a small Hierarchy:

        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JXCSEVSG7785",
                "ueiDUNS": "439307625",
                "entityEFTIndicator": null,
                "cageCode": "AQ773",
                "dodaac": null,
                "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE - CNR",
                "dbaName": "ICB ISTITUTO DI CHIMICA BIOMOLECOLARE",
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "registrationDate": "2018-03-02",
                "lastUpdateDate": "2021-03-03",
                "registrationExpirationDate": "2022-02-25",
                "activationDate": "2021-03-03",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2022-02-25",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": "NLXHHB71VMK5",
                                "ueiDUNS": "655149347",
                                "legalBusinessName": "REPUBBLICA ITALIANA",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CWVEJHEWM684",
                                "ueiDUNS": "440774594",
                                "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "NLXHHB71VMK5",
                        "ueiDUNS": "655149347",
                        "legalBusinessName": "REPUBBLICA ITALIANA",
                        "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "Currently Not Available",
                        "dbaName": "Currently Not Available",
                        "outOfBusinessFlag": "Currently Not Available",
                        "monitoringStatus": "Currently Not Available",
                        "lastUpdated": "Currently Not Available",
                        "addressLine1": "Currently Not Available",
                        "addressLine2": "Currently Not Available",
                        "city": "Currently Not Available",
                        "postalCode": "Currently Not Available",
                        "stateOrProvinceCode": "Currently Not Available",
                        "countryCode": "Currently Not Available"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": null,
                    "entityDivisionName": null,
                    "entityDivisionNumber": null,
                    "entityStartDate": "2019-02-04",
                    "fiscalYearEndCloseDate": "12/31",
                    "submissionDate": "2021-02-25",
                },
"physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": 00,
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "ZZ",
                    "entityStructureDesc": "Other",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2U",
                    "profitStructureDesc": "Other Not For Profit Organization",
                    "organizationStructureCode": null,
                    "organizationStructureDesc": null,
                    "stateOfIncorporationCode": null,
                    "stateOfIncorporationDesc": null,
                    "countryOfIncorporationCode": "ITA",
                    "countryOfIncorporationDesc": "ITALY",
                    "companySecurityLevelCode": null,
                    "companySecurityLevelDesc": null,
                    "highestEmployeeSecurityLevelCode": null,
                    "highestEmployeeSecurityLevelDesc": null
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "2U",
                            "businessTypeDesc": "Other Not For Profit Organization"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "N",
                    "debtSubjectToOffset": null,
                },
            }
        }
    ],
    
"links": {
        "selfLink": "https://api.sam.gov/entity-information/v2/entities?ueiDUNS=%5B075211119%7E439307625%5D&includeSections=entityRegistration%2CcoreData&page=0&size=10"
    }
}

Entity with a large Hierarchy:
{
    "totalRecords": 1,
    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "MJ5MN6SGYKF6",
                "ueiDUNS": "261471459",
                "entityEFTIndicator": null,
                "cageCode": "F9073",
                "dodaac": null,
                "legalBusinessName": "AIRBUS DEFENCE AND SPACE SAS",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "registrationDate": "2018-08-23",
                "lastUpdateDate": "2021-05-26",
                "registrationExpirationDate": "2021-12-06",
                "activationDate": "2020-06-09",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2021-12-06",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": "NPMCJNWE75K6",
                                "ueiDUNS": "772363362",
                                "legalBusinessName": "AIRBUS SAS",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CK6JEE77RH16",
                                "ueiDUNS": "737771675",
                                "legalBusinessName": "ASTRIUM SAS",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "QM7GAR7U8NK3",
                        "ueiDUNS": "403284867",
                        "legalBusinessName": "Airbus SE",
                        "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",                                                      "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "Currently Not Available",
                        "dbaName": "Currently Not Available",
                        "outOfBusinessFlag": "Currently Not Available",
                        "monitoringStatus": "Currently Not Available",
                        "lastUpdated": "Currently Not Available",
                        "addressLine1": "Currently Not Available",
                        "addressLine2": "Currently Not Available",
                        "city": "Currently Not Available",
                        "postalCode": "Currently Not Available",
                        "stateOrProvinceCode": "Currently Not Available",
                        "countryCode": "Currently Not Available"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": null,
                    "entityDivisionName": null,
                    "entityDivisionNumber": null,
                    "entityStartDate": "2017-05-31",
                    "fiscalYearEndCloseDate": "12/31",
                    "submissionDate": "2020-06-09",
                },
  "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },                
                  "congressionalDistrict": "00",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "8H",
                    "entityStructureDesc": "Corporate Entity (Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2X",
                    "profitStructureDesc": "For Profit Organization",
                    "organizationStructureCode": "MF",
                    "organizationStructureDesc": "Manufacturer of Goods",
                    "stateOfIncorporationCode": null,
                    "stateOfIncorporationDesc": null,
                    "countryOfIncorporationCode": "FRA",
                    "countryOfIncorporationDesc": "FRANCE",
                    "companySecurityLevelCode": null,
                    "companySecurityLevelDesc": null,
                    "highestEmployeeSecurityLevelCode": null,
                    "highestEmployeeSecurityLevelDesc": null
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "2X",
                            "businessTypeDesc": "For Profit Organization"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        },
                        {
                            "businessTypeCode": "MF",
                            "businessTypeDesc": "Manufacturer of Goods"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "N",
                    "debtSubjectToOffset": null,
                },
            }
        }
    ],
    "links": {
        "selfLink": "https://api.sam.gov/entity-information/v2/entities?ueiDUNS=261471459&includeSections=entityRegistration%2CcoreData&page=0&size=10"
    }
}
</pre>
</code>
</p>
</details>

### Example 3: Get an Entity with no EVS Monitoring.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>    https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=079870954&includeSections=entityRegistration,coreData<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=079870954&includeSections=entityRegistration,coreData<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
    "totalRecords": 1,
    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "XY1XDER4WPJ6",
                "ueiDUNS": "079870954",
                "entityEFTIndicator": null,
                "cageCode": "7F0U0",
                "dodaac": null,
                "legalBusinessName": "Enterprise Assurance Management",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "registrationDate": "2015-07-10",
                "lastUpdateDate": "2021-03-30",
                "registrationExpirationDate": "2021-10-25",
                "activationDate": "2020-04-30",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2021-10-25",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": null,
                                "ueiDUNS": null,
                                "legalBusinessName": null,
                                "physicalAddress": {
                                    "addressLine1": null,
                                    "addressLine2": null,
                                    "city": null,
                                    "stateOrProvinceCode": null,
                                    "countryCode": null,
                                    "zipCode": null,
                                    "zipCodePlus4": null
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "Enterprise Assurance Management",
                        "dbaName": "N/A",
                        "outOfBusinessFlag": "N/A",
                        "monitoringStatus": "N/A",
                        "lastUpdated": "N/A",
                        "addressLine1": "N/A",
                        "addressLine2": "N/A",
                        "city": "N/A",
                        "postalCode": "N/A",
                        "stateOrProvinceCode": "N/A",
                        "countryCode": "N/A"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": "eamsecured.com",
                    "entityDivisionName": "Enterprise Assurance Management Corp., (EAMC)",
                    "entityDivisionNumber": "Enterprise",
                    "entityStartDate": "2011-06-30",
                    "fiscalYearEndCloseDate": "10/31",
                    "submissionDate": "2020-04-28",
                },
                "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": "04",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "8H",
                    "entityStructureDesc": "Corporate Entity (Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2X",
                    "profitStructureDesc": "For Profit Organization",
                    "organizationStructureCode": "XS",
                    "organizationStructureDesc": "Subchapter S Corporation",
                    "stateOfIncorporationCode": "MD",
                    "stateOfIncorporationDesc": "MARYLAND",
                    "countryOfIncorporationCode": "USA",
                    "countryOfIncorporationDesc": "UNITED STATES",
                    "companySecurityLevelCode": "93",
                    "companySecurityLevelDesc": "Government Secret",
                    "highestEmployeeSecurityLevelCode": "94",
                    "highestEmployeeSecurityLevelDesc": "Government Top Secret"
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "2X",
                            "businessTypeDesc": "For Profit Organization"
                        },
                        {
                            "businessTypeCode": "A2",
                            "businessTypeDesc": "Woman Owned Business"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        },
                        {
                            "businessTypeCode": "OY",
                            "businessTypeDesc": "Black American Owned"
                        },
                        {
                            "businessTypeCode": "XS",
                            "businessTypeDesc": "Subchapter S Corporation"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "Y",
                    "debtSubjectToOffset": "N",
                },
            }
        }
    ],
    "links": {
        "selfLink": "https://api.sam.gov/entity-information/v2/entities?ueiDUNS=079870954&includeSections=entityRegistration%2CcoreData&page=0&size=10"
    }
}
</pre>
</code>
</p>
</details>

### Example 4: Get Entitities with Address Change and Name Change resulting from EVS Monitoring.
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=[081270422~080192883]&includeSections=entityRegistration,coreData <br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=[081270422~080192883]&includeSections=entityRegistration,coreData <br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
An Entity with an Address Change resulting from EVS Monitoring:
"entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "ZQGGHJH74DW7",
                "ueiDUNS": "081270422",
                "entityEFTIndicator": null,
                "cageCode": "855J5",
                "dodaac": null,
                "legalBusinessName": "INTERNATIONAL BUSINESS MACHINES CORPORATION",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "registrationDate": "2018-07-24",
                "lastUpdateDate": "2021-06-10",
                "registrationExpirationDate": "2021-08-10",
                "activationDate": "2020-08-13",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2021-08-10",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "Y",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": "J64CSQTQNRC1",
                                "ueiDUNS": "001368083",
                                "legalBusinessName": "International Business Machines Corporation",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "J64CSQTQNRC1",
                                "ueiDUNS": "001368083",
                                "legalBusinessName": "International Business Machines Corporation",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "J64CSQTQNRC1",
                        "ueiDUNS": "001368083",
                        "legalBusinessName": "International Business Machines Corporation",
                        "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "International Business Machines Corporation",
                        "dbaName": null,
                        "outOfBusinessFlag": "N/A",
                        "monitoringStatus": "Y",
                        "lastUpdated": "Y",
                        "addressLine1": "New Address Line 1",
                        "addressLine2": "New Address Line 2",
                        "city": "New City",
                        "postalCode": "New Zip/Postal Code",
                        "stateOrProvinceCode": "New State/Province",
                        "countryCode": "New Country Code"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": "http://www.ibm.com/us/en",
                    "entityDivisionName": "IBM Global Business Services",
                    "entityDivisionNumber": "16",
                    "entityStartDate": "1911-01-01",
                    "fiscalYearEndCloseDate": "12/31",
                    "submissionDate": "2020-08-10",
                },
                "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": "00",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "2L",
                    "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "2X",
                    "profitStructureDesc": "For Profit Organization",
                    "organizationStructureCode": null,
                    "organizationStructureDesc": null,
                    "stateOfIncorporationCode": "NY",
                    "stateOfIncorporationDesc": "NEW YORK",
                    "countryOfIncorporationCode": "USA",
                    "countryOfIncorporationDesc": "UNITED STATES",
                    "companySecurityLevelCode": "94",
                    "companySecurityLevelDesc": "Government Top Secret",
                    "highestEmployeeSecurityLevelCode": "94",
                    "highestEmployeeSecurityLevelDesc": "Government Top Secret"
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "2X",
                            "businessTypeDesc": "For Profit Organization"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "N",
                    "debtSubjectToOffset": "N",
                },
                
            }
        },

An Entity with a Name Change resulting from EVS Monitoring:
 {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JH9ZARNKWKC7",
                "ueiDUNS": "080192883",
                "entityEFTIndicator": null,
                "cageCode": "7X7G0",
                "dodaac": null,
                "legalBusinessName": "IBM Southeast Employees' Credit Union",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z1",
                "purposeOfRegistrationDesc": "Federal Assistance Awards",
                "registrationStatus": "Active",
                "registrationDate": "2017-07-27",
                "lastUpdateDate": "2021-03-11",
                "registrationExpirationDate": "2022-03-03",
                "activationDate": "2021-03-05",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2022-03-03",
                "ueiCreationDate": "2021-06-25",
                "noPublicDisplayFlag": "N",
                "exclusionStatusFlag": null,
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "ueiDUNS": null,
                        "legalBusinessName": null,
                        "physicalAddress": {
                            "addressLine1": null,
                            "addressLine2": null,
                            "city": null,
                            "stateOrProvinceCode": null,
                            "countryCode": null,
                            "zipCode": null,
                            "zipCodePlus4": null
                        },
                        "phoneNumber": null
                    },
                    "intermediateParentEntities": [
                        {
                            "domesticParent": {
                                "ueiSAM": "JH9ZARNKWKC7",
                                "ueiDUNS": "080192883",
                                "legalBusinessName": "IBM Southeast Employees' Credit Union",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "JH9ZARNKWKC7",
                                "ueiDUNS": "080192883",
                                "legalBusinessName": "IBM Southeast Employees' Credit Union",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "JH9ZARNKWKC7",
                        "ueiDUNS": "080192883",
                        "legalBusinessName": "IBM Southeast Employees' Credit Union",
                        "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": null,
                                    "city": "City",
                                    "stateOrProvinceCode": "XX",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "1111"
                                },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": "International Business Machines CORPORATION",
                        "dbaName": null,
                        "outOfBusinessFlag": "N/A",
                        "monitoringStatus": "Y",
                        "lastUpdated": "Y",
                        "addressLine1": "N/A",
                        "addressLine2": "N/A",
                        "city": "N/A",
                        "postalCode": "N/A",
                        "stateOrProvinceCode": "N/A",
                        "countryCode": "N/A"
                    }
                },
                "federalHierarchy": {
                    "source": null,
                    "hierarchyDepartmentCode": null,
                    "hierarchyDepartmentName": null,
                    "hierarchyAgencyCode": null,
                    "hierarchyAgencyName": null,
                    "hierarchyOfficeCode": null
                },
                "entityInformation": {
                    "entityURL": "www.ithinkfi.org",
                    "entityDivisionName": null,
                    "entityDivisionNumber": null,
                    "entityStartDate": "1969-09-03",
                    "fiscalYearEndCloseDate": "12/31",
                    "submissionDate": "2021-03-03",
                },
                "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
                "congressionalDistrict": "00",
                "generalInformation": {
                    "agencyBusinessPurposeCode": null,
                    "agencyBusinessPurposeDesc": null,
                    "entityStructureCode": "8H",
                    "entityStructureDesc": "Corporate Entity (Tax Exempt)",
                    "entityTypeCode": "F",
                    "entityTypeDesc": "Business or Organization",
                    "profitStructureCode": "A8",
                    "profitStructureDesc": "Non-Profit Organization",
                    "organizationStructureCode": null,
                    "organizationStructureDesc": null,
                    "stateOfIncorporationCode": "FL",
                    "stateOfIncorporationDesc": "FLORIDA",
                    "countryOfIncorporationCode": "USA",
                    "countryOfIncorporationDesc": "UNITED STATES",
                    "companySecurityLevelCode": null,
                    "companySecurityLevelDesc": null,
                    "highestEmployeeSecurityLevelCode": null,
                    "highestEmployeeSecurityLevelDesc": null
                },
                "businessTypes": {
                    "businessTypeList": [
                        {
                            "businessTypeCode": "A8",
                            "businessTypeDesc": "Non-Profit Organization"
                        },
                        {
                            "businessTypeCode": "F",
                            "businessTypeDesc": "Business or Organization"
                        }
                    ],
                    "sbaBusinessTypeList": [
                        {
                            "sbaBusinessTypeCode": null,
                            "sbaBusinessTypeDesc": null,
                            "certificationEntryDate": null,
                            "certificationExitDate": null
                        }
                    ]
                },
                "financialInformation": {
                    "creditCardUsage": "N",
                    "debtSubjectToOffset": "N",
                    
                },
                
            }
        }
    ],
</pre>
</code>
</p>
</details>

### Example 5:  Get a CSV file of Active Entity records.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&registrationStatus=A<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&registrationStatus=A<br>
<br>
</details>

<details>
<summary>Response</summary>
Click to view CSV Response for one record <a href="v1/entity-sample-csv-1.xlsx">Sample CSV Response</a><br>
</details>

### Example 6: Get a JSON file of all the Entities using the POST request:<br>
<details>
<summary>Request URL</summary>
<b>Production URL:</b>  https://api.sam.gov/entity-information/v2/entities?format=JSON  <br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?format=JSON <br>
<br>
<ul>
<li> Click to view Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM.png">Sample Authorization</a></li>
<li> Click to view Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM.PNG">Sample Request Header</a></li>
</ul>
</details>
<details>
<summary>Response</summary>
<ul>
<li><b>Download link with the token:</b><br> 
Extract File will be available for download with POST url:<br>
https://api.sam.gov/entity-information/v2/download-entities?token=< value > in some time. 
If you have provided an email id, you will get a notification email once file is ready for download. 
Requests for Larger Set of Data may take longer time to process.
</li>

<li><b>Download the file using the token via POST:</b><br> 
https://api.sam.gov/entity-information/v2/download-entities?token=< value >
<ul>
<li>Click to view Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM_Download.png">Sample Authorization</a></li>
<li>Click to view Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM_Download.PNG">Sample Request Header</a></li>
</ul></li>

<li>Once the file is downloaded, save it by renaming it in this format: < filename >.json.gz. </li>
<li>If the downloaded file is of CSV type, then file renaming convention is < filename >.csv.gz. </li>
</ul>
</details>

<p><small><a href="#">Back to top</a></small></p>

## Additional Information
You can view the full details of the differences between the SAM legacy API and SAM.gov API
<br> available here: <a href="LegacySAMvsBetaSAM-EntityManagementAPI.pdf">Variance Document</a><br>

Disclaimer:
**Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**
* This website contains data supplied by third party information suppliers, one of which is D&B. For the purposes of the following limitation on permissible use of D&B data, which includes each entity's DUNS Number and its associated business information, "D&B Open Data" is defined as the following data elements: Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code.
* D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
* Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of "bots" or "spiders", is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
* GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided "as is" without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov) for inquiries and help desk support.
* Reach out to [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov) for access to the test site.

<p><small><a href="#">Back to top</a></small></p>

## Change Log

| Date | Version | Description |
| ------ | --------------- | --------- |
| 06/03/2019 | v0.9 | Base Version |
| 07/03/2019 | v1.0 | * Alpha endpoint for the Sensitive version of the API has been added.<br><br>  * agencyBusinessPurposeCode, agencyBusinessPurposeDesc, bondingLevels, companySecurityLevelCode, companySecurityLevelDesc, highestEmployeeSecurityLevelCode, highestEmployeeSecurityLevelDesc were added to FOUO and Sensitive api's schema. <br><br>  * New Filters agencyBusinessPurposeCode, companySecurityLevelCode and highestEmployeeSecurityLevelCode have been added for FOUO and Sensitive api's. <br><br>  * country and stateOrProvince were updated to countryCode and stateOrProvinceCode across all versions of api.<br><br>  * ediInformationFlag was added across all versions of api.<br><br>  * geographicalAreaServedmetropolitanStatisticalAreaCode, geographicalAreaServedmetropolitanStatisticalAreaName were added across all versions of api instead of geographicalAreaServedMSAName.<br><br>  * certificationEntryDate, certificationExitDate were added to SBA Business Types across all versions of api instead of expirationDate.<br><br>  * updateDate was added as a filter across all versions of api.|
| 08/15/2019 | v1.1 | * Alpha endpoints for public and FOUO API were updated from version 0.9 to version 1.0.<br><br> * Warning message added under Getting Started to inform users of API version changes.<br><br> *Added Beta.SAM.Gov to the page title.|
| 09/25/2019 | v1.2 | Beta endpoints for public and FOUO API were updated from version 0.9 to version 1.0.|
| 11/25/2019 | v1.3 | * Added D&B Disclaimer in the Additional Information section.<br><br> * Updated the specifications to include parameters and fields that will be included in v2 of the API.|
| 12/20/2019 | v1.4 | * Removed Email, Fax,US phone number and non-us phone number from public poc sections for v2. <br><br> * Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.|
| 02/25/2020 | v1.5 | * Added Examples for v2 requests and responses.  <br><br> * Updated Alpha endpoint to meet new API standards.|
| 02/28/2020 | v1.6 | * Updated Beta endpoint to meet new API standards. <br><br> * Removed "COMING SOON" information in Getting Started section.|
| 05/04/2020 | v1.7 | * Added V2 endpoint information.|
| 06/10/2020 | v1.8 | * Added the endpoint, new process and an example for the Sensitive API .|
| 08/17/2020 | v1.9 | * The "Sensitive API Process" subsection under the "Sensitive API Information" section has been updated with additional steps for sending Sensitive requests (sending "Accept" and "Content-Type" parameters).<br><br> * The Sample Request Header screenshots under "Example 13" have been updated to reflect the new parameters as well. Two new codes (406, 415) have been added in the "HTTP Response Codes" section.|
| 10/15/2020 | v2.0 | * Updated the description for the correspondenceFlag field<br><br> * Added the http response code description when providing the entityEFTIndicator parameter without providing the ueiDUNS or ueiSAM prarameter. <br><br> * Updated the description for the entityEFTIndicator parameter. |
| 12/07/2020 | v2.1 | * Updated the Sensitive response documentation to include mpin.<br><br> * Updated the Query String Parameters to include the sbaBusinessTypeCode, sbaBusinessTypeDesc, companySecurityLevelDesc, highestEmployeeSecurityLevelDesc, and agencyBusinessPurposeDesc.<br><br> * Updated the definitions and examples in the Query String Parameters.<br><br> * Updated emailId parameter description.<br><br> * Updated sensitivity parameter description.<br><br> * Corrected zip code related fields in V1 dnbMonitoring and samMonitoring sections.|
| 01/22/2021 | v2.2 | * Added the highlighted changes message under the "Getting Started" section.<br><br> * Updated the repsAndCerts schema for Public, FOUO, and Sensitive.<br><br> * Added note to the noPublicDisplayFlag field in the response.<br><br>  * Added the Beta V2 endpoints. |
| 02/05/2021 | v2.3 | * Added message to includeSections that user can provide "All".<br><br> * Added message about special characters that cannot be used in API request.<br><br> * Updated the exclusionStatusFlag definition. |
| 03/12/2021 | v2.4 | * Added Http Response for invalid IP address.<br><br> * Added note to sensitivity parameter explaining use of POST call.<br><br> * Added note under repsAndCerts section about use with format parameter.<br><br> * Added NOTE under FOUO API Information Expected Results section and Sensitive API Information Sensitive API Process sections mentioning only system account keys can be used to access data.<br><br> * Removed the message stating that this page is not FireFox compliant. | 
| 04/08/2021 | v2.5 | * Updated Contact Us information.<br><br> * Updated pointsOfContact fields information for public api.<br><br> * Updated Application Level Error Messages in HTTP Response Codes section. | 
| 05/12/2021 | v2.6 | * Updated instances of beta.sam.gov to SAM.gov.<br><br> * Removed non-relevant information for Beta api. | 
| 07/16/2021 | v2.7 | * Updated the instructions on sending "Basic Auth" under the "Authorization" header.<br><br> * Added the Type of Connections and Rate Limits table.<br><br> * Updated the Contact Us information.<br><br> * Added example curl requests.<br><br> * Updated the examples. |
| 07/20/2021 | v2.8 | * Added v3 documentation.<br><br> * Updated OpenAPI specification file. |

<p><small><a href="#">Back to top</a></small></p>


