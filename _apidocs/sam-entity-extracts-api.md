---
title: Beta.SAM.Gov Entity/Exclusions Extracts Download APIs
banner-heading: Beta.SAM.Gov Entity/Exclusions Extracts Download APIs
---


## Overview
The Extracts Download API permits beta.SAM.gov users with valid roles to download entity and exclusions data extracts.<br>

The Entity Management extracts contain entities (businesses and government agencies) data from SAM.gov.  The Exclusions extract contains a list of all parties with a currently active exclusion in SAM.

  
1. **Entity Management Public Data Package:**
   * This extract contains entity registration data publicly available under the Freedom of Information Act (FOIA) for those registered in SAM.gov to do business with the Federal government.
   * All entities and data elements are classified as public.
   * End user needs to create an account in beta.SAM.gov and procure an API_KEY to access these extracts.
   * File naming convention:<br />
	 Monthly ASCII (Default): SAM_PUBLIC_MONTHLY_YYYYMMDD.ZIP<br />
	 Monthly UTF-8 (Default): SAM_PUBLIC_UTF-8_MONTHLY_YYYYMMDD.ZIP<br />

2. **Entity Management Extracts FOUO (For Official Use Only) Data Package:**
   * This extract contains the same information as the Entity Management Public Data Package, plus data elements which are classified as For Official Use Only (FOUO).
   * The monthly extract is published on the first Sunday of the month and contains all active registrations plus registrations with an expiration date within the past 6 months.
   * The daily extract is an incremental file which is published 5 days a week (Tuesday – Saturday) and contains all new, updated, and deactivated registrations since the previous daily file.
   * End user needs to create a system account with FOUO access roles and procure an API_KEY to access these extracts.
   * Daily ASCII (Default): SAM_FOUO_DAILY_YYYYMMDD.ZIP<br />
	 Daily UTF-8: SAM_FOUO_UTF-8_DAILY_YYYYMMDD.ZIP<br />
	 Monthly ASCII (Default): SAM_FOUO_MONTHLY_YYYYMMDD.ZIP<br />
	 Monthly UTF-8 (Default): SAM_FOUO_UTF-8_MONTHLY_YYYYMMDD.ZIP<br />

3. **Entity Management Extract Sensitive Data Package:**
   * This extract contains the same information as the Entity Management FOUO Data package with the addition of data elements which are classified as Sensitive.
   * The monthly extract is published on the first Sunday of the month and contains all active registrations plus registrations with an expiration date within the past 6 months.
   * The daily extract is an incremental file which is published 5 days a week (Tuesday – Saturday) and contains all new, updated, and deactivated registrations since the previous daily file.
   * End user needs to create a system account with sensitive access roles and procure an API_KEY to access these extracts.
   * Daily ASCII (Default): SAM_SENSITIVE_DAILY_V2_YYYYMMDD.ZIP<br />
     Daily UTF-8: SAM_SENSITIVE_UTF-8_DAILY_V2_YYYYMMDD.ZIP<br />
     Monthly ASCII (Default): SAM_SENSITIVE_MONTHLY_V2_YYYYMMDD.ZIP<br />
     Monthly UTF-8 (Default): SAM_SENSITIVE_UTF-8_MONTHLY_V2_YYYYMMDD.ZIP<br />
   * This extract requires IP address whitelisting to download your file.  You will need to keep an up-to-date list of your IP addresses in your System Account.


4. **Exclusions Public Data Package:**
   * This extract all active exclusions in SAM as a comma-separated value (CSV) file.
   * The Exclusions extract is a daily file, published 7 days per week.
   * End user needs to create an account in beta.SAM.gov and procure an API_KEY to access these extracts.
   * File Name: SAM_Exclusions_Public_Extract_YYDDD.ZIP (Julian Date)<br />
   		* April 16, 2019 is the 106th day of 2019.  Therefore, the Exclusions extract for April 16, 2019 would be SAM_Exclusions_Public_Extract_19106.ZIP.



<p><small><a href="#">Back to top</a></small></p>

## Getting Started

The Entity and Exclusion extracts are available using the following endpoints:
 
  * Beta: https://api.sam.gov/data-services/v1/extracts?api_key= < value >
  * Alpha: https://api-alpha.sam.gov/data-services/v1/extracts?api_key= < value ><br><br>
     
Generating a personal API Key:
* Registered users can request for a public API on ‘Account Details’ page. This page can be accessed here: Account Details page on beta.sam.gov
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

Generating a System Account API Key:
* Users registered with a non-government email address and associated with an entity OR users registered with a government email address may request a system account for public data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select ‘Go to System Accounts’ from the widget and fill out the required sections.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ again in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key.
* The user must enter their password again to retrieve the key.
* The user must maintain accurate IP addresses in their System Accounts, particularly if they are downloading the Entity Management Sensitive Data Package.


<p><small><a href="#">Back to top</a></small></p>

## API Description

### Extracts Download API Parameters

<b>Entity Management Extract Query String Parameters.</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>api_key</td>
<td>Required element to identify API users and validate role-based access<br />
</td>
</tr>
<tr>
<td>fileName</td>
<td>Allows users to provide extract file name<br />
The fileName parameter must be used if the sensitivity parameter is not used.<br />
Example: fileName=SAM_PUBLIC_MONTHLY_20190323.ZIP
</td>
</tr>
<tr>
<td>fileType</td>
<td>Allows users to specify the domain of the extract that they wish to download<br />
The filetype parameter must be used if fileName is not specified.<br />
Permitted values: ENTITY, EXCLUSION, SCR, BIO<br />
</td>
</tr>
<tr>
<td>sensitivity</td>
<td>Allows users to provide the desired sensitivity level of the extract that they wish to download, if they have proper roles<br />
The sensitivity parameter must be used if fileName parameter is not used.<br />
Default value: PUBLIC<br />
Permitted values: PUBLIC, FOUO, SENSITIVE
</td>
</tr>
<tr>
<td>frequency</td>
<td>Allows users to request either a DAILY or MONTHLY extract<br />
Default value: MONTHLY<br />
Permitted values: DAILY, MONTHLY
</td>
</tr>
<tr>
<td>charset</td>
<td>Allows users to request either the ASCII or UTF-8 extract character-set<br />
Default value: ASCII<br />
Permitted values: ASCII, UTF8, UTF-8
</td>
</tr>
<tr>
<td>date</td>
<td>Allows users to select a specific date of the file that they wish to download.<br />
Format: MM/DD/YYYY for a specific date of  MM/YYYY to specify a year and month (for MONTHLY files only)<br />
Default value: Most recent date, depending on fileType<br />
Examples: 04/19/2019; 11/15/2018; 03/2019
</td>
</tr>
</table>

### Explanation of the API using Examples

The api_key parameter is required for identification and role-based access control.  After the api_key, there are query paths to download the correct file:<br>

Option 1: Using the fileName only.  The fileName is an exact match parameter which can be used for any type of file.  If you use the fileName parameter, no other parameters are required and will be ignored if included.<br>

Option 2: Using fileType and other parameters.  If you choose not to use the fileName, you may specify the fileType along with other parameters to identify which extract you wish to download.<br>

**Entity Management Public Data Package Sample API calls:**<br>

Monthly File, April 2019 (fileName):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_PUBLIC_MONTHLY_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result:**<br>
Click to view the full details of the data elements: <a href="v1/public_extract_layout.pdf">Public Extract Layout</a><br>
Click to view the full details of the revised extract layout for the upcoming UEI/EVS changes:<a href="v1/SAM_Entity_Management_Public_V2_Extract_Layout.pdf">Public Extract Layout</a><br>

**Entity Management FOUO Data Package Sample API calls:**<br>

Daily File, April 20, 2019 (fileName):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_FOUO_DAILY_20190420.ZIP<br>

Daily File, April 20, 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/20/2019<br>

Daily File (UTF-8), April 20, 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/20/2019&charset=UTF8<br>

Monthly File, April 2019 (fileName):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_PUBLIC_MONTHLY_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/fouo_extract_layout.pdf">FOUO Extract Layout</a><br>
Click to view the full details of the revised extract layout for the upcoming UEI/EVS changes:<a href="v1/SAM_Entity_Management_FOUO_V2_Extract_Layout.pdf">FOUO Extract Layout</a><br>

**Entity Management Sensitive Data Package Sample API calls:**<br>

Daily File, April 20, 2019 (fileName):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_SENSITIVE_DAILY_V2_20190420.ZIP<br>

Daily File, April 20, 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/20/2019<br>

Daily File (UTF-8), April 20, 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/20/2019&charset=UTF8<br>

Monthly File, April 2019 (fileName): <br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_SENSITIVE_MONTHLY_V2_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result**<br>
Click to view the full details of the data elements: Sensitive Extract Layout<br>

**Exclusions Public Data Package Sample API calls:**<br>

Daily File, April 16, 2019 (fileName):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=SAM_Exclusions_Public_Extract_19106.ZIP<br>

Daily File, April 16, 2019 (parameter):<br>
https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=EXCLUSION&date=04/16/2019<br>

**Expected Result**:
The layout of the Exclusions extract is available here: <br>
Click to view the full details of the revised extract layout for the upcoming UEI/EVS changes:<a href="v1/SAM_Exclusions_Public_V2_Extract_Layout.pdf">Exclusions Extract Layout</a><br>

**Sample File Names:**<br>

* FOUO files: 
  <br> SAM_FOUO_DAILY_20190423.ZIP<br>  SAM_FOUO_DAILY_20190522.ZIP<br>  SAM_FOUO_DAILY_20190523.ZIP<br>  SAM_FOUO_DAILY_20190524.ZIP<br>  SAM_FOUO_DAILY_20190525.ZIP<br> 
  SAM_FOUO_DAILY_20190528.ZIP<br>  SAM_FOUO_DAILY_20190529.ZIP<br>  SAM_FOUO_DAILY_20190530.ZIP<br>  SAM_FOUO_DAILY_20190531.ZIP<br>  SAM_FOUO_MONTHLY_20190430.ZIP<br> 
  SAM_FOUO_MONTHLY_20190505.ZIP<br>

* Sensitive files:
  <br> SAM_SENSITIVE_UTF-8_DAILY_V2_20190530.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190531.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190601.ZIP<br> 
  SAM_SENSITIVE_UTF-8_DAILY_V2_20190523.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190524.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190525.ZIP<br> 
  SAM_SENSITIVE_UTF-8_DAILY_V2_20190528.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190529.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190522.ZIP<br> 
  SAM_SENSITIVE_DAILY_V2_20190606.ZIP<br>  SAM_SENSITIVE_MONTHLY_V2_20190602.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190525.ZIP<br> 
  SAM_SENSITIVE_DAILY_V2_20190528.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190529.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190530.ZIP<br> 
  SAM_SENSITIVE_DAILY_V2_20190531.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190601.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190604.ZIP<br> 
  SAM_SENSITIVE_DAILY_V2_20190605.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190524.ZIP<br>  SAM_SENSITIVE_UTF-8_DAILY_V2_20190604.ZIP<br>  SAM_SENSITIVE_DAILY_V2_20190523.ZIP<br>

## OpenAPI Specification File 

You can view the full details of this API's in the OpenAPI Specification file available here:<br>
<a href="v1/openapi.yaml">Open API specification file for the Entity/Exclusions Extracts Download API</a>

<p><small><a href="#">Back to top</a></small></p>

## Sample Extract Files
 
1. Existing Extract files:
* Click to view <a href="v1/sample-files/SAM_PUBLIC_MONTHLY_20140504.ZIP">Public Monthly V1 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_FOUO_MONTHLY_V1_20140504.ZIP">FOUO Monthly V1 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_SENSITIVE_MONTHLY_V2_20170702.ZIP">Sensitive Monthly V2 Extract File</a><br><br>

2. Updated Version of Extract files with UEI Information:
* Click to view <a href="v1/sample-files/SAM_PUBLIC_MONTHLY_V2_20200420.ZIP">Public Monthly V2 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_FOUO_MONTHLY_V2_20200420.ZIP">FOUO Monthly V2 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_SENSITIVE_MONTHLY_V3_20200420.ZIP">Sensitive Monthly V3 Extract File</a>
* Click to view <a href="v1/sample-files/SAM_Exclusions_Public_Extract_20049.ZIP">Exclusions Public V2 Extract File</a><br>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br>* User does not have permission to download the file. <br />* Missing required parameters, fileName OR fileType<br />* The requested extract file not found<br/>* Invalid date format |
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov).

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
06/03/2019 | v 1.0 | Base Version
08/15/2019 | v 1.1 | * Added Beta.SAM.Gov to the page title. <br><br>* Clarified the Alpha and Beta endpoints.
12/20/2019 | v 1.2 | * Added Sample FOUO and Sensitive File Names and Revised extract layouts for the upcoming UEI/EVS changes. <br><br> * Added "COMING SOON" section for upcoming changes to Alpha and Beta endpoints to meet new API standards.
02/25/2020 | v1.3 | * Updated Alpha endpoint to meet new API standards.<br><br> * Added Sample Extract Files.
02/28/2020 | v1.3 | * Updated Beta endpoint to meet new API standards.<br><br> * Removed "COMING SOON" information in Getting Started section. <br><br> * Added FOUO and Sensitive Sample Extract Files for different versions.
04/20/2020 | v1.3 | * Updated Public, FOUO and Sensitive Extract Files that includes UEI information.
<p><small><a href="#">Back to top</a></small></p>
