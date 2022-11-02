---
title: Site Scanning API
banner-heading: Site Scanning API
---

<!-- Alpha status alert -->
<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <strong>
       This project is in ALPHA
     </strong>
     <p class="usa-alert-text">
       This API is under active development, and breaking changes may be made without warning.
       Have feedback or questions? <a href="http://github.com/18F/site-scanning/issues/">Please let us know</a>!
     </p>
   </div>
 </div>
<!-- end Alpha status alert -->

## Overview

Every day, the <a href="https://digital.gov/site-scanning/">Site Scanning program</a> runs a scanning engine to dynamically pull down lists of domains from various sources and then scan them with a collection of scan plugins to gather data on them. 

The resulting data that populates this API then can be seen as having two main utilities: 
* Providing a fairly comprehensive dataset of US federal government websites.  
* Providing various information and analysis about each of these websites.  

In addition to querying the data via API, you can also [download it directly](#download-the-data-directly) as a CSV or JSON file.  

<p><small><a href="#">Back to top</a></small></p>

## Getting Started

To begin using this API, you will need to register for an API Key. You can sign up for an API key below.  After registration, you will need to provide this API key in the `x-api-key` HTTP header with every API request.


{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    // Pick a short, unique name to identify your site, like 'gsa-auctions'
    // in this example.
    registrationSource: 'gsa-site-scanning',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    // exampleApiUrl: 'https://api.gsa.gov/technology/site-scanning/v1/websites?api_key={{api_key}}',



    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://github.com/18F/site-scanning/issues',

    // OPTIONAL: Set to true to verify the user's e-mail address by only
    // sending them their API key via e-mail, and not displaying it on the
    // signup confirmation web page. Defaults to false.
    verifyEmail: true,

    // OPTIONAL: Set to false to disable sending a welcome e-mail to the
    // user after signing up. Defaults to true.
    // sendWelcomeEmail: false,

    // OPTIONAL: Provide the name of your developer site. This will appear
    // in the subject of the welcome e-mail as "Your {{siteName}} API key".
    // Defaults to "api.data.gov".
    // siteName: 'GSA Developer Network',

    // OPTIONAL: Provide a custom sender name for who the welcome email
    // appears from. The actual address will be "noreply@api.data.gov", but
    // this will change the name of the displayed sender in this fashion:
    // "{{emailFromName}} <noreply@api.data.gov>". Defaults to "".
    // emailFromName: 'GSA Developer Network',

    // OPTIONAL: Provide an extra input field to ask for the user's website.
    // Defaults to false.
    // websiteInput: true,

    // OPTIONAL: Provide an extra checkbox asking the user to agree to terms
    // and conditions before signing up. Defaults to false.
    // termsCheckbox: true,

    // OPTIONAL: If the terms & conditions checkbox is enabled, link to this
    // URL for your API's terms & conditions. Defaults to "".
    // termsUrl: "https://agency.gov/api-terms/",
  };

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var apiUmbrella = document.createElement('script'); apiUmbrella.type = 'text/javascript'; apiUmbrella.async = true;
    apiUmbrella.src = 'https://api.data.gov/static/javascripts/signup_embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(apiUmbrella);
  })();
</script>
<noscript>Please enable JavaScript to signup for an <a href="http://api.data.gov/">api.data.gov</a> API key.</noscript>
{% endraw %}  

| HTTP Header Name | Description |
| ---- | ----------- |
| x-api-key | API key from api.data.gov.  For sample purposes, you can use `DEMO_KEY` as an API key. |




<p><small><a href="#">Back to top</a></small></p>

## API Description

The endpoint begins at [https://api.gsa.gov/technology/site-scanning/v1/websites](https://api.gsa.gov/technology/site-scanning/v1/websites)

#### Scans 

The scan API has two endpoints for scan data:
  - `/websites/` returns scan data for all targeted websites.  This is a paginated endpoint, so to see all the data, you will need to iterate through all the pages.
  - `/websites/[target_url]` returns scan data for a particular website (specified by replacing `[target_url]` with the desired target url.  

#### Query Options

The `/websites/` endpoint can be queried in numerous ways.  

* `target_url`  
* `target_url_domain`  
* `final_url_domain`  
* `final_url_live`  
* `target_url_redirects`  
* `target_url_agency_owner`  
* `target_url_bureau_owner`  
* `scan_status`  
* `dap_detected_final_url` 

In order to filter by multiple parameters, include an `&` in between each.   

#### Example Analysis Queries

* https://api.gsa.gov/technology/site-scanning/v1/websites?target_url_domain=gsa.gov
* https://api.gsa.gov/technology/site-scanning/v1/websites?final_url_domain=gsa.gov
* https://api.gsa.gov/technology/site-scanning/v1/websites?target_url_agency_owner=General%20Services%20Administration
* https://api.gsa.gov/technology/site-scanning/v1/websites?final_url_domain=gsa.gov&target_url_redirects=true


#### Pagination and Limits

The following parameters can be added to change the nature of the return.  

Parameters:
* `limit={x}` - Changes the return to include x results
* `page={y}` - Returns the y page of results


#### API Return Metadata and Links

Each query to the `websites` endpoint will also include the following fields:  

* `totalItems` - how many results are included in this query. 
* `itemCount` - how many results are included in this return.  
* `itemsPerPage` - how many results this return is configured to return.  
* `totalPages` - how many pages of results exist for this query.  
* `currentPage` - which page of results this return is showing.  

The return also includes the following links for convenience: 

* `first` -  the URL that will return the first page of results for this query.
* `previous` - the URL that will return the previous page of results for this query.
* `next` - the URL that will return the next page of results for this query.
* `last` - the URL that will return the last page of results for this query.

Note that the results are ordered in descending alphabetical order for the `target_url` field.  



#### Sample Result

```
{
  "scan_date": "2022-06-29T00:30:02.908Z",
  "not_found_scan_status": "completed",
  "primary_scan_status": "completed",
  "robots_txt_scan_status": "completed",
  "sitemap_xml_scan_status": "completed",
  "dns_scan_status": "completed",
  "target_url_domain": "gsa.gov",
  "final_url": "https://www.gsa.gov/",
  "final_url_live": true,
  "final_url_domain": "gsa.gov",
  "final_url_mimetype": "text/html",
  "final_url_same_domain": true,
  "final_url_status_code": 200,
  "final_url_same_website": false,
  "target_url_404_test": true,
  "target_url_redirects": true,
  "uswds_usa_classes": 55,
  "uswds_string": 2,
  "uswds_tables": 0,
  "uswds_inline_css": 3,
  "uswds_favicon": 20,
  "uswds_string_in_css": 20,
  "uswds_favicon_in_css": 0,
  "uswds_merriweather_font": 0,
  "uswds_publicsans_font": 0,
  "uswds_source_sans_font": 5,
  "uswds_semantic_version": "v3.0.1",
  "uswds_version": 20,
  "uswds_count": 125,
  "dap_detected_final_url": true,
  "dap_parameters_final_url": {
    "agency": "GSA",
    "subagency": "OSC",
    "sp": "query",
    "enhlink": "true",
    "yt": "false"
  },
  "og_title_final_url": "Home",
  "og_description_final_url": "Front Page for the GSA.gov website",
  "og_article_published_final_url": null,
  "og_article_modified_final_url": null,
  "main_element_present_final_url": true,
  "robots_txt_final_url": "https://www.gsa.gov/robots.txt",
  "robots_txt_final_url_status_code": 200,
  "robots_txt_final_url_live": true,
  "robots_txt_detected": true,
  "robots_txt_final_url_mimetype": "text/plain",
  "robots_txt_target_url_redirects": true,
  "robots_txt_final_url_filesize_in_bytes": 2189,
  "robots_txt_crawl_delay": 10,
  "robots_txt_sitemap_locations": null,
  "sitemap_xml_detected": false,
  "sitemap_xml_final_url_status_code": 404,
  "sitemap_xml_final_url": "https://www.gsa.gov/sitemap.xml",
  "sitemap_xml_final_url_live": false,
  "sitemap_xml_target_url_redirects": true,
  "sitemap_xml_final_url_filesize_in_bytes": null,
  "sitemap_xml_final_url_mimetype": "text/html",
  "sitemap_xml_count": null,
  "sitemap_xml_pdf_count": null,
  "third_party_service_domains": [
    "8808.global.siteimproveanalytics.io",
    "dap.digitalgov.gov",
    "gsasolutionssecure.gsa.gov",
    "img03.en25.com",
    "maps.googleapis.com",
    "search.usa.gov",
    "siteimproveanalytics.com",
    "www.google-analytics.com",
    "www.googletagmanager.com",
    "zn5alubksv6xx7dxv-cemgsa.gov1.siteintercept.qualtrics.com"
  ],
  "third_party_service_count": 10,
  "dns_ipv6": true,
  "login_detected": null,
  "target_url": "gsa.gov",
  "target_url_branch": "Executive",
  "target_url_agency_owner": "General Services Administration",
  "target_url_agency_code": 23,
  "target_url_bureau_owner": "GSA, IDI, ECAS II",
  "target_url_bureau_code": null,
  "source_list_federal_domains": true,
  "source_list_dap": true,
  "source_list_pulse": true
}
```

#### Analysis Endpoint

There is also an analysis endpoint located at [https://api.gsa.gov/technology/site-scanning/v1/analysis](https://api.gsa.gov/technology/site-scanning/v1/analysis)
   
Instead of scan data, it returns some analysis on an API query, namely: 

* How many websites it returns - (target_url)
* How many domains are represented in the results - (final_url_domain)
* How many agencies are represented in the results - (target_url_domain_owners)

#### Example Analysis Queries

* https://api.gsa.gov/technology/site-scanning/v1/analysis
* https://api.gsa.gov/technology/site-scanning/v1/analysis?target_url_domain=gsa.gov
* https://api.gsa.gov/technology/site-scanning/v1/analysis?final_url_domain=gsa.gov&target_url_redirects=true
* https://api.gsa.gov/technology/site-scanning/v1/analysis?target_url_agency_owner=General%20Services%20Administration

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the <a href="https://api.gsa.gov/technology/site-scanning/v1/api-json?api_key=DEMO_KEY">OpenAPI Specification file available here</a>.
   
<p><small><a href="#">Back to top</a></small></p>

## Data Dictionary

You can find a complete description of each field in the <a href="https://github.com/GSA/site-scanning-documentation/blob/main/data/Site_Scanning_Data_Dictionary.csv">Site Scanning data dictionary</a>.

<p><small><a href="#">Back to top</a></small></p>

## HTTP Response Codes

The API will return one of the following responses:

| HTTP Response Code | Description |
| ---- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parmaters that were provided. |
| 403 | API key is not correct or was not provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

<p><small><a href="#">Back to top</a></small></p>


## Download the Data Directly

In order to download all of the scan data as a flat file, the system generates two sets of CSV and JSON exports every weekend.  The primary set includes scan data for all live URLs (those that return a 2xx server code).  This data can be accessed at:  
  
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv)
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json)
   
The second set includes scan data for all URLs that were scanned, regardless of whether they are live or not (some may be inaccessible over the public internet, no longer live, or experiencing downtime).  This data can be accessed at:
   
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.csv](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.csv)
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.json](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.json)
   
  
## Contact Us

Please reach out with any questions or feedback by [filing an issue here](https://github.com/18F/site-scanning/issues) or [emailing the team](mailto:site-scanning@gsa.gov).  

<p><small><a href="#">Back to top</a></small></p>
