---
title: Entity Extracts Download API
banner-heading: Entity Extracts Download API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
Legacy SAM offers downloadable Public Entity Extract and Exclusions Extract for both the public users and authenticated users, and downloadable FOUO/Sensitive Extracts for authenticated FOUO/Sensitive users. 
These extracts are primarily utilized by Systems that comprise of the contract writing systems, government payment systems and other acquisition related systems. 
GSA is in the process of modernizing some of the Legacy systems (Legacy SAM being one) and has made these Extracts available in Beta.SAM.gov. Roles/Permissions associated with the user accounts determine the access to these Extracts that are classified into the following three types:
  
1. **Entity Extracts Public Data Package :**
   * This is a public extract available monthly. 
   * It contains entity registration data publicly available under the Freedom of Information Act (FOIA) for those registered 
     in SAM.gov to do business with the Federal government.  
   * The daily file contains entity registrations that were changed the previous day.  
   * The monthly file contains a refresh for all active registrations and those that expired in the previous six months.
   * End user needs to create system account with public access roles and procure API_KEY to access these extracts.

2. **Entity Extracts FOUO Data Package:**
   * This extract contains the same information as the Entity Public Extract with the addition of data elements 
     that are considered For Official Use Only (FOUO).  
   * The daily file contains entity registrations that were changed the previous day.  
   * The monthly file contains a refresh for all active registrations and those that expired in the previous 6 months.  
   * End user needs to create system account with FOUO access roles and procure API_KEY to access these extracts.

3. **Entity Extract Sensitive Data Package:**
   * This extract contains the same information as the Entity Public and FOUO Extracts with the addition of data 
     elements that are considered Sensitive.  
   * The daily file contains entity registrations that were changed the previous day.  
   * The monthly file contains a refresh for all active registrations and those that expired in the previous six months. 
   * End user needs to create system account with sensitive access roles and procure API_KEY to access these extracts.


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Entity Extracts can be downloaded using the following end points:

1. Public Endpoints:
  * https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}
  * https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}

2. FOUO Endpoints:  
  * https://api.sam.gov/prodlike/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name}
  * https://api.sam.gov/prod/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name}

3. Sensitive Endpoints:    
  * https://api.sam.gov/prodlike/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name} 
  * https://api.sam.gov/prod/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name}

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Entity Extracts Download API

**Entity Public Extract:**<br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name} <br>
https://api.sam.gov/prod/dataservices/v1/extracts?api_key={API_KEY_WITH_PUBLIC_ROLE}&fileName=${file-name}  <br>

**Description :**  These are  static endpoints to retrieve public monthly data <br>

<b>Query String Parameters</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>fileName</td>
<td>Allows users to provide extract monthly file name 
<br>Example: fileName=SAM_PUBLIC_MONTHLY_20190323.ZIP</td>
</tr>
</table>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/public_extract_layout.pdf">Public Extract Layout</a>

**Entity FOUO Extract:** <br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name} <br>
https://api.sam.gov/prod/dataservices/v1/extracts/fouo?api_key={API_KEY_WITH_FOUO_ROLE}&fileName=${file-name} <br>

**Description :**  These are  static endpoints to retrieve public monthly data <br>

<b>Query String Parameters</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>fileName</td>
<td>Allows users to provide extract monthly file name
<br>Example: fileName=SAM_FOUO_MONTHLY_20190323.ZIP</td>
</tr>
</table>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/fouo_extract_layout.pdf">FOUO Extract Layout</a>

**Entity Sensitive Extract:** <br>

**Alpha and Beta Endpoints :** <br>
https://api.sam.gov/prodlike/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name} <br>
https://api.sam.gov/prod/dataservices/v1/extracts/sensitive?api_key={API_KEY_WITH_SENSITIVE_ROLE}&fileName=${file-name} <br>

**Description :**  These are  static endpoints to retrieve public monthly data <br>

<b>Query String Parameters</b>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Parameter Name</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>
<tr>
<td>fileName</td>
<td>Allows users to provide extract monthly file name
<br>Example: fileName=SAM_SENSITIVE_MONTHLY_20190323.ZIP</td>
</tr>
</table>

**Expected Result**<br>
Click to view the full details of the data elements: <a href="v1/sensitive_extract_layout.pdf">Sensitive Extract Layout</a>


## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * You dont have valid permission to access this extracts. <br><br> * fileName cannot be null. <br><br> * The requested extract file doesn't exist.  <br><br> * The requested extract file download is not supported yet. |
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>
