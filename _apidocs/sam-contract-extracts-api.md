---
title: SAM.gov Contract Awards Extracts
banner-heading: SAM.gov Contract Awards Extracts
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

## **Overview**

The Contract Award Extracts Download API allows users to request Public and Non-Public extracts, based on the Department of the user account and through several optional request parameters.

**Public Contract Award Extracts:**

The Public Contract Award Extract constitutes the Revealed Contract Award data Modified or Revealed on a given day. Revealed Contract Award data includes contracts that were either funded or awarded by a Civilian Subtier, as well as contracts funded and awarded by DoW, provided the Date Signed is at least 90 days prior to today’s date.

**Non-Public Contract Award Extracts:**

The Non-Public Contract Award Extract constitutes the Revealed and Unrevealed Contract Award data Modified on a given day. Unrevealed data consists of all revealed contracts, plus DoW contracts that were funded and awarded with a Date Signed less than 90 days prior to today.

**Extract Calendar**
<table>
<tr>
<td>Daily Public Extracts</td>
<td>
<ul>
<li>Produced every day. Check after 8AM Eastern time. </li>
<li>The date on the .ZIP file matches the date when the file was generated.<br>
E.g.: The file generated on 10/27/2026 will show 20261027.</li>
<li>The date on the .ZIP file matches the date on the .CSV file inside.</li>
<li>These files contain the Public Contract Award data.</li>
<li>File Naming Convention:<br>
  <b>Daily ASCII:</b>
  <ul>
    <li>Contract_Award_Public_Extract_YYYYMMDD.ZIP (YYYYMMDD is the Date format)<br>
E.g.: The file for 10/27/2022 would be Contract_Award_Public_Extract_20261027.ZIP.</li>
</ul>
</td>
</tr>
<tr>
<td>Daily Non-Public Extracts</td>
<td>
<ul>
<li>Produced every day. Check after 8AM Eastern time.</li>
<li>The date on the .ZIP file matches the date when the file was generated.<br>
E.g.: The file generated on 10/27/2026 will show 20261027.</li>
<li>The date on the .ZIP file matches the date on the .CSV file inside.</li>
<li>These files contain the Public Contract Award data.</li>
<li>File Naming Convention:<br>
  <b>Daily ASCII:</b>
  <ul>
    <li>E.g.: The file for 10/27/2022 would be Contract_Award_Non_Public_Extract_20261027.ZIP.<br>
E.g.: The file for 10/27/2022 would be Contract_Award_Public_Extract_20261027.ZIP.</li>
</ul>
</td>
</tr>
</table>

## **Getting Started**

### **API endpoints**

**Production:**

* https\://api.sam.gov/data-services/v1/extracts?api\_key=
* https\://api.sam.gov/data-services/v1/extracts?

**Alpha:**

* https\://api-alpha.sam.gov/data-services/v1/extracts?api\_key=
* https\://api-alpha.sam.gov/data-services/v1/extracts?

### **User Requirements**

**To access Public extracts:**

* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, or a non-Federal/Federal System Account with the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access Non-Public extracts:**

* Users must have a Federal Individual (Personal) account associated with the Department of War and the respective API Key, or a Federal System Account associated with the Department of War with the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

### **Individual (Personal) Accounts**

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https\://sam.gov/workspace/profile/account-details page using the field, “Public API Key”.  
  ![image info](v1/EYE_IMAGE.JPG)
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.

### **System Accounts**

* The SAM.gov non-Federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts” widget on their SAM.gov “Workspace” page.
* The SAM.gov Federal registered users must contact their CCB representatives for obtaining the “System Accounts” widget on their SAM.gov “Workspace” page.
* Users must create their System Account using the “System Accounts” widget and get it approved.
* Users must then set the password for the System Account.
* After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.
* System Accounts must satisfy the following criteria to successfully utilize this API:
    * System Information  
      Unique System ID: The System Account ID
    * Permissions  
      None
    * Security Information  
      IP Address: List all the IP Addresses that the System invokes the API from.
    * Type of Connection: Data Service Extracts
    * System Account Password
    * System Account API Key

### **API Key Rate Limits**

| Type of User Account | Type of API Key | Default API Daily Rate Limit |
| :---- | :---- | :---- |
| Non-federal user with no Role in SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a Role in SAM.gov | Personal API key | 1,000 requests/day |
| Federal User | Personal API key | 1,000 requests/day |
| Non-federal System user | System account API key | 1,000 requests/day |
| Federal System user | System account API key | 10,000 requests/day |

## **API Description**

**Query String Parameters:**

The Extracts Download API offers several optional search parameters.

| Parameter Name | Description |
| :---- | :---- |
| api\_key | This parameter is required to identify and validate API users and their role-based access. |
| fileName | This parameter must be used on its own. It allows users to provide the extract file name. Examples: fileName=Contract\_Award\_Public\_Extract\_20261027.ZIP; fileName= Contract\_Award\_Non\_Public\_Extract\_20261027.ZIP; |
| fileType | This parameter must be used if fileName is not specified. It allows users to specify the type of the extract that they wish to download. Permitted values: CONTRACTS |
| sensitivity | This parameter must not be used in conjunction with the fileName parameter. It allows users to provide the desired sensitivity level of the extract that they wish to download, if they have proper roles. Default value, if the parameter is not provided: PUBLIC Permitted values: PUBLIC – Returns the Public extracts. NON-PUBLIC – Returns the Non-Public extracts. |
| frequency | This parameter allows users to request the DAILY extract Default value, if the parameter is not provided: DAILY Permitted values: DAILY |
| charset | This parameter allows users to request either the ASCII or UTF-8 extract character-set. Default value, if the parameter is not provided: ASCII Permitted values: ASCII, UTF8, UTF-8 Note: This parameter is not applicable for the CONTRACT file type. |
| date | This parameter allows users to select a specific date of the file that they wish to download. Format: MM/DD/YYYY for Daily files Default value: Most recent date, depending on fileType Examples: 10/27/2026 |
| version | This parameter allows users to select the file they wish to download by version. Default value: V1 Permitted values: V1 for the Public and Non-Public extract. |

**Extract Mapping Document and Layouts:**

**Please refer to the following:**

* **Public extract layout:**  
  [**Public Extract Layout**](http://test)
* **Non-Public extract layout:**  
  [**Non-Public Extract Layout**](http://test)

**Sample Extract File Names:**

* **Public Extract files:**
    * Contract\_Award\_Public\_Extract\_20261027
* **Non-Public Extract files:**
    * Contract\_Award\_Non\_Public\_Extract\_20261027

**Extract Download API Sample Requests:**

* https\://api.sam.gov/data-services/v1/extracts?api\_key={API KEY}\&fileName=Contract\_Award\_Public\_Extract\_20261027.ZIP
* https\://api.sam.gov/data-services/v1/extracts?api\_key={API KEY}\&fileType=CONTRACT\&sensitivity=PUBLIC&frequency\=DAILY
* https\://api.sam.gov/data-services/v1/extracts?api\_key={API KEY}\&fileName=Contract\_Award\_Non\_Public\_Extract\_20261027.ZIP
* https\://api.sam.gov/data-services/v1/extracts?api\_key={API KEY}\&fileType=CONTRACT\&sensitivity=NON-PUBLIC\&date=10/27/2026

## **OpenAPI Specification File**

**You can view the full details of this API’s in the OpenAPI Specification file available here:**  
[**Open API specification file for the Contract Award Extracts Download API**](https://open.gsa.gov/api/sam-entity-extracts-api/v1/openapi.yaml)

<p><small><a href="#">Back to top</a></small></p>

## **Sample Extract Files**

**Extract files with Contract Data Information:**

* **Click to view [Public Daily Extract File](http://test)**
* **Click to view [Non-Public Daily Extract File](http://test)**

<p><small><a href="#">Back to top</a></small></p>

## **HTTP Response Codes**

**The API will return one of the following responses:**

| HTTP Response Code | Description |
| :---- | :---- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: \* User does not have permission to download the file. \* Missing required parameters, fileName OR fileType \* The requested extract file not found \* Invalid date format \* This http method is not allowed to download public or non-public extracts. Only GET is supported for public and non-public extracts. \* No api\_key was supplied in the request parameter. Please submit with a valid API key. \* The parameter fileName cannot be used with any other parameters. \* The File does not exist with the provided parameters \* IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system. \* Insufficient privileges to perform the operation \- System account must have Type of Connection as Restful. |
| 406 | Invalid Accept Header. |
| 415 | Invalid Content-Type Header. |

<p><small><a href="#">Back to top</a></small></p>

## **Contact Us**

* Reach out to the SAM.gov team at [www\.fsd.gov](https://www.fsd.gov/) for inquiries and help desk support.
    1. Before contacting the help desk, conduct your own initial troubleshooting
        1. Conduct a recent review of the open.gsa.gov/api specifications
        2. Confirm you used GETand not POST for this request
        3. Confirm that the API key being used is still active
        4. Confirm that the IP addresses registered with your system account are current
    2. When submitting help desk tickets for API or system connection issues, provide the following:
        1. The exact API requests that you were trying to send
        2. The exact error messages that you were receiving
        3. The exact dates and times when you received the errors
        4. Screenshots (with the actual API request and the error) \[Attach to the ticket\]
        5. The System Account ID/Name that was trying to make API calls
        6. Screenshots of the parameters used for API call \[Attach to the ticket\]
        7. Screenshots of the Headers used for the API call \[Attach to the ticket\]
* Users requesting access to the test site (alpha.sam.gov) should follow the below steps. These steps ONLY apply to alpha.sam.gov access requests.
    1. Navigate to [www\.fsd.gov](https://www.fsd.gov/)
    2. Sign into the FSD platform using your FSD credentials
    3. Select “Create an Incident”
    4. Create an Incident
        1. System Name: System for Award Management (SAM)
        2. Is this related to the American Rescue Plan Act?: No
        3. Issue Type: Other
        4. Business Type: Other
        5. Subject (select 1):
            1. Option A: I need a role to test in alpha.sam.gov.
            2. Option B: System account approval in alpha.sam.gov
        6. Please describe the issue: (Copy and paste the below information into the ticket, filling in your information within the brackets)
            1. Option A: I have already navigated to alpha.sam.gov and created a user account, following the same steps for [creating an account](https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=81d067071b80b0109ac5ddb6bc4bcb63) in sam.gov. I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov. The account that needs role assignment is associated with \[EMAIL ADDRESS\]. I request a \[ROLE\] role for the \[DOMAIN\] domain in alpha.sam.gov.
            2. Option B: I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval. I would like to request alpha.sam.gov system account review and approval for \[Name of the alpha.sam.gov system account\].

<p><small><a href="#">Back to top</a></small></p>

## **Change Log**

| Date | Version | Description |
| :---- | :---- | :---- |
| 11/XX/2026 | v1.0 | Base Version |

<p><small><a href="#">Back to top</a></small></p>