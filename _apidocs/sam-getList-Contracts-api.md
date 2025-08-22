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

### GetList contract Response Parameters

| Response Parameters| Description | Data Type | Applicable Versions|
| ---------------------------|---------------|-------------------|-----|
| totalRecords | Total Records in Response | Number | v1 |
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
|contractId| Contract ID Information:</br>Subtier</br>PIID</br>Modification Number</br>Transaction Number</br>Referenced IDV Subtier</br>Referenced IDV PIID</br>Referenced IDV Modification Number | JSON Object |  v1 |
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
|oldContractId| Old Contract ID Information:</br>Subtier</br>PIID</br>Modification Number</br>Transaction Number</br>Referenced IDV Subtier</br>Referenced IDV PIID</br>Referenced IDV Modification Number | JSON Array |  v1 |
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
|coreData|Core Information:</br> Core Version ID </br> Solicitation ID</br> Solicitation Date</br> Title</br> Contract Action Type</br> Initiative</br> Contracting Information:</br> Funding Information</br> Type of Contract Pricing</br> Multiyear Contract</br> Major Program Code</br>Program Acronym</br> National Interest Action</br>Performance Based Service Contract</br> Contingency Humanitarian Peace Keeping Operation</br> Consolidated Contract</br> Clinger Cohen Act</br> Materials Supplies Articles Equipment</br> Labor Standards</br>Construction Wage Rate Requirements</br>Recovered Material Clauses</br> Place of Performance</br>  Product Or Service</br> Principal NAICS</br>  Contract Bundling</br> DoD Acquisition Program</br> DoD Claimant Program</br> Government Furnished Property</br> Extent Competed</br> Solicitation Procedures</br> Type Of Set Aside</br> SBIR/STTR</br> Statutory Exception To Fair Opportunity</br> Reason Not Competed (Other Than Full And Open Competition)</br> Authority</br> Local Area Set Aside</br> A76 Action</br> Source Selection Process</br> Type of IDC</br> Multiple or Single Award IDC |  String |  v1 |
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
|coreData.federalOrganization.contractingInformation| Contracting Information:</br>Contracting Department</br>Contracting Subtier</br>Contracting Office | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment | Contracting Department | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment.code| Contracting Department Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingDepartment.name| Contracting Department Name | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier| Contracting Subtier | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier.name| Contracting Subtier Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingSubtier.code| Contracting Subtier Name | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice| Contracting Office | JSON Object |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice.code| Contracting Office Code | String |  v1 |
|coreData.federalOrganization.contractingInformation.contractingOffice.name| Contracting Office Name | String |  v1 |
|coreData.federalOrganization.fundingInformation| Funding Information:</br>Funding Department</br>Funding Subtier</br>Funding Office</br>Foreign Funding | String |  v1 |
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
| coreData.principalPlaceOfPerformance | Place of Performance</br>Location Code</br>County</br>City</br>ZIP Code</br>State </br>Congressional District</br>Country | JSON Object | v1 |
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








