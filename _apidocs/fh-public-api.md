---
title: Beta.SAM.Gov Federal Hierarchy Public API 
banner-heading: Beta.SAM.Gov Federal Hierarchy Public API 
---

## Overview

Federal Hierarchy public API allows non-federal users to obtain Federal Organization details. As part of this API, organization information for first 2 levels (Departments/Ind. Agency and SubTier) is provided by default. 

*Note : The term “organization” as used in the Federal Hierarchy FOUO API denotes any Departments/Independent Agencies and Sub-Tiers*

This API will return both active and inactive organizations. The API supports pagination with a default of 10 records and a max 100 records. 

**API Version: v1.0**



## Getting Started

Get Opportunities API can be accessed from Beta or Alpha via the following environments:

*Note: Please refer the examples below to format right request URLs.*

* Production URL: https://api.sam.gov/prod/federalorganizations/v1/
* Staging URL: https://api-alpha.sam.gov/prodlike/federalorganizations/v1

## Authentication and API Keys
User of this public API must provide an API key to use this Opportunities public API. Request per day are limited based on the federal or non-federal or general roles. 

Note: 
* For production, users can request an API Key in their Profile under Account Details on https://beta.sam.gov/
* For prodlike, users can request an API Key in their Profile under Account Details on https://alpha.sam.gov/


#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on beta.sam.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.


## Federal Hierarchy Public API Request Parameters

### For Request URI: /orgs?api_key=[key] 

* Users can search on any of the following fields.
* None of these fields are mandatory.
* Results will be sorted on level & fhorgname in ascending order. 

**Table 1: FH Public API Request Parameters For request URL**

Request Parameters that API accepts | Description |Data Type
-----|-----|-----
fhorgid |Unique ID for an organization in Federal Hierarchy| Text 
fhorgname| Name of an organization in Federal Hierarchy. This name is specific to Federal Hierarchy.|Text
status| Status of the Organization: <br> Active <br> Inactive |Text 
fhorgtype| Type of an organization in Federal Hierarchy <br> Valid values are : <br> Department/Ind. agency <br> Sub-Tier | Text
agencycode| Identifier that represents either a department or a sub-tier created in the Federal Procurement Data System (FPDS). | Text
oldfpdsofficecode| Office code for offices created before 04/01/2016 in FPDS. |Text 
cgac |Common Government-wide Accounting Classification (CGAC) Agency Code. This field can accommodate multiple, comma separated values. <br><br> Note: This API only supports one CGAC per record at this time. In a future version, this API will be enhanced to support multiple CGACs.|Text 
fhparentorgname |Federal Hierarchy Parent Organization name for the current record. |Text
updatedby| User who updated an organization’s details, e.g. Federal Hierarchy administrator. <br><br>Note: Currently, this field shows a combination of system name and user’s first and last name. In future, this field will display first and last name of a federal hierarchy administrator updating the details using the Federal Hierarchy tool.|Text
updateddatefrom| A field to specify the starting range of updated date of an organization Format should be YYYY-MM-DD |Date
updateddateto |A field to specify the end range of updated date of an organization Format should be YYYY-MM-DD |Date
createdby |User who created an organization in the Federal Hierarchy, e.g. Federal Hierarchy Administrator.<br><br> Note: Currently, this field shows a combination of system name and user’s first and last name. In future, this field will display first and last name of a federal hierarchy administrator updating the details using Federal Hierarchy tool.|Text
createddatefrom| A field to specify the starting range of created date of an organization Format should be YYYY-MM-DD|Date
createddateto| A field to specify the end range of created date of an organization Format should be YYYY-MM-DD |Date
limit |Total number of records to be retrieved per page. This field must be a positive number equal to 100 or less. If this field is not provided, the default pagesize is 10. Maximum supported page size will be 100. |Number
offset| Indicates the page index. Default offset starts with 0. |Number

###  For Request URL: /org/hierarchy?orgkey=[orgkey]&api_key=[key] 

* Users can retrieve immediate next level hierarchy organizations for the respective
organization.
* Results will be sorted on level and fhorgname in ascending order. 

**Table 2: FH Public API Request Parameters For request URL**

Request Parameters that API accepts | Description |Data Type
-----|-----|-----
fhorgid| Unique ID for an organization in Federal Hierarchy. Mandatory to bring its children; Returns status 400 if children not available |Text
limit| Total number of records to be retrieved per page. This field must be a number. If this field is not provided, by default page size is 10. Maximum supported page size will be 100.|Number
offset| Indicates the page index. Default offset starts with 0. |Number

### Federal Hierarchy Public API Response Parameters 

Based on the request parameters, API provides below response parameters. 

Request Parameters that API accepts | Description |Data Type
-----|-----|-----
totalrecords |Total number of records in the response |Number
fhorgid| Unique ID for an organization in Federal Hierarchy.  |Text
fhorgname| Name of an organization in Federal Hierarchy. This name is specific to Federal Hierarchy.|Text
status| Status of the Organization: <br> Active <br> Inactive |Text 
fhorgtype| Type of an organization in Federal Hierarchy <br> Valid values are : <br> Department/Ind. agency <br> Sub-Tier | Text
agencycode| Identifier that represents either a department or a sub-tier created in the Federal Procurement Data System (FPDS). | Text
oldfpdsofficecode| Office code for offices created before 04/01/2016 in FPDS. |Text 
cgaclist| An array of Common Government-wide Accounting Classification (CGAC) Agency Codes. This field can accommodate multiple, comma separated values. <br><br> Note: This API only supports one CGAC per record at this time. In a future version, this API will be enhanced to return multiple CGACs per record. |Text 
lastupdateddate| Date the organization was last updated in the Federal Hierarchy.|Date
createdby| User who created the organization, e.g. the Federal Hierarchy Administrator. |Text 
updatedby| User who updated an organization’s details, e.g. Federal Hierarchy administrator.|Text
createddate| Date the organization was created in the Federal Hierarchy.|Date 
fhdeptindagencyorgid|Federal Hierarchy Identifier of a Department/Ind. agency to which the current record belongs to. |Text
fhagencyorgname| Name of a department/Ind. agency in Federal Hierarchy to the current record belongs to.| Text
fhorgnamehistory| An array of the current organization name, the date when this name became effective, previous name/s (if available) and date when that name became effective. <br><br>Note: This data may not be currently available in the FH for all records. |Array
fhorgname| Current and/or previous name of an organization in the Federal Hierarchy. |Text
effectivedate| Date when the organization was created and the office became effective in the Federal Hierarchy.|Text 
fhorgparenthistory| An array of full parent id, full parent path name and the date when this full parent became effective. This array contains details about current parent and also the previous parents before the organization moved. <br><br> Note: Data for moved organizations is currently not available in the FH. |Array
fhfullparentpathid| ID of the full parent path for an organization. For example, a sub-tier would have a path of <Org id of parent department>.<Org id of parent sub-tier> |Text 
fhfullparentpathname |Name of the full parent path for an organization. Example for this field a sub-tier is <Org name of parent department>.<Org name of parent sub-tier>|Text 
effectivedate| Date when the current name or previous names became effective. Currently this field is mapped to the start date of an organization. <br><br> Note: Data for moved organization is currently not available in the FH.| Date 
fhorgmergehistory| This is an array containing details about organizations that were merged into the organization. This array contains fhorgid, fhorgname, aaccode, cgaclist, agencycode and effectivedate of the merges. <br><br> Note: This data is currently not available in FH.|Array 
fhorgid| Unique ID for an organization in Federal Hierarchy pre-merge. <br><br> Note: This data is currently not available in the FH. |Text 
fhorgname| Name of an organization in Federal Hierarchy pre-merge. This name is specific to the Federal Hierarchy. <br><br>Note: This data is currently not available in FH.|Text 
cgaclist| An array of CGACs. If the departments get merged, only this field shows up; agencycode fields will not show up. This is specific to pre-merge.|Text 
agencycode| Identifier that represents either a department or a sub-tier created in FPDS. This is specific to pre-merge. If the sub-tiers get merged, only this field and cgaclist show up|Text
effectivedate| Date when the merge became effective in the Federal Hierarchy.| Date 
links| This is an array consisting of <br>1) “rel: self” which is a self-link to the
Organization itself <br> 2) “rel: nextLevelChildren” which is a link to the next level of the Organization’s |hierarchy

## Examples

### Example response schema structure 

*Note: Below response is given as an example that shows all the response fields with
dummy data. Please refer to examples covered in 4.2, 4.3 and 4.4 for the actual response
from this API*

<details>
    <summary>Response Schema Structure</summary>

<p>
<code><pre>
{
 "totalrecords": 35,
 "orglist": [
{
 "fhorgid": 100525425,
 "fhorgname": "AFRICAN DEVELOPMENT FUND",
 "fhorgtype": "Sub-Tier",
 "status": "ACTIVE",
 "createdby": "FPDSADMIN",
 "createddate": "2005-07-21 00:00",
 "updatedby": "FH_Job",
 "lastupdateddate": "2018-07-05 14:22",
 "fhdeptindagencyorgid": 100041854,
 "fhagencyorgname": "EXECUTIVE OFFICE OF THE PRESIDENT",
 "agencycode": "11DB",
 "oldfpdsofficecode": "11DB",
 "cgaclist": [
 {
 "cgac": "011"
 }
 ],
 "fhorgnamehistory": [ 
Federal Hierarchy Public API

 8
 {
 "fhorgname": "AFRICAN DEVELOPMENT FUND",
 "effectivedate": "2003-06-07 00:00"
 }
 ],
 "fhorgparenthistory": [
 {
 "fhfullparentpathid": "100041854.100525425",
 "fhfullparentpathname": "EXECUTIVE OFFICE OF THE
PRESIDENT.AFRICAN DEVELOPMENT FUND",
 "effectivedate": "2003-06-07 00:00"
 }
 ],
 "links": [
 {
 "rel": "self",
 "href": "https://api-nonprod.prodiae.bsp.gsa.gov/comp/federalorganizations/v1/orgs?fhorgid=100525425"
 }
 ]
 }
} 
</pre></code>
</p>
</details>

### Example 1: Search by organization name 

Request URL:

https://apialpha.sam.gov/prodlike/federalorganizations/v1/orgs?limit=10&api_key={User’s Public
API Key}&fhorgname=DEVELOPMENT

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

*Note: By default, 10 records will be returned unless otherwise specified with a max limit 100 records. Response for one record is provided as an example* <br>

<p>
<code><pre>
{
 "totalrecords": 35,
 "orglist": [
 {
 "fhorgid": 100148640,
 "fhorgname": "AGENCY FOR INTERNATIONAL DEVELOPMENT", 
 "fhorgtype": "Department/Ind. Agency",
 "status": "ACTIVE",
 "createddate": "2005-07-21 00:00",
 "lastupdateddate": "2006-03-31 00:00",
 "fhdeptindagencyorgid": 100148640,
 "fhagencyorgname": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
 "agencycode": "7200",
 "oldfpdsofficecode": "7200",
 "cgaclist": [
 {
 "cgac": "072"
 }
 ],
 "fhorgnamehistory": [
 {
 "fhorgname": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
 "effectivedate": null
 }
 ],
 "fhorgparenthistory": [
 {
 "fhfullparentpathid": "100148640",
 "fhfullparentpathname": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
 "effectivedate": null
 }
 ],
 "links": [
 {
 "rel": "self",
 "href": "https://apialpha.sam.gov/prodlike/federalorganizations/v1/orgs?fhorgid=100148640"
 },
 {
 "rel": "nextlevelchildren",
 "href": "https://apialpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?fhorgid=100148640"
 }
 ]
 }, 
 </pre></code>
</p>
</details>

### Example 2: Search for an active organization of type Sub-Tier 

Request URL:

https://apialpha.sam.gov/prodlike/federalorganizations/v1/orgs?limit=10&api_key={User’s Public
API Key}&status=active&fhorgtype=Sub-Tier

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

*Note: By default, 10 records will be returned unless otherwise specified with a max limit 100 records. Response for one record is provided as an example* <br>

<p>
<code><pre>
{
 "totalrecords": 1021,
 "orglist": [
 {
 "fhorgid": 300000352,
 "fhorgname": "ACADEMIC IMPROVEMENT AND TEACHER QUALITY
PROGRAMS",
 "fhorgtype": "Sub-Tier",
 "status": "ACTIVE",
 "createdby": "IAE_DATA_TEAM",
 "createddate": "2017-10-11 14:09",
 "fhdeptindagencyorgid": 100001616,
 "fhagencyorgname": "EDUCATION, DEPARTMENT OF",
 "agencycode": "9147",
 "cgaclist": [
 {
 "cgac": "091"
 }
 ],
 "fhorgnamehistory": [
 {
 "fhorgname": "ACADEMIC IMPROVEMENT AND TEACHER QUALITY
PROGRAMS",
 "effectivedate": null
 }
 ],
 "fhorgparenthistory": [
 {
 "fhfullparentpathid": "100001616.300000352",
 "fhfullparentpathname": "EDUCATION, DEPARTMENT OF.ACADEMIC
IMPROVEMENT AND TEACHER QUALITY PROGRAMS",
 "effectivedate": null
 }
 ],
 "links": [ 
 {
 "rel": "self",
 "href": "https://api-alpha.sam.gov/prodlike
/federalorganizations/v1/orgs?fhorgid=300000352"
 }
 ]
 }, 
 </pre></code>
</p>
</details>

###  Example 3: Get hierarchy for an organization 

Request URL:

https://apialpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?limit=10&api_key={User’s Public API Key}&fhorgid=100006688

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

<p>
<code><pre>
{
 "totalrecords": 1,
 "orglist": [
 {
 "fhorgid": 100006688,
 "fhorgname": "GENERAL SERVICES ADMINISTRATION",
 "fhorgtype": "Department/Ind. Agency",
 "status": "ACTIVE",
 "createddate": "2003-06-11 00:00",
 "lastupdateddate": "2003-06-11 00:00",
 "fhdeptindagencyorgid": 100006688,
 "fhagencyorgname": "GENERAL SERVICES ADMINISTRATION",
 "agencycode": "4700",
 "oldfpdsofficecode": "4700",
 "cgaclist": [
 {
 "cgac": "047"
 }
 ],
 "fhorgnamehistory": [
 {
 "fhorgname": "GENERAL SERVICES ADMINISTRATION", 
 "effectivedate": null
 }
 ],
 "fhorgparenthistory": [
 {
 "fhfullparentpathid": "100006688",
 "fhfullparentpathname": "GENERAL SERVICES ADMINISTRATION",
 "effectivedate": null
 }
 ],
 "links": [
 {
 "rel": "self",
 "href": " https://apialpha.sam.gov/prodlike/federalorganizations/v1/orgs?fhorgid=100006688"
 },
 {
 "rel": "nextlevelchildren",
 "href": " https://apialpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?fhorgid=100006688"
 }
 ]
 }
 ]
} 
 </pre></code>
</p>
</details>

## HTTP Response Codes

* 200 - Success
* 404 – No Data found
* 400 – Bad Request
* 500 – Internal Server Error

## Error Messages

Scenario | Error Messages
-----| -----
User enters an invalid date format| Invalid date entered. Expected format YYYY-MM-DD 
User enters an invalid value for status |Status value must be either Active/Inactive 
For limit or offset, user inputs characters/special characters| Limit and offset must be positive number

## FAQ


## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log

Date | Version | Description
------|---------------|---------
9/10 | v1.0 | Base Version

<p><small><a href="#">Back to top</a></small></p>