---
title: Entity API
banner-heading: Entity API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
The Entity Management API will allow users to request Public Entity Information based on various optional request parameters. 
The response will be provided in the JSON format in a paginated manner

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
| activationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&activationDate=02/12/1999' |
| cageCode | Allows exact 5 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&cageCode=00000' |
| dbaName | Allows Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&dbaName=ALLTEL' |
| delinquentFederalDebtFlag | Allows Y or N or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&delinquentFederalDebtFlag=Y' |
| dodaac | Allows 9 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&dodaac=025114695' |
| duns  | Allows 9 digit value, a maximum of up to 100 values can be sent.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&duns=025114695' |
| entityStructure  | Allows 2 character code or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&entityStructure=Z1' |
| exclusionStatusFlag | Allows D or null.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&exclusionStatusFlag=D' |
| expirationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&expirationDate=02/12/1999' |
| legalBusinessName | Allows Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&legalBusinessName=ALLTEL ' |
| primaryNaics | Allows 6 digit NAICS, accepts multiple NAICS.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&primaryNaics=51331' |
| purposeOfRegistration | Allows 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&purposeOfRegistration=Z2' |
| registrationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&registrationDate=02/12/1999' |
| physicalAddressCity | City name.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalCity=Herndon' |
| physicalAddressCongressionalDistrict | Allows 2 characters.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalCongressionalDistrict=AR' |
| physicalAddressCountryCode | Allows 3 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalCountryCode=USA' |
| physicalAddressProvinceOrState  | Allows 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalProvinceOrState=AR' |
| physicalAddressZipPostalCode | Allows 5 digit zip code.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalZipPostalCode=022011' |
| samExtractCode  | Allows 1 character code (A or E).<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&physicalExtractCode=A' |
| includeSections | Allows to filter data by sections, entityInformation, coreData, assertions, repsAndCerts and pointsOfContact.<br><br> Example: 'https://api.sam.gov/prod/entity-management?api_key=< value >&includeSections=entityInformation,coreData' |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| duns (string) | DUNS | 
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
| corporateURL (string) | Corporate URL   |
| companyDivisionName (string) | Company Division Name  |
| companyDivisionNumber (string) | Company Division Number |
| businessStartDate (string) | Business Start Date   |
| submissionDate (string) | Submission Date   |
| fiscalYearEndCloseDate  (string) | Fiscal Year End Close Date  |
| correspondenceFlag (string) | Correspondence Flag   |
| address1 (string) | Physical Address 1 and Mailing Address 1  | 
| address2 (string) | Physical Address 2 and Mailing Address 2   | 
| city (string) | Physical Address City and Mailing Address City  | 
| state (string) | Physical Address State and Mailing Address State  |
| zip (string) | Physical Address Zip and Mailing Address Zip  |
| zipPlus4 (string) | Physical Address Zip Plus4 and Mailing Address Zip Plus4  |
| country (string) | Physical Address Country and Mailing Address Country  |
| congressionalDistrict (string) | Congressional District of Physical Address  |
| entityStructure (string) | Entity Structure   |
| entityType (string) | Entity Type   |
| profitStructure (string) | Profit Structure   |
| organizationStructure (string) | Organization Structure   |
| stateOfIncorporation (string) | State Of Incorporation   |
| countryOfIncorporation (string) | Country Of Incorporation   |
| businessTypes (list) | List of Business Types with each of the Business Type codes  |
| sbaBusinessTypeList (list) | List of SBA Business Types with each of the SBA Business Type codes, names and expiration date  |
| creditCardUsage (string) | Credit Card Usage   |
| delinquentFedDebtFlag (string) | Delinquent Federal Debt Flag   |
| primaryNaics (string) | Primary NAICS   |
| naicsList	 (list) | NAICS List with each of the NAICS codes, whether or not they are SBA small business and whether or not they are exceptions  |
| pscList (list) | PSC List with each of the PSC codes   |
| ediInformationFlag (string) | EDI Information Flag   |
| disasterRegistryFlag (string) | Disaster Registry Flag   |
| bondingFlag (string) | Bonding Flag   |
| geographicalAreaServed (string) | Geographical Area Served with the list of States, Counties and Metropolitan Statistical Areas   |
| fARResponses  (list) | FAR and DFAR Responses   |
| provisionId  (string) | Provision Id for FAR and DFAR certifications and qualifications   |
| answerType  (string) | Answer Type for FAR and DFAR certifications and qualifications   |
| answerId  (string) | Answer Id for FAR and DFAR certifications and qualifications  |
| answerText  (string) | Answer Text for FAR and DFAR certifications and qualifications   |
| businessObjectType  (string) | Business Object Type for FAR and DFAR certifications, and qualifications   |
| businessObjectId  (string) | Business Object Id for FAR and DFAR certifications, and qualifications   |
| firstName  (string) | First Name for FAR certifications and qualifications   |
| title  (string) | Title for FAR certifications and qualifications   |
| section  (string) | Section for FAR and DFAR certifications, and qualifications   |
| status  (string) | Status   |
| organizationType  (string) | Organization Type   |
| endProductName  (string) | End Product Name   |
| endProductType  (string) | End Product Type   |
| endProductCountry  (string) | End Product Country   |
| placeOfManufacture  (string) | Place Of Manufacture   |
| fscCode  (string) | FSC Code   |
| environmentURL  (string) | Environment URL   |
| facilityStreetAddress1  (string) | Facility Street Address 1  |
| facilityStreetAddress2  (string) | Facility Street Address 2  |
| facilityCity  (string) | Facility City  |
| facilityPostalCode  (string) | Facility Postal Code  |
| facilityState  (string) | Facility State  |
| facilityCountry  (string) | Facility Country  |
| facilityOwner  (string) | Facility Owner  |
| facilityOwnerStreetAddress1  (string) | Facility Owner Street Address 1  |
| facilityOwnerStreetAddress2  (string) | Facility Owner Street Address 2  |
| facilityOwnerCity  (string) | Facility Owner City  |
| facilityOwnerPostalCode  (string) | Facility Owner Postal Code  |
| facilityOwnerState  (string) | Facility Owner State  |
| facilityOwnerCountry  (string) | Facility Owner Country  |
| immediateOwnerLegalBusinessName (string) | Immediate Owner Legal Business Name    |
| immediateOwnerCageCode (string) | Immediate Owner Cage Code    |
| highestOwnerLegalBusinessName  (string) | Highest Owner Legal Business Name  |
| highestOwnerCageCode  (string) | Highest Owner  Cage Code  |
| firstPredecessorLegalBusinessName  (string) | First Predecessor Legal Business Name  |
| firstPredecessorCageCode  (string) | First Predecessor Cage Code  |
| secondPredecessorLegalBusinessName  (string) | Second Predecessor Legal Business Name  |
| secondPredecessorCageCode  (string) | Second Predecessor Cage Code  |
| thirdPredecessorLegalBusinessName  (string) | Third Predecessor Legal Business Name  |
| thirdPredecessorCageCode  (string) | Third Predecessor Cage Code  |
| primaryNaics  (string) | Primary NAICS  |
| naicsCode  (string) | NAICS Code  |
| sbaSmallBusiness  (string) | SBA Small Business  |
| smallBusiness  (string) | Small Business  |
| veteranOwnedSmallBusiness  (string) | Veteran Owned Small Business  |
| serviceDisabledVetOwnedSmallBusiness  (string) | Service Disabled Veteran Owned Small Business  |
| womenOwnedSmallBusinessConcern  (string) | Women Owned Small Business Concern  |
| womenOwnedSmallBusiness  (string) | Women Owned Small Business  |
| economicallyDisadvWomenOwnedSmallBusiness  (string) | Economically Disadvantaged Women Owned Small Business  |
| smallDisadvantagedBusinessConcern  (string) | Small Disadvantaged Business Concern  |
| sbaCertifiedSmallBusinessDisadvBusiness  (string) | SBA Certified Small Disadvantaged Business  |
| sbaCertifiedSmallBusinessDisadvBusinessNotSubmitted  (string) | SBA Certified Small Disadvantaged Business not submitted  |
| hubZoneSmallBusinessConcern  (string) | Hub Zone Small Business Concern  |
| blackAmerican  (string) | Black American Owned Business  |
| hispanicAmerican  (string) | Hispanic American Owned Business  |
| nativeAmerican  (string) | Native American Owned Business  |
| asianPacificAmerican  (string) | Asian Pacific American Owned Business   |
| subcontinentAsianIndianAmerican  (string) | Subcontinent Asian Indian American Owned Business  |
| historicallyBlackCollegeOrUniversity  (string) | Historically Black College Or University  |
| minorityInstitution  (string) | Minority Institution  |
| linkForFARReportPDF  (string) | Link For FAR Report PDF  |
| linkForFARReportHTML  (string) | Link For FAR Report HTML  |
| foreignGovernmentOwnershipFirstName  (string) | Foreign Government Ownership First Name  |
| foreignGovernmentOwnershipMiddleInitial  (string) | Foreign Government Ownership Middle Initial  |
| foreignGovernmentOwnershipLastName  (string) | Foreign Government Ownership Last Name  |
| foreignGovernmentOwnershipPhoneNum  (string) | Foreign Government Ownership Phone Number  |
| foreignGovernmentOwnershipPhoneExt  (string) | Foreign Government Ownership Phone Ext  |
| foreignGovernmentOwnershipInternationalNum  (string) | Foreign Government Ownership International Number  |
| foreignGovernmentControlCountry  (string) | Foreign Government Control Country  |
| foreignEndProductName  (string) | Foreign End Product Name  |
| foreignEndProductCountry  (string) | Foreign End Product Country  |
| linkForDFARSReportPDF  (string) | Link For DFARS Report PDF  |
| linkForDFARSReportHTML  (string) | Link For DFARS Report HTML  |
| middleInitial  (string) | Middle Initial for qualifications |
| lastName  (string) | Last Name for qualifications  |
| title  (string) | Title for qualifications  |
| companyName  (string) | Company Name for qualifications |
| companyEstablishedYear  (string) | Company Established Year for qualifications |
| companyDUNS  (string) | Company DUNS for qualifications |
| companyIsReference  (string) | Company Is Reference for qualifications |
| qualificationURLPDF  (string) | Qualification URL PDF  |
| qualificationURLHTML  (string) | Qualification URL HTML  |
| financialAssistanceResponse  (string) | Financial Assistance Response  |
| firstName  (string) |  First Name for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC  |
| middleInitial  (string) |  Middle Initial for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC  |
| lastName  (string) |  Last Name for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC  |
| title  (string) |  Title for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC  |
| USPhone  (string) |  US Phone for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| USPhoneExtension  (string) |  US Phone Extension for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| nonUSPhone  (string) |  NON US Phone for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| fax  (string) |  Fax for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| email  (string) |  Email for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| address1 (string) |  Address 1 for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC | 
| address2 (string) |  Address 2 for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC | 
| city (string) |  City for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC | 
| state (string) |  State for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| zipCode (string) |  Zip for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| zipCodePlus4 (string) |  Zip Code Plus4 for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |
| country (string) |  Country for Government Business POC, Electronic Business POC, Government Business Alternate POC, Electronic Business Alternate POC, Past Performance POC and Past Performance Alternate POC |

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

