---
title: Beta.SAM.Gov Entity Management  API
banner-heading: Beta.SAM.Gov Entity Management API
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

This content is currently not Firefox compliant.  Please access via Chrome or Internet Explorer.
## Overview
The Entity Management API will allow users to request Public Entity Information based on various optional request parameters. 


**Key Features of the Entity Management API:**

* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.

**Additional Features of the Entity Management API:** It can serve as an Extract API with the addition of "format" parameter in the request. Following are the key features of the Entity Management Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the user emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Public Entity Details can be accessed from Beta or Alpha via the following end points:
   * Beta: https://api.sam.gov/prod/entity-information/v1/api/entities?api_key= < value >
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-information/v1/api/entities?api_key= < value >

FOUO Entity Details can be accessed from Beta or Alpha via the following end points:
   * Beta: https://api.sam.gov/prod/entity-information/v1/api/entities?api_key= < value > 
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-information/v1/api/entities?api_key= < value >

Sensitive Entity Details  can be accessed from Beta or Alpha via the following end points:
   * Beta: Coming soon
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-information/v1/api/entities?api_key= < value >  

Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page. This page can be accessed here: <a href="https://beta.sam.gov/profile/details" target="_blank">Account Details page on beta.sam.gov</a>
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

Generating a System Account API Key:
* Users registered with a non-government email address and associated with an entity OR users registered with a government email address may request a system account for public data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Go to System Accounts” from the widget and fill out the required sections.
* The requested system account will then need to be approved.  After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select 'Go to System Accounts' again in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key.
* The user must enter their password again to retrieve the key.
* NOTE:  To obtain access to the FOUO/Sensitive Entity API data with a system account the user must be registered with a government email address.

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
<td>samRegistered</td>
<td>Allows Y or N or ALL.
<br>Example: samRegistered=Y
<br> NOTE:  If not used the API will return SAM registrants only by default.
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate <br>-- registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>Example: physicalAddressCongressionalDistrict=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrState=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>Example: physicalAddressZipPostalCode=02201
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>Example: samExtractCode=A</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=Limited Liability Company</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=United States Of America</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=0989</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>Example: servedDisasterStateCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows text.
<br>Example: servedDisasterCountyCode=12334</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>Example: servedDisasterMSA=86800730</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>Example: includeSections=entityRegistration,coreData
<br>Applicable to non-SAM registrants but only the sections
 entityRegistration and coreData are applicable.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>Example: format=csv<
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
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
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br> May be applicable to non-SAM registrants</td>
<td>v1<br>v2</td>
</tr>


<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Description</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
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
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
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
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>hasSizeProtest</td>
<td>string</td>
<td>Has Size Protest</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>organizationType</td>
<td>string</td>
<td>Organization Type</td>
</tr>

<tr>
<td>endProductName</td>
<td>string</td>
<td>End Product Name</td>
</tr>

<tr>
<td>endProductType</td>
<td>string</td>
<td>End Product Type</td>
</tr>

<tr>
<td>endProductCountry</td>
<td>string</td>
<td>End Product Country</td>
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
<td>environmentURL</td>
<td>string</td>
<td>Environment URL</td>
</tr>

<tr>
<td>facilityStreetAddress1</td>
<td>string</td>
<td>Facility Street Address1</td>
</tr>

<tr>
<td>facilityStreetAddress2</td>
<td>string</td>
<td>Facility Street Address2</td>
</tr>

<tr>
<td>facilityCity</td>
<td>string</td>
<td>Facility City</td>
</tr>

<tr>
<td>facilityPostalCode</td>
<td>string</td>
<td>Facility Postal Code</td>
</tr>

<tr>
<td>facilityState</td>
<td>string</td>
<td>Facility State</td>
</tr>

<tr>
<td>facilityCountry</td>
<td>string</td>
<td>Facility Country</td>
</tr>

<tr>
<td>facilityOwner</td>
<td>string</td>
<td>Facility Owner</td>
</tr>


<tr>
<td>facilityOwner<br>StreetAddress1</td>
<td>string</td>
<td>Facility Owner <br>Street Address1</td>
</tr>

<tr>
<td>facilityOwner<br>StreetAddress2</td>
<td>string</td>
<td>Facility Owner<br> Street Address2</td>
</tr>

<tr>
<td>facilityOwnerCity</td>
<td>string</td>
<td>Facility Owner City</td>
</tr>

<tr>
<td>facilityOwnerPostalCode</td>
<td>string</td>
<td>Facility Owner Postal Code</td>
</tr>

<tr>
<td>facilityOwnerState</td>
<td>string</td>
<td>Facility Owner State</td>
</tr>

<tr>
<td>facilityOwnerCountry</td>
<td>string</td>
<td>Facility Owner Country</td>
</tr>

<tr>
<td>immediateOwner<br>LegalBusinessName</td>
<td>string</td>
<td>Immediate Owner <br>Legal Business Name</td>
</tr> 

<tr>
<td>immediateOwnerCageCode</td>
<td>string</td>
<td>Immediate Owner Cage Code</td>
</tr>

<tr>
<td>highestOwnerLegalBusinessName</td>
<td>string</td>
<td>Highest Owner Legal Business Name</td>
</tr>

<tr>
<td>highestOwnerCageCode</td>
<td>string</td>
<td>Highest Owner Cage Code</td>
</tr> 

<tr>
<td>firstPredecessor<br>LegalBusinessName</td>
<td>string</td>
<td>First Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>secondPredecessorCageCode</td>
<td>string</td>
<td>Second Predecessor Cage Code</td>
</tr>

<tr>
<td>thirdPredecessorLegal<br>BusinessName</td>
<td>string</td>
<td>Third Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>thirdPredecessorCageCode</td>
<td>string</td>
<td>Third Predecessor Cage Code</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary Naics</td>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>Naics Code</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>smallBusiness</td>
<td>string</td>
<td>Small Business</td>
</tr>

<tr>
<td>veteranOwnedSmallBusiness</td>
<td>string</td>
<td>Veteran Owned Small Business</td>
</tr>

<tr>
<td>serviceDisabledVet<br>OwnedSmallBusiness</td>
<td>string</td>
<td>Service Disabled Veteran <br>Owned Small Business</td>
</tr>

<tr>
<td>womenOwned<br>SmallBusinessConcern</td>
<td>string</td>
<td>Women Owned Small <br>Business Concern</td>
</tr>

<tr>
<td>womenOwnedSmallBusiness</td>
<td>string</td>
<td>Women Owned Small Business</td>
</tr>

<tr>
<td>economicallyDisadv<br>WomenOwnedSmallBusiness</td>
<td>string</td>
<td>Economically Disadvantage <br>Women Owned Small Business</td>
</tr>

<tr>
<td>sbaCertifiedSmall<br>BusinessDisadvBusiness</td>
<td>string</td>
<td>SBA Certified Small <br>Business Disadvantage Business</td>
</tr>

<tr>
<td>sbaCertifiedSmallBusinessDisadv<br>BusinessNotSubmitted</td>
<td>string</td>
<td>SBA Certified Small Business Disadvantage<br> Business Not Submitted</td>
</tr>

<tr>
<td>hubZoneSmall<br>BusinessConcern</td>
<td>string</td>
<td>Hub Zone Small <br>Business Concern</td>
</tr>

<tr>
<td>blackAmericanOwned</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmericanOwned</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmericanOwned</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmericanOwned</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmericanOwned</td>
<td>string</td>
<td>Sub Continent <br>Asian Indian American</td>
</tr>

<tr>
<td>historicallyBlack<br>CollegeOrUniversity</td>
<td>string</td>
<td>Historically Black <br>College Or University</td>
</tr>

<tr>
<td>minorityInstitution</td>
<td>string</td>
<td>Minority Institution</td>
</tr>

<tr>
<td>linkForFARReportPDF</td>
<td>string</td>
<td>Link For FAR Report PDF</td>
</tr>

<tr>
<td>linkForFARReportHTML</td>
<td>string</td>
<td>Link For FAR Report HTML</td>
</tr>


</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>dFARResponses can contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>List of Provisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>foreignGovernment<br>
OwnershipFirstName</td>
<td>string</td>
<td>Foreign Government Ownership <br>
First Name</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipMiddleInitial</td>
<td>string</td>
<td>Foreign Government Ownership 
<br>Middle Initial</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government 
<br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government <br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Number</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneExt</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Extension</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipInternationalNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership International Number</td>
</tr>

<tr>
<td>foreignGovernment<br>ControlCountry</td>
<td>string</td>
<td>Foreign Government <br>Control Country</td>
</tr>

<tr>
<td>foreignEndProductName</td>
<td>string</td>
<td>Foreign End Product Name</td>
</tr>

<tr>
<td>foreignEndProductCountry</td>
<td>string</td>
<td>Foreign End Product Country</td>
</tr>

<tr>
<td>linkForDFARSReportPDF</td>
<td>string</td>
<td>Link For DFARS Report PDF</td>
</tr>

<tr>
<td>linkForDFARSReportHTML</td>
<td>string</td>
<td>Link For DFARS Report HTML</td>
</tr>

</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>List</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
</tr>
<tr>
<td>answerId</td>
<td>string</td>
<td>Answer Id</td>
</tr>
<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>
<tr>
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>
<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object Id</td>
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
<td>companyName</td>
<td>string</td>
<td>Company Name</td>
</tr>
<tr>
<td>companyEstablishedYear</td>
<td>string</td>
<td>Company Established Year</td>
</tr>
<tr>
<td>companyDUNS</td>
<td>string</td>
<td>Company DUNS</td>
</tr>
<tr>
<td>companyIsReference</td>
<td>string</td>
<td>Company Is Reference</td>
</tr>
<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Firm</td>
</tr>
<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Branch</td>
</tr>
<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>
<tr>
<td>annualAvgRevenueCode	</td>
<td>string</td>
<td>Annual Average Revenue Code</td>
</tr>
<tr>
<td>federalRevenueCode</td>
<td>string</td>	
<td>Federal Revenue Code</td>
</tr>
<tr>
<td>nonFedRevenueCode</td>	
<td>string</td>	
<td>Non-Federal Revenue Code</td>
</tr>
<tr>
<td>totalRevenueCode	</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>
<tr>
<td>qualificationURLPDF</td>
<td>string</td>
<td>Qualification URL PDF</td>
</tr>
<tr>
<td>qualificationURLHTML</td>
<td>string</td>
<td>Qualification URL HTML</td>
</tr>
</table>
</details>
</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>financialAssistanceResponse</td>
<td>string</td>
<td>Financial Assistance Response</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>samRegistered</td>
<td>Allows Y or N or ALL.
<br>Example: samRegistered=Y
<br> NOTE:  If not used the API will return SAM registrants only by default.
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate <br>-- registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>Example: physicalAddressCongressionalDistrict=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrState=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>Example: physicalAddressZipPostalCode=02201
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>Example: samExtractCode=A</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=Limited Liability Company</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=United States Of America</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=0989</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>Example: servedDisasterStateCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows text.
<br>Example: servedDisasterCountyCode=12334</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>Example: servedDisasterMSA=86800730</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>Example: includeSections=entityRegistration,coreData
<br>Applicable to non-SAM registrants but only the sections
 entityRegistration and coreData are applicable.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>Example: format=csv<
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>edi</td>
<td>Allows text.
<br>Example: edi=YES/NO</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>Allows 2 character code.
<br>Example: companySecurityLevelCode=92</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ultimateParentUEIDUNS</td>
<td>Allows text.
<br>Example: ultimateParentUEIDUNS=090123451</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ultimateParentUEISAM</td>
<td>Allows text.
<br>Example: ultimateParentUEISAM=090123451</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sensitivity</td>
<td>Allows a text, Determines Sensitivity Level of Data.
<br>Example: sensitivity=public</td>
<td>v1<br>v2</td>
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
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>


<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>
</table>
</details>

<details>
<summary>core Data Section</summary><br>

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
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2</td>
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
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
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
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
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
<td>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
<td>v2</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
<td>v2</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
<td>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v2</td>
</tr>

<tr>
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
<td>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>	
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>string</td>
<td>Agency Business Purpose Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDescription</td>
<td>string</td>
<td>Entity Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of IncorporationCode</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of IncorporationDescription</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>string</td>
<td>Company Security Level Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>string</td>
<td>Company Security Level Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>string</td>
<td>Highest Employee Security Level Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>string</td>
<td>Highest Employee Security Level Description</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>ISA Qualifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>ISA Identifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
<td>v1<br>v2</td>
</tr>
</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
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
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
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
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>hasSizeProtest</td>
<td>string</td>
<td>Has Size Protest</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>organizationType</td>
<td>string</td>
<td>Organization Type</td>
</tr>

<tr>
<td>endProductName</td>
<td>string</td>
<td>End Product Name</td>
</tr>

<tr>
<td>endProductType</td>
<td>string</td>
<td>End Product Type</td>
</tr>

<tr>
<td>endProductCountry</td>
<td>string</td>
<td>End Product Country</td>
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
<td>environmentURL</td>
<td>string</td>
<td>Environment URL</td>
</tr>

<tr>
<td>facilityStreetAddress1</td>
<td>string</td>
<td>Facility Street Address1</td>
</tr>

<tr>
<td>facilityStreetAddress2</td>
<td>string</td>
<td>Facility Street Address2</td>
</tr>

<tr>
<td>facilityCity</td>
<td>string</td>
<td>Facility City</td>
</tr>

<tr>
<td>facilityPostalCode</td>
<td>string</td>
<td>Facility Postal Code</td>
</tr>

<tr>
<td>facilityState</td>
<td>string</td>
<td>Facility State</td>
</tr>

<tr>
<td>facilityCountry</td>
<td>string</td>
<td>Facility Country</td>
</tr>

<tr>
<td>facilityOwner</td>
<td>string</td>
<td>Facility Owner</td>
</tr>


<tr>
<td>facilityOwner<br>StreetAddress1</td>
<td>string</td>
<td>Facility Owner <br>Street Address1</td>
</tr>

<tr>
<td>facilityOwner<br>StreetAddress2</td>
<td>string</td>
<td>Facility Owner<br> Street Address2</td>
</tr>

<tr>
<td>facilityOwnerCity</td>
<td>string</td>
<td>Facility Owner City</td>
</tr>

<tr>
<td>facilityOwnerPostalCode</td>
<td>string</td>
<td>Facility Owner Postal Code</td>
</tr>

<tr>
<td>facilityOwnerState</td>
<td>string</td>
<td>Facility Owner State</td>
</tr>

<tr>
<td>facilityOwnerCountry</td>
<td>string</td>
<td>Facility Owner Country</td>
</tr>

<tr>
<td>immediateOwner<br>LegalBusinessName</td>
<td>string</td>
<td>Immediate Owner <br>Legal Business Name</td>
</tr> 

<tr>
<td>immediateOwnerCageCode</td>
<td>string</td>
<td>Immediate Owner Cage Code</td>
</tr>

<tr>
<td>highestOwnerLegalBusinessName</td>
<td>string</td>
<td>Highest Owner Legal Business Name</td>
</tr>

<tr>
<td>highestOwnerCageCode</td>
<td>string</td>
<td>Highest Owner Cage Code</td>
</tr> 

<tr>
<td>firstPredecessor<br>LegalBusinessName</td>
<td>string</td>
<td>First Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>secondPredecessorCageCode</td>
<td>string</td>
<td>Second Predecessor Cage Code</td>
</tr>

<tr>
<td>thirdPredecessorLegal<br>BusinessName</td>
<td>string</td>
<td>Third Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>thirdPredecessorCageCode</td>
<td>string</td>
<td>Third Predecessor Cage Code</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary Naics</td>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>Naics Code</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>smallBusiness</td>
<td>string</td>
<td>Small Business</td>
</tr>

<tr>
<td>veteranOwnedSmallBusiness</td>
<td>string</td>
<td>Veteran Owned Small Business</td>
</tr>

<tr>
<td>serviceDisabledVet<br>OwnedSmallBusiness</td>
<td>string</td>
<td>Service Disabled Veteran <br>Owned Small Business</td>
</tr>

<tr>
<td>womenOwned<br>SmallBusinessConcern</td>
<td>string</td>
<td>Women Owned Small <br>Business Concern</td>
</tr>

<tr>
<td>womenOwnedSmallBusiness</td>
<td>string</td>
<td>Women Owned Small Business</td>
</tr>

<tr>
<td>economicallyDisadv<br>WomenOwnedSmallBusiness</td>
<td>string</td>
<td>Economically Disadvantage <br>Women Owned Small Business</td>
</tr>

<tr>
<td>sbaCertifiedSmall<br>BusinessDisadvBusiness</td>
<td>string</td>
<td>SBA Certified Small <br>Business Disadvantage Business</td>
</tr>

<tr>
<td>sbaCertifiedSmallBusinessDisadv<br>BusinessNotSubmitted</td>
<td>string</td>
<td>SBA Certified Small Business Disadvantage<br> Business Not Submitted</td>
</tr>

<tr>
<td>hubZoneSmall<br>BusinessConcern</td>
<td>string</td>
<td>Hub Zone Small <br>Business Concern</td>
</tr>

<tr>
<td>blackAmericanOwned</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmericanOwned</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmericanOwned</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmericanOwned</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmericanOwned</td>
<td>string</td>
<td>Sub Continent <br>Asian Indian American</td>
</tr>

<tr>
<td>historicallyBlack<br>CollegeOrUniversity</td>
<td>string</td>
<td>Historically Black <br>College Or University</td>
</tr>

<tr>
<td>minorityInstitution</td>
<td>string</td>
<td>Minority Institution</td>
</tr>

<tr>
<td>linkForFARReportPDF</td>
<td>string</td>
<td>Link For FAR Report PDF</td>
</tr>

<tr>
<td>linkForFARReportHTML</td>
<td>string</td>
<td>Link For FAR Report HTML</td>
</tr>


</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>dFARResponses contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>foreignGovernment<br>
OwnershipFirstName</td>
<td>string</td>
<td>Foreign Government Ownership <br>
First Name</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipMiddleInitial</td>
<td>string</td>
<td>Foreign Government Ownership 
<br>Middle Initial</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government 
<br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government <br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Number</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneExt</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Extension</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipInternationalNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership International Number</td>
</tr>

<tr>
<td>foreignGovernment<br>ControlCountry</td>
<td>string</td>
<td>Foreign Government <br>Control Country</td>
</tr>

<tr>
<td>foreignEndProductName</td>
<td>string</td>
<td>Foreign End Product Name</td>
</tr>

<tr>
<td>foreignEndProductCountry</td>
<td>string</td>
<td>Foreign End Product Country</td>
</tr>

<tr>
<td>linkForDFARSReportPDF</td>
<td>string</td>
<td>Link For DFARS Report PDF</td>
</tr>

<tr>
<td>linkForDFARSReportHTML</td>
<td>string</td>
<td>Link For DFARS Report HTML</td>
</tr>


</table>
</details>
</td>
</tr>



</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>List</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
</tr>
<tr>
<td>answerId</td>
<td>string</td>
<td>Answer Id</td>
</tr>
<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>
<tr>
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>
<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object Id</td>
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
<td>companyName</td>
<td>string</td>
<td>Company Name</td>
</tr>
<tr>
<td>companyEstablishedYear</td>
<td>string</td>
<td>Company Established Year</td>
</tr>
<tr>
<td>companyDUNS</td>
<td>string</td>
<td>Company DUNS</td>
</tr>
<tr>
<td>companyIsReference</td>
<td>string</td>
<td>Company Is Reference</td>
</tr>
<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Firm</td>
</tr>
<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Branch</td>
</tr>
<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>
<tr>
<td>annualAvgRevenueCode	</td>
<td>string</td>
<td>Annual Average Revenue Code</td>
</tr>
<tr>
<td>federalRevenueCode</td>
<td>string</td>	
<td>Federal Revenue Code</td>
</tr>
<tr>
<td>nonFedRevenueCode</td>	
<td>string</td>	
<td>Non-Federal Revenue Code</td>
</tr>
<tr>
<td>totalRevenueCode	</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>
<tr>
<td>qualificationURLPDF</td>
<td>string</td>
<td>Qualification URL PDF</td>
</tr>
<tr>
<td>qualificationURLHTML</td>
<td>string</td>
<td>Qualification URL HTML</td>
</tr>
</table>
</details>
</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>financialAssistanceResponse</td>
<td>string</td>
<td>Financial Assistance Response</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
</tr>
</table>

</details>

### Sensitive API Information

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>samRegistered</td>
<td>Allows Y or N or ALL.
<br>Example: samRegistered=Y
<br> NOTE:  If not used the API will return SAM registrants only by default.
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: cageCode=00000
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values 
can be sent.
<br>Example: ueiDUNS=025114695
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Indentifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet avilable for search).
<br>Example: ueiSAM=025114695AST
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=Z1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null.
<br>Example: entityStructureDesc=Partnership or Limited Liability Partnership</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>Example: exclusionStatusFlag=D</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate <br>-- registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate will be V2.
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>Example: purposeOfRegistrationCode=Z2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>Example: purposeOfRegistrationDesc=All Awards</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationDate=01/01/2019, registrationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>Example: physicalAddressCongressionalDistrict=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrState=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>Example: physicalAddressZipPostalCode=02201
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>Example: samExtractCode=A</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>Example: businessTypeDesc=Woman Owned Business </td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>Example: organizationStructureCode=2L</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=Limited Liability Company</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>Example: stateOfIncorporationCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: stateOfIncorporationDesc=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>Example: countryOfIncorporationCode=USA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>Example: countryOfIncorporationDesc=United States Of America</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>Example: naicsCode=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>Example: naicsDesc=Furniture Stores</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=0989</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>Example: pscDesc=Screws</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>Example: servedDisasterStateCode=VA</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>Example: servedDisasterStateName=Virginia</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows text.
<br>Example: servedDisasterCountyCode=12334</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>Example: servedDisasterCountyName=FAIRFAX</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>Example: servedDisasterMSA=86800730</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>Example: includeSections=entityRegistration,coreData
<br>Applicable to non-SAM registrants but only the sections
 entityRegistration and coreData are applicable.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>Example: format=csv<
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>edi</td>
<td>Allows text.
<br>Example: edi=YES/NO</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>companySecurityLevelCode</td>
<td>Allows 2 character code.
<br>Example: companySecurityLevelCode=92</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ultimateParentUEIDUNS</td>
<td>Allows text.
<br>Example: ultimateParentUEIDUNS=090123451</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ultimateParentUEISAM</td>
<td>Allows text.
<br>Example: ultimateParentUEISAM=090123451</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>routingNumber</td>
<td>Allows a text.
<br>Example: routingNumber=0123456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>bankName</td>
<td>Allows a text.
<br>Example: bankName=TEST</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>accountNumber</td>
<td>Allows a text.
<br>Example: accountNumber=012323456</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>eftWaiverFlag</td>
<td>Allows a text.
<br>Example: eftWaiverFlag=Y</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyLocationCode</td>
<td>Allows a text.
<br>Example: agencyLocationCode=1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>disbursingOfficeSymbol</td>
<td>Allows a text.
<br>Example: disbursingOfficeSymbol=1093</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>taxpayerName</td>
<td>Allows a text.
<br>Example: taxpayerName=test</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>Allows a text.
<br>Example: taxpayerIdentificationNumber=01234</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sensitivity</td>
<td>Allows a text, Determines Sensitivity Level of Data.
<br>Example: sensitivity=public</td>
<td>v1<br>v2</td>
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
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code
<br> May be applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>


<tr>
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name
<br> Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>expirationDate -><br> registrationExpirationDate</td>
<td>string</td>
<td>Registration Expiration Date
<br>NOTE: This parameter is being renamed.  
expirationDate is in V1 and registrationExpirationDate will be V2.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
</tr>
</table>
</details>

<details>
<summary>core Data Section</summary><br>

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
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2</td>
</tr>

</table>
</details>
</td>
</tr>

<tr>
<td>intermediateParentEntities</td>
<td>object</td>
<td>
<details>
<summary>ultimateDomesticParent contains below fields</summary>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>string</td>
<td>Unique Entity Identifier DUNS</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</div>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
<td>v1<br>v2</td>
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
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
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
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
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
<td>v2</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>DBA Name</td>
<td>v2</td>
</tr>

<tr>
<td>outOfBusinessFlag</td>
<td>string</td>
<td>Out Of Business Flag</td>
<td>v2</td>
</tr>

<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Last Updated</td>
<td>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v2</td>
</tr>

<tr>
<td>postalCode</td>
<td>string</td>
<td>Postal Code</td>
<td>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>taxpayerIdentificationType</td>
<td>string</td>
<td>Taxpayer Identification Type</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>string</td>
<td>Taxpayer Identification Number</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Physical Address Line 2 and Mailing Address Line 2.
<br>Only Physical Address Line 2 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City.
<br>Only Physical Address City is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Physical Address State or Province Code and Mailing Address State or Province Code.
<br>Only Physical Address State or Province Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip.
<br>Only Physical Address Zip is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4.
<br>Only Physical Address Zip Plus4 is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Physical Address Country Code and Mailing Address Country Code.
<br>Only Physical Address Country Code is applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>		
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>string</td>
<td>Agency Business Purpose Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization StructureCode</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization StructureDesc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Desc</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Desc</td>
<td>v1<br>v2</td>
</tr>
<tr>
<td>companySecurityLevelCode</td>
<td>string</td>
<td>Company Security Level Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>companySecurityLevelDesc</td>
<td>string</td>
<td>Company Security Level Description</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>string</td>
<td>Highest Employee Security Level Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>string</td>
<td>Highest Employee Security Level Description</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>bondingLevels</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>ISA Qualifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>ISA Identifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
<td>v1<br>v2</td>
</tr>
</table>
</details>

<details>
<summary>repsAndCerts Section</summary><br>
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
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
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
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>First Name</td>
</tr>

<tr>
<td>hasSizeProtest</td>
<td>string</td>
<td>Has Size Protest</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>organizationType</td>
<td>string</td>
<td>Organization Type</td>
</tr>

<tr>
<td>endProductName</td>
<td>string</td>
<td>End Product Name</td>
</tr>

<tr>
<td>endProductType</td>
<td>string</td>
<td>End Product Type</td>
</tr>

<tr>
<td>endProductCountry</td>
<td>string</td>
<td>End Product Country</td>
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
<td>environmentURL</td>
<td>string</td>
<td>Environment URL</td>
</tr>

<tr>
<td>facilityStreetAddress1</td>
<td>string</td>
<td>Facility Street Address1</td>
</tr>

<tr>
<td>facilityStreetAddress2</td>
<td>string</td>
<td>Facility Street Address2</td>
</tr>

<tr>
<td>facilityCity</td>
<td>string</td>
<td>Facility City</td>
</tr>

<tr>
<td>facilityPostalCode</td>
<td>string</td>
<td>Facility Postal Code</td>
</tr>

<tr>
<td>facilityState</td>
<td>string</td>
<td>Facility State</td>
</tr>

<tr>
<td>facilityCountry</td>
<td>string</td>
<td>Facility Country</td>
</tr>

<tr>
<td>facilityOwner</td>
<td>string</td>
<td>Facility Owner</td>
</tr>


<tr>
<td>facilityOwner<br>StreetAddress1</td>
<td>string</td>
<td>Facility Owner <br>Street Address1</td>
</tr>

<tr>
<td>facilityOwner<br>StreetAddress2</td>
<td>string</td>
<td>Facility Owner<br> Street Address2</td>
</tr>

<tr>
<td>facilityOwnerCity</td>
<td>string</td>
<td>Facility Owner City</td>
</tr>

<tr>
<td>facilityOwnerPostalCode</td>
<td>string</td>
<td>Facility Owner Postal Code</td>
</tr>

<tr>
<td>facilityOwnerState</td>
<td>string</td>
<td>Facility Owner State</td>
</tr>

<tr>
<td>facilityOwnerCountry</td>
<td>string</td>
<td>Facility Owner Country</td>
</tr>

<tr>
<td>immediateOwner<br>LegalBusinessName</td>
<td>string</td>
<td>Immediate Owner <br>Legal Business Name</td>
</tr> 

<tr>
<td>immediateOwnerCageCode</td>
<td>string</td>
<td>Immediate Owner Cage Code</td>
</tr>

<tr>
<td>highestOwnerLegalBusinessName</td>
<td>string</td>
<td>Highest Owner Legal Business Name</td>
</tr>

<tr>
<td>highestOwnerCageCode</td>
<td>string</td>
<td>Highest Owner Cage Code</td>
</tr> 

<tr>
<td>firstPredecessor<br>LegalBusinessName</td>
<td>string</td>
<td>First Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>secondPredecessorCageCode</td>
<td>string</td>
<td>Second Predecessor Cage Code</td>
</tr>

<tr>
<td>thirdPredecessorLegal<br>BusinessName</td>
<td>string</td>
<td>Third Predecessor Legal <br>Business Name</td>
</tr>

<tr>
<td>thirdPredecessorCageCode</td>
<td>string</td>
<td>Third Predecessor Cage Code</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary Naics</td>
</tr>

<tr>
<td>naicsCode</td>
<td>string</td>
<td>Naics Code</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>smallBusiness</td>
<td>string</td>
<td>Small Business</td>
</tr>

<tr>
<td>veteranOwnedSmallBusiness</td>
<td>string</td>
<td>Veteran Owned Small Business</td>
</tr>

<tr>
<td>serviceDisabledVet<br>OwnedSmallBusiness</td>
<td>string</td>
<td>Service Disabled Veteran <br>Owned Small Business</td>
</tr>

<tr>
<td>womenOwned<br>SmallBusinessConcern</td>
<td>string</td>
<td>Women Owned Small <br>Business Concern</td>
</tr>

<tr>
<td>womenOwnedSmallBusiness</td>
<td>string</td>
<td>Women Owned Small Business</td>
</tr>

<tr>
<td>economicallyDisadv<br>WomenOwnedSmallBusiness</td>
<td>string</td>
<td>Economically Disadvantage <br>Women Owned Small Business</td>
</tr>

<tr>
<td>sbaCertifiedSmall<br>BusinessDisadvBusiness</td>
<td>string</td>
<td>SBA Certified Small <br>Business Disadvantage Business</td>
</tr>

<tr>
<td>sbaCertifiedSmallBusinessDisadv<br>BusinessNotSubmitted</td>
<td>string</td>
<td>SBA Certified Small Business Disadvantage<br> Business Not Submitted</td>
</tr>

<tr>
<td>hubZoneSmall<br>BusinessConcern</td>
<td>string</td>
<td>Hub Zone Small <br>Business Concern</td>
</tr>

<tr>
<td>blackAmericanOwned</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmericanOwned</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmericanOwned</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmericanOwned</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmericanOwned</td>
<td>string</td>
<td>Sub Continent <br>Asian Indian American</td>
</tr>

<tr>
<td>historicallyBlack<br>CollegeOrUniversity</td>
<td>string</td>
<td>Historically Black <br>College Or University</td>
</tr>

<tr>
<td>minorityInstitution</td>
<td>string</td>
<td>Minority Institution</td>
</tr>

<tr>
<td>linkForFARReportPDF</td>
<td>string</td>
<td>Link For FAR Report PDF</td>
</tr>

<tr>
<td>linkForFARReportHTML</td>
<td>string</td>
<td>Link For FAR Report HTML</td>
</tr>


</table>
</details>
</td>
</tr>

</table>
</details>
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>dFARResponses contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary><br>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
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
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>

<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object ID</td>
</tr>

<tr>
<td>section</td>
<td>string</td>
<td>Section</td>
</tr>

<tr>
<td>foreignGovernment<br>
OwnershipFirstName</td>
<td>string</td>
<td>Foreign Government Ownership <br>
First Name</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipMiddleInitial</td>
<td>string</td>
<td>Foreign Government Ownership 
<br>Middle Initial</td>
</tr>

<tr>
<td>foreignGovernment
<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government 
<br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipLastName</td>
<td>string</td>
<td>Foreign Government <br>Ownership Last Name</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Number</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipPhoneExt</td>
<td>string</td>
<td>Foreign Government <br>Ownership Phone Extension</td>
</tr>

<tr>
<td>foreignGovernment<br>OwnershipInternationalNum</td>
<td>string</td>
<td>Foreign Government <br>Ownership International Number</td>
</tr>

<tr>
<td>foreignGovernment<br>ControlCountry</td>
<td>string</td>
<td>Foreign Government <br>Control Country</td>
</tr>

<tr>
<td>foreignEndProductName</td>
<td>string</td>
<td>Foreign End Product Name</td>
</tr>

<tr>
<td>foreignEndProductCountry</td>
<td>string</td>
<td>Foreign End Product Country</td>
</tr>

<tr>
<td>linkForDFARSReportPDF</td>
<td>string</td>
<td>Link For DFARS Report PDF</td>
</tr>

<tr>
<td>linkForDFARSReportHTML</td>
<td>string</td>
<td>Link For DFARS Report HTML</td>
</tr>


</table>
</details>
</td>
</tr>



</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>List</td>
<td>
<details>
<summary>architectEngineerResponses contains below fields</summary><br>
<table width="100">
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<td>listOfProvisions</td>
<td>list</td>
<td>
<details>
<summary>listOfProvisions contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>provisionId</td>
<td>string</td>
<td>Provision Id</td>
</tr>
</table>
</details>
</td>
<tr>
<td>listOfAnswers</td>
<td>list</td>
<td>
<details>
<summary>listOfAnswers contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>answerType</td>
<td>string</td>
<td>Answer Type</td>
</tr>
<tr>
<td>answerId</td>
<td>string</td>
<td>Answer Id</td>
</tr>
<tr>
<td>answerText</td>
<td>string</td>
<td>Answer Text</td>
</tr>
<tr>
<td>businessObjectType</td>
<td>string</td>
<td>Business Object Type</td>
</tr>
<tr>
<td>businessObjectId</td>
<td>string</td>
<td>Business Object Id</td>
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
<td>companyName</td>
<td>string</td>
<td>Company Name</td>
</tr>
<tr>
<td>companyEstablishedYear</td>
<td>string</td>
<td>Company Established Year</td>
</tr>
<tr>
<td>companyDUNS</td>
<td>string</td>
<td>Company DUNS</td>
</tr>
<tr>
<td>companyIsReference</td>
<td>string</td>
<td>Company Is Reference</td>
</tr>
<tr>
<td>firmNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Firm</td>
</tr>
<tr>
<td>branchNumOfEmployees</td>
<td>string</td>
<td>Number of Employees in the Branch</td>
</tr>
<tr>
<td>experienceCode</td>
<td>string</td>
<td>Experience Code</td>
</tr>
<tr>
<td>annualAvgRevenueCode	</td>
<td>string</td>
<td>Annual Average Revenue Code</td>
</tr>
<tr>
<td>federalRevenueCode</td>
<td>string</td>	
<td>Federal Revenue Code</td>
</tr>
<tr>
<td>nonFedRevenueCode</td>	
<td>string</td>	
<td>Non-Federal Revenue Code</td>
</tr>
<tr>
<td>totalRevenueCode	</td>
<td>string</td>
<td>Total Revenue Code</td>
</tr>
<tr>
<td>qualificationURLPDF</td>
<td>string</td>
<td>Qualification URL PDF</td>
</tr>
<tr>
<td>qualificationURLHTML</td>
<td>string</td>
<td>Qualification URL HTML</td>
</tr>
</table>
</details>
</td>
</tr>
</table>
</details>
</td>
<td>v1<br>v2</td>
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
<td>financialAssistanceResponse</td>
<td>string</td>
<td>Financial Assistance Response</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
<td>v1<br>v2</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v1<br>v2</td>
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
| 400 | Application Level Error Messages: <br><br>  * You are not authorized to access this functionality. <br><br>  * User does not exist. <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * ueiDUNS can only be 9 digits. <br><br> * ueiDUNS Should Contain Only Numeric value. <br><br> * Invalid Input Parameters. <br><br>  * The parameters: 'includeSections','emailId' are not permitted inside Query Param(q) <br><br>  * A maximum of 100 ueiDUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. <br><br> * The parameter emailId must be provided in conjunction with the parameter format. |

<p><small><a href="#">Back to top</a></small></p>

## Explanation of the API using Examples
Functionality of the Entity API has been explained with the following examples:

**User requirement:** 
To get only the entityRegistration, coreData and assertions sections for the Entity records whose entityStructureCode is 2J or 8H, 
physicalAddressCountryCode is USA, countryOfIncorporationCode is USA, registrationDate is from 01/01/2018 to 04/23/2019, servedDisasterStateCode is  
NE or LA or TX, cageCode is not null, dodaac is null, and primaryNaics is 812112 or 484121 or 336411.

**API Request:**
https://api.sam.gov/prod/entity-information/v1/api/entities?api_key=<API Key>&q=((entityStructureCode=2J OR entityStructureCode=8H) 
AND physicalAddressCountryCode=USA AND countryOfIncorporationCode=USA)&registrationDate=[01/01/2018,04/23/2019]&servedDisasterStateCode=[NE~LA~TX]&cageCode=!""
&dodaac=""&primaryNaics=[812112~484121~336411]&includeSections=entityRegistration,coreData,assertions
<br>OR<br>
https://api.sam.gov/prod/entity-information/v1/api/entities?api_key=<API Key>&entityStructureCode=[2J~8H]&physicalAddressCountryCode=USA
&countryOfIncorporationCode=USA&registrationDate=[01/01/2018,04/23/2019]&servedDisasterStateCode=[NE~LA~TX]&cageCode=!""&dodaac=""&primaryNaics=[812112~484121~336411]
&includeSections=entityRegistration,coreData,assertions

**User requirement:**
To get a CSV file of active Entity records that have a DBAN and that cater to GEOPHYSICAL SURVEYING AND MAPPING SERVICES.

**API request:** 
https://api.sam.gov/prod/entity-information/v1/api/entities?api_key=<API Key>&samExtractCode=A&q=”GEOPHYSICAL SURVEYING AND MAPPING SERVICES”&dbaName=!””&format=CSV

<p><small><a href="#">Back to top</a></small></p>

## Additional Information
You can view the full details of the differences between the SAM legacy API and Beta API 
<br> available here: <a href="LegacySAMvsBetaSAM-EntityManagementAPI.pdf">Variance Document</a><br>

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

| Date | Version | Description |
| ------ | --------------- | --------- |
| 06/03/2019 | v0.9 | Base Version |
| 07/03/2019 | v1.0 | * Alpha endpoint for the Sensitive version of the API has been added.<br><br>  * agencyBusinessPurposeCode, agencyBusinessPurposeDesc, bondingLevels, companySecurityLevelCode, companySecurityLevelDesc, highestEmployeeSecurityLevelCode, highestEmployeeSecurityLevelDesc were added to FOUO and Sensitive api's schema. <br><br>  * New Filters agencyBusinessPurposeCode, companySecurityLevelCode and highestEmployeeSecurityLevelCode have been added for FOUO and Sensitive api's. <br><br>  * country and stateOrProvince were updated to countryCode and stateOrProvinceCode across all versions of api.<br><br>  * ediInformationFlag was added across all versions of api.<br><br>  * geographicalAreaServedmetropolitanStatisticalAreaCode, geographicalAreaServedmetropolitanStatisticalAreaName were added across all versions of api instead of geographicalAreaServedMSAName.<br><br>  * certificationEntryDate, certificationExitDate were added to SBA Business Types across all versions of api instead of expirationDate.<br><br>  * updateDate was added as a filter across all versions of api.|
| 08/15/2019 | v1.1 | * Alpha endpoints for public and FOUO API were updated from version 0.9 to version 1.0.<br><br> *Warning message added under Getting Started to inform users of API version changes.<br><br> *Added Beta.SAM.Gov to the page title.|
| 09/25/2019 | v1.2 | Beta endpoints for public and FOUO API were updated from version 0.9 to version 1.0.|

<p><small><a href="#">Back to top</a></small></p>
