---
title: Beta.SAM.Gov Opportunity Management API 
banner-heading: Beta.SAM.Gov Opportunity Management API
---

## Overview

The Opportunity Management API will allow authorized users to submit and request Opportunities data. 

**Note:** The specifications on this page are for a soon to be released API.  Check back here or be in contact with IAE for the release date and testing session.

**Note:** Operations marked with * (asterisk) are not available at this time

## Getting Started

Opportunity Management API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov/prod/opportunity/v1/api/
* Alpha: https://api-alpha.sam.gov/prodlike/opportunity/v1/api/

* Beta: https://api.sam.gov/prod/opportunity/v2/ (coming soon)
* Alpha: https://api-alpha.sam.gov/prodlike/opportunity/v2/ 

**REST API Workflow Chart**

To view the current workflow of REST APIs, refer below file:
* Workflow Chart  <br><a href="v1/Opportunity Management REST Workflow Updated.pdf" download="Opportunity Management REST Workflow Updated">Download</a>

###	Authentication and Authorization

#### Generating a System Account API Key
* Users registered with a government email address and have appropriate System Account Manager or System Account Admin role may request a system account for data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Request System Account” from the widget and fill out the required sections with appropriate Contract Opportunities permissions.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the key.


#### System Account Authentication
In order to utilize the Contract Opportunity Management API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read and Write permissions under Contract Opportunity domain.

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
In order to perform an Opportunity Management API operation, the following is required:
* beta.SAM.GOV user account with either 'Administrator', 'Contracting Officer' role or 'Contracting Specialist' role. Permissions for operations by role are listed in the table below.<br/>

To submit any opportunity notice type (except “Special Notice”) for an office, user should provide Federal Hierarchy (FH) Organization ID or Activity Address Code (AAC) (procurement/non-procurement). To submit Special Notice opportunity, user should provide Federal Hierarchy (FH) Organization ID of office, sub-tier or department or Activity Address Code (AAC) (procurement/non-procurement) or [other codes] for sub-tier and department. <br/>
**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

Operation    | Administrator <br/>(Contract Opportunities domain)| Contracting Officer | Contracting Specialist
-------------|---------------|---------------------|------------------------------
Create Draft Opportunity | Yes | Yes | Yes
Create and Publish Opportunity | Yes | Yes | No
Publish Draft Opportunity | Yes | Yes | No
Revise Published Opportunity | Yes | Yes | Yes
Update Draft Opportunity | Yes | Yes | Yes
Get Opportunity History | Yes | Yes | Yes
Delete Draft Opportunity | Yes | Yes | No
Delete Notice|	Yes|	Yes|	No
Get List of Opportunities | Yes | Yes | Yes
Get an Opportunity by Opportunity ID | Yes | Yes | Yes
Cancel Published Opportunity | Yes | Yes | No
Uncancel Canceled Opportunity | Yes | Yes | No
Archive Opportunity | Yes | Yes | Yes
Unarchive Archived Opportunity | Yes | Yes | No
Create Resource in Draft Opportunity| Yes | Yes | Yes
Update Resource in Draft Opportunity| Yes | Yes | Yes
Delete Resource in Draft Opportunity| Yes | Yes | Yes
Download Attachment as Original File Type | Yes | Yes | Yes
Download All Attachments as Zip for an Opportunity | Yes | Yes | Yes
Download Metadata for All Attachments by Resource ID|	Yes|	Yes|	Yes
Download Metadata for All Attachments by Oppoprtunity ID	|Yes	|Yes	|Yes
Get Attachment | Yes | Yes | Yes
Get IVL | Yes | Yes | Yes
IVL settings | Yes | Yes | Yes
Get Authorized Party | Yes | Yes | No
Add Authorized Party  | Yes | Yes | No
Check Unique Solicitation Number | Yes | Yes | Yes
Get Related Opportunities | Yes | Yes | Yes



<p><small><a href="#">Back to top</a></small></p>

#### Secure Attachment Authorization

In order to download secure attachment, user should have at least one of the below permissions:
* Create Draft Attachment
* Edit Draft Attachment
* Delete Draft Attachment

### Lookup/Meta-Data

#### Notice Types

The API includes specific methods to submit each of the base notice types (i.e. presolicitation, combined/synopsis, award, etc.). You will find these outlined in the sections below.

| Code              | Description                                   |
| ----------------- | --------------------------------------------- |
| __o__	            | Solicitation                                  |
| __p__	            | Presolicitation                               |
| __k__	            | Combined Synopsis/Solicitation                |
| __r__	            | Sources Sought                                |
| __g__	            | Sale of Surplus Property                      |
| __s__	            | Special Notice                                |
| __i__	            | Intent to Bundle Requirements (DoD- Funded)   |
| __a__	            | Award Notice                                  |
| __u__	            | Justification and Authorization               |

<p><small><a href="#">Back to top</a></small></p>

#### Related Notices

The table below lists notices that can be related.

|*Below Notice can be Related to:*|SOURCES SOUGHT | PRESOLICITATION | COMBINED SYNOPSIS | SOLICITATION| AWARD | SALE OF SURPLUS | INTENT TO BUNDLE | JUSTIFICATION | SPECIAL NOTICE
-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|**SOURCES SOUGHT**||O|O|O|O|O|||O
|**PRESOLICITATION**|O||O|O||O|O|O|O
|**COMBINED SYNOPSIS**|O|O|||O||O|O|O
|**SOLICITATION**|O|O|||O||O|O|O
|**AWARD**|||O|O|||O|O|O
|**SALE OF SURPLUS**|O|O|||||O|O|O
|**INTENT TO BUNDLE**||O|O|O|O|O||O|O
|**JUSTIFICATION**||O|O|O|O|O|O||O
|**SPECIAL NOTICE**|O|O|O|O|O|O|O|O|

#### Set-Aside Values
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

<p><small><a href="#">Back to top</a></small></p>

#### Stauth Valid Values
Below table captures stauth values to use while making requests as needed.

Code | Description
-----|------------
1 | Urgency
2 | Only One Source (except brand name)
3 | Follow-on Delivery Order Following Competitive Initial Order
4 | Minimum Guarantee
5 | Other Statutory Authority (e.g. 8a, etc.)
brand | FAR 6.302-1(c) - Brand name
far1 | FAR 6.302-1 - Only one responsible source (except brand name)
far2 | FAR 6.302-2 - Unusual and compelling urgency
far3 | FAR 6.302-3 - Industrial mobilization; engineering, developmental or research capability; or expert services
far4 | FAR 6.302-4 - International agreement
far5 | FAR 6.302-5 - Authorized or required by statute
far6 | FAR 6.302-6 - National security
far7 | FAR 6.302-7 - Public interest
far13	| FAR 13.5 - Simplified Procedures for One Source

<p><small><a href="#">Back to top</a></small></p>

#### Time Zone values
Refer below table for valid Solicitation response date Time Zones:

Code | Description
-----|------------
America/Los_Angeles |(UTC-08:00)PACIFIC STANDARD TIME, LOS ANGELES, USA
America/Los_Angeles |(UTC-07:00) PACIFIC DAYLIGHT TIME, LOS ANGELES, USA
America/Denver | (UTC−07:00) MOUNTAIN STANDARD TIME, DENVER, USA
America/Denver |  (UTC-06:00) MOUNTAIN DAYLIGHT TIME, DENVER, USA
America/Chicago | (UTC-06:00) CENTRAL STANDARD TIME, CHICAGO, USA
America/Chicago | (UTC-05:00) CENTRAL DAYLIGHT TIME, CHICAGO, USA
America/New_York | (UTC-05:00) EASTERN STANDARD TIME, NEW YORK, USA
America/New_York | (UTC-04:00) EASTERN DAYLIGHT TIME, NEW YORK, USA
Pacific/Samoa | (UTC-11:00) PAGO PAGO, AMERICAN SAMOA
Pacific/Honolulu | (UTC-10:00) HONOLULU, HAWAII, USA
Pacific/Wellington | (UTC+13:00) WELLINGTON, NEW ZEALAND
America/Anchorage | (UTC-08:00) ANCHORAGE, ALASKA, USA
America/Vancouver | (UTC-07:00) VANCOUVER, BRITISH COLUMBIA, CANADA
America/Mazatlan | (UTC-06:00) LA PAZ, MEXICO
America/Managua | (UTC-06:00) MANAGUA, NICARAGUA
America/Mexico_City | (UTC-05:00) MEXICO CITY, MEXICO
America/Costa_Rica | (UTC-06:00) SAN JOSE, COSTA RICA
America/Winnipeg	| (UTC-05:00) WINNIPEG, MANITOBA, CANADA
America/Bogota | (UTC-05:00) BOGOTA, COLOMBIA
America/Lima | (UTC-05:00) LIMA, PERU
America/Montreal |(UTC-04:00) MONTREAL, QUEBEC, CANADA
America/Quito | (UTC-05:00) QUITO, ECUADOR
America/Panama | (UTC-05:00) PANAMA CITY, PANAMA
America/Santiago | (UTC-03:00) SANTIAGO, CHILE
America/Toronto | (UTC-04:00) TORONTO, ONTARIO, CANADA
America/Asuncion | (UTC-03:00) ASUNCION, PARAGUAY
America/Argentina/Buenos_Aires | (UTC-03:00) BUENOS AIRES, ARGENTINA
America/Goose_Bay | (UTC-03:00) GOOSE BAY, LABRADOR, CANADA
America/Halifax |(UTC-03:00) HALIFAX, NOVA SCOTIA, CANADA
America/La_Paz | (UTC-04:00) LA PAZ, BOLIVIA
America/Puerto_Rico | (UTC-04:00) SAN JUAN, PUERTO RICO
America/St_Johns |(UTC-02:30) ST. JOHN’S, NEWFOUNDLAND, CANADA
America/Godthab | (UTC-02:00) GODTHAB, GREENLAND
America/Sao_Paulo | (UTC-03:00) SAO PAULO, BRAZIL
America/Noronha | (UTC-02:00) NORONHA, BRAZIL
{Atlantic/Reykjavik | (UTC+00:00) REYKJAVIK, ICELAND
Europe/Belfast | (UTC+01:00) BELFAST, NORTHERN IRELAND
Europe/Dublin | (UTC+01:00) DUBLIN, IRELAND
Europe/Edinburgh | (UTC+01:00) EDINBURGH, SCOTLAND
Europe/Lisbon | (UTC+01:00) LISBON, PORTUGAL
Europe/London |(UTC+01:00) LONDON, ENGLAND
Europe/Amsterdam | (UTC+02:00) AMSTERDAM, NETHERLANDS
Europe/Berlin | (UTC+02:00) BERLIN, GERMANY
Europe/Bern |(UTC+02:00) BERN, SWITZERLAND
Europe/Copenhagen |(UTC+02:00) COPENHAGEN, DENMARK
Europe/Madrid | (UTC+02:00) MADRID, SPAIN
Europe/Oslo | (UTC+02:00) OSLO, NORWAY
Europe/Paris |(UTC+02:00) PARIS, FRANCE
Europe/Rome | (UTC+02:00) ROME, ITALY
Europe/Stockholm | (UTC+02:00) STOCKHOLM, SWEDEN
Europe/Athens | (UTC+03:00) ATHENS, GREECE
Europe/Istanbul | (UTC+03:00) ISTANBUL, TURKEY
Europe/Moscow | (UTC+03:00) MOSCOW, RUSSIA
Asia/Riyadh | (UTC+03:00) RIYADH, SAUDI ARABIA
Asia/Dubai |(UTC+04:00) DUBAI, UNITED ARAB EMIRATES
Asia/Lahore |(UTC+05:00) LAHORE, PAKISTAN
Asia/Delhi |(UTC+05:30) DELHI, INDIA
Asia/Kolkata |(UTC+05:30) KOLKATA, INDIA
Asia/Dhaka |(UTC+06:00) DHAKA, BANGLADESH
Asia/Jakarta |(UTC+07:00) JAKARTA, INDONESIA
Asia/Beijing |(UTC+08:00) BEIJING, CHINA
Asia/Manila |(UTC+08:00) MANILA, PHILIPPINES
Australia/Perth |(UTC+08:00) PERTH, AUSTRALIA
Asia/Seoul |(UTC+09:00) SEOUL, KOREA
Asia/Tokyo | (UTC+09:00) TOKYO, JAPAN
Australia/Sydney |(UTC+11:00) SYDNEY, AUSTRALIA

<p><small><a href="#">Back to top</a></small></p>

## Version Control (Coming Soon)

Please use v2 for the following APIs to utilize ueiSAM in place of DUNS. Business rules for v2 endpoints can be found in the corresponding API sections.

* Add Authorized Party
* Create Draft Opportunity
* Create and Publish Opportunity
* Get Authorized Party
* Get IVL
* Get list of Opportunities
* Get Opportunity by Opportunity ID
* Get Related Opportunities

**v2 Endpoints**

* Beta: https://api.sam.gov/prod/opportunity/v2/ (coming soon)
* Alpha: https://api-alpha.sam.gov/prodlike/opportunity/v2/ 

## Contract Opportunity Management API Request and Responses

**Note**: All Opportunity notices types except Special notices will be associated to organization at office level. Special notices can be associated to Organization at department, sub-tier, or office level.


### Create Draft Opportunity


------- | -------
**Request Type** | POST
**URL** | /create
**Summary** | Creates a new Draft Opportunity
**Consumes** | application/json
**Produces** | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Create and Update Opportunity Contract JSON](#create-and-update-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Draft Opportunity successfully created | returns Opportunity ID in response header

Examples

<details>
<summary>ITB Request</summary>
<p>
<code><pre>
{
    "data": {
        "type": "i",
        "award": {
            "date": "2222-02-22",
            "number": "ContractAwardNumber123-_(){}",
            "deliveryOrderNumber": "TaskOrderNumber1234-_()"
        },
        "naics": [
            {
                "code": [
                    "111160"
                ],
                "type": "primary"
            }
        ],
        "title": "Create Intent To Bundle Requirements notice",
        "archive": {
            "date": null,
            "type": "auto30"
        },
        "permissions": {
            "IVL": {
                "read": false,
                "create": false,
                "delete": false,
                "update": false
            }
        },
        "solicitation": {
            "deadlines": {
                "response": null,
                "responseTz": null
            }
        },
        "organizationId": "100186612",
        "pointOfContact": [
            {
                "fax": "1234567890",
                "type": "primary",
                "email": "test.email2@gmail.com",
                "phone": "1234567890",
                "title": null,
                "fullName": "Test User"
            },
            {
                "fax": "4512367890",
                "type": "secondary",
                "email": "test.email@gmail.com",
                "phone": "1234567890",
                "title": null,
                "fullName": "Test User 2"
            }
        ],
        "classificationCode": "1005",
        "solicitationNumber": "Test-ITB-123",
        "additionalReporting": [
            "recovery_act"
        ]
    },
    "related": {},
    "description": [
        {
            "body": "Test Description"
        }
    ]
}
</pre></code>
</p>
</details>

<details>
<summary>PRESOL Request</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "PRESOLTest1",
    "title": "PRESOLTEST_T1",
    "type": "p",
    "classificationCode": "13",
    "organizationId": "100186612",
    "naics": [{
      "type": "primary",
      "code": ["111150"]
    }],
    "pointOfContact": [{
        "additionalInfo": {
            "content": ""
        },
        "email": "testemail@gsa.gov",
        "fax": "",
        "fullName": "test user",
        "phone": "",
        "title": "",
        "type": "primary"
    }],
    "placeOfPerformance": {
        "city": {
            "code": "",
            "name": ""
        },
        "country": {
            "code": "",
            "name": ""
        },
        "state": {
            "code": "",
            "name": ""
        },
        "streetAddress": "",
        "streetAddress2": "",
        "zip": ""
    },
    "permissions": {
        "IVL": {
            "create": false,
            "delete": false,
            "read": false,
            "update": false
        }
    },
     "solicitation": {
      "setAside": "SBA",
      "deadlines": {
       "response": "2020-02-25T11:00:00-04:00",
       "responseTz": "America/New_York"
      }
    },
    "archive": {
      "type": "autocustom",
      "date": "2023-09-09"
    },
     "additionalReporting": [
        "none"
    ]
    },
 "description": [{
    "body": "Description"
  }]
}
</pre></code>
</p>
</details>

<details>
<summary>COMBINE Request</summary>
<p>
<code><pre>
{
   "data": {
     "solicitationNumber": "Test1combine1",
     "title": "TST_T1",
     "type": "k",
     "classificationCode": "13",
     "organizationId": "100186612",
     "archive": {
       "type": "autocustom",
       "date": "2022-09-09"
     },
     "naics": [
       {
         "type": "primary",
         "code": [
           "111150"
         ]
       }
     ],
     "pointOfContact": [
       {
         "additionalInfo": {
           "content": ""
         },
         "email": "testemail@gsa.gov",
         "fax": "",
         "fullName": "test user",
         "phone": "",
         "title": "",
         "type": "primary"
       }
     ],
     "permissions": {
       "IVL": {
         "create": false,
         "delete": false,
         "read": false,
         "update": false
       }
     },
     "solicitation": {
       "setAside": "",
       "deadlines": {
         "responseTz": "America/New_York",
         "response": "2022-11-11T11:12:00-05:00"
       }
     },
     "additionalReporting": [
       "none"
     ]
   },
   "description": [
     {
       "body": "Description_TEST "
     }
   ]
 }
</pre></code>
</p>
</details>

<details>
<summary>SOLICITATION Request related to a PRESOL Notice</summary>
<p>
<code><pre>

{
    "data": {
        "type": "o",
        "solicitationNumber": "test-12345678901",
        "title": "Test submit solicitation",
        "organizationId": "100186612",
        "classificationCode": "1260",
        "naics": [
            {
                "type": "primary",
                "code": [
                    "111150"
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "test contact",
                "email": "test@test.com",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": "Primary contact info"
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "1234 XYZ street",
            "streetAddress2": "",
            "city": {
                "code": "75376",
                "name": "Sterling"
            },
            "state": {
                "code": "VA",
                "name": "Virginia"
            },
            "country": {
                "code": "USA",
                "name": "USA"
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
               "response": "2020-02-25T11:00:00-05:00",
               "responseTz": "America/Chicago"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": "test description"
        }
    ],
    "related": {
        "opportunityId": "bc14e9f810a44e468c31fd120dd41b4f"
    }
}
</pre></code>
</p>
</details>

<details>
<summary>Request to create Award Notice related to a Combined Synopsis Notice_v1</summary>
<p>
<code><pre>
{
  "data": {
    "type": "a",
    "award": {
      "lineItemNumber": "123456789879",
      "date": "2020-01-02",
      "number": "1376487348949",
      "deliveryOrderNumber": "23577980900",
      "awardee": {
        "duns": "690888227",
        "name": "TONETS CORPORATION",
        "cageCode": "SP971",
        "location": {
          "city": {
            "name": "Chuo-ku"
          },
          "state": {
            "name": "TOKYO"
          },
          "country": {
            "name": "JPN"
          },
          "zip": null
        }
      },
      "amount": "43567.00"
    },
    "title": "Test-Award notice-V1",
    "version": "2",
    "permissions": {
      "IVL": {
        "read": true,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "organizationId": "100272386",
    "solicitationNumber": "test-123456789",
    "additionalReporting": [
      "none"
    ],
    "archive": {
      "type": "autocustom",
      "date": "2021-01-02"
    },
    "solicitation": {
      "deadlines": {
        "response": null,
        "responseTz": null
      },
      "setAside": "SBA"
    },
    "classificationCode": "AA12",
    "naics": [
      {
        "code": [
          "711510"
        ],
        "type": "primary"
      }
    ],
    "placeOfPerformance": {
      "city": {
        "name": "Alabaster",
        "code": "820"
      },
      "state": {
        "name": "Alabama",
        "code": "AL"
      },
      "country": {
        "code": "USA"
      },
      "zip": null
    },
    "pointOfContact": [
      {
        "title": null,
        "fullName": "Test Contact 1",
        "email": "test.contact1@gmail.com",
        "phone": "",
        "fax": null,
        "type": "primary"
      },
      {
        "title": null,
        "fullName": "Test Contact 2",
        "email": "test.contact2@gmail.com",
        "phone": null,
        "fax": null,
        "type": "secondary"
      }
    ]
  },
  "description": [
    {
      "body": "test description"
    }
  ],
  "related": {
    "opportunityId": "c61597bdfc5d492268d664bce8e2345a"
  }
}

</pre></code>
</p>
</details>

<details>
<summary>Request to create Award Notice related to a Combined Synopsis Notice_v2</summary>
<p>
<code><pre>
{
  "data": {
    "type": "a",
    "award": {
      "lineItemNumber": "123456789879",
      "date": "2020-01-02",
      "number": "1376487348949",
      "deliveryOrderNumber": "23577980900",
      "awardee": {
        "ueiSAM": "025114695AST",
        "name": "TONETS CORPORATION",
        "cageCode": "SP971",
        "location": {
          "city": {
            "name": "Chuo-ku"
          },
          "state": {
            "name": "TOKYO"
          },
          "country": {
            "name": "JPN"
          },
          "zip": null
        }
      },
      "amount": "43567.00"
    },
    "title": "Test-Award notice-V1",
    "version": "2",
    "permissions": {
      "IVL": {
        "read": true,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "organizationId": "100272386",
    "solicitationNumber": "test-123456789",
    "additionalReporting": [
      "none"
    ],
    "archive": {
      "type": "autocustom",
      "date": "2021-01-02"
    },
    "solicitation": {
      "deadlines": {
        "response": null,
        "responseTz": null
      },
      "setAside": "SBA"
    },
    "classificationCode": "AA12",
    "naics": [
      {
        "code": [
          "711510"
        ],
        "type": "primary"
      }
    ],
    "placeOfPerformance": {
      "city": {
        "name": "Alabaster",
        "code": "820"
      },
      "state": {
        "name": "Alabama",
        "code": "AL"
      },
      "country": {
        "code": "USA"
      },
      "zip": null
    },
    "pointOfContact": [
      {
        "title": null,
        "fullName": "Test Contact 1",
        "email": "test.contact1@gmail.com",
        "phone": "",
        "fax": null,
        "type": "primary"
      },
      {
        "title": null,
        "fullName": "Test Contact 2",
        "email": "test.contact2@gmail.com",
        "phone": null,
        "fax": null,
        "type": "secondary"
      }
    ]
  },
  "description": [
    {
      "body": "test description"
    }
  ],
  "related": {
    "opportunityId": "c61597bdfc5d492268d664bce8e2345a"
  }
}

</pre></code>
</p>
</details>

<details>
<summary> Request to create a draft opportunity for a previously published 'SOLICITATION' notice by providing the parent opportunity Id</summary>
<p>
<code><pre>
{
    "data": {
        "type": "o",
        "solicitationNumber": "test-12345457",
        "title": "Create Draft for a published SOL notice",
        "organizationId": "100186612",
        "classificationCode": "1260",
        "naics": [
            {
                "type": "primary",
                "code": [
                    "111150"
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "test contact",
                "email": "test@test.com",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": "Primary contact info"
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "1234 XYZ street",
            "streetAddress2": "",
            "city": {
                "code": "75376",
                "name": "Sterling"
            },
            "state": {
                "code": "VA",
                "name": "Virginia"
            },
            "country": {
                "code": "USA",
                "name": "USA"
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2022-08-08"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": "test description"
        }
    ],
    "parent":{
          	"opportunityId":"6f85afa8eb03443ab7d210655525ca60"      	
   }
}
</pre></code>
</p>
</details>


<p><small><a href="#">Back to top</a></small></p>

### Publish Draft Opportunity


------- | -------
**Request Type** | POST
**URL** | /publish/{opportunityId}
**Summary** | Publish a Draft Opportunity
**Consumes** | application/JSON
**Produces** | NA

**Please [Refer Create and Update Opportunity Contract JSON](#create-and-update-opportunity-contract-json) to ensure that all required fields in "Required (Publish)" is met to publish opportunity**

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Publish Draft Opportunity Contract JSON](#publish-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully published | returns Opportunity ID in response header

Examples

<details>
<summary>Publish Opportunity Request</summary>
<p>
<code><pre>
{
  "requestType": "publish_request",
  "reason": "Publish Opportunity test"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Create and Publish Opportunity 


------- | -------
**Request Type** | POST
**URL** | /createAndPublish
**Summary** | Creates and publishes contract opportunity. Can be used to modify (revise and publish) an active published notice.
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Create and Publish Opportunity Contract JSON](#create-and-publish-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string |  Opportunity successfully created and Published| returns Opportunity ID in response header

Examples

<details>
<summary>Create and Publish Request for a 'SOLICITATION' Opportunity with attachments/links related to a 'PRESOL' notice</summary>
<p>
<code><pre>
{
    "data": {
        "type": "o",
        "solicitationNumber": "test-12345457",
        "title": "Test Create and Publish SOL notice",
        "organizationId": "100186612",
        "classificationCode": "1260",
        "naics": [
            {
                "type": "primary",
                "code": [
                    "111150"
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "test contact",
                "email": "test@test.com",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": "Primary contact info"
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "1234 XYZ street",
            "streetAddress2": "",
            "city": {
                "code": "75376",
                "name": "Sterling"
            },
            "state": {
                "code": "VA",
                "name": "Virginia"
            },
            "country": {
                "code": "USA",
                "name": "USA"
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
               "response": "2020-02-25T11:00:00-06:00",
               "responseTz": "America/Chicago"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": "test description"
        }
    ],
    "related": {
        "opportunityId": "f8ccfca94d794e07855ebe0d6f55c7d5"
    },
    "resources": [
        {
            "attType": "link",
            "link": "https://faaco.faa.gov/index.cfm/attachment/download/84723",
            "description": "test attachment pdf link"
        },
        {
            "attType": "file",
            "content": "SGVsbG8=",
            "resourceName": "Hello.txt",
            "fileType": "text/plain",
            "packageAccessLevel": "private",
            "explicitAccess": "1"
        }
    ]
}
</pre></code>
</p>
</details>


<details>
<summary>Create and Publish Request to submit a modification to the 'SOLICITATION' Opportunity published in the above example by providing the parent opportunity Id</summary>
<p>
<code><pre>
{
    "data": {
        "type": "o",
        "solicitationNumber": "test-12345457",
        "title": "Test Create and Publish API to submit modification to a SOL notice",
        "organizationId": "100186612",
        "classificationCode": "1260",
        "naics": [
            {
                "type": "primary",
                "code": [
                    "111150"
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "test contact",
                "email": "test@test.com",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": "Primary contact info"
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "1234 XYZ street",
            "streetAddress2": "",
            "city": {
                "code": "75376",
                "name": "Sterling"
            },
            "state": {
                "code": "VA",
                "name": "Virginia"
            },
            "country": {
                "code": "USA",
                "name": "USA"
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
             "response": "2020-02-24T11:00:00-05:00",
             "responseTz": "America/Chicago"            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": "test description"
        }
    ],
    "parent":{
          	"opportunityId":"6f85afa8eb03443ab7d210655525ca60"      	
   },
    "resources": [
        {
            "attType": "link",
            "link": "https://www.google.com",
            "description": "Google"
        },
        {
            "attType": "file",
            "content": "SGVsbG8=",
            "resourceName": "Hello_updated.txt",
            "fileType": "text/plain",
            "packageAccessLevel": "public",
            "explicitAccess": "0"
        }
    ]
}
</pre></code>
</p>
</details>


<details>
<summary>Create and Publish request for Award Notice related to a Combined Synopsis Notice_v1</summary>
<p>
<code><pre>
{
  "data": {
    "type": "a",
    "award": {
      "lineItemNumber": "123456789879",
      "date": "2020-01-02",
      "number": "1376487348949",
      "deliveryOrderNumber": "23577980900",
      "awardee": {
        "duns": "690888227",
        "name": "TONETS CORPORATION",
        "cageCode": "SP971",
        "location": {
          "city": {
            "name": "Chuo-ku"
          },
          "state": {
            "name": "TOKYO"
          },
          "country": {
            "name": "JPN"
          },
          "zip": null
        }
      },
      "amount": "43567.00"
    },
    "title": "Test-Award notice-V1",
    "version": "2",
    "permissions": {
      "IVL": {
        "read": true,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "organizationId": "100272386",
    "solicitationNumber": "test-123456789",
    "additionalReporting": [
      "none"
    ],
    "archive": {
      "type": "autocustom",
      "date": "2021-01-02"
    },
    "solicitation": {
      "deadlines": {
        "response": null,
        "responseTz": null
      },
      "setAside": "SBA"
    },
    "classificationCode": "AA12",
    "naics": [
      {
        "code": [
          "711510"
        ],
        "type": "primary"
      }
    ],
    "placeOfPerformance": {
      "city": {
        "name": "Alabaster",
        "code": "820"
      },
      "state": {
        "name": "Alabama",
        "code": "AL"
      },
      "country": {
        "code": "USA"
      },
      "zip": null
    },
    "pointOfContact": [
      {
        "title": null,
        "fullName": "Test Contact 1",
        "email": "test.contact1@gmail.com",
        "phone": "",
        "fax": null,
        "type": "primary"
      },
      {
        "title": null,
        "fullName": "Test Contact 2",
        "email": "test.contact2@gmail.com",
        "phone": null,
        "fax": null,
        "type": "secondary"
      }
    ]
  },
  "description": [
    {
      "body": "test description"
    }
  ],
  "related": {
    "opportunityId": "c61597bdfc5d492268d664bce8e2345a"
  },
  "resources": [
          {
              "attType": "link",
              "link": "https://www.google.com",
              "description": "Google"
          },
          {
              "attType": "file",
              "content": "SGVsbG8=",
              "resourceName": "Hello_updated.txt",
              "fileType": "text/plain",
              "packageAccessLevel": "public",
              "explicitAccess": "0"
          }
      ]
}

</pre></code>
</p>
</details>

<details>
<summary>Create and Publish request for Award Notice related to a Combined Synopsis Notice_v2</summary>
<p>
<code><pre>
{
  "data": {
    "type": "a",
    "award": {
      "lineItemNumber": "123456789879",
      "date": "2020-01-02",
      "number": "1376487348949",
      "deliveryOrderNumber": "23577980900",
      "awardee": {
        "ueiSAM": "025114695AST",
        "name": "TONETS CORPORATION",
        "cageCode": "SP971",
        "location": {
          "city": {
            "name": "Chuo-ku"
          },
          "state": {
            "name": "TOKYO"
          },
          "country": {
            "name": "JPN"
          },
          "zip": null
        }
      },
      "amount": "43567.00"
    },
    "title": "Test-Award notice-V1",
    "version": "2",
    "permissions": {
      "IVL": {
        "read": true,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "organizationId": "100272386",
    "solicitationNumber": "test-123456789",
    "additionalReporting": [
      "none"
    ],
    "archive": {
      "type": "autocustom",
      "date": "2021-01-02"
    },
    "solicitation": {
      "deadlines": {
        "response": null,
        "responseTz": null
      },
      "setAside": "SBA"
    },
    "classificationCode": "AA12",
    "naics": [
      {
        "code": [
          "711510"
        ],
        "type": "primary"
      }
    ],
    "placeOfPerformance": {
      "city": {
        "name": "Alabaster",
        "code": "820"
      },
      "state": {
        "name": "Alabama",
        "code": "AL"
      },
      "country": {
        "code": "USA"
      },
      "zip": null
    },
    "pointOfContact": [
      {
        "title": null,
        "fullName": "Test Contact 1",
        "email": "test.contact1@gmail.com",
        "phone": "",
        "fax": null,
        "type": "primary"
      },
      {
        "title": null,
        "fullName": "Test Contact 2",
        "email": "test.contact2@gmail.com",
        "phone": null,
        "fax": null,
        "type": "secondary"
      }
    ]
  },
  "description": [
    {
      "body": "test description"
    }
  ],
  "related": {
    "opportunityId": "c61597bdfc5d492268d664bce8e2345a"
  },
  "resources": [
          {
              "attType": "link",
              "link": "https://www.google.com",
              "description": "Google"
          },
          {
              "attType": "file",
              "content": "SGVsbG8=",
              "resourceName": "Hello_updated.txt",
              "fileType": "text/plain",
              "packageAccessLevel": "public",
              "explicitAccess": "0"
          }
      ]
}

</pre></code>
</p>
</details>


<p><small><a href="#">Back to top</a></small></p>

### Revise Published Opportunity


------- | -------
**Request Type** | POST
**URL** | /revise/{opportunityId}
**Summary** | Create a draft version for a Published Opportunity.
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Published Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Revise Opportunity Contract JSON](#revise-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Revise an Opportunity is successful | return response is Opportunity ID

Examples

<details>
<summary>Revise Opportunity Request</summary>
<p>
<code><pre>
{
  "requestType": "update_publish_request",
  "reason": "Revise Opportunity test"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update Draft Opportunity


------- | -------
**Request Type** | PATCH
**URL** | /update/{opportunityId}
**Summary** | Update a Draft Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes |[Refer Create and Update Opportunity Contract JSON](#create-and-update-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Update an Opportunity is successful | return response is Opportunity ID

Examples

<details>
<summary>Update request for Intent to Bundle Draft opportunity</summary>
<p>
<code><pre>
{
  "data": {
    "type": "i",
    "award": {
      "lineItemNumber": null,
      "date": "2020-01-02",
      "number": "234567889",
      "deliveryOrderNumber": "TASK-345654"
    },
    "title": "Test-ITB-23454-Updated",
    "permissions": {
      "IVL": {
        "read": true,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "organizationId": "500011222",
    "pointOfContact": [
      {
        "title": null,
        "fullName": "test contact",
        "email": "test.contact@gmail.com",
        "phone": null,
        "fax": null,
        "type": "primary"
      }
    ],
    "solicitationNumber": "Test-ITB-123456",
    "archive": {
      "type": "auto30",
      "date": null
    },
    "solicitation": {
      "deadlines": {
        "response": null,
        "responseTz": null
      }
    },
    "additionalReporting": [
      "none"
    ],
    "classificationCode": "E1AA",
    "naics": [
      {
        "code": [
          "111120"
        ],
        "type": "primary"
      }
    ]
  },
  "description": [
    {
      "body": "test description updated"
    }
  ],
  "related": {}
}

</pre></code>
</p>
</details>

<details>
<summary>Update request for a Draft PRESOLICITAITON notice</summary>
<p>
<code><pre>
{
    "data": {
        "solicitationNumber": "PRESOLTest1_update",
        "title": "PRESOLTEST_T1_update",
        "type": "p",
        "classificationCode": "1005",
        "organizationId": "100120624",
        "naics": [
            {
                "type": "primary",
                "code": [
                    "111150"
                ]
            }
        ],
        "pointOfContact": [
            {
                "fax": "1234567890",
                "type": "primary",
                "email": "test.email2@gmail.com",
                "phone": "1234567890",
                "title": null,
                "fullName": "Test User"
            },
            {
                "fax": "4512367890",
                "type": "secondary",
                "email": "test.email@gmail.com",
                "phone": "1234567890",
                "title": null,
                "fullName": "Test User 2"
            }
        ],
        "placeOfPerformance": {
            "city": {
                "code": "",
                "name": ""
            },
            "country": {
                "code": "",
                "name": ""
            },
            "state": {
                "code": "",
                "name": ""
            },
            "streetAddress": "",
            "streetAddress2": "",
            "zip": ""
        },
        "permissions": {
            "IVL": {
                "create": true,
                "delete": true,
                "read": true,
                "update": true
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2022-08-08"
            }
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": "Description_updated "
        }
    ]
}
</pre></code>
</p>
</details>

<details>
<summary>Update request for a Draft COMBINED SYNOPSIS notice</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "Test1combine1_update",
    "title": "TST_T1_update",
    "type": "k",
    "classificationCode": "13",
    "organizationId": "100000136",
    "archive": {
      "type": "autocustom",
      "date": "2022-09-09"
    },
    "naics": [
      {
        "type": "primary",
        "code": [
          "111150"
        ]
      }
    ],
    "pointOfContact": [
      {
        "additionalInfo": {
          "content": ""
        },
        "email": "test.contact@gmail.com",
        "fax": "",
        "fullName": "test contact",
        "phone": "",
        "title": "",
        "type": "primary"
      }
    ],
    "permissions": {
      "IVL": {
        "create": true,
        "delete": true,
        "read": true,
        "update": true
      }
    },
    "solicitation": {
      "setAside": "",
      "deadlines": {
        "responseTz": "America/New_York",
        "response": "2021-12-12T23:59:00-05:00"
      }
    },
    "additionalReporting": [
      "none"
    ]
  },
  "description": [
    {
      "body": "Description_updated "
    }
  ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get Opportunity History


------- | -------
**Request Type** | GET
**URL** | /history/{opportunityId}
**Summary** | Get history of an Opportunity
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
postedFrom | Body | JSON Object | No | Posted From - Date

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | History of Opportunity | JSON (see below)

Response Element | Response Type |  Description
-----------------|---------------|------------
history | JSON Array |  
history.parentOpportunityId | string |  Parent Opportunity ID
history.cancel_notice | boolean |  Identify if the Opportunity is cancelled or not
history.procurement_type | string |  Notice Type
history.archive_notice | boolean | Identify if the Opportunity is archived or not
history.request.type | string |  Type of request on Opportunity such as 'submit', 'cancel_request', 'archive_request' etc.
history.action_type | string |  Type of action performed on Opportunity request such as 'publish', 'cancel','archive' etc.
history.action_date | date | Date and time of the action type <br/>Example: 2019-02-01T17:12:00-5:00
history.title | string |  Opportunity title
history.index | string | Version number of revision
history.relatedOpportunityId | string | Related Opportunity ID
history.opportunityId | string |  Opportunity ID (System generated)
history.deleted | string |  Identify if the Opportunity is deleted or not
history.solicitation_number | string | Solicitation Number of a Notice (Opportunity ID in UI)
history.revision_reason | string | Reason for revision
history.posted_date | string |  Posted date and time <br/>Example: 2019-01-04T14:00:00
history.latest |  | Service will return all the Opportunities but with latest=1

Examples

<details>
<summary>History Response</summary>
<p>
<code><pre>
{
  "content": {
    "history": [
      {
        "parentOpportunityId": "66544daa822c3c1667d927a70b7324f1",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": null,
        "index": "5",
        "title": "61 -- Loadbank",
        "relatedOpportunityId": null,
        "opportunityId": "9d8a8d2b0befa3b6b9683a689566d9c4",
        "deleted": "0",
        "solicitation_number": "FA8532-06-R-70739",
        "revision_reason": null,
        "posted_date": null,
        "latest": "1"
      },
      {
        "parentOpportunityId": "66544daa822c3c1667d927a70b7324f1",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2006-11-01T05:00:00+00",
        "index": "4",
        "title": "61 -- Loadbank",
        "relatedOpportunityId": null,
        "opportunityId": "1ef3f05d226c7cf877de3bcc285621aa",
        "deleted": "0",
        "solicitation_number": "FA8532-06-R-70739",
        "revision_reason": null,
        "posted_date": "2006-11-01T00:00:00",
        "latest": "0"
      },
      {
        "parentOpportunityId": "66544daa822c3c1667d927a70b7324f1",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2006-10-23T04:00:00+00",
        "index": "2",
        "title": "61 -- Loadbank",
        "relatedOpportunityId": null,
        "opportunityId": "0befa794b87fd0dc12a27ebc7c96c951",
        "deleted": "0",
        "solicitation_number": "FA8532-06-R-70739",
        "revision_reason": null,
        "posted_date": "2006-10-23T00:00:00",
        "latest": "0"
      },
      {
        "parentOpportunityId": "66544daa822c3c1667d927a70b7324f1",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2006-10-23T04:00:00+00",
        "index": "3",
        "title": "61 -- Loadbank",
        "relatedOpportunityId": null,
        "opportunityId": "3751f0b8e25f0ea478f0b1754fca93d2",
        "deleted": "0",
        "solicitation_number": "FA8532-06-R-70739",
        "revision_reason": null,
        "posted_date": "2006-10-23T00:00:00",
        "latest": "0"
      
      {
        "parentOpportunityId": null,
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2006-10-06T04:00:00+00",
        "index": "1",
        "title": "61 -- Loadbank",
        "relatedOpportunityId": null,
        "opportunityId": "66544daa822c3c1667d927a70b7324f1",
        "deleted": "0",
        "solicitation_number": "FA8532-06-R-70739",
        "revision_reason": null,
        "posted_date": "2006-10-06T00:00:00",
        "latest": "0"
      }
    ]
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Draft Opportunity

------- | -------
**Request Type** | DELETE
**URL** | /delete/{opportunityId}
**Summary** |   Delete a Draft Opportunity
**Consumes** | Request Parameters
**Produces** | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully deleted | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>


### Delete Notice ###

------- | -------
**Request Type** | POST
**URL** | /{opportunityId}/requests
**Summary** | Deletes all the versions or latest version of a notice
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization	| Header | string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON|	Body|	JSON|	Yes|	[Refer Delete Notice Contract JSON](#delete-notice-contract-json)

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Deleted the latest or all versions of a notice	|NA

Examples

<details>
<summary>Delete latest version of a notice</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "delete_request",
  "data": {
    "description": "test",
    "deleteOption": "latest"
  }
}
</pre></code>
</p>
</details>


### Get List of Opportunities


------- | -------
**Request Type** | GET
**URL** | /search
**Summary** | Get list of Opportunities
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header | string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
archivedFrom | query | date-time | No | Archive From UTC Date and Time <br />Example: 2018-11-01 00:00:00
archivedTo | query | date-time | No | Archive To UTC Date and Time <br />Example: 2018-11-01 00:00:00
awardNumber | query | string | No | Award Number
doNumber | query | string | No | Delivery Order Number
includeCount | query | boolean | No | True or false
keyword | query | string | No | Enter any keyword from the description
latest | query | boolean | No | True or false
opportunityIds | query | Array | No | Opportunity IDs (comma separated)
noticeType | query | Array | No | See Notices Types table (comma separated)
returnFHOrgKey| query | boolean | No | Default is set to 'False'<br> If set to 'True', organizationId will return internal org key instead of FH Organization ID (v2 - Deprecated)
organizationId | query | Array | No | FH Org ID/Code of the organization where an Opportunity is being submitted (comma separated)<br> If returnFHOrgKey is set to 'True" organizationId will return internal org key
page | query | integer | No | Page number
parentNotice | query | Array | No | Parent Opportunity ID (comma separated)
postedFrom | query | date-time | No | Posted From UTC Date and time <br />Example: 2018-11-01 00:00:00
postedTo | query | date-time | No | Posted To UTC Date and time <br />Example: 2018-11-01 00:00:00
relatedNotice | query | Array | No | Related Opportunity ID (comma separated)
responseFrom | query | date-time | No | ResponseFrom UTC Date and Time <br />Example: 2018-11-01 00:00:00
responseTo | query | date-time | No | ResponseTo UTC Date and Time <br />Example: 2018-11-01 00:00:00
size | query | integer | No | Size limit is 10 by default
solNumber | query | string | No | Solicitation Number
sortBy | query | string | No | Sort (-createdOn, -modifiedOn)
status| query | Array[string] | No | Active - All Published Active Notice <br> Draft - All Draft Notice <br> Published - All Published Notice <br> Inactive - All archived/Inactive Notice (before archive) <br> Cancelled - All Cancelled Notice <br/>(comma separated)
orgStatus| query | Array | No| Organization Status: Active, Inactive, Mapped, Unmapped
Links | query | boolean | |No | Links; Default Value = True

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON (see below)

Response Element | Response Type |  Description
-----------------|---------------|------------
data | JSON Array |  All the Opportunities are listed out in the response
opportunityId | string |  Opportunity ID
data.type | string | See Notices Types table
data.solicitationNumber | string | Solicitation Number
data.title | string | Title of the Opportunity
data.organizationId | string | FH Organization ID that opportunity is associated with <br><br> Department = CGAC <br> Subtier = FPDS code <br> Office = AAC (v2 - Deprecated)
data.organizationInfo |JSON Array| v2
data.organizationInfo.name | string | Name of organization notice is associated with
data.organizationInfo.code | string | Code of the organization notice is associated with
data.organizationInfo.orgKey | string | FH internal org key of the organization notice is associated with
data.classificationCode | string | Product Service Code (PSC)
data.naics | JSON Array | 
data.naics.code | string | NAICS Code
data.naics.type | string |  NAICS type
data.flags | JSON Array | 
data.flags.code | string | 
data.flags.isSelected | boolean | 
data.pointOfContact | JSON Array| 
data.pointOfContact.type | string |  Contact Type
data.pointOfContact.title | string |  Contact title
data.pointOfContact.fullname | string |  Contact Full Name
data.pointOfContact.email | string | Contact email
data.pointOfContact.phone | string | Contact Phone
data.pointOfContact.fax | string |Contact Fax
data.placeOfPerformance | JSON Object | 
data.placeOfPerformance.streetAddress | string |  Pop Address
data.placeOfPerformance.streetAddress2 | string |  Pop Address2
data.placeOfPerformance.city | JSON Object  | Pop City
data.placeOfPerformance.city.code | string |  Pop City code
data.placeOfPerformance.city.name | string |  Pop City name
data.placeOfPerformance.city.state | JSON Object | Pop City state
data.placeOfPerformance.state.code | string | Pop city state code
data.placeOfPerformance.state.name | string |  Pop city state name
data.placeOfPerformance.country | JSON Object  | Pop Country
data.placeOfPerformance.country.code | string | Pop Country Code
data.placeOfPerformance.country.name | string | Pop Country name
data.placeOfPerformance.zip | string | Pop Country zip
data.archive | JSON Object  | 
data.archive.type | string |  Archive Type: auto15, auto30, autocustom
data.archive.date | date and time |  Archive Date
data.permissions | JSON Object| 
data.permissions.ivl | JSON Object| 
data.permissions.ivl.create | boolean |  permissions.ivl.create
data.permissions.ivl.read | boolean |  permissions.ivl.read
data.permissions.ivl.update | boolean |  permissions.ivl.update
data.permissions.ivl.delete | boolean |  permissions.ivl.delete
data.solicitation | JSON Object | 
data.solicitation.setAside | string |  See Set-Aside values table
data.solicitation.deadlines | JSON Object | 
data.solicitation.deadlines.response | date and time |  Solicitation Deadline Date
data.solicitation.deadlines.responseTz | string |  Solicitation Deadlines Response Time Zone
data.award | JSON Object | 
data.award.date | date and time |  Award Date
data.award.number | string |  Award Number
data.award.deliveryOrderNumber | string |   Award Delivery Order Number
data.award.amount | Number | Award Amount
data.award.lineitemNumber | string |  Award Line Item Number
data.award.awardee | JSON Object |  
data.award.awardee.name | string |  Awardee Name
data.award.awardee.duns | string |  Awardee Unique Entity Identifier DUNS (v2 - Deprecated)
data.award.awardee.ueiSAM | string | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric (ueiSAM values not yet available). Example: ueiSAM=025114695AST.
data.award.awardee.location | JSON Object|  Awardee Location
data.award.awardee.location.streetAddress | string | Awardee Street Address 1
data.award.awardee.location.streetAddress2 | string |  Awardee Street Address 1
data.award.awardee.location.city | JSON Object |  Awardee City
data.award.awardee.location.city.code | string |  Awardee City Code
data.award.awardee.location.city.name | string |  Awardee City Name
data.award.awardee.location.state | JSON Object |  Awardee State
data.award.awardee.location.state.code | string |  Awardee State Code
data.award.awardee.location.state.name | string |  Awardee State Name
data.award.awardee.location.country | JSON Object |  Awardee Country
data.award.awardee.location.country.code | string |  Awardee Country Code
data.award.awardee.location.country.name | string |  Awardee Country Name
data.award.awardee.location.zip | string |  Awardee Zip
data.award.justificationAuthority | JSON Object | 
data.award.justificationAuthority.modificationNumber | string | justificationAuthority modification number
data.award.justificationAuthority.authority | string |  justificationAuthority authority
data.link | JSON Array of Object |   
data.link.additionalInfo | JSON Object |  
data.link.additionalInfo.content | string | Additional Info
data.link.href | string |  Website Address
data.additionalReporting | JSON Array |  recovery_act or none
additionalInfo.sections JSON | JSON Array | 
additionalInfo.sections.opportunityId | string | 
additionalInfo.sections.status | string | 
parent  | JSON Object | 
parent.opportunityId | string |  Parent Opportunity ID
related  | JSON Object |
related.opportunityId | string | Related Opportunity ID
status  | JSON Object |  
status.code | string |  1.status= active (published, unarchive and uncancelled records) <br />2.status=inactive (published, archive and uncancelled records)<br />3.status=draft (draft records)<br />4.status=published (published and unarchive)<br />5.status=active_cancelled(published, unarchive and cancelled records)<br />6.status=inactive_cancelled(published, archive and cancelled records)<br />7.status=archived(published and archived)
status.value | string |  Refer to status.code
archived | boolean |  Indicates Archived
cancelled | boolean |  Indicates Canceled
latest | string | Inidcates latest record
deleted | boolean |  Indicates Deleted
postedDate | date |  Date Posted
modifiedDate | date |  Date Modified
createdDate | date | Date Created
modifiedBy | string |  Modified By User ID
createdBy | string |  Created By User ID
description  | JSON Object |  JSON applicable to Get Opportunity By ID only
description.body | string |   Description of Notice
description.opportunityId | string |  Opportunity ID (UI)
description.descriptionId | string | 
description.modifiedOn | string |  Date Description modified
page Object  | JSON |  JSON applicable to Get List of Opportunities only
page.size | string | 
page.totalElements | string | 
page.totalPages | string | 
page.number | string | 

<p><small><a href="#">Back to top</a></small></p>

Examples

<details>
<summary>Get List of Opportunities Response - Award Notice v1</summary>
<p>
<code><pre>
      {
        "data": {
          "link": {
            "additionalInfo": {}
          },
          "type": "a",
          "award": {
            "date": "2019-05-28",
            "amount": "100",
            "number": "0001",
            "awardee": {
              "duns": "608999520",
              "name": "JDSInc1",
              "location": {}
            },
            "fairOpportunity": {},
            "justificationAuthority": {}
          },
          "naics": [],
          "title": "Test Award 2A",
          "archive": {
            "date": null,
            "type": "auto30"
          },
          "permissions": {
            "IVL": {
              "read": false,
              "create": false,
              "delete": false,
              "update": false
            }
          },
          "descriptions": [],
          "solicitation": {
            "deadlines": {
              "response": null,
              "responseTz": null
            }
          },
          "organizationId": "100167253",
          "pointOfContact": [
            {
              "type": "primary",
              "email": "john.doe@gsa.gov",
              "fullName": "HC1013-58-A-0005",
              "additionalInfo": {
                "content": "test email"
              }
            }
          ],
          "placeOfPerformance": {},
          "solicitationNumber": "02SoL_(){}",
          "additionalReporting": [
            "none"
          ],
          "organizationLocationId": "50166357"
        },
        "additionalInfo": {
          "sections": [
            {
              "id": "header",
              "status": "updated"
            },
            {
              "id": "award",
              "status": "updated"
            },
            {
              "id": "general",
              "status": "updated"
            },
            {
              "id": "classification",
              "status": "updated"
            },
            {
              "id": "description",
              "status": "updated"
            },
            {
              "id": "attachments-links",
              "status": "updated"
            },
            {
              "id": "contact",
              "status": "updated"
            }
          ]
        },
        "parent": {},
        "related": {},
        "status": {
          "code": "published",
          "value": "Published"
        },
        "archived": false,
        "cancelled": false,
        "latest": true,
        "deleted": false,
        "postedDate": "2019-10-03T15:06:18.980+0000",
        "modifiedDate": "2019-10-03T15:06:18.980+0000",
        "createdDate": "2019-10-03T15:06:18.858+0000",
        "modifiedBy": "john.doe@gsa.gov",
        "createdBy": "john.doe@gsa.gov",
        "totalCount": 778,
        "opportunityId": "34a99046c5d8422e806ac8def092eb10"
      }
</pre></code>
</p>
</details>

<details>
<summary>Get List of Opportunities Response - Award Notice v2</summary>
<p>
<code><pre>
      {
        "data": {
          "link": {
            "additionalInfo": {}
          },
          "type": "a",
          "award": {
            "date": "2019-05-28",
            "amount": "100",
            "number": "0001",
            "awardee": {
              "ueiSAM": "025114695AST",
              "name": "JDSInc1",
              "location": {}
            },
            "fairOpportunity": {},
            "justificationAuthority": {}
          },
          "naics": [],
          "title": "Test Award 2A",
          "archive": {
            "date": null,
            "type": "auto30"
          },
          "permissions": {
            "IVL": {
              "read": false,
              "create": false,
              "delete": false,
              "update": false
            }
          },
          "descriptions": [],
          "solicitation": {
            "deadlines": {
              "response": null,
              "responseTz": null
            }
          },
          "organizationInfo": [
            {
              "name": "General Services Administration",
              "code": "047",
              "orgKey": "100006688"
            }
          ]
          "pointOfContact": [
            {
              "type": "primary",
              "email": "john.doe@gsa.gov",
              "fullName": "HC1013-58-A-0005",
              "additionalInfo": {
                "content": "test email"
              }
            }
          ],
          "placeOfPerformance": {},
          "solicitationNumber": "02SoL_(){}",
          "additionalReporting": [
            "none"
          ],
          "organizationLocationId": "50166357"
        },
        "additionalInfo": {
          "sections": [
            {
              "id": "header",
              "status": "updated"
            },
            {
              "id": "award",
              "status": "updated"
            },
            {
              "id": "general",
              "status": "updated"
            },
            {
              "id": "classification",
              "status": "updated"
            },
            {
              "id": "description",
              "status": "updated"
            },
            {
              "id": "attachments-links",
              "status": "updated"
            },
            {
              "id": "contact",
              "status": "updated"
            }
          ]
        },
        "parent": {},
        "related": {},
        "status": {
          "code": "published",
          "value": "Published"
        },
        "archived": false,
        "cancelled": false,
        "latest": true,
        "deleted": false,
        "postedDate": "2019-10-03T15:06:18.980+0000",
        "modifiedDate": "2019-10-03T15:06:18.980+0000",
        "createdDate": "2019-10-03T15:06:18.858+0000",
        "modifiedBy": "john.doe@gsa.gov",
        "createdBy": "john.doe@gsa.gov",
        "totalCount": 778,
        "opportunityId": "34a99046c5d8422e806ac8def092eb10"
      }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get an Opportunity by Opportunity ID


------- | -------
**Request Type** | GET
**URL** | /{opportunityId}
**Summary** | Get Opportunity by Opportunity ID
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
returnFHOrgKey| query | boolean | No | Default is set to 'False'<br> If set to 'True', organizationId will return internal org key instead of FH Organization ID (v2 - Deprecated)
PostedFrom | query | string | No | Posted Date

<p><small><a href="#">Back to top</a></small></p>

Responses

See Response for Get List of Opportunities

Examples

<details>
<summary>Get Opportunity by ID Response</summary>
<p>
<code><pre>
{
  "data": {
    "link": {
      "href": "https://www.fedconnect.net/FedConnect/?doc=140S0318B0003&agency=DOI                                                                                                                                                                                            ",
      "additionalInfo": {
        "content": "Click here to see more information about this opportunity on FedConnect"
      }
    },
    "type": "s",
    "flags": [
      {
        "code": "isScheduledNotice",
        "isSelected": false
      }
    ],
    "naics": [
      {
        "code": [
          "312111"
        ]
      }
    ],
    "title": "XYZ--CONSTRUCTION",
    "archive": {
      "date": "2020-01-16",
      "type": "auto15"
    },
    "permissions": {
      "IVL": {
        "read": false,
        "create": true,
        "delete": true,
        "update": true
      }
    },
    "solicitation": {
      "deadlines": {
        "response": "2020-01-01T23:59:00-05:00",
        "responseTz": "America/New_York"
      }
    },
    "organizationInfo": [
    {
      "name": "General Services Administration",
      "code": "047",
      "orgKey": "100006688"
    }
      ]
    "classificationCode": "9999",
    "solicitationNumber": "140S0318B0003",
    "additionalReporting": [
      "none"
    ]
  },
  "additionalInfo": {
    "sections": [
      {
        "id": "header",
        "status": "updated"
      },
      {
        "id": "award",
        "status": "updated"
      },
      {
        "id": "general",
        "status": "updated"
      },
      {
        "id": "classification",
        "status": "updated"
      },
      {
        "id": "description",
        "status": "updated"
      },
      {
        "id": "attachments-links",
        "status": "updated"
      },
      {
        "id": "contact",
        "status": "updated"
      }
    ]
  },
  "parent": {
    "opportunityId": "f4685436437d1846830932117ecad067"
  },
  "related": {

  },
  "status": {
    "code": "published",
    "value": "Published"
  },
  "archived": false,
  "cancelled": false,
  "latest": true,
  "deleted": false,
  "postedDate": "2019-02-19T16:34:32.267+0000",
  "modifiedDate": "2019-02-19T16:34:32.267+0000",
  "createdDate": "2019-02-19T16:33:17.126+0000",
  "modifiedBy": "reitestuser+aa@gsa.gov",
  "createdBy": "reitestuser+aa@gsa.gov",
  "description": [
    {
      "opportunityId": "bac24bfdc52046ae90ff0ddfe818bfd4",
      "descriptionId": "759877f6e64d423cbf23997006ea767a",
      "modifiedOn": "2019-02-19T16:34:32.265+0000",
      "body": "The Department of the Interior's Office of Surface Mining Reclamation and Enforcement intends to release"
    }
  ],
  "opportunityId": "bac24bfdc52046ae90ff0ddfe818bfd4"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Cancel Published Opportunity


------- | -------
**Request Type** | POST
**URL** | /cancel/{opportunityId}
**Summary** | Cancel a Published Opportunity
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | path | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Cancel Opportunity Contract JSON](#cancel-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully canceled | return response is new Opportunity ID

Examples

<details>
<summary>Cancel Request</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": "cancel_request",
  "data": {
    "description": "test"
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Uncancel Canceled Opportunity


------- | -------
**Request Type** | POST
**URL** | /uncancel/{opportunityId}
**Summary** | Update status of a Canceled Opportunity to Published status
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Uncancel Opportunity Contract JSON](#uncancel-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully un canceled | return response is new Opportunity ID

Examples


<details>
<summary>Uncancel Request for a Non Award Notice</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "uncancel_request",
  "data": {
    "description": "test",
    "newArchiveDate": null,
    "newArchiveType": "auto15",
    "newResponseDate": "2018-11-11T10:58:00-05:00",
    "newResponseTz": "America/New_York"
  }
}
</pre></code>
</p>
</details>

<details>
<summary>UnCancel Request for a Award notice</summary>
<p>
<code><pre>
{
  "reason": "test uncancel for award notice",
  "requestType": "uncancel_request",
  "data": {
    "description": "test",
    "newResponseDate": null,
    "newResponseTz": null,
    "newArchiveType": "autocustom",
    "newArchiveDate": "2020-03-01",
    "newContractAwardDate": "2020-02-02"
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Archive Published Opportunity

------- | -------
**Request Type** | POST
**URL** | /archive/{opportunityId}
**Summary** | Archive a Published Opportunity
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Archive Opportunity Contract JSON](#archive-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully archived | return response is new Opportunity ID

Examples

<details>
<summary>Archive Request</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "archive_request"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Unarchive Archived Opportunity

------- | -------
**Request Type** | POST
**URL** | /unarchive/{opportunityId}
**Summary** | Update status of a Archived Opportunity to Published status
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Unarchive Opportunity Contract JSON](#unarchive-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully unarchived | return response is new Opportunity ID

Examples

<details>
<summary>Unarchive Request for a Non-Award notice</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "unarchive_request",
  "data": {
    "newResponseDate": "2019-12-12T00:12:00-05:00",
    "newResponseTz": "America/New_York",
    "newArchiveType": "auto15",
    "newArchiveDate": null
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Unarchive Request for a Award notice</summary>
<p>
<code><pre>
{
  "reason": "test unarchive for award notice",
  "requestType": "unarchive_request",
  "data": {
    "newResponseDate": null,
    "newResponseTz": null,
    "newArchiveType": "autocustom",
    "newArchiveDate": "2020-03-01",
    "newContractAwardDate": "2020-02-02"
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Create Resource in Draft Opportunity

------- | -------
**Request Type** | POST
**URL** | /{opportunityId}/attachments
**Summary** | Add attachment/link to a draft Opportunity
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Create Attachment Contract JSON](#create-attachment-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Attachment successfully created | Resource ID returned

Examples

<details>
<summary>Create Attachment Request - file</summary>
<p>
<code><pre>
{
    "attType": "file",
    "content": "SGVsbG8=",
    "resourceName": "Hello.txt",
    "fileType": "text/plain",
    "packageAccessLevel": "private",
    "explicitAccess": "1"
}
</pre></code>
</p>
</details>

<details>
<summary>Create Attachment Request - link</summary>
<p>
<code><pre>
{
    "attType": "link",
    "link": "https://faaco.faa.gov/index.cfm/attachment/download/84723",
    "description": "test attachment pdf link"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update Resource in Draft Opportunity

------- | -------
**Request Type** | PATCH
**URL** | /{opportunityId}/attachments/{resourceId}
**Summary** | Update draft attachment/link metadata on a draft Opportunity
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
resourceId | query | string | Yes | Resource ID
Request JSON | Body | JSON | Yes | [Refer Update Attachment Link Contract JSON](#update-attachment-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Attachment successfully updated | Resource ID returned

Examples

<details>
<summary>Update Attachment Request - Change File Access : Controlled Unclassified (Only applicable to files that are not published) </summary>
<p>
<code><pre>
{
  "attType": "file",
  "packageAccessLevel": "private",
  "explicitAccess": "1"
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - Change File Access : Public (Only applicable to files that are not published) </summary>
<p>
<code><pre>
{
  "attType": "file",
  "packageAccessLevel": "public",
  "explicitAccess": "0"
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - Change File Name (Only applicable to files that are not published)</summary>
<p>
<code><pre>
{
  "resourceName": "newFileName.pdf"
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - Change Resource Order (Applicable to both files and links)</summary>
<p>
<code><pre>
{
  "sortOrderChanged": true,
  "resourceIdBelow": "292dc517a19b4e43846f39d20e6f7ecf"
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - Change Resource Order (Move resource to the bottom of the list. Applicable to both files and links)</summary>
<p>
<code><pre>
{
  "sortOrderChanged": true
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - Change Link Display text</summary>
<p>
<code><pre>
{
  "resourceName": "New Display Text"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Resource in Draft Opportunity

------- | -------
**Request Type** | DELETE
**URL** | /{opportunityId}/attachments/{resourceId}
**Summary** | Delete an attachment/link from a draft opportunity.
**Consumes** | Request Parameters
**Produces** | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
resourceId | query | string | Yes | Resource ID
deleteAll | query | boolean | Yes | Should be true if deleting resource from all versions of a notice; else false. The deleted published resources will not show up for any further revisions that will be created. 

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Attachment successfully deleted | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>

### Download Attachment as Original File Type


------- | -------
**Request Type** | GET
**URL** | /resources/files/{resourceId}/download
**Summary** | Download the attachment for the given Resource ID
**Consumes** | Request Parameters
**Produces** | file

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header | string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
resourceId | query | string | Yes | Resource ID
status | query | string | No | Active or Inactive
token | query | string | No |

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | File provided as response | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>

### Download All Attachments as Zip for an Opportunity


------- | -------
**Request Type** | GET
**URL** | /{opportunityId}/resources/download/zip
**Summary** | Download all attachments as zip file for an Opportunity
**Consumes** | Request Parameters
**Produces** | Zip

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header | string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | zip | Zip file provided as response  | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>

### Get IVL (Interested Vendor List)


------- | -------
**Request Type** | GET
**URL** | /{opportunityId}/ivl
**Summary** | Get IVL of the Opportunity ID
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description| Applicable Versions
---------------|----------------|------------|----------|------------|-----
Authorization | Header |  string | Yes | Valid and authorized user ID 
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity IDv1
entityId | query | string | No | Entity ID - Unique Entity Identifier DUNS #| v1 <br> v2 - Deprecated
ueiSAM | query | string | No | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric (ueiSAM values not yet available). Example: ueiSAM=025114695AST| v2

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type |  Description
-----------------|---------------|------------
ivl | JSON Array | 
ivl.duns | string | Unique Entity Identifier DUNS number for the business entity (v2 - Deprecated)
ivl.ueiSAM | string | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric (ueiSAM values not yet available). Example: ueiSAM=025114695AST.
ivl.cageNumber | string | Identifies a given facility at a specific location
ivl.name | string | Name of business entity
ivl.addedOn | string | Date added to IVL
ivl.contacts | JSON Array | Business entity contact
ivl.contacts.email | string | Business entity email
ivl.contacts.firstName | string |Business entity contact first name
ivl.contacts.lastName | string | Business entity contact last name
ivl.contacts.phoneNumber | string | Business entity contact phone number
ivl.contacts.type | string | Business entity contact type
ivl.addresses | JSON Array | 
ivl.addresses.streetAddress | string | Business entity address
ivl.addresses.city | string |  Business entity city
ivl.addresses.state | string |  Business entity state
ivl.addresses.zip | string | Business entity zip
ivl.addresses.country | string |  Business entity country
ivl.addresses.addressType | string |  Business entity address type
ivl.naicsList | Array |  Business entity’s NAICS

Examples

<details>
<summary>Get IVL Response_v1</summary>
<p>
<code><pre>
ivl": [
  {
    "duns": "6759999520",
    "cageNumber": "3ABC1",
    "name": "TECH SYSTEMS, INC.",
    "addedOn": "2019-03-04 15:06:11",
    "contacts": [
      {
        "email": "johndoe@techsystems.com",
        "firstName": "JOHN",
        "lastName": "DOE",
        "phoneNumber": "7031234567",
        "type": "Government Business POC"
      }
    ],
    "addresses": [
      {
        "streetAddress": "P.O. BOX 123",
        "city": "SOMECITY",
        "state": "VIRGINIA",
        "zip": "22102",
        "country": "UNITED STATES",
        "addressType": "mailing"
      }
    ],
    "naicsList": [
      "423430",
      "511210",
      "518210",
      "541330",
      "541511",
      "541512",
      "541513",
      "541519",
      "541611",
      "541618",
      "541990",
      "611430",
      "811212"
    ]
  }
]
  },
  "page": {
    "size": 10,
    "totalElements": 1,
    "totalPages": 1,
    "number": 0
  }
</pre></code>
</p>
</details>

<details>
<summary>Get IVL Response_v2</summary>
<p>
<code><pre>
ivl": [
  {
    "ueiSAM": "025114695AST",
    "cageNumber": "3ABC1",
    "name": "TECH SYSTEMS, INC.",
    "addedOn": "2019-03-04 15:06:11",
    "contacts": [
      {
        "email": "johndoe@techsystems.com",
        "firstName": "JOHN",
        "lastName": "DOE",
        "phoneNumber": "7031234567",
        "type": "Government Business POC"
      }
    ],
    "addresses": [
      {
        "streetAddress": "P.O. BOX 123",
        "city": "SOMECITY",
        "state": "VIRGINIA",
        "zip": "22102",
        "country": "UNITED STATES",
        "addressType": "mailing"
      }
    ],
    "naicsList": [
      "423430",
      "511210",
      "518210",
      "541330",
      "541511",
      "541512",
      "541513",
      "541519",
      "541611",
      "541618",
      "541990",
      "611430",
      "811212"
    ]
  }
]
  },
  "page": {
    "size": 10,
    "totalElements": 1,
    "totalPages": 1,
    "number": 0
  }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Download Metadata for All Attachments by Resource ID ###

------- | -------
**Request Type** | GET
**URL** |	/resource
**Summary** | Download all attachments from resource ID
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization|	Header|	string|	Yes|Valid and authorized user ID
Api_key	query	| string|	Yes|	Valid System Account API Key
ResourceID	|query|	string|	Yes	| Resource ID
excludeDeleted | query | string | No|

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Downloaded all attachments from resource ID	|OK

Examples

<details>
<summary>Get Attachments details by Resource Id Response</summary>
<p>
<code><pre>
{
"opportunityId": "02160428f9e84cbe8af8f7cc1bd49c7b",
"attachments": [
{
"attachmentId": "eab82b2378aa4cdbacf340b01631c011",
"resourceId": "5ed09570655a4fbb93bbea4a8570ebe9",
"fileExists": "1",
"name": "Hello.txt",
"type": "file",
"postedDate": "",
"accessLevel": "public",
"exportControlled": "0",
"explicitAccess": "0",
"mimeType": ".txt",
"size": 5,
"deletedDate": "",
"deletedFlag": "0",
"accessStatus": "public"
}
]
}
</pre></code>
</p>
</details>


### Download Metadata for All Attachments by Opportunity ID  ###

------- | -------
**Request Type** | GET
**URL** |	/resources
**Summary** | Download all attachments from opportunity ID
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization|	Header|	string|	Yes|Valid and authorized user ID
Api_key	query	| string|	Yes|	Valid System Account API Key
OpportunityID	|query|	string|	Yes	| Opportunity ID
excludeDeleted | query | string | No|

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Downloaded all attachments from opportunity ID	|OK

Examples

<details>
<summary>Get Attachments details by Opportunity Id Response</summary>
<p>
<code><pre>
{
  "_embedded": {
    "opportunityAttachmentList": [
      {
        "opportunityId": "02160428f9e84cbe8af8f7cc1bd49c7b",
        "attachments": [
          {
            "attachmentId": "eab82b2378aa4cdbacf340b01631c011",
            "resourceId": "5ed09570655a4fbb93bbea4a8570ebe9",
            "fileExists": "1",
            "name": "Hello.txt",
            "type": "file",
            "postedDate": "",
            "accessLevel": "public",
            "exportControlled": "0",
            "explicitAccess": "0",
            "mimeType": ".txt",
            "size": 5,
            "deletedDate": "",
            "deletedFlag": "0",
            "accessStatus": "public"
          }
        ]
      }
    ]
  }
}
</pre></code>
</p>
</details>


### IVL Settings


------- | -------
**Request Type** | PUT
**URL** | /organization/{orgId}/ivl
**Summary** | Update IVL Settings (on or off) for an Organization
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
orgId | query | string | Yes | FH Org Id/AAC code of the organization
Request JSON | Body | JSON | Yes | [Refer IVL Settings Contract JSON](#ivl-settings-contract-json)

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Organization’s IVL settings successfully set | NA

Examples

<details>
<summary>IVL Settings Request</summary>
<p>
<code><pre>
{
  "ivlCreate": "forcedon",
  "ivlView": "forcedon"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>


### Get Authorized Party ###

------- | -------
**Request Type** | GET
**URL** | (v1) - /opportunities/access/{opportunityId}/accessRequest <br> (v2) - /access/{opportunityId}/accessRequest
**Summary** | Summary	Get Authorized Party list for the explicit access requests submitted to an Opportunity
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization|	Header	|string	|Yes	|Valid and authorized user ID
api_key|	query|	string|	Yes|	Valid API Key
opportunityId	|query	|string|	Yes|	Opportunity ID


Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | JSON | To get the list of pending, approved, rejected or all request access on that notice | List of the Requestor's info and the status on their request access

Examples

<details>
<summary>Get Authorized Party List Response_v1</summary>
<p>
<code><pre>
{
    "_embedded": {
        "authorizedPartyList": [
            {
                "idType": "resource",
                "resourceName": "Secure 2.png",
                "requestId": "cfc4c057a13e4a2c91741e46399d4a7d",
                "actionType": "pending",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "duns": "608999520",
                "cageCode": "1DJP1"
            },
            {
                "idType": "resource",
                "resourceName": "Secure 1.png",
                "requestId": "7900084914ea400e82db0152cecfbcaf",
                "actionType": "pending",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "duns": "608999520",
                "cageCode": "1DJP1"
            },
            {
                "idType": "notice",
                "requestId": "4f4eeb29dcd2411dbc5a89ab0243f7c8",
                "actionType": "approved",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "duns": "608999520",
                "cageCode": "1DJP1”
            }
        ]
    }
}
</pre></code>
</p>
</details>

<details>
<summary>Get Authorized Party List Response_v2</summary>
<p>
<code><pre>
{
    "_embedded": {
        "authorizedPartyList": [
            {
                "idType": "resource",
                "resourceName": "Secure 2.png",
                "requestId": "cfc4c057a13e4a2c91741e46399d4a7d",
                "actionType": "pending",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "ueiSAM": "025114695AST",
                "cageCode": "1DJP1"
            },
            {
                "idType": "resource",
                "resourceName": "Secure 1.png",
                "requestId": "7900084914ea400e82db0152cecfbcaf",
                "actionType": "pending",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "ueiSAM": "025114695AST",
                "cageCode": "1DJP1"
            },
            {
                "idType": "notice",
                "requestId": "4f4eeb29dcd2411dbc5a89ab0243f7c8",
                "actionType": "approved",
                "fName": "Data",
                "lName": "Entry",
                "email": "reitestuser.de@gmail.com",
                "phone": "1+9734323019",
                "contractorName": "REI SYSTEMS, INC.",
                "ueiSAM": "025114695AST",
                "cageCode": "1DJP1”
            }
        ]
    }
}
</pre></code>
</p>
</details>


### Add Authorized Party ###

------- | -------
**Request Type** | POST
**URL** | (v1) - /opportunities/access/{opportunityId}/accessRequest <br> (v2) - /access/{opportunityId}/accessRequest
**Summary** | Add a Vendor as an Authorized Party for a notice to grant access to all the secured attachments across all the versions . This API will create and approve the request for the vendor.
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON  | Body | JSON | Yes | [Refer Vendor Data Contract JSON](#vendor-data-contract-json)

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string| Access Request created and approved for the vendor. | Action Id is returned.

Examples

<details>
<summary>Add Authorized Party Request_v1</summary>
<p>
<code><pre>
{
"lname":"test",
"fname":"test123",
"email":"testuser.de@gmail.com",
"contractorName":"test contractor",
"duns":"608999570",
"cageCode":"4CHY"
}
</pre></code>
</p>
</details>

<details>
<summary>Add Authorized Party Request_v2</summary>
<p>
<code><pre>
{
"lname":"test",
"fname":"test123",
"email":"testuser.de@gmail.com",
"ueiSAM": "025114695AST"
}
</pre></code>
</p>
</details>


### Check Unique Solicitation Number ###

------- | -------
**Request Type** | GET
**URL** | /isSolicitationNumberUnique/{parent}/{solicitationNumber}/{type}
**Summary** | Check if solicitation number is unique. A solicitation number is unique if it is not used by another opportunity of equivalent type. For justification type, j&a and fair opportunity/limited sources justification are considered equivalent.
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization |	Header |	string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Accounts API Key
Parent |	path |	string |	No |	Parent
SolicitationNumber |	Path |	String |	Yes |	Solicitation Number
Type |	Path |	String |	Yes |	Type

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | JSON |	True/False |	True if solicitation number is unique; false if solicitation number is not unique

Examples

<details>
<summary>Check Unique Solicitation Number Response</summary>
<p>
<code><pre>
{
 “content”: true
}
</pre></code>
</p>
</details>

### Get Related Opportunities ###

------- | -------
**Request Type** | GET
**URL** | /opportunities/{opportunityId}/relatedopportunities/{type}
**Summary** | Get Related Contract Opportunities
**Consumes** | application/JSON
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization |	Header |	string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Account API Key
opportunityId |	query |	string |	Yes |	Opportunity ID
Page |	query |	Integer |	No |	Page; Default Value: 0
Size |	query |	Integer |	No |	Size; Default value: 0
sortBy |	query |	string |	No |	sortBy; Default Value: -modifiedOn
Type |	Path |	String |	Yes |	Type

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | JSON |	True/False |	Pulls related opportunity information based on the given parameter

Examples

<details>
<summary>Get Related Opportunities Response_v1</summary>
<p>
<code><pre>
{
  "recipientCount": 0,
  "unparsableCount": 0,
  "count": 1,
  "totalAwardAmt": 0,
  "relatedOpportunities": [
    {
      "data": {
        "award": {
          "date": null,
          "amount": null,
          "number": "awd123",
          "awardee": {
            "duns": null,
            "name": null,
            "location": null
          },
          "lineItemNumber": null,
          "deliveryOrderNumber": "donumber"
        },
        "title": "Test Justification 4 conv 1",
        "id": "96ba2e5833b14cecb3c2b3ac1ba3b56e",
        "opportunityId": "96ba2e5833b14cecb3c2b3ac1ba3b56e"
      },
      "archived": false,
      "cancelled": false,
      "latest": false,
      "deleted": false
    }
  ]
}
</pre></code>
</p>
</details>

<details>
<summary>Get Related Opportunities Response_v2</summary>
<p>
<code><pre>
{
  "recipientCount": 0,
  "unparsableCount": 0,
  "count": 1,
  "totalAwardAmt": 0,
  "relatedOpportunities": [
    {
      "data": {
        "award": {
          "date": null,
          "amount": null,
          "number": "awd123",
          "awardee": {
            "ueiSAM": "null",
            "name": null,
            "location": null
          },
          "lineItemNumber": null,
          "deliveryOrderNumber": "donumber"
        },
        "title": "Test Justification 4 conv 1",
        "id": "96ba2e5833b14cecb3c2b3ac1ba3b56e",
        "opportunityId": "96ba2e5833b14cecb3c2b3ac1ba3b56e"
      },
      "archived": false,
      "cancelled": false,
      "latest": false,
      "deleted": false
    }
  ]
}
</pre></code>
</p>
</details>



## API Contract JSON

### Create and Update Opportunity Contract JSON


<div id="create-update-json-v1">
<details>
<summary>Create_Update_Opportunity_Contract_JSON_v1</summary>
<p>
<code><pre>
{
    "data": {
        "type": "",
        "solicitationNumber": "",
        "title": "",
        "organizationId": "",
        "classificationCode": "",
        "naics": [
            {
                "type": "primary",
                "code": [
                    ""
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "",
                "email": "",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": ""
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "",
            "streetAddress2": "",
            "city": {
                "code": "",
                "name": ""
            },
            "country": {
                "code": "",
                "name": ""
            },
            "state": {
                "code": "",
                "name": ""
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2022-08-08"
            }
        },
        "award": {
            "date": "",
            "number": "",
            "deliveryOrderNumber": "",
            "amount": "",
            "lineItemNumber": "",
            "awardee": {
                "manual": false,
                "name": "",
                "duns": "",
                "location": {
                    "streetAddress": "",
                    "streetAddress2": "",
                    "city": {
                        "code": "",
                        "name": ""
                    },
                    "state": {
                        "code": "",
                        "name": ""
                    },
                    "zip": "",
                    "country": {
                        "code": "",
                        "name": ""
                    }
                }
            },
            "justificationAuthority": {
                "modificationNumber": "",
                "authority": "dictionary"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": ""
        }
    ],
    "related": {
        "opportunityId": ""
    },
    "parent": {
        "opportunityId": ""
    }
}

</pre></code>
</p>
</details>
</div>

<div id="create-update-json-v2">
<details>
<summary>Create_Update_Opportunity_Contract_JSON_v2</summary>
<p>
<code><pre>
{
    "data": {
        "type": "",
        "solicitationNumber": "",
        "title": "",
        "organizationId": "",
        "classificationCode": "",
        "naics": [
            {
                "type": "primary",
                "code": [
                    ""
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "",
                "email": "",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": ""
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "",
            "streetAddress2": "",
            "city": {
                "code": "",
                "name": ""
            },
            "country": {
                "code": "",
                "name": ""
            },
            "state": {
                "code": "",
                "name": ""
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2019-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2019-08-08"
            }
        },
        "award": {
            "date": "",
            "number": "",
            "deliveryOrderNumber": "",
            "amount": "",
            "lineItemNumber": "",
            "awardee": {
                "manual": false,
                "name": "",
                "ueiSAM": "",
                "location": {
                    "streetAddress": "",
                    "streetAddress2": "",
                    "city": {
                        "code": "",
                        "name": ""
                    },
                    "state": {
                        "code": "",
                        "name": ""
                    },
                    "zip": "",
                    "country": {
                        "code": "",
                        "name": ""
                    }
                }
            },
            "justificationAuthority": {
                "modificationNumber": "",
                "authority": "dictionary"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": ""
        }
    ],
    "related": {
        "opportunityId": ""
    },
    "parent": {
        "opportunityId": ""
    }
}

</pre></code>
</p>
</details>
</div>


* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Allowed Values | Required (Create/Update) | Required (Publish) | Description | Applicable Versions
-----|-----------|-------|-------------------|------------|------------ |---------- | -------- 
data | JSON Object |NA | NA | NA | NA | NA | NA
data.type | string | 1 character| [Refer Notice Types](#notice-types) | Yes | Yes | Notice Type | v1 <br> v2
data.solicitationNumber | string | 128 characters |a-z A-Z 0-9 - _ ( ) {} |No | Yes (No for type = s  (Special Notice)) | Solicitation Number | v1 <br> v2
data.title | string | 256 characters | |Yes | Yes | Title of the Opportunity | v1 <br> v2
data.organizationId | string | 32 characters | | Yes | Yes | FH Organization Id/AAC code of the office where an Opportunity is being submitted | v1 <br> v2
data.classificationCode | string |  | | No | Yes (No for type = r, g, a  (SourcesSought, Sale of Surplus, Awards)) | Product Service Code (PSC) | v1 <br> v2
data.naics | JSON Array | NA |NA | NA | NA | NA | NA
data.naics.code | Array of String | | <a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>| No | Yes for type = k, o (Combined Synopsis, Solicitation) | Valid NAICS Code | v1 <br> v2
data.naics.type | string | |primary| No | Yes | NAICS Type Note: 'p' must be in lower case | v1 <br> v2
data.pointOfContact | JSON Array | NA |NA | NA | NA |  NA | NA
data.pointOfContact.type | string | | primary,<br/> secondary | No | Yes (No for type = a, s (Award, Special Notice)) | Contact Type Note: 'p' and 's' must be in lower case | v1 <br> v2
data.pointOfContact.title | string | |  | No | No | Contact title | v1 <br> v2
data.pointOfContact.fullname | string | 500 characters| | No | Yes (No for type = a (Award))| Contact Full Name | v1 <br> v2
data.pointOfContact.email | string |255 characters | | No  | Yes (No for type = a (Award))  | Contact email | v1 <br> v2
data.pointOfContact.phone | string |255 characters | | No | No | Contact Phone | v1 <br> v2
data.pointOfContact.fax | string | 255 characters | | No  | No | Contact Fax | v1 <br> v2
data.pointOfContact.additionalInfo | JSON Object |NA |NA | NA  | NA |  Any additional information on Point of Contact | v1 <br> v2
data.pointOfContact.additionalInfo.<br/>content | String | | | No  | No | Details of the additional information on Point of Contact | v1 <br> v2 
data.placeOfPerformance | JSON Object| NA | NA | NA | NA | NA | NA
data.placeOfPerformance.<br/>streetAddess | string | | | No | No | Pop Address | v1 <br> v2
data.placeOfPerformance.<br/>streetAddess2 | string | | | No | No | Pop Address2 | v1 <br> v2
data.placeOfPerformance.city | JSON Object | NA | NA | NA | NA | Pop City |NA
data.placeOfPerformance.city.<br/>code | string | | | No | No | Pop City code | v1 <br> v2
data.placeOfPerformance.city.<br/>name | string | | | No | No | Pop City name| v1 <br> v2
data.placeOfPerformance.state | JSON Object |NA | NA | NA | NA | Pop City state| NA
data.placeOfPerformance.state.<br/>code | string | | | No | No | Pop city state code | v1 <br> v2
data.placeOfPerformance.state.<br/>name | string | | | No | No | Pop city state name| v1 <br> v2
data.placeOfPerformance.country | JSON Object | NA | NA | NA | NA | Pop Country| v1 <br> v2
data.placeOfPerformance.<br/>country.code | string | | | No | No | Pop Country Code| v1 <br> v2
data.placeOfPerformance.<br/>country.name | string | | | No | No | Pop Country name| v1 <br> v2
data.placeOfPerformance.zip | string | | | No | No | Pop Country zip| v1 <br> v2
data.archive | JSON Object |NA | NA | NA | NA | Contract opportunity archive policy information | NA
data.archive.type | string | | auto15,<br/> auto30,<br/> autocustom | No | Yes | Archive Type<br/>The policy will determine the date either by validation of other dates associated to the notice or by a manually entered date that will be used for marking the notice inactive | v1 <br> v2
data.archive.date | date | | | No | Yes for archive.type = autocustom | Archive Date<br/> This date will indicate when a notice will be moved to the inactive status. This date must be in the future | v1 <br> v2
data.permissions | JSON Object | NA | NA | NA | NA | NA|NA
data.permissions.ivl | JSON Object | NA | NA | NA | NA |Government determined use and visibility of the 'Interested Vendor's List' where users outside the notice can indicate a interest in the notice | v1 <br> v2
data.permissions.ivl.create | boolean | | | No | Yes (No for type = a (Award)) | IVL create permission | v1 <br> v2
data.permissions.ivl.read | boolean | | | No | Yes (No for type = a (Award)) | IVL read permission | v1 <br> v2
data.permissions.ivl.update | boolean | |  | No | No | IVL update permission | v1 <br> v2
data.permissions.ivl.delete | boolean | | | No | No | IVL delete permission | v1 <br> v2
data.solicitation | JSON Object |NA | NA | NA | NA | NA
data.solicitation.setAside | string | |[Refer Set-Aside Values](#set-aside-values) | No | No | Set-Aside code<br/> The designator for type of set aside determined for the contract action | v1 <br> v2
data.solicitation.deadlines | JSON | NA | NA | NA | NA |Response deadline date for Contract opportunity|NA
data.solicitation.<br/>deadlines.response | date | |1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| No |1) Yes for type = k, o (Combine Synopsis, Solicitation) <br/>2)	Yes if archive.type=auto15 except type = a (Award)	| Deadline Date| v1 <br> v2
data.solicitation.deadlines.<br/>responseTz |string | |[Refer Time Zone values](#time-zone-values) |No| No | Time Zone code for <br/>Solicitation Deadline Date| v1 <br> v2
data.award | JSON Object | NA | NA | NA | NA | This section is mainly used for providing award information that is required for Award, Justification and Intent to Bundle opportunity types |NA 
data.award.date | date | |YYYY-MM-DD |No | Yes only for type = a (Award) | Award Date | v1 <br> v2
data.award.number | string | 255 characters | |No | Yes only for type= i, j, a (Intent to Bundle, Justification, Award) | Award Number | v1 <br> v2
data.award.deliverOrderNumber | string | 255 characters| | No | No | Award Delivery Order Number | v1 <br> v2
data.award.amount | number |64 digits |  | No | Yes only for type = a (Award) | Award Amount | v1 <br> v2
data.award.lineitemNumber | string |255 characters | | No | No | Contract Line item Number | v1 <br> v2
data.award.awardee | JSON Object | NA| NA | NA | NA |Awardee details; Only for type = a (Award) |NA
data.award.awardee.name | string | 1000 characters | | No | No; Either awardee.name or awardee.duns is required | Awardee Name | v1 <br> v2
data.award.awardee.duns | string | 9 digits | | No | No; Either awardee.name or awardee.duns is required | Awardee UEI Duns | v1 <br> v2 - Deprecated
data.award.awardee.ueiSAM | string | 12 alphanumeric | | No | No; Either awardee.name or awardee.ueiSAM is required <br> **ueiSAM values not yet available** |Unique Entity Identifier SAM - Example: ueiSAM=025114695AST. | v2
data.award.awardee.location | JSON Object |NA | NA | NA | NA | Awardee Location details; **Required if awardee.name is provided** | v1 <br> v2
data.award.awardee.location.<br/>streetAddress | string | | | No | No | Awardee Street Address  | v1 <br> v2
data.award.awardee.location.<br/>streetAddress2 | string | | | No | No | Awardee Street Address 2 | v1 <br> v2
data.award.awardee.location.<br/>city | JSON Object |NA |NA |NA | NA | Awardee City details | v1 <br> v2
data.award.awardee.location.<br/>city.code | string | | | No | Yes | Awardee City code | v1 <br> v2
data.award.awardee.location.<br/>city.name | string | | | No | No | Awardee City name | v1 <br> v2
data.award.awardee.location.<br/>state | JSON Object | NA | NA | NA | NA | Awardee State details | v1 <br> v2
data.award.awardee.location.<br/>state.code | string | | | No | Yes | Awardee State code | v1 <br> v2
data.award.awardee.location.<br/>state.name | string | | | No | No | Awardee State name | v1 <br> v2
data.award.awardee.location.<br/>country | JSON Object | NA| NA | NA | NA |Awardee Country details | v1 <br> v2
data.award.awardee.location.<br/>country.code | string | | | No | Yes | Awardee Country code | v1 <br> v2
data.award.awardee.location.<br/>country.name | string | | | No | No | Awardee Country Name | v1 <br> v2
data.award.awardee.location.<br/>zip | string | | | No | No | Awardee Country Zip code | v1 <br> v2
data.award.justificationAuthority | JSON Object |NA |NA | NA | NA | Only for type = j (Justification) |NA
data.award.justificationAuthority.<br/>modificationNumber | string | 32 characters| | No | No | Justification Authority Modification Number | v1 <br> v2
data.award.justificationAuthority.<br/>authority | string|  |  | No | Yes for type = j (Justification) | Justification Authority | v1 <br> v2
data.additionalReporting | JSON Array | |None, <br/>auto_recovery | No | Yes; No for type = s (Special Notice) | Initiative that applies to the notice | v1 <br> v2
description | JSON Array | NA | NA | NA | NA | NA |NA
description.body | string | 65535 characters| | No | Yes; No for type = a (Award) | Description of the notice | v1 <br> v2
related | JSON  Object| NA | NA | NA | NA | Related Notice information |NA
related.opportunityId | string | 32 characters|[Refer Related Notices](#related-notices) | No | No | Opportunity Id of the related notice  | v1 <br> v2
parent | JSON Object| NA | NA | NA | NA |  Parent Notice information| NA
parent.opportunityId | string | 32 characters| | Yes (to create a draft opportunity for a published notice) | No |Opportunity Id of the parent notice| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Publish Opportunity Contract JSON

<div id="publish-json" title="Click to view Publish Contract">
<details>
<summary>Publish_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "requestType": "publish_request",
  "reason": ""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description| Applicable Versions
-----|-----------|----------------|----------|------------|-----
requestType | string | publish_request | Yes | Type of request| v1 <br> v2
reason | string |  | No | Publish reason| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Create and Publish Opportunity Contract JSON


<div id="create-publish-json-v1">
<details>
<summary>Create_Publish_Opportunity_Contract_JSON_v1</summary>
<p>
<code><pre>
{
    "data": {
        "type": "",
        "solicitationNumber": "",
        "title": "",
        "organizationId": "",
        "classificationCode": "",
        "naics": [
            {
                "type": "primary",
                "code": [
                    ""
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "",
                "email": "",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": ""
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "",
            "streetAddress2": "",
            "city": {
                "code": "",
                "name": ""
            },
            "country": {
                "code": "",
                "name": ""
            },
            "state": {
                "code": "",
                "name": ""
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2022-08-08"
            }
        },
        "award": {
            "date": "",
            "number": "",
            "deliveryOrderNumber": "",
            "amount": "",
            "lineItemNumber": "",
            "awardee": {
                "manual": false,
                "name": "",
                "duns": "",
                "location": {
                    "streetAddress": "",
                    "streetAddress2": "",
                    "city": {
                        "code": "",
                        "name": ""
                    },
                    "state": {
                        "code": "",
                        "name": ""
                    },
                    "zip": "",
                    "country": {
                        "code": "",
                        "name": ""
                    }
                }
            },
            "justificationAuthority": {
                "modificationNumber": "",
                "authority": "dictionary"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": ""
        }
    ],
    "related": {
        "opportunityId": ""
    },
    "parent": {
        "opportunityId": ""
    },
    "resources": [
        {
            "attType": "link",
            "link": "",
            "description": ""
        },
        {
            "attType": "file",
            "content": "",
            "resourceName": "",
            "packageAccessLevel": "",
            "explicitAccess": "",
            "exportControlled": null
        }
    ]
}
</pre></code>
</p>
</details>
</div>

<div id="create-publish-json-v2">
<details>
<summary>Create_Publish_Opportunity_Contract_JSON_v2</summary>
<p>
<code><pre>
{
    "data": {
        "type": "",
        "solicitationNumber": "",
        "title": "",
        "organizationId": "",
        "classificationCode": "",
        "naics": [
            {
                "type": "primary",
                "code": [
                    ""
                ]
            }
        ],
        "pointOfContact": [
            {
                "type": "primary",
                "title": "",
                "fullName": "",
                "email": "",
                "phone": "",
                "fax": "",
                "additionalInfo": {
                    "content": ""
                }
            }
        ],
        "placeOfPerformance": {
            "streetAddress": "",
            "streetAddress2": "",
            "city": {
                "code": "",
                "name": ""
            },
            "country": {
                "code": "",
                "name": ""
            },
            "state": {
                "code": "",
                "name": ""
            },
            "zip": ""
        },
        "archive": {
            "type": "autocustom",
            "date": "2022-09-09"
        },
        "permissions": {
            "IVL": {
                "create": false,
                "delete": false,
                "read": false,
                "update": false
            }
        },
        "solicitation": {
            "setAside": "SBA",
            "deadlines": {
                "response": "2022-08-08"
            }
        },
        "award": {
            "date": "",
            "number": "",
            "deliveryOrderNumber": "",
            "amount": "",
            "lineItemNumber": "",
            "awardee": {
                "manual": false,
                "name": "",
                "ueiSAM": "",
                "location": {
                    "streetAddress": "",
                    "streetAddress2": "",
                    "city": {
                        "code": "",
                        "name": ""
                    },
                    "state": {
                        "code": "",
                        "name": ""
                    },
                    "zip": "",
                    "country": {
                        "code": "",
                        "name": ""
                    }
                }
            },
            "justificationAuthority": {
                "modificationNumber": "",
                "authority": "dictionary"
            }
        },
        "additionalReporting": [
            "none"
        ]
    },
    "description": [
        {
            "body": ""
        }
    ],
    "related": {
        "opportunityId": ""
    },
    "parent": {
        "opportunityId": ""
    },
    "resources": [
        {
            "attType": "link",
            "link": "",
            "description": ""
        },
        {
            "attType": "file",
            "content": "",
            "resourceName": "",
            "packageAccessLevel": "",
            "explicitAccess": "",
            "exportControlled": null
        }
    ]
}
</pre></code>
</p>
</details>
</div>


* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Allowed Values| Required | Description|Applicable Versions
-----|-----------|-------|-------------------|------------|------------|-----
data | JSON Object |NA | NA | NA | NA|NA
data.type | string | 1 character| [Refer Notice Types](#notice-types) | Yes | Notice Type| v1 <br> v2
data.solicitationNumber | string | 128 characters |a-z A-Z 0-9 - _ ( ) {}| Yes (No for type = s  (Special Notice)) | Solicitation Number| v1 <br> v2
data.title | string | 256 characters | | Yes | Title of the Opportunity| v1 <br> v2
data.organizationId | string | 32 characters | | Yes | FH Organization Id/AAC code of the office where an Opportunity is being submitted| v1 <br> v2
data.classificationCode | string |  | | Yes (No for type = r, g, a  (SourcesSought, Sale of Surplus, Awards)) | Product Service Code (PSC)| v1 <br> v2
data.naics | JSON Array | NA |NA | NA |NA|NA
data.naics.code | Array of String | | <a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>| Yes for type = k, o (Combined Synopsis, Solicitation) | Valid NAICS Code| v1 <br> v2
data.naics.type | string | |primary|Yes | NAICS Type Note: 'p' must be in lower case| v1 <br> v2
data.pointOfContact | JSON Array | NA |NA | NA |NA|NA
data.pointOfContact.type | string | | primary,<br/> secondary | Yes (No for type = a, s (Award, Special Notice)) | Contact Type Note: 'p' and 's' must be in lower case| v1 <br> v2
data.pointOfContact.title | string | |  | No | Contact title| v1 <br> v2
data.pointOfContact.fullname | string | 500 characters| | Yes (No for type = a (Award))| Contact Full Name| v1 <br> v2
data.pointOfContact.email | string |255 characters | | Yes (No for type = a (Award))  | Contact email| v1 <br> v2
data.pointOfContact.phone | string |255 characters | | No | Contact Phone| v1 <br> v2
data.pointOfContact.fax | string | 255 characters | | No | Contact Fax| v1 <br> v2
data.pointOfContact.additionalInfo | JSON Object |NA |NA | NA |  Any additional information on Point of Contact| v1 <br> v2
data.pointOfContact.additionalInfo.<br/>content | String | | | No | Details of the additional information on Point of Contact | v1 <br> v2
data.placeOfPerformance | JSON Object| NA | NA | NA |NA|NA
data.placeOfPerformance.<br/>streetAddess | string | | |No | Pop Address| v1 <br> v2
data.placeOfPerformance.<br/>streetAddess2 | string | | | No | Pop Address2| v1 <br> v2
data.placeOfPerformance.city | JSON Object| NA | NA |NA | Pop City| v1 <br> v2
data.placeOfPerformance.city.<br/>code | string | | |No | Pop City code| v1 <br> v2
data.placeOfPerformance.city.<br/>name | string | | |No | Pop City name| v1 <br> v2
data.placeOfPerformance.state | JSON Object |NA | NA |NA | Pop City state| v1 <br> v2
data.placeOfPerformance.state.<br/>code | string | | | No | Pop city state code| v1 <br> v2
data.placeOfPerformance.state.<br/>name | string | | | No | Pop city state name| v1 <br> v2
data.placeOfPerformance.country | JSON Object | NA | NA | NA | Pop Country| v1 <br> v2
data.laceOfPerformance.<br/>country.code | string | | |No | Pop Country Code| v1 <br> v2
data.placeOfPerformance.<br/>country.name | string | | |No | Pop Country name| v1 <br> v2
data.placeOfPerformance.zip | string | | |No | Pop Country zip| v1 <br> v2
data.archive | JSON Object |NA | NA | NA | Contract opportunity archive policy information| v1 <br> v2
data.archive.type | string | | auto15,<br/> auto30,<br/> autocustom | Yes | Archive Type<br/>The policy will determine the date either by validation of other dates associated to the notice or by a manually entered date that will be used for marking the notice inactive| v1 <br> v2
data.archive.date | date | | |Yes for archive.type = autocustom | Archive Date<br/> This date will indicate when a notice will be moved to the inactive status. This date must be in the future| v1 <br> v2
data.permissions | JSON Object | NA | NA | NA |NA|NA
data.permissions.ivl | JSON | NA | NA | NA |Government determined use and visibility of the 'Interested Vendor's List' where users outside the notice can indicate a interest in the notice| v1 <br> v2
data.permissions.ivl.create | boolean | | | Yes (No for type = a (Award)) | IVL create permission| v1 <br> v2
data.permissions.ivl.read | boolean | | |Yes (No for type = a (Award)) | IVL read permission| v1 <br> v2
data.permissions.ivl.update | boolean | |  | No | IVL update permission| v1 <br> v2
data.permissions.ivl.delete | boolean | | |No | IVL delete permission| v1 <br> v2
data.solicitation | JSON Object |NA | NA | NA |NA|NA
data.solicitation.setAside | string | |[Refer Set-Aside Values](#set-aside-values) | No | Set-Aside code<br/> The designator for type of set aside determined for the contract action| v1 <br> v2
data.solicitation.deadlines | JSON | NA | NA | NA |Response deadline date for Contract opportunity| v1 <br> v2
data.solicitation.<br/>deadlines.response | date | |1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| 1) Yes for type = k, o (Combine Synopsis, Solicitation) <br/>2)	Yes if archive.type=auto15 except type = a (Award)	| Deadline Date| v1 <br> v2
data.solicitation.deadlines.<br/>responseTz |string | |[Refer Time Zone values](#time-zone-values) |No | Time Zone code for <br/>Solicitation Deadline Date| v1 <br> v2
data.award | JSON Object | NA | NA | NA| This section is mainly used for providing award information that is required for Award, Justification and Intent to Bundle opportunity types| v1 <br> v2
data.award.date | date | |YYYY-MM-DD | Yes only for type = a (Award) | Award Date| v1 <br> v2
data.award.number | string | 255 characters | |Yes only for type= i, j, a (Intent to Bundle, Justification, Award) | Award Number| v1 <br> v2
data.award.deliverOrderNumber | string | 255 characters| | No | Award Delivery Order Number| v1 <br> v2
data.award.amount | number |64 digits |  | Yes only for type = a (Award) | Award Amount| v1 <br> v2
data.award.lineitemNumber | string |255 characters | | No | Contract Line item Number| v1 <br> v2
data.award.awardee | JSON Object | NA| NA | NA |Awardee details; Only for type = a (Award)| v1 <br> v2
data.award.awardee.name | string | 1000 characters | No | No; Either awardee.name or awardee.duns is required | Awardee Name | v1 <br> v2
data.award.awardee.duns | string | 9 digits | No | No; Either awardee.name or awardee.duns is required | Awardee UEI Duns | v1 <br> v2 - Deprecated
data.award.awardee.ueiSAM | string | 12 alphanumeric | No | No; Either awardee.name or awardee.ueiSAM is required <br> **ueiSAM values not yet available** |Unique Entity Identifier SAM - Example: ueiSAM=025114695AST. | v2
data.award.awardee.location | JSON Object |NA | NA | NA | Awardee Location details; **Required if awardee.name is provided**| v1 <br> v2
data.award.awardee.location.<br/>streetAddress | string | | | No | Awardee Street Address | v1 <br> v2
data.award.awardee.location.<br/>streetAddress2 | string | | | No | Awardee Street Address 2| v1 <br> v2
data.award.awardee.location.<br/>city | JSON Object|NA |NA |NA | Awardee City details| v1 <br> v2
data.award.awardee.location.<br/>city.code | string | | | Yes | Awardee City code| v1 <br> v2
data.award.awardee.location.<br/>city.name | string | | | No | Awardee City name| v1 <br> v2
data.award.awardee.location.<br/>state | JSON Object | NA | NA | NA | Awardee State details| v1 <br> v2
data.award.awardee.location.<br/>state.code | string | | | Yes | Awardee State code| v1 <br> v2
data.award.awardee.location.<br/>state.name | string | | | No | Awardee State name| v1 <br> v2
data.award.awardee.location.<br/>country | JSON Object | NA| NA | NA |Awardee Country details| v1 <br> v2
data.award.awardee.location.<br/>country.code | string | | | Yes | Awardee Country code| v1 <br> v2
data.award.awardee.location.<br/>country.name | string | | |  No | Awardee Country Name| v1 <br> v2
data.award.awardee.location.<br/>zip | string | | | No | Awardee Country Zip code| v1 <br> v2
data.award.justificationAuthority | JSON Object |NA |NA | NA | Only for type = j (Justification)| v1 <br> v2
data.award.justificationAuthority.<br/>modificationNumber | string | 32 characters| | No | Justification Authority Modification Number| v1 <br> v2
data.award.justificationAuthority.<br/>authority | string|  |  | Yes for type = j (Justification) | Justification Authority| v1 <br> v2
data.additionalReporting | JSON Array | |none, <br/>auto_recovery | Yes; No for type = s (Special Notice) | Initiative that applies to the notice| v1 <br> v2
description | JSON Array | NA | NA | NA |NA|NA
description.body | string | 65535 characters| | Yes; No for type = a (Award) | Description of the notice| v1 <br> v2
related | JSON Object | NA | NA | NA | Related Notice information| v1 <br> v2
related.opportunityId | string | 32 characters| [Refer Related Notices](#related-notices)| No | Opportunity Id of the related notice| v1 <br> v2
parent | JSON Object | NA | NA | NA | Parent Notice information| v1 <br> v2
parent.opportunityId | string | 32 characters| | Yes (for modifications to a published notice) | Opportunity Id of the parent notice| v1 <br> v2
resources | JSON Array |NA | NA | NA |NA|NA
resources.attType | string | |link, file | No| Type of attachment, either link or file| v1 <br> v2
resources.content | byte |250MB |  | No | File content in base64 format| v1 <br> v2
resources.link | string | 255 characters | |No | Resource link URL| v1 <br> v2
resources.packageAccessLevel | string | | public,<br/>private<br/>(default public) |  No| Type of access to file| v1 <br> v2
resources.resourceName | string | 255 characters |a-z A-Z 0-9 - _ ()  | No | Name of file| v1 <br> v2
resources.description | string |255 characters | | No | Description of the link| v1 <br> v2
resources.explicitAccess | string |1 character | 0, 1 (defaults to '0' public access, if not provided) |No |Explicit Access. For Controlled Unclassified files, specify '1'| v1 <br> v2
resources.exportControlled | string |1 character | 0 | No |Export Controlled. * Captured for future JCP validation| v1 <br> v2


<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity Contract JSON

<div id="revise-json" title="Click to view Revise Contract">
<details>
<summary>Revise_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "requestType": "update_publish_request",
  "reason": ""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Verions
-----|-----------|----------------|----------|------------|-----
requestType | string | update_publish_request | Yes | Type of request| v1 <br> v2
reason | string |  | No | Reason for revision| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Cancel Opportunity Contract JSON

<div id="cancel-json" title="Click to view Cancel Contract">
<details>
<summary>Cancel_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": "cancel_request",
  "data": {
    "description": ""
  }
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
reason | string |  | No | Reason for cancelation| v1 <br> v2
requestType | string | cancel_request | Yes | Type of request| v1 <br> v2
description | string |  | Yes | Description for cancelation| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Uncancel Opportunity Contract JSON

<div id="uncancel-json" title="Click to view Uncancel Contract">
<details>
<summary>Uncancel_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": "uncancel_request",
  "data": {
    "description": "",
    "newContractAwardDate": "",
    "newArchiveDate": "",
    "newArchiveType": "",
    "newResponseDate": "",
    "newResponseTz": "America/New_York"
  }
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
reason | string |  | Yes | Reason for uncanceling| v1 <br> v2
requestType | string | uncancel_request | Yes | Type of request| v1 <br> v2
description | string |  | Yes | Description for uncanceling| v1 <br> v2
newContractAwardDate | date | YYYY-MM-DD | Yes only for type = a (Award)| New Contract Award Date| v1 <br> v2
newArchiveDate | date | YYYY-MM-DD | Yes if newArchiveType=autocustom | New Archive Date| v1 <br> v2
newArchiveType | string | auto15,<br/> auto30,<br/> autocustom | Yes  | New Archive Type| v1 <br> v2
newResponseDate | date | 1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| 1) Yes for types = k, o (Combined Synopsis/Solicitation) <br/>2) Yes if newArchive.type=auto15 except for type = a (Award) | New Response Date| v1 <br> v2
newResponseTz | string | [Refer Time Zone Values](#time-zone-values) | No | New Response Time Zone| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Archive Opportunity Contract JSON

<div id="archive-json" title="Click to view Archive Contract">
<details>
<summary>Archive_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": "archive_request"
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
requestType | string | archive_request | Yes | Type of request| v1 <br> v2
reason | string |  | No | Archive reason| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Unarchive Opportunity Contract JSON

<div id="unarchive-json" title="Click to view Unarchive Contract">
<details>
<summary>Unarchive_Opportunity_Contract_JSON</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": " unarchive_request",
  "data": {
    "newContractAwardDate": "",
    "newArchiveDate": "",
    "newArchiveType": "",
    "newResponseDate": "",
    "newResponseTz": "America/New_York"
  }
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
reason | string |  | Yes | Reason for unarchiving| v1 <br> v2
requestType | string | unarchive_request | Yes | Type of request| v1 <br> v2
newContractAwardDate | date | YYYY-MM-DD | Yes for type = a (Award)| New Contract Award Date| v1 <br> v2
newArchiveDate | date | YYYY-MM-DD | Yes if newArchiveType=autocustom | New Archive Date| v1 <br> v2
newArchiveType | string | auto15,<br/> auto30,<br/> autocustom | Yes  | New Archive Type| v1 <br> v2
newResponseDate | date | 1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01) | 1) Yes for types = k, o (Combined Synopsis/Solicitation) <br/>2) Yes if newArchive.type=auto15 except for type = a (Award) | New Response Date| v1 <br> v2
newResponseTz | string | [Refer Time Zone Values](#time-zone-values) | No | New Response Time Zone| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### Create Attachment Contract JSON

<div id="create-attachment-json" title="Click to view Create Attachment Contract">
<details>
<summary>Create_Attachment_Contract_JSON - File</summary>
<p>
<code><pre>
{
 "attType": "file",
 "content": "",
 "resourceName": "",
 "fileType": "",
 "packageAccessLevel": "",
 "explicitAccess":"",
 "exportControlled": null
}
</pre></code>
</p>
</details>
<details>

<summary>Create_Attachment_Contract_JSON - Link</summary>
<p>
<code><pre>
{
  "attType": "link",
  "link": "",
  "description": ""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Field Length |Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-------|-----
attType | string | 32 characters |link, file | Yes | Type of attachment, either link or file| v1 <br> v2
content | byte | 250MB| | Yes if attType=file | File content in base64 format| v1 <br> v2
packageAccessLevel | string | 32 characters|public, <br/>private <br/>(default public) | No | Type of access to file. Only used with attType 'file'.| v1 <br> v2
resourceName | string | 255 characters|a-z A-Z 0-9 - _ () | Yes if attType=file | Name of file| v1 <br> v2
fileType | string | 64 characters | | No  | Mime Type of the file. Only used for attType 'file'. [Refer Valid File Types](#valid-file-types)| v1 <br> v2
link | string | 255 characters| | Yes if attType=link | Resource link  URL| v1 <br> v2
description | string |255 characters | | Yes if attType=link | Description of the link| v1 <br> v2
explicitAccess | string |1 character | 0, 1 <br/>(defaults to '0' public access, if not provided) | No  |Explicit Access. For Controlled Unclassified files, specify '1'| v1 <br> v2
exportControlled | string |1 character | 0 | No  | *Captured for future JCP validation*<br> Export Controlled| v1 <br> v2

#### Valid File Types 

File Extension | File Type
-----|-----
Bitmap Image File (.bmp)|	image/bmp
Graphical Interchange Format File (.gif)|	image/gif
JPEG Image (.jpeg)|	image/jpeg
JPEG Image (.jpg)	|image/jpeg
LaTex (.tex)|	application/x-tex
Microsoft Excel Document (.xls)|	application/vnd.ms-excel
Microsoft Excel Open XML Document (.xlsx)|	application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
Microsoft Word Document (.doc)|	application/msword
Microsoft Word Open XML Document (.docx)|	application/vnd.openxmlformats-officedocument.wordprocessingml.document
OpenDocument Text Document (.odt)|	application/vnd.oasis.opendocument.text
Plain Text File (.txt)|	text/plain
Portable Document Format File (.pdf)|	application/pdf
Portable Network Graphic (.png)|	image/png
PowerPoint Open XML Presentation (.pptx)|	application/vnd.openxmlformats-officedocument.presentationml.presentation
PowerPoint Presentation (.ppt)|	application/vnd.ms-powerpoint
Rich Text Format (.rtf)	|application/rtf
Audio Video Interleaved (.AVI)|	video/avi
QuickTime (.mov)|	video/quicktime
MPEG (.mpg, .mpeg, .mp4)	|video/mpeg , video/mp4
Windows Media Video (.wmv)	|video/x-ms-wmv
Flash Video (.flv, .f4v)|	video/x-flv
Zip file (.zip)| application/zip



<p><small><a href="#">Back to top</a></small></p>

### Update Attachment Contract JSON

<div id="update-attachment-json" title="Click to view update Attachment/Link Contract">
<details>
<summary>Update_Attachment_Contract_JSON </summary>
<p>
<code><pre>
{
 "attType": "file",
 "packageAccessLevel": "",
 "explicitAccess": "",
 "resourceName": "",
 "sortOrderChanged":true ,
 "resourceIdBelow": ""
}
</pre></code>
</p>
</details>

<details>
<summary>Update_Link_Contract_JSON </summary>
<p>
<code><pre>
{
 "resourceName": ""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
attType | string | link, file | No | Required only for file access level changes| v1 <br> v2
packageAccessLevel | string | public,<br/>private <br/>(default public) | No | Type of access to file. Only used with attType 'file'| v1 <br> v2
resourceName | string | a-z A-Z 0-9 - _ () | No | Name of file or link| v1 <br> v2
explicitAccess | string  | 0, 1 | No | Defaults to '0' (public access) if not provided. '1' is used for Controlled Unclassified files. Required only for file access level changes| v1 <br> v2
sortOrderChanged | boolean  | true, false | No | Should be provided if file order is changed.| v1 <br> v2
resourceIdBelow | string  |  | No | This should be Resource ID of the file/link that will display below the file/link that is moved| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>

### IVL Settings Contract JSON

<div id="ivl-settings-json" title="Click to view IVL Settings Contract">
<details>
<summary>IVL_Settings_Contract_JSON</summary>
<p>
<code><pre>
{
  "ivlCreate": "",
  "ivlView": ""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------
ivlCreate | string | forcedon, forcedoff | No | Indicates whether vendors can indicate interest in the organization’s Opportunities| v1 <br> v2
ivlView | string | forcedon, forcedoff | No | Indicates whether vendors can view other vendors interested in the organization’s Opportunities| v1 <br> v2

### Vendor Data Contract JSON

<div id="vendor-data-json-v1" title="Click to view Vendor Data Contract-v1">
<details>
<summary>Vendor_Data_Contract_JSON_v1</summary>
<p>
<code><pre>
{
"lname":"",
"fname":"",
"email":"",
"contractorName":"",
"duns":"",
"cageCode":""
}
</pre></code>
</p>
</details>
</div>

<div id="vendor-data-json-v2" title="Click to view Vendor Data Contract-v2">
<details>
<summary>Vendor_Data_Contract_JSON_v2</summary>
<p>
<code><pre>
{
"lname":"",
"fname":"",
"email":"",
"ueiSAM":""
}
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
fname | string | | Yes | First name of the user| v1 <br> v2
lname | string | | Yes | Last name of the user| v1 <br> v2
email | string | | Yes | Email Id of the user| v1 <br> v2
contractorName | string | | Yes | Contractor Name| v1 <br> v2 - Deprecated
duns | string | | Yes |  Unique Entity Identifier DUNS#| v1 <br> v2- Deprecated
ueiSAM | string | | No | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric (ueiSAM values not yet available). Example: ueiSAM=025114695AST.|  v2
cageCode | string | | Yes | Cage Code| v1 <br> v2 - Deprecated

<p><small><a href="#">Back to top</a></small></p>

### Delete Notice Contract JSON

<div id="delete-notice-json" title="Click to view Delete Notice Contract">
<details>
<summary>Delete_Notice_Contract_JSON</summary>
<p>
<code><pre>
   {
     "reason": "",
     "requestType": "delete_request",
     "data": {
       "description": "",
       "deleteOption": "all"   -- "latest" to delete the latest published version of a notice 
     }
   }
</pre></code>
</p>
</details>
</div>

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type | Allowed Values | Required | Description|Applicable Versions
-----|-----------|----------------|----------|------------|-----
reason|	string|	|	No|	Reason for deletion| v1 <br> v2
requestType	|string	|delete_request |Yes	|Type of request| v1 <br> v2
description	|string|		|Yes|	Description for deletion of a notice| v1 <br> v2
deleteOption|	string|	latest, all|	Yes|	Option to delete either the latest or all versions of a notice| v1 <br> v2

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/OpenAPI.zip" download="OpenAPI">OpenAPI File</a>

<details>
<summary>Create Draft Opportunity</summary>
<p>
<code><pre>
/v1/api/create:
    post:
      tags:
        - Opportunity
      summary: Create contract opportunity
      description: Create contract opportunity.
      operationId: createOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/*
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Create and Publish Opportunity</summary>
<p>
<code><pre>
/v1/api/createAndPublish:
    post:
      tags:
        - Opportunity
      summary: Create and publish contract opportunity
      description: Create and publish contract opportunity.
      operationId: createAndPublishOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/*
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Publish Draft Opportunity	</summary>
<p>
<code><pre>
/v1/api/publish/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: Publish contract opportunity
      description: Publish contract opportunity.
      operationId: publishOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Revise Published Opportunity</summary>
<p>
<code><pre>
/v1/api/revise/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: Revise contract opportunity
      description: Revise contract opportunity.
      operationId: reviseOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false/v1/api/revise/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: Revise contract opportunity
      description: Revise contract opportunity.
      operationId: reviseOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Update Draft Opportunity	</summary>
<p>
<code><pre>
 /v1/api/update/{opportunityId}:
    patch:
      tags:
        - Opportunity
      summary: Update Opportunity
      description: Update contract opportunity.
      operationId: updateOpportunityUsingPATCH
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '204':
          description: No Content
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '412':
          description: Precondition Failed
        '428':
          description: Precondition Required
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Get Opportunity History</summary>
<p>
<code><pre>
/v1/api/history/{opportunityId}:
    get:
      tags:
        - Opportunity
      summary: Get history of Opportunity
      operationId: getOpportunityHistoryUsingGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - name: postedFrom
          in: query
          description: postedFrom
          required: false
          type: string
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Delete Draft Opportunity</summary>
<p>
<code><pre>
/v1/api/delete/{opportunityId}:
    delete:
      tags:
        - Opportunity
      summary: Delete contract opportunity
      description: Delete contract opportunity.
      operationId: deleteOpportunityUsingDELETE
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '204':
          description: No Content
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Delete Notice</summary>
<p>
<code><pre>
/v1/api/{opportunityId}/requests:
    post:
      tags:
        - Opportunity
      summary: Delete all versions of Opportunity
      description: Delete all versions of Opportunity.
      operationId: deleteOpportunitiesAllVersionsUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Get List of Opportunity</summary>
<p>
<code><pre>
/v1/api/search:
    get:
      tags:
        - Opportunity
      summary: Get Opportunities
      description: Get all opportunities.
      operationId: getOpportunitiesUsingGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: archivedFrom
          in: query
          description: archivedFrom
          required: false
          type: string
          allowEmptyValue: false
        - name: archivedTo
          in: query
          description: archivedTo
          required: false
          type: string
          allowEmptyValue: false
        - name: awardNumber
          in: query
          description: awardNumber
          required: false
          type: string
          allowEmptyValue: false
        - name: doNumber
          in: query
          description: doNumber
          required: false
          type: string
          allowEmptyValue: false
        - name: includeCount
          in: query
          description: includeCount
          required: false
          type: boolean
          default: true
          allowEmptyValue: false
        - name: keyword
          in: query
          description: keyword
          required: false
          type: string
          allowEmptyValue: false
        - name: latest
          in: query
          description: latest
          required: false
          type: boolean
          default: true
          allowEmptyValue: false
        - name: noticeType
          in: query
          description: noticeType
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: opportunityIds
          in: query
          description: opportunityIds
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: organizationId
          in: query
          description: organizationId
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: page
          in: query
          description: page
          required: false
          type: integer
          default: 0
          format: int32
          allowEmptyValue: false
        - name: parentNotice
          in: query
          description: parentNotice
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: postedFrom
          in: query
          description: postedFrom
          required: false
          type: string
          allowEmptyValue: false
        - name: postedTo
          in: query
          description: postedTo
          required: false
          type: string
          allowEmptyValue: false
        - name: relatedNotice
          in: query
          description: relatedNotice
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: responseFrom
          in: query
          description: responseFrom
          required: false
          type: string
          allowEmptyValue: false
        - name: responseTo
          in: query
          description: responseTo
          required: false
          type: string
          allowEmptyValue: false
        - name: size
          in: query
          description: size
          required: false
          type: integer
          default: 10
          format: int32
          allowEmptyValue: false
        - name: solNumber
          in: query
          description: solNumber
          required: false
          type: string
          allowEmptyValue: false
        - name: sortBy
          in: query
          description: sortBy
          required: false
          type: string
          default: '-modifiedOn'
          allowEmptyValue: false
        - name: status
          in: query
          description: status
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: orgStatus
          in: query
          description: Organization Status
          required: false
          type: array
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
        - name: Links
          in: query
          description: Link
          required: false
          type: boolean
          items:
            type: string
          collectionFormat: multi
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      security:
        - Token-based Access: []
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Get an Opportunity by Opportunity ID</summary>
<p>
<code><pre>
v1/api/history/{opportunityId}:
    get:
      tags:
        - Opportunity
      summary: Get history of Opportunity
      operationId: getOpportunityHistoryUsingGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - name: postedFrom
          in: query
          description: postedFrom
          required: false
          type: string
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Cancel Published Opportunity</summary>
<p>
<code><pre>
/v1/api/cancel/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: Cancel contract opportunity
      description: Cancel contract opportunity.
      operationId: cancelOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Uncancel Canceled Opportunity	</summary>
<p>
<code><pre>
 /v1/api/uncancel/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: UnCancel contract opportunity
      description: UnCancel contract opportunity.
      operationId: unCancelOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Archive Opportunity</summary>
<p>
<code><pre>
/v1/api/archive/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: Archive contract opportunity
      description: Archive contract opportunity.
      operationId: archiveOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Unarchive Archived Opportunity	</summary>
<p>
<code><pre>
/v1/api/unarchive/{opportunityId}:
    post:
      tags:
        - Opportunity
      summary: UnArchive contract opportunity
      description: UnArchive contract opportunity.
      operationId: unArchiveOpportunityUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Create Resource in Draft Opportunity</summary>
<p>
<code><pre>
/v1/api/{opportunityId}/attachments:
    post:
      tags:
        - attachments
      summary: Add attachment to an opportunity
      description: Add attachment to an opportunity.
      operationId: createAttachmentUsingPOST
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '201':
          description: Created
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Update Resource in Draft Opportunity</summary>
<p>
<code><pre>
/v1/api/{opportunityId}/attachments/{resourceId}
patch:
      tags:
        - attachments
      summary: Update attachment to an opportunity
      description: Update attachment for an opportunity.
      operationId: updateAttachmentUsingPATCH
      consumes:
        - application/JSON
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - in: body
          name: requestJSON
          description: requestJSON
          required: false
          schema:
            type: string
        - name: resourceId
          in: path
          description: resourceId
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '204':
          description: No Content
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Delete Resource in Draft Opportunity</summary>
<p>
<code><pre>
/v1/api/{opportunityId}/attachments/{resourceId}:
    delete:
      tags:
        - attachments
      summary: Delete attachment for an opportunity
      description: Delete attachment for an opportunity.
      operationId: deleteAttachmentUsingDELETE
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: deleteAll
          in: query
          description: deleteAll
          required: true
          type: string
          default: 'false'
          allowEmptyValue: false
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - name: resourceId
          in: path
          description: resourceId
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '204':
          description: No Content
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Download Attachment as Original File Type</summary>
<p>
<code><pre>
/v1/api/resources/files/{resourceId}/download:
    get:
      tags:
        - attachments
      summary: get attachment
      description: get attachment.
      operationId: getAttachmentUsingGET
      produces:
        - '*/*'
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: resourceId
          in: path
          description: resourceId
          required: true
          type: string
        - name: status
          in: query
          description: status
          required: false
          type: string
          allowEmptyValue: false
        - name: token
          in: query
          description: token
          required: false
          type: string
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Download All Attachments as Zip for an Opportunity</summary>
<p>
<code><pre>
/v1/api/{opportunityId}/resources/download/zip:
    get:
      tags:
        - attachments
      summary: Download Opportunity's attachments as zip
      description: Download Opportunity's attachments as zip.
      operationId: downloadAttachmentsAsZipUsingGET
      produces:
        - application/zip
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Download Metadata for All Attachments by Resource ID</summary>
<p>
<code><pre>
/v1/api/resource:
    get:
      tags:
        - attachments
      summary: Download all attachments from resource Id
      description: Download attachments for an Resource.
      operationId: downloadAttachmentsByResourceUsingGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: excludeDeleted
          in: query
          description: 'excludeDeleted '
          required: false
          type: boolean
          allowEmptyValue: false
        - name: resourceId
          in: query
          description: 'resourceId '
          required: true
          type: string
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Download Metadata for All Attachments by Opportunity ID</summary>
<p>
<code><pre>
/v1/api/resources:
    get:
      tags:
        - attachments
      summary: Download all attachments from an opportunity
      description: Download attachments for an opportunity.
      operationId: downloadAttachmentsByOpportunityUsingGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: excludeDeleted
          in: query
          description: 'excludeDeleted '
          required: false
          type: boolean
          allowEmptyValue: false
        - name: opportunityId
          in: query
          description: opportunityId
          required: true
          type: string
          allowEmptyValue: false
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Get Related Opportunities</summary>
<p>
<code><pre>
 /v1/api/opportunities/{opportunityId}/relatedopportunities/{type}:
    get:
      tags:
        - Opportunity
      summary: Get related contract opportunities
      operationId: getRelatedOpportunitiesGET
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
        - name: page
          in: query
          description: page
          required: false
          type: integer
          default: 0
          format: int32
          allowEmptyValue: false
        - name: size
          in: query
          description: size
          required: false
          type: integer
          default: 10
          format: int32
          allowEmptyValue: false
        - name: sortBy
          in: query
          description: sortBy
          required: false
          type: string
          default: '-modifiedOn'
          allowEmptyValue: false
        - name: type
          in: path
          description: type
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Check Unique Solicitation Number	</summary>
<p>
<code><pre>
 /v1/api/isSolicitationNumberUnique/{parent}/{solicitationNumber}/{type}:
    get:
      tags:
        - Opportunity
      summary: 'Check if solicitation number is unique. A solicitation number is unique if it is not used by another opportunity of equivalent type. For justification type, j&a and fair opportunity/limited sources justification are considered equivalent.'
      operationId: getOpportunityHistoryUsingGET_1
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: parent
          in: query
          description: parent
          required: false
          type: string
          allowEmptyValue: false
        - name: solicitationNumber
          in: path
          description: solicitationNumber
          required: true
          type: string
        - name: type
          in: path
          description: type
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      deprecated: false
</pre></code>
</p>
</details>

<details>
<summary>Add Authorized Party</summary>
<p>
<code><pre>
/v1/api/opportunities/access/{opportunityId}/accessRequest
post: 
  consumes: 
    - application/JSON
  deprecated: false
  description: "Add Authorized Party to the Opportunity"
  operationId: createAndApproveRequestUsingPOST
  parameters: 
    - 
      description: Authorization
      in: header
      name: Authorization
      required: true
      type: string
    - 
      description: api_key
      in: query
      name: api_key
      required: true
      type: string
    - 
      description: opportunityId
      in: path
      name: opportunityId
      required: true
      type: string
    - 
      description: requestJSON
      in: body
      name: requestJSON
      required: false
      schema: 
        type: string
  produces: 
    - application/JSON
  responses: 
    "200": 
      description: OK
      schema: 
        type: object
    "201": 
      description: Created
    "400": 
      description: "Bad Request"
      schema: 
        type: string
    "401": 
      description: Unauthorized
      schema: 
        type: string
    "403": 
      description: Forbidden
      schema: 
        type: string
    "404": 
      description: "Not Found"
    "500": 
      description: "Internal Server Error"
      schema: 
        type: string
    "501": 
      description: "Not Implemented"
      schema: 
        type: string
  summary: "Add Authorized Party to the Opportunity"
  tags: 
    - attachments
</pre></code>
</p>
</details>

<details>
<summary>Get Authorized Party</summary>
<p>
<code><pre>
/v1/api/opportunities/access/{opportunityId}/accessRequest:
    get:
      tags:
        - attachments
      summary: Get Request Access List for the  opportunity
      description: Get Request Access List for the  opportunity.
      operationId: getRequestAccessList
      produces:
        - application/JSON
      parameters:
        - name: Authorization
          in: header
          description: Authorization
          required: true
          type: string
        - name: api_key
          in: query
          description: api_key
          required: true
          type: string
        - name: opportunityId
          in: path
          description: opportunityId
          required: true
          type: string
      responses:
        '200':
          description: OK
          schema:
            type: object
        '400':
          description: Bad Request
          schema:
            type: string
        '401':
          description: Unauthorized
          schema:
            type: string
        '403':
          description: Forbidden
          schema:
            type: string
        '404':
          description: Not Found
        '500':
          description: Internal Server Error
          schema:
            type: string
        '501':
          description: Not Implemented
          schema:
            type: string
      security:
        - Token-based Access: []
      deprecated: false
</pre></code>
</p>
</details>



## Error Messages

### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error codes may change depending on the error given; document will be updated accordingly.

Error Code|Error Message | Reason/Description
----------|--------------|-------------------
401|Please provide valid Authorization Email & API Key |	API Key and/or Authorization Email is required
401|Encountered error authenticating user.Invalid JWT provided | Invalid Authorization Email provided
401|Insufficient privileges to retrieve system account profile as the given organization is invalid |	Invalid Organization ID provided
400|Error processing POST request |	Invalid JSON format provided
400|$.data: is missing but it is required |	Request JSON is empty
400|"$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]" ] |	Request Type must be valid for operation
404|Please provide Opportunity id	| Invalid Opportunity ID provided
401|Insufficient privileges to retrieve system account profile as the given organization is not part of the approved FH hierarchy	| Office ID provided is not authorized for system account
401|Insufficient privileges to edit opportunity |	Account does not have appropriate privileges to edit opportunity
403|This opportunity cannot be published. Auto 15 archive type is not allowed for this opportunity type |	Archive type = auto 15 archive type is not allowed for type “u” Justification and Authorization sections


<p><small><a href="#">Back to top</a></small></p>

### Specific Error Messages

This section details possible error messages for specific operations.

Error codes may change depending on the error given; document will be updated accordingly.


Error Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
400|Title |	Title is required |	Title is required |	Create Opportunity, Publish
400|Title |	Title max character length is 256 |	Title max character length is 256	| Create Opportunity, Publish
400|Opportunity Type | Opportunity type is required | Opportunity type is required | Create Opportunity, Publish
400|Opportunity Type | The Opportunity's type provided is not supported |Invalid Opportunity type provided. [Refer Notice Types](#notice-types)  | Create Opportunity, Publish
400|Opportunity Type |	The opportunity type `j` is no longer supported	| Invalid Opportunity type provided. [Refer Notice Types](#notice-types) | Create Opportunity, Publish
400|Opportunity Type |	The opportunity type `m` is no longer supported	| Invalid Opportunity type provided. [Refer Notice Types](#notice-types) | Create Opportunity, Publish
400|Opportunity Type |	The opportunity type `l` is no longer supported	| Invalid Opportunity type provided. [Refer Notice Types](#notice-types) | Create Opportunity, Publish
400|Organization Id |	Contracting Office is a required field | FH Org Id/AAC code is required |	Create Opportunity, Publish
400|Organization Id |	The Federal Organization ID that you provided is inactive and/or invalid | Inactive/Invalid Organization Id |	Create Opportunity, Publish
400|Organization Id |	The Federal Organization ID that you provided is not an office level, and it must be for this opportunity type	| Organization ID is not valid for opportunity type. Note: Organization ID must be Office level unless creating a Special Notice	| Create Opportunity, Publish
400|Organization Id |	The Federal Organization ID that you provided is unmapped in Federal Hierarchy | If the Organization Id provided is a legacy one and is unmapped in Federal Hierarchy, then the system throws and error |	Publish
404|Solicitation Number | Notice ID is required	| Notice ID is required for all notice types except for Special Notice | Publish
400|Solicitation Number | Notice ID max length is 128 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces	| Notice ID max length is 128 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces | Publish
400|Solicitation Number | Notice ID must be unique based on selected notice type	| Notice ID must be unique when selected notice type is not an award notice | Publish, Create and Publish
400|Solicitation Number | Submitted solicitation number doesn't match the previous published opportunity	| Solicitation number provided with update opportunity doesn't match the previous published opportunity for an award notice type | Publish, Create and Publish
400|Related Opportunity ID | This Related Notice's ID is invalid	| The Related Notice's ID is not found | Publish, Create and Publish
400|Related Opportunity ID | The Related Notice's Type is invalid for this Opportunity	| The Related Notice's Type cannot be related  | Publish
400|Related Opportunity ID | Related Notice's ID needs to match previous Opportunity's Related Notice ID	| Related Notice's ID  provided while revising a notice needs to match the Parent Opportunity's Related Notice ID  | Publish
400|Response Date |	Response Date is a required field |	Response Date is not provided for Combined Synopsis and Solicitation types |	Publish
400|Response Date |	Response Date provided is an invalid format |	Response Date provided is not in valid format |	Publish
400|Response Date |	Response Date cannot exceed 5 years from current date |	Response Date exceeds 5 years from the current date |	Publish 
400|Archive Date |	Inactive date is a required field |	Archive Date is required if Archive Type = autocustom |Publish
400|Archive Date Response Date   |	One of Response date or Archive date is required |	Either Response date or archive date is required for presolicitation, sources sought, special notice, sale surplus  |	Publish
400|Archive Date |	Inactive date provided is an invalid format |	Date is not in specified format  |	Publish
400|Archive Date |	Archive date provided is in the past |Archive date provided is before today's date. |	Publish
400|Archive Type |	Archive type is invalid for this notice type |	archive type is one of the following "auto15", "auto30" and is not allowed for this notice type	| Publish, UnArchive, Uncancel
400|Archive Type |	Auto 30 archive type is not allowed for this opportunity type | Archive Type = auto30   not allowed for Intent bundle and Justification |	Publish
400|Additional Reporting |	Additional Reporting/Initiative is required |	Additional Reporting/Initiative is required when opportunity is not a special notice | Publish
400|Justification Authority - Authority|	Justification Authority is not valid field for this opportunity type | Justification Authority only valid for Type "u" Justification and Authorization | Publish
400|Justification Authority - Authority|	Authority is a required field | Justification Authority is a required field for Type "u" Justification and Authorization | Publish
400|Justification Authority - Authority|	Invalid Authority Fields, please refer to Contract Opportunities SOAP Web Service Tech Document valid authority fields | If Invalid authority details are provided for Type "u" Justification and Authorization | Publish
400|Justification Authority - Modification Number |	Justification Authority Modification Number is not valid field for this opportunity type | Justification Authority Modification Number is only valid for Type "u" Justification and Authorization| Publish
400|Justification Authority - Modification Number |	Modification Number max character limit is 32 characters | Modification number size exceeds 32 characters| Publish
400|NAICS Code | NAICS Code is a required field | NAICS Code is required for Combined Synopsis and Solicitation | Publish
400|NAICS Code | NAICS provided did not match expected codes | NAICS Code is invalid | Publish
400|Set Aside | Set Aside is not valid field for this opportunity type | Set Aside is invalid | Publish
400|Set Aside | Contracting Office is a required for Set Aside | Contracting Office is a required for Set Aside |  Publish
400|Set Aside | Set Aside provided did not match expected codes | Set Aside provided did not match expected codes |  Publish
400|Classification Code | Product Service Code is a required field |	Product service code is required for all types except SourcesSought, Sale of Surplus and Award  |	Publish
400|Description |	Description is a required field |	Description is a required field except for award notice |	Publish
400|Award |	Award Details Section - Contract Award Dollar Amount is not a valid field for this opportunity type |	Award Section is not valid for Base Notice Types (s, o, p, r, g, k, i) |	Publish
400|Award |	Award Details Section is missing data. | Award Details Section is missing data |	Publish
400|Award Amount |	Base and All Options Value is a required field |	Base and All Options Value is a required field |	Publish
400|Award Amount |	Base and All Options Value max length is 64 digits |	Base and All Options Value max length is 64 digits |	Publish
400|Award Amount |	Base and All Options Value - Invalid input: Please enter a valid number |	Base and All Options Value - Invalid input: Please enter a valid number |	Publish
400|Award Date |	Contract Award Date is required field |	Contract Award Date is required field for Award Notice |	 Publish, Uncancel, Unarchive
400|Award Date |	Contract Award Date provided is in an invalid format |	Date is not in specified format | Publish, Uncancel, Unarchive
400|Award Date |	Contract Award Date set would result in inactive date being in the past |	Contract Award Date cannot be 15 days prior to the current date if the Archiving policy is "15 days from Award date" for an Award Notice |	Publish, Uncancel, Unarchive
400|Award Date |	Contract Award Date provided should have 4 digit year |	Invalid Year provided in the Award Date |	Publish, Uncancel, Unarchive
400|Award Number |	Contract Award Number is a required field	| Contract Award Number is required for Intent to Bundle, Justification, Award | Publish
400|Award Number |	Contract Award Number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces| Contract Award Number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces | Publish
400|DUNS | Unique Entity Identifier (duns) is invalid. |	(**Plan to deprecate in the future**) Invalid UEI DUNS provided |	Publish
400|ueiSAM | Unique Entity Identifier (SAM) is invalid. |	(**Plan to replace Duns# in the future, and ueiSAM values not yet available**) Invalid UEI SAM provided |	Publish
400|Awardee Name | Contractor Awarded Name is a required field |	Contractor Awarded Name is a required field if the DUNS is not provided for an Award Notice |	Publish
400|Awardee Name | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | Publish
400|Awardee | Required fields from Awardee section is missing |Awardee Name or DUNS# not provided for Award notice|	Publish
400|Awardee Country | Award Details Section - Country is required |Country Code is required if the Awardee name is provided instead of DUNS# |	Publish
400|Awardee Country | Award Details Section - Country provided is invalid |Country Code  provided is invalid |	Publish
400|Awardee State | Award Details Section - State is required |State Code is required if the Awardee name is provided instead of DUNS# |	Publish
400|Awardee State | Award Details Section - State provided is invalid |State Code provided is invalid |	Publish
400|Awardee City | Award Details Section - City is required |City Code is required if the Awardee name is provided instead of DUNS# |	Publish
400|Awardee City | Award Details Section - City provided is invalid |City Code provided is invalid |	Publish
400|Contract Line Item number |	The Contract Line Item number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces	| The Contract Line Item number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces. | Publish
400|Task/Delivery Order Number |	Task/Delivery Order Number max length is 255 characters and allows only alphanumeric and - _ ( ) characters with no spaces	| Task/Delivery Order Number max length is 255 characters and allows only alphanumeric and - _ ( ) characters with no spaces | Publish
400|Point of Contact Type |	$.data.pointOfContact[0].type: does not have a value in the enumeration [primary, secondary, owner] |	Point of Contact Type is required |	Create Opportunity
400|Primary Contact |	Primary Contact is required | Primary Contact is required  for all types except Award| Publish
400|Primary Contact Full Name |	Primary Contact - Full Name is required | Point of Contact Email is required for all types except Award | Publish
400|Primary Contact Full Name |	Primary Contact - Name limit is 500 characters | Point of Contact Name limit is 500 characters | Publish
400|Primary Contact Email |	Primary Contact - Email is required | Point of Contact Email is required for all types except Award | Publish
400|Primary Contact Email |	Primary Contact - Please enter a valid Internet email address. Format: username@host.domain | Primary Contact invalid Email format | Publish
400|Primary Contact Email |	Primary Contact - email character limit is 255 characters | Primary Contact email limit is 255 | Publish
400|Primary Contact Phone |	Primary Contact - phone character limit is 255 characters | Primary Contact phone limit is 255 | Publish
400|Primary Contact Phone |	Primary Contact - fax character limit is 255 characters | Primary Contact fax limit is 255 | Publish
400|Resources -  attType |	Attachment must have AttType of file or link |	Attachment type must be a file or a link |	Create Resource, Create And Publish
400|Resources - resourceName | Attachment must have a name | Attachment Name is a required field |	Create Resource, Create And Publish
400|Resources - resourceName | File name should have valid file type specified | Attachment Name should have valid file extension |	Create Resource, Update Resource, Create And Publish
400|Resources - resourceName | File name should contain only Alpha numeric characters with spaces, hyphen, underscore and () | Attachment Name can contain only  the allowed character set |	Create Resource, Update Resource, Create And Publish
400|Resources - content |Attachment must have content | File content is missing |	Create Resource, Create And Publish
400|Resources - description | Link Resource must have a description | Link provided is missing description |	Create Resource, Create And Publish
400|Resources - description | Link with the display text {}  already exists | Link with the same description/name already exists on the notice | Create Resource, Update Resource,  Create And Publish
400|Resources - link | Link Resource must have a link | Link URL is missing |	Create Resource, Create And Publish
400|Resources - link | Please enter a valid url. [protocol]://hostname.domain. Protocol can be ftp, http, or https. Spaces are not allowed | Link URL is not valid |	Create Resource, Create And Publish
400|Resources - link | Link {} already exists| Link URL is already added to the notice |	Create Resource, Create And Publish
400|Resources - resourceName | The file type that you are trying to upload is not supported | File extension provided is unsupported |	Create Resource, Create And Publish
400|Resources - resourceName | Attachment with the name {} already exists | File with the same name is already added to the notice |	Create Resource, Create And Publish
400|Resources - content | The file size should be greater than zero bytes and less than 250 MB | File Size doesn't meet the specified limits |	Create Resource, Create And Publish
400|Archive |	This opportunity is not the latest published |	Draft Opportunity cannot be archived	| Archive
400|Archive |	Opportunity already inactive |	Opportunity is already archived	| Archive
400|Update |	Opportunity cannot be updated |	Opportunity is either in draft, archived or cancelled status	| Update
400|Cancel |	This opportunity cannot be cancelled. This opportunity should be published |	This opportunity cannot be cancelled. This opportunity should be published	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is a revision |	This opportunity cannot be cancelled. This opportunity is a revision	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is already inactive |	This opportunity cannot be cancelled. This opportunity is already inactive	| Cancel
400|Cancel |	This opportunity cannot be cancelled. This opportunity is already cancelled |	This opportunity cannot be cancelled. This opportunity is already cancelled	| Cancel
400|Cancel - Description |	This opportunity cannot be cancelled. The cancel request is missing `Cancellation description` field |	This opportunity cannot be cancelled. The cancel request is missing `Cancellation description` field	| Cancel
400|Uncancel, Delete |	This opportunity is not published |	This opportunity is not published.	| Uncancel, Delete
400|Uncancel |	This opportunity is a revision |	This opportunity is a revision	| Uncancel
400|Uncancel |	This opportunity is not cancelled |	This opportunity is not cancelled	| Uncancel
400|Uncancel -Description |	Description is required |	Description is required	| Uncancel
400|Unarchive |	Opportunity is active |	Active opportunity	| UnArchive
400|Unarchive |	Opportunity is cancelled |	Cancelled opportunity	| UnArchive
400|UnArchive, Uncancel - Archive Date |	New archive date is required |	New archive date is required  |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date |	New archive date provided is in an invalid format |	New archive date provided is in an invalid format |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date|	New archive date provided is in the past |	New archive date provided is before today's date |	Unarchive, Uncancel
400|UnArchive, Uncancel - Archive Date |	New archive type is invalid |	archive type is not one of the following "auto15", "autocustom", "auto30"	| Unarchive, Uncancel
400|UnArchive, Uncancel - Award Date |	New contract award date provided is in the past |	New contract award date provided is in the past | Unarchive, Uncancel
400|UnArchive, Uncancel - Award Date |	New contract award date is not provided |	New contract award date is not provided | Unarchive, Uncancel
400|UnArchive, Uncancel - Response Date |	New response date is required |	Unarchive requires new response date	| UnArchive
400|UnArchive, Uncancel - Response Date |	New response date provided is in an invalid format |	Invalid date format	| UnArchive
400|Delete |	This opportunity cannot be deleted. This opportunity is a revision |	This opportunity cannot be deleted. This opportunity is a revision.	| Delete
400|Delete |	Opportunity has been already deleted |	Opportunity has been already deleted	| Delete
400|Delete |	This opportunity cannot be deleted. The delete request is missing `Delete option` field |	This opportunity cannot be deleted. The delete request is missing `Delete option` field.	| Delete
400|Delete |	This opportunity cannot be deleted. The `Delete option` provided is not supported |	This opportunity cannot be deleted. The `Delete option` provided is not supported.	| Delete
400|Delete |	This opportunity cannot be deleted. The `Delete option` provided is not supported for deleting original published notice. |	This opportunity cannot be deleted. The `Delete option` provided is not supported for deleting original published notice.	| Delete
400|Attachment |	has unknown issue/missing, please remove this attachment and republish. | has unknown issue/missing, please remove this attachment and republish |	Publish
400|Attachment |	is PENDING, please try to publish at a later time | is PENDING, please try to publish at a later time |	Publish
400|Attachment |	is ENCRYPTED, please remove this attachment and republish | is ENCRYPTED, please remove this attachment and republish |	Publish
400|Attachment |	is INFECTED, please remove this attachment and republish | is INFECTED, please remove this attachment and republish |	Publish
400|Attachment |	FILE SIZE GT 250MB or larger, please remove this attachment and republish | FILE SIZE GT 250MB or larger, please remove this attachment and republish |	Publish
400|Attachment |	is a UNSUPPORTED FILE TYPE, please remove this attachment and republish | is a UNSUPPORTED FILE TYPE, please remove this attachment and republish |	Publish
400|Attachment |	Exception occured while trying to validate attachments, Please retry at a later time | Exception occured while trying to validate attachments, Please retry at a later time. |	Publish
400|Attachment |	Unknown type was found for Resource named: | Unknown type was found for Resource named: |	Publish
400|IVL |	This opportunity cannot be published. Interested Vendors List Add is a required field |Interested Vendors List Add is a required |	Publish
400|IVL |	Interested Vendors List Read is a required field. |Interested Vendors List Read is a required field |	Publish
400|IVL |	Interested Vendors List should be enabled for this organization |Interested Vendors List should be enabled for this organization when FORCE ON |	Publish
400|IVL |	Interested Vendors List should not be enabled for this organization |Interested Vendors List should not be enabled for this organization when FORCE OFF |	Publish
400|Revise | Opportunity cannot be updated | An Opportunity cannot be revised if that Opporutnity was revised previously and is currently in draft state  | Revise
400|Vendor Data |	Duplicate request. Vendor is already added as an authorized party on the notice | Request already exists for the vendor on the notice	| AddAuthorizedParty
400|VendorData| fname should not be empty| fname should not be empty| AddAuthorizedParty
400|VendorData| lname should not be empty| lname should not be empty| AddAuthorizedParty
400|VendorData| Email should not be empty| Email should not be empty| AddAuthorizedParty
400|VendorData| Duns should not be empty| (**Plan to deprecate in the future**) Duns should not be empty| AddAuthorizedParty
400|VendorData| ueiSAM should not be empty| (**Plan to replace Duns# in the future, and ueiSAM values not yet available**) ueiSAM should not be empty| AddAuthorizedParty
400|Duns# |	No contact match on vendor data provided	| (**Plan to deprecate in the future**) Not a Valid email or Duns#	| AddAuthorizedParty
400|ueiSAM# |	No contact match on vendor data provided	| (**Plan to replace Duns# in the future, and ueiSAM values not yet available**) Not a Valid email or ueiSAM#	| AddAuthorizedParty
404|Opportunity Id,  VendorData	|No request found for the notice and the vendor data provided|	Unable to find a request for the opportunity and vendor details provided.|	Approve or Reject Explicit Access Request By Vendor Data.
401|Authorization|	Error code: 401 ; User does not have sufficient privileges to perform this action|	Invalid API key is used other than write sensitive permission	|Add Authorized Party
400|Authorization	|Error code: 400 ; Duplicate request. Vendor is already added as an authorized party on the notice	| If a party is already added and is being added again by a contract writing individual|	Add Authorized Party
401|Authorization|	Error code: 401 ; Your request did not get processed! Please verify your permission/roles|	If nonfed email id is used in authorization	|Get Authorized Party


## FAQ

**Can I look up contract opportunities   without using having a role or a system account?**

A. Users of beta.sam.gov may use their personal API key to look up contract opportunities. Please visit the [Get Opportunities Public API](https://open.gsa.gov/api/get-opportunities-public-api/) document for additonal details.

**How do I ensure that I have used correct location information?**

A. Contract Opportunity users may use Public Location Services API document to verify their location information before using it in contract opportunities.

## Contact Us

* Reach out to the beta.sam.gov team at [www.fsd.gov](https://www.fsd.gov)


## Change Log

Date | Version | Description
------|---------------|---------
4/25/2019 | v0.1 | Base Version
4/29/2019 | v0.2 | Added information for Get Authorized Party List <br> Added Add Authorized Party <br> Added Vendor Data JSON <br> POC Email changed to not required <br> Change log added <br> Secure Attachment Download Authorization section added <br> Alpha and Beta endpoint section added
5/23/2019 | v0.3 | Update IVL Settings URL <br> Removed Get IVL by DUNS <br> Added EntityID to getIVL API parameter <br> Updated Get Authorized Party <br> Updated Add Authorized Party <br> Error Message Section Updated
5/28/2019 | v0.4| Updated  Add Authorized Party<br> Get Authorized Party<br> Delete All Attachments API’s <br> Added Delete Notice API <br> Updated User Permissions <br> Create and Publish Contract Opportunity
6/6/2019| v0.5| Deleted Download All Attachments (metadata) <br> Added Download All Attachments by Resource ID <br> Added Download All Attachments by Opportunity ID
7/22/2019| v0.6 | Only title required to create draft opportunity <br> Solicitation number not required for create/update draft notices JSON <br> soliciation.deadlines.response required for types k and o to publish<br> Contract Award Date required only for Award to publish <br> Contract Award Number required only for a, j, and i to publish <br> POC email required except for Award to publish <br> Description not needed for Update Attachment JSON <br> Workflow Chart Added
8/1/2019 | v0.71 | Added Future Implementation for IP Address Validation and Type of Connection <br> Delete Draft Opportunities Role changed so that CO and Admin can Delete <br> Reason not required for Publish Opportunity
8/19/2019 | v0.72 | API Names Updated <br> Valid File Types Updated
8/29/2019| v0.73| Error Codes Added
8/29/2019| v0.74| Updated the missing description for explicitAccess field in Update Attachment Contract JSON
10/9/2019 | v0.75| Get List of Opportunities API Parameter Changes (cancelled field removed/status field updated)
10/22/2019 | v0.76| Create and Publish JSON field for Archive.Date and Response Date updated <br> Production Link Updated <br> API URLs updated
10/10/2019 | v0.8 | Updated the Set-Aside values with the latest codes
10/25/2019 | v0.9 | Updated the field lengths
10/31/2019| v0.91| Delete Vendor removed <br> Delete Resource in Draft API added <br> API Specifications Updated: Delete Notice, Getlist, Download Metadata for Attachment by Resource ID, and Download Metadata for Attachment by Opportunity ID <br> JSON Updated: Create and Update, Create and Publish, Revise Opportunity, Cancel Notice, Uncancel Notice, Archive, Unarchive, Create Attachment, Update Attachment, IVL Settings, and Delete Notice <br> Error Message Section Updated
11/04/2019| v0.92 | Updated the field lengths for contact full name and awardee name fields for create Opportunity, Create and Publish Opportunity Contract JSONs. Updated the Error messages for these fields<br>Added Future Implementation for UEI SAM# Validation and Type of Connection. Task/Delivery Order number is updated to be a non required field for Justification submission
11/12/2019| v1.0 | Initial Release Finalized
12/04/2019| v1.01 | Minor updates to UEI(SAM) and UEI(DUNS) info
1/3/2020| v1.02| Updates to UEI(SAM) and UEI(DUNS) info
1/20/2020| v1.03| Updated JSON arrays and objects
1/21/2020| v1.04| Added Time zone values. <br>Updated the Create Contract Opportunity, Create And Publish Contract Opportunity Json's and examples <br> with the Parent Json element to provide parent opportunity Id for revisions. <br> Added the Related Notices section.
2/18/2020| v1.05| Added JSON information for UEI additions
2/28/2020| v1.06| Updated the Valid file types to include Zip file.<br/> Added a new validation for resource name to specify the allowed character set
3/13/2020|v1.07| Updated GET APIs to include both DUNS and UEISAM in v2 <br> Get list of Opp API Organization ID field updated to show FH ID dependending on department, subtier, and office
4/10/2020|v1.08| Added Version Control Section <br> Added information for Get Opportunity Public API and Public Location Services API in FAQ section
5/13/2020|v1.09| Updated v2 URL for Add Authorized and Get Authorized Party APIs
5/26/2020|v1.1| Added returnFHOrgKey parameter in the request for Get list of Opportunities API so that the request provides internal FH Org key if required
6/8/2020|v1.11|Added returnFHOrgKey parameter in the request for Get Opportunity by Opportunity ID API so that the request provides internal FH Org key if required
7/3/2020|v1.12| Updated v2 endpoints for Get List and Get Opportunity by ID APIs to add FH codes and updated response samples
<p><small><a href="#">Back to top</a></small></p>
