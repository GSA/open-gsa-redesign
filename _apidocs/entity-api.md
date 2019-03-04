---
title: Entity Management  API
banner-heading: Entity Management API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
The Entity Management API will allow users to request Public Entity Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner.

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
| activationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&activationDate=02/12/1999' |
| cageCode | Allows exact 5 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&cageCode=00000' |
| dbaName | Allows Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&dbaName=ALLTEL' |
| delinquentFederalDebtFlag | Allows Y or N or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&delinquentFederalDebtFlag=Y' |
| dodaac | Allows 9 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&dodaac=025114695' |
| duns  | Allows 9 digit value, a maximum of up to 100 values can be sent.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&duns=025114695' |
| entityStructure  | Allows 2 character code or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&entityStructure=Z1' |
| exclusionStatusFlag | Allows D or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&exclusionStatusFlag=D' |
| expirationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&expirationDate=02/12/1999' |
| legalBusinessName | Allows Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&legalBusinessName=ALLTEL ' |
| primaryNaics | Allows 6 digit NAICS, accepts multiple NAICS.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&primaryNaics=513310' |
| purposeOfRegistration | Allows 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&purposeOfRegistration=Z2' |
| registrationDate | Allows a single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&registrationDate=02/12/1999' |
| physicalAddressCity | Allows a text.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalAddressCity=Herndon' |
| physicalAddressCongressionalDistrict | Allows 2 characters.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalAddressCongressionalDistrict=AR' |
| physicalAddressCountryCode | Allows 3 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalAddressCountryCode=USA' |
| physicalAddressProvinceOrState  | Allows 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalAddressProvinceOrState=AR' |
| physicalAddressZipPostalCode | Allows 5 digit zip code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalAddressZipPostalCode=02201' |
| samExtractCode  | Allows 1 character code (A or E).<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&samExtractCode=A' |
| includeSections | Allows to filter data by sections, entityInformation, coreData, assertions, repsAndCerts and pointsOfContact.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&includeSections=entityInformation,coreData' |
| format | Allows user to download different file formats(csv and json are allowable values) .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&format=csv' |
| businessType  | Allows 2 character code  .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&businessType=MF' |
| organizationStructure  | Allows 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&organizationStructure=2L' |
| stateOfIncorporation  | Allows 2 character code .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&stateOfIncorporation=VA' |
| countryOfIncorporation  | Allows 3 character code .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&countryOfIncorporation=USA' |
| naicsCode  | Allows 6 character code .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&naicsCode=513310' |
| naicsLimitedSB   | Allows 6 character code that is marked as Small Business .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&naicsLimitedSB=513310' |
| pscCode   | Allows 4 character code .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&pscCode=0989' |
| servedDisasterState   | Allows 2 character code .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&servedDisasterState=VA' |
| servedDisasterCounty   | Allows text .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&servedDisasterCounty=FAIRFAX' |
| servedDisasterMSA   | Allows text .<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&servedDisasterMSA=86800730' |





**Expected Result**

API response consists of Sections, Sub-sections and Tags underneath each of the Sections or Sub-sections

| Section/Sub-section/Tag | Description |
| ---- |  ----------- |
| **entityInformation** |
| duns(string) | DUNS |
| dunsPlus4 (string) | DUNS Plus4  |
| cageCode (string) | CAGE Code | 
| nCageCode (string) | NCAGE Code  |
| dodaac (string) | DoDAAC  |
| legalBusinessName (string) | Legal Business Name   |
| dbaName (string) | Doing Business As Name   |
| purposeOfRegistration (string) | Purpose of Registration   |
| registrationStatus (string) | Registration Status  | 
| registrationDate (string) | Registration Date  | 
| lastUpdateDate (string) | Last Update Date | 
| expirationDate (string) | Expiration Date  | 
| activeDate (string) | Active Date   |
| noPublicDisplayFlag (string) | No Public Display Flag   |
| exclusionStatusFlag (string) | Exclusion Status Flag   |
| **coreData  --> businessInformation** |
| corporateURL (string) | Corporate URL   |
| companyDivisionName (string) | Company Division Name  |
| companyDivisionNumber (string) | Company Division Number |
| businessStartDate (string) | Business Start Date   |
| submissionDate (string) | Submission Date   |
| fiscalYearEndCloseDate  (string) | Fiscal Year End Close Date  |
| correspondenceFlag (string) | Correspondence Flag   |
| **coreData  --> physicalAddress, mailingAddress** |
| address1 (string) | Physical Address 1 and Mailing Address 1  | 
| address2 (string) | Physical Address 2 and Mailing Address 2   | 
| city (string) | Physical Address City and Mailing Address City  | 
| state (string) | Physical Address State and Mailing Address State  |
| zip (string) | Physical Address Zip and Mailing Address Zip  |
| zipPlus4 (string) | Physical Address Zip Plus4 and Mailing Address Zip Plus4  |
| country (string) | Physical Address Country and Mailing Address Country  |
| congressionalDistrict (string) | Congressional District of Physical Address  |
| **coreData  --> generalInformation** |
| entityStructure (string) | Entity Structure   |
| entityType (string) | Entity Type   |
| profitStructure (string) | Profit Structure   |
| organizationStructure (string) | Organization Structure   |
| stateOfIncorporation (string) | State Of Incorporation   |
| countryOfIncorporation (string) | Country Of Incorporation   |
| **coreData  --> businessTypes  --> businessTypeList** |
| businessType (string) | Business Type code  |
| **coreData  --> businessTypes  --> sbaBusinessTypeList** |
| sbaBusinessType (string) | SBA Business Type code  |
| name (string) | SBA Business Type description  |
| expirationDate (string) | SBA Business Type expiration date  |
| **coreData  --> financialInformation** |
| creditCardUsage (string) | Credit Card Usage   |
| delinquentFedDebtFlag (string) | Delinquent Federal Debt Flag   |
| **assertions  --> goodsAndServices** |
| primaryNaics (string) | Primary NAICS  |
| **assertions  --> goodsAndServices  --> naicsList** |
| naicsCode	 (string) | NAICS Code  |
| sbaSmallBusiness	 (string) | Whether or not the NAICS Code is indicated as an SBA small business  |
| naicsException  (string) | Whether or not the NAICS Code is an exception  |
| **assertions  --> goodsAndServices  --> pscList** |
| pscCode	 (string) | PSC Code  |
| **assertions  --> goodsAndServices** |
| ediInformationFlag (string) | EDI Information Flag   |
| **assertions  --> goodsAndServices  --> disasterReliefData** |
| disasterRegistryFlag (string) | Disaster Registry Flag   |
| bondingFlag (string) | Bonding Flag   |
| **assertions  --> goodsAndServices  --> geographicalAreaServed** |
| geographicalAreaServedState (string) | State code   |
| geographicalAreaServedCounty (string) | County name   |
| geographicalAreaServedmetropolitanStatisticalArea (string) | Metropolitan Statistical Area name   |
| **repsAndCerts  --> certifications  --> fARResponses  --> listOfProvisions** |
| provisionId (string) | Provision Id  |
| **repsAndCerts  --> certifications  --> fARResponses  --> listOfAnswers** |
| answerType (string) | Answer Type  |
| answerId (string) | Answer Id |
| answerText (string) | Answer Text  |
| businessObjectType (string) | Business Object Type  |
| businessObjectId (string) | Business Object Id  |
| firstName (string) | First Name  |
| title (string) | Title  |
| section (string) | Section  |
| status (string) | Status   |
| organizationType (string) | Organization Type   |
| endProductName (string) | End Product Name   |
| endProductType (string) | End Product Type   |
| endProductCountry (string) | End Product Country   |
| placeOfManufacture (string) | Place Of Manufacture   |
| fscCode (string) | FSC Code   |
| environmentURL (string) | Environment URL   |
| facilityStreetAddress1 (string) | Facility Street Address 1  |
| facilityStreetAddress2 (string) | Facility Street Address 2  |
| facilityCity (string) | Facility City  |
| facilityPostalCode (string) | Facility Postal Code  |
| facilityState (string) | Facility State  |
| facilityCountry (string) | Facility Country  |
| facilityOwner (string) | Facility Owner  |
| facilityOwnerStreetAddress1 (string) | Facility Owner Street Address 1  |
| facilityOwnerStreetAddress2 (string) | Facility Owner Street Address 2  |
| facilityOwnerCity (string) | Facility Owner City  |
| facilityOwnerPostalCode (string) | Facility Owner Postal Code  |
| facilityOwnerState (string) | Facility Owner State  |
| facilityOwnerCountry (string) | Facility Owner Country  |
| immediateOwnerLegalBusinessName (string) | Immediate Owner Legal Business Name    |
| immediateOwnerCageCode (string) | Immediate Owner Cage Code    |
| highestOwnerLegalBusinessName (string) | Highest Owner Legal Business Name  |
| highestOwnerCageCode (string) | Highest Owner  Cage Code  |
| firstPredecessorLegalBusinessName (string) | First Predecessor Legal Business Name  |
| firstPredecessorCageCode (string) | First Predecessor Cage Code  |
| secondPredecessorLegalBusinessName (string) | Second Predecessor Legal Business Name  |
| secondPredecessorCageCode (string) | Second Predecessor Cage Code  |
| thirdPredecessorLegalBusinessName (string) | Third Predecessor Legal Business Name  |
| thirdPredecessorCageCode (string) | Third Predecessor Cage Code  |
| primaryNaics (string) | Primary NAICS  |
| naicsCode (string) | NAICS Code  |
| sbaSmallBusiness (string) | SBA Small Business  |
| smallBusiness (string) | Small Business  |
| veteranOwnedSmallBusiness (string) | Veteran Owned Small Business  |
| serviceDisabledVetOwnedSmallBusiness (string) | Service Disabled Veteran Owned Small Business  |
| womenOwnedSmallBusinessConcern (string) | Women Owned Small Business Concern  |
| womenOwnedSmallBusiness (string) | Women Owned Small Business  |
| economicallyDisadvWomenOwnedSmallBusiness (string) | Economically Disadvantaged Women Owned Small Business  |
| smallDisadvantagedBusinessConcern (string) | Small Disadvantaged Business Concern  |
| sbaCertifiedSmallBusinessDisadvBusiness (string) | SBA Certified Small Disadvantaged Business  |
| sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted (string) | SBA Certified Small Disadvantaged Business not submitted  |
| hubZoneSmallBusinessConcern (string) | Hub Zone Small Business Concern  |
| blackAmerican (string) | Black American Owned Business  |
| hispanicAmerican (string) | Hispanic American Owned Business  |
| nativeAmerican (string) | Native American Owned Business  |
| asianPacificAmerican (string) | Asian Pacific American Owned Business   |
| subcontinentAsianIndianAmerican (string) | Subcontinent Asian Indian American Owned Business  |
| historicallyBlackCollegeOrUniversity (string) | Historically Black College Or University  |
| minorityInstitution (string) | Minority Institution  |
| linkForFARReportPDF (string) | Link For FAR Report PDF  |
| linkForFARReportHTML (string) | Link For FAR Report HTML  |
| **repsAndCerts  --> certifications  --> dFARResponses  --> listOfProvisions** |
| provisionId (string) | Provision Id  |
| **repsAndCerts  --> certifications  --> dFARResponses  --> listOfAnswers** |
| answerType (string) | Answer Type  |
| answerId (string) | Answer Id |
| answerText (string) | Answer Text  |
| businessObjectType (string) | Business Object Type  |
| businessObjectId (string) | Business Object Id  |
| section (string) | Section  |
| foreignGovernmentOwnershipFirstName  (string) | Foreign Government Ownership First Name  |
| foreignGovernmentOwnershipMiddleInitial (string) | Foreign Government Ownership Middle Initial  |
| foreignGovernmentOwnershipLastName  (string) | Foreign Government Ownership Last Name  |
| foreignGovernmentOwnershipPhoneNum  (string) | Foreign Government Ownership Phone Number  |
| foreignGovernmentOwnershipPhoneExt  (string) | Foreign Government Ownership Phone Extension  |
| foreignGovernmentOwnershipInternationalNum (string) | Foreign Government Ownership International Number  |
| foreignGovernmentControlCountry (string) | Foreign Government Control Country  |
| foreignEndProductName (string) | Foreign End Product Name   |
| foreignEndProductCountry (string) | Foreign End Product Country  |
| linkForDFARSReportPDF (string) | Link For DFARS Report PDF  |
| linkForDFARSReportHTML (string) | Link For DFARS Report HTML  |
| **repsAndCerts  --> qualifications  --> architectEngineerResponses  --> listOfProvisions** |
| provisionId (string) | Provision Id  |
| **repsAndCerts  --> qualifications  --> architectEngineerResponses  --> listOfAnswers** |
| answerType (string) | Answer Type  |
| answerId (string) | Answer Id |
| answerText (string) | Answer Text  |
| businessObjectType (string) | Business Object Type  |
| businessObjectId (string) | Business Object Id  |
| firstName (string) | First Name  |
| middleInitial  (string) | Middle Initial  |
| lastName (string) | Last Name  |
| title  (string) | Title  |
| companyName  (string) | Company Name  |
| companyEstablishedYear  (string) | Company Established Year   |
| companyDUNS (string) | Company DUNS |
| companyIsReference (string) | Company Is Reference  |
| qualificationURLPDF (string) | Qualification URL PDF  |
| qualificationURLHTML (string) | Foreign End Product Country  |
| **repsAndCerts  --> financialAssistanceCertifications** |
| financialAssistanceResponse (string) | Financial Assistance Response  |
| **repsAndCerts  --> governmentBusinessPOC,<br> electronicBusinessPOC, governmentBusinessAlternatePOC,<br> electronicBusinessAlternatePOC, pastPerformancePOC,<br> pastPerformanceAlternatePOC** |
| firstName (string) |  First Name |
| middleInitial (string) |  Middle Initial |
| lastName (string) |  Last Name | 
| title (string) |  Title |
| USPhone (string) |  US Phone |
| USPhoneExtension (string) |  US Phone Extension |
| nonUSPhone (string) |  Non-US Phone |
| fax (string) |  Fax |
| email (string) |  Email |
| address1(string) |  Address 1 | 
| address2 (string) |  Address 2 | 
| city (string) |  City | 
| state (string) |  State |
| zipCode (string) |  Zip |
| zipCodePlus4 (string) |  Zip Code Plus4 |
| country (string) |  Country |

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

