# Adding API documentation

GSA teams can host their API documentation directly on this site if they prefer. 

A live example of this is available here:
- Without the Swagger UI interactive documentation: https://open.gsa.gov/api/sample-api-basic/
- With  the Swagger UI interactive documentation: https://open.gsa.gov/api/sample-api/

## Steps to add you API documentation to the GSA API Directory

1. Contact cto@gsa.gov and ask for access to manage API docs, sharing your github ID. (Your GitHub ID will have to be in the GSA org.)

2. Create a branch of the site from the `master` branch. Naming convention for new branch: `apidocs-apiname-YYYYMMDD` (replace `apiname` with the name of your API without spaces)

3A. If you want to use the Swagger UI for interactive documentation
In the new branch:
* Copy the file _apidocs/sample-api.md to a file named _apidocs/apiname.md 
* Create a folder _apidocs/apiname/v1/ (or the correct version).
* In this new folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3) or openapi.json (if it is OpenAPI or Swagger v.2)
* In the new apinamed.md file, modify the `url: "v1/openapi.yaml",` entry to match the name of your OpenAPI specification file.

3B. If you do _not_ want to use the Swagger UI for interactive documentation
In the new branch:
* Copy the file _apidocs/sample-api-basic.md to a file named _apidocs/apiname.md 
* Create a folder _apidocs/apiname/v1/ (or the correct version).
* In this new folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3) or openapi.json (if it is OpenAPI or Swagger v.2)
 
  Note: the navigation bar is generated from the headings in the markdown file, so those can be customized to meet your needs.

4. Edit the apiname.md file with all of the information about your API. When you commit your changes to your repo in github, a preview will be available of the site (with your doco) at this URL after 5 min or so for the preview to build:

     https://federalist-proxy.app.cloud.gov/preview/gsa/open-gsa-redesign/[branch-name]/api/[apiname]/


5. When you are ready to publish in the API directory, submit a pull request to merge your branch with the `master` branch. Post a comment with the preview URL from step 4 and @mention Ryan Day or Jeff Fredrickson from the CTO team. 

6. The CTO team will merge your branch with master, publishing your doco.  At this point, you will see your API doco at: https://open.gsa.gov/api/apiname/

You can also ask the CTO team to update the /_data/api-list.yml, which will add your API to the directory page: https://open.gsa.gov/api/

## Adding swagger UI to your existing API documentation

If you already host your documentation on this site, and you'd like to add the Swagger UI, add this section following the section with the OpenAPI specification:

```## API Calls

[Insert descriptive text here]


{% include swagger-section-header.html %}
    url: "v1/[Name of OpenAPI file]", 
{% include swagger-section-footer.html %}


<p><small><a href="#">Back to top</a></small></p>```