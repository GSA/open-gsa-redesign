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
e rejected with an error.

**Note:** Permissions marked "Yes" are may not be assigned by default and will require your user administrator to update.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Get Company Information 


------- | -------
**Request Type** | GET    
**URL** | /entity-hierarchy/v1/hsData
**Summary** | retrieve DUNS, UEI, and cage code of a specified entity
**Consumes** | Request Parameter 
**Produces** | application/json

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
duns| query |  string | Yes | assigned entity identifier
uei | query | string | Yes | assigned unique entity identifier
cageCode|query|string|yes|alpha numeric identifier assigned to entities
Response  JSON | Body | JSON | Yes | [Refer DUNS, UEI, and cage code of a specified entity JSON](#get-duns-uei-and-cagecodeof-aspecified-entity-json)


<p><small><a href="#">Back to top</a></small></p>

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | successfully retrived the list| returns company information in response body
401 | string | You are not authorized to view the resource
403	| string |Accessing the resource you were trying to reach is forbidden
404	| string | The resource you were trying to reach is not found
500 | string | Internal Server Error

<p><small><a href="#">Back to top</a></small></p>
## Examples

### GET Company Information JSON

<details>
<summary>Success</summary>
<p>
<code><pre>

</pre></code>
</p>
</details>


## FAQ *

<p><small><a href="#">Back to top</a></small></p>

## Contact Us *
* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log *

Date | Version | Description
------|--------|--------
11/20/2019 | v0.1 | Base Version
