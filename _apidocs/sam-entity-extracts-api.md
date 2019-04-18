---
title: Extracts Download APIs
banner-heading: Extracts Download APIs
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
Legacy SAM offers extracts for Entity Management and Exclusions data.  The Entity Management extracts 
contain entities (businesses and government agencies) in SAM and are primarily utilized by systems that
comprise of the contract writing systems, government payment systems and other acquisition related 
systems The Exclusions extract contains a list of all parties with a currently active exclusion in 
SAM and may be used by contract writing systems, government payment systems, HR systems, or any party 
wishing to check against a government debarment list.  GSA is in the process of modernizing some of the
Legacy systems (Legacy SAM being one) and has made these Extracts available in Beta.SAM.gov.
<br /><br />
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
	 Monthly UTF-8 (Default): SAM_PUBLIC_UTF-8_ MONTHLY_YYYYMMDD.ZIP<br />

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

1. Public Endpoints:
  * https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}
  * https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}

2. FOUO Endpoints:  
  * https://api.sam.gov/prodlike/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name}
  * https://api.sam.gov/prod/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name}


3. Sensitive Endpoints:    
  * https://api.sam.gov/prodlike/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name}
  * https://api.sam.gov/prod/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name}

The Exclusions extract is available at the following endpoint: https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}

Generating the API Key:
* Registered users can request for a public API on ‘Account Details’ page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Entity Management Extracts Download API

<b>Entity Management Extract Query String Parameters.</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>api_key *</td>
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
<td>sensitivity</td>
<td>Allows users to provide the desired sensitivity level of the extract that they wish to download (assuming proper roles).<br />
The sensitivity parameter must be used if fileName parameter is not used.<br />
Permitted values: PUBLIC, FOUO, SENSITIVE
</td>
</tr>
<tr>
<td>frequency</td>
<td>Allows users to request either a DAILY or MONTHLY extract<br />
Permitted values: DAILY, MONTHLY
</td>
</tr>
<tr>
<td>charset</td>
<td>Allows users to request either the ASCII or UTF-8 extract character-set<br />
If charset is not specified, the default value shall be ASCII.<br />
Permitted values: ASCII, UTF8, UTF-8
</td>
</tr>
<tr>
<td>date</td>
<td>Allows users to select a specific date of the file that they wish to download.<br />
Format: YYYYMMDD for a specific date or YYYYMM to specify a year and month.
</td>
</tr>
</table>

The Entity Management Extracts Download API will require the api_key and either the fileName OR sensitivity parameter.  If the sensitivity parameter is selected, there are a number of parameters for the user to drill down and select the exact file to download.  

**Entity Public Extract:**<br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}<br />
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}<br />

**Description :**  These are  static endpoints to retrieve public monthly data. <br>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/public_extract_layout.pdf">Public Extract Layout</a>

**Entity FOUO Extract:** <br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name} <br>
https://api.sam.gov/prod/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name} <br>

**Description :**  These are static endpoints to retrieve public daily and monthly, FOUO daily and monthly data. <br>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/fouo_extract_layout.pdf">FOUO Extract Layout</a>

**Entity Sensitive Extract:** <br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name} <br>
https://api.sam.gov/prod/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name} <br>

**Description :**  These are static endpoints to retrieve public daily and monthly, FOUO daily and monthly, Sensitive daily and monthly data. <br>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/sensitive_extract_layout.pdf">Sensitive Extract Layout</a>

### Exclusions Extract Download API

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name} 
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name} 

<b>Optional Query String Parameters.</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>api_key</td>
<td>Required element to identify API users<br />
Example: df234124fgv8v23il4lk12l341kkl0124kc
</td>
</tr>
<tr>
<td>fileName</td>
<td>Allows users to provide extract name <br />
Example: fileName=SAM_Exclusions_Public_Extract_19106.ZIP
</td>
</tr>
<tr>
<td>date</td>
<td>Allows users to search for an extract by date<br />
Format: YYYYMMDD<br />
Example: date=20190416
</td>
</tr>
</table>

Of the 3 parameters, only the api_key is mandatory.  If you provide the api_key parameter, then the API shall default to the latest Exclusions extract file (SAM_Exclusions_Public_Extract.ZIP).<br />

If you include fileName and/or date parameters, the API shall use those to find the Exclusions extract for that day.  You only need to provide one (fileName or date).<br />

**Example API calls**<br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE} will download the latest Exclusions extract available.<br /><br />
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=SAM_Exclusions_Public_Extract_19106.ZIP will download the Exclusions extract for April 16, 2019.<br /><br />
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&date=20190416 will download the Exclusions extract for April 16, 2019.<br /><br />

**Expected Result:**<br>
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
