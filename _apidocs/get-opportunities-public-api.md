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

Request Parameters that API accepts	| Description | Mandatory?| Data Type
----- | ----- | ----- | -----
api_key	| Public Key of users	| Yes|	String
ptype |	Procurement Type. Below are the available Procurement Types: <br> u= Justification (J&A) <br>p = Pre solicitation <br>a = Award Notice <br>r = Sources Sought <br>s = Special Notice <br>g = Sale of Surplus Property <br>k = Combined Synopsis/Solicitation <br>i = Intent to Bundle Requirements (DoD-Funded) <br><br> Note: Below services are now retired:<br>f = Foreign Government Standard <br>l = Fair Opportunity / Limited Sources  <br> <br>Use Justification (u) instead of fair Opportunity 	|No	|String
solnum|	Solicitation Number|	No|	String
noticeid| Notice ID | No | String
title|	Title|	No	|String
postedFrom	| Posted date From <br>Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes|	String
postedTo|	Posted date To  Format must be MM/dd/yyyy <br> Note: Date range between Posted Date From and To is 1 year	|Yes	|String
deptname |	Department Name (L1)	|No|	String
subtier|	Agency Name (L2)| 	No|	String
state|	Place of Performance (State)|	No	|String
zip|	Place of Performance (Zip code)|	No|	String
typeOfSetAside|	[Refer Set-Aside Value Section](#set-aside-values)    |No	|String
typeOfSetAsideDescription	|Set Aside code Description. See above descriptions mentioned against each of the Set Aside Code|	No|	String
ncode|	NAICS Code. This code is maximum of 6 digits|	No|	String
ccode|	Classification Code|	No|	String
rdlfrom	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String
rdlto	|Response Deadline date. Format must be MM/dd/yyyy <br>Note: If response date From & To is provided, then the date range is 1 year|	No|	String
limit	|Total number of records to be retrieved per page. This field must be a number <br> Max Value = 1000|	Yes	|Int
offset	|Indicates the page index. Default offset starts with 0 |	No|	Int

## Get Opportunities Response Parameters

Based on the request parameters, API provides below response parameters.

Request Parameters that API accepts	| Description | Data Type
----- | ----- | ----- 
totalRecords|	Total number of records for the search	|Number
limit|	Limit entered by a user while making the request i.e. total number of records that user wished to retrieve per page|	Number
offset|	Page index specified by a user. Default offset starts with 0 if user does not provide any offset in the request|	Number
title	|Opportunity Title|	String
solicitationNumber|	Solicitation Number |	String
department|	Department (L1)	|String
subTier|	Sub-Tier (L2)|	String
office|	Office (L3)	|String
postedDate|	Opportunity Posted Date <br> YYYY-MM-DD HH:MM:SS	|String
type|	Opportunity current type|	String
baseType|	Opportunity original type|	String
archiveType	|Archive Type	|String
archiveDate	|Archived Date	|String
setAside	|Set Aside Description	|String
setAsideCode	|Set Aside Code	|String
reponseDeadLine	|Response Deadline Date	|String
naicsCode	|NAICS Code. This code is maximum of 6 digits	|String
classificationCode	|Classification Code	|String
active|	If Active = Yes, then the opportunity is active, if No, then opportunity is Archived| String
award|	Award Information (If Available): <br> Award amount <br>Awardee <br> Award date <Br> Award Number|	JSON
pointofContact|	Point of Contact Information. It can have below fields if available: <br> Fax <br>Type<br> Email <br>Phone<br> Title<br> Full name	|JSON
description|	A link to an opportunity description. <br>Note: To download the description, user should append the public API Key. If no description is available then, user is shown an error message “ Description not found”|	String
organizationType|	Type of an organization – department/sub-tier/office|	String
officeAddress|	Office Address Information. It can have below fields if available: <br> City<br> State<br>Zip|	String
placeOfPerformance|	Place of performance information. It can have below fields if available: Street<br> City<br> State<br>Zip|	JSON
additionalInfoLink|	Any additional info link if available for the opportunity	|String
uiLink	|Direct UI link to the opportunity. To view the opportunity on UI, user must have either a contracting officer or a Contracting Specialist role. If user hits the link without logging in, user is directed to 404 not found page |	String
links	|Every record in a response has this links array consisting of: <br> rel: self<br>href: link to the specific opportunity itself. User should provide an API key to access the opportunity directly<br><br>Also, every response has a master links array consisting of:<br>    rel: self<br>href: link to the actual request. User should provide an API key to access the request|	Array

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
    }
</pre></code>
</p>
</details>

### Example 2: Search by pre-solicitation type

<details>
    <summary>Request URL</summary>

Production URL: https://api.sam.gov/prod/opportunities/v1/search?limit=10&api_key={User’s Public API Key}  &postedFrom=01/01/2018&postedTo=05/10/2018&ptype=p <br>
 <br>
Alpha URL: https://api-alpha.sam.gov/prodlike/opportunities/v1/search?limit=10&api_key={User’s Public API Key}  &postedFrom=01/01/2018&postedTo=05/10/2018&ptype=p <br>
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

### Example 3: Search for opportunities by a given title

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
<a href="v1/GET Opportunities YAML.yml" download="OpenAPI">OpenAPI File</a>

<details>
<summary>Create Draft Opportunity</summary>
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
            type: string
          collectionFormat: multi
        -
          name: noticeid
          in: query
          description: 'Enter Notice Id.'
          required: false
          type: string
        -
          name: solnum
          in: query
          description: 'Enter Solicitation number.'
          required: false
          type: string
        -
          name: title
          in: query
          description: 'Enter Title.'
          required: false
          type: string
        -
          name: deptname
          in: query
          description: 'Enter Department Name.'
          required: false
          type: string
        -
          name: subtier
          in: query
          description: 'Enter SubTier Name.'
          required: false
          type: string
        -
          name: state
          in: query
          description: 'Enter Place of performence State.'
          required: false
          type: string
        -
          name: zip
          in: query
          description: 'Enter Place of performence Zip.'
          required: false
          type: string
        -
          name: typeOfSetAsideDescription
          in: query
          description: 'Enter type Of SetAside Description.'
          required: false
          type: string
        -
          name: typeOfSetAside
          in: query
          description: 'Enter type Of SetAside Code.'
          required: false
          type: string
        -
          name: ncode
          in: query
          description: 'Enter Naics code.'
          required: false
          type: string
        -
          name: ccode
          in: query
          description: 'Enter Classification code.'
          required: false
          type: string
        -
          name: postedFrom
          in: query
          description: "Enter posted from date in mm/dd/yyyy format. Required when providing\nlimit."
          required: false
          type: string
        -
          name: postedTo
          in: query
          description: "Enter posted to date in mm/dd/yyyy format. Required when providing\nlimit."
          required: false
          type: string
        -
          name: rdlfrom
          in: query
          description: 'Enter response deadline in mm/dd/yyyy format'
          required: false
          type: string
        -
          name: rdlto
          in: query
          description: 'Enter response deadline to in mm/dd/yyyy format'
          required: false
          type: string
        -
          name: limit
          in: query
          description: 'Enter limit to fetch number of records'
          required: true
          type: string
        -
          name: offset
          in: query
          description: 'Enter offset value'
          required: true
          type: string
          default: '0'
        -
          name: api_key
          in: query
          description: 'Enter the Public API Key.'
          required: true
          type: string
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
        type: string
      email:
        type: string
      email_verified:
        type: boolean
      enabled:
        type: boolean
      expires_at:
        type: string
      first_name:
        type: string
      id:
        type: string
      last_name:
        type: string
      registration_source:
        type: string
      roles:
        type: array
        items:
          type: string
      settings:
        $ref: '#/definitions/Settings'
  Creator:
    type: object
    properties:
      username:
        type: string
  APIKeyUser:
    type: object
    properties:
      api_key:
        type: string
      api_key_hides_at:
        type: string
      api_key_preview:
        type: string
      created_at:
        type: string
      creator:
        $ref: '#/definitions/Creator'
      email:
        type: string
      email_verified:
        type: boolean
      enabled:
        type: boolean
      expires_at:
        type: string
      first_name:
        type: string
      id:
        type: string
      last_name:
        type: string
      registration_ip:
        type: string
      registration_origin:
        type: string
      registration_referer:
        type: string
      registration_source:
        type: string
      registration_user_agent:
        type: string
      roles:
        type: array
        items:
          type: string
      settings:
        $ref: '#/definitions/Settings'
      terms_and_conditions:
        type: boolean
      throttle_by_ip:
        type: boolean
      updated_at:
        type: string
      updater:
        $ref: '#/definitions/Updater'
      use_description:
        type: string
      website:
        type: string
  SystemAccountDetail:
    type: object
    properties:
      id:
        type: string
      isFedCapable:
        type: boolean
      isGov:
        type: boolean
  Feature:
    type: object
    properties:
      featureKey:
        type: string
      featureValue:
        type: boolean
  SystemAccountDisableUsers:
    type: object
    properties:
      arrayOfSAUserNames:
        type: array
        items:
          type: string
  Response:
    type: object
    properties:
      errorMessage:
        type: string
      message:
        type: string
      successMessage:
        type: string
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
        type: string
      limit:
        type: integer
        format: int32
      limit_by:
        type: string
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
        type: string
      firstName:
        type: string
      lastName:
        type: string
  Updater:
    type: object
    properties:
      username:
        type: string
  FilteredAPIKeyUserDetails:
    type: object
    properties:
      _links:
        type: array
        items:
          $ref: '#/definitions/Link'
      apiKey:
        type: string
      apiKeyExpiryDate:
        type: string
      limit:
        type: string
      roles:
        type: array
        items:
          type: string
  Settings:
    type: object
    properties:
      id:
        type: string
      rate_limit_mode:
        type: string
      rate_limits:
        type: array
        items:
          $ref: '#/definitions/RateLimit'
  Link:
    type: object
    properties:
      deprecation:
        type: string
      href:
        type: string
      hreflang:
        type: string
      media:
        type: string
      rel:
        type: string
      templated:
        type: boolean
      title:
        type: string
      type:
        type: string
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

* Reach out to the beta.sam.gov team at [www.fsd.gov](mailto:www.fsd.gov)

## Change Log

Date | Version | Description
------|---------------|---------
5/20/19 | v0.1 | Base Version
8/6/19 | v0.2| Format Updated
10/17/19 | v0.3| Added Set-Aside Code
10/23/19 | v0.4| Set-Aside Values Updated
10/24/19| v0.5| Office Address Description Updated 
11/1/19| v1.0| Initial Release Finalized


<p><small><a href="#">Back to top</a></small></p>
