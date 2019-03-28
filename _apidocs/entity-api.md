---
title: Entity Management  API
banner-heading: Entity Management API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
The Entity Management API will allow users to request Public Entity Information based on various optional request parameters. 


**Entity Management API:**

* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.

Additional  Features:
Users can accomplish below functionality using format parameter
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Public Entity Details can be accessed from Beta or Alpha via the following end points:
   * Beta: https://api.sam.gov/prod/entity-management?api_key=< value >
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-management?api_key=< value >

FOUO Entity Details can be accessed from Beta or Alpha via the following end points:
   * Beta: https://api.sam.gov/prod/entity-management/fouo?api_key=< value >
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-management/fouo?api_key=< value >

Sensitive Entity Details  can be accessed from Beta or Alpha via the following end points:
   * Beta: https://api.sam.gov/prod/entity-management/sensitive?api_key=< value >
   * Alpha: https://api-alpha.sam.gov/prodlike/entity-management/sensitive?api_key=< value >  

Generating a personal API Key:
* Registered users can request for a public API on 'Account Details' page.
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
* To utilize this API as an extract we have implemented an additional parameter called 'format.'
* To retrieve entity data as a CSV the parameter '&format=csv' must be added to the request.
* To retrieve entity data as a JSON the parameter '&format=json' must be added to the request.
* Requests that contain this 'format' parameter will provide the user with a URL in the response.
* In the response URL the phrase REPLACE_WITH_API_KEY must be deleted and replaced with a valid API key and sent in another request.  If the download is ready this will allow the user to retrieve the file.  If the download is not yet ready they will need to try again in some time to allow time for the file to be prepared.
* The emailId parameter can be included with a valid email address if the user would like to be informed when the file is ready for download.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Public Endpoints Information
<details>
<summary><b>Public Entity Management Endpoint</b></summary><br>

<tr>
<td><b>Endpoint:</b>  https://api.sam.gov/prod/entity-management?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information</td>
</tr><br>

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or Date range.Format: MM/dd/yyyy.
<br>Example: https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&activationDate=02/12/1999</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&cageCode=00000</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: 'https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&dbaName=ALLTEL'</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&debtSubjectToOffset=Y</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&dodaac=025114695</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&ueiDUNS=025114695</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM/td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructureCode=Z1</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructureDesc=Partnership or Limited Liability Partnership</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&exclusionStatusFlag=D</td>
</tr>

<tr>
<td>expirationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&expirationDate=02/12/1999</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&legalBusinessName=ALLTEL</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&primaryNaics=513310</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistrationCode=Z2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistrationDesc=All Awards</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&registrationDate=02/12/1999</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCity=Herndon</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCongressionalDistrict=AR</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCountryCode=USA</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressProvinceOrState=AR</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressZipPostalCode=02201</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&samExtractCode=A</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&businessTypeCode=2L</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&businessTypeDesc=Woman Owned Business </td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureCode=2L</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureDesc=Limited Liability Company</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationCode=VA</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationDesc=Virginia</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationCode=USA</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationDesc=United States Of America</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsCode=513310</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsDesc=Furniture Stores</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsLimitedSB=513310</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscCode=0989</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscDesc=Screws</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateCode=VA</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows Name or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateName=Virginia</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyCode=12334</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyName=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&includeSections=entityRegistration,coreData</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&format=csv</td>
</tr>

<tr>
<td>emailId</td>
<td>Allows user to get file download links to email. Email Id paramter should be provided in conjunction with format.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&format=csv7emailId=xxx@gsa.gov</td>
</tr>

</table>
</details><br>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<details>
<summary>entityRegistration Section</summary>
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
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
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
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
</tr>

<tr>
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
</tr>
</table>
</details>

<details>
<summary>coreData Section</summary><br>
<summary>entityRegistration Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
</tr>
</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Physical Address Country and Mailing Address Country</td>
</tr>

<tr>
<td>congressionalDistrict</td>
<td>string</td>
<td>Congressional District of Physical Address</td>
</tr>
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Description</td>
</tr>


<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Description</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>Business Type List contains these fields</summary>
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
</tr>


<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>SBA Business Type List contains these fields</summary>
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
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

</table>
</details>
</td>
</tr>
</table>

<summary>Financial Information Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
</tr>
</table>
</details>

<details>
<summary>assertions Section</summary><br>
<summary>Goods And Services Sub Section</summary>

<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>NAICS List contains these fields</summary>
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
<td>NAICS Code Whether or not the NAICS Code is indicated as an SBA small business </td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>PSC List contains these fields</summary>
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
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
</tr>
</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
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
<td>State code</td>
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
<td>geographicalAreaServedmetropolitanStatisticalArea</td>
<td>string</td>
<td>Metropolitan Statistical Area name</td>
</tr>
</table>
</details>
</td>
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
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>FAR Responses can contains below fields</summary>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>blackAmerican</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmerican</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmerican</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmerican</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmerican</td>
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
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>DFAR Responses can contains below fields</summary><br>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

</details><br>
</details>



### FOUO Endpoints Information
<details>
<summary><b>FOUO Entity Management Endpoint</b></summary><br>
<tr>
<td><b>Endpoint:</b>  https://api.sam.gov/prod/entity-management/fouo?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information with FOUO data</td>
</tr><br>

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or Date range.Format: MM/dd/yyyy.
<br>Example: https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&activationDate=02/12/1999</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&cageCode=00000</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: 'https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&dbaName=ALLTEL'</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&debtSubjectToOffset=Y</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&dodaac=025114695</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&ueiDUNS=025114695</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>entityStructure</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&entityStructure=Z1</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows a text.
"Partnership or Limited Liability Partnership".
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructureDesc=Partnership or Limited Liability Partnership</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&exclusionStatusFlag=D</td>
</tr>

<tr>
<td>expirationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&expirationDate=02/12/1999</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&legalBusinessName=ALLTEL</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&primaryNaics=513310</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&purposeOfRegistrationCode=Z2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistrationDesc=All Awards</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&registrationDate=02/12/1999</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&physicalAddressCity=Herndon</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&physicalAddressCongressionalDistrict=AR</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&physicalAddressCountryCode=USA</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&physicalAddressProvinceOrState=AR</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&physicalAddressZipPostalCode=02201</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&samExtractCode=A</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureCode=2L</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureDesc=Limited Liability Company</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationCode=VA</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationDesc=Virginia</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationCode=USA</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows Name or null Unites States.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationDesc=United States Of America</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsCode=513310</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsDesc=Furniture Stores</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsLimitedSB=513310</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscCode=0989</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscDesc=Screws</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateCode=VA</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateName=Virginia</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyCode=32324</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows Name or null Virginia.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyName=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&taxpayerIdentificationNumber=XXXXXXXXX</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&includeSections=entityRegistration,coreData</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&format=csv</td>
</tr>
</table>
</details><br>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<details>
<summary>entityRegistration Section</summary>
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
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
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
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>string</td>
<td>Purpose of Registration Code</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>string</td>
<td>Purpose of Registration Description</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
</tr>

<tr>
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
</tr>
</table>
</details>

<details>
<summary>core Data Section</summary><br>
<summary>Entity Hierarchy Information</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>


<tr>
<td>EVSMonitoring</td>
<td>object</td>
<td>
<details>
<summary>DNB Monitoring contains below fields</summary>
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
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
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
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>immediateParentEntity</td>
<td>object</td>
<td>
<details>
<summary>Immediate Parent Entity contains below fields</summary>
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
<td>physicalAddress, mailingAddress Sub Sections </td>
<td>object</td>
<td>
<details>
<summary>PhysicalAddress, mailingAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Physical Address Country and Mailing Address Country</td>
</tr>

<tr>
<td>congressionalDistrict</td>
<td>string</td>
<td>Congressional District of Physical Address</td>
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
</tr>

<tr>
<td>intermediateParentEntites</td>
<td>object</td>
<td>
<details>
<summary>Ultimate Domestic Parent</summary>
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
<td>physicalAddress, mailingAddress Sub Sections </td>
<td>object</td>
<td>
<details>
<summary>PhysicalAddress, mailingAddress contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Physical Address Country and Mailing Address Country</td>
</tr>

<tr>
<td>congressionalDistrict</td>
<td>string</td>
<td>Congressional District of Physical Address</td>
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
</tr>

</table>

<summary>federalHierarchy Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>source</td>
<td>string</td>
<td>Source</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
</tr>
</table>

<summary>tinInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>taxpayerIdentificationType</td>
<td>string</td>
<td>Taxpayer Identification Type</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>string</td>
<td>Taxpayer Identification Number</td>
</tr>
</table>

<summary>entityRegistration Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
</tr>
</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Physical Address Country and Mailing Address Country</td>
</tr>

<tr>
<td>congressionalDistrict</td>
<td>string</td>
<td>Congressional District of Physical Address</td>
</tr>
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
</tr>

<tr>
<td>entityStructureDescription</td>
<td>string</td>
<td>Entity Structure Description</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Description</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Description</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization Structure Code</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization Structure Description</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Description</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of IncorporationCode</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of IncorporationDescription</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>Business Type List contains these fields</summary>
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
</tr>


<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>SBA Business Type List contains these fields</summary>
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
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

</table>
</details>
</td>
</tr>
</table>

<summary>Financial Information Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
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
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>NAICS List contains these fields</summary>
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
<td>NAICS Code Whether or not the NAICS Code is indicated as an SBA small business </td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>PSC List contains these fields</summary>
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
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
</tr>
</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
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
<td>State Name</td>
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
<td>geographicalAreaServedmetropolitanStatisticalArea</td>
<td>string</td>
<td>Metropolitan Statistical Area name</td>
</tr>
</table>
</details>
</td>
</tr>
</table>

<summary>sizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>averageAnnualRevenue</td>
<td>string</td>
<td>Average Annual Revenue</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
</tr>
</table>

<summary>sizeMetricDetails Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>employeesLocation</td>
<td>string</td>
<td>Employees Location</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
</tr>
</table>

<summary>industrySpecificSizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>barrelsCapacity</td>
<td>string</td>
<td>Barrels Capacity</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
</tr>
</table>

<summary>ediInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>Is a Qualifier</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>Is a Identifier</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
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
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>FAR Responses can contains below fields</summary>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>blackAmerican</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmerican</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmerican</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmerican</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmerican</td>
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
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>DFAR Responses can contains below fields</summary><br>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>partyPerformingCertificationPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>soleProprietorshipPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>accountsReceivablePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>accountsPayablePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>ediPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>eliminationsPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>salesPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

</details><br>

</details>


### Sensitive Endpoints Information

<details>
<summary><b>Sentive Entity Management Endpoint</b></summary><br>
<tr>
<td><b>Endpoint:</b>  https://api.sam.gov/prod/entity-management/sensitive?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information with Sensitive data</td>
</tr><br>

<details>
<summary><b>Query String Parameters</b></summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>activationDate</td>
<td>Allows a single Date or Date range.Format: MM/dd/yyyy.
<br>Example: https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&activationDate=02/12/1999</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows exact 5 character value.
<br>Example: https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&cageCode=00000</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: 'https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&dbaName=ALLTEL'</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y or N or null.
<br>Example: https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&debtSubjectToOffset=Y</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&dodaac=025114695</td>
</tr>

<tr>
<td>ueiDUNS</td>
<td>Unique Entity Identifier DUNS -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&ueiDUNS=025114695</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM</td>
</tr>

<tr>
<td>entityStructureCode</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructureCode=Z1</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>Allows Description or null
"Partnership or Limited Liability Partnership".
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructureDesc=Partnership or Limited Liability Partnership</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&exclusionStatusFlag=D</td>
</tr>

<tr>
<td>expirationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&expirationDate=02/12/1999</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&legalBusinessName=ALLTEL</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&primaryNaics=513310</td>
</tr>

<tr>
<td>purposeOfRegistrationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistrationCode=Z2</td>
</tr>

<tr>
<td>purposeOfRegistrationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistrationDesc=All Awards</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&registrationDate=02/12/1999</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCity=Herndon</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCongressionalDistrict=AR</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressCountryCode=USA</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressProvinceOrState=AR</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&physicalAddressZipPostalCode=02201</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&samExtractCode=A</td>
</tr>

<tr>
<td>businessTypeCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&businessTypeCode=2L</td>
</tr>

<tr>
<td>businessTypeDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&businessTypeDesc=Woman Owned Business </td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureCode=2L</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructureDesc=Limited Liability Company</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationCode=VA</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporationDesc=Virginia</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationCode=USA</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporationDesc=United States Of America</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsCode=513310</td>
</tr>

<tr>
<td>naicsDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsDesc=Furniture Stores</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsLimitedSB=513310</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscCode=0989</td>
</tr>

<tr>
<td>pscDesc</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&pscDesc=Screws</td>
</tr>

<tr>
<td>servedDisasterStateCode</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateCode=VA</td>
</tr>

<tr>
<td>servedDisasterStateName</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterStateName=Virginia</td>
</tr>

<tr>
<td>servedDisasterCountyCode</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyCode=763577</td>
</tr>

<tr>
<td>servedDisasterCountyName</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCountyName=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>


<tr>
<td>taxpayerIdentificationNumber</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&taxpayerIdentificationNumber=XXXXXXXXX</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityRegistration, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&includeSections=entityRegistration,coreData</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&format=csv</td>
</tr>
</table>
</details><br>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<details>
<summary>entityRegistration Section</summary>
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
<td>entityEFTIndicator</td>
<td>string</td>
<td>Entity EFT Indicator</td>
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
<td>dodaac</td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName</td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistration</td>
<td>string</td>
<td>Purpose of Registration</td>
</tr>

<tr>
<td>registrationStatus</td>
<td>string</td>
<td>Registration Status</td>
</tr>

<tr>
<td>registrationDate</td>
<td>string</td>
<td>Registration Date</td>
</tr>

<tr>
<td>lastUpdateDate</td>
<td>string</td>
<td>Last Update Date</td>
</tr>

<tr>
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

<tr>
<td>activeDate</td>
<td>string</td>
<td>Active Date</td>
</tr>

<tr>
<td>noPublicDisplayFlag</td>
<td>string</td>
<td>No Public Display Flag</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>Exclusion Status Flag</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Active Exclusion URL</td>
</tr>
</table>
</details>

<details>
<summary>core Data Section</summary><br>
<summary>Entity Hierarchy Information</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>hqParentDUNS</td>
<td>object</td>
<td>
<details>
<summary>HQ Parent DUNS contains below fields</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>dunsNumber</td>
<td>string</td>
<td>Duns Number</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>domesticParentDUNS</td>
<td>object</td>
<td>
<details>
<summary>Domestic Parent DUNS contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>dunsNumber</td>
<td>string</td>
<td>Duns Number</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>domesticParentDUNS</td>
<td>object</td>
<td>
<details>
<summary>Domestic Parent DUNS contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>dunsNumber</td>
<td>string</td>
<td>Duns Number</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
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
<summary>Global Parent DUNS contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>dunsNumber</td>
<td>string</td>
<td>Duns Number</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>phoneNumber</td>
<td>string</td>
<td>Phone Number</td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>EVSMonitoring</td>
<td>object</td>
<td>
<details>
<summary>DNB Monitoring contains below fields</summary>
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
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
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
<td>stateOrProvince</td>
<td>string</td>
<td>State Or Province</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Country</td>
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
</tr>

<tr>
<td>source</td>
<td>string</td>
<td>Source</td>
</tr>

<tr>
<td>hierarchyDepartmentCode</td>
<td>string</td>
<td>Hierarchy Department Code</td>
</tr>

<tr>
<td>hierarchyDepartmentName</td>
<td>string</td>
<td>Hierarchy Department Name</td>
</tr>

<tr>
<td>hierarchyAgencyCode</td>
<td>string</td>
<td>Hierarchy Agency Code</td>
</tr>

<tr>
<td>hierarchyAgencyName</td>
<td>string</td>
<td>Hierarchy Agency Name</td>
</tr>

<tr>
<td>hierarchyOfficeCode</td>
<td>string</td>
<td>Hierarchy Office Code</td>
</tr>
</table>

<summary>tinInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>taxpayerName</td>
<td>string</td>
<td>Taxpayer Name</td>
</tr>

<tr>
<td>taxpayerIdentificationType</td>
<td>string</td>
<td>Taxpayer Identification Type</td>
</tr>

<tr>
<td>taxpayerIdentificationNumber</td>
<td>string</td>
<td>Taxpayer Identification Number</td>
</tr>
</table>

<summary>entityRegistration Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Entity URL</td>
</tr>

<tr>
<td>entityDivisionName</td>
<td>string</td>
<td>Entity Division Name</td>
</tr>

<tr>
<td>entityDivisionNumber</td>
<td>string</td>
<td>Entity Division Number</td>
</tr>

<tr>
<td>entityStartDate</td>
<td>string</td>
<td>Entity Start Date</td>
</tr>

<tr>
<td>submissionDate</td>
<td>string</td>
<td>Submission Date</td>
</tr>

<tr>
<td>fiscalYearEndCloseDate</td>
<td>string</td>
<td>Fiscal Year End Close Date</td>
</tr>

<tr>
<td>correspondenceFlag</td>
<td>string</td>
<td>Correspondence Flag</td>
</tr>
</table>

<summary>physicalAddress, mailingAddress Sub Sections </summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Physical Address Zip Plus4 and Mailing Address Zip Plus4</td>
</tr>

<tr>
<td>country</td>
<td>string</td>
<td>Physical Address Country and Mailing Address Country</td>
</tr>

<tr>
<td>congressionalDistrict</td>
<td>string</td>
<td>Congressional District of Physical Address</td>
</tr>
</table>

<summary>generalInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>entityStructureCode</td>
<td>string</td>
<td>Entity Structure Code</td>
</tr>

<tr>
<td>entityStructureDesc</td>
<td>string</td>
<td>Entity Structure Desc</td>
</tr>

<tr>
<td>entityTypeCode</td>
<td>string</td>
<td>Entity Type Code</td>
</tr>

<tr>
<td>entityTypeDesc</td>
<td>string</td>
<td>Entity Type Desc</td>
</tr>

<tr>
<td>profitStructureCode</td>
<td>string</td>
<td>Profit Structure Code</td>
</tr>

<tr>
<td>profitStructureDesc</td>
<td>string</td>
<td>Profit Structure Desc</td>
</tr>

<tr>
<td>organizationStructureCode</td>
<td>string</td>
<td>Organization StructureCode</td>
</tr>

<tr>
<td>organizationStructureDesc</td>
<td>string</td>
<td>Organization StructureDesc</td>
</tr>

<tr>
<td>stateOfIncorporationCode</td>
<td>string</td>
<td>State Of Incorporation Code</td>
</tr>

<tr>
<td>stateOfIncorporationDesc</td>
<td>string</td>
<td>State Of Incorporation Desc</td>
</tr>

<tr>
<td>countryOfIncorporationCode</td>
<td>string</td>
<td>Country Of Incorporation Code</td>
</tr>

<tr>
<td>countryOfIncorporationDesc</td>
<td>string</td>
<td>Country Of Incorporation Desc</td>
</tr>
</table>

<summary>businessTypes Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessTypeList</td>
<td>list</td>
<td>
<summary>Business Type List contains these fields</summary>
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
</tr>


<tr>
<td>sbaBusinessTypeList</td>
<td>list</td>
<td>
<summary>SBA Business Type List contains these fields</summary>
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
<td>expirationDate</td>
<td>string</td>
<td>Expiration Date</td>
</tr>

</table>
</details>
</td>
</tr>
</table>

<summary>financialInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>creditCardUsage</td>
<td>string</td>
<td>Credit Card Usage</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>string</td>
<td>Debt Subject to Offset Flag</td>
</tr>

<tr>
<td>financialAccount</td>
<td>object</td>
<td>
<details>
<summary>Financial Account contains below fields</summary>
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
<td>address1</td>
<td>string</td>
<td>Address1</td>
</tr>
<tr>
<td>address2</td>
<td>string</td>
<td>Address2</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>

</table>
</details>
</td>
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
</tr>

<tr>
<td>primaryNaics</td>
<td>string</td>
<td>Primary NAICS</td>
</tr>

<tr>
<td>naicsList</td>
<td>list</td>
<td>
<details>
<summary>NAICS List contains these fields</summary>
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
<td>NAICS Code Whether or not the NAICS Code is indicated as an SBA small business </td>
</tr>

<tr>
<td>naicsException</td>
<td>string</td>
<td>Whether or not the NAICS Code is an exception </td>
</tr>
</table>
</details>
</td>
</tr>

<tr>
<td>pscList</td>
<td>List</td>
<td>
<details>
<summary>PSC List contains these fields</summary>
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
</tr>

<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
</tr>
</table>

<summary>disasterReliefData Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>disasterRegistryFlag</td>
<td>string</td>
<td>Disaster Registry Flag</td>
</tr>

<tr>
<td>bondingFlag</td>
<td>string</td>
<td>Bonding Flag</td>
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
<td>geographicalAreaServedmetropolitanStatisticalArea</td>
<td>string</td>
<td>Metropolitan Statistical Area name</td>
</tr>
</table>
</details>
</td>
</tr>
</table>

<summary>sizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>averageAnnualRevenue</td>
<td>string</td>
<td>Average Annual Revenue</td>
</tr>

<tr>
<td>averageNumberOfEmployees</td>
<td>string</td>
<td>Average Number Of Employees</td>
</tr>
</table>

<summary>sizeMetricDetails Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>employeesLocation</td>
<td>string</td>
<td>Employees Location</td>
</tr>

<tr>
<td>receiptsLocation</td>
<td>string</td>
<td>Receipts Location</td>
</tr>
</table>

<summary>industrySpecificSizeMetrics Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>barrelsCapacity</td>
<td>string</td>
<td>Barrels Capacity</td>
</tr>

<tr>
<td>totalAssets</td>
<td>string</td>
<td>Total Assets</td>
</tr>

<tr>
<td>megawattHours</td>
<td>string</td>
<td>Mega Watt Hours</td>
</tr>
</table>

<summary>ediInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>vanProvider</td>
<td>string</td>
<td>Van Provider</td>
</tr>

<tr>
<td>isaQualifier</td>
<td>string</td>
<td>Is a Qualifier</td>
</tr>

<tr>
<td>isaIdentifier</td>
<td>string</td>
<td>Is a Identifier</td>
</tr>

<tr>
<td>functionalGroupIdentifier</td>
<td>string</td>
<td>Functional Group Identifier</td>
</tr>

<tr>
<td>requestFlag820s</td>
<td>string</td>
<td>Request Flag 820s</td>
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
</tr>

<tr>
<td>fARResponses</td>
<td>list</td>
<td>

<details>
<summary>FAR Responses can contains below fields</summary>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>blackAmerican</td>
<td>string</td>
<td>Black American</td>
</tr>

<tr>
<td>hispanicAmerican</td>
<td>string</td>
<td>Hispanic American</td>
</tr>

<tr>
<td>nativeAmerican</td>
<td>string</td>
<td>Native American</td>
</tr>

<tr>
<td>asianPacificAmerican</td>
<td>string</td>
<td>Asian Pacific American</td>
</tr>

<tr>
<td>subcontinentAsian<br>IndianAmerican</td>
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
</tr>

<tr>
<td>dFARResponses</td>
<td>list</td>
<td>
<details>
<summary>DFAR Responses can contains below fields</summary><br>
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
<summary>List of Provisions can contains below fields</summary><br>
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
<summary>List of Answers can contains below fields</summary><br>
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
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessPOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>governmentBusinessAlternatePOC Sub section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>electronicBusinessAlternatePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformancePOC Sub Section</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>pastPerformanceAlternatePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>partyPerformingCertificationPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>soleProprietorshipPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>accountsReceivablePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>accountsPayablePOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>ediPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>eliminationsPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

<summary>salesPOC Sub Sections</summary>
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

<tr>
<td>USPhone</td>
<td>string</td>
<td>US Phone</td>
</tr>

<tr>
<td>USPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
</tr>

<tr>
<td>address1</td>
<td>string</td>
<td>Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Address 2</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>State</td>
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
<td>country</td>
<td>string</td>
<td>Country</td>
</tr>
</table>

</details><br>
</details>

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/entity_api.yaml">Open API specification file for the Entity Management API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * You are not authorized to access this functionality. <br><br>  * User does not exist. <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * ueiDUNS can only be 9 digits. <br><br> * ueiDUNS Should Contain Only Numeric value. <br><br> * Invalid Input Parameters. <br><br>  * The parameters: 'includeSections' are not permitted inside Query Param(q). <br><br>  * A maximum of 100 ueiDUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. |
| 403 | API key is not correct or was not provided. |

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>
