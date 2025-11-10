---
title: SAM.gov Contract Awards API - Draft Document
banner-heading: SAM.gov Contract Awards API - Draft Document
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

## Overview
The Contract Awards API allows users to request revealed Award and IDV contract data, and unrevealed Award and IDV contract data, based on the user’s account and/or system account accessing the Contracts API.

Award and IDV contract data consists of:

```
Delivery/Task Orders                               Federal Supply Schedules
Government-Wide Agency Contracts                   Purchase Orders  
Basic Ordering Agreements                          Definitive Contracts
Blanket Purchasing Agreements                      BPA Calls
Indefinite Delivery Contracts                      Other Transaction Orders	
Other Transaction IDVs                             Other Transaction Agreements	
```

### Revealed/Unrevealed Data

Revealed data includes contracts that were either funded or awarded by a Civilian Subtier, as well as contracts funded and awarded by DoD, provided the Date Signed is at least 90 days prior to today's date. Unrevealed data consists of all revealed contracts, plus DoD contracts that were funded and awarded with a Date Signed less than 90 days prior to today. Additionally, the UEI and Name for the Immediate Parent and Domestic Parent of the Awardee is included in the Unrevealed API response and excluded from the Revealed API response.

### Key Features of the Contract Awards API

- It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!) conditions, null searches, and a free text search q to obtain the desired data.
- It returns synchronous responses.
- It returns ten records per page in the JSON format by default, and allows users to increase the response to 100 records per page through the use of the limit parameter.
- It can return only the first 400,000 records.
- The following characters are not allowed to be sent in the parameter values with the API request: & \| { } ^ \

### Additional Features of the Contract Awards API

#### Extract
It can serve as an Extract API with the addition of the “format” parameter in the request. Following are the key features of the getList Contracts Extract API:

- It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
- It returns asynchronous responses by sending file downloadable link.
- It returns data in the JSON or CSV format as selected by the user.
- It can return only the first 1,000,000 records.

#### PIID Aggregation

The piidAggregation parameter allows users to retrieve a high-level summary of a contract and any contracts that reference it. This parameter must be used in conjunction with the piid parameter. If the piid alone is not unique, the parameter referencedIdvPiid must also be provided.

When piidAggregation is sent and a valid PIID is provided, the response will include an award family summary with:

 - The total number of records within the award family. (including base and modifications)
 - The total dollars obligated
 
If the provided PIID is an IDV (excluding FSS), the summary will also include a summary of referencing Delivery Orders or BPA Calls:

 - The number of Base Delivery Orders or BPA Calls (excluding modifications) referencing the IDV
 - The number of Delivery Orders or BPA Calls (including base and modifications) referencing the IDV
 - The total dollars obligated on those Delivery Orders or BPA Calls
 
If the provided PIID is an FSS, the summary will include a summary of BPAs referencing the PIID, and a summary of BPA Calls referencing the BPAs:
 
 - The number of Base BPAs (excluding modifications) referencing the FSS
 - The number of BPAs (including base and modifications) referencing the FSS
 - The total dollars obligated on those BPAs
 - The number of Base BPA Calls referencing the BPAs (excluding modifications)
 - The number of BPA Calls referencing the BPAs
 - The total dollars obligated on those BPA Calls
 
#### Deleted Contracts

The Contract Awards API can be used to pull the deleted contracts by sending the query parameter 'deletedStatus'. When the query parameter 'deletedStatus' is sent in the API request, the Contract Award API will return deleted contracts only. The same revealed/unrevealed logic will be applied when parameter 'deletedStatus' is provided in the request. The Contract Awards API will have the capability to return contracts deleted within the last 6 months.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

### API endpoints

**Alpha:**
* https://api-alpha.sam.gov/contract-awards/v1/search?api_key=
* https://api-alpha.sam.gov/contract-awards/v1/search?deleteStatus=yes&api_key=


### User Requirements

**To access revealed contract data:**
* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, or a non-Federal/Federal System Account and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access unrevealed contract data:**
* Available only to users assigned to DoD.
* Users must have a Federal Individual (Personal) account or a Federal System Account and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

#### Individual (Personal) Accounts

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, “Public API Key”.<br>
  ![image info](v1/EYE_IMAGE.JPG)  
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.

#### System Accounts

* The SAM.gov non-Federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts” widget on their SAM.gov “Workspace” page.
* The SAM.gov Federal registered users must contact their CCB representatives for obtaining the “System Accounts” widget on their SAM.gov “Workspace” page.
* Users must create their System Account using the “System Accounts” widget and get it approved.
* Users must then set the password for the System Account.
* After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.
* System Accounts must satisfy the following criteria to successfully utilize the Contract Awards API:


    * System Information<br/>
      Unique System ID: The System Account ID
    * Permissions<br/>
      Contract Data: read public –> Gives access to the contract data.<br/>      
    * Security Information<br/>
      IP Address: List all the IP Addresses that the System invokes the API from.
    * Type of Connection: REST APIs
    * System Account Password
    * System Account API Key


### API Key Rate Limits

| Type of User Account| Type of API Key | Default API Daily Rate Limit 
| ---------------------------|---------------------------|------------------------------|
| Non-federal user with no Role in SAM.gov | Personal API key | 10 requests/day |
| Non-federal user with a Role in SAM.gov | Personal API key | 1,000 requests/day |
| Federal User | Personal API key | 1,000 requests/day |
| Non-federal System user | System account API key| 1,000 requests/day |
| Federal System user | System account API key | 10,000 requests/day |


### Utilizing the API Extract
* To retrieve Contract data in the CSV format, “format=csv” must be provided in the request.
* To retrieve Contract data in the JSON format, “format=json” must be provided in the request.
* If the request is executed successfully, then a file downloadable URL with Token will be returned. This URL can also be obtained in emails by providing “emailId=Yes” in the request.
* In the file downloadable URL, the phrase REPLACE_WITH_API_KEY must be replaced with a valid API Key and sent as another request.
* If the file is ready for download, then the users can retrieve it. If the file is not ready for download, then the users will need to try again in some time.


## API Description

<details>
    <summary><strong>Query String Parameters: </strong><br>The Contract Awards API offers several optional search parameters that can be provided independently or in combination with each other.</summary>
    <table>
        <thead>
        <tr>
            <th>Request Parameter</th>
            <th>Description</th>
            <th>Required</th>
            <th>Data Type</th>
            <th>Version</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>api_key</td>
            <td>Public key of users</td>
            <td>Yes</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>limit</td>
            <td>Total number of records to be retrieved per page. This field must be a numberMax Value = 100. The default limit value is 10.</td>
            <td>No</td>
            <td>Int</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>Indicates the page index. Default offset starts with 0</td>
            <td>No</td>
            <td>Int</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>dollarsObligated</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range. <br> Examples: dollarsObligated=-1000.99, dollarsObligated=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>totalDollarsObligated</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range. <br> Examples: totalDollarsObligated=100000.99, totalDollarsObligated=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>approvedDate</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: approvedDate=01/01/2019, approvedDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeCageCode</td>
            <td>Allows a single 5-character CAGE Code value or up to 100 values or null. <br> Example: awardeeCageCode=00000, awardeeCageCode=00000~11111~11321</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>closedDate</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: closedDate=01/01/2019, closedDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>closedStatus</td>
            <td>Allows a text. <br> Examples: closedStatus=Yes, closedStatus=No</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>solicitationID</td>
            <td>Allows a text. <br> Example: solicitationID=47QCDE25PTEST</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>solicitationDate</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: solicitationDate=01/01/2019, solicitationDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>documentVersion</td>
            <td>Allows a text. <br> Example: documentVersion=1.5</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>documentStatus</td>
            <td>Allows a text. By default when status is not provided, only Awards and IDVs with a status of Final will be returned. <br> Examples: documentStatus=DRAFT, documentStatus=FINAL, documentStatus=All</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
		  <tr>
            <td>deleteStatus</td>
            <td>Allows value equal to 'yes'. Returns contracts deleted within the last 6 months.<br> Example: deleteStatus=yes</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>piid</td>
            <td>Allows a text. <br> Example: piid=127EAS25FTEST</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardOrIDV</td>
            <td>Allows a text. <br>Examples: awardOrIDV=IDV, awardOrIDV=Award</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardOrIDVTypeCode</td>
            <td>Allows a 1 character code. <br> Example: awardOrIDVTypeCode=B</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardOrIDVTypeName</td>
            <td>Allows a text. <br> Example: awardOrIDVTypeName=PURCHASE ORDER</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractingSubtierCode</td>
            <td>Allows 4 character code <br> Example: contractingSubtierCode=2100</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractingSubtierName</td>
            <td>Allows Partial or Complete value. <br> Example: contractingSubtierName=PUBLIC BUILDINGS SERVICE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractingDepartmentCode</td>
            <td>Allows 4 character code <br> Example: contractingDepartmentCode=9700</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractingDepartmentName</td>
            <td>Allows Partial or Complete value. <br> Example: contractingDepartmentName=GENERAL SERVICES</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractingOfficeCode</td>
            <td>Allows 6 character code <br> Example: contractingOfficeCode=47QCCA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>coBusSizeDeterminationCode</td>
            <td>Allows a 1 character code <br> Example: coBusSizeDeterminationCode=S</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>coBusSizeDeterminationName</td>
            <td>Allows a text <br> Example: coBusSizeDeterminationName=SMALL BUSINESS</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>createdDate</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: createdDate=01/01/2019, createdDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>currentCompletionDate</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: currentCompletionDate=01/01/2019, currentCompletionDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>dateSigned</td>
            <td>Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] <br> Examples: dateSigned=01/01/2019, dateSigned=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeZipCode</td>
            <td>Allows either a 5 or 9-digit code for US zip codes, or any digit postal code for non-US postal codes. <br> Examples: awardeeZipCode=022015678, awardeeZipCode=110054</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeCityName</td>
            <td>Allows a text. <br> Example: awardeeCityName=Austin</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeCongressionalDistrict</td>
            <td>Allows a 2 digit code. <br> Example: awardeeCongressionalDistrict=01</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeCountryCode</td>
            <td>Allows a 3 character code. <br> Example: awardeeCountryCode=USA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeCountryName</td>
            <td>Allows Partial or Complete value. <br> Example: awardeeCountryName=UNITED STATES</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeDoingBusinessAsName</td>
            <td>Allows Partial or Complete value.<br> awardeeDoingBusinessAsName=ENTITY NAME</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeStateCode</td>
            <td>Allows a 2 character code. <br>awardeeStateCode=NC</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeStateName</td>
            <td>Allows Partial or Complete value.<br>awardeeStateName=NORTH CAROLINA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fiscalYear</td>
            <td>Allows a 4 character code.<br>fiscalYear=2024</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fundingSubtierCode</td>
            <td>Allows 4 character code<br>fundingSubtierCode=4732</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fundingSubtierName</td>
            <td>Allows Partial or Complete value.<br>fundingSubtierName=PUBLIC BUILDINGS SERVICE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fundingDepartmentCode</td>
            <td>Allows 4 character code <br>fundingDepartmentCode=4700</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fundingDepartmentName</td>
            <td>Allows Partial or Complete value.<br>fundingDepartmentName=GENERAL SERVICES ADMINISTRATION</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>lastModifiedDate</td>
            <td>Allows a single Date or a Date range.<br>lastModifiedDate=01/01/2019 or lastModifiedDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeLegalBusinessName</td>
            <td>Allows Partial or Complete value.<br>awardeeLegalBusinessName=ENTITY LEGAL NAME</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>clingerCohenActCode</td>
            <td>Allows a 1 character code.<br>clingerCohenActCode=Y</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>clingerCohenActName</td>
            <td>Allows a text.<br>clingerCohenActName=No</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>materialsSuppliesArticlesAndEquipCode</td>
            <td>Allows a 1 character code.<br>materialsSuppliesArticlesAndEquipCode=N</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>materialsSuppliesArticlesAndEquipName</td>
            <td>Allows a text.<br>materialsSuppliesArticlesAndEquipName=Yes</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>laborStandardsCode</td>
            <td>Allows a 1 character code.<br>laborStandardsCode=X</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>laborStandardsName</td>
            <td>Allows a text.<br>laborStandardsName=No</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>constructionWageRateRequirementsCode</td>
            <td>Allows a 1 character code.<br>constructionWageRateRequirementsCode=N</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>constructionWageRateRequirementsName</td>
            <td>Allows a text.<br>constructionWageRateRequirementsName=Yes</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>localAreaSetAsideName</td>
            <td>Allows a text or null.<br>localAreaSetAsideName=Yes or localAreaSetAsideName=No</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>modificationNumber</td>
            <td>Allows 6 character code.<br>modificationNumber=P00001</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>extentCompetedCode</td>
            <td>Allows a 1 character code.<br>extentCompetedCode=B</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>extentCompetedName</td>
            <td>Allows a text.<br>extentCompetedName=NOT COMPETED</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>typeOfSetAsideCode</td>
            <td>Allows a text.<br>typeOfSetAsideCode=SBA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>typeOfSetAsideName</td>
            <td>Allows a text.<br>typeOfSetAsideName=BUY INDIAN</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>solicitationProceduresCode</td>
            <td>Allows a text.<br>solicitationProceduresCode=NP</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>solicitationProceduresName</td>
            <td>Allows a text.<br>solicitationProceduresName=TWO STEP</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractOpportunitiesNoticeCode</td>
            <td>Allows a 1 character code.<br>contractOpportunitiesNoticeCode=X</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>contractOpportunitiesNoticeName</td>
            <td>Allows a text.<br>contractOpportunitiesNoticeName=Yes</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>multiyearContractName</td>
            <td>Allows a text<br>multiyearContractName=Yes or multiyearContractName=No</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>numberOfOffersReceived</td>
            <td>Allows a text.<br>numberOfOffersReceived=3</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>naicsCode</td>
            <td>Allows a single 6-character NAICS value or up to 100 values or null or not null.<br>naicsCode=513310 or naicsCode=513310~513311~513312</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>nationalInterestActionCode</td>
            <td>Allows 4 character code.<br>nationalInterestActionCode=H17I</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>nationalInterestActionName</td>
            <td>Allows Partial or Complete value.<br>nationalInterestActionName=HURRICANE IRMA 2017</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>periodOfPerformanceStartDate</td>
            <td>Allows a single Date or a Date range.<br>periodOfPerformanceStartDate=01/01/2019 or periodOfPerformanceStartDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>piidSubtierCode</td>
            <td>Allows 4 character code<br>piidSubtierCode=8000</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>piidSubtierName</td>
            <td>Allows Partial or Complete value.<br>piidSubtierName=PUBLIC BUILDINGS SERVICE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformCityName</td>
            <td>Allows a text.<br>placeOfPerformCityName=Austin</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformCongressionalDistrict</td>
            <td>Allows a 2 digit code.<br>placeOfPerformCongressionalDistrict=01</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformCountryCode</td>
            <td>Allows a 3 character code.<br>placeOfPerformCountryCode=USA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformCountryName</td>
            <td>Allows Partial or Complete value.<br>placeOfPerformCountryName=UNITED STATES</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformStateCode</td>
            <td>Allows a 2 character code.<br>placeOfPerformStateCode=NC</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformStateName</td>
            <td>Allows Partial or Complete value.<br>placeOfPerformStateName=NORTH CAROLINA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>placeOfPerformZipCode</td>
            <td>Allows either a 5 or 9-digit code for US zip codes, or any digit postal code for non-US postal codes.<br>placeOfPerformZipCode=022012341 or placeOfPerformZipCode=110054</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>productOrServiceCode</td>
            <td>Allows a 4-character PSC value or up to 100 values.<br>productOrServiceCode=X1QA or productOrServiceCode=X1QA~1005~C1AA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>productOrServiceType</td>
            <td>Allows a text.<br>productOrServiceType=SERVICE or productOrServiceType=PRODUCT</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>reasonForModificationCode</td>
            <td>Allows 1 character code.<br>reasonForModificationCode=A</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>reasonForModificationName</td>
            <td>Allows Partial or Complete value.<br>reasonForModificationName=FUNDING ONLY ACTION</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvPIIDSubtierCode</td>
            <td>Allows 4 character code.<br>referencedIdvPIIDSubtierCode=8000</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvPIIDSubtierName</td>
            <td>Allows a text.<br>referencedIdvPIIDSubtierName=DEPT OF DEFENSE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvPiid</td>
            <td>Allows a text.<br>referencedIdvPiid=47QRAA23DTE5T</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvMultipleOrSingleCode</td>
            <td>Allows 1 character code.<br>referencedIdvMultipleOrSingleCode=S</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvMultipleOrSingleName</td>
            <td>Allows a text.<br>referencedIdvMultipleOrSingleName=MULTIPLE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvPart8OrPart13</td>
            <td>Allows a text.<br>referencedIdvPart8OrPart13=Part8</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvTypeCode</td>
            <td>Allows 1 character code.<br>referencedIdvTypeCode=A</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>referencedIdvTypeName</td>
            <td>Allows a text.<br>referencedIdvTypeName=FSS</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>transactionNumber</td>
            <td>Allows a text<br>Example: transactionNumber=16</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>piidAggregation=yes</td>
            <td>Allows a text. Return PIID Aggregation data in response. PIID parameter is required when piidaggregation is provided.<br>Example: piidAggregation=yes&amp;piid=47QALD23PTEST</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeBusinessTypeName</td>
            <td>Allows partial or complete value search.<br>Example: awardeeBusinessTypeName=HOSPITAL</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>sourceSelectionProcessCode</td>
            <td>Allows a text<br>Example: sourceSelectionProcessCode=LPTA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>sourceSelectionProcessName</td>
            <td>Allows partial or complete value search.<br>Example: sourceSelectionProcessName=OTHER</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>format</td>
            <td>Allows users to download data into the JSON and CSV asynchronous file formats.<br>Example: format=csv.</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>emailId</td>
            <td>When used in conjunction with the format parameter, allows user to get JSON or CSV asynchronous file download links with tokens sent to the email address associated to the API key used in the request.<br>Example: emailId=Yes&amp;format=JSON</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>typeOfContractPricingCode</td>
            <td>Allows 1 character code.<br>Example: typeOfContractPricingCode=J</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>typeOfContractPricingName</td>
            <td>Allows partial or complete value search.<br>Example: typeOfContractPricingName=FIRM FIXED PRICE</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>ultimateCompletionDate</td>
            <td>Allows a single Date or a Date range.<br>Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]<br>Examples: ultimateCompletionDate=01/01/2019, ultimateCompletionDate=[01/01/2019,05/29/2019]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>ultimateContractValue</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range.<br>Examples: ultimateContractValue=100000.99, ultimateContractValue=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>totalUltimateContractValue</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range.<br>Examples: totalUltimateContractValue=100000.99, totalUltimateContractValue=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardeeUniqueEntityId</td>
            <td>Allows a single 12-character value or up to 100 values.<br>Example: awardeeUniqueEntityId=RV56IG5JM6G9 awardeeUniqueEntityId=RV56IG5JM6G9~BR5F3G5JM6TR</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>consortiaUEI</td>
            <td>Allows a single 12-character value or up to 100 values.<br>Example: consortiaUEI=RV56IG5JM6G9 consortiaUEI=RV56IG5JM6G9~BR5F3G5JM6TR</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>consortiaLegalBusinessName</td>
            <td>Allows a text.<br>Example: consortiaLegalBusinessName=ENTITY NAME</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>nonGovernmentDollars</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range.<br>Examples: nonGovernmentDollars=100000.99, nonGovernmentDollars=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>totalNonGovernmentDollars</td>
            <td>Allows for a single positive or negative Dollar value or a Dollar range.<br>Examples: totalNonGovernmentDollars=100000.99, totalNonGovernmentDollars=[5000.99,100000.99]</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>nonTraditionalGovernmentEntityParticipationCode</td>
            <td>Allows a text<br>Example: nonTraditionalGovernmentEntityParticipationCode=DEC</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>nonTraditionalGovernmentEntityParticipationName</td>
            <td>Allows a text<br>Example: nonTraditionalGovernmentEntityParticipationName=COST SHARING</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>typeOfAgreementName</td>
            <td>Allows a text<br>Example: typeOfAgreementName=PRODUCTION</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>far1102ExceptionCode</td>
            <td>Allows a 1 character code.<br>Example: far1102ExceptionCode=3</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>far1102ExceptionName</td>
            <td>Allows a text.<br>Example: far1102ExceptionName=CLASSIFIED CONTRACTS</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>includeSections</td>
            <td>Allows to filter data by sections.<br>The applicable sections are contractId, coreData, contract, entityInformation, and nasaSpecific.<br>Examples: includeSections=contractId,entityInformation; includeSections=contractId,contract,nasaSpecific</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>q</td>
            <td>Allows a text. Supports free text search</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>fundingOfficeCode</td>
            <td>Allows a 6 character code<br>Example: fundingOfficeCode=47QCCA</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>ultimateParentLegalBusinessName</td>
            <td>Allows partial or complete value search.<br>Example: ultimateParentLegalBusinessName=ENTITY NAME</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>ultimateParentUniqueEntityId</td>
            <td>Allows a single 12-character value or up to 100 values.<br>Example: ultimateParentUniqueEntityId=R5PKHW7GWD94 ultimateParentUniqueEntityId=R5PKHW7GWD94~BR5F3G5JM6TR</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>createdBy</td>
            <td>Allows a text.<br>Example: createdBy=TEST_USER_101</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>approvedBy</td>
            <td>Allows a text.<br>Example: approvedBy=TEST_USER_101</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>lastModifiedBy</td>
            <td>Allows a text.<br>Example: lastModifiedBy=TEST_USER_101</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>closedBy</td>
            <td>Allows a text.<br>Example: closedBy=TEST_USER_101</td>
            <td>No</td>
            <td>String</td>
            <td>v1</td>
        </tr>
        </tbody>
    </table>
</details>


<details>
    <summary><strong>Response Schema:</strong><br> Based on the request parameters and account associated with the API Key provided in the request, the API returns the following response parameters.</summary>    
    <table>
        <thead>
            <tr>
            <td>Response Parameters</td>
            <td>Description</td>
            <td>Data Type</td>
            <td>Applicable Versions</td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>totalRecords</td>
            <td>Total Records in Response</td>
            <td>Number</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>limit</td>
            <td>Limit of Response</td>
            <td>Number</td>
            <td>v1</td></tr>
        <tr>
            <td>offset</td>
            <td>Offset of Response</td>
            <td>Number</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation</td>
            <td>PIID Aggregation</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.awardFamilySummary</td>
            <td>Award Family Summary</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.awardFamilySummary.count</td>
            <td>Count of Modifications plus Base in Award family</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.awardFamilySummary.totalDollars</td>
            <td>Total Dollars obligated in Award Family</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.referencingDosOrBpaCallsSummary</td>
            <td>Referencing DOs or Bpa Calls Summary (Only applicable when PIID provided is an IDV, excluding FSS)</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.referencingDosOrBpaCallsSummary.baseCount</td>
            <td>Count of Base Delivery Orders or BPA Calls referencing the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.referencingDosOrBpaCallsSummary.totalCount</td>
            <td>Count of Delivery Orders or BPA Calls referencing the PIID provided. (Base plus Modifications)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.referencingDosOrBpaCallsSummary.totalDollars</td>
            <td>Total Dollars obligated on Delivery Orders or BPA Calls referencing the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaSummary</td>
            <td>BPA Summary (Only applicable when PIID provided is FSS)</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaSummary.baseCount</td>
            <td>Count of Base BPAs referencing the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaSummary.totalCount</td>
            <td>Count of BPAs referencing the PIID provided. (Base plus Modifications)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaSummary.totalDollars</td>
            <td>Total Dollars obligated on BPAs that references the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaCallSummary</td>
            <td>BPA Call Summary (Only applicable when PIID provided is FSS)</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaCallSummary.baseCount</td>
            <td>Count of Base BPA Calls referencing a BPA that references the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaCallSummary.totalCount</td>
            <td>Count of BPA Calls referencing a BPA that references the PIID provided. (Base plus Modifications)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaCallSummary.totalDollars</td>
            <td>Total Dollars obligated on BPA Calls referencing a BPA that references the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>piidAggregation.bpaCallSummary.totalDollars</td>
            <td>Total Dollars obligated on BPA Calls referencing a BPA that references the PIID provided.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardSummary</td>
            <td>Award Summary</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId</td>
            <td>Contract ID Information: Contract ID Information:<br>Subtier<br>PIID<br>Modification Number<br>Transaction Number<br>Referenced IDV Subtier<br>Referenced IDV PIID<br>Referenced IDV Modification Number</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.subtier</td>
            <td>Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.subtier.name</td>
            <td>Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.piid</td>
            <td>PIID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.modificationNumber</td>
            <td>Modification Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.transactionNumber</td>
            <td>Transaction Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.referencedIDVSubtier</td>
            <td>Referenced IDV Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.referencedIDVSubtier.code</td>
            <td>Referenced IDV Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.referencedIDVSubtier.name</td>
            <td>Referenced IDV Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.referencedIDVPiid</td>
            <td>Referenced IDV PIID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.referencedIDVModificationNumber</td>
            <td>Referenced IDV Modification Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.reasonForModification</td>
            <td>Reason For Modification</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.reasonForModification.code</td>
            <td>Reason For Modification Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>contractId.reasonForModification.name</td>
            <td>Reason For Modification Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId</td>
            <td>Old Contract ID Information: <br>Subtier<br>PIID<br>Modification Number<br>Transaction Number<br>Referenced IDV Subtier<br>Referenced IDV PIID<br>Referenced IDV Modification Number</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.subtier</td>
            <td>Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.subtier.code</td>
            <td>Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.subtier.name</td>
            <td>Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.piid</td>
            <td>PIID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.modificationNumber</td>
            <td>Modification Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.transactionNumber</td>
            <td>Transaction Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier</td>
            <td>Referenced IDV Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier.code</td>
            <td>Referenced IDV Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier.name</td>
            <td>Referenced IDV Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVPiid</td>
            <td>Referenced IDV PIID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVModificationNumber</td>
            <td>Referenced IDV Modification Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier</td>
            <td>Referenced IDV Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier.code</td>
            <td>Referenced IDV Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVSubtier.name</td>
            <td>Referenced IDV Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVPiid</td>
            <td>Referenced IDV PIID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>oldContractId.referencedIDVModificationNumber</td>
            <td>Referenced IDV Modification Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData</td>
            <td>Core Information: <br>Core Version ID<br>Solicitation ID<br>Solicitation Date<br>Title<br>Contract Action Type<br>Initiative<br>Contracting Information:<br>Funding Information<br>Type of Contract Pricing<br>Multiyear Contract<br>Major Program Code<br>Program Acronym<br>National Interest Action<br>Performance Based Service Contract<br>Contingency Humanitarian Peace Keeping Operation<br>Consolidated Contract<br>Clinger Cohen Act<br>Materials Supplies Articles Equipment<br>Labor Standards<br>Construction Wage Rate Requirements<br>Recovered Material Clauses<br>Place of Performance<br>Product Or Service<br>Principal NAICS<br>Contract Bundling<br>DoD Acquisition Program<br>DoD Claimant Program<br>Government Furnished Property<br>Extent Competed<br>Solicitation Procedures<br>Type Of Set Aside<br>SBIR/STTR<br>Statutory Exception To Fair Opportunity<br>Reason Not Competed (Other Than Full And Open Competition)<br>Authority<br>Local Area Set Aside<br>A76 Action<br>Source Selection Process<br>Type of IDC<br>Multiple or Single Award IDC</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.coreVersionId</td>
            <td>Core Version ID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.solicitationId</td>
            <td>Solicitation ID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.solicitationDate</td>
            <td>Solicitation Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.awardOrIDV</td>
            <td>Award or IDV</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.awardOrIDVType</td>
            <td>Award or IDV</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.awardOrIDVType.code</td>
            <td>Award Or IDV Type Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.awardOrIDVType.name</td>
            <td>Award Or IDV Type Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.initiative</td>
            <td>Initiative</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.initiative.code</td>
            <td>Initiative Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.initiative.name</td>
            <td>Initiative Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization</td>
            <td>Federal Organization</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation</td>
            <td>Contracting Information:<br>Contracting Department<br>Contracting Subtier<br>Contracting Office</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingDepartment</td>
            <td>Contracting Department</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingDepartment.code</td>
            <td>Contracting Department Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingDepartment.name</td>
            <td>Contracting Department Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingSubtier</td>
            <td>Contracting Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingSubtier.name</td>
            <td>Contracting Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingSubtier.code</td>
            <td>Contracting Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingOffice</td>
            <td>Contracting Office</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingOffice.code</td>
            <td>Contracting Office Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.contractingInformation.contractingOffice.name</td>
            <td>Contracting Office Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation</td>
            <td>Funding Information:<br>Funding Department<br>Funding Subtier<br>Funding Office<br>Foreign Funding</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingDepartment</td>
            <td>Funding Department</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingDepartment.code</td>
            <td>Funding Department Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingDepartment.name</td>
            <td>Funding Department Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingSubtier</td>
            <td>Funding Subtier</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingSubtier.code</td>
            <td>Funding Subtier Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingSubtier.name</td>
            <td>Funding Subtier Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingOffice</td>
            <td>Funding Office</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingOffice.code</td>
            <td>Funding Office Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.fundingOffice.name</td>
            <td>Funding Office Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.foreignFunding</td>
            <td>Foreign Funding</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.foreignFunding.code</td>
            <td>Foreign Funding Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.federalOrganization.fundingInformation.foreignFunding.name</td>
            <td>Foreign Funding Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData</td>
            <td>Acquisition Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfContractPricing</td>
            <td>Type of Contract Pricing</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfContractPricing.code</td>
            <td>Type of Contract Pricing Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfContractPricing.name</td>
            <td>Type of Contract Pricing Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multiyearContract</td>
            <td>Multiyear Contract</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multiyearContract.code</td>
            <td>Multiyear Contract Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multiyearContract.name</td>
            <td>Multiyear Contract Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.majorProgramCode</td>
            <td>Major Program Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.programAcronym</td>
            <td>Program Acronym</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.nationalInterestAction</td>
            <td>National Interest Action</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.nationalInterestAction.code</td>
            <td>National Interest Action Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.nationalInterestAction.name</td>
            <td>National Interest Action Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.performanceBasedServiceContract</td>
            <td>Performance Based Service Contract</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.performanceBasedServiceContract.code</td>
            <td>Performance Based Service Contract Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.performanceBasedServiceContract.name</td>
            <td>Performance Based Service Contract Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.consolidatedContract</td>
            <td>Consolidated Contract</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.consolidatedContract.code</td>
            <td>Consolidated Contract Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.consolidatedContract.name</td>
            <td>Consolidated Contract Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfIdc</td>
            <td>Type of IDC</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfIdc.code</td>
            <td>Type of IDC Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.typeOfIdc.name</td>
            <td>Type of IDC Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multipleOrSingleAwardIdc</td>
            <td>Multiple or Single Award IDC</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multipleOrSingleAwardIdc.code</td>
            <td>Multiple or Single Award IDC Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.multipleOrSingleAwardIdc.name</td>
            <td>Multiple or Single Award IDC Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.reasonForInterAgencyContracting</td>
            <td>Reason For Inter-Agency Contracting</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.reasonForInterAgencyContracting.code</td>
            <td>Reason For Inter-Agency Contracting Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.reasonForInterAgencyContracting.name</td>
            <td>Reason For Inter-Agency Contracting Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.contractFinancing</td>
            <td>Contract Financing</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.contractFinancing.code</td>
            <td>Contract Financing Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionData.contractFinancing.name</td>
            <td>Contract Financing Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates</td>
            <td>Legislative Mandates</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.clingerCohenAct</td>
            <td>Clinger Cohen Act</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.clingerCohenAct.code</td>
            <td>Clinger Cohen Act Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.clingerCohenAct.name</td>
            <td>Clinger Cohen Act Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.materialsSuppliesArticlesEquipment</td>
            <td>Materials Supplies Articles Equipment</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.materialsSuppliesArticlesEquipment.code</td>
            <td>Materials Supplies Articles Equipment Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.materialsSuppliesArticlesEquipment.name</td>
            <td>Materials Supplies Articles Equipment Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.laborStandards</td>
            <td>Labor Standards</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.laborStandards.code</td>
            <td>Labor Standards Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.laborStandards.name</td>
            <td>Labor Standards Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.constructionWageRateRequirements</td>
            <td>Construction Wage Rate Requirements</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.constructionWageRateRequirements.code</td>
            <td>Construction Wage Rate Requirements Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.constructionWageRateRequirements.name</td>
            <td>Construction Wage Rate Requirements Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.interagencyContractingAuthority</td>
            <td>Interagency Contracting Authority</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.interagencyContractingAuthority.code</td>
            <td>Interagency Contracting Authority Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.interagencyContractingAuthority.name</td>
            <td>Interagency Contracting Authority Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.legislativeMandates.otherStatutoryAuthority</td>
            <td>Other Statutory Authority</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance</td>
            <td>Place of Performance:<br>Location Code<br>County<br>City<br>ZIP Code<br>State<br>Congressional District<br>Country</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.city</td>
            <td>City</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.city.code</td>
            <td>City Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.city.name</td>
            <td>City Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.county</td>
            <td>County</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.county.code</td>
            <td>County Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.county.name</td>
            <td>County Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.state</td>
            <td>State</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.state.code</td>
            <td>State Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.state.name</td>
            <td>State Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.zipCode</td>
            <td>ZIP Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.congressionalDistrict</td>
            <td>Congressional District</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.country</td>
            <td>Country</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.country.code</td>
            <td>Country Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.principalPlaceOfPerformance.country.name</td>
            <td>Country Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation</td>
            <td>Product Or Service Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.recoveredMaterialClauses</td>
            <td>Recovered Material Clauses</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.recoveredMaterialClauses.code</td>
            <td>Recovered Material Clauses Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.recoveredMaterialClauses.name</td>
            <td>Recovered Material Clauses Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.productOrService</td>
            <td>Product Or Service</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.productOrService.type</td>
            <td>Product Or Service Type</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.productOrService.code</td>
            <td>Product Or Service Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.productOrService.name</td>
            <td>Product Or Service Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.principalNaics</td>
            <td>Principal NAICS</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.principalNaics.code</td>
            <td>Principal NAICS Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.principalNaics.name</td>
            <td>Principal NAICS Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.contractBundling</td>
            <td>Contract Bundling</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.contractBundling.code</td>
            <td>Contract Bundling Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.contractBundling.name</td>
            <td>Contract Bundling Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodAcquisitionProgram</td>
            <td>DoD Acquisition Program</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodAcquisitionProgram.code</td>
            <td>DoD Acquisition Program Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodAcquisitionProgram.name</td>
            <td>DoD Acquisition Program Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodClaimantProgram</td>
            <td>DoD Claimant Program</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodClaimantProgram.code</td>
            <td>DoD Claimant Program Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.dodClaimantProgram.name</td>
            <td>DoD Claimant Program Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.gfeGfp</td>
            <td>Government Furnished Property</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.gfeGfp.code</td>
            <td>Government Furnished Property Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.gfeGfp.name</td>
            <td>Government Furnished Property Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory</td>
            <td>Information Technology Commercial Item Category</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory.code</td>
            <td>Information Technology Commercial Item Category Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory.name</td>
            <td>Information Technology Commercial Item Category Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.countryOfOrigin</td>
            <td>Country of Product or Service Origin</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.countryOfOrigin.code</td>
            <td>Country of Product or Service Origin Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.productOrServiceInformation.countryOfOrigin.name</td>
            <td>Country of Product or Service Origin Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation</td>
            <td>Competition Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.extentCompeted</td>
            <td>Extent Competed</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.extentCompeted.code</td>
            <td>Extent Competed Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.extentCompeted.name</td>
            <td>Extent Competed Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.solicitationProcedures</td>
            <td>Solicitation Procedures</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.solicitationProcedures.code</td>
            <td>Solicitation Procedures Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.solicitationProcedures.name</td>
            <td>Solicitation Procedures Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.typeOfSetAside</td>
            <td>Type Of Set Aside</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.typeOfSetAside.code</td>
            <td>Type Of Set Aside Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.typeOfSetAside.name</td>
            <td>Type Of Set Aside Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sbirSTTR</td>
            <td>SBIR/STTR</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sbirSTTR.code</td>
            <td>SBIR/STTR Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sbirSTTR.name</td>
            <td>SBIR/STTR Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.statutoryExceptionToFairOpportunity</td>
            <td>Statutory Exception To Fair Opportunity</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.statutoryExceptionToFairOpportunity.code</td>
            <td>Statutory Exception To Fair Opportunity Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.statutoryExceptionToFairOpportunity.name</td>
            <td>Statutory Exception To Fair Opportunity Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.otherThanFullAndOpenCompetition</td>
            <td>Other Than Full And Open Competition</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.otherThanFullAndOpenCompetition.code</td>
            <td>Other Than Full And Open Competition Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.otherThanFullAndOpenCompetition.name</td>
            <td>Other Than Full And Open Competition Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.localAreaSetAside</td>
            <td>Local Area Set Aside</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.localAreaSetAside.code</td>
            <td>Local Area Set Aside Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.localAreaSetAside.name</td>
            <td>Local Area Set Aside Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.a76Action</td>
            <td>A76 Action</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.a76Action.code</td>
            <td>A76 Action Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.a76Action.name</td>
            <td>A76 Action Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sourceSelectionProcess</td>
            <td>Source Selection Process</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sourceSelectionProcess.code</td>
            <td>Source Selection Process Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.sourceSelectionProcess.name</td>
            <td>Source Selection Process Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.preAwardSynopsisRequirement</td>
            <td>Pre Award Synopsis Requirement</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.preAwardSynopsisRequirement.code</td>
            <td>Pre Award Synopsis Requirement Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.preAwardSynopsisRequirement.name</td>
            <td>Pre Award Synopsis Requirement Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram</td>
            <td>Small Business Competitiveness Demonstration Program</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram.code</td>
            <td>Small Business Competitiveness Demonstration Program Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram.name</td>
            <td>Small Business Competitiveness Demonstration Program Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionMarketingData</td>
            <td>Acquisition Marketing Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionMarketingData.whoCanUse</td>
            <td>Who Can Use</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionMarketingData.whoCanUse.code</td>
            <td>Who Can Use Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionMarketingData.whoCanUse.name</td>
            <td>Who Can Use Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.acquisitionMarketingData.emailAddress</td>
            <td>Email Address</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.preferenceProgramsInformation</td>
            <td>Preference Programs Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>coreData.preferenceProgramsInformation.priceEvaluationPercentDifference</td>
            <td>Price Evaluation Percent Difference</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails</td>
            <td>Award Details Information:</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates</td>
            <td>Contract Dates Information:<br>Date Signed<br>Effective Date<br>Current Completion Date<br>Ultimate Completion Date<br>Last Date to Order<br>Fiscal Year</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.dateSigned</td>
            <td>Date Signed</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.periodOfPerformanceStartDate</td>
            <td>Period of Performance Start Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.currentCompletionDate</td>
            <td>Current Completion Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.ultimateCompletionDate</td>
            <td>Ultimate Completion Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.lastDateToOrder</td>
            <td>Last Date to Order</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dates.fiscalYear</td>
            <td>Fiscal Year</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars</td>
            <td>Contract Dollars Information:<br>Action Obligation<br>Base And Exercised Options Value<br>Base and All Options Value (Total Contract Value)<br>Fee Paid for Use of IDV<br>Total Estimated Order Value<br>Non-Government Dollars</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.actionObligation</td>
            <td>Action Obligation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.baseDollarsObligated</td>
            <td>Base Dollars Obligated</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.baseAndExercisedOptionsValue</td>
            <td>Base And Exercised Options Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.baseAndAllOptionsValue</td>
            <td>Base and All Options Value (Total Contract Value)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.feePaidForUseOfService</td>
            <td>Fee Paid for Use of Service</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.totalEstimatedOrderValue</td>
            <td>Total Estimated Order Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.dollars.nonGovernmentDollars</td>
            <td>Non-Government Dollars</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.totalContractDollars</td>
            <td>Total Contract Dollars Information:<br>Total Action Obligation<br>Total Base And Exercised Options Value<br>Total Base and All Options Value<br>Total Non-Government Dollars</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.totalContractDollars.totalActionObligation</td>
            <td>Total Action Obligation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.totalContractDollars.totalBaseAndExercisedOptionsValue</td>
            <td>Total Base And Exercised Options Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.totalContractDollars.totalBaseAndAllOptionsValue</td>
            <td>Total Base and All Options Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.totalContractDollars.totalNonGovernmentDollars</td>
            <td>Total Non-Government Dollars</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount</td>
            <td>Treasury Account Information:<br>Treasury Account Subtier Identifier<br>Treasury Account Main Account Code<br>Treasury Account Sub Account Code</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.agencyIdentifier</td>
            <td>Treasury Account Subtier Identifier</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.mainAccountCode</td>
            <td>Treasury Account Main Account Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.subAccountCode</td>
            <td>Treasury Account Sub Account Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.subLevelPrefixCode</td>
            <td>Sub-Level Prefix Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.allocationTransferAgencyIdentifier</td>
            <td>Allocation Transfer Agency Identifier</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.beginningPeriodOfAvailability</td>
            <td>Beginning Period Of Availability</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.endingPeriodOfAvailability</td>
            <td>Ending Period Of Availability</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.obligatedAmountTAS</td>
            <td>Obligated Amount TAS</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.availabilityType</td>
            <td>Availability Type</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.availabilityType.code</td>
            <td>Availability Type Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.treasuryAccount.availabilityType.name</td>
            <td>Availability Type Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData</td>
            <td>Contract Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.part8OrPart13</td>
            <td>Part8 Or Part13</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costOrPricingData</td>
            <td>Cost or Pricing Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costOrPricingData.code</td>
            <td>Cost or Pricing Data Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costOrPricingData.name</td>
            <td>Cost or Pricing Data Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.purchaseCardAsPaymentMethod</td>
            <td>Purchase Card Used As Payment Method</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.purchaseCardAsPaymentMethod.code</td>
            <td>Purchase Card Used As Payment Method Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.purchaseCardAsPaymentMethod.name</td>
            <td>Purchase Card Used As Payment Method Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.undefinitizedAction</td>
            <td>Undefinitized Action</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.undefinitizedAction.code</td>
            <td>Undefinitized Action Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.undefinitizedAction.name</td>
            <td>Undefinitized Action Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costAccountingStandardsClause</td>
            <td>Cost Accounting Standards Clause</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costAccountingStandardsClause.code</td>
            <td>Cost Accounting Standards Clause Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.costAccountingStandardsClause.name</td>
            <td>Cost Accounting Standards Clause Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.natureOfServices</td>
            <td>Nature of Services</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.natureOfServices.code</td>
            <td>Nature of Services Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.natureOfServices.name</td>
            <td>Nature of Services Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.emergencyAcquisition</td>
            <td>Emergency Acquisition</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.emergencyAcquisition.code</td>
            <td>Emergency Acquisition Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.emergencyAcquisition.name</td>
            <td>Emergency Acquisition Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.numberOfActions</td>
            <td>Number Of Actions</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVPart8OrPart13</td>
            <td>Referenced IDV Part 8 Or Part 13</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVType</td>
            <td>Referenced IDV Type</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVType.code</td>
            <td>Referenced IDV Type Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVType.name</td>
            <td>Referenced IDV Type Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVMultipleOrSingle</td>
            <td>Referenced IDV Multiple Or Single</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVMultipleOrSingle.code</td>
            <td>Referenced IDV Multiple Or Single Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractData.referencedIDVMultipleOrSingle.name</td>
            <td>Referenced IDV Multiple Or Single Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation</td>
            <td>Product Or Service Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.naicsSource</td>
            <td>NAICS Source</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.naicsSource.code</td>
            <td>NAICS Source Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.naicsSource.name</td>
            <td>NAICS Source Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.idvNAICS</td>
            <td>IDV NAICS</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.idvNAICS.code</td>
            <td>IDV NAICS Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.idvNAICS.name</td>
            <td>IDV NAICS Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.descriptionOfContractRequirement</td>
            <td>Description of Contract Requirement</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts</td>
            <td>Use Of EPA Designated Products</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts.code</td>
            <td>Use Of EPA Designated Products Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts.name</td>
            <td>Use Of EPA Designated Products Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.placeOfManufacture</td>
            <td>Place Of Manufacture</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.placeOfManufacture.code</td>
            <td>Place Of Manufacture Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.placeOfManufacture.name</td>
            <td>Place Of Manufacture Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.domesticOrForeignEntity</td>
            <td>Domestic or Foreign Entity</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.domesticOrForeignEntity.code</td>
            <td>Domestic or Foreign Entity Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.domesticOrForeignEntity.name</td>
            <td>Domestic or Foreign Entity Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.seaTransportation</td>
            <td>Sea Transportation</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.seaTransportation.code</td>
            <td>Sea Transportation Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.productOrServiceInformation.seaTransportation.name</td>
            <td>Sea Transportation Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation</td>
            <td>Competition Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures</td>
            <td>Commercial Products and Services Acquisition Procedures</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures.code</td>
            <td>Commercial Products and Services Acquisition Procedures Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures.name</td>
            <td>Commercial Products and Services Acquisition Procedures Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialItemTestProgram</td>
            <td>Commercial Item Test Program</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialItemTestProgram.code</td>
            <td>Commercial Item Test Program Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.commercialItemTestProgram.name</td>
            <td>Commercial Item Test Program Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.extentCompetedForReferencedIdv</td>
            <td>Extent Competed For Referenced IDV</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.extentCompetedForReferencedIdv.code</td>
            <td>Extent Competed For Referenced IDV Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.extentCompetedForReferencedIdv.name</td>
            <td>Extent Competed For Referenced IDV Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.evaluatedPreference</td>
            <td>Evaluated Preference</td>
            <td>JSON Object</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.evaluatedPreference.code</td>
            <td>Evaluated Preference Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.evaluatedPreference.name</td>
            <td>Evaluated Preference Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.numberOfOffersReceived</td>
            <td>Number Of Offers Received</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.idvTypeOfSetAside</td>
            <td>IDV Type Of Set Aside</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.idvTypeOfSetAside.code</td>
            <td>IDV Type Of Set Aside Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.idvTypeOfSetAside.name</td>
            <td>IDV Type Of Set Aside Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfSetAsideSource</td>
            <td>Type Of Set Aside Source</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfSetAsideSource.code</td>
            <td>Type Of Set Aside Source Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfSetAsideSource.name</td>
            <td>Type Of Set Aside Source Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.idvNumberOfOffersReceived</td>
            <td>IDV Number Of Offers Received</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.numberOfOffersSource</td>
            <td>Number Of Offers Source</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.numberOfOffersSource.code</td>
            <td>Number Of Offers Source Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.numberOfOffersSource.name</td>
            <td>Number Of Offers Source Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.contractOpportunitiesNotice</td>
            <td>Contract Opportunities Notice Opps</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.contractOpportunitiesNotice.code</td>
            <td>Contract Opportunities Notice Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.contractOpportunitiesNotice.name</td>
            <td>Contract Opportunities Notice Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfAgreement</td>
            <td>Type Of Agreement</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfAgreement.code</td>
            <td>Type Of Agreement Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.typeOfAgreement.name</td>
            <td>Type Of Agreement Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation</td>
            <td>Nontraditional Government Entity Participation</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation.code</td>
            <td>Nontraditional Government Entity Participation Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation.name</td>
            <td>Nontraditional Government Entity Participation Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.alternativeAdvertising</td>
            <td>Alternative Advertising</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.alternativeAdvertising.code</td>
            <td>Alternative Advertising Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.alternativeAdvertising.name</td>
            <td>Alternative Advertising Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.synopsisWaiverException</td>
            <td>Synopsis Waiver Exception</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.synopsisWaiverException.code</td>
            <td>Synopsis Waiver Exception Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.synopsisWaiverException.name</td>
            <td>Synopsis Waiver Exception Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.preawardSynopsisRequirement</td>
            <td>Pre-award Synopsis Requirement</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.preawardSynopsisRequirement.code</td>
            <td>Pre-award Synopsis Requirement Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.competitionInformation.preawardSynopsisRequirement.name</td>
            <td>Pre-award Synopsis Requirement Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation</td>
            <td>Preference Programs Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination</td>
            <td>Contracting Officer&#39;s Business Size Selection</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination.code</td>
            <td>Contracting Officer&#39;s Business Size Selection Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination.name</td>
            <td>Contracting Officer&#39;s Business Size Selection Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination</td>
            <td>IDV Contracting Officer Business Size Determination</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination.code</td>
            <td>IDV Contracting Officer Business Size Determination Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination.name</td>
            <td>IDV Contracting Officer Business Size Determination Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource</td>
            <td>Contracting Officer Business Size Determination Source</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource.code</td>
            <td>Contracting Officer Business Size Determination Source Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource.name</td>
            <td>Contracting Officer Business Size Determination Source Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.subcontractPlan</td>
            <td>Subcontract Plan</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.subcontractPlan.code</td>
            <td>Subcontract Plan Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.subcontractPlan.name</td>
            <td>Subcontract Plan Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness</td>
            <td>Reason Not Awarded To Small Disadvantaged Business</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness.code</td>
            <td>Reason Not Awarded To Small Disadvantaged Business Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness.name</td>
            <td>Reason Not Awarded To Small Disadvantaged Business Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness</td>
            <td>Reason Not Awarded To Small Business</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness.code</td>
            <td>Reason Not Awarded To Small Business Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness.name</td>
            <td>Reason Not Awarded To Small Business Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.legislativeMandates</td>
            <td>Legislative Mandates</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.legislativeMandates.additionalReporting</td>
            <td>Additional Reporting</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.legislativeMandates.additionalReporting.code</td>
            <td>Additional Reporting Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.legislativeMandates.additionalReporting.name</td>
            <td>Additional Reporting Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData</td>
            <td>Contract Marketing Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.websiteUrl</td>
            <td>Website URL</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.individualOrderLimit</td>
            <td>Individual Order Limit</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.typeOfFeeForUseOfService</td>
            <td>Type of Fee For Use of Service</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.typeOfFeeForUseOfService.code</td>
            <td>Type of Fee For Use of Service Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.typeOfFeeForUseOfService.name</td>
            <td>Type of Fee For Use of Service Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.fixedFeeValue</td>
            <td>Fixed Fee Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.feeRangeLowerValue</td>
            <td>Fee Range Lower Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.feeRangeUpperValue</td>
            <td>Fee Range Upper Value</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.contractMarketingData.orderingProcedure</td>
            <td>Ordering Procedure</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData</td>
            <td>Entity Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.far41102Exception</td>
            <td>FAR 4.1102 Exception</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.far41102Exception.code</td>
            <td>FAR 4.1102 Exception Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.far41102Exception.name</td>
            <td>FAR 4.1102 Exception Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader</td>
            <td>Awardee Header</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.awardeeName</td>
            <td>Awardee Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.awardeeAlternateName</td>
            <td>Awardee Alternate Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.legalBusinessName</td>
            <td>Legal Business Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.awardeeNameFromContract</td>
            <td>Awardee Name From Contract</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.awardeeDoingBusinessAsName</td>
            <td>Awardee Doing Business as Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeHeader.awardeeEnabled</td>
            <td>Awardee Enabled</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation</td>
            <td>Entity UEI Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.uniqueEntityId</td>
            <td>Unique Entity ID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.cageCode</td>
            <td>CAGE Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeImmediateParentUEI</td>
            <td>Awardee Immediate Parent UEI</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeImmediateParentName</td>
            <td>Awardee Immediate Parent Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeDomesticParentUEI</td>
            <td>Awardee Domestic Parent UEI</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeDomesticParentName</td>
            <td>Awardee Domestic Parent Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeUltimateParentUniqueEntityId</td>
            <td>Awardee Ultimate Parent Unique Entity ID</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeUEIInformation.awardeeUltimateParentName</td>
            <td>Awardee Ultimate Parent Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation</td>
            <td>Awardee Location</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.streetAddress1</td>
            <td>Awardee Street Address 1</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.streetAddress2</td>
            <td>Awardee Street Address 2</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.streetAddress3</td>
            <td>Awardee Street Address 3</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.city</td>
            <td>Awardee City</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.state</td>
            <td>Awardee State</td>
            <td>JSON object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.state.code</td>
            <td>Awardee State Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.state.name</td>
            <td>Awardee State Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.province</td>
            <td>Awardee Province</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.zip</td>
            <td>Awardee ZIP</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.country</td>
            <td>Awardee Country</td>
            <td>JSON object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.country.code</td>
            <td>Awardee Country Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.country.name</td>
            <td>Awardee Country Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.congressionalDistrict</td>
            <td>Awardee Congressional District</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.phoneNumber</td>
            <td>Awardee Phone Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.faxNumber</td>
            <td>Awardee Fax Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.awardeeLocationDisabledFlag</td>
            <td>Awardee Location Disabled Flag</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeLocation.awardeeDataSource</td>
            <td>Awardee Data Source</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeAlternateSiteCode</td>
            <td>Awardee Alternate Site Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeRegistrationDetails</td>
            <td>Awardee Registration Details</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeRegistrationDetails.registrationDate</td>
            <td>Registration Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeRegistrationDetails.renewalDate</td>
            <td>Renewal Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeRegistrationDetails.divisionName</td>
            <td>Division Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeRegistrationDetails.divisionNumberOrOfficeCode</td>
            <td>Division Number Or Office Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes</td>
            <td>Awardee Business Types</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment</td>
            <td>Is U.S. Federal Government</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.usFederalGovernment</td>
            <td>U.S. Federal Government</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.federalAgency</td>
            <td>Federal Agency</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.federallyFundedResearchAndDevelopmentCorp</td>
            <td>Federally Funded Research and Development Corp</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.usStateGovernment</td>
            <td>U.S. State Government</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.foreignGovernment</td>
            <td>Foreign Government</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.usTribalGovernment</td>
            <td>U.S. Tribal Government</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.communityDevelopmentCorporationOwnedConcern</td>
            <td>Community Development Corporation-Owned Concern</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment</td>
            <td>Is U.S. Local Government</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.usLocalGovernment</td>
            <td>U.S. Local Government</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.city</td>
            <td>City</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.county</td>
            <td>County</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.intermunicipal</td>
            <td>Inter-Municipal</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.localGovernmentOwned</td>
            <td>Local Government Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.municipality</td>
            <td>Municipality</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.schooldistrict</td>
            <td>School District</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.township</td>
            <td>Township</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.usGovernmentEntity</td>
            <td>U.S. Government Entity</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.laborSurplusAreaFirm</td>
            <td>Labor Surplus Area Firm</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization</td>
            <td>Business or Organization</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.corporateEntityNotTaxExempt</td>
            <td>Corporate Entity, Not Tax Exempt</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.corporateEntityTaxExempt</td>
            <td>Corporate Entity, Tax Exempt</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessorOrganization.partnershipOrLimitedLiabilityPartnership</td>
            <td>Partnership or Limited Liability Partnership</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.soleProprietorship</td>
            <td>Sole Proprietorship</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.smallAgriculturalCooperative</td>
            <td>Small Agricultural Cooperative</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.internationalOrganization</td>
            <td>International Organization</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData</td>
            <td>Socio Economic Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.alaskanNativeCorporationOwnedFirm</td>
            <td>Alaskan Native Corporation Owned Firm</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.americanIndianOwned</td>
            <td>American Indian Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.indianTribeFederallyRecognized</td>
            <td>Indian Tribe (Federally Recognized)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.nativeHawaiianOrganizationOwnedFirm</td>
            <td>Native Hawaiian Organization Owned Firm</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.triballyOwnedFirm</td>
            <td>Tribally Owned Firm</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.veteranOwnedBusiness</td>
            <td>Veteran-Owned Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.serviceDisabledVeteranOwnedBusiness</td>
            <td>Service-Disabled Veteran-Owned Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.serviceDisabledVeteranOwnedBusinessJointVenture</td>
            <td>Service-Disabled Veteran-Owned Business Joint Venture</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.VerySmallBusiness</td>
            <td>Very Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness</td>
            <td>Is Minority Owned Business</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.minorityOwnedBusiness</td>
            <td>Minority Owned Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.asianPacificAmericanOwned</td>
            <td>Asian-Pacific American Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.blackAmericanOwned</td>
            <td>Black American Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.hispanicAmericanOwned</td>
            <td>Hispanic American Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.nativeAmericanOwned</td>
            <td>Native American Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.subcontinentAsianAsianIndianAmericanOwned</td>
            <td>Subcontinent Asian (Asian-Indian) American Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.individualOrConcernOtherThanOneOfThePreceding</td>
            <td>Individual or concern, other than one of the preceding</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.womenOwnedBusiness</td>
            <td>Women-Owned Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.womenOwnedSmallBusiness</td>
            <td>Women-Owned Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.economicallyDisadvantagedWomenOwnedSmallBusiness</td>
            <td>Economically Disadvantaged Women Owned Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.womenOwnedSmallBusinessJointVenture</td>
            <td>Women-Owned Small Business (WOSB) Joint Venture eligible under the WOSB Program</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.economicallyDisadvantagedWomenOwnedSmallBusinessJointVenture</td>
            <td>Economically Disadvantaged Women-Owned Small Business (EDWOSB) Joint Venture</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.emergingSmallBusiness</td>
            <td>Emerging Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.socioEconomicData.smallBusinessJointVenture</td>
            <td>Small Business Joint Venture</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness</td>
            <td>Line Of Business</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.communityDevelopmentCorporation</td>
            <td>Community Development Corporation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.domesticShelter</td>
            <td>Domestic Shelter</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.educationalInstitution</td>
            <td>Educational Institution</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.foundation</td>
            <td>Foundation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.hospital</td>
            <td>Hospital</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.manufacturerOfGoods</td>
            <td>Manufacturer of Goods</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.veterinaryHospital</td>
            <td>Veterinary Hospital</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.lineOfBusiness.hispanicServicingInstitution</td>
            <td>Hispanic Servicing Institution</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.relationshipWithFederalGovernment</td>
            <td>Relationship With Federal Government</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.relationshipWithFederalGovernment.contracts</td>
            <td>Contracts</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.relationshipWithFederalGovernment.federalassistanceawards</td>
            <td>Federal Assistance Awards</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.relationshipWithFederalGovernment.allawards</td>
            <td>All Awards</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities</td>
            <td>Other Governmental Entities</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.airportAuthority</td>
            <td>Airport Authority</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.councilOfGovernments</td>
            <td>Council of Governments</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.housingAuthoritiesPublicTribal</td>
            <td>Housing Authorities Public/Tribal</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.interstateEntity</td>
            <td>Interstate Entity</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.planningCommission</td>
            <td>Planning Commission</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.portAuthority</td>
            <td>Port Authority</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.otherGovernmentalEntities.transitAuthority</td>
            <td>Transit Authority</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors</td>
            <td>Organization Factors</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.subchapterSCorporation</td>
            <td>Subchapter S Corporation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.limitedLiabilityCorporation</td>
            <td>Limited Liability Corporation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.foreignOwned</td>
            <td>Foreign Owned</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.theAbilityOneProgram</td>
            <td>The AbilityOne Program</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.profitStructure</td>
            <td>Profit Structure</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.profitStructure.forProfitOrganization</td>
            <td>For Profit Organization</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.profitStructure.nonProfitOrganization</td>
            <td>Non Profit Organization</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.profitStructure.otherNotForProfitOrganization</td>
            <td>Other Not For Profit Organization</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.organizationType</td>
            <td>Organization Type</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.stateOfIncorporation</td>
            <td>State of Incorporation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.organizationFactors.countryOfIncorporation</td>
            <td>Country of Incorporation</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities</td>
            <td>Educational Entities</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.1862LandGrantCollege</td>
            <td>1862 Land Grant College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.1890LandGrantCollege</td>
            <td>1890 Land Grant College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.1994LandGrantCollege</td>
            <td>1994 Land Grant College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.historicallyBlackCollegeOrUniversity</td>
            <td>Historically Black College or University (HBCU)</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.minorityInstitution</td>
            <td>Minority Institution</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.privateUniversityOrCollege</td>
            <td>Private University or College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.schoolOfForestry</td>
            <td>School of Forestry</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.stateControlledInstitutionOfHigherLearning</td>
            <td>State Controlled Institution of Higher Learning</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.tribalCollege</td>
            <td>Tribal College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.veterinaryCollege</td>
            <td>Veterinary College</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.alaskanNativeServicingInstitution</td>
            <td>Alaskan Native Servicing Institution</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.educationalEntities.nativeHawaiianServicingInstitution</td>
            <td>Native Hawaiian Servicing Institution</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications</td>
            <td>Certifications</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertified8aProgramParticipant</td>
            <td>SBA Certified 8(a) Program Participant</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertified8aJointVenture</td>
            <td>SBA Certified 8(a) Joint Venture</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.selfCertifiedHubZoneJointVenture</td>
            <td>Self Certified HUBZone Joint Venture</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertifiedSmallDisadvantagedBusiness</td>
            <td>SBA Certified Small Disadvantaged Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertifiedHubZoneFirm</td>
            <td>SBA Certified HUBZone Firm</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertifiedEconomicallyDisadvantagedWomenOwnedSmallBusiness</td>
            <td>SBA-Certified Economically Disadvantaged Women-Owned Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.selfCertifiedSmallDisadvantagedBusiness</td>
            <td>Self-Certified Small Disadvantaged Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.dotCertifiedDisadvantagedBusinessEnterprise</td>
            <td>DoT Certified Disadvantaged Business Enterprise</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.certifications.sbaCertifiedWomenOwnedSmallBusiness</td>
            <td>SBA-Certified Women-Owned Small Business</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia</td>
            <td>Consortia Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.memberFlag</td>
            <td>Consortia Member Flag</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.uei</td>
            <td>Consortia Unique Entity Identifier</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.legalBusinessName</td>
            <td>Consortia Legal Business Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.cageCode</td>
            <td>Consortia Cage Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.streetAddress</td>
            <td>Consortia Street Address</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.streetAddress2</td>
            <td>Consortia Street Address 2</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.city</td>
            <td>Consortia City</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.county</td>
            <td>Consortia County</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.state</td>
            <td>Consortia State Information</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.state.code</td>
            <td>Consortia State Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.state.name</td>
            <td>Consortia State Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.zipCode</td>
            <td>Consortia ZIP Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.congressionalDistrict</td>
            <td>Consortia Congressional District</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.country</td>
            <td>Consortia Country</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.country.code</td>
            <td>Consortia Country Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.awardeeData.consortia.country.name</td>
            <td>Consortia Country Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData</td>
            <td>NASA Specific Data:<br>Offeror&#39;s Proposal Number<br>PR Number<br>Accession Number<br>Installation Unique<br>Administrative CO.<br>Contracting Officer Code<br>Buyer Code<br>COR Organization Code<br>COR Name<br>Alternate COR Name<br>Funded Through Date<br>Contract Fund Code<br>Management Reporting Requirements<br>Accounting Installation<br>Field Of Science or Engineering<br>Contract Administrations Delegated<br>CFDA Program Identification Number<br>Principal Investigator First Name<br>Principal Investigator Middle Initial<br>Principal Investigator Last Name<br>Alternate Principal Investigator First Name<br>Alternate Principal Investigator Middle Initial<br>Alternate Principal Investigator Last Name<br>Close Out PR<br>Advisory/Assistance Services Contract<br>Support Services Type Contract<br>New Technology or Patent Clause<br>Property Financial Reporting<br>Value Engineering Clause<br>Security Code<br>Is Physically Complete<br>Physical Completion Date<br>Final Invoice Paid Date<br>Solicitation Issue Date<br>Cancellation Date<br>Destroy Date<br>Non-Federal Funding Amount</td>
            <td>JSON Object</td>
            <td>v1</td>
        </tr>
        <tr>
            <td>awardDetails.nasaSpecificData.offerorsProposalNumber</td>
            <td>Offeror&#39;s Proposal Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.prNumber</td>
            <td>PR Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.accessionNumber</td>
            <td>Accession Number</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.installationUnique</td>
            <td>Installation Unique</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.administrativeCo</td>
            <td>Administrative CO.</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractingOfficerCode</td>
            <td>Contracting Officer Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.buyerCode</td>
            <td>Buyer Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.organizationCode</td>
            <td>Organization Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.cotrName</td>
            <td>COTR Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.alternateCOTRName</td>
            <td>Alternate COTR Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.fundedThroughDate</td>
            <td>Funded Through Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractFundCode</td>
            <td>Contract Fund Code</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractFundCode.code</td>
            <td>Contract Fund Code Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractFundCode.name</td>
            <td>Contract Fund Code Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.managementReportingRequirements</td>
            <td>Management Reporting Requirements</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.managementReportingRequirements.code</td>
            <td>Management Reporting Requirements Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.managementReportingRequirements.name</td>
            <td>Management Reporting Requirements Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.accountingInstallation</td>
            <td>Accounting Installation</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.accountingInstallation.code</td>
            <td>Accounting Installation Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.accountingInstallation.name</td>
            <td>Accounting Installation Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.fieldOfScienceOrEngineering</td>
            <td>Field Of Science or Engineering</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.fieldOfScienceOrEngineering.code</td>
            <td>Field Of Science or Engineering Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.fieldOfScienceOrEngineering.name</td>
            <td>Field Of Science or Engineering Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractAdministrationsDelegated</td>
            <td>Contract Administrations Delegated</td>
            <td>JSON Array</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractAdministrationsDelegated.code</td>
            <td>Contract Administrations Delegated Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.contractAdministrationsDelegated.name</td>
            <td>Contract Administrations Delegated Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber</td>
            <td>CFDA Program Identification Number</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber.code</td>
            <td>CFDA Program Identification Number Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber.name</td>
            <td>CFDA Program Identification Number Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.principalInvestigatOrFirstName</td>
            <td>Principal Investigator First Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.principalInvestigatOrMiddleInitial</td>
            <td>Principal Investigator Middle Initial</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.principalInvestigatOrLastName</td>
            <td>Principal Investigator Last Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.alternatePrincipalInvestigatorFirstName</td>
            <td>Alternate Principal Investigator First Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.alternatePrincipalInvestigatOrMiddleInitial</td>
            <td>Alternate Principal Investigator Middle Initial</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.alternatePrincipalInvestigatOrLastName</td>
            <td>Alternate Principal Investigator Last Name</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.closeoutPR</td>
            <td>Closeout PR</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.advisoryAssistanceServicesContract</td>
            <td>Advisory/Assistance Services Contract</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.supportServicesTypeContract</td>
            <td>Support Services Type Contract</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.newTechnologyOrPatentClause</td>
            <td>New Technology or Patent Clause</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.propertyFinancialReporting</td>
            <td>Property Financial Reporting</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.valueEngineeringClause</td>
            <td>Value Engineering Clause</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.securityCode</td>
            <td>Security Code</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.isPhysicallyComplete</td>
            <td>Is Physically Complete</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.physicalCompletionDate</td>
            <td>Physical Completion Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.finalInvoicePaidDate</td>
            <td>Final Invoice Paid Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.solicitationIssueDate</td>
            <td>Solicitation Issue Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.cancellationDate</td>
            <td>Cancellation Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.destroyDate</td>
            <td>Destroy Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.nonFederalFundingAmount</td>
            <td>Non-Federal Funding Amount</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.nasaSpecificData.nasaStatutoryAuthority</td>
            <td>NASA Statutory Authority</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData</td>
            <td>Transaction Data</td>
            <td>JSON Object</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.status</td>
            <td>Status</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.version</td>
            <td>Version</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.createdBy</td>
            <td>Created By</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.createdDate</td>
            <td>Created Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.lastModifiedBy</td>
            <td>Last Modified By</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.lastModifiedDate</td>
            <td>Last Modified Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.approvedBy</td>
            <td>Approved By</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.approvedDate</td>
            <td>Approved Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.closedBy</td>
            <td>Closed By</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.closedDate</td>
            <td>Closed Date</td>
            <td>String</td>
            <td>v1</td></tr>
        <tr>
            <td>awardDetails.transactionData.closedStatus</td>
            <td>Closed Status</td>
            <td>String</td>
            <td>v1</td></tr>
        </tbody>
    </table>
</details>

<p><small><a href="#">Back to top</a></small></p>


## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: Open API specification file for the Contracts API

## Additional Help References

Go to [SAM.gov Data Services](https://sam.gov/data-services/Data%20Dictionary/Contract%20Awards) for mapping and Data Dictionary documents.

## HTTP Response Codes

The API will return one of the following responses:

| Code | Description |
|-------|-------------|
| 200 | The API call is successful. |
| 400 | Application Level Error Messages |
| 400 | - Invalid "Date" format: v1: "message":"Dates must be specified in the MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] format.", "detail":"Any Date parameter must be provided in the MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] format." |
| 400 | - Invalid "Dollar" format: v1: "message":"Dollars must be specified in a numeric format excluding commas or in the range format contained within brackets with a comma separating the lower range and upper range [Lower Range,Upper Range].", "detail":"Any Dollar parameter must be provided in the numeric format excluding commas or [Lower Range,Upper Range] format." |
| 400 | - Invalid Search Parameter: v1: "message":"The search parameter, < user-provided invalid parameter > does not exist.", "detail":"Please refer to https://open.gsa.gov/api/XXXX-XX/ for a list of allowable search parameters." |
| 400 | - If 'includeSections', 'emailId' or 'format' is sent in the "q" parameter: v1: "message":"The search parameters 'includeSections','emailId', 'piidaggregation', and 'format' are not permitted inside Query Param(q)", "detail":"Please provide these parameters separately". |
| 400 | - More than 100 UEI values are sent: v1: "message":"More than 100 Unique Entity IDs are not allowed.", "detail":"Please limit the number of Unique Entity IDs to 100." |
| 400 | - More than 100 Parent UEI values are sent: v1: "message":"More than 100 Parent Unique Entity IDs are not allowed.", "detail":"Please limit the number of Parent Unique Entity IDs to 100." |
| 400 | - More than 100 Consortia UEI values are sent: v1: "message":"More than 100 Consortia Unique Entity IDs are not allowed.", "detail":"Please limit the number of Consortia Unique Entity IDs to 100." |
| 400 | - More than 100 CAGE Code values are sent: v1: "message":"More than 100 CAGE Codes are not allowed.", "detail":"Please limit the number of CAGE Codes to 100." |
| 400 | - More than 100 PSC Codes are sent: v1: "message":"More than 100 Product or Service Codes are not allowed.", "detail":"Please limit the number of Product or Service Codes to 100." |
| 400 | - More than 100 NAICS Codes are sent: v1: "message":"More than 100 NAICS Codes are not allowed.", "detail":"Please limit the number of NAICS Codes to 100." |
| 400 | - "emailId" is sent on its own: v1 "message":"The search parameter 'emailId' must be provided in conjunction with the search parameter 'format.", "detail":"Users can opt for receiving the requested JSON/CSV files in their emails." |
| 400 | - "piidaggregation" is sent on its own: v1: message":"The search parameter 'piidaggregation' must be provided in conjunction with the search parameter 'piid'.", "detail":"The 'piidaggregation' parameter cannot be provided on its own." |
| 400 | - "piidaggregation" is sent with a PIID that is not unique: v1: message":"The search parameter 'piidaggregation' must be provided in conjunction with the search parameters 'piid' and 'referencedIdvPiid' when the 'piid' is not unique.", "detail":"The 'piidaggregation' parameter must return a unique record." |
| 400 | - File size exceeded for JSON or CSV exports: v1: "message":"Total Number of Records: < the total number > exceeded the maximum allowable limit: 1,000,000. Please provide a suitable search parameter to refine your search.", "detail":"Count Exceeded Error" |
| 400 | - JSON or CSV file generation is in-progress: v1: "message": "The requested JSON or CSV file is not generated yet. Please try again later.", "details": "Larger files will take some time to process." |
| 400 | - Using an expired Token for downloading JSON or CSV files: v1: "message":"The requested JSON or CSV file token is expired.","detail":"Please verify the token number." ,"detail":"Please verify the token number." |
| 400 | - Different IP Address than that mentioned in the System Account: v1: "message":"IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system.", "detail":"Please verify your IP Address sending this request is associated with this System Account." |
| 400 | - Insufficient API Key privileges to download a JSON or CSV File: v1: The API Key is not authorized to access this < file type > Extract |
| 400 | - Query parameters deletedStatus and documentStatus sent in the same request: v1: "message":"Query parameters deletedStatus and documentStatus can not be sent in the same request. Please submit your requests with either deletedStatus or documentStatus.", "detail":"Please submit your requests with either deletedStatus or documentStatus." |
| 400 | - Query parameter limit sent with a value greater than 100: v1: "message":"The max value allowed for parameter "limit" is 100", "detail":"Please provide a value equal to or less than 100 for the query parameter limit." |
| 403 | Forbidden |
| 403 | - Missing API Key: v1: No API Key was supplied. Please submit with a valid API key. |
| 403 | - An invalid API Key: v1: An invalid API key was supplied. Please submit with a valid API key. |
| 403 | - A disabled API Key: v1: The API key supplied has been disabled. Please submit with a valid API key. |
| 404 | No Data found |
| 500 | Internal Server Error |


<p><small><a href="#">Back to top</a></small></p>


## Examples


### Example 1: Get Base Contracts modified between January 1st, 2025 and today, Contracted by DoD with a Dollar Obligated between $0.00 and $100,000,000.99. 
<details> <summary>Request URL: </summary> <strong>Alpha URL : </strong>https://api-alpha.sam.gov/contract-awards/v1/search?api_key=< API Key >&lastModifiedDate=[01/01/2025,]&dollarsObligated=[0.0,100000000.99]&modificationNumber=0&contractingDepartmentCode=9700</details>
<details> <summary> Response (JSON Output)</summary></details>

### Example 2: Get Modifications to Purchase Orders Approved between January 1st, 2025 and August 19th, 2025 with a NIACS code of 513310 or 513311 or 513312.             
<details> <summary>Request URL: </summary> <strong>Alpha URL : </strong>https://api-alpha.sam.gov/contract-awards/v1/search?api_key=< API Key >&awardOrIDVTypeName=PURCHASE ORDER&approvedDate=[01/01/2025,08/19/2025]& modificationNumber!=0&naicsCode=513310~513311~513312</details>
<details> <summary> Response (JSON Output)</summary></details>

### Example 3: Get only the Contract IDs for GSA IDVs closed between January 1st, 2025 and today.
<details> <summary>Request URL: </summary> <strong>Alpha URL : </strong>https://api-alpha.sam.gov/contract-awards/v1/search?api_key=< API Key >&awardOrIDV=IDV&closedDate=[01/01/2025,]&contractingDepartmentCode=4700&includeSections=contractId</details>
<details> <summary> Response (JSON Output)</summary></details>

### Example 4: Get Service Contracts performed in Virginia in FY25 with a Contracting Officer's Business Size Selection of Small, and only return the Contract ID, Contract, and Entity Information
<details> <summary>Request URL: </summary> <strong>Alpha URL : </strong> https://api-alpha.sam.gov/contract-awards/v1/search?api_key=< API Key >&coBusSizeDeterminationCode=S&placeOfPerformStateCode=VA&fiscalYear=2025&productOrServiceType=SERVICE&includeSections=contractId,contract,entityInformation</details>
<details> <summary> Response (JSON Output)</summary></details>

### Example 5: Get Deleted Contracts modified between Oct 1st and Oct 2nd, 2025, and return only the Contract ID.
<details> <summary>Request URL: </summary> <strong>Alpha URL : </strong> https://api-alpha.sam.gov/contract-awards/v1/search?api_key=< API Key >&deleteStatus=yes&lastModifiedDate=[10/01/2025,10/02/2025]&includeSections=contractId</details>
<details> <summary> Response (JSON Output)</summary></details>

<p><small><a href="#">Back to top</a></small></p>

## Additional Information

You can view the full details of the differences between the FPDS legacy API and SAM.gov API
 available here: <a href="v1/FPDSvsSAM-ContractDataAPI.pdf"> Variance Document</a>
 

Disclaimer:  **Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**


* This website contains data supplied by third party information suppliers, including Dun & Bradstreet (D&B). For the purposes of the following limitation on permissible use of D&B data, which includes each entity’s DUNS Number and its associated business information, “D&B Open Data” is defined as the following data elements: Legal Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code. Entity registration, exclusion, or contract award records in SAM may contain D&B-supplied data. Applicable records containing D&B data include all base award notices with an award date earlier than 4/4/2022. These records show the Entity Validation Service (EVS) Source as D&B in outbound data streams.
* D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
* Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of “bots” or “spiders”, is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
* GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided “as is” without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the SAM.gov team at www.fsd.gov for inquiries and help desk support.
  1. Before contacting the help desk, conduct your own initial troubleshooting
      1. Conduct a recent review of the open.gsa.gov/api specifications
      2. Confirm that the API key being used is still active
      3. Confirm that the system account you are using has “read public” permissions as applicable (PUBLIC Calls)
      4. **Confirm that the IP addresses registered with your system account are current**
  2. When submitting help desk tickets for API or system connection issues, provide the following:
      1. The exact API requests that you were trying to send
      2. The exact error messages that you were receiving
      3. The exact dates and times when you received the errors
      4. Screenshots (with the actual API request and the error) [Attach to the ticket]
      5. The System Account ID/Name that was trying to make API calls
      6. Screenshots of the parameters used for API call [Attach to the ticket]
      7. Screenshots of the Headers used for the API call [Attach to the ticket]
* Users requesting access to the test site (alpha.sam.gov) should follow the below steps. These steps ONLY apply to alpha.sam.gov access requests.
  1. Navigate to [www.fsd.gov](https://www.fsd.gov)
  2. Sign into the FSD platform using your FSD credentials
  3. Select “Create an Incident”
  4. Create an Incident
      1. **System Name:** SAM(System for Award Management)
      2. **Issue Type:** System Accounts
      3. **Issue Type 2:** Manage Account
      4. **Subject:**
            System account approval in alpha.sam.gov
      5. **Please describe your issue:** (Copy and paste the below information into the ticket, filling in your information within the brackets)
            1. I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval. I would like to request alpha.sam.gov system account review and approval for [Name of the alpha.sam.gov system account].


<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
[TBD] | v1.0 | Base Version



<p><small><a href="#">Back to top</a></small></p>