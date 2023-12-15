---
title: Per diem API
banner-heading: Per diem API
---

## Overview

GSA establishes the per diem reimbursement rates that federal agencies use to reimburse their employees for subsistence expenses incurred while on official travel within the continental United States. CONUS includes the 48 contiguous states and the District of Columbia. The per diem reimbursement rates consist of a maximum lodging allowance component and a meals and incidental expenses (M&IE) component. Rates for the coming federal government fiscal year (October 1st to September 30th) are typically announced in mid-August. 

Use of this API is subject to [Terms of Service for GSA.gov's Developer Resources](https://gsa.gov/node/78901).

## Getting started

### User requirements

Users can make **GET calls** using any browser or a REST client, e.g., Postman.

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
     exampleApiUrl: 'https://api.gsa.gov/travel/perdiem/v2/rates/city/Fairfax/state/VA/year/2023?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://github.com/gsa/gsa-apis/issues',

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
<noscript>Please enable JavaScript to signup for an <a href="https://api.data.gov/">api.data.gov</a> API key.</noscript>
{% endraw %}  

### API endpoints

This API has six primary endpoints:

* https://api.gsa.gov/travel/perdiem/v2/rates/city/{city}/state/{ST}/year/{year}
* https://api.gsa.gov/travel/perdiem/v2/rates/state/{ST}/year/{year}
* https://api.gsa.gov/travel/perdiem/v2/rates/zip/{zip}/year/{year}
* https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/{year}
* https://api.gsa.gov/travel/perdiem/v2/rates/conus/mie/{year}
* https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/{year}

### Rate limits

The default rate limit is 1,000 hits per hour. If you need to request a rate limit change, please email us at [digitalteam@gsa.gov](mailto:digitalteam@gsa.gov).

### OpenAPI specification file

You can view the full details of this API in the <a href="v2/openapi.yaml">OpenAPI specification file</a>.

## API description

### About per diem rates

Most of CONUS is covered by the standard per diem rate. In addition there are several hundred non-standard areas (NSAs) that have per diem rates higher than the standard rate. Most NSAs are comprised of a key city/primary destination and the surrounding county. The per diem rate database is organized by location and fiscal year. Maximum lodging allowances in some NSAs vary seasonally, which is why they are listed by month.

For more information on methods of reimbursement, first and last day of travel, and meal deductions, please consult the [Federal Travel Regulations](https://www.ecfr.gov/current/title-41/subtitle-F).

### Sensitive API process

**Warning:** The per diem rates results do not contain every city name in the continental US. If you cannot find your city name, search by state and filter by county or by ZIP code. Another alternative method is described below.

---

If you often reach the maximum rate limit per hour, try the steps belowing using endpoint 6 in conjuction with endpoint 4 to retrieve rates for a given destination ID.

1. Submit a query to endpoint 6. **Example URL:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/2023
2. Filter by the ZIP code(s) applicable to you.
  - Example ZIP: **10005**
  - Expected result: 
    ```json
    [{
        "Zip": "10005",
        "DID": "266",
        "ST": "NY"
    }]
    ```
3. Using the DID obtained from endpoint 6, submit a query to endpoint 4. **Example URL:** https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/2023
4. First filter by applicable state (ST) and then filter by DID:
  - Example state/DID: **NY/266**
  - Expected result:
    ```json
    [{
        "Jan": "159",
        "Feb": "159",
        "Mar": "258",
        "Apr": "258",
        "May": "258",
        "Jun": "258",
        "Jul": "220",
        "Aug": "220",
        "Sep": "286",
        "Oct": "286",
        "Nov": "286",
        "Meals": "79",
        "City": "New York City",
        "State": "NY",
        "County": "Bronx / Kings / New York / Queens / Richmond",
        "DID": "266",
        "Dec": "286"
    }]
    ```

---

When using endpoint 1, you may encounter a city name containing a **period (.), apostrophe ('), or hyphen (-)**. If these characters are used in the search URL, you will receive unexpected or no results at all. To prevent this issue from occurring, remove the period and/or replace the apostrophe/hyphen with a space **(UTF-8 encoding= %20)**. Below are examples of city names with special characters:

* O'Fallon, IL becomes city/o%20fallon. **URL:** https://api.gsa.gov/travel/perdiem/v2/rates/city/O%20FALLON/state/IL/year/2023
* East St. Louis, IL becomes city/east%20st%20louis. **URL:** https://api.gsa.gov/travel/perdiem/v2/rates/city/east%20st%20louis/state/IL/year/2023
* Wilkes-Barre, PA becomes city/wilkes%20barre (this example returns the standard rate, helping to demonstrate an API call for a city name not within the states dataset). **URL:** https://api.gsa.gov/travel/perdiem/v2/rates/city/wilkes%20barre/state/PA/year/2023

### Path parameters

**Note:** City and state names are **case-insensitive** in the request URL.

The per diem API offers four **search parameters** used in combination with the <a href="#api-endpoints">six endpoints</a> introduced in the **API endpoints** portion of this documentation.

| Parameter name | Description | Example |
| -------------- | ----------- | ------- |
| city | Destination city | Fairfax |
| state | Destination state | VA |
| zip | Destination ZIP code | 20171 |
| year | **Fiscal year** of travel; up to three years available | 2023 |

### Response schema

For endpoints 1-3, the per diem API returns the following **applicable response members**. The examples section contains the JSON outputs of expected results.

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | number | Lodging rate per day, in dollars, for a given month |
| number | number | Number of the month |
| short | string | Abbreviated month names |
| long | string | Month names |
| meals | number | Meal rate per day, in dollars, for a given month |
| zip | string | Destination ZIP code, only if ZIP is provided in the search parameter |
| county | string | Destination county/ies  |
| city | string | Destination city/ies |
| state | string | Destination state |
| year | number | FY year of travel |

For endpoint 4, the per diem API returns the following **response members**. The examples section contains the JSON outputs of expected results.

| Name | Type | Description |
| ---- | ---- | ----------- |
| Jan - Dec | string | Lodging rate per day, in dollars, for the given key (month) |
| Meals | string | Meal rate per day, in dollars, for a given month |
| City | string | Destination city/ies or **Standard Rate** |
| State | string | Destination state |
| County | string | Destination county/ies |
| DID | string | Destination ID: a unique ID for the city/state pair |

For endpoint 5, the per diem API returns the following **response members** for the [M&IE breakdown](https://gsa.gov/node/107493). The examples section contains the JSON outputs of expected results.

| Name | Type | Description |
| ---- | ---- | ----------- |
| total | number | Total per diem |
| breakfast | number | Daily breakfast meal rate |
| lunch | number | Daily lunch meal rate |
| dinner | number | Daily dinner meal rate |
| incidental | number | Daily incidents rate |
| FirstLastDay | number | Total for the first and last travel day |

For endpoint 6, the per diem API returns the following **response members** for all applicable ZIP codes in the FY. The examples section contains the JSON outputs of expected results.

| Name | Type | Description |
| ---- | ---- | ----------- |
| Zip | string | The ZIP code this DID resides within |
| DID | string | Destination ID: a unique ID for the ZIP/state pair |
| ST | string | The state this DID resides within |

## HTTP Response Codes

The API will return one of the following responses:

| HTTP response code | Description |
| -------- | ----------- |
| 200 | Successful. Data will be returned in JSON format. |
| 400 | Bad request. Verify the query string parameters that were provided. |
| 403 | API key is not correct or was not provided. |
| 4XX | Additional 400-level are caused by some type of error in the information submitted. |

## Examples

<details>

<summary>Endpoint 1</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/city/{city}/state/{ST}/year/{year}</li>
<li>Description: Rates by city, state, and year</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/city/Fairfax/state/VA/year/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>{
    "request": null,
    "errors": null,
    "rates": [
        {
            "oconusInfo": null,
            "rate": [
                {
                    "months": {
                        "month": [
                            {
                                "value": 188,
                                "number": 1,
                                "short": "Jan",
                                "long": "January"
                            },
                            {
                                "value": 188,
                                "number": 2,
                                "short": "Feb",
                                "long": "February"
                            },
                            {
                                "value": 258,
                                "number": 3,
                                "short": "Mar",
                                "long": "March"
                            },
                            {
                                "value": 258,
                                "number": 4,
                                "short": "Apr",
                                "long": "April"
                            },
                            {
                                "value": 258,
                                "number": 5,
                                "short": "May",
                                "long": "May"
                            },
                            {
                                "value": 258,
                                "number": 6,
                                "short": "Jun",
                                "long": "June"
                            },
                            {
                                "value": 172,
                                "number": 7,
                                "short": "Jul",
                                "long": "July"
                            },
                            {
                                "value": 172,
                                "number": 8,
                                "short": "Aug",
                                "long": "August"
                            },
                            {
                                "value": 257,
                                "number": 9,
                                "short": "Sep",
                                "long": "September"
                            },
                            {
                                "value": 257,
                                "number": 10,
                                "short": "Oct",
                                "long": "October"
                            },
                            {
                                "value": 188,
                                "number": 11,
                                "short": "Nov",
                                "long": "November"
                            },
                            {
                                "value": 188,
                                "number": 12,
                                "short": "Dec",
                                "long": "December"
                            }
                        ]
                    },
                    "meals": 79,
                    "zip": null,
                    "county": "Washington DC (also the cities of Alexandria, Falls Church and Fairfax, and the counties of Arlington and Fairfax, in Virginia; and the counties of Montgomery and Prince George's in Maryland)",
                    "city": "District of Columbia",
                    "standardRate": "false"
                }
            ],
            "state": "VA",
            "year": 2023,
            "isOconus": "false"
        }
    ],
    "version": null
}</code></pre></small>
</details>

<details>

<summary>Endpoint 2</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/state/{ST}/year/{year}</li>
<li>Description: Rates by state and year</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/state/VA/year/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>{
    "request": null,
    "errors": null,
    "rates": [
        {
            "oconusInfo": null,
            "rate": [
                {
                    "months": {
                        "month": [
                            {
                                "value": 105,
                                "number": 1,
                                "short": "Jan",
                                "long": "January"
                            },
                            {
                                "value": 105,
                                "number": 2,
                                "short": "Feb",
                                "long": "February"
                            },
                            {
                                "value": 105,
                                "number": 3,
                                "short": "Mar",
                                "long": "March"
                            },
                            {
                                "value": 105,
                                "number": 4,
                                "short": "Apr",
                                "long": "April"
                            },
                            {
                                "value": 105,
                                "number": 5,
                                "short": "May",
                                "long": "May"
                            },
                            {
                                "value": 105,
                                "number": 6,
                                "short": "Jun",
                                "long": "June"
                            },
                            {
                                "value": 123,
                                "number": 7,
                                "short": "Jul",
                                "long": "July"
                            },
                            {
                                "value": 123,
                                "number": 8,
                                "short": "Aug",
                                "long": "August"
                            },
                            {
                                "value": 123,
                                "number": 9,
                                "short": "Sep",
                                "long": "September"
                            },
                            {
                                "value": 123,
                                "number": 10,
                                "short": "Oct",
                                "long": "October"
                            },
                            {
                                "value": 105,
                                "number": 11,
                                "short": "Nov",
                                "long": "November"
                            },
                            {
                                "value": 105,
                                "number": 12,
                                "short": "Dec",
                                "long": "December"
                            }
                        ]
                    },
                    "meals": 59,
                    "zip": null,
                    "county": "Montgomery",
                    "city": "Blacksburg",
                    "standardRate": "false"
                },
                {
                    "months": {
                        "month": [
                            {
                                "value": 126,
                                "number": 1,
                                "short": "Jan",
                                "long": "January"
                            },
                            {
                                "value": 126,
                                "number": 2,
                                "short": "Feb",
                                "long": "February"
                            },
                            {
                                "value": 126,
                                "number": 3,
                                "short": "Mar",
                                "long": "March"
                            },
                            {
                                "value": 126,
                                "number": 4,
                                "short": "Apr",
                                "long": "April"
                            },
                            {
                                "value": 126,
                                "number": 5,
                                "short": "May",
                                "long": "May"
                            },
                            {
                                "value": 126,
                                "number": 6,
                                "short": "Jun",
                                "long": "June"
                            },
                            {
                                "value": 126,
                                "number": 7,
                                "short": "Jul",
                                "long": "July"
                            },
                            {
                                "value": 126,
                                "number": 8,
                                "short": "Aug",
                                "long": "August"
                            },
                            {
                                "value": 126,
                                "number": 9,
                                "short": "Sep",
                                "long": "September"
                            },
                            {
                                "value": 126,
                                "number": 10,
                                "short": "Oct",
                                "long": "October"
                            },
                            {
                                "value": 126,
                                "number": 11,
                                "short": "Nov",
                                "long": "November"
                            },
                            {
                                "value": 126,
                                "number": 12,
                                "short": "Dec",
                                "long": "December"
                            }
                        ]
                    },
                    "meals": 69,
                    "zip": null,
                    "county": "City of Charlottesville / Albemarle",
                    "city": "Charlottesville",
                    "standardRate": "false"
                }
            ],
            "state": "VA",
            "year": 2023,
            "isOconus": "false"
        }
    ],
    "version": null
}</code></pre></small>
</details>

<details>

<summary>Endpoint 3</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/zip/{zip}/year/{year}</li>
<li>Description: Rates by ZIP code and year</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/zip/20171/year/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>{
    "request": null,
    "errors": null,
    "rates": [
        {
            "oconusInfo": null,
            "rate": [
                {
                    "months": {
                        "month": [
                            {
                                "value": 188,
                                "number": 1,
                                "short": "Jan",
                                "long": "January"
                            },
                            {
                                "value": 188,
                                "number": 2,
                                "short": "Feb",
                                "long": "February"
                            },
                            {
                                "value": 258,
                                "number": 3,
                                "short": "Mar",
                                "long": "March"
                            },
                            {
                                "value": 258,
                                "number": 4,
                                "short": "Apr",
                                "long": "April"
                            },
                            {
                                "value": 258,
                                "number": 5,
                                "short": "May",
                                "long": "May"
                            },
                            {
                                "value": 258,
                                "number": 6,
                                "short": "Jun",
                                "long": "June"
                            },
                            {
                                "value": 172,
                                "number": 7,
                                "short": "Jul",
                                "long": "July"
                            },
                            {
                                "value": 172,
                                "number": 8,
                                "short": "Aug",
                                "long": "August"
                            },
                            {
                                "value": 257,
                                "number": 9,
                                "short": "Sep",
                                "long": "September"
                            },
                            {
                                "value": 257,
                                "number": 10,
                                "short": "Oct",
                                "long": "October"
                            },
                            {
                                "value": 188,
                                "number": 11,
                                "short": "Nov",
                                "long": "November"
                            },
                            {
                                "value": 188,
                                "number": 12,
                                "short": "Dec",
                                "long": "December"
                            }
                        ]
                    },
                    "meals": 79,
                    "zip": "20171",
                    "county": "Washington DC (also the cities of Alexandria, Falls Church and Fairfax, and the counties of Arlington and Fairfax, in Virginia; and the counties of Montgomery and Prince George's in Maryland)",
                    "city": "District of Columbia",
                    "standardRate": "false"
                }
            ],
            "state": "VA",
            "year": 2023,
            "isOconus": "false"
        }
    ],
    "version": null
}</code></pre></small>
</details>

<details>

<summary>Endpoint 4</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/{year}</li>
<li>Description: Lodging rates for the continental United States by year</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/conus/lodging/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>[
    {
        "Jan": "98",
        "Feb": "98",
        "Mar": "98",
        "Apr": "98",
        "May": "98",
        "Jun": "98",
        "Jul": "98",
        "Aug": "98",
        "Sep": "98",
        "Oct": "98",
        "Nov": "98",
        "Meals": "59",
        "City": "Standard Rate",
        "State": "",
        "County": "",
        "DID": "0",
        "Dec": "98"
    },
    {
        "Jan": "98",
        "Feb": "98",
        "Mar": "98",
        "Apr": "98",
        "May": "98",
        "Jun": "98",
        "Jul": "98",
        "Aug": "98",
        "Sep": "98",
        "Oct": "98",
        "Nov": "98",
        "Meals": "59",
        "City": "Standard Rate",
        "State": "AL",
        "County": "",
        "DID": "0",
        "Dec": "98"
    },
    {
        "Jan": "245",
        "Feb": "245",
        "Mar": "245",
        "Apr": "245",
        "May": "245",
        "Jun": "245",
        "Jul": "245",
        "Aug": "245",
        "Sep": "245",
        "Oct": "245",
        "Nov": "245",
        "Meals": "74",
        "City": "Sunnyvale / Palo Alto / San Jose",
        "State": "CA",
        "County": "Santa Clara",
        "DID": "44",
        "Dec": "245"
    },
    {
        "Jan": "101",
        "Feb": "101",
        "Mar": "101",
        "Apr": "101",
        "May": "101",
        "Jun": "101",
        "Jul": "101",
        "Aug": "101",
        "Sep": "101",
        "Oct": "101",
        "Nov": "101",
        "Meals": "64",
        "City": "Syracuse / Oswego",
        "State": "NY",
        "County": "Onondaga / Oswego",
        "DID": "274",
        "Dec": "101"
    }
]</code></pre></small>
</details>

<details>

<summary>Endpoint 5</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/conus/mie/{year}</li>
<li>Description: Meals and incidental expense (M&IE) breakdown rates by year</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/conus/mie/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>[
    {
        "total": 59,
        "breakfast": 13,
        "lunch": 15,
        "dinner": 26,
        "incidental": 5,
        "FirstLastDay": 44.25
    },
    {
        "total": 64,
        "breakfast": 14,
        "lunch": 16,
        "dinner": 29,
        "incidental": 5,
        "FirstLastDay": 48
    },
    {
        "total": 69,
        "breakfast": 16,
        "lunch": 17,
        "dinner": 31,
        "incidental": 5,
        "FirstLastDay": 51.75
    },
    {
        "total": 74,
        "breakfast": 17,
        "lunch": 18,
        "dinner": 34,
        "incidental": 5,
        "FirstLastDay": 55.5
    },
    {
        "total": 79,
        "breakfast": 18,
        "lunch": 20,
        "dinner": 36,
        "incidental": 5,
        "FirstLastDay": 59.25
    }
]</code></pre></small>
</details>

<details>

<summary>Endpoint 6</summary>

<p><strong>Request URL</strong></p>
<ul>
<li>URL: https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/{year}</li>
<li>Description: Mapping of ZIP codes to DID and state locations</li>
<li>Example: https://api.gsa.gov/travel/perdiem/v2/rates/conus/zipcodes/2023</li>
</ul>
<p><strong>Response (JSON output)</strong></p>
<small><pre><code>[
    {
        "Zip": "57716",
        "DID": "0",
        "ST": ""
    },
    {
        "Zip": "35004",
        "DID": "0",
        "ST": "AL"
    },
    {
        "Zip": "8544", // leading zero(es) was removed 
        "DID": "249",
        "ST": "NJ"
    },
    {
        "Zip": "87048",
        "DID": "0",
        "ST": "NM"
    }
]</code></pre></small>
</details>

## Contact us

If you have questions or need help, please email us at [digitalteam@gsa.gov](mailto:digitalteam@gsa.gov), or file an issue in this [GitHub issue tracker](https://github.com/gsa/gsa-apis/issues).

Before contacting us or filing an issue, please conduct initial troubleshooting:

* Review the open.gsa.gov/api specifications
* Confirm the correct **API key** is in the authentication header
* Confirm you sent a **GET request**
* Confirm you used one of the six provided endpoints

When submitting help desk tickets for API issues, please provide the following:

* The API request(s) that you tried to send
* The endpoint(s) and parameters used for the API call
* The error message(s) that you received
