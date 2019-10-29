---
title: Beta.SAM.Gov Opportunity Management SOAP Web Services
banner-heading: Beta.SAM.Gov Opportunity Management SOAP Web Services
---

## Overview

The Opportunity Management SOAP APIs will allow authorized users to submit and request opportunities data. This document will provide electronic users with the technical specifications required to utilize the Contract Opportunities Web Services capability.

**Note:** The specifications on this page are for a soon to be released API. Check back here or be in contact with IAE for the release date and testing session.

## Getting Started

## Web Services <br> Description Language (WSDL)
To view the WSDL for all available methods and object definitions, refer below links:

* Alpha WSDL Link: https://api-alpha.sam.gov/prodlike/ws/fboendpoint/services.wsdl or https://api-alpha.sam.gov/prodlike/ws/fboendpoint/fbo.wsdl 
* Beta WSDL Link: https://api.sam.gov/prod/ws/fboendpoint/services.wsdl or https://api.sam.gov/prod/ws/fboendpoint/fbo.wsdl

## SOAP Web Services Workflow Chart
To view the current workflow of SOAP web service, refer below file:
* Workflow Chart  <br><a href="v1/Opportunity Management SOAP Workflow.pdf" download="Opportunity Management SOAP Workflow">Download</a>

## Authentication

### User Accounts
To perform an operation, user who is registered with beta.sam.gov should have either Contracting Officer role OR Contracting Specialist role. Note that to perform an operation, user must have only one role.

**Note** To submit any opportunity for an office, user should provide office org key or AAC. If office org key is known, please provide the same in the 'officeid' field in the requests. If office org key is not available, then users can provide AAC in place of office org key in 'officeid' field. In order to get AAC:
* On beta.sam.gov, please log in and click on the profile and go to Account Details. AAC is listed under 'Organization Information' section.
* On alpha.sam.gov, please log in and click on the profile and go to Account Details. AAC is listed under 'Organization Information' section.

### Type of Connection Validation 
All SOAP Web Service requests will be validated against the Type of Connection within the system account profile. All requests without "SOAP" type of connection in the system account profile will be rejected with an error.

### IP Address Validation
All SOAP Web Service requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.

### Authentication Methods
beta.SAM.gov Web Services supports SOAP header authentication. Configure your client to send a specific SOAP header with every method call which contains the authentication data. Below is the example of header included before the body:
* Note: Username and email are case sensitive 

```
   <soapenv:Header>
      <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account username</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string">ContractingOfficeEmail@gsa.gov</emailid>
     </AuthenticationData>
   </soapenv:Header>
```

**Note**:
When submitting, retrieving or archiving/unarchiving, if user provided officeId along with system account user name and password, then the service first validates if the officeId provided is a valid office in Federal Hierarchy. If it’s a valid office, then the service validates if the given system account has access to that office. If the system account has access to the office, only then the user can proceed ahead with the SOAP services.

When the given officeId is not a valid office in Federal Hierarchy, then the service throws below error and user cannot proceed ahead with using SOAP services:
*Insufficient privileges to retrieve system account profile as the given organization is invalid*

When the given officeId is valid but does not fall under the approved Federal Hierarchy for the given system account, then the service throws below error and user cannot proceed ahead with using SOAP services:
*Insufficient privileges to retrieve system account profile as the given organization is not part of the approved FH hierarchy*

**Note**:
The complex type definition for this object (AuthenticationData) is located in the WSDL. It contains three string elements named “username”, “password” and “emailid”. Refer the WSDL attached below:

### Namespace Guidance
The authentication namespace must match for a web service call to be successful.
This is due to core settings for the web services internals where the authorization header validates the namespace against the WSDL. So, when the namespace for your authentication header in soap xml does not match the namespace defined in the WSDL at the endpoint (in this case sam), it does not pass on the credentials (username/password/emailid). Therefore, the Contract Opportunities service is not able to authenticate the user and returns an authentication error.

## Method Overview
All methods available can be found in the WSDL and will be listed in this document. Methods will take different parameters ranging from basic types (string/integer/boolean/date and array of these types) or complex data types that are further comprised of these basic types and sometimes other complex data types.  
Supported input content type formats are text/xml.
Note: For all elements/parameters that are specified as type “date,” please supply date in YYYYMMDD (i.e. 20090428) format.

### *Responses*
Most methods will return data in the format of the PostingResponse complex type. This consists of two elements:
* The first element is named ‘success’ and is a boolean value. If the method successfully completed, this element will be true or 1.  If it is false, empty, or 0, then the method was not successful.
* The second element is named ‘messages’ and is an array of strings. Mostly for error cases, this element will contain any relevant error messages (or sometimes success messages) that pertain to the web services method called.

Posting Response Complex Type Definition

Element Name | Type
------- | -------
success | boolean
messages | string [] - array of strings

**Note**: Some methods will have a different response value format due to the nature of the data being returned. These custom cases will be outlined below.

### Set-Aside Values
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field. Use the Set-Aside codes to submit notices.

Refer below table for mapping between legacy Set-Aside Values to modern Set-Aside Value:

Code | Modern Set-Aside Values | Legacy Set-Aside values
-----|------- | -------
SBA     | Total Small Business Set-Aside (FAR 19.5)	| Total Small Business
SBP     | Partial Small Business Set-Aside (FAR 19.5) |	Partial Small Business
8A      | 8(a) Set-Aside (FAR 19.8)	| Competitive 8(a)
8AN     | 8(a) Sole Source (FAR 19.8)	| Competitive 8(a)
HZC     | Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13) |	HUBZone
HZS     | Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13) |	HUBZone
SDVOSBC | Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14) |	Service-Disabled Veteran-Owned Small Business
SDVOSBS | Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14) |	Service-Disabled Veteran-Owned Small Business
WOSB    | Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15) |	Women-Owned Small Business
WOSBSS  | Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15) |	Women-Owned Small Business
EDWOSB  | Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15) |	Economically Disadvantaged Women-Owned Small Business
EDWOSBSS | Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15) |	Economically Disadvantaged Women-Owned Small Business
LAS | Local Area Set-Aside (FAR 26.2) |
IEE | Indian Economic Enterprise (IEE) Set-Aside (specific to Department of Interior) |
ISBEE | Indian Small Business Economic Enterprise (ISBEE) Set-Aside (specific to Department of Interior) |
BICiv | Buy Indian Set-Aside (specific to Department of Health and Human Services, Indian Health Services) |
VSA | Veteran-Owned Small Business Set-Aside (specific to Department of Veterans Affairs) |
VSS | Veteran-Owned Small Business Sole source (specific to Department of Veterans Affairs) |

### Notice Types
The web service API includes specific methods to submit each of the base notice types (i.e. presolicitation, combined/synopsis, award, etc.). You will find these outlined in the sections below.

The Notice Types valid options are:

* PRESOL – for Presolicitation Notices
* COMBINE – for Combined/Synopsis Notices
* AWARD – for Award Notices
* JA – for Justification & Approval (J&A) Notices
* SRCSGT – for Sources Sought Notices
* SSALE – for Sale of Surplus Property Notices
* SNOTE – for Special Notices
* ITB – for Intent to Bundle Requirements (DoD-Funded) Notices
* SOL - for Solicitation Notices

#### Related Notices

The table below lists notices that can be related.

|*Below Notice can be Related to:*|SRCSGT | PRESOL | COMBINE | SOL| AWARD | SSALE | ITB | JA | SNOTE
-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|**SRCSGT**||O|O|O|O|O|||O
|**PRESOL**|O||O|O||O|O|O|O
|**COMBINE**|O|O|||O||O|O|O
|**SOL**|O|O|||O||O|O|O
|**AWARD**|||O|O|||O|O|O
|**SSALE**|O|O|||||O|O|O
|**ITB**||O|O|O|O|O||O|O
|**JA**||O|O|O|O|O|O||O
|**SNOTE**|O|O|O|O|O|O|O|O|

### Stauth Valid Values
Below table captures stauth values to use while making requests as needed.

Code | Description
------- | --------
1 |	Urgency
2	| Only One Source (except brand name)
3 |	Follow-on Delivery Order Following Competitive Initial Order
4 |	Minimum Guarantee
5 |	Other Statutory Authority (e.g. 8a, etc.)
brand |	FAR 6.302-1(c) - Brand name
far1 | FAR 6.302-1 - Only one responsible source (except brand name)
far2 | FAR 6.302-2 - Unusual and compelling urgency
far3 | FAR 6.302-3 - Industrial mobilization; engineering, developmental or research capability; or expert services
far4 | FAR 6.302-4 - International agreement
far5 | FAR 6.302-5 - Authorized or required by statute
far6 | FAR 6.302-6  - National security
far7 | FAR 6.302-7 - Public interest
far13 | FAR 13.5 - Simplified Procedures for One Source

## Contracting Officer<br> Method Details

### Award Notice (submitAward)
This method is used to submit an award notice.

Input parameters:

Input Parameter | Type | Description
------- | ------- | -------
Data | Award | Complex type defined

Response:

Output Parameter | Type | Description
------ | ------- | -------
Response | PostingResponse | ComplexType

Award Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date |	date |	Yes |	Posting Date |	YYYYMMDD
zip |	string |	No |	Zip Code (Deprecated) |	5 digits
classcod |	string |	No |	Class-Code |	Valid classification code (FAR, Section 5.207(g)) 
naics |	string |	No |	NAICS Code |	Valid NAICS Code <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
offadd |	string |	No |	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy |	65535 characters
officeid |	string |	Yes |	Office ID of the office where an opportunity is being submitted |	20 characters
subject |	string |	Yes |	Subject |	256 characters
solnbr |	string |	Yes |	Solicitation # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype	| string |	No |	 [Refer Related Notices](#related-notices) |		
awdnbr |String |	 Yes |	Award Number |	255 characters from the set: a-z A-Z 0-9 - _ ( ) {} 
awdamt |	string |	Yes |	Award Amount |	64 digits
linenbr |	string |	No |	Line Number |	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
awddate |	date |	Yes |	Award Date |	YYYYMMDD
archdate |	date |	No |	Archive Date |	YYYYMMDD
awardee |	string |	Yes |	Awardee |	255 characters
awardee_duns |	string |	No |	Awardee DUNS |	9 digits with optional plus 4
contact |	string |	No |	Contact Info |	255 characters
desc |	string |	No |	Description |	65535 characters
link |	GovURL |	No |	Government Link	|255 characters. Consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail |	No |	Government Email |	255 characters
links |	DocumentLink[] |	No |	Array Of links |
files |	DocumentFile[] |	No |	Array of files |
setaside |	string |	No |	[Refer Set-Aside Values](#set-aside-values) |	
recovery_act |	boolean |	No |	Recovery Act |	True or False
correction |	boolean |	No |	Correction of previous Award |	True or False <br> If correcting a previously submitted Award notice, specify True and the system will lookup the award by award number and sol number if applicable.

GovURL Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	No |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description |	255 characters

GovEmail Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address | string |	No |	Email Address |	255 characters
desc |	string |	No |	Description |	255 characters

DocumentLink Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	No |	External URL |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No |	File Data |	250 MB
desc |	string |	No |	Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Delete Notice/ Document Package <br>(deleteNoticeOrDocumentPackage)

This method is used to permanently delete a notice or delete all attachments/links for all the versions or the latest version of the notice. Modifications/Amendments are recommended instead of using this method. Specify the solicitation number or award number to delete a notice. To delete attachments, also specify the attachment deletetype.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data |	DeleteNoticeOrDocumentPackage |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
response|	PostingResponse	|Complex type

DeleteNoticeOrDocumentPackage Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr |	string |	Yes; Solicitation # or Award # is required |	Solicitation # | 128 characters from the set: a-z 0-9 -_ ( ) { }
ntype |	string |	No | Notice Type	| [Refer Notice Types](#notice-types) 
awdnbr |  string | Yes; Solicitation # or Award # is required| Award # |	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
deletetype |	string |	No |	Notice or Attachment delete operation type |	Valid Values: “notice” for notice, “attachment” for attachments/links. Defaults to “notice” if not provided
deletemethod |	string | No | Delete latest or all versions |	Valid Values: “latest” for latest version, “all” for all versions. Defaults to “all” if not provided

### Archive Notice <br>(ArchiveNotice)

This method is used to update the archive date on an existing notice.  If a past date is provided or no date provided at all, the notice will be immediately archived.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data | ArchiveNotice | Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
response | PostingResponse | Complex type defined below

ArchiveNotice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date |	date |	No |	Posting Date | YYYYMMDD
solnbr | string |	Yes |	Solicitation # | 128 characters from the set: a-z 0-9 -_ ( ) { }
ntype |	string | No |	Notice Type	| [Refer Notice Types](#notice-types) 
archdate | date |	No | New Archive Date – If none provided, notice will archive immediately | YYYYMMDD
officeid | string |	No |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account |	20 characters

### Cancel Notice<br> (CancelNotice) 

This method is used to post a cancellation notice to any base notice type already in the Opportunities system. Provide a Solicitation Number or an Award Number (for stand- alone awards) and other data outlined below for the cancellation notice.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data |	  Notice | Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
response | PostingResponse | Complex type

CancelNotice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	No | Posting Date |	YYYYMMDD
offadd | string |	No | Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy |	65535 characters
officeid | String | No |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account |	20 characters
subject |	string | No |	Subject |	256 characters
solnbr |string | Yes | Solicitation # | 128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype | string | No | [Refer Notice Types](#notice-types) 	| 
awdnbr | string |	No | Award # |255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
archdate | date |	No | Archive Date | YYYYMMDD
contact | string | Yes | Contact Info | 255 characters
desc | string | Yes |	Cancellation Description | 65535 characters

## Contracting Officer/Contracting <br>Specialist Method Details

### Presolicitation <br>(submitPresol)

This method is used to submit a Pre-solicitation Notice.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
Data | Presol |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type defined below

Presol Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	No | Posting Date |	YYYYMMDD
zip |	string | No |	Zip Code (Deprecated) | 5 digits
classcod | string |	No |	Class-Code | Valid classification code (FAR, Section 5.207(g))
naics |	string | No |	NAICS Code | Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid | string |	Yes |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account | 20 characters
offadd | string |	No | Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy |	65535 characters
subject |	string | Yes|	Subject|	256 characters
solnbr | string |	Yes |	Solicitation # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate | date |	No - either respdate or archdate is required |	Response Date |	YYYYMMDD
archdate | date |	No - either respdate or archdate is required |	Archive Date | YYYYMMDD
contact |	string | Yes |	Contact Info | 255 characters
desc |string |Yes |	Description | 65535 characters
link | GovURL – complex type | No |	Government Link has URL & description |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	Yes | Government Email | 255 characters
links | DocumentLink[] | No |	Array of links |
files |	DocumentFile[] | No |	Array of files |
setaside | string |	No | [Refer Set-Aside Values](#set-aside-values) | 
popaddress | string |	No | Place of Performace Address | 65535 characters
popzip |string | No |	Place of Performace Zip | 5 digits
popcountry | string |	No | Place of Performace Country | 32 characters
recovery_act	| boolean |	No | Recovery Act | True or False

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string | Yes |Email Address |255 characters
desc | string	| No | Description | 255 characters

DocumentLink Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url | string | No |	External URL | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description/Title | 255 characters

DocumentFile Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename | string |	No | File Name | 255 characters
filedata | base64binary |	No | File Data | 250 MB
desc | string |	No | Description | 65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Combined/Synopsis<br> (submitCombined)

This method is used to submit a Combined/Synopsis Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | Combined |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

Combined Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	No | Posting Date |	YYYYMMDD
zip |	string | No |	Zip Code (Deprecated) | 5 digits
classcod | string |	Yes |	Class-Code | Valid classification code (FAR, Section 5.207(g))
naics | string | Yes | NAICS Code	| Valid NAICS Code <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid | string | Yes | Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account | 20 characters
offadd | string | No |Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy	| 65535 characters
solnbr | string |	Yes | Solicitation # | 128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate | date |	Yes | Response Date | YYYYMMDD
archdate | date |	No | Archive Date | YYYYMMDD
contact | string |Yes | Contact Info | 255 characters
desc | string |	Yes |	Description |	65535 characters
link | GovURL – complex type | No |	Government Link	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	Yes | Government Email | 255 characters
links |	DocumentLink[] | No |	Array Of links |
files |	DocumentFile[] | No |	Array of files |
setaside | string |	No | [Refer Set-Aside Values](#set-aside-values) | 
popaddress | string |	No | Place of Performace Address | 65535 characters
popzip | string |	No | Place of Performace Zip | 5 digits
popcountry | string |	No | Place of Performace Country | 32 characters
recovery_act | boolean | No |	Recovery Act | True or False

GovURL Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No | Website Address | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string | Yes | Email Address | 255 characters
desc | string |	No |	Description |	255 characters

DocumentLink Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No |	External URL | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description/Title | 255 characters

DocumentFile Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename | string | No | File Name | 255 characters
filedata | base64binary |	No | File Data | 250 MB
desc | string |	No | Description | 65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Modification/Amendment <br> (submitMod)

This method is used to submit a Modification/Amendment to any base notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | Mod |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

Mod Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	Yes - for AWARD  |	Posting Date |	YYYYMMDD
zip |	string |	No |Zip Code (Deprecated) |	5 digits
classcod |	string	 | Yes - for SOL, COMBINE, SSALE, ITB, JA   |	Class-Code	| Valid classification code (FAR, Section 5.207(g))
naics | 	string |	Yes - for COMBINE, SOL  | 	NAICS Code |	Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid |	string	| Yes |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account |	20 characters
offadd |	string	| No	| Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy |	65535 characters
subject	| string	| no |	Subject |	256 characters
solnbr | string |	Yes, EXCEPT No - Only for SNOTE | 	Solicitation # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype |	string |	Yes |	 Notice Type |	Valid values: PRESOL, COMBINE, SRCSGT, SSALE, SNOTE, SOL
respdate|	date|	Yes - for COMBINE, SOL <br><br> Either respdate or archdate required for SRCSGT, PRESOL	|Response Date	|YYYYMMDD
archdate  |	date|	Yes - for SNOTE, SSALE <br><br> Either respdate or archdate required for SRCSGT, PRESOL|	Archive Date|	YYYYMMDD
contact |	string |	Yes – for PRESOL, COMBINE, SRCSGT, SSALE, JA, ITB, SOL |	Contact Info |	255 characters
desc |	string |	Yes - for PRESOL, COMBINE, SRCSGT, SSALE, ITB, SOL, SNOTE	| Description |	65535 characters
link	| GovURL – complex type |	No |	Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	Yes – for PRESOL, COMBINE, SRCSGT, SSALE, JA, ITB, SOL, SNOTE |	Government Email |	255 characters
links |	DocumentLink[] |	No |	Array Of links |
files |	DocumentFile[] |	No |	Array of files |
setaside |	string |	No |	[Refer Set-Aside Values](#set-aside-values) |	
popaddress |	string |	No	 | Place of Performace Address |	65535 characters
popzip	| string |	No	 | Place of Performace Zip |	5 digits
popcountry |	string |	No	 | Place of Performace Country |	32 characters
recovery_act |	boolean |	No |	Recovery Act |	True or False

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string	| No |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string |	Yes |	Email Address	| 255 characters
desc |	string |	No |	Description |	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url | 	string	| No |	External URL |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string	| No | 	File Name |	255 characters
filedata |	base64binary |	No |	File Data	| 250 MB
desc |	string |	No |	Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Justification and Authorization <br> (J&A) Notice (submitJA)

This method is used to submit a J&A Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | JA |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

JA Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | Date	| No |	Posting Date |	YYYYMMDD
zip |	String |	No	| Zip Code (Deprecated) |	5 digits
classcod	| String |	Yes |	Class-Code |	Valid classification code
naics	| String |	No	| NAICS Code	| Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
offadd |	String	| No |	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy	|65535 characters
officeid |	String |	Yes |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account |	20 characters
subject |	String |	Yes |	Subject |	256 characters
solnbr	| String |	Yes |	Solicitation # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype	| string |	No	| [Refer Related Notices](#related-notices)  | 	
stauth	| String	| Yes |	J&A StatutoryAuthority<br><br> Note: Both foja & stauth values will be given under stauth in legacy |	[Refer Stauth Valid Values](#stauth-valid-values)
awdnbr |	String |	Yes |	Award Number |	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
modnbr |	String |	No |	Mod Number |	32 characters
awdamt |	String |	No |	Award Amount |	64 digits
awddate |	Date |	No	| Award Date |	YYYYMMDD
donbr	| String |	Yes |	Task/Delivery Order Number |	255 characters from the set: a-z A-Z 0-9 - _ ( )
archdate  |	Date |	No |	Archive Date |	YYYYMMDD
contact |	String |	Yes | 	Contact Info |	255 characters
desc |	String |	No |	Description	| 65535 characters
link |	GovURL |	No	| Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
links |	DocumentLink[]	| No |	Array Of links	|
files |	DocumentFile[]	| No |	Array of files	|
email |	GovEmail |	Yes | 	Government Email |	255 characters
recovery_act |	boolean |	No |	Recovery Act |	True or False;
correction	| boolean |	No |	Correction of previous J&A |	True or False <br> If correcting a previously submitted J&A notice, specify True and the system will lookup the j&a by award number and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	No |	Website Address	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	| string	| No |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address |	string	| Yes |	Email Address	| 255 characters
desc |	string |	No |	Description |	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string	| No |	External URL	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string	| No |	File Name	| 255 characters
filedata |	base64binary |	No |	File Data	| 250 MB
desc	| string |	No |	Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Sources Sought Notice <br> (submitSourcesSought)

This method is used to submit a Sources Sought Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | SourcesSought |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

SourcesSought Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date |	date |	No |	Posting Date |	YYYYMMDD
zip	 | string |	No |	Zip Code (Deprecated) |	5 digits
classcod |	string |	No |	Class-Code |	Valid classification code (FAR, Section 5.207(g))
naics	| string |	No |	NAICS Code |	Valid NAICS Code<br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid |	string |	Yes |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account	| 20 characters
offadd	| string	 | No |	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy |	65535 characters
subject |	string |	Yes |	Subject |	256 characters
solnbr	| string |	Yes |	Solicitation # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate |	date |	No - either respdate or archdate is required |	Response Date |	YYYYMMDD
archdate |	date |	No - either respdate or archdate is required |	Archive Date	| YYYYMMDD
contact	| string	| Yes |	Contact Info	| 255 characters
desc | string |	Yes |	Description |	65535 characters
link |	GovURL – complex type |	No |	Government Link	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email	| GovEmail – complex type |	Yes |	Government Email	| 128 characters
links |	DocumentLink[] |	No |	Array Of links	|
files |	DocumentFile[] |	No |	Array of files |
setaside	| string |	No |	[Refer Set-Aside Values](#set-aside-values) |	
popaddress |	string |	No |	Place of Performace Address |	65535 characters
popzip |	string	| No |	Place of Performace Zip	| 5 digits
popcountry |	string |	No |	Place of Performace Country |	32 characters
recovery_act |	boolean |	No	 | Recovery Act |	True or False

GovURL Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	 | string	| No |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string |	Yes |	Email Address |	255 characters
desc	| string |	No |	Description |	255 characters

DocumentLink Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string	| No |	External URL	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string	| No	| Description/Title |	255 characters

DocumentFile Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Foreign Government Standard <br> (submitForeignGovernment)

This service is deprecated. 

### Special Notice <br> (submitSpecialNotice)

This method is used to submit a Special Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | SpecialNotice |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

SpecialNotice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date	| Date |	No	| Posting Date |	YYYYMMDD
zip |	String |	No	 | Zip Code (Deprecated)|	5 digits
classcod |	String	| No	| Class-Code | 	Valid classification code (FAR, Section 5.207(g))
naics |	String |	No	| NAICS Code |	Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid	| String |	Yes |	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account	 | 20 characters
offadd |	String |	No |	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy	| 65535 characters
subject | 	String |	Yes |	Subject |	256 characters
solnbr	| String |	Yes |	Solicitation # |	128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
archdate |	Date |	Yes |	Archive Date |	YYYYMMDD
contact |	String |	No	| Contact Info |	65535 characters
desc |	String |	Yes |	Description |	255 characters
link	| GovURL – complex type	| No |	Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	Yes |	Government Email	| 255 characters
links |	DocumentLink[] 	| No |	Array Of links |
files	| DocumentFile[]	 | No	| Array of files	 |
recovery_act |	boolean |	No |	Recovery Act	| True or False

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|No|	Website Address|	255 characters, consist of a restricted set of characters (see URL specification - RFC2396)
desc|	string	|No|	Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	|string|	Yes|	Email Address	|255 characters
desc	|string	|No	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string|	No	|External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string	|No	|Description/Title	|255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No  |	File Name |	255 characters
filedata |	base64binary |	No 	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Sale of Surplus Property Notice <br> (submitSaleOfSurplus)

This method is used to submit a Sale of Surplus Property Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | SaleOfSurplus |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

SaleOfSurplus Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date |	date|	No|	Posting Date|	YYYYMMDD
zip|	string|	No|	Zip Code (Deprecated) |	5 digits
classcod|	string|	Yes	|Class-Code|	Valid classification code (FAR, Section 5.207(g))
naics|	string|	No|	NAICS Code|	Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid	|string	|Yes|	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account |	20 characters
offadd|	string|	No	|Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy	|65535 characters
subject|	string|	Yes|	Subject	|256 characters
solnbr|	string	|Yes	|Solicitation #|	128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
archdate|	date|	Yes|	Archive Date|	YYYYMMDD
contact|	string|	Yes|	Contact Info|	255 characters
desc|	string	|Yes|	Description	|65535 characters
link	|GovURL – complex type|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email	|GovEmail – complex type	|Yes|	Government Email|	128 characters
links|	DocumentLink[]|	No	|Array Of links	|
files	|DocumentFile[]|	No	|Array of files	|
recovery_act|	boolean	|No	|Recovery Act	|True or False

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|No	|Website Address	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string	|No	|Description	|255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address|	string|	Yes|	Email Address	|255 characters
desc	|string	|No	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	No|	External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string|	No|	Description/Title	|255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Solicitation <br> (submitSolicitation)

This method is used to submit a Solicitation Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | Solicitation |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

Solicitation Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	No | Posting Date |	YYYYMMDD
zip |	string | No |	Zip Code (Deprecated) | 5 digits
classcod | string |	Yes |	Class-Code | Valid classification code (FAR, Section 5.207(g))
naics | string | Yes | NAICS Code	| Valid NAICS Code <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid | string | Yes | Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account | 20 characters
offadd | string | No | Office Address	| 65535 characters. This field has been deprecated. The Contracting office address details are retrieved from the Federal Hierarchy
subject | string | Yes | Subject | 256 characters
solnbr | string |	Yes | Solicitation # | 128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate | date |	Yes  | Response Date | YYYYMMDD
archdate | date |	No  | Archive Date | YYYYMMDD
contact | string |Yes | Contact Info | 255 characters
desc | string |	Yes |	Description |	65535 characters
link | GovURL – complex type | No |	Government Link	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	Yes | Government Email | 255 characters
links |	DocumentLink[] | No |	Array Of links |
files |	DocumentFile[] | No |	Array of files |
setaside | string |	No | [Refer Set-Aside Values](#set-aside-values) | 
popaddress | string |	No | Place of Performace Address | 65535 characters
popzip | string |	No | Place of Performace Zip | 5 digits
popcountry | string |	No | Place of Performace Country | 32 characters
recovery_act | boolean | No |	Recovery Act | True or False

GovURL Complex Type Definition: 

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No | Website Address | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string | Yes | Email Address | 255 characters
desc | string |	No |	Description |	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No |	External URL | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description/Title | 255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename | string | No | File Name | 255 characters
filedata | base64binary |	No | File Data | 250 MB
desc | string |	No | Description | 65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Intent to Bundle Requirements <br> (DoD- Funded) (submitITB)

This method is used to submit an Intent to Bundle Requirements (DoD-Funded) Notice.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | ITB  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

ITB Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date	|Date	|No	|Posting Date	|YYYYMMDD
zip	|String|	No|	Zip Code (Deprecated)|	5 digits
classcod|	String|	Yes|	Class-Code|	Valid classification code (FAR, Section 5.207(g))
naics|	String|	No|	NAICS Code|	Valid NAICS Code <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid|	String|	Yes|	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account|	20 characters
offadd|	String	|No|	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy|	65535 characters
subject|	String|	Yes|	Subject	|256 characters
solnbr	|String	|Yes|	Solicitation #	|128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype	|string	|No|	 [Refer Related Notices](#related-notices)
awdnbr|	String	|Yes	|Award Number|	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
donbr|	String|	No	|Task/Delivery Order Number	|255 characters from the set: a-z A-Z 0-9 - _ ( )
archdate 	|Date	|No	|Archive Date|	YYYYMMDD
contact|	String|	Yes|	Contact Info	|255 characters; Default value = Primary, Other types are: Secondary, Owner
desc	|String	|Yes	|Description|	65535 characters
link|	GovURL|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
links	|DocumentLink[]|	No|	Array Of links	|
files|	DocumentFile[]	|No	|Array of files	|
email	|GovEmail|	Yes|	Government Email|	255 characters
recovery_act|	boolean	|No	|Recovery Act	|True or False
correction	|boolean	|No	|Correction of previous ITB|	True or False <br><br>If correcting a previously submitted ITB notice, specify True and the system will lookup the itb by award number, delivery number and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|No	|Website Address	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string|	No - Yes, if URL provided|	Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	|string	|Yes|	Email Address	|255 characters
desc|	string|	No 	|Description|	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	No	|External URL|	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No|	Description/Title	|255 characters

DocumentFile Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Fair Opportunity / Limited Sources <br> Justification (submitFairOpp)

This service is now deprecated. Instead, please use submitJA to perform the operation.

### General Notice <br> (submitNotice)

This is a general method that supports submitting all of the above notice types. The complex type for the input data consists of all possible data elements across all notice types. Users may setup their web service client to use this general method instead of calling the specific methods outlined above.  **The functionality is the same regardless of whether you use this general method, or the specific methods above. **

Input Parameter |	Type |	Description
------- | ------ | -------
Data | CompleteNotice  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

Complete notice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date|	date|	No	|Posting Date|	YYYYMMDD
notice_type	|string	|Yes|	 [Refer Notice Types](#notice-types)	|
zip	|string	|No	|Zip Code (Deprecated)|	5 digits
classcod|	string|	Yes - for SOL, COMBINE, SSALE, ITB, JA  |	Class-Code	|Valid classification code (FAR, Section 5.207(g))
naics	|string	|Yes - for COMBINE, SOL	|NAICS Code|	Valid NAICS Code  <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>
officeid|	String|	Yes|	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account	|20 characters
offadd	|string|	No|	Office Address (Deprecated). The Contracting office address details are retrieved from the Federal Hierarchy	|65535 characters
subject|	string|	Yes|	Subject|	256 characters
solnbr|	string|	Yes, EXCEPT No - Only for SNOTE|	Solicitation #	|128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype	|string	|No	| [Refer Related Notices](#related-notices)
awdnbr|	string|	Yes - for AWARD, ITB & JA |	Award #	|255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
donbr	|string	|Yes - for JA|	Delivery/Task Order Number	|	255 characters from the set: a-z A-Z 0-9 - _ ( )
awdamt	|string|	Yes - for AWARD 	|Award Amount|	64 digits
linenbr|	string	|No|	Award Line Item Number	|255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
awddate	|date|	Yes - for AWARD|	Award Date	|YYYYMMDD
stauth	|string	|Yes - for JA 	|J&A StatutoryAuthority<br><br> Note: Both foja & stauth values will be given under stauth in legacy| [Refer Stauth Valid Values](#stauth-valid-values)
respdate|	date|	Yes - for COMBINE, SOL <br><br> Either respdate or archdate required for SRCSGT, PRESOL	|Response Date	|YYYYMMDD
archdate  |	date|	Yes - for SNOTE, SSALE <br><br> Either respdate or archdate required for SRCSGT, PRESOL|	Archive Date|	YYYYMMDD
awardee|	string|	Yes – for AWARD |	Awardee	|65535 characters
awardee_duns|	string	|No	|Awardee DUNS	|9 digits with optional plus 4
contact|	string|	Yes – for PRESOL, COMBINE, SRCSGT, SSALE, JA, ITB, SOL|	Contact Info|	255 characters
desc	|string|	Yes - for PRESOL, COMBINE, SRCSGT, SSALE, ITB, SOL, SNOTE|	Main Description|	65535 characters
link|	GovernmentURL|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email|	GovernmentEmail|	Yes – for PRESOL, COMBINE, SRCSGT, SSALE, JA, ITB, SOL, SNOTE|	Government Email	|255 characters
links	|DocumentLink []|	No	|Array Of links	|
files	|DocumentFile[]|	No|	Array of files	|
setaside|	string|	No|	[Refer Set-Aside Values](#set-aside-values) |	
popaddress|	string|	No|	Place of Performace Addressress	|65535 characters
popzip|	string	|No	|Place of Performace Zip	|5 digits
popcountry|	string|	Yes – For wards; No – For rest|	Place of Performace Country|	32 characters
city|	string|	No	|City	|NA
state|	string|	No|	State	|NA
recovery_act	|boolean|	No|	Recovery Act|	True or False
correction|	boolean|	No|	Correction of previous notice for the following types:  Award #, Delivery Order #) – Awards, J&A’s, Intent to Bundle Requirements (DoD-Funded), Limited Source Justification <br><br> This is used to modify/correct notice types where uniqueness is potentially determined by fields other than Solicitation # (i.e. Award #, Delivery Order #)	|True or False<br><br> If correcting a previously submitted notice, specify True and the system will lookup the notice by award number, delivery order number, and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	No|	Website Address|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No	|Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address|	string|	Yes	|Email Address|	255 characters
desc	|string|	No	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string|	No	|External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No|	Description/Title|	255 characters

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Document Packages <br> (submitDocumentsAndLinksToNotice)

This method is used to attach document packages (non sensitive and sensitive but unclassified) to a notice modification.  This is similar to the EPSUPLOAD or DocumentUpload function currently found in the ftp/email electronic interface. The web service method now supports transmitting actual file data along with external links. Note: A base notice must already exist in the system.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | DocumentUpload  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

DocumentUpload Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
Date|	Date|	No	|Posting Date	|YYYYMMDD
solnbr	|String	|No|	Solicitation #|	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype	|String	|No|	Notice Type	| [Refer Notice Types](#notice-types) 
uploadtype|	String|	No |	Upload Type|	A for amendment, S for solicitation or any title for other; 255 characters
respdate	|Date	|No |Response Date|	YYYYMMDD
links|	DocumentLin k[]|	Yes; Either Links or Files needs to be provided|	Array Of links	|
files	|DocumentFile []|	Yes; Either Links or Files needs to be provided|	Array of files	|
officeid	|String|	No|	Office ID of the office where an opportunity is being submitted. Office ID must be associated with user account|	20 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|Yes|	External URL|	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	Yes|	Description/Title	|255 characters

DocumentFile Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	Yes |	File Name |	255 characters
filedata |	base64binary |	Yes	| File Data |	250 MB
desc	| string |	No	 | Description |	65535 characters
explicit_access | boolean |	No |	Explicit Access. Defaults to ‘false’. For Controlled Unclassified files, specify "true".|  
export_controlled	| boolean	| No	| Export Controlled. * Captured for future JCP validation.	| 

### Unarchive Notice <br> (unarchiveNotice)

This method is used to unarchive a notice or stand-alone award. Note: Provide a Solicitation Number or an Award Number to unarchive the related opportunity.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | UnarchiveNotice  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

UnarchiveNotice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr	|string	|Yes|	Solicitation #|	128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No	| Notice Type	| [Refer Notice Types](#notice-types) 
awdnbr	|string|	No|	Award #|	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
archdate	|date|	Yes|	New Archive Date|	YYYYMMDD

### Secure Document Package <br> (attachSecureDocumentPackagesToNotice)

Service is now deprecated. 

### Non-FBO Solicitation <br> (createNonFBOSolicitation)

Service is now deprecated. 

### Secure Document Packages <br> (attachSecureDocumentPackagesToNonFBOSolicitation)

Service is now deprecated. 

### Remove Secure Document Package <br> (removeSecureDocumentPackagesFromNonFBOSolicitation)

Service is now deprecated. 

### Non-FBO Solicitation Release <br> (releaseNonFBOSolicitation)

Service is now deprecated. 

### Un-Release-Non-FBO-Solicitation <br> (unreleaseNonFBOSolicitation)

Service is now deprecated. 

### Secure Technical Document Package <br> (createSecureDocumentPackage)

Service is now deprecated. 

### Add Files to Secure Document Package <br> (addFilesToSecureDocumentPackage)

Service is now deprecated. 

### Delete Files from Secure Document Package <br> (deleteFilesFromSecureDocumentPackage)

Service is now deprecated. 

### Delete Secure Document Package <br> (deleteSecureDocumentPackage)

Service is now deprecated. 

## Methods Available <br> to All Office Location Users

### getIVLList

This method is used to retrieve the Interested Vendors List (IVL) for a given solicitation.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | IVLListRequest  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | IVLListResponse | Complex type defined below

IVLListRequest Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string|	Yes|	Solicitation #| 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No	| Notice Type	| [Refer Notice Types](#notice-types) 

IVLListResponse Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
success|	boolean	|Success flag
data|	IVL[]|	Array of IVL Records
messages|	string[]|	Array of any messages, usually used in error case.

IVL Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
lname	|string	|Last Name
fname	|string	|First Name
email	|string	|Email
phone	|string	|Phone
contractor_name|	string|	Contractor Name
dba_name|	string|	DBA Name
duns|	string|	DUNS #
cage_code	|string|	Cage Code
address	|string	|Address
bus_types|	string|	Business Types
naics_codes|	string	|Naics Codes <br><a href="https://www.census.gov/eos/www/naics/">NAICS Reference</a>

### Authorized Parties List <br> (getAuthorizedPartyList)

This method is used to retrieve the Authorized Party lists for an FBO Solicitation or a Non-FBO Solicitation. A third argument - ‘status’ - can be provided to retrieve pending Explicit Access requests, rejected requests, approved vendors, or all. Specify the first parameter to the web service method for FBO Solicitations and leave the second parameter blank. If retrieving lists for Non-FBO Solicitations, leave the first parameter blank and specify the second parameter. Valid options for status field: approved, rejected, pending, or leave blank for all.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | AuthorizedPartyListResponse  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | AuthorizedPartyListResponse | Complex type defined below

AuthorizedPartyListRequest Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string|	Yes	|Solicitation #. Provide an empty string for this argument if using nonfbo_solnbr below | 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype|	string|	No|	Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr|	string|	No|	Non-fbo Solicitation #. Not supported for this method |
status| string	|No	|Valid Options: approved, pending, rejected, “empty value”. If empty, all status will be returned <br> <br> Note, use “pending” to pull the pending explicit access requests. |

AuthorizedPartyListResponse Complex Type Definition:

Output Parameter |	Type |	Description
------- | ------ | -------
success |	boolean|	Success flag
message	|string[]	|Array of any messages, usually used in error case
data |	AuthorizedParty[]|	Array of Authorized party Records

AuthorizedParty Complex Type Definition:

Output Parameter |	Type |	Description
------- | ------ | -------
type_of_request |	string|	Indicates if the id is a resource or a notice level request
resource_name|	string|	Only populates if the type_of_request is a resource.
id |	string|	Internal ID
status|	string|	Status of record (approved, rejected, pending). Pending indicates an explicit access request.
lname	|string|	Last Name
fname|	string|	First Name
email	|string	|Email
phone	|string	|Phone
contractor_name |string|	Contractor Name
dba_name|	string|	DBA Name
duns|	string|	DUNS #
cage_code	|string|	Cage Code

### Approve Explicit Access Requests <br> (approveExplicitAccessRequestByID)

This method is used to approve an Explicit Access request that is either in pending or rejected status. This method requires the internal ID which can be retrieved by first calling the getAuthorizedPartyList method. Specify an FBO Solicitation Number as the first argument.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

ExplicitAccessRequestComplex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string	|Yes|	Solicitation #| 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No|	Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr	|string|	No|	Non-fbo Solicitation #.  Not supported for this method|
Id|	string|	Yes|	Matches internal record ID. This is retrieved from getAuthorizedPartyList method above.|  32 characters


Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

### Approve Explicit Access Requests <br> (approveExplicitAccessRequestByVendorData)

This method is the same as the “approveExplicitAccessRequestByID” method, but it accepts vendor data in a structured format in order to locate the matching vendor account in the system. This method will only work if there is an exact match based on the vendor data provided, and only if a unique vendor can be determined. 

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data|	ExplicitAccessRequest	|Complex type defined below

ExplicitAccessRequestComplex Type Definition:

Element Name	|Type	|Required|	Description | Character Limit / Restrictions
-----|-----|-----|---- | -------
solnbr	|string	|Yes|	Solicitation # | 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype|	string|	No|	Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr|	string|	No|	Non-fbo Solicitation #.  Not supported for this method|
vendor|	VendorData	|Yes|	Complex type defined below|

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

VendorData Complex Type Definition:

Element Name | Type  | Description | Character Limit / Restrictions
------ | -------  | ------- | -------
lname|	string|	Last Name | 255 characters
fname	|string|	First Name | 255 characters
email	|string|	Email | 255 characters
contractor_name	|string	|Contractor Name | 255 characters
duns	|string	|DUNS # | 9 digits
cage_code|	string|	Cage Code | 5 alpha/numeric characters


### Reject Explicit Access Requests <br> (rejectExplicitAccessRequestByID)

This method is used to reject an Explicit Access request or Authorized Party record that is either in pending or approved status. This method requires the internal ID which can be retrieved by first calling the getAuthorizedPartyList method. Specify an FBO Solicitation Number as the first argument. 

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

ExplicitAccessRequestComplex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string	|Yes|	Solicitation # | 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No| Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr	|string|	No|	Non-fbo Solicitation #.  Not supported for this method|
Id|	string|	Yes|	Matches internal record ID. This is retrieved from getAuthorizedPartyList method above.| 32 characters
reason	|string|	Yes|	rejection reason not used in this method|

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type


### Reject Explicit Access Requests <br> (rejectExplicitAccessRequestByVendorData)

This method is the same as the “rejectExplicitAccessRequestByID” method, but it accepts vendor data in a structured format to locate the matching vendor account in the system. This method will only work if there is an exact match based on the vendor data provided and only if a unique vendor can be determined. 

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

ExplicitAccessRequestComplex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string|	Yes|	Solicitation # | 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No| Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr	|string	|No	|Non-fbo Solicitation #.  Not supported for this method|
vendor	|VendorData|	Yes|	Complex type defined below|
reason|	string|	Yes	|Rejection Reason | 65535 characters

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

VendorData Complex Type Definition:

Element Name | Type  | Description | Character Limit / Restrictions
------ | -------  | ------- | -------
lname|	string|	Last Name | 255 characters
fname	|string|	First Name | 255 characters
email	|string|	Email | 255 characters
contractor_name	|string	|Contractor Name | 255 characters
duns	|string	|DUNS # | 9 digits
cage_code|	string|	Cage Code | 5 alpha/numeric characters


### Add Authorized Party <br> (addAuthorizedParty)

This method is used to arbitrarily add vendor users to the Authorized Party list for a given FBO Solicitation. This method accepts an FBO Solicitation Number and a set of vendor data. The method attempts to lookup the vendor in the system based on the data provided and adds an Authorized Party record if the match is successful.  This method has been deprecated for Non-FBO Solicitation Number.

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

ExplicitAccessRequest Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr|	string|	Yes|	Solicitation # | 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
ntype	|string	|No	| Notice Type	| [Refer Notice Types](#notice-types) 
nonfbo_solbr|	string|	No	|Non-fbo Solicitation #.   Not supported for this method.|
Id	|string	|No	|Not used in this method|
vendor	|VendorData|	Yes|	Complex type defined below|

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

VendorData Complex Type Definition:

Element Name | Type  | Description | Character Limit / Restrictions
------ | -------  | ------- | -------
lname|	string|	Last Name | 255 characters
fname	|string|	First Name | 255 characters
email	|string|	Email | 255 characters
contractor_name	|string	|Contractor Name | 255 characters
duns	|string	|DUNS # | 9 digits
cage_code|	string|	Cage Code | 5 alpha/numeric characters

## Method Available for Data Export

### Get List of Notices <br> (getList)

This method is used to retrieve a list of base notices. For each record returned, an internal identifier/unique key is provided that must be used in subsequent getNoticeData calls to get the complete notice data (and any of its changes or awards posted). The method will return a maximum of 1000 records and allows filtering the results by specifying the notice type, solicitation number, award number, posted date range and documents to search (active or archive).   For performance reasons, at least one filter must be provided.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	NoticeListRequest|	Complex type defined below

NoticeListRequest Complex Type Definition:

Element Name|	Type|	Required|	Description | Character Limit / Restrictions
-----|-----|-----|-----|-----
notice_type	|string|	No (at least 1 field is required)|	 [Refer Notice Types](#notice-types) Note:Searches for award, j&a, itb and fairopps will return both standalone notices AND base notices that contain one of these type
solnbr	|string	|No (at least 1 field is required)	|Solicitation #| 128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
awdnbr	|string	|No	(at least 1 field is required)|Award # | 255 characters from the set: a-z A-Z 0-9 - _ ( ) { }
posted_from	|date|	No (at least 1 field is required)|	Posted From Date. YYYYMMDD.
posted_to	|date|	No (at least 1 field is required)|	Posted To Date. YYYYMMDD
documents_to_search	|string|	No (at least 1 field is required)|	Valid Values: ‘active’ or ‘archived’. Default is ALL if nothing provided.

Response:

Output Parameter|	Type|	Description
-----|-----|-----
response|	NoticeListResponse|	Complex type

NoticeListResponse Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
success|	boolean	|False if something failed in the request.
messages|	string[]	|Array of messages if application has any info about the call. Error Messages will be displayed when failures happened in the request. Eg : 401, 404 (Bad Request) etc.
num_records_returned|	int	|Number of records returned for pagination requested or default pagination.
total_num_records|	int|	Total Number of records that matched the search
data|	NoticeListItem[]|	Array of complex type defined below.

NoticeListItem Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
Notice_id	|string	|Unique Identifier for this notice
base_type	|string	|Notice type of original/base posting. Note that this is equivalent to current_type.
current_type	|string|	Current type of notice (i.e. if Presol becomes a solicitation or an award was posted)
last_posted_date|	date|	Datetime of the last change made to the notice.
subject	|string|	Notice subject
solnbr	|string	|Solicitation Number
awdnbr|	string	|Award Number
archived|	boolean	|True or false

### Get Notice Data <br> (getNoticeData)

This method is used to retrieve notice data and any changes/awards that were made. The notice_id from getList calls should be used in this call.   If document package data is requested, the total aggregate size for any request is 100MB. If a certain file pushes the total past this threshold, the data will not be returned for that file and any others encountered for the request; instead, links to the data will be provided and one can call the separate getFileData to cut down the size and to pull a specific document.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	NoticeDataRequest|	Complex type defined below

NoticeDataRequest Complex Type Definition:

Element Name|	Type|	Required|	Description | Character Limit / Restrictions
-----|-----|-----|----- |----- 
notice_id	|string	|No (at least 1 field is required)|	Unique ID found from getList call or ID’s for changes found in getNoticeData call. | 32 characters
get_changes	|boolean|	No (at least 1 field is required)|	True or false<br> Pass in true to get the full notice history with all changes
get_changes_from_date	|date|	No (at least 1 field is required)|	If maintaining a sync of changes, can specify a date so that only changes that have occurred since provided date will be returned.
get_file_data|	boolean|	No (at least 1 field is required)|	True or False<br> Pass in true and the method will return any file content stored in Contract Opportunities (attachment data will be retuned as Base64Encoding Format). If false, the meta details/links will still be provided.

Response:

Output Parameter|	Type|	Description
-----|-----|-----
response|	NoticeDataResponse|	Complex type

NoticeDataResponse Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
success	|boolean|	False if something failed in the request.
messages|	string[]|	Array of messages if application has any info about the call. Error Messages will be displayed when failures happened in the request. Eg : 401, 404 (Bad Request) etc.
notice|	NoticeData|	Complex Type defined below

NoticeData Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
id|	string|	Unique ID
notice_type|	string|	Type of notice
agency|	string|	Top level Agency
office|	string|	Office
location|	string|	Location
date|	dateTime|	Posting Date
zip|	string|	Zip Code
classcod|	string|	Class-Code
naics	|string|	NAICS Code
offadd	|string	|Office Address
subject	|string	|Subject
solnbr|	string	|Solicitation #
awdnbr|	string|	Award #
donbr	|string	|Delivery/Task Order Number
awdamt	|string	|Award Amount
linenbr	|string	|Award Line Item Number
awddate	|date|	Award Date
stauth	|string|	J&A StatutoryAuthority
foja|	String	|Justification Authority
modnbr	|string	|J&A and FairOpp Contract Modification Number
respdate	|date|	Response Date
archdate|	date|	Archive Date
awardee	|string|	Awardee
awardee_duns	|string|	Awardee DUNS
contact|	string|	Contact Info
desc|	string|	Main Description
link|	GovernmentURL	|Government Link
email|	Government Email|	Government Email
files	|DocumentPack ageData[]|	Array of package data if applicable
setaside	|string	|Set-Aside value
popaddress	|string	|Place of Performace Addressress
popzip	|string|	Place of Performace Zip
popcountry|	string|	Place of Performace Country
recovery_act	|boolean	|Recovery Act
correction|	boolean	|Correction of previous notice for the following types: Award #, Delivery Order #) – Awards, J&A’s, Intent to Bundle Requirements (DoD-Funded), Fair Opportunity / Limited Source Justification.
changes	|NoticeData[]	|This element will only be present on the base/original posting and will contain an array of changes (for any mods/awards/etc.). Each change uses the same complex type.

DocumentPackageData Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
package_id	|string	|Unique ID
label|	string|	Package label
type|	string|	Type of package
sensitive|	string|	Is the package marked as sensitive
pr_number|	string	|Identifier for sensitive data
project_number|	string|	Project number used for sensitive packages only
nsn_mmac	|string|	Used for sensitive packages only
part_number|	string|	Used for sensitive packages only
nomenclature|	string|	Used for sensitive packages only
export_controlled|	boolean	|True or False – used for sensitive packages only
explicit_access	|boolean|	True or False – used for sensitive packages only
is_cd_avail	|boolean|	True or False – used for sensitive packages only
files	|DocumentFile Data[]|	Array of Document Files/Links as described below

DocumentFileData Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
file_id	|string|	Unique ID
filename|	string|	Filename – only used for files stored on notices
filedata|	base64Binary|	File data – only used for files stored on notices
link|	string|	Link to file – used for files not stored on notices
desc|	string|	Description
size_limit_error|	boolean	|This element will be true if its size or aggregate file data for the request exceeds the max return size.

### Get Document Package Data <br> (getDocumentPackageData)

This service is now deprecated

### Get File Data <br> (getFileData)

This method provides the ability to pull in file data for a single file of a document package. The primary use of this method is if a single file’s size exceeds the 100MB max– when using this method for a single file, the file limit check does not occur.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	FileDataRequest|	Complex type defined below

FileDataRequest Complex Type Definition:

Element Name|	Type|	Required|	Description | Character Limit / Restrictions
-----|-----|-----|----- |-----
file_id	|string|	Yes|	Unique ID of a file found from getNoticeData call  (i.e. file_id element)| 32 characters

Response:

Output Parameter|	Type|	Description
-----|-----|-----
response|	FileDataResponse|	Complex type

NoticeDataResponse Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
success	|boolean|	False if something failed in the request.
messages|	string[]	|Array of messages if application has any info about the call
file|	DocumentFileData	|Complex Type defined below

DocumentFileData Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
file_id	|string|	Unique ID
filename|	string	|Filename – only used for files stored on FBO
notice_id	|string|	Unique identifier for a notice
filedata|	base64Binary|	File data – only used for files stored on FBO
link|	string	|Link to file – used for files not stored on FBO
desc	|string|	Description
size_limit_error|	boolean	|This element will be true if its size or aggregate file data for the request exceeds the max return size.

## Examples

Please note that variances may exist between SOAP requests generated by different XML tools and the samples below. The web service should still operate as expected as long as the syntax is CONSISTENT throughout the submission.

### submitPresol

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"             
       xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
            <soapenv:Header>
                <AuthenticationData xsi:type="sam:AuthenticationData">
                    <username xsi:type="xsd:string">system account user name</username>
                    <password xsi:type="xsd:string">system account password</password>
                    <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
                </AuthenticationData>
            </soapenv:Header>
            <soapenv:Body>
                <sam:submitPresol soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                    <data xsi:type="sam:Presol">
                        <officeid xsi:type="xsd:string">100525144</officeid>
                        <date xsi:type="xsd:date">20180101</date>
                        <zip xsi:type="xsd:string">2017</zip>
                        <classcod xsi:type="xsd:string">13</classcod>
                        <naics xsi:type="xsd:string">11150</naics>
                        <!--Optional:-->
                        <offadd xsi:type="xsd:string"></offadd>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm2</solnbr>
                        <!--Optional:-->
                        <respdate xsi:type="xsd:date"></respdate>
                        <!--Optional:-->
                        <archdate xsi:type="xsd:date">20300101</archdate>
                        <contact xsi:type="xsd:string">John Doe</contact>
                        <desc xsi:type="xsd:string">test</desc>
                        <!--Optional:-->
                        <link xsi:type="sam:GovURL">
                        <url xsi:type="xsd:string"></url>
                        <desc xsi:type="xsd:string"></desc>
                        </link>
                        <!--Optional:-->
                        <email xsi:type="sam:GovEmail">
                        <address xsi:type="xsd:string"></address>
                        <desc xsi:type="xsd:string"></desc>
                        </email>
                        <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]">
                        <DocumentLink>
                        <url xsi:type="xsd:string">http://beta.sam.gov</url>
                        <desc xsi:type="xsd:string">test beta sam link</desc>
                        </DocumentLink>
                        <DocumentLink>
                        <url xsi:type="xsd:string">https://faaco.faa.gov/index.cfm/attachment/download/84723</url>
                        <desc xsi:type="xsd:string">test attachment pdf link</desc>
                        </DocumentLink>
                        </links>
                        <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]">
                        <DocumentFile>       
                        <filename xsi:type="xsd:string">test_document1.pdf</filename>
                        <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q</filedata>
                        <desc xsi:type="xsd:string">test doc 1</desc>
                        <explicit_access xsi:type="xsd:boolean">true</explicit_access>
                        <export_controlled xsi:type="xsd:boolean"> </export_controlled>               
                        </DocumentFile>
                        <DocumentFile>
                        <filename xsi:type="xsd:string">test_document2.pdf</filename>
                        <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q22</filedata>
                        <desc xsi:type="xsd:string">test doc 2</desc>
                        <explicit_access xsi:type="xsd:boolean">false</explicit_access>
                        <export_controlled xsi:type="xsd:boolean"> </export_controlled>          
                        </DocumentFile>
                        </files>
                        <setaside xsi:type="xsd:string">SBA</setaside>
                        <!--Optional:-->
                        <popaddress xsi:type="xsd:string"></popaddress>
                        <!--Optional:-->
                        <popzip xsi:type="xsd:string"></popzip>
                        <!--Optional:-->
                        <popcountry xsi:type="xsd:string"></popcountry>
                        <!--Optional:-->
                        <recovery_act xsi:type="xsd:boolean"></recovery_act>
                    </data>
                </sam:submitPresol>
            </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV=“http://schemas.xmlsoap.org/soap/envelope/“>
    <SOAP-ENV:Header/>
        <SOAP-ENV:Body>
            <ns1:SubmitPresolResponse xmlns:ns1=“https://www.sam.gov/“>
                <return xmlns:xsi=“http://www.w3.org/2001/XMLSchema-instance” xsi:type=“ns1:PostingResponse”>
                    <success xsi:type=“xsd:boolean”>true</success>
                    <messages xsi:nil=“true” xsi:type=“ns1:ArrayOfstring”/>
                </return>
            </ns1:SubmitPresolResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitPresolResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitPresolResponse>
   </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
</textarea>
</details>

### submitCombined

<details>
    <summary>Request Sample</summary>
<textarea>
    <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
      <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitCombined soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
          <data xsi:type="sam:Combined">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date"></date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string">13</classcod>
            <naics xsi:type="xsd:string">111150</naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">test combine</subject>
            <solnbr xsi:type="xsd:string">STC_1</solnbr>
            <!--Optional:-->
            <respdate xsi:type="xsd:date">20181001</respdate>
            <!--Optional:-->
            <archdate xsi:type="xsd:date">20450101</archdate>
            <contact xsi:type="xsd:string">John Doe</contact>
            <desc xsi:type="xsd:string">test</desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
            <!--Optional:-->
            <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <!--Optional:-->
            <setaside xsi:type="xsd:string">SBA</setaside>
            <!--Optional:-->
            <popaddress xsi:type="xsd:string"></popaddress>
            <!--Optional:-->
            <popzip xsi:type="xsd:string"></popzip>
            <!--Optional:-->
            <popcountry xsi:type="xsd:string"></popcountry>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
         </data>
      </sam:submitCombined>
   </soapenv:Body>
    </soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitCombinedResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitCombinedResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitCombinedResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP ENC:arrayType="xsd:string[7]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">This opportunity cannot be published. Response date is required.</item>
                   <item xsi:type="xsd:string">NAICS code is required</item>
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">PSC code is required</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitCombinedResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitSourcesSought

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
<soapenv:Header>
           <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitSourcesSought soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
          <data xsi:type="sam:SourcesSought">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date"></date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string"></classcod>
            <naics xsi:type="xsd:string"></naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">title</subject>
            <solnbr xsi:type="xsd:string">ST_SRGT_1</solnbr>
            <!--Optional:-->
            <respdate xsi:type="xsd:date"></respdate>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <contact xsi:type="xsd:string">John Doe</contact>
            <desc xsi:type="xsd:string">test desc</desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
            <!--Optional:-->
            <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <!--Optional:-->
            <setaside xsi:type="xsd:string"></setaside>
            <!--Optional:-->
            <popaddress xsi:type="xsd:string"></popaddress>
            <!--Optional:-->
            <popzip xsi:type="xsd:string"></popzip>
            <!--Optional:-->
            <popcountry xsi:type="xsd:string"></popcountry>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
         </data>
      </sam:submitSourcesSought>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSourcesSoughtResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitSourcesSoughtResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSourcesSoughtResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Notice Id for the selected opportunity type already exists</item>
               </messages>
           </return>
       </ns1:SubmitSourcesSoughtResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### getList

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:getList soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:NoticeListRequest">
            <!--Optional:-->
            <notice_type xsi:type="xsd:string"></notice_type>
            <!--Optional:-->
            <solnbr xsi:type="xsd:string"></solnbr>
            <!--Optional:-->
            <awdnbr xsi:type="xsd:string"></awdnbr>
            <!--Optional:-->
            <posted_from xsi:type="xsd:date"></posted_from>
            <!--Optional:-->
            <posted_to xsi:type="xsd:date"></posted_to>
            <!--Optional:-->
            <documents_to_search xsi:type="xsd:string"></documents_to_search>
         </data>
      </sam:getList>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:getListResponse xmlns:ns1="https://www.sam.gov/">
            <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:NoticeListResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
                <num_records_returned xsi:type="xsd:int">10</num_records_returned>
                <total_num_records xsi:type="xsd:int">32</total_num_records>
                <data xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="ns1:NoticeListItem[10]" xsi:type="ns1:ArrayOfNoticeListItem">
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">b9b337da8b994afd878e962bfb2810fa</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm14</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">1b6192e5211c4710a25f0b7902ea5927</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm13</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">1c4d5d0487d347aca10401f5e9aa4182</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm12</solnbr>
                        <archived xsi:type="xsd:string">true</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">5777c3a43be741d390f390df3710e0e0</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm10</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">658bb55d747a463581c49eef158f2880</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">CB_SN</subject>
                        <solnbr xsi:type="xsd:string">Single_endpoint_CB87</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">a6ba7e2fca51497593d0725c0e5bfbd5</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">CB_SN</subject>
                        <solnbr xsi:type="xsd:string">Single_endpoint_CB0</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">4bb7bc12126f447ea49bb2737c797bae</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">CB_SN</subject>
                        <solnbr xsi:type="xsd:string">Single_endpoint_CB4</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">007cc9393a2b4bf3a186cc853514e8b5</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm9</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">11e42813dd1940f187d17108364264d6</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">CB_SN</subject>
                        <solnbr xsi:type="xsd:string">Single_endpoint_CB</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                    <item xsi:type="ns1:NoticeListItem">
                        <notice_id xsi:type="xsd:string">84be55bd35ff4948bd2a79a8bbb2b62d</notice_id>
                        <base_type xsi:type="xsd:string">PRESOL</base_type>
                        <current_type xsi:type="xsd:string">PRESOL</current_type>
                        <subject xsi:type="xsd:string">title</subject>
                        <solnbr xsi:type="xsd:string">testDm8</solnbr>
                        <archived xsi:type="xsd:string">false</archived>
                    </item>
                </data>
            </return>
        </ns1:getListResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:getListResponse xmlns:ns1="https://www.sam.gov/">
            <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:NoticeListResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Insufficient Search Criteria.</item>
                </messages>
            </return>
        </ns1:getListResponse>
    </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
</textarea>
</details>

### getNoticeData

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData"></AuthenticationData>
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
        </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:getNoticeData soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:NoticeDataRequest">
            <notice_id xsi:type="xsd:string">b9b337da8b994afd878e962bfb2810fa</notice_id>
            <!--Optional:-->
            <get_changes xsi:type="xsd:boolean"></get_changes>
            <!--Optional:-->
            <get_changes_from_date xsi:type="xsd:date"></get_changes_from_date>
            <!--Optional:-->
            <get_file_data xsi:type="xsd:boolean"></get_file_data></data>
      </sam:getNoticeData>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample – Success</summary>
<textarea>
Note: This service gets a list of all notices
 <SOAP-ENV:Envelope
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
	xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
	xmlns:ns1="https://www.sam.gov"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body>
		<ns1:getNoticeDataResponse
			xmlns:ns1="https://www.sam.gov/">
			<return xsi:type="ns1:NoticeDataResponse">
				<success xsi:type="xsd:boolean">true</success>
				<messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
				<notice xsi:type="ns1:NoticeData">
					<notice_id xsi:type="xsd:string">bf20590c11c74f209f992c074dbbb0d1</notice_id>
					<notice_type xsi:type="xsd:string">PRESOL</notice_type>
					<agency xsi:type="xsd:string">GENERAL SERVICES ADMINISTRATION</agency>
					<office xsi:type="xsd:string">FEDERAL ACQUISITION SERVICE</office>
					<location xsi:type="xsd:string">GSA/FAS CENTER FOR IT SCHEDULE PROG</location>
					<date xsi:type="xsd:date">2019-10-25T19:22:58</date>
					<classcod xsi:type="xsd:string">13</classcod>
					<naics xsi:type="xsd:string">111150</naics>
					<subject xsi:type="xsd:string">Presol Test</subject>
					<solnbr xsi:type="xsd:string">ST_PRESOL_Oct_0012</solnbr>
					<respdate xsi:type="xsd:date">2020-01-01T23:59:59-05:00</respdate>
					<archdate xsi:type="xsd:date">2020-01-01</archdate>
					<desc xsi:type="xsd:string">Description by XYZ</desc>
					<link xsi:type="xsd:string">https://xyz.com</link>
					<contact xsi:type="xsd:string">John Doe primary&lt;a href=""&gt; Gmail Desc&lt;/a&gt;</contact>
					<email xsi:type="ns1:GovEmail">
						<address xsi:type="xsd:string"></address>
						<desc xsi:type="xsd:string"></desc>
					</email>
					<popaddress xsi:type="xsd:string">Alton Sq</popaddress>
					<popzip xsi:type="xsd:string">20170</popzip>
					<popcountry xsi:type="xsd:string">USA</popcountry>
					<recovery_act xsi:type="xsd:boolean">true</recovery_act>
					<document_packages SOAP-ENC:arrayType="ns1:DocumentPackageData[1]" xsi:type="ns1:ArrayOfDocumentPackageData">
						<item xsi:type="ns1:DocumentPackageData">
							<package_id xsi:type="xsd:string">N/A</package_id>
							<label xsi:type="xsd:string">N/A</label>
							<type xsi:type="xsd:string">N/A</type>
							<sensitive xsi:type="xsd:boolean">true</sensitive>
							<pr_number xsi:type="xsd:string">N/A</pr_number>
							<project_number xsi:type="xsd:string">N/A</project_number>
							<nsn_mmac xsi:type="xsd:string">N/A</nsn_mmac>
							<part_number xsi:type="xsd:string">N/A</part_number>
							<nomenclature xsi:type="xsd:string">N/A</nomenclature>
							<export_controlled xsi:type="xsd:boolean">true</export_controlled>
							<explicit_access xsi:type="xsd:boolean">true</explicit_access>
							<is_cd_avail xsi:type="xsd:boolean">false</is_cd_avail>
							<files SOAP-ENC:arrayType="ns1:DocumentFileData[1]" xsi:type="ns1:ArrayOfDocumentFileData">
								<item xsi:type="ns1:DocumentFileData">
									<file_id xsi:type="xsd:string">14add82cf11844ceb15f0e61ebe26235</file_id>
									<type xsi:type="xsd:string">link</type>
									<filename xsi:type="xsd:string"/>
									<link xsi:type="xsd:string">http://fbo.gov</link>
									<desc xsi:type="xsd:string">test desc</desc>
									<size_limit_error xsi:type="xsd:string"/>
								</item>
							</files>
						</item>
					</document_packages>
				</notice>
			</return>
		</ns1:getNoticeDataResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>

</textarea>
</details>

<details>
    <summary>Response sample – error</summary>
<textarea>
   <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:getNoticeDataResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:NoticeData">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">notice_id from getList is required.</item>
               </messages>
           </return>
       </ns1:getNoticeDataResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitAward

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitAward soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:Award">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date">20180101</date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string"></classcod>
            <naics xsi:type="xsd:string"></naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">test Award</subject>
            <!--Optional:-->
            <solnbr xsi:type="xsd:string">AD_ST01</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string"></ntype>
            <awdnbr xsi:type="xsd:string">AD534</awdnbr>
            <awdamt xsi:type="xsd:string">100</awdamt>
            <!--Optional:-->
            <linenbr xsi:type="xsd:string"></linenbr>
            <awddate xsi:type="xsd:date">20180101</awddate>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <awardee xsi:type="xsd:string">XYZ Copr</awardee>
            <!--Optional:-->
            <awardee_duns xsi:type="xsd:string"></awardee_duns>
            <contact xsi:type="xsd:string">John Doe</contact>
            <!--Optional:-->
            <desc xsi:type="xsd:string"></desc>
            <!--Optional:-->
            <link xsi:type="fbo:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
            <!--Optional:-->
            <email xsi:type="fbo:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="fbo:ArrayOfDocumentLink" soapenc:arrayType="fbo:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="fbo:ArrayOfDocumentFile" soapenc:arrayType="fbo:DocumentFile[]"/>
            <!--Optional:-->
            <setaside xsi:type="xsd:string"></setaside>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
            <!--Optional:-->
            <correction xsi:type="xsd:boolean"></correction>
         </data>
      </sam:submitAward>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitAwardResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitAwardResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitAwardResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[7]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">Award Details Section - Contractor Awarded Name is a required field.</item>
                   <item xsi:type="xsd:string">Award Details Section - Contract Award Date is required field.</item>
                   <item xsi:type="xsd:string">Award Details Section - Amount is a required field.</item>
                   <item xsi:type="xsd:string">Award Details Section - Contract Award Number is a required field.</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitAwardResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitJA

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
  </soapenv:Header>
   <soapenv:Body>
      <sam:submitJA soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:JA">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date">20180101</date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string">13</classcod>
            <naics xsi:type="xsd:string"></naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">test JA</subject>
            <solnbr xsi:type="xsd:string">JA_ST_01</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string"></ntype>
            <stauth xsi:type="xsd:string">far1</stauth>
            <awdnbr xsi:type="xsd:string">Ad321</awdnbr>
            <awdamt xsi:type="xsd:string"></awdamt>
            <donbr xsi:type="xsd:string">TD123</donbr>
            <modnbr xsi:type="xsd:string"></modnbr>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <contact xsi:type="xsd:string">John Doe</contact>
            <!--Optional:-->
            <desc xsi:type="xsd:string"></desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
           <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
            <!--Optional:-->
            <correction xsi:type="xsd:boolean"></correction>
         </data>
      </sam:submitJA>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitJAResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitJAResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitJAResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[7]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Award Details Section - Task/Delivery Order Number is required field.</item>
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">PSC code is required</item>
                   <item xsi:type="xsd:string">This opportunity cannot be published. Authority is required.</item>
                   <item xsi:type="xsd:string">Award Details Section - Contract Award Number is a required field.</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitJAResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitITB

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
         <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
  <soapenv:Body>
     <sam:submitITB soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
        <data xsi:type="sam:ITB">
           <officeid xsi:type="xsd:string">100525144</officeid>
           <date xsi:type="xsd:date">20180101</date>
           <zip xsi:type="xsd:string"></zip>
           <classcod xsi:type="xsd:string">13</classcod>
           <naics xsi:type="xsd:string"></naics>
           <!--Optional:-->
           <offadd xsi:type="xsd:string"></offadd>
           <subject xsi:type="xsd:string">Test ITB</subject>
           <!--Optional:-->
           <solnbr xsi:type="xsd:string">ST_ITB1</solnbr>
           <!--Optional:-->
           <ntype xsi:type="xsd:string"></ntype>
           <!--Optional:-->
           <awdnbr xsi:type="xsd:string">ADV283532569</awdnbr>
           <!--Optional:-->
           <donbr xsi:type="xsd:string"></donbr>
           <!--Optional:-->
           <archdate xsi:type="xsd:date"></archdate>
           <contact xsi:type="xsd:string">John Doe</contact>
           <!--Optional:-->
           <desc xsi:type="xsd:string">Test desc</desc>
           <!--Optional:-->
           <link xsi:type="sam:GovURL">
              <url xsi:type="xsd:string"></url>
              <desc xsi:type="xsd:string"></desc>
           </link>
           <!--Optional:-->
           <email xsi:type="sam:GovEmail">
              <address xsi:type="xsd:string"></address>
              <desc xsi:type="xsd:string"></desc>
           </email>
           <!--Optional:-->
           <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
           <!--Optional:-->
           <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
           <!--Optional:-->
           <setaside xsi:type="xsd:string"></setaside>
           <!--Optional:-->
           <recovery_act xsi:type="xsd:boolean"></recovery_act>
           <!--Optional:-->
           <correction xsi:type="xsd:boolean"></correction>
        </data>
     </sam:submitITB>
  </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitITBResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitITBResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitITBResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[6]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">PSC code is required</item>
                   <item xsi:type="xsd:string">Award Details Section - Contract Award Number is a required field.</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitITBResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitSpecialNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
  <soapenv:Header>
    <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
  </soapenv:Header>
  <soapenv:Body>
     <sam:submitSpecialNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
        <data xsi:type="sam:SpecialNotice">
           <officeid xsi:type="xsd:string">100525144</officeid>
           <date xsi:type="xsd:date">20180101</date>
           <zip xsi:type="xsd:string"></zip>
           <classcod xsi:type="xsd:string"></classcod>
           <naics xsi:type="xsd:string"></naics>
           <!--Optional:-->
           <offadd xsi:type="xsd:string"></offadd>
           <subject xsi:type="xsd:string">Test SN</subject>
           <solnbr xsi:type="xsd:string">ST_SN01</solnbr>
           <!--Optional:-->
           <archdate xsi:type="xsd:date"></archdate>
           <!--Optional:-->
           <contact xsi:type="xsd:string"></contact>
           <desc xsi:type="xsd:string">John Doe</desc>
           <!--Optional:-->
           <link xsi:type="sam:GovURL">
              <url xsi:type="xsd:string"></url>
              <desc xsi:type="xsd:string"></desc>
           </link>
           <!--Optional:-->
           <email xsi:type="sam:GovEmail">
              <address xsi:type="xsd:string"></address>
              <desc xsi:type="xsd:string"></desc>
           </email>
           <!--Optional:-->
           <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
           <!--Optional:-->
           <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
           <!--Optional:-->
           <recovery_act xsi:type="xsd:boolean"></recovery_act>
        </data>
     </sam:submitSpecialNotice>
  </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSpecialNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitSpecialNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSpecialNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[3]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitSpecialNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>


### submitSolicitation

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
  <soapenv:Header>
    <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
  </soapenv:Header>
  <soapenv:Body>
      <sam:submitSolicitation soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
              <data xsi:type="sam:Solicitation">
                 <officeid xsi:type="xsd:string">690528</officeid>
                 <!--Optional:-->
                 <date xsi:type="xsd:date">20190726</date>
                 <!--Optional:-->
                 <zip xsi:type="xsd:string">20148</zip>
                 <classcod xsi:type="xsd:string">13</classcod>
                 <naics xsi:type="xsd:string">237310</naics>
                 <subject xsi:type="xsd:string">Test-submit Solicitation</subject>
                 <solnbr xsi:type="xsd:string">test-23434434558991</solnbr>
                 <respdate xsi:type="xsd:date">20200101</respdate>
                 <!--Optional:-->
                 <archdate xsi:type="xsd:date"></archdate>
                 <contact xsi:type="xsd:string">test contact</contact>
                 <desc xsi:type="xsd:string"> Test solicitation through SOAP service</desc>
                 <!--Optional:-->
                 <link xsi:type="sam:GovURL">
                    <url xsi:type="xsd:string"></url>
                    <desc xsi:type="xsd:string"></desc>
                 </link>
                 <email xsi:type="sam:GovEmail">
                    <address xsi:type="xsd:string">test1234546@test.com</address>
                    <desc xsi:type="xsd:string">primary email contact</desc>
                 </email>
                 <!--Optional:-->
                <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]">
                   <DocumentLink>
                   <url xsi:type="xsd:string">https://beta.sam.gov</url>
                   <desc xsi:type="xsd:string">test beta sam link</desc>
                   </DocumentLink>
                   <DocumentLink>
                    <url xsi:type="xsd:string">https://www.google.com</url>
                   <desc xsi:type="xsd:string">test attachment pdf link</desc>
                   </DocumentLink>
                 </links>
                 <!--Optional:-->
                   <files xsi:type="fbo:ArrayOfDocumentFile" soapenc:arrayType="fbo:DocumentFile[]">
                      <DocumentFile>
                          <filename xsi:type="xsd:string">test_document1.pdf</filename>
                          <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q</filedata>
                          <desc xsi:type="xsd:string">test doc 1</desc>
                          <explicit_access xsi:type="xsd:boolean">true</explicit_access>
                          <export_controlled xsi:type="xsd:boolean"></export_controlled>
                      </DocumentFile>
                      <DocumentFile>
                          <filename xsi:type="xsd:string">test_document2.pdf</filename>
                          <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q22</filedata>
                          <desc xsi:type="xsd:string">test doc 2</desc>
                          <explicit_access xsi:type="xsd:boolean">false</explicit_access>
                          <export_controlled xsi:type="xsd:boolean"></export_controlled>
                      </DocumentFile>
                  </files>
                 <!--Optional:-->
                 <setaside xsi:type="xsd:string">SBA</setaside>
                 <!--Optional:-->
                 <popaddress xsi:type="xsd:string">124356 Rockridge Dr Ashburn</popaddress>
                 <!--Optional:-->
                 <popzip xsi:type="xsd:string">20148</popzip>
                 <!--Optional:-->
                 <popcountry xsi:type="xsd:string">USA</popcountry>
                 <!--Optional:-->
                 <recovery_act xsi:type="xsd:boolean"></recovery_act>
              </data>
           </sam:submitSolicitation>
  </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSolicitationResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitSolicitationResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:SubmitSolicitationResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[5]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Description is a required field</item>
                    <item xsi:type="xsd:string">Response date is required.</item>
                    <item xsi:type="xsd:string">Notice ID must be unique based on selected notice type.</item>
                    <item xsi:type="xsd:string">Primary Contact is required</item>
                    <item xsi:type="xsd:string">Invalid request provided.</item>
                </messages>
            </return>
        </ns1:SubmitSolicitationResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### archiveNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
      <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitSaleOfSurplus soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:SaleOfSurplus">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date"></date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string">13</classcod>
            <naics xsi:type="xsd:string">111150</naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">Test sales surplus</subject>
            <solnbr xsi:type="xsd:string">testsalesur3</solnbr>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <contact xsi:type="xsd:string">John Doe</contact>
            <desc xsi:type="xsd:string">test desc</desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"> </url>
               <desc xsi:type="xsd:string"> </desc>
            </link>
            <!--Optional:-->
            <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string">abc@a.com</address>
               <desc xsi:type="xsd:string">email desc test</desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
         </data>
      </sam:submitSaleOfSurplus>
   </soapenv:Body>
</soapenv:Envelope>

</textarea>
</details>

<details>
    <summary>Response Sample – Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSaleOfSurplusResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitSaleOfSurplusResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample – Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitSaleOfSurplusResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[5]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">PSC code is required</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitSaleOfSurplusResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### archiveNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string"> Email of the contracting officer/specialist who can submit opportunities </emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:archiveNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:ArchiveNotice">
            <!--Optional:-->
            <date xsi:type="xsd:string"></date>
            <!--Optional:-->
            <officeid xsi:type="xsd:string">100525144</officeid>
            <solnbr xsi:type="xsd:string">testDm12</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string">COMBINE</ntype>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
         </data>
      </sam:archiveNotice>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:ArchiveNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:ArchiveNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:ArchiveNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Multiple Notices found. Please input more details</item>
               </messages>
           </return>
       </ns1:ArchiveNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitMod

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
<soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitMod soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:Mod">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date">20180101</date>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string">13</classcod>
            <naics xsi:type="xsd:string">111150</naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">Test Mod</subject>
            <solnbr xsi:type="xsd:string">STC_6</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string">COMBINE</ntype>
            <!--Optional:-->
            <respdate xsi:type="xsd:date">20190101</respdate>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <contact xsi:type="xsd:string">John Doe </contact>
            <desc xsi:type="xsd:string">Test Description</desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
            <!--Optional:-->
            <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <setaside xsi:type="xsd:string">SBA</setaside>
            <!--Optional:-->
            <popaddress xsi:type="xsd:string"></popaddress>
            <!--Optional:-->
            <popzip xsi:type="xsd:string"></popzip>
            <!--Optional:-->
            <popcountry xsi:type="xsd:string"></popcountry>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
         </data>
      </sam:submitMod>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitModResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitModResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitModResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[6]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">This opportunity cannot be published. Response date is required.</item>
                   <item xsi:type="xsd:string">NAICS code is required</item>
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">PSC code is required</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Primary Contact is required</item>
               </messages>
           </return>
       </ns1:SubmitModResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### unarchiveNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:unarchiveNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:UnarchiveNotice">
           <!--Optional:-->
            <officeid xsi:type="xsd:string">100525144</officeid>
            <solnbr xsi:type="xsd:string">testDm13</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string"></ntype>
            <!--Optional:-->
            <awdnbr xsi:type="xsd:string"></awdnbr>
            <archdate xsi:type="xsd:date"></archdate>
         </data>
      </sam:unarchiveNotice>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:UnarchiveNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:UnarchiveNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:UnarchiveNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Notice not found for correction.</item>
               </messages>
           </return>
       </ns1:UnarchiveNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:CompleteNotice">
            <officeid xsi:type="xsd:string">100525144</officeid>
            <date xsi:type="xsd:date"></date>
            <notice_type xsi:type="xsd:string">PRESOL</notice_type>
            <zip xsi:type="xsd:string"></zip>
            <classcod xsi:type="xsd:string">13</classcod>
            <naics xsi:type="xsd:string"></naics>
            <!--Optional:-->
            <offadd xsi:type="xsd:string"></offadd>
            <subject xsi:type="xsd:string">test SN title</subject>
            <!--Optional:-->
            <solnbr xsi:type="xsd:string">testSN_1</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string"></ntype>
            <!--Optional:-->
            <awdnbr xsi:type="xsd:string"></awdnbr>
            <!--Optional:-->
            <donbr xsi:type="xsd:string"></donbr>
            <!--Optional:-->
            <awdamt xsi:type="xsd:string"></awdamt>
            <!--Optional:-->
            <linenbr xsi:type="xsd:string"></linenbr>
            <!--Optional:-->
            <awddate xsi:type="xsd:date"></awddate>
            <!--Optional:-->
            <stauth xsi:type="xsd:string"></stauth>
            <!--Optional:-->
            <modnbr xsi:type="xsd:string"></modnbr>
            <!--Optional:-->
            <respdate xsi:type="xsd:date"></respdate>
            <!--Optional:-->
            <archdate xsi:type="xsd:date"></archdate>
            <!--Optional:-->
            <awardee xsi:type="xsd:string"></awardee>
            <!--Optional:-->
            <awardee_duns xsi:type="xsd:string"></awardee_duns>
            <!--Optional:-->
            <contact xsi:type="xsd:string">John Doe</contact>
            <!--Optional:-->
            <desc xsi:type="xsd:string">test desc</desc>
            <!--Optional:-->
            <link xsi:type="sam:GovURL">
               <url xsi:type="xsd:string"></url>
               <desc xsi:type="xsd:string"></desc>
            </link>
            <!--Optional:-->
            <email xsi:type="sam:GovEmail">
               <address xsi:type="xsd:string"></address>
               <desc xsi:type="xsd:string"></desc>
            </email>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]"/>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]"/>
            <!--Optional:-->
            <setaside xsi:type="xsd:string"></setaside>
            <!--Optional:-->
            <popaddress xsi:type="xsd:string"></popaddress>
            <!--Optional:-->
            <popzip xsi:type="xsd:string"></popzip>
            <!--Optional:-->
            <popcountry xsi:type="xsd:string"></popcountry>
            <!--Optional:-->
            <recovery_act xsi:type="xsd:boolean"></recovery_act>
            <!--Optional:-->
            <correction xsi:type="xsd:boolean"></correction>
         </data>
      </sam:submitNotice>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[4]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Opportunity type is required</item>
                   <item xsi:type="xsd:string">Contracting office is required</item>
                   <item xsi:type="xsd:string">Description is required</item>
                   <item xsi:type="xsd:string">Notice Id is required</item>
               </messages>
           </return>
       </ns1:SubmitNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### CancelNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
          <AuthenticationData xsi:type="fbo:AuthenticationData">
        <username xsi:type="xsd:string">##systemaccountid##</username>
        <password xsi:type="xsd:string">##systemaccountpwd##</password>
        <emailid xsi:type="xsd:string">##emailid##</emailid>
      </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:cancelNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:CancelNotice">
           <!--Optional:-->
           <officeid xsi:type="xsd:string">##officeid##</officeid>
           <!--Optional:-->
            <date xsi:type="xsd:date">##posteddate##</date>
            <!--Optional:-->
            <subject xsi:type="xsd:string">SOAP_IT_CancelNotice</subject>
            <solnbr xsi:type="xsd:string">##solnum##</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string">##modntype##</ntype>
            <!--Optional:-->
            <awdnbr xsi:type="xsd:string"></awdnbr>
            <!--Optional:-->
            <archdate xsi:type="xsd:string"></archdate>
            <!--Optional:-->
            <contact xsi:type="xsd:string">test contact</contact>
            <desc xsi:type="xsd:string">test desc</desc>
         </data>
      </sam:cancelNotice>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitPresolResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitPresolResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:CancelNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">This opportunity cannot be cancelled. This opportunity is already cancelled.</item>
               </messages>
           </return>
       </ns1:CancelNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### submitDocumentsAndLinksToNotice

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
  <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     		</AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:submitDocumentsAndLinksToNotice soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:DocumentUpload">
            <date xsi:type="xsd:date"></date>
            <officeid xsi:type="xsd:string"></officeid>
            <solnbr xsi:type="xsd:string">AD_ST01</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string">COMBINE</ntype>
            <uploadtype xsi:type="xsd:string"></uploadtype>
            <!--Optional:-->
            <respdate xsi:type="xsd:date"></respdate>
            <!--Optional:-->
            <links xsi:type="sam:ArrayOfDocumentLink" soapenc:arrayType="sam:DocumentLink[]">
              <DocumentLink>
              <url xsi:type="xsd:string">http://beta.sam.gov</url>
              <desc xsi:type="xsd:string">test beta sam link</desc>
              </DocumentLink>
              <DocumentLink>
               <url xsi:type="xsd:string">https://faaco.faa.gov/index.cfm/attachment/download/84723</url>
              <desc xsi:type="xsd:string">test attachment pdf link</desc>
              </DocumentLink>
            </links>
            <!--Optional:-->
            <files xsi:type="sam:ArrayOfDocumentFile" soapenc:arrayType="sam:DocumentFile[]">
              <DocumentFile>       
              <filename xsi:type="xsd:string">test_document3.pdf</filename>
              <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q</filedata>
              <desc xsi:type="xsd:string">test doc 1</desc>
<explicit_access xsi:type="xsd:boolean">true</explicit_access>
<export_controlled xsi:type="xsd:boolean"> </export_controlled>
              </DocumentFile>
              <DocumentFile>
               <filename xsi:type="xsd:string">test_document2.pdf</filename>
              <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q22</filedata>
              <desc xsi:type="xsd:string">test doc 2</desc>
<explicit_access xsi:type="xsd:boolean">false</explicit_access>
<export_controlled xsi:type="xsd:boolean"> </export_controlled>
              </DocumentFile>
            </files>
         </data>
      </sam:submitDocumentsAndLinksToNotice>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitDocumentsAndLinksToNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitDocumentsAndLinksToNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Error</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitDocumentsAndLinksToNoticeResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Multiple Notices found. Please input more details</item>
               </messages>
           </return>
       </ns1:SubmitDocumentsAndLinksToNoticeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### getFileData

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     		</AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:getFileData soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:FileDataRequest">
            <file_id xsi:type="xsd:string"></file_id>
         </data>
      </sam:getFileData>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:GetFileDataResponse xmlns:ns1="https://www.sam.gov/">
            <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:FileDataResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
                <files xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="ns1:DocumentFileData[4]" xsi:type="ns1:NoticeData">
                    <item xsi:type="ns1:DocumentFileData">
                        <file_id xsi:type="xsd:string">f16a71fdf4874edb8c4ce80281e3b36b</file_id>
                        <type xsi:type="xsd:string">link</type>
                        <filename xsi:type="xsd:string"/>
                        <link xsi:type="xsd:string">http://beta.sam.gov</link>
                        <desc xsi:type="xsd:string">test beta sam link</desc>
                        <size_limit_error xsi:type="xsd:string">0</size_limit_error>
                    </item>
                </files>
            </return>
        </ns1:GetFileDataResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:GetFileDataResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:FileDataResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[2]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">notice_id from getList is required.</item>
                   <item xsi:type="xsd:string">file_id is required.</item>
               </messages>
           </return>
       </ns1:GetFileDataResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### getIVLList
<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
     <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
     		</AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:getIVLList soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:IVLListRequest">
            <solnbr xsi:type="xsd:string">TEST_IVL_1</solnbr>
            <ntype xsi:type="xsd:string">PRESOL</ntype>
         </data>
      </sam:getIVLList>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:getIVLListResponse xmlns:ns1="https://www.sam.gov/">
            <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:IVLListResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
                <data xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="ns1:IVL[1]" xsi:type="ns1:ArrayOfIVL">
                    <item xsi:type="ns1:IVL">
                        <lname xsi:type="xsd:string">SANGHANI</lname>
                        <fname xsi:type="xsd:string">MEHUL</fname>
                        <email xsi:type="xsd:string">mehul.sanghani@octoconsulting.com</email>
                        <phone xsi:type="xsd:string">5712750120</phone>
                        <contractor_name xsi:type="xsd:string">OCTO CONSULTING GROUP, INC.</contractor_name>
                        <dba_name xsi:type="xsd:string"/>
                        <duns xsi:type="xsd:string">800127859</duns>
                        <cage_code xsi:type="xsd:string">4RSC0</cage_code>
                        <address xsi:type="xsd:string">10780 PARKRIDGE BOULEVARD 4TH FLOOR RESTON VIRGINIA 20191 UNITED STATES</address>
                        <bus_types xsi:type="xsd:string"/>
                        <naics_codes xsi:type="xsd:string">511210,517110,517210,517911,518210,519130,541330,541511,541512,541513,541519,541611,541612,541613,541614,541618,541690,541712,541990</naics_codes>
                    </item>
                </data>
            </return>
        </ns1:getIVLListResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:getIVLListResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:IVLListResponse">
               <success xsi:type="xsd:boolean">false</success>
               <messages xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                   <item xsi:type="xsd:string">Multiple Notices found. Please input more details</item>
               </messages>
           </return>
       </ns1:getIVLListResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### addAuthorizedParty

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/">
   <soapenv:Header>
     <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
<sam:addAuthorizedParty soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <data xsi:type="sam:ExplicitAccessRequest">
                <solnbr xsi:type="xsd:string">808978</solnbr>
                <ntype xsi:type="xsd:string">PRESOL</ntype>
                <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
                <id xsi:type="xsd:string"></id>
                <vendor xsi:type="tns:VendorData">
                    <lname xsi:type="xsd:string">test</lname>
                    <fname xsi:type="xsd:string">vendor </fname>
                    <email xsi:type="xsd:string">reitestuser.de@gmail.com</email>
                    <contractor_name xsi:type="xsd:string">REI Systems Inc</contractor_name>
                    <duns xsi:type="xsd:string">608999520</duns>
                    <cage_code xsi:type="xsd:string">4RSC0</cage_code>
                </vendor>
                <reason xsi:type="xsd:string"></reason>
            </data>
        </sam:addAuthorizedParty>   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:addAuthorizedPartyResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
        </ns1:addAuthorizedPartyResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:addAuthorizedPartyResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[2]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Solicitation Number and Non-FBO Solicitation Number cannot be specified together.</item>
                    <item xsi:type="xsd:string">This method requires all fields from complex type VendorData to find a match in the system; if vendor data not fully provided this error will be thrown.</item>
                </messages>
            </return>
        </ns1:addAuthorizedPartyResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### deleteNoticeorDocumentPackage

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>     
       <sam:deleteNoticeOrDocumentPackage soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:DeleteDocument">
            <solnbr xsi:type="xsd:string">542345345345235</solnbr>
            <!--Optional:-->
            <ntype xsi:type="xsd:string">PRESOL</ntype>
            <!--Optional:-->
            <deletetype xsi:type="xsd:string">notice</deletetype>
            <!--Optional:-->
            <deletemethod xsi:type="xsd:string">all</deletemethod>
            <!--Optional:-->
            <awdnbr xsi:type="xsd:string"></awdnbr>
            <!--Optional:-->
            <uploadtype xsi:type="xsd:string"></uploadtype>
         </data>
      </sam:deleteNoticeOrDocumentPackage>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:deleteNoticeOrDocumentPackageResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
        </ns1:deleteNoticeOrDocumentPackageResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:deleteNoticeOrDocumentPackageResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Solicitation Number or Award Number is required.</item>
                </messages>
            </return>
        </ns1:deleteNoticeOrDocumentPackageResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### getAuthorizedPartyList

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:sam="https://www.sam.gov/">
	<soapenv:Header>
	<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
	</soapenv:Header>
	<soapenv:Body>
      <sam:getAuthorizedPartyList soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <data xsi:type="sam:AuthorizedPartyListRequest">
            <solnbr xsi:type="xsd:string"> DTMA94Q20110047</solnbr>
            <ntype xsi:type="xsd:string">PRESOL</ntype>
            <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
        	 <status xsi:type="xsd:string">approved</status>
         </data>
      </sam:getAuthorizedPartyList>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:getAuthorizedPartyListResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
                <data SOAP-ENC:arrayType="ns1:AuthorizedParty[1]" xsi:type="ns1:ArrayOfAuthorizedParty">
                    <item xsi:type="ns1:AuthorizedParty">
                        <type_of_request xsi:type="xsd:string">resource</type_of_request>
                        <resource_name xsi:type="xsd:string">Screen Shot 2019-04-02 at 2.48.44 PM.png</resource_name>
                        <id xsi:type="xsd:string">7a8f625e1ae04cfc9ba44e762ae6454d</id>
                        <status xsi:type="xsd:string">approved</status>
                        <lname xsi:type="xsd:string">Entry</lname>
                        <fname xsi:type="xsd:string">Data</fname>
                        <email xsi:type="xsd:string">reitestuser.de@gmail.com</email>
                        <phone xsi:type="xsd:string">1+9734323019</phone>
                        <contractor_name xsi:type="xsd:string"/>
                        <dba_name xsi:type="xsd:string"/>
                        <duns xsi:type="xsd:string">608999520</duns>
                        <cage_code xsi:type="xsd:string"/>
                    </item>
</data>
            </return>
        </ns1:getAuthorizedPartyListResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:getAuthorizedPartyListResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Invalid NTYPE value provided.</item>
                </messages>
                <data SOAP-ENC:arrayType="ns1:AuthorizedParty[0]" xsi:type="ns1:ArrayOfAuthorizedParty"/>
            </return>
        </ns1:getAuthorizedPartyListResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### approveExplicitAccessRequestbyID

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:sam="https://www.sam.gov/">
	<soapenv:Header>
	<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
	</soapenv:Header>
                       <soapenv:Body>
   <sam:approveExplicitAccessRequestByID soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <data xsi:type="sam:ExplicitAccessRequest">
                <solnbr xsi:type="xsd:string">3278687234687234</solnbr>
                <ntype xsi:type="xsd:string">ITB</ntype>
                <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
                <id xsi:type="xsd:string">0b582b9c27664e4e966047f6833a324f</id>
                <vendor xsi:type="tns:VendorData">
                    <lname xsi:type="xsd:string"></lname>
                    <fname xsi:type="xsd:string"></fname>
                    <email xsi:type="xsd:string"></email>
                    <contractor_name xsi:type="xsd:string"></contractor_name>
                    <duns xsi:type="xsd:string"></duns>
                    <cage_code xsi:type="xsd:string"></cage_code>
                </vendor>
                <reason xsi:type="xsd:string">Testing approve by Id</reason>
            </data>
        </sam:approveExplicitAccessRequestByID>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:approveExplicitAccessRequestByIDResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
        </ns1:approveExplicitAccessRequestByIDResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:approveExplicitAccessRequestByIDResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Internal ID is required. Use getAuthorizedPartyList to retrieve this information.</item>
                </messages>
            </return>
        </ns1:approveExplicitAccessRequestByIDResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### rejectExplicitAccessRequestbyID

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header>
<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
      </AuthenticationData>
   </soapenv:Header>
   <soapenv:Body>
      <sam:rejectExplicitAccessRequestByID soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <data xsi:type="sam:ExplicitAccessRequest">
                <solnbr xsi:type="xsd:string">TEST-12345678</solnbr>
                <ntype xsi:type="xsd:string">PRESOL</ntype>
                <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
                <id xsi:type="xsd:string">0b582b9c27664e4e966047f6833a324f</id>
                <vendor xsi:type="tns:VendorData">
                    <lname xsi:type="xsd:string"></lname>
                    <fname xsi:type="xsd:string"></fname>
                    <email xsi:type="xsd:string"></email>
                    <contractor_name xsi:type="xsd:string"></contractor_name>
                    <duns xsi:type="xsd:string"></duns>
                    <cage_code xsi:type="xsd:string"></cage_code>
                </vendor>
                <reason xsi:type="xsd:string">Testing REJECT by Id</reason>
            </data>
        </sam:rejectExplicitAccessRequestByID>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:rejectExplicitAccessRequestByIDResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
        </ns1:rejectExplicitAccessRequestByIDResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:rejectExplicitAccessRequestByIDResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">A reason must be provided with an explicit access rejection.</item>
                </messages>
            </return>
        </ns1:rejectExplicitAccessRequestByIDResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### approveExplicitAccessRequestbyVendorData

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:sam="https://www.sam.gov/">
	<soapenv:Header>
	<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
	</soapenv:Header>
                       <soapenv:Body>
   <sam:approveExplicitAccessRequestByVendorData soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <data xsi:type="sam:ExplicitAccessRequest">
                <solnbr xsi:type="xsd:string">123456789</solnbr>
                <ntype xsi:type="xsd:string">SNOTE</ntype>
                <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
                <id xsi:type="xsd:string"></id>
                <vendor xsi:type="tns:VendorData">
                    <lname xsi:type="xsd:string">test</lname>
                    <fname xsi:type="xsd:string">test123</fname>
                    <email xsi:type="xsd:string">reitestuser.de@gmail.com</email>
                    <contractor_name xsi:type="xsd:string">REI</contractor_name>
                    <duns xsi:type="xsd:string">608999520</duns>
                    <cage_code xsi:type="xsd:string">1234</cage_code>
                </vendor>
                <reason xsi:type="xsd:string"></reason>
            </data>
        </sam:approveExplicitAccessRequestByVendorData>
   </soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
<ns1:approveExplicitAccessRequestByVendorDataResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
    </ns1:approveExplicitAccessRequestByVendorDataResponse>   
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns1:approveExplicitAccessRequestByVendorDataResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[1]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Multiple Notices found. Please input more details</item>
                </messages>
            </return>
        </ns1:approveExplicitAccessRequestByVendorDataResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

### rejectExplicitAccessRequestbyVendorData

<details>
    <summary>Request Sample</summary>
<textarea>
<soapenv:Envelope
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:sam="https://www.sam.gov/">
	<soapenv:Header>
	<AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account user name</username>
        <password xsi:type="xsd:string">system account password</password>
      	  <emailid xsi:type="xsd:string">Email of the contracting officer/specialist who can submit opportunities</emailid>
    </AuthenticationData>
	</soapenv:Header>
                       <soapenv:Body>
<sam:rejectExplicitAccessRequestByVendorData soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <data xsi:type="sam:ExplicitAccessRequest">
                <solnbr xsi:type="xsd:string">123456789</solnbr>
                <ntype xsi:type="xsd:string">pres</ntype>
                <nonfbo_solnbr xsi:type="xsd:string"></nonfbo_solnbr>
                <id xsi:type="xsd:string"></id>
                <vendor xsi:type="tns:VendorData">
                    <lname xsi:type="xsd:string">test</lname>
                    <fname xsi:type="xsd:string">test123</fname>
                    <email xsi:type="xsd:string">reitestuser.de@gmail.com</email>
                    <contractor_name xsi:type="xsd:string">REI</contractor_name>
                    <duns xsi:type="xsd:string">608999520</duns>
                    <cage_code xsi:type="xsd:string">1234</cage_code>
                </vendor>
                <reason xsi:type="xsd:string">testing rejection by vendor data</reason>
            </data>
        </sam:rejectExplicitAccessRequestByVendorData>   
</soapenv:Body>
</soapenv:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Success</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
<ns1:rejectExplicitAccessRequestByVendorDataResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">true</success>
                <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
            </return>
        </ns1:rejectExplicitAccessRequestByVendorDataResponse>    
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>

<details>
    <summary>Response Sample - Failure</summary>
<textarea>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:ns1="https://www.sam.gov" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
<ns1:rejectExplicitAccessRequestByVendorDataResponse xmlns:ns1="https://www.sam.gov/">
            <return xsi:type="ns1:PostingResponse">
                <success xsi:type="xsd:boolean">false</success>
                <messages SOAP-ENC:arrayType="xsd:string[2]" xsi:type="ns1:ArrayOfstring">
                    <item xsi:type="xsd:string">Request with Request ID: 12cf604442494a2face00074ac88b779 already rejected.</item>
                    <item xsi:type="xsd:string">Invalid request provided.</item>
                </messages>
            </return>
        </ns1:rejectExplicitAccessRequestByVendorDataResponse>   
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea>
</details>


## Business Rules and Error Messages

### General Error Messages

The following error messages may be returned as part of the response to various web service calls; these errors are not specific to one method and may apply to more than one.

* Authentication credentials were not found; username/password not found, blank or unrecognized.
* Multiple Accounts found for the same username/password. Unable to determine which one to use. Note: Per validation rules, an account can only be associated with a single Office Location to utilize web services.
* No username/password match.
* Office Location cannot be determined; user found not setup correctly, the office location cannot be determined.
* DATE field in unexpected format. Expects YYYYMMDD; all dates expected in this format unless otherwise noted.

### Specific Business Rules and Error Messages

This section details possible error messages for specific methods. Note that these rules are reflective of time of implementation and are subject to change in future.

#### Submit Methods
Individual business rules per field for all submit methods are listed in the table below.  
Note:


Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | -------
date 	|1. This field should meet the character limit/restrictions<br><br> Note: Date field allows current date and also any date in past/future |	1. DATE field in unexpected format. Expects YYYYMMDD
notice_type	|	1. This field is required where applicable |	1. Opportunity type is required
zip|	NA |NA
classcod	|1. This field is required where applicable<br><br>     2.If a wrong classification code is given, then the service throws an error | 1. Product Service Code is a required field <br><br> 2. This opportunity cannot be published. Classification Code provided did not match expected codes.
naics		|NA |  NAICS code is required
offadd| Not Used|	NA
officeid	|1. This field is required<br><br> 2. If an invalid officeid is given, then service throws an error<br><br> 3. If user does not have access to an office but is trying to make a submission to that office, then the service throws an error<br><br>	|1. Contracting Office is required<br><br> 2. Invalid officeid provided<br><br> 3. UnAuthorized Credentials. This may be the JWT issue or Role management issue. Please check
subject	|	1. This field is required where appicable 	|1. $.data.title: is missing but it is required
solnbr|	1. This field is required where applicable<br><br>  2. If submitting a notice with a duplicabe solnbr, then system throws an error <br><br>3. If solnbr is in invalid format, then service throws an error<br><br>4. If solnbr & ntype combination is not matched, then service throws an error <br><br> |	1. Notice Id is required <br><br>2. Notice Id for the selected opportunity type already exists <br><br>3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces <br><br>4.	Opportunity not found with given solicitation number and ntype <br><br>5. Notice ID must be unique based on selected notice type
ntype	 |1. When user tries to convert a notice and the solicitation number/ntype do not match the notice, then the service throws an error<br><br>  2. This field accepts only valid values listed. If invalid values are provided, then system throws an error. Also, if all the required field is given and this field is not given then service throws an error    |1. Opportunity not found with given solicitation number and ntype<br><br> 2. Invalid NTYPE value provided
awdnbr|	1. This field is required where applicable|	1. Award Details Section - Contract Award Number is a required field
donbr	|1. This field is required where applicable<br><br> 2. If value provided does not meet the character limit/restrictions, then service throws an error|	1. Award Details Section - Task/Delivery Order Number is required field<br><br> 2. Award Details Section - Task/Delivery Order Number - Please enter a valid number
awdamt|	 	1. This field is required where applicable<br><br> 2. If an invalid integer values is given, then service throws an error 	|1. Award Details Section - Amount is a required field<br><br> 2. Award Details Section - Please enter valid integer for Amount Field
linenbr|	NA	|NA
awddate	|	1. This field should meet the character limit/restrictions <br><br> 2. This field is required where applicable <br><br> 3. Date cannot be in the past|	1. DATE field in unexpected format. Expects YYYYMMDD<br><br> 2. Award Details Section - Contract Award Date is required field <br><br> 3. Award Details Section - Contract Award Date provided is in an invalid format <br><br>4. Award date provided is in the past. <br><br> 5.Contract Award Date set would result in inactive date being in the past.
stauth|	 1. This field is required where applicable <br><br> 2. This field accepts only valid values listed. If invalid values are provided, then system throws an error.|	1. Contract Award Number is a required field <br><br>2. Invalid Authority Fields, please refer to Contract Opportunities SOAP Web Service Tech Document valid authority fields
respdate|	1.	This field is required where applicable <br><br> 2.	This date cannot be in past; has to be in future. If the given date is in past, then system throws errors 	| 1.	DATE field in unexpected format. Expects YYYYMMDD<br><br> 2.	This opportunity cannot be published. Response date provided is in the past<br><br> 3.	This opportunity cannot be published. Response Date cannot exceed 5 years from current date <br><br> 4. One of Response date or Archive date is required <br><br> 5. One of Response date or Archive date is required
archdate|	1.	This field is required where applicable. Note user may receive "Auto 30 <br><br> 2.	This date cannot be current or in past; has to be in future|	1.	DATE field in unexpected format  Expects YYYYMMDD<br><br> 2.	This opportunity cannot be published. Archive date provided is in the past. <br><br> 3. One of Response date or Archive date is required
awardee	|	NA|	NA
awardee_duns|	1. Must provide a valid DUNS|	1. Unique Entity Identifier (duns) is invalid.
contact	|	1. This field is required where applicable	|1. Primary Contact is Required
desc| 	1. This field is required where applicable.|	1. Description is required
link|	NA	| NA
email	|1. This field is required where applicable <br><br>  2. If an invalid email address is provided, then the service throws an error	| 1. Primary Contact - Email is required <br><br>  2. Primary Contact - Please enter a valid Internet email address. Format: username@host.domain
links|	1. This field is not required but if url & description fields within the links and files are empty, then the service throws an error|	1. Links and/or files are not complete
files|	1. This field is not required but if url & description fields within the links and files are empty, then the service throws an error	|1. Links and/or files are not complete
setaside|	NA	|NA
popaddress|	This is a free Text. No validation is performed on this field	 | NA
popzip	|No	|5 digits
popcountry|	 No|	1. Award Details Section - Country is a required field
city	|NA|	NA
state	|	NA|	NA
recovery_act|	NA	|NA
correction|	1. When user tries to convert a notice and the solicitation number/ntype do not match the notice and correction = true, then the service throws an error<br><br> 2. If correction = True and the system cannot return a single record for the same delivery number/ award number / soliciation number or combination of all three, then the service throws an error<br><br> 3. If correction = True and the system returns more than one record for the same delivery number/ award number / sol-number or combination of all three, then service throws an error|	1. Notice could not be found for correction <br><br> 2. Multiple Notices found. Please input more details


#### submitDocumentsAndLinksToNotice

Individual business rules per field are listed across each of the fields in below table.  
* Note: Users cannot verify the attachments/links on front end (UI)
* Note: When none of the fields are given the service throws an error - Links and/or Files are not complete
* Note: When links/files are given but none of the other fields are given, then service throws an error - Multiple Notices found. Please input more details

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | -------
date|		Date field should meet the expected format	|DATE field in unexpected format. Expects YYYYMMDD
officeid|		1. If an invalid officeid is given, then service throws an error<br><br> 2. If contracting officer does not have access to an office but is trying to make a submission to that office, then the service throws an error<br><br> 3. Office ID must be associated with user account	|1. Invalid officeid provided<br><br> 2. UnAuthorized Credentials. This may be the JWT issue or Role management issue. Please check
solnbr|1a. This required field if not given, service throws an error <br><br>1b. If multiple notices are found with solicitation number given, then provide ntype and solicitation number combination<br><br> 2. If solicitation & ntype combination is not matched, then service throws an error<br><br> 3. If a space is given along with numbers in this field, then service throws an error	|1. Multiple notices found. Please input more details<br><br>  2. Notice not found for correction<br><br>  3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces
ntype	|	1. If field is not provided OR a wrong ntype is provided, then service throws an error  |  1. Notice Type value provided is not valid
uploadtype|	NA|	NA
respdate|	1.	No validation is performed on this field. However, if this value is available, this field should meet the character limit/restrictions	|1.	DATE field in unexpected format. Expects YYYYMMDD
links|	1.This field is not required but if url & description fields within the links and files are empty, then the service throws an error.<br><br> 2. If a link with same name already exists on the notice, then the system throws an error.<br><br> 3. If the Url is empty for a link, then the system throws an error.<br><br> 4.	If the description is missing for a link, then the system throws an error.| 1.	Links and/or files are not complete<br><br> 2.	Resource with the same name already exists<br><br> 3.	Link Resource must have a link<br><br> 4. Link Resource must have a description
files	|	1.	This field is not required but if url & description fields within the links and files are empty, then the service throws an error<br><br> 2.	If the filename is not provided for a file, then the system throws an error<br><br> 3.	If the filedata is empty for a file, then the system throws an error<br><br> 4.	If the filename provided has either no type specified or is an unsupported type, then the system throws an error<br><br> 5.	If the file size exceeds 250MB, then the system throws an error <br><br> 6. If a file with same name already exists on the notice, then the system throwns an error |1.	Links and/or files are not complete <br><br>2.	Attachment must have a name<br><br> 3.	Attachment must have content <br><br>4.	The file type that you are trying to upload is not supported<br><br> 5.	The file type that you are trying to upload is not supported<br><br>6.	Resource with the same name already exists



#### deleteNoticeOrDocumentPackage

Individual business rules per field are listed across each of the fields in below table.  

Element Name	| 	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr| 1. This field is required where applicable. If no value is provided, then service throws an error<br><br> 2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error	|1. Multiple notices found. Please input more details<br><br>  2. Notice not found<br><br>  3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces
awdnbr|	 If neither solnbr or awdnbr is provided, then the system throws an error|	Solicitation Number or Award Number is required
ntype|	1. If an invalid ntype is provided, then service throws an error |  	1. NTYPE value provided is not valid
deletetype|		1. If an invalid deletetype is provided, then service throws an error  |	Delete type provided is not “notice” or “attachment”
deletemethod|	1. If an invalid deletemethod is provided, then service throws an error  |	Delete method provided is not “latest” or “all”

#### archiveNotice

Individual business rules per field are listed across each of the fields in below table.  
* Note: : If a user tries to archive a notice that is already archived, then the service throws an error -  Opportunity already archived

Element Name	| 	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
date|	Date field should meet the expected format	|DATE field in unexpected format. Expects YYYYMMDD
solnbr|	1a. This required field if not given, service throws an error <br><br>1b. If multiple notices are found with solicitation number given, then provide ntype and solicitation number combination<br><br> 2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error|	1. Multiple notices found. Please input more details<br><br>  2. Notice not found for correction<br><br> 3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces
officeid	|	Office ID must be associated with user account	|NA
ntype|	1. If an invalid ntype is provided, then service throws an error<br><br>    2. If a valid ntype but a wrong ntype is not provided for the solnbrthen service throws an error | 1. NTYPE value provided is not valid 2. Notice not found for correction
archdate|	1.	No validation is performed on this field. However, if this value is available, this field should meet the character limit/restrictions<br><br> 2.	This date cannot be current or in past; has to be in future	|1.	DATE field in unexpected format. Expects YYYYMMDD<br><br> 2.	This opportunity cannot be published. Archive date provided is in the past

#### unarchiveNotice

Individual business rules per field are listed across each of the fields in below table.  
* Note: : If a user tries to unarchive a notice that is already unarchived, then the service throws an error - Opportunity is not archived.
* Note: If a user tries to unarchive an active notice, then the service throws an error - Opportunity is active

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr|	1a. This required field if not given, service throws an error <br><br>1b. If multiple notices are found with solicitation number given, then provide ntype and solicitation number combination<br><br> 2. If solicitation & ntype combination is not matched, then service throws an error	|1. Multiple notices found. Please input more details<br><br>  2. Notice not found for correction
officeid|	Office ID must be associated with user account	|NA
ntype|		1. If field is not provided OR a wrong ntype is provided, then service throws an error |  	1. NTYPE value provided is not valid
awdnbr	|	NA|	NA
archdate|	1. This field is required where applicable  <br><br>2. If this value is available, this field should meet the character limit/restrictions <br><br>3.	If current date or a past date is provided, then the system throws an error<br><br>  3.	If no archive date is given, then the system throws an error| 1.	DATE field in unexpected format. Expects YYYYMMDD<br><br> 2.	New archive date provided is in the past<br><br> 3.	$.reason: null found, string expected. Unable to process request. Please try again

#### cancelNotice 

Individual business rules per field are listed across each of the fields in below table.  
* Note: : If user tries to cancel already cancelled opportunity, service throws an error - This opportunity cannot be cancelled. This opportunity is already cancelled. Unable to process request. Please try again.
* Note: -	When user tries to cancel a notice without giving any input, then the service throws an error ‘Unable to process request. Please try again’

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
date|	Date field should meet the expected format	|DATE field in unexpected format. Expects YYYYMMDD
officeid|	Office ID must be associated with user account	|NA
subject|		NA|	NA
solnbr|	1a. This required field if not given, service throws an error<br><br> 1b. If multiple notices are found with solicitation number given, then provide ntype and solicitation number combination<br><br> 2. If valid solnbr is given with a different ntype, then service throws an error<br><br> 3. If a space is given along with numbers in this field, then service throws an error	|1. Multiple Notices found. Please input more details<br><br>  2. Notice not found for correction<br><br>  3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces
ntype	|	1. If field is not provided OR a wrong ntype is provided, then service throws an error   | 1. Notice Type value provided is not valid
awdnbr|		NA|	NA
archdate|	1.	No validation is performed on this field. However, if this value is available, this field should meet the character limit/restrictions<br><br> 2.	This date cannot be in past; has to be in future|	1.	DATE field in unexpected format. Expects YYYYMMDD<br><br>  2.	This opportunity cannot be cancelled
contact| NA| NA
desc|	1. This field is required where applicable |	1. Unable to process request. Please try again

#### getNoticeData

Individual business rules per field are listed across each of the fields in below table.  

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
notice_id	|	notice_id is required|	notice_id from getList is required
Get_changes|		NA|	NA
get_changes_from_date|		Date field should meet the expected format.|	DATE field in unexpected format. Expects YYYYMMDD
get_file_data	|NA	|NA

#### getList

Individual business rules per field are listed across each of the fields in below table.  
* Note: Although none of the individual elements are mandatory, at least one filter should be given to perform the operation. If no filters are entered, then system throws an error - Insufficient Search Criteria.

Element Name	 |	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
notice_type	 |	 Valid Notice Type must be provided | Notice Type is not recognized
solnbr|	NA|	NA
awdnbr|		NA|	NA
posted_from	|	Date field should meet the expected format|	DATE field in unexpected format. Expects YYYYMMDD
posted_to|Date field should meet the expected format	|DATE field in unexpected format. Expects YYYYMMDD
documents_to_search|	NA|	NA

#### getFileData

Individual business rules per field are listed across each of the fields in below table.  
* Note: If a wrong combination of file_id and notice_id is given, then the service throws a success message without any data.

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
file_id	|1. This field is required where applicable <br> 2. If an invalid file Id is provided, then the system throws an error.|	1. file_id is required <br> 2.	File Id not found. Please enter a valid Id.

#### getIVLListResponse

Individual business rules per field are listed across each of the fields in below table.  

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr|		1. If an incorrect solicitation number and ntype combination is given, the service throws an error<br><br>   2a. If this required field if not given, service throws an error <br><br>2b. If multiple notices are found with solicitation number given, then provide ntype and solicitation number combination |1. Notice not found <br><br>2a. Notice not found<br><br> 2b. Multiple Notices found. Please input more details
ntype|	NA	|NA

#### getAuthorizedPartyList

Individual business rules per field are listed across each of the fields in below table.  

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr|	 1. This field is required where applicable. If no value is provided, then service throws an error<br><br> 2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error<br><br> 4. If ntype value is not provided and the solnbr is not unique or if multiple notices are found with same solnbr and ntype, then the system throws an error |	1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces<br><br> 4. Multiple notices found. Please input more details
ntype|		If an invalid ntype is provided, then service throws an error  | 1. NTYPE value provided is not valid
nonfbo_solbr |	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together <br><br>2.	addAuthoizedParty service is deprecated for Non-FBO Solicitations
status|	1.	If the status value entered doesn’t match the valid values , then the system throws an error|	1.	Status value is invalid

#### approveExplicitAccessRequestByID

Individual business rules per field are listed across each of the fields in below table.

ID can be obtained through getAuthorizedPartyList   

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr	|	1. This field is required where applicable. If no value is provided, then service throws an error <br><br>2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error<br><br> 4. If ntype value is not provided and the solnbr is not unique, then the system throws an error 	|1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces <br><br>4. Multiple notices found. Please input more details
ntype	|If an invalid ntype is provided, then service throws an error  | 1. NTYPE value provided is not valid
nonfbo_solbr |	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together<br><br> 2.	approveExplicitAccessRequestByID service is deprecated for Non-FBO Solicitations
id|		1.	If the request Id is not provided, then the system throws an error<br><br> 2.	If the request Id provided is already approved, then the service throws an error<br><br>3.	If the solicitation number provided does not match the solicitation number of the request Id, then the service throws an error<br><br> 4.	If the solicitation number provided matches with the solicitation number of the  request Id  but does not match with the provided N type, then the service throws an error	|1.	Internal ID is required. Use getAuthorizedPartyList to retrieve this information<br><br> 2.	Request with Request ID: #id already approved<br><br> 3.	You have request that is tied to different solicitation number<br><br> 4.	You have request that is tied to the same solicitation number but different notice type

#### approveExplicitAccessRequestByVendorData

Individual business rules per field are listed across each of the fields in below table.

Vendor can be obtained through getAuthorizedPartyList   


Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr	|	1. This field is required where applicable. If no value is provided, then service throws an error <br><br>2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If ntype value is not provided and the solnbr is not unique or if multiple notices are found with same solnbr and ntype, then the system throws an error. 	|1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Multiple notices found. Please input more details. 
ntype	|If an invalid ntype is provided, then service throws an error  | 1. Invalid NTYPE value provided.
nonfbo_solbr |	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together<br><br> 2.	approveExplicitAccessRequestByID service is deprecated for Non-FBO Solicitations
vendor	|1.	If all the elements in the Vendor Data complex definition are not provided, then the system throws an error. <br>2.	If no match is found in the system for the vendor data provided, then the system throws an error. <br> 3.	If the Explicit Access request found for the vendor and solnum is already approved, then the system throws an error.|	1.	This method requires all fields from complex type VendorData to find a match in the system; if vendor data not fully provided this error will be thrown. <br> 2.	No contact match on vendor data provided.  <br> 3.	Request with Request ID: #id already approved.

#### addAuthorizedParty

Individual business rules per field are listed across each of the fields in below table.  

Element Name	| 	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr|	1. This field is required where applicable. If no value is provided, then service throws an error <br><br>2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error<br><br> 4. If ntype value is not provided and the solnbr is not unique or if multiple notices are found with same solnbr and ntype, then the system throws an error |	1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces<br><br> 4. Multiple notices found. Please input more details
ntype|	If an invalid ntype is provided, then service throws an error |  1. NTYPE value provided is not valid
nonfbo_solbr 	|	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together<br><br> 2.	addAuthoizedParty service is deprecated for Non-FBO Solicitations
vendor|		1.	If all the elements in the Vendor Data complex definition are not provided, then the system throws an error<br><br> 2.	If no match is found in the system for the vendor data provided, then the system throws an error<br> 3. If the vendor is already added as an authorized party on the notice, then the system throws an error.|	1.	This method requires all fields from complex type VendorData to find a match in the system; if vendor data not fully provided this error will be thrown<br><br> 2.	No contact match on vendor data provided <br> 3.	Duplicate request. Vendor is already added as an authorized party on the notice

#### rejectExplicitAccessRequestByID

Individual business rules per field are listed across each of the fields in below table.  

Element Name	 |	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr|	1. This field is required where applicable. If no value is provided, then service throws an error <br><br> 2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If a space is given along with numbers in this field, then service throws an error<br><br> 4. If ntype value is not provided and the solnbr is not unique, then the system throws an error|	1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Notice Id can only contain 128 characters from the following set: a-z A-Z 0-9 - _ ( ) { } with no spaces <br/> 4. Multiple notices found. Please input more details
ntype|	1.	If an invalid ntype is provided, then service throws an error   |	1. NTYPE value provided is not valid
nonfbo_solbr |	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together<br><br> 2.	rejectExplicitAccessRequestByID service is deprecated for Non-FBO Solicitations
id|		1.	If the request Id is not provided, then the system throws an error<br><br> 2.	If the request Id provided is already rejected, then the service throws an error<br><br> 3.	If the solicitation number provided does not match the solicitation number of the request Id, then the service throws an error<br><br> 4.	If the solicitation number provided matches with the solicitation number of the  request Id  but does not match with the provided N type, then the service throws an error|	1.	Internal ID is required. Use getAuthorizedPartyList to retrieve this information<br><br> 2.	Request with Request ID: #id already rejected<br><br> 3.	You have request that is tied to different solicitation number<br><br> 4.	You have request that is tied to the same solicitation number but different notice type
reason|  1.	This is a required field. If no value is provided, then the system throws an error.| 1.	A reason must be provided with an explicit access rejection.

#### rejectExplicitAccessRequestByVendorData
Individual business rules per field are listed across each of the fields in below table.  

Element Name	|	Business Rules |	Error Messages with respect to business rules (If any)
------ | ------- | ------- | ------- | --------
solnbr	|	1. This field is required where applicable. If no value is provided, then service throws an error <br><br>2. If invalid combination of ntype and solnbr is provided, then system throws an error<br><br>  3. If ntype value is not provided and the solnbr is not unique or if multiple notices are found with same solnbr and ntype, then the system throws an error. 	|1. Solicitation Number is required<br><br> 2. Notice not found<br><br> 3. Multiple notices found. Please input more details. 
ntype		|If an invalid ntype is provided, then service throws an error  | 1. Invalid NTYPE value provided.
nonfbo_solbr |	1.	If both solnbr and nonfbo_solbr are provided, then the service throws an error<br><br> 2.	If only nonfbo_solbr is provided, then the service throws an error| 1.	Solicitation Number and Non-FBO Solicitation Number cannot be specified together<br><br> 2.	rejectExplicitAccessRequestByID service is deprecated for Non-FBO Solicitations
vendor|		1.	If all the elements in the Vendor Data complex definition are not provided, then the system throws an error<br><br> 2.	If no match is found in the system for the vendor data provided, then the system throws an error<br> 3. If the vendor is already added as an authorized party on the notice, then the system throws an error.|	1.	This method requires all fields from complex type VendorData to find a match in the system; if vendor data not fully provided this error will be thrown<br><br> 2.	No contact match on vendor data provided <br> 3.	Duplicate request. Vendor is already added as an authorized party on the notice
reason|  1.	This is a required field. If no value is provided, then the system throws an error.| 1.	A reason must be provided with an explicit access rejection.




















#### submitFairOpps

This service is now deprecated. Instead, please use submitJA to perform the operation.

#### submitForeignGovernment

This service is now deprecated.

#### setBidModuleOptions
Service is now deprecated. 

#### getBidModuleResponses
Service is now deprecated. 

#### createSecureDocumentPackage
Service is now deprecated. 

#### addFilesToSecureDocumentPackage
Service is now deprecated. 

#### deleteFilesFromSecureDocumentPackage
Service is now deprecated. 

#### deleteSecureDocumentPackage
Service is now deprecated. 

#### releaseSecureDocumentPackage
Service is now deprecated. 

#### attachSecureDocumentPackagesToNotice
Service is now deprecated. 

#### createNonFBOSolicitation
Service is now deprecated. 

#### attachSecureDocumentPackagesToNonFBOSolicitation
Service is now deprecated. 

#### removeSecureDocumentPackagesFromNonFBOSolicitation
Service is now deprecated. 

#### releaseNonFBOSolicitation
Service is now deprecated. 

#### unreleaseNonFBOSolicitation
Service is now deprecated. 




## FAQ

_NA_

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov)

## Change Log

Date | Version | Description
------|---------------|---------
5/10/2019 | v0.1 | Base Version
7/22/2019 | v0.2 | Workflow Chart Added
8/01/2019  | v0.3 | Added IP Address Validation and Type of Connection 
8/01/2019 | v0.4 | Added the details for the Solicitation notice type and business rules for nType
8/19/2019 | v0.5 | SUBMITPRESOL/SOURCESSOUGHT, SUBMITCOMBINED, SUBMITAWARD, SUBMITSALEOFSURPLUS, SUBMITJA, SUBMITITB, SUBMITSPECIANOTICE, SUBMITMOD, ARCHIVENOTICE, UNARCHIVENOTICE, CANCELNOTICE, SUBMITDOCUMENTSANDLINKS, GETLIST, GETNOTICEDATA, GETFILEDATA, DELETENOTICE parameters updated <br> User Account Section Updated
9/25/2019 | v0.6 | Updated required fields for DocumentLink, DocumentFile, ArchiveNotice, UnArchiveNotice, CancelNotice and DeleteNoticeOrDocumentPackage ComplexType definitions
10/10/2019 | v0.7 | Updated the Set-Aside values with the latest codes
10/28/2019 | v0.8| Added Notice Type and Related Notice sections for reference. Updated the character limits. Removed redundant Required and Character Limit columns from Business Rules section. Consolidated Business Rules section for all Submit methods. Updated submitMod and submitNotice methods to align with implemenation. 


<p><small><a href="#">Back to top</a></small></p>

