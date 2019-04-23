---
title: Extracts Download APIs
banner-heading: Extracts Download APIs
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
The Extracts Download API is permits SAM users with valid roles to download SAM extracts.<br>

Legacy SAM offers extracts for Entity Management and Exclusions data.  The Entity Management extracts 
contain entities (businesses and government agencies) in SAM and are primarily utilized by systems that
comprise of the contract writing systems, government payment systems and other acquisition related 
systems The Exclusions extract contains a list of all parties with a currently active exclusion in SAM
and may be used by contract writing systems, government payment systems, HR systems, or any party 
wishing to check against a government debarment list.  GSA is in the process of modernizing some of 
the Legacy systems (Legacy SAM being one) and has made these Extracts available in Beta.SAM.gov.
<br>

Legacy SAM offers a data dump of all currently active Exclusions as a comma-separated value (CSV) file,
published daily, 365 days per year.  This file maybe be used by contract writing systems, government 
payment systems, HR systems, or any party wishing to check against a government debarment list.  The 
Exclusions extract contains only publicly available data and may be used by anyone with a valid API 
key from beta.sam.gov.

  
1. **Entity Management Public Data Package:**
   * This extract contains entity registration data publicly available under the Freedom of Information Act (FOIA) for those registered in SAM.gov to do business with the Federal government.
   * All entities and data elements are classified as public.
   * End user needs to create system account with public access roles and procure an API_KEY to access these extracts.
   * File naming convention:<br />
     Daily ASCII (Default): SAM_PUBLIC_DAILY_YYYYMMDD.ZIP<br />
	 Daily UTF-8: SAM_PUBLIC_UTF-8_DAILY_YYYYMMDD.ZIP<br />
	 Monthly ASCII (Default): SAM_PUBLIC_MONTHLY_YYYYMMDD.ZIP<br />
	 Monthly UTF-8 (Default): SAM_PUBLIC_UTF-8_MONTHLY_YYYYMMDD.ZIP<br />

2. **Entity Management Extracts FOUO (For Official Use Only) Data Package:**
   * This extract contains the same information as the Entity Management Public Data Package, plus data elements which are classified as For Official Use Only (FOUO).
   * The monthly extract is published on the first Sunday of the month and contains all active registrations plus registrations with an expiration date within the past 6 months.
   * The daily extract is an incremental file which is published 5 days a week (Tuesday – Saturday) and contains all new, updated, and deactivated registrations since the previous daily file.
   * End user needs to create system account with FOUO access roles and procure an API_KEY to access these extracts.
   * Daily ASCII (Default): SAM_FOUO_DAILY_YYYYMMDD.ZIP<br />
	 Daily UTF-8: SAM_FOUO_UTF-8_DAILY_YYYYMMDD.ZIP<br />
	 Monthly ASCII (Default): SAM_FOUO_MONTHLY_YYYYMMDD.ZIP<br />
	 Monthly UTF-8 (Default): SAM_FOUO_UTF-8_ MONTHLY_YYYYMMDD.ZIP<br />

3. **Entity Management Extract Sensitive Data Package:**
   * This extract contains the same information as the Entity Management FOUO Data package with the addition of data elements which are classified as Sensitive.
   * The monthly extract is published on the first Sunday of the month and contains all active registrations plus registrations with an expiration date within the past 6 months.
   * The daily extract is an incremental file which is published 5 days a week (Tuesday – Saturday) and contains all new, updated, and deactivated registrations since the previous daily file.
   * End user needs to create system account with sensitive access roles and procure an API_KEY to access these extracts.
   * Daily ASCII (Default): SAM_SENSITIVE_DAILY_V2_YYYYMMDD.ZIP<br />
     Daily UTF-8: SAM_SENSITIVE_UTF-8_DAILY_V2_YYYYMMDD.ZIP<br />
     Monthly ASCII (Default): SAM_SENSITIVE_MONTHLY_V2_YYYYMMDD.ZIP<br />
     Monthly UTF-8 (Default): SAM_SENSITIVE_UTF-8_ MONTHLY_V2_YYYYMMDD.ZIP<br />


4. **Exclusions Public Data Package:**
   * This extract all active exclusions in SAM as a comma-separated value (CSV) file.
   * The Exclusions extract is a daily file, published 7 days per week.
   * End user needs to create system account with public access roles and procure an API_KEY to access these extracts.
   * File Name: SAM_Exclusions_Public_Extract_YYDDD.ZIP (Julian Date)<br />
   		* April 16, 2019 is the 106th day of 2019.  Therefore, the Exclusions extract for April 16, 2019 would be SAM_Exclusions_Public_Extract_19106.ZIP.



<p><small><a href="#">Back to top</a></small></p>

## Getting Started

The Entity Management extracts are available using the following endpoints:

  * https://api.sam.gov/prodlike/dataservices/v1/extracts
  * https://api.sam.gov/prod/dataservices/v1/extracts

Generating the API Key:
* Registered users can request for a public API on ‘Account Details’ page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

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
Example: df234124fgv8v23il4lk12l341kkl0124kc
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

The api_key parameter is required for identification and role-based access control.  After the api_key, there are query paths to download the correct file:<br>

Option 1: Using the fileName only.  The fileName is an exact match parameter which can be used for any type of file.  If you use the fileName parameter, no other parameters are required and will be ignored if included.<br>

Option 1: Using the fileName only.  The fileName is an exact match parameter which can be used for any type of file.  If you use the fileName parameter, no other parameters are required and will be ignored if included.<br>

**Entity Management Public Data Package Sample API calls:**<br>

Monthly File, April 2019 (fileName):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_PUBLIC_MONTHLY_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=PUBLIC&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result:**<br>
Click to view the full details of the data elements: Public Extract Layout<br>

**Entity Management FOUO Data Package Sample API calls:**<br>

Daily File, April 20, 2019 (fileName):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_FOUO_DAILY_20190420.ZIP<br>

Daily File, April 20, 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/20/2019<br>

Daily File (UTF-8), April 20, 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=DAILY&date=04/20/2019&charset=UTF8<br>

Monthly File, April 2019 (fileName):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_PUBLIC_MONTHLY_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=FOUO&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result**<br>
Click to view the full details of the data elements: FOUO Extract Layout<br>

**Entity Management Sensitive Data Package Sample API calls:****<br>

Daily File, April 20, 2019 (fileName):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_SENSITIVE_DAILY_V2_20190420.ZIP<br>

Daily File, April 20, 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/20/2019<br>

Daily File (UTF-8), April 20, 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=DAILY&date=04/20/2019&charset=UTF8<br>

Monthly File, April 2019 (fileName): <br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_SENSITIVE_MONTHLY_V2_20190407.ZIP<br>

Monthly File, April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2019<br>

Monthly File (UTF-8), April 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=ENTITY&sensitivity=SENSITIVE&frequency=MONTHLY&date=04/2019&charset=UTF8<br>

**Expected Result**<br>
Click to view the full details of the data elements: Sensitive Extract Layout<br>

**Exclusions Public Data Package Sample API calls:**<br>

Daily File, April 16, 2019 (fileName):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileName=SAM_Exclusions_Public_Extract_19106.ZIP<br>

Daily File, April 16, 2019 (parameter):<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY}&fileType=EXCLUSION&date=04/16/2019<br>

**Expected Result**:
The layout of the Exclusions extract is available here: [TBD]

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * Application Level Error Messages: * API_KEY does not have permission to download the file. <br />* Missing required parameters<br />* The requested extract file not found |
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>
