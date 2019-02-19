---
title: Opportunities API
banner-heading: Opportunities API
---

## Overview

This document will provide electronic users with the technical specifications required to utilize the beta.SAM.GOV Contract Opportunities REST API capability.
<p><small><a href="#">Back to top</a></small></p>

## Getting Started 

###	Authentication and Authorization

#### System Account Authentication
In order to utilize the Contract Opportunities REST API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read and Write permissions under Contract Opportunity domain.

#### User Account Authorization
In order to perform an Opportunity API operation, the following is required:
* beta.SAM.GOV user account with either ‘Administrator’, ‘Contracting Officer’ role or ‘Contracting Specialist’ role. Permissions for operations by role are listed in the table below.<br/>
To submit any opportunity for an office, user should provide Federal Hierarchy (FH) Organization Id or Activity Address Code (AAC) (procurement/non-procurement).

**Note:** Certain permissions marked “Yes” are not be assigned by default and will require a user administrator to update.
 
Operation    | Administrator <br/>(Contract Opportunities domain)| Contracting Officer | Contracting Specialist
-------------|---------------|---------------------|------------------------------
Create Opportunity | Yes | Yes | Yes
Publish Opportunity | Yes | Yes | No
Revise Opportunity | Yes | Yes | Yes
Update Opportunity | Yes | Yes | No
Opportunity History | Yes | Yes | Yes
Delete Opportunity | Yes | No | No
Get List of Opportunity | Yes | Yes | Yes
Get Opportunity by ID | Yes | Yes | Yes
Cancel Opportunity | Yes | Yes | Yes
UnCancel Opportunity | Yes | Yes | Yes
Archive Opportunity | Yes | Yes | Yes
Unarchive Opportunity | Yes | Yes | Yes
Create Attachment  | Yes | Yes | Yes
Get Attachment | Yes | Yes | Yes
Add IVL | Yes | Yes | Yes
Get IVL | Yes | Yes | Yes
Update IVL settings | Yes | Yes | Yes
Delete vendor for opportunity | Yes | Yes | Yes
Download attachment | Yes | Yes | Yes
Update attachment | Yes | Yes | Yes
Delete attachment | Yes | Yes | Yes


<p><small><a href="#">Back to top</a></small></p>

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

<p><small><a href="#">Back to top</a></small></p>

## API Description

<span style="color:red">Note: All notices except Special notices will be associated to organization at office level.
Special notices can be associated to Organization at department, sub-tier, or office level.</span>


### Create Opportunity

Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/create
Summary | Create a new Draft Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Create/Update Opportunity Contract JSON](#create-update-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Draft Opportunity successfully created | return response is notice ID

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
      },
      "fairOpportunity": {
        "authority": ""
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
    "award": {
      "date": "",
      "number": "",
      "deliveryOrderNumber": "",
      "amount": "number",
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
      },
      "fairOpportunity": {
        "authority": ""
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
      "body": "Description"
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

Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/publish/{id}
Summary | Publish a Draft Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice ID
Request JSON | Body | JSON | Yes | [Refer Publish Opportunity Contract JSON](#publish-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully published | return response is no content

Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity

Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/revise/{id}
Summary | Create a draft version of a notice for a Published notice.
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Published Notice Id
Request JSON | Body | JSON | Yes | [Refer Revise Opportunity Contract JSON](#revise-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Revise an Opportunity is successful | return response is notice ID

Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Update Opportunity

Endpoint Description

------- | -------
Request Type | PATCH
Endpoint | /opps/v1/api/update/{id}
Summary | Update a Draft Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Revised Notice Id
Request JSON | Body | JSON | Yes | [Refer Create/Update Opportunity Contract JSON](#create-update-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string | Update an Opportunity is successful | return response is Notice ID

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
      },
      "fairOpportunity": {
        "authority": ""
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
    "award": {
      "date": "",
      "number": "",
      "deliveryOrderNumber": "",
      "amount": "number",
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
      },
      "fairOpportunity": {
        "authority": ""
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
      "body": "Description_updated "
    }
  ]
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Opportunity History

Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/history/{id}
Summary | Get history of an Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice Id
postedFrom | Body | JSON | No | Posted From - Date

<p><small><a href="#">Back to top</a></small></p>

Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
content | JSON | Update an Opportunity is successful | return response is Notice ID
history | JSON |  | 
history.parent_notice_id | string |  | Parent notice id
history.cancel_notice | string |  | Number of cancel notice id
history.procurement_type | string |  | Notice type
history.archive_notice | string |  | Number of archive notice
history.request.type | string |  | Example: Request type: submit
history.action_type | string |  | Example: Action type: publish
history.action_date | string | Date and time | Date and time of the action type Example: YYYY-MM-DDTHH:MM:SS-05:00
history.title | string |  | title
history.index | string |  | index
history.related_notice_id | string |  | It will bring if there is any related notice id
history.notice_id | string |  | Notice id
History.deleted | string |  | Number of deletion
history.solicitation_number | string | Solicitation Number  | History of that Solicitation Number
History_revision_reason | string |  | It will bring if user entered any revision reason
history.posted_date | string | Date and time | Posted date and time Example: YYYY-MM-DDTHH:MM:SS-05:00
history.latest | string | Service will bring the all the opportunity but with latest=1 | 
_links | JSON |  | 
_links.self | JSON |  | 
_links.self.href | string | Array of links | Document Link
_links.self.templated | boolean | True or false | Service will bring true or false

Examples

<details>
<summary>Opportunity History Example</summary>
<p>
<code><pre>
{
  "content": {
    "history": [
      {
        "parent_notice_id": "b29936cce80946939c0aea4387d0d625",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2019-01-23T19:56:24.188+00",
        "index": "3",
        "title": "unarchive_test1",
        "related_notice_id": null,
        "notice_id": "6a5297b67fc74174a5a11766f15c45c9",
        "deleted": "0",
        "solicitation_number": "unarchive_test1",
        "revision_reason": "unarchive",
        "posted_date": "2019-01-23T19:56:24.132+00",
        "latest": "1"
      },
      {
        "parent_notice_id": "b29936cce80946939c0aea4387d0d625",
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2019-01-23T19:53:39.909+00",
        "index": "2",
        "title": "unarchive_test1",
        "related_notice_id": null,
        "notice_id": "b0a9533b31f04618bb6d81527f256299",
        "deleted": "0",
        "solicitation_number": "unarchive_test1",
        "revision_reason": "archive",
        "posted_date": "2019-01-23T19:52:46.904+00",
        "latest": "0"
      },
      {
        "parent_notice_id": null,
        "cancel_notice": "0",
        "procurement_type": "p",
        "archive_notice": "0",
        "request_type": "submit",
        "action_type": "publish",
        "action_date": "2019-01-23T19:52:46.995+00",
        "index": "1",
        "title": "unarchive_test1",
        "related_notice_id": null,
        "notice_id": "b29936cce80946939c0aea4387d0d625",
        "deleted": "0",
        "solicitation_number": "unarchive_test1",
        "revision_reason": null,
        "posted_date": "2019-01-23T19:52:46.904+00",
        "latest": "0"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://hostname/opps/v2/opportunities/6a5297b67fc74174a5a11766f15c45c9/history{?postedFrom}",
      "templated": true
    }
  }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Delete Opportunity

Endpoint Description

------- | -------
Request Type | DELETE
Endpoint | /opps/v1/api/delete/{id}
Summary |   Delete a Draft Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice Id

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully deleted | NA

Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Get List of Opportunity

Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/search
Summary | Get list of Opportunities
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
archivedFrom | query | Date-time | No | Archive From Date and Time
archivedTo | query | Date-time | No | Archive To Date and Time
awardNumber | query | string | No | Award Number
cancelled | query | Boolean | No |  True or false
doNumber | query | string | No | Delivery Order number
includeCount | query | Boolean | No | True or false
keyword | query | string | No | Enter any keyword from the description
latest | query | Boolean | No | True or false
links | query | Boolean | No | Array Of links
noticeIds | query | Array[string] | No | Notice ID found from getList call or ID’s for changes found in getNoticeData call.
noticeType | query | Array[string] | No | [See Notices Types table] [Notice Types] @todo
organizationId | query | Array[string] | No | FH Org Id/AAC code of the office where an opportunity is being submitted
page | query | Integer | No | Page number
parentNotice | query | Array[string] | No | Parent Notice ID
postedFrom | query | Date-time | No | Posted From Date and time YYYYMMDD
postedTo | query | Date-time | No | Posted To Date and time YYYYMMDD
relatedNotice | query | Array[string] | No | Related Notice ID
responseFrom | query | Date-time | No | ResponseFrom
responseTo | query | Date-time | No | ResponseTo
size | query | Integer | No | Size limit is 10 by default
solNumber | query | string | No | Solicitation Number
sortBy | query | string | No | Sort
status | query | Array[string] | No | 1.status= active (published, unarchive and uncancelled records)<br/> 2.status=inactive (published, archive and uncancelled records)<br/>3.status=draft (draft records)<br/> 4.status=published (published and unarchive)<br/>5.status=active_cancelled(published, unarchive and cancelled records)<br/>6.status=inactive_cancelled(published, archive and cancelled records)<br/>7. status=archived(published and archived)


<p><small><a href="#">Back to top</a></small></p>

Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
data | JSON | List of Opportunities are available in JSON format | All the opportunities are listed out in the response
type | string | Base Notice Type | See Notices Types table @todo link this
solicitation Number | string |  | Solicitation Number
title | string |  | Title of the Opportunity
organizationId | string |  | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | string |  | Product Service Code (PSC)
naics | JSON |  | 
naics.code | string |  | NAICS Code
naics.type | string | Primary  | NAICS type
flags | JSON |  | 
flags.code | string | Recovery act | True or False
flags.IsSelected | boolean | Correction of previous J&A | true or false. If correcting a previously submitted j&a notice, specify true and the system will lookup the j&a by award number and solicitation number if applicable.
pointOfContact | JSON |  | 
pointOfContact.type | string |  | Contact Type
pointOfContact.title | string |  | Contact title
pointOfContact.fullname | string |  | Contact Full Name
pointOfContact.email | string |  | Contact email
pointOfContact.phone | string |  | Contact Phone
pointOfContact.fax | string |  | Contact Fax
placeOfPerformance | JSON |  | 
placeOfPerformance.streetAddess | string |  | Pop Address
placeOfPerformance.streetAddess2 | string |  | Pop Address2
placeOfPerformance.city | JSON |  | Pop City
placeOfPerformance.city.code | string |  | Pop City code
placeOfPerformance.city.name | string |  | Pop City name
placeOfPerformance.city.state | JSON |  | Pop City state
placeOfPerformance.city.state.code | string |  | Pop city state code
placeOfPerformance.city.state.name | string |  | Pop city state name
placeOfPerformance.country | JSON |  | Pop Country
placeOfPerformance.country.code | string |  | Pop Country Code
placeOfPerformance.country.name | string |  | Pop Country name
placeOfPerformance.zip | string |  | Pop Country zip
archive | JSON |  | 
archive.type | string | auto15, auto30, autocustom | Archive Type
archive.date | date |  | Archive Date
permissions | JSON |  | 
permissions.ivl | JSON |  | 
permissions.ivl.create | boolean |  | permissions.ivl.create
permissions.ivl.read | boolean |  | permissions.ivl.read
permissions.ivl.update | boolean |  | permissions.ivl.update
permissions.ivl.delete  | boolean |  | permissions.ivl.delete
solicitation | JSON |  | 
solicitation.setAside | string |  | See Set-Aside values table @todo add link
solicitation.deadlines | JSON |  | 
solicitation.deadlines.response | Date |  | Solicitation deadline date Format: YYYY-MM-DDTHH:MM:SS-05:00
solicitation.deadlines.responseTz | string |  | Solicitation deadlines response Time zone
award | JSON |  | 
award.date | date | Yes (only for notice type = i, u, a) | Award Date
award.number | string | Yes (only for notice type = i, u, a) | Award Number
award.deliverOrderNumber | string |  | Award Deliver Order Number
award.amount | Number |  | Please enter valid integer for Amount Field
award.lineitemNumber | string |  | Award Line item Number
award.awardee | JSON |  | 
award.awardee.manual | string |  | Awardee
award.awardee.name | string |  | Awardee name
award.awardee.duns | string |  | Awardee Duns
award.awardee.location | JSON |  | Awardee location
award.awardee.location.streetAddress | string |  | Awardee Street address 1
award.awardee.location.streetAddress2 | string |  | Awardee Street address 1
award.awardee.location.city | string |  | Awardee city
award.awardee.location.city.code | string |  | Awardee city code
award.awardee.location.city.name | string |  | Awardee city name
award.awardee.location.state | JSON |  | Awardee State
award.awardee.location.state.code | string |  | Awardee State code
award.awardee.location.state.name | string |  | Awardee State name
award.awardee.location.country | JSON |  | Awardee Country
award.awardee.location.country.code | string |  | Awardee Country code
award.awardee.location.country.name | string |  | Awardee Country name
award.awardee.location.zip | string |  | Awardee Country zip
justificationAuthority | JSON |  | 
justificationAuthority.modificationNumber | string |  | justificationAuthority modification number
justificationAuthority.authority | string |  | justificationAuthority authority

<p><small><a href="#">Back to top</a></small></p>

Examples

<details>
<summary>PRESOL</summary>
<p>
<code><pre>
"type" : "p",
        "award" : {
  "date": "",
  "amount": "number",
  "number": "",
  "awardee": {
    "duns": "",
    "name": "",
    "manual": false,
    "location": {
      "zip": "",
      "city": {
        "code": "",
        "name": ""
      },
      "state": {
        "code": "",
        "name": ""
      },
      "country": {
        "code": "",
        "name": ""
      },
      "streetAddress": "",
      "streetAddress2": ""
    }
  },
  "lineItemNumber": "",
  "fairOpportunity": {
    "authority": ""
  },
  "deliveryOrderNumber": "",
  "justificationAuthority": {
    "authority": "dictionary",
    "modificationNumber": ""
  }
},
        "flags" : [ {
          "code" : "",
          "isSelected" : true
        } ],
        "naics" : [ {
          "code" : [ "111150" ],
          "type" : "Primary"
        } ],
        "title" : "PRESOLTEST_T2",
        "archive" : {
          "date" : "2019-09-09",
          "type" : "autocustom"
        },
        "permissions" : {
          "IVL" : {
            "read" : false,
            "create" : false,
            "delete" : false,
            "update" : false
          }
        },
        "solicitation" : {
          "setAside" : "10",
          "deadlines" : {
            "response" : "2019-08-08T23:59:59Z",
            "responseTz" : "America/New_York"
          }
        },
        "organizationId" : "100120624",
        "pointOfContact" : [ {
          "fax" : "",
          "type" : "primary",
          "email" : "",
          "phone" : "",
          "title" : "",
          "fullName" : "gsa",
          "additionalInfo" : {
            "content" : ""
          }
        } ],
        "classificationCode" : "13",
        "placeOfPerformance" : {
          "zip" : "",
          "city" : {
            "code" : "",
            "name" : ""
          },
          "state" : {
            "code" : "",
            "name" : ""
          },
          "country" : {
            "code" : "",
            "name" : ""
          },
          "streetAddress" : "",
          "streetAddress2" : ""
        },
        "solicitationNumber" : "PRESOLTest4",
        "additionalReporting" : [ "none" ],
        "organizationLocationId" : ""
      },
      "parent" : { },
      "related" : { },
      "status" : {
        "code" : "draft",
        "value" : "Draft"
      },
      "archived" : false,
      "cancelled" : false,
      "latest" : false,
      "modifiedDate" : "2019-01-21T22:39:29.022+0000",
      "createdDate" : "2019-01-21T22:39:29.022+0000",
      "modifiedBy" : "test+gsa@gsa.gov",
      "createdBy" : "test+gsa@gsa.gov",
      "_links" : {
        "opportunity:access" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:ivl:view" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:draft" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:edit" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:delete" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:publish" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        },
        "opportunity:package:create" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb/attachments"
        },
        "opportunity:package:edit" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb/attachments"
        },
        "opportunity:package:delete" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb/attachments"
        },
        "opportunity:edit:award" : {
          "href" : "/opps/v2/opportunities/48cfff285ae248388ad65eec6b38e9cb"
        }
      },
      "id" : "48cfff285ae248388ad65eec6b38e9cb"
    }, {
      "data" : {
        "link" : {
          "href" : "",
          "additionalInfo" : {
            "content" : ""
          }
        }
    }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Get Opportunity by Id

Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/opportunities/{id}
Summary | Get Opportunity by Notice ID
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice ID
latest | query | Boolean | No | True or False (default)

Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
type | string | Base Notice Type | See Notice Types table @todo link to table
solicitation Number | string |  | Solicitation Number
title | string |  | Title of the Opportunity
organizationId | string |  | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | string |  | Product Service Code (PSC)
naics | JSON |  | 
naics.code | string |  | NAICS Code
naics.type | string |  | NAICS type
flags | JSON |  | 
flags.code | string | | This is a recovery or Reinvestment Act Action
flags.IsSelected | boolean | | True or False
pointOfContact | JSON |  | 
pointOfContact.type | string |  | Contact Type
pointOfContact.title | string |  | Contact title
pointOfContact.fullname | string |  | Contact Full Name
pointOfContact.email | string |  | Contact email
pointOfContact.phone | string |  | Contact Phone
pointOfContact.fax | string |  | Contact Fax
placeOfPerformance | JSON |  | 
placeOfPerformance.streetAddess | string |  | Pop Address
placeOfPerformance.streetAddess2 | string |  | Pop Address2
placeOfPerformance.city | JSON |  | Pop City
placeOfPerformance.city.code | string |  | Pop City code
placeOfPerformance.city.name | string |  | Pop City name
placeOfPerformance.city.state | JSON |  | Pop City state
placeOfPerformance.city.state.code | string |  | Pop city state code
placeOfPerformance.city.state.name | string |  | Pop city state name
placeOfPerformance.country | JSON |  | Pop Country
placeOfPerformance.country.code | string |  | Pop Country Code
placeOfPerformance.country.name | string |  | Pop Country name
placeOfPerformance.zip | string |  | Pop Country zip
archive | JSON |  | 
archive.type | string | | Archive Type
archive.date | date |  | Archive Date
permissions | JSON |  | 
permissions.ivl | JSON |  | 
permissions.ivl.create | boolean |  | permissions.ivl.create
permissions.ivl.read | boolean |  | permissions.ivl.read
permissions.ivl.update | boolean |  | permissions.ivl.update
permissions.ivl.delete  | boolean |  | permissions.ivl.delete
solicitation | JSON |  | 
solicitation.setAside | string |  | Solicitation setAside
solicitation.deadlines | JSON |  | 
solicitation.deadlines.response | date |  | Solicitation deadline date Format: YYYY-MM-DDTHH:MM:SS-05:00
solicitation.deadlines.responseTz | string |  | Solicitation deadlines response Time zone
award | JSON |  | 
award.date | date | | Award Date
award.number | string | | Award Number
award.deliverOrderNumber | string |  | Award Deliver Order Number
award.amount | Number |  | Please enter valid integer for Amount Field
award.lineitemNumber | string |  | Award Line item Number
award.awardee | JSON |  | 
award.awardee.manual | string |  | Awardee
award.awardee.name | string |  | Awardee name
award.awardee.duns | string |  | Awardee Duns
award.awardee.location | JSON |  | Awardee location
award.awardee.location.streetAddress | string |  | Awardee Street address1
award.awardee.location.streetAddress2 | string |  | Awardee Street address2
award.awardee.location.city | string |  | Awardee city
award.awardee.location.city.code | string |  | Awardee city code
award.awardee.location.city.name | string |  | Awardee city name
award.awardee.location.state | JSON |  | Awardee State
award.awardee.location.state.code | string |  | Awardee State code
award.awardee.location.state.name | string |  | Awardee State name
award.awardee.location.country | JSON |  | Awardee Country
award.awardee.location.country.code | string |  | Awardee Country code
award.awardee.location.country.name | string |  | Awardee Country name
award.awardee.location.zip | string |  | Awardee Country zip
justificationAuthority | JSON |  | 
justificationAuthority.modificationNumber | string |  | justificationAuthority modification number
justificationAuthority.authority | string |  | justificationAuthority authority
link | JSON |  | 
link.additionalInfo | JSON |  | 
placeOfPerformance.country.codelink.additionalInfo.cotent | string |  | Pop Country CodeAdditional info 
link.href | string |  | Website Address
additionalReporting | string |  | 
description | JSON |  | 
description.body | string |  | Description of notice


<p><small><a href="#">Back to top</a></small></p>

Examples

<details>
<summary>Get Opportunity response by notice Id</summary>
<p>
<code><pre>
"type" : "p",
        "award" : {
  "date": "",
  "amount": "number",
  "number": "",
  "awardee": {
    "duns": "",
    "name": "",
    "manual": false,
    "location": {
      "zip": "",
      "city": {
        "code": "",
        "name": ""
      },
      "state": {
        "code": "",
        "name": ""
      },
      "country": {
        "code": "",
        "name": ""
      },
      "streetAddress": "",
      "streetAddress2": ""
    }
  },
  "lineItemNumber": "",
  "fairOpportunity": {
    "authority": ""
  },
  "deliveryOrderNumber": "",
  "justificationAuthority": {
    "authority": "dictionary",
    "modificationNumber": ""
  }
},
        "flags" : [ {
          "code" : "",
          "isSelected" : true
        } ],
        "naics" : [ {
          "code" : [ "111150" ],
          "type" : "Primary"
        } ],
        "title" : "TST_T1",
        "archive" : {
          "date" : "2019-09-09",
          "type" : "autocustom"
        },
        "permissions" : {
          "IVL" : {
            "read" : false,
            "create" : false,
            "delete" : false,
            "update" : false
          }
        },
        "solicitation" : {
          "setAside" : "10",
          "deadlines" : {
            "response" : "2019-08-08T23:59:59Z",
            "responseTz" : "America/New_York"
          }
        },
        "organizationId" : "100120624",
        "pointOfContact" : [ {
          "fax" : "",
          "type" : "primary",
          "email" : "",
          "phone" : "",
          "title" : "",
          "fullName" : "gsa",
          "additionalInfo" : {
            "content" : ""
          }
        } ],
        "classificationCode" : "13",
        "placeOfPerformance" : {
          "zip" : "",
          "city" : {
            "code" : "",
            "name" : ""
          },
          "state" : {
            "code" : "",
            "name" : ""
          },
          "country" : {
            "code" : "",
            "name" : ""
          },
          "streetAddress" : "",
          "streetAddress2" : ""
        },
        "solicitationNumber" : "Test1",
        "additionalReporting" : [ "none" ],
        "organizationLocationId" : ""
      },
      "parent" : { },
      "related" : { },
      "status" : {
        "code" : "draft",
        "value" : "Draft"
      },
      "archived" : false,
      "cancelled" : false,
      "latest" : false,
      "modifiedDate" : "2019-01-21T07:12:10.924+0000",
      "createdDate" : "2019-01-21T07:12:10.924+0000",
      "modifiedBy" : "Test+gsa@gsa.gov",
      "createdBy" : "Test+gsa@gsa.gov",
      "_links" : {
        "opportunity:access" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:ivl:view" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:draft" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:edit" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:delete" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:publish" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        },
        "opportunity:package:create" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6/attachments"
        },
        "opportunity:package:edit" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6/attachments"
        },
        "opportunity:package:delete" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6/attachments"
        },
        "opportunity:edit:award" : {
          "href" : "/opps/v2/opportunities/0e45a3ac9cf6474e817c97dc467851c6"
        }
      },
      "id" : "0e45a3ac9cf6474e817c97dc467851c6"
    } ]
  },
  "_links" : {
    "self" : {
      "href" : "/opps/v2/opportunities"
    },
    "opportunity:access" : {
      "href" : "/opps/v2/opportunities"
    },
    "opportunity:create" : {
      "href" : "/opps/v2/opportunities"
    },
    "opportunity:create:award" : {
      "href" : "/opps/v2/opportunities"
    }
  },
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Cancel Opportunity

Endpoint Description

------- | -------
Request Type | POST
URL | /opps/v1/api/cancel/{id}
Summary | Cancel a Published Opportunity
Consumes | application/json
Produces | JSON


Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice Id 
Request JSON | Body | JSON | Yes | Cancel Opportunity Contract JSON @todo

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully canceled | NA

Examples

<details>
<summary>Cancel:</summary>
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

Endpoint Description

------- | -------
Request Type | POST
URL | /opps/v1/api/uncancel/{id}
Summary | Update status of a Canceled Opportunity to Published status
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice Id 
Request JSON | Body | JSON | Yes | Refer 5.5 Uncancel Opportunity Contract JSON

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully uncanceled | NA

Examples

<details>
<summary>Uncancel (active notice):</summary>
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
<summary>Uncancel (inactive notice):</summary>
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

Endpoint Description

------- | -------
Request Type | POST
URL | /opps/v1/api/archive/{id}
Summary | Archive a Published Opportunity
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice ID 
Request JSON | Body | JSON | Yes | Refer 5.6 Archive Opportunity Contract JSON

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully archived | NA

Examples

<details>
<summary>Archive:</summary>
<p>
<code><pre>
{
  "reason": "test",
  "requestType": "archive_request"
}
</pre></code>
</p>
</details>

### Unarchive Opportunity 

------- | -------
Request Type | POST
URL | /opps/v1/api/unarchive/{id}
Summary | Update status of a Archived Opportunity to Published status
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice ID 
Request JSON | Body | JSON | Yes | Refer 5.7 Unarchive Opportunity Contract JSON

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Opportunity successfully unarchived | NA

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


### Create Attachment

------- | -------
Request Type | POST
URL | /opps/v1/api/{id}/attachments
Summary | Create attachment/link to a draft notice
Consumes | application/json
Produces | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
id | query | string | Yes | Notice Id 
Request JSON | Body | JSON | Yes | Refer 5.8 Create Attachment Contract JSON

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Attachment successfully created | NA

Examples

<details>
<summary>Attachment Type: file</summary>
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

## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/opportunities-api.json">Open API specification file for the Sample API</a>


<p><small><a href="#">Back to top</a></small></p>

## API Contract JSON

### Create/Update Opportunity Contract JSON

<a id="create-update-json" href="v1/Create_Update_Opportunity_Contract_Json.txt">Create_Update_Opportunity_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required (Create/Update) | Required (to Publish) | Description
-----|-----------|----------------|--------------------------|-----------------------|------------
type | string | See Notice Types table | Yes | Yes | Notice Type
solicitation Number | string |  | Yes | Yes | Solicitation Number
title | string |  | No | Yes | Title of the Opportunity
organizationId | string |  | No | Yes | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | string |  | No | Yes (not required for type= r) | Product Service Code (PSC) 
naics | JSON | NA | NA | NA | 
naics.code | string |  | No | Yes | NAICS Code
naics.type | string | P  | Yes | Yes | NAICS Type Note: ‘P’ must be in upper case
flags | JSON | NA | NA | NA | 
flags.code | string | Recovery act | No | No | This is a recovery or Reinvestment Act Action
flags.IsSelected | boolean |  | No | No | 
pointOfContact | JSON | NA | NA | NA | 
pointOfContact.type | string | p | Yes | Yes | Contact Type Note: ‘p’ must be in lower case
pointOfContact.title | string |  | No | No | Contact title
pointOfContact.fullname | string |  | No | Yes | Contact Full Name
pointOfContact.email | string |  | No | Yes | Contact email
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
solicitation.setAside | string | See Set-Aside values table | No | No | Solicitation setAside
solicitation.deadlines | JSON | NA | NA | NA | 
solicitation.<br/>deadlines.response | date | YYYY-MM-DDTHH:MM:SS-05:00 | 1) Yes (for type=k,o)<br/>2) Yes (when archive.type=<br/>auto1) | 1) Yes (for type=k,o) <br/>2)	Yes (when archive.type=<br/>auto1)	| Solicitation Deadline Date
solicitation.deadlines.<br/>responseresponseTz | string | America/<br/>New_York | No | No | Time Zone for <br/>Solicitation Deadline Date
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

<a id="publish-json" href="v1/Publish_Opportunity_Contract_Json.txt">Publish_Opportunity_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Publish reason 
requestType | string | publish_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity Contract JSON

<a id="revise-json" href="v1/Revise_Opportunity_Contract_Json.txt">Revise_Opportunity_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for revision 
requestType | string | update_publish_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Cancel Opportunity Contract JSON

<a id="cancel-json" href="v1/Cancel_Opportunity_Contract_Json.txt">Cancel_Opportunity_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Reason for cancelation 
requestType | string | cancel_request | Yes | Type of request
Description | string |  | Yes | Description for cancelation

<p><small><a href="#">Back to top</a></small></p>

### Uncancel Opportunity Contract JSON

<a id="uncancel-json" href="v1/Uncancel_Opportunity_Contract_Json.txt">Uncancel_Opportunity_Contract_Json.txt</a>

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

<a id="archive-json" href="v1/Archive_Opportunity_Contract_Json.txt">Archive_Opportunity_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
Reason | string |  | Yes | Archive reason 
requestType | string | archive_request | Yes | Type of request

<p><small><a href="#">Back to top</a></small></p>

### Unarchive Opportunity Contract JSON

<a id="unarchive-json" href="v1/Unarchive_Opportunity_Contract_Json.txt">Unarchive_Opportunity_Contract_Json.txt</a>

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

<a id="create-attachment-json" href="v1/Create_Attachment_Contract_Json.txt">Create_Attachment_Contract_Json.txt</a>

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
attType | string | link, file | Yes | Type of attachment, either link or file 
content | byte |  | Yes (if attType=file) | File content in byte format
description | string |  | No | Description of file or link
link | string |  | Yes (if attType=link) | Resource link or URL
packageAccessLevel | string | public,private(default public) | No | Type of access to file or link
userFileName | string |  | Yes (if attType=file) | Name of file

<p><small><a href="#">Back to top</a></small></p>

### Error Messages

#### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error Message | Reason/Description
--------------|-------------------
Please provide valid Authorization Email & API Key | API Key and/or Authorization Email is required
Encountered error authenticating user.Invalid JWT provided | Invalid Authorization Email provided
Insufficient privileges to retrieve system account profile as the given organization is invalid | Invalid Organization ID provided
Error processing POST request | Invalid JSON format provided
$.data: is missing but it is required | Request JSON is empty
"$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]" ] | Request Type must be valid for operation
Please provide notice id | Invalid notice ID provided

<p><small><a href="#">Back to top</a></small></p>

#### Specific Error Messages

This section details possible error messages for specific operations.

Field | Error Message | Reason/Description | Operation
------|---------------|--------------------|----------
Additional Reporting | $.additionalReporting[0]: does not have a value in the enumeration [none, recovery_act] | Additional Reporting is required  | Publish
Archive Date | $.archive.date: does not match the date pattern <code>^\\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(0?[1-9]|[12][0-9]|3[01])$</code> | Archive Date must be in specified format | Create, Publish, Uncancel, Unarchive
Archive Date | This opportunity cannot be published. Inactive date is a required field. | Archive Date is required if Archive Type = autocustom | Create, Publish, Uncancel, Unarchive
Archive Type | This opportunity cannot be published. Inactive Policy is a required field. | Archive Type is required | Publish
Archive Type | $.archive.type: does not have a value in the enumeration[auto15, auto30, autocustom, manual] | Archive type must be specified value | Create, Publish, Uncancel, Unarchive
Archive Type | This opportunity cannot be published. Auto 15 archive type is not allowed for this opportunity type.  | Archive Type = auto15 not allowed  | Publish
Authorization | Insufficient privileges to edit opportunity | See User Account Authorization section | Update, Publish, Revise
Authorization | Insufficient privileges to create opportunity | Insufficient privileges to create an award notice. See User Account Authorization section for more details. | Create
Authorization | Insufficient privileges to create request | Insufficient privileges to publish an award notice. See User Account Authorization section for more details. | Create
Award Amount | Award Detail Section-Please enter valid integer for Amount Field | Award Amount required  | Publish
Award Date | Award Details Section - Contract Award Date provided is in an invalid format. | Date is not in specified format | Create, Publish, Uncancel, Unarchive
Award Date | Award Details section -Award date provided is in the past. | Award Date must be current or future date. | Create, Publish, Uncancel, Unarchive
Award Number | Award Details Section - Contract Award Number is a required field. | Contract Award Number is missing | Publish,Uncancel, Unarchive
Classification Code | This opportunity cannot be published. Classification Code provided did not match expected codes | Invalid PSC provided | Publish 
Deadlines Response | This opportunity cannot be published. | Response Deadline Date is required | Publish
Description | Description is required | Description is required | Publish
IVL | This opportunity cannot be published. Interested Vendors List Add is a required field. | Interested Vendors List Add is a required | Publish
NAICS Code | This opportunity cannot be published. NAICS provided did not match expected codes | NAICS Code is invalid | Create, Publish
NAICS Type | $.data.naics[0].type: does not have a value in the enumeration [Primary] | NAICS Type is required | Create
Notice ID | Notice Id for the selected opportunity type already exists | Cannot publish an existing published record | Publish
Notice ID | Opportunity cannot be updated. | Cannot revise and a previously revised Opportunity | Revise
Notice ID | Notice Id is required | Notice ID is required | All
Opportunity Type | Opportunity type is required | Opportunity type is required | Create
Organization Id | Contracting office is required | FH Org Id/AAC code is required | Publish
Organization Id | Invalid OrganizationId provided | Invalid Organization Id | Create
Point Of Contact Type | $.data.pointOfContact[0].type: does not have a value in the enumeration [primary, secondary, owner] | Point of Contact Type is required | Create
Primary Contact Full Name | Primary Contact - Name is required | Point of Contact Full Name is required | Publish
Title | Title is required | Title is required | Publish

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you are unable to post an an issue in GitHub, email us at example@gsa.gov.

<p><small><a href="#">Back to top</a></small></p>

