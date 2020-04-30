---
title: 10x Spotlight API
banner-heading: 10x Spotlight API
---


## Overview

Every day, the site-scanner program runs the scanning engine to dynamically pull down lists of domains from various sources and then scan them with a collection of scan plugins to gather data on them. This data is created in the json format and is indexed in an elasticsearch datastore, where it can be searched by an API written in the Django REST Framework.

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

#### Scans 

The scan API map is:
  - `/api/v1/domains/` enumerates all of the scans for all domains.  This is a paginated endpoint,
    so to see all the data, you will need to iterate through all the pages.
  - `/api/v1/domains/{domain}/` pulls down all of the scan results for a particular domain.
  - `/api/v1/scans/` enumerates all of the scantypes.  This is a paginated endpoint,
    so to see all the data, you will need to iterate through all the pages.
  - `/api/v1/scans/{scantype}/` enumerates all of the scans for all domains that have this scantype.
    This is a paginated endpoint,
    so to see all the data, you will need to iterate through all the pages.
  - `/api/v1/scans/{scantype}/csv/` emits a CSV file of the scantype data which you have selected.



#### Filtering/Paginating

All of the above can have search queries added to them.

You can query on any field that you can see in the API.  Subfields are accessed
with `.`, like `data.dap_detected`, for example.  If you have multiple queries,
they will be ANDed together:
  - `/api/v1/domains/?domain=gsa*`
  - `/api/v1/domains/?domain=gsa*&data.status_code=200`
  - `/api/v1/domains/18f.gov/?data.status_code=200`
  - `/api/v1/scans/uswds/?data.total_score=gt:100`
  - `/api/v1/scans/uswds/?data.total_score=lt:50`

Paginated endpoints can be paged through with a `page=X` parameter,
which will give you a request back that has next/previous links and a page number count.  So
`/api/v1/domains/?page=1` will give you the first 100 entries and `/api/v1/domains/?page=2`
will give you the next 100, for example.  You can override the default page size of 100 with
the `page_size` parameter.  `/api/v1/domains/?page=2&page_size=20`, for example.

If you query without a `page=X` parameter, you will get back the first page,
as if you had said `page=1`.

#### Lists

To aid in the development of a frontend UI and to help users of the API enumerate
data, there is a lists endpoint.

  - `/api/v1/lists/dates/` enumerates all of the snapshots of scan data that we have.
  - `/api/v1/lists/{scantype}/agencies/` enumerates all of the agencies that are in the scantype.
  - `/api/v1/lists/{scantype}/domaintypes/` enumerates all of the domaintypes that are in the scantype.
  - `/api/v1/lists/{scantype}/values/{field}/` enumerates the unique values contained in the specified field in the given scantype.  The field can be specified with nested fields, like `data.dap_detected` if need be.
    - `/api/v1/lists/{scantype}/values/{field}/{subfield}/` enumerates the unique values in the subfield field in all of the dictionaries under the specified field.  This is so you can query things like `/api/v1/lists/pagedata/values/data/responsecode/` to get all the response codes for all of the pages under the data field in the pagedata scantype.

#### Dates

We keep scans for 30 days.  This lets you look at how things have changed over time.

`/api/v1/date/{date}/...` will let you query the index for the specified date.  The `{date}`
can be found with the `/api/v1/lists/dates/` API endpoint, and after that, you can append on the
normal domains, scans, and list endpoint queries, like
`/api/v1/date/2020-01-27/domains/18f.gov/`.  If you give a bad date, it will use the latest
scans rather than returning an error.

#### Results

The API returns metadata about the scans that we have, as well as a reference to where the scans are actually
stored.  In addition, if you go to the `/api/v1/domains/{domain}/` endpoint, you will get the scan results inline
too.  For example:
```
$ curl -s https://site-scanning.app.cloud.gov/api/v1/domains/18f.gov/ | jq
[
  {
    "domain": "18f.gov",
    "scantype": "pshtt",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "Base Domain": "18f.gov",
      "Base Domain HSTS Preloaded": false,
      "Canonical URL": "https://18f.gov",
      "Defaults to HTTPS": true,
      "Domain": "18f.gov",
      "Domain Enforces HTTPS": true,
      "Domain Supports HTTPS": true,
      "Domain Uses Strong HSTS": true,
      "Downgrades HTTPS": false,
      "HSTS": true,
      "HSTS Entire Domain": true,
      "HSTS Header": "max-age=31536000; includeSubDomains; preload",
      "HSTS Max Age": 31536000,
      "HSTS Preload Pending": false,
      "HSTS Preload Ready": true,
      "HSTS Preloaded": false,
      "HTTPS Bad Chain": false,
      "HTTPS Bad Hostname": false,
      "HTTPS Cert Chain Length": 2,
      "HTTPS Client Auth Required": false,
      "HTTPS Custom Truststore Trusted": null,
      "HTTPS Expired Cert": false,
      "HTTPS Full Connection": true,
      "HTTPS Live": true,
      "HTTPS Probably Missing Intermediate Cert": false,
      "HTTPS Publicly Trusted": true,
      "HTTPS Self Signed Cert": false,
      "IP": "54.192.73.65",
      "Live": true,
      "Notes": "",
      "Redirect": true,
      "Redirect To": "https://18f.gsa.gov/",
      "Server Header": "CloudFront",
      "Server Version": null,
      "Strictly Forces HTTPS": true,
      "Unknown Error": false,
      "Valid HTTPS": true,
      "endpoints": {
        "http": {
          "headers": {
            "Connection": "keep-alive",
            "Content-Length": "183",
            "Content-Type": "text/html",
            "Date": "Fri, 27 Mar 2020 13:18:09 GMT",
            "Location": "https://18f.gov/",
            "Server": "CloudFront",
            "Via": "1.1 1e10676146c82156d75c64093df288e5.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "-B0xx1TQo5tkGj2bUpr190cF-ZB8yI04HEMm1f75d-etUPqyDh8K6Q==",
            "X-Amz-Cf-Pop": "HIO50-C2",
            "X-Cache": "Redirect from cloudfront"
          },
          "ip": null,
          "live": true,
          "notes": "",
          "redirect": true,
          "redirect_eventually_to": "https://18f.gsa.gov/",
          "redirect_eventually_to_external": true,
          "redirect_eventually_to_http": false,
          "redirect_eventually_to_https": true,
          "redirect_eventually_to_subdomain": false,
          "redirect_immediately_to": "https://18f.gov/",
          "redirect_immediately_to_external": false,
          "redirect_immediately_to_http": false,
          "redirect_immediately_to_https": true,
          "redirect_immediately_to_subdomain": false,
          "redirect_immediately_to_www": false,
          "server_header": "CloudFront",
          "server_version": null,
          "status": 301,
          "unknown_error": false,
          "url": "http://18f.gov"
        },
        "https": {
          "headers": {
            "Age": "3086",
            "Connection": "keep-alive",
            "Content-Length": "138",
            "Content-Type": "text/html",
            "Date": "Fri, 27 Mar 2020 12:26:44 GMT",
            "Location": "https://18f.gsa.gov/",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
            "Via": "1.1 925e7b77d00fe09d3e904612516a8235.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "-fvknOTBsnPkoGzCNtD2DgqOaLDufFvRFrJtXZBC8AWmTsWhvtrU8Q==",
            "X-Amz-Cf-Pop": "HIO50-C2",
            "X-Cache": "Hit from cloudfront",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-Government-Innovation": "Disrupted",
            "X-Vcap-Request-Id": "f92ca990-0109-4d05-79d3-cc362bbab4b2",
            "X-XSS-Protection": "1; mode=block"
          },
          "hsts": true,
          "hsts_all_subdomains": true,
          "hsts_header": "max-age=31536000; includeSubDomains; preload",
          "hsts_max_age": 31536000,
          "hsts_preload": true,
          "https_bad_chain": false,
          "https_bad_hostname": false,
          "https_cert_chain_len": 2,
          "https_client_auth_required": false,
          "https_custom_trusted": null,
          "https_expired_cert": false,
          "https_full_connection": true,
          "https_missing_intermediate_cert": false,
          "https_public_trusted": true,
          "https_self_signed_cert": false,
          "https_valid": true,
          "ip": "54.192.73.65",
          "live": true,
          "notes": "",
          "redirect": true,
          "redirect_eventually_to": "https://18f.gsa.gov/",
          "redirect_eventually_to_external": true,
          "redirect_eventually_to_http": false,
          "redirect_eventually_to_https": true,
          "redirect_eventually_to_subdomain": false,
          "redirect_immediately_to": "https://18f.gsa.gov/",
          "redirect_immediately_to_external": true,
          "redirect_immediately_to_http": false,
          "redirect_immediately_to_https": true,
          "redirect_immediately_to_subdomain": false,
          "redirect_immediately_to_www": false,
          "server_header": null,
          "server_version": null,
          "status": 302,
          "unknown_error": false,
          "url": "https://18f.gov"
        },
        "httpswww": {
          "headers": {
            "Age": "1",
            "Connection": "keep-alive",
            "Content-Length": "138",
            "Content-Type": "text/html",
            "Date": "Fri, 27 Mar 2020 13:18:09 GMT",
            "Location": "https://18f.gsa.gov/",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
            "Via": "1.1 c1c7bd66e338154bf556b9c8414debe9.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "ZSrAcp3buqm_xuzRZ-bks5vxU2ZC1wf6bB8iTdKVtLV2a6anxUVZrA==",
            "X-Amz-Cf-Pop": "HIO50-C2",
            "X-Cache": "Hit from cloudfront",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-Government-Innovation": "Disrupted",
            "X-Vcap-Request-Id": "eca30106-9ec0-4201-63f8-2e5a0f277cde",
            "X-XSS-Protection": "1; mode=block"
          },
          "hsts": true,
          "hsts_all_subdomains": true,
          "hsts_header": "max-age=31536000; includeSubDomains; preload",
          "hsts_max_age": 31536000,
          "hsts_preload": true,
          "https_bad_chain": false,
          "https_bad_hostname": false,
          "https_cert_chain_len": 2,
          "https_client_auth_required": false,
          "https_custom_trusted": null,
          "https_expired_cert": false,
          "https_full_connection": true,
          "https_missing_intermediate_cert": false,
          "https_public_trusted": true,
          "https_self_signed_cert": false,
          "https_valid": true,
          "ip": "54.192.73.126",
          "live": true,
          "notes": "",
          "redirect": true,
          "redirect_eventually_to": "https://18f.gsa.gov/",
          "redirect_eventually_to_external": true,
          "redirect_eventually_to_http": false,
          "redirect_eventually_to_https": true,
          "redirect_eventually_to_subdomain": false,
          "redirect_immediately_to": "https://18f.gsa.gov/",
          "redirect_immediately_to_external": true,
          "redirect_immediately_to_http": false,
          "redirect_immediately_to_https": true,
          "redirect_immediately_to_subdomain": false,
          "redirect_immediately_to_www": false,
          "server_header": null,
          "server_version": null,
          "status": 302,
          "unknown_error": false,
          "url": "https://www.18f.gov"
        },
        "httpwww": {
          "headers": {
            "Connection": "keep-alive",
            "Content-Length": "183",
            "Content-Type": "text/html",
            "Date": "Fri, 27 Mar 2020 13:18:09 GMT",
            "Location": "https://www.18f.gov/",
            "Server": "CloudFront",
            "Via": "1.1 3396f08538cae17d7cab5e402e844a55.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "cNrz9qJyWzfKyPavd0Sje1syADMGNsN5PBkt3Mppe0kybHlK0JV-mw==",
            "X-Amz-Cf-Pop": "HIO50-C2",
            "X-Cache": "Redirect from cloudfront"
          },
          "ip": null,
          "live": true,
          "notes": "",
          "redirect": true,
          "redirect_eventually_to": "https://18f.gsa.gov/",
          "redirect_eventually_to_external": true,
          "redirect_eventually_to_http": false,
          "redirect_eventually_to_https": true,
          "redirect_eventually_to_subdomain": false,
          "redirect_immediately_to": "https://www.18f.gov/",
          "redirect_immediately_to_external": false,
          "redirect_immediately_to_http": false,
          "redirect_immediately_to_https": true,
          "redirect_immediately_to_subdomain": false,
          "redirect_immediately_to_www": false,
          "server_header": "CloudFront",
          "server_version": null,
          "status": 301,
          "unknown_error": false,
          "url": "http://www.18f.gov"
        }
      }
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/pshtt/18f.gov.json",
    "lastmodified": "2020-03-27T15:10:09Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "dap",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "dap_detected": true,
      "dap_parameters": "agency=GSA&subagency=18F",
      "domain": "18f.gov",
      "status_code": 200
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/dap/18f.gov.json",
    "lastmodified": "2020-03-27T14:55:35Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "pagedata",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "/": {
        "codegov_measurementtype": "",
        "content_length": "7822",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "200"
      },
      "/cj": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/cj",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/code//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/code.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/coronavirus": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/coronavirus",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/data": {
        "codegov_measurementtype": "",
        "contains_charter": false,
        "contains_chiefdataofficer": false,
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/data",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/data//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/data.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/developer": {
        "codegov_measurementtype": "",
        "content_length": "249",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/developer/",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "200"
      },
      "/digitalstrategy": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/digitalstrategy/FITARAmilestones//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy/FITARAmilestones.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/digitalstrategy/bureaudirectory//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy/bureaudirectory.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/digitalstrategy/costsavings//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy/costsavings.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/digitalstrategy/datacenteroptimizationstrategicplan//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy/datacenteroptimizationstrategicplan.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/digitalstrategy/governanceboards//json": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/digitalstrategy/governanceboards.json",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/open": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/open",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/privacy": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/privacy",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/redirecttest-foo-bar-baz": {
        "codegov_measurementtype": "",
        "content_length": "3610",
        "content_type": "text/html; charset=utf-8",
        "final_url": "https://18f.gsa.gov/redirecttest-foo-bar-baz",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "404"
      },
      "/robots//txt": {
        "codegov_measurementtype": "",
        "content_length": "65",
        "content_type": "text/plain; charset=utf-8",
        "final_url": "https://18f.gsa.gov/robots.txt",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "200"
      },
      "/sitemap//xml": {
        "codegov_measurementtype": "",
        "content_length": "0",
        "content_type": "application/xml",
        "final_url": "https://18f.gsa.gov/sitemap.xml",
        "final_url_in_same_domain": false,
        "json_items": "0",
        "opendata_conforms_to": "",
        "responsecode": "200"
      }
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/pagedata/18f.gov.json",
    "lastmodified": "2020-03-27T14:16:08Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "sitemap",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "final_url": "https://18f.gsa.gov/sitemap.xml",
      "sitemap_locations_from_robotstxt": [
        "https://18f.gsa.gov/sitemap.xml"
      ],
      "status_code": "200",
      "url_tag_count": 665
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/sitemap/18f.gov.json",
    "lastmodified": "2020-03-27T14:37:52Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "uswds2",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "domain": "18f.gov",
      "flag_detected": 0,
      "flagincss_detected": 0,
      "merriweatherfont_detected": 5,
      "publicsansfont_detected": 0,
      "sourcesansfont_detected": 5,
      "status_code": 200,
      "tables": 0,
      "total_score": 61,
      "usa_classes_detected": 30,
      "usa_detected": 0,
      "uswds_detected": 1,
      "uswdsincss_detected": 20,
      "uswdsversion": ""
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/uswds2/18f.gov.json",
    "lastmodified": "2020-03-27T14:31:15Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "privacy",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "emails": [],
      "final_url": "https://18f.gsa.gov/privacy",
      "h1": [],
      "h2": [],
      "h3": [],
      "status_code": "404"
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/privacy/18f.gov.json",
    "lastmodified": "2020-03-27T14:46:58Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "200scanner",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "/": "200",
      "/cj": "404",
      "/code//json": "404",
      "/coronavirus": "404",
      "/data": "404",
      "/data//json": "404",
      "/developer": "200",
      "/digitalstrategy": "404",
      "/digitalstrategy/FITARAmilestones//json": "404",
      "/digitalstrategy/bureaudirectory//json": "404",
      "/digitalstrategy/costsavings//json": "404",
      "/digitalstrategy/datacenteroptimizationstrategicplan//json": "404",
      "/digitalstrategy/governanceboards//json": "404",
      "/open": "404",
      "/privacy": "404",
      "/redirecttest-foo-bar-baz": "404",
      "/robots//txt": "200",
      "/sitemap//xml": "200"
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/200scanner/18f.gov.json",
    "lastmodified": "2020-03-27T14:24:11Z"
  },
  {
    "domain": "18f.gov",
    "scantype": "third_parties",
    "domaintype": "Federal Agency - Executive",
    "organization": "18F",
    "agency": "General Services Administration",
    "data": {
      "external_domains": [
        "18f.gsa.gov",
        "dap.digitalgov.gov",
        "fonts.googleapis.com",
        "www.google-analytics.com"
      ],
      "external_urls": [
        "https://18f.gsa.gov/",
        "https://18f.gsa.gov/assets/css/main.css",
        "https://18f.gsa.gov/assets/img/global/usa-flag.png",
        "https://18f.gsa.gov/assets/img/logos/18f-logo.svg",
        "https://18f.gsa.gov/assets/img/logos/agencies/USDA.svg",
        "https://18f.gsa.gov/assets/img/logos/agencies/usmc.png",
        "https://18f.gsa.gov/assets/img/logos/agencies/OMB.svg",
        "https://18f.gsa.gov/assets/img/logos/agencies/centers-for-medicare-and-medicaid.png",
        "https://18f.gsa.gov/assets/img/logos/agencies/usaf.png",
        "https://18f.gsa.gov/assets/img/logos/agencies/nga.png",
        "https://18f.gsa.gov/assets/img/logos/gsa-logo.svg",
        "https://18f.gsa.gov/assets/js/jquery.min.js",
        "https://18f.gsa.gov/assets/js/jquery.ajaxchimp.min.js",
        "https://18f.gsa.gov/assets/js/waypoints.min.js",
        "https://18f.gsa.gov/assets/js/index.js",
        "https://18f.gsa.gov/assets/js/lib/uswds.min.js",
        "https://18f.gsa.gov/assets/js/waypoints.js",
        "https://18f.gsa.gov/assets/js/jekyll-pages-api-search.js",
        "https://18f.gsa.gov/assets/js/sticky.js",
        "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=GSA&subagency=18F",
        "https://18f.gsa.gov/assets/js/search-bundle.js",
        "https://18f.gsa.gov/assets/css/print.css",
        "https://fonts.googleapis.com/css?family=Open+Sans:400italic",
        "https://18f.gsa.gov/assets/img/page-feature/hire-us.jpg",
        "https://18f.gsa.gov/assets/img/home/hero-fec.png",
        "https://18f.gsa.gov/assets/img/projects/data-act-better-data.jpg",
        "https://18f.gsa.gov/assets/img/projects/calc.png",
        "https://www.google-analytics.com/analytics.js",
        "https://www.google-analytics.com/r/collect",
        "https://www.google-analytics.com/r/collect?v=1&_v=j81&aip=1&a=844608537&t=pageview&_s=1&dl=https%3A%2F%2F18f.gsa.gov%2F&ul=en-us&de=UTF-8&dt=18F%3A%20Digital%20service%20delivery%20%7C%20Home&sd=24-bit&sr=800x600&vp=800x600&je=0&_u=YEDAAUAB~&jid=2012327917&gjid=688940102&cid=1522864894.1585312006&tid=UA-48605964-1&_gid=1679883016.1585312006&_r=1&z=534490434"
      ],
      "internal_domains": [],
      "internal_urls": [],
      "known_services": [
        "Digital Analytics Program",
        "Google Fonts",
        "Google Analytics"
      ],
      "nearby_domains": [],
      "nearby_urls": [],
      "page_domains": [
        "18f.gsa.gov",
        "github.com",
        "www.w3.org",
        "www.bohemiancoding.com",
        "twitter.com",
        "www.gsa.gov",
        "www.google-analytics.com",
        "www.digitalgov.gov",
        "dap.digitalgov.gov"
      ],
      "page_urls": [
        "https://18f.gsa.gov",
        "https://18f.gsa.gov/assets/img/logos/18F-Logo-M.png",
        "https://18f.gsa.gov/",
        "https://github.com/audreyr/favicon-cheat-sheet",
        "http://www.w3.org/2000/svg",
        "http://www.w3.org/1999/xlink",
        "http://www.bohemiancoding.com/sketch",
        "https://twitter.com/18F",
        "https://github.com/18F/18f.gsa.gov/issues/new",
        "http://www.gsa.gov/",
        "https://www.google-analytics.com/analytics.js",
        "https://www.digitalgov.gov/services/dap/",
        "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=GSA&amp;subagency=18F",
        "https://github.com/18f/analytics-standards"
      ],
      "unknown_services": [
        "18f.gsa.gov"
      ],
      "url": "https://18f.gov/"
    },
    "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/third_parties/18f.gov.json",
    "lastmodified": "2020-03-27T15:02:40Z"
  }
]
$ curl -s https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/dap/18f.gov.json
{
  "domain": "18f.gov",
  "scantype": "dap",
  "domaintype": "Federal Agency - Executive",
  "agency": "General Services Administration",
  "organization": "18F",
  "scan_data_url": "https://s3-us-gov-west-1.amazonaws.com/cg-852a6196-0fdb-4a01-a16f-6c24379722cb/dap/18f.gov.json",
  "lastmodified": "2020-03-27T14:55:35Z",
  "data": {
    "dap_detected": true,
    "dap_parameters": "agency=GSA&subagency=18F",
    "domain": "18f.gov",
    "status_code": 200
  }
}
$
```



<p><small><a href="#">Back to top</a></small></p>

## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here: [link needed].

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


## Contact Us

Please reach out with any questions or feedback by [filing an issue here](https://github.com/18F/site-scanning/issues) or [emailing the team](mailto:site-scanning@gsa.gov).  

<p><small><a href="#">Back to top</a></small></p>
