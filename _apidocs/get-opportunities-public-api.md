---
title: Beta.SAM.Gov Get Opportunities Public API 
banner-heading: Beta.SAM.Gov Get Opportunities Public API 
---

## Overview

Get Opportunities API provides all the published opportunity details based on the request parameters. This API requires pagination, and the response will be provided to users synchronously. 

**This API only provides the latest active version of the opportunity. To view all version of the opportunity, please visit Data Services Section of Beta.Sam.Gov. All active notices in Beta.Sam.Gov are updated daily and all archived notices are updated on a weekly basis.**

[Active Opportunities](https://beta.sam.gov/data-services?domain=Contract%20Opportunities%2Fdatagov)

[Archived Opportunities](https://beta.sam.gov/data-services?domain=Contract%20Opportunities%2FArchived%20Data)


## Getting Started

Get Opportunities API can be accessed from Beta or Alpha via the following environments:
* Beta: <br>  https://api.sam.gov/prod/opportunities/v1/search
* Alpha: <br> https://api-alpha.sam.gov/prodlike/opportunities/v1/search

## Authentication and API Keys
User of this public API must provide an API key to use this Opportunities public API. Request per day are limited based on the federal or non-federal or general roles. 
Note: User can request a public API Key in the Account Details page on beta.sam.gov (if testing in production) Else on alpha.sam.gov (if testing in prodlike).

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on beta.sam.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## Get Opportunities Request Parameters

Users can search by any of the below request parameters with Date field as mandatory. 

Request Parameters that API accepts	| Description | Required| Data Type| Applicable Versions
----- | ----- | ----- | ----- | -----
api_key	| Public Key of users	| Yes|	String | v1<br> v2
ptype |	Procurement Type. Below are the available Procurement Types: <br> u= Justification (J&A) <br>p = Pre solicitation <br>a = Award Notice <br>r = Sources Sought <br>s = Special Notice <br>g = Sale of Surplus Property <br>k = Combined Synopsis/Solicitation <br>i = Intent to Bundle Requirements (DoD-Funded) <br><br> Note: Below services are now retired:<br>f = Foreign Government Standard <br>l = Fair Opportunity / Limited Sources  <br> <br>Use Justification (u) instead of fair Opportunity 	|No	|String | v1<br> v2
solnum|	Solicitation Number|	No|	String | v1<br> v2
noticeid| Notice ID | No | String | v1<br> v2
title|	Title|	No	|String | v1<br> v2
postedFrom	| Posted date From <br>Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes|	String | v1<br> v2
postedTo|	Posted date To  Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes	|String | v1<br> v2
deptname |	Department Name (L1)	|No|	String | v1<br> v2
subtier|	Agency Name (L2)| 	No|	String | v1<br> v2
state|	Place of Performance (State)|	No	|String | v1<br> v2
zip|	Place of Performance (Zip code)|	No|	String | v1<br> v2
typeOfSetAside|	[Refer Set-Aside Value Section](#set-aside-values)    |No	|String | v1<br> v2
typeOfSetAsideDescription	|Set Aside code Description. See above descriptions mentioned against each of the Set Aside Code|	No|	String | v1<br> v2
ncode|	NAICS Code. This code is maximum of 6 digits|	No|	String | v1<br> v2
ccode|	Classification Code|	No|	String | v1<br> v2
rdlfrom	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String | v1<br> v2
rdlto	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String | v1<br> v2
limit	|Total number of records to be retrieved per page. This field must be a number <br> Max Value = 1000|	Yes	|Int | v1<br> v2
offset	|Indicates the page index. Default offset starts with 0 |	No|	Int | v1<br> v2

## Get Opportunities Response Parameters

Based on the request parameters, API provides below response parameters.

Request Parameters that API accepts	| Description | Data Type|Applicable Versions
----- | ----- | ----- | -----  
totalRecords|	Total number of records for the search	|Number | v1<br> v2
limit|	Limit entered by a user while making the request i.e. total number of records that user wished to retrieve per page|	Number | v1<br> v2
offset|	Page index specified by a user. Default offset starts with 0 if user does not provide any offset in the request|	Number | v1<br> v2
title	|Opportunity Title|	String | v1<br> v2
solicitationNumber|	Solicitation Number |	String | v1<br> v2
department|	Department (L1)	|String | v1<br> v2
subTier|	Sub-Tier (L2)|	String | v1<br> v2
office|	Office (L3)	|String | v1<br> v2
postedDate|	Opportunity Posted Date <br> YYYY-MM-DD HH:MM:SS	|String | v1<br> v2
type|	Opportunity current type|	String | v1<br> v2
baseType|	Opportunity original type|	String | v1<br> v2
archiveType	|Archive Type	|String | v1<br> v2
archiveDate	|Archived Date	|String | v1<br> v2
setAside	|Set Aside Description	|String | v1<br> v2
setAsideCode	|Set Aside Code	|String | v1<br> v2
reponseDeadLine	|Response Deadline Date	|String | v1<br> v2
naicsCode	|NAICS Code. This code is maximum of 6 digits	|String | v1<br> v2
classificationCode	|Classification Code	|String | v1<br> v2
active|	If Active = Yes, then the opportunity is active, if No, then opportunity is Archived| String | v1<br> v2
data.award|	Award Information (If Available): <br> Award amount <br>Awardee <br> Award date <Br> Award Number|	JSON Object | v1<br> v2
data.award.number| Award Number| String | v1<br> v2
data.award.amount| Award Amount| Number | v1<br> v2
data.award.date| Award Date| Date and Time | v1<br> v2
data.award.awardee|	 Name <br> Location <br> Duns <br> ueiSAM (***will be available in future**)|	JSON Object | v1<br> v2
data.award.awardee.name|Awardee Name|String | v1<br> v2
data.award.awardee.duns|DUNS Number|String | v1  <br> v2 - Deprecated
data.award.awardee.ueiSAM| Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric (ueiSAM values not yet available).<br> Example: ueiSAM=025114695AST | String |  v2
data.award.awardee.location.<br/>streetAddress | Awardee Street Address 1 | String | v1<br> v2
data.award.awardee.location.<br/>streetAddress2 | Awardee Street Address 2 | String | v1<br> v2
data.award.awardee.location.<br/>city | Awardee City |JSON Object  | v1<br> v2
data.award.awardee.location.<br/>city.code | Awardee City Code| String  | v1<br> v2
data.award.awardee.location.<br/>city.name | Awardee City Name | String  | v1<br> v2
data.award.awardee.location.<br/>state |Awardee State| JSON Object  | v1<br> v2
data.award.awardee.location.<br/>state.code|Awardee State Code | String  | v1<br> v2
data.award.awardee.location.<br/>state.name |Awardee State Name| String  | v1<br> v2
data.award.awardee.location.<br/>country |Awardee Country| JSON Object | v1<br> v2
data.award.awardee.location.<br/>country.code|Awardee Country Code | String | v1<br> v2
data.award.awardee.location.<br/>country.name |Awardee Country Name | String | v1<br> v2 
data.award.awardee.location.<br/>zip | Awardee Zip | String | v1<br> v2
pointofContact|	Point of Contact Information. It can have below fields if available: <br> Fax <br>Type<br> Email <br>Phone<br> Title<br> Full name	|JSON Array
data.pointOfContact.type | Point of Contact Type| String | v1<br> v2
data.pointOfContact.title| Point of Contact Title | String | v1<br> v2
data.pointOfContact.fullname| Point of Contact Full Name | String | v1<br> v2
data.pointOfContact.email| Point of Contact Email | String | v1<br> v2
data.pointOfContact.phone| Point of Contact Phone | String | v1<br> v2
data.pointOfContact.fax |  Point of Contact Fax|String | v1<br> v2
description|	A link to an opportunity description. <br>Note: To download the description, user should append the public API Key. If no description is available then, user is shown an error message “ Description not found”|	String| v1<br> v2
organizationType|	Type of an organization – department/sub-tier/office|	String | v1<br> v2
officeAddress|	Office Address Information. It can have below fields if available: <br> City<br> State<br>Zip|	String | v1<br> v2
data.officeAddress.city| Office Address City| String | v1<br> v2
data.officeAddress.state| Office Address State| String | v1<br> v2
data.officeAddress.zip|Office Address Zip| String | v1<br> v2
placeOfPerformance|	Place of performance information. It can have below fields if available: Street<br> City<br> State<br>Zip|	JSON Object | v1<br> v2
data.placeOfPerformance.streetAddress|  Pop Address | String | v1<br> v2 
data.placeOfPerformance.streetAddress2 |  Pop Address2| String  | v1<br> v2
data.placeOfPerformance.city | JSON Object| Pop City | v1<br> v2
data.placeOfPerformance.city.code |  Pop City code | String  | v1<br> v2
data.placeOfPerformance.city.name  |  Pop City name | String  | v1<br> v2
data.placeOfPerformance.city.state | JSON Object | Pop City state | v1<br> v2
data.placeOfPerformance.state.code | Pop city state code | String  | v1<br> v2
data.placeOfPerformance.state.name  |  Pop city state name | String  | v1<br> v2
data.placeOfPerformance.country | JSON Object| Pop Country | v1<br> v2
data.placeOfPerformance.country.code  | Pop Country Code | String | v1<br> v2
data.placeOfPerformance.country.name  | Pop Country name | String | v1<br> v2
data.placeOfPerformance.zip  | Pop Country zip| String | v1<br> v2
additionalInfoLink|	Any additional info link if available for the opportunity	|String| v1<br> v2
uiLink	|Direct UI link to the opportunity. To view the opportunity on UI, user must have either a contracting officer or a Contracting Specialist role. If user hits the link without logging in, user is directed to 404 not found page |	String| v1<br> v2
links	|Every record in a response has this links array consisting of: <br> rel: self<br>href: link to the specific opportunity itself. User should provide an API key to access the opportunity directly<br><br>Also, every response has a master links array consisting of:<br>    rel: self<br>href: link to the actual request. User should provide an API key to access the request|	Array| v1<br> v2
resourceLinks (Coming Soon to Production) | Direct URL to download attachments in the opportunity | Array of Strings| v1<br> v2

### Set-Aside Values
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field. Use the Set-Aside codes to submit notices.

Only one Set-Aside value is accepted in the field at this time

Refer below table for valid Set-Aside values:

Code | SetAside Values
-----|-----------------
SBA     | Total Small Business Set-Aside (FAR 19.5)
SBP     | Partial Small Business Set-Aside (FAR 19.5)
8A      | 8(a) Set-Aside (FAR 19.8)
8AN     | 8(a) Sole Source (FAR 19.8)
HZC     | Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13)
HZS     | Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13)
SDVOSBC | Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)
SDVOSBS | Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14)
WOSB    | Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15)
WOSBSS  | Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15)
EDWOSB  | Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15)
EDWOSBSS | Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15)
LAS | Local Area Set-Aside (FAR 26.2)
IEE | Indian Economic Enterprise (IEE) Set-Aside (specific to Department of Interior)
ISBEE | Indian Small Business Economic Enterprise (ISBEE) Set-Aside (specific to Department of Interior)
BICiv | Buy Indian Set-Aside (specific to Department of Health and Human Services, Indian Health Services)
VSA | Veteran-Owned Small Business Set-Aside (specific to Department of Veterans Affairs)
VSS | Veteran-Owned Small Business Sole source (specific to Department of Veterans Affairs)


## Examples

### Example 1: Search opportunities for the given date

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018 <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/prodlike/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018 <br>
 <br>

Note: Request URL for alpha is used in this example
</details>

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
        },
        {
            "noticeId": "00000000000000000000000000000000",
            "title": "Award Notice Title ",
            "solicitationNumber": "solicitationNumber000000",
            "department": "DEPARTMENT NAME",
            "subTier": "SUBTIER NAME",
            "office": "OFFICE NAME",
            "postedDate": "2018-05-09",
            "type": "Award Notice",
            "baseType": "Combined Synopsis/Solicitation",
            "archiveType": "autocustom",
            "archiveDate": "2020-01-09",
            "typeOfSetAsideDescription": "Partial Small Business Set-Aside (FAR 19.5)",
            "typeOfSetAside": "SBP",
            "responseDeadLine": null,
            "naicsCode": "111130",
            "classificationCode": "11",
            "active": "Yes",
            "award": {
                "date": "2019-11-10",
                "number": "0X0X0X0X",
                "amount": "00000.00000000",
                "awardee": {
                    "name": "Name of Entity; Street Address;City;State;Zip Code",
                    "location": {},
                    "duns": "000000000"
                }
            },
            "pointOfContact": [
                {
                    "fax": null,
                    "type": "primary",
                    "email": "emailName@email.email",
                    "phone": null,
                    "title": null,
                    "fullName": "First M. Last"
                }
            ],
            "description": "https://api-alpha.sam.gov/prodlike/opportunities/v1/noticedesc?noticeid=00000000000000000000000000000000",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "OFFICE zipcode",
                "city": "OFFICE city",
                "countryCode": "OFFICE countryCode",
                "state": "OFFICE state"
            },
            "placeOfPerformance": {},
            "additionalInfoLink": null,
            "uiLink": "https://alpha.sam.gov/opp/00000000000000000000000000000000/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api-alpha.sam.gov/prodlike/opportunities/v1/search?noticeid=00000000000000000000000000000000&limit=1",
                    "hreflang": null,
                    "media": null,
                    "title": null,
                    "type": null,
                    "deprecation": null
                }
            ]
        }
    ]
}
</pre></code>
</p>
</details>

### Example 2: Search by pre-solicitation type

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=p <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/prodlike/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=p <br>
 <br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output)</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
  "totalRecords": 11035,
  "limit": 10,
  "offset": 0,
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
      "description": " https://api-alpha.sam.gov/prodlike/opportunities/v1/noticedesc?noticeid=ea55e45cded123fd8d6afd7c061138f0",
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

### Example 3: Search by award type

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v1/search?limit=1&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general <br>
 <br>
Alpha URL: https://api.sam.gov/prod/opportunities/v1/search?limit=1&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general<br>
 <br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output) v1</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
    "totalRecords": 34,
    "limit": 1,
    "offset": 0,
    "opportunitiesData": [
        {
            "noticeId": "5b345bbb7127b91a3ad577b203fc6f68",
            "title": "Historic Office Renovation ",
            "solicitationNumber": " 47PF0018R0023 ",
            "department": "GENERAL SERVICES ADMINISTRATION",
            "subTier": "PUBLIC BUILDINGS SERVICE",
            "office": "PBS R5",
            "postedDate": "2018-05-04",
            "type": "Award Notice",
            "baseType": "Combined Synopsis/Solicitation",
            "archiveType": "manual",
            "archiveDate": null,
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": null,
            "naicsCode": "236220",
            "classificationCode": "Z",
            "active": "Yes",
            "award": {
                "date": "2018-05-04",
                "number": "47PF0018C0066",
                "amount": "800620",
                "awardee": {
                    "name": "D.G. Beyer, Inc.",
                    "location": {
                        "streetAddress": "3080 S Calhoun Rd.",
                        "city": {
                            "code": "56375",
                            "name": "New Berlin"
                        },
                        "state": {
                            "code": "WI"
                        },
                        "zip": "53151",
                        "country": {
                            "code": "USA"
                        }
                    },
                    "duns": "006435549"
                }
            },
            "pointOfContact": [
                {
                    "fax": null,
                    "type": "primary",
                    "email": "jesse.jones@gsa.gov",
                    "phone": "2174941263",
                    "title": "Contracting Officer ",
                    "fullName": "Jesse L. Jones"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=5b345bbb7127b91a3ad577b203fc6f68",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "60604",
                "city": "CHICAGO",
                "countryCode": "USA",
                "state": "IL"
            },
            "placeOfPerformance": {
                "streetAddress": "517 E Wisconsin Ave",
                "city": {
                    "code": "53000",
                    "name": "Milwaukee"
                },
                "state": {
                    "code": "WI"
                },
                "zip": "53202",
                "country": {
                    "code": "USA"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://beta.sam.gov/opp/5b345bbb7127b91a3ad577b203fc6f68/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v1/search?noticeid=5b345bbb7127b91a3ad577b203fc6f68&limit=1",
                    "hreflang": null,
                    "media": null,
                    "title": null,
                    "type": null,
                    "deprecation": null
                }
            ]
        }
    ],
    "links": [
        {
            "rel": "self",
            "href": "https://api.sam.gov/prod/opportunities/v1/search?limit=1&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general",
            "hreflang": null,
            "media": null,
            "title": null,
            "type": null,
            "deprecation": null
        }
    ]
}
</pre></code>
</p>
</details>

<details>
    <summary>Response (JSON Output) v2</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
    "totalRecords": 34,
    "limit": 1,
    "offset": 0,
    "opportunitiesData": [
        {
            "noticeId": "5b345bbb7127b91a3ad577b203fc6f68",
            "title": "Historic Office Renovation ",
            "solicitationNumber": " 47PF0018R0023 ",
            "department": "GENERAL SERVICES ADMINISTRATION",
            "subTier": "PUBLIC BUILDINGS SERVICE",
            "office": "PBS R5",
            "postedDate": "2018-05-04",
            "type": "Award Notice",
            "baseType": "Combined Synopsis/Solicitation",
            "archiveType": "manual",
            "archiveDate": null,
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": null,
            "naicsCode": "236220",
            "classificationCode": "Z",
            "active": "Yes",
            "award": {
                "date": "2018-05-04",
                "number": "47PF0018C0066",
                "amount": "800620",
                "awardee": {
                    "name": "D.G. Beyer, Inc.",
                    "location": {
                        "streetAddress": "3080 S Calhoun Rd.",
                        "city": {
                            "code": "56375",
                            "name": "New Berlin"
                        },
                        "state": {
                            "code": "WI"
                        },
                        "zip": "53151",
                        "country": {
                            "code": "USA"
                        }
                    },
                    "ueiSAM": "025114695AST"
                }
            },
            "pointOfContact": [
                {
                    "fax": null,
                    "type": "primary",
                    "email": "jesse.jones@gsa.gov",
                    "phone": "2174941263",
                    "title": "Contracting Officer ",
                    "fullName": "Jesse L. Jones"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=5b345bbb7127b91a3ad577b203fc6f68",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "60604",
                "city": "CHICAGO",
                "countryCode": "USA",
                "state": "IL"
            },
            "placeOfPerformance": {
                "streetAddress": "517 E Wisconsin Ave",
                "city": {
                    "code": "53000",
                    "name": "Milwaukee"
                },
                "state": {
                    "code": "WI"
                },
                "zip": "53202",
                "country": {
                    "code": "USA"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://beta.sam.gov/opp/5b345bbb7127b91a3ad577b203fc6f68/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v1/search?noticeid=5b345bbb7127b91a3ad577b203fc6f68&limit=1",
                    "hreflang": null,
                    "media": null,
                    "title": null,
                    "type": null,
                    "deprecation": null
                }
            ]
        }
    ],
    "links": [
        {
            "rel": "self",
            "href": "https://api.sam.gov/prod/opportunities/v1/search?limit=1&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general",
            "hreflang": null,
            "media": null,
            "title": null,
            "type": null,
            "deprecation": null
        }
    ]
}
</pre></code>
</p>
</details>

### Example 4: Search for opportunities by a given title

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&title=Driving <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/prodlike/opportunities/v1/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&title=Driving <br>
 <br>

Note: Request URL for alpha is used in this example
</details>

<details>
    <summary>Response (JSON Output)</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
  "totalRecords": 12,
  "limit": 10,
  "offset": 0,
  "opportunitiesData": [
    {
      "noticeId": "9ffb613fb737018740bbbf250cd8292d",
      "title": "DIFFERENTIAL, DRIVING",
      "solicitationNumber": "SPRDL118R0216",
      "department": null,
      "subTier": null,
      "office": null,
      "postedDate": "2018-04-03 13:41:13+00",
      "type": "Presolicitation",
      "baseType": "Presolicitation",
      "archiveType": "manual",
      "archiveDate": null,
      "typeOfSetAsideDescription": null,
      "typeOfSetAside": null,
      "responseDeadLine": "2018-05-07T20:00:00-05:00",
      "naicsCode": "336350",
      "classificationCode": "25",
      "active": "Yes",
      "award": null,
      "pointOfContact": [
        {
          "fax": null,
          "type": "primary",
          "email": "vincent.strongarone@dla.mil",
          "phone": null,
          "title": null,
          "fullName": "vincent strongarone"
        },
        {
          "fax": null,
          "type": "secondary",
          "email": "DLALandWarrenFBO@dla.mil",
          "phone": null,
          "title": null,
          "fullName": "DLA FBO Mailbox"
        }
      ],
      "description": " https://api-alpha.sam.gov/prodlike/opportunities/v1/noticedesc?noticeid=9ffb613fb737018740bbbf250cd8292d",
      "organizationType": null,
      "officeAddress": null,
      "placeOfPerformance": null,
      "additionalInfoLink": null,
      "uiLink": "https://alpha.sam.gov/opp/9ffb613fb737018740bbbf250cd8292d",
      "links": [
        {
          "rel": "self",
          "href": " https://api-alpha.sam.gov/prodlike/opportunities/v1/search?noticeid=9ffb613fb737018740bbbf250cd8292d&limit="
        }
      ]
    }
</pre></code>
</p>
</details>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/get-opportunities.yml" download="get-opportunities">OpenAPI File</a>

<details>
<summary>Get Opportunities Public API</summary>
<p>
<code><pre>
/v1/search:
    get:
      tags:
        - 'Public GET Opportunites API '
      summary: 'API to get opportunities based on filter'
      operationId: getOpportunitiesUsingGET
      consumes:
        - application/json
      produces:
        - application/json
        - text/plain
      parameters:
        -
          name: ptype
          in: query
          description: 'Enter Procurement type.'
          required: false
          type: array
          items:
            type: String
          collectionFormat: multi
        -
          name: noticeid
          in: query
          description: 'Enter Notice Id.'
          required: false
          type: String
        -
          name: solnum
          in: query
          description: 'Enter Solicitation number.'
          required: false
          type: String
        -
          name: title
          in: query
          description: 'Enter Title.'
          required: false
          type: String
        -
          name: deptname
          in: query
          description: 'Enter Department Name.'
          required: false
          type: String
        -
          name: subtier
          in: query
          description: 'Enter SubTier Name.'
          required: false
          type: String
        -
          name: state
          in: query
          description: 'Enter Place of performence State.'
          required: false
          type: String
        -
          name: zip
          in: query
          description: 'Enter Place of performence Zip.'
          required: false
          type: String
        -
          name: typeOfSetAsideDescription
          in: query
          description: 'Enter type Of SetAside Description.'
          required: false
          type: String
        -
          name: typeOfSetAside
          in: query
          description: 'Enter type Of SetAside Code.'
          required: false
          type: String
        -
          name: ncode
          in: query
          description: 'Enter Naics code.'
          required: false
          type: String
        -
          name: ccode
          in: query
          description: 'Enter Classification code.'
          required: false
          type: String
        -
          name: postedFrom
          in: query
          description: "Enter posted from date in mm/dd/yyyy format. Required when providing\nlimit."
          required: false
          type: String
        -
          name: postedTo
          in: query
          description: "Enter posted to date in mm/dd/yyyy format. Required when providing\nlimit."
          required: false
          type: String
        -
          name: rdlfrom
          in: query
          description: 'Enter response deadline in mm/dd/yyyy format'
          required: false
          type: String
        -
          name: rdlto
          in: query
          description: 'Enter response deadline to in mm/dd/yyyy format'
          required: false
          type: String
        -
          name: limit
          in: query
          description: 'Enter limit to fetch number of records'
          required: true
          type: String
        -
          name: offset
          in: query
          description: 'Enter offset value'
          required: true
          type: String
          default: '0'
        -
          name: api_key
          in: query
          description: 'Enter the Public API Key.'
          required: true
          type: String
      responses:
        '200':
          description: OK
          schema:
            type: object
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: 'Not Found'
definitions:
  Data:
    type: object
    properties:
      disabled_at:
        type: String
      email:
        type: String
      email_verified:
        type: boolean
      enabled:
        type: boolean
      expires_at:
        type: String
      first_name:
        type: String
      id:
        type: String
      last_name:
        type: String
      registration_source:
        type: String
      roles:
        type: array
        items:
          type: String
      settings:
        $ref: '#/definitions/Settings'
  Creator:
    type: object
    properties:
      username:
        type: String
  APIKeyUser:
    type: object
    properties:
      api_key:
        type: String
      api_key_hides_at:
        type: String
      api_key_preview:
        type: String
      created_at:
        type: String
      creator:
        $ref: '#/definitions/Creator'
      email:
        type: String
      email_verified:
        type: boolean
      enabled:
        type: boolean
      expires_at:
        type: String
      first_name:
        type: String
      id:
        type: String
      last_name:
        type: String
      registration_ip:
        type: String
      registration_origin:
        type: String
      registration_referer:
        type: String
      registration_source:
        type: String
      registration_user_agent:
        type: String
      roles:
        type: array
        items:
          type: String
      settings:
        $ref: '#/definitions/Settings'
      terms_and_conditions:
        type: boolean
      throttle_by_ip:
        type: boolean
      updated_at:
        type: String
      updater:
        $ref: '#/definitions/Updater'
      use_description:
        type: String
      website:
        type: String
  SystemAccountDetail:
    type: object
    properties:
      id:
        type: String
      isFedCapable:
        type: boolean
      isGov:
        type: boolean
  Feature:
    type: object
    properties:
      featureKey:
        type: String
      featureValue:
        type: boolean
  SystemAccountDisableUsers:
    type: object
    properties:
      arrayOfSAUserNames:
        type: array
        items:
          type: String
  Response:
    type: object
    properties:
      errorMessage:
        type: String
      message:
        type: String
      successMessage:
        type: String
  RateLimit:
    type: object
    properties:
      accuracy:
        type: integer
        format: int32
      distributed:
        type: boolean
      duration:
        type: integer
        format: int64
      id:
        type: String
      limit:
        type: integer
        format: int32
      limit_by:
        type: String
      response_headers:
        type: boolean
  EmailDetails:
    type: object
    properties:
      _links:
        type: array
        items:
          $ref: '#/definitions/Link'
      email:
        type: String
      firstName:
        type: String
      lastName:
        type: String
  Updater:
    type: object
    properties:
      username:
        type: String
  FilteredAPIKeyUserDetails:
    type: object
    properties:
      _links:
        type: array
        items:
          $ref: '#/definitions/Link'
      apiKey:
        type: String
      apiKeyExpiryDate:
        type: String
      limit:
        type: String
      roles:
        type: array
        items:
          type: String
  Settings:
    type: object
    properties:
      id:
        type: String
      rate_limit_mode:
        type: String
      rate_limits:
        type: array
        items:
          $ref: '#/definitions/RateLimit'
  Link:
    type: object
    properties:
      deprecation:
        type: String
      href:
        type: String
      hreflang:
        type: String
      media:
        type: String
      rel:
        type: String
      templated:
        type: boolean
      title:
        type: String
      type:
        type: String
</pre></code>
</p>
</details>


## HTTP Response Codes

200 - Success

404 – No Data found 

400 – Bad Request 

500	– Internal Server Error


## Error Messages

Scenario | Error Messages
------| ------
For limit, user provides range beyond 1000.|	Limit valid range is 0-1000. Please provide valid input.
For limit or offset, user inputs characters/special characters.|	limit/offset must be a positive number.
For postedFrom, postedTo, rdlfrom, rdlto user enters an invalid date format. |	Invalid Date Entered. Expected date format is MM/dd/yyyy
User does not provide postedFrom and postedTo values.	|PostedFrom and PostedTo are mandatory
User provides more than 1 year of date range for postedFrom and postedTo <br>OR<br>User provides more than 1 year of date range for rdlfrom and rdlto	|Date range must be 1 year(s) apart
User provides invalid API Key|	An invalid api_key was supplied
User does not provide any API key	|No api_key was supplied
User clicks on the description link available in the response and description content is not available	|Description Not Found

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [www.fsd.gov](https://www.fsd.gov)

## Change Log

Date | Version | Description
------|---------------|---------
5/20/19 | v0.1 | Base Version
8/6/19 | v0.2| Format Updated
10/17/19 | v0.3| Added Set-Aside Code
10/23/19 | v0.4| Set-Aside Values Updated
10/24/19| v0.5| Office Address Description Updated 
11/1/19| v1.0| Initial Release Finalized
12/2/19| v1.1|Added OpenAPI Specification
12/18/19| v1.2|Opportunities Response parameters updated to include Award Details JSON Specification and provided the  examples
1/20/2020 | v1.3| Added Award Response and Versioning columns
1/31/2020 | v1.4 | Added field "ResourceLinks" with Coming Soon to prod

<p><small><a href="#">Back to top</a></small></p>
