---
title: SAM.gov Get Opportunities Public API 
banner-heading: SAM.gov Get Opportunities Public API 
---

## Overview

Get Opportunities API provides all the published opportunity details based on the request parameters. This API requires pagination, and the response will be provided to users synchronously. 

**This API only provides the latest active version of the opportunity. To view all version of the opportunity, please visit Data Services Section of SAM.gov. All active notices in SAM.gov are updated daily and all archived notices are updated on a weekly basis.**

[Active Opportunities](https://sam.gov/data-services?domain=Contract%20Opportunities%2Fdatagov)

[Archived Opportunities](https://sam.gov/data-services?domain=Contract%20Opportunities%2FArchived%20Data)


## Getting Started

Get Opportunities API can be accessed from Production or Alpha via the following environments:

### Version Control - v2 

* Production: <br>  https://api.sam.gov/opportunities/v2/search
* Alpha: <br> https://api-alpha.sam.gov/opportunities/v2/search

## Authentication and API Keys
User of this public API must provide an API key to use this Opportunities public API. Request per day are limited based on the federal or non-federal or general roles. 
Note: User can request a public API Key in the Account Details page on SAM.gov (if testing in production) Else on alpha.sam.gov (if testing in prodlike).

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on SAM.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## Get Opportunities Request Parameters

Users can search by any of the below request parameters with Date field as mandatory. 

Request Parameters that API accepts	| Description | Required| Data Type| Applicable Versions
----- | ----- | ----- | ----- | -----
api_key	| Public Key of users	| Yes|	String | v2
ptype |	Procurement Type. Below are the available Procurement Types: <br> u= Justification (J&A) <br>p = Pre solicitation <br>a = Award Notice <br>r = Sources Sought <br>s = Special Notice <br>o = Solicitation <br>g = Sale of Surplus Property <br>k = Combined Synopsis/Solicitation <br>i = Intent to Bundle Requirements (DoD-Funded) <br><br> Note: Below services are now retired:<br>f = Foreign Government Standard <br>l = Fair Opportunity / Limited Sources  <br> <br>Use Justification (u) instead of fair Opportunity 	|No	|String | v2
solnum|	Solicitation Number|	No|	String | v2
noticeid| Notice ID | No | String | v2
title|	Title|	No	|String | v2
postedFrom	| Posted date From <br>Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes|	String | v2
postedTo|	Posted date To  Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes	|String | v2
deptname |	Department Name (L1)	|No|	String | v2 - Deprecated
subtier|	Agency Name (L2)| 	No|	String | v2 - Deprecated
state|	Place of Performance (State)|	No	|String | v2
status (Coming Soon)| Status of the opportunity <br> Accepts following:  active, inactive, archived, cancelled, deleted | No| String | v2
zip|	Place of Performance (Zip code)|	No|	String | v2
organizationCode| Code of associated organization | No| string | v2
organizationName| Name of associated organization <br> *Note: General Search can be performed*|No| String|v2
typeOfSetAside|	[Refer Set-Aside Value Section](#set-aside-values)    |No	|String | v2
typeOfSetAsideDescription	|Set Aside code Description. See above descriptions mentioned against each of the Set Aside Code|	No|	String | v2
ncode|	NAICS Code. This code is maximum of 6 digits|	No|	String | v2
ccode|	Classification Code|	No|	String | v2
rdlfrom	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String | v2
rdlto	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String | v2
limit	|Total number of records to be retrieved per page. This field must be a number <br> Max Value = 1000|	Yes	|Int | v2
offset	|Indicates the page index. Default offset starts with 0 |	No|	Int | v2

## Get Opportunities Response Parameters

Based on the request parameters, API provides below response parameters.

Request Parameters that API accepts	| Description | Data Type|Applicable Versions
----- | ----- | ----- | -----  
totalRecords|	Total number of records for the search	|Number | v2
limit|	Limit entered by a user while making the request i.e. total number of records that user wished to retrieve per page|	Number | v2
offset|	Page index specified by a user. Default offset starts with 0 if user does not provide any offset in the request|	Number | v2
title	|Opportunity Title|	String | v2
solicitationNumber|	Solicitation Number |	String | v2
fullParentPathName| Names of all organizations notice is associated with| String| v2
fullParentPathCode| Codes of all organizations notice is associated with| String| v2
department|	Department (L1)	|String | v2 - Deprecated
subtier|	Sub-Tier (L2)|	String | v2 - Deprecated
office|	Office (L3)	|String | v2 - Deprecated
postedDate|	Opportunity Posted Date <br> YYYY-MM-DD HH:MM:SS	|String | v2
type|	Opportunity current type|	String | v2
baseType|	Opportunity original type|	String | v2
archiveType	|Archive Type	|String | v2
archiveDate	|Archived Date	|String | v2
setAside	|Set Aside Description	|String | v2
setAsideCode	|Set Aside Code	|String | v2
reponseDeadLine	|Response Deadline Date	|String | v2
naicsCode	|NAICS Code. This code is maximum of 6 digits	|String | v2
classificationCode	|Classification Code	|String | v2
active|	If Active = Yes, then the opportunity is active, if No, then opportunity is Archived| String | v2
data.award|	Award Information (If Available): <br> Award amount <br>Awardee <br> Award date <Br> Award Number|	JSON Object | v2
data.award.number| Award Number| String | v2
data.award.amount| Award Amount| Number | v2
data.award.date| Award Date| Date and Time | v2
data.award.awardee|	 Name <br> Location <br> ueiSAM | JSON Object | v2
data.award.awardee.name|Awardee Name|String | v2
data.award.awardee.ueiSAM| Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric <br> Example: ueiSAM=025114695AST | String | v2
data.award.awardee.location.<br/>streetAddress | Awardee Street Address 1 | String | v2
data.award.awardee.location.<br/>streetAddress2 | Awardee Street Address 2 | String | v2
data.award.awardee.location.<br/>city | Awardee City |JSON Object  |  v2
data.award.awardee.location.<br/>city.code | Awardee City Code| String  |  v2
data.award.awardee.location.<br/>city.name | Awardee City Name | String  | v2
data.award.awardee.location.<br/>state |Awardee State| JSON Object  | v2
data.award.awardee.location.<br/>state.code|Awardee State Code | String  | v2
data.award.awardee.location.<br/>state.name |Awardee State Name| String  | v2
data.award.awardee.location.<br/>country |Awardee Country| JSON Object | v2
data.award.awardee.location.<br/>country.code|Awardee Country Code | String | v2
data.award.awardee.location.<br/>country.name |Awardee Country Name | String | v2 
data.award.awardee.location.<br/>zip | Awardee Zip | String | v2
pointofContact|	Point of Contact Information. It can have below fields if available: <br> Fax <br>Type<br> Email <br>Phone<br> Title<br> Full name	|JSON Array
data.pointOfContact.type | Point of Contact Type| String | v2
data.pointOfContact.title| Point of Contact Title | String | v2
data.pointOfContact.fullname| Point of Contact Full Name | String | v2
data.pointOfContact.email| Point of Contact Email | String | v2
data.pointOfContact.phone| Point of Contact Phone | String | v2
data.pointOfContact.fax |  Point of Contact Fax|String | v2
description|	A link to an opportunity description. <br>Note: To download the description, user should append the public API Key. If no description is available then, user is shown an error message “ Description not found”|	String| v2
data.pointOfContact.additionalInfo| Additional Information <br> *Note: This field will only show if additional information is given* | JSON Array| v2
data.pointOfContact.additionalInfo.content| Content of Additional Information <br> *Note: This field will only show if a text is provided for additional information*|String |v2
organizationType|	Type of an organization – department/sub-tier/office|	String | v2
officeAddress|	Office Address Information. It can have below fields if available: <br> City<br> State<br>Zip|	String | v2
data.officeAddress.city| Office Address City| String | v2
data.officeAddress.state| Office Address State| String | v2
data.officeAddress.zip|Office Address Zip| String | v2
placeOfPerformance|	Place of performance information. It can have below fields if available: Street<br> City<br> State<br>Zip|	JSON Object | v2
data.placeOfPerformance.streetAddress|  Pop Address | String | v2 
data.placeOfPerformance.streetAddress2 |  Pop Address2| String  | v2
data.placeOfPerformance.city | JSON Object| Pop City | v2
data.placeOfPerformance.city.code |  Pop City code | String  | v2
data.placeOfPerformance.city.name  |  Pop City name | String  | v2
data.placeOfPerformance.city.state | JSON Object | Pop City state | v2
data.placeOfPerformance.state.code | Pop city state code | String  | v2
data.placeOfPerformance.state.name  |  Pop city state name | String  | v2
data.placeOfPerformance.country | JSON Object| Pop Country | v2
data.placeOfPerformance.country.code  | Pop Country Code | String | v2
data.placeOfPerformance.country.name  | Pop Country name | String | v2
data.placeOfPerformance.zip  | Pop Country zip| String | v2
additionalInfoLink|	Any additional info link if available for the opportunity	|String| v2
uiLink	|Direct UI link to the opportunity. To view the opportunity on UI, user must have either a contracting officer or a Contracting Specialist role. If user hits the link without logging in, user is directed to 404 not found page |	String| v2
links	|Every record in a response has this links array consisting of: <br> rel: self<br>href: link to the specific opportunity itself. User should provide an API key to access the opportunity directly<br><br>Also, every response has a master links array consisting of:<br>    rel: self<br>href: link to the actual request. User should provide an API key to access the request|	Array| v2
resourceLinks | Direct URL to download attachments in the opportunity | Array of Strings| v2

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


### Example 1: Search by award type

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v2/search?limit=1&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/prodlike/opportunities/v2/search?limit=1&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&ptype=a&deptname=general<br>

Note: Request URL for alpha is used in this example
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

### Example 2: Updated v2 Endpoint with FH Information

<details>
    <summary>Request URL</summary>
Production URL: https://api.sam.gov/opportunities/v2/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2018&postedTo=05/10/2018&title=Driving <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/opportunities/v2/search?limit=10&api_key={User’s Public API Key}&postedFrom=01/01/2020&postedTo=05/10/2020 <br>
</details>

<details>
    <summary>Response (JSON Output)</summary>

Note: Response for one record is provided as an example <br>

<p>
<code><pre>
{
            "noticeId": "ff826a59eac743c4a1a07ff5e0cf3e3a",
            "title": "Test-Award notice-V2 27",
            "solicitationNumber": "test-123456789",
            "fullParentPathName": "GENERAL SERVICES ADMINISTRATION.FEDERAL ACQUISITION SERVICE.GSA/FAS CENTER FOR IT SCHEDULE PROG",
            "fullParentPathCode": "047.4732.47QTCA",
            "postedDate": "2020-07-02",
            "type": "Award Notice",
            "baseType": "Award Notice",
            "archiveType": "autocustom",
            "archiveDate": "2021-01-02",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": null,
            "naicsCode": null,
            "classificationCode": null,
            "active": "Yes",
            "award": {
                "date": "2020-12-01",
                "number": "4376487348950",
                "amount": "350567.00"
            },
            "pointOfContact": null,
            "description": "null",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "20405",
                "city": "WASHINGTON",
                "countryCode": "USA",
                "state": "DC"
            },
            "placeOfPerformance": null,
            "additionalInfoLink": null,
            "uiLink": "null",
            "links": [
                {
                    "rel": "self",
                    "href": "null"
                }
            ],
            "resourceLinks": null
        }
</pre></code>
</p>
</details>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/get-opportunities-v2.yml" download="get-opportunities-v2">OpenAPI File</a>


<details>
<summary>Get Opportunities Public API v2</summary>
<p>
<code><pre>
/v1/search:
    get:
      tags:
        - 'Public GET Opportunities API '
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

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)

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
2/18/2020 | v1.5| Added UEI information and versioning column and response example for awards
2/27/2020 | v1.6| Added ResourceLinks to Response Section
6/20/2020| v1.7| Added additional information field to point of contact parameter in the response
7/3/2020| v1.8| Updated field parameters to include all FH information for given notices in both request and response
9/14/2020| v1.9| Updated OpenAPI Specification section to include v2 endpoints
10/25/2020 | v1.91| Added new request field for status
05/12/2021 | v1.92| Changed Beta.SAM to SAM and Changed Beta to Prodution based on JIRA IAEDEV-51713
05/17/2021 | v1.93| Changed Beta to Prod and removed coming soon JIRA IAEDEV-51713
05/18/2021 | v1.94| Changed SAM.Gov to SAM.gov based on JIRA IAEDEV-51713
05/18/2021 | v1.95| Changed Prod to Production JIRA IAEDEV-51713
05/19/2021 | v1.96| Changed SAM.Gov to SAM.gov based on JIRA IAEDEV-51713
06/11/2021 | v1.97| Added inactive in status






<p><small><a href="#">Back to top</a></small></p>