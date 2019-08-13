---
title: Code.gov API
banner-heading: Code.gov API
---

<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >


## Overview

Born from the [Federal Source Code Policy](https://sourcecode.cio.gov/), [Code.gov](https://code.gov) is on a mission to become the primary platform where America shares its code.

The Code.gov API is a public GET API. Data from the API will be delivered in JSON format. All of our data is provided to us by our partner agencies and is fully available to the public.

The Code.gov front-end is found in the [code-gov-front-end repository](https://github.com/GSA/code-gov-front-end).  This React app is modular, configurable and customizable.

<p><small><a href="#">Back to top</a></small></p>

## Getting Started


The Code.gov API is a GET API. With this API, you will be able to explore the software projects that federal agencies have published in accordance with the [Federal Source Code Policy](https://sourcecode.cio.gov/).

There are two basic endpoints:

- `/repos`: this endpoint will let you query all federal repositories that have been indexed by us.
- `/terms`: this endpoint will let you query all terms we have indexed as part of our data harvesting process. These terms will help you in your search efforts.

#### Additional Notes

The rate limit for the API is currently 5,000 calls/day and 5 calls per 5 seconds. As we move forward and understand the impact of usage of the API, we will adjust the limits accordingly as well as allow for individual users with specific needs to have customized rate limits appropriate to their use.

#### Example URL

The URLs provided below are for initial browsing of API data. This DEMO_KEY will not work after a certain number of attempts. Users can request a personal key from [api.data.gov](https://api.data.gov/signup/). The personal key will have more data access capabilities.

* [https://api.code.gov/repos?api_key=DEMO_KEY](https://api.code.gov/repos?api_key=DEMO_KEY)
* [https://api.code.gov/terms?api_key=DEMO_KEY](https://api.code.gov/terms?api_key=DEMO_KEY)

#### Output

The output data will be in JSON format.

#### API Clients

We have a couple of API clients on our roadmap.

##### Javascript

- [GSA/code-gov-api-client](https://github.com/GSA/code-gov-api-client)
  - Currently in alpha
  - [NPM @code.gov/api-client](https://www.npmjs.com/package/@code.gov/api-client)
  - [Feedback](https://github.com/GSA/code-gov-api-client/issues/new): Leave us your feedback as a Github Issue!



#### API Key

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
    apiKey: 'ELORrx8BmruIQg0kicvVjT0FonWUl4xGluJwEjiT',

    // Provide an example URL you want to show to users after they signup.
    // This can be any API endpoint on your server, and you can use the
    // special {{api_key}} variable to automatically substitute in the API
    // key the user just signed up for.
    exampleApiUrl: 'https://api.code.gov/repos?api_key={{api_key}}',

    // OPTIONAL: Provide extra content to display on the signup confirmation
    // page. This will be displayed below the user's API key and the example
    // API URL are shown. HTML is allowed. Defaults to ""
    // signupConfirmationMessage: '',

    // OPTIONAL: Provide a URL to your own contact page to link to for user
    // support. Defaults to "https://api.data.gov/contact/"
    contactUrl: 'https://github.com/GSA/code-gov-api/issues',

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



## OpenAPI Specification File

You can view the full details of this API in the OpenAPI Specification file available here:
<a href="v1/openapi.json">Open API specification file for the Code.gov API</a>

<p><small><a href="#">Back to top</a></small></p>

## API Calls


We have extensive Swagger documentation where you can test our API. You can find them at [https://api.code.gov/docs](https://api.code.gov/docs).

Before you can actually try the docs, you need to obtain an API key. You can do so [here](/key.html). Once you obtain your API key, you can go to our Swagger documentation and use it by clicking on the __Authorize__ button located at the top right of the Swagger documentation.

Remember to change the __Schema__ to __HTTPS__. If this is not changed, you will receive an error when submitting the test request.
In eget nibh consectetur, faucibus sapien et, finibus justo. Duis feugiat elit ex, non aliquet nisl cursus et. Morbi hendrerit est nec leo venenatis tempus. Vestibulum auctor auctor varius. Aenean lorem lacus, rutrum finibus nulla ac, tempor aliquet dolor. Donec egestas lectus ut augue posuere fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec turpis sed ipsum vestibulum aliquam nec eu nunc. Etiam ipsum orci, maximus et lorem nec, interdum dapibus sem. Sed nisl ex, scelerisque nec sodales at, finibus non dolor.


{% include swagger-section-header.html %}
    url: "v1/openapi.json", 
{% include swagger-section-footer.html %}


<p><small><a href="#">Back to top</a></small></p>




## Contact Us

Let us know your questions or feedback in the [project issue tracker](https://github.com/GSA/code-gov-api/issues).  


<p><small><a href="#">Back to top</a></small></p>
