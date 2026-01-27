---
title: SAM.gov Assistance Listings Public API 
banner-heading: SAM.gov Assistance Listings Public API 
---

## Overview
The Assistance Listings API provides Active and Inactive federal assistance listings data, similar to the CFDA catalog.

## Getting Started
Access the Assistance Listings Public API from the following Production or Alpha environments:

### API endpoints
**Production:**
* https://api.sam.gov/assistance-listings/v1/search

**Alpha:**
* https://api-alpha.sam.gov/assistance-listings/v1/search

### User Requirements

* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key.Request a public API key from your SAM.gov user account on the Account Details page. If using the Alpha environment API, get your API key from your alpha.SAM.gov user account. Get a Production environment API key from your SAM.gov user account.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

#### User Account API Key Creation

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, “Public API Key”.<br>
  ![EYE_IMAGE.JPG](assistance-listings-api/v1/EYE_IMAGE.JPG)
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.


#### API Key Rate Limits

We limit call rates by day and account type.

| Type of User Account| Type of API Key | Default API Daily Rate Limit 
| ---------------------------|---------------------------|------------------------------|
| Non-federal user with no Role in SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a Role in SAM.gov | Personal API key | 1,000 requests/day |
| Federal User | Personal API key | 1,000 requests/day |

## API Description
The Assistance Listings API offers the following search parameters that can be provided independently or in combination with each other.

### Request Parameters

Request Parameter | Description                                                                                                                                                                                                                                                           | Required  | Data Type | 
----- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------| 
api_key	| Public Key of users	                                                                                                                                                                                                                                                  | Yes       | 	String   | 
pageSize	| The number of listings to retrieve per page. This field must be a number <br> Max Value = 1000. Default page size is 10.                                                                                                                                              | No        | Integer   |
pageNumber	| Indicates the page index. Defaults to 0 if not specified.                                                                                                                                                                                                             | No        | 	Integer  |
status| 	Filters results by the status of the assistance listing. Possible values are 'Active' or 'Inactive' or 'All'. Defaults to 'Active' if not specified.                                                                                                                 | 	No       | 	String   |
assistanceListingId| Filters results by the assistance listing ID (Program Number).                                                                                                                                                                                                        | No        | String    |
publishedDateFrom| Filters results to include only Assistance listings published on or after the specified date (ISO 8601 format, e.g., YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ)	                                                                                                             | No        | 	String   |
publishedDateTo| Filters results to include only Assistance listings published on or before the specified date (ISO 8601 format, e.g., YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ). If only the Published From Date is provided, the query will automatically set the To Date as current date.	 | No        | 	String   |
assistanceTypes| 	 Filters results by one or more types of Assistance Type codes(array of strings). [Refer to Assistance Types](#assistance-types-by-code)                                                                                                                             | 	No       | 	String[] |
beneficiaryTypes| 	 Filters results by one or more types of Beneficiary Type codes (array of strings).  [Refer to Eligible Award Applicant Types](#eligible-award-applicant-types)                                                                                                      | 	No       | String[]  |
applicantTypes| 	 Filters results by one or more types of Applicant Type codes (array of strings).  [Refer to Eligible Beneficiary Types](#eligible-beneficiary-types)                                                                                                                | 	No       | 	String[] |
organizationCodes| 	 Filters results by Federal Organization Codes. Use FPDS codes for Departments and Agencies, and AAC codes for Offices.                                                                                                                                              | 	No       | 	String[] |
organizationLevel| 	 Filters results by Federal Organization level. Available values are Department, Agency, and Office. Defaults to Department if not specified. Should be used in conjunction with organizationCodes parameter to specify the level of the Federal Organization.       | 	No       | 	String[] |
coreBasedStatisticalDelineations| 	Filters results by Core Based Statistical Delineation Usage. Acceptable values are Y or N.                                                                                                                                                                           | 	No       | 	String[] |


### Response Parameters

This section provides a **fully flattened, exhaustive data dictionary** for the Assistance Listings API response.

- **Notation**: Dot notation is used for nesting
- **Arrays**: Indicated with `[]`
- **Versions**: “All” unless explicitly stated (e.g., v1.0)

---

#### Pagination Metadata

| Response Parameter | Description | Data Type | Data Specification Version |
|--------------------|------------|-----------|----------------------------|
| totalRecords       | Total number of records available | integer | All                        |
| pageSize           | Number of records per page | integer | All                        |
| pageNumber         | Current page number | integer | All                        |
| totalPages         | Total number of pages | integer | All                        |

---

#### assistanceListingsData (Root)

| Response Parameter | Description                        | Data Type | Data Specification Version |
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

#### Federal Organization

| Response Parameter                                          | Description | Data Type | Data Specification Version |
|-------------------------------------------------------------|------------|-----------|---------------------|
| assistanceListingsData[].federalOrganization.department     | Department name | string | All |
| assistanceListingsData[].federalOrganization.departmentCode | Department Code (FPDS code) | string | All |
| assistanceListingsData[].federalOrganization.agency         | Agency name | string | All |
| assistanceListingsData[].federalOrganization.agencyCode     | Agency Code (FPDS code) | string | All |
| assistanceListingsData[].federalOrganization.office         | Office name | string | All |
| assistanceListingsData[].federalOrganization.officeCode     | Office Code (AAC code)  | string | All |

---

#### Overview

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.objective | Program objective | string | All |
| assistanceListingsData[].overview.assistanceListingDescription | Program description | string | All |

##### Funded Projects

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.fundedProjectsList.isApplicable | Funded projects applicable | boolean | All |
| assistanceListingsData[].overview.fundedProjectsList.list | Funded projects list | array | All |
| assistanceListingsData[].overview.fundedProjectsList.list[].fiscalYear | Funded project FY | integer | All |
| assistanceListingsData[].overview.fundedProjectsList.list[].description | Funded project description | string | All |

##### Functional Codes (v1.0)

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.functionalCodes | Functional codes | array | v1.0 |
| assistanceListingsData[].overview.functionalCodes[].code | Functional code | string | v1.0 |
| assistanceListingsData[].overview.functionalCodes[].name | Functional code name | string | v1.0 |

##### Mission Sub-Categories (v2.0)

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.missionSubCategories.Primary.code | Primary mission code | string | All |
| assistanceListingsData[].overview.missionSubCategories.Primary.name | Primary mission name | string | All |
| assistanceListingsData[].overview.missionSubCategories.Other[].code | Other mission code | string | All |
| assistanceListingsData[].overview.missionSubCategories.Other[].name | Other mission name | string | All |

##### Subject Terms (v1.0)

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].overview.subjectTerms | Subject terms | array | v1.0 |
| assistanceListingsData[].overview.subjectTerms[].code | Subject term code | string | v1.0 |
| assistanceListingsData[].overview.subjectTerms[].name | Subject term name | string | v1.0 |

---

#### Authorizations

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].authorizations.description | Authorization description | string | v1.0 |
| assistanceListingsData[].authorizations.list | Authorization list | array | All |
| assistanceListingsData[].authorizations.list[].parentAuthorizationId | Parent authorization ID | uuid | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.act | Authorized by Act | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.executiveOrder | Authorized by Executive Order | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.publicLaw | Authorized by Public Law | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.statute | Authorized by Statute | boolean | All |
| assistanceListingsData[].authorizations.list[].authorizationTypes.USC | Authorized by USC | boolean | All |

##### Authorization Details

| Response Parameter | Description | Data Type | Data Specification Version |
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

#### Financial Information

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.isFundedCurrentFY | Funded current FY | boolean | All |
| assistanceListingsData[].financialInformation.additionalInformation | Additional financial info | string | All |

##### Obligations

| Response Parameter | Description | Data Type | Data Specification Version |
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

##### Range & Average Assistance

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|--------------------|
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].fiscalYear | Fiscal year | integer | v2.0               |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].minimumAwardAmount | Minimum award amount | number | v2.0                |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].maximumAwardAmount | Maximum award amount | number | v2.0                |
| assistanceListingsData[].financialInformation.rangeAndAverageAssistance[].averageAwardAmount | Average award amount | number | v2.0                 |

##### Accomplishments

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.accomplishments.isApplicable | Accomplishments applicable | boolean | All |
| assistanceListingsData[].financialInformation.accomplishments.list[].fiscalYear | Accomplishment FY | integer | All |
| assistanceListingsData[].financialInformation.accomplishments.list[].description | Accomplishment description | string | All |

##### Accounts Identification

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].financialInformation.accountsIdentificationList[].code | Account code | string | All |
| assistanceListingsData[].financialInformation.accountsIdentificationList[].description | Account description | string | All |

---

#### Criteria for Applying

##### Documentation

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.documentation.isApplicable | Documentation required | boolean | All |
| assistanceListingsData[].criteriaForApplying.documentation.description | Documentation list | string[] | All |

##### Applicant / Beneficiary

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.applicant.types[].code | Applicant type code | string | All |
| assistanceListingsData[].criteriaForApplying.applicant.types[].name | Applicant type name | string | All |
| assistanceListingsData[].criteriaForApplying.applicant.description | Applicant description | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.isSameAsApplicant | Beneficiary same as applicant | boolean | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.types[].code | Beneficiary type code | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.types[].name | Beneficiary type name | string | All |
| assistanceListingsData[].criteriaForApplying.beneficiary.description | Beneficiary description | string | All |

##### Assistance Usage / Restrictions

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].criteriaForApplying.assistanceUsage.types[].code | Usage type code | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceUsage.types[].name | Usage type name | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceUsage.description | Usage description | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.types[].code | Restriction type code | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.types[].name | Restriction type name | string | All |
| assistanceListingsData[].criteriaForApplying.assistanceRestriction.description | Restriction description | string | All |

---

#### Assistance Application

##### Deadlines

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.deadlines.value | Deadline indicator | string | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].start | Start date | date | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].end | End date | date | All |
| assistanceListingsData[].assistanceApplication.deadlines.list[].description | Deadline description | string | All |
| assistanceListingsData[].assistanceApplication.deadlines.description | General deadline description | string | All |

##### Pre-Application Coordination

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.environmentalImpact.reports[].reportCode | Report code | string | All |
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.environmentalImpact.reports[].isSelected | Report required | boolean | All |
| assistanceListingsData[].assistanceApplication.preApplicationCoordination.description | Coordination description | string | All |

##### Application / Award / Payments

| Response Parameter | Description                  | Data Type | Data Specification Version |
|-------------------|------------------------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.applicationProcedure.opportunityPostedLocation | Posted location              | string    | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.opportunityPostedURL | Posted URL                   | string    | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.location | Application location         | string    | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.URL | Application URL              | string    | All                 |
| assistanceListingsData[].assistanceApplication.applicationProcedure.description | Procedure description        | string    | All                 |
| assistanceListingsData[].assistanceApplication.selectionCriteria.isApplicable | Selection applicable         | boolean   | All                 |
| assistanceListingsData[].assistanceApplication.selectionCriteria.description | Selection description        | string    | All                 |
| assistanceListingsData[].assistanceApplication.awardProcedure.description | Award procedure              | string    | All                 |
| assistanceListingsData[].assistanceApplication.payments.list[].fundingDate | Funding date                 | date      | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].type | Payment type                 | string    | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].frequency | Payment frequency            | string    | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].spendingPeriodType | Spending period type         | string    | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].spendingPeriod | Spending period              | integer   | v2.0                |
| assistanceListingsData[].assistanceApplication.payments.list[].spendingPeriodDescription | Spending period  Description | string    | v2.0                |


##### Approval / Appeal / Renewal

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].assistanceApplication.approval.interval | Approval interval | string | All |
| assistanceListingsData[].assistanceApplication.approval.description | Approval description | string | All |
| assistanceListingsData[].assistanceApplication.appeal.interval | Appeal interval | string | All |
| assistanceListingsData[].assistanceApplication.appeal.description | Appeal description | string | All |
| assistanceListingsData[].assistanceApplication.renewal.interval | Renewal interval | string | All |
| assistanceListingsData[].assistanceApplication.renewal.description | Renewal description | string | All |

---

#### Compliance

##### CFR, Reports, Audit

| Response Parameter | Description | Data Type | Data Specification Version |
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

##### Records & Documents

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].compliance.records.retentionPeriodType | Retention type | string | All |
| assistanceListingsData[].compliance.records.retentionPeriod | Retention period | integer | All |
| assistanceListingsData[].compliance.records.description | Records description | string | All |
| assistanceListingsData[].compliance.documents.isApplicable | Documents reference | uuid | All |
| assistanceListingsData[].compliance.documents.description | Documents description | string | All |

##### Formula & Matching

| Response Parameter                                                              | Description                       | Data Type | Data Specification Version |
|---------------------------------------------------------------------------------|-----------------------------------| --------- | ------------------- |
| assistanceListingsData[].compliance.formulaAndMatching                          | Formula and matching info         | object    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.isApplicable             | Formula and Mactching applicable  | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.formula            | Formula used flag                 | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.matching           | Matching required flag            | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.types.moe                | MOE used flag                     | boolean   | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.title            | Formula title                     | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.chapter          | Formula chapter                   | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.part             | Formula part                      | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.subPart          | Formula subpart                   | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.publicLaw        | Formula public law                | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.formula.description      | Formula description               | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.requirementFlag | Matching requirement flag         | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.percent         | Matching percent                  | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.matching.description     | Matching description              | string    | All                 |
| assistanceListingsData[].compliance.formulaAndMatching.moe.description          | MOE description                   | string    | All                 |

---

#### Contacts

##### Local

| Response Parameter | Description | Data Type | Data Specification Version |
|-------------------|------------|-----------|---------------------|
| assistanceListingsData[].contacts.local.flag | Local contact flag | string | v1.0                |
| assistanceListingsData[].contacts.local.officeLocationURL | Office URL | uri | v2.0                |
| assistanceListingsData[].contacts.local.description | Local description | string | v1.0                |

##### Headquarters

| Response Parameter | Description | Data Type | Data Specification Version |
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

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: <a href="assistance-listings-api/v1/assistance-listings-api.openapi.yaml">Open API specification file for the Assistance Listings API</a>


### Reference Data

#### Assistance Types (By Code)

This section lists the standardized assistance types organized by their corresponding codes.

---

##### Financial Assistance

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

##### Non-Financial Assistance

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
#### Eligible Award Applicant and Beneficiary Types

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

## Examples


### Example 1: Search by specific Assistance Listing ID

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&assistanceListingId=43.008 <br>
<br>
Alpha URL: https://api-alpha.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&assistanceListingId=10.080<br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output) v2</summary>

<p>
<code><pre>
{
    "totalRecords": 1,
    "pageSize": 10,
    "pageNumber": 1,
    "totalPages": 1,
    "assistanceListingsData": [
        {
            "version": "2.0",
            "status": "Active",
            "programId": "18aa264962af4fa0b73c40ab1f2f9202",
            "publishedDate": "2025-11-07T18:56:43.719+00:00",
            "assistanceListingId": "10.080",
            "title": "Milk Income Loss Contract Program ",
            "popularLongName": "(MILC)",
            "popularShortName": null,
            "relatedFederalAssistance": null,
            "federalOrganization": {
                "department": "AGRICULTURE, DEPARTMENT OF",
                "departmentCode": "1200",
                "agency": "FARM SERVICE AGENCY",
                "agencyCode": "12D2"
            },
            "programWebPage": "http://www.fsa.usda.gov",
            "overview": {
                "objective": "To maintain and expand existing markets for dairy which are vital to the welfare of milk producers in the United States. Payments under this program will be limited to dairy operations that produced milk in the United States and commercially marketed milk during the period of October 1, 2007 through September 30, 2013.",
                "assistanceListingDescription": "test",
                "fundedProjectsList": {
                    "isApplicable": false,
                    "list": []
                },
                "missionSubCategories": {
                    "primary": {
                        "code": "0001001",
                        "name": "Agricultural Resource Conservation and Development"
                    },
                    "other": []
                }
            },
            "authorizations": {
                "list": [
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": true,
                            "executiveOrder": false,
                            "publicLaw": true,
                            "statute": false,
                            "usc": true
                        },
                        "act": {
                            "title": "1",
                            "part": "E",
                            "section": "1506",
                            "description": "Food, Conservaton and Energy Act of 2008"
                        },
                        "executiveOrder": null,
                        "publicLaw": {
                            "congressCode": "110",
                            "number": "246",
                            "description": ""
                        },
                        "statute": null,
                        "usc": {
                            "title": "7",
                            "section": "7981-7982",
                            "description": ""
                        }
                    }
                ]
            },
            "financialInformation": {
                "isFundedCurrentFY": false,
                "additionalInformation": "testing",
                "obligations": [
                    {
                        "assistanceType": {
                            "code": "F001",
                            "name": "Grant"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A01",
                                "name": "Discretionary Award Amount Selection"
                            },
                            {
                                "code": "A03",
                                "name": "Mandatory Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R02",
                                "name": "Discretionary and Non-Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 2000.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 3000.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 3000.00
                            }
                        ]
                    }
                ],
                "rangeAndAverageAssistance": [
                    {
                        "fiscalYear": 2025,
                        "minimumAwardAmount": 200.00,
                        "maximumAwardAmount": 3000.00,
                        "averageAwardAmount": 4000.00
                    },
                    {
                        "fiscalYear": 2026,
                        "minimumAwardAmount": null,
                        "maximumAwardAmount": null,
                        "averageAwardAmount": null
                    }
                ],
                "accomplishments": {
                    "isApplicable": false,
                    "list": []
                },
                "accountsIdentificationList": [
                    {
                        "code": "12-4336-0-3-351",
                        "description": null
                    }
                ]
            },
            "criteriaForApplying": {
                "documentation": {
                    "isApplicable": true,
                    "description": [
                        "Before MILC contract payments are issued, all persons involved in a single dairy operation must provide evidence of eligible marketing.  Verifiable production evidence can include:  (1) milk marketing payment stubs, (2) tank records, (3) milk handler records, (4) daily milk marketing, and (5) copies of any payments received as compensation from other sources.",
                        "testing"
                    ]
                },
                "applicant": {
                    "types": [
                        {
                            "code": "ET59999",
                            "name": "Other"
                        }
                    ],
                    "description": "To be eligible, dairy producers must:  (1) have produced milk in the United States and commercially marketed the milk produced anytime during the period of October 1, 2007 through September 30, 2013; (2) enter into a MILC contract during the contract application period; (3) agree to all terms and conditions in the MILC contract and comply with instructions issued by the Commodity Credit Corporation; (4) provide proof of monthly milk production commercially marketed by all persons in the dairy operation during the contract period, to determine the total pounds of milk that will be converted to hundredweight (cwt.) used for payment; (5) submit timely production evidence according to Sec. 1430.209; (6) be actively engaged in the business of producing and marketing agricultural products at the time of signing the MIL contract; (7) certify compliance with highly erodible land and Wetland provisions; (8) be in compliance with average adjusted gross income limitations; and (9) comply with start month selection provisions."
                },
                "beneficiary": {
                    "isSameAsApplicant": false,
                    "types": [
                        {
                            "code": "ET11010",
                            "name": "Unrestricted by Entity Type"
                        }
                    ],
                    "description": "Eligible dairy producers are those who, beginning October 1, 2007 through September 30, 2013:  (1) commercially produce and market cow milk in the United States, or (2) produce milk in the United States and commercially market the milk outside the United States.  In addition, dairy producers from a foreign country who are admitted to the United States and have a valid taxpayer identification number are eligible for MILC contract benefits."
                },
                "assistanceUsage": {
                    "types": [
                        {
                            "code": "AD001",
                            "name": "Administrative Expenses"
                        }
                    ],
                    "description": "Each fiscal year, eligible dairy operations can receive a monthly payment based on monthly milk marketing, up to a maximum of 2.4 million pounds per dairy operation, for fiscal year October 1, 2007 through September 30, 2008.  Maximum eligible pounds increase to 2.985 million pounds from October 1, 2008 through August 31, 2013, except that the cap reduces back to 2.4 million pounds during the month of September, 2013.  Dairy operations who make changes to their producer status or who reconstitute their farm operations on or after October 1, 2007 for the sole purpose of receiving additional payments will not be eligible for the benefits under the program implemented by this rule."
                },
                "assistanceRestriction": {
                    "types": [
                        {
                            "code": "AD001",
                            "name": "Administrative Expenses"
                        }
                    ],
                    "description": "test"
                }
            },
            "assistanceApplication": {
                "deadlines": {
                    "value": "This Assistance Listing has deadline information",
                    "list": [
                        {
                            "start": "2007-10-01",
                            "end": "2013-09-30",
                            "description": null
                        }
                    ],
                    "description": "Please contact the program contact listed in the Information Contacts section below."
                },
                "preApplicationCoordination": {
                    "environmentalImpact": null,
                    "description": null
                },
                "applicationProcedure": {
                    "opportunityPostedLocation": null,
                    "opportunityPostedURL": null,
                    "location": null,
                    "description": null,
                    "url": null
                },
                "selectionCriteria": {
                    "isApplicable": false,
                    "description": null
                },
                "awardProcedure": {
                    "description": "The Price Support Division (PSD) in Washington DC is responsible for the implementation of the MILC program in county offices.  They will manage the contracts and determine the eligibility of monthly payments for each contract."
                },
                "payments": {
                    "list": [
                        {
                            "fundingDate": "2020-12-12",
                            "type": "Directive",
                            "frequency": "Semi-Annually",
                            "frequencyDescription": null,
                            "spendingPeriodType": "Months",
                            "spendingPeriod": 23,
                            "spendingPeriodDescription": "test"
                        }
                    ]
                },
                "approval": {
                    "interval": "Other",
                    "description": "From 1 to 60 days."
                },
                "appeal": {
                    "interval": "> 180 Days",
                    "description": "Any producer who is dissatisfied with a determination may request reconsideration or appeal of such determination under Part 11 or 780 of 7 CFR Part 1430."
                },
                "renewal": {
                    "interval": "Not Applicable",
                    "description": null
                }
            },
            "compliance": {
                "cfr200Requirements": {
                    "questions": [
                        {
                            "code": "subpartB",
                            "isSelected": false
                        },
                        {
                            "code": "subpartC",
                            "isSelected": false
                        },
                        {
                            "code": "subpartD",
                            "isSelected": false
                        },
                        {
                            "code": "subpartE",
                            "isSelected": true
                        },
                        {
                            "code": "subpartF",
                            "isSelected": true
                        }
                    ],
                    "description": ""
                },
                "reports": [
                    {
                        "code": "financial",
                        "frequency": [
                            "Quarterly"
                        ],
                        "description": "test"
                    },
                    {
                        "code": "progress",
                        "frequency": [
                            "Monthly"
                        ],
                        "description": "test"
                    },
                    {
                        "code": "other",
                        "frequency": [],
                        "description": ""
                    }
                ],
                "audit": {
                    "isApplicable": false,
                    "frequency": [],
                    "description": ""
                },
                "records": {
                    "retentionPeriodType": "Years",
                    "retentionPeriod": 23,
                    "description": "Producers approved for benefits under this program must maintain accurate records and accounts in order to document that they meet all eligibility requirements specified herein, as may be requested by the Commodity Credit Corporation or the Farm Service Agency.  Such records and accounts must be retained for 3 years after the date of payment to the dairy operation under this program.  Destruction of the records 3 years after the date of payment shall be the risk of the party undertaking the destruction."
                },
                "documents": {
                    "isApplicable": "true",
                    "description": ""
                },
                "additionalRequirements": [
                    {
                        "id": "dc3170b693a4429a8936026472a6fe13",
                        "url": "https://sam.gov",
                        "description": "test"
                    }
                ],
                "guidelinesAndInformation": [
                    {
                        "id": "903686f8a1504df9bacb11b0a9e11733",
                        "url": "https://sam.gov",
                        "description": "test"
                    },
                    {
                        "id": "479b85703d6343be92a3c3f30699a0f9",
                        "url": "https://sam.gov",
                        "description": "test124"
                    }
                ],
                "formulaAndMatching": {
                    "isApplicable": false,
                    "types": {
                        "formula": true,
                        "matching": true,
                        "moe": true
                    },
                    "formula": {
                        "title": "7",
                        "chapter": "CFR",
                        "part": "1430",
                        "subPart": "B",
                        "publicLaw": "110-246",
                        "description": "7"
                    },
                    "matching": {
                        "requirementFlag": "D",
                        "percent": "30",
                        "description": "test"
                    },
                    "moe": {
                        "description": "test"
                    }
                },
                "maps": {
                    "basis": [],
                    "usageList": [],
                    "areCBSADelineationsUsed": "no",
                    "currentCBSADelineationAdopted": {
                        "isSelected": null,
                        "historicalDelineationSelection": ""
                    }
                }
            },
            "contacts": {
                "local": {
                    "flag": "none",
                    "officeLocationURL": "https://sam.gov",
                    "description": "Consult the local phone directory for location of the nearest county FSA office.  If no listing, contact the appropriate State FSA office listed in the FSA section of Appendix IV of the Catalog, or on the Internet at http://www.fsa.usda.gov/edso/."
                },
                "headquarters": [
                    {
                        "contactId": "20ae21a5cc599b66634cc6d109e4e817",
                        "title": "Program Manager",
                        "fullName": "Danielle Cooke",
                        "email": "danielle.cooke@wdc.usda.gov",
                        "phone": "202-720-1919",
                        "fax": "202-690-3307",
                        "streetAddress": "Stop 0512, 1400 Independence Ave SW",
                        "city": "Washington",
                        "state": "DC",
                        "zip": "20250-0512",
                        "country": "US",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    },
                    {
                        "contactId": "869ae41df9c7b70849acc9ccf64d37f5",
                        "title": "",
                        "fullName": "Amy Mitchell",
                        "email": "Amy.Mitchell1@usda.gov",
                        "phone": "2027208954",
                        "fax": "",
                        "streetAddress": "USDA, FSA, Safety Net Division, 1400 Independence Ave SW Stop 0517",
                        "city": "Washington",
                        "state": "DC",
                        "zip": "20250",
                        "country": "US",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    }
                ]
            }
        }
    ]
}
</pre></code>
</p>
</details>

### Example 2: Search by Assistance Type codes, Status and Federal Organization code

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&assitanceTypes=F001,N003&Status=ACTIVE&pageSize=25&organizationCodes=4700&organizationLevel=Agency<br>
<br>
Alpha URL: https://api-alpha.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&assitanceTypes=F001,N003&Status=ACTIVE&pageSize=25&organizationCodes=4700&organizationLevel=Agency<br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output) v2</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
    "totalRecords": 65,
    "pageSize": 25,
    "pageNumber": 1,
    "totalPages": 3,
    "assistanceListingsData": [
        {
            "version": "2.0",
            "status": "Active",
            "programId": "9303061aa89341218fb4622a2e7988c3",
            "publishedDate": "2025-11-19T05:00:17.343+00:00",
            "assistanceListingId": "39.141",
            "title": "Test01_07212022_ALAdmin",
            "popularLongName": "Test01_07212022_ALAdmin",
            "popularShortName": null,
            "relatedFederalAssistance": null,
            "federalOrganization": {
                "department": "GENERAL SERVICES ADMINISTRATION",
                "departmentCode": "4700",
                "agency": "GENERAL SERVICES ADMINISTRATION",
                "agencyCode": "4700"
            },
            "programWebPage": "https://test.gov",
            "overview": {
                "objective": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif",
                "assistanceListingDescription": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif",
                "fundedProjectsList": {
                    "isApplicable": true,
                    "list": []
                },
                "missionSubCategories": {
                    "primary": {
                        "code": "0001001",
                        "name": "Agricultural Resource Conservation and Development"
                    },
                    "other": []
                }
            },
            "authorizations": {
                "list": [
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": false,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": true,
                            "usc": false
                        },
                        "act": null,
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": {
                            "volume": "1234",
                            "page": "1234",
                            "description": ""
                        },
                        "usc": null
                    },
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": false,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": true,
                            "usc": false
                        },
                        "act": null,
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": {
                            "volume": "123",
                            "page": "12345",
                            "description": "TEST"
                        },
                        "usc": null
                    }
                ]
            },
            "financialInformation": {
                "isFundedCurrentFY": true,
                "additionalInformation": "",
                "obligations": [
                    {
                        "assistanceType": {
                            "code": "F001",
                            "name": "Grant"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A02",
                                "name": "Formula Award Amount Selection"
                            },
                            {
                                "code": "A03",
                                "name": "Mandatory Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R02",
                                "name": "Discretionary and Non-Competitive Recipient Selection Award"
                            },
                            {
                                "code": "R03",
                                "name": "Non-Discretionary and Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 199.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 300.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 400.00
                            }
                        ]
                    },
                    {
                        "assistanceType": {
                            "code": "F001",
                            "name": "Grant"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A03",
                                "name": "Mandatory Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R03",
                                "name": "Non-Discretionary and Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 100.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 200.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 300.00
                            }
                        ]
                    }
                ],
                "rangeAndAverageAssistance": [
                    {
                        "fiscalYear": 2025,
                        "minimumAwardAmount": 100.00,
                        "maximumAwardAmount": 500.00,
                        "averageAwardAmount": 300.00
                    },
                    {
                        "fiscalYear": 2026,
                        "minimumAwardAmount": null,
                        "maximumAwardAmount": null,
                        "averageAwardAmount": null
                    }
                ],
                "accomplishments": {
                    "isApplicable": true,
                    "list": [
                        {
                            "fiscalYear": 2026,
                            "description": "TEST"
                        }
                    ]
                },
                "accountsIdentificationList": [
                    {
                        "code": "11-1111-1-1-111",
                        "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                    },
                    {
                        "code": "22-2222-2-2-222",
                        "description": ""
                    }
                ]
            },
            "criteriaForApplying": {
                "documentation": {
                    "isApplicable": true,
                    "description": [
                        "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                    ]
                },
                "applicant": {
                    "types": [
                        {
                            "code": "ET11020",
                            "name": "Unrestricted by Individual Type"
                        },
                        {
                            "code": "ET59999",
                            "name": "Other"
                        }
                    ],
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "beneficiary": {
                    "isSameAsApplicant": false,
                    "types": [
                        {
                            "code": "ET59999",
                            "name": "Other"
                        }
                    ],
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "assistanceUsage": {
                    "types": [
                        {
                            "code": "CN007",
                            "name": "New Construction"
                        }
                    ],
                    "description": "TEST"
                },
                "assistanceRestriction": {
                    "types": [
                        {
                            "code": "ZZ999",
                            "name": "Other"
                        }
                    ],
                    "description": "test"
                }
            },
            "assistanceApplication": {
                "deadlines": {
                    "value": "Deadlines do not apply",
                    "list": [],
                    "description": null
                },
                "preApplicationCoordination": {
                    "environmentalImpact": null,
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "applicationProcedure": {
                    "opportunityPostedLocation": null,
                    "opportunityPostedURL": null,
                    "location": null,
                    "description": null,
                    "url": null
                },
                "selectionCriteria": {
                    "isApplicable": false,
                    "description": null
                },
                "awardProcedure": {
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "payments": {
                    "list": [
                        {
                            "fundingDate": "2222-01-22",
                            "type": "Reimbursement",
                            "frequency": "Determined at Time of Award",
                            "frequencyDescription": null,
                            "spendingPeriodType": "Months",
                            "spendingPeriod": 23,
                            "spendingPeriodDescription": "TEST"
                        }
                    ]
                },
                "approval": {
                    "interval": "From 60 to 90 days",
                    "description": "TEST"
                },
                "appeal": {
                    "interval": "From 30 to 60 days",
                    "description": "TEST"
                },
                "renewal": {
                    "interval": "From 30 to 60 days",
                    "description": "TEST"
                }
            },
            "compliance": {
                "cfr200Requirements": {
                    "questions": [
                        {
                            "code": "subpartB",
                            "isSelected": false
                        },
                        {
                            "code": "subpartC",
                            "isSelected": false
                        },
                        {
                            "code": "subpartD",
                            "isSelected": false
                        },
                        {
                            "code": "subpartE",
                            "isSelected": true
                        },
                        {
                            "code": "subpartF",
                            "isSelected": false
                        }
                    ],
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "reports": [
                    {
                        "code": "progress",
                        "frequency": [
                            "Monthly"
                        ],
                        "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                    }
                ],
                "audit": {
                    "isApplicable": false,
                    "frequency": [],
                    "description": ""
                },
                "records": {
                    "retentionPeriodType": "Months",
                    "retentionPeriod": 55,
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "documents": {
                    "isApplicable": "true",
                    "description": ""
                },
                "additionalRequirements": [],
                "guidelinesAndInformation": [],
                "formulaAndMatching": {
                    "isApplicable": false,
                    "types": {
                        "formula": false,
                        "matching": true,
                        "moe": false
                    },
                    "formula": {
                        "title": "",
                        "chapter": "",
                        "part": "",
                        "subPart": "",
                        "publicLaw": "",
                        "description": ""
                    },
                    "matching": {
                        "requirementFlag": "mandatory",
                        "percent": "70",
                        "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                    },
                    "moe": {
                        "description": ""
                    }
                },
                "maps": {
                    "basis": [],
                    "usageList": [],
                    "areCBSADelineationsUsed": "no",
                    "currentCBSADelineationAdopted": {
                        "isSelected": null,
                        "historicalDelineationSelection": ""
                    }
                }
            },
            "contacts": {
                "local": {
                    "flag": "none",
                    "officeLocationURL": null,
                    "description": "The Long Island Sound Program: (1) implements the Long Island Sound Study (LISS) Comprehensive Conservation and Management Plan (CCMP); and (2) assists the states of Connecticut and New York and other public or nonprofit entities in implementation, research, planning, enforcement, and citizen involvement and education related to reducing pollution and improving the quality of the environment to sustain living resources in the Long Island Sound. Funding Priority - Fiscal Year 2022: To award assistance agreements that support the Long Island Sound Study (LISS) National Estuary Program. Section 119(d) of the Clean Water Act, as amended by America’s Water Infrastructure Act of 2018 Public Law No: 115-270, authorizes the Administrator to award grants to eligible entities to implement the LISS Comprehensive Conservation and Management Plan (CCMP), with special emphasis on implementation, research and planning, enforcement, and citizen involvement and education projects. The LISS management conference, with participants from state, interstate and regional environmental agencies, local governments and other public or nonprofit private agencies, research institutions and individuals, develops programs to protect and restore Long Island Sound. EPA also provides assistance through funds appropriated under Section 320 of the Clean Water Act (The National Estuary Program). The LISS program characterizes the problems in the estuary, determines relationships between pollutant loading and impacts on living resources, maintains a comprehensive plan recommending solutions to priority problems, and implements actions addressing priority problem areas. Activities focused on theme areas identified in the plan as requiring special attention, such as: clean waters and healthy watersheds; thriving habitats and abundant wildlife; sustainable and resilient communities; and sound science and inclusive management. Under the Bipartisan Infrastructure Law, Long Island Sound will receive $21.2 million for FY 2022 through CWA §119 and $909,800/year through CWA §320. These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable manner in communities across the Sound’s watershed. The focus will be on: 1) planning and implementation of infrastructure improvements to enhance water and habitat quality, including green infrastructure, essential equipment upgrades, transition to innovative septic systems and nitrogen reduction upgrades to wastewater treatment plants; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitable; 2) climate resilience and sustainability through implementation of the LISS 5-year Sustainable and Resilient Communities Work Plan, including community planning and implementation of living shorelines, wetland restoration, and flood These allocations are expected to continue for five years, through 2026. The LISS goal for BIL funding is to significantly improve Long Island Sound’s environmental health, climate resilience, and economic vitality in an equitableyefgywedfgsdfgsjdfuwesdhfsdjfhsduif"
                },
                "headquarters": [
                    {
                        "contactId": "7f98f82c61a245c5adef4b8b40bce73d",
                        "title": "",
                        "fullName": "test123",
                        "email": "aladmin.test@gsa.gov",
                        "phone": "1236547897",
                        "fax": "",
                        "streetAddress": "Test Street",
                        "city": "Georgetown",
                        "state": "TX",
                        "zip": "78626",
                        "country": "USA",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    }
                ]
            }
        },..
}
</pre></code>
</p>
</details>

### Example 3: Search by Applicant Types, Status and Published Date

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&status=ALL&pageSize=25&applicantTypes=ET21010&publishedDateFrom=2025-01-01&publishedDateTo=2026-01-01<br>
<br>
Alpha URL: https://api-alpha.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&status=ALL&pageSize=25&applicantTypes=ET21010&publishedDateFrom=2025-01-01&publishedDateTo=2026-01-01<br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output) v2</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
    "totalRecords": 7,
    "pageSize": 25,
    "pageNumber": 1,
    "totalPages": 1,
    "assistanceListingsData": [
        {
            "version": "2.0",
            "status": "Active",
            "programId": "3b09a5c9171e4f2390899f8fe7a4b95a",
            "publishedDate": "2025-12-30T05:00:02.100+00:00",
            "assistanceListingId": "10.078",
            "title": "Bioenergy Program",
            "popularLongName": "(BIO)",
            "popularShortName": null,
            "relatedFederalAssistance": null,
            "federalOrganization": {
                "department": "AGRICULTURE, DEPARTMENT OF",
                "departmentCode": "1200",
                "agency": "FARM SERVICE AGENCY",
                "agencyCode": "12D2"
            },
            "programWebPage": "https://www.gsa.gov",
            "overview": {
                "objective": "The goals of the Bioenergy Program are to encourage increased purchases of eligible commodities for the purpose of expanding production of such bioenergy and support new production capacity for such bioenergy.",
                "assistanceListingDescription": "TEST",
                "fundedProjectsList": {
                    "isApplicable": false,
                    "list": []
                },
                "missionSubCategories": {
                    "primary": {
                        "code": "0001001",
                        "name": "Agricultural Resource Conservation and Development"
                    },
                    "other": []
                }
            },
            "authorizations": {
                "list": [
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": true,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": false,
                            "usc": false
                        },
                        "act": {
                            "title": null,
                            "section": null,
                            "description": " Title IX, Section 9010, Farm Security and Rural Investment Act of 2002 and Section 5(e) of the CCC Charter Act, 15 U.S.C. 714c. \n"
                        },
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": null,
                        "usc": null
                    }
                ]
            },
            "financialInformation": {
                "isFundedCurrentFY": false,
                "additionalInformation": "TEST",
                "obligations": [
                    {
                        "assistanceType": {
                            "code": "F001",
                            "name": "Grant"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A01",
                                "name": "Discretionary Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R02",
                                "name": "Discretionary and Non-Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 5673.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 4567.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 78980.00
                            }
                        ]
                    }
                ],
                "rangeAndAverageAssistance": [
                    {
                        "fiscalYear": 2025,
                        "minimumAwardAmount": 567.00,
                        "maximumAwardAmount": 890.00,
                        "averageAwardAmount": 678.00
                    },
                    {
                        "fiscalYear": 2026,
                        "minimumAwardAmount": null,
                        "maximumAwardAmount": null,
                        "averageAwardAmount": null
                    }
                ],
                "accomplishments": {
                    "isApplicable": false,
                    "list": []
                },
                "accountsIdentificationList": [
                    {
                        "code": "12-4336-0-1-271",
                        "description": null
                    }
                ]
            },
            "criteriaForApplying": {
                "documentation": {
                    "isApplicable": true,
                    "description": [
                        "USDA will collect information from bioenergy producers that request payments under the Bioenergy Program as the Secretary may require to ensure that benefits are paid only to eligible bioenergy producers for eligible commodities.  Bioenergy producers seeking program payments will have to meet minimum requirements by providing information concerning the production of bioenergy.  Applicants must certify that they will abide by the Bioenergy Program Agreement's provisions.  This program is excluded from coverage under OMB Circular No. A-87."
                    ]
                },
                "applicant": {
                    "types": [
                        {
                            "code": "ET21010",
                            "name": "U.S. Federal Government"
                        }
                    ],
                    "description": "All bioenergy producers are eligible to participate in the program.  To participate, ethanol producers must provide USDA with evidence of increased production of bioenergy and increased purchase and utilization of agricultural commodities related to that increased production.  Biodiesel producers must provide evidence of production and purchase and utilization of agricultural commodities related to that production."
                },
                "beneficiary": {
                    "isSameAsApplicant": false,
                    "types": [
                        {
                            "code": "ET21010",
                            "name": "U.S. Federal Government"
                        }
                    ],
                    "description": "Bioenergy producers."
                },
                "assistanceUsage": {
                    "types": [
                        {
                            "code": "CC003",
                            "name": "Marketing, Advertising, and Public Relations"
                        }
                    ],
                    "description": "Bioenergy producers may increase their purchases of eligible commodities as compared to the previous fiscal year purchases and convert that commodity into increased commercial fuel grade ethanol and biodiesel production as compared to previous fiscal year ethanol and biodiesel production.  The Program defines eligible commodities as barley, corn, grain sorghum, oats, rice, wheat, soybeans, sunflower seed, canola, crambe, rapeseed, safflower, sesame seed, flaxseed, mustard seed, and cellulosic crops, such as switchgrass and short rotation trees, grown on farms, for the purpose of producing ethanol and/or biodiesel or any other commodity or commodity by-product as determined and announced by CCC used in ethanol and biodiesel production which is produced in the United States and its territories."
                },
                "assistanceRestriction": {
                    "types": [
                        {
                            "code": "AD001",
                            "name": "Administrative Expenses"
                        }
                    ],
                    "description": null
                }
            },
            "assistanceApplication": {
                "deadlines": {
                    "value": "Deadlines do not apply",
                    "list": [],
                    "description": "Please contact the program contact listed in the Information Contacts section below or Headquarters office."
                },
                "preApplicationCoordination": {
                    "environmentalImpact": null,
                    "description": null
                },
                "applicationProcedure": {
                    "opportunityPostedLocation": null,
                    "opportunityPostedURL": null,
                    "location": null,
                    "description": null,
                    "url": null
                },
                "selectionCriteria": {
                    "isApplicable": false,
                    "description": null
                },
                "awardProcedure": {
                    "description": "None."
                },
                "payments": {
                    "list": [
                        {
                            "fundingDate": "2026-12-23",
                            "type": "Reimbursement",
                            "frequency": "Monthly",
                            "frequencyDescription": "TEST",
                            "spendingPeriodType": "Months",
                            "spendingPeriod": 78,
                            "spendingPeriodDescription": "TEST"
                        }
                    ]
                },
                "approval": {
                    "interval": "Not Applicable",
                    "description": "From 1 to 30 days."
                },
                "appeal": {
                    "interval": "Not Applicable",
                    "description": "Any participant who is subject to an adverse determination may appeal the determination by filing a written request with the Deputy Administrator at the following address:  Deputy Administrator, Commodity Operations, Farm Service Agency, Department of Agriculture, STOP 0550, 1400 Independence Avenue, S.W., Washington, DC 20250-0550.  To receive consideration, the participant must file the appeal within 30 days after written notice of the decision, which is the subject of the appeal, is mailed or otherwise made available to the participant.  An appeal shall be considered to have been filed when personally delivered in writing to the Deputy Administrator or when the properly addressed request, postage paid, is postmarked.  The Deputy Administrator may accept and act upon an appeal even though it is not timely filed if, in the judgement of the Deputy Administrator, circumstances warrant such action."
                },
                "renewal": {
                    "interval": "Not Applicable",
                    "description": null
                }
            },
            "compliance": {
                "cfr200Requirements": {
                    "questions": [
                        {
                            "code": "subpartB",
                            "isSelected": false
                        },
                        {
                            "code": "subpartC",
                            "isSelected": false
                        },
                        {
                            "code": "subpartD",
                            "isSelected": false
                        },
                        {
                            "code": "subpartE",
                            "isSelected": false
                        },
                        {
                            "code": "subpartF",
                            "isSelected": false
                        }
                    ],
                    "description": ""
                },
                "reports": [
                    {
                        "code": "progress",
                        "frequency": [
                            "Monthly"
                        ],
                        "description": "TEST"
                    }
                ],
                "audit": {
                    "isApplicable": false,
                    "frequency": [],
                    "description": ""
                },
                "records": {
                    "retentionPeriodType": "Months",
                    "retentionPeriod": 1,
                    "description": "Bioenergy producers or any other individual or entity receiving payments for Bioenergy Program shall maintain and retain financial books and records which will permit verification of all transactions for at least 3 years, following the end of the calendar year in which payments were received."
                },
                "documents": {
                    "isApplicable": "true",
                    "description": ""
                },
                "additionalRequirements": [],
                "guidelinesAndInformation": [],
                "formulaAndMatching": {
                    "isApplicable": false,
                    "types": {
                        "formula": true,
                        "matching": false,
                        "moe": false
                    },
                    "formula": {
                        "title": "TEST",
                        "chapter": "5",
                        "part": "4",
                        "subPart": "7",
                        "publicLaw": "8",
                        "description": "TEST"
                    },
                    "matching": {
                        "requirementFlag": null,
                        "percent": null,
                        "description": ""
                    },
                    "moe": {
                        "description": ""
                    }
                },
                "maps": {
                    "basis": [],
                    "usageList": [],
                    "areCBSADelineationsUsed": "no",
                    "currentCBSADelineationAdopted": {
                        "isSelected": null,
                        "historicalDelineationSelection": ""
                    }
                }
            },
            "contacts": {
                "local": {
                    "flag": "none",
                    "officeLocationURL": null,
                    "description": ""
                },
                "headquarters": [
                    {
                        "contactId": "869ae41df9c7b70849acc9ccf64d37f5",
                        "title": "",
                        "fullName": "Amy Mitchell",
                        "email": "Amy.Mitchell1@usda.gov",
                        "phone": "2027208954",
                        "fax": "",
                        "streetAddress": "USDA, FSA, Safety Net Division, 1400 Independence Ave SW Stop 0517",
                        "city": "Washington",
                        "state": "DC",
                        "zip": "20250",
                        "country": "US",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    },
                    {
                        "contactId": "869ae41df9c7b70849acc9ccf64d37f5",
                        "title": "",
                        "fullName": "Amy Mitchell",
                        "email": "Amy.Mitchell1@usda.gov",
                        "phone": "2027208954",
                        "fax": "",
                        "streetAddress": "USDA, FSA, Safety Net Division, 1400 Independence Ave SW Stop 0517",
                        "city": "Washington",
                        "state": "DC",
                        "zip": "20250",
                        "country": "US",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    }
                ]
            }
        },..
}
</pre></code>
</p>
</details>

### Example 4: Search by Applicant Types, Beneficiary Types, Status, Federal Organization code and Published Date

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&status=Active&pageSize=10&organizationCodes=47QXLA&organizationLevel=Office&applicantTypes=ET21010&publishedDateFrom=2025-01-01&beneficiaryTypes=ET11020<br>
<br>
Alpha URL: https://api-alpha.sam.gov/assistance-listings/v1/search?api_key={User’s Public API Key}&status=Active&pageSize=10&organizationCodes=47QXLA&organizationLevel=Office&applicantTypes=ET21010&publishedDateFrom=2025-01-01&beneficiaryTypes=ET11020<br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output) v2</summary>

<p>
<code><pre>
{
    "totalRecords": 1,
    "pageSize": 10,
    "pageNumber": 1,
    "totalPages": 1,
    "assistanceListingsData": [
        {
            "version": "2.0",
            "status": "Active",
            "programId": "eea804ef04f348eca2f2de7a63ef5b73",
            "publishedDate": "2025-12-29T21:35:48.062+00:00",
            "assistanceListingId": "39.58U",
            "title": "NOVEMBER 13 2025 ALPHA PROGRAM TITLE",
            "popularLongName": "PROGRAM POPULAR NAME - LONG",
            "popularShortName": "PROGRAM POPULAR NAME - SHORT",
            "relatedFederalAssistance": [
                "14.117 - Mortgage Insurance Homes",
                "12.431 - Basic Scientific Research"
            ],
            "federalOrganization": {
                "department": "GENERAL SERVICES ADMINISTRATION",
                "departmentCode": "4700",
                "agency": "FEDERAL ACQUISITION SERVICE",
                "agencyCode": "4732",
                "office": "FAS/OFFICE REG COMMISSIONER/BRANCHA",
                "officeCode": "47QXLA"
            },
            "programWebPage": "http://www.sam.gov",
            "overview": {
                "objective": "123",
                "assistanceListingDescription": "assistance listing description up to 4000 characters",
                "fundedProjectsList": {
                    "isApplicable": true,
                    "list": [
                        {
                            "fiscalYear": 2025,
                            "description": "partially funded"
                        },
                        {
                            "fiscalYear": 2026,
                            "description": "unfunded"
                        }
                    ]
                },
                "missionSubCategories": {
                    "primary": {
                        "code": "0001006",
                        "name": "Forestry"
                    },
                    "other": [
                        {
                            "code": "0003011",
                            "name": "Fire Protection"
                        },
                        {
                            "code": "0006004",
                            "name": "Disaster Relief"
                        },
                        {
                            "code": "0006002",
                            "name": "Flood Prevention and Control"
                        },
                        {
                            "code": "0007025",
                            "name": "Work Education"
                        }
                    ]
                }
            },
            "authorizations": {
                "list": [
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": true,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": false,
                            "usc": true
                        },
                        "act": {
                            "title": "Act",
                            "part": "part",
                            "section": "sec",
                            "description": "Act #1"
                        },
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": null,
                        "usc": {
                            "title": null,
                            "section": null,
                            "description": ""
                        }
                    },
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": true,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": false,
                            "usc": false
                        },
                        "act": {
                            "title": "act title",
                            "part": "123",
                            "section": "sec 4",
                            "description": "Act #2"
                        },
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": null,
                        "usc": null
                    },
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": true,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": false,
                            "usc": false
                        },
                        "act": {
                            "title": "title act",
                            "part": "act part 1",
                            "section": "act sec 2",
                            "description": "Act #3"
                        },
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": null,
                        "usc": null
                    },
                    {
                        "parentAuthorizationId": null,
                        "authorizationTypes": {
                            "act": false,
                            "executiveOrder": false,
                            "publicLaw": false,
                            "statute": false,
                            "usc": true
                        },
                        "act": null,
                        "executiveOrder": null,
                        "publicLaw": null,
                        "statute": null,
                        "usc": {
                            "title": "78967888",
                            "section": "TEST123",
                            "description": "TEST567"
                        }
                    }
                ]
            },
            "financialInformation": {
                "isFundedCurrentFY": false,
                "additionalInformation": "TEST",
                "obligations": [
                    {
                        "assistanceType": {
                            "code": "F001",
                            "name": "Grant"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A01",
                                "name": "Discretionary Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R01",
                                "name": "Discretionary and Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 100.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 200.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 300.00
                            }
                        ]
                    },
                    {
                        "assistanceType": {
                            "code": "F002",
                            "name": "Cooperative Agreement"
                        },
                        "awardAmountBasis": [
                            {
                                "code": "A02",
                                "name": "Formula Award Amount Selection"
                            }
                        ],
                        "awardRecipientBasis": [
                            {
                                "code": "R03",
                                "name": "Non-Discretionary and Competitive Recipient Selection Award"
                            }
                        ],
                        "values": [
                            {
                                "year": 2024,
                                "actual": 200.00,
                                "estimate": null
                            },
                            {
                                "year": 2025,
                                "actual": 300.00,
                                "estimate": null
                            },
                            {
                                "year": 2026,
                                "actual": null,
                                "estimate": 400.00
                            }
                        ]
                    }
                ],
                "rangeAndAverageAssistance": [
                    {
                        "fiscalYear": 2025,
                        "minimumAwardAmount": 100.00,
                        "maximumAwardAmount": 10000.00,
                        "averageAwardAmount": 500.00
                    },
                    {
                        "fiscalYear": 2026,
                        "minimumAwardAmount": null,
                        "maximumAwardAmount": 10000.00,
                        "averageAwardAmount": 5000.00
                    }
                ],
                "accomplishments": {
                    "isApplicable": true,
                    "list": [
                        {
                            "fiscalYear": 2025,
                            "description": "2025"
                        },
                        {
                            "fiscalYear": 2026,
                            "description": "2026"
                        }
                    ]
                },
                "accountsIdentificationList": [
                    {
                        "code": "11-1111-1-1-111",
                        "description": "added"
                    }
                ]
            },
            "criteriaForApplying": {
                "documentation": {
                    "isApplicable": true,
                    "description": [
                        "500000000000 characters fewer than 5"
                    ]
                },
                "applicant": {
                    "types": [
                        {
                            "code": "ET21010",
                            "name": "U.S. Federal Government"
                        }
                    ],
                    "description": "some may apply"
                },
                "beneficiary": {
                    "isSameAsApplicant": false,
                    "types": [
                        {
                            "code": "ET11020",
                            "name": "Unrestricted by Individual Type"
                        }
                    ],
                    "description": "not all may benefit"
                },
                "assistanceUsage": {
                    "types": [
                        {
                            "code": "CC002",
                            "name": "Publication and Printing"
                        }
                    ],
                    "description": "used funding may be award how describe"
                },
                "assistanceRestriction": {
                    "types": [
                        {
                            "code": "UN001",
                            "name": "Unrestricted Use"
                        }
                    ],
                    "description": "no any restrictions how funding on award used may be."
                }
            },
            "assistanceApplication": {
                "deadlines": {
                    "value": "Assistance listing administering agency organizational unit establishes deadlines",
                    "list": [
                        {
                            "start": "2020-10-01",
                            "end": "2020-11-01",
                            "description": "add desc"
                        },
                        {
                            "start": "1800-12-12",
                            "end": "1800-12-12",
                            "description": null
                        }
                    ],
                    "description": "I have added multiple deadlines"
                },
                "preApplicationCoordination": {
                    "environmentalImpact": null,
                    "description": "required"
                },
                "applicationProcedure": {
                    "opportunityPostedLocation": "Grants.gov",
                    "opportunityPostedURL": null,
                    "location": "NOFO",
                    "description": null,
                    "url": null
                },
                "selectionCriteria": {
                    "isApplicable": true,
                    "description": "des"
                },
                "awardProcedure": {
                    "description": "desc"
                },
                "payments": {
                    "list": [
                        {
                            "fundingDate": "2000-12-12",
                            "type": "Reimbursement",
                            "frequency": "Monthly",
                            "frequencyDescription": null,
                            "spendingPeriodType": "Months",
                            "spendingPeriod": 3,
                            "spendingPeriodDescription": "TEST"
                        }
                    ]
                },
                "approval": {
                    "interval": "Other",
                    "description": "optional?"
                },
                "appeal": {
                    "interval": "From 30 to 60 days",
                    "description": "optional?"
                },
                "renewal": {
                    "interval": "From 1 to 15 days",
                    "description": "optional?"
                }
            },
            "compliance": {
                "cfr200Requirements": {
                    "questions": [
                        {
                            "code": "subpartB",
                            "isSelected": false
                        },
                        {
                            "code": "subpartC",
                            "isSelected": false
                        },
                        {
                            "code": "subpartD",
                            "isSelected": true
                        },
                        {
                            "code": "subpartE",
                            "isSelected": false
                        },
                        {
                            "code": "subpartF",
                            "isSelected": false
                        }
                    ],
                    "description": ""
                },
                "reports": [
                    {
                        "code": "other",
                        "frequency": [
                            "Semi-Annually"
                        ],
                        "description": ""
                    }
                ],
                "audit": {
                    "isApplicable": true,
                    "frequency": [
                        "Semi-Annual"
                    ],
                    "description": "not applicable is not selected"
                },
                "records": {
                    "retentionPeriodType": "Years",
                    "retentionPeriod": 6,
                    "description": "Records description has been provided"
                },
                "documents": {
                    "isApplicable": "true",
                    "description": ""
                },
                "additionalRequirements": [
                    {
                        "id": "d88c20ac4c1d42be8941cb6f03616428",
                        "url": "http://url.net",
                        "description": "ACRD"
                    }
                ],
                "guidelinesAndInformation": [
                    {
                        "id": "e5da02b213684121846ac2d891a0aaad",
                        "url": "http://gov.sam.gov",
                        "description": "information and and guidelines"
                    }
                ],
                "formulaAndMatching": {
                    "isApplicable": false,
                    "types": {
                        "formula": false,
                        "matching": true,
                        "moe": false
                    },
                    "formula": {
                        "title": "",
                        "chapter": "",
                        "part": "",
                        "subPart": "",
                        "publicLaw": "",
                        "description": ""
                    },
                    "matching": {
                        "requirementFlag": "D",
                        "percent": "1",
                        "description": "desc"
                    },
                    "moe": {
                        "description": ""
                    }
                },
                "maps": {
                    "basis": [],
                    "usageList": [],
                    "areCBSADelineationsUsed": "no",
                    "currentCBSADelineationAdopted": {
                        "isSelected": null,
                        "historicalDelineationSelection": ""
                    }
                }
            },
            "contacts": {
                "local": {
                    "flag": null,
                    "officeLocationURL": "ftp://123.2",
                    "description": null
                },
                "headquarters": [
                    {
                        "contactId": "f65055dfa41248109ec34cfe8e49d4c9",
                        "title": "",
                        "fullName": "name",
                        "email": "name@address.biz",
                        "phone": "1111111111",
                        "fax": "2222222222",
                        "streetAddress": ".",
                        "city": "Reston",
                        "state": "VA",
                        "zip": "20191",
                        "country": "USA",
                        "subdivisionCode": null,
                        "subdivisionName": null
                    }
                ]
            }
        }
    ]
}
</pre></code>
</p>
</details>

## HTTP Response Codes

HTTP Response Code | Description 
----- | ----- 
200 | Successful
400 | Bad Request 
401 | Unauthorized
404 | No Data found
500 | Internal Server Error 

## Error Messages

Error Code| Error Message                                                                    | Reason/Description                                                          
----------|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------
401| An invalid API key was supplied. Please submit with a valid API key              | 	API Key is not provided or is invalid.                                     
400| pageSize and pageNumber values must be greater than zero                         | Invlaid Page number or Page size is provided                                
400| PageSize must less than or equal to 100                                          | Page Size value is out of acceptable range; must less than or equal to 100. 
400| Core Based Statistical Delineations parameter must be either Y or N              | Core Based Statistical Delineations value provided is invalid.                 
400| Status must be either 'ACTIVE', 'INACTIVE', or 'ALL'                             | Status value provided is invalid.                                           |                                 
400| Organization Level must be one of these values: 'Department', 'Agency', or 'Office' | Organization Level value provided is invalid.                               | 
500| Error occurred while searching assistance listings                                 | Any system error encountered while retreieving the assistance listings data for the user's request.                                           

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

## Change Log

Date | Version | Description
------|---------|---------
01/27/2026 | v1.0    | Base Version

<p><small><a href="#">Back to top</a></small></p>