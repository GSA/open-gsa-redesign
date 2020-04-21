---
title: Beta.SAM.Gov Public Location Services API
banner-heading: Beta.SAM.Gov Public Location Services API
---

## Overview

The Public Location Services API provides Location Services data (Country, State, City, and ZIP) and is to be used when validating location data being submitted to Beta.SAM.gov ONLY. Beta.SAM is not the authoritative source for location data and is agglomerating data from 3rd parties to operate the application. Location Public Services API only supports United States currently.

*Note: If valid search parameter (e.g. searchby=statecode) from the options listed in the description is not provided, all records will be returned*


## Getting Started

Public Location Services API can be accessed from Beta or Alpha via the following endpoints:
* Beta: https://api.sam.gov (coming soon)
* Alpha: https://api-alpha.sam.gov

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
**URL** | /locationservices/v1/cities
**Summary** | Get list of cities
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters


Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
cc | query | string | No | Enter the 3-digit Country Code to retrieve the cities within that Country <br><br> Example: <br> United States: USA
searchby | query | string | No | Enter the search parameter to search city information: <br>- statecode <br> - statename
searchvalue | query | string | No (Yes if searchby is provided)| Enter the searchvalue for searchby parameter <br><br> Example: <br>statecode: VA <br> statename: Virginia
q | query | string | No | Enter the City Name you want to retrieve information for. Note q also serves as general search
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

*Note: Limit 1000 entries*

Example: Look up cities in Alabama

https://api.sam.gov/locationservices/v1/cities?api_key=[Enter System Account Api Key]&searchby=statecode&searchvalue=AL

<details>
<summary>Response</summary>
<p>
<code><pre>
{
    "_embedded": {
        "cityList": [
            {
                "cityCode": "75960",
                "city": "Thomasville",
                "state": {
                    "stateCode": "AL",
                    "state": "Alabama",
                    "country": {
                        "country": "UNITED STATES",
                        "countryCode2": "US",
                        "countrycode": "USA"
                    }
                },
                "_links": {
                    "self": {
                        "href": ""
                    }
                }
            },
            {
</pre></code>
</p>
</details>

### Look Up Countries

------- | -------
**Request Type** | GET
**URL** | /locationservices/v1/countries
**Summary** | Get list of countries
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
searchby | query | string | No |  Enter the parameter to search the country information: <br> - countryname <br>- iso2 <br>- iso3
q | query | string | No (Yes if searchby is provided)|  Enter the value of the parameter you typed for searchby <br><br> Example:<br> countryname: United States <br> iso2: US <br> iso3: USA <br><br> If searchby is provided, q must have exact spelling to return valid results (ex. United States). If the searchby field is left blank, q would operate general search (ex. United)
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

Example: Look up countries that start with "South"

https://api.sam.gov/locationservices/v1/countries?api_key=[Enter System Account Api Key]&searchby=country&q=south

<details>
<summary>Response</summary>
<p>
<code><pre>
{
    "_embedded": {
        "countryList": [
            {
                "country": "KOREA, SOUTH",
                "countryFullName": "Republic of Korea",
                "countryCode2": "KR",
                "countrycode": "KOR",
                "_links": {
                    "self": {
                        "href": ""
                    }
                }
            }
</pre></code>
</p>
</details>

### Look Up States

------- | -------
**Request Type** | GET
**URL** | /locationservices/v1/states
**Summary** | Get list of states
**Consumes** | Request Parameters
**Produces** | JSON

Request Parameters

Parameter Name | Parameter Type | Data Type  | Required | Description
---------------|----------------|------------|----------|------------
api_key | query | string | Yes | Valid System Account API Key
cc | query | string | No | Enter the 3-digit Country Code to retrieve the States within that Country <br><br> Example: <br> United States: USA
searchby | query | string | No | Enter the search parameter to search the state information <br><br> - statecode <br> - statename <br> - statetype <br>
q | query | string | No (Yes if searchby is provided) |  Enter the value of the parameter for searchby <br><br> Example: <br> statename: Virginia <br> statecode: VA <br> statetype: State (state types: State, Capital, Military, Minor Outlying Islands, Associated State, and Territory) <br><br> You can input multiple values for the parameter by separating the values by a comma (for example: if searchby is statetype, q could be Military, Capital. This would return the Military and Capital states). If the searchby field is left blank, q would operate as general search
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

Example: Look up state of Virginia

https://api.sam.gov/locationservices/v1/states?api_key=[Enter System Account Api Key]&searchby=state&q=VA

<details>
<summary>Response</summary>
<p>
<code><pre>
{
       "_embedded": {
        "stateList": [
            {
                "stateCode": "VA",
                "state": "Virginia",
                "stateType": "State",
                "country": {
                    "country": "UNITED STATES",
                    "countryFullName": "United States of America",
                    "countryCode2": "US",
                    "countrycode": "USA"
                },
                "_links": {
                    "self": {
                        "href": ""
                    }
                }
            }
        ]
    }
}
</pre></code>
</p>
</details>

### Validate Zip Code

------- | -------
**Request Type** | GET
**URL** | /locationservices/v1/zip
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
zipCode | string | Zip Code 
description | string | Status of Zip (Valid or Invalid)

Example: Look up whether 36310 is a valid zip

https://api.sam.gov/locationservices/v1/zip?api_key=[Enter System Account Api Key]&zip=36310

<details>
<summary>Response</summary>
<p>
<code><pre>
{
       "zipCode": "36310"
       "description": "Valid Zip"
}
</pre></code>
</p>
</details>


## OpenAPI Specification 

<details>
<summary>Look Up Cities</summary>
<p>
<code><pre>
/locationservices/v1/cities:
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
/locationservices/v1/countries:
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
/locationservices/v1/states:
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
/locationservices/v1/zip:
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
4/21/2020 | v1.0 | Base Version

<p><small><a href="#">Back to top</a></small></p>