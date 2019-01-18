---
title: Awards API
banner-heading: Awards API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >


## Overview

The Public Awards API will facilitate users to access the public contract data in the JSON format.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started 

Users must use the Beta (Prod) request URL to access the API data -https://api.sam.gov/prod/contractdata?api_key=<value>&page=<value>&size=<value>
    
Alpha (Prodlike) is used for testing only and here is the sample URL - https://api-alpha.sam.gov/prodlike/contractdata?api_key=<value>&page=<value>&size=<value>

To generate the API key:
* A registered user can request for a public API on 'Account Details' page.
* After the API Key is generated on Account Details page, the API Key can be viewed on the Account Details page immediately. The API   Key is visible until the user accesses a different page. As soon as a user accesses a different page and comes back to the Account Details page, API Key details are hidden.
* When an API Key generation/retrieval error is encountered, display a message to the user stating an error was encountered, try your request again.
* User must to enter their password to view API Key information on Account Details page. If an incorrect password is entered, display an error message stating the password is incorrect and try again.

Information about Page and Size:
* Page and Size are optional fields; Page starts from 0; Size starts from 1.
* Maximum allowed Size per request and per Page is 10 records.
* If Page and Size are not provided in the API request, then they will be defaulted to 0 and 10 respectively.
* If Size is provided as 0, then it will be defaulted to 10. Additionally, if a value of more than 10 is provided for the Size, an error will be displayed to indicate that the size is more than 10.
* Elastic search can navigate only to the first 10,000 records within each search, irrespective of the total number of records. Please provide values for Page and Size accordingly.

<p><small><a href="#">Back to top</a></small></p>

## API Calls
These RESTFUL endpoints are to retrieve Awards data service detail information

{% include swagger-section-header.html %}
    url: "v1/openapi.yaml", 
{% include swagger-section-footer.html %}


<p><small><a href="#">Back to top</a></small></p>

## FAQ



<p><small><a href="#">Back to top</a></small></p>

## Contact Us

If you are unable to post an an issue in GitHub, email us at example@gsa.gov.

<p><small><a href="#">Back to top</a></small></p>

