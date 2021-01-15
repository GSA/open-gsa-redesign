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

**IMPORTANT**: There will be a period from early 2021 through the integration of SAM.gov into Beta.SAM.gov where Alpha and Beta functionality of the APIs will not be in sync. During this time, we recommend you primarily test the functionality of the APIs in Alpha. Please pay close attention to the parameter and schema "Description" and "Applicable Version" columns as all differences are noted there. Some of the key differences between Alpha and Beta API functionality are highlighted here:
   * Data completeness (many fields in Beta will display “Currently not available”)
   * Reps and Certs (the Beta version of Reps and Certs section will return no data and an older schema version)
   * Availability and/or functionality of certain parameters


Public and FOUO Entity Details can be accessed from Beta or Alpha via the following version 1 and version 2 endpoints:
   * Beta Version 1: https://api.sam.gov/entity-information/v1/entities?api_key= < value >
   * Beta Version 2: Coming soon
   * Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/entities?api_key= < value >
   * Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/entities?api_key= < value >

Sensitive Entity Details can be accessed from Beta or Alpha via the following end points:

  <div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
       <ul>
       <li style="color: #31708f;">Beta Version 1: https://api.sam.gov/entity-information/v1/entities?</li>
       <li style="color: #31708f;">Beta Version 2: Coming soon</li>
       <li style="color: #31708f;">Alpha Version 1: https://api-alpha.sam.gov/entity-information/v1/entities?</li>
       <li style="color: #31708f;">Alpha Version 2: https://api-alpha.sam.gov/entity-information/v2/entities?</li>
       </ul><br>
       The Sensitive API no longer accepts GET requests. Please refer to the "Sensitive API Process" under "Sensitive API Information" to learn more about the process change.
  </div>

Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page. This page can be accessed here: <a href="https://beta.sam.gov/profile/details" target="_blank">Account Details page on beta.sam.gov</a>
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
<td>Allows Yes, No or All. <br>
    Yes signifies SAM registrants.<br> No signifies non-SAM registrants.<br>
    All signifies both SAM registrants and non-SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
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
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
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
<td>Unique Entity Identifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet available for search).
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
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
<br>Example: physicalAddressCongressionalDistrict=08
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
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Example: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
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
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
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
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
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
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
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
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
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
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
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
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
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
<br>Example: format=csv
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Beta (The following functionality is soon to be deprecated in Beta. Please review the below Alpha functionality for future Beta implementation):
<br>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.
<br><br>Alpha:
<br>Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.
<br>Example: emailId= Yes
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
<td>samExtractCode</td>
<td>string</td>
<td>Registration Status</td>
<td>v1</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v2</td>
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
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
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
<td>Exclusion Status Flag
<br>Description (Debarred)</td>
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
<td>mpin</td>
<td>string</td>
<td>mpin</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag<br>NOTE: This field does not contain any data and has been removed from the API.</td>
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
<td>Country>/td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>Company</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>Highest Level Owner CAGE</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>Immediate Owner CAGE</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>Person Details</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>Point of Contact</td>
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
<td>List</td>
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
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>NAICS Exception</td>
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
<td>List</td>
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
<td>List</td>
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
<td>ID/td>
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
<td>ID/td>
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
<td>v1<br>v2</td>
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
<td>Country>/td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>Company</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>Highest Level Owner CAGE</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>Immediate Owner CAGE</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>Person Details</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>Point of Contact</td>
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
<td>List</td>
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
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>NAICS Exception</td>
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
<td>List</td>
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
<td>List</td>
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
<td>ID/td>
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
<td>ID/td>
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
<td>Country>/td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>Company</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>Highest Level Owner CAGE</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>Immediate Owner CAGE</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>Person Details</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>Point of Contact</td>
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
<td>List</td>
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
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>NAICS Exception</td>
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
<td>List</td>
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
<td>List</td>
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
<td>ID/td>
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
<td>ID/td>
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
<td>grantsCertificationStatus</td>
<td>string</td>
<td>Grants Certification Status</td>
<td>v1<br>v2</td>
</tr>
  
<tr>
<td>grantsCertifyingResponse</td>
<td>string</td>
<td>Grants Certifying Response</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>certifierFirstName</td>
<td>string</td>
<td>Certifier First Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>certifierLastName</td>
<td>string</td>
<td>Certifier Last Name</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>certifierMiddleInitial</td>
<td>string</td>
<td>Certifier Middle Initial</td>
<td>v1<br>v2</td>
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
<td>pdfLinks</td>
<td>string</td>
<td>PDF Links</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>farAndDfarsPDF</td>
<td>string</td>
<td>FAR and DFARS PDF</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>architectEngineeringPDF</td>
<td>string</td>
<td>Architect Engineering PDF</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>financialAssistanceCertificationsPDF</td>
<td>string</td>
<td>Financial Assistance Certifications PDF</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>v1</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v1</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v1</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>v1</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>v1</td>
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
<td>Allows Yes, No or All. <br>
    Yes signifies SAM registrants.<br> No signifies non-SAM registrants.<br>
    All signifies both SAM registrants and non-SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
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
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
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
<td>Unique Entity Identifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet available for search).
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
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
<br>Example: physicalAddressCongressionalDistrict=08
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
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Example: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
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
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
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
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
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
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
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
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
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
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
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
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
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
<br>Example: format=csv
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Beta (The following functionality is soon to be deprecated in Beta. Please review the below Alpha functionality for future Beta implementation):
<br>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.
<br><br>Alpha:
<br>Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.
<br>Example: emailId= Yes
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
<td>companySecurityLevelDesc</td>
<td>Allows text.
<br>Example: companySecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>Allows text.
<br>Example: highestEmployeeSecurityLevelDesc=Government Top Secret</td>
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
<br>Example: ultimateParentUEISAM=RQ56IG5JM6G9</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>Allows text.
<br>Example: agencyBusinessPurposeDesc=Buyer and Seller</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sensitivity</td>
<td>By default your API key determines the sensitivity level of the API response. If you would like to receive a response that is at a sensitivity level lower than your API key you can utilize this parameter.
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
<td>samExtractCode</td>
<td>string</td>
<td>Registration Status</td>
<td>v1</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v2</td>
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
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
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
<td>Exclusion Status Flag
<br>Description (Debarred)</td>
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
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
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
<td>mpin</td>
<td>string</td>
<td>mpin</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag<br>NOTE: This field does not contain any data and has been removed from the API.</td>
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
<td>Country>/td>
</tr>

<tr>
<td>company</td>
<td>string</td>
<td>Company</td>
</tr>

<tr>
<td>highestLevelOwnerCage</td>
<td>string</td>
<td>Highest Level Owner CAGE</td>
</tr>

<tr>
<td>immediateOwnerCage</td>
<td>string</td>
<td>Immediate Owner CAGE</td>
</tr>

<tr>
<td>personDetails</td>
<td>string</td>
<td>Person Details</td>
</tr>

<tr>
<td>pointOfContact</td>
<td>string</td>
<td>Point of Contact</td>
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
<td>List</td>
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
<td>naicsDescription</td>
<td>string</td>
<td>NAICS Description</td>
</tr>

<tr>
<td>sbaSmallBusiness</td>
<td>string</td>
<td>SBA Small Business</td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>NAICS Exception</td>
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
<td>List</td>
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
<td>List</td>
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
<td>ID/td>
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
<td>ID/td>
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
<summary><b>Sensitive API Process</b></summary>
<ul>
<li> All requests must be sent as POST calls using clients like Postman. These requests cannot be sent through browsers.</li>
<li> The System Account User ID and Password must be sent as "Basic Auth" under "Authorization", and the combination needs to be base 64 encoded.</li>
<li> The Sensitive api_key parameter with its value must be sent in the "Headers" as "x-api-key" and not directly in the request URL</li>
<li> "Accept" parameter must be passed in "Headers" with value, "application/json".</li>
<li> "Content-Type" parameter must be passed in "Headers" with value, "application/json".</li>
<li> All the optional search filters can be sent in the request URL or in the "Body".</li> <br><br>
</ul>
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
<td>samRegistered</td>
<td>Allows Yes, No or All. <br>
    Yes signifies SAM registrants.<br> No signifies non-SAM registrants.<br>
    All signifies both SAM registrants and non-SAM registrants.
<br>Example: samRegistered=Yes
<br> NOTE: If this search parameter is not sent in the request, then the API will return only SAM registrants by default. 
</td>
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
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator aka duns4.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiDUNS or ueiSAM.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
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
<td>Unique Entity Identifier SAM - Allow 12 digit value, 
alphanumeric (ueiSAM values not yet available for search).
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>Example: entityStructureCode=2L</td>
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
<br>Example: physicalAddressCongressionalDistrict=08
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
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit code for US zip codes and any digit postal code for non-US postal codes.
<br>Example: physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed.  samExtractCode is in V1 and registrationStatus is in V2. 
</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>Example: businessTypeCode=OY</td>
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
<br>Example: organizationStructureCode=MF</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>Example: organizationStructureDesc=MANUFACTURER OF GOODS</td>
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
<br>Example: countryOfIncorporationDesc=UNITED STATES</td>
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
<td>Allows a 6-digit NAICS Code, "" or !"" values.
<br>Example: naicsLimitedSB=513310</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>Example: pscCode=X1QA</td>
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
<td>Allows 2 digit character code or "any".
<br>Example: servedDisasterStateCode=VA, servedDisasterStateCode=any</td>
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
<td>Allows 3 digit county code.
<br>Example: servedDisasterCountyCode=060</td>
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
<td>Allows 4 digit MSA code.
<br>Example: servedDisasterMSA=1720</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeCode</td>
<td>Allows a two character code or null.
<br>Example: sbaBusinessTypeCode=12</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>sbaBusinessTypeDesc</td>
<td>Allows text.
<br>Example: sbaBusinessTypeDesc=Woman Owned Small Business</td>
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
<br>Example: format=csv
<br>Applicable to non-SAM registrants.</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>emailId</td>
<td>Beta (The following functionality is soon to be deprecated in Beta. Please review the below Alpha functionality for future Beta implementation):
<br>Allows user to get file download links to email. Email Id should be provided in conjunction with format.
<br>Example: emailId=test@gsa.gov
<br>Applicable to non-SAM registrants.
<br><br>Alpha:
<br>Allows user to get file download links sent to the email address associated to the API key used in the request. Email ID must be provided in conjunction with the format parameter.
<br>Example: emailId= Yes
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
<td>companySecurityLevelDesc</td>
<td>Allows text.
<br>Example: companySecurityLevelDesc=Government Top Secret</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelCode</td>
<td>Allows 2 character code .
<br>Example: highestEmployeeSecurityLevelCode=90</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>highestEmployeeSecurityLevelDesc</td>
<td>Allows text.
<br>Example: highestEmployeeSecurityLevelDesc=Government Top Secret</td>
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
<br>Example: ultimateParentUEISAM=RQ56IG5JM6G9</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeCode</td>
<td>Allows text, Determines Agency Business Purpose Code.
<br>Example: agencyBusinessPurposeCode=1</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>agencyBusinessPurposeDesc</td>
<td>Allows text.
<br>Example: agencyBusinessPurposeDesc=Buyer and Seller</td>
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
<td>By default your API key determines the sensitivity level of the API response. If you would like to receive a response that is at a sensitivity level lower than your API key you can utilize this parameter.
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
<td>samExtractCode</td>
<td>string</td>
<td>Registration Status</td>
<td>v1</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
<td>v2</td>
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
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br> Applicable to non-SAM registrants.</td>
<td>v2</td>
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
<td>Exclusion Status Flag
<br>Description (Debarred)</td>
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
<td>monitoringStatus</td>
<td>string</td>
<td>Monitoring Status</td>
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
<td>mpin</td>
<td>string</td>
<td>mpin</td>
<td>v1<br>v2</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag<br>NOTE: This field does not contain any data and has been removed from the API.</td>
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
| 400 | Application Level Error Messages: <br><br>  * You are not authorized to access this functionality. <br><br>  * User does not exist. <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * ueiDUNS can only be 9 digits. <br><br> * ueiDUNS Should Contain Only Numeric value. <br><br> * Invalid Input Parameters. <br><br>  * The parameters: 'includeSections','emailId' are not permitted inside Query Param(q) <br><br>  * A maximum of 100 ueiDUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. <br><br> * The parameter emailId must be provided in conjunction with the parameter format. <br><br> * No api_key was supplied in request body. Please submit with a valid API key. <br><br> * No system account credentials are provided. Please provide credentials via basic authentication. <br><br> * entityEFTIndicator filter must be provided in conjunction with ueiDUNS filter or ueiSAM filter. |
| 406 | Invalid Accept Header. |
| 415 | Invalid Content-Type Header. |

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Example 1: Get all the Entities that are registered for "All Awards & IGT"
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&q=(purposeOfRegistrationCode:Z5 OR purposeOfRegistrationDesc:"All Awards *IGT")<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&q=(purposeOfRegistrationCode:Z5 OR purposeOfRegistrationDesc:"All Awards *IGT")<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 192,
  "entityData": [
    {
      "entityRegistration": {
       "samRegistered": "Yes",
        "ueiSAM": "F7SEZJMNRYN1",
        "ueiDUNS": "116766843",
        "entityEFTIndicator": null,
        "cageCode": "882S5",
        "dodaac": null,
        "legalBusinessName": "SOUTHERN COASTAL SERVICES, LLC",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z5",
        "purposeOfRegistrationDesc": "All Awards & IGT",
        "registrationStatus": "Active",
        "registrationDate": "2019-01-28",
        "lastUpdateDate": "2019-04-28",
        "registrationExpirationDate": "2020-01-28",
        "activationDate": "2019-01-28",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-28",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null,
        "dnbOpenData": "Yes"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
              "legalBusinessName": "Southern Coastal Services, LLC",
              "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
            },
          }
        },
        "federalHierarchy": {
          "source": "Federal",
          "hierarchyDepartmentCode": "7000",
          "hierarchyDepartmentName": "United States Department of Homeland Security",
          "hierarchyAgencyCode": "7008",
          "hierarchyAgencyName": "United States Coast Guard",
          "hierarchyOfficeCode": "70Z00L"
        },
        "entityInformation": {
          "entityURL": "www.corpURL.com",
          "entityDivisionName": "DIVISION NAME",
          "entityDivisionNumber": "21",
          "entityStartDate": "2018-12-12",
          "fiscalYearEndCloseDate": "1212",
          "submissionDate": "Currently Not Available"
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
        "congressionalDistrict": "01",
        "generalInformation": {
          "agencyBusinessPurposeCode": "3",
          "agencyBusinessPurposeDesc": "Buyer and Seller",
          "entityStructureCode": "2A",
          "entityStructureDesc": "U.S. Government Entity",
          "entityTypeCode": "2R",
          "entityTypeDesc": "US Federal Government",
          "profitStructureCode": null,
          "profitStructureDesc": null,
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": null,
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": null,
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "2R",
              "businessTypeDesc": "US Federal Government"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "Y",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "541990",
          "naicsList": [
            {
              "naicsCode": "541990",
              "naicsDescription": "ALL OTHER PROFESSIONAL, SCIENTIFIC, AND TECHNICAL SERVICES",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": "R425",
              "pscDescription": "SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL"
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "YES",
          "bondingFlag": "YES",
          "bondingLevels": [
            {
              "type": "Construction Bonding Level, Per Contract (dollars)",
              "value": "11111"
            },
            {
              "type": "Construction Bonding Level, Aggregate (dollars)",
              "value": "22222"
            },
            {
              "type": "Service Bonding Level, Per Contract (dollars)",
              "value": "33333"
            },
            {
              "type": "Service Bonding Level, Aggregate (dollars)",
              "value": "44444"
            }
          ],
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": "ANY",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "11",
          "averageNumberOfEmployees": "22"
        },
        "sizeMetricDetails": {
          "employeesLocation": "11",
          "receiptsLocation": "22"
        },
        "industrySpecificSizeMetrics": {
          "barrelsCapacity": null,
          "totalAssets": null,
          "megawattHours": null
        },
        "ediInformation": {
          "ediInformationFlag": "Y",
          "vanProvider": "UPDATE",
          "isaQualifier": "11",
          "isaIdentifier": "1234567",
          "functionalGroupIdentifier": "FUNCTION",
          "requestFlag820s": "Y"
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=116766843",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=116766843",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com",
          "addressLine1": "ADDRESS LINE 1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com",
          "addressLine1": "ADDRESS LINE 1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com"
        },
        "accountsPayablePOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com",
          "addressLine1": "ADDRESS LINE 1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "1111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com",
          "addressLine1": "ADDRESS LINE 1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "1111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "salesPOC": {
          "firstName": "A",
          "middleInitial": null,
          "lastName": "B",
          "title": "TITLE",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "test@test.com",
          "addressLine1": "ADDRESS LINE 1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "1111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        }
      }
    }
  ],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&purposeOfRegistrationCode=Z5&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&purposeOfRegistrationCode=Z5&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 2: Get the "entityRegistration" section of all the Entities that are registered for "All Awards" or "Federal Assistance Awards"
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&purposeOfRegistrationCode=[Z1~Z2]&includeSections=entityRegistration <br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&purposeOfRegistrationCode=[Z1~Z2]&includeSections=entityRegistration <br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 555506 ,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "075211119",
        "entityEFTIndicator": null,
        "cageCode": "87AW0",
        "dodaac": null,
        "legalBusinessName": "BRADLEY DEFENSE SOLUTIONS INC",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2019-04-23",
        "lastUpdateDate": "2019-04-24",
        "registrationExpirationDate": "2020-04-23",
        "activationDate": "2019-04-24",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      }
    },
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "081296509",
        "entityEFTIndicator": null,
        "cageCode": "877M1",
        "dodaac": null,
        "legalBusinessName": "AMIRA LEARNING, INC.",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z1",
        "purposeOfRegistrationDesc": "Federal Assistance Awards",
        "registrationStatus": "Active",
        "registrationDate": "2019-04-23",
        "lastUpdateDate": "2019-04-24",
        "registrationExpirationDate": "2020-04-23",
        "activationDate": "2019-04-24",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      }
    }
],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&purposeOfRegistrationCode=%5BZ1%7EZ2%5D&includeSections=entityRegistration&page=0&size=10",
    "nextLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&purposeOfRegistrationCode=%5BZ1%7EZ2%5D&includeSections=entityRegistration&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 3: Get all the Entities that are registered as 'Joint Venture Women' or 'Asian-Pacific'
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 3401,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "557905982",
        "entityEFTIndicator": null,
        "cageCode": "SFFJ7",
        "dodaac": null,
        "legalBusinessName": "BEUT AL WATIYAH GENERAL TRADING AND CONTRACTING COMPANY",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2018-08-28",
        "lastUpdateDate": "2018-09-08",
        "registrationExpirationDate": "2019-08-30",
        "activationDate": "2018-09-04",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "No"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
              "legalBusinessName": "BEUT AL WATIYAH GENERAL TRADING AND CONTRACTING COMPANY",
              "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": “1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
            },
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
          "entityDivisionName": "BEUT AL WATIYAH GENERAL TRADING AND CONTRACTING COMPANY",
          "entityDivisionNumber": "4669",
          "entityStartDate": "1990-10-15",
          "fiscalYearEndCloseDate": "1231",
          "submissionDate": "Currently Not Available"
        },
        "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": “City",
          "stateOrProvinceCode": "XX",
          "zipCode": “11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": “City",
          "stateOrProvinceCode": "XX",
          "zipCode": “11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "congressionalDistrict": null,
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "2K",
          "entityStructureDesc": "Partnership or Limited Liability Partnership",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": "LJ",
          "organizationStructureDesc": "Limited Liability Company",
          "stateOfIncorporationCode": null,
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": null,
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
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
              "businessTypeCode": "8D",
              "businessTypeDesc": "Joint Venture Economically Disadvantaged Women Small Owned Business"
            },
            {
              "businessTypeCode": "A2",
              "businessTypeDesc": "Woman Owned Business"
            },
            {
              "businessTypeCode": "A5",
              "businessTypeDesc": "Veteran Owned Business"
            },
            {
              "businessTypeCode": "FR",
              "businessTypeDesc": "Asian-Pacific American Owned"
            },
            {
              "businessTypeCode": "HK",
              "businessTypeDesc": "Community Development Corporation Owned Firm"
            },
            {
              "businessTypeCode": "LJ",
              "businessTypeDesc": "Limited Liability Company"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "423610",
          "naicsList": [
            {
              "naicsCode": "236115",
              "naicsDescription": "NEW SINGLE-FAMILY HOUSING CONSTRUCTION (EXCEPT FOR-SALE BUILDERS)",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "236116",
              "naicsDescription": "NEW MULTIFAMILY HOUSING CONSTRUCTION (EXCEPT FOR-SALE BUILDERS)",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "236117",
              "naicsDescription": "NEW HOUSING FOR-SALE BUILDERS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "236118",
              "naicsDescription": "RESIDENTIAL REMODELERS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "238210",
              "naicsDescription": "ELECTRICAL CONTRACTORS AND OTHER WIRING INSTALLATION CONTRACTORS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "423610",
              "naicsDescription": "ELECTRICAL APPARATUS AND EQUIPMENT, WIRING SUPPLIES, AND RELATED EQUIPMENT MERCHANT WHOLESALERS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": null,
              "pscDescription": null
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "NO",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": null,
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": null,
        "industrySpecificSizeMetrics": null,
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=557905982",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=557905982",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "JAMIS",
          "middleInitial": null,
          "lastName": "LAKRA",
          "title": "ENTITY ADMINISTRATOR",
          "usPhone": "9999999999",
          "usPhoneExtension": null,
          "nonUSPhone": "9999-9999999",
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "BUILDING",
          "addressLine2": null,
          "city": "ABC",
          "stateOrProvinceCode": null,
          "zipCode": "1111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "JAMIS",
          "middleInitial": null,
          "lastName": "LAKRA",
          "title": "ENTITY ADMINISTRATOR",
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": "9999-9999999",
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "BUILDING",
          "addressLine2": null,
          "city": "ABC",
          "stateOrProvinceCode": "XX",
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "ENTITY ADMINISTRATOR",
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": "9999-9999999",
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    },
],
  "links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 4: Get all the Entities that are registered as A5 and 2X
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&q=(businessTypeCode=A5 AND businessTypeCode=2X) <br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&q=(businessTypeCode=A5 AND businessTypeCode=2X) <br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: FOUO Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 43357,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "561349642",
        "entityEFTIndicator": null,
        "cageCode": "SFUQ6",
        "dodaac": null,
        "legalBusinessName": "AMME ASSOCIACAO MOCAMBICANA MULHER E EDUCAO",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2019-04-23",
        "lastUpdateDate": "2019-04-23",
        "registrationExpirationDate": "2020-04-22",
        "activationDate": "2019-04-23",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null,
        "dnbOpenData": "No"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
              "legalBusinessName": "AMME ASSOCIACAO MOCAMBICANA MULHER E EDUCAO",
             "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": “ABC"
            },
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
          "entityStartDate": "2000-10-10",
          "fiscalYearEndCloseDate": "1010",
          "submissionDate": "Currently Not Available"
        },
       "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": “City",
          "stateOrProvinceCode": "XX",
          "zipCode": “11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": “City",
          "stateOrProvinceCode": "XX",
          "zipCode": “11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "congressionalDistrict": null,
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "8H",
          "entityStructureDesc": "Corporate Entity (Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": null,
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "AGO",
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "05",
              "businessTypeDesc": null
            },
            {
              "businessTypeCode": "2X",
              "businessTypeDesc": "For Profit Organization"
            },
            {
              "businessTypeCode": "A5",
              "businessTypeDesc": "Veteran Owned Business"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "813312",
          "naicsList": [
            {
              "naicsCode": "813312",
              "naicsDescription": "ENVIRONMENT, CONSERVATION AND WILDLIFE ORGANIZATIONS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": "Z2QA",
              "pscDescription": "REPAIR OR ALTERATION OF RESTORATION OF REAL PROPERTY (PUBLIC OR PRIVATE)"
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "YES",
          "bondingFlag": "YES",
          "bondingLevels": [
            {
              "type": "Construction Bonding Level, Per Contract (dollars)",
              "value": "0"
            },
            {
              "type": "Construction Bonding Level, Aggregate (dollars)",
              "value": "0"
            },
            {
              "type": "Service Bonding Level, Per Contract (dollars)",
              "value": "0"
            },
            {
              "type": "Service Bonding Level, Aggregate (dollars)",
              "value": "0"
            }
          ],
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": "ANY",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": {
          "employeesLocation": "11",
          "receiptsLocation": "22"
        },
        "industrySpecificSizeMetrics": {
          "barrelsCapacity": null,
          "totalAssets": null,
          "megawattHours": null
        },
        "ediInformation": {
          "ediInformationFlag": "Y",
          "vanProvider": "test",
          "isaQualifier": "te",
          "isaIdentifier": "test",
          "functionalGroupIdentifier": "test",
          "requestFlag820s": "Y"
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=561349642",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=561349642",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "TESTIG",
          "middleInitial": null,
          "lastName": "TESTING",
          "title": null,
          "usPhone": "3333333333",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "testing@gmail.com",
          "addressLine1": "BUILDING",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "XXX"
        },
        "electronicBusinessPOC": {
          "firstName": "TESTIG",
          "middleInitial": null,
          "lastName": "TESTING",
          "title": null,
          "usPhone": "3333333333",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "testing@gmail.com",
          "addressLine1": "BUILDING",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "TESTING",
          "middleInitial": null,
          "lastName": "TESTING",
          "title": null,
          "usPhone": "3333333333",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "testign@gmail.com"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": "TESTING",
          "middleInitial": null,
          "lastName": "TESTING",
          "title": null,
          "usPhone": "3333333333",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "testign@gmail.com"
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    },
],
"links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&q=%28businessTypeCode%3DA5+AND+businessTypeCode%3D2X%29&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&q=%28businessTypeCode%3DA5+AND+businessTypeCode%3D2X%29&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 5: Get a non-SAM-registered Entity
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&samRegistered=N<br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&samRegistered=N<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
Note: Response for one record is provided as an example <br>
<p>
<code>
<pre>
{
  "totalRecords": 100,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "No",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "111111111",
        "cageCode": "SFUQ6",
        "legalBusinessName": "AMME ASSOCIACAO MOCAMBICANA MULHER E EDUCAO",
        "registrationExpirationDate": "2020-04-22",
        "activationDate": "2019-04-23",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "dnbOpenData": "No"
      },
      "coreData": {
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
        "congressionalDistrict": null,
],
"links": {
    "selfLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&samRegistered=N&page=0&size=10",
    "nextLink": "https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&samRegistered=N&page=1&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 6: Get an Entity with no hierarchy
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=075211119<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=075211119<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "075211119",
        "entityEFTIndicator": null,
        "cageCode": "87AW0",
        "dodaac": null,
        "legalBusinessName": "BRADLEY DEFENSE SOLUTIONS INC",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2019-04-23",
        "lastUpdateDate": "2019-04-24",
        "expirationDate": "2020-04-23",
        "activationDate": "2019-04-24",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS":null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
              "legalBusinessName": "BRADLEY DEFENSE SOLUTIONS INC",
              "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
            },
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
          "entityURL": "www.updatingURL.com",
          "entityDivisionName": "SECOND UPDATE",
          "entityDivisionNumber": "31",
          "entityStartDate": "2018-05-01",
          "fiscalYearEndCloseDate": "0501",
          "submissionDate": "Currently Not Available"
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
        "congressionalDistrict": "02",
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "2L",
          "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": "NY",
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "USA",
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "27",
              "businessTypeDesc": "Self Certified Small Disadvantaged Business"
            },
            {
              "businessTypeCode": "2X",
              "businessTypeDesc": "For Profit Organization"
            },
            {
              "businessTypeCode": "JX",
              "businessTypeDesc": null
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "Y",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "541310",
          "naicsList": [
            {
              "naicsCode": "541310",
              "naicsDescription": "ARCHITECTURAL SERVICES",
              "sbaSmallBusiness": "Y",
              "naicsException": null
            },
            {
              "naicsCode": "541320",
              "naicsDescription": "LANDSCAPE ARCHITECTURAL SERVICES",
              "sbaSmallBusiness": "Y",
              "naicsException": null
            },
            {
              "naicsCode": "541330",
              "naicsDescription": "ENGINEERING SERVICES",
              "sbaSmallBusiness": "E",
              "naicsException": "YYYY"
            },
            {
              "naicsCode": "541360",
              "naicsDescription": "GEOPHYSICAL SURVEYING AND MAPPING SERVICES",
              "sbaSmallBusiness": "Y",
              "naicsException": null
            },
            {
              "naicsCode": "541370",
              "naicsDescription": "SURVEYING AND MAPPING (EXCEPT GEOPHYSICAL) SERVICES",
              "sbaSmallBusiness": "Y",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": "1337",
              "pscDescription": "GUIDED MISSILE AND SPACE VEHICLE EXPLOSIVE PROPULSION UNITS, SOLID FUEL; AND COMPONENTS"
            },
            {
              "pscCode": "4710",
              "pscDescription": "PIPE, TUBE AND RIGID TUBING"
            },
            {
              "pscCode": "9915",
              "pscDescription": "COLLECTORS' AND/OR HISTORICAL ITEMS"
            },
            {
              "pscCode": "R425",
              "pscDescription": "SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL"
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "YES",
          "bondingFlag": "YES",
          "bondingLevels": [
            {
              "type": "Construction Bonding Level, Per Contract (dollars)",
              "value": "1111"
            },
            {
              "type": "Construction Bonding Level, Aggregate (dollars)",
              "value": "2222"
            },
            {
              "type": "Service Bonding Level, Per Contract (dollars)",
              "value": "3333"
            },
            {
              "type": "Service Bonding Level, Aggregate (dollars)",
              "value": "44444"
            }
          ],
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": "ANY",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "22222"
        },
        "sizeMetricDetails": {
          "employeesLocation": "1111",
          "receiptsLocation": "2222"
        },
        "industrySpecificSizeMetrics": {
          "barrelsCapacity": null,
          "totalAssets": null,
          "megawattHours": null
        },
        "ediInformation": {
          "ediInformationFlag": "Y",
          "vanProvider": "PROVIDER",
          "isaQualifier": "IS",
          "isaIdentifier": "ISAIdentifier01",
          "functionalGroupIdentifier": "FUNCTIONAL",
          "requestFlag820s": "Y"
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=075211119",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=075211119",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": null,
          "usPhone": "1111111111",
          "usPhoneExtension": "222",
          "nonUSPhone": null,
          "fax": null,
          "email": "EMAIL",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": null,
          "usPhone": "1111111111",
          "usPhoneExtension": "222",
          "nonUSPhone": null,
          "fax": null,
          "email": "EMAIL",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRSTNAME",
          "middleInitial": "A",
          "lastName": "LASTNAME",
          "title": "MR",
          "usPhone": "4432382323",
          "usPhoneExtension": "232",
          "nonUSPhone": "1234-56789101112",
          "fax": "4432382323",
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": "FIRSTNAME",
          "middleInitial": "A",
          "lastName": "LASTNAME",
          "title": "MR",
          "usPhone": "4432382323",
          "usPhoneExtension": "232",
          "nonUSPhone": "1234-56789101112",
          "fax": "4432382323",
          "email": "something@sam.gov"
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=075211119&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 7: Get an Entity with a small hierarchy
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=081343434<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=081343434<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
       "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "081343434",
        "entityEFTIndicator": null,
        "cageCode": "85U37",
        "dodaac": null,
        "legalBusinessName": "21ST CENTURY ONCOLOGY, LLC",
        "dbaName": "DARWICH E BEJANY MD",
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2018-08-28",
        "lastUpdateDate": "2018-09-08",
        "expirationDate": "2019-08-28",
        "activationDate": "2018-09-02",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06",
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
            "phoneNumber": null
          },
          "intermediateParentEntities": [
            {
              "domesticParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "963709998",
                "legalBusinessName": null,
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
                  "stateOrProvinceCode": "XX",
                  "countryCode": "ABC",
                  "zipCode": "11111",
                  "zipCodePlus4": "1111"
                },
                "phoneNumber": null
              },
              "hqParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "361076693",
                "legalBusinessName": null,
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
                  "stateOrProvinceCode": "XX",
                  "countryCode": "ABC",
                  "zipCode": "11111",
                  "zipCodePlus4": "1111"
                },
                "phoneNumber": null
              }
            }
          ],
          "ultimateParentEntity": {
            "ueiSAM": "F7SEZJMNRYN1",
            "ueiDUNS": "963709998",
            "legalBusinessName": null,
            "physicalAddress": {
              "addressLine1": "Address1",
              "addressLine2": null,
              "city": "City",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC",
              "zipCode": "11111",
              "zipCodePlus4": "1111"
            },
            "phoneNumber": null
          },
          "evsMonitoring": {
              "legalBusinessName": "21st Century Oncology, LLC",
              "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address 1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
            },
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
          "entityStartDate": "1984-12-31",
          "fiscalYearEndCloseDate": "1231",
          "submissionDate": "Currently Not Available"
        },
       "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "1111",
          "zipCodePlus4": "11111",
          "countryCode": ABC"
        },
        "mailingAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "1111",
          "zipCodePlus4": "11111",
          "countryCode": ABC"
        },
        "congressionalDistrict": "24",
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "2L",
          "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": "FL",
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "USA",
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "2X",
              "businessTypeDesc": "For Profit Organization"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "Y",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "621111",
          "naicsList": [
            {
              "naicsCode": "621111",
              "naicsDescription": "OFFICES OF PHYSICIANS (EXCEPT MENTAL HEALTH SPECIALISTS)",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": null,
              "pscDescription": null
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "NO",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": null,
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": null,
        "industrySpecificSizeMetrics": null,
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=081343434",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=081343434",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "VP OF OPERATIONS",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "Address1",
          "addressLine2": null,
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "VP OF OPERATIONS",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "Address1",
          "addressLine2": null,
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "VP OF OPERATIONS",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=081343434&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 8: Get an Entity with a large hierarchy
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=439307625<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=439307625<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
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
        "lastUpdateDate": "2018-09-08",
        "expirationDate": "2019-04-04",
        "activationDate": "2018-04-17",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06,
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "No"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
            "phoneNumber": null
          },
          "intermediateParentEntities": [
            {
              "domesticParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "355149347",
                "legalBusinessName": null,
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
                  "stateOrProvinceCode": "XX",
                  "countryCode": "ABC",
                  "zipCode": null,
                  "zipCodePlus4": null
                },
                "phoneNumber": null
              },
              "hqParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "440774594",
                "legalBusinessName": null,
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
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
            "ueiSAM": "F7SEZJMNRYN1",
            "ueiDUNS": "655149347",
            "legalBusinessName": null,
            "physicalAddress": {
              "addressLine1": "Address1",
              "addressLine2": null,
              "city": "City",
              "stateOrProvinceCode": null,
              "countryCode": null,
              "zipCode": null,
              "zipCodePlus4": null
            },
            "phoneNumber": null
          },
          "evsMonitoring": {
              "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE - CNR",
              "dbaName": null,
              "outOfBusinessFlag": null,
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
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
          "entityStartDate": "2018-04-04",
          "fiscalYearEndCloseDate": "1231",
          "submissionDate": "Currently Not Available"
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
        "congressionalDistrict": null,
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
       "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "ZZ",
          "entityStructureDesc": "Other",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2U",
          "profitStructureDesc": "Other Not For Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": null,
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "ITA",
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "2U",
              "businessTypeDesc": "Other Not For Profit Organization"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "541715",
          "naicsList": [
            {
              "naicsCode": "541715",
              "naicsDescription": null,
              "sbaSmallBusiness": "E",
              "naicsException": "NNNN"
            }
          ],
          "pscList": [
            {
              "pscCode": null,
              "pscDescription": null
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "NO",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": null,
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": null,
        "industrySpecificSizeMetrics": null,
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=439307625",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=439307625",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "XX",
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": "1111111111",
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "Address1",
          "addressLine2": null,
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "XX",
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": "1111111111",
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "Address1",
          "addressLine2": null,
          "city": "City",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "XX",
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": "1111111111",
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=439307625&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 9: Get an Entity with an Address Change resulting from EVS Monitoring
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=081270422<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=081270422<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
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
        "lastUpdateDate": "2018-09-08",
        "expirationDate": "2019-07-24",
        "activationDate": "2018-07-26",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06,
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
              "legalBusinessName": "N/A",
              "dbaName": "N/A",
              "outOfBusinessFlag": "N/A",
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "Address1",
              "addressLine2": "Address2",
              "city": "City",
              "zipCode": "11111",
              "zipCodePlus4": "1111",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC"
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
          "entityDivisionName": "IBM GLOBAL BUSINESS SERVICES",
          "entityDivisionNumber": "16",
          "entityStartDate": null,
          "fiscalYearEndCloseDate": "1231",
          "submissionDate": "Currently Not Available"
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
        "congressionalDistrict": "02",
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "2L",
          "entityStructureDesc": "Corporate Entity (Not Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": "NY",
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "USA",
          "countryOfIncorporationDesc": "Currently Not Available",
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
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "334413",
          "naicsList": [
            {
              "naicsCode": "334413",
              "naicsDescription": "SEMICONDUCTOR AND RELATED DEVICE MANUFACTURING",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": null,
              "pscDescription": null
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "NO",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": null,
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": null,
        "industrySpecificSizeMetrics": null,
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=081270422",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=081270422",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=081270422&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 10: Get an Entity with a Name Change resulting from EVS Monitoring
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=080192883<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=080192883<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "080192883",
        "entityEFTIndicator": null,
        "cageCode": "7X7G0",
        "dodaac": null,
        "legalBusinessName": "IBM SOUTHEAST EMPLOYEES' CREDIT UNION",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z1",
        "purposeOfRegistrationDesc": "Federal Assistance Awards",
        "registrationStatus": "Active",
        "registrationDate": "2017-07-27",
        "lastUpdateDate": "2019-04-22",
        "expirationDate": "2019-06-25",
        "activationDate": "2018-06-25",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06,
        "noPublicDisplayFlag": "NPDY",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "No"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
            "phoneNumber": null
          },
          "intermediateParentEntities": [
            {
              "domesticParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "080192883",
                "legalBusinessName": "IBM SOUTHEAST EMPLOYEES' CREDIT UNION",
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
                  "stateOrProvinceCode": "XX",
                  "countryCode": "ABC",
                  "zipCode": "11111",
                  "zipCodePlus4": "1111"
                },
                "phoneNumber": null
              },
              "hqParent": {
                "ueiSAM": "F7SEZJMNRYN1",
                "ueiDUNS": "080192883",
                "legalBusinessName": "IBM SOUTHEAST EMPLOYEES' CREDIT UNION",
                "physicalAddress": {
                  "addressLine1": "Address1",
                  "addressLine2": null,
                  "city": "City",
                  "stateOrProvinceCode": "XX",
                  "countryCode": "ABC",
                  "zipCode": "11111",
                  "zipCodePlus4": "1111"
                },
                "phoneNumber": null
              }
            }
          ],
          "ultimateParentEntity": {
            "ueiSAM": "F7SEZJMNRYN1",
            "ueiDUNS": "080192883",
            "legalBusinessName": "IBM SOUTHEAST EMPLOYEES' CREDIT UNION",
            "physicalAddress": {
              "addressLine1": "Address1",
              "addressLine2": null,
              "city": "City",
              "stateOrProvinceCode": "XX",
              "countryCode": "ABC",
              "zipCode": "11111",
              "zipCodePlus4": "1111"
            },
            "phoneNumber": null
          },
          "evsMonitoring": {
              "legalBusinessName": "IBM Credit Union for Southeast Employees",
              "dbaName": "N/A",
              "outOfBusinessFlag": "N/A",
              "monitoringStatus": "Y",
              "lastUpdated": "Y",
              "addressLine1": "N/A",
              "addressLine2": "N/A",
              "city": "N/A",
              "zipCode": "N/A",
              "zipCodePlus4": "N/A",
              "stateOrProvinceCode": "N/A",
              "countryCode": "N/A"
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
          "entityURL": "www.ibmsecu.org",
          "entityDivisionName": null,
          "entityDivisionNumber": null,
          "entityStartDate": null,
          "fiscalYearEndCloseDate": "1231",
          "submissionDate": "Currently Not Available"
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
        "congressionalDistrict": "21",
        "generalInformation": {
          "agencyBusinessPurposeCode": null,
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "8H",
          "entityStructureDesc": "Corporate Entity (Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "A8",
          "profitStructureDesc": "Non-Profit Organization",
          "organizationStructureCode": null,
          "organizationStructureDesc": null,
          "stateOfIncorporationCode": "FL",
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "USA",
          "countryOfIncorporationDesc": "Currently Not Available",
          "companySecurityLevelCode": null,
          "companySecurityLevelDesc": "",
          "highestEmployeeSecurityLevelCode": null,
          "highestEmployeeSecurityLevelDesc": ""
        },
        "businessTypes": {
          "businessTypeList": [
            {
              "businessTypeCode": "A8",
              "businessTypeDesc": "Non-Profit Organization"
            }
          ],
          "sbaBusinessTypeList": [
            {
              "sbaBusinessTypeCode": null,
              "sbaBusinessTypeDesc": null,
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "N",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": null,
          "naicsList": [
            {
              "naicsCode": null,
              "naicsDescription": null,
              "sbaSmallBusiness": null,
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": null,
              "pscDescription": null
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "NO",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": null,
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": null,
          "averageNumberOfEmployees": null
        },
        "sizeMetricDetails": null,
        "industrySpecificSizeMetrics": null,
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=080192883",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=080192883",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": "M",
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": "M",
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": null,
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformanceAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": "M",
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=080192883&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 11: Get an Entity with No EVS Monitoring
<details>
<summary>Request URL</summary>
<b>Production URL:</b>   https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&ueiDUNS=079870954<br>
<br>
<b>Alpha URL:</b>  https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiDUNS=079870954<br>
<br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code>
<pre>
{
  "totalRecords": 1,
  "entityData": [
    {
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": " F7SEZJMNRYN1",
        "ueiDUNS": "079870954",
        "entityEFTIndicator": null,
        "cageCode": "7F0U0",
        "dodaac": null,
        "legalBusinessName": "ENTERPRISE ASSURANCE MANAGEMENT",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "registrationDate": "2015-07-10",
        "lastUpdateDate": "2018-09-08",
        "expirationDate": "2019-05-15",
        "activationDate": "2018-07-05",
        "ueiStatus": "Active",
        "ueiExpirationDate": "2022-01-01",
        "ueiCreationDate": "2020-02-06,
        "noPublicDisplayFlag": "F",
        "exclusionStatusFlag": null,
        "exclusionURL": null
        "dnbOpenData": "Yes"
      },
      "coreData": {
        "entityHierarchyInformation": {
          "immediateParentEntity": {
            "ueiSAM": null,
            "ueiDUNS": null,
            "legalBusinessName": null,
            "physicalAddress": null,
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
          "evsMonitoring": 
              "legalBusinessName": "Enterprise Assurance Management",
              "dbaName": "N/A",
              "outOfBusinessFlag": "N/A",
              "monitoringStatus": "N",
              "lastUpdated": "Y",
              "addressLine1": "N/A",
              "addressLine2": "N/A",
              "city": "N/A",
              "zipCode": "N/A",
              "zipCodePlus4": "N/A",
              "stateOrProvinceCode": "N/A",
              "countryCode": "N/A"
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
          "entityStartDate": "2011-06-30",
          "fiscalYearEndCloseDate": "1031",
          "submissionDate": "Currently Not Available"
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
          "agencyBusinessPurposeDesc": "",
          "entityStructureCode": "8H",
          "entityStructureDesc": "Corporate Entity (Tax Exempt)",
          "entityTypeCode": "Currently Not Available",
          "entityTypeDesc": "Currently Not Available",
          "profitStructureCode": "2X",
          "profitStructureDesc": "For Profit Organization",
          "organizationStructureCode": "XS",
          "organizationStructureDesc": "Subchapter S Corporation",
          "stateOfIncorporationCode": "MD",
          "stateOfIncorporationDesc": "Currently Not Available",
          "countryOfIncorporationCode": "USA",
          "countryOfIncorporationDesc": "Currently Not Available",
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
              "businessTypeCode": "HQ",
              "businessTypeDesc": "DOT Certified DBE"
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
              "certificationEntryDate": "Currently Not Available",
              "certificationExitDate": null
            }
          ]
        },
        "financialInformation": {
          "creditCardUsage": "Y",
          "debtSubjectToOffset": null
        }
      },
      "assertions": {
        "goodsAndServices": {
          "primaryNaics": "541519",
          "naicsList": [
            {
              "naicsCode": "423430",
              "naicsDescription": "COMPUTER AND COMPUTER PERIPHERAL EQUIPMENT AND SOFTWARE MERCHANT WHOLESALERS",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "541330",
              "naicsDescription": "ENGINEERING SERVICES",
              "sbaSmallBusiness": "E",
              "naicsException": "NNNN"
            },
            {
              "naicsCode": "541513",
              "naicsDescription": "COMPUTER FACILITIES MANAGEMENT SERVICES",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "541519",
              "naicsDescription": "OTHER COMPUTER RELATED SERVICES",
              "sbaSmallBusiness": "E",
              "naicsException": "NN  "
            },
            {
              "naicsCode": "541990",
              "naicsDescription": "ALL OTHER PROFESSIONAL, SCIENTIFIC, AND TECHNICAL SERVICES",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "561210",
              "naicsDescription": "FACILITIES SUPPORT SERVICES",
              "sbaSmallBusiness": "N",
              "naicsException": null
            },
            {
              "naicsCode": "561990",
              "naicsDescription": "ALL OTHER SUPPORT SERVICES",
              "sbaSmallBusiness": "N",
              "naicsException": null
            }
          ],
          "pscList": [
            {
              "pscCode": "AE31",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (BASIC RESEARCH)"
            },
            {
              "pscCode": "AE32",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (APPLIED RESEARCH/EXPLORATORY DEVELOPMENT)"
            },
            {
              "pscCode": "AE33",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (ADVANCED DEVELOPMENT)"
            },
            {
              "pscCode": "AE34",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (ENGINEERING DEVELOPMENT)"
            },
            {
              "pscCode": "AE35",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (OPERATIONAL SYSTEMS DEVELOPMENT)"
            },
            {
              "pscCode": "AE36",
              "pscDescription": "R&D- ECONOMIC GROWTH: MANUFACTURING TECHNOLOGY (MANAGEMENT/SUPPORT)"
            }
          ]
        },
        "disasterReliefData": {
          "disasterRegistryFlag": "YES",
          "bondingFlag": "NO",
          "bondingLevels": null,
          "geographicalAreaServed": [
            {
              "geographicalAreaServedStateCode": "DC",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            },
            {
              "geographicalAreaServedStateCode": "MD",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            },
            {
              "geographicalAreaServedStateCode": "VA",
              "geographicalAreaServedStateName": "Currently Not Available",
              "geographicalAreaServedCountyCode": null,
              "geographicalAreaServedCountyName": "Currently Not Available",
              "geographicalAreaServedmetropolitanStatisticalAreaCode": null,
              "geographicalAreaServedmetropolitanStatisticalAreaName": "Currently Not Available"
            }
          ]
        },
        "sizeMetrics": {
          "averageAnnualRevenue": "1111",
          "averageNumberOfEmployees": "2222"
        },
        "sizeMetricDetails": {
          "employeesLocation": "1111",
          "receiptsLocation": "2222"
        },
        "industrySpecificSizeMetrics": {
          "barrelsCapacity": null,
          "totalAssets": null,
          "megawattHours": null
        },
        "ediInformation": {
          "ediInformationFlag": "N",
          "vanProvider": null,
          "isaQualifier": null,
          "isaIdentifier": null,
          "functionalGroupIdentifier": null,
          "requestFlag820s": null
        }
      },
      "repsAndCerts": {
        "certifications": {
          "fARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "firstName": "Currently Not Available",
                  "lastName": "Currently Not Available",
                  "hasSizeProtest": "Currently Not Available",
                  "title": "Currently Not Available",
                  "section": "Currently Not Available",
                  "status": "Currently Not Available",
                  "organizationType": "Currently Not Available",
                  "endProductName": "Currently Not Available",
                  "endProductType": "Currently Not Available",
                  "endProductCountry": "Currently Not Available",
                  "placeOfManufacture": "Currently Not Available",
                  "fscCode": "Currently Not Available",
                  "environmentURL": "Currently Not Available",
                  "facilityStreetAddress1": "Currently Not Available",
                  "facilityStreetAddress2": "Currently Not Available",
                  "facilityCity": "Currently Not Available",
                  "facilityPostalCode": "Currently Not Available",
                  "facilityState": "Currently Not Available",
                  "facilityCountry": "Currently Not Available",
                  "facilityOwner": "Currently Not Available",
                  "facilityOwnerStreetAddress1": "Currently Not Available",
                  "facilityOwnerStreetAddress2": "Currently Not Available",
                  "facilityOwnerCity": "Currently Not Available",
                  "facilityOwnerPostalCode": "Currently Not Available",
                  "facilityOwnerState": "Currently Not Available",
                  "facilityOwnerCountry": "Currently Not Available",
                  "immediateOwnerLegalBusinessName": "Currently Not Available",
                  "immediateOwnerCageCode": "Currently Not Available",
                  "highestOwnerLegalBusinessName": "Currently Not Available",
                  "highestOwnerCageCode": "Currently Not Available",
                  "firstPredecessorLegalBusinessName": "Currently Not Available",
                  "firstPredecessorCageCode": "Currently Not Available",
                  "secondPredecessorLegalBusinessName": "Currently Not Available",
                  "secondPredecessorCageCode": "Currently Not Available",
                  "thirdPredecessorLegalBusinessName": "Currently Not Available",
                  "thirdPredecessorCageCode": "Currently Not Available",
                  "primaryNaics": "Currently Not Available",
                  "naicsCode": "Currently Not Available",
                  "sbaSmallBusiness": "Currently Not Available",
                  "smallBusiness": "Currently Not Available",
                  "veteranOwnedSmallBusiness": "Currently Not Available",
                  "serviceDisabledVetOwnedSmallBusiness": "Currently Not Available",
                  "womenOwnedSmallBusinessConcern": "Currently Not Available",
                  "womenOwnedSmallBusiness": "Currently Not Available",
                  "economicallyDisadvWomenOwnedSmallBusiness": "Currently Not Available",
                  "smallDisadvantagedBusinessConcern": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusiness": "Currently Not Available",
                  "sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted": "Currently Not Available",
                  "hubZoneSmallBusinessConcern": "Currently Not Available",
                  "blackAmericanOwned": "Currently Not Available",
                  "hispanicAmericanOwned": "Currently Not Available",
                  "nativeAmericanOwned": "Currently Not Available",
                  "asianPacificAmericanOwned": "Currently Not Available",
                  "subcontinentAsianIndianAmericanOwned": "Currently Not Available",
                  "historicallyBlackCollegeOrUniversity": "Currently Not Available",
                  "minorityInstitution": "Currently Not Available",
                  "linkForFARReportPDF": "https://www.sam.gov/SAMPortal/filedownload?pdfType=1&duns=079870954",
                  "linkForFARReportHTML": "Currently Not Available"
                }
              ]
            }
          ],
          "dFARResponses": [
            {
              "listOfProvisions": [
                {
                  "provisionId": "Currently Not Available"
                }
              ],
              "listOfAnswers": [
                {
                  "answerType": "Currently Not Available",
                  "answerId": "Currently Not Available",
                  "answerText": "Currently Not Available",
                  "businessObjectType": "Currently Not Available",
                  "businessObjectId": "Currently Not Available",
                  "section": "Currently Not Available",
                  "foreignGovernmentOwnershipFirstName": "Currently Not Available",
                  "foreignGovernmentOwnershipMiddleInitial": "Currently Not Available",
                  "foreignGovernmentOwnershipLastName": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneNum": "Currently Not Available",
                  "foreignGovernmentOwnershipPhoneExt": "Currently Not Available",
                  "foreignGovernmentOwnershipInternationalNum": "Currently Not Available",
                  "foreignGovernmentControlCountry": "Currently Not Available",
                  "foreignEndProductName": "Currently Not Available",
                  "foreignEndProductCountry": "Currently Not Available",
                  "linkForDFARSReportPDF": "https://www.sam.gov/SAM/filedownload?pdfType=2&duns=079870954",
                  "linkForDFARSReportHTML": "Currently Not Available"
                }
              ]
            }
          ]
        },
        "qualifications": {
          "architectEngineerResponses": {
            "listOfProvisions": [
              {
                "provisionId": "Currently Not Available"
              }
            ],
            "listOfAnswers": [
              {
                "answerType": "Currently Not Available",
                "answerId": "Currently Not Available",
                "answerText": "Currently Not Available",
                "businessObjectType": "Currently Not Available",
                "businessObjectId": "Currently Not Available",
                "firstName": "Currently Not Available",
                "middleInitial": "Currently Not Available",
                "lastName": "Currently Not Available",
                "title": "Currently Not Available",
                "companyName": "Currently Not Available",
                "companyEstablishedYear": "Currently Not Available",
                "companyDUNS": "Currently Not Available",
                "companyIsReference": "Currently Not Available",
                "firmNumOfEmployees": "Currently Not Available",
                "branchNumOfEmployees": "Currently Not Available",
                "experienceCode": "Currently Not Available",
                "annualAvgRevenueCode": "Currently Not Available",
                "federalRevenueCode": "Currently Not Available",
                "nonFedRevenueCode": "Currently Not Available",
                "totalRevenueCode": "Currently Not Available",
                "qualificationURLPDF": "Currently Not Available",
                "qualificationURLHTML": "Currently Not Available"
              }
            ]
          }
        },
        "financialAssistanceCertifications": {
          "financialAssistanceResponse": "Currently Not Available"
        }
      },
      "pointsOfContact": {
        "governmentBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "electronicBusinessPOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": null,
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "governmentBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "electronicBusinessAlternatePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "pastPerformancePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": "ADDRESS2",
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "pastPerformanceAlternatePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov",
          "addressLine1": "ADDRESS1",
          "addressLine2": "ADDRESS2",
          "city": "CITY",
          "stateOrProvinceCode": "XX",
          "zipCode": "11111",
          "zipCodePlus4": "1111",
          "countryCode": "ABC"
        },
        "partyPerformingCertificationPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "soleProprietorshipPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "accountsReceivablePOC": {
          "firstName": "FIRST",
          "middleInitial": null,
          "lastName": "LAST",
          "title": "TITLE",
          "usPhone": "1111111111",
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": "something@sam.gov"
        },
        "accountsPayablePOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "ediPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null
        },
        "eliminationsPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        },
        "salesPOC": {
          "firstName": null,
          "middleInitial": null,
          "lastName": null,
          "title": null,
          "usPhone": null,
          "usPhoneExtension": null,
          "nonUSPhone": null,
          "fax": null,
          "email": null,
          "addressLine1": null,
          "addressLine2": null,
          "city": null,
          "stateOrProvinceCode": null,
          "zipCode": null,
          "zipCodePlus4": null,
          "countryCode": null
        }
      }
    }
  ],
  "links": {
    "selfLink": " https://api.sam.gov/entity-information/v2/entities?api_key=REPLACE_WITH_API_KEY&ueiDUNS=079870954&page=0&size=10"
  }
}
</pre>
</code>
</p>
</details>

### Example 12:  Get a CSV file of active Entity records
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key>&registrationStatus=A&dbaName=!""&cagecode=A*&q="GEOPHYSICAL SURVEYING AND MAPPING SERVICES"&format=CSV <br>
<br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key>&registrationStatus=A&dbaName=!""&cagecode=A*&q="GEOPHYSICAL SURVEYING AND MAPPING SERVICES"&format=CSV <br>
<br>
</details>

<details>
<summary>Response</summary>
Click to view CSV Response for one record <a href="v1/entity-sample-csv.xlsx">Sample CSV Response</a><br>
</details>


### Example 13: Get a JSON file of all the Entities using the POST request:<br>
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
| 01/15/2021 | v2.2 | * Added the highlighted changes message under the "Getting Started" section. |

<p><small><a href="#">Back to top</a></small></p>
