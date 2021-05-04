---
title: Beta.SAM.Gov PSC Public API
banner-heading: Beta.SAM.Gov PSC Public API
---

## Overview

PSC API provides PSC data (PSC Code, PSC Name, PSC Full Name, Status, Parent PSC Code, Start Date, End date and updated date etc.) based on the request parameters. 
This API supports pagination as needed. 

**API Version: v1.0**

## Getting Started

Get PSC API can be accessed from Beta or Alpha environments via the following urls:

* Beta: <br> https://api.sam.gov/prod/locationservices/v1/api/publicpscdetails
* Alpha: <br> https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails

## Authentication and API Keys
User of this API must provide an API key to use this API. Request per day are limited based on the federal or non-federal or general roles. 

Note: 
* For production, users can request an API Key in their Profile under Account Details on https://beta.sam.gov/
* For prodlike, users can request an API Key in their Profile under Account Details on https://alpha.sam.gov/
* Rate limit for Federal User is 1000 requests/day
* Rate limit for Non-Federal User is 10 requests/day

#### User Account API Key Creation
* Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on beta.sam.gov
* User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
* If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.

## PSC API Request Parameters

User can search by any of the below request parameters

Request Parameters that API Accepts|Description|Mandatory?|Data Type
-----|-----|-----|-----
api_key|Public key of users|Yes|String
searchBy|	Users can search by: <br> group <br> parentpsc <br> psc <br><br> Note: If searchBy is used, then appropriate search term (q) respective to the searchBy should be provided |	No	|String
q	| Search term for users to search PSC data <br>Note: <br>*If searchBy = group, then enter q = product OR q = service OR q=RD to get respective PSC Codes* <br><br> *If searchBy = parentpsc, then enter q = any parent PSC code that users wish to search for*<br><br>*If searchBy = psc, then enter q= any PSC code that users wish to search for*<br><br>*If searchBy = group and q=product, then API provides PSC codes whose first 2 digits start with (10-99)*<br> <br>*If searchBy = group and q=service, then API provides PSC codes whose first 2 digits start with (B-Z) (1-9)*<br><br> *If searchBy = group and q=RD, then API provides PSC codes whose first digit starts with A*	|No|	String
size|	Size of PSC code|	No	|String
active	|Status of PSC Code: <br>Active = Y = Active PSC Code<br>Active = N = Inactive PSC Code <br>Active = ALL = Both active and inactive PSC code<br> Default value is Active = ALL	|No|	String
level1Category|	Numerical Value of the level 1 category. E.g. 12|	No|	String
level1CategoryName|	Name of a level 1 category. E.g. Weapons & Ammunition|	No|	String
level2Category	|Numerical Value of the level 2 category. E.g. 12.4|	No|	String
level2CategoryName|	Name of a level 1 category. E.g. Guns	|No	|String
startDateFrom	|Start Date Range From<br>*Note: Format is YYYY-MM-DD*|	No|	String
startDateTo |	Start Date Range To <br> *Note: Format is YYYY-MM-DD*|	No|	String
endStartFrom	|End Date Range From <br>*Note: Format is YYYY-MM-DD*	|No |	String
endStartTo|	End Date Range To<br> *Note: Format is YYYY-MM-DD*|	No|	String
updatedDateFrom|	Updated Date Range From <br> *Note: Format is YYYY-MM-DD*	|No|	String
updatedDateTo|	Updated Date Range To <br>  *Note: Format is YYYY-MM-DD*	|No	|String
limit	| This field must be a number. Total number of records to be retrieved per page. <br> *NOTE: If limit is not provided, this field will return maximum of 100 records* |	No|	Int
offset	| Indicates the page index. Default offset starts with 0 |	No	|Int

## PSC API Response Parameters

Based on the request parameters, API provides below response parameters.

Response parameters that API provides | Description | Data Type
-----|------|-----
totalRecords|	Total number of records in the response|	Number
pscID	|System generated ID of a PSC Code|	Int
pscCode|	PSC Code|	String
pscName|	PSC Name|	String
pscFullName	|PSC Full Name|	String
activeInd	| Active status indicator <br> activeInd = Y = active <br> activeInd = N = inactive	| String
pscNote|	PSC Code Notes|	String
pscinclude|	PSC Code Inclusion |	String
pscExclude|	PSC Code Exclusion |	String
parentPsccode|	PSC code of the parent PSC|	String
activeStartDate	|Start date of the PSC Code|	String
activeEndDate|	End date of the PSC Code|	String
updatedDate	|Date when PSC code was last updated|	String
level1Category|	Numerical Value of the level 1 category. E.g. 12|	String
level1CategoryName|	Name of a level 1 category. E.g. Weapons & Ammunition	|String
level2Category|	Numerical Value of the level 2 category. E.g. 12.4|	String
level2CategoryName|	Name of a level 1 category. E.g. Guns|	String
links |	This is an array consisting of: <br>"rel": "self"<br>"href" |	String

## Examples

URLs for production and staging:
* Beta (Production) Production URL: <br> https://api.sam.gov/prod/locationservices/v1/api/publicpscdetails
* Alpha (Staging) URL: <br> https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails

### Example 1: Search for PSC Codes with start date between a given date range

<details>
    <summary>Request URL</summary>

 https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?api_key={User’s Public API Key}&active=ALL&startDateFrom=1978-01-01&endDateTo=2015-01-01<br>
 <br>

Note: Request URL for staging is used in this example
</details>

<details>
    <summary>Response</summary>

Note: By default API brings back only top 100 records. Example below shows only top few records for reference <br>

<p>
<code><pre>
{
  "totalRecords": "2641",
  "productServiceCodeList": [
    {
      "pscId": 2,
      "pscCode": "1000",
      "pscName": "EXPIRED",
      "activeInd": "N",
      "parentPscCode": "10",
      "activeStartDate": "2003-12-12",
      "activeEndDate": "2006-10-01",
      "updatedDate": "2017-07-09",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1000"
        }
      ]
    },
    {
      "pscId": 4,
      "pscCode": "1005",
      "pscName": "GUNS, THROUGH 30 MM",
      "pscFullName": "Guns, through 30 mm",
      "pscInclude": "Machine guns; Brushes, Machine Gun and Pistol.",
      "activeInd": "N",
      "pscExclude": "Turrets, Aircraft.",
      "parentPscCode": "10",
      "activeStartDate": "1978-10-15",
      "activeEndDate": "2011-09-30",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1005"
        }
      ]
    },
    {
      "pscId": 6,
      "pscCode": "1010",
      "pscName": "GUNS, OVER 30 MM UP TO 75 MM",
      "pscFullName": "Guns, over 30 mm up to 75 mm",
      "pscInclude": "Breech Mechanisms; Mounts Grenade Launchers for Integral-Cartridge Grenades, Single-Shot or Auto-Loading or Automatic-Firing.",
      "activeInd": "N",
      "parentPscCode": "10",
      "activeStartDate": "1978-10-15",
      "activeEndDate": "2011-09-30",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1010"
        }
      ]
    }
</pre></code>
</p>
</details>

### Example 2: Search for PSC codes starting with ‘15’

<details>
    <summary>Request URL</summary>
 
 https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?api_key={User’s Public API Key}&q=15&active=ALL<br>
 <br>

Note: Request URL for staging is used in this example

</details>

<details>
    <summary>Response</summary>

<p>
<code><pre>
{
  "totalRecords": "13",
  "productServiceCodeList": [
    {
      "pscId": 128,
      "pscCode": "15",
      "pscName": "AIRCRAFT/AIRFRAME STRUCTURE COMPTS",
      "activeInd": "N",
      "activeStartDate": "1979-10-01",
      "activeEndDate": "2015-09-30",
      "updatedDate": "2017-07-09",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=15"
        }
      ]
    },
    {
      "pscId": 129,
      "pscCode": "15",
      "pscName": "AEROSPACE CRAFT AND STRUCTURAL COMPONENTS",
      "activeInd": "Y",
      "activeStartDate": "2015-10-01",
      "updatedDate": "2017-07-09",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=15"
        }
      ]
    },
    {
      "pscId": 130,
      "pscCode": "1510",
      "pscName": "AIRCRAFT, FIXED WING",
      "pscFullName": "Aircraft, Fixed Wing",
      "activeInd": "Y",
      "pscNote": "This class includes only complete aircraft.  End  items, assemblies, parts, attachments, or accessories for  use in or on fixed wing aircraft are classified in classes  other than this class.",
      "parentPscCode": "15",
      "activeStartDate": "1978-10-15",
      "updatedDate": "2017-07-09",
      "level1Category": "11",
      "level1CategoryName": "Aircraft, Ships/Submarines & Land Vehicles",
      "level2Category": "11.1",
      "level2CategoryName": "Aircraft",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=1510"
        }
      ]
    },
    {
      "pscId": 131,
      "pscCode": "1520",
      "pscName": "AIRCRAFT, ROTARY WING",
      "pscFullName": "Aircraft, Rotary Wing",
      "pscInclude": "Helicopters.",
      "activeInd": "Y",
      "pscNote": "This class includes only complete aircraft.  End items, assemblies, parts, attachments, or accessories for use in or on rotary wing aircraft are classified in classes other than this class.",
      "parentPscCode": "15",
      "activeStartDate": "1978-10-15",
      "updatedDate": "2017-07-09",
      "level1Category": "11",
      "level1CategoryName": "Aircraft, Ships/Submarines & Land Vehicles",
      "level2Category": "11.1",
      "level2CategoryName": "Aircraft",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1520"
        }
      ]
    },
    {
      "pscId": 132,
      "pscCode": "1540",
      "pscName": "GLIDERS",
      "pscFullName": "Gliders",
      "pscInclude": "Motorized Gliders.",
      "activeInd": "Y",
      "pscNote": "This class includes only complete gliders.  End items, assemblies, parts, attachments, or accessories for use in or on gliders are classified in classes other than this class.",
      "parentPscCode": "15",
      "activeStartDate": "1979-05-15",
      "updatedDate": "2017-07-09",
      "level1Category": "11",
      "level1CategoryName": "Aircraft, Ships/Submarines & Land Vehicles",
      "level2Category": "11.1",
      "level2CategoryName": "Aircraft",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1540"
        }
      ]
    },
    {
      "pscId": 133,
      "pscCode": "1550",
      "pscName": "DRONES",
      "pscFullName": "Drones",
      "pscInclude": "Drones specifically designed for such uses as targets, training, surveillance, missile evaluation, and photographic  reconnaissance.",
      "activeInd": "N",
      "pscExclude": "Piloted aircraft and guided missiles converted to drone use.",
      "pscNote": "This class includes only complete drones. End items, assemblies, parts, attachments, or accessories for use in or on drones are classified in classes other than this class.",
      "parentPscCode": "15",
      "activeStartDate": "1978-10-15",
      "activeEndDate": "2011-09-30",
      "updatedDate": "2017-07-09",
      "level1Category": "14",
      "level1CategoryName": "Sustainment S&E",
      "level2Category": "14.1",
      "level2CategoryName": "Drones",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1550"
        }
      ]
    },
    {
      "pscId": 134,
      "pscCode": "1550",
      "pscName": "UNMANNED AIRCRAFT",
      "pscFullName": "Drones",
      "pscInclude": "Drones specifically designed for such uses as targets, training, surveillance, missile evaluation, and photographic  reconnaissance.",
      "activeInd": "Y",
      "pscExclude": "Piloted aircraft and guided missiles converted to drone use.",
      "pscNote": "This class includes only complete drones. End items, assemblies, parts, attachments, or accessories for use in or on drones are classified in classes other than this class.",
      "parentPscCode": "15",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "14",
      "level1CategoryName": "Sustainment S&E",
      "level2Category": "14.1",
      "level2CategoryName": "Drones",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1550"
        }
      ]
    },
    {
      "pscId": 135,
      "pscCode": "1555",
      "pscName": "SPACE VEHICLES",
      "activeInd": "Y",
      "pscNote": "This class  includes only complete space vehicles in assembled or unassembled form.",
      "parentPscCode": "15",
      "activeStartDate": "2015-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "11",
      "level1CategoryName": "Aircraft, Ships/Submarines & Land Vehicles",
      "level2Category": "11.1",
      "level2CategoryName": "Aircraft",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1555"
        }
      ]
    },
    {
      "pscId": 136,
      "pscCode": "1560",
      "pscName": "AIRFRAME STRUCTURAL COMPONENTS",
      "pscFullName": "Airframe Structural Components",
      "pscInclude": "Flight Control Surfaces, internal and external Auxiliary Fuel Tanks; Exhaust Systems, Pylons, Trim Tabs; Aircraft.",
      "activeInd": "Y",
      "pscExclude": "Fitted Covers; Helicopter Rotor Brake System and Components; Aircraft Loose Equipment and Alternate Mission Configuration Equipment stored on board the Aircraft.",
      "pscNote": "This class includes fabricated system parts that are permanently attached or peculiar to the integral airframe of an aircraft, such as support structural components, spars, ribs, ailerons, stablizers, bulkheads.",
      "parentPscCode": "15",
      "activeStartDate": "1978-10-15",
      "updatedDate": "2017-07-09",
      "level1Category": "14",
      "level1CategoryName": "Sustainment S&E",
      "level2Category": "14.2",
      "level2CategoryName": "Engines, Components & Spt Eq",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1560"
        }
      ]
    },
    {
      "pscId": 10,
      "pscCode": "1020",
      "pscName": "GUNS OVER 125 MM THROUGH 150 MM",
      "pscFullName": "Guns, over 125 mm through 150 mm Includes Breech Mechanisms, Power Drives; Gun Shields.",
      "activeInd": "N",
      "parentPscCode": "10",
      "activeStartDate": "1978-10-15",
      "activeEndDate": "2011-09-30",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1020"
        }
      ]
    },
    {
      "pscId": 9,
      "pscCode": "1020",
      "pscName": "GUNS, OVER 125MM THROUGH 150MM",
      "pscFullName": "Guns, over 125 mm through 150 mm Includes Breech Mechanisms, Power Drives; Gun Shields.",
      "activeInd": "Y",
      "parentPscCode": "10",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1020"
        }
      ]
    },
    {
      "pscId": 11,
      "pscCode": "1025",
      "pscName": "GUNS, OVER 150MM THROUGH 200MM",
      "pscFullName": "Guns, over 150 mm through 200 mm Includes Firing Platforms; Mounts; Gun Shields.",
      "activeInd": "Y",
      "parentPscCode": "10",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1025"
        }
      ]
    },
    {
      "pscId": 12,
      "pscCode": "1025",
      "pscName": "GUNS OVER 150 MM THROUGH 200 MM",
      "pscFullName": "Guns, over 150 mm through 200 mm Includes Firing Platforms; Mounts; Gun Shields.",
      "activeInd": "N",
      "parentPscCode": "10",
      "activeStartDate": "1978-10-15",
      "activeEndDate": "2011-09-30",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1025"
        }
      ]
    }
  ],
  "links": [
    {
      "rel": "self",
      "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?q=15&active=ALL"
    }
  ]
}
</pre></code>
</p>
</details>


### Example 3: Search for PSC Codes which belong to product group

<details>
    <summary>Request URL</summary>

https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?api_key={User’s Public API Key}&searchBy=group&q=product&active=ALL&limit=10<br>
<br>

Note: Request URL for staging is used in this example

</details>

<details>
    <summary>Response</summary>

Note: By default API brings back only top 100 records. Example below shows only top few records for reference<br>

<p>
<code><pre>
{
  "totalRecords": "114",
  "productServiceCodeList": [
    {
      "pscId": 117,
      "pscCode": "1398",
      "pscName": "SPECIALIZED AMMUNITION HANDLING AND SERVICING EQUIPMENT",
      "pscFullName": "Specialized Ammunition Handling and Servicing Equipment.",
      "pscInclude": "Handling and servicing equipment specially designed for use on or with rockets and conventional ammunition.",
      "activeInd": "Y",
      "pscExclude": "Handling and servicing equipment specially designed for use on or with rocket and pyrotechnic launchers; Ammunition maintenance and repair shop specialized equipment; Handling equipment specially designed for aircraft or airfield use.",
      "parentPscCode": "13",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.1",
      "level2CategoryName": "Ammunition & Explosives",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?searchby=psc&q=1398"
        }
      ]
    },
    {
      "pscId": 127,
      "pscCode": "1450",
      "pscName": "GUIDED MISSILE HANDLING AND SERVICING EQUIPMENT",
      "pscFullName": "Guided Missile Handling and Servicing Equipment",
      "pscInclude": "Specially Designed Trucks and Trailers for use in transporting guided missiles; Specially Designed Slings, Hoists, Jacks, and Blowers; Self-propelled Vehicles and Trailers, Specially Designed for Guided Missile Handling or Servicing; Covers, Guided Missile; Conditioning Kits and Sets, Controlled Environment.",
      "activeInd": "Y",
      "pscExclude": "Guided Missile Launchers (FSC 1440); Aircraft Handling and Servicing Equipment (FSC 1730).",
      "parentPscCode": "14",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.3",
      "level2CategoryName": "Guided Missiles",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=1450"
        }
      ]
    }
</pre></code>
</p>
</details>

### Example 4: Search for PSC Codes which belong to a category

<details>
    <summary>Request URL</summary>

https://api-alpha.sam.gov/prodlike/locationservices/v1/api/publicpscdetails?api_key={User’s Public API Key}& level1Category=12<br>
<br>

Note: Request URL for staging is used in this example

</details>

<details>
    <summary>Response</summary>

Note: By default API brings back only top 100 records. Example below shows only top few records for reference<br>

<p>
<code><pre>
{
  "totalRecords": "77",
  "productServiceCodeList": [
    {
      "pscId": 3,
      "pscCode": "1005",
      "pscName": "GUNS, THROUGH 30MM",
      "pscFullName": "Guns, through 30 mm",
      "pscInclude": "Machine guns; Brushes, Machine Gun and Pistol.",
      "activeInd": "Y",
      "pscExclude": "Turrets, Aircraft.",
      "parentPscCode": "10",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=1005"
        }
      ]
    },
    {
      "pscId": 5,
      "pscCode": "1010",
      "pscName": "GUNS, OVER 30MM UP TO 75MM",
      "pscFullName": "Guns, over 30 mm up to 75 mm",
      "pscInclude": "Breech Mechanisms; Mounts Grenade Launchers for Integral-Cartridge Grenades, Single-Shot or Auto-Loading or Automatic-Firing.",
      "activeInd": "Y",
      "parentPscCode": "10",
      "activeStartDate": "2011-10-01",
      "updatedDate": "2017-07-09",
      "level1Category": "12",
      "level1CategoryName": "Weapons & Ammunition",
      "level2Category": "12.4",
      "level2CategoryName": "Guns",
      "links": [
        {
          "rel": "self",
          "href": "https://api-alpha.sam.gov/prodlike /locationservices/v1/api/publicpscdetails?searchby=psc&q=1010"
        }
      ]
    }
</pre></code>
</p>
</details>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/psc.yml" download="psc">OpenAPI File</a>

<details>
<summary>Public PSC Details</summary>
<p>
<code><pre>
/v1/api/publicpscdetails:
    get:
      tags:
        - psc-controller
      summary: 'API to get a list of product service codes for IAE'
      operationId: getPublicPscDetailsUsingGET
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        -
          name: api_key
          in: query
          description: api_key
          required: true
          type: string
        -
          name: searchby
          in: query
          description: searchby
          required: false
          type: string
        -
          name: q
          in: query
          description: q
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
        -
          name: size
          in: query
          description: size
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
        -
          name: active
          in: query
          description: active
          required: false
          type: string
          default: Y
        -
          name: advanceSearch
          in: query
          description: advanceSearch
          required: false
          type: string
          default: N
        -
          name: startDateFrom
          in: query
          description: startDateFrom
          required: false
          type: string
        -
          name: startDateTo
          in: query
          description: startDateTo
          required: false
          type: string
        -
          name: endDateFrom
          in: query
          description: endDateFrom
          required: false
          type: string
        -
          name: endDateTo
          in: query
          description: endDateTo
          required: false
          type: string
        -
          name: updatedDateFrom
          in: query
          description: updatedDateFrom
          required: false
          type: string
        -
          name: updatedDateTo
          in: query
          description: updatedDateTo
          required: false
          type: string
        -
          name: asOfDate
          in: query
          description: asOfDate
          required: false
          type: string
        -
          name: level1Category
          in: query
          description: level1Category
          required: false
          type: string
        -
          name: level1CategoryName
          in: query
          description: level1CategoryName
          required: false
          type: string
        -
          name: level2Category
          in: query
          description: level2Category
          required: false
          type: string
        -
          name: level2CategoryName
          in: query
          description: level2CategoryName
          required: false
          type: string
        -
          name: offset
          in: query
          description: offset
          required: false
          type: integer
          format: int32
        -
          name: limit
          in: query
          description: limit
          required: false
          type: integer
          format: int32
      responses:
        '200':
          description: OK
          schema:
            $ref: '#/definitions/ProductServiceCodeWrapper'
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
-----|-----
User enters an invalid date in startDateFrom. E.g. 201-hh-0j	|"Please pass a valid date for startDateFrom in the format yyyy-mm-dd"
User enters an invalid date in startDateTo. E.g. 201-hh-0j|	"Please pass a valid date for startDateTo in the format yyyy-mm-dd"
User enters an invalid date in endDateFrom. E.g. 201-hh-0j|	"Please pass a valid date for endDateFrom in the format yyyy-mm-dd"
User enters an invalid date in endDateTo. E.g. 201-hh-0j	|"Please pass a valid date for endDateTo in the format yyyy-mm-dd"
User enters an invalid date in updatedDateFrom. E.g. 201-hh-0j|	"Please pass a valid date for updatedDateFrom in the format yyyy-mm-dd"
User enters an invalid date in updatedDateTo. E.g. 201-hh-0j	|"Please pass a valid date for  updatedDateTo in the format yyyy-mm-dd"
User enters a startDateFrom greater than startDateTo	|"startDateFrom cannot be greater than startDateTo"
User enters a endDateFrom greater than endDateFrom|	"endDateFrom cannot be greater than endDateFrom "
User enters a updatedDateFrom greater than updatedDateTo|	"updatedDateFrom cannot be greater than updatedDateTo"

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [www.fsd.gov](https://www.fsd.gov)

## Change Log

Date | Version | Description
------|---------------|---------
5/20/2019 | v1.0 | Base Version
8/6/2019 | v1.1| Updated format
12/2/2019 | v1.2| Added OpenAPI Specification
3/18/2020| v1.3| Location APIs Added
9/8/2020 |v1.2| Updated Formatting

<p><small><a href="#">Back to top</a></small></p>