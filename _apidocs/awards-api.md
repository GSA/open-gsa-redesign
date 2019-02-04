---
title: Awards API
banner-heading: Awards API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
Public Awards data (all the data except the DoD unrevealed data) is available for end-user consumption in the form of an Awards API and an Awards Extract API that can be accessed by sending end points in the browser.

Awards data exist in the following types:
* Award: Delivery/Task Order, Purchase Order, Definitive Contract, BPA Call
* IDV: FSS, GWAC, BOA, BPA, IDC
* NASA Specific Award: Cooperative Agreement, Funded Space Act Agreement, Grant for Research, Intragovernmental, Training Grant
* Other Transaction Award: Other Transaction Order, Other Transaction Agreement
* Other Transaction IDV: Other Transaction IDV

Awards API: 
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.
* It can return only the first 10,000 records.

Awards Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the emails.
* It returns data in the JSON or CSV format as selected by the user.
* It can return only the first 1,000,000 records.
<p><small><a href="#">Back to top</a></small></p>

## Getting Started
 
Awards API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/contractdata?api_key=<API Key>
* https://api-alpha.sam.gov/prodlike/contractdata?api_key=<API Key>

Awards Extract API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/contractdata-extract?api_key=<API Key>&format=<Format Type>&emailId=<a valid email address>
* https://api-alpha.sam.gov/prodlike/contractdata?api_key=<API Key>& format=<Format Type>&emailId=<a valid email address>

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.

<p><small><a href="#">Back to top</a></small></p>

## API Description

### Awards API

**Endpoint:** https://api.sam.gov/prod/contractdata?api_key=<value>&page=<value>&size=<value>

**Description** Restful endpoint to retrieve Awards data service detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| lastModifiedDate | Last modified date Range (max of 5 yrs range). Format: MM/dd/yyyy. Example: '02/22/1999' |
| contractingAgencyId | Contracting Agency ID. <br/>Example: '97AS'. |
| piid | Procurement Identifier. Example: '0001'. |
| referenceIdvPiid |Referenced IDV PIID. This is required field. If no value passed, default value is EMPTY string. <br/>Example: 'SPE30015DB100'. |
| agencyId | Agency ID. Example: '9700'. |
| modificationNumber | Modification Number. Example: '0'. |
| referenceAgencyId | Referenced IDV Agency ID. <br/>Example: '9700'. |
| dateSigned | Date Signed Range (Max of 5 years Range). Format: MM/dd/yyyy. Example: '02/22/1999'. |
| contractingOfficeId | Contracting Office ID. <br/>Example: '36F797'. |
| vendorDuns | 9 digit Vendor DUNS. <br/>Example: '003296175'. |
| naicsCode | 6 digit NAICS Code. <br/>Example: '311812'. |	 
| page | Page number for paginated results. Example: 0. |
| size | Page size (default is 10). Example: 0. |
| docType | Document Type. <br/>Example: 'Award'. |
| awardOrIdvType |  Award OR Idv type. <br/>Example: 'Award'. |	
| piidAgencyName | The complete Agency Name. <br/>Example: 'DEPT OF DEFENSE'. |
| transactionNumber | A valid complete Transaction Number. Example: '0'. |
| reasonForModification | A valid one character Code for Reason Modification. <br/>Example: 'A'. |
| reasonForModificationDesc | The complete value of Reason For Modification Description. Example: 'ADDITIONAL WORK (NEW AGREEMENT,FAR PART 6 APPLIES)'. |
| refIdvAgencyName |The complete name refIdvAgencyName. <br/>Example: 'DEPT OF DEFENSE'. |
| referenceModificationNumber | A valid complete value of Reference Modification Number: '0'. |
| solicitationId | A valid complete value solicitationId. <br/>Example: '65 II A'. | 
| version | A valid Document Version. Example: '1.4' |
| oldAgencyCode | A valid four character other AgencyID. <br/>Example: '9700'. |
| oldAgencyName | The complete other AgencyName. Example: 'DEPT OF DEFENSE'. |
| oldPiid | A valid complete value of other PIID. <br/>Example: '0001'. |
| oldModificationNumber | A valid complete value of other Modification Number. <br/>Example: '0'. |
| oldTransactionNumber | A valid complete value of other Transaction Number.  Example: '123'. |
| oldIdvAgencyCode | A valid four character Other Referenced IDV AgencyID. <br/>Example: '9700'. |
| oldIdvAgencyName | The complete Other Referenced IDV AgencyName. <br/>Example: 'DEPT OF DEFENSE'. |
| oldIdvPiid | A valid complete value other Referenced IDV PIID. <br/>Example: '0001'. |
| oldIdvModificationNumber | A valid complete value other Referenced IDV Modification Number. <br/>Example: '0'. |
| effectiveDate | Effective Date. Format: MM/DD/YYYY. <br/>Example: '09/12/1999'. |	 
| currentCompletionDate | Completion Date. Format: MM/DD/YYYY. <br/>Example: '09/13/1999'. |
| ultimateCompletionDate | Estimated Ultimate Completion Date. Format:MM/DD/YYYY. Example: '09/13/1999'. |
| idvLastDate | last Date ToOrder. Format:MM/DD/YYYY. <br/>Example: '09/13/1999'. |
| fiscalYear | Fiscal Year. Format:YYYY. <br/>Example: '2017'. |
| solicitationDate | Solicitation Date. Format:MM/DD/YYYY. Example: '09/13/1999'. |
| dollarsObligated | Action Obligation. <br/>Example: 512.11. |
| baseDollarsObligated |  Base dollars obligated. <br/>Example: 512.11. |
| currentContractValue | Base And Exercised OptionsValue. Example: 512.11. |
| ultimateContractValue | Base And AllOptionsValue. <br/>Example: 512.11. |
| totalDollarsObligated | Total Action Obligation. <br/>Example: 512.11. |
| totalCurrentContractValue | Total Base And Exercised OptionsValue. <br/>Example: 512.11. |
| totalUltimateContractValue | Total Base And AllOptionsValue. Example: 512.11 |
| feePaidForUseOfService | Fee Paid For Use Of IDV. <br/>Example: 512.11. |
| nonGovernmentValue | Non Government Dollars. Example: 512.11. |
| totalNonGovernmentValue | Total Non Government Dollars. <br/>Example: 512.11. |
| totalEstimatedOrderValue |  Total Estimated OrderValue. <br/>Example: 512.11. |  
| departmentId | A Valid Four Character Value Of DepartmentId. <br/>Example: '9700'. |
| departmentName | The Complete Value Of DepartmentName. <br/>Example: 'DEPT OF DEFENSE'. |
| contractingAgencyName | Contracting Office AgencyName. <br/>Example: 'DEFENSE LOGISTICS AGENCY'. |
| contractingOfficeName | Contracting Office Name. <br/>Example: 'DLA TROOP SUPPORT'. |
| fundingDepartmentId  |  Funding department Id. <br/>Example: '9700'. |
| fundingDepartmentName| Funding department name. <br/>Example: 'DEPT OF DEFENSE'. |
| fundingAgencyCode | A Valid Four Character Value Of Funding Agency ID. <br/>Example: '97AS'. |
| fundingAgencyName | Funding Agency Name. <br/>Example: 'DEFENSE LOGISTICS AGENCY'. |	 
| fundingOfficeCode | A Valid Value Of Funding Office ID. <br/>Example: 'SPE300'. |
| fundingOfficeName | Funding Office Name. <br/>Example: 'DLA TROOP SUPPORT'. |
| contractForForeignEntity | Foreign Funding Code. <br/>Example: 'X'. |
| foreignFundingDesc | Foreign Funding Description. <br/>Example: 'NOT APPLICABLE'. |
| urlOfProgram | WebsiteURL. <br/>Example: 'WWW.GSAELIBRARY.GSA.GOV'. |
| whoCanUse | Who Can Use Short Description. <br/>Example: 'ALL AGENCIES'. |
| whoCanUseDesc | Who Can Use Large Description. <br/>Example: 'ALL FEDERAL GOVERNMENT AGENCIES MAY PLACE ORDERS AGAINST THE CONTRACT.'. |
| emailAddress |Email Address. <br/>Example: 'test@gsa.gov'. |
| individualOrderCallLimit | Individual Order / Call Limit. <br/>Example: '0.00'. |
| typeOfFeeForUseOfService | Type Of Fee For Use Of Service. <br/>Example: 'FIX'. |
| fixedFeeValue | Fixed Fee Value. Example: 10.0 |
| feeRangeLowerValue | Fee Range Lower Value. <br/>Example: 10.0. |
| feeRangeUpperValue | Fee Range Upper Value. <br/>Example: 6000.0. |
| orderingProcedure | Ordering Procedure. <br/>Example: 'test'. |
| contractTypeDesc | Contract Action Type. <br/>Example: 'BPA'. |
| part8OrPart13 | Part8 or Part13.  Example: 'PART13'. |
| typeOfContractPricing | Type Of Contract Code. <br/>Example: 'J'. |
| tocpShortDescription | Type Of Contract Description. <br/>Example: 'FIRM FIXED PRICE'. |
| majorProgramCode | Major Program Code. <br/>Example: 'test'. |
| nationalInterestCode | National Interest Action Code. <br/>Example: 'NONE'. |
| nationalInterestDescription | National Interest Action Description. <br/>Example: 'NONE'. |	 
| costOrPricingDataCode | Cost Or Pricing Data Code. <br/>Example: 'N'. |
| costOrPricingDataDesc | Cost Or Pricing Data Description. <br/>Example: 'NO'. |
| costAcctStandards | Cost Accounting Standards Clause Code. <br/>Example: 'X'. |
| casClauseDesc | Cost Accounting Standards Clause Description. <br/>Example: 'NOT APPLICABLE EXEMPT FROM CAS'. |
| descriptionOfRequirement | Description Of Contract Requirement. <br/>Example: 'test'. |
| inherentlyGovernmentalCode |  Inherently Governmental Code. <br/>Example: 'OT'. |          
| inherentlyGovernmentalDesc |  Inherently Governmental Description. <br/>Example: 'OTHER FUNCTIONS'. |         
| gfeGfp | GFP Code. <br/>Example: 'N'. |
| gfeGfpDesc | GFP Description. <br/>Example: 'TRANSACTION'. |
| seaTransportationCode | Sea Transportation Code. <br/>Example: 'N'. |
| seaTransportationDesc | Sea Transportation Description. <br/>Example: 'NO'. |
| undefinitizedAction | Undefinitized Action Code. <br/>Example: 'X'. |
| undefinitizedActionDesc |  Undefinitized Action Description. <br/>Example: 'NO'. |
| consolidatedContract |  Consolidated Contract Code. <br/>Example: 'D'. |
| consolidatedContractDesc |  Consolidated Contract Description. <br/>Example: 'NOT CONSOLIDATED'. |
| performBasedServiceContract |  Performance Based Service Acquisition Code. <br/>Example: 'N'. |
| pbscShortDescription |  Performance Based Service Acquisition Description. <br/>Example: 'NO - SERVICE WHERE PBA IS NOT USED.'. |
| multiyearContract |  Multi Year Contract Code. <br/>Example: 'N'. |
| multiyearContractDesc |  Multi Year Contract Description. <br/>Example: 'NO'. |
| agencyIdentifier |  Treasury Account Symbol Agency Identifier. <br/>Example: '97'. |
| mainAccountCode |  Treasury Account Symbol Agency Main Account. <br/>Example: '4930'. |
| subAccountCode |  Treasury Account Symbol Agency Sub Account. <br/>Example: '001'. |
| initiative |  Initiative. <br/>Example: 'AMERICAN RECOVERY AND REINVESTMENT ACT'. |
| idvPart8OrPart13 |  Referenced IDV Part8 Or Part13. <br/>Example: 'part8'. |
| idvMulOrSingleComp |  Referenced IDV Multiple Or Single. <br/>Example: 'S'. |  
| idvContractType |  Referenced IDV Type Code. <br/>Example: 'B'. |
| idvTypeDescription |  Referenced IDV Type Description. <br/>Example: 'IDC'. |
| typeOfIdc |  Type Of IDC Code. <br/>Example: 'A'. |		
| typeOfIdcDesc |  Type Of IDC Description. <br/>Example: 'INDEFINITE DELIVERY / REQUIREMENTS'. |
| multipleOrSingleAwardIdc |  Multiple Or Single Award IDV. <br/>Example: 'MULTIPLE AWARD'. |
| programAcronym |  Program Acronym. <br/>Example: 'MULTIPLE'. |
| contingencyOps |  Contingency Humanitarian Peacekeeping Operation Code. <br/>Example: 'X'. |
| contingencyOpsDesc |  Contingency Humanitarian Peacekeeping Operation Description. <br/>Example: 'NOT APPLICABLE'. |
| contractFinancing |  Contract Financing Code. <br/>Example: 'Z'. |
| contractFinancingDesc |  Contract Financing Description. <br/>Example: 'NOT APPLICABLE'. |
| purchaseCardPaymentMethod |  Purchase Card Payment Method Code. <br/>Example: 'N'. |	
| pcardAsPaymentDesc |  Purchase Card Payment Method Description. <br/>Example: 'No'. |
| numberOfActions |  Number Of Actions. <br/>Example: '0'. |
| typeOfAgreement |  Type Of Agreement. <br/>Example: 'PROTOTYPE'. |
| ngcParticipation |  Non Traditional Government Contractor Participation Code. <br/>Example: 'NSP'. |
| ngcParticipationDesc |  Non Traditional Government Contractor Participation Description. <br/>Example: 'NONTRADITIONAL SIGNIFICANT PARTICIPATION'. |		
| clingerCohenPlanCompliance |  Clinger Cohen Act Code. <br/>Example: 'N'. |
| clingerCohenActDesc |  Clinger Cohen Act Description. <br/>Example: 'No'. |
| walshHealeyAct |  Walsh Healey Act Code. <br/>Example: 'X'. |
| walshHealeyActDesc |  Walsh Healey Act Description. <br/>Example: 'NOT APPLICABLE'. |
| serviceContractAct |  Service Contract Act Code. <br/>Example: 'X'. |
| serviceContractActDesc |  Service Contract Act Description. <br/>Example: 'NOT APPLICABLE'. |      
| davisBaconAct |  Davis Bacon Act Code. <br/>Example: 'X'. |
| davisBaconActDesc |  Davis Bacon Act Description. <br/>Example: 'NOT APPLICABLE'. |
| contractingAuthority |  Interagency Contracting Authority Code. <br/>Example: 'X'. |
| contractingAuthorityDesc |  Contracting Authority Description. <br/>Example: 'NOT APPLICABLE'. |
| otherStatutoryAuthority |  Other Interagency Contracting Statutory Authority. <br/>Example: '41 USC 259'. |
| nasaStatutoryAuthority |  NASA Statutory Authority. <br/>Example: 'A'. |
| additionalReportingCode |  Additional Reporting Code. <br/>Example: 'NONE'. |         
| additionalReportingDesc |  Additional Reporting Description. <br/>Example: 'NONE OF THE ABOVE'. |
| productOrServiceCode |  Product Or Service Code. <br/>Example: '8940'. |
| productOrService |  Product Or Service. <br/>Example: 'Product'. |
| productOrServiceDescription |  Product Or Service Description. <br/>Example: 'SPECIAL DIETARY FOODS AND FOOD SPECIALTY PREPARATIONS'. |
| bundledContractException |  Bundled Contract Code. <br/>Example: 'H'. |      
| contractBundlingDesc |  Bundled Contract Description. <br/>Example: 'NOT BUNDLED'. |
| claimantProgramCode |  Claimant Program Code. <br/>Example: 'B2'. |
| claimantProgramDescription |  Claimant Program Description. <br/>Example: 'SUBSISTENCE'. |
| naicsDesciption |  Principal NAICS Description. <br/>Example: 'COMMERCIAL BAKERIES'. |       
| idvNAICSCode |  IDV NAICS Code. |          
| idvNAICSDesc |  IDV NAICS Description. |
| naicsSourceCode |  NAICS Source Code. |         
| naicsSourceDesc |  NAICS Source Description. |
| recoveredMaterialClauses |  Recovered Materials/Sustainability Code. <br/>Example: 'C'. |
| recoveredMaterialClsDesc |  Recovered Materials/Sustainability Description. <br/>Example: 'NO CLAUSES INCLUDED AND NO SUSTAINABILITY INCLUDED'. |
| mfgOrganizationType |  Domestic or Foreign Entity Code. <br/>Example: 'A'. |
| mfgOrganizationTypeDesc |  Domestic or Foreign Entity Description. <br/>Example: 'U.S. OWNED BUSINESS'. |
| systemEquipmentCode |  DOD Acquisition Program Code. <br/>Example: '000'. |
| systemEquipmentDesc |  DOD Acquisition Program Description. <br/>Example: 'NONE'. |
| itCommercialItemCategory |  InfoTech Commercial Item Category Code. <br/>Example: 'Z'. |      
| itCommercialItemCatDesc |  InfoTech Commercial Item Category Description. <br/>Example: 'NOT IT PRODUCTS OR SERVICES'. |
| useOfEpaProducts |  Use Of EPA Designated Code. <br/>Example: 'E'. |
| useOfEpaProductsDesc |  Use Of EPA Designated Description. <br/>Example: 'NOT REQUIRED'. |
| countryCode |  Country of Product or Service Origin Code. <br/>Example: 'USA'. |
| awardCountryName |  Country of Product or Service Origin Description. <br/>Example: 'UNITED STATES'. |
| placeOfManufacture |  Place of Manufacture Code. <br/>Example: 'C'. |
| pomShortDescription |  Place of Manufacture Description. <br/>Example: 'NOT A MANUFACTURED END PRODUCT'. |
| popLocationCode |  Principal Place Of Performance Location Code. <br/>Example: ' 07125'. |
| popLocationName |  Principal Place Of Performance Location Name. <br/>Example: 'GREAT FALLS'. |
| popLocationStateCd |  Principal Place Of Performance State Code. <br/>Example: 'VA'. |  
| popLocationStateName |  Principal Place Of Performance State Name. <br/>Example: 'VIRGINIA'. |
| popCountryCode |  Principal Place Of Performance Country Code. <br/>Example: 'USA'. |
| popCountryName |  Principal Place Of Performance Country Name. <br/>Example: 'UNITED STATES'. |
| popZipCode |  Principal Place Of Performance Zip Code. <br/>Example: '220662503'. |
| popCountyCode |  Place of performance County Code. <br/>Example: '1'. |
| popCountyName | Place of performance County name. <br/>Example: 'DISTRICT OF COLUMBIA'. |
| placeCongressionalDistrict |  Principal Place Of Performance Congressional District. <br/>Example: '10'. |
| extentCompeted |  Extent Competed Code. <br/>Example: 'A'. |
| extentCompetedDescription |  Extent Competed Description. <br/>Example: 'FULL AND OPEN COMPETITION'. |
| solicitationProcedures |  Solicitation Procedures Code. <br/>Example: 'NP'. |
| solicitationProcDescription |  Solicitation Procedures Description. <br/>Example: 'NEGOTIATED PROPOSAL/QUOTE'. |
| typeOfSetAside |  Type of Set Aside Code. <br/>Example: 'NONE'. |    
| typeOfSetAsideDescription |  Type of Set Aside Description. <br/>Example: 'NO SET ASIDE USED'. |
| evaluatedPreference |  Evaluated Preference Code. <br/>Example: 'NONE'. |
| evaluatedPrefDescription |  Evaluated Preference Description. <br/>Example: 'NO PREFERENCE USED'. |
| research |  SBIR/STTR Code. <br/>Example: 'SR2'. |
| researchDescription |  SBIR/STTR Description. <br/>Example: 'SMALL BUSINESS INNOVATION RESEARCH PROGRAM PHASE II ACTION'. |
| statryExptnToFairOprtnty |  Fair Opportunity/Limited Sources Code. <br/>Example: 'FAIR'. |
| fairOpportunityDescription |  Fair Opportunity/Limited Sources Description. <br/>Example: ' FAIR OPPORTUNITY GIVEN'. |
| reasonNotCompeted |  Other Than Full And Open Competition Code. <br/>Example: 'SP2'. |
| reasonNotCompDescription |  Other Than Full And Open Competition Description. <br/>Example: 'SAP NON-COMPETITION'. |
| numberOfOffersReceived |  Number Of Offers Received. <br/>Example: 4. |
| commercialItemAcquisition |  Commercial Item Acquisition Procedures Code. <br/>Example: 'A'. |
| commercialItemAcquistnDesc |  Commercial Item Acquisition Procedures Description. <br/>Example: 'COMMERCIAL ITEM'. |
| simplifiedProceduresForCertainCommercialItems |  Simplified Procedures For Certain Commercial Items. <br/>Example: 'N'. |
| simplifiedProceduresForCertainCommercialItemsDesc |  Simplified Procedures For Certain CommercialItems Description. <br/>Example: 'NO'. |
| sbcDemonstrationProgram |  Small Business Competitiveness Demonstration Program. <br/>Example: 'NO'. |
| a76Action |  A76 Action Code. <br/>Example: 'N'. |
| a76Desc |  A76 Action Description. <br/>Example: 'NO'. |
| fedBizOpps |  FedBizOpps Code. <br/>Example: 'N'. |
| fedBizOppsDesc |  FedBizOpps Description. <br/>Example: 'NO'. |
| localAreaSetAside |  Local Area Set Aside Code. <br/>Example: 'N'. |
| lasaDescription |  Local Area Set Aside Description. <br/>Example: 'NO'. |
| idvTypeOfSetAsideCode |  IDV Type of Set Aside Code. <br/>Example: 'NONE'. |        
| idvTypeOfSetAsideDesc |  IDV Type of Set Aside Description. <br/>Example: 'NO SET ASIDE USED'. |        
| typeOfSetAsideSourceCode |  Type of Set Aside Source Code. <br/>Example: 'B'. |         
| typeOfSetAsideSourceDesc |  Type of Set Aside Source Description. <br/>Example: 'IDC'. |         
| idvNumberOfOffers |  IDV Number of Offers. <br/>Example: 1. |         
| numberOfOffersSourceCode |  Number of Offers Source Code. <br/>Example: 'F'. |       
| numberOfOffersSourceDesc |  Number of Offers Source Description. <br/>Example: 'This Action'. |         
| preAwardSynopsisRequirement |  PreAward Synopsis. <br/>Example: 'N'. | 
| priceEvalDiff |  Price Evaluation Percent Difference. <br/>Example: '0'. |
| synopsisWaiverException |  Synopsis Waiver Exception. <br/>Example: 'N'. |
| alternativeAdvertising |  Alternative Advertising. <br/>Example: 'NO'. |
| subcontractPlan |  Subcontract Plan Code. <br/>Example: 'F'. |         
| subcontractPlanDesc |  Subcontract Plan Description. <br/>Example: 'INDIVIDUAL SUBCONTRACT PLAN'. |          
| reasonNotSdb |  Reason Not Awarded To Small Disadvantaged Business Code. <br/>Example: 'B'. |          
| reasonNotSdbDesc |  Reason Not Awarded To Small Disadvantaged Business Description. <br/>Example: 'SDB NOT SOLICITED'. |         
| reasonNotSb |  Reason Not Awarded To Small Business Code. <br/>Example: 'B'. | 
| reasonNotSbDesc |  Reason Not Awarded To Small Business Description. <br/>Example: 'SB NOT SOLICITED'. |     
| offerorsProposalNumber |  Offeror's Proposal Number. <br/>Example: 'NNJ05111915R'. |  
| prNumber |  PR Number. <br/>Example: '4200686114'. |
| accessionNumber |  Accession Number. <br/>Example: '11-001 bx20'. |
| installationUnique |  Installation Unique. <br/>Example: '62'. |
| administratorCode |  Administrative CO. <br/>Example: 'mfb'. |
| contractingOfficerCode |  Contracting Officer Code. <br/>Example: 'MFC'. | 
| negotiatorCode |  Buyer Code. <br/>Example: 'mfb'. |
| organizationCode |  COR Organization Code. <br/>Example: 'AS24'. |     
| cotrName |  COR Name. <br/>Example: 'durham, jim'. |  
| alternateCotrName |  Alternate COR Name. <br/>Example: 'durham, jim'. |
| fundedThroughDate |  Funded Through Date  format  datetime <br/>Example: '11/30/2019'. |
| contractFundCode |  Contract Fund Code. <br/>Example: 'I'. |         
| mgmtReportingRequirements |  Management Reporting Requirements. <br/>Example: '3'. |        
| acctngInstallationNumber |  Accounting Installation. <br/>Example: '55'. |  
| fieldOfScienceOrEngg |  Field Of Science or Engineering. <br/>Example: '41'. | 
| none | None. <br/>Example: 'A'. |     
| blanketDelegation | Blanket Delegation. <br/>Example: 'B'. |  
| postAwardAudit | Post Award Audit. <br/>Example: 'C'. |
| security | Security. <br/>Example: 'D'. |
| costAccountingStandards| Cost Accounting Standards. <br/>Example: 'E'. | 
| propertyAdministration| Property Administration. <br/>Example: 'F'. | 
| transportation| Transportation. <br/>Example: 'G'. |
| qualityAssurance| Quality Assurance. <br/>Example: 'H'. |
| consentToSubcontract| Consent To Subcontract. <br/>Example: 'I'. | 
| closeout| Closeout. <br/>Example: 'J'. |
| engineeringOrProductSurveillance| Engineering Or Product Surveillance. <br/>Example: 'K'. |
| other| Other. <br/>Example: 'L'. |
| principalInvFirstName |  Principal Investigator First Name. <br/>Example: 'ADAM'. |        
| principalInvMiddleInitial |  Principal Investigator M.I. <br/>Example: 'M'. |   
| principalInvLastName |  Principal Investigator Last Name. <br/>Example: 'JOY'. |
| altPrincipalInvFirstName |  Alternate Principal Investigator First Name. <br/>Example: 'ADAM'. | 
| altPrincipalInvMiInitial |  Alternate Principal Investigator M.I. <br/>Example: 'X'. |  
| altPrincipalInvLastName |  Alternate Principal Investigator Last Name. <br/>Example: 'JOY'. |
| closeOutPr |  Close Out PR. <br/>Example: 'N'. | 
| advisoryAssistanceServices |  Advisory/Assistance Services Contract. <br/>Example: 'N'. |   
| supportServicesTypeContract |  Support Services Type Contract. <br/>Example: 'N'. |          
| newTechPatentRightsClause |  New Technology or Patent Clause. <br/>Example: 'Y'. |         
| propertyFinancialReporting |  Property Financial Reporting. <br/>Example: 'Y'. |         
| valueEngineeringClause |  Value Engineering Clause. <br/>Example: 'Y'. |         
| securityCode |  Security Code. <br/>Example: 'N'. |         
| isPhysicallyComplete |  Is Physically Complete. <br/>Example: 'N'. |  
| physicalCompletionDate |  Is Physically Complete Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |
| finalInvoicePaidDate |  Final Invoice Paid Date  Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |         
| solicitationIssueDate |  Solicitation Issue Date Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |
| cancellationDate |  Cancellation Date format Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |
| destroyDate |  Destroy Date format  Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |
| nonFederalFundingAmount |  Non Federal Funding Amount. <br/>Example: '0.00'. |          
| cfdaProgramIdentificationNumberCode |  CFDA Program Identification Number Code. <br/>Example: '43.001'. |         
| cfdaProgramIdentificationNumberDesc |  CFDA Program Identification Number Description. <br/>Example: 'SCIENCE-43.001'. |                            
| preparedBy |  Created By. <br/>Example: 'ALEN'. |
| preparedDate |  Created Date format Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'.|
| lastModifiedBy |  Last Modified By. <br/>Example: 'ALEN'. | 
| approvedBy |  Approved By. <br/>Example: 'TEST'. |
| approvedDate |  Approved Date Format:  MM/dd/yyyy. <br/>Example: '02/22/1999' |
| closedBy |  Closed By. <br/>Example: 'DOD_CLOSEOUT'. |          
| closedDate |  Closed Date Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'|
| closedStatus |  Closed Status. <br/>Example: 'Y'. |   
| vendorName |  Vendor Name. <br/>Example: 'ALEN'. |          
| vendorNameAlternate |  Alternate Vendor Name. <br/>Example: 'ADAM'. |          
| vendorLegalOrganizationName |  Vendor Legal Organization Name. <br/>Example: 'TEST'. |          
| doingBusinessAsName |  Doing Business As Name. <br/>Example: 'MSA'. |          
| alaskanNativeCorporation |  Is Alaskan Native Corporation Owned Firm. <br/>Example: 'NO'. |          
| americanIndianOwned |  Is American Indian Owned. <br/>Example: 'NO'. |          
| indianTribe |  Is Indian Tribe (Federally Recognized). <br/>Example: 'NO'. |      
| nativeHawaiianOrganization |  Is Native Hawaiian Organization Owned Firm. <br/>Example: 'NO'. |      
| triballyOwned |  Is Tribally Owned Firm. <br/>Example: 'NO'. | 
| veteranOwned |  Is Veteran Owned Business. <br/>Example: 'NO'. | 
| serviceDisabledVeteranOwned |  Is Service Disabled Veteran Owned Business. <br/>Example: 'NO'. | 
| womenOwned |  Is Woman Owned Business. <br/>Example: 'NO'. |  
| womenOwnedSmall |  Is Women Owned Small Business. <br/>Example: 'NO'. | 
| econoDisadvWomenOwnedSmall |  Is Economically Disadvantaged Women Owned Small Business. <br/>Example: 'NO'. |
| jointVentureWomenOwnedSmall |  Is Joint Venture Women Owned Small Business. <br/>Example: 'NO'. |         
| jointVentureEconoDisadvWomenOwnedSmall |  Is Joint Venture Economically Disadvantaged Women Owned Small Business. <br/>Example: 'NO'. |        
| minorityOwned |  Is Minority Owned Business. <br/>Example: 'NO'. |      
| subcontinentAsianAmericanOwned |  Is Subcontinent Asian (AsianIndian) American Owned. <br/>Example: 'NO'. |
| asianPacificAmericanOwned |  Is AsianPacific American Owned. <br/>Example: 'NO'. | 
| blackAmericanOwned |  Is Black American Owned. <br/>Example: 'NO'. |         
| hispanicAmericanOwned |  Is Hispanic American Owned. <br/>Example: 'NO'. |
| nativeAmericanOwned |  Is Native American Owned. <br/>Example: 'NO'. | 
| otherMinorityOwned |  Is Other Minority Owned. <br/>Example: 'NO'. |  
| verySmallBusiness |  Is Very Small Business. <br/>Example: 'NO'. | 
| communityDevCorpOwned |  Is Community Development Corporation Owned Firm. <br/>Example: 'NO'. |
| laborSurplusArea |  Is Labor Surplus Area Firm. <br/>Example: 'NO'. |
| usFederalGovernment |  Is U.S. Federal Government. <br/>Example: 'NO'. |
| federallyFundedR&DCorp |  Is Federally Funded Research and Development Corp. <br/>Example: 'NO'. |
| federalAgency |  Is Federal Agency. <br/>Example: 'NO'. |
| usStateGovernment |  Is U.S. State Government. <br/>Example: 'NO'. |
| usLocalGovernment |  Is U.S. Local Government. <br/>Example: 'NO'. |
| city |  Is City U.S. Local Government. <br/>Example: 'NO'. | 
| county |  Is County U.S. Local Government. <br/>Example: 'NO'. | 
| interMunicipal |  Is InterMunicipal U.S. Local Government. <br/>Example: 'NO'. | 
| localGovernmentOwned |  Is Local Government Owned U.S. Local Government. <br/>Example: 'NO'. |
| municipality |  Is Municipality U.S. Local Government. <br/>Example: 'NO'. |			
| schoolDistrict |  Is School District U.S. Local Government. <br/>Example: 'NO'. |          
| township |  Is Township U.S. Local Government. <br/>Example: 'YES'. |          
| usTribalGovernment |  Is U.S. Tribal Government. <br/>Example: 'NO'. |        
| foreignGovernment |  Is Foreign Government. <br/>Example: 'YES'. |         
| corpEntityNotTaxExempt |  Is Corporate Entity Not Tax Exempt. <br/>Example: 'NO'. |         
| corpEntityTaxExempt |  Is Corporate Entity Tax Exempt. <br/>Example: 'NO'. |         
| partnershipOrLlp |  Is Partnership or Limited Liability Partnership. <br/>Example: 'NO'. |         
| soleProprietorship |  Is Sole Proprietorship. <br/>Example: 'YES'. |          
| smallAgriculturalCooperative |  Is Small Agricultural Cooperative. <br/>Example: 'NO'. |         
| internationalOrganization |  Is International Organization. <br/>Example: 'YES'. |         
| usGovernmentEntity |  Is US Government Entity. <br/>Example: 'YES'. |         
| communityDevelopmentCorp |  Is Community Development Corporation. <br/>Example: 'NO'. |        
| domesticShelter |  Is Domestic Shelter. <br/>Example: 'NO'. |         
| educationalInstitution |  Is Educational Institution. <br/>Example: 'YES'. |			
| foundation |  Is Foundation. <br/>Example: 'NO'. |         
| hospital |  Is Hospital. <br/>Example: 'YES'. |         
| manufacturerOfGoods |  Is Manufacturer Of Goods. <br/>Example: 'NO'. |          
| veterinaryHospital |  Is Veterinary Hospital. <br/>Example: 'NO'. |         
| hispanicServicingInstitution |  Is Hispanic Servicing Institution. <br/>Example: 'NO'. |         
| contracts |  Receives Contracts. <br/>Example: 'NO'. |         
| grants |  Receives Grants. <br/>Example: 'YES'. |         
| contractsGrants |  Receives Contracts and Grants. <br/>Example: 'YES'. |         
| airportAuthority |  Is Airport Authority. <br/>Example: 'NO'. |          
| councilOfGovernments |  Is Council of Governments. <br/>Example: 'YES'. |        
| housingPublicOrTribal |  Is Housing Authorities Public/Tribal. <br/>Example: 'YES'. |         
| interstateEntity |  Is Interstate Entity. <br/>Example: 'NO'. |         
| planningCommission |  Is Planning Commission. <br/>Example: 'YES'. |         
| portAuthority |  Is Port Authority. <br/>Example: 'YES'. |          
| transitAuthority |  Is Transit Authority. <br/>Example: 'NO'. |         
| subchapterSCorporation |  Is Subchapter S Corporation. <br/>Example: 'NO'. |         
| limitedLiabilityCorporation |  Is Limited Liability Corporation. <br/>Example: 'NO'. |         
| foreignOwnedAndLocated |  Foreign Owned And Located. <br/>Example: 'YES'. |         
| forProfitOrganization |  Is For Profit Organization. <br/>Example: 'NO'. |          
| nonprofitOrganization |  Is Non Profit Organization. <br/>Example: 'NO'. |          
| otherNotForProfitOrganization |  Is Other Not For Profit Organization. <br/>Example: 'NO'. |         
| shelteredWorkshop |  Is Sheltered Workshop. <br/>Example: 'NO'. |         
| stateOfIncorporation |  State Of Incorporation. <br/>Example: 'YES'. |         
| countryOfIncorporation |  Country Of Incorporation. <br/>Example: 'NO'. |         
| organizationType |  Organization Type. <br/>Example: 'PARTNERSHIP'. |         
| landGrantCollege1862 |  Is 1862 Land Grant College. <br/>Example: 'YES'. |         
| landGrantCollege1890 |  Is 1890 Land Grant College. <br/>Example: 'NO'. |         
| landGrantCollege1994 |  Is 1994 LandGrant College. <br/>Example: 'NO'. |          
| historicBlackCollegeUniv |  Is Historically Black College or University (HBCU). <br/>Example: 'NO'. |         
| minorityInstitution |  Is Minority Institutions. <br/>Example: 'NO'. |          
| privateUniversityOrCollege |  Is Private University Or College. <br/>Example: 'NO'. |         
| schoolOfForestry |  Is School of Forestry. <br/>Example: 'NO'. |         
| higherLearning |  Is State Controlled Institution of Higher Learning. <br/>Example: 'NO'. |        
| tribalCollege |  Is Tribal College. <br/>Example: 'NO'. |         
| veterinaryCollege |  Is Veterinary College. <br/>Example: 'NO'. | 
| alaskanNativeServicingInstitution | Is Alaskan Native Servicing Institution. <br/>Example: 'NO'. |        
| nativeHawaiianServicingInstitution |  Is Native Hawaiian Servicing Institution. <br/>Example: 'NO'. |          
| dotCertifiedDisadvBusiness | Is DoT Certified Disadvantaged Business Enterprise. <br/>Example: 'No'. |         
| selfCertifiedSmallDisadvBusiness |  Is SelfCertified Small Disadvantaged Business. <br/>Example: 'NO'. |         
| sbaCertifiedSmallDisadvBusiness |  Is SBA Certified Small Disadvantaged Business. <br/>Example: 'YES'. |          
| sbaCertified8a |  Is SBA Certified 8(a) Program Participant. <br/>Example: 'NO'. |         
| sbaCertifiedHubZone |  Is SBA Certified Hub Zone firm. <br/>Example: 'No'. |          
| sbaCertified8aJointVenture | Is SBA Certified 8(a) Joint Venture. <br/>Example: 'NO'. |         
| vendorAddressLine1 |  Vendor Address Line1. <br/>Example: '1 COCA COLA '. |          
| vendorAddressLine2 |  Vendor Address Line2. <br/>Example: 'COCA COLA PLZ'. |          
| vendorAddressLine3 |  Vendor Address Line3. <br/>Example: 'st'. |        
| vendorCity |  Vendor City. <br/>Example: 'ATLANTA'. |          
| vendorState |  Vendor State. <br/>Example: 'GEORGIA'. |         
| vendorZipCode |  Vendor ZipCode. <br/>Example: '303132499'. |         
| vendorCountryCode |  Vendor Country Code. <br/>Example: 'USA'. |          
| vendorPhoneNumber |  Vendor Phone Number. <br/>Example: '9999999999'. |          
| vendorFaxNumber |  Vendor Fax Number. <br/>Example: '9999999999'. |          
| vendorCongressionalDistrict |  Vendor Congressional District. <br/>Example: '05'. |          
| selfCertifiedHubZoneJointVenture |  SelfCertified Hub Zone Joint Venture. <br/>Example: 'NO'. |         
| vendorStateCode |  Vendor state code. <br/>Example: 'GA'. |
| vendorCountry| Vendor country name . <br/>Example: 'UNITED STATES'. | 
| cageCode |  CAGE Code. <br/>Example: '00000'. |  
| globalDunsNumber |  Global Parent DUNS Number. <br/>Example: '0000000000000'. |         
| globalVendorName |  Global Parent DUNS Name. <br/>Example: 'XYZ COMPANY'. |
| vendorRegistrationDate |  Vendor Registration Date Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |
| vendorRenewalDate |  Vendor Renewal Date  format Format:  MM/dd/yyyy. <br/>Example: '02/22/1999'. |        
| vendorDivisionName |  Vendor Division Name. <br/>Example: 'MEDICAL OFFICE'. |      
| vendorDivisionNumber |  Vendor Division Number. <br/>Example: '1'. |             
| samExceptionCode |  SAM Exception Code. <br/>Example: '1'. |        
| samExceptionDesc |  Sam Exception Description. <br/>Example: 'GOVERNMENT-WIDE COMMERCIAL PURCHASE CARD'. |  
| coBusSizeDeterminationCode |  Contracting Officer's Business Size Selection Code. <br/>Example: 'O'. |    
| coBusSizeDeterminationDesc |  Contracting Officer's Business Size Selection Description. <br/>Example: 'OTHER THAN SMALL BUSINESS'. |
| idvCoBusSizeDeterminationCode |  IDV Contracting Officer Business Size Selection Code. |          
| idvCoBusSizeDeterminationDesc |  IDV Contracting Officer Business Size Selection Description. |         
| idvCoBusSizeDeterminationSourceCode |  IDV Contracting Officer Business Size Selection Source Code. |         
| idvCoBusSizeDeterminationSourceDesc |  IDV Contracting Officer Business Size Selection Source Description. |   
| emailId | User email Id for notification message. <br/>Example: 'test@gsa.gov'.  |
| format | Format of the output. <br/>Example: 'csv'.  |
| includeSections | Parameter is used to provide capability of including selected section/sections in the response. <br/>Example: [dollars].  |
| excludeSections | Parameter is used to provide capability of excluding selected section/sections in the response. <br/>Example: [dollars].  |
| nasaSpecificElements | Parameter to retrieve nasaSpecificElementsInformation section default value is No. <br/>Example: 'Yes'.  |


**Expected Result**

| Name  | Description |
| ---- | ----------- |
| awardOrIdvType (string, optional) | Award Or IDV Type | 
| awardOrIdv (string, optional) | Award Or IDV  | 
| documentType (string, optional) | Document Type  | 
| agencyID (string, optional) | Agency ID  | 
| agencyName (string, optional) | Agency Name  | 
| piid (string, optional) | Procurement Identifier  | 
| modificationNumber (string, optional) | Modification Number  | 
| transactionNumber (int, optional) | Transaction Number  | 
| reasonForModificationCode (string, optional) | Reason For Modification Code  | 
| referencedIDVAgencyID (string, optional) | Referenced IDV Agency ID  | 
| referencedIDVAgencyName (string, optional) | Referenced IDV Agency Name  | 
| referencedIDVPIID (string, optional) | Referenced IDV PIID  | 
| referencedIDVModificationNumber (string, optional) | Referenced IDV Modification Number  | 
| solicitationID (string, optional) | Solicitation ID  | 
| otherAgencyID (string, optional) | Other Agency ID  |
| otherAgencyName (string, optional) | Other Agency Name  | 
| otherPIID (string, optional) | Other PIID  | 
| otherModificationNumber (string, optional) | Other Modification Number  | 
| otherTransactionNumber (string, optional) | Other Transaction Number  | 
| otherReferencedIDVAgencyID (string, optional) | Other Referenced IDV Agency ID  | 
| otherReferencedIDVAgencyName (string, optional) | Other ReferencedI DV Agency Name  | 
| otherReferencedIDVPIID (int, optional) | Other Referenced IDV PIID  | 
| otherReferencedIDVModificationNumber (string, optional) | Other Referenced IDV ModificationNumber  | 
| dateSigned (string, optional) | Date Signed  | 
| effectiveDate (string, optional) | Effective Date  | 
| completionDate (string, optional) | Completion Date  | 
| estimatedUltimateCompletionDate (string, optional) | Estimated Ultimate Completion Date  | 
| lastDateToOrder (string, optional) | Last Date To Order  | 
| fiscalYear (string, optional) | Fiscal Year |
| actionObligation (BigDecimal, optional) | ActionObligation  | 
| baseDollarsObligated (BigDecimal, optional) | Base Dollars Obligated  | 
| baseAndExercisedOptionsValue (BigDecimal, optional) | Base And Exercised Options Value  | 
| baseAndAllOptionsValue (BigDecimal, optional) | Base And All Options Value  | 
| totalActionObligation (BigDecimal, optional) | Total Action Obligation  | 
| totalBaseAndExercisedOptionsValue (BigDecimal, optional) | Total Base And Exercised Options Value  | 
| totalBaseAndAllOptionsValue (BigDecimal, optional) | Total Base And All Options Value  | 
| feePaidForUseOfIDV (BigDecimal, optional) | Fee Paid For Use Of IDV  | 
| nonGovernmentDollars (BigDecimal, optional) | Non Government Dollars  | 
| totalNonGovernmentDollars (BigDecimal, optional) | Total Non Government Dollars  | 
| totalEstimatedOrderValue (BigDecimal, optional) | Total Estimated Order Value  | 
| departmentID (string, optional) | Department ID  | 
| departmentName (string, optional) | Department Name  | 
| contractingOfficeAgencyID (string, optional) | Contracting Office Agency ID  | 
| contractingOfficeAgencyName (string, optional) | Contracting Office Agency Name  |
| fundingDepartmentId (string, optional) | Funding Department Id  | 
| fundingDepartmentName (string, optional) | Funding Department Name  | 
| fundingAgencyID (string, optional) | Funding Agency ID  | 
| fundingAgencyName (string, optional) | Funding Agency Name  | 
| fundingOfficeID (string, optional) | Funding Office ID  | 
| fundingOfficeName (string, optional) | Funding Office Name  | 
| foreignFundingCode (string, optional) | Foreign Funding Code  | 
| foreignFundingDescription (string, optional) | Foreign Funding Description  | 
| websiteURL (string, optional) | Website URL  | 
| whoCanUseShortDescription (string, optional) | Who Can Use Short Description  | 
| whoCanUseLongDescription (string, optional) | Who Can Use Long Description  | 
| emailAddress (string, optional) | Email Address  |
| individualOrderCallLimit (BigDecimal, optional) | Individual Order Call Limit  | 
| typeOfFeeForUseOfService (string, optional) | Type Of Fee For Use Of Service  | 
| fixedFeeValue (double, optional) | Fixed Fee Value  | 
| feeRangeLowerValue (double, optional) | Fee Range Lower Value  | 
| feeRangeUpperValue  (double, optional) | Fee Range Upper Value  | 
| orderingProcedure (string, optional) | Ordering Procedure  | 
| contractActionType (string, optional) | Contract Action Type  | 
| part8OrPart13 (string, optional) | Part8 Or Part13  | 
| typeOfContractCode (string, optional) | Type Of Contract Code  | 
| typeOfContractDescription (string, optional) | Type Of Contract Description  | 
| majorProgramCode (string, optional) | Major Program Code  | 
| nationalInterestActionCode (string, optional) | National Interest Action Code  |
| nationalInterestActionDescription (string, optional) | National Interest Action Description  |
| costOrPricingDataCode (string, optional) | Cost Or Pricing Data Code  |
| costOrPricingDataDescription (string, optional) | Cost Or Pricing DataDescription  |
| costAccountingStandardsClauseCode (string, optional) | Cost Accounting Standards Clause Code  |
| costAccountingStandardsClauseDescription (string, optional) | Cost Accounting Standards Clause Description  |
| descriptionOfContractRequirement (string, optional) | Description Of Contract Requirement  |
| inherentlyGovernmentalCode (string, optional) | Inherently Governmental Code  |
| inherentlyGovernmentalDescription (string, optional) | Inherently Governmental Description  |
| gfpCode (string, optional) | GFP Code  |
| gfpDescription (string, optional) | GFP Description  |
| seaTransportationCode (string, optional) | Sea Transportation Code  |
| seaTransportationDescription (string, optional) | Sea Transportation Description  |
| undefinitizedActionCode  (string, optional) | Undefinitized Action Code  |
| undefinitizedActionDescription  (string, optional) | Undefinitized Action Description  |
| consolidatedContractCode  (string, optional) | Consolidated Contract Code  |
| consolidatedContractDescription  (string, optional) | Consolidated Contract Description  |
| performanceBasedServiceAcquisitionCode  (string, optional) | Performance Based Service Acquisition Code  |
| performanceBasedServiceAcquisitionDescription  (string, optional) | Performance Based Service Acquisition Description  |
| multiyearContractCode  (string, optional) | Multi year Contract Code  |
| multiyearContractDescription  (string, optional) | Multi Year Contract Description  | 
| treasuryAccountSymbolAgencyIdentifier  (string, optional) | Treasury Account Symbol Agency Identifier  |
| treasuryAccountSymbolMainAccount  (string, optional) | Treasury Account Symbol Main Account  |
| treasuryAccountSymbolSubAccount  (string, optional) | Treasury Account Symbol Sub Account  | 
| subLevelPrefixCode  (string, optional) | Sub Level Prefix Code  |
| allocationTransferAgencyIdentifier  (string, optional) | Allocation Transfer Agency Identifier  |
| beginningPeriodOfAvailability  (string, optional) | Beginning Period Of Availability  |
| endingPeriodOfAvailability  (string, optional) | Ending Period Of Availability  |
| obligatedAmountTAS  (string, optional) | Obligated Amount TAS  |
| initiative  (string, optional) | Initiative  |
| referencedIDVPart8OrPart13  (string, optional) | Referenced IDV Part8 Or Part13  |
| referencedIDVMultipleOrSingle  (string, optional) | Referenced IDV Multiple Or Single  |
| referencedIDVTypeCode  (string, optional) | Referenced IDV Type Code  |
| referencedIDVTypeDescription  (string, optional) | Referenced IDV Type Description  |
| typeOfIDCCode  (string, optional) | Type Of IDC Code  |
| typeOfIDCDescription  (string, optional) | Type Of IDC Description  |
| multipleOrSingleAwardIDV  (string, optional) | Multiple Or Single Award IDV  |
| programAcronym  (string, optional) | Program Acronym  |
| contingencyHumanitarianPeacekeepingOperationDescription  (string, optional) | Contingency Humanitarian Peace keeping Operation Description  |
| contractFinancingCode  (string, optional) | Contract Financing Code  |
| contractFinancingDescription  (string, optional) | Contract Financing Description  |
| purchaseCardPaymentMethodCode  (string, optional) | Purchase Card Payment Method Code  |
| purchaseCardPaymentMethodDescription  (string, optional) | Purchase Card Payment Method Description  |
| numberOfActions  (integer, optional) | Number Of Actions  |
| typeOfAgreement  (string, optional) | Type Of Agreement  |
| nontraditionalGovernmentContractorParticipationCode  (string, optional) | Non Traditional Government Contractor Participation Code  |
| nontraditionalGovernmentContractorParticipationDescription  (string, optional) | Non Traditional Government Contractor Participation Description  |
| clingerCohenActCode  (string, optional) | Clinger Cohen Act Code  |
| clingerCohenActDescription  (string, optional) | Clinger Cohen Act Description  |
| walshHealeyActCode  (string, optional) | Walsh Healey Act Code(Pre-V1.5)/ materialsSuppliesArticlesEquipCode (V1.5).  |
| walshHealeyActDescription  (string, optional) | Walsh Healey Act Description(Pre-V1.5)/ materialsSuppliesArticlesEquipDescription (V1.5).  |
| serviceContractActCode  (string, optional) | Service Contract Act Code(Pre-V1.5)/ laborStandardsCode (V1.5)  |
| serviceContractActDescription  (string, optional) | Service Contract Act Description(Pre-V1.5)/ laborStandardsDescription (V1.5)  |
| davisBaconActCode  (string, optional) | DavisBacon Act Code(Pre-V1.5)/ constructionWageRateReqsCode (V1.5)  |
| davisBaconActDescription  (string, optional) | DavisBacon Act Description(Pre-V1.5)/ constructionWageRateReqsDescription (V1.5).  |
| additionalReportingCode  (string, optional) | Additional Reporting Code  |
| additionalReportingDescription  (string, optional) | Additional Reporting Description  |
| interagencyContractingAuthorityCode  (string, optional) | Interagency Contracting Authority Code  |
| interagencyContractingAuthorityDescription  (string, optional) | Interagency Contracting Authority Description  |
| otherInteragencyContractingStatutoryAuthority  (string, optional) | Other Interagency Contracting Statutory Authority  |
| productOrServiceCode  (string, optional) | Product Or Service Code  |
| productOrService  (string, optional) | Product Or Service  |
| productOrServiceDescription  (string, optional) | Product Or Service Description  |
| bundledContractCode  (string, optional) | Bundled Contract Code  |
| bundledContractDescription  (string, optional) | Bundled Contract Description  |
| claimantProgramDescription  (string, optional) | Claimant Program Description  |
| principalNAICSCode  (string, optional) | Principal NAICS Code  |
| principalNAICSDescription  (string, optional) | Principal NAICS Description  |
| naicsSourceCode (string, optional) | NAICS Source Code  |
| naicsSourceDescription  (string, optional) | NAICS Source Description  |
| idvNAICSCode  (string, optional) | IDV NAICS Code  |
| idvNAICSDescription  (string, optional) | IDV NAICS Description  |
| recoveredMaterialsSustainabilityCode  (string, optional) | Recovered Materials Sustainability Code  |
| recoveredMaterialsSustainabilityDescription  (string, optional) | Recovered Materials Sustainability Description  |
| domesticOrForeignEntityCode  (string, optional) | Domestic Or Foreign Entity Code  |
| domesticOrForeignEntityDescription  (string, optional) | Domestic Or Foreign Entity Description  |
| dodAcquisitionProgramCode (string, optional) | DOD Acquisition Program Code  |
| dodAcquisitionProgramDescription  (string, optional) | DOD Acquisition Program Description  |
| infoTechCommercialItemCategoryCode  (string, optional) | InfoTech Commercial Item Category Code  |
| infoTechCommercialItemCategoryDescription  (string, optional) | InfoTech Commercial Item Category Description  |
| useOfEPADesignatedCode  (string, optional) | Use Of EPA Designated Code  |
| useOfEPADesignatedDescription  (string, optional) | Use Of EPA Designated Description  |
| countryOfProductOrServiceOriginCode  (string, optional) | Country Of Product Or Service Origin Code  |
| countryOfProductOrServiceOriginDescription  (string, optional) | Country Of Product Or Service Origin Description  |
| placeOfManufactureCode  (string, optional) | Place Of Manufacture Code  |
| placeOfManufactureDescription  (string, optional) | Place Of Manufacture Description  |
| vendorName  (string, optional) | Vendor Name  |
| vendorAlternateName  (string, optional) | Vendor Alternate Name  |
| vendorLegalOrganizationName  (string, optional) | Vendor Legal Organization Name  |
| doingBusinessAsName  (string, optional) | Doing Business As Name  |
| isAlaskanNativeCorporationOwnedFirm  (string, optional) | Is Alaskan Native Corporation Owned Firm  |
| isAmericanIndianOwned  (string, optional) | Is American Indian Owned  |
| isIndianTribe  (string, optional) | Is Indian Tribe  |
| isNativeHawaiianOrganizationOwnedFirm  (string, optional) | Is Native Hawaiian Organization Owned Firm  |
| isTriballyOwnedFirm  (string, optional) | Is Tribally Owned Firm  |
| isVeteranOwnedBusiness  (string, optional) | Is Veteran Owned Business  |
| isServiceDisabledVeteranOwnedBusiness  (string, optional) | Is Service Disabled Veteran Owned Business  |
| isWomenOwnedBusiness(string, optional) | Is Women Owned Business  |
| isWomenOwnedSmallBusiness  (string, optional) | Is Women Owned Small Business  |
| isEconomicallyDisadvantagedWomenOwnedSmallBusiness  (string, optional) | Is Economically Disadvantaged Women Owned Small Business  |
| isJointVentureWomenOwnedSmallBusiness  (string, optional) | Is Joint Venture Women Owned Small Business  |
| isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness  (string, optional) | Is Joint Venture Economically Disadvantaged Women Owned Small Business  |
| isMinorityOwnedBusiness  (string, optional) | Is Minority Owned Business  |
| isSubcontinentAsianAmericanOwned  (string, optional) | Is Subcontinent Asian American Owned  |
| isAsianPacificAmericanOwned  (string, optional) | Is Asian Pacific American Owned  |
| isBlackAmericanOwned  (string, optional) | Is Black American Owned  |
| isHispanicAmericanOwned  (string, optional) | Is Hispanic American Owned  |
| isNativeAmericanOwned  (string, optional) | Is Native American Owned  |
| isOtherMinorityOwned  (string, optional) | Is Other Minority Owned  |
| isVerySmallBusiness  (string, optional) | Is Very Small Business  |
| isCommunityDevelopmentCorporationOwnedFirm  (string, optional) | Is Community Development Corporation Owned Firm  |
| isLaborSurplusAreaFirm  (string, optional) | Is Labor Surplus Area Firm  |
| isUSFederalGovernment  (string, optional) | Is US Federal Government  |
| isFederallyFundedResearchAndDevelopmentCorporation(string, optional) | Is Federally Funded Research And Development Corporation  |
| isFederalAgency  (string, optional) | Is Federal Agency  |
| isUSStateGovernment  (string, optional) | Is US State Government  |
| isUSLocalGovernment  (string, optional) | Is US Local Government  |
| isCityUSLocalGovernment  (string, optional) | Is City US Local Government  |
| isCountyUSLocalGovernment  (string, optional) | Is County US Local Government  |
| isInterMunicipalUSLocalGovernment  (string, optional) | Is Inter Municipal US Local Government  |
| isLocalGovernmentOwnedUSLocalGovernment  (string, optional) | Is Local Government Owned US Local Government  |
| isMunicipalityUSLocalGovernment  (string, optional) | Is Municipality US Local Government  |
| isSchoolDistrictUSLocalGovernment  (string, optional) | Is School District US Local Government  |
| isTownshipUSLocalGovernment  (string, optional) | Is Township US Local Government  |
| isUSTribalGovernment  (string, optional) | Is US Tribal Government  |
| isForeignGovernment  (string, optional) | Is Foreign Government  |
| isCorporateEntityNotTaxExempt  (string, optional) | Is Corporate Entity Not Tax Exempt  |
| isCorporateEntityTaxExempt  (string, optional) | Is Corporate Entity Tax Exempt  |
| isPartnershipOrLimitedLiabilityPartnership  (string, optional) | Is Partnership Or Limited Liability Partnership  |
| isSoleProprietorship  (string, optional) | Is Sole Proprietorship  |
| isSmallAgriculturalCooperative  (string, optional) | Is Small Agricultural Cooperative  |
| isInternationalOrganization  (string, optional) | Is International Organization  |
| isUSGovernmentEntity  (string, optional) | Is US Government Entity  |
| isCommunityDevelopmentCorporation  (string, optional) | Is Community Development Corporation  |
| isDomesticShelter (string, optional) | Is Domestic Shelter  |
| isEducationalInstitution  (string, optional) | Is Educational Institution  |
| isFoundation  (string, optional) | Is Foundation  |
| isHospital  (string, optional) | Is Hospital  |
| isManufacturerOfGoods  (string, optional) | Is Manufacturer Of Goods  |
| isVeterinaryHospital  (string, optional) | Is Veterinary Hospital  |
| isHispanicServicingInstitution  (string, optional) | Is Hispanic Servicing Institution  |
| receivesContracts  (string, optional) | Receives Contracts  |
| receivesGrants  (string, optional) | Receives Grants  |
| receivesContractsAndGrants  (string, optional) | Receives Contracts And Grants  |
| isAirportAuthority  (string, optional) | Is Airport Authority  |
| isCouncilOfGovernments  (string, optional) | Is Council Of Governments  |
| isHousingAuthoritiesPublicTribal  (string, optional) | Is Housing Authorities Public Tribal  |
| isInterstateEntity  (string, optional) | Is Interstate Entity  |
| isPlanningCommission(string, optional) | Is Planning Commission  |
| isPortAuthority  (string, optional) | Is Port Authority  |
| isTransitAuthority  (string, optional) | Is Transit Authority  |
| isSubchapterSCorporation  (string, optional) | Is Subchapter SCorporation  |
| isLimitedLiabilityCorporation  (string, optional) | Is Limited Liability Corporation  |
| isForeignOwned  (string, optional) | Is Foreign Owned  |
| isForProfitOrganization  (string, optional) | Is For Profit Organization  |
| isForNonProfitOrganization  (string, optional) | Is For Non Profit Organization  |
| isOtherNotForProfitOrganization  (string, optional) | Is Other Not For Profit Organization  |
| isShelteredWorkshop  (string, optional) | Is Sheltered Workshop  |
| stateOfIncorporation  (string, optional) | State Of Incorporation  |
| countryOfIncorporation  (string, optional) | Country Of Incorporation  |
| organizationType  (string, optional) | Organization Type  |
| is1862LandGrantCollege  (string, optional) | Is 1862 Land Grant College  |
| is1890LandGrantCollege  (string, optional) | Is 1890 Land Grant College  |
| is1994LandGrantCollege  (string, optional) | Is 1994 Land Grant College  |
| isHistoricallyBlackCollegeOrUniversity  (string, optional) | Is Historically Black College Or University  |
| isMinorityInstitutions  (string, optional) | Is Minority Institutions  |
| isPrivateUniversityOrCollege  (string, optional) | Is Private University Or College  |
| isSchoolOfForestry  (string, optional) | Is School Of Forestry  |
| isStateControlledInstitutionOfHigherLearning  (string, optional) | Is State Controlled Institution Of Higher Learning  |
| isTribalCollege  (string, optional) | Is Tribal College  |
| isVeterinaryCollege  (string, optional) | Is Veterinary College  |
| isAlaskanNativeServicingInstitution  (string, optional) | Is Alaskan Native Servicing Institution  |
| isNativeHawaiianServicingInstitution  (string, optional) | Is Native Hawaiian Servicing Institution  |
| isDOTCertifiedDisadvantagedBusinessEnterprise  (string, optional) | Is DOT Certified Disadvantaged Business Enterprise  |
| isSelfCertifiedSmallDisadvantagedBusiness  (string, optional) | Is Self Certified Small Disadvantaged Business  |
| isSelfCertifiedHubZoneJointVentureBusiness  (string, optional) | Is Self Certified Hub Zone Joint Venture Business  |
| isSBACertifiedSmallDisadvantagedBusiness  (string, optional) | Is SBA Certified Small Disadvantaged Business  |
| isSBACertified8aProgramParticipant  (string, optional) | Is SBA Certified 8a Program Participant  |
| isSBACertifiedHUBZoneFirm  (string, optional) | Is SBA Certified HUB Zone Firm  |
| isSBACertified8aJointVenture  (string, optional) | Is SBA Certified 8a Joint Venture  |
| streetAddress1  (string, optional) | Street Address 1  |
| streetAddress2  (string, optional) | Street Address 2  |
| streetAddress3  (string, optional) | Street Address 3  |
| city(string, optional) | City  |
| stateCode  (string, optional) | State Code  |
| state  (string, optional) | State  |
| zipCode  (string, optional) | Zip Code  |
| countryCode (string, optional) | Country Code  |
| countryName  (string, optional) | Country Name  |
| phoneNumber  (string, optional) | Phone Number  |
| faxNumber  (string, optional) | Fax Number  |
| congressionalDistrict  (string, optional) | Congressional District  |
| cageCode  (string, optional) | CAGE Code  |
| dunsNumber  (string, optional) | DUNS Number  |
| globalParentDUNSNumber  (string, optional) | Global Parent DUNS Number  |
| globalParentDUNSName  (string, optional) | Global Parent DUNS Name  |
| registrationDate  (string, optional) | Registration Date  |
| renewalDate (string, optional) | Renewal Date  |
| divisionName  (string, optional) | Division Name  |
| divisionNumberOrOfficeCode  (string, optional) | Division Number Or Office Code  |
| samExceptionCode  (string, optional) | SAM Exception Code  |
| samExceptionDescription  (string, optional) | Sam Exception Description  |
| contractingOfficerBusinessSizeSelectionCode  (string, optional) | Contracting Officer Business Size Selection Code  |
| contractingOfficerBusinessSizeSelectionDescription  (string, optional) | Contracting Officer Business Size Selection Description  |
| idvContractingOfficerBusinessSizeDeterminationCode  (string, optional) | IDV Contracting Officer Business Size Determination Code  |
| idvContractingOfficerBusinessSizeSelectionDescription  (string, optional) | IDV Contracting Officer Business Size Selection Description  |
| idvContractingOfficerBusinessSizeDeterminationSourceCode  (string, optional) | IDV Contracting Officer Business Size Determination Source Code  |
| idvContractingOfficerBusinessSizeDeterminationSourceDescription  (string, optional) | IDV Contracting Officer Business Size Determination Source Description  |
| principalPlaceOfPerformanceLocationCode  (string, optional) | Principal Place Of Performance Location Code  |
| principalPlaceOfPerformanceLocationName  (string, optional) | Principal Place  OfPerformance Location Name  |
| principalPlaceOfPerformanceStateCode  (string, optional) | Principal Place Of Performance State Code  |
| principalPlaceOfPerformanceStateName  (string, optional) | Principal Place Of Performance State Name  |
| principalPlaceOfPerformanceCountryCode  (string, optional) | Principal Place Of Performance Country Code  |
| principalPlaceOfPerformanceCountryName  (string, optional) | Principal Place Of Performance Country Name  |
| principalPlaceOfPerformanceZipCode  (string, optional) | Principal Place Of Performance Zip Code  |
| principalPlaceOfPerformanceCountyCode  (string, optional) | Principal Place Of Performance County Code  |
| principalPlaceOfPerformanceCountyDescription  (string, optional) | Principal Place Of Performance County Description  |
| principalPlaceOfPerformanceCongressionalDistrict  (string, optional) | Principal Place Of Performance Congressional District  |
| extentCompetedCode  (string, optional) | Extent Competed Code  |
| extentCompetedDescription  (string, optional) | Extent Competed Description  |
| solicitationProceduresCode  (string, optional) | Solicitation Procedures Code  |
| solicitationProceduresDescription  (string, optional) | Solicitation Procedures Description  |
| typeOfSetAsideCode  (string, optional) | Type Of Set Aside Code  |
| typeOfSetAsideDescription  (string, optional) | Type Of SetAside Description  |
| typeOfSetAsideSourceCode  (string, optional) | Type Of SetAside Source Code  |
| typeOfSetAsideSourceDescription  (string, optional) | Type Of SetAside Source Description  |
| idvTypeOfSetAsideCode  (string, optional) | IDV Type Of SetAside Code  |
| idvTypeOfSetAsideDescription  (string, optional) | IDV Type Of SetAside Description  |
| evaluatedPreferenceCode  (string, optional) | Evaluated Preference Code  |
| evaluatedPreferenceDescription  (string, optional) | Evaluated Preference Description  |
| sbirSTTRCode  (string, optional) | SBIRSTTR Code  |
| sbirSTTRDescription  (string, optional) | SBIRSTTR Description  |
| fairOpportunityLimitedSourcesCode  (string, optional) | Fair Opportunity Limited Sources Code  |
| fairOpportunityLimitedSourcesDescription  (string, optional) | Fair Opportunity Limited Sources Description  |
| otherThanFullAndOpenCompetitionCode  (string, optional) | Other Than Full And Open Competition Code  |
| otherThanFullAndOpenCompetitionDescription  (string, optional) | Other Than Full And Open Competition Description  |
| numberOfOffersReceived  (integer, optional) | Number Of Offers Received  |
| numberOfOffersSourceCode  (string, optional) | Number Of Offers SourceCode  |
| numberOfOffersSourceDescription  (string, optional) | Number Of Offers Source Description  |
| idvNumberOfOffers  (string, optional) | IDV Number Of Offers  |
| commercialItemAcquisitionProceduresCode  (string, optional) | Commercial Item Acquisition Procedures Code  |
| commercialItemAcquisitionProceduresDescription  (string, optional) | Commercial Item Acquisition Procedures Description  |
| simplifiedProceduresForCertainCommercialItemsCode  (string, optional) | Simplified Procedures For Certain Commercial Items Code  |
| simplifiedProceduresForCertainCommercialItemsDescription  (string, optional) | Simplified Procedures For Certain Commercial Items Description  |
| smallBusinessCompetitivenessDemonstrationProgram  (string, optional) | Small Business Competitiveness Demonstration Program  |
| a76ActionCode  (string, optional) | a76 Action Code  |
| a76ActionDescription  (string, optional) | a76 Action Description  |
| fedBizOppsCode  (string, optional) | FedBizOpps Code  |
| fedBizOppsDescription  (string, optional) | FedBizOpps Description  |
| localAreaSetAsideCode  (string, optional) | Local Area SetAside Code  |
| localAreaSetAsideDescription  (string, optional) | Local Area SetAside Description  |
| preAwardSynopsis  (string, optional) | Pre Award Synopsis  |
| priceEvaluationPercentDifference  (long, optional) |  Price Evaluation Percent Difference  |
| synopsisWaiverException  (string, optional) | Synopsis Waiver Exception  |
| alternativeAdvertising  (string, optional) | Alternative Advertising  |
| subcontractPlanCode  (string, optional) | Sub Contract Plan Code  |
| subcontractPlanDescription  (string, optional) | Sub Contract Plan Description  |
| reasonNotAwardedToSmallDisadvantagedBusinessCode  (string, optional) | Reason Not Awarded To Small Disadvantaged Business Code  |
| reasonNotAwardedToSmallDisadvantagedBusinessDescription  (string, optional) | Reason Not Awarded To Small Disadvantaged Business Description  |
| reasonNotAwardedToSmallBusinessCode  (string, optional) | Reason Not Awarded To Small Business Code  |
| reasonNotAwardedToSmallBusinessDescription  (string, optional) | Reason Not Awarded To Small Business Description  |
| offerorsProposalNumber  (string, optional) | Offerors Proposal Number  |
| thePRNumber  (long, optional) | The PRNumber  |
| accessionNumber  (string, optional) | Accession Number  |
| installationUnique  (string, optional) | Installation Unique  |
| administratorCode  (string, optional) | Administrator Code (Pre-V1.5)/ administrativeCo (V1.5)  |
| contractingOfficerCode  (string, optional) | Contracting Officer Code  |
| buyerCode  (string, optional) | Buyer Code  |
| organizationCode  (string, optional) | Organization Code (Pre-V1.5)/ corOrganizationCode (V1.5)  |
| theCOTRName  (string, optional) | The COTRName (Pre-V1.5)/ theCORName (V1.5)  |
| alternateCOTRName  (string, optional) | Alternate COTRName (Pre-V1.5)/ alernateCORName (V1.5)  |
| fundedThroughDate  (string, optional) | Funded Through Date  |
| contractFundCode  (string, optional) | Contract Fund Code  |
| managementReportingRequirements  (string, optional) | Management Reporting Requirements  |
| accountingInstallation  (string, optional) | Accounting Installation  |
| fieldOfScienceOrEngineering  (string, optional) | Field Of Science Or Engineering  |
| blanketDelegation  (string, optional) | Blanket Delegation  |
| closeout  (string, optional) | CloseOut  |
| consentToSubcontract  (string, optional) | Consent To Subcontract  |
| costAccountingStandardsClauseCode  (string, optional) | Cost Accounting Standards Clause Code  |
| engineeringOrProductSurveillance  (string, optional) | Engineering Or Product Surveillance  |
| none  (string, optional) | None  |
| other  (string, optional) | Other  |
| postAwardAudit  (string, optional) | Post Award Audit  |
| propertyAdministration  (string, optional) | Property Administration  |
| qualityAssurance  (string, optional) | Quality Assurance  |
| security  (string, optional) | Security  |
| transportation  (string, optional) | Transportation  |
| principalInvestigatorFirstName  (string, optional) | Principal Investigator FirstName  |
| principalInvestigatorMI  (string, optional) | Principal Investigator MI  |
| principalInvestigatorLastName  (string, optional) | Principal Investigator LastName  |
| alternatePrincipalInvestigatorFirstName  (string, optional) | Alternate Principal Investigator FirstName  |
| alternatePrincipalInvestigatorMI  (string, optional) | Alternate Principal Investigator MI  |
| alternatePrincipalInvestigatorLastName  (string, optional) | Alternate Principal Investigator LastName  |
| closeOutPR  (string, optional) | CloseOut PR  |
| advisoryAssistanceServicesContract  (string, optional) | Advisory Assistance Services Contract  |
| supportServicesTypeContract  (string, optional) | Support Services Type Contract  |
| newTechnologyOrPatentClause  (string, optional) | New Technology Or Patent Clause  |
| propertyFinancialReporting  (string, optional) | Property Financial Reporting  |
| valueEngineeringClause  (string, optional) | Value Engineering Clause  |
| securityCode  (string, optional) | SecurityCode  |
| isPhysicallyComplete  (string, optional) | Is Physically Complete  |
| physicalCompletionDate  (string, optional) | Physical Completion Date  |
| finalInvoicePaidDate  (string, optional) | Final Invoice Paid Date  |
| solicitationIssueDate  (string, optional) | Solicitation Issue Date  |
| cancellationDate  (string, optional) | Cancellation Date  |
| destroyDate  (string, optional) | Destroy Date  |
| nonFederalFundingAmount  (BigDecimal, optional) | NON Federal Funding Amount  |
| cfdaProgramIdentificationNumberCode  (string, optional) | CFDA Program Identification Number Code  |
| cfdaProgramIdentificationNumberDescription  (string, optional) | CFDA Program Identification Number Description  |
| nasaStatutoryAuthority  (string, optional) | NASA Statutory Authority  |
| createdBy  (string, optional) | Created By  |
| createdDate  (string, optional) | Created Date  |
| lastModifiedBy  (string, optional) | Last Modified By  |
| lastModifiedDate  (string, optional) | Last Modified Date  |
| status  (string, optional) | Status  |
| approvedBy  (string, optional) | Approved By  |
| approvedDate  (string, optional) | Approved Date  |
| closedBy  (string, optional) | Closed By  |
| closedDate  (string, optional) | Closed Date  |
| closedStatus  (string, optional) | Closed Status  |

### Awards Extract API

**Endpoint:** https://api.sam.gov/prod/contractdata-extract?api_key=<API Key>&format=<Format Type>&emailId=<a valid email address>

**Description**  Restful endpoint to retrieve Awards data service detail information in the form of csv or json format instead of paginated.

**Query String Parameters**
Same parameters as mentioned above, excluding page and size, apply.

**Expected Result**
Same response as mentioned above applies.

### Additional Functionality

1.  Schema Filtering:
    This Functionality allows users to add or remove sections to get their desired response. includeSections, 
    excludeSections and nasaSpecificElements are the three filters that users can send in the end point.

2.  PSC, NAICS and PIID Aggregation:
    Both the Awards API and the Awards Extract API offer the following additional functionality:
    
    PSC and NAICS Aggregation:
    Users can search by the PSC/NAICS Categories, Sub-Categories or the exact four character PSC or the six digit NAICS via the two filters **productOrServiceCode** and **naicsCode**.<br>
    Example:
    * productOrServiceCode=E* will retrieve records with PSC Codes like E1AB, E1GA, E1PZ, E1LZ, E1NE, E1NA, E163, E241, E294, E232.
    * naicsCode=92* will retrieve records with NAICS Codes like 921190, 922130, 922160, 923130, 924110, 928110.
    
    PIID Aggregation:
    Users can search for an entire Award or IDV PIID family. Search Filters and the Response Header are explained below:<br>
    **Query String Parameters**
    * The mandatory filter, filterName=piidAggregation (piidAggregation is case sensitive).
    * The mandatory filter piid when filterName=piidAggregation.
    * filterName=piidAggregation will accept only one PIID.
    * Optional filters as described above can also be used in the search.
    * Schema Filtering params as described above can also be used in the search
    * filterName=piidAggregation cannot be provided within q
    
    **Expected Result**
    * Award PIIDs will return the following aggregation header    
    
      | Name  | Description |
      | ---- | ----------- |
      | piid (string) | Award PIID  |
      | referencedIDVPIID (string) | Referenced IDV PIID  |
      | modifications (string) | Award Modifications  |
      | totalActionObligation (string) | Total Action Obligation calculated for this Award family  |
      | totalNonGovernmentDollars (string) | Total Non Government Dollars calculated for this Other Transaction Award family  |
    
    * IDV PIIDs will return the following aggregation header      
      
      | Name  | Description |
      | ---- | ----------- |
      | piid (string) | IDV PIID  |
      | referencedIDVPIID (string) | Referenced IDV PIID  |
      | modifications (string) | IDV Modifications  |
      | totalBaseAndAllOptionsValue (string) | Total Base and All Options Value calculated for this IDV family  |
      | ordersOrCalls (string) | Orders Or Calls awarded off of the IDV PIID  |
      | totalDollarsObligatedOnTheOrdersOrCalls (string) | Total Dollars Obligated calculated on the Orders or Calls off of the IDV family  |
      | totalNonGovernmentDollarsObligatedOnTheOrdersOrCalls (BigDecimal) | Total Non Government Dollars calculated for the Orders off of the IDV family  |
    
    **NOTE:**<br>
     Some of the PIIDs (E.g: 0001) have several thousands of records in their families. When such PIIDs are searched, 
     in order for the API performance not to be negatively impacted, API will retrieve only the top 10 records arranged 
     as per the highest number of Modifications. If such PIIDs are to be searched, users must provide additional filters
     to obtain a precise and a finite set of the PIID data.
     
3.  BioBased Functionality:
    * Both the Awards API and Awards Extract API offer search of the Biobased records via filterName=biobased (biobased is not case sensitive). They return Delivery/Task Orders, Purchase Orders, Definitive Contracts, BPA Calls, GWACs and IDCs that are signed on or later than 05/18/2012 AND that have the “Recovered Materials/Sustainability” value as<br>
          E (Bio-based), H (FAR 52.223-4 & bio-based)<br>
          J (FAR 52.223-4 & bio-based & energy efficient)<br>
          K (FAR 52.223-4 & bio-based & environmentally preferable) or <br>
          L (FAR 52.223-4 & bio-based & energy efficient & environmentally preferable).<br>
    * Optional search filters as mentioned above can also be used in the search.
    * Schema Filtering params as described above are not permitted in the Biobased search.      
    
    **Expected Result** 
    
    | Name  | Description |
    | ---- | ----------- |
    | documentType (string) | Document Type |
    | agencyID (string) | Agency ID |
    | agencyName (string) | Agency Name  |
    | piid (string) | PIID  |
    | modificationNumber (string) | Modification Number  |
    | transactionNumber (string) | Transaction Number  |
    | referencedIDVAgencyID (string) | Referenced IDV Agency ID  |
    | referencedIDVPIID (string) | Referenced IDV PIID  |
    | referencedIDVModificationNumber (string) | Referenced IDV Modification Number  |
    | dateSigned (string) | Date Signed  |
    | completionDate (string) | Completion Date  |
    | baseAndAllOptionsValue (BigDecimal) | Base And All Options Value  |
    | totalActionObligation (BigDecimal) | Total Action Obligation  |
    | contractingOfficeAgencyID (string) | Contracting Office Agency ID  |
    | contractingOfficeAgencyName (string) | Contracting Office Agency Name  | 
    | fundingAgencyID (string) | Funding Agency ID  |
    | fundingAgencyName (string) | Funding Agency Name  |
    | contractActionType (string) | Contract Action Type  |
    | typeOfContractCode (string) | Type Of Contract Code  |
    | typeOfContractDescription (string) | Type Of Contract Description  |
    | productOrServiceCode (string) | Product Or Service Code  |
    | productOrService (string) | Product Or Service  |
    | productOrServiceDescription (string) | Product Or Service Description  |
    | recoveredMaterialsSustainabilityCode (string) | Recovered Materials Sustainability Code  |
    | recoveredMaterialsSustainabilityDescription (string) | Recovered Materials Sustainability Description  |
    | vendorName (string) | Vendor Name  |
    | contractingOfficerBusinessSizeSelectionCode (string) | Contracting Officer Business Size Selection Code  |
    | contractingOfficerBusinessSizeSelectionDescription (string) | Contracting Officer Business Size Selection Description |
    | principalPlaceOfPerformanceLocationName (string) | Principal Place Of Performance Location Name |
    | principalPlaceOfPerformanceStateName (string) | Principal Place Of Performance State Name |
    | principalPlaceOfPerformanceCountryCode (string) | Principal Place Of Performance Country Code |
    | principalPlaceOfPerformanceCountryName (string) | Principal Place Of Performance Country Name |
    | principalPlaceOfPerformanceZipCode (string) | Principal Place Of Performance Zip Code |
    | principalPlaceOfPerformanceCountyCode (string) | Principal Place Of Performance County Code |
    | principalPlaceOfPerformanceCountyDescription (string) | Principal Place Of Performance County Description |

4.  Closeout Functionality:
    Both the Awards API and Awards Extract API offer search of the Closed records via filterName=closeout (closeout is not case sensitive).
    * Optional search filters as mentioned above can also be used in the search.
    * Schema Filtering params as described above are not permitted in the Closeout search.
    
    **Expected Result** 
    
    | Name  | Description |
    | ---- | ----------- |
    | documentType (string) | Document Type |
    | agencyID (string) | Agency ID |
    | agencyName (string) | Agency Name |
    | piid (string) | PIID |
    | modificationNumber (string) | Modification Number |
    | transactionNumber (string) | Transaction Number |
    | referencedIDVAgencyID (string) | Referenced IDV Agency ID |
    | referencedIDVPIID (string) | Referenced IDV PIID. |
    | referencedIDVModificationNumber (string) | Referenced IDV Modification Number |
    | dateSigned (string) | Date Signed |
    | lastModifiedDate (string) | Last Modified Date |
    | closedBy  (string, optional) | Closed By |
    | closedDate  (string, optional) | Closed Date |
    | closedStatus  (string, optional) | Closed Status |
         
<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.yaml">Open API specification file for the Awards API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br>  * For date search, both FROM and TO should be provided (Only Applicable for Last Modified Date and Date Signed). <br><br>  * Date range between FROM and TO cannot exceed 5 years (Only Applicable for Last Modified Date). <br><br>  * Invalid Input Parameters (Only Applicable for incorrect filter name). <br><br>  * The value null/empty is not valid for parameter Query Param (q). <br><br>  * The parameters: filterName, includeSections, excludeSections, or nasaSpecificElements are not permitted inside Query Param(q). <br><br>  * Schema filtering param contains invalid value (Valid values for the Schema Filtering are includeSections, excludeSections, or nasaSpecificElements). <br><br>  * User entered values for includeSections, excludeSection should be specified in [] (Only Applicable if the value for the Schema Filtering params is not provided within []). <br><br>  * Please specify a valid value for nasaSpecificElements (Valid values are YES/NO). <br><br> * nasaSpecificElements can't be specified multiple times. <br><br>  * both excludeSections and includeSections can't be specified. <br><br>  * Please provide the filter piid in conjunction with filterName=piidAggregation. <br><br>  * total number of records exceeded the maximum allowable limit: 1000000. <br><br> * Extract File Generation is Still in Progress. <br><br> * Requested File is Expired and cannot be downloaded. <br><br> * Extract File Not Found and we are not able to process your request. <br><br>  * The value null is not valid for parameter filterName. <br><br>  * The parameter filterName can only be sent once in the request URL. <br><br>  * The parameters: includeSections, excludeSections, or nasaSpecificElements are not permitted in conjunction with the parameter filterName. <br><br>  * The parameters: recoveredMaterialClauses and recoveredMaterialClsDesc are not permitted in conjunction with the value biobased for parameter filterName. <br><br>  * The parameters: closedStatus and modificationNumber are not permitted in conjunction with the value closeout for parameter filterName.  |                                                                                                                                                                                                                                                                                                                                                                                           
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>
