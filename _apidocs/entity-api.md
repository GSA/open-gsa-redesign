---
title: Entity API
banner-heading: Entity API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
Entity Management API will allow users to request Entity Information based on various request parameters. 
The response will be provided in the JSON format in the paginated manner. 


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Entity Management API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/entity-management?api_key=< value >
* https://api-alpha.sam.gov/prodlike/entity-management?api_key=< value >

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.


<p><small><a href="#">Back to top</a></small></p>

## API Description

**Endpoint:** https://api.sam.gov/prod/entity-management?api_key=< value >

**Description** Restful endpoint to retrieve Entity detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| activationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&activationDate=02/12/1999' |
| cageCode | The exact 5 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&cageCode=00000' |
| dbaName | Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&dbaName=ALLTEL' |
| delinquentFederalDebtFlag | It can contain just Y or N or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&delinquentFederalDebtFlag=Y' |
| disasterRegistry | It can contain just YES or NO or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&disasterRegistry=YES' |
| dodaac | It can contain just 9 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&dodaac=025114695' |
| duns  | It can contain just 9 digit value, a maximum of up to 100 values can be sent.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&duns=025114695' |
| entityStructure  | It can contain just 2 character code or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&entityStructure=Z1' |
| exclusionStatusFlag | It can contain just D or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&exclusionStatusFlag=D' |
| expirationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&expirationDate=02/12/1999' |
| legalBusinessName | It can contain just Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&legalBusinessName=ALLTEL ' |
| primaryNaics | It can contain just 6 digit NAICS, accepts multiple NAICS.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&primaryNaics=51331' |
| purposeOfRegistration | It can contain just 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&purposeOfRegistration=Z2' |
| registrationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&registrationDate=02/12/1999' |
| physicalAddressCity | City name.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCity=Herndon' |
| physicalAddressCongressionalDistrict | It can contain 2 characters.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCongressionalDistrict=AR' |
| physicalAddressCountryCode | It can contain just 3 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCountryCode=USA' |
| physicalAddressProvinceOrState  | It can contain just 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samProvinceOrState=AR' |
| physicalAddressZipPostalCode | It can contain just 5 digit zip code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samZipPostalCode=022011' |
| samExtractCode  | It can contain just 1 character code (A or E).<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samExtractCode=A' |
| includeSections | It can contain just values of section name (coreData, assertions, repsAndCerts, mandatoryPOCs, optionalPOCs).<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&includeSections=[coreData]' |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| duns (string, optional) | DUNS | 
| dunsPlus4 (string, optional) | DUNS Plus4  | 
| cageCode (string, optional) | Cage Code | 
| nCageCode (string, optional) | NCage Code  |
| dodaac (string, optional) | DoDacc  |
| legalBusinessName (string, optional) | Legal Business Name   |
| dbaName (string, optional) | Dba Name   |
| purposeOfRegistration (string, optional) | Purpose Of Registration   |
| registrationStatus (string, optional) | Registration Status  | 
| registrationDate (string, optional) | Registration Date  | 
| lastUpdateDate (string, optional) | Last Update Date | 
| expirationDate (string, optional) | Expiration Date  | 
| activeDate (string, optional) | Active Date   |
| noPublicDisplayFlag (string, optional) | No Public Display Flag   |
| exclusionStatusFlag (string, optional) | Exclusion Status Flag   |
| corporateURL (string, optional) | Corporate URL   |
| companyDivisionName (string, optional) | Company Division Name  |
| companyDivisionNumber (string, optional) | Company Division Number   
| congressionalDistrict (string, optional) | Congressional District   |
| zip (string, optional) | Zip   |
| zipPlus4 (string, optional) | Zip Plus4  |
| stateProvision (string, optional) | State Provision   |
| countryCode (string, optional) | Country Code   |
| businessStartDate (string, optional) | Business Start Date   |
| submissionDate (string, optional) | Submission Date   |
| fiscalYearEndCloseDate  (string, optional) | Fiscal Year End Close Date  |
| correspondenceFlag (string, optional) | Correspondence Flag   |
| address1 (string, optional) | Address 1  | 
| address2 (string, optional) | Address 2  | 
| city (string, optional) | City  | 
| state (string, optional) | State  |
| zip (string, optional) | Zip  |
| zipPlus4 (string, optional) | Zip Plus4  |
| country (string, optional) | Country  |
| entityStructure (string, optional) | Entity Structure   |
| entityType (string, optional) | Entity Type   |
| profitStructure (string, optional) | Profit Structure   |
| organizationStructure (string, optional) | Organization Structure   |
| stateOfIncorporation (string, optional) | State Of Incorporation   |
| countryOfIncorporation (string, optional) | Country Of Incorporation   |
| businessTypes (list, optional) | List of Business Types  |
| sbaBusinessTypeList (list, optional) | List of SBA Business Types  |
| creditCardUsage (string, optional) | CreditCard Usage   |
| delinquentFedDebtFlag (string, optional) | Delinquent Fed Debt Flag   |
| primaryNaics (string, optional) | Primary NAICS   |
| naicsList	 (list, optional) | NAICS List  |
| naicsCode  (string, optional) | NAICS Code  |
| sbaSmallBusiness	 (string, optional) | SBA Small Business  |
| naicsException  (string, optional) | NAICS Exception  |
| pscList (list, optional) | PSC List   |
| ediInformationFlag (string, optional) | EDI Information Flag   |
| disasterRegistryFlag (string, optional) | Disaster Registry Flag   |
| bondingFlag (string, optional) | Bonding Flag   |
| geographicalAreaServed (string, optional) | Geographical Area Served   |
| fARResponses  (list, optional) | FAR Responses   |
| provisionId  (string, optional) | Provision Id   |
| answerType  (string, optional) | Answer Type   |
| answerId  (string, optional) | Answer Id   |
| answerText  (string, optional) | Answer Text   |
| businessObjectType  (string, optional) | Business Object Type   |
| businessObjectId  (string, optional) | Business Object Id   |
| firstName  (string, optional) | First Name   |
| title  (string, optional) | Title   |
| section  (string, optional) | Section   |
| status  (string, optional) | Status   |
| organizationType  (string, optional) | Organization Type   |
| endProductName  (string, optional) | End Product Name   |
| endProductType  (string, optional) | End Product Type   |
| endProductCountry  (string, optional) | End Product Country   |
| placeOfManufacture  (string, optional) | Place Of Manufacture   |
| fscCode  (string, optional) | FSC Code   |
| environmentURL  (string, optional) | Environment URL   |
| facilityStreetAddress1  (string, optional) | Facility Street Address 1  |
| facilityStreetAddress2  (string, optional) | Facility Street Address 2  |
| facilityCity  (string, optional) | Facility City  |
| facilityPostalCode  (string, optional) | Facility Postal Code  |
| facilityState  (string, optional) | Facility State  |
| facilityCountry  (string, optional) | Facility Country  |
| facilityOwner  (string, optional) | Facility Owner  |
| facilityOwnerStreetAddress1  (string, optional) | Facility Owner Street Address 1  |
| facilityOwnerStreetAddress2  (string, optional) | Facility Owner Street Address 2  |
| facilityOwnerCity  (string, optional) | Facility Owner City  |
| facilityOwnerPostalCode  (string, optional) | Facility Owner Postal Code  |
| facilityOwnerState  (string, optional) | Facility Owner State  |
| facilityOwnerCountry  (string, optional) | Facility Owner Country  |
| immedOwnerLegalBusinessName (string, optional) | Immed Owner Legal Business Name    |
| immedOwnerCageCode (string, optional) | Immed Owner Cage Code    |
| highestOwnerLegalBusinessName  (string, optional) | Highest Owner Legal Business Name  |
| highestOwnerCageCode  (string, optional) | Highest Owner  Cage Code  |
| firstPredecessorLegalBusinessName  (string, optional) | First Predecessor Legal Business Name  |
| firstPredecessorCageCode  (string, optional) | First Predecessor Cage Code  |
| secondPredecessorLegalBusinessName  (string, optional) | Second Predecessor Legal Business Name  |
| secondPredecessorCageCode  (string, optional) | Second Predecessor Cage Code  |
| thirdPredecessorLegalBusinessName  (string, optional) | Third Predecessor Legal Business Name  |
| thirdPredecessorCageCode  (string, optional) | Third Predecessor Cage Code  |
| primaryNaics  (string, optional) | Primary NAICS  |
| naicsCode  (string, optional) | NAICS Code  |
| sbaSmallBusiness  (string, optional) | SBA Small Business  |
| smallBusiness  (string, optional) | Small Business  |
| veteranOwnedSmallBusiness  (string, optional) | Veteran Owned Small Business  |
| serviceDisabledVetOwnedSmallBusiness  (string, optional) | Service Disabled Veteran Owned Small Business  |
| womenOwnedSmallBusinessConcern  (string, optional) | Women Owned Small Business Concern  |
| womenOwnedSmallBusiness  (string, optional) | Women Owned Small Business  |
| economicallyDisadvWomenOwnedSmallBusiness  (string, optional) | Economically Disadvantage Women Owned Small Business  |
| smallDisadvantagedBusinessConcern  (string, optional) | Small Disadvantaged Business Concern  |
| sbaCertifiedSmallBusinessDisadvBusiness  (string, optional) | SBA Certified Small Business Disadvantage Business  |
| sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted  (string, optional) | SBA Certified Small Business Disadvantage Business NotSubmitted  |
| hubZoneSmallBusinessConcerm  (string, optional) | Hub Zone Small Business Concerm  |
| blackAmerican  (string, optional) | Black American  |
| hispanicAmerican  (string, optional) | Hispanic American  |
| nativeAmerican  (string, optional) | Native American  |
| asianPacificAmerican  (string, optional) | Asian Pacific American  |
| subcontinentAsianIndianAmerican  (string, optional) | Sub continent Asian Indian American  |
| historicallyBlackCollegeOrUniversity  (string, optional) | Historically Black College Or University  |
| minorityInstitution  (string, optional) | Minority Institution  |
| linkForFARReportPDF  (string, optional) | Link For FAR Report PDF  |
| linkForFARReportHTML  (string, optional) | Link For FAR Report HTML  |
| foreignGovernmentOwnershipFirstName  (string, optional) | Foreign Government Ownership First Name  |
| foreignGovernmentOwnershipMiddleInitial  (string, optional) | Foreign Government Ownership Middle Initial  |
| foreignGovernmentOwnershipLastName  (string, optional) | Foreign Government Ownership Last Name  |
| foreignGovernmentOwnershipPhoneNum  (string, optional) | Foreign Government Ownership Phone Number  |
| foreignGovernmentOwnershipPhoneExt  (string, optional) | Foreign Government Ownership Phone Ext  |
| foreignGovernmentOwnershipInternationalNum  (string, optional) | Foreign Government Ownership International Number  |
| foreignGovernmentControlCountry  (string, optional) | Foreign Government Control Country  |
| foreignEndProductName  (string, optional) | Foreign End Product Name  |
| foreignEndProductCountry  (string, optional) | Foreign End Product Country  |
| linkForDFARSReportPDF  (string, optional) | Link For DFARS Report PDF  |
| linkForDFARSReportHTML  (string, optional) | Link For DFARS Report HTML  |
| middleInitial  (string, optional) | Middle Initial  |
| lastName  (string, optional) | Last Name  |
| title  (string, optional) | Title  |
| companyName  (string, optional) | Company Name  |
| companyEstablishedYear  (string, optional) | Company Established Year  |
| companyDUNS  (string, optional) | Company DUNS  |
| companyIsReference  (string, optional) | Company Is Reference  |
| qualificationURLPDF  (string, optional) | Qualification URL PDF  |
| qualificationURLHTML  (string, optional) | Qualification URL HTML  |
| financialAssistanceResponse  (string, optional) | Financial Assistance Response  |
| firstName  (string, optional) | Government Business POC First Name   |
| middleInitial  (string, optional) | Government Business POC Middle Initial  |
| lastName  (string, optional) | Government Business POC Last Name  |
| title  (string, optional) | Government Business POC Title   |
| USPhone  (string, optional) | Government Business POC US Phone  |
| USPhoneExtension  (string, optional) | Government Business POC US Phone Extension  |
| nonUSPhone  (string, optional) | Government Business POC NON US Phone  |
| fax  (string, optional) | Government Business POC Fax  |
| email  (string, optional) | Government Business POC Email  |
| address1 (string, optional) | Government Business POC Address 1  | 
| address2 (string, optional) | Government Business POC Address 2  | 
| city (string, optional) | Government Business POC City  | 
| state (string, optional) | Government Business POC State  |
| zipCode (string, optional) | Government Business POC Zip  |
| zipCodePlus4 (string, optional) | Government Business POC Zip Code Plus4  |
| country (string, optional) | Government Business POC Country  |
| firstName  (string, optional) | Electronic Business POC First Name   |
| middleInitial  (string, optional) | Electronic Business POC Middle Initial  |
| lastName  (string, optional) | Electronic Business POC Last Name  |
| title  (string, optional) | Electronic Business POC Title   |
| USPhone  (string, optional) | Electronic Business POC US Phone  |
| USPhoneExtension  (string, optional) | Electronic Business POC US Phone Extension  |
| nonUSPhone  (string, optional) | Electronic Business POC NON US Phone  |
| fax  (string, optional) | Electronic Business POC Fax  |
| email  (string, optional) | Electronic Business POC Email  |
| address1 (string, optional) | Electronic Business POC Address 1  | 
| address2 (string, optional) | Electronic Business POC Address 2  | 
| city (string, optional) | Electronic Business POC City  | 
| state (string, optional) | Electronic Business POC State  |
| zipCode (string, optional) | Electronic Business POC Zip  |
| zipCodePlus4 (string, optional) | Electronic Business POC Zip Code Plus4  |
| country (string, optional) | Electronic Business POC Country  |
| firstName  (string, optional) | Government Business Alternate POC First Name   |
| middleInitial  (string, optional) | Government Business Alternate POC Middle Initial  |
| lastName  (string, optional) | Government Business Alternate POC Last Name  |
| title  (string, optional) | Government Business Alternate POC Title   |
| USPhone  (string, optional) | Government Business Alternate POC US Phone  |
| USPhoneExtension  (string, optional) | Government Business Alternate POC US Phone Extension  |
| nonUSPhone  (string, optional) | Government Business Alternate POC NON US Phone  |
| fax  (string, optional) | Government Business Alternate POC Fax  |
| email  (string, optional) | Government Business Alternate POC Email  |
| address1 (string, optional) | Government Business Alternate POC Address 1  | 
| address2 (string, optional) | Government Business Alternate POC Address 2  | 
| city (string, optional) | Government Business Alternate POC City  | 
| state (string, optional) | Government Business Alternate POC State  |
| zipCode (string, optional) | Government Business Alternate POC Zip  |
| zipCodePlus4 (string, optional) | Government Business Alternate POC Zip Code Plus4  |
| country (string, optional) | Government Business Alternate POC Country  |
| firstName  (string, optional) | Electronic Business Alternate POC First Name   |
| middleInitial  (string, optional) | Electronic Business Alternate POC Middle Initial  |
| lastName  (string, optional) | Electronic Business Alternate POC Last Name  |
| title  (string, optional) | Electronic Business Alternate POC Title   |
| USPhone  (string, optional) | Electronic Business Alternate POC US Phone  |
| USPhoneExtension  (string, optional) | Electronic Business Alternate POC US Phone Extension  |
| nonUSPhone  (string, optional) | Electronic Business Alternate POC NON US Phone  |
| fax  (string, optional) | Electronic Business Alternate POC Fax  |
| email  (string, optional) | Electronic Business Alternate POC Email  |
| address1 (string, optional) | Electronic Business Alternate POC Address 1  | 
| address2 (string, optional) | Electronic Business Alternate POC Address 2  | 
| city (string, optional) | Electronic Business Alternate POC City  | 
| state (string, optional) | Electronic Business Alternate POC State  |
| zipCode (string, optional) | Electronic Business Alternate POC Zip  |
| zipCodePlus4 (string, optional) | Electronic Business Alternate POC Zip Code Plus4  |
| country (string, optional) | Electronic Business Alternate POC Country  |
| firstName  (string, optional) | Past Performance POC POC First Name   |
| middleInitial  (string, optional) | Past Performance POC POC Middle Initial  |
| lastName  (string, optional) | Past Performance POC POC Last Name  |
| title  (string, optional) | Past Performance POC POC Title   |
| USPhone  (string, optional) | Past Performance POC POC US Phone  |
| USPhoneExtension  (string, optional) | Past Performance POC POC US Phone Extension  |
| nonUSPhone  (string, optional) | Past Performance POC POC NON US Phone  |
| fax  (string, optional) | Past Performance POC POC Fax  |
| email  (string, optional) | Past Performance POC POC Email  |
| address1 (string, optional) | Past Performance POC POC Address 1  | 
| address2 (string, optional) | Past Performance POC POC Address 2  | 
| city (string, optional) | Past Performance POC POC City  | 
| state (string, optional) | Past Performance POC POC State  |
| zipCode (string, optional) | Past Performance POC POC Zip  |
| zipCodePlus4 (string, optional) | Past Performance POC POC Zip Code Plus4  |
| country (string, optional) | Past Performance POC POC Country  |
| firstName  (string, optional) | Past Performance  Alternate POC First Name   |
| middleInitial  (string, optional) | Past Performance  Alternate POC Middle Initial  |
| lastName  (string, optional) | Past Performance  Alternate POC Last Name  |
| title  (string, optional) | Past Performance  Alternate POC Title   |
| USPhone  (string, optional) | Past Performance  Alternate POC US Phone  |
| USPhoneExtension  (string, optional) | Past Performance  Alternate POC US Phone Extension  |
| nonUSPhone  (string, optional) | Past Performance  Alternate POC NON US Phone  |
| fax  (string, optional) | Past Performance  Alternate POC Fax  |
| email  (string, optional) | Past Performance  Alternate POC Email  |
| address1 (string, optional) | Past Performance  Alternate POC Address 1  | 
| address2 (string, optional) | Past Performance  Alternate POC Address 2  | 
| city (string, optional) | Past Performance  Alternate POC City  | 
| state (string, optional) | Past Performance  Alternate POC State  |
| zipCode (string, optional) | Past Performance  Alternate POC Zip  |
| zipCodePlus4 (string, optional) | Past Performance  Alternate POC Zip Code Plus4  |
| country (string, optional) | Past Performance  Alternate POC Country  |


## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/entity_api.yaml">Open API specification file for the Entity Management API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * An invalid api_key was supplied. <br><br> * Date should be specified in the format: MM/dd/YYYY. <br><br> * Duns can only be 9 digits. <br><br> * Duns Should Contain Only Numeric value. <br><br> * Invalid Input Parameters. <br><br>  * The parameters: 'includeSections' are not permitted inside Query Param(q). <br><br>  * A maximum of 100 DUNS is allowed. <br><br>  * A maximum of 100 CAGE Codes is allowed. |
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>

