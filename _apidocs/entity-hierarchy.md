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


#### System Account Authentication
In order to utilize the Entity Hierarchy API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read and Write permissions under Entity-Hierarchy-Service domain.
e rejected with an error.

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Get Company Information
------- | -------
**Request Type** | GET                                |
**URL** | /entity-hierarchy/v1/company-info
**Summary** | Get Company information based on duns number
**Consumes** | NA 
**Produces** | application/json

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
duns| query |  string | Yes | assigned entity identifier
Response  JSON | Body | JSON | Yes | [Refer GET Company Information JSON](#GET-Company-Information-JSON)


<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | successfully retrived the list| returns company information in response body
401 | string | You are not authorized to view the resource
403	| string |Accessing the resource you were trying to reach is forbidden
404	| String | The resource you were trying to reach is not found


<p><small><a href="#">Back to top</a></small></p>

### Soft Delete By UEI, DUNS or REGID

**Request Type** | DELETE                                |
|----------------|------------------------------------|
|**URL**         | /entity-hierarchy/v1/delete-entity
**Summary**      | soft delete record by duns, uei or reg_id
**Consumes**     | application/json
**Produces**     | NA

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
duns | query |  string | Yes | assigned entity identifier
uei | query | string | Yes | assigned unique entity identifier
regId | query | string | Yes | registration id
Response  JSON | Body | JSON | Yes | [Refer Soft Delete JSON](#Soft-Delete-JSON)


<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | successfully deleted the record| 
401 | string | You are not authorized to view the resource
403	| string |Accessing the resource you were trying to reach is forbidden
404	| String | The resource you were trying to reach is not found

## Examples

### GET Company Information JSON

<details>
<summary>Success</summary>
<p>
<code><pre>
"address": {
    "addressLine": "23 Main St'",
    "adressId": 0,
    "city": "Alexanderia",
    "countryCode": "USA",
    "stateCode": "VA",
    "userTimeInfo": {
      "createdBy": "string",
      "createdDate": "2019-11-13T20:43:12.843Z",
      "updatedBy": "string",
      "updatedDate": "2019-11-13T20:43:12.843Z"
    },
    "zipCode": "804435506"
  },
  "dbaNames": {
    "dba": [
      "string"
    ]
  },
  "domesticDuns": {
    "address": {
      "addressLine": "23 Main St",
      "adressId": 0,
      "city": "Alexanderia",
      "countryCode": "USA",
      "stateCode": "VA",
      "userTimeInfo": {
        "createdBy": "string",
        "createdDate": "2019-11-13T20:43:12.843Z",
        "updatedBy": "string",
        "updatedDate": "2019-11-13T20:43:12.843Z"
      },
      "zipCode": "string"
    },
    "duns": "string",
    "name": "string",
    "uei": "string"
  },
  "duns": "string",
  "headquarterDuns": {
    "address": {
      "addressLine": "string",
      "adressId": 0,
      "city": "string",
      "countryCode": "string",
      "stateCode": "string",
      "userTimeInfo": {
        "createdBy": "string",
        "createdDate": "2019-11-13T20:43:12.843Z",
        "updatedBy": "string",
        "updatedDate": "2019-11-13T20:43:12.843Z"
      },
      "zipCode": "string"
    },
    "duns": "201343774",
    "name": "string",
    "uei": "string"
  },
  "name": "string",
  "parentDuns": {
    "address": {
      "addressLine": "string",
      "adressId": 0,
      "city": "string",
      "countryCode": "string",
      "stateCode": "string",
      "userTimeInfo": {
        "createdBy": "string",
        "createdDate": "2019-11-13T20:43:12.843Z",
        "updatedBy": "string",
        "updatedDate": "2019-11-13T20:43:12.843Z"
      },
      "zipCode": "string"
    },
    "duns": "string",
    "name": "string",
    "uei": "string"
  },
  "uei": "string"
}
</pre></code>
</p>
</details>

### Soft Delete JSON

<details>
<summary>Success</summary>
<p>
<code><pre>
{
  "response": "string"
}
</pre></code>
</p>
</details>

<p><small><a href="#">Back to top</a></small></p>

### OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:

<a href="v1/OpenEntityHierarchyAPI.zip" download="OpenEntityHierarchyAPI.zip">OpenEntity Hierarchy API File</a>

<details>
<summary>GET Company Information</summary>
<p>
<code><pre>
/v1/entity-hierarchy/v1/company-info:
    get:
      tags:
        - Entity Hierarchy
      summary: Get Company information based on duns number
      description: Retrives company record.
      operationId: duns
      produces:
        - application/json
      parameters:
        - name: duns
          in: query
          description: assigned entity identifier
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
<summary>Delete Company Information</summary>
<p>
<code><pre>
/v1/entity-hierarchy/v1/delete-entity:
    delete:
      tags:
        - Entity Hierarchy
      summary: soft delete record by duns, uei or reg_id
      description: Delete company record.
      operationId: duns, uei or reg_id
      produces:
        - application/json
      parameters:
        - name: duns
          in: query
          description: assigned entity identifier
          required: true
          type: string
        - name: uei
          in: query
          description: assigned unique entity identifier
          required: true
          type: string
        - name: reg_id
          in: query
          description: assigned entity identifier
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

### Error Messages*

#### General Error Messages

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
404|Please provide duns	| Invalid duns provided
401|Insufficient privileges to retrieve entity hierarchy profile as the given organization is not part of the approved FH hierarchy	| Office ID provided is not authorized for system account
401|Insufficient privileges to edit hierarchy  |	Account does not have appropriate privileges to edit hierarchy


<p><small><a href="#">Back to top</a></small></p>
#### Specific Error Messages*
This section details possible error messages for specific operations.
Error codes may change depending on the error given; document will be updated accordingly.

Error Code|Field | Error Message | Reason/Description | Operation
-----|------|---------------|--------------------|----------
400| |	|	 |	
400| |	 |		| 

# FAQ*
<p><small><a href="#">Back to top</a></small></p>
## Contact Us*
* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

# Change Log*

Date | Version | Description
------|---------------|---------

