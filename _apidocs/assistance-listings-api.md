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
* https://api.sam.gov/assistance-listings/v1/search (coming soon)

**Alpha:**
* https://api-alpha.sam.gov/assistance-listings/v1/search

### User Requirements

* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key.Request a public API key from your SAM.gov user account on the Account Details page. If using the Alpha environment API, get your API key from your alpha.SAM.gov user account. Get a Production environment API key from your SAM.gov user account.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

#### User Account API Key Creation

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

## API Description
The Assistance Listings API offers the following search parameters that can be provided independently or in combination with each other.

### Request Parameters

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


### Response Parameters

Response Parameter | Description                                        | Required | Data Type           | Applicable Versions
----- |----------------------------------------------------| ---- |---------------------| -----
totalRecords | Total Records                                      | Yes | Number              | v1
pageSize | Page size                                          | Yes | Number              | v1
page | Page Number                                        | Yes | Number              | v1
totalPages | Total Pages                                        | Yes | Number              | v1
assistanceListingsData | Array of assistance listing objects                | Yes | AssistanceListing[] | v1
assistanceListingsData.version | Data version                                       | No | String              | v1
assistanceListingsData.status | Status of the program (\"Active\" or \"Inactive\") | No | String              | v1
assistanceListingsData.fiscalYear | Fiscal year for the listing                        | No | Number              | v1
assistanceListingsData.publishedDate | Published date (ISO 8601)                          | No | String              | v1
assistanceListingsData.assistanceListingId | Program number (CFDA ID)                           | No | String              | v1
assistanceListingsData.title | Program title                                      | No | String              | v1
assistanceListingsData.popularLongName | Alternative long name                              | No | String              | v1
assistanceListingsData.popularShortName | Alternative short name                             | No | String              | v1
assistanceListingsData.relatedFederalAssistance | Related program IDs                                | No | String[]            | v1
assistanceListingsData.federalOrganization | Federal organization information                   | No | JSON object         | v1
assistanceListingsData.federalOrganization.department | Department Name                                    | No | String              | v1
assistanceListingsData.federalOrganization.departmentCode | Department Code (FPDS code)                        | No | String              | v1
assistanceListingsData.federalOrganization.agency| Agency Name                                        | No | String              | v1
assistanceListingsData.federalOrganization.agencyCode| Agency Code (FPDS code)                            | No | String              | v1
assistanceListingsData.federalOrganization.office | Office name                                        | No | String              | v1
assistanceListingsData.federalOrganization.office | Office Code (AAC code)                             | No | String              | v1
assistanceListingsData.programWebPage | URL to program website                                                           | No | String              | v1
assistanceListingsData.overview | Overview object (objective, description, funded projects, codes, subjects)       | No | JSON Object         | v1
assistanceListingsData.overview.objective | Program objective                                                                | No | String              | v1
assistanceListingsData.overview.assistanceListingDescription | Program description                                                              | No | String              | v1
assistanceListingsData.overview.fundedProjectsList.isApplicable | Whether funded projects apply                                                    | No | boolean             | v1
assistanceListingsData.overview.fundedProjectsList.list.fiscalYear | Funded project fiscal year                                                       | No | integer             | v1
assistanceListingsData.overview.functionalCodes.code | Functional code                                                                  | No | string              | v1
assistanceListingsData.overview.missionSubCategories.Primary.code | Primary mission code                                                             | No | string              | v1
assistanceListingsData.authorizations | Authorizations object (description and list)                                     | No | Object              | v1
assistanceListingsData.authorizations.list.authorizationTypes | Authorization types flags                                                        | No | Object              | v1
assistanceListingsData.financialInformation | Financial information object (obligations, ranges, accounts)                     | No | Object              | v1
assistanceListingsData.financialInformation.isFundedCurrentFY | Funded in current fiscal year                                                    | No | boolean             | v1
assistanceListingsData.financialInformation.obligations.assistanceType | Assistance type for obligations                                                  | No | Object              | v1
assistanceListingsData.financialInformation.rangeAndAverageAssistance.minimumAwardAmount | Minimum award amount                                                             | No | number              | v1
assistanceListingsData.criteriaForApplying | Criteria for applying (documentation, applicant, beneficiary, usage, restrictions) | No | Object              | v1
assistanceListingsData.assistanceApplication | Application details (deadlines, procedure, payments, renewal, appeal)            | No | Object              | v1
assistanceListingsData.assistanceApplication.deadlines.value | Deadline flag/value                                                              | No | string              | v1
assistanceListingsData.assistanceApplication.payments.list.type | Payment type                                                                     | No | string              | v1
assistanceListingsData.compliance | Compliance information (CFR200, reports, audit, records, documents)              | No | Object              | v1
assistanceListingsData.compliance.CFR200Requirements.questions.code | CFR subpart code                                                                 | No | string              | v1
assistanceListingsData.contacts | Contacts object (local and headquarters)                                         | No | Object              | v1
assistanceListingsData.contacts.local.flag | Local contact flag                                                               | No | string              | v1
assistanceListingsData.contacts.headquarters.contactId | Contact UUID                                                                     | No | uuid                | v1
assistanceListingsData.contacts.headquarters.fullName | Contact full name                                                                | No | string              | v1
assistanceListingsData.contacts.headquarters.email | Contact email                                                                    | No | string              | v1
assistanceListingsData.contacts.headquarters.phone | Contact phone                                                                    | No | string              | v1
assistanceListingsData.contacts.headquarters.fax | Contact fax                                                                      | No | string              | v1
assistanceListingsData.contacts.headquarters.title | Contact title                                                                    | No | string              | v1
assistanceListingsData.additionalInformation | Additional information object (website, instructions, publications)              | No | Object              | v1
assistanceListingsData.additionalInformation.website | Additional website URL                                                           | No | string              | v1
assistanceListingsData.additionalInformation.instructions | Additional instructions                                                          | No | string              | v1
assistanceListingsData.additionalInformation.publications.title | Publication title                                                                | No | string              | v1
assistanceListingsData.additionalInformation.publications.url | Publication URL                                                                  | No | string              | v1
assistanceListingsData.assistanceTypes | Assistance types array                                                           | No | string[]            | v1
assistanceListingsData.applicantTypes | Applicant types array                                                            | No | string[]            | v1
assistanceListingsData.beneficiaryTypes | Beneficiary types array                                                          | No | string[]            | v1

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

