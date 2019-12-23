---
title: Beta.SAM.Gov Identifier Query as a Service (IQaaS) API(Coming Soon)
banner-heading: Beta.SAM.Gov Identifier Query as a Service (IQaaS) API 
---

## Overview

The Identifier Query as a Service (IQaaS) API retrieves entity identifier information about an entity for mapping purposes

**Note:** Operations marked with * (asterisk) are not available at this time

## Getting Started

The Identifier Query as a Service API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov/prod/ (Coming Soon)
* Alpha: https://api-alpha.sam.gov/prodlike/ (Coming Soon)


###	Authentication and Authorization*
### Generating a personal API Key:
* Registered users can request for a public API on ‘Account Details’ page. This page can be accessed here: Account Details page on beta.sam.gov
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page.
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

#### Generating a System Account API Key*
* Users registered with a government email address and have appropriate System Account Manager or System Account Admin role may request a system account for data access.
* If a user satisfies the above registration criteria, they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Request System Account” from the widget and fill out the required sections with appropriate Entity-Hierarchy-Service permissions.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the key.

### User Account Authentication*
In order to utilize the Identifier Query as a ServiceEntity Hierarchy API, the following is required:
 * Valid beta.SAM.GOV federal government user account with FOUO permissions.

#### System Account Authentication*
In order to utilize the Identifier Query as a Service API, the following is required:
* Valid beta.SAM.GOV federal government system account with FOUO or Sensitive Read permissions under Entity domain.

<p><small><a href="#">Back to top</a></small></p> 

## API Description

### Get Entity Information 

**Request Type** | GET    
-----------------|----------------
**URL**      | /IQaaS/v1/api/uei-info
**Summary**  | retrieve ueiDUNS, ueiSAM, and cageCode of a specified entity
**Consumes** | Request Parameter 
**Produces** | application/json

Request Parameters

Parameter Name | Parameter Type | Data Type | Required | Description
---------------|----------------|-----------|----------|-------------------
api_key* | query | string | Yes | valid API Key (Not Implemented)
ueiDUNS  | query | string | No  | assigned DUNS unique entity identifier
ueiSAM   | query | string | No  | assigned SAM unique entity identifier
cageCode |query  | string | No  |alpha numeric identifier assigned to entities
active   |query  | boolean| No  | ueiSAM/ueiDUNS active or inactive or both statuses 

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason | Description |  refer
-----------------|---------------|--------|-------------|----------
200 | string | Successfully retrieved the list| 
400 | string | Bad request
401 | string | You are not authorized to view the resource
403	| string | Accessing the resource you were trying to reach is forbidden
404	| string | The resource you were trying to reach is not found
500 | string | Internal Server Error
Response JSON|Body JSON|||[Refer ueiDUNS, ueiSAM, and cageCode JSON](#get-ueiduns-ueisam-and-cagecode-json)

<p><small><a href="#">Back to top</a></small></p>

## Examples

### GET ueiDUNS, ueiSAM, and cageCode JSON

<details>
<summary>Success</summary>
<p>
<code><pre>
"successfully retrieved list"
</pre></code>
</p>
</details>

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:

<a href="v1/OpenhsDataAPI.zip" download="OpenhsDataAPI.zip">IQaaS API Specification</a>

<details>
<summary>GET ueiDUNS, ueiSAM, and cageCode Information</summary>
<p>
<code><pre>
{
  "totalRecords": 1,
  "entityData": [
    {
    "ueiDUNS": "002700663",
     "ueiSAM": "Y36TC48CKZ45",
     "cageCode": "549G7"
    }
 ]
}
</pre></code>
</p>
</details>

### Error Messages 

#### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

Error codes may change depending on the error given; document will be updated accordingly.


Error Code|Error Message | Reason/Description
----------|--------------|-------------------
401*| Please provide valid API Key |	API Key is required
                   
<p><small><a href="#">Back to top</a></small></p>
#### Specific Error Messages
This section details possible error messages for specific operations.
Error codes may change depending on the error given; document will be updated accordingly.

Error Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
400|ueiDUNS | ueiDUNS Should Contain Only Numeric Values||Get
400|ueiDUNS |ueiDUNS Can Only be 9 Digits||Get
400|active  |               |active Should only be True or False| Get

## FAQ *

<p><small><a href="#">Back to top</a></small></p>

## Contact Us 
* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log 

Date | Version | Description
------|--------|--------
12/20/2019 | v0.1 | Base Version
