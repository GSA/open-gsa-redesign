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
* https://api.sam.gov/v1/assistance-listings

**Alpha:**
* https://api-alpha.sam.gov/v1/assistance-listings

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

Request Parameter | Description | Required| Data Type | Applicable Versions
----- | ----- | ---- |-----| -----
api_key	| Public Key of users	| Yes| 	String | v1
status|	Status of the assistance listing. Possible values: "Active", "Inactive"|	No| 	String | v1
assistanceListingId| Assistance listing ID (Program Number)| No | String | v1
publishedDate| Published date of the assistance listing (ISO 8601 format)<br>Format must be YYYY-MM-DDTHH:MM:SSZ <br>	|No| 	String | v1
fiscalYear|Fiscal year (e.g., 2023)	|No	| Integer | v1
assistanceTypes|	 types of assistance| 	No| 	String[] | v1
beneficiaryTypes|	 types of beneficiaries|	No| String[] | v1
applicantTypes|	 types of applicants|	No| 	String[] | v1
limit	|The number of listings to retrieve per page. This field must be a number <br> Max Value = 1000. Default limit value is 10| No| Int | v1
offset	|Indicates the page index. Default offset starts with 0 |No|	Int | v1


### Response Parameters

Response Parameters | Description | Required | Data Type | Applicable Versions
----- | ----- | ---- |-----| -----
totalRecords | Total number of matching records | Yes | integer | v1
limit | Limit value used in this response | Yes | integer | v1
offset | Offset value used in this response | Yes | integer | v1
assistanceListingsData | Array of assistance listing objects | Yes | AssistanceListing[] | v1
assistanceListingsData.version | Version of the program | No | string | v1
assistanceListingsData.status | Status of the program (\"Active\" or \"Inactive\") | No | string | v1
assistanceListingsData.fiscalYear | Fiscal year for the listing | No | integer | v1
assistanceListingsData.publishedDate | Published date (ISO 8601) | No | string | v1
assistanceListingsData.assistanceListingId | Program number (CFDA ID) | No | string | v1
assistanceListingsData.title | Program title | No | string | v1
assistanceListingsData.popularLongName | Alternative long name | No | string | v1
assistanceListingsData.popularShortName | Alternative short name | No | string | v1
assistanceListingsData.relatedFederalAssistance | Related program IDs | No | string[] | v1
assistanceListingsData.federalOrganization | Federal organization information | No | Object | v1
assistanceListingsData.federalOrganization.department | Department name | No | string | v1
assistanceListingsData.federalOrganization.subTier | Sub-tier name | No | string | v1
assistanceListingsData.federalOrganization.office | Office name | No | string | v1
assistanceListingsData.programWebPage | URL to program website | No | string | v1
assistanceListingsData.overview | Overview object (objective, description, funded projects, codes, subjects) | No | Object | v1
assistanceListingsData.overview.objective | Program objective | No | string | v1
assistanceListingsData.overview.assistanceListingDescription | Program description | No | string | v1
assistanceListingsData.overview.fundedProjectsList.isApplicable | Whether funded projects apply | No | boolean | v1
assistanceListingsData.overview.fundedProjectsList.list.fiscalYear | Funded project fiscal year | No | integer | v1
assistanceListingsData.overview.functionalCodes.code | Functional code | No | string | v1
assistanceListingsData.overview.missionSubCategories.Primary.code | Primary mission code | No | string | v1
assistanceListingsData.authorizations | Authorizations object (description and list) | No | Object | v1
assistanceListingsData.authorizations.list.authorizationTypes | Authorization types flags | No | Object | v1
assistanceListingsData.financialInformation | Financial information object (obligations, ranges, accounts) | No | Object | v1
assistanceListingsData.financialInformation.isFundedCurrentFY | Funded in current fiscal year | No | boolean | v1
assistanceListingsData.financialInformation.obligations.assistanceType | Assistance type for obligations | No | Object | v1
assistanceListingsData.financialInformation.rangeAndAverageAssistance.minimumAwardAmount | Minimum award amount | No | number | v1
assistanceListingsData.criteriaForApplying | Criteria for applying (documentation, applicant, beneficiary, usage, restrictions) | No | Object | v1
assistanceListingsData.assistanceApplication | Application details (deadlines, procedure, payments, renewal, appeal) | No | Object | v1
assistanceListingsData.assistanceApplication.deadlines.value | Deadline flag/value | No | string | v1
assistanceListingsData.assistanceApplication.payments.list.type | Payment type | No | string | v1
assistanceListingsData.compliance | Compliance information (CFR200, reports, audit, records, documents) | No | Object | v1
assistanceListingsData.compliance.CFR200Requirements.questions.code | CFR subpart code | No | string | v1
assistanceListingsData.contacts | Contacts object (local and headquarters) | No | Object | v1
assistanceListingsData.contacts.local.flag | Local contact flag | No | string | v1
assistanceListingsData.contacts.headquarters.contactId | Contact UUID | No | uuid | v1
assistanceListingsData.contacts.headquarters.fullName | Contact full name | No | string | v1
assistanceListingsData.contacts.headquarters.email | Contact email | No | string | v1
assistanceListingsData.contacts.headquarters.phone | Contact phone | No | string | v1
assistanceListingsData.contacts.headquarters.fax | Contact fax | No | string | v1
assistanceListingsData.contacts.headquarters.title | Contact title | No | string | v1
assistanceListingsData.additionalInformation | Additional information object (website, instructions, publications) | No | Object | v1
assistanceListingsData.additionalInformation.website | Additional website URL | No | string | v1
assistanceListingsData.additionalInformation.instructions | Additional instructions | No | string | v1
assistanceListingsData.additionalInformation.publications.title | Publication title | No | string | v1
assistanceListingsData.additionalInformation.publications.url | Publication URL | No | string | v1
assistanceListingsData.assistanceTypes | Assistance types array | No | string[] | v1
assistanceListingsData.applicantTypes | Applicant types array | No | string[] | v1
assistanceListingsData.beneficiaryTypes | Beneficiary types array | No | string[] | v1