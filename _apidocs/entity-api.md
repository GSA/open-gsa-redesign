---
title: Entity API
banner-heading: Entity API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview
Public Entity and Exclusion data (all the data except the DoD unrevealed data) is available for end-user consumption in 
the form of below API's which can be accessed by sending end points in the browser.
* Entity API
* Entity Extract API
* Exclusion API 
* Exclusion Extract API  

Entity/Exclusion API: 
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns synchronous responses directly in the browser.
* It returns ten records per page in the JSON format.

Entity/Exclusion Extract API:
* It offers several optional search parameters, filtering by sections, AND, OR, NOT conditions and a free text search q to obtain the desired data.
* It returns asynchronous responses by sending file downloadable links in the browser and in the emails.
* It returns data in the JSON or CSV format as selected by the user.
* The files will be available for download until seven days after the request is run.


<p><small><a href="#">Back to top</a></small></p>

## Getting Started

Entity API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/entities/< duns >?api_key=< value >
* https://api-alpha.sam.gov/prodlike/entities/< duns >?api_key=< value >

Entity Extract API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/entity-extract?api_key=< value >&format=< Format Type >&emailId=< a valid email address >
* https://api-alpha.sam.gov/prodlike/entity-extract?api_key=< value >& format=< Format Type >&emailId=< a valid email address >

Exclusion API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/exclusions/< samNumber >%2B< agency >%2B< type >%2B< ctCode >?api_key=< value >
* https://api-alpha.sam.gov/prodlike/exclusions/< samNumber >%2B< agency >%2B< type >%2B< ctCode >?api_key=< value >

Exclusion Extract API can be accessed from Beta or Alpha via the following end points:
* https://api.sam.gov/prod/exclusion-extract?api_key=< value >&format=< Format Type >&emailId=< a valid email address >

Generating the API Key:
* Registered users can request for a public API on 'Account Details' page.
* Users must enter their password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned. 
* After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until users navigate to a different page. 
* If an error is encountered during the API Key generation/retrieval, then users will receive an error message and they can try again.


<p><small><a href="#">Back to top</a></small></p>

## API Description

### Entity API

**Endpoint:** https://api.sam.gov/prod/entities/<dunsDunsPlus4>?api_key=< value >

**Description** Restful endpoint to retrieve Entity detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| dunsDunsPlus4 | It can contain just 9 digits duns OR combination of duns and duns+4.<br><br> Example: 'https://api.sam.gov/prod/entities/514667567?api_key=< value >' |

**Expected Result**

| Name  | Description |
| ---- | ----------- |
| duns (string, optional) | DUNS | 
| dodaac (string, optional) | DoDacc  | 
| exclusionStatusFlag (string, optional) | Exclusion Status Flag  | 
| expirationDate (string, optional) | Expiration Date  | 
| lastUpdateDate (string, optional) | Last Update Date | 
| samAddress1 (string, optional) | Sam Address 1  | 
| samAddress2 (string, optional) | Sam Address 2  | 
| samAddressCity (string, optional) | Sam Address City  | 
| samAddressState (string, optional) | Sam Address State  |
| samAddressZip (string, optional) | Sam Address Zip  |
| samAddressZipPlus4 (string, optional) | Sam Address ZipPlus4  |
| samCountry (string, optional) | Sam Country  |
| mailAddress1 (string, optional) | Mail Address 1  |
| mailAddress2 (string, optional) | Mail Address 2  |
| mailAddressCity (string, optional) | Mail Address City  |
| mailAddressState (string, optional) | Mail Address State  |
| mailAddressZip (string, optional) | Mail Address Zip  |
| mailAddressZipPlus4 (string, optional) | Mail Address ZipPlus4  |
| mailCountry (string, optional) | Mail Address Country  |
| legalBusinessName (string, optional) | Legal Business Name   |
| dbaName (string, optional) | Dba Name   |
| purposeOfRegistration	 (string, optional) | Purpose Of Registration  |
| registrationDate (string, optional) | Registration Date   |
| activeDate (string, optional) | Active Date   |
| businessStartDate (string, optional) | Business Start Date   |
| submissionDate (string, optional) | Submission Date   |
| businessTypeCounter (string, optional) | Business Type Counter   |
| businessType (string, optional) | Business Type  |
| companyDivision (string, optional) | Company Division   |
| corporateURL (string, optional) | Corporate URL   |
| congressionalDistrict (string, optional) | Congressional District   |
| countryCode (string, optional) | Country Code   |
| countryOfIncorporation (string, optional) | Country Of Incorporation   |
| stateOfIncorporation (string, optional) | State Of Incorporation   |
| stateProvision (string, optional) | State Provision   |
| cageCode (string, optional) | Cage Code   |
| correspondenceFlag (string, optional) | Correspondence Flag   |
| creditCardUsage (string, optional) | CreditCard Usage   |
| delinquentFedDebtFlag (string, optional) | Delinquent Fed Debt Flag   |
| divisionNumber (string, optional) | Division Number   |
| entityStructure (string, optional) | Entity Structure   |
| fiscalYearEndCloseDate  (string, optional) | Fiscal Year End Close Date  |
| noPublicDisplayFlag (string, optional) | No Public Display Flag   |
| Zip (string, optional) | Zip   |
| zipPlus4 (string, optional) | Zip Plus4  |
| recentPredecessorCageCode (string, optional) | Recent Predecessor CageCode   |
| recentPredecessorBusName (string, optional) | Recent Predecessor BusName  |
| secondRecentPredecessorCageCode (string, optional) | Second Recent Predecessor CageCode   |
| secondRecentPredecessorBusName (string, optional) | Second Recent Predecessor BusName   |
| thirdRecentPredecessorCageCode (string, optional) | Third Recent Predecessor CageCode   |
| thirdRecentPredecessorBusName (string, optional) | Third Recent Predecessor BusName   |
| immedOwnerPredecessorCageCode (string, optional) | Immed Owner Predecessor CageCode    |
| immedOwnerRecentPredecessorBusName (string, optional) | Immed Owner Recent Predecessor BusName    |
| highestOwnerPredecessorCageCode (string, optional) | Highest Owner Predecessor CageCode   |
| highestOwnerRecentPredecessorBusName  (string, optional) | Highest Owner Recent Predecessor BusName  |
| filterName (string, optional) | Filter Name   |
| profitStructure (string, optional) | Profit Structure   |
| organizationStructure (string, optional) | Organization Structure   |
| entityType (string, optional) | Entity Type   |
| naicsList	 (list, optional) | NAICS List  |
| pscList (list, optional) | PSC List   |
| primaryNaics (string, optional) | Primary NAICS   |
| ediInformationFlag (string, optional) | EDI Information Flag   |
| registryFlag (string, optional) | Registry Flag   |
| bondingFlag (string, optional) | Bonding Flag  |
| geographicalAreaServed (list, optional) | Geographical Area Served   |
| linkForFARReport (string, optional) | Link For FAR Report    |
| linkForDFARSReport (string, optional) | Link For DFARS Report   |
| elecBusPocFirstName (string, optional) | Electronic Business Poc First Name   |
| elecBusPocMiddleInitial (string, optional) | Electronic Business Poc Middle Initial    |
| elecBusPocLastName (string, optional) | Electronic Business Poc Last Name  |
| elecBusPocTitle (string, optional) | Electronic Business Poc Title  |
| elecBusPocUsPhone (string, optional) | Electronic Business Poc US Phone  |
| elecBusPocUsPhoneExt (string, optional) | Electronic Business Poc US Phone Ext  |
| elecBusPocNonUsPhone	(string, optional) | Electronic Business Poc Non US Phone Ext     |
| elecBusPocFaxUsOnly (string, optional) |  Electronic Business Poc Fax US Only    |
| elecBusPocEmail (string, optional) |  Electronic Business Poc Email    |
| elecBusPocStAdd1 (string, optional) |  Electronic Business Poc Street Address 1    |
| elecBusPocStAdd2 (string, optional) | Electronic Business Poc Street Address 2  |
| elecBusPocCity (string, optional) | Electronic Business Poc City  |
| elecBusPocStateOrProvince (string, optional) | Electronic Business Poc State Or Province   |
| elecBusPocZipPostalCode (string, optional) | Electronic Business Poc Zip Postal Code   |
| elecBusPocZipCodePlus4 (string, optional) | Electronic Business Poc Zip Code Plus4   |
| elecBusPocCountryCode (string, optional) | Electronic Business Poc Country Code   |
| govtBusPocFirstName (string, optional) | Government Business Poc First Name   |
| govtBusPocMiddleInitial (string, optional) | Government Business Middle Initial   |
| govtBusPocLastName (string, optional) | Government Business Poc Last Name   |
| govtBusPocTitle (string, optional) | Government Business Poc Title   |
| govtBusPocUsPhone (string, optional) | Government Business Poc US Phone   |
| govtBusPocUsPhoneExt (string, optional) | Government Business US Phone Ext   |
| govtBusPocNonUsPhone (string, optional) | Government Business Poc Non US Phone   |
| govtBusPocFaxUsOnly (string, optional) | Government Business Poc Fax US Only   |
| govtBusPocEmail (string, optional) | Government Business Poc Email   |
| govtBusPocStAdd1 (string, optional) | Government Business Poc Street Address 1   |
| govtBusPocStAdd2 (string, optional) | Government Business Poc Street Address 2   |
| govtBusPocCity (string, optional) | Government Business Poc City   |
| govtBusPocStateOrProvince (string, optional) | Government Business Poc State Or Province   |
| govtBusPocZipPostalCode (string, optional) | Government Business Poc Zip Postal Code   |
| govtBusPocZipCodePlus4 (string, optional) | Government Business Poc Zip Code Plus4   |
| govtBusPocCountryCode (string, optional) | Government Business Country Code   |
| altElecPocBusPocFirstNm (string, optional) | Alternate Electronic Business Poc First Name   |
| altElecPocBusPocMidInit (string, optional) | Alternate Electronic Business Poc Middle Initial   |
| altElecPocBusPocLastName (string, optional) | Alternate Electronic Business Poc Last Name   |
| altElecPocBusPocTitle (string, optional) | Alternate Electronic Business Poc Title   |
| altElecPocBusUsPhone (string, optional) | Alternate Electronic Business Poc US Phone   |
| altElecPocBusUsPhoneExt (string, optional) | Alternate Electronic Business Poc US Phone Ext   |
| altElecPocBusNonUsPhone (string, optional) | Alternate Electronic Business Poc Non US Phone   |
| altElecPocBusFaxUsOnly (string, optional) | Alternate Electronic Business Poc Fax US Only   |
| altElecPocBusEmail (string, optional) | Alternate Electronic Business Poc Email   |
| altElecPocBusStAdd1 (string, optional) | Alternate Electronic Business Poc Street Address 1   |
| altElecPocBusStAdd2 (string, optional) | Alternate Electronic Business Poc Street Address 2   |
| altElecPocBusCity (string, optional) | Alternate Electronic Business Poc City   |
| altElecPocBusStateOrProv (string, optional) | Alternate Electronic Business Poc State Or Province  |
| altElecPocBusPostalCode (string, optional) | Alternate Electronic Business Poc Postal Code  |
| altElecPocBusZipPlus4 (string, optional) | Alternate Electronic Business Zip Plus4   |
| altElecPocBusCountryCode (string, optional) | Alternate Electronic Business Poc Country Code   |
| altGovtBusPocFirstName (string, optional) | Alternate Government Business Poc First Name   |
| altGovtBusPocMidInitial (string, optional) | Alternate Government Business Poc Middle Initial   |
| altGovtBusPocLastName (string, optional) | Alternate Government Business Poc Last Name   |
| altGovtBusPocTitle (string, optional) | Alternate Government Business Poc Title   |
| altGovtBusPocUsPhone (string, optional) | Alternate Government Business Poc US Phone   |
| altGovtBusPocUsPhoneExt (string, optional) | Alternate Government Business Poc Us Phone Ext   |
| altGovtBusPocNonUsPhone (string, optional) | Alternate Government Business Poc Non US Phone   |
| altGovtBusPocFaxUsOnly (string, optional) | Alternate Government Business Poc Fax US Only   |
| altGovtBusPocEmail (string, optional) | Alternate Government Business Poc Email   |
| altGovtBusPocStAdd1 (string, optional) | Alternate Government Business Poc Street Address 1   |
| altGovtBusPocStAdd2 (string, optional) | Alternate Government Business Poc Street Address 2   |
| altGovtBusPocCity (string, optional) | Alternate Government Business Poc City   |
| altGovtBusPocStateOrProv (string, optional) | Alternate Government Business Poc State Or Province   |
| altGovtBusPocPostalCode (string, optional) | Alternate Government Business Poc Postal Code   |
| altGovtBusPocZipPlus4 (string, optional) | Alternate Government Business Poc Zip Plus4   |
| altGovtBusPocCountryCode (string, optional) | Alternate Government Business Poc Country Code   |
| pastPerfPocPocFirstName (string, optional) | Past Performance Poc First Name   |
| pastPerfPocPocMidInitial (string, optional) | Past Performance Poc Middle Initial   |
| pastPerfPocPocLastName (string, optional) | Past Performance Poc Last Name   |
| pastPerfPocPocTitle (string, optional) | Past Performance Poc Title   |
| pastPerfPocUsPhone (string, optional) | Past Performance Poc US Phone   |
| pastPerfPocUsPhoneExt (string, optional) | Past Performance Poc US Phone Ext   |
| pastPerfPocNonUsPhone (string, optional) | Past Performance Poc Non US Phone   |
| pastPerfPocFaxUsOnly (string, optional) | Past Performance Poc Fax US Only   |
| pastPerfPocEmail (string, optional) | Past Performance Poc Email   |
| pastPerfPocStAdd1 (string, optional) | Past Performance Poc Street Address 1   |
| pastPerfPocStAdd2 (string, optional) | Past Performance Poc Street Address 2   |
| pastPerfPocCity (string, optional) | Past Performance Poc City   |
| pastPerfPocStateOrProv (string, optional) | Past Performance Poc Sate Or Province   |
| pastPerfPocZipPostalCode (string, optional) | Past Performance Poc Zip Postal Code   |
| pastPerfPocZipCodePlus4 (string, optional) | Past Performance Poc Zip Code Plus4   |
| pastPerfPocCountryCode (string, optional) | Past Performance Poc Country Code   |
| altPastPerfPocFirstName (string, optional) | Alternate Past Performance Poc First Name   |
| altPastPerfPocMidInitial (string, optional) | Alternate Past Performance Poc Middle Initial   |
| altPastPerfPocLastName (string, optional) | Alternate Past Performance Poc Last Name   |
| altPastPerfPocTitle (string, optional) | Alternate Past Performance Poc Title   |
| altPastPerfPocUsPhone (string, optional) | Alternate Past Performance Poc US Phone   |
| altPastPerfPocUsPhoneExt (string, optional) | Alternate Past Performance Poc US Phone Ext   |
| altPastPerfPocNonUsPhone (string, optional) | Alternate Past Performance Poc Non US Phone   |
| altPastPerfPocFaxUsOnly (string, optional) | Alternate Past Performance Poc Fax US Only   |
| altPastPerfPocEmail (string, optional) | Alternate Past Performance Poc Email   |
| altPastPerfPocStAdd1 (string, optional) | Alternate Past Performance Poc Street Address 1   |
| altPastPerfPocStAdd2 (string, optional) | Alternate Past Performance Poc Street Address 2   |
| altPastPerfPocCity (string, optional) | Alternate Past Performance Poc City   |
| altPastPerfPocStateOrPrv (string, optional) | Alternate Past Performance Poc Sate Or Province   |
| altPastPerfPocPostalCode (string, optional) | Alternate Past Performance Poc Zip Postal Code   |
| altPastPerfPocZipPlus4 (string, optional) | Alternate Past Performance Zip Code Plus4   |
| altPastPerfPocCountryCode (string, optional) | Alternate Past Performance Poc CountryCode   |
| exclusionName (string, optional) | Exclusion Name   |
| excludedBy (string, optional) | Excluded By   |
| activeDate (date, optional) | Active Date   |
| terminationDate (string, optional) | Termination Date   |
| classification (string, optional) | Classification   |
| exclusionDetailLink (string, optional) | Exclusion Detail Link   | 

**Endpoint:** https://api.sam.gov/prod/entities/multiple/<duns>?api_key=< value >

**Description** Restful endpoint to retrieve Multiple Entity detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| duns | It can contain just 9 digits duns separated by '+'. Example: '' |

**Expected Result**

Same response as mentioned above applies for multiple duns.


### Entity Extract API

**Endpoint:** https://api.sam.gov/prod/entity-extract?api_key=< value >&format=<Format Type>&emailId=<a valid email address>

**Description**  Restful endpoint to retrieve Entity data service detail information in the form of csv or json format instead of paginated.

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| activationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&activationDate=02/12/1999' |
| cageCode | The exact 5 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&cageCode=00000' |
| dbaName | Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&dbaName=ALLTEL' |
| delinquentFederalDebtFlag | It can contain just Y or N or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&delinquentFederalDebtFlag=Y' |
| disasterResponseCounter | It can contain just 4 digit value, If it is greater than 0000, then the tag registry Flag will be set as Yes, If it is 0000, then the tag registryFlag will be set as No.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&disasterResponseCounter=0000' |
| dodaac | It can contain just 9 character value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&dodaac=025114695' |
| duns  | It can contain just 9 digits duns.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&duns=025114695' |
| entityStructure  | It can contain just 2 character code or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&entityStructure=Z1' |
| exclusionStatusFlag | It can contain just D or null.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&exclusionStatusFlag=D' |
| expirationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&expirationDate=02/12/1999' |
| legalBusinessName | It can contain just Partial or Complete value.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&legalBusinessName=ALLTEL ' |
| primaryNaics | It can contain just 6 digit NAICS, accepts multiple NAICS.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&primaryNaics=51331' |
| purposeOfRegistration | It can contain just 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&purposeOfRegistration=Z2' |
| registrationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&registrationDate=02/12/1999' |
| samCity | City name.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCity=Herndon' |
| samCongressionalDistrict | It can contain 2 characters.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCongressionalDistrict=AR' |
| samCountryCode | It can contain just 3 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samCountryCode=USA' |
| samExtractCode  | It can contain just 1 character code (A or E).<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samExtractCode=A' |
| samProvinceOrState  | It can contain just 2 character code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samProvinceOrState=AR' |
| samZipPostalCode | It can contain just 5 digit zip code.<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&samZipPostalCode=022011' |
| includeSections | It can contain just values of section name (coreData, assertions, repsAndCerts, mandatoryPOCs, optionalPOCs).<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&includeSections=[coreData]' |
| format | It can contain CSV/Json (not case sensitive).<br><br> Example: 'https://api.sam.gov/prod/entity-extract?api_key=< value >&format=CSV' |


**Expected Result**

Same response as mentioned above applies excluding below fields 
 * exclusionName
 * excludedBy
 * activeDate
 * terminationDate
 * classification 
 * exclusionDetailLink


### Exclusion API

**Endpoint:** https://api.sam.gov/prod/exclusions/< samNumber >%2B< agency >%2B< type >%2B< ctCode >?api_key=< value >

**Description** Restful endpoint to retrieve Exclusion data service detail information

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| exclusionDetails | SAM Number+agency+type+ctCode. All fields are '+' separated. Null elements are replaced by 'NA'.<br><br>Example: 'https://api.sam.gov/prod/exclusions/S4MR3NW55+NA+3+03-SDGT-01?api_key=< value >' |


**Expected Result**

| Name  | Description |
| ---- | ----------- |
| prefix(string, optional) | Prefix | 
| firstName(string, optional) | First Name  | 
| middleName(string, optional) | Middle Name  | 
| lastName(string, optional) | Last Name  | 
| suffix(string, optional) | Suffix  | 
| companyName(string, optional) | Company Name | 
| duns(string, optional) | DUNS  | 
| duns4 (string, optional) | DUNS4  | 
| cageCode(string, optional) | Cage Code  | 
| npi(string, optional) | NPI  |
| address1(string, optional) | Address 1  |
| address2(string, optional) | Address 2  |
| addressCity(string, optional) | Address City  |
| addressState(string, optional) | Address State  |
| addressZip (string, optional) | Address Zip  |
| addressZipPlus4(string, optional) | Address Zip Plus 4  |
| country(string, optional) | Country  |
| classificationType(string, optional) | Classification Type  |
| excludingAgencyCode(string, optional) | Excluding Agency Code  |
| excludingAgencyName(string, optional) | Excluding Agency Name  |
| activateDate(string, optional) | Activate Date   |
| terminationDate(string, optional) | Termination Date   |
| exclusionType	 (string, optional) | Exclusion Type  |
| exclusionProgram(string, optional) | Exclusion Program   |
| additionalComments(string, optional) | Additional Comments   |
| ctCode(string, optional) | CT Code   |
| recordStatus(string, optional) | Record Status   |
| recordCreateDate(string, optional) | Record Create Date   |
| recordUpdateDate(string, optional) | Record Update Date  |
| dnbInvestigationStatus(string, optional) | DNB Investigation Status   |
| crossReferences(string, optional) | Corporate URL   |
| moreLocations(list, optional) | Congressional District   |
| callSign(string, optional) | Call Sign   |
| type(string, optional) | Type   |
| tonnage(string, optional) | Tonnage   |
| grt(string, optional) | GRT  |
| flag(string, optional) | Flag   |
| owner(string, optional) | Owner   |
| secondaryAddress(Address, optional) | Secondary Address   |

### Exclusion Extract API

**Endpoint:** https://api.sam.gov/prod/exclusion-extract?api_key=< value >&format=<Format Type>&emailId=<a valid email address>

**Description**  Restful endpoint to retrieve Awards data service detail information in the form of csv or json format instead of paginated.

**Query String Parameters**

| Parameter Name | Description |
| ---- | ----------- |
| classification | It can contain Individual, Firm, Vessel, Special Entity Designation ,null.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&classification=Individual' |
| exclusionName | It can contain partial text or a complete text.A value provided for this search filter will scan through six columns (Full Name, Prefix, First Name, Middle Name, Last Name, and Suffix) to locate if there is a text match.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&exclusionName=Ales S' |
| stateProvince | Sate Or Province.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&stateProvince=NC' |
| country | Country.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&country=USA' |
| zipCode | Zip Code.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&zipCode=22042' |
| duns | It can contain just 9 digits duns.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&duns=9725565' |
| excludingAgency | Excluding Agency.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&excludingAgency=AF' |
| ctCode | CT CODE.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&ctCode=03-SDNTK-01' |
| activationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&activationDate=02/12/1999' |
| terminationDate | A single Date or Date range. Format: MM/dd/yyyy.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&terminationDate=02/12/1999' |
| cageCode | The exact 5 character value.<br><br> Example: 'https://api.sam.gov/prod/exclusion-extract?api_key=< value >&cageCode=00000'  |

**Expected Result**

Same response as mentioned above applies.



## OpenAPI Specification File 

You can view the full details of this API in the OpenAPI Specification files available here:
* <a href="v1/entity_api.yaml">Open API specification file for the Entity API</a>
* <a href="v1/exclusion_api.yaml">Open API specification file for the Exclusion API</a>

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Application Level Error Messages: <br><br>  * Date should be specified in the format: MM/dd/YYYY. <br><br> * Duns Should Contain Only Numeric value. <br><br> * Duns can only be 9 digits. <br><br> * Invalid Input Parameters (Only Applicable for incorrect filter name). <br><br>  * The value null/empty is not valid for parameter Query Param (q). <br><br>  * The parameters: 'emailId' or 'exclusionName' are not permitted inside Query Param(q). <br><br>  * Schema filtering param contains invalid value (Valid values for the Schema Filtering are includeSections, excludeSections, or nasaSpecificElements). <br><br>  * Extract File Generation is Still in Progress. <br><br> * Requested File is Expired and cannot be downloaded. <br><br> * Extract File Not Found and we are not able to process your request.  |
| 403 | API key is not correct or was not provided. |


<p><small><a href="#">Back to top</a></small></p>

## Contact Us

<p><small><a href="#">Back to top</a></small></p>

