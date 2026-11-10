---
title: SAM.gov Contract Awards Extracts
banner-heading: SAM.gov Contract Awards Extracts
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

## Overview

The Contract Award Extracts Download API allows users to request Public and Non-Public extracts, based on the Department of the user account and through several optional request parameters.

**Public Contract Award Extracts:**

The Public Contract Award Extract constitutes the Revealed Contract Award data Modified or Revealed on a given day. Revealed Contract Award data includes contracts that were either funded or awarded by a Civilian Subtier, as well as contracts funded and awarded by DoW, provided the Date Signed is at least 90 days prior to today's date.

**Non-Public Contract Award Extracts:**

The Non-Public Contract Award Extract constitutes the Revealed and Unrevealed Contract Award data Modified on a given day. Unrevealed data consists of all revealed contracts, plus DoW contracts that were funded and awarded with a Date Signed less than 90 days prior to today.

### Extract Calendar

<table>
  <thead>
    <tr>
      <th style="background-color: #f1f1f1; width: 28%;">
        <b>Extract Type</b>
      </th>
      <th style="background-color: #f1f1f1;">
        <b>Schedule, Content, and File Naming Convention</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Daily Public Extracts</b></td>
      <td>
        <ul>
          <li>Produced every day. Check after 8 AM Eastern time.</li>
          <li>
            The date on the .ZIP file matches the date when
            the file was generated.
            For example, a file generated on 10/27/2026
            shows 20261027.
          </li>
          <li>
            The date on the .ZIP file matches the date
            on the .CSV file inside.
          </li>
          <li>These files contain Public Contract Award data.</li>
          <li>
            <b>File Naming Convention - Daily ASCII:</b>
            <ul>
              <li>
                <code>Contract_Award_Public_Extract_YYYYMMDD.ZIP</code>
                (YYYYMMDD is the date format)
              </li>
              <li>
                Example:
                <code>Contract_Award_Public_Extract_20261027.ZIP</code>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>Daily Non-Public Extracts</b></td>
      <td>
        <ul>
          <li>Produced every day. Check after 8 AM Eastern time.</li>
          <li>
            The date on the .ZIP file matches the date when
            the file was generated.
            For example, a file generated on 10/27/2026
            shows 20261027.
          </li>
          <li>
            The date on the .ZIP file matches the date
            on the .CSV file inside.
          </li>
          <li>These files contain Non-Public Contract Award data.</li>
          <li>
            <b>File Naming Convention - Daily ASCII:</b>
            <ul>
              <li>
                <code>Contract_Award_Non_Public_Extract_YYYYMMDD.ZIP</code>
                (YYYYMMDD is the date format)
              </li>
              <li>
                Example:
                <code>Contract_Award_Non_Public_Extract_20261027.ZIP</code>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

### API endpoints

**Production:**

* https://api.sam.gov/data-services/v1/extracts?api_key=
* https://api.sam.gov/data-services/v1/extracts?

**Alpha:**

* https://api-alpha.sam.gov/data-services/v1/extracts?api_key=
* https://api-alpha.sam.gov/data-services/v1/extracts?

### User Requirements

**To access Public extracts:**

* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, or a non-Federal/Federal System Account with the respective API Key in SAM.gov.
* Users can make GET calls using any browser or a RESTful API client such as Postman.

**To access Non-Public extracts:**

* Users must have a Federal Individual (Personal) account associated with the Department of War and the respective API Key, or a Federal System Account associated with the Department of War with the respective API Key in SAM.gov.
* Users can make GET calls using any browser or a RESTful API client such as Postman.

### Individual (Personal) Accounts

* SAM.gov Federal or non-Federal registered users must obtain the API Key from the [SAM.gov Account Details](https://sam.gov/workspace/profile/account-details) page using the field "Public API Key".

  ![API Key Eye Icon](v1/EYE_IMAGE.JPG)

* Click the "Eye" icon, enter the one-time password sent to the email address associated with the registered account, and select "Submit" to display the API Key.

### System Accounts

* SAM.gov non-Federal registered users must request a System Account. If their registration and request criteria are satisfied, the "System Accounts" widget will be available on their SAM.gov Workspace page.
* SAM.gov Federal registered users must contact their CCB representatives to obtain the "System Accounts" widget.
* Users must create their System Account using the widget and obtain approval.
* Users must set the password for the System Account.
* After completing these steps, users will see a section for retrieving the API Key. The password must be entered to retrieve the key.
* System Accounts must satisfy the following criteria:

  * **System Information**
    * Unique System ID: The System Account ID
  * **Permissions**
    * None
  * **Security Information**
    * IP Address: List all IP addresses from which the system invokes the API.
  * **Type of Connection:** Data Service Extracts
  * **System Account Password**
  * **System Account API Key**

### API Key Rate Limits

| Type of User Account | Type of API Key | Default API Daily Rate Limit |
| --- | --- | --- |
| Non-federal user with no Role in SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a Role in SAM.gov | Personal API key | 1,000 requests/day |
| Federal User | Personal API key | 1,000 requests/day |
| Non-federal System user | System account API key | 1,000 requests/day |
| Federal System user | System account API key | 10,000 requests/day |

## API Description

<details>
<summary><strong>Query String Parameters</strong></summary>

The Extracts Download API offers several optional search parameters.

| Parameter Name | Description |
| --- | --- |
| api_key | Required to identify and validate API users and their role-based access. |
| fileName | Must be used on its own. Allows users to provide the extract file name. Example: `Contract_Award_Public_Extract_20261027.ZIP`. |
| fileType | Must be used if fileName is not specified. Permitted value: `CONTRACT`. |
| sensitivity | Must not be used with fileName. Default: `PUBLIC`. Permitted values: `PUBLIC`, `NON-PUBLIC`. |
| frequency | Specifies the extract frequency. Default: `DAILY`. Permitted value: `DAILY`. |
| charset | Specifies the extract character set. Default: `ASCII`. Permitted values: `ASCII`, `UTF8`, `UTF-8`. Not applicable to the CONTRACT file type. |
| date | Specifies the extract date. Format: `MM/DD/YYYY`. Default: most recent date. Example: `10/27/2026`. |
| version | Specifies the extract version. Default: `V1`. Permitted value: `V1`. |

</details>

<details>
<summary><strong>Extract Mapping Document and Layouts</strong></summary>

**Please refer to the following:**

* **Public extract layout:** [Public Extract Layout](http://test)
* **Non-Public extract layout:** [Non-Public Extract Layout](http://test)

</details>

<details>
<summary><strong>Sample Extract File Names</strong></summary>

* **Public Extract files:**
  * `Contract_Award_Public_Extract_20261027.ZIP`
* **Non-Public Extract files:**
  * `Contract_Award_Non_Public_Extract_20261027.ZIP`

</details>

<details>
<summary><strong>Extract Download API Sample Requests</strong></summary>

**Public Extract - By File Name:**

    https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=Contract_Award_Public_Extract_20261027.ZIP

**Public Extract - By Parameters:**

    https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=CONTRACT&sensitivity=PUBLIC&frequency=DAILY

**Non-Public Extract - By File Name:**

    https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileName=Contract_Award_Non_Public_Extract_20261027.ZIP

**Non-Public Extract - By Parameters:**

    https://api.sam.gov/data-services/v1/extracts?api_key={API_KEY}&fileType=CONTRACT&sensitivity=NON-PUBLIC&date=10/27/2026

</details>

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file.

<!-- TODO: Replace with the correct Contract Award Extracts OpenAPI specification URL. -->

**OpenAPI specification link:** Pending confirmation.

<p><small><a href="#">Back to top</a></small></p>

## Sample Extract Files

**Extract files with Contract Data Information:**

* [Public Daily Extract File](http://test)
* [Non-Public Daily Extract File](http://test)

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| --- | --- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages (listed below). |
| 406 | Invalid Accept Header. |
| 415 | Invalid Content-Type Header. |

**HTTP 400 - Application Level Error Messages:**

* User does not have permission to download the file.
* Missing required parameters: fileName OR fileType.
* The requested extract file was not found.
* Invalid date format.
* This HTTP method is not allowed to download Public or Non-Public extracts. Only GET is supported.
* No api_key was supplied in the request parameter. Please submit with a valid API key.
* The parameter fileName cannot be used with any other parameters.
* The file does not exist with the provided parameters.
* IP addresses associated with this System Account are different from the address sending the request.
* Insufficient privileges to perform the operation - System account must have Type of Connection as Restful.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov/) for inquiries and help desk support.

### Before Contacting the Help Desk

* Review the latest API specifications on open.gsa.gov.
* Confirm that you used GET and not POST.
* Confirm that the API key is still active.
* Confirm that the IP addresses registered with your System Account are current.

### When Submitting a Help Desk Ticket

Provide the following information:

1. The exact API requests you attempted.
2. The exact error messages received.
3. The dates and times when the errors occurred.
4. Screenshots showing the API request and error.
5. The System Account ID/Name used to make the API calls.
6. Screenshots of the request parameters.
7. Screenshots of the request headers.

### Alpha Environment Access Requests

Users requesting access to alpha.sam.gov should follow these steps:

1. Navigate to [www.fsd.gov](https://www.fsd.gov/).
2. Sign in using FSD credentials.
3. Select "Create an Incident".
4. Create an incident using the following information:
   * **System Name:** System for Award Management (SAM)
   * **Is this related to the American Rescue Plan Act?:** No
   * **Issue Type:** Other
   * **Business Type:** Other
   * **Subject:** Select one of the options below.

**Option A - Request a role to test in alpha.sam.gov**

Subject: I need a role to test in alpha.sam.gov.

Description:

I have already navigated to alpha.sam.gov and created a user account, following the same steps for [creating an account](https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=81d067071b80b0109ac5ddb6bc4bcb63) in sam.gov. I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov.

The account requiring role assignment is associated with [EMAIL ADDRESS]. I request a [ROLE] role for the [DOMAIN] domain in alpha.sam.gov.

**Option B - Request System Account approval in alpha.sam.gov**

Subject: System account approval in alpha.sam.gov.

Description:

I am creating/editing a System Account and have submitted my account in alpha.sam.gov for approval. I would like to request alpha.sam.gov System Account review and approval for [Name of the alpha.sam.gov System Account].

<p><small><a href="#">Back to top</a></small></p>

## Change Log

| Date | Version | Description |
| --- | --- | --- |
| 11/XX/2026 | v1.0 | Base Version |

<p><small><a href="#">Back to top</a></small></p>
