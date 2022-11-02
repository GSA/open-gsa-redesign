---
title: SAM.gov Entity/Exclusions Extracts Download APIs
banner-heading: SAM.gov Entity/Exclusions Extracts Download APIs
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->


## Overview
The Extracts Download API allows users to request Unclassified (“Public”), Controlled Unclassified Information (CUI) "For Official Use Only" (FOUO) or CUI “Sensitive” entity extracts and Unclassified (“Public”) exclusion extract, based on the sensitivity level of the user account and through several optional request parameters.

**Public Entity Extracts:**

They constitute publicly available entities and their unclassified data available under the Freedom of Information Act (FOIA) for those registered in SAM.gov to do business with the Federal government.

**FOUO (CUI) Entity Extracts:**

They constitute both the publicly available entities and the entities that have opted out of public display, along with their unclassified data available under the Freedom of Information Act (FOIA) and FOUO CUI data.

**Sensitive (CUI) Entity Extracts:**

They constitute both the publicly available entities and the entities that have opted out of public display, along with their unclassified data available under the Freedom of Information Act (FOIA), FOUO CUI data and Sensitive CUI data.

**Public Exclusions Extracts:**

They constitute publicly available list of all parties with a currently active exclusion in SAM.gov.

**Extract Calendar**
<table>
<tr>
<td>Monthly Public, FOUO (CUI) and Sensitive (CUI) Extracts</td>
<td>
<ul>
<li>They are produced on the first Sunday of each month. Kindly check after 7 AM Eastern time.</li>
<li>The date on the .ZIP file matches the date when the file was generated.<br>
E.g.: The April monthly files were generated and dated on 20220403.</li>
<li>The date on the .ZIP file matches the date on the .dat file inside.</li>
<li>These files contain all active entities and entities expired in the last 6 months.</li>
<li>File Naming Convention:<br>
  <b>Monthly ASCII:</b>
  <ul>
    <li>SAM_PUBLIC_MONTHLY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_FOUO_MONTHLY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_SENSITIVE_MONTHLY_V3_YYYYMMDD.ZIP</li>
  </ul>
  <b>Monthly UTF-8:</b> 
  <ul>
    <li>SAM_PUBLIC_UTF-8_MONTHLY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_FOUO_UTF-8_MONTHLY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_SENSITIVE_UTF-8_MONTHLY_V3_YYYYMMDD.ZIP</li>
  </ul>
</li></ul>
</td>
</tr>
<tr>
<td>Daily FOUO (CUI) and Sensitive (CUI) Extracts</td>
<td>
<ul>
<li>They are produced every Tuesday-Saturday. Kindly check after 7 AM Eastern time.</li>
<li>The date on the .ZIP file matches the date when the file was generated.<br>
 E.g.: The file generated on 04/05/2022 will show 20220405.</li>
<li>The date on the .ZIP file matches the date on the .dat file inside.</li>
<li>These are incremental files that contain new/updated/deactivated/expired entities since the previous day’s file.</li>
<li>File Naming Convention:<br>
  <b>Daily ASCII:</b>
  <ul>
    <li>SAM_FOUO_DAILY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_SENSITIVE_DAILY_V3_YYYYMMDD.ZIP</li>
  </ul>
  <b>Daily UTF-8:</b> 
  <ul>
    <li>SAM_FOUO_UTF-8_DAILY_V2_YYYYMMDD.ZIP</li>
    <li>SAM_SENSITIVE_UTF-8_DAILY_V3_YYYYMMDD.ZIP</li>
  </ul>
</li></ul>
</td>
</tr>

<tr>
<td>Daily Exclusion Extracts</td>
<td>
<ul>
<li>They are produced every day. Kindly check after 7 AM Eastern time.</li>
<li>The date on the .ZIP file matches the date when the file was generated.<br>
E.g.: The file generated on 04/05/2022 will show 2022095.</li>
<li>The date on the .ZIP file matches the date on the .CSV file inside.</li>
<li>These files contain all the active exclusions.</li>
<li>File Naming Convention:<br>
  <b>Daily ASCII:</b>
  <ul>
   <li>SAM_Exclusions_Public_Extract_V2_YYDDD.ZIP (YYDDD is the Julian Date)</li>
  </ul>
  E.g.: The file for 04/06/2022 would be SAM_Exclusions_Public_Extract_V2_22096.ZIP.
</li></ul>
</td>
</tr>

</table>

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

### API endpoints

**Production:**
* https://api.sam.gov/data-services/v1/extracts?api_key=<A VALID API KEY>
* https://api.sam.gov/data-services/v1/extracts?

**Alpha:**
* https://api-alpha.sam.gov/data-services/v1/extracts?api_key=<A VALID API KEY>
* https://api-alpha.sam.gov/data-services/v1/extracts?

### User Requirements

**To access Public extracts:**
* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, a non-Federal/Federal System Account with the “Read Public” permission and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access FOUO (CUI) extracts:**
* Users must have a Federal System Account with the “Read FOUO” permission and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser, or a Restful API client such as Postman.

**To access Sensitive (CUI) extracts:**
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
* System Accounts must satisfy the following criteria to successfully utilize this API:

    * System Information<br/>
      Unique System ID: The System Account ID
    * Permissions<br/>
      Entity Information: read public --> Gives access to the Public extracts<br/>
      Entity Information: read public, read fouo --> Gives access to the Public and FOUO (CUI) extracts.<br/>
      Entity Information: read public, read fouo, read sensitive --> Gives access to the Public, FOUO (CUI) and Sensitive (CUI) extracts.
    * Security Information<br/>
      IP Address: List all the IP Addresses that the System invokes the API from.
    * Type of Connection: Data Service Extracts
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
</ul>
<details>
<summary><b> An example of the Sensitive extract download POST call using Postman: </b></summary>
Request URL:
https://api.sam.gov/data-services/v1/extracts?fileName=< name of the file ><br>
Click to view Sample Authorization <a target="_blank" rel="noopener noreferrer" href="v1/DOWNLOAD_API_AUTH.JPG">Sample Extract Authorization</a><br>
Click to view Sample Request Header <a target="_blank" rel="noopener noreferrer" href="v1/api_key.JPG">Sample Request Header</a>
</details>

<details>
<summary><b>An example of the Sensitive extract download POST call using curl:</b></summary>
Curl request with basic auth token: curl -X POST "https://api.sam.gov/data-services/v1/extracts?fileName=< fileName >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/zip" --header "Authorization: Basic < auth token >" --output C:\sample_file.ZIP<br><br>
Curl request with username and password: curl -X POST "https://api.sam.gov/data-services/v1/extracts?fileName=< fileName >" --header "X-Api-Key: < a valid API Key >" --header "Content-Type: application/json" --header "Accept: application/zip" --user "< username >:< password >" --output C:\sample_file.ZIP
</details>
</details>

<p><small><a href="#">Back to top</a></small></p>

## API Description
<details>
<summary><b>Query String Parameters:</b><br>The Extracts Download API offers several optional search parameters.<br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>api_key</td>
<td>This parameter is required to identify and validate API users and their role-based access.<br />
</td>
</tr>

<tr>
<td>fileName</td>
<td>This parameter must be used on its own. It allows users to provide the extract file name.<br />
Examples: fileName=SAM_PUBLIC_MONTHLY_V2_20220406.ZIP; fileName= SAM_Exclusions_Public_Extract_V2_22096.ZIP
</td>
</tr>

<tr>
<td>fileType</td>
<td>This parameter must be used if fileName is not specified. It allows users to specify the type of the extract that they wish to download.<br />
Permitted values: ENTITY, EXCLUSION, SCR, BIO<br />
</td>
</tr>

<tr>
<td>sensitivity</td>
<td>This parameter must not be used in conjunction with the fileName parameter. It allows users to provide the desired sensitivity level of the extract that they wish to download, if they have proper roles.<br>
Default value, if the parameter is not provided: PUBLIC<br />
Permitted values:<br />
<ul>
<li> PUBLIC – Returns the Public extracts.</li>
<li> FOUO – Returns the FOUO (CUI) extracts.</li>
<li> SENSITIVE – Returns the Sensitive (CUI) extracts.</li>
</ul>
</td>
</tr>

<tr>
<td>frequency</td>
<td>This parameter allows users to request either a DAILY or MONTHLY extract<br />
Default value, if the parameter is not provided: MONTHLY<br />
Permitted values: DAILY, MONTHLY
</td>
</tr>

<tr>
<td>charset</td>
<td>This parameter allows users to request either the ASCII or UTF-8 extract character-set.<br />
Default value, if the parameter is not provided: ASCII<br />
Permitted values: ASCII, UTF8, UTF-8<br />
Note: This parameter is not applicable for the EXCLUSION file type.
</td>
</tr>

<tr>
<td>date</td>
<td>This parameter allows users to select a specific date of the file that they wish to download.<br />
Format: MM/DD/YYYY for Daily files; MM/YYY for Monthly files.<br />
Default value: Most recent date, depending on fileType<br />
Examples: 04/06/2022; 04/2022
</td>
</tr>
<tr>
<td>version</td>
<td>This parameter allows users to select the file they wish to download by version.<br />
Permitted values: V2 for the Public, FOUO and Exclusion extracts; V3 for the Sensitive extract.
</td>
</tr>
</table>
</details>

<details>
<summary><b>Extract Mapping Document and Layouts:</b><br>Please refer to the following:<br>
</summary>
<ul>
<li><b>SAM Master Extract Mapping document:</b><br> 
Effective April 2022: <a href="v1/SAM_MASTER_EXTRACT_MAPPING v6.0.xlsx">SAM Master Extract Mapping</a></li>

<li><b>Public extract layout with the UEI data:</b><br> 
<a target="_blank" rel="noopener noreferrer" href="v1/SAM Master Extract Mapping v6.0 Public File V2 Layout.xlsx">Public Extract Layout</a><br>
</li>

<li><b>FOUO (CUI) extract layout with the UEI data: </b><br>
<a target="_blank" rel="noopener noreferrer" href="v1/SAM Master Extract Mapping v6.0 FOUO File V2 Layout.xlsx">FOUO Extract Layout</a><br>
</li>

<li><b>Sensitive (CUI) extract layout with the UEI data: </b><br>
<a target="_blank" rel="noopener noreferrer" href="v1/SAM Master Extract Mapping v6.0 Sensitive File V3 Layout.xlsx">Sensitive Extract Layout</a><br>
</li>

<li><b>Exclusions Public extract layout with the UEI data: </b><br>
<a target="_blank" rel="noopener noreferrer" href="v1/SAM_Exclusions_Public_Extract_Layout_V2.pdf">Exclusions Extract Layout</a><br>
</li>

</ul>
</details>

<details>
<summary><b>Sample Extract File Names:</b><br>
</summary>
<ul>
<li><b>Public Entity files:</b></li>
<ul> 
<li>SAM_PUBLIC_UTF-8_MONTHLY_V2_20220403.ZIP</li>
<li>SAM_PUBLIC_MONTHLY_V2_20220403.ZIP</li>
</ul>
<li><b>FOUO (CUI) Entity files:</b></li>
<ul>
<li>SAM_FOUO_DAILY_V2_20220405.ZIP</li>
<li>SAM_FOUO_MONTHLY_V2_20220403.ZIP</li>
<li>SAM_FOUO_UTF-8_DAILY_V2_20220405.ZIP</li>
<li>SAM_FOUO_UTF-8_MONTHLY_V2_20220403.ZIP</li>
</ul>

<li><b>Sensitive (CUI) Entity files:</b></li>
<ul>
<li>SAM_SENSITIVE_DAILY_V3_20220405.ZIP</li>
<li>SAM_SENSITIVE_MONTHLY_V3_20220403.ZIP</li>
<li>SAM_SENSITIVE_UTF-8_DAILY_V3_20220405.ZIP</li>
<li>SAM_SENSITIVE_UTF-8_MONTHLY_V3_20220403.ZIP</li>
</ul>

<li><b>Public Exclusion files:</b></li>
<ul>
<li>SAM_Exclusions_Public_Extract_V2_22096.ZIP</li>
<li>SAM_Exclusions_Public_Extract_V2_22097.ZIP</li>
</ul></ul>
</details>

<details>
<summary><b>Extract Download API Sample Requests:</b><br>
</summary>
<ul>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileName=SAM_PUBLIC_MONTHLY_V2_20220403.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2022</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2022&charset=UTF8</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileName=SAM_FOUO_DAILY_V2_20220407.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileName=SAM_FOUO_MONTHLY_V2_20220403.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/07/2022</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2022</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/07/2022&charset=UTF8</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2022&charset=UTF8</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileName=SAM_SENSITIVE_DAILY_V3_20220407.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileName=SAM_SENSITIVE_MONTHLY_V3_20220403.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/07/2022</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2022</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/07/2022&charset=UTF8</li>
<li>https://api.sam.gov/data-services/v1/extracts?fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2022&charset=UTF8</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileName=SAM_Exclusions_Public_Extract_V2_22097.ZIP</li>
<li>https://api.sam.gov/data-services/v1/extracts?api_key={API KEY}&fileType=EXCLUSION&date=04/07/2022</li>
</ul>
</details>



## OpenAPI Specification File

You can view the full details of this API's in the OpenAPI Specification file available here:<br>
<a href="v1/openapi.yaml">Open API specification file for the Entity/Exclusions Extracts Download API</a>

<p><small><a href="#">Back to top</a></small></p>

## Sample Extract Files

Extract files with UEI Information:
* Click to view <a href="v1/sample-files/SAM_PUBLIC_MONTHLY_V2_20200414.ZIP">Public Monthly V2 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_FOUO_MONTHLY_V2_20200414.ZIP">FOUO Monthly V2 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_SENSITIVE_MONTHLY_V3_20200414.ZIP">Sensitive Monthly V3 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_Exclusions_Public_Extract_V2_22018.zip">Exclusions Public V2 Extract File</a><br>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br>* User does not have permission to download the file. <br />* Missing required parameters, fileName OR fileType<br />* The requested extract file not found<br />* Invalid date format<br />* This http method is not allowed to download sensitive extracts. Only POST is supported for sensitive extracts.<br />* This http method is not allowed to download non-sensitive extracts. Only GET is supported for non-sensitive extracts.<br />* No api_key was supplied in request body. Please submit with a valid API key.<br />* No system account credentials are provided. Please provide credentials via basic authentication.<br>* The parameter fileName cannot be used with any other parameters.<br>* The File does not exist with the provided parameters<br>* The requested extract file needs FOUO roles to download<br>* IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system.<br>* Insufficient privileges to perform the operation - System account must have Type of Connection as Restful.
| 406 | Invalid Accept Header. |
| 415 | Invalid Content-Type Header. |

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
------|---------|---------
06/03/2019 | v1.0    | Base Version
08/15/2019 | v1.1    | * Added Beta.SAM.Gov to the page title. <br><br>* Clarified the Alpha and Beta endpoints.
12/20/2019 | v1.2    | * Added Sample FOUO and Sensitive File Names and Revised extract layouts for the upcoming UEI/EVS changes. <br><br> * Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.
02/25/2020 | v1.3    | * Updated Alpha endpoint to meet new API standards.<br><br> * Added Sample Extract Files.
02/28/2020 | v1.4    | * Updated Beta endpoint to meet new API standards.<br><br> * Removed "COMING SOON" information in Getting Started section. <br><br> * Added FOUO and Sensitive Sample Extract Files for different versions.
04/20/2020 | v1.5    |  Updated Public, FOUO and Sensitive Sample Extract Files that includes UEI information.
06/10/2020 | v1.6    |  Added the endpoint, new process and an example for the Download API .
08/17/2020 | v1.7    | * The Sensitive Alpha endpoint in "Getting Started" has been corrected and the Sample Extract Authorization screenshot in "Explanation of the API using Examples" has also been updated to reflect the correct endpoint.<br><br> * Sensitive data sample calls in the "Explanation of the API using Examples" have also been updated to show that the API key is no longer sent in the request URL.<br><br> * The "Sensitive Download API Process" section has been updated with additional steps for sending Sensitive requests (sending "Accept" and "Content-Type" parameters).<br><br> * The Sample Request Header screenshot in the "Explanation of the API using Examples" has been updated to reflect the new parameters as well. Two new codes (406, 415) have been added in the "HTTP Response Codes" section.
08/31/2020 | v1.8    | * Updated the Getting Started section to include the Sensitive Beta endpoint.
02/05/2021 | v1.9    | * Added V1/V2 Public, V3 Sensitive, and V2 FOUO files available in Alpha S3.<br><br>* Added version parameter<br><br>* Updated error messages<br><br>* Added note to charSet parameter stating exclusions file type is not applicable
03/12/2021 | v2.0    | * Added additional FOUO sample files.<br><br> * Added note that only system account keys can be used for FOUO and sensitive downloads.
04/08/2021 | v2.1    | * Updated Contact Us information.<br><br> * Added Entity Extract Calendar under Overview.
04/29/2021 | v2.2    | * Added note above list of sample files mentioning that files are for Alpha.<br><br>* Added description to 400 http response code describing Type of Connection error.<br><br>* Updated openapi spec file.
05/12/2021 | v2.3    | * Updated instances of beta.sam.gov to SAM.gov.<br><br> * Removed non-relevant information for Beta api.
07/16/2021 | v2.4    | * Updated the instructions on sending "Basic Auth" under the "Authorization" header.<br><br> * Added the Type of Connections and Rate Limits table.<br><br> * Updated the Contact Us information.<br><br> * Added example curl requests.
09/21/2021 | v2.5    | * Added the "Please refer to the SAM Master Extract Mapping document" subsection under the "Explanation of the API using Examples" section.
10/06/2021 | v2.6    | * Updated the "Contact Us" section.
10/21/2021 | v2.7    | * Added Expected Results to Data Package Sample API Calls.<br><br> * Updated Extract Mapping Files.
02/01/2022 | v2.8    | * Updated the Exclusions Extract Layout file.<br><br> * Updated the Exclusions Public V2 Extract file.
04/04/2022 | v2.9    | * Sample Extract Files section: Removed old sample files that had DUNS information and provided new files with UEI information.<br><br> * Updated “Effective April 2022: SAM Master Extract Mapping” to remove the DUNS occurrences.<br><br> * Updated the “April 2022 release: FOUO Extract Layout” with the correct Sensitivity levels for the Points Of Contact elements.<br><br> * Updated the “April 2022 release: Sensitive Extract Layout” to reflect the correct order for “IMMEDIATE PARENT EVS SOURCE”.<br><br> * Updated the “April 2022 release: Exclusions Extract Layout” to remove the DUNS occurrences.<br><br>
04/08/2022 | v3.0    | * Removed all the references to older files that are no longer valid.<br><br> * Provided references to the new files.<br><br> * Reorganized the Sensitive Postman and curl examples for a better flow of content.<br><br>
08/08/2022 | v3.1    | * Updated to clarify the use of Controlled Unclassified Information (CUI) data.<br><br>

<p><small><a href="#">Back to top</a></small></p>
