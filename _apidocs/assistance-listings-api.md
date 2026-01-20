---
title: SAM.gov Assistance Listings Public API 
banner-heading: SAM.gov Assistance Listings Public API 
---

# Overview
The Assistance Listings API provides Active and Inactive federal assistance listings data, similar to the CFDA catalog.

# Getting Started
Access the Assistance Listings Public API from the following Production or Alpha environments:

## API endpoints
**Production:**
* https://api.sam.gov/assistance-listings/v1/search (coming soon)

**Alpha:**
* https://api-alpha.sam.gov/assistance-listings/v1/search

## User Requirements

* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key.Request a public API key from your SAM.gov user account on the Account Details page. If using the Alpha environment API, get your API key from your alpha.SAM.gov user account. Get a Production environment API key from your SAM.gov user account.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

### User Account API Key Creation

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, “Public API Key”.<br>
  ![EYE_IMAGE.JPG](assistance-listings-api/v1/EYE_IMAGE.JPG)
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.


### API Key Rate Limits

We limit call rates by day and account type.

| Type of User Account| Type of API Key | Default API Daily Rate Limit 
| ---------------------------|---------------------------|------------------------------|
| Non-federal user with no Role in SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a Role in SAM.gov | Personal API key | 1,000 requests/day |
| Federal User | Personal API key | 1,000 requests/day |

# API Description
The Assistance Listings API offers the following search parameters that can be provided independently or in combination with each other.

## Request Parameters

Request Parameter | Description                                                                                                                                                                                                                                                            | Required| Data Type | Applicable Versions
----- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ---- |-----------| -----
api_key	| Public Key of users	                                                                                                                                                                                                                                                   | Yes| 	String   | v1
pageSize	| The number of listings to retrieve per page. This field must be a number <br> Max Value = 1000. Default page size is 10.                                                                                                                                               | No| Integer   | v1
pageNumber	| Indicates the page index. Defaults to 0 if not specified.                                                                                                                                                                                                              |No| 	Integer  | v1
status| 	Filters results by the status of the assistance listing. Possible values are 'Active' or 'Inactive' or 'All'. Defaults to 'Active' if not specified.                                                                                                                  |	No| 	String   | v1
assistanceListingId| Filters results by the assistance listing ID (Program Number).                                                                                                                                                                                                         | No | String    | v1
publishedDateFrom| Filters results to include only Assistance listings published on or after the specified date (ISO 8601 format, e.g., YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ)	                                                                                                              |No| 	String   | v1
publishedDateTo| Filters results to include only Assistance listings published on or before the specified date (ISO 8601 format, e.g., YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ). If only the Published From Date is provided, the query will automatically set the To Date as current date.	 |No| 	String   | v1
fiscalYear| Filters results by fiscal year (e.g., 2023).                                                                                                                                                                                                                           |No	| Integer   | v1
assistanceTypes| 	 Filters results by one or more types of Assistance codes(array of strings).                                                                                                                                                                                          | 	No| 	String[] | v1
beneficiaryTypes| 	 Filters results by one or more types of Beneficiary codes (array of strings).                                                                                                                                                                                        |	No| String[]  | v1
applicantTypes| 	 Filters results by one or more types of applicant codes (array of strings).                                                                                                                                                                                          |	No| 	String[] | v1
organizationCodes| 	 Filters results by Federal Organization Codes. Use FPDS codes for Departments and Agencies, and AAC codes for Offices.                                                                                                                                               |	No| 	String[] | v1
OrganizationLevel| 	 Filters results by Federal Organization level. Available values are Department, Agency, and Office. Defaults to Department if not specified. Should be used in conjunction with organizationCodes parameter to specify the level of the Federal Organization.        |	No| 	String[] | v1
coreBasedStatisticalDelineations| 	Filters results by Core Based Statistical Delineation Usage. Acceptable values are Y or N.                                                                                                                                                                            |	No| 	String[] | v1


## Response Parameters

This section provides a **fully flattened, exhaustive data dictionary** for the Assistance Listings API response.

- **Notation**: Dot notation is used for nesting
- **Arrays**: Indicated with `[]`
- **Versions**: “All” unless explicitly stated (e.g., v1.0)

---

### Pagination Metadata

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| totalRecords | Total number of records available | integer | All |
| pageSize | Number of records per page | integer | All |
| page | Current page number | integer | All |
| totalPages | Total number of pages | integer | All |

---

### assistanceListingsData (Root)

| Response Parameter | Description                        | Data Type | Applicable Versions |
|-------------------|------------------------------------|-----------|---------------------|
| assistanceListingsData | Assistance listings container      | array | All |
| assistanceListingsData[].version | Data specification version         | string | All |
| assistanceListingsData[].status | Program status (Active / Inactive) | string | All |
| assistanceListingsData[].fiscalYear | Fiscal year                        | integer | All |
| assistanceListingsData[].publishedDate | Published date (ISO 8601)          | string | All |
| assistanceListingsData[].assistanceListingId | CFDA / Assistance Listing ID       | string | All |
| assistanceListingsData[].title | Program title                      | string | All |
| assistanceListingsData[].popularLongName | Popular long name                  | string | All |
| assistanceListingsData[].popularShortName | Popular short name                 | string | All |
| assistanceListingsData[].relatedFederalAssistance | Related assistance listings        | string[] | All |
| assistanceListingsData[].programWebPage | Program website URL                | string (URL) | All |

---

### Federal Organization

| Response Parameter                                          | Description | Data Type | Applicable Versions |
|-------------------------------------------------------------|------------|-----------|---------------------|
| assistanceListingsData[].federalOrganization.department     | Department name | string | All |
| assistanceListingsData[].federalOrganization.departmentCode | Department Code (FPDS code) | string | All |
| assistanceListingsData[].federalOrganization.agency         | Agency name | string | All |
| assistanceListingsData[].federalOrganization.agencyCode     | Agency Code (FPDS code) | string | All |
| assistanceListingsData[].federalOrganization.office         | Office name | string | All |
| assistanceListingsData[].federalOrganization.officeCode     | Office Code (AAC code)  | string | All |

---

### Overview

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.objective | Program objective | string | All |
| assistanceListingsData[].overview.assistanceListingDescription | Program description | string | All |

#### Funded Projects

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.fundedProjectsList.isApplicable | Funded projects applicable | boolean | All |
| assistanceListingsData[].overview.fundedProjectsList.list | Funded projects list | array | All |
| assistanceListingsData[].overview.fundedProjectsList.list[].fiscalYear | Funded project FY | integer | All |
| assistanceListingsData[].overview.fundedProjectsList.list[].description | Funded project description | string | All |

#### Functional Codes (v1.0)

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.functionalCodes | Functional codes | array | v1.0 |
| assistanceListingsData[].overview.functionalCodes[].code | Functional code | string | v1.0 |
| assistanceListingsData[].overview.functionalCodes[].name | Functional code name | string | v1.0 |

#### Mission Sub-Categories (v2.0)

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.missionSubCategories.Primary.code | Primary mission code | string | All |
| assistanceListingsData[].overview.missionSubCategories.Primary.name | Primary mission name | string | All |
| assistanceListingsData[].overview.missionSubCategories.Other[].code | Other mission code | string | All |
| assistanceListingsData[].overview.missionSubCategories.Other[].name | Other mission name | string | All |

#### Subject Terms (v1.0)

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.subjectTerms | Subject terms | array | v1.0 |
| assistanceListingsData[].overview.subjectTerms[].code | Subject term code | string | v1.0 |
| assistanceListingsData[].overview.subjectTerms[].name | Subject term name | string | v1.0 |

---

### Authorizations

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].authorizations.description | Authorization description | string | v1.0 |
| assistanceListingsData[].authorizations.list | Authorization list | array | All |
| assistanceListingsData[].authorizations.list[].parentAuthorizationId | Parent authorization ID | uuid | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.act | Authorized by Act | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.executiveOrder | Authorized by Executive Order | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.publicLaw | Authorized by Public Law | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.statute | Authorized by Statute | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.USC | Authorized by USC | boolean | All |

#### Authorization Details

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].authorizations.list[].act.title | Act title | string | All                 |
| assistanceListingsData[].authorizations.list[].act.part | Act part | string | All                 |
| assistanceListingsData[].authorizations.list[].act.section | Act section | string | All                 |
| assistanceListingsData[].authorizations.list[].act.description | Act description | string | All                 |
| assistanceListingsData[].authorizations.list[].executiveOrder.title | EO title | string | All                 |
| assistanceListingsData[].authorizations.list[].executiveOrder.part | EO part | string | All                 |
| assistanceListingsData[].authorizations.list[].executiveOrder.section | EO section | string | All                 |
| assistanceListingsData[].authorizations.list[].executiveOrder.description | EO description | string | All                 |
| assistanceListingsData[].authorizations.list[].publicLaw.congressCode | Congress code | string | All                 |
| assistanceListingsData[].authorizations.list[].publicLaw.number | Public law number | string | All                 |
| assistanceListingsData[].authorizations.list[].publicLaw.description | Public law description | string | All                 |
| assistanceListingsData[].authorizations.list[].statute.volume | Statute volume | string | All                 |
| assistanceListingsData[].authorizations.list[].statute.page | Statute page | string | All                 |
| assistanceListingsData[].authorizations.list[].statute.description | Statute description | string | v2.0                |
| assistanceListingsData[].authorizations.list[].USC.title | USC title | string | All                 |
| assistanceListingsData[].authorizations.list[].USC.section | USC section | string | All                 |
| assistanceListingsData[].authorizations.list[].USC.description | USC description | string | v2.0                |

---

### Financial Information

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.isFundedCurrentFY | Funded current FY | boolean | All |
| assistanceListingsData[].financialInformation.additionalInformation | Additional financial info | string | All |

#### Obligations

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.obligations | Obligations | array | All                 |
| assistanceListingsData[].financialInformation.obligations[].isRecoveryAct | Recovery Act related | boolean | v1.0                |
| assistanceListingsData[].financialInformation.obligations[].assistanceType.code | Assistance type code | string | All                 |
| assistanceListingsData[].financialInformation.obligations[].assistanceType.name | Assistance type name | string | All                 |
| assistanceListingsData[].financialInformation.obligations[].awardAmountBasis[].code | Award amount basis code | string | v2.0                |
| assistanceListingsData[].financialInformation.obligations[].awardRecipientBasis[].code | Award recipient basis code | string | v2.0                |
| assistanceListingsData[].financialInformation.obligations[].values[].year | Award year | integer | All                 |
| assistanceListingsData[].financialInformation.obligations[].values[].actual | Actual amount | number | All                 |
| assistanceListingsData[].financialInformation.obligations[].values[].estimate | Estimated amount | number | All                 |

#### Range & Average Assistance

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|--------------------|
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].fiscalYear | Fiscal year | integer | v2.0               |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].minimumAwardAmount | Minimum award amount | number | v2.0                |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].maximumAwardAmount | Maximum award amount | number | v2.0                |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].averageAwardAmount | Average award amount | number | v2.0                 |

#### Accomplishments

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.accomplishments.isApplicable | Accomplishments applicable | boolean | All |
| assistanceListingsData[].financialInformation.accomplishments.list[].fiscalYear | Accomplishment FY | integer | All |
| assistanceListingsData[].financialInformation.accomplishments.list[].description | Accomplishment description | string | All |

#### Accounts Identification

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.accountsIdentificationList[].code | Account code | string | All |
| assistanceListingsData[].financialInformation.accountsIdentificationList[].description | Account description | string | All |

---

### Criteria for Applying

#### Documentation

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.documentation.isApplicable | Documentation required | boolean | All |
| assistanceListingsData[].criteriaForApplying.documentation.description | Documentation list | string[] | All |

#### Applicant / Beneficiary

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.applicant.types[].code | Applicant type code | string | All |
| assistanceListingsData[].criteriaForApplying.applicant.types[].name | Applicant type name | string | All |
| assistanceListingsData[].criteriaForApplying.applicant.description | Applicant description | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.isSameAsApplicant | Beneficiary same as applicant | boolean | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.types[].code | Beneficiary type code | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.types[].name | Beneficiary type name | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.description | Beneficiary description | string | All |

#### Assistance Usage / Restrictions

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.assistanceUsage.types[].code | Usage type code | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceUsage.types[].name | Usage type name | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceUsage.description | Usage description | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.types[].code | Restriction type code | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.types[].name | Restriction type name | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.description | Restriction description | string | All |

---

### Assistance Application

#### Deadlines

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.deadlines.value | Deadline indicator | string | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].start | Start date | date | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].end | End date | date | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].description | Deadline description | string | All |
| assistanceListingsData[].assistanceApplication.deadlines.description | General deadline description | string | All |

#### Pre-Application Coordination

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.environmentalImpact.reports[].reportCode | Report code | string | All |
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.environmentalImpact.reports[].isSelected | Report required | boolean | All |
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.description | Coordination description | string | All |

#### Application / Award / Payments

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.applicationProcedure.opportunityPostedLocation | Posted location | string | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.opportunityPostedURL | Posted URL | string | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.location | Application location | string | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.URL | Application URL | string | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.description | Procedure description | string | All                 |
| assistanceListingsData[].assistanceApplication.selectionCriteria.isApplicable | Selection applicable | boolean | All                 |
| assistanceListingsData[].assistanceApplication.selectionCriteria.description | Selection description | string | All                 |
| assistanceListingsData[].assistanceApplication.awardProcedure.description | Award procedure | string | All                 |
| assistanceListingsData[].assistanceApplication.payments.list[].fundingDate | Funding date | date | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].type | Payment type | string | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].frequency | Payment frequency | string | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].spendingPeriodType | Spending period type | string | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].spendingPeriod | Spending period | integer | v2.0                |

#### Approval / Appeal / Renewal

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.approval.interval | Approval interval | string | All |
| assistanceListingsData[].assistanceApplication.approval.description | Approval description | string | All |
| assistanceListingsData[].assistanceApplication.appeal.interval | Appeal interval | string | All |
| assistanceListingsData[].assistanceApplication.appeal.description | Appeal description | string | All |
| assistanceListingsData[].assistanceApplication.renewal.interval | Renewal interval | string | All |
| assistanceListingsData[].assistanceApplication.renewal.description | Renewal description | string | All |

---

### Compliance

#### CFR, Reports, Audit

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].compliance.CFR200Requirements.questions[].code | CFR subpart code | string | All                 |
| assistanceListingsData[].compliance.CFR200Requirements.questions[].isSelected | CFR selected | boolean | All                 |
| assistanceListingsData[].compliance.CFR200Requirements.description | CFR description | string | All                 |
| assistanceListingsData[].compliance.reports[].code | Report code | string | All                 |
| assistanceListingsData[].compliance.reports[].frequency | Report frequency | string | v2.0                |
| assistanceListingsData[].compliance.reports[].description | Report description | string | All                 |
| assistanceListingsData[].compliance.audit.isApplicable | Audit applicable | boolean | All                 |
| assistanceListingsData[].compliance.audit.frequency | Audit frequency | string | All                 |
| assistanceListingsData[].compliance.audit.description | Audit description | string | All                 |

#### Records & Documents

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].compliance.records.retentionPeriodType | Retention type | string | All |
| assistanceListingsData[].compliance.records.retentionPeriod | Retention period | integer | All |
| assistanceListingsData[].compliance.records.description | Records description | string | All |
| assistanceListingsData[].compliance.documents.isApplicable | Documents reference | uuid | All |
| assistanceListingsData[].compliance.documents.description | Documents description | string | All |

#### Formula & Matching

| Response Parameter                                                              | Description               | Data Type | Applicable Versions |
| ------------------------------------------------------------------------------- | ------------------------- | --------- | ------------------- |
| assistanceListingsData[].compliance.formulaAndMatching                          | Formula and matching info | object    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.formula            | Formula used flag         | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.matching           | Matching required flag    | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.moe                | MOE used flag             | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.title            | Formula title             | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.chapter          | Formula chapter           | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.part             | Formula part              | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.subPart          | Formula subpart           | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.publicLaw        | Formula public law        | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.description      | Formula description       | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.requirementFlag | Matching requirement flag | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.percent         | Matching percent          | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.description     | Matching description      | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.moe.description          | MOE description           | string    | All                 |

---

### Contacts

#### Local

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].contacts.local.flag | Local contact flag | string | v1.0                |
| assistanceListingsData[].contacts.local.officeLocationURL | Office URL | uri | v2.0                |
| assistanceListingsData[].contacts.local.description | Local description | string | v1.0                |

#### Headquarters

| Response Parameter | Description | Data Type | Applicable Versions |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].contacts.headquarters[].contactId | Contact ID | uuid | All |
| assistanceListingsData[].contacts.headquarters[].title | Contact title | string | All |
| assistanceListingsData[].contacts.headquarters[].fullName | Full name | string | All |
| assistanceListingsData[].contacts.headquarters[].email | Email | string | All |
| assistanceListingsData[].contacts.headquarters[].phone | Phone | string | All |
| assistanceListingsData[].contacts.headquarters[].fax | Fax | string | All |
| assistanceListingsData[].contacts.headquarters[].streetAddress | Street address | string | All |
| assistanceListingsData[].contacts.headquarters[].city | City | string | All |
| assistanceListingsData[].contacts.headquarters[].state | State | string | All |
| assistanceListingsData[].contacts.headquarters[].zip | ZIP | string | All |
| assistanceListingsData[].contacts.headquarters[].country | Country | string | All |
| assistanceListingsData[].contacts.headquarters[].subdivisionCode | Subdivision code | string | All |
| assistanceListingsData[].contacts.headquarters[].subdivisionName | Subdivision name | string | All |

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: <a href="assistance-listings-api/v1/assistance-listings-api.openapi.yaml">Open API specification file for the Assistance Listings API</a>


## Reference Data

### Assistance Types (By Code)

This section lists the standardized assistance types organized by their corresponding codes.

---

#### Financial Assistance

| Assistance Type Code | Assistance Type Name                               |
|----------------------|----------------------------------------------------|
| F001                 | Grant                                              |
| F002                 | Cooperative Agreement                              |
| F003                 | Direct Loan                                        |
| F004                 | Loan Guarantee                                     |
| F005                 | Indemnity/Insurance (non-loan)                     |
| F006                 | Direct Payment for Specified Use                   |
| F007                 | Direct Payment with Unrestricted Use               |
| F008                 | Asset Forfeiture / Equitable Sharing               |
| F009                 | Sale, Exchange, or Donation of Property and Goods  |
| F010                 | Other Financial Assistance                         |

---

#### Non-Financial Assistance

| Assistance Type Code | Assistance Type Name                               |
|----------------------|----------------------------------------------------|
| N001                 | Use of Property, Facilities, and Equipment         |
| N002                 | Provision of Specialized Services                 |
| N003                 | Advisory Services                                 |
| N004                 | Dissemination of Technical Information            |
| N005                 | Training                                          |
| N006                 | Investigation of Complaints                       |
| N007                 | Other Non-Financial Assistance                    |

---
### Eligible Award Applicant and Beneficiary Types

This section lists entity types according to their eligibility as **Award Applicants** and **Beneficiaries**.

#### Eligible Award Applicant Types

| Entity Type Code | Entity Type Name |
|------------------|------------------|
| ET11010 | Unrestricted by Entity Type |
| ET11020 | Unrestricted by Individual Type |
| ET21010 | U.S. Federal Government |
| ET22010 | U.S. State Government (including the District of Columbia) |
| ET22020 | U.S. Territory (or Possession) Government (including freely-associated states) |
| ET22030 | Department or Agency of a U.S. State Government |
| ET22040 | Department or Agency of a U.S. Territorial Government |
| ET22050 | Interstate Organization |
| ET23010 | Federally Recognized Indian/Native American/Alaska Native Tribal Government |
| ET23020 | Indian/Native American/Alaska Native Tribal Government (Other than Federally Recognized) |
| ET23030 | Tribally Designated Housing Authority |
| ET24010 | Municipality or Township Government |
| ET24020 | County Government |
| ET24030 | School District Government |
| ET24040 | School District |
| ET24050 | Other Local Government Consortium or Regional Organization |
| ET25010 | Public Housing Authority |
| ET25020 | Planning Commission |
| ET25030 | Airport Authority |
| ET25040 | Port Authority |
| ET25050 | Transit Authority |
| ET25060 | Water Delivery Authority |
| ET25070 | Other Special District Government |
| ET26010 | Local |
| ET26020 | State |
| ET26030 | Territorial |
| ET26040 | Tribal |
| ET31010 | Foreign Government |
| ET32010 | Foreign Non-Government Nonprofit Organization |
| ET32020 | Foreign Non-Government Not-for-Profit Organization |
| ET32030 | Foreign Non-Governmental For-Profit Organization |
| ET33010 | International Organization |
| ET41010 | Nonprofit Organization |
| ET41020 | Not-for-Profit Organization |
| ET41030 | For-Profit Organization |
| ET51060 | Builder / Contractor / Developer |
| ET51100 | Farmworker |
| ET51120 | Small Business Person |
| ET59010 | Homeowner |
| ET59020 | Land / Property Owner |
| ET59060 | Veteran (including dependents) |
| ET59070 | Active-Duty Service Person (including dependents) |
| ET59080 | Reservist (including dependents) |
| ET59999 | Other |

---

#### Eligible Beneficiary Types

| Entity Type Code | Entity Type Name |
|------------------|------------------|
| ET11010 | Unrestricted by Entity Type |
| ET11020 | Unrestricted by Individual Type |
| ET12010 | Specific Restrictions Determined at NOFO Level |
| ET21010 | U.S. Federal Government |
| ET22010 | U.S. State Government |
| ET22020 | U.S. Territory Government |
| ET22030 | Department or Agency of a U.S. State Government |
| ET22040 | Department or Agency of a U.S. Territorial Government |
| ET22050 | Interstate Organization |
| ET23010 | Federally Recognized Tribal Government |
| ET23020 | Tribal Government (Other than Federally Recognized) |
| ET23030 | Tribally Designated Housing Authority |
| ET24010 | Municipality or Township Government |
| ET24020 | County Government |
| ET24030 | School District Government |
| ET24040 | School District |
| ET24050 | Other Local Government Consortium or Regional Organization |
| ET25010 | Public Housing Authority |
| ET25020 | Planning Commission |
| ET25030 | Airport Authority |
| ET25040 | Port Authority |
| ET25050 | Transit Authority |
| ET25060 | Water Delivery Authority |
| ET25070 | Other Special District Government |
| ET26010 | Local |
| ET26020 | State |
| ET26030 | Territorial |
| ET26040 | Tribal |
| ET31010 | Foreign Government |
| ET32010 | Foreign Non-Government Nonprofit Organization |
| ET32020 | Foreign Non-Government Not-for-Profit Organization |
| ET32030 | Foreign Non-Governmental For-Profit Organization |
| ET33010 | International Organization |
| ET41010 | Nonprofit Organization |
| ET41020 | Not-for-Profit Organization |
| ET41030 | For-Profit Organization |
| ET51010 | Health Professional |
| ET51020 | Education Professional |
| ET51030 | Scientist / Researcher |
| ET51040 | Artist / Humanist |
| ET51050 | Engineer / Architect |
| ET51060 | Builder / Contractor / Developer |
| ET51070 | Miner |
| ET51080 | Longshore and Harbor Worker |
| ET51090 | Farmer / Rancher / Agriculture Producer |
| ET51100 | Farmworker |
| ET51110 | Industrialist / Business Person |
| ET51120 | Small Business Person |
| ET51130 | Criminal Justice Personnel |
| ET52010 | Infant and Toddler (0–3) |
| ET52020 | Young Child (4–9) |
| ET52030 | Pre-Teen (10–12) |
| ET52040 | Teen (13–19) |
| ET52050 | Adult (20–64) |
| ET52060 | Senior Citizen (65+) |
| ET53010 | Early Childhood Education |
| ET53020 | Primary Education |
| ET53030 | Lower Secondary Education |
| ET53040 | Upper Secondary Education |
| ET53050 | Non-university Higher Education |
| ET53060 | University Higher Education |
| ET53070 | Graduate and Professional Higher Education |
| ET53080 | Trainee |
| ET59010 | Homeowner |
| ET59020 | Land / Property Owner |
| ET59030 | Refugee |
| ET59040 | U.S. Citizen |
| ET59050 | Resident/Citizen of a U.S. Territory |
| ET59060 | Veteran (including dependents) |
| ET59070 | Active-Duty Service Person (including dependents) |
| ET59080 | Reservist (including dependents) |
| ET59090 | Consumer |
| ET59999 | Other |

## HTTP Response Codes

HTTP Response Code | Description 
----- | ----- 
200 | Successful
400 | Bad Request 
404 | No Data found
500 | Internal Server Error 

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

## Change Log

Date | Version | Description
------|---------|---------
01/20/2026 | v1.0    | Base Version

<p><small><a href="#">Back to top</a></small></p>