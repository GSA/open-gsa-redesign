---
title: Beta.SAM.Gov Public Location Services API
banner-heading: Beta.SAM.Gov Public Location Services API
---

## Overview

The Public Location Services API will allow users to retrieve location data needed for opportunities

## Getting Started

Public Location Services API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov/prod
* Alpha: https://api-alpha.sam.gov/prodlike

### Authorization

In order to use Public Location Services API, the following is required:
* Valid beta.SAM.GOV federal government system account API Key

#### Generating a System Account API Key
* Users registered with a government email address and have appropriate System Account Manager or System Account Admin role may request a system account for data access.
* If a user satisfies the above registration criteria they will be able to access the System Accounts widget from their Workspace page after logging in.
* The user can then select “Request System Account” from the widget and fill out the required sections with appropriate Contract Opportunities permissions.
* The requested system account will then need to be approved. After approval the user will be notified via email and they can also see the updated status in the System Account widget.
* The user can select ‘Go to System Accounts’ in the widget from their workspace and enter a new system account password.
* After setting up the password the user will see a new section for retrieving a system account API Key. The user must enter their password again to retrieve the key.

## Public Location Services API Request and Responses

### Look Up Cities

------- | -------
**Request Type** | GET
**URL** | /locationservices/lookup/cities
**Summary** | Get list of cities
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
cc | query | string | No | Enter the 3-digit Country Code to retrieve the cities within that Country. For example: United States would be USA
searchby | query | string | No | Enter the search parameter to search counties information by stateid, statecode, statename, zipcode, cdist(Congressional District)
searchvalue | query | string | No | Enter the searchvalue for searchby parameter. For example: If searchby is statecode provide search value as VA; if searchby is cdist provide search value as Virginia-01
q | query | string | No | Enter the City Name you want to retrieve information for. Note q will operate as Autocomplete as well
active | query | string | No | The active indicator specifies whether the city is active or inactive. Type "Y" for a list of active city names. Type "N" for a list of inactive city names
citycode | query | string | No | Enter the city code

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON 

Response Element | Response Type |  Description
-----------------|---------------|------------
cityCode | string | City Code
city | string | City Name
state | JSON Array|
state.statecode | string | State Code
state.state | string | State Name
country| JSON Array|
country.country | string | Country Name
country.code2 | string | Country Code 2
country.code | string | Country Code
href | URL | Link to the response

### Look Up Countries

------- | -------
**Request Type** | GET
**URL** | /locationservices/lookup/countries
**Summary** | Get list of countries
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
searchby | query | string | No |  Enter the parameter to search the Country information by. To search by Country Name, type countryname; to search by the 2-digit Country Code, type iso2; to search by the 3-digit Country Code, type iso3; to search by the fips code2, fipscode2
q | query | string | No |  Enter the value of the parameter you typed for searchby. For example, countryname could be United States; iso2 could be US; iso3 could be USA; fipscode2 could be US. If the searchby field is left blank, q would operate as Autocomplete
active | query | string | No | The active indicator specifies whether the city is active or inactive. Type "Y" for a list of active city names. Type "N" for a list of inactive city names

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON 

Response Element | Response Type |  Description
-----------------|---------------|------------
country | string | Country Name
countryFullName | string | Full Name of Country
countryCode2 | string | Country Code 2
countrycode | string | Country Code
href | URL Link to the response

### Look Up States

------- | -------
**Request Type** | GET
**URL** | /locationservices/lookup/states
**Summary** | Get list of states
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
cc | query | string | No | Enter the 3-digit Country Code to retrieve the States within that Country. For example: United States would be USA
searchby | query | string | No | Enter the search parameter to search the state information by. To search by state code, type state code; to search by state name, type statename; to search by state type, type statetype
q | query | string | No |  Enter the value of the parameter for searchby. For example, statename could be Virginia; statecode could be VA; statetype could be State. The following statetype are available: State, Capital, Military, Minor Outlying Islands, Associated State, and Territory. You can input multiple values for the parameter by separating the values by a comma (for example: if searchby is statetype, q could be Military, Capital. This would return the Military and Capital states). If the searchby field is left blank, q would operate as Autocomplete
active | query | string | No | The active indicator specifies whether the city is active or inactive. Type "Y" for a list of active city names. Type "N" for a list of inactive city names

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON 

Response Element | Response Type |  Description
-----------------|---------------|------------
statecode | string | State Code
state | string | State
stateType| string | State Type
country | JSON Array
country.country | string | Country Name
country.countryFullName | string | Full Name of Country
country.countryCode2 | string | Country Code 2
countrycode | string | Country Code
href | URL Link to the response

### Validate Zip Code

------- | -------
**Request Type** | GET
**URL** | /locationservices/validate/zip
**Summary** | Validate Zip Code
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
zip | query | string | Yes | Enter the zip or zip plus 4 code
citycode | query | string | No | Enter the city code
countycode | query | string | No | Enter the county code
statecode | query | string | No | Enter the state code

Responses

HTTP Status Code | Response Type | Reason  | Description
-----------------|---------------|---------|------------
200 | string | List of Opportunities | JSON 

Response Element | Response Type |  Description
-----------------|---------------|------------


## Example



## OpenAPI Specification File

<details>
<summary>Look Up Cities</summary>
<p>
<code><pre>
/locationservices/lookup/cities:
    get:
      tags:
        - locationservices
      summary: 'API to get a list of cities'
      operationId: getlocationserviceslookupcities
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        -
          name: api_key
          in: query
          description: api_key
          required: true
          type: string
        -
          name: cc
          in: query
          description: cc
          required: false
          type: string
        -
          name: searchby
          in: query
          description: searchby
          required: false
          type: string
        -
          name: searchvalue
          in: query
          description: searchvalue
          required: false
          type: string
        -
          name: q
          in: query
          description: q
          required: false
          type: string
        -
          name: active
          in: query
          description: active
          required: false
          type: string
        -
          name: citycode
          in: query
          description: city code
          required: false
          type: string
      responses:
        '200':
          description: OK
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: 'Not Found'
</pre></code>
</p>
</details>

<details>
<summary>Look Up Countries</summary>
<p>
<code><pre>
/locationservices/lookup/countries:
    get:
      tags:
        - locationservices
      summary: 'API to get a list of countries'
      operationId: getlocationserviceslookupcountries
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        -
          name: api_key
          in: query
          description: api_key
          required: true
          type: string
        -
          name: searchby
          in: query
          description: searchby
          required: false
          type: string
        -
          name: q
          in: query
          description: q
          required: false
          type: string
        -
          name: active
          in: query
          description: active
          required: false
          type: string
      responses:
        '200':
          description: OK
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: 'Not Found'
</pre></code>
</p>
</details>

<details>
<summary>Look Up States</summary>
<p>
<code><pre>
/locationservices/lookup/states:
    get:
      tags:
        - locationservices
      summary: 'API to get a list of states'
      operationId: getlocationserviceslookupstates
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        -
          name: api_key
          in: query
          description: api_key
          required: true
          type: string
        -
          name: cc
          in: query
          description: cc
          required: false
          type: string
        -
          name: searchby
          in: query
          description: searchby
          required: false
          type: string
        -
          name: q
          in: query
          description: q
          required: false
          type: string
        -
          name: active
          in: query
          description: active
          required: false
          type: string
      responses:
        '200':
          description: OK
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: 'Not Found'
</pre></code>
</p>
</details>

<details>
<summary>Validate Zip Code</summary>
<p>
<code><pre>
/locationservices/validate/zip:
    get:
      tags:
        - locationservices
      summary: 'API to validate zip codes'
      operationId: getlocationservicesvalidatezip
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        -
          name: api_key
          in: query
          description: api_key
          required: true
          type: string
        -
          name: zip
          in: query
          description: zip
          required: true
          type: string
        -
          name: citycode
          in: query
          description: city code
          required: false
          type: string
        -
          name: countycode
          in: query
          description: county code
          required: false
          type: string
        -
          name: statecode
          in: query
          description: statecode
          required: false
          type: string
      responses:
        '200':
          description: OK
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: 'Not Found'
</pre></code>
</p>
</details>

## HTTP Response Codes

200 - Success

401 – Unauthorized 

403 – Forbidden

404	– Not Found


## FAQ

<p><small><a href="#">Back to top</a></small></p>

## Contact Us

* Reach out to the beta.sam.gov team at [www.fsd.gov](https://www.fsd.gov)

## Change Log

Date | Version | Description
------|---------------|---------
3/27/2020 | v1.0 | Base Version

<p><small><a href="#">Back to top</a></small></p>