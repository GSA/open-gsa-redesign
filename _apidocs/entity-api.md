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

Extract Endpoint:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Public Entity Details can be accessed from Beta or Alpha via the following end points:
   * https://api.sam.gov/prod/entity-management?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management?api_key=< value >
   * https://api.sam.gov/prod/entity-management/extract?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management/extract?api_key=< value ><br>

FOUO Entity Details can be accessed from Beta or Alpha via the following end points:
   * https://api.sam.gov/prod/entity-management/fouo?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management/fouo?api_key=< value >
   * https://api.sam.gov/prod/entity-management/extract/fouo?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management/extract/fouo?api_key=< value ><br>

Sensitive Entity Details  can be accessed from Beta or Alpha via the following end points:
   * https://api.sam.gov/prod/entity-management/sensitive?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management/sensitive?api_key=< value >  
   * https://api.sam.gov/prod/entity-management/extract/sensitive?api_key=< value >
   * https://api-alpha.sam.gov/prodlike/entity-management/extract/sensitive?api_key=< value >

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.


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
<td>ueiSAMMI</td>
<td>Unique Entity Identifier SAMMI -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: 'https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&ueiSAMMI=025114695</td>
</tr>

<tr>
<td>entityStructure</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&entityStructure=Z1</td>
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
<td>purposeOfRegistration</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&purposeOfRegistration=Z2</td>
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
<td>businessType</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&stateOfIncorporation=VA</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&countryOfIncorporation=USA</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&naicsCode=513310</td>
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
<td>servedDisasterState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterState=VA</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityInformation, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management?
<br>api_key=< value >&includeSections=entityInformation,coreData</td>
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
<summary>entityInformation Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
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
<td>ueiSAMMI</td>
<td>string</td>
<td>Unique Entity Identifier SAMMI</td>
</tr>

<tr>
<td>cageCode </td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode </td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>dodaac </td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName </td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName </td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistration </td>
<td>string</td>
<td>Purpose of Registration</td>
</tr>

<tr>
<td>registrationStatus </td>
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
<summary>businessInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>corporateURL</td>
<td>string</td>
<td>Corporate URL</td>
</tr>

<tr>
<td>companyDivisionName</td>
<td>string</td>
<td>Company Division Name</td>
</tr>

<tr>
<td>companyDivisionNumber</td>
<td>string</td>
<td>Company Division Number</td>
</tr>

<tr>
<td>businessStartDate</td>
<td>string</td>
<td>Business Start Date</td>
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
<td>address1 </td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city </td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipPlus4</td>
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
<td>entityStructure</td>
<td>string</td>
<td>Entity Structure</td>
</tr>

<tr>
<td>entityType</td>
<td>string</td>
<td>Entity Type</td>
</tr>

<tr>
<td>profitStructure</td>
<td>string</td>
<td>Profit Structure</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>string</td>
<td>Organization Structure</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>string</td>
<td>State Of Incorporation</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>string</td>
<td>Country Of Incorporation</td>
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
<td>businessType</td>
<td>string</td>
<td>Business Type</td>
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
<td>sbaBusinessType</td>
<td>string</td>
<td>SBA Business Type</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Description</td>
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
<td>Delinquent Federal Debt Flag</td>
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
<td>geographicalAreaServedState</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedCounty</td>
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

<details>
<summary><b>Public Entity Management Extract Endpoint</b></summary>
<tr>
<td><b>Endpoint:</b> https://api.sam.gov/prod/entity-management/extract?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information in the form of csv or json format instead of paginated.</td>
</tr><br>

<tr>
<td><b>Query String Parameters</b> Same parameters as mentioned above, excluding page and size, apply.</td>
</tr><br>

<tr>
<td><b>Expected Result</b> Same response as mentioned above applies.</td>
</tr>
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
<td>ueiSAMMI</td>
<td>Unique Entity Identifier SAMMI -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: 'https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&ueiSAMMI=025114695</td>
</tr>

<tr>
<td>entityStructure</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&entityStructure=Z1</td>
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
<td>purposeOfRegistration</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&purposeOfRegistration=Z2</td>
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
<td>businessType</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&stateOfIncorporation=VA</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&countryOfIncorporation=USA</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&naicsCode=513310</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&naicsLimitedSB=513310</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&pscCode=0989</td>
</tr>

<tr>
<td>servedDisasterState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&servedDisasterState=VA</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityInformation, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management/fouo?
<br>api_key=< value >&includeSections=entityInformation,coreData</td>
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
<summary>entityInformation Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
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
<td>ueiSAMMI</td>
<td>string</td>
<td>Unique Entity Identifier SAMMI</td>
</tr>

<tr>
<td>cageCode </td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode </td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>dodaac </td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName </td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName </td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistration </td>
<td>string</td>
<td>Purpose of Registration</td>
</tr>

<tr>
<td>registrationStatus </td>
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
<summary>dunsInformation Sub Section</summary>
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
<td>globalParentDUNS</td>
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
<td>dnbMonitoring</td>
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

<summary>businessInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>corporateURL</td>
<td>string</td>
<td>Corporate URL</td>
</tr>

<tr>
<td>companyDivisionName</td>
<td>string</td>
<td>Company Division Name</td>
</tr>

<tr>
<td>companyDivisionNumber</td>
<td>string</td>
<td>Company Division Number</td>
</tr>

<tr>
<td>businessStartDate</td>
<td>string</td>
<td>Business Start Date</td>
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
<td>address1 </td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city </td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipPlus4</td>
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
<td>entityStructure</td>
<td>string</td>
<td>Entity Structure</td>
</tr>

<tr>
<td>entityType</td>
<td>string</td>
<td>Entity Type</td>
</tr>

<tr>
<td>profitStructure</td>
<td>string</td>
<td>Profit Structure</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>string</td>
<td>Organization Structure</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>string</td>
<td>State Of Incorporation</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>string</td>
<td>Country Of Incorporation</td>
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
<td>businessType</td>
<td>string</td>
<td>Business Type</td>
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
<td>sbaBusinessType</td>
<td>string</td>
<td>SBA Business Type</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Description</td>
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
<td>Delinquent Federal Debt Flag</td>
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
<td>geographicalAreaServedState</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedCounty</td>
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

<details>
<summary><b>FOUO Entity Management Extract Endpoint</b></summary>
<tr>
<td><b>Endpoint:</b> https://api.sam.gov/prod/entity-management/extract/fouo?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information in the form of csv or json format instead of paginated.</td>
</tr><br>

<tr>
<td><b>Query String Parameters</b> Same parameters as mentioned above, excluding page and size, apply.</td>
</tr><br>

<tr>
<td><b>Expected Result</b> Same response as mentioned above applies.</td>
</tr>
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
<td>ueiSAMMI</td>
<td>Unique Entity Identifier SAMMI -Allows 9 digit value, a maximum of up to 100 values can be sent.
<br>Example: 'https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&ueiSAMMI=025114695</td>
</tr>

<tr>
<td>entityStructure</td>
<td>Allows 2 character code or null.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&entityStructure=Z1</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>Allows D or null.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&exclusionStatusFlag=D</td>
</tr>

<tr>
<td>expirationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&expirationDate=02/12/1999</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows Partial or Complete value.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&legalBusinessName=ALLTEL</td>
</tr>

<tr>
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&primaryNaics=513310</td>
</tr>

<tr>
<td>purposeOfRegistration</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&purposeOfRegistration=Z2</td>
</tr>

<tr>
<td>registrationDate</td>
<td>Allows a single Date or Date range. Format: MM/dd/yyyy.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&registrationDate=02/12/1999</td>
</tr>

<tr>
<td>physicalAddressCity</td>
<td>Allows a text.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&physicalAddressCity=Herndon</td>
</tr>

<tr>
<td>physicalAddressCongressionalDistrict</td>
<td>Allows 2 characters.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&physicalAddressCongressionalDistrict=AR</td>
</tr>

<tr>
<td>physicalAddressCountryCode</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&physicalAddressCountryCode=USA</td>
</tr>

<tr>
<td>physicalAddressProvinceOrState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&physicalAddressProvinceOrState=AR</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>Allows 5 digit zip code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&physicalAddressZipPostalCode=02201</td>
</tr>

<tr>
<td>samExtractCode</td>
<td>Allows 1 character code (A or E).
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&samExtractCode=A</td>
</tr>

<tr>
<td>businessType</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&organizationStructure=2L</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&stateOfIncorporation=VA</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>Allows 3 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&countryOfIncorporation=USA</td>
</tr>

<tr>
<td>naicsCode</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&naicsCode=513310</td>
</tr>

<tr>
<td>naicsLimitedSB</td>
<td>Allows 6 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&naicsLimitedSB=513310</td>
</tr>

<tr>
<td>pscCode</td>
<td>Allows 4 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&pscCode=0989</td>
</tr>

<tr>
<td>servedDisasterState</td>
<td>Allows 2 character code.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&servedDisasterState=VA</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>servedDisasterMSA</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&servedDisasterMSA=86800730</td>
</tr>

<tr>
<td>servedDisasterCounty</td>
<td>Allows text.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&servedDisasterCounty=FAIRFAX</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections, entityInformation, coreData, assertions, repsAndCerts and pointsOfContact.
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&includeSections=entityInformation,coreData</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download different file formats(csv and json are allowable values).
<br>https://api.sam.gov/prod/entity-management/sensitive?
<br>api_key=< value >&format=csv</td>
</tr>
</table>
</details><br>

<tr>
<td><b> Expected Result:</b></td>
</tr>
<details>
<summary>entityInformation Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
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
<td>ueiSAMMI</td>
<td>string</td>
<td>Unique Entity Identifier SAMMI</td>
</tr>

<tr>
<td>cageCode </td>
<td>string</td>
<td>CAGE Code</td>
</tr>

<tr>
<td>nCageCode </td>
<td>string</td>
<td>NCAGE Code</td>
</tr>

<tr>
<td>dodaac </td>
<td>string</td>
<td>DoDAAC</td>
</tr>

<tr>
<td>legalBusinessName </td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>dbaName </td>
<td>string</td>
<td>Doing Business As Name</td>
</tr>

<tr>
<td>purposeOfRegistration </td>
<td>string</td>
<td>Purpose of Registration</td>
</tr>

<tr>
<td>registrationStatus </td>
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
<summary>dunsInformation Sub Section</summary>
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
<td>globalParentDUNS</td>
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
<td>dnbMonitoring</td>
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

<summary>businessInformation Sub Section</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>corporateURL</td>
<td>string</td>
<td>Corporate URL</td>
</tr>

<tr>
<td>companyDivisionName</td>
<td>string</td>
<td>Company Division Name</td>
</tr>

<tr>
<td>companyDivisionNumber</td>
<td>string</td>
<td>Company Division Number</td>
</tr>

<tr>
<td>businessStartDate</td>
<td>string</td>
<td>Business Start Date</td>
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
<td>address1 </td>
<td>string</td>
<td>Physical Address 1 and Mailing Address 1</td>
</tr>

<tr>
<td>address2</td>
<td>string</td>
<td>Physical Address 2 and Mailing Address 2</td>
</tr>

<tr>
<td>city </td>
<td>string</td>
<td>Physical Address City and Mailing Address City</td>
</tr>

<tr>
<td>state</td>
<td>string</td>
<td>Physical Address State and Mailing Address State</td>
</tr>

<tr>
<td>zip</td>
<td>string</td>
<td>Physical Address Zip and Mailing Address Zip</td>
</tr>

<tr>
<td>zipPlus4</td>
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
<td>entityStructure</td>
<td>string</td>
<td>Entity Structure</td>
</tr>

<tr>
<td>entityType</td>
<td>string</td>
<td>Entity Type</td>
</tr>

<tr>
<td>profitStructure</td>
<td>string</td>
<td>Profit Structure</td>
</tr>

<tr>
<td>organizationStructure</td>
<td>string</td>
<td>Organization Structure</td>
</tr>

<tr>
<td>stateOfIncorporation</td>
<td>string</td>
<td>State Of Incorporation</td>
</tr>

<tr>
<td>countryOfIncorporation</td>
<td>string</td>
<td>Country Of Incorporation</td>
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
<td>businessType</td>
<td>string</td>
<td>Business Type</td>
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
<td>sbaBusinessType</td>
<td>string</td>
<td>SBA Business Type</td>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Description</td>
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
<td>Delinquent Federal Debt Flag</td>
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
<td>geographicalAreaServedState</td>
<td>string</td>
<td>State code</td>
</tr>

<tr>
<td>geographicalAreaServedCounty</td>
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

<details>
<summary><b>Sensitive Entity Management Extract Endpoint</b></summary>
<tr>
<td><b>Endpoint:</b> https://api.sam.gov/prod/entity-management/extract/sensitive?api_key=< value > </td>
</tr><br>

<tr>
<td><b>Description:</b> Restful endpoint to retrieve Entity detail information in the form of csv or json format instead of paginated.</td>
</tr><br>

<tr>
<td><b>Query String Parameters</b> Same parameters as mentioned above, excluding page and size, apply.</td>
</tr><br>

<tr>
<td><b>Expected Result</b> Same response as mentioned above applies.</td>
</tr>
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

