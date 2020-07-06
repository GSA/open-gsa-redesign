---
title: Beta.SAM.Gov OIG Extract Download API (Coming Soon)
banner-heading: Beta.SAM.Gov OIG Extract Download API (Coming Soon)
---

## Overview

The OIG Extract Download API will allow authorized users to download OIG data. 

**Note:** The specifications on this page are for a soon to be released API.  Check back here or be in contact with IAE for the release date and testing session.

**Note:** Operations marked with * (asterisk) are not available at this time

## Getting Started

OIG Extract Download API can be accessed from Beta or Alpha via the following endpoints:

* Beta: https://api.sam.gov/prod/data-services/v1/extracts
* Alpha: https://api-alpha.sam.gov/prodlike/data-services/v1/extracts

###	Authentication and Authorization

#### Generating a System Account API Key
* Users registered with a government email address and have appropriate System Account Manager or System Account Admin role may request a system account for data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Request System Account” from the widget and fill out the required sections with appropriate Contract Opportunities permissions.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the key.


#### System Account Authentication
In order to utilize the OIG Extract Download API, the following is required:
* Valid beta.SAM.GOV federal government system account with Read permissions.

### IP Address Validation 
All API requests will be validated against the IP Addresses registered within the system account profile. All requests that are not from registered IP address(es) in the system account profile will be rejected with an error.




## FAQ


## Contact Us

* Reach out to the beta.sam.gov team at [www.fsd.gov](https://www.fsd.gov)


## Change Log

Date | Version | Description
------|---------------|---------
7/3/2020 | v0.1 | Base Version

<p><small><a href="#">Back to top</a></small></p>
