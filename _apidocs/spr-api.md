---
title: SAM.gov Entity Management  API
banner-heading: SAM.gov Entity Management API
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

# Subcontracting Plan Reporting Outbound API Specs

## Overview

The Subcontracting Plan Reporting API is intended for federal use only.

The API provides a basic synchronous interface that enables users to query and retrieve data. The future enhancements will introduce additional capabilities, including data download and extract functionality.

This API allows authorized federal users to request For Official Use Only (FOUO) data. Access to data is controlled based on the sensitivity level of the user’s System Account, along with a set of optional request parameters that can be used to filter and refine results.

### FOUO (CUI) Data

This constitutes both the publicly available entities and the entities that have opted out of public display with their CUI data such as hierarchy, company and employee security levels and points of contact email address, phone, and fax numbers.

## Key Features of the Subcontracting Plan Reporting API: (MVP 1)

- It offers several optional search parameters, filtering by sections, AND (&), OR (~) conditions and a free text search q to obtain the desired data.
- It returns synchronous responses.
- Returns results in JSON format.
- Supports pagination with up to 100 records per request.
- Use the size parameter to control the number of records returned (maximum: 100).
- If size is not specified, the default is 10 records per request.
- Additional records can be retrieved by making subsequent requests and updating the page parameter.
- The following characters are not allowed to be sent in the parameter values with the API request: "& | { } ^ \"

## Additional Features of the Subcontracting Plan Reporting API: (No Available  yet. Awaiting for Program's decision on any enhance features)

- It can serve as an extract API with the addition of "format" parameter in the request.
- Following are the key features of the Subcontracting Plan Reporting API:
    - It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
    - It returns asynchronous responses by sending file downloadable link.
    - It returns data in the JSON or CSV format as selected by the user.
    - It can return only the first 1,000,000 records.

## Getting Started

### API Endpoints

**Production:**
- `https://api.sam.gov/spr/v1/search?api_key=`

**Alpha:**
- `https://api-alpha.sam.gov/spr/v1/search?api_key=`

### User Requirements

FOUO (CUI) data:

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
    - System Information
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
| Federal System User | System Account API Key | 10,000 Requests every 24-hour|

## API Description

### Query String Parameters

The Subcontract Plan Reports API offers several optional search parameters that can be provided independently or in combination with each other. All parameters are optional.

| # | Parameter Name | Description                                                                                                                                                                                                                                                                                                                     | Applicable Versions |
|---|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| 1 | q | User to pass filtername:value format. Entity Management example for reference: https://api.sam.gov/spr/v1/search?api_key=<VALID API KEY>                                                                                                                                                                                        | V1 |
| 2 | organizationCode | Open GSA Documentation shall indicate that complete values must be provided. If mapping this filter to multiple Org fields may lead to user confusion, then we can offer separate filters such as:<br> reportedToDepartmentCode<br> contractingDepartmentCode<br> contractingSubtierCode<br> contractingOfficeCode              | V1 |
| 3 | submitter | Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                      | V1 |
| 4 | reportSubmittedDate | Report Submitted date                                                                                                                                                                                                                                                                                                           | V1 |
| 5 | reportinFiscalYear | Open GSA Documentation shall indicate that complete values must be provided.                                                                                                                                                                                                                                                    | V1 |
| 6 | reportingPeriod | Applies to ISR and DOD (Final does not apply for DOD). <br>Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                           | V1 |
| 7 | reportType | Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                      | V1 |
| 8 | uniqueEntityID | Open GSA Documentation shall indicate that complete values must be provided.                                                                                                                                                                                                                                                    | V1 |
| 9 | legalBusinessName | Allows partial or complete value search. Allows single or multiple values. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                        | V1 |
| 10 | ultimateParentUniqueEntityID | Open GSA Documentation shall indicate that complete values must be provided.                                                                                                                                                                                                                                                    | V1 |
| 11 | piid | Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                      | V1 |
| 12 | referenceIdvPiid | Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                      | V1 |
| 13 | subcontractNumber | Open GSA Documentation shall indicate that complete values must be provided. <br>Note: API must be able to accept case-insensitive values.                                                                                                                                                                                      | V1 |
| 14 | includeSections | The API shall offer the following by default:<br> reportData<br>contractData<br>entityData<br>taskOrdersData<br>commercialPercentageForFederalOrganizationsData<br>goalsAndActualsData<br>certificationData. <br><br>Offers the following, when explicitly queried in the includeSections:<br>remarks<br>dodComprehensiveAttachments | V1 |
| 15 | page | Maximum returned data records pages.<br> Notes: the maximum returned number less than 10,000 records per 24 hours (Page multiplied by Size).                                                                                                                                                                                        | V1 |
| 16 | size | Maximum records on returned data page, up to 100.                                                                                                                                                                                                                                                                               | V1 |

### Response Schema

The Subcontracting Plan Reports API offers several response elements that are described in the following sections.

<details>
<summary><b>Response Schema:</b>
<br>The Subcontracting Plan Reporting API offers several response elements that are described in the following sections.<br>
</summary>

<details>
<summary><b>reportData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>reportType</td>
<td>string</td>
<td>Type of subcontracting report submitted (for example, Individual Subcontract Report (ISR), Summary Subcontract Report (SSR), or Commercial Plan Report).</td>
<td>V1</td>
</tr>

<tr>
<td>submitter</td>
<td>string</td>
<td>Role of the entity submitting the report. Valid values may include Prime Contractor, Subcontractor, or Both.</td>
<td>V1</td>
</tr>

<tr>
<td>uniqueEntityID</td>
<td>string</td>
<td>Unique Entity Identifier (UEI) assigned to the reporting entity in SAM.gov.</td>
<td>V1</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Official legal name of the entity as registered in SAM.gov.</td>
<td>V1</td>
</tr>

<tr>
<td>reportFiscalYear</td>
<td>string</td>
<td>Fiscal year for which the subcontracting report is being submitted.</td>
<td>V1</td>
</tr>

<tr>
<td>reportingPeriod</td>
<td>string</td>
<td>Reporting period covered by the report.</td>
<td>V1</td>
</tr>

<tr>
<td>submittedDate</td>
<td>string</td>
<td>Date the report was officially submitted.</td>
<td>V1</td>
</tr>

<tr>
<td>reportedToDepartmentCode</td>
<td>string</td>
<td>Code representing the federal department or agency receiving the report.</td>
<td>V1</td>
</tr>

<tr>
<td>reportedToDepartmentName</td>
<td>string</td>
<td>Name of the federal department or agency receiving the report.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>entityData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>uniqueEntityID</td>
<td>string</td>
<td>Unique Entity Identifier (UEI) assigned to the entity in SAM.gov.</td>
<td>V1</td>
</tr>

<tr>
<td>legalBusinessName</td>
<td>string</td>
<td>Official legal name of the entity as registered in SAM.gov.</td>
<td>V1</td>
</tr>

<tr>
<td>ultimateParentUniqueEntityID</td>
<td>string</td>
<td>UEI of the ultimate parent entity associated with the reporting entity, if applicable.</td>
<td>V1</td>
</tr>

<tr>
<td>entityURL</td>
<td>string</td>
<td>Public website URL of the entity, if available.</td>
<td>V1</td>
</tr>

<tr>
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
<td>Address line 1.</td>
</tr>

<tr>
<td>addressLine2</td>
<td>string</td>
<td>Address line 2.</td>
</tr>

<tr>
<td>city</td>
<td>string</td>
<td>City.</td>
</tr>

<tr>
<td>stateOrProvinceCode</td>
<td>string</td>
<td>State or province code.</td>
</tr>

<tr>
<td>zipCode</td>
<td>string</td>
<td>ZIP or postal code.</td>
</tr>

<tr>
<td>countryCode</td>
<td>string</td>
<td>Country code.</td>
</tr>
</table>
</details>
</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>contractData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>piid</td>
<td>string</td>
<td>Procurement Instrument Identifier (PIID) assigned to the contract or award.</td>
<td>V1</td>
</tr>

<tr>
<td>awardOrIdv</td>
<td>string</td>
<td>Indicates whether the record represents a contract award or an Indefinite Delivery Vehicle (IDV).</td>
<td>V1</td>
</tr>

<tr>
<td>referenceIdvPiid</td>
<td>string</td>
<td>PIID of the referenced IDV associated with the award, if applicable.</td>
<td>V1</td>
</tr>

<tr>
<td>subcontractNumber</td>
<td>string</td>
<td>Identifier assigned to the subcontract.</td>
<td>V1</td>
</tr>

<tr>
<td>totalDollars</td>
<td>string</td>
<td>Total dollar amount obligated or reported under the subcontract.</td>
<td>V1</td>
</tr>

<tr>
<td>contractingOrganization</td>
<td>object</td>
<td>
<details>
<summary>contractingOrganization contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>department</td>
<td>object</td>
<td>Department details.</td>
</tr>

<tr>
<td>subTier</td>
<td>object</td>
<td>Sub-tier details.</td>
</tr>

<tr>
<td>office</td>
<td>object</td>
<td>Office details.</td>
</tr>
</table>

<details>
<summary>department contains below fields</summary>
<table>
<tr><th style="background-color: #f1f1f1;"><b>Field Name</b></th><th style="background-color: #f1f1f1;"><b>Type</b></th></tr>
<tr><td>code</td><td>string</td></tr>
<tr><td>name</td><td>string</td></tr>
</table>
</details>

<details>
<summary>subTier contains below fields</summary>
<table>
<tr><th style="background-color: #f1f1f1;"><b>Field Name</b></th><th style="background-color: #f1f1f1;"><b>Type</b></th></tr>
<tr><td>code</td><td>string</td></tr>
<tr><td>name</td><td>string</td></tr>
</table>
</details>

<details>
<summary>office contains below fields</summary>
<table>
<tr><th style="background-color: #f1f1f1;"><b>Field Name</b></th><th style="background-color: #f1f1f1;"><b>Type</b></th></tr>
<tr><td>code</td><td>string</td></tr>
<tr><td>name</td><td>string</td></tr>
</table>
</details>
</details>
</td>
<td>V1</td>
</tr>

<tr>
<td>subcontractingPlanCode</td>
<td>string</td>
<td>Code representing the type of subcontracting plan.</td>
<td>V1</td>
</tr>

<tr>
<td>subcontractingPlanDesc</td>
<td>string</td>
<td>Description of the subcontracting plan type associated with the contract.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>taskOrdersData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>areTaskOrdersApplicable</td>
<td>string</td>
<td>Indicates whether task orders are applicable for the contract or report.</td>
<td>V1</td>
</tr>

<tr>
<td>taskOrders</td>
<td>array</td>
<td>
<details>
<summary>taskOrders contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>piid</td>
<td>string</td>
<td>Task order PIID.</td>
</tr>

<tr>
<td>businessCategories</td>
<td>object</td>
<td>Business category details for the task order.</td>
</tr>
</table>
</details>
</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>departmentAllocationPercentageData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>organizationCode</td>
<td>string</td>
<td>Code representing the federal department or organization to which the allocation applies.</td>
<td>V1</td>
</tr>

<tr>
<td>organizationName</td>
<td>string</td>
<td>Name of the federal department or organization associated with the allocation.</td>
<td>V1</td>
</tr>

<tr>
<td>percentage</td>
<td>string</td>
<td>Percentage of the total subcontracting dollars allocated to the specified department or organization.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>goalsAndActualsData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>businessCategories</td>
<td>object</td>
<td>
<details>
<summary>businessCategories contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
</tr>

<tr>
<td>businessConcerns</td>
<td>array</td>
<td>Array of business concern categories.</td>
</tr>

<tr>
<td>smallBusinessCategories</td>
<td>array</td>
<td>Array of small business categories.</td>
</tr>

<tr>
<td>totals</td>
<td>object</td>
<td>Aggregated totals for goals and actuals.</td>
</tr>
</table>
</details>
</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>remarksData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>remarks</td>
<td>string</td>
<td>Additional comments or explanatory information provided by the submitter related to the subcontracting report.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>certificationData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>includeIndirectCosts</td>
<td>string</td>
<td>Indicates whether indirect costs are included in the reported subcontracting amounts.</td>
<td>V1</td>
</tr>

<tr>
<td>accountingMethod</td>
<td>object</td>
<td>
<details>
<summary>accountingMethod contains below fields</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
</tr>
<tr>
<td>method</td>
<td>string</td>
</tr>
<tr>
<td>explanation</td>
<td>string</td>
</tr>
</table>
</details>
</td>
<td>V1</td>
</tr>

<tr>
<td>isCertified</td>
<td>string</td>
<td>Indicates whether the report has been officially certified by the submitter.</td>
<td>V1</td>
</tr>

<tr>
<td>nameOfTheCertifier</td>
<td>string</td>
<td>Full name of the individual who certified the report.</td>
<td>V1</td>
</tr>

<tr>
<td>titleOfTheCertifier</td>
<td>string</td>
<td>Official title or position of the individual who certified the report.</td>
<td>V1</td>
</tr>

<tr>
<td>genericEmailAddressOrUrl</td>
<td>string</td>
<td>Contact email address or URL associated with the certifier or organization for follow-up or verification purposes.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>dodComprehensiveAttachmentsData</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>name</td>
<td>string</td>
<td>Name or title of the attachment associated with the DoD Comprehensive Subcontracting Plan.</td>
<td>V1</td>
</tr>

<tr>
<td>url</td>
<td>string</td>
<td>URL link where the attachment can be accessed or downloaded.</td>
<td>V1</td>
</tr>
</table>
</details>

<details>
<summary><b>links</b><br>
</summary>
<table>
<tr>
<th style="background-color: #f1f1f1;"><b>Field Name</b></th>
<th style="background-color: #f1f1f1;"><b>Type</b></th>
<th style="background-color: #f1f1f1;"><b>Description</b></th>
<th style="background-color: #f1f1f1;"><b>Applicable Versions</b></th>
</tr>

<tr>
<td>selfLink</td>
<td>string</td>
<td>URL of the current resource or request, allowing clients to retrieve the same result.</td>
<td>V1</td>
</tr>

<tr>
<td>nextLink</td>
<td>string</td>
<td>URL to retrieve the next page of results in a paginated response, if additional data is available.</td>
<td>V1</td>
</tr>
</table>
</details>

</details>

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: [Open API specification file for the Subcontracting Plan Reports API](openapi.yaml)

### HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description                                                                                                                                                                                                                                                                                                                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200 | The API call is successful                                                                                                                                                                                                                                                                                                                                                                               |
| 400 | Bad Request - Application Level Error Messages: <br>- Invalid Search Parameter format <br>- Invalid Search Parameter name <br>- More than 100 records are requested via "size" parameters                                                                                                                                                                                                                |
| 401 | Unauthorized - Missing "Basic Auth" under "Authorization" and missing System Account credentials <br>- Providing "Basic Auth" under "Authorization", but missing or invalid System Account credentials <br>- Different IP Address than that mentioned in the System Account <br>- API Key does not belong to the System Account <br>- Missing API Key in request <br>- Invalid API Key (Expired API Key) |
| 403 | Forbidden - No Subcontracting Plan Reports Permission in System Account <br>- System Account has a different value for "Type of Connection"                                                                                                                                                                                                                                                              |
| 406 | Not Acceptable Error - Missing Accept Header                                                                                                                                                                                                                                                                                                                                                             |
| 415 | Missing or Invalid Content - Type header                                                                                                                                                                                                                                                                                                                                                                 |

## Examples

### Example 1: I would like to obtain all Individual Subcontracting Reports (ISR) submitted by a specific entity (UEI) for a given fiscal year.

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
```bash
{
    "totalNumberOfReports": 1,
    "subContractingPlanReports": [
        {
            "reportData": {
                "reportType": "Individual",
                "submitter": "Prime Contractor",
                "uniqueEntityID": "C3NLZNSMU254",
                "legalBusinessName": "M-I-C, INC.",
                "reportFiscalYear": 2026,
                "reportingPeriod": "Final",
                "submittedDate": "2026-03-02T16:36:45.259314",
                "reportedToDepartmentCode": "Not Applicable",
                "reportedToDeportmentName": "Not Applicable"
            },
            "entityData": {
                "uniqueEntityID": "C3NLZNSMU254",
                "legalBusinessName": "M-I-C, INC.",
                "ultimateParentUniqueEntityID": "C3NLZNSMU254",
                "entityURL": "www.m-i-cinc.com",
                "physicalAddress": {
                    "addressLine1": "486 LINDBERGH AVE",
                    "addressLine2": null,
                    "city": "LIVERMORE",
                    "stateOrProvinceCode": "CA",
                    "zipCode": "94551-9554",
                    "countryCode": null
                }
            },
            "contractData": {
                "piid": "N0002418C2307",
                "awardOrIdv": null,
                "referencedIdvPiid": null,
                "subcontractNumber": null,
                "totalDollars": "3751449349.000000000000",
                "contractingOrganization": {
                    "department": {
                        "code": "9700",
                        "name": "DEPT OF DEFENSE"
                    },
                    "subTier": {
                        "code": "1700",
                        "name": "DEPT OF THE NAVY"
                    },
                    "office": {
                        "code": "N00024",
                        "name": "NAVSEA HQ"
                    }
                },
                "subcontractingPlanCode": null,
                "subcontractingPlanDesc": null
            },
            "taskOrdersData": {
                "areTaskOrdersApplicable": "No",
                "taskOrders": []
            },
            "departmentAllocationPercentageData": "Not Applicable",
            "goalsAndActualsData": {
                "businessCategories": {
                    "businessConcerns": [
                        {
                            "code": "SB",
                            "name": "Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "22",
                                "goalsSubcontractPercentage": "100",
                                "goalsTotalContractPercentage": "5.864400116681411E-7",
                                "actualsWholeDollars": "22",
                                "actualsSubcontractPercentage": "100",
                                "actualsTotalContractPercentage": "5.864400116681411E-7"
                            }
                        },
                        {
                            "code": "OTSB",
                            "name": "Other Than Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        }
                    ],
                    "smallBusinessCategories": [
                        {
                            "code": "SDB",
                            "name": "Small Disadvantaged Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "WOSB",
                            "name": "Women Owned Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "HBCU and MSI",
                            "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "HUBZone",
                            "name": "SBA Certified HUBZone Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "VOSB",
                            "name": "Veteran Owned Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "SDVOSB",
                            "name": "SBA Certified Service Disabled Veteran Owned Small Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        },
                        {
                            "code": "ANC",
                            "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
                            "individualReport": {
                                "goalsWholeDollars": "0",
                                "goalsSubcontractPercentage": "0",
                                "goalsTotalContractPercentage": "0",
                                "actualsWholeDollars": "0",
                                "actualsSubcontractPercentage": "0",
                                "actualsTotalContractPercentage": "0"
                            }
                        }
                    ],
                    "totals": {
                        "individualReport": {
                            "goalsWholeDollars": "22",
                            "goalsSubcontractPercentage": "100",
                            "goalsTotalContractPercentage": "5.864400116681411E-7",
                            "actualsWholeDollars": "22",
                            "actualsSubcontractPercentage": "100",
                            "actualsTotalContractPercentage": "5.864400116681411E-7"
                        },
                        "summaryReport": {
                            "totalGoalsWholeDollars": "22",
                            "totalGoalsPercentage": "5.864400116681411E-7",
                            "totalActualsWholeDollars": "22",
                            "totalActualsPercentage": "5.864400116681411E-7"
                        }
                    }
                }
            },
            "certificationData": {
                "includeIndirectCosts": "Y",
                "accountingMethod": {
                    "method": "payment basis",
                    "explanation": "Not Applicable"
                },
                "isCertified": "Y",
                "nameOfTheCertifier": "Pooja",
                "titleOfTheCertifier": "Test",
                "genericEmailAddressOrUrl": "https://sam.gov"
            }
        }
    ],
    "links": {
        "selfLink": "https://gateway-am.test.apiss.mcaas.fcs.gsa.gov/spr/v1/search?api_key=SAM-c967577e-a405-41d3-8232-7b895b3ba565&page=0&size=10",
        "nextLink": null
    }
}

```
---

### Example 2: Retrieve Summary Individual Reports from fiscal year 2022 to 2025

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
```bash
{
    "totalNumberOfReports": 18076,
    "subContractingPlanReports": [
        {
            "reportData": {
                "reportType": "Summary Individual",
                "submitter": "Prime Contractor",
                "uniqueEntityID": "GNF9XURG4LR7",
                "legalBusinessName": "BENCO DENTAL SUPPLY CO.",
                "reportFiscalYear": 2022,
                "reportingPeriod": "March 31",
                "submittedDate": "2022-10-31T14:23:14",
                "reportedToDepartmentCode": "3600",
                "reportedToDeportmentName": "VETERANS AFFAIRS, DEPARTMENT OF"
            },
            "entityData": {
                "uniqueEntityID": "GNF9XURG4LR7",
                "legalBusinessName": "BENCO DENTAL SUPPLY CO.",
                "ultimateParentUniqueEntityID": "GNF9XURG4LR7",
                "entityURL": null,
                "physicalAddress": {
                    "addressLine1": "295 CENTERPOINT BLVD",
                    "addressLine2": null,
                    "city": "PITTSTON",
                    "stateOrProvinceCode": "PA",
                    "zipCode": "186406136",
                    "countryCode": "USA"
                }
            },
            "contractData": "Not Applicable",
            "taskOrdersData": {
                "areTaskOrdersApplicable": "No",
                "taskOrders": []
            },
            "departmentAllocationPercentageData": "Not Applicable",
            "goalsAndActualsData": {
                "businessCategories": {
                    "businessConcerns": [
                        {
                            "code": "SB",
                            "name": "Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "3918457",
                                    "actualsPercentage": "35.6"
                                }
                            ]
                        },
                        {
                            "code": "OTSB",
                            "name": "Other Than Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "7097688",
                                    "actualsPercentage": "64.4"
                                }
                            ]
                        }
                    ],
                    "smallBusinessCategories": [
                        {
                            "code": "SDB",
                            "name": "Small Disadvantaged Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "0",
                                    "actualsPercentage": "0"
                                }
                            ]
                        },
                        {
                            "code": "WOSB",
                            "name": "Women Owned Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "253988",
                                    "actualsPercentage": "2.3"
                                }
                            ]
                        },
                        {
                            "code": "HBCU and MSI",
                            "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "0",
                                    "actualsPercentage": "0"
                                }
                            ]
                        },
                        {
                            "code": "HUBZone",
                            "name": "SBA Certified HUBZone Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "37747",
                                    "actualsPercentage": "0.3"
                                }
                            ]
                        },
                        {
                            "code": "VOSB",
                            "name": "Veteran Owned Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "7953",
                                    "actualsPercentage": "0.1"
                                }
                            ]
                        },
                        {
                            "code": "SDVOSB",
                            "name": "SBA Certified Service Disabled Veteran Owned Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "0",
                                    "actualsPercentage": "0"
                                }
                            ]
                        },
                        {
                            "code": "ANC",
                            "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "0",
                                    "actualsPercentage": "0"
                                }
                            ]
                        },
                        {
                            "code": "ANC",
                            "name": "Alaskan Native Corporations and Indian Tribes that are not Small Business",
                            "summaryReport": [
                                {
                                    "organizationCode": "3600",
                                    "organizationName": "VETERANS AFFAIRS, DEPARTMENT OF",
                                    "goalsWholeDollars": "Not Applicable",
                                    "goalsPercentage": "Not Applicable",
                                    "actualsWholeDollars": "0",
                                    "actualsPercentage": "0"
                                }
                            ]
                        }
                    ],
                    "totals": {
                        "individualReport": {
                            "goalsWholeDollars": "Not Applicable",
                            "goalsSubcontractPercentage": "Not Applicable",
                            "goalsTotalContractPercentage": "Not Applicable",
                            "actualsWholeDollars": "11016145",
                            "actualsSubcontractPercentage": "100",
                            "actualsTotalContractPercentage": "Not Applicable"
                        },
                        "summaryReport": {
                            "totalGoalsWholeDollars": "Not Applicable",
                            "totalGoalsPercentage": "Not Applicable",
                            "totalActualsWholeDollars": "11016145",
                            "totalActualsPercentage": "Not Applicable"
                        }
                    }
                }
            },
            "certificationData": {
                "includeIndirectCosts": "Not Applicable",
                "accountingMethod": {
                    "method": "Not Applicable",
                    "explanation": "Not Applicable"
                },
                "isCertified": "Y",
                "nameOfTheCertifier": "Godfrey Warner",
                "titleOfTheCertifier": "Contract Administrator",
                "genericEmailAddressOrUrl": null
            }
        }
    ],
    "links": {
        "selfLink": "https://gateway-am.test.apiss.mcaas.fcs.gsa.gov/spr/v1/search?api_key=SAM-c967577e-a405-41d3-8232-7b895b3ba565&page=0&size=1",
        "nextLink": "https://gateway-am.test.apiss.mcaas.fcs.gsa.gov/spr/v1/search?api_key=SAM-c967577e-a405-41d3-8232-7b895b3ba565&page=1&size=1"
    }
}

```
---

## Additional Information

You can view the full details of the differences between the SAM legacy API and SAM.gov API in the **Variance Document**.

- This website contains data supplied by third party information suppliers, including Dun & Bradstreet (D&B). For the purposes of the following limitation on permissible use of D&B data, which includes each entity’s DUNS Number and its associated business information, “D&B Open Data” is defined as the following data elements: Legal Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code. Entity registration, exclusion, or contract award records in SAM may contain D&B-supplied data. Applicable records containing D&B data include all entity registration records with a last updated date earlier than 4/4/2022, all exclusions records with a created date earlier than 4/4/2022, and all base award notices with an award date earlier than 4/4/2022. These records show the Entity Validation Service (EVS) Source as D&B in outbound data streams.
- D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
- Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of “bots” or “spiders”, is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
- GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided “as is” without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.


---

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

## Contact Us

- Reach out to the SAM.gov team at www.fsd.gov for inquiries and help desk support.

  a. Before contacting the help desk, conduct your own initial troubleshooting

  i. Conduct a recent review of the open.gsa.gov/api specifications  
  ii. Confirm you are using an API tool, not a browser to send the request (FOUO & Sensitive Calls)  
  iii. Confirm you are using the username/password for the system account that created the API key in the authentication header (Sensitive Calls)  
  iv. Confirm you used POST and not GET for this request (Sensitive Calls)  
  v. Confirm that the API key is from a system account (FOUO & Sensitive Calls)  
  vi. Confirm that the API key being used is still active  
  vii. Confirm that the system account you are using has "read fouo" or "read sensitive" permissions as applicable (FOUO & Sensitive Calls)  
  viii. Confirm that the IP addresses registered with your system account are current

  b. When submitting help desk tickets for API or system connection issues, provide the following:

  i. The exact API requests that you were trying to send  
  ii. The exact error messages that you were receiving  
  iii. The exact dates and times when you received the errors  
  iv. Screenshots (with the actual API request and the error) [Attach to the ticket]  
  v. The System Account ID/Name that was trying to make API calls  
  vi. Screenshots of the parameters used for API call [Attach to the ticket]  
  vii. Screenshots of the Headers used for the API call [Attach to the ticket]

- Users requesting access to the test site (alpha.sam.gov) should follow the below steps.  
  These steps ONLY apply to alpha.sam.gov access requests.

  a. Navigate to www.fsd.gov  
  b. Sign into the FSD platform using your FSD credentials  
  c. Select "Create an Incident"  
  d. Create an Incident

  i. System Name: System for Award Management (SAM)  
  ii. Is this related to the American Rescue Plan Act?: No  
  iii. Issue Type: Other  
  iv. Business Type: Other  
  v. Subject (select 1):

        1. Option A: I need a role to test in alpha.sam.gov  
        2. Option B: System account approval in alpha.sam.gov  

  vi. Please describe the issue: (Copy and paste the below information into the ticket, filling in your information within the brackets)

        1. Option A:  
           I have already navigated to alpha.sam.gov and created a user account, following the same steps for creating an account in sam.gov.  
           I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov.  
           The account that needs role assignment is associated with [EMAIL ADDRESS].  
           I request a [ROLE] role for the [DOMAIN] domain in alpha.sam.gov.  

        2. Option B:  
           I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval.  
           I would like to request alpha.sam.gov system account review and approval for [Name of the alpha.sam.gov system account].  

---

**NOTE:** If you do not have an alpha account you can find the instructions here.

<p><small><a href="#">Back to top</a></small></p>
