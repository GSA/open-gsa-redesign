---
title: SAM.gov GetList Contracts API
banner-heading: SAM.gov GetList Contracts API
---
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >-->
<!--<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >-->

## Overview
The getList contracts API allows users to request revealed Award and IDV contract data, and unrevealed Award and IDV contract data, based on the user’s account and/or system account accessing the Contracts API.

Award and IDV contract data consists of:

```
Delivery/Task Orders                               Federal Supply Schedules
Government-Wide Agency Contracts                   Purchase Orders  
Basic Ordering Agreements                          Definitive Contracts
Blanket Purchasing Agreements                      BPA Calls
Indefinite Delivery Contracts					   Other Transaction Orders	
Other Transaction IDVs							   Other Transaction Agreements	
```

## Revealed/Unrevealed Data

Revealed data includes contracts that were either funded or awarded by a Civilian Subtier, as well as contracts funded and awarded by DoD, provided the Date Signed is at least 90 days prior to today's date. Unrevealed data consists of all revealed contracts, plus DoD contracts that were funded and awarded with a Date Signed less than 90 days prior to today. Additionally, the UEI and Name for the Immediate Parent and Domestic Parent of the Awardee is included in the Unrevealed API response and excluded from the Revealed API response.

## Key Features of the getList Contracts API

- It offers several optional search parameters, filtering by sections, AND (&), OR (~), NOT (!) conditions, null searches, and a free text search q to obtain the desired data.
- It returns synchronous responses.
- It returns ten records per page in the JSON format by default, and allows users to increase the response to 100 records per page through the use of the limit parameter.
- It can return only the first 400,000 records.
- The following characters are not allowed to be sent in the parameter values with the API request: & | { } ^ \

## Additional Features of the getList Contracts API
It can serve as an Extract API with the addition of the “format” parameter in the request. Following are the key features of the getList Contracts Extract API:

- It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
- It returns asynchronous responses by sending file downloadable link.
- It returns data in the JSON or CSV format as selected by the user.
- It can return only the first 1,000,000 records.

## PIID Aggregation

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

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

### API endpoints

**Production:**
* https://api.sam.gov/contract-awards/v1/contracts?api_key=<A VALID API KEY>
* https://api.sam.gov/contract-awards/v1/contracts?

**Alpha:**
* https://api-alpha.sam.gov/contract-awards/v1/contracts?api_key=
* https://api-alpha.sam.gov/contract-awards/v1/contracts?


### User Requirements

**To access revealed contract data:**
* Users must have a non-Federal/Federal Individual (Personal) account and the respective API Key, or a non-Federal/Federal System Account and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.

**To access unrevealed contract data:**
* Available only to users assigned to DoD.
* Users must have a Federal System Account and the respective API Key in SAM.gov.
* Users can make GET calls using any Browser or a Restful API client such as Postman.


### Individual (Personal) Accounts

* The SAM.gov Federal or non-Federal registered users must obtain the API Key from the https://sam.gov/profile/details page using the field, “Public API Key”.<br>
  ![image info](v1/EYE_IMAGE.JPG)
* Click on the “Eye” icon, enter the “Enter One-time Password” (this value will be sent to your email address that is associated with your registered account), hit “Submit”, for the API Key value to appear in the box.

### System Accounts

* The SAM.gov non-Federal registered users must request for a System Account. If their registration and request criteria are satisfied, then they will be provided with the System Accounts” widget on their SAM.gov “Workspace” page.
* The SAM.gov Federal registered users must contact their CCB representatives for obtaining the “System Accounts” widget on their SAM.gov “Workspace” page.
* Users must create their System Account using the “System Accounts” widget and get it approved.
* Users must then set the password for the System Account.
* After the above step is successfully completed, users will see a new section for retrieving the API Key. Users must enter the password to retrieve this value.
* System Accounts must satisfy the following criteria to successfully utilize the getList contracts API:


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
* To retrieve Entity data in the CSV format, “format=csv” must be provided in the request.
* To retrieve Entity data in the JSON format, “format=json” must be provided in the request.
* If the request is executed successfully, then a file downloadable URL with Token will be returned. This URL can also be obtained in emails by providing “emailId=Yes” in the request.
* In the file downloadable URL, the phrase REPLACE_WITH_API_KEY must be replaced with a valid API Key and sent as another request.
* If the file is ready for download, then the users can retrieve it. If the file is not ready for download, then the users will need to try again in some time.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Query String Parameters

The getList Contracts API offers several optional search parameters that can be provided independently or in combination with each other.

Request Parameters that API accepts	| Description | Required| Data Type| Applicable Versions
----- | ----- | ----- | ----- | -----
api_key | Public key of users | Yes | String | v1
limit | Total number of records to be retrieved per page. This field must be a numberMax Value = 100. The default limit value is 10.  | No | Int | v1
offset | Indicates the page index. Default offset starts with 0 | No | Int | v1
dollarsObligated | Allows for a single positive or negative Dollar value or a Dollar range. | Examples: dollarsObligated=-1000.99, dollarsObligated=[5000.99,100000.99] | No |String | v1  
totalDollarsObligated | Allows for a single positive or negative Dollar value or a Dollar range. | Examples: totalDollarsObligated=100000.99, totalDollarsObligated=[5000.99,100000.99] | No | String | v1  
approvedDate | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: approvedDate=01/01/2019, approvedDate=[01/01/2019,05/29/2019] | No | String | v1  
awardeeCageCode | Allows a single 5-character CAGE Code value or up to 100 values or null. | Example: awardeeCageCode=00000, awardeeCageCode=00000~11111~11321 | No | String | v1  
closedDate | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: closedDate=01/01/2019, closedDate=[01/01/2019,05/29/2019] | No | String | v1  
closedStatus | Allows a text. | Examples: closedStatus=Yes, closedStatus=No | No | String | v1  
solicitationID | Allows a text. | Example: solicitationID=47QCDE25PTEST | No | String | v1  
solicitationDate | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: solicitationDate=01/01/2019, solicitationDate=[01/01/2019,05/29/2019] | No | String | v1  
documentVersion | Allows a text. | Example: documentVersion=1.5 | No | String | v1  
documentStatus | Allows a text. By default when status is not provided, only Awards and IDVs with a status of Final will be returned. | Examples: documentStatus=DRAFT, documentStatus=FINAL, documentStatus=All | No | String | v1  
piid | Allows a text. | Example: piid=127EAS25FTEST | No | String | v1  
awardOrIDV | Allows a text. | Examples: awardOrIDV=IDV, awardOrIDV=Award | No | String | v1  
awardOrIDVTypeCode | Allows a 1 character code. | Example: awardOrIDVTypeCode=B | No | String | v1  
awardOrIDVTypeName | Allows a text. | Example: awardOrIDVTypeName=PURCHASE ORDER | No | String | v1  
contractingSubtierCode | Allows 4 character code | Example: contractingSubtierCode=2100 | No | String | v1  
contractingSubtierName | Allows Partial or Complete value. | Example: contractingSubtierName=PUBLIC BUILDINGS SERVICE | No | String | v1  
contractingDepartmentCode | Allows 4 character code | Example: contractingDepartmentCode=9700 | No | String | v1  
contractingDepartmentName | Allows Partial or Complete value. | Example: contractingDepartmentName=GENERAL SERVICES | No | String | v1  
contractingOfficeCode | Allows 6 character code | Example: contractingOfficeCode=47QCCA | No | String | v1  
coBusSizeDeterminationCode | Allows a 1 character code | Example: coBusSizeDeterminationCode=S | No | String | v1  
coBusSizeDeterminationName | Allows a text | Example: coBusSizeDeterminationName=SMALL BUSINESS | No | String | v1  
createdDate | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: createdDate=01/01/2019, createdDate=[01/01/2019,05/29/2019] | No | String | v1  
currentCompletionDate | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: currentCompletionDate=01/01/2019, currentCompletionDate=[01/01/2019,05/29/2019] | No | String | v1  
dateSigned | Allows a single Date or a Date range. Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] | Examples: dateSigned=01/01/2019, dateSigned=[01/01/2019,05/29/2019] | No | String | v1  
awardeeZipCode | Allows either a 5 or 9-digit code for US zip codes, or any digit postal code for non-US postal codes. | Examples: awardeeZipCode=022015678, awardeeZipCode=110054 | No | String | v1  
awardeeCityName | Allows a text. | Example: awardeeCityName=Austin | No | String | v1  
awardeeCongressionalDistrict | Allows a 2 digit code. | Example: awardeeCongressionalDistrict=01 | No | String | v1  
awardeeCountryCode | Allows a 3 character code. | Example: awardeeCountryCode=USA | No | String | v1  
awardeeCountryName | Allows Partial or Complete value. | Example: awardeeCountryName=UNITED STATES | No | String | v1  
awardeeDoingBusinessAsName|Allows Partial or Complete value.|awardeeDoingBusinessAsName=ENTITY NAME|No|String|v1
awardeeStateCode|Allows a 2 character code.|awardeeStateCode=NC|No|String|v1
awardeeStateName|Allows Partial or Complete value.|awardeeStateName=NORTH CAROLINA|No|String|v1
fiscalYear|Allows a 4 character code.|fiscalYear=2024|No|String|v1
fundingSubtierCode|Allows 4 character code|fundingSubtierCode=4732|No|String|v1
fundingSubtierName|Allows Partial or Complete value.|fundingSubtierName=PUBLIC BUILDINGS SERVICE|No|String|v1
fundingDepartmentCode|Allows 4 character code|fundingDepartmentCode=4700|No|String|v1
fundingDepartmentName|Allows Partial or Complete value.|fundingDepartmentName=GENERAL SERVICES ADMINISTRATION|No|String|v1
lastModifiedDate|Allows a single Date or a Date range.|lastModifiedDate=01/01/2019 or lastModifiedDate=[01/01/2019,05/29/2019]|No|String|v1
awardeeLegalBusinessName|Allows Partial or Complete value.|awardeeLegalBusinessName=ENTITY LEGAL NAME|No|String|v1
clingerCohenActCode|Allows a 1 character code.|clingerCohenActCode=Y|No|String|v1
clingerCohenActName|Allows a text.|clingerCohenActName=No|No|String|v1
materialsSuppliesArticlesAndEquipCode|Allows a 1 character code.|materialsSuppliesArticlesAndEquipCode=N|No|String|v1
materialsSuppliesArticlesAndEquipName|Allows a text.|materialsSuppliesArticlesAndEquipName=Yes|No|String|v1
laborStandardsCode|Allows a 1 character code.|laborStandardsCode=X|No|String|v1
laborStandardsName|Allows a text.|laborStandardsName=No|No|String|v1
constructionWageRateRequirementsCode|Allows a 1 character code.|constructionWageRateRequirementsCode=N|No|String|v1
constructionWageRateRequirementsName|Allows a text.|constructionWageRateRequirementsName=Yes|No|String|v1
localAreaSetAsideName|Allows a text or null.|localAreaSetAsideName=Yes or localAreaSetAsideName=No|No|String|v1
modificationNumber|Allows 6 character code.|modificationNumber=P00001|No|String|v1
extentCompetedCode|Allows a 1 character code.|extentCompetedCode=B|No|String|v1
extentCompetedName|Allows a text.|extentCompetedName=NOT COMPETED|No|String|v1
typeOfSetAsideCode|Allows a text.|typeOfSetAsideCode=SBA|No|String|v1
typeOfSetAsideName|Allows a text.|typeOfSetAsideName=BUY INDIAN|No|String|v1
solicitationProceduresCode|Allows a text.|solicitationProceduresCode=NP|No|String|v1
solicitationProceduresName|Allows a text.|solicitationProceduresName=TWO STEP|No|String|v1
contractOpportunitiesNoticeCode|Allows a 1 character code.|contractOpportunitiesNoticeCode=X|No|String|v1
contractOpportunitiesNoticeName|Allows a text.|contractOpportunitiesNoticeName=Yes|No|String|v1
multiyearContractName|Allows a text|multiyearContractName=Yes or multiyearContractName=No|No|String|v1
numberOfOffersReceived|Allows a text.|numberOfOffersReceived=3|No|String|v1
naicsCode|Allows a single 6-character NAICS value or up to 100 values or null or not null.|naicsCode=513310 or naicsCode=513310~513311~513312|No|String|v1
nationalInterestActionCode|Allows 4 character code.|nationalInterestActionCode=H17I|No|String|v1
nationalInterestActionName|Allows Partial or Complete value.|nationalInterestActionName=HURRICANE IRMA 2017|No|String|v1
periodOfPerformanceStartDate|Allows a single Date or a Date range.|periodOfPerformanceStartDate=01/01/2019 or periodOfPerformanceStartDate=[01/01/2019,05/29/2019]|No|String|v1
piidSubtierCode|Allows 4 character code|piidSubtierCode=8000|No|String|v1
piidSubtierName|Allows Partial or Complete value.|piidSubtierName=PUBLIC BUILDINGS SERVICE|No|String|v1
placeOfPerformCityName|Allows a text.|placeOfPerformCityName=Austin|No|String|v1
placeOfPerformCongressionalDistrict|Allows a 2 digit code.|placeOfPerformCongressionalDistrict=01|No|String|v1
placeOfPerformCountryCode|Allows a 3 character code.|placeOfPerformCountryCode=USA|No|String|v1
placeOfPerformCountryName|Allows Partial or Complete value.|placeOfPerformCountryName=UNITED STATES|No|String|v1
placeOfPerformStateCode|Allows a 2 character code.|placeOfPerformStateCode=NC|No|String|v1
placeOfPerformStateName|Allows Partial or Complete value.|placeOfPerformStateName=NORTH CAROLINA|No|String|v1
placeOfPerformZipCode|Allows either a 5 or 9-digit code for US zip codes, or any digit postal code for non-US postal codes.|placeOfPerformZipCode=022012341 or placeOfPerformZipCode=110054|No|String|v1
productOrServiceCode|Allows a 4-character PSC value or up to 100 values.|productOrServiceCode=X1QA or productOrServiceCode=X1QA~1005~C1AA|No|String|v1
productOrServiceType|Allows a text.|productOrServiceType=SERVICE or productOrServiceType=PRODUCT|No|String|v1
reasonForModificationCode|Allows 1 character code.|reasonForModificationCode=A|No|String|v1
reasonForModificationName|Allows Partial or Complete value.|reasonForModificationName=FUNDING ONLY ACTION|No|String|v1
referencedIdvPIIDSubtierCode|Allows 4 character code.|referencedIdvPIIDSubtierCode=8000|No|String|v1
referencedIdvPIIDSubtierName|Allows a text.|referencedIdvPIIDSubtierName=DEPT OF DEFENSE|No|String|v1
referencedIdvPiid|Allows a text.|referencedIdvPiid=47QRAA23DTE5T|No|String|v1
referencedIdvMultipleOrSingleCode|Allows 1 character code.|referencedIdvMultipleOrSingleCode=S|No|String|v1
referencedIdvMultipleOrSingleName|Allows a text.|referencedIdvMultipleOrSingleName=MULTIPLE|No|String|v1
referencedIdvPart8OrPart13|Allows a text.|referencedIdvPart8OrPart13=Part8|No|String|v1
referencedIdvTypeCode|Allows 1 character code.|referencedIdvTypeCode=A|No|String|v1
referencedIdvTypeName|Allows a text.|referencedIdvTypeName=FSS|No|String|v1
transactionNumber|Allows a text|Example: transactionNumber=16|No|String|v1
piidAggregation=yes|Allows a text.|Return PIID Aggregation data in response. PIID parameter is required when piidaggregation is provided.|Example: piidAggregation=yes&piid=47QALD23PTEST|No|String|v1
awardeeBusinessTypeCode|Allows 2 character code or null.|Example: awardeeBusinessTypeCode=2L|No|String|v1
awardeeBusinessTypeName|Allows partial or complete value search.|Example: awardeeBusinessTypeName=HOSPITAL|No|String|v1
sourceSelectionProcessCode|Allows a text|Example: sourceSelectionProcessCode=LPTA|No|String|v1
sourceSelectionProcessName|Allows partial or complete value search.|Example: sourceSelectionProcessName=OTHER|No|String|v1
format|Allows users to download data into the JSON and CSV asynchronous file formats.|Example: format=csv.|No|String|v1
emailId|When used in conjunction with the format parameter, allows user to get JSON or CSV asynchronous file download links with tokens sent to the email address associated to the API key used in the request.|Example: emailId=Yes&format=JSON|No|String|v1
typeOfContractPricingCode|Allows 1 character code.|Example: typeOfContractPricingCode=J|No|String|v1
typeOfContractPricingName|Allows partial or complete value search.|Example: typeOfContractPricingName=FIRM FIXED PRICE|No|String|v1
ultimateCompletionDate|Allows a single Date or a Date range.|Formats: MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY]|Examples: ultimateCompletionDate=01/01/2019, ultimateCompletionDate=[01/01/2019,05/29/2019]|No|String|v1
ultimateContractValue|Allows for a single positive or negative Dollar value or a Dollar range.|Examples: ultimateContractValue=100000.99, ultimateContractValue=[5000.99,100000.99]|No|String|v1
totalUltimateContractValue|Allows for a single positive or negative Dollar value or a Dollar range.|Examples: totalUltimateContractValue=100000.99, totalUltimateContractValue=[5000.99,100000.99]|No|String|v1
awardeeUniqueEntityId|Allows a single 12-character value or up to 100 values.|Example: awardeeUniqueEntityId=RV56IG5JM6G9 awardeeUniqueEntityId=RV56IG5JM6G9~BR5F3G5JM6TR|No|String|v1
consortiaUEI|Allows a single 12-character value or up to 100 values.|Example: consortiaUEI=RV56IG5JM6G9 consortiaUEI=RV56IG5JM6G9~BR5F3G5JM6TR|No|String|v1
consortiaLegalBusinessName|Allows a text.|Example: consortiaLegalBusinessName=ENTITY NAME||||No|String|v1
nonGovernmentDollars|Allows for a single positive or negative Dollar value or a Dollar range.|Examples: nonGovernmentDollars=100000.99, nonGovernmentDollars=[5000.99,100000.99]|No|String|v1
totalNonGovernmentDollars|Allows for a single positive or negative Dollar value or a Dollar range.|Examples: totalNonGovernmentDollars=100000.99, totalNonGovernmentDollars=[5000.99,100000.99]|No|String|v1
nonTraditionalGovernmentEntityParticipationCode|Allows a text|Example: nonTraditionalGovernmentEntityParticipationCode=DEC|No|String|v1
nonTraditionalGovernmentEntityParticipationName|Allows a text|Example: nonTraditionalGovernmentEntityParticipationName=COST SHARING|No|String|v1
typeOfAgreementName|Allows a text|Example: typeOfAgreementName=PRODUCTION|No|String|v1
far1102ExceptionCode|Allows a 1 character code.|Example: far1102ExceptionCode=3|No|String|v1
far1102ExceptionName|Allows a text.|Example: far1102ExceptionName=CLASSIFIED CONTRACTS|No|String|v1
includeSections|Allows to filter data by sections.|The applicable sections are contractId, coreData, contract, entityInformation, and nasaSpecific.|Examples: includeSections=contractId,entityInformation; includeSections=contractId,contract,nasaSpecific|No|String|v1
q|Allows a text. Supports free text search|||No|String|v1
fundingOfficeCode|Allows a 6 character code|Example: fundingOfficeCode=47QCCA|No|String|v1
ultimateParentLegalBusinessName|Allows partial or complete value search.|Example: ultimateParentLegalBusinessName=ENTITY NAME|No|String|v1
ultimateParentUniqueEntityId|Allows a single 12-character value or up to 100 values.|Example: ultimateParentUniqueEntityId=R5PKHW7GWD94 ultimateParentUniqueEntityId=R5PKHW7GWD94~BR5F3G5JM6TR|No|String|v1
createdBy|Allows a text.|Example: createdBy=TEST_USER_101|No|String|v1
approvedBy|Allows a text.|Example: approvedBy=TEST_USER_101|No|String|v1
lastModifiedBy|Allows a text.|Example: lastModifiedBy=TEST_USER_101|No|String|v1
closedBy|Allows a text.|Example: closedBy=TEST_USER_101|No|String|v1

### GetList contract Response Parameters

| Response Parameters| Description | Data Type | Applicable Versions|
|------|---------------|-----------|-----| 
|totalRecords | Total Records in Response | Number | v1 |
|limit | Limit of Response | Number | v1 |
|offset | Offset of Response | Number | v1 |
|piidAggregation| PIID Aggregation | JSON Object | v1 |
|piidAggregation.awardFamilySummary | Award Family Summary | JSON Object | v1 |
|piidAggregation.awardFamilySummary.count | Count of Modifications plus Base in Award family  |String |  v1 |
|piidAggregation.awardFamilySummary.totalDollars | Total Dollars obligated in Award Family  |String |  v1 |
|piidAggregation.referencingDosOrBpaCallsSummary| Referencing DOs or Bpa Calls Summary (Only applicable when PIID provided is an IDV, excluding FSS)  |JSON Object |  v1 |
|piidAggregation.referencingDosOrBpaCallsSummary.baseCount | Count of Base Delivery Orders or BPA Calls referencing the PIID provided.  |String |  v1 |
|piidAggregation.referencingDosOrBpaCallsSummary.totalCount | Count of Delivery Orders or BPA Calls referencing the PIID provided. (Base plus Modifications)  |String |  v1 |
|piidAggregation.referencingDosOrBpaCallsSummary.totalDollars | Total Dollars obligated on Delivery Orders or BPA Calls referencing the PIID provided.   |String |  v1 |
|piidAggregation.bpaSummary | BPA Summary (Only applicable when PIID provided is FSS)  | JSON Object |  v1 |
|piidAggregation.bpaSummary.baseCount | Count of Base BPAs referencing the PIID provided.  | String |  v1 |
|piidAggregation.bpaSummary.totalCount| Count of BPAs referencing the PIID provided. (Base plus Modifications)   | String |  v1 |
|piidAggregation.bpaSummary.totalDollars| Total Dollars obligated on BPAs that references the PIID provided.  | String |  v1 |
|piidAggregation.bpaCallSummary| BPA Call Summary (Only applicable when PIID provided is FSS)  | JSON Object |  v1 |
|piidAggregation.bpaCallSummary.baseCount| Count of Base BPA Calls referencing a BPA that references the PIID provided.| String |  v1 |
|piidAggregation.bpaCallSummary.totalCount| Count of BPA Calls referencing a BPA that references the PIID provided. (Base plus Modifications)| String |  v1 |
|piidAggregation.bpaCallSummary.totalDollars| Total Dollars obligated on BPA Calls referencing a BPA that references the PIID provided. | String |  v1 |
|piidAggregation.bpaCallSummary.totalDollars| Total Dollars obligated on BPA Calls referencing a BPA that references the PIID provided. | String |  v1 |
|awardSummary| Award Summary | JSON Array |  v1 |
|contractId| Contract ID Information:</br><ul><li>Subtier</li><li>PIID</li><li>Modification Number</li><li>Transaction Number</li><li>Referenced IDV Subtier</li><li>Referenced IDV PIID</li><li>Referenced IDV Modification Number</li></ul> | JSON Object |  v1 |
|contractId.subtier| Subtier Code | String |  v1 |
|contractId.subtier.name| Subtier Name | String |  v1 |
|contractId.piid| PIID | String |  v1 |
|contractId.modificationNumber| Modification Number | String |  v1 |
|contractId.transactionNumber| Transaction Number | String |  v1 |
|contractId.referencedIDVSubtier| Referenced IDV Subtier  | JSON Object |  v1 |
|contractId.referencedIDVSubtier.code| Referenced IDV Subtier Code| String |  v1 |
|contractId.referencedIDVSubtier.name| Referenced IDV Subtier Name| String |  v1 |
|contractId.referencedIDVPiid| Referenced IDV PIID  | String |  v1 |
|contractId.referencedIDVModificationNumber| Referenced IDV Modification Number | String |  v1 |
|contractId.reasonForModification| Reason For Modification | JSON Object |  v1 |
|contractId.reasonForModification.code| Reason For Modification Code |  String |  v1 |
|contractId.reasonForModification.name| Reason For Modification Name |  String |  v1 |
|oldContractId| Old Contract ID Information:</br><ul><li>Subtier</li><li>PIID</li><li>Modification Number</li><li>Transaction Number</li><li>Referenced IDV Subtier</li><li>Referenced IDV PIID</li><li>Referenced IDV Modification Number</li></ul>| JSON Array |  v1 |
|oldContractId.subtier| Subtier  | JSON Object |  v1 |
|oldContractId.subtier.code| Subtier Code |  String |  v1 |
|oldContractId.subtier.name| Subtier Name |  String |  v1 |
|oldContractId.piid| PIID |  String |  v1 |
|oldContractId.modificationNumber| Modification Number |  String |  v1 |
|oldContractId.transactionNumber| Transaction Number|  String |  v1 |
|oldContractId.referencedIDVSubtier| Referenced IDV Subtier |  JSON Object |  v1 |
|oldContractId.referencedIDVSubtier.code| Referenced IDV Subtier Code |  String |  v1 |
|oldContractId.referencedIDVSubtier.name| Referenced IDV Subtier Name |  String |  v1 |
|oldContractId.referencedIDVPiid| Referenced IDV PIID |  String |  v1 |
|oldContractId.referencedIDVModificationNumber| Referenced IDV Modification Number |  String |  v1 |
|oldContractId.referencedIDVSubtier| Referenced IDV Subtier |  JSON Object |  v1 |
|oldContractId.referencedIDVSubtier.code| Referenced IDV Subtier Code|  String |  v1 |
|oldContractId.referencedIDVSubtier.name| Referenced IDV Subtier Name|  String |  v1 |
|oldContractId.referencedIDVPiid| Referenced IDV PIID|  String |  v1 |
|oldContractId.referencedIDVModificationNumber| Referenced IDV Modification Number |  String |  v1 |
|coreData|Core Information:</br><ul><li> Core Version ID </li><li> Solicitation ID</li><li> Solicitation Date</li><li> Title</li><li> Contract Action Type</li><li> Initiative</li><li> Contracting Information:</li><li> Funding Information</li><li>Type of Contract Pricing</li><li> Multiyear Contract</li><li> Major Program Code</li><li>Program Acronym</li><li> National Interest Action</li><li>Performance Based Service Contract</li><li> Contingency Humanitarian Peace Keeping Operation</li><li>Consolidated Contract</li><li>Clinger Cohen Act</li><li> Materials Supplies Articles Equipment</li><li> Labor Standards</li><li>Construction Wage Rate Requirements</li><li>Recovered Material Clauses</li><li> Place of Performance</li><li> Product Or Service</li><li>Principal NAICS</li><li>Contract Bundling</li><li>DoD Acquisition Program</li><li> DoD Claimant Program</li><li>Government Furnished Property</li><li> Extent Competed</li><li> Solicitation Procedures</li><li>Type Of Set Aside</li><li> SBIR/STTR</li><li> Statutory Exception To Fair Opportunity</li><li> Reason Not Competed (Other Than Full And Open Competition)</li><li> Authority</li><li> Local Area Set Aside</li><li> A76 Action</li><li> Source Selection Process</li><li> Type of IDC</li><li> Multiple or Single Award IDC</li></ul> |  String |  v1 |
|coreData.coreVersionId| Core Version ID |  String |  v1 |
|coreData.solicitationId| Solicitation ID |  String |  v1 |
|coreData.solicitationDate| Solicitation Date |  String |  v1 |
|coreData.awardOrIDV| Award or IDV |  String |  v1 |
|coreData.awardOrIDVType| Award or IDV | JSON Object |  v1 |
|coreData.awardOrIDVType.code| Award Or IDV Type Code |  String |  v1 |
|coreData.awardOrIDVType.name| Award Or IDV Type Name |  String |  v1 |
|coreData.initiative| Initiative | JSON Object |  v1 |
|coreData.initiative.code| Initiative Code |  String |  v1 |
|coreData.initiative.name| Initiative Name |  String |  v1 |
|coreData.federalOrganization| Federal Organization | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation| Contracting Information:</br><ul><li>Contracting Department</li><li>Contracting Subtier</li><li>Contracting Office </li></ul>| JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment | Contracting Department | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment.code| Contracting Department Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment.name| Contracting Department Name | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier| Contracting Subtier | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier.name| Contracting Subtier Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier.code| Contracting Subtier Name | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice| Contracting Office | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice.code| Contracting Office Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice.name| Contracting Office Name | String |  v1 |
|coreData.federalOrganization.fundingInformation| Funding Information:</br><ul><li>Funding Department</li><li>Funding Subtier</li><li>Funding Office</li><li>Foreign Funding</li></ul>| String |  v1 |
|coreData.federalOrganization.fundingInformation.fundingDepartment| Funding Department | JSON Object |  v1 |
|coreData.federalOrganization.fundingInformation.fundingDepartment.code| Funding Department Code | String |  v1 |
|coreData.federalOrganization.fundingInformation.fundingDepartment.name| Funding Department Name | String |  v1 |
|coreData.federalOrganization.fundingInformation.fundingSubtier| Funding Subtier | JSON Object |  v1 |
|coreData.federalOrganization.fundingInformation.fundingSubtier.code| Funding Subtier Code | String |  v1 |
|coreData.federalOrganization.fundingInformation.fundingSubtier.name| Funding Subtier Name | String |  v1 |
|coreData.federalOrganization.fundingInformation.fundingOffice| Funding Office | JSON Object |  v1 |
| coreData.federalOrganization.fundingInformation.fundingOffice.code | Funding Office Code | String | v1 |
| coreData.federalOrganization.fundingInformation.fundingOffice.name | Funding Office Name | String | v1 |
| coreData.federalOrganization.fundingInformation.foreignFunding | Foreign Funding | JSON Object | v1 |
| coreData.federalOrganization.fundingInformation.foreignFunding.code | Foreign Funding Code | String | v1 |
| coreData.federalOrganization.fundingInformation.foreignFunding.name | Foreign Funding Name | String | v1 |
| coreData.acquisitionData | Acquisition Data | JSON Object | v1 |
| coreData.acquisitionData.typeOfContractPricing | Type of Contract Pricing | JSON Object | v1 |
| coreData.acquisitionData.typeOfContractPricing.code | Type of Contract Pricing Code | String | v1 |
| coreData.acquisitionData.typeOfContractPricing.name | Type of Contract Pricing Name | String | v1 |
| coreData.acquisitionData.multiyearContract | Multiyear Contract | JSON Object | v1 |
| coreData.acquisitionData.multiyearContract.code | Multiyear Contract Code | String | v1 |
| coreData.acquisitionData.multiyearContract.name | Multiyear Contract Name | String | v1 |
| coreData.acquisitionData.majorProgramCode | Major Program Code | String | v1 |
| coreData.acquisitionData.programAcronym | Program Acronym | String | v1 |
| coreData.acquisitionData.nationalInterestAction | National Interest Action | JSON Object | v1 |
| coreData.acquisitionData.nationalInterestAction.code | National Interest Action Code | String | v1 |
| coreData.acquisitionData.nationalInterestAction.name | National Interest Action Name | String | v1 |
| coreData.acquisitionData.performanceBasedServiceContract | Performance Based Service Contract | JSON Object | v1 |
| coreData.acquisitionData.performanceBasedServiceContract.code | Performance Based Service Contract Code | String | v1 |
| coreData.acquisitionData.performanceBasedServiceContract.name | Performance Based Service Contract Name | String | v1 |
| coreData.acquisitionData.consolidatedContract | Consolidated Contract | JSON Object | v1 |
| coreData.acquisitionData.consolidatedContract.code | Consolidated Contract Code | String | v1 |
| coreData.acquisitionData.consolidatedContract.name | Consolidated Contract Name | String | v1 |
| coreData.acquisitionData.typeOfIdc | Type of IDC | JSON Object | v1 |
| coreData.acquisitionData.typeOfIdc.code | Type of IDC Code | String | v1 |
| coreData.acquisitionData.typeOfIdc.name | Type of IDC Name | String | v1 |
| coreData.acquisitionData.multipleOrSingleAwardIdc | Multiple or Single Award IDC | JSON Object | v1 |
| coreData.acquisitionData.multipleOrSingleAwardIdc.code | Multiple or Single Award IDC Code | String | v1 |
| coreData.acquisitionData.multipleOrSingleAwardIdc.name | Multiple or Single Award IDC Name | String | v1 |
| coreData.acquisitionData.reasonForInterAgencyContracting | Reason For Inter-Agency Contracting | JSON Object | v1 |
| coreData.acquisitionData.reasonForInterAgencyContracting.code | Reason For Inter-Agency Contracting Code | String | v1 |
| coreData.acquisitionData.reasonForInterAgencyContracting.name | Reason For Inter-Agency Contracting Name | String | v1 |
| coreData.acquisitionData.contractFinancing | Contract Financing | JSON Object | v1 |
| coreData.acquisitionData.contractFinancing.code | Contract Financing Code | String | v1 |
| coreData.acquisitionData.contractFinancing.name | Contract Financing Name | String | v1 |
| coreData.legislativeMandates | Legislative Mandates | JSON Object | v1 |
| coreData.legislativeMandates.clingerCohenAct | Clinger Cohen Act | JSON Object | v1 |
| coreData.legislativeMandates.clingerCohenAct.code | Clinger Cohen Act Code | String | v1 |
| coreData.legislativeMandates.clingerCohenAct.name | Clinger Cohen Act Name | String | v1 |
| coreData.legislativeMandates.materialsSuppliesArticlesEquipment | Materials Supplies Articles Equipment | JSON Object | v1 |
| coreData.legislativeMandates.materialsSuppliesArticlesEquipment.code | Materials Supplies Articles Equipment Code | String | v1 |
| coreData.legislativeMandates.materialsSuppliesArticlesEquipment.name | Materials Supplies Articles Equipment Name | String | v1 |
| coreData.legislativeMandates.laborStandards | Labor Standards | JSON Object | v1 |
| coreData.legislativeMandates.laborStandards.code | Labor Standards Code | String | v1 |
| coreData.legislativeMandates.laborStandards.name | Labor Standards Name | String | v1 |
| coreData.legislativeMandates.constructionWageRateRequirements | Construction Wage Rate Requirements | JSON Object | v1 |
| coreData.legislativeMandates.constructionWageRateRequirements.code | Construction Wage Rate Requirements Code | String | v1 |
| coreData.legislativeMandates.constructionWageRateRequirements.name | Construction Wage Rate Requirements Name | String | v1 |
| coreData.legislativeMandates.interagencyContractingAuthority | Interagency Contracting Authority | JSON Object | v1 |
| coreData.legislativeMandates.interagencyContractingAuthority.code | Interagency Contracting Authority Code | String | v1 |
| coreData.legislativeMandates.interagencyContractingAuthority.name | Interagency Contracting Authority Name | String | v1 |
| coreData.legislativeMandates.otherStatutoryAuthority | Other Statutory Authority | String | v1 |
| coreData.principalPlaceOfPerformance | Place of Performance</br><ul><li>Location Code</li><li>County</li><li>City</li><li>ZIP Code</li><li>State</li><li>Congressional District</li><li>Country</li></ul>| JSON Object | v1 |
| coreData.principalPlaceOfPerformance.city | City | String | v1 |
| coreData.principalPlaceOfPerformance.city.code | City Code | String | v1 |
| coreData.principalPlaceOfPerformance.city.name | City Name | String | v1 |
| coreData.principalPlaceOfPerformance.county | County | JSON Object | v1 |
| coreData.principalPlaceOfPerformance.county.code | County Code | String | v1 |
| coreData.principalPlaceOfPerformance.county.name | County Name | String | v1 |
| coreData.principalPlaceOfPerformance.state | State | JSON Object | v1 |
| coreData.principalPlaceOfPerformance.state.code | State Code | String | v1 |
| coreData.principalPlaceOfPerformance.state.name | State Name | String | v1 |
| coreData.principalPlaceOfPerformance.zipCode | ZIP Code | String | v1 |
| coreData.principalPlaceOfPerformance.congressionalDistrict | Congressional District | String | v1 |
| coreData.principalPlaceOfPerformance.country | Country | JSON Object | v1 |
| coreData.principalPlaceOfPerformance.country.code | Country Code | String | v1 |
| coreData.principalPlaceOfPerformance.country.name | Country Name | String | v1 |
| coreData.productOrServiceInformation | Product Or Service Information | JSON Object | v1 |
| coreData.productOrServiceInformation.recoveredMaterialClauses | Recovered Material Clauses | JSON Object | v1 |
| coreData.productOrServiceInformation.recoveredMaterialClauses.code | Recovered Material Clauses Code | String | v1 |
| coreData.productOrServiceInformation.recoveredMaterialClauses.name | Recovered Material Clauses Name | String | v1 |
| coreData.productOrServiceInformation.productOrService | Product Or Service | JSON Object | v1 |
| coreData.productOrServiceInformation.productOrService.type | Product Or Service Type | String | v1 |
| coreData.productOrServiceInformation.productOrService.code | Product Or Service Code | String | v1 |
| coreData.productOrServiceInformation.productOrService.name | Product Or Service Name | String | v1 |
| coreData.productOrServiceInformation.principalNaics | Principal NAICS | JSON Array | v1 |
| coreData.productOrServiceInformation.principalNaics.code | Principal NAICS Code | String | v1 |
| coreData.productOrServiceInformation.principalNaics.name | Principal NAICS Name | String | v1 |
| coreData.productOrServiceInformation.contractBundling | Contract Bundling | JSON Object | v1 |
| coreData.productOrServiceInformation.contractBundling.code | Contract Bundling Code | String | v1 |
| coreData.productOrServiceInformation.contractBundling.name | Contract Bundling Name | String | v1 |
| coreData.productOrServiceInformation.dodAcquisitionProgram | DoD Acquisition Program | JSON Object | v1 |
| coreData.productOrServiceInformation.dodAcquisitionProgram.code | DoD Acquisition Program Code | String | v1 |
| coreData.productOrServiceInformation.dodAcquisitionProgram.name | DoD Acquisition Program Name | String | v1 |
| coreData.productOrServiceInformation.dodClaimantProgram | DoD Claimant Program | JSON Object | v1 |
| coreData.productOrServiceInformation.dodClaimantProgram.code | DoD Claimant Program Code | String | v1 |
| coreData.productOrServiceInformation.dodClaimantProgram.name | DoD Claimant Program Name | String | v1 |
| coreData.productOrServiceInformation.gfeGfp | Government Furnished Property | JSON Object | v1 |
| coreData.productOrServiceInformation.gfeGfp.code | Government Furnished Property Code | String | v1 |
| coreData.productOrServiceInformation.gfeGfp.name | Government Furnished Property Name | String | v1 |
| coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory | Information Technology Commercial Item Category | JSON Object | v1 |
| coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory.code | Information Technology Commercial Item Category Code | String | v1 |
| coreData.productOrServiceInformation.informationTechnologyCommercialItemCategory.name | Information Technology Commercial Item Category Name | String | v1 |
| coreData.productOrServiceInformation.countryOfOrigin | Country of Product or Service Origin | JSON Object | v1 |
| coreData.productOrServiceInformation.countryOfOrigin.code | Country of Product or Service Origin Code | String | v1 |
| coreData.productOrServiceInformation.countryOfOrigin.name | Country of Product or Service Origin Name | String | v1 |
| coreData.competitionInformation | Competition Information | JSON Object | v1 |
| coreData.competitionInformation.extentCompeted | Extent Competed | JSON Object | v1 |
| coreData.competitionInformation.extentCompeted.code | Extent Competed Code | String | v1 |
| coreData.competitionInformation.extentCompeted.name | Extent Competed Name | String | v1 |
| coreData.competitionInformation.solicitationProcedures | Solicitation Procedures | JSON Object | v1 |
| coreData.competitionInformation.solicitationProcedures.code | Solicitation Procedures Code | String | v1 |
| coreData.competitionInformation.solicitationProcedures.name | Solicitation Procedures Name | String | v1 |
| coreData.competitionInformation.typeOfSetAside | Type Of Set Aside | JSON Object | v1 |
| coreData.competitionInformation.typeOfSetAside.code | Type Of Set Aside Code | String | v1 |
| coreData.competitionInformation.typeOfSetAside.name | Type Of Set Aside Name | String | v1 |
| coreData.competitionInformation.sbirSTTR | SBIR/STTR | JSON Object | v1 |
| coreData.competitionInformation.sbirSTTR.code | SBIR/STTR Code | String | v1 |
| coreData.competitionInformation.sbirSTTR.name | SBIR/STTR Name | String | v1 |
| coreData.competitionInformation.statutoryExceptionToFairOpportunity | Statutory Exception To Fair Opportunity | JSON Object | v1 |
| coreData.competitionInformation.statutoryExceptionToFairOpportunity.code | Statutory Exception To Fair Opportunity Code | String | v1 |
| coreData.competitionInformation.statutoryExceptionToFairOpportunity.name | Statutory Exception To Fair Opportunity Name | String | v1 |
| coreData.competitionInformation.otherThanFullAndOpenCompetition | Other Than Full And Open Competition | JSON Object | v1 |
| coreData.competitionInformation.otherThanFullAndOpenCompetition.code | Other Than Full And Open Competition Code | String | v1 |
| coreData.competitionInformation.otherThanFullAndOpenCompetition.name | Other Than Full And Open Competition Name | String | v1 |
| coreData.competitionInformation.localAreaSetAside | Local Area Set Aside | JSON Object | v1 |
| coreData.competitionInformation.localAreaSetAside.code | Local Area Set Aside Code | String | v1 |
| coreData.competitionInformation.localAreaSetAside.name | Local Area Set Aside Name | String | v1 |
| coreData.competitionInformation.a76Action | A76 Action | JSON Object | v1 |
| coreData.competitionInformation.a76Action.code | A76 Action Code | String | v1 |
| coreData.competitionInformation.a76Action.name | A76 Action Name | String | v1 |
| coreData.competitionInformation.sourceSelectionProcess | Source Selection Process | JSON Object | v1 |
| coreData.competitionInformation.sourceSelectionProcess.code | Source Selection Process Code | String | v1 |
| coreData.competitionInformation.sourceSelectionProcess.name | Source Selection Process Name | String | v1 |
| coreData.competitionInformation.preAwardSynopsisRequirement | Pre Award Synopsis Requirement | JSON Object | v1 |
| coreData.competitionInformation.preAwardSynopsisRequirement.code | Pre Award Synopsis Requirement Code | String | v1 |
| coreData.competitionInformation.preAwardSynopsisRequirement.name | Pre Award Synopsis Requirement Name | String | v1 |
| coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram | Small Business Competitiveness Demonstration Program | JSON Object | v1 |
| coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram.code | Small Business Competitiveness Demonstration Program Code | String | v1 |
| coreData.competitionInformation.smallBusinessCompetitivenessDemonstrationProgram.name | Small Business Competitiveness Demonstration Program Name | String | v1 |
| coreData.acquisitionMarketingData | Acquisition Marketing Data | JSON Object | v1 |
| coreData.acquisitionMarketingData.whoCanUse | Who Can Use | JSON Object | v1 |
| coreData.acquisitionMarketingData.whoCanUse.code | Who Can Use Code | String | v1 |
| coreData.acquisitionMarketingData.whoCanUse.name | Who Can Use Name | String | v1 |
| coreData.acquisitionMarketingData.emailAddress | Email Address | String | v1 |
| coreData.preferenceProgramsInformation | Preference Programs Information | JSON Object | v1 |
| coreData.preferenceProgramsInformation.priceEvaluationPercentDifference | Price Evaluation Percent Difference | String | v1 |
| awardDetails | Award Details Information: | JSON Object | v1 |
| awardDetails.dates | Contract Dates Information.Date SignedEffective DateCurrent Completion DateUltimate Completion DateLast Date to OrderFiscal Year | JSON Object | v1 |
| awardDetails.dates.dateSigned | Date Signed | String | v1 |
| awardDetails.dates.periodOfPerformanceStartDate | Period of Performance Start Date | String | v1 |
| awardDetails.dates.currentCompletionDate | Current Completion Date | String | v1 |
| awardDetails.dates.ultimateCompletionDate | Ultimate Completion Date | String | v1 |
| awardDetails.dates.lastDateToOrder | Last Date to Order | String | v1 |
| awardDetails.dates.fiscalYear | Fiscal Year | String | v1 |
| awardDetails.dollars | Contract Dollars Information.Action Obligation Base And Exercised Options Value Base and All Options Value (Total Contract Value)Fee Paid for Use of IDVTotal Estimated Order ValueNon-Government Dollars | JSON Object | v1 |
| awardDetails.dollars.actionObligation | Action Obligation | String | v1 |
| awardDetails.dollars.baseDollarsObligated | Base Dollars Obligated | String | v1 |
| awardDetails.dollars.baseAndExercisedOptionsValue | Base And Exercised Options Value | String | v1 |
| awardDetails.dollars.baseAndAllOptionsValue | Base and All Options Value (Total Contract Value) | String | v1 |
| awardDetails.dollars.feePaidForUseOfService | Fee Paid for Use of Service | String | v1 |
| awardDetails.dollars.totalEstimatedOrderValue | Total Estimated Order Value | String | v1 |
| awardDetails.dollars.nonGovernmentDollars | Non-Government Dollars | String | v1 |
| awardDetails.totalContractDollars | Total Contract Dollars Information.Total Action ObligationTotal Base And Exercised Options ValueTotal Base and All Options ValueTotal Non-Government Dollars | JSON Object | v1 |
| awardDetails.totalContractDollars.totalActionObligation | Total Action Obligation | String | v1 |
| awardDetails.totalContractDollars.totalBaseAndExercisedOptionsValue | Total Base And Exercised Options Value | String | v1 |
| awardDetails.totalContractDollars.totalBaseAndAllOptionsValue | Total Base and All Options Value | String | v1 |
| awardDetails.totalContractDollars.totalNonGovernmentDollars | Total Non-Government Dollars | String | v1 |
| awardDetails.treasuryAccount | Treasury Account Information. Treasury Account Subtier IdentifierTreasury Account Main Account CodeTreasury Account Sub Account Code | JSON Object | v1 |
| awardDetails.treasuryAccount.agencyIdentifier | Treasury Account Subtier Identifier | String | v1 |
| awardDetails.treasuryAccount.mainAccountCode | Treasury Account Main Account Code | String | v1 |
| awardDetails.treasuryAccount.subAccountCode | Treasury Account Sub Account Code | String | v1 |
| awardDetails.treasuryAccount.subLevelPrefixCode | Sub-Level Prefix Code | String | v1 |
| awardDetails.treasuryAccount.allocationTransferAgencyIdentifier | Allocation Transfer Agency Identifier | String | v1 |
| awardDetails.treasuryAccount.beginningPeriodOfAvailability | Beginning Period Of Availability | String | v1 |
| awardDetails.treasuryAccount.endingPeriodOfAvailability | Ending Period Of Availability | String | v1 |
| awardDetails.treasuryAccount.obligatedAmountTAS | Obligated Amount TAS | String | v1 |
| awardDetails.treasuryAccount.availabilityType | Availability Type | JSON Object | v1 |
| awardDetails.treasuryAccount.availabilityType.code | Availability Type Code | String | v1 |
| awardDetails.treasuryAccount.availabilityType.name | Availability Type Name | String | v1 |
| awardDetails.contractData | Contract Data | JSON Object | v1 |
| awardDetails.contractData.part8OrPart13 | Part8 Or Part13 | String | v1 |
| awardDetails.contractData.costOrPricingData | Cost or Pricing Data | JSON Object | v1 |
| awardDetails.contractData.costOrPricingData.code | Cost or Pricing Data Code | String | v1 |
| awardDetails.contractData.costOrPricingData.name | Cost or Pricing Data Name | String | v1 |
| awardDetails.contractData.purchaseCardAsPaymentMethod | Purchase Card Used As Payment Method | JSON Object | v1 |
| awardDetails.contractData.purchaseCardAsPaymentMethod.code | Purchase Card Used As Payment Method Code | String | v1 |
| awardDetails.contractData.purchaseCardAsPaymentMethod.name | Purchase Card Used As Payment Method Name | String | v1 |
| awardDetails.contractData.undefinitizedAction | Undefinitized Action | JSON Object | v1 |
| awardDetails.contractData.undefinitizedAction.code | Undefinitized Action Code | String | v1 |
| awardDetails.contractData.undefinitizedAction.name | Undefinitized Action Name | String | v1 |
| awardDetails.contractData.costAccountingStandardsClause | Cost Accounting Standards Clause | JSON Object | v1 |
| awardDetails.contractData.costAccountingStandardsClause.code | Cost Accounting Standards Clause Code | String | v1 |
| awardDetails.contractData.costAccountingStandardsClause.name | Cost Accounting Standards Clause Name | String | v1 |
| awardDetails.contractData.natureOfServices | Nature of Services | JSON Object | v1 |
| awardDetails.contractData.natureOfServices.code | Nature of Services Code | String | v1 |
| awardDetails.contractData.natureOfServices.name | Nature of Services Name | String | v1 |
| awardDetails.contractData.emergencyAcquisition | Emergency Acquisition | JSON Object | v1 |
| awardDetails.contractData.emergencyAcquisition.code | Emergency Acquisition Code | String | v1 |
| awardDetails.contractData.emergencyAcquisition.name | Emergency Acquisition Name | String | v1 |
| awardDetails.contractData.numberOfActions | Number Of Actions | String | v1 |
| awardDetails.contractData.referencedIDVPart8OrPart13 | Referenced IDV Part 8 Or Part 13 | String | v1 |
| awardDetails.contractData.referencedIDVType | Referenced IDV Type | JSON Object | v1 |
| awardDetails.contractData.referencedIDVType.code | Referenced IDV Type Code | String | v1 |
| awardDetails.contractData.referencedIDVType.name | Referenced IDV Type Name | String | v1 |
| awardDetails.contractData.referencedIDVMultipleOrSingle | Referenced IDV Multiple Or Single | JSON Object | v1 |
| awardDetails.contractData.referencedIDVMultipleOrSingle.code | Referenced IDV Multiple Or Single Code | String | v1 |
| awardDetails.contractData.referencedIDVMultipleOrSingle.name | Referenced IDV Multiple Or Single Name | String | v1 |
| awardDetails.productOrServiceInformation | Product Or Service Information | JSON Object | v1 |
| awardDetails.productOrServiceInformation.naicsSource | NAICS Source | JSON Object | v1 |
| awardDetails.productOrServiceInformation.naicsSource.code | NAICS Source Code | String | v1 |
| awardDetails.productOrServiceInformation.naicsSource.name | NAICS Source Name | String | v1 |
| awardDetails.productOrServiceInformation.idvNAICS | IDV NAICS | JSON Object | v1 |
| awardDetails.productOrServiceInformation.idvNAICS.code | IDV NAICS Code | String | v1 |
| awardDetails.productOrServiceInformation.idvNAICS.name | IDV NAICS Name | String | v1 |
| awardDetails.productOrServiceInformation.descriptionOfContractRequirement | Description of Contract Requirement | String | v1 |
| awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts | Use Of EPA Designated Products | JSON Object | v1 |
| awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts.code | Use Of EPA Designated Products Code | String | v1 |
| awardDetails.productOrServiceInformation.useOfEpaDesignatedProducts.name | Use Of EPA Designated Products Name | String | v1 |
| awardDetails.productOrServiceInformation.placeOfManufacture | Place Of Manufacture | JSON Object | v1 |
| awardDetails.productOrServiceInformation.placeOfManufacture.code | Place Of Manufacture Code | String | v1 |
| awardDetails.productOrServiceInformation.placeOfManufacture.name | Place Of Manufacture Name | String | v1 |
| awardDetails.productOrServiceInformation.domesticOrForeignEntity | Domestic or Foreign Entity | JSON Object | v1 |
| awardDetails.productOrServiceInformation.domesticOrForeignEntity.code | Domestic or Foreign Entity Code | String | v1 |
| awardDetails.productOrServiceInformation.domesticOrForeignEntity.name | Domestic or Foreign Entity Name | String | v1 |
| awardDetails.productOrServiceInformation.seaTransportation | Sea Transportation | JSON Object | v1 |
| awardDetails.productOrServiceInformation.seaTransportation.code | Sea Transportation Code | String | v1 |
| awardDetails.productOrServiceInformation.seaTransportation.name | Sea Transportation Name | String | v1 |
| awardDetails.competitionInformation | Competition Information | JSON Object | v1 |
| awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures | Commercial Products and Services Acquisition Procedures | JSON Object | v1 |
| awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures.code | Commercial Products and Services Acquisition Procedures Code | String | v1 |
| awardDetails.competitionInformation.commercialProductsAndServicesAcquisitionProcedures.name | Commercial Products and Services Acquisition Procedures Name | String | v1 |
| awardDetails.competitionInformation.commercialItemTestProgram | Commercial Item Test Program | JSON Object | v1 |
| awardDetails.competitionInformation.commercialItemTestProgram.code | Commercial Item Test Program Code | String | v1 |
| awardDetails.competitionInformation.commercialItemTestProgram.name | Commercial Item Test Program Name | String | v1 |
| awardDetails.competitionInformation.extentCompetedForReferencedIdv | Extent Competed For Referenced IDV | JSON Object | v1 |
| awardDetails.competitionInformation.extentCompetedForReferencedIdv.code | Extent Competed For Referenced IDV Code | String | v1 |
| awardDetails.competitionInformation.extentCompetedForReferencedIdv.name | Extent Competed For Referenced IDV Name | String | v1 |
| awardDetails.competitionInformation.evaluatedPreference | Evaluated Preference | JSON Object |
| awardDetails.competitionInformation.evaluatedPreference.code | Evaluated Preference Code | String | v1 |
| awardDetails.competitionInformation.evaluatedPreference.name | Evaluated Preference Name | String | v1 |
| awardDetails.competitionInformation.numberOfOffersReceived | Number Of Offers Received | String | v1 |
| awardDetails.competitionInformation.idvTypeOfSetAside | IDV Type Of Set Aside | JSON Object | v1 |
| awardDetails.competitionInformation.idvTypeOfSetAside.code | IDV Type Of Set Aside Code | String | v1 |
| awardDetails.competitionInformation.idvTypeOfSetAside.name | IDV Type Of Set Aside Name | String | v1 |
| awardDetails.competitionInformation.typeOfSetAsideSource | Type Of Set Aside Source | JSON Object | v1 |
| awardDetails.competitionInformation.typeOfSetAsideSource.code | Type Of Set Aside Source Code | String | v1 |
| awardDetails.competitionInformation.typeOfSetAsideSource.name | Type Of Set Aside Source Name | String | v1 |
| awardDetails.competitionInformation.idvNumberOfOffersReceived | IDV Number Of Offers Received | String | v1 |
| awardDetails.competitionInformation.numberOfOffersSource | Number Of Offers Source | JSON Object | v1 |
| awardDetails.competitionInformation.numberOfOffersSource.code | Number Of Offers Source Code | String | v1 |
| awardDetails.competitionInformation.numberOfOffersSource.name | Number Of Offers Source Name | String | v1 |
| awardDetails.competitionInformation.contractOpportunitiesNotice | Contract Opportunities Notice Opps | JSON Object | v1 |
| awardDetails.competitionInformation.contractOpportunitiesNotice.code | Contract Opportunities Notice Code | String | v1 |
| awardDetails.competitionInformation.contractOpportunitiesNotice.name | Contract Opportunities Notice Name | String | v1 |
| awardDetails.competitionInformation.typeOfAgreement | Type Of Agreement | JSON Object | v1 |
| awardDetails.competitionInformation.typeOfAgreement.code | Type Of Agreement Code | String | v1 |
| awardDetails.competitionInformation.typeOfAgreement.name | Type Of Agreement Name | String | v1 |
| awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation | Nontraditional Government Entity Participation | JSON Object | v1 |
| awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation.code | Nontraditional Government Entity Participation Code | String | v1 |
| awardDetails.competitionInformation.nonTraditionalGovernmentEntityParticipation.name | Nontraditional Government Entity Participation Name | String | v1 |
| awardDetails.competitionInformation.alternativeAdvertising | Alternative Advertising | JSON Object | v1 |
| awardDetails.competitionInformation.alternativeAdvertising.code | Alternative Advertising Code | String | v1 |
| awardDetails.competitionInformation.alternativeAdvertising.name | Alternative Advertising Name | String | v1 |
| awardDetails.competitionInformation.synopsisWaiverException | Synopsis Waiver Exception | JSON Object | v1 |
| awardDetails.competitionInformation.synopsisWaiverException.code | Synopsis Waiver Exception Code | String | v1 |
| awardDetails.competitionInformation.synopsisWaiverException.name | Synopsis Waiver Exception Name | String | v1 |
| awardDetails.competitionInformation.preawardSynopsisRequirement | Pre-award Synopsis Requirement | JSON Object | v1 |
| awardDetails.competitionInformation.preawardSynopsisRequirement.code | Pre-award Synopsis Requirement Code | String | v1 |
| awardDetails.competitionInformation.preawardSynopsisRequirement.name | Pre-award Synopsis Requirement Name | String | v1 |
| awardDetails.preferenceProgramsInformation | Preference Programs Information | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination | Contracting Officer's Business Size Selection | JSON Array | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination.code | Contracting Officer's Business Size Selection Code | String | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDetermination.name | Contracting Officer's Business Size Selection Name | String | v1 |
| awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination | IDV Contracting Officer Business Size Determination | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination.code | IDV Contracting Officer Business Size Determination Code | String | v1 |
| awardDetails.preferenceProgramsInformation.idvContractingOfficerBusinessSizeDetermination.name | IDV Contracting Officer Business Size Determination Name | String | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource | Contracting Officer Business Size Determination Source | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource.code | Contracting Officer Business Size Determination Source Code | String | v1 |
| awardDetails.preferenceProgramsInformation.contractingOfficerBusinessSizeDeterminationSource.name | Contracting Officer Business Size Determination Source Name | String | v1 |
| awardDetails.preferenceProgramsInformation.subcontractPlan | Subcontract Plan | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.subcontractPlan.code | Subcontract Plan Code | String | v1 |
| awardDetails.preferenceProgramsInformation.subcontractPlan.name | Subcontract Plan Name | String | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness | Reason Not Awarded To Small Disadvantaged Business | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness.code | Reason Not Awarded To Small Disadvantaged Business Code | String | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallDisadvantagedBusiness.name | Reason Not Awarded To Small Disadvantaged Business Name | String | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness | Reason Not Awarded To Small Business | JSON Object | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness.code | Reason Not Awarded To Small Business Code | String | v1 |
| awardDetails.preferenceProgramsInformation.reasonNotAwardedToSmallBusiness.name | Reason Not Awarded To Small Business Name | String | v1 |
| awardDetails.legislativeMandates | Legislative Mandates | JSON Object | v1 |
| awardDetails.legislativeMandates.additionalReporting | Additional Reporting | JSON Array | v1 |
| awardDetails.legislativeMandates.additionalReporting.code | Additional Reporting Code | String | v1 |
| awardDetails.legislativeMandates.additionalReporting.name | Additional Reporting Name | String | v1 |
| awardDetails.contractMarketingData | Contract Marketing Data | JSON Object | v1 |
| awardDetails.contractMarketingData.websiteUrl | Website URL | String | v1 |
| awardDetails.contractMarketingData.individualOrderLimit | Individual Order Limit | String | v1 |
| awardDetails.contractMarketingData.typeOfFeeForUseOfService | Type of Fee For Use of Service | JSON Object | v1 |
| awardDetails.contractMarketingData.typeOfFeeForUseOfService.code | Type of Fee For Use of Service Code | String | v1 |
| awardDetails.contractMarketingData.typeOfFeeForUseOfService.name | Type of Fee For Use of Service Name | String | v1 |
| awardDetails.contractMarketingData.fixedFeeValue | Fixed Fee Value | String | v1 |
| awardDetails.contractMarketingData.feeRangeLowerValue | Fee Range Lower Value | String | v1 |
| awardDetails.contractMarketingData.feeRangeUpperValue | Fee Range Upper Value | String | v1 |
| awardDetails.contractMarketingData.orderingProcedure | Ordering Procedure | String | v1 |
| awardDetails.awardeeData | Entity Information | JSON Object | v1 |
| awardDetails.awardeeData.far41102Exception | FAR 4.1102 Exception | JSON Object | v1 |
| awardDetails.awardeeData.far41102Exception.code | FAR 4.1102 Exception Code | String | v1 |
| awardDetails.awardeeData.far41102Exception.name | FAR 4.1102 Exception Name | String | v1 |
| awardDetails.awardeeData.awardeeHeader | Awardee Header | JSON Object | v1 |
| awardDetails.awardeeData.awardeeHeader.awardeeName | Awardee Name | String | v1 |
| awardDetails.awardeeData.awardeeHeader.awardeeAlternateName | Awardee Alternate Name | String | v1 |
| awardDetails.awardeeData.awardeeHeader.legalBusinessName | Legal Business Name | String | v1 |
| awardDetails.awardeeData.awardeeHeader.awardeeNameFromContract | Awardee Name From Contract | String | v1 |
| awardDetails.awardeeData.awardeeHeader.awardeeDoingBusinessAsName | Awardee Doing Business as Name | String | v1 |
| awardDetails.awardeeData.awardeeHeader.awardeeEnabled | Awardee Enabled | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation | Entity UEI Information | JSON Object | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.uniqueEntityId | Unique Entity ID | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.cageCode | CAGE Code | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeImmediateParentUEI | Awardee Immediate Parent UEI | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeImmediateParentName | Awardee Immediate Parent Name | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeDomesticParentUEI | Awardee Domestic Parent UEI | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeDomesticParentName | Awardee Domestic Parent Name | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeUltimateParentUniqueEntityId | Awardee Ultimate Parent Unique Entity ID | String | v1 |
| awardDetails.awardeeData.awardeeUEIInformation.awardeeUltimateParentName | Awardee Ultimate Parent Name | String | v1 |
| awardDetails.awardeeData.awardeeLocation | Awardee Location | JSON Object | v1 |
| awardDetails.awardeeData.awardeeLocation.streetAddress1 | Awardee Street Address 1 | String | v1 |
| awardDetails.awardeeData.awardeeLocation.streetAddress2 | Awardee Street Address 2 | String | v1 |
| awardDetails.awardeeData.awardeeLocation.streetAddress3 | Awardee Street Address 3 | String | v1 |
| awardDetails.awardeeData.awardeeLocation.city | Awardee City | String | v1 |
| awardDetails.awardeeData.awardeeLocation.state | Awardee State | JSON object | v1 |
| awardDetails.awardeeData.awardeeLocation.state.code | Awardee State Code | String | v1 |
| awardDetails.awardeeData.awardeeLocation.state.name | Awardee State Name | String | v1 |
| awardDetails.awardeeData.awardeeLocation.province | Awardee Province | String | v1 |
| awardDetails.awardeeData.awardeeLocation.zip | Awardee ZIP | String | v1 |
| awardDetails.awardeeData.awardeeLocation.country | Awardee Country | JSON object | v1 |
| awardDetails.awardeeData.awardeeLocation.country.code | Awardee Country Code | String | v1 |
| awardDetails.awardeeData.awardeeLocation.country.name | Awardee Country Name | String | v1 |
| awardDetails.awardeeData.awardeeLocation.congressionalDistrict | Awardee Congressional District | String | v1 |
| awardDetails.awardeeData.awardeeLocation.phoneNumber | Awardee Phone Number | String | v1 |
| awardDetails.awardeeData.awardeeLocation.faxNumber | Awardee Fax Number | String | v1 |
| awardDetails.awardeeData.awardeeLocation.awardeeLocationDisabledFlag | Awardee Location Disabled Flag | String | v1 |
| awardDetails.awardeeData.awardeeLocation.awardeeDataSource | Awardee Data Source | String | v1 |
| awardDetails.awardeeData.awardeeAlternateSiteCode | Awardee Alternate Site Code | String | v1 |
| awardDetails.awardeeData.awardeeRegistrationDetails | Awardee Registration Details | JSON Object | v1 |
| awardDetails.awardeeData.awardeeRegistrationDetails.registrationDate | Registration Date | String | v1 |
| awardDetails.awardeeData.awardeeRegistrationDetails.renewalDate | Renewal Date | String | v1 |
| awardDetails.awardeeData.awardeeRegistrationDetails.divisionName | Division Name | String | v1 |
| awardDetails.awardeeData.awardeeRegistrationDetails.divisionNumberOrOfficeCode | Division Number Or Office Code | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes | Awardee Business Types | JSON Object | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment | Is U.S. Federal Government | JSON Object | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.usFederalGovernment | U.S. Federal Government | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.federalAgency | Federal Agency | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsFederalGovernment.federallyFundedResearchAndDevelopmentCorp | Federally Funded Research and Development Corp | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.usStateGovernment | U.S. State Government | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.foreignGovernment | Foreign Government | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.usTribalGovernment | U.S. Tribal Government | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.communityDevelopmentCorporationOwnedConcern | Community Development Corporation-Owned Concern | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment | Is U.S. Local Government | JSON Object | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.usLocalGovernment | U.S. Local Government | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.city | City | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.county | County | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.intermunicipal | Inter-Municipal | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.localGovernmentOwned | Local Government Owned | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.municipality | Municipality | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.schooldistrict | School District | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.isUsLocalGovernment.township | Township | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.usGovernmentEntity | U.S. Government Entity | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.laborSurplusAreaFirm | Labor Surplus Area Firm | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization | Business or Organization | JSON Object | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.corporateEntityNotTaxExempt | Corporate Entity, Not Tax Exempt | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.corporateEntityTaxExempt | Corporate Entity, Tax Exempt | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessorOrganization.partnershipOrLimitedLiabilityPartnership | Partnership or Limited Liability Partnership | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.soleProprietorship | Sole Proprietorship | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.smallAgriculturalCooperative | Small Agricultural Cooperative | String | v1 |
| awardDetails.awardeeData.awardeeBusinessTypes.businessOrOrganization.internationalOrganization | International Organization | String | v1 |
| awardDetails.awardeeData.socioEconomicData | Socio Economic Data | JSON Object | v1 |
| awardDetails.awardeeData.socioEconomicData.alaskanNativeCorporationOwnedFirm | Alaskan Native Corporation Owned Firm | String | v1 |
| awardDetails.awardeeData.socioEconomicData.americanIndianOwned | American Indian Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.indianTribeFederallyRecognized | Indian Tribe (Federally Recognized) | String | v1 |
| awardDetails.awardeeData.socioEconomicData.nativeHawaiianOrganizationOwnedFirm | Native Hawaiian Organization Owned Firm | String | v1 |
| awardDetails.awardeeData.socioEconomicData.triballyOwnedFirm | Tribally Owned Firm | String | v1 |
| awardDetails.awardeeData.socioEconomicData.veteranOwnedBusiness | Veteran-Owned Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.serviceDisabledVeteranOwnedBusiness | Service-Disabled Veteran-Owned Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.serviceDisabledVeteranOwnedBusinessJointVenture | Service-Disabled Veteran-Owned Business Joint Venture | String | v1 |
| awardDetails.awardeeData.socioEconomicData.VerySmallBusiness | Very Small Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness | Is Minority Owned Business | JSON Object | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.minorityOwnedBusiness | Minority Owned Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.asianPacificAmericanOwned | Asian-Pacific American Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.blackAmericanOwned | Black American Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.hispanicAmericanOwned | Hispanic American Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.nativeAmericanOwned | Native American Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.subcontinentAsianAsianIndianAmericanOwned | Subcontinent Asian (Asian-Indian) American Owned | String | v1 |
| awardDetails.awardeeData.socioEconomicData.isMinorityOwnedBusiness.individualOrConcernOtherThanOneOfThePreceding | Individual or concern, other than one of the preceding | String | v1 |
| awardDetails.awardeeData.socioEconomicData.womenOwnedBusiness | Women-Owned Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.womenOwnedSmallBusiness | Women-Owned Small Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.economicallyDisadvantagedWomenOwnedSmallBusiness | Economically Disadvantaged Women Owned Small Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.womenOwnedSmallBusinessJointVenture | Women-Owned Small Business (WOSB) Joint Venture eligible under the WOSB Program | String | v1 |
| awardDetails.awardeeData.socioEconomicData.economicallyDisadvantagedWomenOwnedSmallBusinessJointVenture | Economically Disadvantaged Women-Owned Small Business (EDWOSB) Joint Venture | String | v1 |
| awardDetails.awardeeData.socioEconomicData.emergingSmallBusiness | Emerging Small Business | String | v1 |
| awardDetails.awardeeData.socioEconomicData.smallBusinessJointVenture | Small Business Joint Venture | String | v1 |
| awardDetails.awardeeData.lineOfBusiness | Line Of Business | JSON Object | v1 |
| awardDetails.awardeeData.lineOfBusiness.communityDevelopmentCorporation | Community Development Corporation | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.domesticShelter | Domestic Shelter | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.educationalInstitution | Educational Institution | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.foundation | Foundation | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.hospital | Hospital | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.manufacturerOfGoods | Manufacturer of Goods | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.veterinaryHospital | Veterinary Hospital | String | v1 |
| awardDetails.awardeeData.lineOfBusiness.hispanicServicingInstitution | Hispanic Servicing Institution | String | v1 |
| awardDetails.awardeeData.relationshipWithFederalGovernment | Relationship With Federal Government | JSON Object | v1 |
| awardDetails.awardeeData.relationshipWithFederalGovernment.contracts | Contracts | String | v1 |
| awardDetails.awardeeData.relationshipWithFederalGovernment.federalassistanceawards | Federal Assistance Awards | String | v1 |
| awardDetails.awardeeData.relationshipWithFederalGovernment.allawards | All Awards | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities | Other Governmental Entities | JSON Object | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.airportAuthority | Airport Authority | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.councilOfGovernments | Council of Governments | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.housingAuthoritiesPublicTribal | Housing Authorities Public/Tribal | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.interstateEntity | Interstate Entity | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.planningCommission | Planning Commission | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.portAuthority | Port Authority | String | v1 |
| awardDetails.awardeeData.otherGovernmentalEntities.transitAuthority | Transit Authority | String | v1 |
| awardDetails.awardeeData.organizationFactors | Organization Factors | JSON Object | v1 |
| awardDetails.awardeeData.organizationFactors.subchapterSCorporation | Subchapter S Corporation | String | v1 |
| awardDetails.awardeeData.organizationFactors.limitedLiabilityCorporation | Limited Liability Corporation | String | v1 |
| awardDetails.awardeeData.organizationFactors.foreignOwned | Foreign Owned | String | v1 |
| awardDetails.awardeeData.organizationFactors.theAbilityOneProgram | The AbilityOne Program | String | v1 |
| awardDetails.awardeeData.organizationFactors.profitStructure | Profit Structure | JSON Object | v1 |
| awardDetails.awardeeData.organizationFactors.profitStructure.forProfitOrganization | For Profit Organization | String | v1 |
| awardDetails.awardeeData.organizationFactors.profitStructure.nonProfitOrganization | Non Profit Organization | String | v1 |
| awardDetails.awardeeData.organizationFactors.profitStructure.otherNotForProfitOrganization | Other Not For Profit Organization | String | v1 |
| awardDetails.awardeeData.organizationFactors.organizationType | Organization Type | String | v1 |
| awardDetails.awardeeData.organizationFactors.stateOfIncorporation | State of Incorporation | String | v1 |
| awardDetails.awardeeData.organizationFactors.countryOfIncorporation | Country of Incorporation | String | v1 |
| awardDetails.awardeeData.educationalEntities | Educational Entities | JSON Object | v1 |
| awardDetails.awardeeData.educationalEntities.1862LandGrantCollege | 1862 Land Grant College | String | v1 |
| awardDetails.awardeeData.educationalEntities.1890LandGrantCollege | 1890 Land Grant College | String | v1 |
| awardDetails.awardeeData.educationalEntities.1994LandGrantCollege | 1994 Land Grant College | String | v1 |
| awardDetails.awardeeData.educationalEntities.historicallyBlackCollegeOrUniversity | Historically Black College or University (HBCU) | String | v1 |
| awardDetails.awardeeData.educationalEntities.minorityInstitution | Minority Institution | String | v1 |
| awardDetails.awardeeData.educationalEntities.privateUniversityOrCollege | Private University or College | String | v1 |
| awardDetails.awardeeData.educationalEntities.schoolOfForestry | School of Forestry | String | v1 |
| awardDetails.awardeeData.educationalEntities.stateControlledInstitutionOfHigherLearning | State Controlled Institution of Higher Learning | String | v1 |
| awardDetails.awardeeData.educationalEntities.tribalCollege | Tribal College | String | v1 |
| awardDetails.awardeeData.educationalEntities.veterinaryCollege | Veterinary College | String | v1 |
| awardDetails.awardeeData.educationalEntities.alaskanNativeServicingInstitution | Alaskan Native Servicing Institution | String | v1 |
| awardDetails.awardeeData.educationalEntities.nativeHawaiianServicingInstitution | Native Hawaiian Servicing Institution | String | v1 |
| awardDetails.awardeeData.certifications | Certifications | JSON Object | v1 |
| awardDetails.awardeeData.certifications.sbaCertified8aProgramParticipant | SBA Certified 8(a) Program Participant | String | v1 |
| awardDetails.awardeeData.certifications.sbaCertified8aJointVenture | SBA Certified 8(a) Joint Venture | String | v1 |
| awardDetails.awardeeData.certifications.selfCertifiedHubZoneJointVenture | Self Certified HUBZone Joint Venture | String | v1 |
| awardDetails.awardeeData.certifications.sbaCertifiedSmallDisadvantagedBusiness | SBA Certified Small Disadvantaged Business | String | v1 |
| awardDetails.awardeeData.certifications.sbaCertifiedHubZoneFirm | SBA Certified HUBZone Firm | String | v1 |
| awardDetails.awardeeData.certifications.sbaCertifiedEconomicallyDisadvantagedWomenOwnedSmallBusiness | SBA-Certified Economically Disadvantaged Women-Owned Small Business | String | v1 |
| awardDetails.awardeeData.certifications.selfCertifiedSmallDisadvantagedBusiness | Self-Certified Small Disadvantaged Business | String | v1 |
| awardDetails.awardeeData.certifications.dotCertifiedDisadvantagedBusinessEnterprise | DoT Certified Disadvantaged Business Enterprise | String | v1 |
| awardDetails.awardeeData.certifications.sbaCertifiedWomenOwnedSmallBusiness | SBA-Certified Women-Owned Small Business | String | v1 |
| awardDetails.awardeeData.consortia | Consortia Information | JSON Object | v1 |
| awardDetails.awardeeData.consortia.memberFlag | Consortia Member Flag | String | v1 |
| awardDetails.awardeeData.consortia.uei | Consortia Unique Entity Identifier | String | v1 |
| awardDetails.awardeeData.consortia.legalBusinessName | Consortia Legal Business Name | String | v1 |
| awardDetails.awardeeData.consortia.cageCode | Consortia Cage Code | String | v1 |
| awardDetails.awardeeData.consortia.streetAddress | Consortia Street Address | String | v1 |
| awardDetails.awardeeData.consortia.streetAddress2 | Consortia Street Address 2 | String | v1 |
| awardDetails.awardeeData.consortia.city | Consortia City | String | v1 |
| awardDetails.awardeeData.consortia.county | Consortia County | String | v1 |
| awardDetails.awardeeData.consortia.state | Consortia State Information | JSON Object | v1 |
| awardDetails.awardeeData.consortia.state.code | Consortia State Code | String | v1 |
| awardDetails.awardeeData.consortia.state.name | Consortia State Name | String | v1 |
| awardDetails.awardeeData.consortia.zipCode | Consortia ZIP Code | String | v1 |
| awardDetails.awardeeData.consortia.congressionalDistrict | Consortia Congressional District | String | v1 |
| awardDetails.awardeeData.consortia.country | Consortia Country | JSON Object | v1 |
| awardDetails.awardeeData.consortia.country.code | Consortia Country Code | String | v1 |
| awardDetails.awardeeData.consortia.country.name | Consortia Country Name | String | v1 |
| awardDetails.nasaSpecificData| NASA Specific Data:<ul><li>Offeror's Proposal Number</li><li>PR Number</li><li>Accession Number</li><li>Installation Unique</li><li>Administrative CO.</li><li>Contracting Officer Code</li><li>Buyer Code</li><li>COR Organization Code</li><li>COR Name</li><li>Alternate COR Name</li><li>Funded Through Date</li><li>Contract Fund Code</li><li>Management Reporting Requirements</li><li>Accounting Installation</li><li>Field Of Science or Engineering</li><li>Contract Administrations Delegated</li><li>CFDA Program Identification Number</li><li>Principal Investigator First Name</li><li>Principal Investigator Middle Initial</li><li>Principal Investigator Last Name</li><li>Alternate Principal Investigator First Name</li><li>Alternate Principal Investigator Middle Initial</li><li>Alternate Principal Investigator Last Name</li><li>Close Out PR</li><li>Advisory/Assistance Services Contract</li><li>Support Services Type Contract</li><li>New Technology or Patent Clause</li><li>Property Financial Reporting</li><li>Value Engineering Clause</li><li>Security Code</li><li>Is Physically Complete</li><li>Physical Completion Date</li><li>Final Invoice Paid Date</li><li>Solicitation Issue Date</li><li>Cancellation Date</li><li>Destroy Date</li><li>Non-Federal Funding Amount</li></ul>|JSON Object | v1 |
| awardDetails.nasaSpecificData.offerorsProposalNumber | Offeror's Proposal Number | String | v1 |
| awardDetails.nasaSpecificData.prNumber | PR Number | String | v1 |
| awardDetails.nasaSpecificData.accessionNumber | Accession Number | String | v1 |
| awardDetails.nasaSpecificData.installationUnique | Installation Unique | String | v1 |
| awardDetails.nasaSpecificData.administrativeCo | Administrative CO. | String | v1 |
| awardDetails.nasaSpecificData.contractingOfficerCode | Contracting Officer Code | String | v1 |
| awardDetails.nasaSpecificData.buyerCode | Buyer Code | String | v1 |
| awardDetails.nasaSpecificData.organizationCode | Organization Code| String | v1 |
| awardDetails.nasaSpecificData.cotrName | COTR Name | String | v1 |
| awardDetails.nasaSpecificData.alternateCOTRName | Alternate COTR Name | String | v1 |
| awardDetails.nasaSpecificData.fundedThroughDate | Funded Through Date | String | v1 |
| awardDetails.nasaSpecificData.contractFundCode | Contract Fund Code | JSON Object | v1 |
| awardDetails.nasaSpecificData.contractFundCode.code | Contract Fund Code Code | String | v1 |
| awardDetails.nasaSpecificData.contractFundCode.name | Contract Fund Code Name | String | v1 |
| awardDetails.nasaSpecificData.managementReportingRequirements | Management Reporting Requirements | JSON Object | v1 |
| awardDetails.nasaSpecificData.managementReportingRequirements.code | Management Reporting Requirements Code | String | v1 |
| awardDetails.nasaSpecificData.managementReportingRequirements.name | Management Reporting Requirements Name | String | v1 |
| awardDetails.nasaSpecificData.accountingInstallation | Accounting Installation | JSON Object | v1 |
| awardDetails.nasaSpecificData.accountingInstallation.code | Accounting Installation Code | String | v1 |
| awardDetails.nasaSpecificData.accountingInstallation.name | Accounting Installation Name | String | v1 |
| awardDetails.nasaSpecificData.fieldOfScienceOrEngineering | Field Of Science or Engineering | JSON Object | v1 |
| awardDetails.nasaSpecificData.fieldOfScienceOrEngineering.code | Field Of Science or Engineering Code | String | v1 |
| awardDetails.nasaSpecificData.fieldOfScienceOrEngineering.name | Field Of Science or Engineering Name | String | v1 |
| awardDetails.nasaSpecificData.contractAdministrationsDelegated | Contract Administrations Delegated | JSON Array | v1 |
| awardDetails.nasaSpecificData.contractAdministrationsDelegated.code | Contract Administrations Delegated Code | String | v1 |
| awardDetails.nasaSpecificData.contractAdministrationsDelegated.name | Contract Administrations Delegated Name | String | v1 |
| awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber | CFDA Program Identification Number | JSON Object | v1 |
| awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber.code | CFDA Program Identification Number Code | String | v1 |
| awardDetails.nasaSpecificData.cfdaProgramIdentificationNumber.name | CFDA Program Identification Number Name | String | v1 |
| awardDetails.nasaSpecificData.principalInvestigatOrFirstName | Principal Investigator First Name | String | v1 |
| awardDetails.nasaSpecificData.principalInvestigatOrMiddleInitial | Principal Investigator Middle Initial | String | v1 |
| awardDetails.nasaSpecificData.principalInvestigatOrLastName | Principal Investigator Last Name | String | v1 |
| awardDetails.nasaSpecificData.alternatePrincipalInvestigatorFirstName | Alternate Principal Investigator First Name | String | v1 |
| awardDetails.nasaSpecificData.alternatePrincipalInvestigatOrMiddleInitial | Alternate Principal Investigator Middle Initial | String | v1 |
| awardDetails.nasaSpecificData.alternatePrincipalInvestigatOrLastName | Alternate Principal Investigator Last Name | String | v1 |
| awardDetails.nasaSpecificData.closeoutPR | Closeout PR | String | v1 |
| awardDetails.nasaSpecificData.advisoryAssistanceServicesContract | Advisory/Assistance Services Contract | String | v1 |
| awardDetails.nasaSpecificData.supportServicesTypeContract | Support Services Type Contract | String | v1 |
| awardDetails.nasaSpecificData.newTechnologyOrPatentClause | New Technology or Patent Clause | String | v1 |
| awardDetails.nasaSpecificData.propertyFinancialReporting | Property Financial Reporting | String | v1 |
| awardDetails.nasaSpecificData.valueEngineeringClause | Value Engineering Clause | String | v1 |
| awardDetails.nasaSpecificData.securityCode | Security Code | String | v1 |
| awardDetails.nasaSpecificData.isPhysicallyComplete | Is Physically Complete | String | v1 |
| awardDetails.nasaSpecificData.physicalCompletionDate | Physical Completion Date | String | v1 |
| awardDetails.nasaSpecificData.finalInvoicePaidDate | Final Invoice Paid Date | String | v1 |
| awardDetails.nasaSpecificData.solicitationIssueDate | Solicitation Issue Date | String | v1 |
| awardDetails.nasaSpecificData.cancellationDate | Cancellation Date | String | v1 |
| awardDetails.nasaSpecificData.destroyDate | Destroy Date | String | v1 |
| awardDetails.nasaSpecificData.nonFederalFundingAmount | Non-Federal Funding Amount | String | v1 |
| awardDetails.nasaSpecificData.nasaStatutoryAuthority | NASA Statutory Authority | String | v1 |
| awardDetails.transactionData | Transaction Data | JSON Object | v1 |
| awardDetails.transactionData.status | Status | String | v1 |
| awardDetails.transactionData.version | Version | String | v1 |
| awardDetails.transactionData.createdBy | Created By | String | v1 |
| awardDetails.transactionData.createdDate | Created Date | String | v1 |
| awardDetails.transactionData.lastModifiedBy | Last Modified By | String | v1 |
| awardDetails.transactionData.lastModifiedDate | Last Modified Date | String | v1 |
| awardDetails.transactionData.approvedBy | Approved By | String | v1 |
| awardDetails.transactionData.approvedDate | Approved Date | String | v1 |
| awardDetails.transactionData.closedBy | Closed By | String | v1 |
| awardDetails.transactionData.closedDate | Closed Date | String | v1 |
| awardDetails.transactionData.closedStatus | Closed Status | String | v1 |


## Sample Response 

The following is a sample response containing dummy data. The purpose is to demonstrate the complete structure of the JSON response.

 ````
{
  "totalRecords": "1",
  "limit": "10",
  "offset": "0",
  "piidAggregation": {
    "awardFamilySummary": {
      "count": "3",
      "totalDollars": "150000"
    },
    "referencingDosOrBpaCallsSummary": {
      "baseCount": "2",
      "totalCount": "5",
      "totalDollars": "120000"
    },
    "bpaSummary": {
      "baseCount": "1",
      "totalCount": "3",
      "totalDollars": "80000"
    },
    "bpaCallSummary": {
      "baseCount": "1",
      "totalCount": "2",
      "totalDollars": "40000"
    }
  },
  "awardSummary": [
    {
      "contractId": {
        "subtier": {
          "code": "1234",
          "name": "NASA"
        },
        "piid": "NN1234567",
        "modificationNumber": "01",
        "transactionNumber": "0001",
        "referencedIDVSubtier": {
          "code": "5678",
          "name": "GSA"
        },
        "referencedIDVPiid": "IDV123456",
        "referencedIDVModificationNumber": "00",
        "reasonForModification": {
          "code": "A1",
          "name": "Funding Increase"
        }
      },
      "oldContractId": {
        "subtier": {
          "code": "9876",
          "name": "DOE"
        },
        "piid": "OLD9876543",
        "modificationNumber": "00",
        "transactionNumber": "0002",
        "referencedIDVSubtier": {
          "code": "5432",
          "name": "DOD"
        },
        "referencedIDVPiid": "OLDIDV321",
        "referencedIDVModificationNumber": "00"
      },
      "coreData": {
        "coreVersionId": "v1.0",
        "solicitationId": "SOL12345",
        "solicitationDate": "08/01/2025",
        "awardOrIDV": "Award",
        "awardOrIDVType": {
          "code": "A",
          "name": "Definitive Contract"
        },
        "initiative": {
          "code": "INIT1",
          "name": "Clean Energy"
        },
        "federalOrganization": {
          "contractingInformation": {
            "contractingDepartment": {
              "code": "NASA",
              "name": "National Aeronautics and Space Administration"
            },
            "contractingSubtier": {
              "code": "4200",
              "name": "NASA Headquarters"
            },
            "contractingOffice": {
              "code": "HQ0001",
              "name": "NASA Office 1"
            }
          },
          "fundingInformation": {
            "fundingDepartment": {
              "code": "NASA",
              "name": "National Aeronautics and Space Administration"
            },
            "fundingSubtier": {
              "code": "4300",
              "name": "NASA Goddard"
            },
            "fundingOffice": {
              "code": "GD0001",
              "name": "NASA Goddard Office"
            },
            "foreignFunding": {
              "code": "N",
              "name": "No"
            }
          }
        },
        "acquisitionData": {
          "typeOfContractPricing": {
            "code": "F",
            "name": "Firm Fixed Price"
          },
          "multiyearContract": {
            "code": "Y",
            "name": "Yes"
          },
          "majorProgramCode": "XYZ",
          "programAcronym": "ACE",
          "nationalInterestAction": {
            "code": "H09Z",
            "name": "COVID-19"
          },
          "performanceBasedServiceContract": {
            "code": "P",
            "name": "Partial"
          },
          "consolidatedContract": {
            "code": "C",
            "name": "Consolidated"
          },
          "typeOfIdc": {
            "code": "A",
            "name": "Indefinite Delivery Contract"
          },
          "multipleOrSingleAwardIdc": {
            "code": "M",
            "name": "Multiple Awards"
          },
          "reasonForInterAgencyContracting": {
            "code": "R1",
            "name": "Required"
          },
          "contractFinancing": {
            "code": "C1",
            "name": "Commercial Financing"
          }
        },
        "legislativeMandates": {
          "clingerCohenAct": {
            "code": "Y",
            "name": "Yes"
          },
          "materialsSuppliesArticlesEquipment": {
            "code": "N",
            "name": "No"
          },
          "laborStandards": {
            "code": "Y",
            "name": "Yes"
          },
          "constructionWageRateRequirements": {
            "code": "N",
            "name": "No"
          },
          "interagencyContractingAuthority": {
            "code": "I1",
            "name": "Interagency Agreement"
          },
          "otherStatutoryAuthority": "Public Law 123"
        },
        "principalPlaceOfPerformance": {
          "city": {
            "code": "12345",
            "name": "Greenbelt"
          },
          "county": {
            "code": "C001",
            "name": "Prince George's"
          },
          "state": {
            "code": "MD",
            "name": "Maryland"
          },
          "zipCode": "20771",
          "congressionalDistrict": "MD-04",
          "country": {
            "code": "USA",
            "name": "United States"
          }
        }
      },
      "awardDetails": {
        "dates": {
          "dateSigned": "2025-08-01",
          "periodOfPerformanceStartDate": "2025-08-15",
          "currentCompletionDate": "2026-08-14",
          "ultimateCompletionDate": "2027-08-14",
          "lastDateToOrder": "2026-12-31",
          "fiscalYear": "2025"
        },
        "dollars": {
          "actionObligation": "50000",
          "baseDollarsObligated": "50000",
          "baseAndExercisedOptionsValue": "70000",
          "baseAndAllOptionsValue": "100000",
          "feePaidForUseOfService": "1500",
          "totalEstimatedOrderValue": "110000",
          "nonGovernmentDollars": "5000"
        },
        "transactionData": {
          "status": "Approved",
          "version": "1.0",
          "createdBy": "jdoe",
          "createdDate": "2025-07-15T10:00:00Z",
          "lastModifiedBy": "asmith",
          "lastModifiedDate": "2025-08-01T15:30:00Z",
          "approvedBy": "reviewer1",
          "approvedDate": "2025-08-01T16:00:00Z",
          "closedBy": null,
          "closedDate": null,
          "closedStatus": null
        }
      }
    }
  ]
}
````


## HTTP Response Codes

The API will return one of the following responses:

| Code | Description |
|-------|-------------|
| 200 | The API call is successful. |
| 400 | Application Level Error Messages: Invalid "Date" format: v1: "message":"Dates must be specified in the MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] format.", "detail":"Any Date parameter must be provided in the MM/DD/YYYY or [MM/DD/YYYY,MM/DD/YYYY] format." |
| 400 | Invalid "Dollar" format: v1: "message":"Dollars must be specified in a numeric format excluding commas or in the range format contained within brackets with a comma separating the lower range and upper range [Lower Range,Upper Range].", "detail":"Any Dollar parameter must be provided in the numeric format excluding commas or [Lower Range,Upper Range] format." |
| 400 | Invalid Search Parameter: v1: "message":"The search parameter, < user-provided invalid parameter > does not exist.", "detail":"Please refer to https://open.gsa.gov/api/XXXX-XX/ for a list of allowable search parameters." |
| 400 | If 'includeSections', 'emailId' or 'format' is sent in the "q" parameter: v1: "message":"The search parameters 'includeSections','emailId', 'piidaggregation', and 'format' are not permitted inside Query Param(q)", "detail":"Please provide these parameters separately". |
| 400 | More than 100 UEI values are sent: v1: "message":"More than 100 Unique Entity IDs are not allowed.", "detail":"Please limit the number of Unique Entity IDs to 100." |
| 400 | More than 100 Parent UEI values are sent: v1: "message":"More than 100 Parent Unique Entity IDs are not allowed.", "detail":"Please limit the number of Parent Unique Entity IDs to 100." |
| 400 | More than 100 Consortia UEI values are sent: v1: "message":"More than 100 Consortia Unique Entity IDs are not allowed.", "detail":"Please limit the number of Consortia Unique Entity IDs to 100." |
| 400 | More than 100 CAGE Code values are sent: v1: "message":"More than 100 CAGE Codes are not allowed.", "detail":"Please limit the number of CAGE Codes to 100." |
| 400 | More than 100 PSC Codes are sent: v1: "message":"More than 100 Product or Service Codes are not allowed.", "detail":"Please limit the number of Product or Service Codes to 100." |
| 400 | More than 100 NAICS Codes are sent: v1: "message":"More than 100 NAICS Codes are not allowed.", "detail":"Please limit the number of NAICS Codes to 100." |
| 400 | "emailId" is sent on its own: v1 "message":"The search parameter 'emailId' must be provided in conjunction with the search parameter 'format.", "detail":"Users can opt for receiving the requested JSON/CSV files in their emails." |
| 400 | "piidaggregation" is sent on its own: v1: message":"The search parameter 'piidaggregation' must be provided in conjunction with the search parameter 'piid'.", "detail":"The 'piidaggregation' parameter cannot be provided on its own." |
| 400 | "piidaggregation" is sent with a PIID that is not unique: v1: message":"The search parameter 'piidaggregation' must be provided in conjunction with the search parameters 'piid' and 'referencedIdvPiid' when the 'piid' is not unique.", "detail":"The 'piidaggregation' parameter must return a unique record." |
| 400 | File size exceeded for JSON or CSV exports: v1: "message":"Total Number of Records: < the total number > exceeded the maximum allowable limit: 1,000,000. Please provide a suitable search parameter to refine your search.", "detail":"Count Exceeded Error" |
| 400 | JSON or CSV file generation is in-progress: v1: "message": "The requested JSON or CSV file is not generated yet. Please try again later.", "details": "Larger files will take some time to process." |
| 400 | Using an expired Token for downloading JSON or CSV files: v1: "message":"The requested JSON or CSV file token is expired.","detail":"Please verify the token number." ,"detail":"Please verify the token number." |
| 400 | Different IP Address than that mentioned in the System Account: v1: "message":"IP Addresses associated with this System Account are different from that sending the request. Please submit your requests from a valid system.", "detail":"Please verify your IP Address sending this request is associated with this System Account." |
| 400 | Insufficient API Key privileges to download a JSON or CSV File: v1: The API Key is not authorized to access this < file type > Extract |
| 403 | Forbidden |
| 403 | 1. Missing API Key: v1: No API Key was supplied. Please submit with a valid API key. |
| 403 | 2. An invalid API Key: v1: An invalid API key was supplied. Please submit with a valid API key. |
| 403 | 3. A disabled API Key: v1: The API key supplied has been disabled. Please submit with a valid API key. |
| 404 | No Data found |
| 500 | Internal Server Error |




## Sample Request Examples


### Example 1: 
Example 1: Get Base Contracts modified between January 1st, 2025 and today, Contracted by DoD with a Dollar Obligated between $0.00 and $100,000,000.99. 
<br>**Request URL:** Endpoint URL
<br>lastModifiedDate=[01/01/2025,]&dollarsObligated=[0.0,100000000.99]&modificationNumber=0&contractingDepartmentCode=9700
<br>**Response URL:**

Example 2: Get Modifications to Purchase Orders Approved between January 1st, 2025 and August 19th, 2025 with a NIACS code of 513310 or 513311 or 513312.
<br>**Request URL:** Endpoint URL
<br>awardOrIDVTypeName=PURCHASE ORDER&approvedDate=[01/01/2025,08/19/2025]& modificationNumber!=0&naicsCode=513310~513311~513312
<br>**Response URL:**

Example 3: Get only the Contract IDs for GSA IDVs closed between January 1st, 2025 and today.
<br>**Request URL:** Endpoint URL
<br>awardOrIDV=IDV&closedDate=[01/01/2025,]&contractingDepartmentCode=4700&includeSections=contractId
<br>**Response URL:**

Example 4: Get Service Contracts performed in Virginia in FY25 with a Contracting Officer's Business Size Selection of Small, and only return the Contract ID, Contract, and Entity Information
<br>**Request URL:** Endpoint URL
<br>coBusSizeDeterminationCode=S&placeOfPerformStateCode=VA&fiscalYear=2025&productOrServiceType=SERVICE&includeSections=contractId,contract,entityInformation
<br>**Response URL:**

## Additional Information

You can view the full details of the differences between the FPDS legacy API and SAM.gov API
 available here: Document To be created [FPDSvsSAM-ContractDataAPI.docx](https://docs.google.com/document/d/1DJHNRKTGiG4dgT2O9PBiAUj47Qh83SHj/edit).

Disclaimer:  **Limitation on Permissible Use of Dun & Bradstreet, Inc. (D&B) Data**


* This website contains data supplied by third party information suppliers, including Dun & Bradstreet (D&B). For the purposes of the following limitation on permissible use of D&B data, which includes each entity’s DUNS Number and its associated business information, “D&B Open Data” is defined as the following data elements: Legal Business Name, Street Address, City Name, State/Province Name, Country Name, County Code, State/Province Code, State/Province Abbreviation, ZIP/Postal Code, Country Name and Country Code. Entity registration, exclusion, or contract award records in SAM may contain D&B-supplied data. Applicable records containing D&B data include all base award notices with an award date earlier than 4/4/2022. These records show the Entity Validation Service (EVS) Source as D&B in outbound data streams.
* D&B hereby grants you, the user, a license for a limited, non-exclusive right to use D&B Open Data within the limitations set forth herein. By using this website you agree that you shall not use D&B Open Data without giving written attribution to the source of such data (i.e., D&B) and shall not access, use or disseminate D&B Open Data in bulk, (i.e., in amounts sufficient for use as an original source or as a substitute for the product and/or service being licensed hereunder).
* Except for data elements identified above as D&B Open Data, under no circumstances are you authorized to use any other D&B data for commercial, resale or marketing purposes (e.g., identifying, quantifying, segmenting and/or analyzing customers and prospective customers). Systematic access (electronic harvesting) or extraction of content from the website, including the use of “bots” or “spiders”, is prohibited. Federal government entities are authorized to use the D&B data for purposes of acquisition as defined in FAR 2.101 and for the purpose of managing Federal awards, including sub-awards, or reporting Federal award information.
* GSA assumes no liability for the use of the D&B data once it is downloaded or accessed. The D&B data is provided “as is” without warranty of any kind. The D&B data is the intellectual property of D&B. In no event will D&B or any third party information supplier be liable in any way with regard to the use of the D&B data. For more information about the scope of permissible use of D&B data licensed hereunder, please contact D&B at datause_govt@dnb.com.

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
  1. Navigate to [www.fsd.gov](www.fsd.gov)
  2. Sign into the FSD platform using your FSD credentials
  3. Select “Create an Incident”
  4. Create an Incident
      1. **System Name:** System for Award Management (SAM)
      2. **Is this related to the American Rescue Plan Act?:** No
      3. **Issue Type:** Other
      4. **Business Type:** Other
      5. **Subject (select 1):**
          1. **Option A:** I need a role to test in alpha.sam.gov.
          2. **Option B:** System account approval in alpha.sam.gov
      6.  **Please describe the issue:** (Copy and paste the below information into the ticket, filling in your information within the brackets)
          1. **Option A:** I have already navigated to alpha.sam.gov and created a user account, following the same steps for  [creating an account](https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=81d067071b80b0109ac5ddb6bc4bcb63) in sam.gov. I would like to conduct testing but do not have the necessary role(s) in alpha.sam.gov. The account that needs role assignment is associated with [EMAIL ADDRESS]. I request a [ROLE] role for the [DOMAIN] domain in alpha.sam.gov.
          2. **Option B:** I am creating/editing a system account and have submitted my account in alpha.sam.gov for approval. I would like to request alpha.sam.gov system account review and approval for [Name of the alpha.sam.gov system account].

## Change Log

Date | Version | Description
------|---------------|---------
[Date that API is released to Alpha/Prod] | v1.0 | Base Version



<p><small><a href="#">Back to top</a></small></p>
