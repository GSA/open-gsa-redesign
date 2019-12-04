---
title: Beta.SAM.Gov Entity Hierarchy API 
banner-heading: Beta.SAM.Gov Entity Hierarchy API 
---

## Overview

The Entity Hierarchy API retrives entity hierarchy information  from D&B based on DUNS



**Note:** Operations marked with * (asterisk) are not available at this time

## Getting Started

The Entity Hierarchy API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov/prod/ (Coming Soon)
* Alpha: https://api-alpha.sam.gov/prodlike/



###	Authentication and Authorization*

#### Generating a System Account API Key
* Users registered with a government email address and have appropriate System Account Manager or System Account Admin role may request a system account for data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Request System Account” from the widget and fill out the required sections with appropriate Entity-Hierarchy-Service permissions.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the key.


#### System Account Authentication*
In order to utilize the Entity Hierarchy API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read and Write permissions under Entity-Hierarchy-Service domain.

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

Operation    | Administrator <br/>(Entity Hierarchy domain)| Contracting Officer | Contracting Specialist
-------------|---------------|---------------------|------------------------------
Get ueiDUNS | Yes | Yes | Yes
Get uei | Yes | Yes | Yes
Get cageCode | Yes | Yes | Yes

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Get Company Information 


------- | -------
**Request Type** | GET    
**URL** | /entity-hierarchy/v1/hsData
**Summary** | retrieve DUNS, UEI, and cage_code of a specified entity
**Consumes** | Request Parameter 
**Produces** | application/json

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
duns| query |  string | No | assigned entity identifier
uei | query | string | No | assigned unique entity identifier
cage_code|query|string|No|alpha numeric identifier assigned to entities
active|query|boolean|No| status 

<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description| refer
-----------------|---------------|---------|------------|------
200 | string | successfully retrived the list| 
400 | string  | Bad request
401 | string | You are not authorized to view the resource
403	| string |Accessing the resource you were trying to reach is forbidden
404	| string | The resource you were trying to reach is not found
500 | string | Internal Server Error
Response JSON|Body JSON|||[Refer DUNS, UEI, and cage code JSON](#get-duns-uei-and-cagecode-json)

<p><small><a href="#">Back to top</a></small></p>

## Examples

### GET DUNS, UEI, and cageCode JSON

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

<a href="v1/OpenhsDataAPI.zip" download="OpenhsDataAPI.zip">OpenhsData API File</a>

<details>
<summary>GET ueiDUNS, UEI, and CageCode Information</summary>
<p>
<code><pre>
{
  "totalRecords": 1,
  "entityData": [
    {
    "ueiDUNS": "333333333",
     "uei": "abcd",
     "cage_code": "null"
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
401|Please provide valid Authorization Email & API Key |	API Key and/or Authorization Email is required
401|Encountered error authenticating user.Invalid JWT provided | Invalid Authorization Email provided
401|Insufficient privileges to retrieve system account profile as the given organization is invalid |	Invalid Organization ID provided
400|Error processing GET request |	Invalid JSON format provided
400|$.data: is missing but it is required |	Request JSON is empty
400|"$.requestType: does not have a value in the enumeration [archive_request, unarchive_request, publish_request, update_publish_request, cancel_request, uncancel_request]" ] |	Request Type must be valid for operation
404|Please provide ueiDUNS	| Invalid ueiDUNS provided
401|Insufficient privileges to retrieve entity hierarchy profile as the given organization is not part of the approved FH hierarchy	| Office ID provided is not authorized for system account
401|Insufficient privilege?                                          


<p><small><a href="#">Back to top</a></small></p>
#### Specific Error Messages*
This section details possible error messages for specific operations.
Error codes may change depending on the error given; document will be updated accordingly.

Error Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
400|ueiDUNS | Unique Entity Identifier (duns) is invalid |	(**Planned to be deprecate by October 2020**) Invalid UEI DUNS provided |	Get
400|ueiDUNS| ueiDUNS Should Contain Only Numeric Value||Get
400|ueiDUNS|ueiDUNS Can Only be 9 Digits||Get
400|active | active Should only be True or False

## FAQ *

<p><small><a href="#">Back to top</a></small></p>

## Contact Us 
* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log 

Date | Version | Description
------|--------|--------
12/02/2019 | v0.1 | Base Version
