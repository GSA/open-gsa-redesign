---
title: Site Scanning API
banner-heading: Site Scanning API
---

## Overview

Every day, the <a href="https://digital.gov/site-scanning/">Site Scanning program</a> runs a scanning engine to dynamically pull down lists of domains from various sources and then scan them with a collection of scan plugins to gather data on them. 

The resulting data that populates this API then can be seen as having two main utilities: 
* Providing a fairly comprehensive dataset of US federal government websites.  
* Providing various information and analysis about each of these websites.  

In addition to querying the data via API, you can also [download it directly](#download-the-data-directly) as a CSV or JSON file.  

For substantial detail about how the scans work and the nature of the data contained within this API, refer to the [Technical Details page on the program website](https://digital.gov/guides/site-scanning/technical-details/).  

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
scan_date: "2024-12-20T07:55:59.950Z",
not_found_scan_status: "completed",
primary_scan_status: "completed",
robots_txt_scan_status: "completed",
sitemap_xml_scan_status: "timeout",
dns_scan_status: "completed",
target_url_domain: "gsa.gov",
final_url: "https://www.gsa.gov/",
final_url_live: true,
final_url_domain: "gsa.gov",
final_url_media_type: "text/html",
final_url_same_domain: true,
final_url_status_code: 200,
final_url_same_website: false,
target_url_404_test: true,
target_url_redirects: true,
uswds_usa_classes: 115,
uswds_string: 1,
uswds_inpage_css: 0,
uswds_favicon: 20,
uswds_string_in_css: 20,
uswds_favicon_in_css: 0,
uswds_publicsans_font: 0,
uswds_semantic_version: null,
uswds_version: 0,
uswds_count: 156,
dap: true,
dap_parameters: {
agency: "GSA",
sp: "s",
enhlink: "true",
yt: "false"
},
dap_version: "20241218 v8.5 - GA4",
ga_tag_id: "G-dpGwcxf5JKgj9hB,G-CSLL4ZEK4L,G-HBYXWFP794",
og_title: "Home",
og_description: "Our mission is to deliver the best customer experience and value in real estate, acquisition, and technology services to government and the American people.",
og_article_published: null,
og_article_modified: null,
main_element_present: true,
robots_txt_final_url: "https://www.gsa.gov/robots.txt",
robots_txt_final_url_status_code: 200,
robots_txt_final_url_live: true,
robots_txt_detected: true,
robots_txt_final_url_media_type: "text/plain",
robots_txt_target_url_redirects: true,
robots_txt_final_url_filesize: 2027,
robots_txt_crawl_delay: null,
robots_txt_sitemap_locations: null,
sitemap_xml_detected: null,
sitemap_xml_final_url_status_code: null,
sitemap_xml_final_url: null,
sitemap_xml_final_url_live: null,
sitemap_xml_target_url_redirects: null,
sitemap_xml_final_url_filesize: null,
sitemap_xml_final_url_media_type: null,
sitemap_xml_count: null,
sitemap_xml_pdf_count: null,
third_party_service_domains: [
"cdn.evgnet.com",
"dap.digitalgov.gov",
"gov1.siteintercept.qualtrics.com",
"gsafederalacquisitionservice.us-6.evergage.com",
"gsasolutionssecure.gsa.gov",
"img.en25.com",
"maps.googleapis.com",
"www.google-analytics.com",
"www.googletagmanager.com",
"zn0d171ynfuvpjle6-cemgsa.gov1.siteintercept.qualtrics.com"
],
third_party_service_urls: [
"https://cdn.evgnet.com/beacon/gsafederalacquisitionservice/gsa_prod/scripts/evergage.min.js",
"https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js",
"https://dap.digitalgov.gov/web-vitals/dist/web-vitals.attribution.iife.js",
"https://gov1.siteintercept.qualtrics.com/WRSiteInterceptEngine/Asset.php",
"https://gov1.siteintercept.qualtrics.com/WRSiteInterceptEngine/Targeting.php",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/0.23c8d9dd1a66a15d5519.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/1.a0af9a4d429059568f93.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/18.37dd6de6195b54ec2886.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/2.8b513be3d833c767c3ca.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/4.a98bdd106cb25e34d1e8.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/5.ba6d1d2e1492dd3cace1.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/8.372e3f9662e7442947d8.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/9.609ce6f69f3959837215.chunk.js",
"https://gov1.siteintercept.qualtrics.com/dxjsmodule/CoreModule.js",
"https://gsafederalacquisitionservice.us-6.evergage.com/api2/event/gsa_prod",
"https://gsafederalacquisitionservice.us-6.evergage.com/pr",
"https://gsasolutionssecure.gsa.gov/visitor/v200/svrGP",
"https://gsasolutionssecure.gsa.gov/visitor/v200/svrGP.aspx",
"https://img.en25.com/i/elqCfg.min.js",
"https://maps.googleapis.com/maps-api-v3/api/js/59/3a/main.js",
"https://maps.googleapis.com/maps/api/js",
"https://maps.googleapis.com/maps/api/mapsjs/gen_204",
"https://www.google-analytics.com/g/collect",
"https://www.googletagmanager.com/gtag/js",
"https://www.googletagmanager.com/gtm.js",
"https://zn0d171ynfuvpjle6-cemgsa.gov1.siteintercept.qualtrics.com/SIE/"
],
third_party_service_count: 10,
cookie_domains: [
".gsa.gov",
".www.gsa.gov",
"www.gsa.gov"
],
ipv6: true,
login: null,
hostname: "amazonaws.com",
final_url_website: "www.gsa.gov",
final_url_top_level_domain: "gov",
canonical_link: "https://www.gsa.gov/",
cms: "Drupal",
required_links_url: [
"about",
"fear",
"foia",
"inspector",
"usa.gov"
],
required_links_text: [
"about us",
"accessibility",
"budget and performance",
"no fear act",
"foia",
"inspector general",
"usa.gov"
],
login_provider: null,
site_search: true,
search_dot_gov: null,
accessibility_scan_status: "page_frame_not_ready",
accessibility_violations: null,
viewport_meta_tag: true,
title: "Home | GSA",
description: "Our mission is to deliver the best customer experience and value in real estate, acquisition, and technology services to government and the American people.",
performance_scan_status: "timeout",
largest_contentful_paint: null,
cumulative_layout_shift: null,
keywords: null,
og_image: "https://www.gsa.gov/sites/gsa.gov/themes/custom/gsa/custom_assets/images/open_graph_image.jpeg",
og_type: "website",
og_url: "https://www.gsa.gov/gsa-home-page",
language: "en",
language_link: "",
security_scan_status: "completed",
https_enforced: true,
hsts: true,
uswds_usa_class_list: [
"usa-accordion",
"usa-alert",
"usa-banner",
"usa-button",
"usa-date-picker",
"usa-fill",
"usa-footer",
"usa-form",
"usa-form-group",
"usa-header",
"usa-icon",
"usa-identifier",
"usa-input",
"usa-label",
"usa-list",
"usa-logo",
"usa-nav",
"usa-navbar",
"usa-overlay",
"usa-page_categories",
"usa-page_category_item",
"usa-search",
"usa-section",
"usa-select",
"usa-social-link",
"usa-sr-only",
"usa-tooltip"
],
uswds_banner_heres_how: true,
target_url: "gsa.gov",
target_url_top_level_domain: ".gov",
target_url_branch: "Executive",
target_url_agency_owner: "General Services Administration",
target_url_bureau_owner: "General Services Administration",
source_list: [
"gov",
"pulse",
"omb_idea"
],
public: true
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

In order to download all of the scan data as a flat file, the system generates two sets of CSV and JSON exports every weekend.  The primary set includes scan data for all live URLs (i.e. `Final URL - Live` = TRUE), but excludes machine-readable data files (e.g. XML, JSON).  This data can be accessed at:  
  
* [https://api.gsa.gov/technology/site-scanning/data/site-scanning-live-filtered-latest.csv](https://api.gsa.gov/technology/site-scanning/data/site-scanning-live-filtered-latest.csv)
* [https://api.gsa.gov/technology/site-scanning/data/site-scanning-live-filtered-latest.json](https://api.gsa.gov/technology/site-scanning/data/site-scanning-live-filtered-latest.json)
   
The second set includes scan data for all URLs that were scanned, regardless of whether they are live or not (some may be inaccessible over the public internet, no longer live, or experiencing downtime).  This data can be accessed at:
   
* [https://api.gsa.gov/technology/site-scanning/data/site-scanning-latest.csv](https://api.gsa.gov/technology/site-scanning/data/site-scanning-latest.csv)
* [https://api.gsa.gov/technology/site-scanning/data/site-scanning-latest.json](https://api.gsa.gov/technology/site-scanning/data/site-scanning-latest.json)
   
  
## Contact Us

Please reach out with any questions or feedback by [filing an issue here](https://github.com/18F/site-scanning/issues) or [emailing the team](mailto:site-scanning@gsa.gov).  

<p><small><a href="#">Back to top</a></small></p>
