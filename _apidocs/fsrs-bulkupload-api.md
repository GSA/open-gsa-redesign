---
title: SAM.gov FFATA Subaward Reporting Bulk Upload API 
banner-heading: SAM.gov FFATA Subaward Reporting Bulk Upload API
---

## Overview

The API for FFATA Subaward Reporting will allow authorized users to submit FFATA Reports for their Contracts or Grants. Using this API, users will be able to file multiple FFATA reports at once. 

**Note:** The specifications on this page are for a future API.  Check back here or be in contact with IAE for the release date and testing session.

**API Version: v1.0**

## Getting Started

FFATA Subaward Reporting Bulk Upload API can be accessed from Production or Alpha via the following endpoints:

* Production: https://api.sam.gov
* Alpha: https://api-alpha.sam.gov

**REST API Workflow Chart**

To view the current workflow of REST APIs, refer below file:
* Workflow Chart  <br><a href="v1/Opportunity Management REST Workflow Updated.pdf" download="Opportunity Management REST Workflow Updated">Download</a>

###	Authentication and Authorization

To begin using this API, you will need to register for a System Account and obtain an API Key. After registration, you will need to provide this API key in the <i>x-api-key</i> HTTP header with every API request.
* Registered users (Federal and non-federal) with appropriate roles for FFATA under Entity Reporting domain can request for a system account with ‘read Sensitive’ or ‘read FOUO’ permissions to be able to view FFATA reports. 
* Registered users (Federal and non-federal) with appropriate roles for FFATA under Entity Reporting domain can request for a system account with ‘Write Sensitive’  permissions to be able to create, update and/or delete FFATA reports.
* If a user has the appropriate roles for FFATA reporting, and therefore satisfies the above registration criteria, they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “New Account” by navigating from the widget and fill out the required sections with appropriate FFATA reporting permissions and required information..
* The requested system account will then be sent for an approval. After approval, the user will be notified via an email and they will also be able to see the status of their request in the System Account widget.

#### Generating a System Account API Key
In order to utilize the FFATA API endpoints, users will need to generate the System account API Key to make API calls.
* Once the system account is approved as per the instructions above, the user can select “Go to System Accounts” in the widget from their workspace and enter a new system account password. 
* After setting up the password for the system account, the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the API Key. 
* This API Key will be used for all API calls as described in this documentation.

#### System Account Authentication
In order to utilize the FFATA Subaward Reporting Bulk Upload API, the following is required:
* Valid SAM.gov federal government system account or non-fed user account with relevant FFATA permissions under Entity Reporting domain.

### Type of Connection Validation 
All REST API requests will be validated against the Type of Connection within the system account profile. All requests without "REST API" type of connection in the system account profile will be rejected with an error.

### IP Address Validation 
All REST API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

#### User Account Authorization
To be able to perform the various operations provided under the FFATA API, users will need to have permissions under ‘Entity Reporting’ domain for FFATA to perform various operations.The permissions required for operations by role are listed in the table below:

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

Role/Permission    | Submit FFATA Report | Update FFATA Report | Get FFATA Report | Delete FFATA Report
-------------|---------------|---------------------|---------------------|------------------------------
Create and delete permission for FFATA under Entity Reporting | Yes | Yes | Yes | Yes
Read permission for FFATA under Entity Reporting | No | No | Yes | No

<p><small><a href="#">Back to top</a></small></p>

### Lookup/Meta-Data

#### Recovery Model Questions (Compensation Questions)

To submit a FFATA Report, compensation questions for the Prime, as well as sub-awardee need to be responded to. The table below outlines the Compensation Questions and their corresponding codes to be used in the requests.

| Code              | Description                                   |
| ----------------- | --------------------------------------------- |
| __0__	            | In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number,belongs) receive (1) 80 percent or more of your annual gross revenues in U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, sub-contracts, loans, grants, subgrants, and/or cooperative agreements? |
| __1__	            | Does the public have access to information about the compensation of the executives in your business or organization (the legal entity to which this specific CCR record, represented by a UNIQUE ENTITY ID (SAM) number, belongs) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m(a), 78o(d)) or section 6104 of the Internal RevenueCode of 1986?|

<p><small><a href="#">Back to top</a></small></p>

#### Report Status

The table below lists the statuses for the FFATA Reports.

Code | Value
-----|-----------------
acc     | Submitted
drt     | Draft/Work-In-Progress

<p><small><a href="#">Back to top</a></small></p>

## GENC Standardization
SAM.gov uses GENC Standardization of country and administrative data to ensure no countries or states are being inserted into SAM that are not correctly recognized by the United States. To ensure any country/state data that is input by the users through FFATA Subaward reporting meets these standards, validations will be run when receiving this data. Please refer to the error messages section for specific details for these errors.

Refer : 
https://geonames.nga.mil/geonames/GeographicNamesSearch/

API Fields

Field Name | Data Source  | Valid Statuses  | Input Type
---------------|------------|----------|------------
Country Code |  Country_Code MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources | Active, Inactive (GET calls Only) | Three Character
Country Name |  Full_Name' MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources |   | TEXT
State | State MUST come from https://geonames.nga.mil/geonames/GNSHome/index.html and only allowed sources   | Listed from the selected country | Two Character

<p><small><a href="#">Back to top</a></small></p>

## Version Control (need to determine if we need this section)

TBD  

## FSRS Subaward Reporting Bulk Upload API Request and Responses
This API has 8 endpoints as outlined below. 
Endpoint Name | Short Description |
-----|-----------------
Submit FFATA Report (Contracts)     | Can be used to submit FFATA Subaward Reports for reporting on one or more Contracts.
Submit FFATA Report (Grants)     | Can be used to submit FFATA Subaward Reports for reporting on one or more Grants.
Update FFATA Report (Contracts)     | Can be used to update one or more previously submitted FFATA Subaward Reports for Contracts.
Update FFATA Report (Grants)     | Can be used to update one or more previously submitted FFATA Subaward Reports for Grants.
Delete FFATA Report (Contracts)     | Can be used to delete one or more previously submitted FFATA Subaward Reports for Contracts.
Delete FFATA Report (Grants)     | Can be used to delete one or more previously submitted FFATA Subaward Reports for Grants.
Get FFATA Report (Contracts)     | Can be used to get one or more previously submitted FFATA Subaward Reports for Contracts. 
Get FFATA Report (Grants)     | Can be used to get one or more previously submitted FFATA Subaward Reports for Grants.

The following section describes each of the above endpoints in detail.

### Submit FFATA Report (Contracts)

------- | ------- |
**Request Type** | POST
**URL** | /acquisition/v1/FFATA
**Summary** | Submit a FFATA report for Contracts
**Consumes** | application/json
**Produces** | NA
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Contract FFATA JSON](#)

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
        "title": "Create Consolidate/(Substantially) Bundle notice",
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
<summary>Request to create draft Consolidate/(Substantially) Bundle Notice_v2</summary>
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
        "title": "Create Consolidate/(Substantially) Bundle notice",
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
<summary>Request to create draft Consolidate/(Substantially) Bundle Notice_v3</summary>
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
        "title": "Create Consolidate/(Substantially) Bundle notice",
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
        ],
        "farCases": ["FAR 7.107-2", "FAR 7.107-3", "FAR 7.107-4"]
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

### Submit FAATA Grant


------- | -------
**Request Type** | POST
**URL** | /assistance/v1/FFATA
**Summary** | Using this endpoint, users will be able to submit a FFATA report for Grants
**Consumes** | application/JSON
**Produces** | NA
**Active Versions** | v1

**Please [Refer Create and Update Opportunity Contract JSON](#) to ensure that all required fields in "Required (Publish)" is met to publish opportunity**

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
201 | string | Report was successfully created | Report successfully submitted

Examples

<details>
<summary>Submit FAATA Grant</summary>
<p>
<code><pre>
{
 "assistanceFFATAData": {
 "primeEntityInformation": [
 {
 "primeFAIN": "1001KS1420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "9999",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ],
 "subAssistanceDataList": [
 {
 "subAssistanceNumber": "XX-YY-00008",
 "uei": "ABC123456789",
 "eftIndicator": "1111",
 "subAssistanceDollars": "100000",
 "subAssistanceObligationOrActionDate": "2010-10-01",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "1800 F Street, NW",
 "streetAddress2": "",
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "topPayEmployees": [
 {
 "full_name": "John White",
 "salary": "100000"
 },
 {
 "full_name": "Employee Green",
 "salary": "120000"
 },
 {
 "full_name": "Employee Red",
 "salary": "96000"
 },
 {
 "full_name": "Employee Orange",
 "salary": "250000"
 },
 {
 "full_name": "Employee Blue",
 "salary": "290000"
 }
 ]
 }
 ]
 },
 {
 "primeFAIN": "1001ZZZ420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "8978",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "subAssistanceDataList": [
 {
 "subAssistanceNumber": "XX-YY-12345",
 "uei": "zzz123456789",
 "eftIndicator": "1234",
 "subAssistanceDollars": "150000",
 "subAssistanceObligationOrActionDate": "2023-04-17",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "Test place",
 "streetAddress2": "",
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "GA",
 "name": "Georgia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 },
 {
 "subAssistanceNumber": "AA-YY-12345",
 "uei": "XYZ123456789",
 "eftIndicator": "4455",
 "subAssistanceDollars": "150055",
 "subAssistanceObligationOrActionDate": "2023-04-17",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "street 123",
 "streetAddress2": "alley 4",
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "67890"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 }
 ]
 }
 }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update FAATA Contract 


------- | -------
**Request Type** | PUT
**URL** | /acquisition/v1/FFATA
**Summary** | This endpoint can be used to update a previously submitted contracts report
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Update FAATA Contract JSON](#update-faata-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
201 | string |  Report successfully updated| 

Examples

<details>
<summary>Update FAATA Contract</summary>
<p>
<code><pre>
 {
 "contractFFATAData": {
 "primeEntityInformation": [
 {
 "contractNumber": "W9123823PTEST",
 "idvReferenceNumber": "GSTEST001",
 "reportPeriodMon": "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "2100",
 "treasurySymbol": "12-3456",
 "programTitle": "Title of the program",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "subAwardDataList": [
 {
 "subAwardNumber": "2303-TEST-05-0",
 "subAwardDollars": "100000",
 "periodOfPerformanceStartDate": "2023-05-14",
 "uei": "ABC987654321",
 "overallDescription": "tEST Description",
 "placeOfPerformance": {
 "streetAddress": "1800 F Street, NW",
 "streetAddress2": "",
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "topPayEmployees": [
 {
 "full_name": "John White",
 "salary": "100000"
 },
 {
 "full_name": "Employee Green",
 "salary": "120000"
 },
 {
 "full_name": "Employee Red",
 "salary": "96000"
 },
 {
 "full_name": "Employee Orange",
 "salary": "250000"
 },
 {
 "full_name": "Employee Blue",
 "salary": "290000"
 }
 ]
 },
 {
 "subAwardNumber": "2303-TEST-06-1",
 "subAwardDollars": "80000",
 "periodOfPerformanceStartDate": "2023-05-14",
 "uei": "XYZ987654321",
 "overallDescription": "Test Description2",
 "placeOfPerformance": {
 "streetAddress": "street 123",
 "streetAddress2": "alley 4",
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "67890"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 },
 {
 "contractNumber": "W91238PTESTTWO",
 "idvReferenceNumber": "",
 "reportPeriodMon": "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "9700",
 "treasurySymbol": "01-9999",
 "programTitle": "Title of the program",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ],
 "subAwardDataList": [
 {
 "subAwardNumber": "9999-TEST",
 "subAwardDollars": "800000",
 "periodOfPerformanceStartDate": "2023-04-28",
 "uei": "ABC999999999",
 "overallDescription": "Test Description",
 "placeOfPerformance": {
 "streetAddress": "Test place",
 "streetAddress2": "",
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "GA",
 "name": "Georgia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 }
 ]
 }
 }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### Update FAATA Report Grant


------- | -------
**Request Type** | PUT
**URL** | /assistance/v1/FFATA
**Summary** | This endpoint can be used to update a previously submitted grants report
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer Revise Opportunity Contract JSON](#revise-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report successfully updated | 

Examples

<details>
<summary>Update Grant</summary>
<p>
<code><pre>
{
   "assistanceFFATAData": {
      "primeEntityInformation": [
         {
            "primeFAIN": "1001KS1420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "9999",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
                   "isSelected": "false"
                 }                                 
             ],
            "subAssistanceDataList": [
               {
                  "subAssistanceNumber": "XX-YY-00008",                 
                  "uei": "ABC123456789",
                  "eftIndicator": "1111",
                  "subAssistanceDollars": "100000",
                  "subAssistanceObligationOrActionDate": "2010-10-01",
                  "overallDescription": "My Description",
                  "placeOfPerformance": {
                     "streetAddress": "1800 F Street, NW",
                     "streetAddress2": "",
                     "city": {
                        "code": "1000",
                        "name": "Alexandria"
                     },
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
                        "isSelected": "true"
                      }                                          
                  ],
                  "topPayEmployees": [
                     {
                        "full_name": "John White",
                        "salary": "100000"
                     },
                     {
                        "full_name": "Employee Green",
                        "salary": "120000"
                     },
                     {
                        "full_name": "Employee Red",
                        "salary": "96000"
                     },
                     {
                        "full_name": "Employee Orange",
                        "salary": "250000"
                     },
                     {
                        "full_name": "Employee Blue",
                        "salary": "290000"
                     }                                         
                  ]
               }
            ]
         },
         {
            "primeFAIN": "1001ZZZ420", 
            "reportPeriodMon": "05",
            "reportPeriodYear": "2023",
            "eftIndicator": "8978",
            "recovery_model_questions": 
             [
                 {
                   "code": "0",
                   "isSelected": "true"
                 },
                 {
                   "code": "1",
                   "isSelected": "true"
                 }                                 
             ],
            "subAssistanceDataList": [
               {
                  "subAssistanceNumber": "XX-YY-12345",                 
                  "uei": "zzz123456789",
                  "eftIndicator": "1234",
                  "subAssistanceDollars": "150000",
                  "subAssistanceObligationOrActionDate": "2023-04-17",
                  "overallDescription": "My Description",
                                    "placeOfPerformance": {
                     "streetAddress": "Test place",
                     "streetAddress2": "",
                     "city": {
                        "code": "4000",
                        "name": "Atlanta"
                     },
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "GA",
                        "name": "Georgia"
                     },
                     "zip": "12345"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "0",
                        "isSelected": "false"
                      },
                      {
                        "code": "1",
                        "isSelected": "false"
                      }                                          
                  ]
               },
               {
                  "subAssistanceNumber": "AA-YY-12345",                 
                  "uei": "XYZ123456789",
                  "eftIndicator": "4455",
                  "subAssistanceDollars": "150055",
                  "subAssistanceObligationOrActionDate": "2023-04-17",
                  "overallDescription": "My Description",
                                   "placeOfPerformance": {
                     "streetAddress": "street 123",
                     "streetAddress2": "alley 4",
                     "city": {
                        "code": "9192",
                        "name": "Brambleton"
                     },
                     "country": {
                        "code": "USA",
                        "name": "UNITED STATES"
                     },
                     "state": {
                        "code": "VA",
                        "name": "Virginia"
                     },
                     "zip": "67890"
                  },
                  "recovery_model_questions": 
                   [
                      {
                        "code": "0",
                        "isSelected": "true"
                      },
                      {
                        "code": "1",
                        "isSelected": "false"
                      }                                          
                  ]
               }                           
            ]
         }                 
      ]
   }
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### DELETE FAATA Report Contract


------- | -------
**Request Type** | DELETE
**URL** | /acquisition/v1/FFATA
**Summary** | This endpoint can be used to delete previously submitted contracts report(s)
**Consumes** | application/json
**Produces** | JSON
**Active Versions** | v2/v3

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes |[Refer DELETE FAATA Report Contract](#)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | 

Examples

<details>
<summary>Delete FAATA Report Contract</summary>
<p>
<code><pre>
{
  "primeEntityInformation": [
	{
      "contractNumber": "string",
      "idvReferenceNumber": "string",
      "reportPeriodMon": "number",
  	"reportPeriodYear": "number",
      "reportingAgency": "string"
	}
  ]
}

</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### DELETE FAATA Report Grant


------- | -------
**Request Type** | DELETE
**URL** | /assistance/v1/FFATA
**Summary** | This endpoint can be used to delete previously submitted grants report(s)
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | [Refer ](#revise-opportunity-contract-json)

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
204 | string | Report(s) successfully deleted | JSON (see below)

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
 "primeEntityInformation": [
 {
 "primeFAIN": "string",
 "reportPeriodMon" : "number",
 "reportPeriodYear": "number",
 }
 ]
 }
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### GET FAATA Report Contract

------- | -------
**Request Type** | GET
**URL** | /acquisition/v1/FFATA
**Summary** |  Using this endpoint, user will be able to retrieve specific contract reports based on the provided search criteria
**Consumes** | Request Parameters
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization | Header |  string | Yes | Valid and authorized user ID
api_key | query | string | Yes | Valid System Account API Key
Request JSON | Body | JSON | Yes | Yes, at least one primeEntityInformation element is required. From the fields, at least one field is required

<p><small><a href="#">Back to top</a></small></p>

Examples
Note: Will return JSON response same as POST Request JSON
<p>
<code><pre>
 {
 "primeEntityInformation": [
 {
 "contractNumber": "W9123823PTEST",
 "idvReferenceNumber": "GSTEST001",
 "reportPeriodMon" : "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "2100"
 },
 {
 "reportPeriodMon" : "06",
 "reportPeriodYear": "2023",
 }
 ]
 }
</pre></code>
</p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | Report was successfully retrieved | Return Contract FAATA JSON

Examples
<p>
<code><pre>
 {
 "contractFFATAData": {
 "primeEntityInformation": [
 {
 "contractNumber": "W9123823PTEST",
 "idvReferenceNumber": "GSTEST001",
 "reportPeriodMon": "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "2100",
 "treasurySymbol": "12-3456",
 "programTitle": "Title of the program",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "subAwardDataList": [
 {
 "subAwardNumber": "2303-TEST-05-0",
 "subAwardDollars": "100000",
 "periodOfPerformanceStartDate": "2023-05-14",
 "uei": "ABC987654321",
 "overallDescription": "tEST Description",
 "placeOfPerformance": {
 "streetAddress": "1800 F Street, NW",
 "streetAddress2": "",
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "topPayEmployees": [
 {
 "full_name": "John White",
 "salary": "100000"
 },
 {
 "full_name": "Employee Green",
 "salary": "120000"
 },
 {
 "full_name": "Employee Red",
 "salary": "96000"
 },
 {
 "full_name": "Employee Orange",
 "salary": "250000"
 },
 {
 "full_name": "Employee Blue",
 "salary": "290000"
 }
 ]
 },
 {
 "subAwardNumber": "2303-TEST-06-1",
 "subAwardDollars": "80000",
 "periodOfPerformanceStartDate": "2023-05-14",
 "uei": "XYZ987654321",
 "overallDescription": "Test Description2",
 "placeOfPerformance": {
 "streetAddress": "street 123",
 "streetAddress2": "alley 4",
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "67890"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 },
 {
 "contractNumber": "W91238PTESTTWO",
 "idvReferenceNumber": "",
 "reportPeriodMon": "06",
 "reportPeriodYear": "2023",
 "reportingAgency": "9700",
 "treasurySymbol": "01-9999",
 "programTitle": "Title of the program",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ],
 "subAwardDataList": [
 {
 "subAwardNumber": "9999-TEST",
 "subAwardDollars": "800000",
 "periodOfPerformanceStartDate": "2023-04-28",
 "uei": "ABC999999999",
 "overallDescription": "Test Description",
 "placeOfPerformance": {
 "streetAddress": "Test place",
 "streetAddress2": "",
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "GA",
 "name": "Georgia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 }
 ]
 }
 }
</pre></code>
</p>
<p><small><a href="#">Back to top</a></small></p>


### GET FAATA Report Grant ###

------- | -------
**Request Type** | GET
**URL** | /assistance/v1/FFATA
**Summary** | Using this endpoint, user will be able to retrieve specific grants reports based on the provided search criteria
**Consumes** | application/JSON
**Produces** | JSON
**Active Versions** | v1

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
Authorization	| Header | string |	Yes |	Valid and authorized user ID
api_key |	query |	string |	Yes |	Valid System Account API Key
Request JSON|	Body|	JSON|	Yes|	[Refer GET FAATA GRANT JSON](#delete-notice-contract-json)

Examples
Note: Will return JSON response same as POST Request JSON
<p>
<code><pre>
 {
 "primeEntityInformation": [
 {
 "primeFAIN": "1001KS1420",
 "reportPeriodMon" : "05",
 "reportPeriodYear": "2023"
 },
 {
 "primeFAIN": "1001ZZZ420"
 }
 ]
 }
</pre></code>
</p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200	|JSON|	Report was successfully retrieved	| returns GrantFFATA JSON

Examples

<p>
<code><pre>
{
 "assistanceFFATAData": {
 "primeEntityInformation": [
 {
 "primeFAIN": "1001KS1420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "9999",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ],
 "subAssistanceDataList": [
 {
 "subAssistanceNumber": "XX-YY-00008",
 "uei": "ABC123456789",
 "eftIndicator": "1111",
 "subAssistanceDollars": "100000",
 "subAssistanceObligationOrActionDate": "2010-10-01",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "1800 F Street, NW",
 "streetAddress2": "",
 "city": {
 "code": "1000",
 "name": "Alexandria"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "topPayEmployees": [
 {
 "full_name": "John White",
 "salary": "100000"
 },
 {
 "full_name": "Employee Green",
 "salary": "120000"
 },
 {
 "full_name": "Employee Red",
 "salary": "96000"
 },
 {
 "full_name": "Employee Orange",
 "salary": "250000"
 },
 {
 "full_name": "Employee Blue",
 "salary": "290000"
 }
 ]
 }
 ]
 },
 {
 "primeFAIN": "1001ZZZ420",
 "reportPeriodMon": "05",
 "reportPeriodYear": "2023",
 "eftIndicator": "8978",
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "true"
 }
 ],
 "subAssistanceDataList": [
 {
 "subAssistanceNumber": "XX-YY-12345",
 "uei": "zzz123456789",
 "eftIndicator": "1234",
 "subAssistanceDollars": "150000",
 "subAssistanceObligationOrActionDate": "2023-04-17",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "Test place",
 "streetAddress2": "",
 "city": {
 "code": "4000",
 "name": "Atlanta"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "GA",
 "name": "Georgia"
 },
 "zip": "12345"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "false"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 },
 {
 "subAssistanceNumber": "AA-YY-12345",
 "uei": "XYZ123456789",
 "eftIndicator": "4455",
 "subAssistanceDollars": "150055",
 "subAssistanceObligationOrActionDate": "2023-04-17",
 "overallDescription": "My Description",
 "placeOfPerformance": {
 "streetAddress": "street 123",
 "streetAddress2": "alley 4",
 "city": {
 "code": "9192",
 "name": "Brambleton"
 },
 "country": {
 "code": "USA",
 "name": "UNITED STATES"
 },
 "state": {
 "code": "VA",
 "name": "Virginia"
 },
 "zip": "67890"
 },
 "recovery_model_questions":
 [
 {
 "code": "0",
 "isSelected": "true"
 },
 {
 "code": "1",
 "isSelected": "false"
 }
 ]
 }
 ]
 }
 ]
 }
 }
</pre></code>
</p>

## API Contract JSON

### SUBMIT FAATA Report Grant JSON

* Field headers in the table must match with field headers shown in JSON example  

Name | Data Type |Field Length | Allowed Values | Required |Description | 
-----|-----------|-------|-------------------|------------|------------  
assistanceFFATAData | JSON Object |NA | NA | NA | NA
assistanceFFATAData.primeEntityInformation | JSON Array | NA| | Yes | Information about the prime Grantor. If the report is being submitted for multiple prime grants, then this array will have multiple elements, one for each of the prime Grant.
contractNumber |  |   | | YeS | If this report is being submitted for a Contract, the contractNumber field should match the Award ID for your contract as reported in FPDS and idvReferenceNumber should be left blank 
idvReferenceNumber |  |  | | Yes | If this report is being submitted for a Task Order on a Contract, then enter the Task Order Number in contractNumber field and enter the contract number which matches the Reference IDV field in FPDS into the idvReferenceNumber field.
reportPeriodMon |  |  | | Yes | This field should reflect the Reporting Month of the report being submitted. Use two digit numbers for the month:01 - January; 02 - February; 03 - March;04 - April; 05 - May; 06 - June; 07 - July; 08 - August; 09 - September; 10 - October; 11 - November; 12 – December
reportPeriodYear |  |  | | Yes | This field should reflect the Reporting Year of the report being submitted. 
reportingAgency |  | NA |NA | Yes | The ID of the Federal awarding agency 
treasurySymbol |  | |  | The first six digits of the Treasury Account Symbol (XX-XXXX) are required. | The Treasury Account Symbol associated with the prime contract award can be found on FPDS under Contract Record or you can contact the Contracting Officer to request the TAS. Be sure to include any dashes when entering the symbol value into this field on the spreadsheet
programTitle | | | | No | Program or Project Title 
assistanceFFATAData.primeEntityInformation.recovery_model_questions |  |  | |Yes | Array of the Compensation Questions. There will be 2 questions, and therefore 2 elements in this array
subAwardDataList |  | |  |Yes  | Information about the sub Contractors. If the report is being submitted for multiple sub contracts, then this array will have multiple elements, one for each of the sub Contracts.
subAwardNumber |  | |  | Yes | Number assigned by the Prime Contractor to track this sub-contract
data.pointOfContact.fullname | string | 500 characters| | No | Yes (No for type = a (Award))| Contact Full Name | v1 <br> v2 <br> v3
data.pointOfContact.email | string |255 characters | | No  | Yes (No for type = a (Award))  | Contact email | v1 <br> v2 <br> v3
data.pointOfContact.phone | string |255 characters | | No | No | Contact Phone | v1 <br> v2 <br> v3
data.pointOfContact.fax | string | 255 characters | | No  | No | Contact Fax | v1 <br> v2 <br> v3
data.pointOfContact.additionalInfo | JSON Object |NA |NA | NA  | NA |  Any additional information on Point of Contact | v1 <br> v2 <br> v3
data.pointOfContact.additionalInfo.<br/>content | String | | | No  | No | Details of the additional information on Point of Contact | v1 <br> v2 <br> v3 
data.placeOfPerformance | JSON Object| NA | NA | NA | NA | NA | NA
data.placeOfPerformance.<br/>streetAddess | string | | | No | No | Pop Address | v1 <br> v2 <br> v3
data.placeOfPerformance.<br/>streetAddess2 | string | | | No | No | Pop Address2 | v1 <br> v2 <br> v3
data.placeOfPerformance.city | JSON Object | NA | NA | NA | NA | Pop City |NA
data.placeOfPerformance.city.<br/>code | string | | | No | No | Pop City code | v1 <br> v2 <br> v3
data.placeOfPerformance.city.<br/>name | string | | | No | No | Pop City name| v1 <br> v2 <br> v3
data.placeOfPerformance.state | JSON Object |NA | NA | NA | NA | Pop City state| NA
data.placeOfPerformance.state.<br/>code | string | | | No | No | Pop city state code | v1 <br> v2 <br> v3
data.placeOfPerformance.state.<br/>name | string | | | No | No | Pop city state name| v1 <br> v2 <br> v3
data.placeOfPerformance.country | JSON Object | NA | NA | NA | NA | Pop Country| v1 <br> v2 <br> v3
data.placeOfPerformance.<br/>country.code | string | | | No | No | Pop Country Code| v1 <br> v2 <br> v3
data.placeOfPerformance.<br/>country.name | string | | | No | No | Pop Country name| v1 <br> v2 <br> v3
data.placeOfPerformance.zip | string | | | No | No | Pop Country zip| v1 <br> v2 <br> v3
data.archive | JSON Object |NA | NA | NA | NA | Contract opportunity archive policy information | NA
data.archive.type | string | | auto15,<br/> auto30,<br/> autocustom | No | Yes | Archive Type<br/>The policy will determine the date either by validation of other dates associated to the notice or by a manually entered date that will be used for marking the notice inactive | v1 <br> v2 <br> v3
data.archive.date | date | | | No | Yes for archive.type = autocustom | Archive Date<br/> This date will indicate when a notice will be moved to the inactive status. This date must be in the future | v1 <br> v2 <br> v3
data.permissions | JSON Object | NA | NA | NA | NA | NA|NA
data.permissions.ivl | JSON Object | NA | NA | NA | NA |Government determined use and visibility of the 'Interested Vendor's List' where users outside the notice can indicate a interest in the notice | v1 <br> v2 <br> v3
data.permissions.ivl.create | boolean | | | No | Yes (No for type = a (Award)) | IVL create permission | v1 <br> v2 <br> v3
data.permissions.ivl.read | boolean | | | No | Yes (No for type = a (Award)) | IVL read permission | v1 <br> v2 <br> v3
data.permissions.ivl.update | boolean | |  | No | No | IVL update permission | v1 <br> v2 <br> v3
data.permissions.ivl.delete | boolean | | | No | No | IVL delete permission | v1 <br> v2 <br> v3
data.solicitation | JSON Object |NA | NA | NA | NA | NA
data.solicitation.setAside | string | |[Refer Set-Aside Values](#set-aside-values) | No | No | Set-Aside code<br/> The designator for type of set aside determined for the contract action | v1 <br> v2 <br> v3
data.solicitation.deadlines | JSON | NA | NA | NA | NA |Response deadline date for Contract opportunity|NA
data.solicitation.<br/>deadlines.response | date | |1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| No |1) Yes for type = k, o (Combine Synopsis, Solicitation). Response Date is optional for type = p, r, g (if given - must provide in the required format along with responseTz  <br/>2)	Yes if archive.type=auto15 except type = a (Award)	| Deadline Date| v1 <br> v2 <br> v3
data.solicitation.deadlines.<br/>responseTz |string | |[Refer Time Zone values](#time-zone-values) |No| No | Time Zone code for <br/>Solicitation Deadline Date| v1 <br> v2 <br> v3
data.award | JSON Object | NA | NA | NA | NA | This section is mainly used for providing award information that is required for Award, Justification and Consolidate/(Substantially) Bundle opportunity types |NA 
data.award.date | date | |YYYY-MM-DD |No | Yes only for type = a (Award) | Award Date | v1 <br> v2 <br> v3
data.award.number | string | 255 characters | |No | Yes only for type= i, j, a (Consolidate/(Substantially) Bundle, Justification, Award) | Award Number | v1 <br> v2 <br> v3
data.award.deliverOrderNumber | string | 255 characters| | No | No | Award Delivery Order Number | v1 <br> v2 <br> v3
data.award.amount | number |64 digits |  | No | Yes only for type = a (Award) | Award Amount | v1 <br> v2 <br> v3
data.award.lineitemNumber | string |255 characters | | No | No | Contract Line item Number | v1 <br> v2 <br> v3
data.award.awardee | JSON Object | NA| NA | NA | NA |Awardee details; Only for type = a (Award) |NA
data.award.awardee.name | string | 1000 characters | | No | No; Either awardee.name or awardee.ueiSAM is required | Awardee Name | v1 <br> v2 <br> v3
data.award.awardee.ueiSAM | string | 12 alphanumeric | | No | No; Either awardee.name or awardee.ueiSAM is required <br>  |Unique Entity Identifier SAM - Example: ueiSAM=025114695AST. | v2 <br> v3
data.award.awardee.location | JSON Object |NA | NA | NA | NA | Awardee Location details; **Required if awardee.name is provided** | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>streetAddress | string | | | No | No | Awardee Street Address  | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>streetAddress2 | string | | | No | No | Awardee Street Address 2 | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city | JSON Object |NA |NA |NA | NA | Awardee City details | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city.code | string | | | No | Yes | Awardee City code | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city.name | string | | | No | No | Awardee City name | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state | JSON Object | NA | NA | NA | NA | Awardee State details | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state.code | string | | | No | Yes | Awardee State code | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state.name | string | | | No | No | Awardee State name | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country | JSON Object | NA| NA | NA | NA |Awardee Country details | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country.code | string | | | No | Yes | Awardee Country code | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country.name | string | | | No | No | Awardee Country Name | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>zip | string | | | No | No | Awardee Country Zip code | v1 <br> v2 <br> v3
data.award.justificationAuthority | JSON Object |NA |NA | NA | NA | Only for type = j (Justification) |NA
data.award.justificationAuthority.<br/>modificationNumber | string | 32 characters| | No | No | Justification Authority Modification Number | v1 <br> v2 <br> v3
data.award.justificationAuthority.<br/>authority | string|  |  | No | Yes for type = j (Justification) | Justification Authority | v1 <br> v2 <br> v3
data.additionalReporting | JSON Array | |None, <br/>auto_recovery | No | Yes; No for type = s (Special Notice) | Initiative that applies to the notice | v1 <br> v2 <br> v3
data.farCases | JSON Array | NA | [Refer Requirement Strategies](#requirement-strategy-values) | Yes for type = i (Consolidate/(Substantially) Bundle) | Yes for type = i (Consolidate/(Substantially) Bundle) | **Applicable only for Consolidate/(Substantially) Bundle** | v3
description | JSON Array | NA | NA | NA | NA | NA |NA
description.body | string | 65535 characters| | No | Yes; No for type = a (Award) | Description of the notice | v1 <br> v2 <br> v3
related | JSON  Object| NA | NA | NA | NA | Related Notice information |NA
related.opportunityId | string | 32 characters|[Refer Related Notices](#related-notices) | No | No | Opportunity Id of the related notice  | v1 <br> v2 <br> v3
parent | JSON Object| NA | NA | NA | NA |  Parent Notice information| NA
parent.opportunityId | string | 32 characters| | Yes (to create a draft opportunity for a published notice) | No |Opportunity Id of the parent notice| v1 <br> v2 <br> v3

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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
requestType | string | publish_request | Yes | Type of request
reason | string |  | No | Publish reason

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

<div id="create-publish-json-v3">
<details>
<summary>Create_Publish_Opportunity_Contract_JSON_v3</summary>
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
data.type | string | 1 character| [Refer Notice Types](#notice-types) | Yes | Notice Type| v1 <br> v2 <br> v3
data.solicitationNumber | string | 128 characters |a-z A-Z 0-9 - _ ( ) {}| Yes (No for type = s  (Special Notice)) | Solicitation Number| v1 <br> v2 <br> v3
data.title | string | 256 characters | | Yes | Title of the Opportunity| v1 <br> v2 <br> v3
data.organizationId | string | 32 characters | | Yes | FH Organization Id/AAC code of the office where an Opportunity is being submitted| v1 <br> v2 <br> v3
data.classificationCode | string |  | | Yes (No for type = r, g, a, s)  (SourcesSought, Sale of Surplus, Awards)) | Product Service Code (PSC)| v1 <br> v2 <br> v3
data.naics | JSON Array | NA |NA | NA |NA|NA
data.naics.code | Array of String | | <a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>| Yes for type = k, o (Combined Synopsis, Solicitation) | Valid NAICS Code| v1 <br> v2 <br> v3
data.naics.type | string | |primary|Yes | NAICS Type Note: 'p' must be in lower case| v1 <br> v2 <br> v3
data.pointOfContact | JSON Array | NA |NA | NA |NA|NA
data.pointOfContact.type | string | | primary,<br/> secondary | Yes (No for type = a, s (Award, Special Notice)) | Contact Type Note: 'p' and 's' must be in lower case| v1 <br> v2 <br> v3
data.pointOfContact.title | string | |  | No | Contact title| v1 <br> v2 <br> v3
data.pointOfContact.fullname | string | 500 characters| | Yes (No for type = a (Award))| Contact Full Name| v1 <br> v2 <br> v3
data.pointOfContact.email | string |255 characters | | Yes (No for type = a (Award))  | Contact email| v1 <br> v2 <br> v3
data.pointOfContact.phone | string |255 characters | | No | Contact Phone| v1 <br> v2 <br> v3
data.pointOfContact.fax | string | 255 characters | | No | Contact Fax| v1 <br> v2 <br> v3
data.pointOfContact.additionalInfo | JSON Object |NA |NA | NA |  Any additional information on Point of Contact| v1 <br> v2 <br> v3
data.pointOfContact.additionalInfo.<br/>content | String | | | No | Details of the additional information on Point of Contact | v1 <br> v2 <br> v3
data.placeOfPerformance | JSON Object| NA | NA | NA |NA|NA
data.placeOfPerformance.<br/>streetAddess | string | | |No | Pop Address| v1 <br> v2 <br> v3
data.placeOfPerformance.<br/>streetAddess2 | string | | | No | Pop Address2| v1 <br> v2 <br> v3
data.placeOfPerformance.city | JSON Object| NA | NA |NA | Pop City| v1 <br> v2 <br> v3
data.placeOfPerformance.city.<br/>code | string | | |No | Pop City code| v1 <br> v2 <br> v3
data.placeOfPerformance.city.<br/>name | string | | |No | Pop City name| v1 <br> v2 <br> v3
data.placeOfPerformance.state | JSON Object |NA | NA |NA | Pop City state| v1 <br> v2 <br> v3
data.placeOfPerformance.state.<br/>code | string | | State Code should be entered as upper case (Ex:VA)| No | Pop city state code| v1 <br> v2
data.placeOfPerformance.state.<br/>name | string | | | No | Pop city state name| v1 <br> v2 <br> v3
data.placeOfPerformance.country | JSON Object | NA | NA | NA | Pop Country| v1 <br> v2 <br> v3
data.laceOfPerformance.<br/>country.code | string | | |No | Pop Country Code| v1 <br> v2 <br> v3
data.placeOfPerformance.<br/>country.name | string | | |No | Pop Country name| v1 <br> v2 <br> v3
data.placeOfPerformance.zip | string | | |No | Pop Country zip| v1 <br> v2 <br> v3
data.archive | JSON Object |NA | NA | NA | Contract opportunity archive policy information| v1 <br> v2 <br> v3
data.archive.type | string | | auto15,<br/> auto30,<br/> autocustom | Yes | Archive Type<br/>The policy will determine the date either by validation of other dates associated to the notice or by a manually entered date that will be used for marking the notice inactive| v1 <br> v2 <br> v3
data.archive.date | date | | |Yes for archive.type = autocustom | Archive Date<br/> This date will indicate when a notice will be moved to the inactive status. This date must be in the future| v1 <br> v2 <br> v3
data.permissions | JSON Object | NA | NA | NA |NA|NA
data.permissions.ivl | JSON | NA | NA | NA |Government determined use and visibility of the 'Interested Vendor's List' where users outside the notice can indicate a interest in the notice| v1 <br> v2 <br> v3
data.permissions.ivl.create | boolean | | | Yes (No for type = a (Award)) | IVL create permission| v1 <br> v2 <br> v3
data.permissions.ivl.read | boolean | | |Yes (No for type = a (Award)) | IVL read permission| v1 <br> v2 <br> v3
data.permissions.ivl.update | boolean | |  | No | IVL update permission| v1 <br> v2 <br> v3
data.permissions.ivl.delete | boolean | | |No | IVL delete permission| v1 <br> v2 <br> v3
data.solicitation | JSON Object |NA | NA | NA |NA|NA
data.solicitation.setAside | string | |[Refer Set-Aside Values](#set-aside-values) | No | Set-Aside code<br/> The designator for type of set aside determined for the contract action| v1 <br> v2 <br> v3
data.solicitation.deadlines | JSON | NA | NA | NA |Response deadline date for Contract opportunity| v1 <br> v2 <br> v3
data.solicitation.<br/>deadlines.response | date | |1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| 1) Yes for type = k, o (Combine Synopsis, Solicitation) <br/>2)	Yes if archive.type=auto15 except type = a (Award)	| Deadline Date| v1 <br> v2 <br> v3
data.award | JSON Object | NA | NA | NA| This section is mainly used for providing award information that is required for Award, Justification and Consolidate/(Substantially) Bundle opportunity types| v1 <br> v2 <br> v3
data.award.date | date | |YYYY-MM-DD | Yes only for type = a (Award) | Award Date| v1 <br> v2 <br> v3
data.award.number | string | 255 characters | |Yes only for type= i, j, a (Consolidate/(Substantially) Bundle, Justification, Award) | Award Number| v1 <br> v2
data.award.deliverOrderNumber | string | 255 characters| | No | Award Delivery Order Number| v1 <br> v2 <br> v3
data.award.amount | number |64 digits |  | Yes only for type = a (Award) | Award Amount| v1 <br> v2 <br> v3
data.award.lineitemNumber | string |255 characters | | No | Contract Line item Number| v1 <br> v2 <br> v3
data.award.awardee | JSON Object | NA| NA | NA |Awardee details; Only for type = a (Award)| v1 <br> v2 <br> v3
data.award.awardee.name | string | 1000 characters | No | No; Either awardee.name or awardee.ueiSAM is required | Awardee Name | v1 <br> v2 <br> v3
data.award.awardee.ueiSAM | string | 12 alphanumeric | No | No; Either awardee.name or awardee.ueiSAM is required <br> |Unique Entity Identifier SAM - Example: ueiSAM=025114695AST. | v2 <br> v3
data.award.awardee.location | JSON Object |NA | NA | NA | Awardee Location details; **Required if awardee.name is provided**| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>streetAddress | string | | | No | Awardee Street Address | v1 <br> v2 <br> v3
data.award.awardee.location.<br/>streetAddress2 | string | | | No | Awardee Street Address 2| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city | JSON Object|NA |NA |NA | Awardee City details| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city.code | string | | | Yes | Awardee City code| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>city.name | string | | | No | Awardee City name| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state | JSON Object | NA | NA | NA | Awardee State details| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state.code | string | | State Code should be entered as upper case (Ex:VA)| Yes | Awardee State code| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>state.name | string | | | No | Awardee State name| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country | JSON Object | NA| NA | NA |Awardee Country details| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country.code | string | | | Yes | Awardee Country code| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>country.name | string | | |  No | Awardee Country Name| v1 <br> v2 <br> v3
data.award.awardee.location.<br/>zip | string | | | No | Awardee Country Zip code| v1 <br> v2 <br> v3
data.award.justificationAuthority | JSON Object |NA |NA | NA | Only for type = j (Justification)| v1 <br> v2 <br> v3
data.award.justificationAuthority.<br/>modificationNumber | string | 32 characters| | No | Justification Authority Modification Number| v1 <br> v2 <br> v3
data.award.justificationAuthority.<br/>authority | string|  |  | Yes for type = j (Justification) | Justification Authority| v1 <br> v2 <br> v3
data.additionalReporting | JSON Array | |none, <br/>auto_recovery | Yes; No for type = s (Special Notice) | Initiative that applies to the notice| v1 <br> v2 <br> v3
data.farCases | JSON Array | NA | [Refer Requirement Strategies](#requirement-strategy-values) | Yes for type = i (Consolidate/(Substantially) Bundle) | Yes for type = i (Consolidate/(Substantially) Bundle) | v3
description | JSON Array | NA | NA | NA |NA|NA
description.body | string | 65535 characters| | Yes; No for type = a (Award) | Description of the notice| v1 <br> v2 <br> v3
related | JSON Object | NA | NA | NA | Related Notice information| v1 <br> v2
related.opportunityId | string | 32 characters| [Refer Related Notices](#related-notices)| No | Opportunity Id of the related notice| v1 <br> v2 <br> v3
parent | JSON Object | NA | NA | NA | Parent Notice information| v1 <br> v2
parent.opportunityId | string | 32 characters| | Yes (for modifications to a published notice) | Opportunity Id of the parent notice| v1 <br> v2 <br> v3
resources | JSON Array |NA | NA | NA |NA|NA
resources.attType | string | |link, file | No| Type of attachment, either link or file| v1 <br> v2 <br> v3
resources.content | byte |250MB |  | No | File content in base64 format| v1 <br> v2 <br> v3
resources.link | string | 255 characters | |No | Resource link URL| v1 <br> v2 <br> v3
resources.packageAccessLevel | string | | public,<br/>private<br/>(default public) |  No| Type of access to file| v1 <br> v2 <br> v3
resources.resourceName | string | 255 characters |a-z A-Z 0-9 - _ ()  | No | Name of file| v1 <br> v2 <br> v3
resources.description | string |255 characters | | No | Description of the link| v1 <br> v2 <br> v3
resources.explicitAccess | string |1 character | 0, 1 (defaults to '0' public access, if not provided) |No |Explicit Access. For Controlled Unclassified files, specify '1'| v1 <br> v2 <br> v3
resources.exportControlled | string |1 character | 0 | No |Export Controlled. * Captured for future JCP validation| v1 <br> v2 <br> v3


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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
requestType | string | update_publish_request | Yes | Type of request
reason | string |  | No | Reason for revision

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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
reason | string |  | No | Reason for cancelation
requestType | string | cancel_request | Yes | Type of request
description | string |  | Yes | Description for cancelation

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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
reason | string |  | Yes | Reason for uncanceling
requestType | string | uncancel_request | Yes | Type of request
description | string |  | Yes | Description for uncanceling
newContractAwardDate | date | YYYY-MM-DD | Yes only for type = a (Award)| New Contract Award Date
newArchiveDate | date | YYYY-MM-DD | Yes if newArchiveType=autocustom | New Archive Date
newArchiveType | string | auto15,<br/> auto30,<br/> autocustom | Yes  | New Archive Type
newResponseDate | date | 1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01)| 1) Yes for types = k, o (Combined Synopsis/Solicitation) <br/>2) Yes if newArchive.type=auto15 except for type = a (Award) | New Response Date
newResponseTz | string | [Refer Time Zone Values](#time-zone-values) | No | New Response Time Zone

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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
requestType | string | archive_request | Yes | Type of request
reason | string |  | No | Archive reason

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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
reason | string |  | Yes | Reason for unarchiving
requestType | string | unarchive_request | Yes | Type of request
newContractAwardDate | date | YYYY-MM-DD | Yes for type = a (Award)| New Contract Award Date
newArchiveDate | date | YYYY-MM-DD | Yes if newArchiveType=autocustom | New Archive Date
newArchiveType | string | auto15,<br/> auto30,<br/> autocustom | Yes  | New Archive Type
newResponseDate | date | 1) To specify date with time and timezone offset, use the format <br> yyyy-MM-dd'T'HH:mm:ssXXX <br>(ex: 2020-01-01T13:01:00-05:00 for EST timezone) <br><br> 2. To specify date with time, use the format <br> yyyy-MM-dd'T'HH:mm:ss <br>(ex: 2020-01-01T13:01:00)<br><br> 3. To specify only date, use the format <br> yyyy-MM-dd (ex: 2020-01-01) | 1) Yes for types = k, o (Combined Synopsis/Solicitation) <br/>2) Yes if newArchive.type=auto15 except for type = a (Award) | New Response Date
newResponseTz | string | [Refer Time Zone Values](#time-zone-values) | No | New Response Time Zone

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

Name | Data Type | Field Length |Allowed Values | Required | Description
-----|-----------|----------------|----------|------------|-------
attType | string | 32 characters |link, file | Yes | Type of attachment, either link or file
content | byte | 250MB| | Yes if attType=file | File content in base64 format
packageAccessLevel | string | 32 characters| public, <br/>private <br/>(default public) | No | Only applies to package type - file. If marked 'private', explicit access field must be marked as '1' as well
resourceName | string | 255 characters|a-z A-Z 0-9 - _ () | Yes if attType=file | Name of file
fileType | string | 64 characters | | No  | Mime Type of the file. Only used for attType 'file'. [Refer Valid File Types](#valid-file-types)
link | string | 255 characters| | Yes if attType=link | Resource link  URL
description | string |255 characters | | Yes if attType=link | Description of the link
explicitAccess | string |1 character | 0, 1  | No - If packageAccessLevel is 'public' <br> Yes - If packageAccessLevel is 'private' | For Controlled Unclassified files, specify ‘1’ which will require users to request access to the file. Leaving blank or as a '0' will allow public access to the file. <br>- If packageAccessLevel is given as 'private' then explicitAccess must be '1' otherwise validation will fail <br> - If packageAccessLevel is 'public' explicitAccess must be '0' or null otherwise validation will fail
exportControlled | string |1 character | 0 | No  | *Captured for future JCP validation*<br> Export Controlled

### Stream Attachment Metadata Contract JSON

<div id="stream-attachment-metadata-json" title="Click to view Stream Attachment Metadata Contract">
<details>
<summary>Stream_Attachment_Metadata_Contract_JSON </summary>
<p>
<code><pre>
{
  "attType": "file", 
  "content": "",
  "resourceName": "hello1.txt", 
  "fileSize": 103000, 
  "fileType": "text/plain", 
  "description": "description", 
  "packageAccessLevel": "public"
 }
</pre></code>
</p>
</details>
</div>


Name | Data Type | Field Length |Allowed Values | Required | Description
-----|-----------|----------------|----------|------------|-------
attType | string | 32 characters | file | Yes | Type of attachment
content | string | | | No (Field must be provided) | Leave parameter empty
packageAccessLevel | string | 32 characters| public, <br/>private <br/>(default public) | No | If marked 'private', explicit access field must be marked as '1' as well
resourceName | string | 255 characters | a-z A-Z 0-9 - _ () | Yes | Name of file
fileType | string | 64 characters | | No  | Type of the file. [Refer Valid File Types](#valid-file-types)
description | string |255 characters | | No (Field must be provided) | Description of the link
fileSize | byte  | 250MB | | No (Field must be provided) | Size of the file being uploaded 


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

Name | Data Type | Field Length |Allowed Values | Required | Description
-----|-----------|----------------|----------|------------|-------
attType | string | 32 characters | link, file | No | Required only for file access level changes
packageAccessLevel | string | 32 characters| public, <br/>private <br/>(default public) | No | Only applies to package type - file. If marked 'private', explicit access field must be marked as '1' as well
resourceName | string | 255 characters|a-z A-Z 0-9 - _ () | Yes if attType=file | Name of file
explicitAccess | string |1 character | 0, 1  | No - If packageAccessLevel is 'public' <br> Yes - If packageAccessLevel is 'private' | For Controlled Unclassified files, specify ‘1’ which will require users to request access to the file. Leaving blank or as a '0' will allow public access to the file. <br>- If packageAccessLevel is given as 'private' then explicitAccess must be '1' otherwise validation will fail <br> - If packageAccessLevel is 'public' explicitAccess must be '0' or null otherwise validation will fail
sortOrderChanged | boolean|  | true, false | No | Should be provided if file order is changed
resourceIdBelow | string  |  | | No | This should be Resource ID of the file/link that will display below the file/link that is moved

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
ueiSAM | string | | No | Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric. Example: ueiSAM=025114695AST.|  v2
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

Name | Data Type | Allowed Values | Required | Description
-----|-----------|----------------|----------|------------
reason|	string|	|	No|	Reason for deletion
requestType	|string	|delete_request |Yes	|Type of request
description	|string|		|Yes|	Description for deletion of a notice
deleteOption|	string|	latest, all|	Yes|	Option to delete either the latest or all versions of a notice

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/OpenAPI.zip" download="OpenAPI">OpenAPI File</a>

<details>
<summary>Create Draft Opportunity v1</summary>
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
<summary>Create Draft Opportunity v2</summary>
<p>
<code><pre>
/v2/create:
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
<summary>Create Draft Opportunity v3</summary>
<p>
<code><pre>
/v2/create:
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
<summary>Create and Publish Opportunity v1</summary>
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
<summary>Create and Publish Opportunity v2</summary>
<p>
<code><pre>
/v2/createAndPublish:
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
<summary>Create and Publish Opportunity v3</summary>
<p>
<code><pre>
/v2/createAndPublish:
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
<summary>Get List of Opportunities v1</summary>
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
        - name: returnFHOrgKey
          in: query
          description: return fh org key
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
<summary>Get List of Opportunities v2</summary>
<p>
<code><pre>
/v2/search:
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
<summary>Get an Opportunity by Opportunity ID v1</summary>
<p>
<code><pre>
v1/api/{opportunityId}:
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
        - name: returnFHOrgKey
          in: query
          description: return fh org key
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
<summary>Get an Opportunity by Opportunity ID v2</summary>
<p>
<code><pre>
v2/{opportunityId}:
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
<summary>Create Resource in Draft Opportunity - Stream Attachments</summary>
<p>
<code><pre>
/v2/{opportunityId}/streamAttachments:
    post:
      tags:
        - attachments
      summary: Add attachment to an opportunity via stream
      description: Add attachment to an opportunity via stream.
      operationId: streamAttachmentUsingPOST
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
          in: body
        - name: file
          description: file
          required: true
          type: object
          in: Form/MultiplartFile
        - name: metadata
          description: metadata
          required: true
          type: JSON
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
<summary>Get Related Opportunities v1</summary>
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
<summary>Get Related Opportunities v2</summary>
<p>
<code><pre>
 /v2/{opportunityId}/relatedopportunities/{type}:
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
<summary>Add Authorized Party v1</summary>
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
<summary>Add Authorized Party v2</summary>
<p>
<code><pre>
/v2/access/{opportunityId}/accessRequest
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
<summary>Get Authorized Party v1</summary>
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

<details>
<summary>Get Authorized Party v2</summary>
<p>
<code><pre>
/v2/access/{opportunityId}/accessRequest:
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
400|Response Date |	Response Date provided is an invalid format |	Response date should input as the given format 'yyyy-MM-ddTHH:mm:ss-05:00'. ResponseTz is required. |	Publish
400|Response Date |	Response Date cannot exceed 5 years from current date |	Response Date exceeds 5 years from the current date |	Publish 
400|Archive Date |	Inactive date is a required field |	Archive Date is required if Archive Type = autocustom |Publish
400|Archive Date Response Date   |	One of Response date or Archive date is required |	Either Response date or archive date is required for presolicitation, sources sought, special notice, sale surplus  |	Publish
400|Archive Date |	Inactive date provided is an invalid format |	Date is not in specified format  |	Publish
400|Archive Date |	Archive date provided is in the past |Archive date provided is before today's date. |	Publish
400|Archive Type |	Archive type is invalid for this notice type |	archive type is one of the following "auto15", "auto30" and is not allowed for this notice type	| Publish, UnArchive, Uncancel
400|Archive Type |	Auto 30 archive type is not allowed for this opportunity type | Archive Type = auto30   not allowed for Consolidate/(Substantially) Bundle and Justification |	Publish
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
400|Award Number |	Contract Award Number is a required field	| Contract Award Number is required for Consolidate/(Substantially) Bundle, Justification, Award | Publish
400|Award Number |	Contract Award Number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces| Contract Award Number max length is 255 characters and allows only alphanumeric and - _ ( ) { } characters with no spaces | Publish
400|ueiSAM | Unique Entity Identifier (SAM) is invalid. | Invalid UEI SAM provided |	Publish
400|Awardee Name | Contractor Awarded Name is a required field |	Contractor Awarded Name is a required field if the ueiSAM is not provided for an Award Notice |	Publish
400|Awardee Name | Contractor Awarded Name max character length is 1000 |	Contractor Awarded Name max character length is 1000 | Publish
400|Awardee | Required fields from Awardee section is missing |Awardee Name or ueiSAM# not provided for Award notice|	Publish
400|Awardee Country | Award Details Section - Country is required |Country Code is required if the Awardee name is provided instead of ueiSAM# |	Publish
400|Awardee Country | Award Details Section - Country provided is invalid |Country Code  provided is invalid |	Publish
400|Awardee State | Award Details Section - State is required |State Code is required if the Awardee name is provided instead of ueiSAM# |	Publish
400|Awardee State | Award Details Section - State provided is invalid |State Code provided is invalid |	Publish
400|Awardee City | Award Details Section - City is required |City Code is required if the Awardee name is provided instead of ueiSAM# |	Publish
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
400 | Resources - ExplicitAccess | ExplicitAccess is invalid for PackageLevel public | The resources.packageAccessLevel has been set to ‘public’, so the resources.explicitAccess can not be ‘1’. If a ‘1’ is entered, this is a conflict as the file shows one setting for controlled and the other for public | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
400 | Resources - ExplicitAccess | ExplicitAccess is invalid for PackageLevel private | The resources.packageAccessLevel has been set to 'private', so a corresponding '1' MUST appear in the resources.explicitAccess. If anything other then '1' is entered, this is a conflict as the file shows one setting for controlled and the other for public | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
400 | Resources - packageAccessLevel | Invalid package access level, must be public or private | The packageAccessLevel must specify 'public' or 'private'. Any other character will return as error | Create Resource in Draft Opportunity, Update Resource in Draft Opportunity
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
400|VendorData| ueiSAM should not be empty| ueiSAM should not be empty| AddAuthorizedParty
400|ueiSAM# |	No contact match on vendor data provided	| Not a Valid email or ueiSAM#	| AddAuthorizedParty
404|Opportunity Id,  VendorData	|No request found for the notice and the vendor data provided|	Unable to find a request for the opportunity and vendor details provided.|	Approve or Reject Explicit Access Request By Vendor Data.
401|Authorization|	Error code: 401 ; User does not have sufficient privileges to perform this action|	Invalid API key is used other than write sensitive permission	|Add Authorized Party
400|Authorization	|Error code: 400 ; Duplicate request. Vendor is already added as an authorized party on the notice	| If a party is already added and is being added again by a contract writing individual|	Add Authorized Party
401|Authorization|	Error code: 401 ; Your request did not get processed! Please verify your permission/roles|	If nonfed email id is used in authorization	|Get Authorized Party
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCases) not found	| Requirement Strategies not found |Create Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCase) not found	| Requirement Strategies not found |Create And Publish <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Invalid Requirement Strategy(farCases)	| Accepted farCases: <br> FAR 7.107-2 <br> FAR 7.107-3 <br> FAR 7.107-4 |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Duplicate Requirement Strategies found(farCases)	| Duplicate farCases are not allowed |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|Requirement  Strategies <br> (farCases)|	Requirement Strategies(farCase)not found	| Requirement Strategies not found |Update Draft Notice <br> (Consolidate/(Substantially) Bundle)
400|POP - State | State provided is invalid | When user enters the invalid state code |	Create And Publish
400|POP - Zip Code | Invalid zipcode. Please enter the 5 digit zipcode | When user enters the invalid zip code |	Create And Publish
400|Award section - State | Award Details Section - State provided is invalid | When user enters the invalid state code |	Create And Publish
400|Award section - Zip Code | Award Details Section - Invalid zipcode. Please enter the 5 digit zipcode | When user enters the invalid zip code |	Create And Publish



## FAQ

**Can I look up contract opportunities   without using having a role or a system account?**

A. Users of SAM.gov may use their personal API key to look up contract opportunities. Please visit the [Get Opportunities Public API](https://open.gsa.gov/api/get-opportunities-public-api/) document for additonal details.

**How do I ensure that I have used correct location information?**

A. Contract Opportunity users may use Public Location Services API document to verify their location information before using it in contract opportunities.

## Contact Us

* Reach out to the SAM.gov team at [www.fsd.gov](https://www.fsd.gov)


## Change Log

Date | Version | Description
--------- | --------------- | ---------
4/25/2019 | v0.1 | Base Version
4/29/2019 | v0.2 | Added information for Get Authorized Party List <br> Added Add Authorized Party <br> Added Vendor Data JSON <br> POC Email changed to not required <br> Change log added <br> Secure Attachment Download Authorization section added <br> Alpha and Production endpoint section added
5/23/2019 | v0.3 | Update IVL Settings URL  <br> Added EntityID to getIVL API parameter <br> Updated Get Authorized Party <br> Updated Add Authorized Party <br> Error Message Section Updated
5/28/2019 | v0.4 | Updated  Add Authorized Party<br> Get Authorized Party<br> Delete All Attachments API’s <br> Added Delete Notice API <br> Updated User Permissions <br> Create and Publish Contract Opportunity
6/6/2019 | v0.5 | Deleted Download All Attachments (metadata) <br> Added Download All Attachments by Resource ID <br> Added Download All Attachments by Opportunity ID
7/22/2019 | v0.6 | Only title required to create draft opportunity <br> Solicitation number not required for create/update draft notices JSON <br> soliciation.deadlines.response required for types k and o to publish<br> Contract Award Date required only for Award to publish <br> Contract Award Number required only for a, j, and i to publish <br> POC email required except for Award to publish <br> Description not needed for Update Attachment JSON <br> Workflow Chart Added
8/1/2019 | v0.71 | Added Future Implementation for IP Address Validation and Type of Connection <br> Delete Draft Opportunities Role changed so that CO and Admin can Delete <br> Reason not required for Publish Opportunity
8/19/2019 | v0.72 | API Names Updated <br> Valid File Types Updated
8/29/2019 | v0.73 | Error Codes Added
8/29/2019 | v0.74 | Updated the missing description for explicitAccess field in Update Attachment Contract JSON
10/9/2019 | v0.75 | Get List of Opportunities API Parameter Changes (cancelled field removed/status field updated)
10/22/2019 | v0.76 | Create and Publish JSON field for Archive.Date and Response Date updated <br> Production Link Updated <br> API URLs updated
10/10/2019 | v0.8 | Updated the Set-Aside values with the latest codes
10/25/2019 | v0.9 | Updated the field lengths
10/31/2019 | v0.91| Delete Vendor removed <br> Delete Resource in Draft API added <br> API Specifications Updated: Delete Notice, Getlist, Download Metadata for Attachment by Resource ID, and Download Metadata for Attachment by Opportunity ID <br> JSON Updated: Create and Update, Create and Publish, Revise Opportunity, Cancel Notice, Uncancel Notice, Archive, Unarchive, Create Attachment, Update Attachment, IVL Settings, and Delete Notice <br> Error Message Section Updated
11/04/2019 | v0.92 | Updated the field lengths for contact full name and awardee name fields for create Opportunity, Create and Publish Opportunity Contract JSONs. Updated the Error messages for these fields<br>Added Future Implementation for UEI SAM# Validation and Type of Connection. Task/Delivery Order number is updated to be a non required field for Justification submission
11/12/2019 | v1.0 | Initial Release Finalized
12/04/2019 | v1.01 | Minor updates to UEI(SAM) info
1/3/2020 | v1.02 | Updates to UEI(SAM) info
1/20/2020 | v1.03 | Updated JSON arrays and objects
1/21/2020 | v1.04 | Added Time zone values. <br>Updated the Create Contract Opportunity, Create And Publish Contract Opportunity Json's and examples <br> with the Parent Json element to provide parent opportunity Id for revisions. <br> Added the Related Notices section.
2/18/2020 | v1.05 | Added JSON information for UEI additions
2/28/2020 | v1.06 | Updated the Valid file types to include Zip file.<br/> Added a new validation for resource name to specify the allowed character set
3/13/2020 |v1.07 | Updated GET APIs to include UEISAM in v2 <br> Get list of Opp API Organization ID field updated to show FH ID dependending on department, subtier, and office
4/10/2020 | v1.08 | Added Version Control Section <br> Added information for Get Opportunity Public API and Public Location Services API in FAQ section
5/13/2020 | v1.09 | Updated v2 URL for Add Authorized and Get Authorized Party APIs
5/26/2020 | v1.1 | Added returnFHOrgKey parameter in the request for Get list of Opportunities API so that the request provides internal FH Org key if required
6/8/2020 | v1.11 | Added returnFHOrgKey parameter in the request for Get Opportunity by Opportunity ID API so that the request provides internal FH Org key if required
7/3/2020 | v1.12 | Updated v2 endpoints for Get List and Get Opportunity by ID APIs to add FH codes and updated response samples (Coming Soon)
7/17/2020 | v1.13 | Updated Create Attachment JSON and Update Attachment JSON and Error Message section 
8/13/2020 |v1.14 | Added Streaming Attachment API (coming soon) 
8/17/2020 | v1.15 | Get APIs and Streaming Attachment API deployed to Alpha
9/14/2020| v1.16| Updated OpenAPI Specification section to include v2 endpoints
9/15/2020| v1.17| v2 Endpoints updated status in PRODUCTION
11/20/2021| v1.18| ResponseDate	date must provide in this format : yyyy-MM-dd’T’HH:mm:ssXXX (Example:  "response": "2020-02-25T11:00:00-04:00")(Coming soon)
11/20/2021| v1.19| If ResponseDate	date is provided, ResponseTz is a required field. (Example : "responseTz": "America/New_York") (Coming soon)
12/10/2021| v1.20| Contract Award Date is expected to input in this format YYYY-mm-DD (Applicaple for notice types a,u,i). (Coming soon)
02/18/2022| v1.21| Please refer the version control section for the list of v1 api's that are going to retired from  3/15/2022 in alpha, and 4/1/2022 from prod.
10/05/2022| v1.22| Notice code "i" decription change: from “Intent to Bundle Requirements” to “Consolidate/(Substantially) Bundle”, <br> Added Requirement Strategies(farCases) to notice code "i"(Consolidate/(Substantially) Bundle), <br> Please refer the version control section for the list of v3 api's that are going to be available in alpha(11/28/2022) and prod(TBD).
02/28/2023| v1.23| Please refer the version control section for the list of v3 endpoints will available for production use from March 3rd, 2023(v1.22).
04/19/2023| v1.24| Please refer the GENC Standardization section for the list of active countries and states.
04/20/2023| v1.25| Please refer the Place of Performace and Award section (Country/State/Zip) validation error messages. These are effective in production from March 15, 2024(v1.25).


<p><small><a href="#">Back to top</a></small></p>
