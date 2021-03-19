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

Every day, the <a href="https://digital.gov/site-scanning/">Site Scanning program</a> runs a scanning engine to dynamically pull down lists of domains from various sources and then scan them with a collection of scan plugins to gather data on them. This data is created in the json format and is indexed in an elasticsearch datastore, where it can be searched by an API written in the Django REST Framework.

The [Site Scanning Query Builder](https://site-scanning.api.data.gov/) offers a simple means of creating API queries that target specific subsets of data (e.g. by agency, base domain, or redirect status).  

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
    registrationSource: 'gsa-open',

    // Enter the API key you signed up for and specially configured for this
    // API key signup embed form.
    apiKey: 'Wjww6pZMosePwXxnz7foeWBYa0ADCcw1NIMfuOoP',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.gsa.gov/technology/site-scanner/v1/scans/?format=json&api_key={{api_key}}',



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
    // verifyEmail: true,

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

The scan API has two endpoints:
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
   "scan_date":"2021-01-10T13:49:22.125Z",
   "target_url_domain":"usps.gov",
   "scan_status":"completed",
   "final_url":"https://dbcalc.usps.com/",
   "final_url_live":true,
   "final_url_domain":"usps.com",
   "final_url_MIMEType":"text/html",
   "final_url_same_domain":false,
   "final_url_status_code":200,
   "final_url_same_website":false,
   "target_url_404_test":false,
   "target_url_redirects":true,
   "solutions_scan_status":"completed",
   "uswds_usa_classes":0,
   "uswds_string":0,
   "uswds_tables":-20,
   "uswds_inline_css":0,
   "uswds_favicon":0,
   "uswds_string_in_css":0,
   "uswds_favicon_in_css":0,
   "uswds_merriweather_font":0,
   "uswds_publicsans_font":0,
   "uswds_source_sans_font":0,
   "uswds_semantic_version":null,
   "uswds_version":0,
   "uswds_count":-20,
   "dap_detected_final_url":true,
   "dap_parameters_final_url":{
      "agency":"USPS"
   },
   "og_title_final_url":null,
   "og_description_final_url":null,
   "og_article_published_final_url":null,
   "og_article_modified_final_url":null,
   "main_element_present_final_url":false,
   "robots_txt_final_url":"https://dbcalc.usps.com/robots.txt",
   "robots_txt_final_url_status_code":200,
   "robots_txt_final_url_live":true,
   "robots_txt_detected":true,
   "robots_txt_final_url_MIMETYPE":"text/plain",
   "robots_txt_target_url_redirects":true,
   "robots_txt_final_url_size_in_bytes":165,
   "robots_txt_crawl_delay":null,
   "robots_txt_sitemap_locations":null,
   "sitemap_xml_detected":true,
   "sitemap_xml_final_url_status_code":200,
   "sitemap_xml_final_url":"https://dbcalc.usps.com/sitemap.xml",
   "sitemap_xml_final_url_live":true,
   "sitemap_xml_target_url_redirects":true,
   "sitemap_xml_final_url_filesize_in_bytes":16455,
   "sitemap_xml_final_url_MIMETYPE":"text/html",
   "sitemap_xml_count":0,
   "sitemap_xml_pdf_count":0,
   "third_party_service_domains":[
      "www.googletagmanager.com",
      "www.google-analytics.com",
      "dap.digitalgov.gov",
      "connect.facebook.net",
      "static.ads-twitter.com",
      "s.pinimg.com",
      "alb.reddit.com",
      "t.co",
      "ct.pinterest.com",
      "www.facebook.com",
      "analytics.twitter.com"
   ],
   "third_party_service_count":11,
   "target_url":"dbcalc.usps.gov",
   "target_url_branch":"Executive",
   "target_url_agency_owner":"United States Postal Service",
   "target_url_agency_code":null,
   "target_url_bureau_owner":"U.S. Postal Service",
   "target_url_bureau_code":null
}
```

<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the <a href="https://api.gsa.gov/technology/site-scanning/v1/api-json">OpenAPI Specification file available here</a>.

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

## Query Builder 

The [Site Scanning Query Builder](https://site-scanning.api.data.gov/) offers a simple means of creating API queries that target specific subsets of data (e.g. by agency, base domain, or redirect status).  

## Download the Data Directly

In order to download all of the scan data as a flat file, the system generates a CSV and JSON export every weekend.  This data can be accessed at:  
  
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv)
* [https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json)
  
## Contact Us

Please reach out with any questions or feedback by [filing an issue here](https://github.com/18F/site-scanning/issues) or [emailing the team](mailto:site-scanning@gsa.gov).  

<p><small><a href="#">Back to top</a></small></p>
