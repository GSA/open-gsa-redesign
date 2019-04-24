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

## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [newsamtesting@gsa.gov](mailto:newsamtesting@gsa.gov).

<p><small><a href="#">Back to top</a></small></p>
