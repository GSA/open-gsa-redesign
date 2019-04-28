---
title: Opportunity Management SOAP APIs
banner-heading: Opportunity Management SOAP APIs
---

## Overview

The Opportunity Management SOAP APIs will allow authorized users to submit and request opportunities data. This document will provide electronic users with the technical specifications required to utilize the Contract Opportunities Web Services capability.

**Note:** The specifications on this page are for a soon to be released API. Check back here or be in contact with IAE for the release date and testing session.

## Getting Started

### Generating a System Account API Key
* Users registered with a government email address and have appropriate Opportunities Domain role may request a system account for data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Go to System Accounts” from the widget and fill out the required sections.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ again in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key.
* The user must enter their password again to retrieve the key.

## Web Services Description Language (WSDL)
To view the WSDL for all available methods and object definitions, refer below links:
* Alpha WSDL Link: https://api-alpha.sam.gov/prodlike/ws/services.WSDL
* Beta WSDL Link: TBD
WSDL attached below can be downloaded:

## Authentication

### *User Accounts*
To call any of the available web services, a valid government user account must exist in the beta.sam.gov system registered at the Office Location Level in the hierarchy. To perform an operation, user who is registered with beta.sam.gov should have either Contracting Officer role OR Contracting Specialist role. Note that to perform an operation, user must have only one role.
Refer to section 5 and 6 for role specific methods.

**Note** To submit any opportunity for an office, user should provide office org key or AAC. If office org key is known, please provide the same in the 'officeid' field in the requests. If office org key is not available, then users can provide AAC in place of office org key in 'officeid' field. In order to get AAC:
* On beta.sam.gov, please log in and click on the profile and go to Account Details. AAC is listed under 'Organization Information' section.
* On alpha.sam.gov, please log in and click on the profile and go to Account Details. AAC is listed under 'Organization Information' section.

### *Authentication Methods*
beta.SAM.gov Web Services supports SOAP header authentication. Configure your client to send a specific SOAP header with every method call which contains the authentication data. Below is the example of header included before the body:
   <soapenv:Header>
      <AuthenticationData xsi:type="sam:AuthenticationData">
        <username xsi:type="xsd:string">system account username</username>
        <password xsi:type="xsd:string">system account password</password>
        <emailid xsi:type="xsd:string">ContractingOfficeEmail@gsa.gov</emailid>
     </AuthenticationData>
   </soapenv:Header>

**Note**:
When submitting, retrieving or archiving/unarchiving, if user provided officeId along with system account user name and password, then the service first validates if the officeId provided is a valid office in Federal Hierarchy. If it’s a valid office, then the service validates if the given system account has access to that office. If the system account has access to the office, only then the user can proceed ahead with the SOAP services.

When the given officeId is not a valid office in Federal Hierarchy, then the service throws below error and user cannot proceed ahead with using SOAP services:
*Insufficient privileges to retrieve system account profile as the given organization is invalid*

When the given officeId is valid but does not fall under the approved Federal Hierarchy for the given system account, then the service throws below error and user cannot proceed ahead with using SOAP services:
*Insufficient privileges to retrieve system account profile as the given organization is not part of the approved FH hierarchy*

**Note**:
The complex type definition for this object (AuthenticationData) is located in the WSDL. It contains three string elements named “username”, “password” and “emailid”. Refer the WSDL attached below:

### *Namespace Guidance*
The authentication namespace must match for a web service call to be successful.
This is due to core settings for the web services internals where the authorization header validates the namespace against the WSDL. So, when the namespace for your authentication header in soap xml does not match the namespace defined in the WSDL at the endpoint (in this case sam), it does not pass on the credentials (username/password/emailid). Therefore, the Contract Opportunities service is not able to authenticate the user and returns an authentication error.

Test Server Namespace: https://www.sam.gov
Production Server Namespace: https://www.sam.gov

## Method Overview
All methods available can be found in the WSDL and will be listed in this document. Methods will take different parameters ranging from basic types (string/integer/boolean/date and array of these types) or complex data types that are further comprised of these basic types and sometimes other complex data types.  
Supported input content type formats are text/xml.
Note: For all elements/parameters that are specified as type “date,” please supply date in YYYYMMDD (i.e. 20090428) format.

### *Responses*
Most methods will return data in the format of the PostingResponse complex type. This consists of two elements:
* The first element is named ‘success’ and is a Boolean value. If the method successfully completed, this element will be true or 1.  If it is false, empty, or 0, then the method was not successful.
* The second element is named ‘messages’ and is an array of strings. Mostly for error cases, this element will contain any relevant error messages (or sometimes success messages) that pertain to the web services method called.

Posting Response Complex Type Definition

Element Name | Type
------- | -------
success | boolean
messages | string [] - array of strings

**Note**: Some methods will have a different response value format due to the nature of the data being returned. These custom cases will be outlined below.

### *Set-Aside Values*
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field.

Refer below table for mapping between legacy SetAside Values to modern SetAside Value:

Modern SetAside Values | Legacy SetAside values
------- | -------
Total Small Business Set-Aside (FAR 19.5)	| Total Small Business
Partial Small Business Set-Aside (FAR 19.5) |	Partial Small Business
8(a) Set-Aside (FAR 19.8)	| Competitive 8(a)
8(a) Sole Source (FAR 19.8)	| Competitive 8(a)
Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13) |	HUBZone
Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13) |	HUBZone
Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14) |	Service-Disabled Veteran-Owned Small Business
Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14) |	Service-Disabled Veteran-Owned Small Business
Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15) |	Women-Owned Small Business
Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15) |	Women-Owned Small Business
Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15) |	Economically Disadvantaged Women-Owned Small Business
Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15) |	Economically Disadvantaged Women-Owned Small Business
Local Area Set-Aside (FAR 26.2)	|

### *Notice Types*
The web service API includes specific methods to submit each of the base notice types (i.e. presolicitation, combined/synopsis, award, etc.). You will find these outlined in the sections below.

### *Stauth Valid Values*
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

## Contracting Officer Method Details
### *Award Notice (submitAward)*
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
date |	date |	No |	Posting Date |	YYYYMMDD
zip |	string |	No |	Zip Code |	5 digits
classcod |	string |	No |	Class-Code |	Valid classification code (FAR, Section 5.207(g))
naics |	string |	No |	NAICS Code |	Valid NAICS Code NAICS Reference
offadd |	string |	No |	Office Address |	65535 characters
officeid |	string |	Yes |	Office id of the office where an opportunity is being submitted |	20 characters
subject |	string |	Yes |	Subject |	255 characters
solnbr |	string |	Yes |	Sol # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype	| string |	No |	Base Notice Type |	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, “ITB” - for Intend to bundle
awdnbr |	string |	 Yes |	Award Number |	255 characters
awdamt |	string |	Yes |	Award Amount |	64 characters
linenbr |	string |	No |	Line Number |	255 characters
awddate |	date |	Yes |	Award Date |	YYYYMMDD
archdate |	date |	No |	Archive Date |	YYYYMMDD
awardee |	string |	Yes |	Awardee |	65535 characters
awardee_duns |	string |	No |	Awardee DUNS |	9 digits with optional plus 4
contact |	string |	Yes |	Contact Info |	65535 characters
desc |	string |	No |	Description |	65535 characters
link |	GovURL |	No |	Government Link	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail |	No |	Government Email |	128 characters
links |	DocumentLink[] |	No |	Array Of links |
files |	DocumentFile[] |	No |	Array of files |
setaside |	string |	No |	Set Aside |	See Set Aside Value Section for valid values
recovery_act |	boolean |	No |	Recovery Act |	true or false
correction |	boolean |	No |	Correction of previous Award |	true or false. If correcting a previously submitted award notice, specify true and the system will lookup the award by award number and sol number if applicable.

GovURL Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	yes |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	yes |	Description |	255 characters

GovEmail Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address | string |	Yes |	Email Address |	128 characters
desc |	string |	Yes |	Description |	255 characters

DocumentLink Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	No |	External URL |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
Desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No |	File Data |	100 MB
desc |	string |	No |	Description |	255 characters
explicit_access |	boolean |	No |	Explicit Access |
export_controlled |	boolean	No |	Export Controlled |

### *Delete Notice/ Document Package (deleteNoticeOrDocumentPackage)*

This method is used to permanently delete an entire notice or delete attachments across all versions of the notice. Modifications/Amendments are recommended instead of using this method. Specify the solicitation number or award number to delete a notice. To delete attachments, also specify the attachment deletetype.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data |	DeleteNoticeOrDocumentPackage |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
solnbr |	string |	no |	Solicitation # |	128 characters from the set: a-z 0-9 -_ ( ) { }
ntype |	string |	no |	Base Notice Type |	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, "ITB" - for Intent to Bundle Requirements (DoD- Funded)
awdnbr | string | no | Award # |	255 characters
deletetype |	string |	no |	Notice or Attachment delete operation type |	Valid Values: “notice” for notice, “attachment” for attachment. Defaults to “notice” if not provided
deletemethod |	string | no | Delete latest or all versions |	Valid Values: “latest” for latest version, “all” for all versions. Defaults to “all” if not provided

DeleteNoticeOrDocumentPackage Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
solnbr |	string |	no |	Solicitation # | 128 characters from the set: a-z 0-9 -_ ( ) { }
ntype |	string |	no |	Base Notice Type | Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, "ITB" - for Intent to Bundle Requirements (DoD- Funded)
awdnbr |  string | no | Award # |	255 characters
deletetype |	string |	no |	Notice or Attachment delete operation type |	Valid Values: “notice” for notice, “attachment” for attachment. Defaults to “notice” if not provided
deletemethod |	string | no | Delete latest or all versions |	Valid Values: “latest” for latest version, “all” for all versions. Defaults to “all” if not provided

### *Archive Notice (ArchiveNotice)*

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
ntype |	string | no |	Base Notice Type | Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, "ITB" - for Intent to Bundle Requirements (DoD- Funded)
archdate | date |	no | New Archive Date – If none provided, notice will archive immediately | YYYYMMDD
officeid | string |	Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account |	20 characters

### *Cancel Notice (CancelNotice)*

This method is used to post a cancellation notice to any base notice type already in the Opportunities system. Provide a Solicitation Number or an Award Number (for stand- alone awards) and other data outlined below for the cancellation notice.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data |	CancelNotice | Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
response | PostingResponse | Complex type

CancelNotice Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
date | date |	No | Posting Date |	YYYYMMDD
offadd | string |	No | Office Address |	65535 characters
officeid | String | Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account |	20 characters
subject |	string | No |	Subject |	255 characters
solnbr |string | Yes | Solicitation # | 128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype | string | No |	Base Notice Type | Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice,  "ITB" - for Intent to Bundle Requirements (DoD- Funded)
awdnbr | string |	No | Award # |255 characters
archdate | date |	No | Archive Date | YYYYMMDD
contact | string | Yes | Contact Info | 65535 characters
desc | string | Yes |	Cancellation Description | 65535 characters

## Contracting Officer/Contracting Specialist Method Details

### *Presolicitation (submitPresol)*

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
zip |	string | No |	Zip Code | 5 digits
classcod | string |	Yes |	Class-Code | Valid classification code (FAR, Section 5.207(g))
naics |	string | No |	NAICS Code | Valid NAICS Code  NAICS Reference
officeid | string |	Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account | 20 characters
offadd | string |	No | Office Address |	65535 characters
subject |	string | Yes	Title of the Pre-solicitation |	255 characters
solnbr | string |	Yes |	Sol # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate | date |	No |	Response Date |	YYYYMMDD
archdate | date |	No |	Archive Date | YYYYMMDD
contact |	string | Yes |	Contact Info | 65535 characters
desc |string |Yes |	Description | 65535 characters
link | GovURL – complex type | No |	Government Link has URL & description |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	No | Government Email | 128 characters
links | DocumentLink[] | No |	Array of links |
files |	DocumentFile[] | No |	Array of files |
setaside | string |	No | Set-aside | See Set Aside Values Section for valid values
popaddress | string |	No | Pop Add | 65535 characters
popzip |string | No |	Pop Zip | 5 digits
popcountry | string |	No | Pop Country | 32 characters
recovery_act	| boolean |	no | Recovery Act | true or false

GovURL Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | no |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	no | Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string | no |Email Address |128 characters
desc | string	| no | Description | 255 characters

DocumentLink Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url | string | No |	External URL | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description/Title | 255 characters

DocumentFile Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename | string |	No | File Name | 255 characters
filedata | base64binary |	No | File Data | 100 MB
desc | string |	No | Description | 255 characters


### *Combined/Synopsis (submitCombined)*

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
zip |	string | No |	Zip Code | 5 digits
classcod | string |	Yes |	Class-Code | Valid classification code (FAR, Section 5.207(g))
naics | string | Yes | NAICS Code	| Valid NAICS Code NAICS Reference
officeid | string | Yes | Office id of the office where an opportunity is being submitted. Officeid must be associated with user account | 20 characters
offadd | string | No | Office Address	| 65535 characters
subject | string | Yes | Subject | 255 characters
solnbr | string |	Yes | Sol # | 128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate | date |	Yes | Response Date | YYYYMMDD
archdate | date |	No | Archive Date | YYYYMMDD
contact | string |Yes | Contact Info | 65535 characters
desc | string |	Yes |	Description |	65535 characters
link | GovURL – complex type | No |	Government Link	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	No | Government Email | 128 characters
links |	DocumentLink[] | No |	Array Of links |
files |	DocumentFile[] | No |	Array of files |
setaside | string |	No | Set-aside | See Set Aside Values section for valid values
popaddress | string |	No | Pop Add | 65535 characters
popzip | string |	No | Pop Zip | 5 digits
popcountry | string |	No | Pop Country | 32 characters
recovery_act | boolean | No |	Recovery Act | true or false

GovURL Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | Yes | Website Address | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	Yes |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string | Yes | Email Address | 128 characters
desc | string |	Yes |	Description |	255 characters

DocumentLink Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string | No |	External URL | 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc | string |	No | Description/Title | 255 characters

DocumentFile Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename | string | No | File Name | 255 characters
filedata | base64binary |	No | File Data | 100 MB
desc | string |	No | Description | 255 characters


### *Modification/Amendment (submitMod)*

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
date | date |	No |	Posting Date |	YYYYMMDD
zip |	string |	No |	Zip Code |	5 digits
classcod |	string	 | Yes – For combined type, presol type, Sale of surplus, No – For test |	Class-Code	| Valid classification code (FAR, Section 5.207(g))
naics | 	string |	Yes – For combined type, No – For rest | 	NAICS Code |	Valid NAICS Code  NAICS Reference
officeid |	string	| Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account |	20 characters
offadd |	string	| no	| Office Address |	65535 characters
subject	| string	| no |	Subject |	255 characters
solnbr | string |	yes | 	Sol # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype |	string |	no |	Base Notice Type |	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice
respdate |	date |	Yes – Combined, No – For rest |	Response Date |	YYYYMMDD
archdate |	date |	no	| Archive Date |	YYYYMMDD
contact |	string |	No – For Special notice, Yes – For rest |	Contact Info |	65535 characters
desc |	string |	Yes	| Description |	65535 characters
link	| GovURL – complex type |	no |	Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	no |	Government Email |	128 characters
links |	DocumentLink[] |	no |	Array Of links |
files |	DocumentFile[] |	no |	Array of files |
setaside |	string |	no |	Set-aside |	See Set Aside Value Section for valid values
popaddress |	string |	no	 | Pop Add |	65535 characters
popzip	| string |	no	 | Pop Zip |	5 digits
popcountry |	string |	no	 | Pop Country |	32 characters
recovery_act |	boolean |	no |	Recovery Act |	true or false

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string	| Yes |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	Yes |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string |	Yes |	Email Address	| 128 characters
desc |	string |	Yes |	Description |	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url | 	string	| No |	External URL |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string	| No | 	File Name |	255 characters
filedata |	base64binary |	No |	File Data	| 100 MB
desc |	string |	No |	Description |	255 characters

### *Justification and Authorization (J&A) Notice (submitJA)*

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
zip |	String |	No	| Zip Code |	5 digits
classcod	| String |	Yes |	Class-Code |	Valid classification code
naics	| String |	No – May change in future	| NAICS Code	| Valid NAICS Code  NAICS Reference
offadd |	String	| No |	Office Address	| 65535 characters
officeid |	String |	Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account |	20 characters
subject |	String |	Yes |	Subject |	255 characters
solnbr	| String |	Yes |	Sol # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) {}. Note for statutory authority FAR 6.302- 1(c) - Brand name, this is required
ntype	| string |	No	| Base Notice Type | Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice
stauth	| String	| Yes |	Stat. Authority – Both foja & stauth values will be given under stauth in legacy |	Valid values: 1, 2, 3, 4, 5, brand, far1, far2, far3, far4, far5, far6, far7 Description of each of these stauth values is captured in section 4.4 Foja values are: Valid values: 'Urgency’, ‘Only One Source (except brand name)’, ‘Follow-on Delivery Order Following Competitive Initial Order’, ‘Minimum Guarantee’, ‘Other Statutory Authority’
awdnbr |	String |	Yes |	Award Number |	255 characters
modnbr |	String |	No |	Mod Number |	32 characters
awdamt |	String |	No |	Award Amount |	64 characters
awddate |	Date |	No – May change in future	| Award Date |	YYYYMMDD
donbr	| String |	Yes |	Task/Delivery Order Number |	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
archdate |	Date |	No |	Archive Date |	YYYYMMDD
contact |	String |	Yes | 	Contact Info |	65535 characters
desc |	String |	No |	Description	| 65535 characters
link |	GovURL |	No	| Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
links |	DocumentLink[]	| No |	Array Of links	|
files |	DocumentFile[]	| No |	Array of files	|
email |	GovEmail |	Yes | 	Government Email |	128 characters
recovery_act |	Boolean |	No |	Recovery Act |	true or false;
correction	| boolean |	No |	Correction of previous J&A |	true or false. If correcting a previously submitted j&a notice, specify true and the system will lookup the j&a by award number and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string |	yes |	Website Address	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	| string	| yes |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address |	string	| yes |	Email Address	| 128 characters
desc |	string |	yes |	Description |	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url |	string	| No |	External URL	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	No |	Description/Title |	255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string	| No |	File Name	| 255 characters
filedata |	base64binary |	No |	File Data	| 100 MB
desc	| string |	No |	Description |	255 characters

### *Sources Sought Notice (submitSourcesSought)*

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
zip	 | string |	No |	Zip Code |	5 digits
classcod |	string |	No |	Class-Code |	Valid classification code (FAR, Section 5.207(g))
naics	| string |	No |	NAICS Code |	Valid NAICS Code
officeid |	string |	Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account	| 20 characters
offadd	| string	 | No |	Office Address |	65535 characters
subject |	string |	Yes |	Subject |	255 characters
solnbr	| string |	Yes |	Sol # |	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
respdate |	date |	No |	Response Date |	YYYYMMDD
archdate |	date |	No |	Archive Date	| YYYYMMDD
contact	| string	| Yes |	Contact Info	| 65535 characters Default value = Primary, Other types are: Secondary, Owner
desc | string |	Yes |	Description |	65535 characters
link |	GovURL – complex type |	No |	Government Link	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email	| GovEmail – complex type |	No |	Government Email	| 128 characters
links |	DocumentLink[] |	No |	Array Of links	|
files |	DocumentFile[] |	No |	Array of files |
setaside	| string |	No |	Set-aside |	See Set Aside Value Section
popaddress |	string |	No |	Pop Add |	65535 characters
popzip |	string	| No |	Pop Zip	| 5 digits
popcountry |	string |	No |	Pop Country |	32 characters
recovery_act |	boolean |	No	 | Recovery Act |	true or false

GovURL Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	 | string	| yes |	Website Address |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string |	yes |	Description |	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	| string |	yes |	Email Address |	128 characters
desc	| string |	yes |	Description |	255 characters

DocumentLink Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	| string	| No |	External URL	| 255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc |	string	| No	| Description/Title |	255 characters

DocumentFile Complex Type Definition: This field is not implemented

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Foreign Government Standard (submitForeignGovernment)*

This service is now deprecated. Hence no longer available.

### *Special Notice (submitSpecialNotice)*

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
zip |	String |	No	 | Zip Code |	5 digits
classcod |	String	| No	| Class-Code | 	Valid classification code (FAR, Section 5.207(g))
naics |	String |	No	| NAICS Code |	Valid NAICS Code  NAICS Reference
officeid	| string |	Yes |	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account	 | 20 characters
offadd |	String |	No |	Office Address	| 65535 characters
subject | 	String |	Yes |	Subject |	255 characters
solnbr	| String |	Yes |	Sol # |	128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
archdate |	Date |	No |	Archive Date |	YYYYMMDD
contact |	String |	No	| Contact Info |	65535 characters
desc |	String |	Yes |	Description |	65535 characters
link	| GovURL – complex type	| No |	Government Link |	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email |	GovEmail – complex type |	No |	Government Email	| 128 characters
links |	DocumentLink[] 	| No |	Array Of links |
files	| DocumentFile[]	 | No	| Array of files	 |
recovery_act |	Boolean |	No |	Recovery Act	| true or false

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|yes|	Website Address|	255 characters, consist of a restricted set of characters (see URL specification - RFC2396)
desc|	string	|yes|	Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	|string|	yes|	Email Address	|128 characters
desc	|string	|yes	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string|	No	|External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string	|No	|Description/Title	|255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Sale of Surplus Property Notice (submitSaleOfSurplus)*

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
zip|	string|	No|	Zip Code|	5 digits
classcod|	string|	Yes	|Class-Code|	Valid classification code (FAR, Section 5.207(g))
naics|	string|	No|	NAICS Code|	Valid NAICS Code  NAICS Reference
officeid	|string	|Yes|	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account |	20 characters
offadd|	string|	No	|Office Address	|65535 characters
subject|	string|	Yes|	Subject	|255 characters
solnbr|	string	|Yes	|Sol #|	128 characters from the set: a-z A-Z 0-9 -_ ( ) { }
archdate|	date|	No|	Archive Date|	YYYYMMDD
contact|	string|	Yes|	Contact Info|	65535 characters
desc|	string	|Yes|	Description	|65535 characters
link	|GovURL – complex type|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email	|GovEmail – complex type	|No|	Government Email|	128 characters
links|	DocumentLink[]|	No	|Array Of links	|
files	|DocumentFile[]|	No	|Array of files	|
recovery_act|	boolean	|No	|Recovery Act	|true or false

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|yes	|Website Address	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string	|yes	|Description	|255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address|	string|	yes|	Email Address	|128 characters
desc	|string	|yes	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	No|	External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string|	No|	Description/Title	|255 characters

DocumentFile Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Intent to Bundle Requirements (DoD- Funded) (submitITB)*

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
zip	|String|	No|	Zip Code|	5 digits
classcod|	String|	Yes|	Class-Code|	Valid classification code (FAR, Section 5.207(g))
naics|	String|	No|	NAICS Code|	Valid NAICS Code
officeid|	String|	Yes|	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account|	20 characters
offadd|	String	|No|	Office Address|	65535 characters
subject|	String|	Yes|	Subject	|255 characters
solnbr	|String	|Yes|	Sol #	|128 characters from the set: a-z A-Z 0-9 - _ ( ) {}
ntype	|string	|No|	Base Notice Type|	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice
awdnbr|	String	|Yes	|Award Number|	255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
donbr|	String|	No	|Task/Delivery Order Number	|255 characters from the set: a-z A-Z 0-9 - _ ( ) {}
archdate	|Date	|No	|Archive Date|	YYYYMMDD
contact|	String|	Yes|	Contact Info	|65535 characters; Default value = Primary, Other types are: Secondary, Owner
desc	|String	|Yes	|Description|	65535 characters
link|	GovURL|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
links	|DocumentLink[]|	No|	Array Of links	|
files|	DocumentFile[]	|No	|Array of files	|
email	|GovEmail|	No|	Government Email|	128 characters
recovery_act|	Boolean	|No	|Recovery Act	|true or false
correction	|boolean	|No	|Correction of previous ITB|	true or false. If correcting a previously submitted itb notice, specify true and the system will lookup the itb by award number, delivery number and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|yes	|Website Address	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc	|string|	yes|	Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address	|string	|yes|	Email Address	|128 characters
desc|	string|	yes	|Description|	255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	No	|External URL|	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No|	Description/Title	|255 characters

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Fair Opportunity / Limited Sources Justification (submitFairOpp)*

This service is now deprecated. Instead, please use submitJA to perform the operation.

### *General Notice (submitNotice)*

This is a general method that supports submitting all of the above notice types. The complex type for the input data consists of all possible data elements across all notice types. Users may setup their web service client to use this general method instead of calling the specific methods outlined above.  The functionality is the same regardless of whether you use this general method, or the specific methods above. The valid options for this field are:

* PRESOL – for Presolicitation Notices
* COMBINE – for Combined/Synopsis Notices
* AWARD – for Award Notices
* JA – for Justification & Approval (J&A) Notices
* SRCSGT – for Sources Sought Notices
* SSALE – for Sale of Surplus Property Notices
* SNOTE – for Special Notices
* ITB – for Intent to Bundle Requirements (DoD-Funded) Notices

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
notice_type	|string	|Yes|	Notice type	|Valid options outlined above
zip	|string	|No	|Zip Code|	5 digits
classcod|	string|	Yes – For submitpresol, submitCombined, submitITB, submitJA, submitSaleofSurplus; No – for rest|	Class-Code	|Valid classification code (FAR, Section 5.207(g))
naics	|string	|Yes – For combines, surplus; No – for rest	|NAICS Code|	Valid NAICS Code  NAICS Reference
officeid|	String|	Yes|	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account	|20 characters
offadd	|string|	No|	Office Address	|65535 characters
subject|	string|	Yes – For presol, combined, itb, ja, award, special, surplus; No – for rest|	Subject|	255 characters
solnbr|	string|	Yes – For presol, combined, itb, ja, award, special, document, surplus; No – for rest|	Sol #	|128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype	|string	|no	|Base Notice Type	|Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice
awdnbr|	string|	Yes – For Award & JA, ITB; No – For rest|	Award #	|255 characters
donbr	|string	|Yes – For JA; No – For rest|	Delivery/Task Order Number	|255 characters
awdamt	|string|	Yes – For Award; No – For rest	|Award Amount|	64 characters
linenbr|	string	|No|	Award Line Item Number	|255 characters
awddate	|date|	Yes – for award; No – for rest|	Award Date	|YYYYMMDD
stauth	|string	|Yes – for JA; No – for test	|J&A StatutoryAuthority. Note: Both foja & stauth values will be given under stauth in legacy| Valid values: 1, 2, 3, 4, 5, brand, far1, far2, far3, far4, far5, far6, far7. Description of each of these stauth values is captured in Stauth Value Section. Foja values are: Valid values: 'Urgency’, ‘Only One Source (except brand name)’, ‘Follow-on Delivery Order Following Competitive Initial Order’, ‘Minimum Guarantee’, ‘Other Statutory Authority’
modnbr	|string	|No	|J&A and FairOpp Contract Modification Number|	32 digits
respdate|	date|	Yes – for combined; No – for rest	|Response Date	|YYYYMMDD
archdate|	date|	No|	Archive Date|	YYYYMMDD
awardee|	string|	Yes - award; No – for rest|	Awardee	|65535 characters
awardee_duns|	string	|no	|Awardee DUNS	|9 digits with optional plus 4
contact|	string|	Yes – for presol, submitSourcesSought combined, itb, ja, award, saleofSurplus; No – for rest|	Contact Info|	65535 characters
desc	|string|	Yes – For presol, submitSourcesSought , combined, ITB, special and saleOfSurplus; No – For rest|	Main Description|	65535 characters
link|	GovernmentURL|	No|	Government Link	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
email|	GovernmentEmail|	No|	Government Email	|128 characters
links	|DocumentLink []|	no	|Array Of links	|
files	|DocumentFile[]|	no|	Array of files	|
setaside|	string|	no|	Set-aside types|	See Set Aside Section for valid values
popaddress|	string|	No|	POP Address	|65535 characters
popzip|	string	|No	|POP Zip	|5 digits
popcountry|	string|	Yes – For wards; No – For rest|	POP Country|	32 characters
city|	string|	No	|City	|NA
state|	string|	No|	State	|NA
recovery_act	|boolean|	No|	Recovery Act|	true or false
correction|	boolean|	No|	Correction of previous notice for the following types:  Award #, Delivery Order #) – Awards, J&A’s, Intent to Bundle Requirements (DoD-Funded), Limited Source Justification. This is used to modify/correct notice types that whose uniqueness is potentially determined by fields other than Solicitation # (i.e. Award #, Delivery Order #).	|true or false. If correcting a previously submitted award notice, specify true and the system will lookup the notice by award number, delivery order number, and sol number if applicable.

GovURL Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url|	string|	yes|	Website Address|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	yes	|Description|	255 characters

GovEmail Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
address|	string|	yes	|Email Address|	128 characters
desc	|string|	yes	|Description	|255 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string|	No	|External URL	|255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No|	Description/Title|	255 characters

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Document Packages (submitDocumentsAndLinksToNotice)*

This method is used to attach document packages (non sensitive) to a notice modification.  This is similar to the EPSUPLOAD or DocumentUpload function currently found in the ftp/email electronic interface. The web service method now supports transmitting actual file data along with external links. Note: A base notice must already exist in the system.

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
solnbr	|String	|Yes|	Solicitation #|	128 characters from the set: a-z A-Z 0-9 - _ ( ) { }
ntype	|String	|No|	Base Notice Type|	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice
uploadtype|	String|	No – May change in future|	Upload Type|	A for amendment, S for solicitation or any title for other; 255 characters
respdate	|Date	|No	|Response Date|	YYYYMMDD
links|	DocumentLin k[]|	No|	Array Of links	|
files	|DocumentFile []|	No|	Array of files	|
officeid	|String|	Yes|	Office id of the office where an opportunity is being submitted. Officeid must be associated with user account|	20 characters

DocumentLink Complex Type Definition:

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
url	|string	|No|	External URL|	255 characters, consist of a restricted set of characters (see URL specification - RFC 2396)
desc|	string|	No|	Description/Title	|255 characters

DocumentFile Complex Type Definition

Element Name | Type | Required | Description | Character Limit / Restrictions
------ | ------- | ------- | ------- | -------
filename |	string |	No |	File Name |	255 characters
filedata |	base64binary |	No	| File Data |	100 MB
desc	| string |	No	 | Description |	255 characters

### *Unarchive Notice (unarchiveNotice)*

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
ntype	|string	|no	|Base Notice Type	|Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, "ITB" - for Intent to Bundle Requirements (DoD- Funded)
awdnbr	|string|	No|	Award #|	255 characters
archdate	|date|	No|	New Archive Date|	YYYYMMDD

### *Secure Document Package (attachSecureDocumentPackagesToNotice)*

Details will be added in future.

### *Non-FBO Solicitation (createNonFBOSolicitation)*

Details will be added in future.

### *Secure Document Packages (attachSecureDocumentPackagesToNonFBOSolicitation)*

Details will be added in future.

### *Remove Secure Document Package (removeSecureDocumentPackagesFromNonFBOSolicitation)*

Details will be added in future.

### *Non-FBO Solicitation Release (releaseNonFBOSolicitation)*

Details will be added in future.

### *Un-Release-Non-FBO-Solicitation (unreleaseNonFBOSolicitation)*

Details will be added in future.

### *Secure Technical Document Package (createSecureDocumentPackage)*

Details will be added in future.

### *Add Files to Secure Document Package (addFilesToSecureDocumentPackage)*

Details will be added in future.

### *Delete Files from Secure Document Package (deleteFilesFromSecureDocumentPackage)*

Details will be added in future.

### *Delete Secure Document Package (deleteSecureDocumentPackage)*

Details will be added in future.

## Methods Available To All Office Location Users

### *getIVLList*

This method is used to retrieve the Interested Vendors List (IVL) for a given solicitation.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | IVLListRequest  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | IVLListResponse | Complex type defined below

IVLListRequest Complex Type Definition:

Element Name | Type | Required | Description
------ | ------- | ------- | -------
solnbr|	string|	yes|	Solicitation #
ntype	|string	|no	|Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice,  “ITB” – for Intent to Bundle Requirements (DoD- Funded)

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
naics_codes|	string	|Naics Codes

### *Authorized Parties List (getAuthorizedPartyList)*

This method is used to retrieve the Authorized Party lists for an FBO Solicitation or a Non-FBO Solicitation. A third argument - ‘status’ - can be provided to retrieve pending Explicit Access requests, rejected requests, approved vendors, or all. Specify the first parameter to the web service method for FBO Solicitations and leave the second parameter blank. If retrieving lists for Non-FBO Solicitations, leave the first parameter blank and specify the second parameter. Valid options for status field: approved, rejected, pending, or leave blank for all.

Input Parameter |	Type |	Description
------- | ------ | -------
Data | AuthorizedPartyListResponse  |	Complex type defined below

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | AuthorizedPartyListResponse | Complex type defined below

AuthorizedPartyListRequest Complex Type Definition:

Element Name | Type | Required | Description
------ | ------- | ------- | -------
solnbr|	string|	yes	|Solicitation #. Provide an empty string for this argument if using nonfbo_solnbr below
ntype|	string|	no|	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice, "FSTD" - for Foreign Government Standard, “ITB” – for Intent to Bundle Requirements (DoDFunded)
nonfbo_solbr|	string|	no|	Non-fbo Solicitation #. Not supported for this method
status| string	|no	|Valid Options: approved, pending, rejected, “empty value”. If empty, all status will be returned. Note, use “pending” to pull the pending explicit access requests.

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

### *Approve Explicit Access Requests (approveExplicitAccessRequestByID)*

This method is used to approve an Explicit Access request that is either in pending or rejected status. This method requires the internal ID which can be retrieved by first calling the getAuthorizedPartyList method. Specify an FBO Solicitation Number as the first argument.

Input Parameters:

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

IVLListRequest Complex Type Definition:

Element Name | Type | Required | Description
------ | ------- | ------- | -------
solnbr|	string	|yes|	Solicitation #
ntype	|string	|no|	Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice,  “ITB” – for Intent to Bundle Requirements (DoD- Funded)
nonfbo_solbr	|string|	no|	Non-fbo Solicitation #.  Not supported for this method
Id|	string|	yes|	Matches internal record ID. This is retrieved from getAuthorizedPartyList method above.
vendor|	VendorData|	no|	Complex type not used in this method
reason	|string|	no|	rejection reason not used in this method

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

### *Approve Explicit Access Requests (approveExplicitAccessRequestByVendorData)*

Details will be added in future

### *Reject Explicit Access Requests (rejectExplicitAccessRequestByID)*

Details will be added in future

### *Reject Explicit Access Requests (rejectExplicitAccessRequestByVendorData)*

Details will be added in future

### *Add Authorized Party (addAuthorizedParty)*

This method is used to arbitrarily add vendor users to the Authorized Party list for a given FBO Solicitation. This method accepts an FBO Solicitation Number and a set of vendor data. The method attempts to lookup the vendor in the system based on the data provided and adds an Authorized Party record if the match is successful.  This method has been deprecated for Non-FBO Solicitation Number.

Input Parameter |	Type |	Description
------- | ------ | -------
data	|ExplicitAccessRequest|	Complex type defined below

ExplicitAccessRequest Complex Type Definition:

Element Name | Type | Required | Description
------ | ------- | ------- | -------
solnbr|	string|	yes|	Solicitation #
ntype	|string	|no	|Valid values: "PRESOL" - for Presolicitation, "COMBINE" - for Combined Synopsis/Solicitation, "SRCSGT" - for Sources Sought, "SSALE" - for Sale of Surplus Property, "SNOTE" - for Special Notice,  “ITB” – for Intent to Bundle Requirements (DoD- Funded)
nonfbo_solbr|	string|	no	|Non-fbo Solicitation #.   Not supported for this method.
Id	|string	|no	|Not used in this method
vendor	|VendorData|	yes|	Complex type defined below
reason	|string	|no	|rejection reason not used in this method

Response:

Output Parameter |	Type |	Description
------- | ------ | -------
Response | PostingResponse | Complex type

VendorData Complex Type Definition:

Element Name | Type |  Description
------ | ------- | -------
lname	|string	|Last Name
fname|	string	|First Name
email|	string	|Email
contractor_name	|string	|Contractor Name
duns|	string	|DUNS #
cage_code|	string|	Cage Code

## Method Available for Data Export

### *Get List of Notices (getList)*

This method is used to retrieve a list of base notices. For each record returned, an internal identifier/unique key is provided that must be used in subsequent getNoticeData calls to get the complete notice data (and any of its changes or awards posted). The method will return a maximum of 1000 records and allows filtering the results by specifying the notice type, solicitation number, award number, posted date range and documents to search (active or archive).   For performance reasons, at least one filter must be provided.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	NoticeListRequest|	Complex type defined below

NoticeListRequest Complex Type Definition:

Element Name|	Type|	Required|	Description
-----|-----|-----|-----
notice_type	|string|	No|	Solicitation #.  Valid Values: PRESOL, COMBINE,  AWARD, JA, SRCSGT, SSALE, SNOTE, ITB.  Note:Searches for awardsj&as, itb’s and fairopps will return both standalone notices AND base notices that contain one of these type
solnbr	|string	|No	|Solicitation #
awdnbr	|string	|No	|Award #
posted_from	|date|	No|	Posted From Date. YYYYMMDD.
posted_to	|date|	|No	Posted To Date. YYYYMMDD
documents_to_search	|string|	No|	Valid Values: ‘active’ or ‘archived’. Default is ALL if nothing provided.

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

### *Get Notice Data (getNoticeData)*

This method is used to retrieve notice data and any changes/awards that were made. The notice_id from getList calls should be used in this call.   If document package data is requested, the total aggregate size for any request is 100MB. If a certain file pushes the total past this threshold, the data will not be returned for that file and any others encountered for the request; instead, links to the data will be provided and one can call the separate getFileData to cut down the size and to pull a specific document.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	NoticeDataRequest|	Complex type defined below

NoticeDataRequest Complex Type Definition:

Element Name|	Type|	Required|	Description
-----|-----|-----|-----
notice_id	|string	|Yes|	Unique ID found from getList call or ID’s for changes found in getNoticeData call.
get_changes	|boolean|	No|	True or false. Pass in true to get the full notice history with all changes.
get_changes_from_date	|date|	No|	If maintaining a sync of changes, can specify a date so that only changes that have occurred since provided date will be returned.
get_file_data|	boolean|	No|	True or false. Pass in true and the method will return any file content stored in Contract Opportunities (attachment data will be retuned as Base64Encoding Format). If false, the meta details/links will still be provided.

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
notice_type|	strin|g	Type of notice
agency|	string|	Top level Agency
office|	string|	Office
location|	string|	Location
date|	dateTime|	Posting Date
zip|	string|	Zip Code
classcod|	string|	Class-Code
naics	|string|	NAICS Code
offadd	|string	|Office Address
subject	|string	|Subject
solnbr|	string	|Sol #
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
setaside	|string	|Set-aside types
popaddress	|string	|POP Address
popzip	|string|	POP Zip
popcountry|	string|	POP Country
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
export_controlled|	boolean	|true or false – used for sensitive packages only
explicit_access	|boolean|	true or false – used for sensitive packages only
is_cd_avail	|boolean|	true or false – used for sensitive packages only
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

### *Get Document Package Data (getDocumentPackageData)*

This service is now deprecated

### *Get File Data (getFileData)*

This method provides the ability to pull in file data for a single file of a document package. The primary use of this method is if a single file’s size exceeds the 100MB max– when using this method for a single file, the file limit check does not occur.

Input Parameters:

Input Parameter	|Type	|Description
-----|-----|-----
data|	FileDataRequest|	Complex type defined below

FileDataRequest Complex Type Definition:

Element Name|	Type|	Required|	Description
-----|-----|-----|-----
file_id	|string|	yes|	Unique ID of a file found from getNoticeData call  (i.e. file_id element)
notice_id|	string|	Yes	|Unique Identifier for a notice

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

### *submitPresol*

#### *Request Sample*

<details>
<summary>submitPresol:</summary>
<p>
<code><pre>
`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
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
            <contact xsi:type="xsd:string">Veera</contact>
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
              </DocumentFile>
              <DocumentFile>
               <filename xsi:type="xsd:string">test_document2.pdf</filename>
              <filedata xsi:type="xsd:base64Binary">SnVzdCBhIHNtYWxsIHRlc3Q22</filedata>
              <desc xsi:type="xsd:string">test doc 2</desc>
              </DocumentFile>
            </files>
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
      </sam:submitPresol>
   </soapenv:Body>
</soapenv:Envelope>`
</pre></code>
</p>
</details>

#### *Response Sample - Success*

<details>
<summary>submitPresol:</summary>
<p>
<code><pre>
`<SOAP-ENV:Envelope xmlns:SOAP-ENV=“http://schemas.xmlsoap.org/soap/envelope/“>
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitPresolResponse xmlns:ns1=“https://www.sam.gov/“>
           <return xmlns:xsi=“http://www.w3.org/2001/XMLSchema-instance” xsi:type=“ns1:PostingResponse”>
               <success xsi:type=“xsd:boolean”>true</success>
               <messages xsi:nil=“true” xsi:type=“ns1:ArrayOfstring”/>
           </return>
       </ns1:SubmitPresolResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
</pre></code>
</p>
</details>

#### *Response Sample - Failure*

<details>
<summary>submitPresol:</summary>
<p>
<code><pre>
(`<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
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
</SOAP-ENV:Envelope>`)
</pre></code>
</p>
</details>

### *submitCombined*

#### *Request Sample*

<details>
<summary>submitCombined:</summary>
<p>
<code><pre>
`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sam="https://www.sam.gov/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
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
            <contact xsi:type="xsd:string">test veera</contact>
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
      </sam:submitCombined>
   </soapenv:Body>
</soapenv:Envelope>`
</pre></code>
</p>
</details>

#### *Response Sample - Success*

<details>
<summary>submitCombined:</summary>
<p>
<code><pre>
`<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header/>
   <SOAP-ENV:Body>
       <ns1:SubmitCombinedResponse xmlns:ns1="https://www.sam.gov/">
           <return xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns1:PostingResponse">
               <success xsi:type="xsd:boolean">true</success>
               <messages xsi:nil="true" xsi:type="ns1:ArrayOfstring"/>
           </return>
       </ns1:SubmitCombinedResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
</pre></code>
</p>
</details>

#### *Response Sample - Failure*

<details>
<summary>submitCombined:</summary>
<p>
<code><pre>
`<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
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
</SOAP-ENV:Envelope>`
</pre></code>
</p>
</details>








## FAQ

_NA_

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov).

## Change Log

Date | Version | Description
------|---------------|---------
4/25/2019 | v1.0 | Base Version

<p><small><a href="#">Back to top</a></small></p>
