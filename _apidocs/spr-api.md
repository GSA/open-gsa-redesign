---
title: SAM.gov Subcontracting Plan Reporting Outbound API
banner-heading: Subcontracting Plan Reporting Outbound API
---

<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

# Subcontracting Plan Reporting Outbound API Specs

## Overview

The Subcontracting Plan Reporting API is intended for federal use only.

The API provides a basic synchronous interface that enables users to query and retrieve data. The future enhancements
will introduce additional capabilities, including data download and extract functionality.

This API allows authorized federal users to request For Official Use Only (FOUO) data. Access to data is controlled
based on the sensitivity level of the user’s System Account, along with a set of optional request parameters that can be
used to filter and refine results.

**Key Features of the Subcontracting Plan Reporting API:**

* It offers several optional search parameters, filtering by sections, AND (&), OR (~) conditions and a free text search
  q to obtain the desired data.
* It returns synchronous responses.
* Returns results in JSON format.
* Supports pagination with up to 100 records per request.
* Use the size parameter to control the number of records returned (maximum: 100).
* If size is not specified, the default is 10 records per request.
* Additional records can be retrieved by making subsequent requests and updating the page parameter.
* The following characters are not allowed to be sent in the parameter values with the API request: `& | { } ^ \\ ~`

## Getting Started

### API Endpoints

**Production:**

- `https://api.sam.gov/spr/v1/search

**Alpha:**

- `https://api-alpha.sam.gov/spr/v1/search

### User Requirements

FOUO (CUI) data:

- Users must have a Federal System Account with the "Read FOUO" in Subcontracting Plan Reports permission and
  the respective API Key in SAM.gov.
- Users can make POST calls using a Restful API client such as Postman.

### System Accounts

- The SAM.gov Federal registered users must contact their agency administrator for obtaining the "System Accounts"
  widget on their SAM.gov "Workspace" page.
- To learn more about System Account roles and how to request or manage them, refer to the following resources:
    - How to assign a System Administrator / System Manager role in system accounts (KB0017682)
    - What roles are associated with system accounts? (KB0017606)
- Users must create their System Account using the “System Accounts” widget and get it approved.
- Users must then set the password for the System Account.
- After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must
  enter the password to retrieve this value.
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

| Type of User Account | Type of API Key        | Default API Daily Rate Limit   |
|----------------------|------------------------|--------------------------------|
| Federal System User  | System Account API Key | 10,000 Requests every 24 hours |

## API Description

### Query String Parameters

The Subcontract Plan Reports API offers several optional search parameters that can be provided independently or in
combination with each other. All parameters are optional.

| #  | Parameter Name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Applicable Versions |
|----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| 1  | -                            | Users can obtain the entire dataset consisting of Individual Subcontract Reports (ISR) and Summary Subcontract Reports (SSR).<br/><br/>Request Body:<br/>`{}`                                                                                                                                                                                                                                                                                                                                                                                             | V1                  |
| 2  | organizationCode             | Code representing the federal organization to which an ISR or SSR is reported.<br/><br/>Examples of Request Body:<br/>`{"organizationCode": "4732"}` <br/>`{"organizationCode": "9700~8000"}`                                                                                                                                                                                                                                                                                                                                                             | V1                  |
| 3  | submitter                    | Submitter of the ISR or SSR. <br/><br/>Examples of Request Body:<br/>`{"submitter": "Prime Contractor"}`<br/> `{"submitter": "subcontractor~both"}`                                                                                                                                                                                                                                                                                                                                                                                                       | V1                  |
| 4  | reportSubmittedDate          | Date an ISR or SSR was submitted on.<br/><br/>Examples of Request Body:<br/>`{"reportSubmittedDate": "03/31/2025"}`<br/>`{"reportSubmittedDate": "[,03/31/2026]"}`<br/>`{"reportSubmittedDate": "[04/24/2026,]"}`<br/>`{"reportSubmittedDate": "[03/01/2026,07/31/2026]"}`                                                                                                                                                                                                                                                                                | V1                  |
| 5  | reportFiscalYear             | Fiscal Year an ISR or SSR was submitted for.<br/><br/>Examples of Request Body:<br/>`{"reportFiscalYear": "2026"}`<br/>`{"reportFiscalYear": "2026~2025~2024"}`                                                                                                                                                                                                                                                                                                                                                                                           | V1                  |
| 6  | reportingPeriod              | Reporting Period an ISR or SSR was submitted for.<br/><br/>Examples of Request Body:<br/>`{"reportingPeriod": "march 31"}`<br/>`{"reportingPeriod": "FINAL"}`<br/>`{"reportingPeriod": "March 31~September 30"}`                                                                                                                                                                                                                                                                                                                                          | V1                  |
| 7  | reportType                   | Type of the report.<br/><br/>Examples of Request Body:<br/>`{"reportType": "Individual"}`<br/>`{"reportType": "Summary Individual"}`<br/>`{"reportType": "Summary Individual~summary commercial"}`<br/>`{"reportType": "SUMMARY DOD COMPREHENSIVE"}`                                                                                                                                                                                                                                                                                                      | V1                  |
| 8  | uniqueEntityID               | Unique Entity ID of the contractor.<br/><br/>Examples of Request Body:<br/>`{"uniqueEntityID": "NACNDU85S2Q2"}`<br/>`{"uniqueEntityID": "NACNDU85S2Q2~C8VFSNKTMQB6"}`                                                                                                                                                                                                                                                                                                                                                                                     | V1                  |
| 9  | legalBusinessName            | Legal Business Name/Entity Name of the contractor.<br/><br/>Examples of Request Body:<br/>`{"legalBusinessName": "WORLD WIDE TECHNOLOGY, INC."}`<br/>`{"legalBusinessName": "world wide technology, inc."}`<br/>`{"legalBusinessName": "JBS INTERNATIONAL, INC.~Colonial Oil Industries, Inc."}`<br/><br/>Note: Partial searches are not allowed.                                                                                                                                                                                                         | V1                  |
| 10 | ultimateParentUniqueEntityID | Ultimate Parent Unique Entity ID of the contractor.<br/><br/>Examples of Request Body:<br/>`{"ultimateParentUniqueEntityID": "NACNDU85S2Q2"}`<br/>`{"ultimateParentUniqueEntityID": "NACNDU85S2Q2~C8VFSNKTMQB6"}`<br/>`{"ultimateParentUniqueEntityID": null}`                                                                                                                                                                                                                                                                                            | V1                  |
| 11 | piid                         | Procurement Instrument Identifier (PIID) of the Prime Contract that the ISR was submitted for.<br/><br/>Examples of Request Body:<br/>`{"piid": "80GSFC22CA020"}`<br/>`{"piid": "80GSFC22CA020~GS00F006DA"}`                                                                                                                                                                                                                                                                                                                                              | V1                  |
| 12 | referenceIdvPiid             | Reference IDV PIID of the Prime Contract that the ISR was submitted for.<br/><br/>Examples of Request Body:<br/>`{"referencedIdvPiid": "SAQMMA13A0229"}`<br/>`{"referencedIdvPiid": "SAQMMA13A0229~N0002420G4107"}`                                                                                                                                                                                                                                                                                                                                       | V1                  |
| 13 | subcontractNumber            | Subcontract ID that the ISR was submitted for.<br/><br/>Examples of Request Body:<br/>`{"subcontractNumber": "4202831076"}`<br/>`{"subcontractNumber": "4202831076~PO-000738"}`                                                                                                                                                                                                                                                                                                                                                                           | V1                  |
| 14 | includeSections              | To include only the sections that the user wants to get in the response. Acceptable values:<br/>- reportDate <br/>- entityData <br/>- contractData <br/>- taskOrdersData <br/>- departmentAllocationPercentageData <br/>- goalsAndActualsData <br/>- remarks <br/>- certificationData <br/>- dodComprehensiveAttachments<br/><br/>Examples of Request Body:<br/>`{"reportFiscalYear": "2026", "includeSections": "reportData"}`<br/>`{"reportType": "Summary DoD Comprehensive", "includeSections": "reportData~entityData~dodComprehensiveAttachments"}` | V1                  |
| 15 | page                         | The page number that the user wants to access.<br/><br/>Examples of Request Body:<br/>`{"submitter": "Both","page": "20"}`<br/>`{"reportFiscalYear": "2026", "page": "5", "size": "25"}`                                                                                                                                                                                                                                                                                                                                                                  | V1                  |
| 16 | size                         | The maximum number of records returned on each page is 100, but a lesser number can be requested.<br/><br/>Examples of Request Body:<br/>`{"submitter": "Both", "size": "25"}`<br/>`{"reportFiscalYear": "2026", "page": "5", "size": "25"}`                                                                                                                                                                                                                                                                                                              | V1                  |

### Response Schema

The Subcontracting Plan Reports API offers several response elements that are described in the following sections.

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

<tr>
    <td colspan="4" style="text-align: center;">This section applies to the individual reports.</td>
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
<td colspan="3" style="font-weight: bold">Business Concerns</td>
</tr>
<tr>
<td>businessConcerns.code</td>
<td>string</td>
<td>Codes for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.name</td>
<td>string</td>
<td>Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.wholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td colspan="3" style="font-weight: bold">Small Business Categories</td>
</tr>
<tr>
<td>smallBusinessCategories.code</td>
<td>string</td>
<td>Codes for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.name</td>
<td>string</td>
<td>Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.wholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
    <td colspan="4" style="text-align: center;">This section applies to the individual reports.</td>
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
<tr>
    <td colspan="4" style="text-align: center;">This section applies to the Summary Commercial reports.</td>
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
<td colspan="3" style="font-weight: bold">Business Concerns - Both ISR and SSR</td>
</tr>
<tr>
<td>businessConcerns.code</td>
<td>string</td>
<td>Codes for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.name</td>
<td>string</td>
<td>Small Business and Other Than Small Business</td>
</tr>

<tr>
<td colspan="3" style="font-weight: bold">Business Concerns - ISR</td>
</tr>
<tr>
<td>businessConcerns.individualReport.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.individualReport.goalsSubcontractPercentage</td>
<td>string</td>
<td>Goals Subcontract Percentage for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.individualReport.goalsTotalContractPercentage</td>
<td>string</td>
<td>Goals Total Contract Percentage for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.individualReport.actualsWholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.individualReport.actualsSubcontractPercentage</td>
<td>string</td>
<td>Goals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.individualReport.actualsTotalContractPercentage</td>
<td>string</td>
<td>Actuals Total Contract Percentage for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td colspan="3" style="font-weight: bold">Business Concerns - SSR</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.organizationCode</td>
<td>string</td>
<td>Federal Organization Code involved in the report</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.organizationName</td>
<td>string</td>
<td>Federal Organization Name involved in the report</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.goalsPercentage</td>
<td>string</td>
<td>Goals Percentage for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.actualsWholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td>businessConcerns.summaryReport.actualsPercentage</td>
<td>string</td>
<td>Actuals Percentage for Small Business and Other Than Small Business</td>
</tr>
<tr>
<td colspan="3">Small Business Categories  - Both ISR and SSR</td>
</tr>
<tr>
<td>smallBusinessCategories.code</td>
<td>string</td>
<td>Codes for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.name</td>
<td>string</td>
<td>Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td colspan="3">Small Business Categories  - ISR</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.goalsSubcontractPercentage</td>
<td>string</td>
<td>Goals Subcontract Percentage for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.goalsTotalContractPercentage</td>
<td>string</td>
<td>Goals Total Contract Percentage for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.actualsWholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.actualsSubcontractPercentage</td>
<td>string</td>
<td>Actuals Subcontract Percentage for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.individualReport.actualsTotalContractPercentage</td>
<td>string</td>
<td>Actuals Total Contract Percentage for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td colspan="3">Small Business Categories  - SSR</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.organizationCode</td>
<td>string</td>
<td>Federal Organization Code involved in the report</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.organizationName</td>
<td>string</td>
<td>Federal Organization Name involved in the report</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.goalsWholeDollars</td>
<td>string</td>
<td>Goals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.goalsPercentage</td>
<td>string</td>
<td>Goals Percentage  for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.actualsWholeDollars</td>
<td>string</td>
<td>Actuals Whole Dollars for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td>smallBusinessCategories.summaryReport.actualsPercentage</td>
<td>string</td>
<td>Actuals Percentage  for Small Disadvantaged Business, Women Owned Small Business, Historically Black Colleges and Universities and Minority Serving Institutions, SBA Certified HUBZone Small Business, Veteran Owned Small Business, SBA Certified Service Disabled Veteran Owned Small Business, Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business, and Alaskan Native Corporations and Indian Tribes that are not Small Business (pre 02/24/2026)</td>
</tr>
<tr>
<td colspan="3">Totals - Both ISR and SSR</td>
</tr>
<tr>
<td>individualReport.goalsWholeDollars</td>
<td>string</td>
<td>Total Goals Whole Dollars for ISR</td>
</tr>
<tr>
<td>individualReport.goalsSubcontractPercentage</td>
<td>string</td>
<td>Total Goals Subcontract Percentage for ISR</td>
</tr>
<tr>
<td>individualReport.goalsTotalContractPercentage</td>
<td>string</td>
<td>Total Goals Total Contract Percentage  for ISR</td>
</tr>
<tr>
<td>individualReport.actualsWholeDollars</td>
<td>string</td>
<td>Total Actuals Whole Dollars for ISR</td>
</tr>
<tr>
<td>individualReport.actualsSubcontractPercentage</td>
<td>string</td>
<td>Total Actuals Subcontract Percentage for ISR</td>
</tr>
<tr>
<td>individualReport.actualsTotalContractPercentage</td>
<td>string</td>
<td>Total Actuals Total Contract Percentage  for ISR</td>
</tr>
<tr>
<td>summaryReport.totalGoalsWholeDollars</td>
<td>string</td>
<td>Total Goals Whole Dollars for SSR</td>
</tr>
<tr>
<td>summaryReport.totalGoalsPercentage</td>
<td>string</td>
<td>Total Goals Percentage for SSR</td>
</tr>
<tr>
<td>summaryReport.totalActualsWholeDollars</td>
<td>string</td>
<td>Total Actuals Whole Dollars for SSR</td>
</tr>
<tr>
<td>summaryReport.totalActualsPercentage</td>
<td>string</td>
<td>Total Actuals Percentage for SSR</td>
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
<td>Additional comments or explanatory information provided by the submitter related to the subcontracting report. <br/><br/>This is an optional section that does not get returned in the response by default.  Request this section by sending {"includeSections": "remarks"} in the Response Body.
</td>
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
<td>URL link where the attachment can be accessed or downloaded. <br/><br/>Links provided for downloading attachments expire after 15 minutes.  You can use a browser to access documents provided in the links.</td>
<td>V1</td>
</tr>
<tr>
<td colspan="4" style="text-align: center">This is an optional section that does not get returned in the response by default.  Request this section by sending {"includeSections": "dodComprehensiveAttachments"} in the Response Body.</td>
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

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: <a href="v1/openapi.yaml">
Open API specification file for the Subcontracting Plan Reports API</a>

### HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description                                                                                                                                                                                                                                                                                                                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200                | The API call is successful                                                                                                                                                                                                                                                                                                                                                                               |
| 400                | Bad Request - Application Level Error Messages: <br>- Invalid Search Parameter format <br>- Invalid Search Parameter name <br>- More than 100 records are requested via "size" parameters                                                                                                                                                                                                                |
| 401                | Unauthorized - Missing "Basic Auth" under "Authorization" and missing System Account credentials <br>- Providing "Basic Auth" under "Authorization", but missing or invalid System Account credentials <br>- Different IP Address than that mentioned in the System Account <br>- API Key does not belong to the System Account <br>- Missing API Key in request <br>- Invalid API Key (Expired API Key) |
| 403                | Forbidden - No Subcontracting Plan Reports Permission in System Account <br>- System Account has a different value for "Type of Connection"                                                                                                                                                                                                                                                              |
| 406                | Not Acceptable Error - Missing 'Accept' Header                                                                                                                                                                                                                                                                                                                                                           |
| 415                | Missing or Invalid Content - Type header                                                                                                                                                                                                                                                                                                                                                                 |

## Examples

### Example 1: I would like to obtain all the Individual Subcontracting Reports (ISR) submitted on or after 02/24/2026.

#### Request URL

- **Production:** https://api.sam.gov/spr/v1/search
- **Alpha:** https://api-alpha.sam.gov/spr/v1/search

#### Curl Request

```bash
curl -X POST \
  'https://api.sam.gov/spr/v1/search?api_key=<API KEY>' \
or 'https://api-alpha.sam.gov/spr/v1/search?api_key=<API KEY>' \ 
  -H 'X-Api-Roles: SA-FED-ALL' \
  -H 'Authorization: Basic <Base64 encoded username:password>' \
  -H 'Content-Type: application/json' \
  -H 'accept: application/json' \
-d '{
  "reportSubmittedDate": "[02/24/2026,]",
  "reportType": "Individual"
}'
```

#### Response

**JSON Output**

```json
{
  "totalNumberOfReports": 32,
  "subContractingPlanReports": [
    {
      "reportData": {
        "reportType": "Individual",
        "submitter": "Prime Contractor",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "LEGAL BUSINESS NAME",
        "reportFiscalYear": 2026,
        "reportingPeriod": "March 31",
        "submittedDate": "2026-06-08T14:42:46.858536",
        "reportedToDepartmentCode": "Not Applicable",
        "reportedToDeportmentName": "Not Applicable"
      },
      "entityData": {
        "uniqueEntityID": "UEI",
        "legalBusinessName": "LEGAL BUSINESS NAME",
        "ultimateParentUniqueEntityID": "UEI",
        "entityURL": "http://www.entity.com",
        "physicalAddress": {
          "addressLine1": "Address1",
          "addressLine2": "Address2",
          "city": "City",
          "stateOrProvinceCode": "AB",
          "zipCode": "11111-1111",
          "countryCode": "ABC"
        }
      },
      "contractData": {
        "piid": "Prime Contract PIID",
        "awardOrIdv": "Award or IDV",
        "referencedIdvPiid": "Referenced IDV PIID",
        "subcontractNumber": "Subcontract ID",
        "totalDollars": "1111111111",
        "contractingOrganization": {
          "department": {
            "code": "1111",
            "name": "DEPARTMENT"
          },
          "subTier": {
            "code": "2222",
            "name": "SUBTIER"
          },
          "office": {
            "code": "AB1111",
            "name": "OFFICE"
          }
        },
        "subcontractingPlanCode": "F",
        "subcontractingPlanDesc": "Individual Subcontract Plan"
      },
      "taskOrdersData": {
        "areTaskOrdersApplicable": "Yes",
        "taskOrders": [
          {
            "piid": "PIID1",
            "businessCategories": {
              "businessConcerns": [
                {
                  "code": "SB",
                  "name": "Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "OTSB",
                  "name": "Other Than Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                }
              ],
              "smallBusinessCategories": [
                {
                  "code": "SDB",
                  "name": "Small Disadvantaged Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "WOSB",
                  "name": "Women Owned Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "HBCU and MSI",
                  "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "HUBZone",
                  "name": "SBA Certified HUBZone Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "VOSB",
                  "name": "Veteran Owned Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "SDVOSB",
                  "name": "SBA Certified Service Disabled Veteran Owned Small Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                },
                {
                  "code": "ANC",
                  "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
                  "goalsWholeDollars": 10000,
                  "wholeDollars": 10000
                }
              ]
            }
          }],
        "departmentAllocationPercentageData": "Not Applicable",
        "goalsAndActualsData": {
          "businessCategories": {
            "businessConcerns": [
              {
                "code": "SB",
                "name": "Small Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "OTSB",
                "name": "Other Than Small Business",
                "individualReport": {
                  "goalsWholeDollars": "45678",
                  "goalsSubcontractPercentage": "44.6",
                  "goalsTotalContractPercentage": "0.019",
                  "actualsWholeDollars": "56789",
                  "actualsSubcontractPercentage": "45.6",
                  "actualsTotalContractPercentage": "0.023"
                }
              }
            ],
            "smallBusinessCategories": [
              {
                "code": "SDB",
                "name": "Small Disadvantaged Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "WOSB",
                "name": "Women Owned Small Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "HBCU and MSI",
                "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "HUBZone",
                "name": "SBA Certified HUBZone Small Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "VOSB",
                "name": "Veteran Owned Small Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "SDVOSB",
                "name": "SBA Certified Service Disabled Veteran Owned Small Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              },
              {
                "code": "ANC",
                "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
                "individualReport": {
                  "goalsWholeDollars": "56789",
                  "goalsSubcontractPercentage": "55.4",
                  "goalsTotalContractPercentage": "0.02",
                  "actualsWholeDollars": "67890",
                  "actualsSubcontractPercentage": "54.4",
                  "actualsTotalContractPercentage": "0.02"
                }
              }
            ],
            "totals": {
              "individualReport": {
                "goalsWholeDollars": "102467",
                "goalsSubcontractPercentage": "100",
                "goalsTotalContractPercentage": "0.043",
                "actualsWholeDollars": "124679",
                "actualsSubcontractPercentage": "100",
                "actualsTotalContractPercentage": "0.057"
              },
              "summaryReport": {
                "totalGoalsWholeDollars": "",
                "totalGoalsPercentage": "",
                "totalActualsWholeDollars": "",
                "totalActualsPercentage": ""
              }
            }
          }
        },
        "certificationData": {
          "includeIndirectCosts": "N",
          "accountingMethod": {
            "method": "commitment basis",
            "explanation": "Not Applicable"
          },
          "isCertified": "Y",
          "nameOfTheCertifier": "Name",
          "titleOfTheCertifier": "Title",
          "genericEmailAddressOrUrl": "https://entity.com"
        }
      }

    }],
  "links": {
    "selfLink": "https://api-alpha.sam.gov/spr/v1/search?page=0&size=10",
    "nextLink": "https://api-alpha.sam.gov/spr/v1/search?page=1&size=10"
  }
}

```

---

### Example 2: I would like to obtain reports submitted by a specific entity (UEI) for a given fiscal year and submitted date range, with specific sections in the response.

#### Request URL

- **Production:** https://api.sam.gov/spr/v1/search
- **Alpha:** https://api-alpha.sam.gov/spr/v1/search

#### Curl Request

```bash
curl -X POST \
  'https://api.sam.gov/spr/v1/search?api_key=<API KEY>' \
or 'https://api-alpha.sam.gov/spr/v1/search?api_key=<API KEY>' \ 
  -H 'X-Api-Roles: SA-FED-ALL' \
  -H 'Authorization: Basic <Base64 encoded username:password>' \
  -H 'Content-Type: application/json' \
  -H 'accept: application/json' \
-d '{
  "reportSubmittedDate": "[02/24/2026,]",
  "reportType": "Individual",
  "reportFiscalYear": "2025",
  "uniqueEntityID": "C47BNA8GM833",
  "submittedDate": "[02/18/2026,02/23/2026]",
  "includeSections": "reportData~contractData~taskOrdersData~goalsAndActualsData~remarks"
}'
```

#### Response

**JSON Output**

```json
{
  "totalNumberOfReports": 3,
  "subContractingPlanReports": [
    {
      "reportData": {
        "reportType": "Summary Individual",
        "submitter": "Prime Contractor",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "Legal Business Name",
        "reportFiscalYear": 2025,
        "reportingPeriod": "September 30",
        "submittedDate": "2026-02-18T20:22:37.444611",
        "reportedToDepartmentCode": "7500",
        "reportedToDeportmentName": "HEALTH AND HUMAN SERVICES, DEPARTMENT OF"
      },
      "contractData": "Not Applicable",
      "taskOrdersData": {
        "areTaskOrdersApplicable": "No",
        "taskOrders": []
      },
      "goalsAndActualsData": {
        "businessCategories": {
          "businessConcerns": [
            {
              "code": "SB",
              "name": "Small Business",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "50"
                }
              ]
            },
            {
              "code": "OTSB",
              "name": "Other Than Small Business",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "50"
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
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "100"
                }
              ]
            },
            {
              "code": "WOSB",
              "name": "Women Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "100"
                }
              ]
            },
            {
              "code": "HBCU and MSI",
              "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
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
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "0"
                }
              ]
            },
            {
              "code": "VOSB",
              "name": "Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "0"
                }
              ]
            },
            {
              "code": "SDVOSB",
              "name": "SBA Certified Service Disabled Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
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
                  "organizationCode": "097",
                  "organizationName": "DEPT OF DEFENSE",
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
              "actualsWholeDollars": "Not Applicable",
              "actualsSubcontractPercentage": "Not Applicable",
              "actualsTotalContractPercentage": "Not Applicable"
            },
            "summaryReport": {
              "totalGoalsWholeDollars": "Not Applicable",
              "totalGoalsPercentage": "Not Applicable",
              "totalActualsWholeDollars": "200",
              "totalActualsPercentage": "100"
            }
          }
        }
      },
      "remarksData": {
        "remarks": "test"
      }
    },


    {
      "reportData": {
        "reportType": "Summary Commercial",
        "submitter": "Prime Contractor",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "Legal Business Name",
        "reportFiscalYear": 2025,
        "reportingPeriod": null,
        "submittedDate": "2026-02-18T20:31:23.51933",
        "reportedToDepartmentCode": "Not Applicable",
        "reportedToDeportmentName": "Not Applicable"
      },
      "contractData": "Not Applicable",
      "taskOrdersData": {
        "areTaskOrdersApplicable": "No",
        "taskOrders": []
      },
      "goalsAndActualsData": {
        "businessCategories": {
          "businessConcerns": [
            {
              "code": "SB",
              "name": "Small Business",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "100",
                  "goalsPercentage": "50",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "50"
                }
              ]
            },
            {
              "code": "OTSB",
              "name": "Other Than Small Business",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "100",
                  "goalsPercentage": "50",
                  "actualsWholeDollars": "100",
                  "actualsPercentage": "50"
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
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "100",
                  "goalsPercentage": "100",
                  "actualsWholeDollars": "50",
                  "actualsPercentage": "50"
                }
              ]
            },
            {
              "code": "WOSB",
              "name": "Women Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "100",
                  "goalsPercentage": "100",
                  "actualsWholeDollars": "50",
                  "actualsPercentage": "50"
                }
              ]
            },
            {
              "code": "HBCU and MSI",
              "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "0",
                  "goalsPercentage": "0",
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
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "0",
                  "goalsPercentage": "0",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "0"
                }
              ]
            },
            {
              "code": "VOSB",
              "name": "Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "0",
                  "goalsPercentage": "0",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "0"
                }
              ]
            },
            {
              "code": "SDVOSB",
              "name": "SBA Certified Service Disabled Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "0",
                  "goalsPercentage": "0",
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
                  "organizationCode": "Not Applicable",
                  "organizationName": "Not Applicable",
                  "goalsWholeDollars": "0",
                  "goalsPercentage": "0",
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
              "actualsWholeDollars": "Not Applicable",
              "actualsSubcontractPercentage": "Not Applicable",
              "actualsTotalContractPercentage": "Not Applicable"
            },
            "summaryReport": {
              "totalGoalsWholeDollars": "200",
              "totalGoalsPercentage": "100",
              "totalActualsWholeDollars": "200",
              "totalActualsPercentage": "100"
            }
          }
        }
      },
      "remarksData": {
        "remarks": "test"
      }
    },
    {
      "reportData": {
        "reportType": "Individual",
        "submitter": "Prime Contractor",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "Legal Business Name",
        "reportFiscalYear": 2025,
        "reportingPeriod": "September 30",
        "submittedDate": "2026-02-23T21:59:44.883998",
        "reportedToDepartmentCode": "Not Applicable",
        "reportedToDeportmentName": "Not Applicable"
      },
      "contractData": {
        "piid": "GS35F540GA",
        "awardOrIdv": null,
        "referencedIdvPiid": null,
        "subcontractNumber": null,
        "totalDollars": "1961200000",
        "contractingOrganization": {
          "department": {
            "code": "4700",
            "name": "GENERAL SERVICES ADMINISTRATION"
          },
          "subTier": {
            "code": "4732",
            "name": "FEDERAL ACQUISITION SERVICE"
          },
          "office": {
            "code": "47QTCA",
            "name": "GSA/FAS CENTER FOR IT SCHEDULE PROG"
          }
        },
        "subcontractingPlanCode": null,
        "subcontractingPlanDesc": null
      },
      "taskOrdersData": {
        "areTaskOrdersApplicable": "No",
        "taskOrders": []
      },
      "goalsAndActualsData": {
        "businessCategories": {
          "businessConcerns": [
            {
              "code": "SB",
              "name": "Small Business",
              "individualReport": {
                "goalsWholeDollars": "10000",
                "goalsSubcontractPercentage": "50",
                "goalsTotalContractPercentage": "0",
                "actualsWholeDollars": "10000",
                "actualsSubcontractPercentage": "50",
                "actualsTotalContractPercentage": "5.098919029165817E-4"
              }
            },
            {
              "code": "OTSB",
              "name": "Other Than Small Business",
              "individualReport": {
                "goalsWholeDollars": "10000",
                "goalsSubcontractPercentage": "50",
                "goalsTotalContractPercentage": "5.098919029165817E-4",
                "actualsWholeDollars": "10000",
                "actualsSubcontractPercentage": "50",
                "actualsTotalContractPercentage": "5.098919029165817E-4"
              }
            }
          ],
          "smallBusinessCategories": [
            {
              "code": "SDB",
              "name": "Small Disadvantaged Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "WOSB",
              "name": "Women Owned Small Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "HBCU and MSI",
              "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "HUBZone",
              "name": "SBA Certified HUBZone Small Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "VOSB",
              "name": "Veteran Owned Small Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "SDVOSB",
              "name": "SBA Certified Service Disabled Veteran Owned Small Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            },
            {
              "code": "ANC",
              "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
              "individualReport": {
                "goalsWholeDollars": "1000",
                "goalsSubcontractPercentage": "5",
                "goalsTotalContractPercentage": "5.098919029165817E-5",
                "actualsWholeDollars": "1000",
                "actualsSubcontractPercentage": "5",
                "actualsTotalContractPercentage": "5.098919029165817E-5"
              }
            }
          ],
          "totals": {
            "individualReport": {
              "goalsWholeDollars": "20000",
              "goalsSubcontractPercentage": "100",
              "goalsTotalContractPercentage": "5.098919029165817E-4",
              "actualsWholeDollars": "20000",
              "actualsSubcontractPercentage": "100",
              "actualsTotalContractPercentage": "0.0010197838058331635"
            },
            "summaryReport": {
              "totalGoalsWholeDollars": "Not Applicable",
              "totalGoalsPercentage": "Not Applicable",
              "totalActualsWholeDollars": "Not Applicable",
              "totalActualsPercentage": "Not Applicable"
            }
          }
        }
      },
      "remarksData": {
        "remarks": "This is a test"
      }
    }
  ],
  "links": {
    "selfLink": "https://api-alpha.sam.gov/spr/v1/search?page=0&size=10",
    "nextLink": null
  }
}

```

---

### Example 3: I would like to obtain all the Summary DoD Comprehensive reports submitted for a given fiscal year and period, with specific sections in the response.


#### Request URL

- **Production:** https://api.sam.gov/spr/v1/search
- **Alpha:** https://api-alpha.sam.gov/spr/v1/search

#### Curl Request

```bash
curl -X POST \
  'https://api.sam.gov/spr/v1/search?api_key=<API KEY>' \
or 'https://api-alpha.sam.gov/spr/v1/search?api_key=<API KEY>' \ 
  -H 'X-Api-Roles: SA-FED-ALL' \
  -H 'Authorization: Basic <Base64 encoded username:password>' \
  -H 'Content-Type: application/json' \
  -H 'accept: application/json' \
-d '{
  "reportSubmittedDate": "[02/24/2026,]",
  "reportType": "Individual",
  "reportType": "Summary DOD COMPREHENSIVE",
  "reportFiscalYear": "2025",
  "reportingPeriod": "March 31",
  "includeSections": "reportData~goalsAndActualsData~remarks~certificationData~dodComprehensiveAttachments"

}'
```

#### Response

**JSON Output**

```json
{
  "totalNumberOfReports": 9,
  "subContractingPlanReports": [
    {
      "reportData": {
        "reportType": "Summary DOD Comprehensive",
        "submitter": "Both",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "Legal Business Name",
        "reportFiscalYear": 2025,
        "reportingPeriod": "March 31",
        "submittedDate": "2025-05-14T15:00:22",
        "reportedToDepartmentCode": "CSP",
        "reportedToDeportmentName": "COMPREHENSIVE SUBCONTRACT PROGRAM DIVISION"
      },
      "goalsAndActualsData": {
        "businessCategories": {
          "businessConcerns": [
            {
              "code": "SB",
              "name": "Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "152492249",
                  "actualsPercentage": "30"
                }
              ]
            },
            {
              "code": "OTSB",
              "name": "Other Than Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "355028303",
                  "actualsPercentage": "70"
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
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "1798868",
                  "actualsPercentage": "0.4"
                }
              ]
            },
            {
              "code": "WOSB",
              "name": "Women Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "14262850",
                  "actualsPercentage": "2.8"
                }
              ]
            },
            {
              "code": "HBCU and MSI",
              "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
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
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "3557088",
                  "actualsPercentage": "0.7"
                }
              ]
            },
            {
              "code": "VOSB",
              "name": "Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "4667810",
                  "actualsPercentage": "0.9"
                }
              ]
            },
            {
              "code": "SDVOSB",
              "name": "SBA Certified Service Disabled Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "2340517",
                  "actualsPercentage": "0.5"
                }
              ]
            },
            {
              "code": "ANC",
              "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "Not Applicable"
                }
              ]
            },
            {
              "code": "ANC",
              "name": "Alaskan Native Corporations and Indian Tribes that are not Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "0",
                  "actualsPercentage": "Not Applicable"
                }
              ]
            }
          ],
          "totals": {
            "individualReport": {
              "goalsWholeDollars": "Not Applicable",
              "goalsSubcontractPercentage": "Not Applicable",
              "goalsTotalContractPercentage": "Not Applicable",
              "actualsWholeDollars": "Not Applicable",
              "actualsSubcontractPercentage": "Not Applicable",
              "actualsTotalContractPercentage": "Not Applicable"
            },
            "summaryReport": {
              "totalGoalsWholeDollars": "Not Applicable",
              "totalGoalsPercentage": "Not Applicable",
              "totalActualsWholeDollars": "507520552",
              "totalActualsPercentage": "100"
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
        "nameOfTheCertifier": "Certifier",
        "titleOfTheCertifier": "SBLO ",
        "genericEmailAddressOrUrl": null
      },
      "remarksData": {
        "remarks": "Remarks as provided by the contractor"
      },
      "dodComprehensiveAttachmentsData": [
        {
          "name": "Attachment Name",
          "url": "URL"
        },
        {
          "name": "Attachment Name",
          "url": "URL"
        },
        {
          "name": "Attachment Name",
          "url": "URL"
        },
      ]
    },
    {
      "reportData": {
        "reportType": "Summary DOD Comprehensive",
        "submitter": "Prime Contractor",
        "uniqueEntityID": "UEI",
        "legalBusinessName": "Legal Business Name",
        "reportFiscalYear": 2025,
        "reportingPeriod": "March 31",
        "submittedDate": "2025-05-15T16:56:21",
        "reportedToDepartmentCode": "CSP",
        "reportedToDeportmentName": "COMPREHENSIVE SUBCONTRACT PROGRAM DIVISION"
      },
      "goalsAndActualsData": {
        "businessCategories": {
          "businessConcerns": [
            {
              "code": "SB",
              "name": "Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "241601987",
                  "actualsPercentage": "23.4"
                }
              ]
            },
            {
              "code": "OTSB",
              "name": "Other Than Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "793044138",
                  "actualsPercentage": "76.6"
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
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "7164832",
                  "actualsPercentage": "0.7"
                }
              ]
            },
            {
              "code": "WOSB",
              "name": "Women Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "23663085",
                  "actualsPercentage": "2.3"
                }
              ]
            },
            {
              "code": "HBCU and MSI",
              "name": "Historically Black Colleges and Universities and Minority Serving Institutions",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
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
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "1827505",
                  "actualsPercentage": "0.2"
                }
              ]
            },
            {
              "code": "VOSB",
              "name": "Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "11426320",
                  "actualsPercentage": "1.1"
                }
              ]
            },
            {
              "code": "SDVOSB",
              "name": "SBA Certified Service Disabled Veteran Owned Small Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
                  "goalsWholeDollars": "Not Applicable",
                  "goalsPercentage": "Not Applicable",
                  "actualsWholeDollars": "2840877",
                  "actualsPercentage": "0.3"
                }
              ]
            },
            {
              "code": "ANC",
              "name": "Alaskan Native Corporations and Indian Tribes that are not Small Disadvantaged Business",
              "summaryReport": [
                {
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
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
                  "organizationCode": "9700",
                  "organizationName": "Department of Defense",
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
              "actualsWholeDollars": "Not Applicable",
              "actualsSubcontractPercentage": "Not Applicable",
              "actualsTotalContractPercentage": "Not Applicable"
            },
            "summaryReport": {
              "totalGoalsWholeDollars": "Not Applicable",
              "totalGoalsPercentage": "Not Applicable",
              "totalActualsWholeDollars": "1034646125",
              "totalActualsPercentage": "100"
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
        "nameOfTheCertifier": "Certifier",
        "titleOfTheCertifier": "Associate Director Procurement/SBLO",
        "genericEmailAddressOrUrl": null
      },
      "remarksData": {
        "remarks": "As provided by the contractor"
      },
      "dodComprehensiveAttachmentsData": [
        {
          "name": "Attachment Name",
          "url": "URL"
        },
        {
          "name": "Attachment Name",
          "url": "URL"
        },
      ]
    }
  ],
  "links": {
    "selfLink": "https://api-alpha.sam.gov/spr/v1/search?page=0&size=10",
    "nextLink": null
  }
}

```

---

## Additional Information

You can view the full details of the differences between the SAM legacy API and SAM.gov API in
the [Variance Document](https://open.gsa.gov/api/entity-api/LegacySAMvsBetaSAM-EntityManagementAPI.pdf).

- This website contains data supplied by third party information suppliers, including Dun & Bradstreet (D&B). For the
  purposes of the following limitation on permissible use of D&B data, which includes each entity’s DUNS Number and its
  associated business information, “D&B Open Data” is defined as the following data elements: Legal Business Name,
  Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province
  Abbreviation, ZIP/Postal Code. Entity registration, exclusion, or contract award records in SAM may contain
  D&B-supplied data. Applicable records containing D&B data include all entity registration records with a last updated
  date earlier than 4/4/2022, all exclusions records with a created date earlier than 4/4/2022, and all base award
  notices with an award date earlier than 4/4/2022. These records show the Entity Validation Service (EVS) Source as D&B
  in outbound data streams.
- D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the
  limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving
  written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in
  bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service
  being licensed hereunder).
- Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other
  D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing
  customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the
  website, including the use of “bots” or “spiders”, is prohibited. Federal government entities are authorized to use
  the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards,
  including sub-awards, or reporting Federal award information.
- GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided “as
  is” without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third
  party information supplier be liable in any way with regard to the use of the D&B data. For more information about the
  scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

---

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

- Reach out to the SAM.gov team at www.fsd.gov for inquiries and help desk support.

  a. Before contacting the help desk, conduct your own initial troubleshooting

  i. Conduct a recent review of the open.gsa.gov/api specifications  
  ii. Confirm you are using an API tool, not a browser to send the request (FOUO & Sensitive Calls)  
  iii. Confirm you are using the username/password for the System Account that created the API key in the authentication
  header (Sensitive Calls)  
  iv. Confirm you used POST and not GET for this request (Sensitive Calls)  
  v. Confirm that the API key is from a System Account (FOUO & Sensitive Calls)  
  vi. Confirm that the API key being used is still active  
  vii. Confirm that the System Account you are using has "read fouo" or "read sensitive" permissions as applicable (
  FOUO & Sensitive Calls)  
  viii. Confirm that the IP addresses registered with your System Account are current

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

  vi. Please describe the issue: (Copy and paste the below information into the ticket, filling in your information
  within the brackets)

    1. Option A:  
       I have already navigated to alpha.sam.gov and created a user account, following the same steps for creating an
       account in sam.gov.  
       I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov.  
       The account that needs role assignment is associated with [EMAIL ADDRESS].  
       I request a [ROLE] role for the [DOMAIN] domain in alpha.sam.gov.

    2. Option B:  
       I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval.  
       I would like to request alpha.sam.gov system account review and approval
       for [Name of the alpha.sam.gov system account].

---

**NOTE:** If you do not have an alpha account you can find the instructions here.

<p><small><a href="#">Back to top</a></small></p>
