# Subcontracting Plan Reporting Outbound API Specs

## Overview

The Subcontracting Plan Reporting API is intended for federal use only.

In MVP 1, the API provides a basic synchronous interface that enables users to query and retrieve data. 
MVP 2 will introduce additional capabilities, including data download and extract functionality.

This API allows authorized federal users to request For Official Use Only (FOUO) data. 
Access to data is controlled based on the sensitivity level of the user's System Account, along with a set of 
optional request parameters that can be used to filter and refine results.

### FOUO (CUI) Data

This constitutes both the publicly available entities and the entities that have opted out of public display 
with their CUI data such as hierarchy, company and employee security levels and points of 
contact email address, phone, and fax numbers.

## Key Features of the Subcontracting Plan Reporting API: (MVP 1)

- It offers several optional search parameters, filtering by sections, AND (&), OR (~) conditions and a free text search q to obtain the desired data.
- It returns synchronous responses.
- Returns results in JSON format.
- Supports pagination with up to 100 records per request.
- Use the size parameter to control the number of records returned (maximum: 100).
- If size is not specified, the default is 10 records per request.
- Additional records can be retrieved by making subsequent requests and updating the page parameter.
- The following characters are not allowed to be sent in the parameter values with the API request: & | { } ^ \

## Additional Features of the Subcontracting Plan Reporting API: (MVP 2 - Awaiting for Program's decision on any enhance features)

- It can serve as an extract API with the addition of "format" parameter in the request.
- Following are the key features of the Subcontracting Plan Reporting API:
    - It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
    - It returns asynchronous responses by sending file downloadable link.
    - It returns data in the JSON or CSV format as selected by the user.
    - It can return only the first 1,000,000 records.

## Getting Started (MVP 1)

### API Endpoints

**Production:**
- `https://api.sam.gov/spr/v1/search?api_key=`

**Alpha:**
- `https://api-alpha.sam.gov/spr/v1/search?api_key=`

### User Requirements

To access FOUO (CUI) data:

- Users must have a Federal System Account with the "Read FOUO" in Subcontracting Plan Reports permission and 
  the respective API Key in SAM.gov.
- Users can make GET calls using any Browser or a Restful API client such as Postman.

### System Accounts

- The SAM.gov Federal registered users must contact their agency administrator for obtaining the "System Accounts" widget on their SAM.gov "Workspace" page.

- To learn more about System Account roles and how to request or manage them, refer to the following resources:
  - How to assign a System Administrator / System Manager role in system accounts (KB0017682)
  - What roles are associated with system accounts? (KB0017606)

- Users must create their System Account using the “System Accounts” widget and get it approved.
- Users must then set the password for the System Account.
- After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.
- System Accounts must satisfy the following criteria to successfully utilize the Subcontracting Plan Reporting API:
   - System Accounts Criteria
     Unique System ID: The System Account ID
   - Permissions
     Subcontracting Plan Reports: Read FOUO –> Gives access to the Public and FOUO (CUI) data.
   - Security Information
     IP Address: List all the IP Addresses that the System invokes the API from.
   - Type of Connection: REST APIs
   - System Account Password
   - System Account API Key

### API Key Rate Limits

| Type of User Account | Type of API Key | Default API Daily Rate Limit |
|---------------------|----------------|------------------------------|
| Federal System User | System Account API Key | 10,000 Requests/Day |

## API Description

### Query String Parameters

The Subcontract Plan Reports API offers several optional search parameters that can be provided independently or in combination with each other. All parameters are optional.

| # | Parameter Name | Description | Applicable Versions |
|---|---------------|-------------|---------------------|
| 1 | q | User to pass filtername:value format. Entity Management example for reference: https://api.sam.gov/entity-information/v3/entities?api_key=< A valid FOUO API Key >&purposeOfRegistrationCode=Z1~Z2&q=(businessTypeDesc:'Joint Venture Women' OR businessTypeDesc:'Asian-Pacific')&includeSections=entityRegistration,coreData | V1 |
| 2 | organizationCode | Open GSA Documentation shall indicate that complete values must be provided. If mapping this filter to multiple Org fields may lead to user confusion, then we can offer separate filters such as: reportedToDepartmentCode, contractingDepartmentCode, contractingSubtierCode, contractingOfficeCode | V1 |
| 3 | submitter | Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 4 | reportSubmittedDate | Report Submitted date | V1 |
| 5 | reportinFiscalYear | Open GSA Documentation shall indicate that complete values must be provided. | V1 |
| 6 | reportingPeriod | Applies to ISR and DOD (Final does not apply for DOD). Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 7 | reportType | Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 8 | uniqueEntityID | Open GSA Documentation shall indicate that complete values must be provided. | V1 |
| 9 | legalBusinessName | Allows partial or complete value search. Allows single or multiple values. Note: API must be able to accept case-insensitive values. | V1 |
| 10 | ultimateParentUniqueEntityID | Open GSA Documentation shall indicate that complete values must be provided. | V1 |
| 11 | piid | Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 12 | referenceIdvPiid | Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 13 | subcontractNumber | Open GSA Documentation shall indicate that complete values must be provided. Note: API must be able to accept case-insensitive values. | V1 |
| 14 | includeSections | The API shall offer the following by default: reportData, contractData, entityData, taskOrdersData, commercialPercentageForFederalOrganizationsData, goalsAndActualsData, certificationData. Offers the following, when explicitly queried in the includeSections: remarks, dodComprehensiveAttachments | V1 |
| 15 | page | Maximum returned data records pages. Notes: the maximum returned number less than 10,000 records per 24 hours (Page multiplied by Size). | V1 |
| 16 | size | Maximum records on returned data page, up to 100. | V1 |

### Response Schema

Reference for developers (JSON): https://docs.google.com/spreadsheets/d/1AHB7xAQxbzdTAIjfGt_nGt8qJNrMed2yM3Av3TaJKZg/edit?gid=0#gid=0

The Subcontracting Plan Reports API offers several response elements that are described in the following sections:

- reportData
- entityData
- contractData
- taskOrdersData
- departmentAllocationPercentageData
- goalsAndActualsData
- remarksData
- certificationData
- dodComprehensiveAttachmentsData
- links

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: [Open API specification file for the Subcontracting Plan Reports API](openapi.yaml)

### HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
|-------------------|-------------|
| 200 | The API call is successful |
| 400 (Bad Request) | Application Level Error Messages: <br>- Invalid Search Parameter format <br>- Invalid Search Parameter name <br>- More than 100 records are requested via "size" parameters |
| 401 (Unauthorized) | - Missing "Basic Auth" under "Authorization" and missing System Account credentials <br>- Providing "Basic Auth" under "Authorization", but missing or invalid System Account credentials <br>- Different IP Address than that mentioned in the System Account <br>- API Key does not belong to the System Account <br>- Missing API Key in request <br>- Invalid API Key (Expired API Key) |
| 403 Forbidden (Forbidden) | - No Subcontracting Plan Reports Permission in System Account <br>- System Account has a different value for "Type of Connection" |
| 406 | Missing Accept Header |
| 415 | Missing or Invalid Content-Type header |

## Examples

### Example 1: ISR for a UEI

Retrieve all Individual Subcontracting Reports (ISR) submitted by a specific entity (UEI) for a given fiscal year.

#### Request URL
- **Production:** https://api.sam.gov/spr/v1/search?api_key=<VALID API KEY>
- **Alpha:** https://api-alpha.sam.gov/spr/v1/search?api_key=<VALID API KEY>

#### Curl Request

```bash
curl -X POST "https://<Production or Alpha URL>/spr/v1/search?api_key=<API KEY>" \
-u "YourSystemAccountName:YourSystemAccountPassword" \
-H "Content-Type: application/json" \
-d '{
  "uniqueEntityID": "C3NLZNSMU254",
  "reportingFiscalYear": "2026",
  "reportType": "Individual"
}'
```

#### Response
- JSON Output

---

### Example 2: Summary Reports (2022–2025)

Retrieve Summary Individual Reports for a range of fiscal years.

#### Request URL
- **Production:** https://api.sam.gov/spr/v1/search?api_key=<VALID API KEY>
- **Alpha:** https://api-alpha.sam.gov/spr/v1/search?api_key=<VALID API KEY>

#### Curl Request

```bash
curl -X POST "https://<Production or Alpha URL>/spr/v1/search?api_key=<API KEY>" \
-u "YourSystemAccountName:YourSystemAccountPassword" \
-H "Content-Type: application/json" \
-d '{
  "reportingFiscalYear": "[2022,2025]",
  "reportType": "Summary Individual"
}'
```

#### Response
- JSON Output

---

## Additional Information

You can view the full details of the differences between the SAM legacy API and SAM.gov API in the **Variance Document**.

---

## Disclaimer: D&B Data Usage

This website contains data supplied by third-party providers, including Dun & Bradstreet (D&B).

### D&B Open Data Includes:
- Legal Business Name
- Address (Street, City, State, Country)
- ZIP/Postal Code
- Country Codes

### Usage Terms:
- Must provide attribution to D&B
- Cannot use for resale, marketing, or commercial purposes
- Bulk extraction is prohibited
- Automated scraping (bots/spiders) is not allowed

### Notes:
- Federal agencies may use data for acquisition and award management
- Data is provided **“as is”** with no warranty
- D&B retains intellectual property rights

For more info: datause_govt@dnb.com

---

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

- Reach out to the SAM.gov team at https://www.fsd.gov for inquiries and help desk support.

- Before contacting the help desk, conduct your own initial troubleshooting  
  a. Conduct a recent review of the https://open.gsa.gov/api specifications  
  b. Confirm you are using an API tool, not a browser to send the request (FOUO & Sensitive Calls)  
  c. Confirm you are using the username/password for the system account that created the API key in the authentication header (Sensitive Calls)  
  d. Confirm you used POST and not GET for this request (Sensitive Calls)  
  e. Confirm that the API key is from a system account (FOUO & Sensitive Calls)  
  f. Confirm that the API key being used is still active  
  g. Confirm that the system account you are using has “read fouo” or “read sensitive” permissions as applicable (FOUO & Sensitive Calls)  
  h. Confirm that the IP addresses registered with your system account are current

- When submitting help desk tickets for API or system connection issues, provide the following:  
  a. The exact API requests that you were trying to send  
  b. The exact error messages that you were receiving  
  c. The exact dates and times when you received the errors  
  d. Screenshots (with the actual API request and the error) [Attach to the ticket]  
  e. The System Account ID/Name that was trying to make API calls  
  f. Screenshots of the parameters used for API call [Attach to the ticket]  
  g. Screenshots of the Headers used for the API call [Attach to the ticket]

- Users requesting access to the test site (alpha.sam.gov) should follow the below steps.  
  These steps ONLY apply to alpha.sam.gov access requests.

  a. Navigate to https://www.fsd.gov  
  b. Sign into the FSD platform using your FSD credentials  
  c. Select “Create an Incident”  
  d. Create an Incident

  i. System Name: System for Award Management (SAM)  
  ii. Is this related to the American Rescue Plan Act?: No  
  iii. Issue Type: Other  
  iv. Business Type: Other  
  v. Subject (select 1):  
  1. Option A: I need a role to test in alpha.sam.gov  
  2. Option B: System account approval in alpha.sam.gov

  vi. Please describe the issue:  
  (Copy and paste the below information into the ticket, filling in your information within the brackets)

        1. **Option A:**  
           I have already navigated to alpha.sam.gov and created a user account, following the same steps for creating an account in sam.gov.  
           I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov.  
           The account that needs role assignment is associated with [EMAIL ADDRESS].  
           I request a [ROLE] role for the [DOMAIN] domain in alpha.sam.gov.  

        2. **Option B:**  
           I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval.  
           I would like to request alpha.sam.gov system account review and approval for [Name of the alpha.sam.gov system account].  

<p><small><a href="#">Back to top</a></small></p>
