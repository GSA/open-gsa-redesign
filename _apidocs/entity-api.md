---
title: SAM.gov Entity Management  API
banner-heading: SAM.gov Entity Management API
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <p class="usa-alert-text">
        At this time, please <b>cease using</b> the Entity Management API for any Representations and Certifications display (also known as 'Reps and Certs') information.<br><br>Entity Management API results may not match the information available in the Reps and Certs in the entity's record on SAM.gov. The Reps and Certs display via search at SAM.gov is correct.<br><br>The Reps and Certs data stored in the database is correct.<br>The Reps and Certs data in the SAM record is correct.<br>It is the data returned by the API that we are investigating.<br><br>We will provide updates as soon as possible.
     </p>
   </div>
 </div>

## Overview
The Entity Management API allows users to request Unclassified ("Public"), Controlled Unclassified Information (CUI) "For Official Use Only" (FOUO) or CUI "Sensitive" entity data, based on the sensitivity level of the user account and through several optional request parameters.

**Public Data:**

This constitutes publicly available entities and their unclassified data such as name, UEI, registration details, physical and mailing addresses, business types, PSC, NAICS and points of contact name and address.

**FOUO (CUI) Data:**

This constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data such as hierarchy, company and employee security levels and points of contact email address, phone, and fax numbers.

**Sensitive (CUI) Data:**

This constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data such as banking information and SSN/TIN/EIN.

**Key Features of the Entity Management API:**

* It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!) conditions and a free text search q to obtain the desired data.
* It returns synchronous responses.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.
* The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

**Additional Features of the Entity Management API:** It can serve as an Extract API with the addition of "format" parameter in the request.<br>
Following are the key features of the Entity Management Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable link.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

### API endpoints

**Production:**
* https://api.sam.gov/entity-information/v1/entities?api_key=<A VALID API KEY>
* https://api.sam.gov/entity-information/v1/entities?
* https://api.sam.gov/entity-information/v2/entities?api_key=<A VALID API KEY>
* https://api.sam.gov/entity-information/v2/entities?
* https://api.sam.gov/entity-information/v3/entities?api_key=<A VALID API KEY>
* https://api.sam.gov/entity-information/v3/entities?

**Alpha:**
* https://api-alpha.sam.gov/entity-information/v1/entities?api_key=<A VALID API KEY>
* https://api-alpha.sam.gov/entity-information/v1/entities?
* https://api-alpha.sam.gov/entity-information/v2/entities?api_key=<A VALID API KEY>
* https://api-alpha.sam.gov/entity-information/v2/entities?
* https://api-alpha.sam.gov/entity-information/v3/entities?api_key=<A VALID API KEY>
* https://api-alpha.sam.gov/entity-information/v3/entities?

### User Requirements

**To access Public data:**
* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, a non-Federal/Federal System Account with the “Read Public” permission and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access FOUO (CUI) data:**
* Users must have a Federal System Account with the “Read FOUO” permission and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access Sensitive (CUI) data:**
* Users must have a Federal System Account with the “Read Sensitive” permission and the respective API Key in SAM.gov.
* Users must make POST calls using a Restful API client such as Postman.

### Individual (Personal) Accounts

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, “Public API Key”.<br>
  ![image info](v1/EYE_IMAGE.JPG)
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.

### System Accounts

* The SAM.gov non-Federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts” widget on their SAM.gov “Workspace” page.
* The SAM.gov Federal registered users must contact their CCB representatives for obtaining the “System Accounts” widget on their SAM.gov “Workspace” page.
* Users must create their System Account using the “System Accounts” widget and get it approved.
* Users must then set the password for the System Account.
* After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.
* System Accounts must satisfy the following criteria to successfully utilize the Entity Management API:

    * System Information<br/>
      Unique System ID: The System Account ID
    * Permissions<br/>
      Entity Information: read public --> Gives access to the Public data.<br/>
      Entity Information: read public, read fouo --> Gives access to the Public and FOUO (CUI) data.<br/>
      Entity Information: read public, read fouo, read sensitive --> Gives access to the Public, FOUO (CUI) and Sensitive (CUI) data.
    * Security Information<br/>
      IP Address: List all the IP Addresses that the System invokes the API from.
    * Type of Connection: REST APIs
    * System Account Password
    * System Account API Key

### API Key Rate Limits
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Type of User Account</b></th>
<th style="background-color: #f1f1f1;"><b>Type of API Key</b></th>
<th style="background-color: #f1f1f1;"><b>Default API Daily Rate Limit</b></th>
</tr>
<tr>
<td>Non-federal user with no Role in SAM.gov</td>
<td>Personal API key</td>
<td>10 requests/day</td>
</tr>
<tr>
<td>Non-federal user with a Role in SAM.gov</td>
<td>Personal API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Federal User</td>
<td>Personal API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Non-federal System user</td>
<td>System account API key</td>
<td>1,000 requests/day</td>
</tr>
<tr>
<td>Federal System user</td>
<td>System account API key</td>
<td>10,000 requests/day</td>
</tr>
</table>

<details>
<summary><b>Sensitive API Process: </b><br>
</summary>

<ul>
    <li> The System Account User ID and Password must be sent as "Basic Auth" under the "Authorization" Header. The combination needs to be base 64 encoded as base64(username:password).</li>
    <li> The API Key value must be sent as "x-api-key" under "Headers" and not directly in the request URL.</li>
    <li> The "Accept" parameter must be sent as "application/json" under "Headers".</li>
    <li> The "Content-Type" parameter must be sent as "application/json" under "Headers".</li>
    <li> All the optional search filters can be sent in the request URL or in the "Body".</li>
    <li> 
<details>
<summary><b>An example of the Sensitive entity management POST call using curl</b></summary>
<div style="font-family:Source sans pro; color: #212121; line-height: 1.5"><br>
<b>Curl request with basic auth token:</b><br>
curl -X POST "https://api.sam.gov/entity-information/v2/entities?ueiSAM=< UEI >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/json" --header "Authorization: Basic < auth token >"<br><br>
<b>Curl request with username and password:</b><br>
curl -X POST "https://api.sam.gov/entity-information/v2/entities?ueiSAM=< UEI >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/json" --user "< username >:< password >"</div><br><br>
</details>
</li><br>
</ul>

</details>

### Utilizing the API Extract
* To retrieve Entity data in the CSV format, “format=csv” must be provided in the request.
* To retrieve Entity data in the JSON format, “format=json” must be provided in the request.
* If the request is executed successfully, then a file downloadable URL with Token will be returned. This URL can also be obtained in emails by providing “emailId=Yes” in the request.
* In the file downloadable URL, the phrase REPLACE_WITH_API_KEY must be replaced with a valid API Key and sent as another request.
* If the file is ready for download, then the users can retrieve it. If the file is not ready for download, then the users will need to try again in some time.

<p><small><a href="#">Back to top</a></small></p>

## API Description
<details>
<summary><b>Query String Parameters:</b><br>The Entity Management API offers several optional search parameters that can be provided independently or in combination with each other.<br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"><b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<td rowspan="2">samRegistered</td>
<td>The API, by default, will return only the entities that are registered, 
if this search parameter is not sent in the request.
<br>However, users can still choose to send this search parameter as:
<br>samRegistered=Yes.
</td>
<td>v2</td>
</tr>

<tr>
<td>The API, by default, will return only the entities that are registered, if this search parameter is not sent in the request.
<br>However, users can choose to send this search parameter as:
<br>samRegistered=Yes – to receive entities that are registered.
<br>samRegistered=No – to receive entities that are not registered/ID Assigned.
</td>
<td>v3</td>
</tr>

<tr>
<td>samExtractCode --> registrationStatus</td>
<td>Allows 1 character code (A for Active or E for Expired).
<br>samExtractCode=A, registrationStatus=A
<br>NOTE: This parameter is being renamed. samExtractCode is in V1 and registrationStatus is starting V2. 
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>Unique Entity Identifier SAM
<br>Allows a single 12-character value or up to 100 values.
<br>Example: ueiSAM=RV56IG5JM6G9
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>entityEFTIndicator</td>
<td>Entity EFT Indicator.
<br>Example: entityEFTIndicator=0000
<br>NOTE: This parameter must be used in conjunction with ueiSAM.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>cageCode</td>
<td>Allows a single 5-character value or up to 100 values.
<br>Example: cageCode=00000
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dodaac</td>
<td>Allows 9 character value.
<br>Example: dodaac=DOD123456</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>Allows partial or complete value search.
<br>Example: legalBusinessName=ALLTEL
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dbaName</td>
<td>Allows Partial or Complete value.
<br>Example: dbaName=ALLTEL</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>debtSubjectToOffset</td>
<td>Allows Y, N, U or null.
<br>Example: debtSubjectToOffset=Y</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>v1 or v2: Allows D or null.
<br>Examples: exclusionStatusFlag=D, exclusionStatusFlag=""
<br><br>v3: Allows Y or N
<br>Examples: exclusionStatusFlag=Y, exclusionStatusFlag=N</td>
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
<td>activationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: activationDate=01/01/2019, activationDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>updateDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: updateDate=01/01/2019, updateDate=[01/01/2019,05/29/2019]</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>expirationDate --> <br>registrationExpirationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: registrationExpirationDate=01/01/2019, registrationExpirationDate=[01/01/2019,05/29/2019]<br>
NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate is starting V2.
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>Allows a single Date or a Date range.
<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]
<br>Examples: ueiCreationDate=01/01/2019, ueiCreationDate=[01/01/2019,05/29/2019]
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v2<br>v3</td>
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
<td>physicalAddressCity</td>
<td>Allows a text.
<br>Example: physicalAddressCity=Herndon
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
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
<td>Allows a 3-character code for entities that are registered. Allows both 3-character and 2-character codes for entities that are not registered/ID Assigned.
<br>Example: physicalAddressCountryCode=USA
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressProvinceOrStateCode</td>
<td>Allows a 2 character code.
<br>Example: physicalAddressProvinceOrStateCode=AR
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>physicalAddressZipPostalCode</td>
<td>SAM registrants:
<br>Allows a 5-digit code for US zip codes or any digit postal code for non-US postal codes, 
for entities that are registered. Allows either a 5 or a 9-digit code for US zip codes, 
or any digit postal code for non-US postal codes, for entities that are not registered/ID Assigned.
<br>Examples: 
<br>physicalAddressZipPostalCode=02201, physicalAddressZipPostalCode=110054, physicalAddressZipPostalCode=21202-3117
</td>
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
<td>primaryNaics</td>
<td>Allows 6 digit NAICS, accepts multiple NAICS.
<br>Example: primaryNaics=513310</td>
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
<td>proceedingsData</td>
<td>When used in conjunction with includeSections=integrityInformation,<br>
allows users to obtain registered entities that have answered Proceedings data.<br>
This parameter accepts the only value of Yes which is not case sensitive.
<br><br>Examples:<br>
includeSections=integrityInformation&proceedingsData=Yes;<br>
includeSections=All,integrityInformation&proceedingsData=yes;<br>
includeSections=entityRegistration,coreData,integrityInformation,<br>
pointsOfContact&proceedingsData=YES
</td>
<td>v3</td>
</tr>

<tr>
<td>includeSections</td>
<td>Allows to filter data by sections.
<br>
For registered entities: 
<br>The applicable sections are entityRegistration, coreData, assertions, pointsOfContact, repsAndCerts, All and integrityInformation.
<ul>
<li>The repsAndCerts section will be returned only if explicitly requested.</li>
<li>To request all the sections (entityRegistration, coreData, assertions, pointsOfContact and repsAndCerts), provide a value of 'All'.
</li>
<li>The integrityInformation section is newly added specifically to the v3 API. It is not included in ‘All’, so it must be explicitly requested.</li>
</ul>
<br>Examples:
includeSections=entityRegistration,coreData;<br> 
includeSections=integrityInformation,All;<br>
includeSections=repsAndCerts.

<br><br>For not registered/ID Assigned entities: 
<br>The applicable sections are entityRegistration, coreData, All and integrityInformation.
<ul>
<li>To request both the sections (entityRegistration and coreData), provide a value of 'All'.</li>
<li>The integrityInformation section is newly added specifically to the v3 API. It is not included in ‘All’, so it must be explicitly requested.</li>
</ul>
<br><br>Examples: 
<br>includeSections=entityRegistration,coreData;
<br>includeSections=integrityInformation,All
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>format</td>
<td>Allows user to download data into the JSON and CSV asynchronous file formats.
<br>Example: format=csv
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>emailId</td>
<td>When used in conjunction with the format parameter, allows user to get JSON or CSV asynchronous file download 
links with tokens sent to the email address associated to the API key used in the request.
<br>Example: emailId=Yes&format=JSON
<br>Applicable to the entities that are registered or not registered/ID Assigned.
</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"><b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th></tr>

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

<tr>
<th colspan="4" style="background-color: #f1f1f1;"><b>Sensitivity Level: Sensitive</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th></tr>

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

</table>
</details>

<details>
<summary><b>Response Schema:</b>
<br>The Entity Management API offers several response elements that are described in the following sections.<br>
</summary>
<details>
<summary><b>entityRegistration</b><br>
</summary>
<table>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<td>samRegistered</td>
<td>string</td>
<td>Registered or not registered/ID Assigned entity.
</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
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
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
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
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
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
<td>The status of the entities that are registered or not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the validated entities that are registered or not registered/ID Assigned.</td>
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
<br>NOTE: This parameter is being renamed. expirationDate is in V1 and registrationExpirationDate is starting V2.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>activationDate</td>
<td>string</td>
<td>Active Date</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>ueiStatus</td>
<td>string</td>
<td>Unique Entity Identifier Status
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiExpirationDate</td>
<td>string</td>
<td>Unique Entity Identifier Expiration Date
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>ueiCreationDate</td>
<td>string</td>
<td>Unique Entity Identifier Creation Date
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v2<br>v3</td>
</tr>

<tr>
<td>noPublicDisplayFlag --> publicDisplayFlag</td>
<td>string</td>
<td>Opted for Public Display or opted out of it.
<br>v1 or v2: Returns noPublicDisplayFlag.
<br>v3: Returns publicDisplayFlag.
<br>Applicable to the entities that are registered or not registered/ID Assigned.
<br><br>NOTE: A Fed System Account with the Non-SAM NPDY Role is required to access NPDY entities that are not registered/ID Assigned.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>exclusionStatusFlag</td>
<td>string</td>
<td>v1 or v2: Returns D (Debarred) or null.
<br>v3: Returns Y (Debarred) or N (not Debarred).
<br><br>NOTE: Debarred entities will populate 'exclusionURL' with the endpoint to access the debarred record.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>exclusionURL</td>
<td>string</td>
<td>Returns the URL to access the Exclusion record with ueiSAM.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>dnbOpenData</td>
<td>string</td>
<td>Dun & Bradstreet Open Data
<br>Applicable to the entities that are registered or not registered/ID Assigned.</td>
<td>v2<br>v3</td>
</tr>

</table>
</details>

<details>
<summary><b>coreData</b><br>
</summary>

<details style="padding-left: 20px;"> 
<summary><b>entityHierarchyInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="3" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<th colspan="3" style="background-color: #f1f1f1;"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the registered entity’s hierarchy</td>
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
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the registered entity’s hierarchy
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
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the registered entity’s hierarchy
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
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>evsSource</td>
<td>string</td>
<td>Source of the registered entity’s hierarchy</td>
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
<summary>samMonitoring contains below fields and this section will return a value of "Currently Not Available".</summary>
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
</details>

<details style="padding-left: 20px;">
<summary><b>federalHierarchy Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>tinInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Sensitive</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>entityInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
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
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Sensitive</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
</tr>

<tr>
<td>mpin</td>
<td>string</td>
<td>This field has been deprecated.</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>physicalAddress Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;">
<b>Applicable to the entities that are registered or not registered/ID Assigned</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
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
<td>Zip Plus4</td>
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

<details style="padding-left: 20px;">
<summary><b>mailingAddress Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Mailing Address Line 1.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Mailing Address Line 2.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>Mailing Address City.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>Mailing Address State or Province Code.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Mailing Address Zip.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Mailing Address Zip Plus4.</td>
<td>v1<br>v2<br>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Mailing Address Country Code</td>
<td>v1<br>v2<br>v3</td>
</tr>
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>congressionalDistrict</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>

<tr>		
<td>congressionalDistrict</td>		
<td>string</td>		
<td>Physical Address Congressional District</td>	
<td>v1<br>v2<br>v3</td>	
</tr>

</table>
</details>

<details style="padding-left: 20px;">
<summary><b>generalInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
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
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data 
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>businessTypes Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>financialInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
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
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Sensitive</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data 
</th>
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

</details>

<details>
<summary><b>integrityInformation</b><br>
</summary>
<details style="padding-left: 20px;">
<summary><b>entitySummary Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>

<tr>
<td>ueiSAM</td>
<td>string</td>
<td>Unique Entity Identifier SAM</td>
<td>v3</td>
</tr>
<tr>
<td>cageCode</td>
<td>string</td>
<td>CAGE Code</td>
<td>v3</td>
</tr>
<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v3</td>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>physicalAddress</b>
</th>
</tr>
<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line1</td>
<td>v3</td>
</tr>
<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line2</td>
<td>v3</td>
</tr>
<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v3</td>
</tr>
<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v3</td>
</tr>
<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v3</td>
</tr>
<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Plus4</td>
<td>v3</td>
</tr>
<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v3</td>
</tr>
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>proceedingsData Sub Section</b><br>
</summary>
<table>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>


<tr>
<td>proceedingsQuestion1</td>
<td>string</td>
<td>Proceedings Question1. 
<br>Yes or No values are captured</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingsQuestion2</td>
<td>string</td>
<td>Proceedings Question2.
<br>Yes or No values are captured</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingsQuestion3</td>
<td>string</td>
<td>Proceedings Question3. 
<br>Yes or No values are captured</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingsRecordCount</td>
<td>string</td>
<td>Proceedings Records Counter</td>
<td>v3</td>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>listOfProceedings</b>
</th>
</tr>
<tr>
<td>proceedingDate</td>
<td>string</td>
<td>Proceeding Date</td>
<td>v3</td>
</tr>
<tr>
<td>instrumentNumber</td>
<td>string</td>
<td>Instrument Number</td>
<td>v3</td>
</tr>
<tr>
<td>instrument</td>
<td>string</td>
<td>Instrument Type</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingStateCode</td>
<td>string</td>
<td>Proceeding State Code</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingType</td>
<td>string</td>
<td>Proceeding Type</td>
<td>v3</td>
</tr>
<tr>
<td>disposition</td>
<td>string</td>
<td>Disposition</td>
<td>v3</td>
</tr>
<tr>
<td>proceedingDescription</td>
<td>string</td>
<td>Proceeding Description</td>
<td>v3</td>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>proceedingsPointsOfContact</b>
</th>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>proceedingsPOC</b>
</th>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>
<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v3</td>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>proceedingsAlternatePOC</b>
</th>
</tr>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>
<tr>
<td>firstName</td>
<td>string</td>
<td>First Name</td>
<td>v3</td>
</tr>

<tr>
<td>middleInitial</td>
<td>string</td>
<td>Middle Initial</td>
<td>v3</td>
</tr>

<tr>
<td>lastName</td>
<td>string</td>
<td>Last Name</td>
<td>v3</td>
</tr>

<tr>
<td>title</td>
<td>string</td>
<td>Title</td>
<td>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
</tr>

<tr>
<td>usPhone</td>
<td>string</td>
<td>US Phone</td>
<td>v3</td>
</tr>

<tr>
<td>usPhoneExtension</td>
<td>string</td>
<td>US Phone Extension</td>
<td>v3</td>
</tr>

<tr>
<td>nonUSPhone</td>
<td>string</td>
<td>Non-US Phone</td>
<td>v3</td>
</tr>

<tr>
<td>fax</td>
<td>string</td>
<td>Fax</td>
<td>>v3</td>
</tr>

<tr>
<td>email</td>
<td>string</td>
<td>Email</td>
<td>>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<td>addressLine1</td>
<td>string</td>
<td>Address Line 1</td>
<td>v3</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address Line 2</td>
<td>v3</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City</td>
<td>v3</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or Province Code</td>
<td>v3</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>Zip Code</td>
<td>v3</td>
</tr>

<tr>
<td>zipCodePlus4</td>
<td>string</td>
<td>Zip Code Plus 4</td>
<td>v3</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country Code</td>
<td>v3</td>
</tr>
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>responsibilityInformationCount Sub Section</b><br>
</summary>
<table>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered or not registered/ID Assigned</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data 
</th>
</tr>

<tr>
<td>responsibilityInformationCount</td>
<td>string</td>
<td>Responsibility Information Counter</td>
<td>v3</td>
</tr>

</table>
</details>

<details style="padding-left: 20px;">
<summary><b>responsibilityInformationList Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered or not registered/ID Assigned</b>
</th>
</tr>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<td>recordType</td>
<td>string</td>
<td>Record Type</td>
<td>v3</td>
</tr>
<tr>
<td>recordTypeDesc</td>
<td>string</td>
<td>Record Type Description</td>
<td>v3</td>
</tr>
<tr>
<td>recordDate</td>
<td>string</td>
<td>Record Date</td>
<td>v3</td>
</tr>
<tr>
<td>procurementIdOrFederalAssistanceId</td>
<td>string</td>
<td>Contract Data ID or Grant ID</td>
<td>v3</td>
</tr>
<tr>
<td>referenceIdvPiid</td>
<td>string</td>
<td>Referenced IDV PIID</td>
<td>v3</td>
</tr>
<tr>
<td>attachment</td>
<td>string</td>
<td>Pre-signed URL to access the attachment</td>
<td>v3</td>
</tr>
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>corporateRelationships Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>

<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>highestOwner</b>
</th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v3</td>
</tr>
<tr>
<td>cageCode</td>
<td>string</td>
<td>Cage Code</td>
<td>v3</td>
</tr>
<tr>
<td>integrityRecords</td>
<td>string</td>
<td>Returns:
<br>Yes - if the CAGE Code finds one or more matches in the database.
<br>No - if the CAGE Code does not find any match in the database.
<br>N/A - if the CAGE Code is null.</td>
<td>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>immediateOwner</b>
</th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v3</td>
</tr>
<tr>
<td>cageCode</td>
<td>string</td>
<td>Cage Code</td>
<td>v3</td>
</tr>
<tr>
<td>integrityRecords</td>
<td>string</td>
<td>Returns:
<br>Yes - if the CAGE Code finds one or more matches in the database.
<br>No - if the CAGE Code does not find any match in the database.
<br>N/A - if the CAGE Code is null.</td>
<td>v3</td>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>predecessorsList</b>
</th>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Legal Business Name</td>
<td>v3</td>
</tr>
<tr>
<td>cageCode</td>
<td>string</td>
<td>Cage Code</td>
<td>v3</td>
</tr>
<tr>
<td>integrityRecords</td>
<td>string</td>
<td>Returns:
<br>Yes - if the CAGE Code finds one or more matches in the database.
<br>No - if the CAGE Code does not find any match in the database.
<br>N/A - if the CAGE Code is null.</td>
<td>v3</td>
</tr>
</table>
</details>

</details>

<details>
<summary><b>assertions</b><br>
</summary>

<details style="padding-left: 20px;">
<summary><b>goodsAndServices Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>disasterReliefData Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
</tr>

<tr>
<td>bondingLevels</td>
<td>string</td>
<td>Bonding Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>

</table>
</details>

<details style="padding-left: 20px;">
<summary><b>sizeMetrics Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>sizeMetricDetails Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>industrySpecificSizeMetrics Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>ediInformation Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
</tr>
<tr>
<td>ediInformationFlag</td>
<td>string</td>
<td>EDI Information Flag</td>
<td>v1<br>v2<br>v3</td>
</tr>
<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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

</details>

<details>
<summary><b>repsAndCerts</b><br>
</summary>

<details style="padding-left: 20px;">
<summary><b>certifications Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
</details>

<details style="padding-left: 20px;">
<summary><b>qualifications Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
<td>uniqueEntityId</td>
<td>string</td>
<td>Unique EntityId</td>
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
</details>

<details style="padding-left: 20px;">
<summary><b>financialAssistanceCertifications Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
</details>

<details style="padding-left: 20px;">
<summary><b>pdfLinks Sub Section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

</details>

<details>
<summary><b>pointsOfContact</b><br>
</summary>

<details style="padding-left: 20px;">
<summary><b>governmentBusinessPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>electronicBusinessPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>governmentBusinessAlternatePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>electronicBusinessAlternatePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>pastPerformancePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>pastPerformanceAlternatePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: Public</b>, which constitutes publicly available entities and their unclassified data
</th>
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

<details style="padding-left: 20px;">
<summary><b>partyPerformingCertificationPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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

<details style="padding-left: 20px;">
<summary><b>soleProprietorshipPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>accountsReceivablePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>accountsPayablePOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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

<details style="padding-left: 20px;">
<summary><b>ediPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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
</table>
</details>

<details style="padding-left: 20px;">
<summary><b>eliminationsPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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

<details style="padding-left: 20px;">
<summary><b>salesPOC Sub section</b><br>
</summary>
<table>
<tr>
<th colspan="4" style="background-color: #f1f1f1;"> <b>Applicable to the entities that are registered</b>
</th>
</tr>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<th style="background-color: #f1f1f1;" colspan="4"> <b>Sensitivity Level: FOUO</b>, which constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data
</th>
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

</details>
</details>

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Entity Management API</a>

<p><small><a href="#">Back to top</a></small></p>

## Additional Help References
Go to <a target="_blank" href="https://sam.gov/data-services/Data%20Dictionary/Entity%20Information">SAM.gov Data Services</a> for Reps and Certs Mapping and Data Dictionary documents.


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
       <td>Application Level Error Messages:
	<ol>
	<li> Invalid "Date" format:<br>v1 or v2: Date should be specified in the format: MM/dd/YYYY.<br>v3: "message":"Dates must be specified in the MM/DD/YYYY format.", "detail":"Any Date parameter must be provided in the MM/DD/YYYY format."</li>
	<li>Invalid Search Parameter:<br>v1 or v2: "Invalid Input Parameters","detail":"< user-provided invalid parameter >"<br>v3: "message":"The search parameter, < user-provided invalid parameter > does not exist.", "detail":"Please refer to https://open.gsa.gov/api/entity-api/ for a list of allowable search parameters."</li>
	<li>If 'includeSections', 'emailId' or 'format' is sent in the "q" parameter:<br>v1 or v2: The parameters: 'includeSections', 'emailId' or 'format' are not permitted inside Query Param(q).<br><br>
	If 'includeSections', 'emailId', 'format' or 'proceedingsData' is sent in the "q" parameter:<br>
	v3: "message":"The search parameters 'includeSections','emailId','format' and 'proceedingsData' are not permitted inside Query Param(q)", "detail":"Please provide these parameters separately".</li>
	<li>More than 100 ueiSAM values are sent:<br>
	v1 or v2: A maximum of 100 ueiSAM is allowed.<br>
	v3: "message": "More than 100 UEI SAM are not allowed.", "detail": "Please limit the number of UEI SAM to 100."</li>
	<li>More than 100 CAGE values are sent:<br>
	v1 or v2: A maximum of 100 CAGE Codes is allowed.<br>
	v3: "message":"More than 100 CAGE Codes are not allowed.", "detail":"Please limit the number of CAGE Codes to 100."</li>
	<li>If "emailId" is sent on its own:<br>v1 or v2: The parameter emailId must be provided in conjunction with the parameter format.<br>
	v3: "message":"The search parameter 'emailId' must be provided in conjunction with the search parameter 'format.", "detail":"Users can opt for receiving the requested JSON/CSV files in their emails."</li>
	<li>If "entityEFTIndicator" is sent on its own:<br>
	v1 or v2: entityEFTIndicator filter must be provided in conjunction with ueiSAM filter.<br>
	v3: message":"The search parameter 'entityEFTIndicator' must be provided in conjunction with the search parameter 'ueiSAM'.", "detail":"The entityEFTIndicator parameter cannot be provided on its own."</li>
	<li>File size exceeded for JSON or CSV exports:<br>
	v1 or v2: "Total Number of Records: < the total number > exceeded the maximum allowable limit: 1000000. Please provide a suitable search parameter to refine your search."<br>
	v3: "message":"Total Number of Records: < the total number > exceeded the maximum allowable limit: 1000000. Please provide a suitable search parameter to refine your search.", "detail":"Count Exceeded Error"</li>
	<li>JSON or CSV file generation is in-progress:<br>
	v1 or v2: File Processing in Progress. Please check again later.<br>
	v3: "message": "The requested JSON or CSV file is not generated yet. Please try again later.", "details": "Larger files will take some time to process."</li>
	<li>Using an expired Token for downloading JSON or CSV files:<br>
	v1 or v2: title":"Requested File is Expired and cannot be downloaded","detail":"We are not able to process your request"<br>
	v3: "message":"The requested JSON or CSV file token is expired.","detail":"Please verify the token number."</li>
	<li>More than 10,000 records are requested via "page" and "size" parameters:<br>
	v1 or v2: "title":"Results Too Large","detail":"The Page and Size search has exceeded 10,000 records (Page multiplied by Size). Please change the Page and Size accordingly."<br>
	v3: "message":"Results Too Large","detail":"The Page and Size search has exceeded 10,000 records (Page multiplied by Size). Please change the Page and Size accordingly."</li>
	<li>More than 10 for "size" is requested:<br>
	v1 or v2: "title":"size is < user requested size >","detail":"Size Cannot Exceed 10 Records"<br>
	v3: "message":"size is < user requested size >","detail":"Size Cannot Exceed 10 Records"</li>
	<li> Missing "Basic Auth" under "Authorization" and missing System Account credentials:<br>
	v1 or v2: No system account credentials are provided. Please provide credentials via basic authentication.</li>
	<li>Different IP Address than that mentioned in the System Account:<br>
	v1 or v2: IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system.</li>
	<li>API Key does not belong to the System Account:<br>v1 or v2: System Account and API Key you have provided do not match. Please visit your System Account and obtain the API Key from there.</li>
	<li> System Account has a different value for "Type of Connection":<br>
	v1 or v2: "title": "Connection type failure", "detail": "Insufficient privileges to perform the operation - System account must have Type of Connection as Restful",<br>
	v3: "message": "Connection type failure", "detail": "Insufficient privileges to perform the operation - System account must have Type of Connection as Restful",</li>
	<li>If GET is used with System Accounts:<br>
	v1 or v2: GET requests for Sensitive data are no longer supported. Please use POST requests to access the Sensitive Entity data.<br>
	v3: "message": "Permission denied", "detail": "GET requests for Sensitive data are no longer supported. Please use POST requests to access the Sensitive Entity data.",</li>
    <li>Insufficient API Key privileges to download a JSON or CSV File:<br>
	v1 or v2: The API Key is not authorized to access this < file type > Extract<br>v3: The API Key is not authorized to access this < file type > Extract</li>
	<li>A non-existing Reps and Certs PDF file is requested:<br>
	v1, v2, v3: The requested PDF File does not exist; the entity did not answer this type of Representations and Certifications data.</li>
	<li>If proceedingsData=Yes is sent on its own or in combination with includeSections=< a value other than integrityInformation >:<br>
	v3: "message": "The search parameter 'proceedingsData' must be provided in conjunction with includeSections=integrityInformation."</li>
	<li>If proceedingsData=< a value other than Yes > is provided:<br>
	v3: "message": "The search parameter 'proceedingsData' contains an invalid value - < user provided invalid value >."</li>
	<li>If proceedingsData parameter is sent in combination with samRegistered=No:<br>v3: "message": "The search parameter 'proceedingsData' does not apply to unregistered (samRegistered=No) entities."</li></ol>
	</td>

  </tr>
  <tr>
    <td>401</td>
    <td>1. Missing "Basic Auth" under "Authorization" and missing System Account credentials:<br>v3: "message": "The System Account Credentials are missing", "detail": "Please provide valid System Account User Name and Password.",<br><br>2. Providing "Basic Auth" under "Authorization", but missing or invalid System Account credentials:<br>v1 or v2: Unauthorized<br>v3: Unauthorized<br><br>3. Different IP Address than that mentioned in the System Account:<br>v3: "message": "Invalid IP Address", "detail": "The IP Addresses sending the API requests and the ones associated with the System Account must be the same.",<br><br>4. API Key does not belong to the System Account:<br>v3: "message": "System Account-API Key Mismatch", "detail": "The System Account and API Key you have provided do not match. Please refer to your System Account and obtain the API Key from there.",</td>
  </tr>
  <tr>
    <td>403 Forbidden</td>
    <td> 1. Missing API Key:<br>v1 or v2: No api_key was supplied in request body. Please submit with a valid API key.<br>v3: No api_key was supplied in request body. Please submit with a valid API key.<br><br>2. An invalid API Key:<br>v1 or v2: An invalid API key was supplied. Please submit with a valid API key.<br>v3: An invalid API key was supplied. Please submit with a valid API key.</td>
  </tr>
  <tr>
    <td>406</td>
    <td>1. Missing Accept Header:<br>v1 or v2: "title": "Invalid Accept Header", "detail": "Request Header parameter needs to pass valid Accept value",<br>v3: "message": "Missing or Invalid Request Header, Accept", "detail": "The allowable values are application/json, application/zip.",<br><br>2. Invalid Accept Header:<br>v1 or v2: "title": "Invalid Accept Header", "detail": "Could not find acceptable representation",<br>v3: "title": "Invalid Accept Header","detail": "Could not find acceptable representation",</td>
  </tr>
  <tr>
    <td>415 Unsupported Media Type</td>
    <td>Missing or Invalid Content-Type Header:<br>v1 or v2: "title": "Invalid Content-Type Header", "detail": "Request Header parameter needs to pass valid Content-Type value",<br>v3:"message": "Missing or Invalid Request Header, Content_Type", "detail": "The allowable value is application/json.",</td>
  </tr>
  <tr>
    <td colspan="2"> NOTE:<br>Error messages in v1 and v2 are returned in this fashion: httpStatus, title, detail, errorCode, source<br>Error messages in v3 are returned in this fashion: Status, timestamp, message, detail, errorCode, transaction_id</td>
  </tr>
</table>

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Example 1: Post April 3rd, 2022, I would like to obtain the registered entities that have undergone Address change and Name change resulting from EVS Monitoring.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiSAM=[ZQGGHJH74DW7~JH9ZARNKWKC7]&includeSections=entityRegistration,coreData
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key= < FOUO API Key >&ueiSAM=[ZQGGHJH74DW7~JH9ZARNKWKC7]&includeSections=entityRegistration,coreData
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&ueiSAM=[ZQGGHJH74DW7~JH9ZARNKWKC7]&includeSections=entityRegistration,coreData
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< FOUO API Key >&ueiSAM=[ZQGGHJH74DW7~JH9ZARNKWKC7]&includeSections=entityRegistration,coreData
<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
FOUO Response for the two records is provided in v2 and v3. <br>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
An Entity with an Address Change resulting from EVS Monitoring in v2:

"entityData": [
{
"entityRegistration": {
"samRegistered": "Yes",
"ueiSAM": "ZQGGHJH74DW7",
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
"outOfBusinessFlag": null,
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

An Entity with an Address Change resulting from EVS Monitoring in v3:

"entityData": [
{
"entityRegistration": {
"samRegistered": "Yes",
"ueiSAM": "ZQGGHJH74DW7",
"entityEFTIndicator": null,
"cageCode": "855J5",
"dodaac": null,
"legalBusinessName": "INTERNATIONAL BUSINESS MACHINES CORPORATION",
"dbaName": null,
"purposeOfRegistrationCode": "Z2",
"purposeOfRegistrationDesc": "All Awards",
"registrationStatus": "Active",
"evsSource": "E&Y",
"registrationDate": "2018-07-24",
"lastUpdateDate": "2021-06-10",
"registrationExpirationDate": "2021-08-10",
"activationDate": "2020-08-13",
"ueiStatus": "Active",
"ueiExpirationDate": "2021-08-10",
"ueiCreationDate": "2021-06-25",
"publicDisplayFlag": "Y",
"exclusionStatusFlag": "N",
"exclusionURL": null,
"dnbOpenData": "Y"
},
"coreData": {
"entityHierarchyInformation": {
"immediateParentEntity": {
"ueiSAM": null,
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": "International Business Machines Corporation",
"evsSource": "E&Y",
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
"legalBusinessName": "International Business Machines Corporation",
"evsSource": "E&Y",
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
"legalBusinessName": "International Business Machines Corporation",
"evsSource": "E&Y",
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
"outOfBusinessFlag": null,
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

An Entity with a Name Change resulting from EVS Monitoring in v2:

"entityData": [
{
"entityRegistration": {
"samRegistered": "Yes",
"ueiSAM": "JH9ZARNKWKC7",
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
"outOfBusinessFlag": null,
"monitoringStatus": "Y",
"lastUpdated": "Y",
"addressLine1": null,
"addressLine2": null,
"city": null,
"postalCode": null,
"stateOrProvinceCode": null,
"countryCode": null
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

An Entity with a Name Change resulting from EVS Monitoring in v3:

"entityData": [
{
"entityRegistration": {
"samRegistered": "Yes",
"ueiSAM": "JH9ZARNKWKC7",
"entityEFTIndicator": null,
"cageCode": "7X7G0",
"dodaac": null,
"legalBusinessName": "IBM Southeast Employees' Credit Union",
"dbaName": null,
"purposeOfRegistrationCode": "Z1",
"purposeOfRegistrationDesc": "Federal Assistance Awards",
"registrationStatus": "Active",
"evsSource": "E&Y",
"registrationDate": "2017-07-27",
"lastUpdateDate": "2021-03-11",
"registrationExpirationDate": "2022-03-03",
"activationDate": "2021-03-05",
"ueiStatus": "Active",
"ueiExpirationDate": "2022-03-03",
"ueiCreationDate": "2021-06-25",
"publicDisplayFlag": "N",
"exclusionStatusFlag": "N",
"exclusionURL": null,
"dnbOpenData": "Y"
},
"coreData": {
"entityHierarchyInformation": {
"immediateParentEntity": {
"ueiSAM": null,
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": "IBM Southeast Employees' Credit Union",
"evsSource": "E&Y",
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
"legalBusinessName": "IBM Southeast Employees' Credit Union",
"evsSource": "E&Y",
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
"legalBusinessName": "IBM Southeast Employees' Credit Union",
"evsSource": "E&Y",
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
"outOfBusinessFlag": null,
"monitoringStatus": "Y",
"lastUpdated": "Y",
"addressLine1": null,
"addressLine2": null,
"city": null,
"postalCode": null,
"stateOrProvinceCode": null,
"countryCode": null
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

### Example 2: Post April 3rd, 2022, I would like to obtain the publicly available not registered/ID Assigned entities.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v3/entities?api_key=< API Key >&samRegistered=No&includeSections=entityRegistration
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< API Key >&samRegistered=No&includeSections=entityRegistration
<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
"entityData": [
    {
        "entityRegistration": {
        "samRegistered": "No",
        "ueiSAM": "JF19T45AM8F2",
        "cageCode": "null",
        "legalBusinessName": "Anchored Consulting Group LLC",
        "registrationStatus": "Active",
        "evsSource": null,
        "ueiStatus": "Active",
        "ueiExpirationDate": null,
        "ueiCreationDate": "2021-07-20",
        "publicDisplayFlag": "Y",
        "dnbOpenData": "Y"
    }
</pre>
</code>
</p>
</details>

### Example 3: Get the "entityRegistration" and "coreData" sections for all the "Joint Venture Women" or "Asian-Pacific" Entities that are registered for "All Awards" or "Federal Assistance Awards".
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key=< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key=< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData
<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
FOUO Response for one record is provided as an example in v2 and v3. <br>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
V2:
    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "V4EUJ1MPVH45",
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
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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
            }

"links": {
"selfLink": "https://api.sam.gov/entity-information/v2/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=0&size=10",
"nextLink": "https://api.sam.gov/entity-information/v2/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=1&size=10"
}
}
V3:
"entityData": [
{
"entityRegistration": {
"samRegistered": "Yes",
"ueiSAM": "V4EUJ1MPVH45",
"entityEFTIndicator": null,
"cageCode": "92G16",
"dodaac": null,
"legalBusinessName": "HH Real Estate Properties Corporation",
"dbaName": null,
"purposeOfRegistrationCode": "Z1",
"purposeOfRegistrationDesc": "Federal Assistance Awards",
"registrationStatus": "Active",
"evsSource": "E&Y",
"registrationDate": "2021-06-23",
"lastUpdateDate": "2021-06-24",
"registrationExpirationDate": "2022-06-23",
"activationDate": "2021-06-24",
"ueiStatus": "Active",
"ueiExpirationDate": "2022-06-23",
"ueiCreationDate": "2021-06-25",
"publicDisplayFlag": "Y",
"exclusionStatusFlag": "N",
"exclusionURL": null,
"dnbOpenData": "Y"
},
"coreData": {
"entityHierarchyInformation": {
"immediateParentEntity": {
"ueiSAM": null,
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": null,
"evsSource": "E&Y",
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
"legalBusinessName": null,
"dbaName": null,
"outOfBusinessFlag": null,
"monitoringStatus": null,
"lastUpdated": null,
"addressLine1": null,
"addressLine2": null,
"city": null,
"postalCode": null,
"stateOrProvinceCode": null,
"countryCode": null
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
"selfLink": "https://api.sam.gov/entity-information/v3/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=0&size=10",
"nextLink": "https://api.sam.gov/entity-information/v3/entities?purposeOfRegistrationCode=Z1%7EZ2&q=%28businessTypeDesc%3A%27Joint+Venture+Women%27+OR+businessTypeDesc%3A%27Asian-Pacific%27%29&includeSections=entityRegistration%2CcoreData&page=1&size=10"
}
}
</pre>
</code>
</p>
</details>

### Example 4: Get Entities with no Hierarchy, a small hierarchy, and a large Hierarchy.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key=< A valid FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key=< A valid FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?< A valid FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?< A valid FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
FOUO Responses for the three records are provided in v2 and v3.
<br>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
Entity with no Hierarchy in v2:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JK9SLMFNHKP4",
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
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

Entity with no Hierarchy in v3:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JK9SLMFNHKP4",
                "entityEFTIndicator": null,
                "cageCode": "87AW0",
                "dodaac": null,
                "legalBusinessName": "BRADLEY DEFENSE SOLUTIONS INC",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Inactive",
                "evsSource": "E&Y",
                "registrationDate": "2018-11-19",
                "lastUpdateDate": "2021-01-21",
                "registrationExpirationDate": "2019-11-19",
                "activationDate": "2018-11-29",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2019-11-19",
                "ueiCreationDate": "2021-06-25",
                "publicDisplayFlag": "Y",
                "exclusionStatusFlag": "N",
                "exclusionURL": null,
                "dnbOpenData": null
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                                "legalBusinessName": null,
                                "evsSource": "E&Y",
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
                                "legalBusinessName": null,
                                "evsSource": "E&Y",
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
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

Entity with a small Hierarchy in v2:

        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JXCSEVSG7785",
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
                                "legalBusinessName": "REPUBBLICA ITALIANA",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province", 
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CWVEJHEWM684",
                                "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "NLXHHB71VMK5",
                        "legalBusinessName": "REPUBBLICA ITALIANA",
                        "physicalAddress": {
                            "addressLine1": "Address Line1",
                            "addressLine2": "Address Line2",
                            "city": "City",
                            "stateOrProvinceCode": "State/Province",
                            "countryCode": "XXX",
                            "zipCode": "11111",
                            "zipCodePlus4": "9999"
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

Entity with a small Hierarchy in v3:

        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "JXCSEVSG7785",
                "entityEFTIndicator": null,
                "cageCode": "AQ773",
                "dodaac": null,
                "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE - CNR",
                "dbaName": "ICB ISTITUTO DI CHIMICA BIOMOLECOLARE",
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "evsSource": "E&Y",
                "registrationDate": "2018-03-02",
                "lastUpdateDate": "2021-03-03",
                "registrationExpirationDate": "2022-02-25",
                "activationDate": "2021-03-03",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2022-02-25",
                "ueiCreationDate": "2021-06-25",
                "publicDisplayFlag": "Y",
                "exclusionStatusFlag": "N",
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                                "legalBusinessName": "REPUBBLICA ITALIANA",
                                "evsSource": "E&Y",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CWVEJHEWM684",
                                "legalBusinessName": "CONSIGLIO NAZIONALE DELLE RICERCHE",
                                "evsSource": "E&Y",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "NLXHHB71VMK5",
                        "legalBusinessName": "REPUBBLICA ITALIANA",
                        "physicalAddress": {
                            "addressLine1": "Address Line1",
                            "addressLine2": "Address Line2",
                            "city": "City",
                            "stateOrProvinceCode": "State/Province",
                            "countryCode": "XXX",
                            "zipCode": "11111",
                            "zipCodePlus4": "9999"
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

Entity with a large Hierarchy in v2:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "MJ5MN6SGYKF6",
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
                                "legalBusinessName": "AIRBUS SAS",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CK6JEE77RH16",
                                "legalBusinessName": "ASTRIUM SAS",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "QM7GAR7U8NK3",
                        "legalBusinessName": "Airbus SE",
                        "physicalAddress": {
                            "addressLine1": "Address Line1",
                            "addressLine2": "Address Line2",
                            "city": "City",
                            "stateOrProvinceCode": "State/Province",
                            "countryCode": "XXX",
                            "zipCode": "11111",
                            "zipCodePlus4": "9999"
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

Entity with a large Hierarchy in v3:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "MJ5MN6SGYKF6",
                "entityEFTIndicator": null,
                "cageCode": "F9073",
                "dodaac": null,
                "legalBusinessName": "AIRBUS DEFENCE AND SPACE SAS",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "evsSource": "E&Y",
                "registrationDate": "2018-08-23",
                "lastUpdateDate": "2021-05-26",
                "registrationExpirationDate": "2021-12-06",
                "activationDate": "2020-06-09",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2021-12-06",
                "ueiCreationDate": "2021-06-25",
                "publicDisplayFlag": "Y",
                "exclusionStatusFlag": "N",
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                                "legalBusinessName": "AIRBUS SAS",
                                "evsSource": "E&Y",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            },
                            "hqParent": {
                                "ueiSAM": "CK6JEE77RH16",
                                "legalBusinessName": "ASTRIUM SAS",
                                "evsSource": "E&Y",
                                "physicalAddress": {
                                    "addressLine1": "Address Line1",
                                    "addressLine2": "Address Line2",
                                    "city": "City",
                                    "stateOrProvinceCode": "State/Province",
                                    "countryCode": "XXX",
                                    "zipCode": "11111",
                                    "zipCodePlus4": "9999"
                                },
                                "phoneNumber": null
                            }
                        }
                    ],
                    "ultimateParentEntity": {
                        "ueiSAM": "QM7GAR7U8NK3",
                        "legalBusinessName": "Airbus SE",
                        "evsSource": "E&Y",
                        "physicalAddress": {
                            "addressLine1": "Address Line1",
                            "addressLine2": "Address Line2",
                            "city": "City",
                            "stateOrProvinceCode": "State/Province",
                            "countryCode": "XXX",
                            "zipCode": "11111",
                            "zipCodePlus4": "9999"
                        },
                        "phoneNumber": null
                    },
                    "evsMonitoring": {
                        "legalBusinessName": null,
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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
</pre>
</code>
</p>
</details>

### Example 5: Get an Entity with no EVS Monitoring.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key= < FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< FOUO API Key >&includeSections=entityRegistration,coreData
<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
FOUO Response for the record is provided in v2 and v3. <br>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
v2:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "XY1XDER4WPJ6",
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
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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

V3:

    "entityData": [
        {
            "entityRegistration": {
                "samRegistered": "Yes",
                "ueiSAM": "XY1XDER4WPJ6",
                "entityEFTIndicator": null,
                "cageCode": "7F0U0",
                "dodaac": null,
                "legalBusinessName": "Enterprise Assurance Management",
                "dbaName": null,
                "purposeOfRegistrationCode": "Z2",
                "purposeOfRegistrationDesc": "All Awards",
                "registrationStatus": "Active",
                "evsSource": "E&Y",
                "registrationDate": "2015-07-10",
                "lastUpdateDate": "2021-03-30",
                "registrationExpirationDate": "2021-10-25",
                "activationDate": "2020-04-30",
                "ueiStatus": "Active",
                "ueiExpirationDate": "2021-10-25",
                "ueiCreationDate": "2021-06-25",
                "publicDisplayFlag": "Y",
                "exclusionStatusFlag": "N",
                "exclusionURL": null,
                "dnbOpenData": "Y"
            },
            "coreData": {
                "entityHierarchyInformation": {
                    "immediateParentEntity": {
                        "ueiSAM": null,
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                                "legalBusinessName": null,
                                "evsSource": "E&Y",
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
                                "legalBusinessName": null,
                                "evsSource": "E&Y",
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
                        "legalBusinessName": null,
                        "evsSource": "E&Y",
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
                        "dbaName": null,
                        "outOfBusinessFlag": null,
                        "monitoringStatus": null,
                        "lastUpdated": null,
                        "addressLine1": null,
                        "addressLine2": null,
                        "city": null,
                        "postalCode": null,
                        "stateOrProvinceCode": null,
                        "countryCode": null
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
</pre>
</code>
</p>
</details>


### Example 6: How do I obtain both the Public and NPDY registered “Responsibility & Integrity Record” data with my Public API Key?
<details>
<summary>Request URL</summary>
<b>Production URL:</b> 
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key=< PUBLIC API Key >&includeSections=integrityInformation
<br><br>
<b>Alpha URL:</b> 
<br><br>
https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< PUBLIC API Key >& includeSections=entityRegistration,integrityInformation<br><br>
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
"entityData": [
{
      "entityRegistration": {
        "samRegistered": "Yes",
        "ueiSAM": "DE95TS6Y5XR6",
        "entityEFTIndicator": null,
        "cageCode": "CJ542",
        "dodaac": null,
        "legalBusinessName": "ng4T GmbH",
        "dbaName": null,
        "purposeOfRegistrationCode": "Z2",
        "purposeOfRegistrationDesc": "All Awards",
        "registrationStatus": "Active",
        "evsSource": "D&B",
        "registrationDate": "2016-05-09",
        "lastUpdateDate": "2022-05-20",
        "registrationExpirationDate": "2022-05-20",
        "activationDate": "2021-05-20",
        "ueiStatus": "Active",
        "ueiExpirationDate": null,
        "ueiCreationDate": "2020-06-18",
        "publicDisplayFlag": "Y",
        "exclusionStatusFlag": "N",
        "exclusionURL": null,
        "dnbOpenData": null
      },
{
"integrityInformation": {
"entitySummary": {
"ueiSAM": "DE95TS6Y5XR6",
"cageCode": "CJ542",
"legalBusinessName": "ng4T GmbH",
"physicalAddress": {
"addressLine1": "Address1",
"addressLine2": "Address2",
"city": "City",
"stateOrProvinceCode": "XX",
"zipCode": "11111",
"zipCodePlus4": "1111",
"countryCode": "ABC"
}
},
"proceedingsData": {
"proceedingsQuestion1": "YES",
"proceedingsQuestion2": "YES",
"proceedingsQuestion3": "YES",
"proceedingsRecordCount": 1,
"listOfProceedings": [
{
"proceedingDate": "1000-01-01",
"instrumentNumber": "XXXXX",
"instrument": "U.S.Federal issued contract",
"proceedingStateCode": "XX",
"proceedingType": "Criminal",
"disposition": "Other acknowledgment of fault",
"proceedingDescription": "Proceeding Description"
}
],
"proceedingsPointsOfContact": {
"proceedingsPOC": {
"firstName": "First Name",
"middleInitial": "Z",
"lastName": "Last Name",
"title": "Title",
"addressLine1": "Address1",
"addressLine2": "Address2",
"city": "City",
"stateOrProvinceCode": "XX",
"zipCode": "11111",
"zipCodePlus4": "1111",
"countryCode": "ABC"
},
"proceedingsAlternatePOC": {
"firstName": "First Name",
"middleInitial": "Z",
"lastName": "Last Name",
"title": "Title",
"addressLine1": "Address1",
"addressLine2": "Address2",
"city": "City",
"stateOrProvinceCode": "XX",
"zipCode": "11111",
"zipCodePlus4": "1111",
"countryCode": "ABC"
},
}
},
"responsibilityInformationCount": 2,
"responsibilityInformationList": [
{
"recordType": "C",
"recordTypeDesc": "Termination for Cause",
"recordDate": "2018-04-10",
"procurementIdOrFederalAssistanceId": "W9127S18F0005P00002",
"referenceIdvPiid": "W9127S15D0018",
"attachment": "< Pre-signed URL >"
},
{
"recordType": "C",
"recordTypeDesc": "Termination for Cause",
"recordDate": "2018-04-10",
"procurementIdOrFederalAssistanceId": "W9127S16P0075P00003",
"referenceIdvPiid": null,
"attachment": "< Pre-signed URL >"
}
],
"corporateRelationships": {
"highestOwner": {
"legalBusinessName": "WSP GLOBAL INC",
"cageCode": “7NDG5",
"integrityRecords": "Yes"
},
"immediateOwner": {
"legalBusinessName": "LOUIS BERGER U.S., INC.",
"cageCode": "7NDG5",
"integrityRecords": "No"
},
"predecessorsList": [
{
"legalBusinessName": null,
"cageCode": null,
"integrityRecords": "N/A"
}
]
}
}
},
{
"entityRegistration": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
"integrityInformation": {
        "entitySummary": {
          "ueiSAM": "VNP5VWMPAEF3",
          "cageCode": null,
          "legalBusinessName": "Harrisonburg Rescue Squad Inc",
          "physicalAddress": {
            "addressLine1": "Address1",
            "addressLine2": "Address2",
            "city": "City",
            "stateOrProvinceCode": "XX",
            "zipCode": "11111",
            "zipCodePlus4": "1111",
            "countryCode": "ABC"
          }
        },
        "proceedingsData": {
          "proceedingsQuestion1": null,
          "proceedingsQuestion2": null,
          "proceedingsQuestion3": null,
          "proceedingsRecordCount": 0,
          "listOfProceedings": [],
          "proceedingsPointsOfContact": {
            "proceedingsPOC": {
              "firstName": null,
              "middleInitial": null,
              "lastName": null,
              "title": null,
              "addressLine1": null,
              "addressLine2": null,
              "city": null,
              "stateOrProvinceCode": null,
              "zipCode": null,
              "zipCodePlus4": null,
              "countryCode": null
            },
            "proceedingsAlternatePOC": {
              "firstName": null,
              "middleInitial": null,
              "lastName": null,
              "title": null,
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
        "responsibilityInformationCount": 1,
        "responsibilityInformationList": [
          {
            "recordType": "C",
            "recordTypeDesc": "Termination for Cause",
            "recordDate": "2019-02-15",
            "procurementIdOrFederalAssistanceId": "W912DQ18C1026",
            "referenceIdvPiid": null,
            "attachment": "< Pre-signed URL >"
          }
        ],
        "corporateRelationships": {
          "highestOwner": {
            "legalBusinessName": null,
            "cageCode": null,
            "integrityRecords": "N/A"
          },
          "immediateOwner": {
            "legalBusinessName": null,
            "cageCode": null,
            "integrityRecords": "N/A"
          },
          "predecessorsList": [
            {
              "legalBusinessName": null,
              "cageCode": null,
              "integrityRecords": "N/A"
            }
          ]
        }
      }
    }
  ]
</pre>
</code>
</p>
</details>

### Example 7: How do I obtain both the Public and NPDY not registered/ID Assigned “Responsibility & Integrity Record” data with my Public API Key?

<details>
<summary>Request URL</summary>
<b>Production URL:</b> 
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key=< PUBLIC API Key >&samRegistered=No&includeSections=integrityInformation,All
<br><br>
<b>Alpha URL:</b> 
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< PUBLIC API Key >&samRegistered=No&includeSections=integrityInformation,All
</details>

<details>
<summary>Response (JSON Output)</summary>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
{
      "entityRegistration": {
        "samRegistered": "No",
        "ueiSAM": "WB23FJYKNLM1",
        "cageCode": null,
        "legalBusinessName": "9TH CIRCUIT COURT OF APPEALS",
        "registrationStatus": "ID Assigned",
        "evsSource": null,
        "ueiStatus": "Active",
        "ueiExpirationDate": null,
        "ueiCreationDate": "2022-02-22",
        "publicDisplayFlag": "Y",
        "dnbOpenData": null
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
        }
      },
      "integrityInformation": {
        "responsibilityInformationCount": 1,
        "responsibilityInformationList": [
          {
            "recordType": "C",
            "recordTypeDesc": "Termination for Cause",
            "recordDate": "2022-05-09",
            "procurementIdOrFederalAssistanceId": "BG567815C0001",
            "referenceIdvPiid": null,
            "attachment": "< Pre-signed URL >"
          }            
       ]
      }
    },
    {
      "entityRegistration": {
        "samRegistered": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "ueiSAM": "TST987654321",
        "cageCode": null,
        "legalBusinessName": "HAYES, INC.",
        "registrationStatus": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "evsSource": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "ueiStatus": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "ueiExpirationDate": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "ueiCreationDate": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "publicDisplayFlag": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov.",
        "dnbOpenData": "This entity has opted out of public search. Only federal government users and users associated with this entity can view this record on SAM.gov."
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
        }
      },
      "integrityInformation": {
        "responsibilityInformationCount": 3,
        "responsibilityInformationList": [
          {
            "recordType": "C",
            "recordTypeDesc": "Termination for Cause",
            "recordDate": "2022-05-09",
            "procurementIdOrFederalAssistanceId": "BG567815C0001",
            "referenceIdvPiid": null,
            "attachment": "< Pre-signed URL >"
          },
          {
            "recordType": "C",
            "recordTypeDesc": "Termination for Cause",
            "recordDate": "2022-05-17",
            "procurementIdOrFederalAssistanceId": "ABAB0113C0001",
            "referenceIdvPiid": null,
            "attachment": "< Pre-signed URL >"
          },
          {
            "recordType": "W",
            "recordTypeDesc": "Material Failure to Comply with Closeout Requirements",
            "recordDate": "2022-05-17",
            "procurementIdOrFederalAssistanceId": "ABAB0113C0001",
            "referenceIdvPiid": null,
            "attachment": "< Pre-signed URL >"
          }
       ]
      }
    }
  ]
</pre>
</code>
</p>
</details>

### Example 8:  I have a Fed System Account and the Role required to access the not registered/ID Assigned entities. How can I obtain them?
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v3/entities?api_key= < API Key >&samRegistered=No
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< API Key >&samRegistered=No<br>
<br><br>
</details>

<details>
<summary>Response</summary>
Response for one Public and one NPDY record is provided.<br>
<p>
<code style="font-family:Source Sans Pro; font-size: 18px">
<pre>
A Public unregistered/ID Assigned entity:

"entityData": [
{
"entityRegistration": {
"samRegistered": "No",
"ueiSAM": "JF19T45AM8F2",
"cageCode": "null",
"legalBusinessName": "Anchored Consulting Group LLC",
"registrationStatus": "Active",
"evsSource": null,
"ueiStatus": "Active",
"ueiExpirationDate": null,
"ueiCreationDate": "2021-07-20",
"publicDisplayFlag": "Y",
"dnbOpenData": "Y"
},
"coreData": {
"physicalAddress": {
"addressLine1": "Address 1",
"addressLine2": "null",
"city": "City",
"stateOrProvinceCode": "XX",
"zipCode": "11111",
"zipCodePlus4": null,
"countryCode": "XXX"
}
}
},

An NPDY unregistered/ID Assigned entity:

"entityData": [
{
"entityRegistration": {
"samRegistered": "No",
"ueiSAM": "MC4NTRBK7AX5",
"cageCode": "null",
"legalBusinessName": "FPDS",
"registrationStatus": "Active",
"evsSource": null,
"ueiStatus": "Active",
"ueiExpirationDate": null,
"ueiCreationDate": "2021-07-20",
"publicDisplayFlag": "N",
"dnbOpenData": "Y"
},
"coreData": {
"physicalAddress": {
"addressLine1": "Address 1",
"addressLine2": "null",
"city": "City",
"stateOrProvinceCode": "XX",
"zipCode": "11111",
"zipCodePlus4": "1111",
"countryCode": "XXX"
}
}
},
</pre>
</code>
</p>
</details>

### Example 9: I would like to obtain an asynchronous CSV file of the Active registered entities.
<details>
<summary>Request URL</summary>
<b>Production URL:</b> https://api.sam.gov/entity-information/v2/entities?api_key= < FOUO API Key >&registrationStatus=A
<br><br>https://api.sam.gov/entity-information/v3/entities?api_key= < FOUO API Key >&registrationStatus=A
<br><br>
<b>Alpha URL:</b> https://api-alpha.sam.gov/entity-information/v2/entities?api_key=< FOUO API Key >&registrationStatus=A
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?api_key=< FOUO API Key >&registrationStatus=A
<br><br>
</details>

<details>
<summary>Response</summary>
Click to view a sample v2 CSV Response for one record <a href="v1/v2_CSV_Response.xlsx" target="_blank">v2_CSV_Response</a><br>
Click to view a sample v3 CSV Response for one record <a href="v1/v3_CSV_Response.xlsx" target="_blank">v3_CSV_Response</a><br>
</details>

### Example 10: Get a JSON file of all the Entities using the POST request:<br>
<details>
<summary>Request URL</summary>
<b>Production URL:</b>: https://api.sam.gov/entity-information/v2/entities?format=JSON
<br><br>https://api.sam.gov/entity-information/v3/entities?format=JSON
<br><br>
<b>Alpha URL:</b> : https://api-alpha.sam.gov/entity-information/v2/entities?format=JSON
<br><br>https://api-alpha.sam.gov/entity-information/v3/entities?format=JSON
<br><br>
<ul>
<li> Click to view v2 Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM.png">Sample Authorization</a></li>
<li> Click to view v2 Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM.PNG">Sample Request Header</a></li>
<li>Click to view v3 Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM_V3.png">Sample Authorization</a></li>
<li>Click to view v3 Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM_V3.png">Sample Request Header</a></li>
</ul>
</details>
<details>
<summary>Response</summary>
<ul>
<li><b>Download link with the token:</b><br> 
Extract File will be available for download with POST url:
https://api.sam.gov/entity-information/v2/download-entities?token=< value > in some time. If you have provided an email id, you will get a notification email once file is ready for download. Requests for Larger Set of Data may take longer time to process.
<br><br>Extract File will be available for download with POST url:
https://api.sam.gov/entity-information/v3/download-entities?token=< value > in some time. If you have provided an email id, you will get a notification email once file is ready for download. Requests for Larger Set of Data may take longer time to process.
</li>

<li><b>Download the file using the token via POST:</b><br> 
https://api.sam.gov/entity-information/v2/download-entities?token=< value>
<br>https://api.sam.gov/entity-information/v3/download-entities?token=< value >
<ul>
<li>Click to view v2 Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM_Download.png">Sample Authorization</a></li>
<li>Click to view v2 Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM_Download.PNG">Sample Request Header</a></li>

<li>Click to view v3 Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/Auth_EM_Download_V3.png">Sample Authorization</a></li>
<li>Click to view v3 Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/Header_EM_Download_V3.png">Sample Request Header</a></li>
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

| Date       | Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 06/03/2019 | v0.9    | Base Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 07/03/2019 | v1.0    | * Alpha endpoint for the Sensitive version of the API has been added.<br><br>  * agencyBusinessPurposeCode, agencyBusinessPurposeDesc, bondingLevels, companySecurityLevelCode, companySecurityLevelDesc, highestEmployeeSecurityLevelCode, highestEmployeeSecurityLevelDesc were added to FOUO and Sensitive api's schema. <br><br>  * New Filters agencyBusinessPurposeCode, companySecurityLevelCode and highestEmployeeSecurityLevelCode have been added for FOUO and Sensitive api's. <br><br>  * country and stateOrProvince were updated to countryCode and stateOrProvinceCode across all versions of api.<br><br>  * ediInformationFlag was added across all versions of api.<br><br>  * geographicalAreaServedmetropolitanStatisticalAreaCode, geographicalAreaServedmetropolitanStatisticalAreaName were added across all versions of api instead of geographicalAreaServedMSAName.<br><br>  * certificationEntryDate, certificationExitDate were added to SBA Business Types across all versions of api instead of expirationDate.<br><br>  * updateDate was added as a filter across all versions of api. |
| 08/15/2019 | v1.1    | * Alpha endpoints for public and FOUO API were updated from version 0.9 to version 1.0.<br><br> * Warning message added under Getting Started to inform users of API version changes.<br><br> *Added Beta.SAM.Gov to the page title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 09/25/2019 | v1.2    | Beta endpoints for public and FOUO API were updated from version 0.9 to version 1.0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 11/25/2019 | v1.3    | * Added D&B Disclaimer in the Additional Information section.<br><br> * Updated the specifications to include parameters and fields that will be included in v2 of the API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 12/20/2019 | v1.4    | * Removed Email, Fax,US phone number and non-us phone number from public poc sections for v2. <br><br> * Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 02/25/2020 | v1.5    | * Added Examples for v2 requests and responses.  <br><br> * Updated Alpha endpoint to meet new API standards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 02/28/2020 | v1.6    | * Updated Beta endpoint to meet new API standards. <br><br> * Removed "COMING SOON" information in Getting Started section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 05/04/2020 | v1.7    | * Added V2 endpoint information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 06/10/2020 | v1.8    | * Added the endpoint, new process and an example for the Sensitive API .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 08/17/2020 | v1.9    | * The "Sensitive API Process" subsection under the "Sensitive API Information" section has been updated with additional steps for sending Sensitive requests (sending "Accept" and "Content-Type" parameters).<br><br> * The Sample Request Header screenshots under "Example 13" have been updated to reflect the new parameters as well. Two new codes (406, 415) have been added in the "HTTP Response Codes" section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10/15/2020 | v2.0    | * Updated the description for the correspondenceFlag field<br><br> * Added the http response code description when providing the entityEFTIndicator parameter without providing the ueiDUNS or ueiSAM prarameter. <br><br> * Updated the description for the entityEFTIndicator parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 12/07/2020 | v2.1    | * Updated the Sensitive response documentation to include mpin.<br><br> * Updated the Query String Parameters to include the sbaBusinessTypeCode, sbaBusinessTypeDesc, companySecurityLevelDesc, highestEmployeeSecurityLevelDesc, and agencyBusinessPurposeDesc.<br><br> * Updated the definitions and examples in the Query String Parameters.<br><br> * Updated emailId parameter description.<br><br> * Updated sensitivity parameter description.<br><br> * Corrected zip code related fields in V1 dnbMonitoring and samMonitoring sections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 01/22/2021 | v2.2    | * Added the highlighted changes message under the "Getting Started" section.<br><br> * Updated the repsAndCerts schema for Public, FOUO, and Sensitive.<br><br> * Added note to the noPublicDisplayFlag field in the response.<br><br>  * Added the Beta V2 endpoints.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 02/05/2021 | v2.3    | * Added message to includeSections that user can provide "All".<br><br> * Added message about special characters that cannot be used in API request.<br><br> * Updated the exclusionStatusFlag definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 03/12/2021 | v2.4    | * Added Http Response for invalid IP address.<br><br> * Added note to sensitivity parameter explaining use of POST call.<br><br> * Added note under repsAndCerts section about use with format parameter.<br><br> * Added NOTE under FOUO API Information Expected Results section and Sensitive API Information Sensitive API Process sections mentioning only system account keys can be used to access data.<br><br> * Removed the message stating that this page is not FireFox compliant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 
| 04/08/2021 | v2.5    | * Updated Contact Us information.<br><br> * Updated pointsOfContact fields information for public api.<br><br> * Updated Application Level Error Messages in HTTP Response Codes section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 
| 05/12/2021 | v2.6    | * Updated instances of beta.sam.gov to SAM.gov.<br><br> * Removed non-relevant information for Beta api.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 
| 07/16/2021 | v2.7    | * Updated the instructions on sending "Basic Auth" under the "Authorization" header.<br><br> * Added the Type of Connections and Rate Limits table.<br><br> * Updated the Contact Us information.<br><br> * Added example curl requests.<br><br> * Updated the examples.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 07/20/2021 | v2.8    | * Added v3 documentation.<br><br> * Updated OpenAPI specification file.<br><br> * Updated HTTP Response Codes.<br><br> * Added v3 Examples.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 09/21/2021 | v2.9    | * Added the "Additional Help References" section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10/06/2021 | v3.0    | * Updated the "Contact Us" section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 
| 10/21/2021 | v3.1    | * Updated Examples - Added Example 1 and Example 2 to indicate the post April 3rd, 2022 behavior.<br><br> * Added error messages #23 and #24 to the 400 level http response codes.<br><br> * Added the Version 3 endpoint.<br><br> * Added notes in the Query String Parameters, Expected Result and HTTP Response Codes sections to highlight the until and after April 3rd, 2022 behavior.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 02/01/2022 | v3.2    | * Update the OpenAPI Specification File to include the V3 endpoints.<br><br> * Updated the OpenAPI Specification File to reflect the correct behavior for the V3 exclusionsStatusFlag parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 04/04/2022 | v3.3    | * Removed duns information from the documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 08/08/2022 | v3.4    | * Updated to clarify the use of Controlled Unclassified Information (CUI) data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 08/10/2022 | v3.5    | * Introduced a header to clearly distinguish the applicability of the section or sub-section to the registered entities and/or unregistered/ID Assigned entities.<br><br> * Included the “Responsibility & Integrity Record” API changes in the "API Description" and "Examples" sections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 09/19/2022 | v3.6    | * Updated "Description" for includeSections in the "Query String Parameters" section.<br><br> * Updated "entitySummary Sub Section" in the "Response Schema" section.<br><br> * Added "responsibilityInformationCount Sub Section" in the "Response Schema" section.<br><br> * Updated the “Examples” section - modified Example 6, added Example 7 and revised numbering of other Examples accordingly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 10/19/2022 | v3.7    | * Added a new Public search parameter, "proceedingsData" in the "API Description" - "Query String Parameters" section.<br><br> * Added new validation rules for "proceedingsData" in the "HTTP Response Codes" section.<br><br> * Updated the yaml file to include proceedingsData as a search parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10/25/2022 | v3.8    | *  Updated the response schema for the API Description 🡪 Response Schema 🡪 integrityInformation 🡪 proceedingsData Sub Section to show the newly added field, "proceedingsRecordCount".<br><br> * Updated Example 6 🡪 Response (JSON Output) to show the newly added field, "proceedingsRecordCount".<br><br> * Updated Reps and Certs help documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 11/25/2022 | v3.9    | *  Updated SAM Functional Data Dictionary 🡪 Removed  DUNS/D&B References.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 01/17/2023 | v4.0    | *  Uploaded a revised Data Dictionary with data fields arranged in the Alphabetical order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 01/30/2023 | v4.1    | *  Uploaded a revised Data Dictionary with data fields added for Proceedings and Responsibility/Qualification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 02/28/2023 | v4.2    | *  Removed MPIN occurrences from the Data Dictionary and the "Overview" > "Sensitive (CUI) Data" section.  <br><br> * Indicated that MPIN has been deprecated in the "Response Schema" >  "coreData" >  "entityInformation Sub Section".
| 06/27/2023 | v4.3    | * Uploaded a revised Data Dictionary with updated Socio Economic Self Selections.
| 08/22/2023 | v4.4    | * Uploaded a revised Data Dictionary with updated Business Types.
| 09/29/2023 | v4.5    | * Updated "Additional Help References" documentation to link to SAM.gov Data Services page.

<p><small><a href="#">Back to top</a></small></p>
