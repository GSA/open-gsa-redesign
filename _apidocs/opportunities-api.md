---
title: Opportunities API
banner-heading: Opportunities API
---

## Overview

The Public Opportunities API will facilitate users to utilize the Contract Opportunities REST API capability in the JSON format.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started 

###	Authentication

#### System Accounts

In order to utilize the Contract Opportunities REST API, a valid government System account must exist in the beta.SAM.gov system registered at the Office Location level in the hierarchy. To perform an operation, User account that is registered with beta.sam.gov should have either ‘Contracting Officer’ role or ‘Contracting Specialist’ role. 
To perform an operation, System Account should have Read and Write permissions under Contract Opportunity Domain
 
__Note:__ To submit any opportunity for an office, user should provide office org key or AAC (procurement/non-procurement). 

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
| __f__	            | Foreign Government Standard                   |
| __i__	            | Intent to Bundle Requirements (DoD- Funded)   |
| __a__	            | Award Notice                                  |
| __m__	            | Modification                                  |
| __u__	            | Justification and Authorization               |

<p><small><a href="#">Back to top</a></small></p>

#### Set-Aside Values
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field. 

Refer below table for valid Set-Aside values:

| Modern Set-Aside Values                                                            |
| --------------------------------------------------------------------------------- |
| Total Small Business Set-Aside (FAR 19.5)                                         |
| Partial Small Business Set-Aside (FAR 19.5)                                       |
| 8(a) Set-Aside (FAR 19.8)                                                         |
| 8(a) Sole Source (FAR 19.8)                                                       |
| Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13)               |
| Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13)             |
| Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)      |
| Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14)    |
| Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15)                   |
| Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15)                 |
| Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15)            |
| Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15)          |
| Local Area Set-Aside (FAR 26.2)                                                   |

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

## API Description

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
Authorization | Header |  String | **Yes** | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | **Yes** | System Account API Key with Read & Write permission
Request Json | Body | Json | **Yes** | todo Refer Section 5.1 

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
Authorization | Header |  String | **Yes** | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | **Yes** | System Account API Key with Read & Write permission
id | query | String | **Yes** | Notice Id from create draft
Request Json | Body | Json | **Yes** | <span style="color:red">**todo Refer Section 5.2**</span>

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
2 | Api_key | Yes |  | This field should not be empty and should have System Account api_key which has read and write permission. <br/> 1. If this field is empty<br/>2. If wrong api_key is given. | 1. 400 - Missing request header 'api_key' for method parameter of type String<br/>2. 401- Please provide valid Autherization Email & Api key
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
Authorization | Header |  String | **Yes** | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | **Yes** | System Account API Key with Read & Write permission
id | query | String | **Yes** | Published Notice Id
Request Json | Body | Json | **Yes** | todo : Refer Section 5.3

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
Authorization | Header |  String | **Yes** | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | **Yes** | System Account API Key with Read & Write permission
id | query | String | **Yes** | Revised Notice Id
Request Json | Body | Json | **Yes** | todo : Refer Section 5.4

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
Authorization | Header |  String | **Yes** | This header value accepts only Contracting officer or Contracting specialist’s email id
api_key | query | String | **Yes** | System Account API Key with Read & Write permission
id | query | String | **Yes** | Notice Id
postedFrom | Body | Json | **Yes** | Posted From - Date

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

<!---
### Delete Opportunity

<p><small><a href="#">Back to top</a></small></p>

### Get List of Opportunity

<p><small><a href="#">Back to top</a></small></p>

### Get Opportunity by Id

## API Contract JSON

### Create/Update Opportunity Contract JSON

<p><small><a href="#">Back to top</a></small></p>

#### Group 2    Add Interested Vendor List (IVL) --(Future)

<p><small><a href="#">Back to top</a></small></p>

#### Group 2  Get IVL  --(Future)

<p><small><a href="#">Back to top</a></small></p>

#### Group 2 Update IVL Settings --(Future)

<p><small><a href="#">Back to top</a></small></p>

#### Group 2 Delete Vendor for Opportunities--(Future)

<p><small><a href="#">Back to top</a></small></p>

#### Group 2 Un-Cancel Opportunity --(Future)

<p><small><a href="#">Back to top</a></small></p>

#### Group 2  Get Attachments --(Future)

<p><small><a href="#">Back to top</a></small></p>
--->


## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/opportunities-api.json">Open API specification file for the Sample API</a>

<p><small><a href="#">Back to top</a></small></p>

## FAQ


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you are unable to post an an issue in GitHub, email us at example@gsa.gov.

<p><small><a href="#">Back to top</a></small></p>

