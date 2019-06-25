---
title: Opportunity Management API
banner-heading: Opportunity Management API
---

## Overview

The Opportunity Management API will allow authorized users to submit and request Opportunities data.

**Note:** The specifications on this page are for a soon to be released API.  Check back here or be in contact with IAE for the release date and testing session.

**Note:** Operations marked with * (asterisk) are not available at this time

## Getting Started

Opportunity Management API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov/prod/opportunity  (Coming Soon)
* Alpha: https://api-alpha.sam.gov/prodlike/opportunity

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

#### User Account Authorization
In order to perform an Opportunity Management API operation, the following is required:
* beta.SAM.GOV user account with either 'Administrator', 'Contracting Officer' role or 'Contracting Specialist' role. Permissions for operations by role are listed in the table below.<br/>

To submit any opportunity notice type (except “Special Notice”) for an office, user should provide Federal Hierarchy (FH) Organization ID or Activity Address Code (AAC) (procurement/non-procurement). To submit Special Notice opportunity, user should provide Federal Hierarchy (FH) Organization ID of office, sub-tier or department or Activity Address Code (AAC) (procurement/non-procurement) or [other codes] for sub-tier and department. <br/>
**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

Operation    | Administrator <br/>(Contract Opportunities domain)| Contracting Officer | Contracting Specialist
-------------|---------------|---------------------|------------------------------
Create Opportunity | Yes | Yes | Yes
Publish Opportunity | Yes | Yes | No
Revise Opportunity | Yes | Yes | No
Update Opportunity | Yes | Yes | No
Opportunity History | Yes | Yes | Yes
Delete Opportunity | Yes | No | No
Get List of Opportunity | Yes | Yes | Yes
Get Opportunity by ID | Yes | Yes | Yes
Cancel Opportunity | Yes | Yes | Yes
Uncancel Opportunity | Yes | Yes | Yes
Archive Opportunity | Yes | Yes | Yes
Unarchive Opportunity | Yes | Yes | Yes
Create Attachment | Yes | Yes | Yes
Update Attachment| Yes | Yes | Yes
Download Attachment | Yes | Yes | Yes
Download All Attachment (metadata) | Yes | Yes | Yes
Download Attachment Zip | Yes | Yes | Yes
Delete Attachment* | Yes | Yes | Yes
Get Attachment | Yes | Yes | Yes
Get IVL | Yes | Yes | Yes
IVL settings | Yes | Yes | Yes
Delete Vendor | Yes | Yes | Yes
Get Authorized Party* | Yes | Yes | No
Add Authorized Party*  | Yes | Yes | No
Check Unique Solicitation Number | Yes | Yes | Yes
Get Related Opportunities | Yes | Yes | Yes
Delete Notice*|	Yes|	Yes|	No
Create and Publish Contract Opportunity | Yes | Yes | Yes

<p><small><a href="#">Back to top</a></small></p>

#### Secure Attachment Authorization

In order to download secure attachment, user should have at least one of the below permissions:
* Create Draft Attachment
* Edit Draft Attachment
* Delete Draft Attachment
* Delete Attachment

### Lookup/Meta Data

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

#### Set-Aside Values
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field.

Refer below table for valid Set-Aside values:

Code | SetAside Values
-----|-----------------
1000 | FAR Set-Aside/Sole Source
1000001 | Total Small Business Set-Aside (FAR 19.5)
1000002 | Partial Small Business Set-Aside (FAR 19.5)
1000003 | 8(a) Set-Aside (FAR 19.8)
1000004 | 8(a) Sole Source (FAR 19.8)
1000005 | Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13)
1000006 | Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13)
1000007 | Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)
1000008 | Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14)
1000009 | Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15)
1000010 | Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15)
1000011 | Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15)
1000012 | Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15)
1000013 | Local Area Set-Aside (FAR 26.2)
2000 | Agency Specific Set-Aside/Sole Source (per FAR supplement)
2000001 | Indian Economic Enterprise (IEE) Set-Aside (specific to Department of Interior)
2000002 | Indian Small Business Economic Enterprise (ISBEE) Set-Aside (specific to Department of Interior)
2000003 | Buy Indian Set-Aside (specific to Department of Health and Human Services, Indian Health Services)
2000004 | Veteran-Owned Small Business Set-Aside (specific to Department of Veterans Affairs)
2000005 | Veteran-Owned Small Business Sole source (specific to Department of Veterans Affairs)

<p><small><a href="#">Back to top</a></small></p>

#### Stauth valid values
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

## Contract Opportunity Management API Request and Responses

<span style="color:red">Note: All Opportunity notices types except Special notices will be associated to organization at office level. Special notices can be associated to Organization at department, sub-tier, or office level.</span>


### Create Opportunity


------- | -------
**Request Type** | POST
**URL** | /v1/api/create
**Summary** | Create a new Draft Opportunity
**Consumes** | application/json
**Produces** | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Create/Update Opportunity Contract JSON](#create-update-json)

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
    "solicitationNumber": "ITB_Test1",
    "title": "TST_T1",
    "type": "i",
    "classificationCode": "13",
    "organizationId": "100120624",
    "naics": [
      {
        "type": "Primary",
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
        "email": "",
        "fax": "",
        "fullName": "GSA",
        "phone": "",
        "title": "",
        "type": "primary"
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
    "award": {
      "date": "2019-08-08T11:20:20-05:00",
      "number": "12345",
      "deliveryOrderNumber": "",
      "amount": "number",
      "lineItemNumber": "",
      "awardee": {
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
      },
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
      "setAside": "10",
      "deadlines": {
        "response": "2019-08-08T11:20:20-05:00"
      }
    },
    "archive": {
      "type": "autocustom",
      "date": "2019-09-09"
    },
    "flags": [
      {
        "code": "",
        "isSelected": true
      }
    ],
    "link": {
      "additionalInfo": {
        "content": ""
      },
      "href": ""
    },
    "additionalReporting": [
      "none"
    ]
  },
  "description": [
    {
      "body": "Description"
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
    "organizationId": "100120624",
    "naics": [{
      "type": "primary",
      "code": ["111150"]
    }],
    "pointOfContact": [{
        "additionalInfo": {
            "content": ""
        },
        "email": "",
        "fax": "",
        "fullName": "gsa",
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
      "setAside": "10",
      "deadlines": {
        "response": "2019-08-08"
      }
    },
    "archive": {
      "type": "autocustom",
      "date": "2019-09-09"
    },
    "flags": [{
        "code": "",
        "isSelected": true
    }],
    "link": {
        "additionalInfo": {
            "content": ""
        },
        "href": ""
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
    "organizationId": "100000136",
    "archive": {
      "type": "autocustom",
      "date": "2019-09-09"
    },
    "naics": [
      {
        "type": "Primary",
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
        "email": "",
        "fax": "",
        "fullName": "gsa",
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
        "responseTz": "YYYY-MM-DDTHH:MM:SS-05:00",
        "response": "2019-11-11T11:12:00-05:00"
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

<p><small><a href="#">Back to top</a></small></p>

### Publish Opportunity


------- | -------
**Request Type** | POST
**URL** | /v1/api/publish/{opportunityId}
**Summary** | Publish a Draft Opportunity
**Consumes** | application/json
**Produces** | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Publish Opportunity Contract JSON](#publish-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully published | returns Opporutnity ID in response header

Examples

<details>
<summary>Publish Opportunity Request:</summary>
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

### Revise Opportunity



------- | -------
**Request Type** | POST
**URL** | /v1/api/revise/{opportunityId}
**Summary** | Create a draft version of an Opportunity for a Published Opportunity.
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Published Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Revise Opportunity Contract JSON](#revise-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Revise an Opportunity is successful | return response is Opportunity ID

Examples

<details>
<summary>Revise Opportunity Request:</summary>
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

### Update Opportunity



------- | -------
**Request Type** | PATCH
**URL** | /v1/api/update/{opportunityId}
**Summary** | Update a Draft Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Create/Update Opportunity Contract JSON](#create-update-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Update an Opportunity is successful | return response is Opportunity ID

Examples

<details>
<summary>ITB Request</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "ITB_Test1_Update",
    "title": "TST_T1_update",
    "type": "i",
    "classificationCode": "13",
    "organizationId": "100120624",
    "naics": [
      {
        "type": "Primary",
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
        "email": "",
        "fax": "",
        "fullName": "GSA",
        "phone": "",
        "title": "",
        "type": "primary"
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
    "award": {
      "date": "2019-08-08T11:20:20-05:00",
      "number": "12345",
      "deliveryOrderNumber": "",
      "amount": "number",
      "lineItemNumber": "",
      "awardee": {
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
      },
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
      "setAside": "10",
      "deadlines": {
        "response": "2019-08-08T11:20:20-05:00"
      }
    },
    "archive": {
      "type": "autocustom",
      "date": "2019-09-09"
    },
    "flags": [
      {
        "code": "",
        "isSelected": true
      }
    ],
    "link": {
      "additionalInfo": {
        "content": ""
      },
      "href": ""
    },
    "additionalReporting": [
      "none"
    ]
  },
  "description": [
    {
      "body": "Description_updated"
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
    "solicitationNumber": "PRESOLTest1_update",
    "title": "PRESOLTEST_T1_update",
    "type": "p",
    "classificationCode": "13",
    "organizationId": "100120624",
    "naics": [
      {
        "type": "Primary",
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
        "email": "",
        "fax": "",
        "fullName": "gsa",
        "phone": "",
        "title": "",
        "type": "primary"
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
      "setAside": "10",
      "deadlines": {
        "response": "2019-08-08"
      }
    },
    "archive": {
      "type": "autocustom",
      "date": "2019-09-09"
    },
    "flags": [
      {
        "code": "",
        "isSelected": true
      }
    ],
    "link": {
      "additionalInfo": {
        "content": ""
      },
      "href": ""
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
<summary>COMBINE Request</summary>
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
      "date": "2019-09-09"
    },
    "naics": [
      {
        "type": "Primary",
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
        "email": "",
        "fax": "",
        "fullName": "gsa",
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
        "response": "2019-12-12T23:59:00-05:00"
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

### Opportunity History


------- | -------
**Request Type** | GET
**URL** | /v1/api/history/{opportunityId}
**Summary** | Get history of an Opportunity
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
postedFrom | Body | JSON | No | Posted From - Date

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | History of Opportunity | JSON (see below)

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
history | JSON |  |
history.parentOpportunityId | string |  | Parent Opportunity ID
history.cancel_notice | boolean |  | Identify if the Opportunity is cancelled or not
history.procurement_type | string |  | Notice Type
history.archive_notice | boolean |  | Identify if the Opportunity is archived or not
history.request.type | string |  | Type of request on Opportunity such as 'submit', 'cancel_request', 'archive_request' etc.
history.action_type | string |  | Type of action performed on Opportunity request such as 'publish', 'cancel','archive' etc.
history.action_date | date |  | Date and time of the action type <br/>Example: 2019-02-01T17:12:00-5:00
history.title | string |  | Opportunity title
history.index | string |  | Version number of revision
history.relatedOpportunityId | string |  | Related Opportunity ID
history.opportunityId | string |  | Opportunity ID (System generated)
history.deleted | string |  | Identify if the Opportunity is deleted or not
history.solicitation_number | string |  | Solicitation Number of a Notice (Opportunity ID in UI)
history.revision_reason | string |  | Reason for revision
history.posted_date | string |  | Posted date and time <br/>Example: 2019-01-04T14:00:00
history.latest |  |  | Service will return all the Opportunities but with latest=1

Examples

<details>
<summary>History Response:</summary>
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
      },
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

### Delete Opportunity



------- | -------
**Request Type** | DELETE
**URL** | /v1/api/delete/{opportunityId}
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

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Get List of Opportunities


------- | -------
**Request Type** | GET
**URL** | /v1/api/search
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
cancelled | query | boolean | No | True or false
doNumber | query | string | No | Delivery Order Number
includeCount | query | boolean | No | True or false
keyword | query | string | No | Enter any keyword from the description
latest | query | boolean | No | True or false
opportunityIds | query | Array | No | Opportunity IDs (comma separated)
noticeType | query | Array | No | See Notices Types table (comma separated)
organizationId | query | Array | No | FH Org ID/AAC code of the office where an Opportunity is being submitted (comma separated)
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
status | query | Array[string] | No | 1.status= active (published, unarchive and uncancelled records)<br/> 2.status=inactive (published, archive and uncancelled records)<br/>3.status=draft (draft records)<br/> 4.status=published (published and unarchive)<br/>5.status=active_cancelled(published, unarchive and cancelled records)<br/>6.status=inactive_cancelled(published, archive and cancelled records)<br/>7. status=archived(published and archived) <br />(comma separated)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON (see below)

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
data | JSON |  | All the Opportunities are listed out in the response
opportunityId | string |  | Opportunity ID
data.type | string |  | See Notices Types table
data.solicitationNumber | string |  | Solicitation Number
data.title | string |  | Title of the Opportunity
data.organizationId | string |  | FH Org Id/AAC code of the office where an Opportunity is being submitted
data.classificationCode | string |  | Product Service Code (PSC)
data.naics | JSON |  |
data.naics.code | string |  | NAICS Code
data.naics.type | string |  | NAICS type
data.flags | JSON |  |
data.flags.code | string |  |
data.flags.isSelected | boolean |  |
data.pointOfContact | JSON |  |
data.pointOfContact.type | string |  | Contact Type
data.pointOfContact.title | string |  | Contact title
data.pointOfContact.fullname | string |  | Contact Full Name
data.pointOfContact.email | string |  | Contact email
data.pointOfContact.phone | string |  | Contact Phone
data.pointOfContact.fax | string |  | Contact Fax
data.placeOfPerformance | JSON |  |
data.placeOfPerformance.streetAddress | string |  | Pop Address
data.placeOfPerformance.streetAddress2 | string |  | Pop Address2
data.placeOfPerformance.city | JSON |  | Pop City
data.placeOfPerformance.city.code | string |  | Pop City code
data.placeOfPerformance.city.name | string |  | Pop City name
data.placeOfPerformance.city.state | JSON |  | Pop City state
data.placeOfPerformance.state.code | string |  | Pop city state code
data.placeOfPerformance.state.name | string |  | Pop city state name
data.placeOfPerformance.country | JSON |  | Pop Country
data.placeOfPerformance.country.code | string |  | Pop Country Code
data.placeOfPerformance.country.name | string |  | Pop Country name
data.placeOfPerformance.zip | string |  | Pop Country zip
data.archive | JSON |  |
data.archive.type | string |  | Archive Type: auto15, auto30, autocustom
data.archive.date | date and time |  | Archive Date
data.permissions | JSON |  |
data.permissions.ivl | JSON |  |
data.permissions.ivl.create | boolean |  | permissions.ivl.create
data.permissions.ivl.read | boolean |  | permissions.ivl.read
data.permissions.ivl.update | boolean |  | permissions.ivl.update
data.permissions.ivl.delete | boolean |  | permissions.ivl.delete
data.solicitation | JSON |  |
data.solicitation.setAside | string |  | See Set-Aside values table
data.solicitation.deadlines | JSON |  |
data.solicitation.deadlines.response | date and time |  | Solicitation Deadline Date
data.solicitation.deadlines.responseTz | string |  | Solicitation Deadlines Response Time Zone
data.award | JSON |  |
data.award.date | date and time |  | Award Date
data.award.number | string |  | Award Number
data.award.deliveryOrderNumber | string |  | Award Deliver Order Number
data.award.amount | Number |  | Award Amount
data.award.lineitemNumber | string |  | Award Line Item Number
data.award.awardee | JSON |  |
data.award.awardee.name | string |  | Awardee Name
data.award.awardee.duns | string |  | Awardee Duns
data.award.awardee.location | JSON |  | Awardee Location
data.award.awardee.location.streetAddress | string |  | Awardee Street Address 1
data.award.awardee.location.streetAddress2 | string |  | Awardee Street Address 1
data.award.awardee.location.city | string |  | Awardee City
data.award.awardee.location.city.code | string |  | Awardee City Code
data.award.awardee.location.city.name | string |  | Awardee City Name
data.award.awardee.location.state | JSON |  | Awardee State
data.award.awardee.location.state.code | string |  | Awardee State Code
data.award.awardee.location.state.name | string |  | Awardee State Name
data.award.awardee.location.country | JSON |  | Awardee Country
data.award.awardee.location.country.code | string |  | Awardee Country Code
data.award.awardee.location.country.name | string |  | Awardee Country Name
data.award.awardee.location.zip | string |  | Awardee Zip
data.award.justificationAuthority | JSON |  |
data.award.justificationAuthority.modificationNumber | string |  | justificationAuthority modification number
data.award.justificationAuthority.authority | string |  | justificationAuthority authority
data.link | JSON |   |  
data.link.additionalInfo | JSON |   |  
data.link.additionalInfo.content | string |   | Additional Info
data.link.href | string |   | Website Address
data.additionalReporting | string |   |  recovery_act or none
description | JSON |   |  
additionalInfo.sections JSON | JSON |   |
additionalInfo.sections.opportunityId | string |  |
additionalInfo.sections.status | string |  |
parent  | JSON |  |
parent.opportunityId | string |  | Parent Opportunity ID
related  | JSON |  |
related.opportunityId | string |  | Related Opportunity ID
status  | JSON |  |
status.code | string |  | 1.status= active (published, unarchive and uncancelled records) <br />2.status=inactive (published, archive and uncancelled records)<br />3.status=draft (draft records)<br />4.status=published (published and unarchive)<br />5.status=active_cancelled(published, unarchive and cancelled records)<br />6.status=inactive_cancelled(published, archive and cancelled records)<br />7.status=archived(published and archived)
status.value | string |  | Refer to status.code
archived | boolean |  | Indicates Archived
cancelled | boolean |  | Indicates Canceled
latest | string |  | Inidcates latest record
deleted | boolean |  | Indicates Deleted
postedDate | date |  | Date Posted
modifiedDate | date |  | Date Modified
createdDate | date |  | Date Created
modifiedBy | string |  | Modified By User ID
createdBy | string |  | Created By User ID
description  | JSON |  | JSON applicable to Get Opportunity By ID only
description.body | string |  | Description of Notice
description.opportunityId | string |  | Opportunity ID (UI)
description.descriptionId | string |  |
description.modifiedOn | string |  | Date Description modified
page  | JSON |  | JSON applicable to Get List of Opportunities only
page.size | string |  |
page.totalElements | string |  |
page.totalPages | string |  |
page.number | string |  |

<p><small><a href="#">Back to top</a></small></p>

Examples

<details>
<summary>Get List of Opportunities Response:</summary>
<p>
<code><pre>
{
  "_embedded": {
    "opportunity": [
      {
        "data": {
          "type": "r",
          "flags": [
            {
              "code": "isScheduledNotice",
              "isSelected": false
            }
          ],
          "title": "V--flight services",
          "archive": {
            "date": "2020-06-14",
            "type": "auto15"
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
              "response": "2020-05-30T00:00:00-05:00",
              "responseTz": "America/Chicago"
            }
          },
          "organizationId": "500028949",
          "pointOfContact": [
            {
              "fax": null,
              "type": "primary",
              "email": "test@gsa.gov",
              "phone": null,
              "title": null,
              "fullName": "Neal Hitchcock at 208-387-5400; Bureau of Land Management, Office of Fire and Aviation, 3833 S. Development Avenue, Boise, ID 83705-5354"
            }
          ],
          "classificationCode": "V",
          "solicitationNumber": "NICC-01",
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
          "opportunityId": "8de3d88fc7642d9adcdb8d4ff9070399"
        },
        "related": {

        },
        "status": {
          "code": "draft",
          "value": "Draft"
        },
        "archived": false,
        "cancelled": false,
        "latest": false,
        "deleted": false,
        "modifiedDate": "2019-02-19T21:18:20.669+0000",
        "createdDate": "2019-02-19T21:18:20.669+0000",
        "modifiedBy": "reitestuser+aa@gsa.gov",
        "createdBy": "reitestuser+aa@gsa.gov",
        "opportunityId": "f563391e2c8a4b7180a6cf49d6980723"
      },
      {
        "data": {
          "type": "s",
          "award": {
            "lineItemNumber": null
          },
          "title": "test",
          "permissions": {
            "IVL": {
              "create": false,
              "delete": false,
              "update": false
            }
          },
          "organizationId": "100186612",
          "pointOfContact": null,
          "solicitationNumber": ""
        },
        "additionalInfo": {
          "sections": [
            {
              "id": "header",
              "status": "updated"
            }
          ]
        },
        "parent": {

        },
        "related": {

        },
        "status": {
          "code": "draft",
          "value": "Draft"
        },
        "archived": false,
        "cancelled": false,
        "latest": false,
        "deleted": false,
        "modifiedDate": "2019-02-19T21:14:02.308+0000",
        "createdDate": "2019-02-19T21:14:02.308+0000",
        "modifiedBy": "reitestuser+cs1@gsa.gov",
        "createdBy": "reitestuser+cs1@gsa.gov",
        "opportunityId": "f687c5c4e4124c27a068c145d0a4a1f5"
      },
      {
        "data": {
          "type": "i",
          "award": {
            "date": "2019-01-01",
            "number": "A1234567890",
            "deliveryOrderNumber": "TO3456789"
          },
          "naics": [
            {
              "code": [
                "621111"
              ]
            }
          ],
          "title": "SK Intent to Bundle Requirements",
          "archive": {
            "date": "2019-03-21",
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
              "fax": "",
              "type": "primary",
              "email": "sk@test.com",
              "phone": "",
              "title": null,
              "fullName": "Sravanthi Kundur"
            }
          ],
          "classificationCode": "84",
          "solicitationNumber": "31231231241414",
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
              "id": "contact",
              "status": "updated"
            },
            {
              "id": "attachments-links",
              "status": "updated"
            },
            {
              "id": "description",
              "status": "updated"
            },
            {
              "id": "classification",
              "status": "updated"
            },
            {
              "id": "general",
              "status": "updated"
            },
            {
              "id": "award",
              "status": "updated"
            }
          ]
        },
        "parent": {

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
        "postedDate": "2019-02-19T21:09:37.369+0000",
        "modifiedDate": "2019-02-19T21:09:37.369+0000",
        "createdDate": "2019-02-19T20:16:31.728+0000",
        "modifiedBy": "reitestuser+aa@gsa.gov",
        "createdBy": "reitestuser+aa@gsa.gov",
        "opportunityId": "530382634cc9401db875fd18c9831bda"
      }
    ]
  },
  "page": {
    "size": 4,
    "totalElements": 1153,
    "totalPages": 289,
    "number": 0
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get Opportunity by ID


------- | -------
**Request Type** | GET
**URL** | /v1/api/{opportunityId}
**Summary** | Get Opportunity by Opportunity ID
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
latest | query | boolean | No | default = true

<p><small><a href="#">Back to top</a></small></p>

Responses

See Responses for Get List of Opportunity - link to the above display

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
    "organizationId": "48493828",
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

### Cancel Opportunity



------- | -------
**Request Type** | POST
**URL** | /v1/api/cancel/{opportunityId}
**Summary** | Cancel a Published Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Cancel Opportunity Contract JSON](#cancel-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully canceled | return response is new Opportunity ID

Examples

<details>
<summary>Cancel Request:</summary>
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

### Uncancel Opportunity


------- | -------
**Request Type** | POST
**URL** | v1/api/uncancel/{opportunityId}
**Summary** | Update status of a Canceled Opportunity to Published status
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Uncancel Opportunity Contract JSON](#uncancel-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully un canceled | return response is new Opportunity ID

Examples

<details>
<summary>Uncancel Request (active Opportunity):</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": "uncancel_request",
  "data": {
    "description": "test"
  }
}
</pre></code>
</p>
</details>

<details>
<summary>Uncancel Request (inactive Opportunity):</summary>
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

<p><small><a href="#">Back to top</a></small></p>

### Archive Opportunity

------- | -------
**Request Type** | POST
**URL** |/v1/api/archive/{opportunityId}
**Summary** | Archive a Published Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Archive Opportunity Contract JSON](#archive-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully archived | return response is new Opportunity ID

Examples

<details>
<summary>Archive Request:</summary>
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

### Unarchive Opportunity

------- | -------
**Request Type** | POST
**URL** |/v1/api/unarchive/{opportunityId}
**Summary** | Update status of a Archived Opportunity to Published status
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Unarchive Opportunity Contract JSON](#unarchive-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Opportunity successfully unarchived | return response is new Opportunity ID

Examples

<details>
<summary>Unarchive:</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "unarchive_request",
  "data": {
    "newArchiveDate": null,
    "newArchiveType": "auto15",
    "newResponseDate": "2019-11-11T10:58:00-05:00",
    "newResponseTz": "America/New_York"
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Create Attachment

------- | -------
**Request Type** | POST
**URL** |/v1/api/{opportunityId}/attachments
**Summary** | Create attachment/link to a draft Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON | Body | JSON | Yes | [Refer Create Attachment Contract JSON](#create-attachment-json)

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
	"content": "T25lIG1vcmUgc21hbGwgdGVzdA==",
	"userFileName": "demo.txt",
	"description": "description",
	"packageAccessLevel": "public"
}
</pre></code>
</p>
</details>

<details>
<summary>Create Attachment Request - link</summary>
<p>
<code><pre>
{
	"attType":"link",
	"description":"test",
"userFileName": "BETA URL",
	"link" : "http://beta.sam.gov",
	"packageAccessLevel":"public"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update Attachment

------- | -------
**Request Type** | PATCH
**URL** |/v1/api/{opportunityId}/attachments/{resourceId}
**Summary** | Update an attachment metadata on a draft Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
resourceId | query | string | Yes | Attachment ID
Request JSON | Body | JSON | Yes | [Refer Update Attachment Contract JSON](#update-attachment-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Attachment successfully updated | Resource ID returned

Examples

<details>
<summary>Update Attachment Request - file</summary>
<p>
<code><pre>
{
  "attType": "file",
  "userFileName": "testing.txt",
  "description": "description",
  "explicitAccess": "1",
  "packageAccessLevel": "public"
}
</pre></code>
</p>
</details>

<details>
<summary>Update Attachment Request - link</summary>
<p>
<code><pre>
{
  "attType": "link",
  "userFileName": "updated beta.sam.gov url",
  "description": "description",
  "explicitAccess": "1",
  "packageAccessLevel": "public"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Download All Attachments (metadata)


------- | -------
**Request Type** | GET
**URL** |/v1/api/attachments
**Summary** | Download the all attachments metadata for an Opportunity
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header | string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
resourceId | query | string | YesNo | Resource ID
excludeDeleted | query | boolean | No | True will exclude deleted

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | NA | NA

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
attachmentList | JSON |  |
attachmentList.opportunityId | string |  | Opportunity ID
attachmentList.attachments | JSON |  | List of Attachments
attachmentList.attachments.attachmentId | string |  | Attachment ID
attachmentList.attachments.resourceId | string |  | Resource ID
attachmentList.attachments.fileExists | string |  | Indicates if file exists
attachmentList.attachments.name | string |  | Attachment Name
attachmentList.attachments.type | string |  | Attachment Type
attachmentList.attachments.postedDate | date |  | Date Attachment posted
attachmentList.attachments.accessLevel | string |  | Attachment Access level: Private or Public
attachmentList.attachments.exportControlled | string |  | Export Controlled
attachmentList.attachments.explicitAccess | string |  | Explicit Access
attachmentList.attachments.description | string |  | Attachment Description
attachmentList.attachments.mimeType | string |  | Attachment mime type
attachmentList.attachments.size | string |  | Attachment Size
attachmentList.attachments.deletedDate | date |  | Attachment Deleted Date
attachmentList.attachments.deletedFlag | string |  | Inidicates if Attachment is deleted
attachmentList.attachments.accessStatus | string |  | Attachment Access Status

Examples

<details>
<summary>Download All Attachments (metadata)</summary>
<p>
<code><pre>
{
  "attachmentList": [
    {
      "opportunityId": "b5a1a6c066414660a47d6b2148dad4a4",
      "attachments": [
        {
          "attachmentId": "1fdca327eae34df69fc247ce2e888bc3",
          "resourceId": "3351879d57954487aa35d83ec0aadc63",
          "fileExists": "1",
          "name": "Testing_octo.txt",
          "type": "file",
          "postedDate": "2019-03-14T21:43:21.498+00:00",
          "accessLevel": "public",
          "exportControlled": "0",
          "explicitAccess": "0",
          "description": "description",
          "mimeType": ".txt",
          "size": 19,
          "deletedDate": "",
          "deletedFlag": "",
          "accessStatus": "public"
        }
      ]
    }
  ]
}
</pre></code>
</p>
</details>

### Download Attachment


------- | -------
**Request Type** | GET
**URL** |/v1/api/resources/files/{resourceId}/download
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

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Download Attachments as Zip


------- | -------
**Request Type** | GET
**URL** |/v1/api/{opportunityId}/resources/download/zip
**Summary** | Download attachments as zip file for Opportunity
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

### Delete Attachment*

------- | -------
**Request Type** | DELETE
**URL** | /v1/api/{opportunityId}/attachments/{resourceId}
**Summary** | Delete the attachments for the Resource ID and Opportunity ID.
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header | string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
resourceId | query | string | Yes | Resource ID
deleteAll | query | boolean | Yes | Delete attachment for all revisions (default = false)

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Attachment successfully deleted | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>

### Get IVL (Interested Vendor List)


------- | -------
**Request Type** | GET
**URL** | /v1/api/{opportunityId}/ivl
**Summary** | Get IVL of the Opportunity ID
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
entityId | query | string | No | Entity ID (DUNS #)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
ivl | JSON |  |
ivl. duns | string |  | DUNS number for the business entity
ivl.cageNumber | string |  | Identifies a given facility at a specific location
ivl.name | string |  | Name of business entity
ivl.addedOn | string |  | Date added to IVL
ivl.contacts | JSON |  | Business entity contact
ivl.contacts.email | string |  | Business entity email
ivl.contacts.firstName | string |  | Business entity contact first name
ivl.contacts.lastName | string |  | Business entity contact last name
ivl.contacts.phoneNumber | string |  | Business entity contact phone number
ivl.contacts.type | string |  | Business entity contact type
ivl.addresses | JSON |  |
ivl.addresses.streetAddress | string |  | Business entity address
ivl.addresses.city | string |  | Business entity city
ivl.addresses.state | string |  | Business entity state
ivl.addresses.zip | string |  | Business entity zip
ivl.addresses.country | string |  | Business entity country
ivl.addresses.addressType | string |  | Business entity address type
ivl.naicsList | Array |  | Business entity’s NAICS

Examples

<details>
<summary>Response - Get IVL</summary>
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

<p><small><a href="#">Back to top</a></small></p>

### IVL Settings


------- | -------
**Request Type** | PUT
**URL** |/v1/api/organization/{orgId}/ivl
**Summary** | Update IVL Settings (on or off) for an Organization
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
orgId | query | string | Yes | FH Org Id/AAC code of the organization
Request JSON | Body | JSON | Yes | [Refer IVL Settings Contract JSON](#ivl-settings-json)

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Organization’s IVL settings successfully set | NA

Examples

<details>
<summary>Request - IVL Settings</summary>
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

### Delete Vendor


------- | -------
**Request Type** | DELETE
**URL** | /v2/opportunities/{opportunityId}/ivl/{entityid}
**Summary** | Delete Vendor from IVL for Opportunity ID
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
entityid | query | string | Yes | DUNS number for the business entity

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Vendor successfully deleted | NA

Examples

N/A

<p><small><a href="#">Back to top</a></small></p>

### Get Authorized Party* ###

------- | -------
**Request Type** | GET
**URL** | /v2/opportunities/access/{ opportunityId}/accessRequest
**Summary** | Summary	Get Authorized Party list for the explicit access requests submitted to an Opportunity
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
X-Auth-Token|	Header|	string|	Yes	|User Access token
Authorization|	Header	|string	|Yes	|User roles Jwt token
api_key|	query|	string|	Yes|	Valid API Key
opportunityId	|query	|string|	Yes|	Opportunity ID
status|	query|	string|	No|	Request access status can be: Pending, Approved, Rejected, or blank to get all request details for a notice


Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | JSON | To get the list of pending, approved, rejected or all request access on that notice | List of the Requestor's info and the status on their request access

Examples

<details>
<summary>Response – Get Authorized Party</summary>
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
    },
}
</pre></code>
</p>
</details>

### Add Authorized Party* ###

------- | -------
**Request Type** | POST
**URL** | /v2/opportunities/access/{opportunityId}/accessRequest
**Summary** | Add a Vendor as an Authorized Party for a notice to grant access to all the secured attachments across all the versions . This API will create and approve the request for the vendor.
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
X-Auth-Token	|Header	|string	|Yes	|User Access token
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
opportunityId | query | string | Yes | Opportunity ID
Request JSON  | Body | JSON | Yes | Refer to Vendor Data JSON section

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string| Access Request created and approved for the vendor. | Action Id is returned.

Examples

<details>
<summary>Response – Add Authorized Party</summary>
<p>
<code><pre>
{
"lname":"test",
"fname":"test123",
"email":"reitestuser.de@gmail.com",
"contractorName":"",
"duns":"608999520",
"cageCode":""
}
</pre></code>
</p>
</details>

### Check Unique Solicitation Number ###

------- | -------
**Request Type** | GET
**URL** | /v1/api/isSolicitationNumberUnique/{parent}/{solicitationNumber}/{type}
**Summary** | Check if solicitation number is unique. A solicitation number is unique if it is not used by another opportunity of equivalent type. For justification type, j&a and fair opportunity/limited sources justification are considered equivalent.
**Consumes** | application/json
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
<summary>Response – Check Unique Solicitation Number</summary>
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
**URL** | /v1/api/opportunities/{opportunityId}/relatedopportunities/{type}
**Summary** | Get Related Contract Opportunities
**Consumes** | application/json
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
<summary>Response – Get Related Opportunities</summary>
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

### Create and Publish Contract Opportunity* ###

------- | -------
**Request Type** | GET
**URL** | /opps/v2/opportunities/createAndPublish
**Summary** | Creates and publishes contract opportunity. Used by SOAP service
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
X-Auth-Token |	Header | string |	Yes |	Access Token
Authorization	| Header | string |	Yes |	Compact jws


Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201	| JSON |	Create and publish opportunity |	Create and publish contract opportunity

Examples

<details>
<summary>Response</summary>
<p>
<code><pre>
{  
   "opportunityId":"233deb15b846404b8fc3479b2cb33cfa",
   "data":{  
      "type":"p",
      "solicitationNumber":"M4Test",
      "title":"TEST_PRESOL",
      "organizationId":"100186612",
      "descriptions":[  

      ],
      "link":{  
         "additionalInfo":{  

         }
      },
      "classificationCode":"85",
      "naics":[  

      ],
      "pointOfContact":[  
         {  
            "type":"primary",
            "fullName":"Henry Holmes",
            "email":"hholmes@test.com",
            "phone":"1231231234",
            "fax":"2342345678",
            "additionalInfo":{  

            }
         }
      ],
      "placeOfPerformance":{  
         "city":{  
            "code":"1000",
            "name":"Abilene"
         },
         "state":{  
            "code":"TX",
            "name":"Texas"
         },
         "country":{  
            "code":"USA",
            "name":"UNITED STATES"
         }
      },
      "archive":{  
         "type":"auto15"
      },
      "permissions":{  
         "IVL":{  
            "create":true,
            "read":true,
            "update":true,
            "delete":true
         }
      },
      "solicitation":{  
         "deadlines":{  
            "response":"2019-04-05T23:59:00-04:00"
         }
      },
      "award":{  
         "awardee":{  
            "location":{  

            }
         },
         "justificationAuthority":{  

         },
         "fairOpportunity":{  

         }
      },
      "additionalReporting":[  
         "recovery_act"
      ]
   },
   "description":[  
      {  
         "opportunityId":"0ed58151d8af43b795678a4f059022c5",
         "descriptionId":"17631519f03242d3b04993f6eb39e77f",
         "modifiedOn":"2019-04-05T18:26:26.847+0000",
         "body":"test"
      }
   ],
   "resources":[  
      {  
         "attType":"link",
         "link":"http://beta.sam.gov",
         "description":"test beta sam link",
         "packageAccessLevel":null
      },
      {  
         "attType":"link",
         "link":"https://faaco.faa.gov/index.cfm/attachment/download/84723",
         "description":"test attachment pdf link",
         "packageAccessLevel":null
      },
      {  
         "attType":"file",
         "content":"SnVzdCBhIHNtYWxsIHRlc3Q",
         "resourceName":"test_document1.pdf",
         "description":null,
         "packageAccessLevel":null,
         "explicitAccess":"1",
         "exportControlled":null
      },
      {  
         "attType":"file",
         "content":"SnVzdCBhIHNtYWxsIHRlc3Q22",
         "resourceName":"test_document2.pdf",
         "description":null,
         "packageAccessLevel":null,
         "explicitAccess":"0",
         "exportControlled":null
      }
   ],
   "parent":{  
      "opportunityId":"00df7fc00df646468b591536526b004f"
   },
   "related":{  

   },
   "latest":true,
   "postedDate":"20190327",
   "modifiedDate":1554488786849,
   "archived":false
}
</pre></code>
</p>
</details>

### Delete Notice*  ###
------- | -------
**Request Type** | POST
**URL** |	/opps/v2/opportunities/{opportunityId}/requests
**Summary** | Deletes all the versions or latest version of a notice
**Consumes** | application/json
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
X-Auth-Token |	Header | string |	Yes |	Access Token
Authorization	| Header | string |	Yes |	Compact jws
Request JSON|	Body|	JSON|	Yes|	Refer Delete Notice JSON

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Deleted the latest or all versions of a notice	|NA

Examples

<details>
<summary>Response</summary>
<p>
<code><pre>
   {
   "requestType”: delete_request",
    "reason":"test",
     "data": {
                           "description”: “test",
                            "title”: null,
                            "newArchiveDate":null,
                             "newArchiveType":null,
                             "deleteOption”: latest"  ( “all”  - to delete all versions)
              }
}
</pre></code>
</p>
</details>


## API Contract JSON

### Create/Update Opportunity Contract JSON

<div id="create-update-json">
<details>
<summary>Create_Update_Opportunity_Contract_Json</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "string",
    "title": "string",
    "type": "string",
    "classificationCode": "string",
    "organizationId": "string",
    "organizationLocationId": "string",
    "naics": [
      {
        "code": [
          "string"
        ],
        "type": "string"
      }
    ],
    "pointOfContact": [
      {
        "additionalInfo": {
          "content": "string"
        },
        "email": "string",
        "fax": "string",
        "fullName": "string",
        "phone": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "placeOfPerformance": {
      "city": {
        "code": "string",
        "name": "string"
      },
      "country": {
        "code": "string",
        "name": "string"
      },
      "state": {
        "code": "string",
        "name": "string"
      },
      "streetAddress": "string",
      "streetAddress2": "string",
      "zip": "string"
    },
    "award": {
      "date": "date",
      "number": "string",
      "deliveryOrderNumber": "string",
      "amount": "number",
      "lineItemNumber": "integer",
      "awardee": {
        "manual": "flag",
        "name": "string",
        "duns": "string",
        "location": {
          "streetAddress": "string",
          "streetAddress2": "string",
          "city": {
            "code": "string",
            "name": "string"
          },
          "state": {
            "code": "string",
            "name": "string"
          },
          "zip": "string",
          "country": {
            "code": "string",
            "name": "string"
          }
        }
      },
      "justificationAuthority": {
        "modificationNumber": "string",
        "authority": "dictionary"
      },
      "fairOpportunity": {
        "authority": "string"
      }
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
      "setAside": "string",
      "deadlines": {
        "responseTz": "string",
        "response": "date"
      }
    },
    "archive": {
      "date": "string",
      "type": "auto15"
    },
    "flags": [
      {
        "code": "string",
        "isSelected": true
      }
    ],
    "link": {
      "additionalInfo": {
        "content": "string"
      },
      "href": "string"
    },
    "additionalReporting": [
      "none"
    ]
  },
  "description": [
    {
      "body": "string"
    }
  ]
}
</pre></code>
</p>
</details>
</div>

Name | Data Type | Allowed Values | Required (Create/Update) | Required (to Publish) | Description
-----|-----------|----------------|--------------------------|-----------------------|------------
type | string | See Notice Types table | Yes | Yes | Notice Type
solicitationNumber | string |  | Yes | Yes | Solicitation Number
title | string |  | No | Yes | Title of the Opportunity
organizationId | string |  | No | Yes | FH Org Id/AAC code of the office where an Opportunity is being submitted
classificationCode | string |  | No | Yes (not required for type= r) | Product Service Code (PSC)
naics | JSON | NA | NA | NA |
naics.code | string |  | No | Yes | NAICS Code
naics.type | string | P  | Yes | Yes | NAICS Type Note: 'P' must be in upper case
flags | JSON | NA | NA | NA |
flags.code | string | Recovery act | No | No | This is a recovery or Reinvestment Act Action
flags.IsSelected | boolean | default = True | No | No |
pointOfContact | JSON | NA | NA | NA |
pointOfContact.type | string | p | Yes | Yes | Contact Type Note: 'p' must be in lower case
pointOfContact.title | string |  | No | No | Contact title
pointOfContact.fullname | string |  | No | Yes | Contact Full Name
pointOfContact.email | string |  | No | No | Contact email
pointOfContact.phone | string |  | No | No | Contact Phone
pointOfContact.fax | string |  | No  | No | Contact Fax
placeOfPerformance | JSON | NA | NA | NA |
placeOfPerformance.<br/>streetAddess | string |  | No | No | Pop Address
placeOfPerformance.<br/>streetAddess2 | string |  | No | No | Pop Address2
placeOfPerformance.city | JSON | NA | NA | NA | Pop City
placeOfPerformance.city.<br/>code | string |  | No | No | Pop City code
placeOfPerformance.city.<br/>name | string |  | No | No | Pop City name
placeOfPerformance.city.<br/>state | JSON | NA | NA | NA | Pop City state
placeOfPerformance.city.<br/>state.code | string |  | No | No | Pop city state code
placeOfPerformance.city.<br/>state.name | string |  | No | No | Pop city state name
placeOfPerformance.country | JSON | NA | NA | NA | Pop Country
placeOfPerformance.<br/>country.code | string |  | No | No | Pop Country Code
placeOfPerformance.<br/>country.name | string |  | No | No | Pop Country name
placeOfPerformance.zip | string |  | No | No | Pop Country zip
archive | JSON | NA | NA | NA |
archive.type | string | auto15, auto30, autocustom | No | Yes | Archive Type
archive.date | date |  | No | Yes (if archive.type=<br/>autocustom) | Archive Date
permissions | JSON | NA | NA | NA |
permissions.ivl | JSON | NA | NA | NA |
permissions.ivl.create | boolean |  | No | No | permissions.ivl.create
permissions.ivl.read | boolean |  | No | No | permissions.ivl.read
permissions.ivl.update | boolean | Not In Use | Not In Use | Not In Use | Not In Use
permissions.ivl.delete | boolean | Not In Use | Not In Use | Not In Use | Not In Use
solicitation | JSON | NA | NA | NA |
solicitation.setAside | string | See Set-Aside values table | No | No | setAside
solicitation.deadlines | JSON | NA | NA | NA |
solicitation.<br/>deadlines.response | date | YYYY-MM-DDTHH:MM:SS-05:00 | 1) Yes (for type=k,o)<br/>2) Yes (when archive.type=<br/>auto1) | 1) Yes (for type=k,o) <br/>2)	Yes (when archive.type=<br/>auto1)	| Deadline Date
solicitation.deadlines.<br/>responseresponseTz | string | | No | No | Time Zone for <br/>Solicitation Deadline Date
award | JSON | NA | NA | NA |
award.date | date | YYYY-MM-DD | Yes (only for type=<br/>i, u, a) | Yes (only for type=<br/>i, u, a) | Award Date
award.number | string |  | Yes (only for type=i, u, a) | Yes (only for type=i, u, a) | Award Number
award.deliverOrderNumber | string |  | No | No | Award Deliver Order Number
award.amount | number |  | No | No | Award Amount
award.lineitemNumber | string |  | No | No | Award Line item Number
award.awardee | JSON | NA | NA | NA |
award.awardee.manual | string | boolean  | Yes | Yes  | Awardee
award.awardee.name | string |  | No | No | Awardee Name
award.awardee.duns | string |  | No | No | Awardee Duns
award.awardee.location | JSON | NA | NA | NA |
award.awardee.location.<br/>streetAddress | string |  | No | No | Awardee Street Address 1
award.awardee.location.<br/>streetAddress2 | string |  | No | No | Awardee Street Address 1
award.awardee.location.<br/>city | string |  | No | No | Awardee City
award.awardee.location.<br/>city.code | string |  | No | No | Awardee City code
award.awardee.location.<br/>city.name | string |  | No | No | Awardee City name
award.awardee.location.<br/>state | JSON | NA | NA | NA |
award.awardee.location.<br/>state.code | string |  | No | No | Awardee State code
award.awardee.location.<br/>state.name | string |  | No | No | Awardee State name
award.awardee.location.<br/>country | JSON | NA | NA | NA |
award.awardee.location.<br/>country.code | string |  | No | No | Awardee Country code
award.awardee.location.<br/>country.name | string |  | No | No | Awardee Country Name
award.awardee.location.<br/>zip | string |  | No | No | Awardee Country Zip
justificationAuthority | JSON | NA | NA | NA |
justificationAuthority.<br/>modificationNumber | string |  | No | No | Justification Authority Modification Number
justificationAuthority.<br/>authority | string |  | No | No | Justification Authority
link | JSON | NA | NA | NA |
link.additionalInfo | JSON | NA | NA | NA |
link.additionalInfo.cotent | string |  | No | No | Additional info
link.href | string |  | No | No | Website Address
additionalReporting | string | none/<br/>auto_recovery | No | Yes |
description | JSON | NA | NA | NA |
description.body | string |  | No | Yes | Description of notice

<p><small><a href="#">Back to top</a></small></p>

### Publish Opportunity Contract JSON

<div id="publish-json" title="Click to view Publish Contract">
<details>
<summary>Publish_Opportunity_Contract_Json</summary>
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Publish reason
requestType | string | publish_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity Contract JSON

<div id="revise-json" title="Click to view Revise Contract">
<details>
<summary>Revise_Opportunity_Contract_Json</summary>
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for revision
requestType | string | update_publish_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Cancel Opportunity Contract JSON

<div id="cancel-json" title="Click to view Cancel Contract">
<details>
<summary>Cancel_Opportunity_Contract_Json</summary>
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for cancelation
requestType | string | cancel_request | Yes | Type of request
Description | string |  | Yes | Description for cancelation

<p><small><a href="#">Back to top</a></small></p>

### Uncancel Opportunity Contract JSON

<div id="uncancel-json" title="Click to view Uncancel Contract">
<details>
<summary>Uncancel_Opportunity_Contract_Json</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": " uncancel_request ",
  "data": {
    "description": "",
    "newArchiveDate": "",
    "newArchiveType": "",
    "newResponseDate": "",
    "newResponseTz": "America/New_York",
    "newContractAwardDate": ""
  }
}
</pre></code>
</p>
</details>
</div>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for uncanceling
requestType | string | uncancel_request | Yes | Type of request
Description | string |  | Yes | Description for uncanceling
newContractAwardDate | date | YYYY-MM-DD | Yes (if unarchiving an award notice) | New Contract Award Date
newArchiveDate | date | YYYY-MM-DD | Yes (if newArchiveType=autocustome) | New Archive Date
newArchiveType | string | auto15, auto30, autocustom | Yes  | New Archive Type
newResponseDate | date | YYYY-MM-DDTHH:MM:SS-05:00 | Yes (if newArchiveType = auto15) | New Response Date
newResponseTz | string | America/New_York | Yes (if newResponseDate is provided) | New Response Time Zone
newContractAwardDate | date | YYYY-MM-DD | Yes (if type=a) | New Contract Award Date

<p><small><a href="#">Back to top</a></small></p>

### Archive Opportunity Contract JSON

<div id="archive-json" title="Click to view Archive Contract">
<details>
<summary>Archive_Opportunity_Contract_Json</summary>
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Archive reason
requestType | string | archive_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Unarchive Opportunity Contract JSON

<div id="unarchive-json" title="Click to view Unarchive Contract">
<details>
<summary>Unarchive_Opportunity_Contract_Json</summary>
<p>
<code><pre>
{
  "reason": "",
  "requestType": " unarchive_request",
  "data": {
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for uncanceling
requestType | string | unarchive_request | Yes | Type of request
newContractAwardDate | date | YYYY-MM-DD | Yes (if unarchiving an award notice) | New Contract Award Date
newArchiveDate | date | YYYY-MM-DD | Yes (if newArchiveType=autocustom) | New Archive Date
newArchiveType | string | auto15, auto30, autocustom | Yes  | New Archive Type
newResponseDate | date | YYYY-MM-DDTHH:MM:SS-05:00 | Yes (if newArchiveType = auto15) | New Response Date
newResponseTz | string | America/New_York | Yes (if newResponseDate is provided) | New Response Time Zone

<p><small><a href="#">Back to top</a></small></p>

### Create Attachment Contract JSON

<div id="create-attachment-json" title="Click to view Create Attachment Contract">
<details>
<summary>Create_Attachment_Contract_Json - File</summary>
<p>
<code><pre>
{
  "attType": "file",
  "content": "",
  "userFileName": "",
  "description": "",
  "packageAccessLevel": ""
}
</pre></code>
</p>
</details>
<details>
<summary>Create_Attachment_Contract_Json - Link</summary>
<p>
<code><pre>
{
  "attType": "link",
  "link": "",
  "description": "",
  "packageAccessLevel": ""
}
</pre></code>
</p>
</details>
<details>
<summary>Valid_File_Types</summary>
<p>
<code><pre>
.wmv
.pdf
.htm
.exe
.xml
.csv
.ps
.eps
.kmz
.xpw
.xpx
.xlsb
.xlsm
.xltm
.sst
.stl
.pps
.ppt
.pptm
.mpp
.pub
.vsd
.docm
.dotm
.xps
.odp
.ods
.odt
.xfd
.xfdl
.wlmp
.wpd
.z
.js
.swf
.mht
.webarchive
.mp3
.wav
.wma
.xyz
.bmp
.c4
.dwg
.zip
.docx
.xls
.fp5
.doc
.pptx
.xlsx
.hta
.ptm
.accdb
.mdb
.wps
.gif
.rar
.ai
.rtf
.jpeg
.jpg
.jpe
.png
.tif
.dgn
.dxf
.mdi
.emf
.ico
.wmf
.eml
.dwf
.dwfx
.ics
.css
.html
.txt
.vcf
.avi
.mp4
.mpg
.vob
.mov
.flv
</pre></code>
</p>
</details>
</div>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
attType | string | link, file | Yes | Type of attachment, either link or file
content | byte |  | Yes (if attType=file) | File content in byte format
description | string |  | No | Description of file or link
link | string |  | Yes (if attType=link) | Resource link or URL
packageAccessLevel | string | public,private(default public) | No | Type of access to file or link
userFileName | string |  | Yes (if attType=file) | Name of file

<p><small><a href="#">Back to top</a></small></p>

### Update Attachment Contract JSON

<div id="update-attachment-json" title="Click to view Update Attachment Contract">
<details>
<summary>Update_Attachment_Contract_Json</summary>
<p>
<code><pre>
{
  "attType": "User entered",
  "userFileName": "User entered",
  "explicitAccess": "1",
  "description": "User entered",
  "packageAccessLevel": "User entered"
}
</pre></code>
</p>
</details>
</div>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
attType | string | link, file | Yes | Type of attachment, either link or file
description | string |  | No | Description of file or link
link | string |  | Yes (if attType=link) | Resource link or URL
packageAccessLevel | string | public,private(default public) | No | Type of access to file or link
userFileName | string |  | Yes (if attType=file) | Name of file
explicitAccess |  |  |  |

<p><small><a href="#">Back to top</a></small></p>

### IVL Settings Contract JSON

<div id="ivl-settings-json" title="Click to view IVL Settings Contract">
<details>
<summary>IVL_Settings_Contract_Json</summary>
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
ivlCreate | string | forcedon, forcedoff | Yes | Indicates whether vendors can indicate interest in the organization’s Opportunities
ivlView | string | forcedon, forcedoff | Yes | Indicates whether vendors can view other vendors interested in the organization’s Opportunities

### Vendor Data JSON ###

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
fname | string | | Yes | First name of the user
lname | string | | Yes | Last name of the user
email | string | | Yes | Email Id of the user
contractorName | string | | No | Contractor Name
duns | string | | Yes | DUNS#
cageCode | string | | No | Cage Code

### Delete Notice JSON ###

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason|	string|	|	Yes|	Reason for deletion
requestType	|string	|delete_request |Yes	|Type of request
Description	|string|		|Yes|	Description for deletion of a notice
title	|string	|	|No|	
newArchiveDate|	date|	YYYY-MM-DD|	No|	New Archive Date
newArchiveType|	string|	|	No|	New Archive Type
deleteOption|	string|	latest, all|	Yes|	Option to delete either the latest or all versions of a notice



<p><small><a href="#">Back to top</a></small></p>

### Error Messages

#### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error Message | Reason/Description
--------------|-------------------
Please provide valid Authorization Email & API Key |	API Key and/or Authorization Email is required
Encountered error authenticating user.Invalid JWT provided | Invalid Authorization Email provided
Insufficient privileges to retrieve system account profile as the given organization is invalid |	Invalid Organization ID provided
Error processing POST request |	Invalid JSON format provided
$.data: is missing but it is required |	Request JSON is empty
"$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]" ] |	Request Type must be valid for operation
Please provide Opportunity id	| Invalid Opportunity ID provided
Insufficient privileges to retrieve system account profile as the given organization is not part of the approved FH hierarchy	| Office ID provided is not authorized for system account
Insufficient privileges to edit opportunity |	Account does not have appropriate privileges to edit opportunity
This opportunity cannot be published. Auto 15 archive type is not allowed for this opportunity type |	Archive type = auto 15 archive type is not allowed for type “u” Justification and Authorization sections


<p><small><a href="#">Back to top</a></small></p>

#### Specific Error Messages

This section details possible error messages for specific operations.

Field | Error Message | Reason/Description | Operation
------|---------------|--------------------|----------
Additional Reporting |	This opportunity cannot be published. Additional reporting is required. |	Additional Reporting is required with valid values of “none” or “recovery_act”	| Publish
ARCHIVE |	This opportunity is not the latest published. |	Draft Opportunity cannot be archived.	| Archive
Archive Date |	$.archive.date: does not match the date pattern ^\\d{4}-(?:0[0-9]{1}\1[0-2]{1})-(0?[1-9]\[12][0-9]\3[01])$ |	Archive Date must be in specified format |	Create, Publish, Uncancel, Unarchive
Archive Date |	This opportunity cannot be published. Inactive date is a required field. |	Archive Date is required if Archive Type = autocustom |	Create, Publish, Uncancel, Unarchive
Archive Type |	This opportunity cannot be published. Inactive Policy is a required field. |	Archive Type is required |	Publish
Archive Type |	$.archive.type: does not have a value in the enumeration[auto15, auto30, autocustom] |	Archive type must be specified value | Create, Publish, Uncancel, Unarchive
Archive Type |	This opportunity cannot be published. Auto 15 archive type is not allowed for this opportunity type. | Archive Type = auto15 not allowed |	Publish
attType |	Attachment must have AttType of file or link |	Attachment type must be a file or a line |	Create Attachment
Authorization |	Insufficient privileges to edit opportunity |	See User Account Authorization section |	Update, Publish, Revise
Authorization |	Insufficient privileges to create opportunity |	Insufficient privileges to create an award notice. See User Account Authorization section for more details. |	Create Opportunity
Authorization |	Insufficient privileges to create request |	Insufficient privileges to publish an award notice. See User Account Authorization section for more details. |	Create
Award |	Award Details Section - Contract Award Dollar Amount is not a valid field for this opportunity type |	Award Section is not valid for Base Notice Types (s, o, p, r, g, k, i) |	Publish
Award Amount |	Award Detail Section-Please enter valid integer for Amount Field |	Award Amount required |	Publish
Award Amount |	Award Details Section - Contract Award Dollar Amount is not a valid field for this opportunity type |	Contract Award Amount only valid for Type "a" Award |	Publish
Award Date |	Award Details Section - Contract Award Date provided is in an invalid format. |	Date is not in specified format |	Create Opportunity, Publish, Uncancel, Unarchive
Award Date |	Award Details section -Award date provided is in the past. |	Award Date must be current or future date. |	Create Opportunity, Publish, Uncancel, Unarchive
Award Number |	Award Details Section - Contract Award Number is a required field	| Contract Award Number is missing | Publish, Uncancel, Unarchive
Classification Code |	This opportunity cannot be published. Classification Code provided did not match expected codes |	Invalid PSC provided |	Publish
CANCEL |	This opportunity cannot be cancelled. This opportunity is a revision. |	Cannot cancel a revised Opportunity. |	Cancel
Content |	File Resource must have content. |	File Resource must be filled out | Create Attachment
Contract Award Dollar Amount |	Award Details Section – Please enter valid integer for Amount Field	| Valid integer amount must be entered for award dollar amount | Publish
CREATE | Insufficient privileges to create opportunity |	Account does not have appropriate privileges to create opportunity | CREATE
CREATE ATTACHMENT |	Insufficient privileges to upload attachment | Attachments cannot be added to published notices |	Create Attachment
DELETE ATTACHMENT |	No attachments found for the resource |	Opportunity ID and/or Resource ID is invalid | DELETE ATTACHMENT
Deadlines Response | This opportunity cannot be published. | Response Deadline Date is required |	Publish
Description |	Description is required |	Description is required |	Publish
IVL |	This opportunity cannot be published. Interested Vendors List Add is a required field. |Interested Vendors List Add is a required |	Publish
Justification Authority |	This opportunity cannot be published. Justification Authority is not valid field for this opportunity type | Justification Authority Section is not valid for Base Notice Types (s, o, p, r, g, k, i) | Publish
Justification Authority |	This opportunity cannot be published. Justification Authority Modification Number is not valid field for this opportunity type. | Justification Authority Section is not valid for Base Notice Types (s, o, p, r, g, k, i) | Publish
Justification Authority |	This opportunity cannot be published. Justification Authority is not valid field for this opportunity type | Justification Authority only valid for Type "u" Justification and Authorization | Publish
Justification Authority |	This opportunity cannot be published. Justification Authority Modification Number is not valid field for this opportunity type | Justification Authority Modification Number is only valid for Type "u" Justification and Authorization | Publish
NAICS Code | This opportunity cannot be published. NAICS provided did not match expected codes | NAICS Code is invalid | Create Opportunity, Publish
NAICS Type | $.data.naics[0].type: does not have a value in the enumeration [Primary] | NAICS Type is required | Create Opportunity
Notice Type |	This opportunity cannot be published. The opportunity type `j` is no longer supported	| See Notice Types table for valid notice types |	Publish
Opportunity ID | Opportunity ID for the selected opportunity type already exists | Cannot publish an existing published record | Publish
Opportunity ID | Opportunity cannot be updated | An Opportunity cannot be revised if that Opporutnity was revised previously and is currently in draft state  | Revise
Opportunity ID | Opportunity ID is required	| Opportunity ID is required | All
Opportunity Type | Opportunity type is required | Opportunity type is required | Create Opportunity
Opportunity Type | errorCode":400,"message":"Opportunity type given is not a valid type." |	Opportunity type is empty |	Create Opportunity
Organization Id |	Contracting office is required | FH Org Id/AAC code is required |	Publish
Organization Id |	The Organization ID that you provided is an inactive and/or invalid. | Inactive/Invalid Organization Id |	Create Opportunity
Organization Id |	The Organization ID that you provided is not an office level, and it must be for this opportunity type.	| Organization ID is not valid for opportunity type. Note: Organization ID must be Office level unless creating a Special Notice.	| Create Opportunity
Point of Contact Type |	$.data.pointOfContact[0].type: does not have a value in the enumeration [primary, secondary, owner] |	Point of Contact Type is required |	Create Opportunity
Point of Contact Email |	Primary Contact – Email is required	| If Contact email is missing. This is a required field	| Publish
Primary Contact Full Name |	Primary Contact - Name is required | Point of Contact Full Name is required | Publish
Response Date |	This opportunity cannot be published. Response Date is a required field |	Response Date is only valid for Notice Type “o” |	Publish
Title |	Title is required |	Title is required |	Publish
UNARCHIVE |	This opportunity is not the latest published |	Only archived notices can be unarchived | UNARCHIVE
userFileName | File Resource must have userFileName | File Name is a required field |	Create Attachment
Request Id |	Duplicate request. Vendor is already added as an authorized party on the notice. | Request already exists for the vendor on the notice.	| AddAuthorizedParty
Duns# |	No contact match on vendor data provided.	| Not a Valid email or Duns#.	| AddAuthorizedParty
Authorization|	Error code: 401 ; User does not have sufficient privileges to perform this action|	Invalid API key is used other than write sensitive permission	|Add Authorized Party
Authorization	|Error code: 400 ; Duplicate request. Vendor is already added as an authorized party on the notice	| If a party is already added and is being added again by a contract writing individual|	Add Authorized Party
Authorization|	Error code: 401 ; Your request did not get processed! Please verify your permission/roles|	If nonfed email id is used in authorization	|Get Authorized Party
Entity|	Error code: 400 ; No contact match on vendor data provided|	Wrong entity info is entered	|Add Authorized Party
Duns#|	No contact match on vendor data provided.	|Not a Valid email or Duns#.|	AddAuthorizedParty, Approve or Reject Explicit Access Request By Vendor Data.
Opportunity Id,  VendorData	|No request found for the notice and the vendor data provided.|	Unable to find a request for the opportunity and vendor details provided.|	Approve or Reject Explicit Access Request By Vendor Data.
JSON| No Request JSON Given| Can't parse JSON. Raw result: error processing request| Delete Latest or All Notices

## Coming soon…


## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log

Date | Version | Description
------|---------------|---------
4/25/2019 | v.01 | Base Version
4/29/2019 | v0.2 | Added information for Get Authorized Party List <br> Added Add Authorized Party <br> Added Vendor Data JSON <br> POC Email changed to not required <br> Change log added <br> Secure Attachment Download Authorization section added <br> Alpha and Beta endpoint section added
5/23/2019 | v0.3 | Update IVL Settings URL <br> Removed Get IVL by DUNS <br> Added EntityID to getIVL API parameter <br> Updated Get Authorized Party <br> Updated Add Authorized Party <br> Error Message Section Updated
5/28/2019 | v0.4| Updated  Add Authorized Party<br> Get Authorized Party<br> Delete All Attachments API’s <br> Added Delete Notice API <br> Updated User Permissions <br> Create and Publish Contract Opportunity


<p><small><a href="#">Back to top</a></small></p>
