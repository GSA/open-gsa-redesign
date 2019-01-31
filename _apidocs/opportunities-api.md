---
title: Opportunities API
banner-heading: Opportunities API
---

## Overview

The Public Opportunities API will facilitate users to utilize the Contract Opportunities REST API capability in the JSON format.
<p><small><a href="#">Back to top</a></small></p>

## Getting Started 

###	Authentication

#### System Account Authentication
In order to utilize the Contract Opportunities REST API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read and Write permissions under Contract Opportunity domain.

#### User Account Authorization
In order to perform an Opportunity API operation, the following is required:
* beta.SAM.GOV user account with either ‘Contracting Officer’ role or ‘Contracting Specialist’ role. <br/>
**Note:** To submit any opportunity for an office, user should provide Federal Hierarchy (FH) Organization Id or Activity Address Code (AAC) (procurement/non-procurement). 


<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta Data

#### Notice Types

The API includes specific methods to submit each of the base notice types (i.e. presolicitation, combined/synopsis, award, etc.). You will find these outlined in the sections below.

__Notice Data Type:__

| Code              | Description                                   |
| ----------------- | --------------------------------------------- |
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

#### Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/create
Summary | Create a new Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
Request Json | Body | Json | Yes | [Create_Update_Opportunity_Contract_Json](#create-update-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | String | Create draft Opportunity successful | return response is noticeid

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can create Draft Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/>If this field is empty	| 401- Please provide valid Authorization Email & Api key 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> If this field is empty | 401- Please provide valid Authorization Email & Api key 
3 | Request Json | Yes |  | This field should not be empty and should have Request Json with mandatory values in it <br/>1. If Request Json is empty<br/> 2. If invalid Json is given | 1. 400:["$.data: is missing but it is required"] <br/> 2. Error processing POST request" 
4 | Naics type | Yes | primary | Naics type default value is primary which needs to be entered by the user <br/> 1. If Naics type is missing | 1. 400:["$.data.naics[0].type: does not have a value in the enumeration [Primary]"]

#### Examples

<details>
<summary>ITB Request Json Example</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "ITB_Test1",
    "title": "TST_T1",
    "type": "i",
    "classificationCode": "13",
    "organizationId": "100120624",
    "organizationLocationId": "",
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
<summary>PRESOL Request Json Example</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "PRESOLTest1",
    "title": "PRESOLTEST_T1",
    "type": "p",
    "classificationCode": "13",
    "organizationId": "100120624",
    "organizationLocationId": "",
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
<summary>COMBINE Request Json Example</summary>
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

#### Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/publish/{id}
Summary | Publish a new Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Notice Id from create draft
Request Json | Body | Json | Yes | [Publish_Opportunity_Contract_Json](#publish-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | String | Publish Opportunity successful | return response is no content

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can publish an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/>1. If this field is empty<br/>2. If wrong email is given | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" <br/> 2. 500 - "Encountered error authenticating user."
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty<br/>2. If wrong api_key is given. | 1. 400 - Missing request header 'api_key' for method parameter of type String<br/>2. 401- Please provide valid Authorization Email & Api key
3 | Request Json | Yes |  | This field should not be empty and should have Request Json with mandatory values in it <br/>1. If Request Json is empty<br/> 2. If invalid Json is given | 1.400 -"Invalid request provided.", "error_details": ["$.reason: null found, string expected", "$.requestType: null found, string expected", "$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]"]<br/> 2. Error processing POST request" 
4 | Award Number  | Yes | Only for ITB, Contract Award Number is a required field. <br/>Note: Contract Award Number is not a required field for any other notice types| If Contract Award Number is missing | 400 - "Invalid request provided." "error_details": [ "Award Details Section - Contract Award Number is a required field."]
5 | Notice Id  | Yes | | If republish the same opportunity | 400 -"Invalid request provided.", "error_details": [ "Notice Id for the selected opportunity type already exists"]
6 | Request Json | Yes | | Inactive Policy, Interested Vendors List Add, Additional reporting, Description fields are required for all notice types <br/>1.If Inactive Policy, Interested Vendors List Add, Additional reporting, Description fields are missing values | 1. 400 - Invalid request provided.","error_details":["This opportunity cannot be published. Inactive Policy is a required field.","This opportunity cannot be published. Interested Vendors List Add is a required field.","This opportunity cannot be published. Additional reporting is required.","Description is required"]
7 | Request Json | Yes (For the below Notice types AWARD, ITB, JA) | | Contract Award Date and Contract Award Number are required fields <br/> 1.If invalid Contract Award Date is given and missing Contract Award Number | 1. 400 - "Invalid request provided.","error_details":["Award Details Section - Contract Award Date provided is in an invalid format.","Award Details Section - Contract Award Number is a required field."]


#### Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity

#### Endpoint Description

------- | -------
Request Type | POST
Endpoint | /opps/v1/api/revise/{id}
Summary | Revise an existing Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Published Notice Id
Request Json | Body | Json | Yes | [Revise_Opportunity_Contract_Json](#revise-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | String | Revise an Opportunity is successful | return response is noticeid

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can Revise an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty | 1. Error code: 401 Please provide valid Authorization Email & Api key 
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty | 1. Please provide notice Id
4 | Request Json | Yes |  | 1. If Request Json is missing <br/>2. If wrong Json request is given | 1. 400-error_details":["$.reason: null found, string expected","$.requestType: null found, string expected","$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]" <br/>2. 400 -"Opportunity cannot be updated."
5 | id| Yes |  | System should not allow the revise more than once for the same notice id 1.If revised noticeid is being used for the revision | 400 - "Opportunity cannot be updated."

#### Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Update Opportunity

#### Endpoint Description

------- | -------
Request Type | PATCH
Endpoint | /opps/v1/api/update/{id}
Summary | Update an Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Revised Notice Id
Request Json | Body | Json | Yes | [Create_Update_Opportunity_Contract_Json](#create-update-json)

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | String | Update an Opportunity is successful | return response is noticeid

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can Revise an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/> 1. If this field is empty | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty | 1. Error code: 401 Please provide valid Authorization Email & Api key 
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty | 1. Please provide notice Id
4 | Request Json | Yes |  | 1. If Request Json is missing <br/>2. If wrong Json request is given | 1.400- "$.data: is missing but it is required" <br/>2. 400 - "Opportunity cannot be updated."

#### Examples

<details>
<summary>ITB Request Json Example</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "ITB_Test1_Update",
    "title": "TST_T1_update",
    "type": "i",
    "classificationCode": "13",
    "organizationId": "100120624",
    "organizationLocationId": "",
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
<summary>PRESOL Request Json Example</summary>
<p>
<code><pre>
{
  "data": {
    "solicitationNumber": "PRESOLTest1_update",
    "title": "PRESOLTEST_T1_update",
    "type": "p",
    "classificationCode": "13",
    "organizationId": "100120624",
    "organizationLocationId": "",
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
<summary>COMBINE Request Json Example</summary>
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

### History Opportunity

#### Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/history/{id}
Summary | History of an Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Notice Id
postedFrom | Body | Json | Yes | Posted From - Date

<p><small><a href="#">Back to top</a></small></p>

#### Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
content | Json | Update an Opportunity is successful | return response is noticeid
history | Json |  | 
history.parent_notice_id | string |  | Parent notice id
history.cancel_notice | string |  | Number of cancel notice id
history.procurement_type | string |  | Notice type
history.archive_notice | string |  | Number of archive notice
history.request.type | string |  | Example: Request type: submit
history.action_type | string |  | Example: Action type: publish
history.action_date | string | date and time | Date and time of the action type Example: YYYY-MM-DDTHH:MM:SS-05:00
history.title | string |  | title
history.index | string |  | index
history.related_notice_id | string |  | It will bring if there is any related notice id
history.notice_id | string |  | Notice id
History.deleted | string |  | Number of deletion
history.solicitation_number | string | Solicitation Number  | History of that Solicitation Number
History_revision_reason | string |  | It will bring if user entered any revision reason
history.posted_date | string | Date and time | Posted date and time Example: YYYY-MM-DDTHH:MM:SS-05:00
history.latest | string | Service will bring the all the opportunity but with latest=1 | 
_links | Json |  | 
_links.self | Json |  | 
_links.self.href | string | Array of links | Document Link
_links.self.templated | boolean | True or false | Service will bring true or false


#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can get history of an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/> 1. If this field is empty | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty <br/> 2. If invalid api key provided<br/> 3. If api_key has no read permission | 1. Error code: 401 Please provide valid Authorization Email & Api key<br/>2.Error code: 401 Please provide valid Authorization Email & Api key<br/>3. Insufficient privileges to perform operation!
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty <br/> 2. If invalid notice id is given| 1. Please provide notice Id <br/> 2.404 - Error in getting opportunity

#### Examples

<details>
<summary>History Opportunity Example</summary>
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

#### Endpoint Description

------- | -------
Request Type | DELETE
Endpoint | /opps/v1/api/delete/{id}
Summary | Delete an Opportunity
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Published Notice Id

<p><small><a href="#">Back to top</a></small></p>

#### Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | String | Opportunity is successfully deleted | return response is noticeid

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can Revise an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty | 1. Error code: 401 Please provide valid Authorization Email & Api key 
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty | 1. Error code: 401 Please provide notice id

#### Examples

_NA_

<p><small><a href="#">Back to top</a></small></p>

### Get List of Opportunity

#### Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/search
Summary | Get list of Opportunities
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
archivedFrom | query | Date-time | No | Archive From Date and Time
archivedTo | query | Date-time | No | Archive To Date and Time
awardNumber | query | String | No | Award Number
cancelled | query | Boolean | No |  True or False
doNumber | query | String | No | Delivery Order number
includeCount | query | Boolean | No | True or false
keyword | query | String | No | Enter any keyword from the description
latest | query | Boolean | No | True or false
links | query | Boolean | No | Array Of links
noticeIds | query | Array[String] | No | Unique ID found from getList call or ID’s for changes found in getNoticeData call.
noticeType | query | Array[String] | No | Valid values: "p" - for Presolicitation, "k" - for Combined Synopsis/Solicitation, "r" - for Sources Sought, "g" - for Sale of Surplus Property, "s" - for Special Notice, "i" - for Intent to Bundle Requirements (DoD- Funded), "a" - for Award Notice, "u" - for Justification and Authorization
organizationId | query | Array[String] | No | FH Org Id/AAC code of the office where an opportunity is being submitted
page | query | Integer | No | Page number
parentNotice | query | Array[String] | No | ParentNotice Id
postedFrom | query | Date-time | No | Posted From Date and time YYYYMMDD
postedTo | query | Date-time | No | Posted To Date and time YYYYMMDD
relatedNotice | query | Array[String] | No | RelatedNotice id
responseFrom | query | Date-time | No | ResponseFrom
responseTo | query | Date-time | No | ResponseTo
size | query | Integer | No | Size limit is 10 by default
solNumber | query | String | No | Solicitation Number
sortBy | query | String | No | Sort

<p><small><a href="#">Back to top</a></small></p>

#### Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
data | Json | List of Opportunities are available in Json format | All the opportunities are listed out in the response
type | String | Base Notice Type | Valid values: "p" - for Presolicitation, "k" - for Combined Synopsis/Solicitation, "r" - for Sources Sought, "g" - for Sale of Surplus Property, "s" - for Special Notice, "i" - for Intent to Bundle Requirements (DoD- Funded), "a" - for Award Notice, "u" - for Justification and Authorization
solicitation Number | String |  | Solicitation Number
title | String |  | Title of the Opportunity
organizationId | String |  | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | String |  | Class-Code
naics | JSON |  | 
naics.code | String |  | NAICS Code
naics.type | String | Primary  | NAICS type
flags | JSON |  | 
flags.code | string | Recovery act | True or False
flags.IsSelected | boolean | Correction of previous J&A | true or false. If correcting a previously submitted j&a notice, specify true and the system will lookup the j&a by award number and sol number if applicable.
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
archive.type | string | Auto15/Auto30/manual | Archive Type
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
solicitation.deadlines.response | Date |  | Solicitation deadline date Format: YYYY-MM-DDTHH:MM:SS-05:00
solicitation.deadlines.responseTz | string |  | Solicitation deadlines response Time zone
award | JSON |  | 
award.date | date | Yes (only for ITB, JA and Award) | Award Date
award.number | string | Yes (only for ITB, JA and Award) | Award Number
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

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can get list of Opportunities_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/> 1. If this field is empty | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty <br/> 2. If invalid api key provided<br/> 3. If api_key has no read permission | 1. Error code: 401 Please provide valid Authorization Email & Api key<br/>2.Error code: 401 Please provide valid Authorization Email & Api key<br/>3. Insufficient privileges to perform operation!
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty <br/> 2. If invalid notice id is given| 1. Please provide notice Id <br/> 2.404 - Error in getting opportunity

#### Examples

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

#### Endpoint Description

------- | -------
Request Type | GET
Endpoint | /opps/v1/api/opportunities/{id}
Summary | Get Opportunity by Id
Consumes | application/*
Produces | Json

#### Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  String | Yes | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | Yes | System Account API Key with Read & Write permission
id | query | String | Yes | Notice Id
latest | query | Boolean | No | True or False (default)

#### Responses

Response Element | Response Type | Reason  | Description
-----------------|---------------|---------|------------
type | String | Base Notice Type | Valid values: "p" - for Presolicitation, "k" - for Combined Synopsis/Solicitation, "r" - for Sources Sought, "g" - for Sale of Surplus Property, "s" - for Special Notice, "f" - for Foreign Government Standard, "i" - for Intent to Bundle Requirements (DoD- Funded), "a" - for Award Notice, "m" - for Modification, "u" - for Justification and Authorization
solicitation Number | String |  | Solicitation Number
title | String |  | Title of the Opportunity
organizationId | String |  | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | String |  | Class-Code
naics | JSON |  | 
naics.code | String |  | NAICS Code
naics.type | String | Primary  | NAICS type
flags | JSON |  | 
flags.code | string | Recovery act | True or False
flags.IsSelected | boolean | Correction of previous J&A | true or false. If correcting a previously submitted j&a notice, specify true and the system will lookup the j&a by award number and sol number if applicable.
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
archive.type | string | Auto15/Auto30/manual | Archive Type
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
solicitation.deadlines.response | Date |  | Solicitation deadline date Format: YYYY-MM-DDTHH:MM:SS-05:00
solicitation.deadlines.responseTz | string |  | Solicitation deadlines response Time zone
award | JSON |  | 
award.date | date | Yes (only for ITB, JA and Award) | Award Date
award.number | string | Yes (only for ITB, JA and Award) | Award Number
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

#### Validation Rules and Error messages
Individual business rules per field are listed across each of the fields in below table.  

**_Note: 1. Through this service, users can get history of an Opportunity_**

\# | Element Name | Required | Character Limit / Restrictions | Business Rules | Error Messages with respect to business rules (If any)
---|--------------|----------|--------------------------------|----------------|-------------------------------------------------------|
1 | Authorization | Yes | Email id | This field should not be empty and also should have Contracting officer or Contracting Specialist email id <br/> 1. If this field is empty | 1. 400 - "Missing request header 'Authorization' for method parameter of type String" 
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty <br/> 2. If invalid api key provided<br/> 3. If api_key has no read permission | 1. Error code: 401 Please provide valid Authorization Email & Api key<br/>2.Error code: 401 Please provide valid Authorization Email & Api key<br/>3. Insufficient privileges to perform operation!
3 | id| Yes |  | This field should not be empty, Valid notice id should be given <br/> 1. If this field is empty <br/> 2. If invalid notice id is given| 1. Please provide notice Id <br/> 2.404 - Error in getting opportunity

#### Examples

<details>
<summary>Modification response by notice Id</summary>
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

## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/opportunities-api.json">Open API specification file for the Sample API</a>


<p><small><a href="#">Back to top</a></small></p>

## API Contract JSON

### Create/Update Opportunity Contract JSON

<span style="color:red">Note:  award.awardee.manual value should be “false” for any notice types except for ITB, JA and Award</span>

<a id="create-update-json" href="v1/Create_Update_Opportunity_Contract_Json.txt">Create_Update_Opportunity_Contract_Json.txt</a>

#### Create/Update Opportunity Contract JSON Field Description

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
data | JSON |  |  | 
type | String | Base Notice Type | Yes | Valid values: "p" - for Presolicitation, "k" - for Combined Synopsis/Solicitation, "r" - for Sources Sought, "g" - for Sale of Surplus Property, "s" - for Special Notice, "i" - for Intent to Bundle Requirements (DoD- Funded), "a" - for Award Notice, "u" - for Justification and Authorization
solicitation Number | String |  | Yes | Solicitation Number
title | String |  |  | Title of the Opportunity
organizationId | String |  |  | FH Org Id/AAC code of the office where an opportunity is being submitted
classificationCode | String |  | No | Class-Code
naics | JSON |  |  | 
naics.code | String |  | No | NAICS Code
naics.type | String | Primary  | Yes | NAICS type <br/>Note: ‘P’ must be in upper case
flags | JSON |  |  | 
flags.code | string | Recovery act | No | This is a recovery or Reinvestment Act Action
flags.IsSelected | boolean | True/false | No | True or False
pointOfContact | JSON |  |  | 
pointOfContact.type | string | primary | Yes | Contact Type <br/>Note: ‘p’ must be in lower case
pointOfContact.title | string |  | No | Contact title
pointOfContact.fullname | string |  | No | Contact Full Name
pointOfContact.email | string |  | No | Contact email
pointOfContact.phone | string |  | No | Contact Phone
pointOfContact.fax | string |  | No  | Contact Fax
placeOfPerformance | JSON |  |  | 
placeOfPerformance.streetAddess | string |  | No | Pop Address
placeOfPerformance. streetAddess2 | string |  | No | Pop Address2
placeOfPerformance.city | JSON |  | No | Pop City
placeOfPerformance.city.code | string |  | No | Pop City code
placeOfPerformance.city.name | string |  | No | Pop City name
placeOfPerformance.city.state | JSON |  | No | Pop City state
placeOfPerformance.city.state.code | string |  | No | Pop city state code
placeOfPerformance.city.state.name | string |  | No | Pop city state name
placeOfPerformance.country | JSON |  | No | Pop Country
placeOfPerformance.country.code | string |  | No | Pop Country Code
placeOfPerformance.country.name | string |  | No | Pop Country name
placeOfPerformance.zip | string |  | No | Pop Country zip
archive | JSON |  |  | 
archive.type | string | Auto15/Auto30/manual | No | Archive Type
archive.date | date |  | No | Archive Date
permissions | JSON |  |  | 
permissions.ivl | JSON |  |  | 
permissions.ivl.create | boolean |  | No | permissions.ivl.create
permissions.ivl.read | boolean |  | No | permissions.ivl.read
permissions.ivl.update | boolean |  | No | permissions.ivl.update
permissions.ivl.delete  | boolean |  | No | permissions.ivl.delete
solicitation | JSON |  |  | 
Solicitation.setAside | string |  | No | Solicitation setAside
Solicitation.deadlines | JSON |  |  | 
Solicitation.deadlines.response | Date | Yes (only for Combine, ITB, JA and award)  | No | Solicitation deadline date
award | JSON |  |  | 
award.date | date | Yes (only for ITB, JA and Award) | No | Award Date
award.number | string | Yes (only for ITB, JA and Award) | No | Award Number
award.deliverOrderNumber | string |  | No | Award Deliver Order Number
award.amount | Number |  | No | Award Amount
award.lineitemNumber | string |  | No | Award Line item Number
award.awardee | JSON |  |  | 
award.awardee.manual | string | Boolean True or false | Yes | Awardee
award.awardee.name | string |  | No | Awardee name
award.awardee.duns | string |  | No | Awardee Duns
award.awardee.location | JSON |  |  | 
award.awardee.location.streetAddress | string |  | No | Awardee Street address 1
award.awardee.location.streetAddress2 | string |  | No | Awardee Street address 1
award.awardee.location.city | string |  | No | Awardee city
award.awardee.location.city.code | string |  | No | Awardee city code
award.awardee.location.city.name | string |  | No | Awardee city name
award.awardee.location.state | JSON |  |  | Awardee State
award.awardee.location.state.code | string |  | No | Awardee State code
award.awardee.location.state.name | string |  | No | Awardee State name
award.awardee.location.country | JSON |  |  | Awardee Country
award.awardee.location.country.code | string |  | No | Awardee Country code
award.awardee.location.country.name | string |  | No | Awardee Country name
award.awardee.location.zip | string |  | No | Awardee Country zip
justificationAuthority | JSON |  |  | 
justificationAuthority.<br/>modificationNumber | string |  | No | justificationAuthority modification number
justificationAuthority.authority | string |  | No | justificationAuthority authority


<p><small><a href="#">Back to top</a></small></p>

### Publish Opportunity Contract JSON

<span style="color:red">Note:Request type must be “publish_request”; Request reason is user inputted text string</span>

<a id="publish-json" href="v1/Publish_Opportunity_Contract_Json.txt">Publish_Opportunity_Contract_Json.txt</a>

<p><small><a href="#">Back to top</a></small></p>

### Revise Opportunity Contract JSON

<span style="color:red">Note: Request type must be “update_publish_request”; Request reason is user inputted text string</span>

<a id="revise-json" href="v1/Revise_Opportunity_Contract_Json.txt">Revise_Opportunity_Contract_Json.txt</a>

<p><small><a href="#">Back to top</a></small></p>

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you are unable to post an an issue in GitHub, email us at example@gsa.gov.

<p><small><a href="#">Back to top</a></small></p>

