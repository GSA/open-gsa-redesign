---
title: Beta.SAM.Gov FH FOUO API
banner-heading: Beta.SAM.Gov FH FOUO API
---

## Overview

The Federal Hierarchy “For Official Use Only” (FOUO) API allows U.S. Government users to obtain Federal Organization details down to the office level. As part of this API, organization information for all levels (Departments/Sub-Tiers/Offices) is provided by default.

**Note**: *The term “organization” as used in the Federal Hierarchy FOUO API denotes any Departments/Independent Agencies, Sub-Tiers, Offices, or major commands/sub-commands under the Department of Defense (DOD).*

This API can return both active and inactive organizations. The API supports pagination with a default of 10 records and a max of 100 records.

**API Version: v1.0**

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Get Opportunities API can be accessed from Beta or Alpha via the following environments:

*Note: Please refer the examples below to format right request URLs.*

* Production (Beta) URL: https://api.sam.gov/prod/federalorganizations/v1/
* Staging (Alpha) URL: https://api-alpha.sam.gov/prodlike/federalorganizations/v1

<p><small><a href="#">Back to top</a></small></p>

## Terms of Use

You are allowed to use the Federal Hierarchy FOUO API for internal, U.S. Government business purposes. You are not allowed to display or disseminate outside the U.S. Government any values received in a Federal Hierarchy FOUO API response unless that value is directly associated with a Federal award record.

For financial assistance awards only, you are allowed to use the awarding and funding Activity Address Codes (AACs) submitted in association with a financial assistance award to derive the respective Office Name, Sub-Tier Agency Code, Sub-Tier Agency Name, Department/Independent Agency Code, and Department/Independent Agency Name from the Federal Hierarchy FOUO API. You may publicly display and disseminate the awarding and funding AACs, and the five specified Federal Hierarchy FOUO API-derived values from those AACs, in connection with the financial assistance awards.

You may not use the Federal Hierarchy FOUO API to build out a public view of either the partial or complete Federal Hierarchy. You must use the Federal Hierarchy Public API if you wish to display or disseminate the public-facing Department and Sub-Tier information.

You agree to be bound by these Terms of Use when you submit a Federal Hierarchy FOUO API request as well as when you receive a Federal Hierarchy FOUO API response. Contact the GSA IAE Program Management Office at newsamtesting@gsa.gov if you have any questions about these Terms of Use.

<p><small><a href="#">Back to top</a></small></p>

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

<p><small><a href="#">Back to top</a></small></p>

## Federal Hierarchy FOUO API Request Parameters

### For Request URL /orgs?api_key=[key]

* Users can search on any of the following fields
* None of these fields are mandatory
* Results will be sorted on level & fhorgname in ascending order

**Table 1: FH FOUO API Request Parameters**

Request Parameters that API accepts	| Description | Data Type
----- | ----- | ----- 
fhorgid|	Unique ID for an organization in the Federal Hierarchy|	Text
fhorgname|Name of an organization in Federal Hierarchy. This name is specific to the Federal Hierarchy. |	Text
status	|Status of the Organization in the Federal Hierarchy:<br> - Active <br> - Inactive|	Text
fhorgtype	|Type of an Organization in Federal Hierarchy:<br> - Department/Ind. Agency <br>- Sub-Tier <br>- Major Command <br>- Sub Command <br> - Office <br><br> *Note: Users can search by this field by providing exact words or even partial words since searching for ‘fhorgtype’ is like search, not an exact search. So if user enters ‘depart’ in ‘fhorgtype’ field, user will get results for ‘Department/Ind. Agency’ fhorgtype.* |	Text
region|	Region of an organization |	Text
level|	Level of an organization: <br> 1 = Department/Ind. Agency <br>  2 = Sub-Tier <br> 3 = Office / Major Command for DoD <br> 4 = Office / Sub-Command 1 for DoD <br> 5 = Office / Sub-Command 2 for DoD <br> 6 = Office / Sub-Command 3 for DoD <br> 7 = Office|	Number
agencycode|	Identifier that represents either a department or a sub-tier created in the Federal Procurement Data System (FPDS). For offices, users will see the sub-tier’s Agency Code.	|Text
oldfpdsofficecode	|Office code for offices created before 04/01/2016 in FPDS.	|Text
cgac	|Common Government-wide Accounting Classification (CGAC) Agency Code. This field can accommodate multiple, comma separated values. | 	Text
searchby|	Field for users to search by state code, country code, city; Search by values must be either state code, country code, or city | 	Text
q |	Field for users to specify the search term. This field can only be used in combination with searchby. |	Text
aacofficecode	|Activity Address Code (AAC) for an office.	|Text
startdatefrom	|Field to specify the starting range of the start date of an organization. Format must be YYYY-MM-DD.	|Date
startdateto|	Field to specify the end range of the start date of an organization. Format must be YYYY-MM-DD.	|Date
enddatefrom	|Field to specify the starting range of the end date of an organization. Format must be YYYY-MM-DD.	|Date
enddateto	|Field to specify the end range of the end date of an organization. Format must be YYYY-MM-DD.|	Date
officetype|	Type of an office. The following office types are available in the Federal Hierarchy FOUO API: <br>-	Contracting <br>-	Funding <br>-	Grant <br> <br> *Note: Users can search by this field by providing exact words or even partial words since searching for an ‘officetype’ is like search, not an exact search. So if user enters ‘fund’ in ‘officetype’ field, user will get results for ‘Funding’ officetype.* |	Text
officetypestartdatefrom	|Field to specify the starting range of the start date of an office type. Format must be YYYY-MM-DD.|	Date
officetypestartdateto|	Field to specify the end range of the start date of an office type. Format must be YYYY-MM-DD.|	Date
officetypeenddatefrom	|Field to specify the starting range of the end date of an office type. Format must be YYYY-MM-DD.|	Date
officetypeenddateto	|Field to specify the end range of the end date of an office type. Format must be YYYY-MM-DD.	|Date
updatedby	|User who updated an organization’s details, e.g. Federal Hierarchy administrator.  <br> *Note: Currently, this field shows a combination of system name and user’s first and last name. In future, this field will display first and last name of a federal hierarchy administrator updating the details using the Federal Hierarchy tool.* 	|Text
updateddatefrom|	Field to specify the starting range of the updated date of an organization. Format must be YYYY-MM-DD.	|Date
updateddateto|	Field to specify the end range of the updated date of an organization. Format must be YYYY-MM-DD.	|Date
createdby|	User who created an organization in the Federal Hierarchy, e.g. Federal Hierarchy Administrator. <br><br> *Note: Currently, this field shows a combination of system name and user’s first and last name. In future, this field will display first and last name of a federal hierarchy administrator updating the details using Federal Hierarchy tool.*	|Text
createddatefrom	|Field to specify the starting range of the created date of an organization. Format must be YYYY-MM-DD.|	Date
createddateto|	Field to specify the end range of the created date of an organization. Format must be YYYY-MM-DD.	|Date
limit|	Total number of records to be retrieved per page. This field must be a positive number equal to 100 or less. If this field is not provided, the default page size is 10. Maximum supported page size will be 100.	|Number
offset	|Indicates the record index. Default offset starts with 0 i.e. offset=0 and limit=10 signifies 0-10 records. offset=5 and limit=10 signifies records from 5th to 15.	|Number

### For Request URL /org/hierarchy?orgkey=[orgkey]&api_key=[key]
* Users can retrieve immediate next level hierarchy organizations for the respective organization.
* Results will be sorted on level and fhorgname in ascending order.

**Table 2: FH FOUO API Request Parameters**

Request Parameters that API accepts	| Description | Data Type
----- | ----- | ----- 
fhorgid|	Unique ID for an organization in the Federal Hierarchy. Mandatory to bring its children. Returns status 400 if children are not available| 	Text
limit|	Total number of records to be retrieved per page. This field must be a positive number. If this field is not provided, the default page size is 10. Maximum supported page size will be 100.|	Number
offset|	Indicates the record index. Default offset starts with 0 i.e. offset=0 and limit=10 signifies 0-10 records. offset=5 and limit=10 signifies records from 5th to 15.	|Number

<p><small><a href="#">Back to top</a></small></p>

## Federal Hierarchy FOUO Response Parameters

Based on the request parameters, API provides below response parameters.

**Table 3: FH FOUO API Response Parameters**

Request Parameters that API accepts	| Description | Data Type
----- | ----- | ----- 
totalrecords|	Total number of records in the response.|	Number 
fhorgid	|Unique ID for an organization in the Federal Hierarchy.	|Text 
fhorgname	|Name of an organization in the Federal Hierarchy. This name is specific to the Federal Hierarchy.	|Text
fhorgtype |	Type of an Organization in Federal Hierarchy: <br> - Department/Ind. Agency <br> - Sub-Tier <br> - Major Command  <br> - Sub Command <br> - Office	|Text
description 	|Description of the Organization.|	Text
level| 	Level (1-7) of the Organization in the hierarchy: <br> 1 = Department/Ind. Agency<br> 2 = Sub-Tier<br>3 = Office / Major Command for DoD<br>4 = Office / Sub-Command 1 for DoD<br>5 = Office / Sub-Command 2 for DoD<br>6 = Office / Sub-Command 3 for DoD<br>7 = Office|	Number
status|	Status of the Organization in the Federal Hierarchy: <br> - Active <br> - Inactive	|Text
region|	Region of an organization.|	Text
categoryid|	Category of the Organization per FPDS. Values are CAT-1, CAT-2, CAT-3, CAT-4, CAT-5, and CAT-6. <br><br> *Note: This field is same as level field.*| 	Text
effectivestartdate	|Start Date of an organization in the Federal Hierarchy. <br><br> *Note: For organization legacy data, there are instances where there is no effective start date or end date provided. So, for such legacy data, effectivestartdate and effectiveenddate appear as null. However, for new organizations created using beta.sam.gov UI, start date is mandatory. So, in future such null dates will not appear for new organizations created using beta.sam.gov UI.*	|Date
effectiveenddate|	Date when the organization will no longer be active in the Federal Hierarchy. <br><br> *Note: For organization legacy data, there are instances where there is no effective start date or end date provided. So, for such legacy data, effectivestartdate and effectiveenddate appear as null. However, for new organizations created using beta.sam.gov UI, start date is mandatory. So, in future such null dates will not appear for new organizations created using beta.sam.gov UI.*|	Date
createdby	|User who created the organization, e.g. the Federal Hierarchy Administrator. 	|Text
createddate	|Date the organization was created in the Federal Hierarchy. 	|Date
updatedby|	User who updated the organization’s details, e.g. the Federal Hierarchy Administrator.|	Text
lastupdateddate	|Date the organization was last updated in the Federal Hierarchy.	|Date
fhdeptindagencyorgid |	Federal Hierarchy unique identifier of the Department/Ind. agency to which the current record belongs.	|Text
fhagencyorgname|	Name of the Department/Ind. agency in the Federal Hierarchy to which the current record belongs. 	|Text
agencycode|	Identifier that represents either a department or a sub-tier created in FPDS.| 	Text
oldfpdsofficecode	|Office code for offices created before 04/01/2016 in FPDS.	|Text
aacofficecode	|Activity Address Code (AAC) for an office.|	Text
cgaclist|	An array of Common Government-wide Accounting Classification (CGAC) Agency Codes. This field can accommodate multiple, comma separated values. |Array
fhorgofficetypelist|	An Array of office types for an office consisting of officetype, officetypestartdate and officetypeenddate for each of the office types.	|Array
officetype|	Type of an office. Currently there are the following office types available in the Federal Hierarchy FOUO API: <br> -	Contracting <br> -	Funding <br> -	Grant <br><br>*Note: In future if the office type names change, the API will bring back the latest office types names from FH DB* |	Text
officetypestartdate	|Start date of an office type. Format is YYYY-MM-DD. |	Date
officetypeenddate|	End date of an office type. Format is YYYY-MM-DD.	|Date
fhorgaddresslist	|An array of address elements for an organization consisting of city, state, country_code, and address type.	|Array
city |	City	|Text
state |	2-character state code|	Text
country_code	|3-character country code|	Text
addresstype	|Type of address: M for Mailing|	Text
fhorgnamehistory	|An array of the current organization                   name, the date when this name became effective, previous name/s (if available) and date when that name became effective. <br><br> *Note: This data may not be currently available in the FH for all records.* |	Array
fhorgname|	Current and/or previous name of an organization in the Federal Hierarchy.	|Text
effectivedate|	Date when the organization was created and the office became effective in the Federal Hierarchy.|	Text
fhorgparenthistory	|An array of full parent id, full parent path name and the date when this full parent became effective.  This array contains details about current parent and also the previous parents before the organization moved. <br><br> *Note: Data for moved organizations is currently not available in the FH.* | 	Array
fhfullparentpathid|	ID of the full parent path for an organization.  For example, an office would have a path of <Org id of parent department>.<Org id of parent sub-tier>. <Org id of the actual office>	|Text
fhfullparentpathname|	Name of the full parent path for an organization. Example for this field an office is <Org name of parent department>.<Org name of parent sub-tier>. <Org name of the actual office>|	Text
effectivedate	|Date when the current name or previous names became effective. Currently this field is mapped to the start date of an organization. <br><br> *Note: Data for moved organization is currently not available in the FH.*|	Date
fhorgmergehistory|	This is an array containing details about organizations that were merged into the organization. This array contains fhorgid, fhorgname, aaccode, cgaclist, agencycode and effectivedate of the merges. <br><br> *Note: This data is currently not available in FH.*| 	Array
fhorgid	|Unique ID for an organization in Federal Hierarchy pre-merge. <br><br> *Note: This data is currently not available in the FH.*| 	Text
fhorgname|	Name of an organization in Federal Hierarchy pre-merge. This name is specific to the Federal Hierarchy.  <br><br> *Note: This data is currently not available in FH.*|	Text
aaccode|	Activity Address Code (AAC) for an office pre-merge. This value will only be returned for offices.  If offices get merged, this field will show up along with cgaclist and agencycode. <br><br> *Note: This data is currently not available in FH.*|	Text
cgaclist |	An array of CGACs. If the departments get merged, only this field shows up; aaccode and agencycode fields will not show up. 
This is specific to pre-merge.  |	Text
agencycode|	Identifier that represents either a department or a sub-tier created in FPDS. This is specific to pre-merge. If the sub-tiers get merged, only this field and cgaclist show up; aaccode will not show up	|Text
effectivedate|	Date when the merge became effective in the Federal Hierarchy.| 	Date
links	|This is an array consisting of <br> 1)	“rel: self” which is a self-link to the Organization itself <br> 2)	“rel: nextLevelChildren” which is a link to the next level of the Organization’s hierarchy |

<p><small><a href="#">Back to top</a></small></p>

## Examples

### Example Response Schema Structure

*Note: Below response is given as an example that shows all the response fields with dummy data*

<details>
    <summary>Response (JSON Output)</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
  "totalRecords": 25543,
  "limit": 10,
  "offset": 1,
  "opportunitiesData": [
    {
      "noticeId": "ea55e45cded123fd8d6afd7c061138f0",
      "title": "Judge Rice Courtroom Lighting Project",
      "solicitationNumber": "EQ5P2SS2P1-18-0005",
      "department": null,
      "subTier": null,
      "office": null,
      "postedDate": "2018-05-09 23:45:22+00",
      "type": "Presolicitation",
      "baseType": "Presolicitation",
      "archiveType": "manual",
      "archiveDate": null,
      "typeOfSetAsideDescription": null,
      "typeOfSetAside": "7",
      "responseDeadLine": null,
      "naicsCode": "236220",
      "classificationCode": "Z",
      "active": "Yes",
      "award": null,
      "pointOfContact": [
        {
          "fax": null,
          "type": "primary",
          "email": "jordan.waldschmidt@gsa.gov",
          "phone": "312-385-3050",
          "title": "Contract Specialist",
          "fullName": "Jordan Waldschmidt"
        },
        {
          "fax": null,
          "type": "secondary",
          "email": "johanna.nieves@gsa.gov",
          "phone": "312.758.2467",
          "title": "Contracting Officer",
          "fullName": "Johanna Nieves"
        }
      ],
      "description": " https://api-alpha.sam.gov/prodlike /opportunities/v1/noticedesc?noticeid=ea55e45cded123fd8d6afd7c061138f0",
      "organizationType": null,
      "officeAddress": null,
      "placeOfPerformance": {
        "streetAddress": "Dayton Federal Building and US Courthouse\r\n200 West Second Street",
        "city": {
          "code": "21000",
          "name": "21000"
        },
        "state": {
          "code": "OH"
        },
        "zip": "45402",
        "country": {
          "code": "USA"
        }
      },
      "additionalInfoLink": null,
      "uiLink": "https://alpha.sam.gov/opp/ea55e45cded123fd8d6afd7c061138f0",
      "links": [
        {
          "rel": "self",
          "href": " https://api-alpha.sam.gov/prodlike/opportunities/v1/search?noticeid=ea55e45cded123fd8d6afd7c061138f0&limit="
        }
      ]
    }
</pre></code>
</p>
</details>

### Example 1: Search by Organization Name

Request URL: <br> https://api-alpha.sam.gov/prodlike/federalorganizations/v1/orgs?limit=10&api_key={User’s API Key}&fhorgname=DEVELOPMENT&level=1

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

*Note: By default, 10 records will be returned unless otherwise specified with a max limit 100 records. Response for one record is provided as an example* <br>

<p>
<code><pre>
{
  "totalrecords": 5,
  "orglist": [
    {
      "fhorgid": 100148640,
      "fhorgname": "AGENCY FOR INTERNATIONAL DEVELOPMENT",
      "fhorgtype": "Department/Ind. Agency",
      "description": "To promote transformational development in less-developed and selected middle-income countries. Transformational development brings far-reaching, fundamental changes in governance and institutional capacity, human capacity, and economic structure. Such development helps a county sustain further economic and social progress without depending on foreign aid. The goal of achieving transformational development pertains to stable developing countries which have significant need for concessional assistance and are committed to promoting economic freedom, ruling justly, and investing in people.",
      "level": 1,
      "status": "ACTIVE",
      "categoryid": "CAT-1",
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
      "fhorgaddresslist": [
        {
          "city": "",
          "state": "",
          "country_code": "US",
          "addresstype": "M"
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
          "href": "https://api-alpha.sam.gov/prodlike/federalorganizations/v1/orgs?fhorgid=100148640"
        },
        {
          "rel": "nextlevelchildren",
          "href": " https://api-alpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?fhorgid=100148640"
        }
      ]
    }
</pre></code>
</p>
</details>

### Example 2: Search for an Office Type of a Grant

Request URL: <br> https://api-alpha.sam.gov/prodlike/federalorganizations/v1/orgs?limit=10&api_key={User’s API Key}&status=active&officetype=grant

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

*Note: By default, 10 records will be returned unless otherwise specified with a max limit 100 records. Response for one record is provided as an example* <br>

<p>
<code><pre>
{
  "totalrecords": 158,
  "orglist": [
    {
      "fhorgid": 500026649,
      "fhorgname": "Agricultural Management Assistance",
      "fhorgtype": "OFFICE",
      "level": 3,
      "status": "ACTIVE",
      "effectivestartdate": "2018-06-29 15:12",
      "createdby": "FH_Job",
      "createddate": "2018-06-29 15:12",
      "updatedby": "FH_Job",
      "lastupdateddate": "2018-06-29 15:12",
      "fhdeptindagencyorgid": 100006809,
      "fhagencyorgname": "AGRICULTURE, DEPARTMENT OF",
      "agencycode": "12C3",
      "aacofficecode": "12346K",
      "cgaclist": [
        {
          "cgac": "12"
        }
      ],
      "fhorgofficetypelist": [
        {
          "officetype": "Grant",
          "officetypestartdate": "2018-06-29 15:12",
          "officetypeenddate": null
        }
      ],
      "fhorgaddresslist": [
        {
          "city": "Washington",
          "state": "DC",
          "country_code": "USA",
          "addresstype": "M"
        }
      ],
      "fhorgnamehistory": [
        {
          "fhorgname": "Agricultural Management Assistance",
          "effectivedate": "2018-06-29 15:12"
        }
      ],
      "fhorgparenthistory": [
        {
          "fhfullparentpathid": "100006809.100093803.500026649",
          "fhfullparentpathname": "AGRICULTURE, DEPARTMENT OF.NATURAL RESOURCES CONSERVATION SERVICE.Agricultural Management Assistance",
          "effectivedate": "2018-06-29 15:12"
        }
      ],
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/federalorganizations/v1/orgs?fhorgid=500026649"
        }
      ]
    }
</pre></code>
</p>
</details>

### Example 3: Get Hierarchy for an Organization

Request URL: <br> https://api-alpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?limit=10&api_key={User’s API Key}&fhorgid=100006688

*Note: Request URL used in this example is a staging URL*

<details>
    <summary>Response (JSON Output)</summary>

*Note: By default, 10 records will be returned unless otherwise specified with a max limit 100 records. Response for one record is provided as an example* <br>

<p>
<code><pre>
{
  "totalrecords": 1,
  "orglist": [
    {
      "fhorgid": 100006688,
      "fhorgname": "GENERAL SERVICES ADMINISTRATION",
      "fhorgtype": "Department/ Ind. Agency",
      "description": "Establishes policy and provides for the Government an economical and efficient system for the management of its property including construction and operation of buildings, procurement and distribution of supplies, utilization and disposal of property, transportation, and travel management, and management of Government-wide information technology solutions and network services.  GSA is organized much like a large corporation doing business in a number of different fields.  It consists of operating services and supporting staff offices, with functions carried out at three levels of organization:  The Central office, regional offices, and field activities.  (See Appendix IV of the Catalog for a listing of these offices.)  Various publications and catalogs published by GSA include:  1) The Catalog of Federal Domestic Assistance published jointly by GSA and the Office of Management and Budget; and 2) the Consumer Information Catalog which lists selected Federal publications of interest to consumers.  GSA also administers the Federal Information Centers (FCIC) which are focal points for Information about the Federal government's services, programs, and regulations.",
      "level": 1,
      "status": "ACTIVE",
      "categoryid": "CAT-1",
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
      "fhorgaddresslist": [
        {
          "city": "",
          "state": "",
          "country_code": "US",
          "addresstype": "M"
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
          "href": "https://api-alpha.sam.gov/prodlike/federalorganizations/v1/orgs?fhorgid=100006688"
        },
        {
          "rel": "nextlevelchildren",
          "href": "https://api-alpha.sam.gov/prodlike/federalorganizations/v1/org/hierarchy?fhorgid=100006688"
        }
      ]
    }
  ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

200 - Success
404 – No Data found 
400 – Bad Request 
500	– Internal Server Error

<p><small><a href="#">Back to top</a></small></p>

## Error Messages

Scenario | Error Messages
----- | ------
User enters an invalid date format|	Invalid date entered. Expected format YYYY-MM-DD
User enters an invalid value for status	|Status value must be either Active/Inactive
For limit or offset, user inputs characters/special characters|	Limit and offset must be a positive number

<p><small><a href="#">Back to top</a></small></p>

## Appendix

For Country Codes, please refer to:
https://www.iso.org/obp/ui/#search

For State Codes, please refer to:
https://www.census.gov/programs-surveys/geography.html

<p><small><a href="#">Back to top</a></small></p>

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
8/8/19 | v1.0 | Base Version
9/16/19 | v1.1 | Added Region Code <br> Updated rules for multiple CGAC

<p><small><a href="#">Back to top</a></small></p>
