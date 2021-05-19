# Adding API documentation

GSA teams can host their API documentation directly on this site if they prefer. 

A live example of this is available here:
- Without the Swagger UI interactive documentation: https://open.gsa.gov/api/sample-api-basic/
- With the Swagger UI interactive documentation: https://open.gsa.gov/api/sample-api/

The API documentation on open.gsa.gov is managed by the Cloud Integration Shared Services (CISS) team.

## Steps to add you API documentation to the GSA API Directory

1. [Contact CISS](mailto:api.ciss@gsa.gov) and ask for access to manage API docs, sharing your GitHub ID. Your GitHub ID will have to be in the GSA GitHub organization; follow the instructions in the [GitHub Administration repository](https://github.com/GSA/GitHub-Administration) if you haven't done so yet.

2. Create a branch of the site from the `master` branch. Naming convention for new branch: `apidocs-apiname-YYYYMMDD` (replace `apiname` with the name of your API without spaces)

3. Depending on whether or not you plan to use Swagger UI:

    * If you want to use the Swagger UI for interactive documentation, then in the new branch:

        1. Copy the file _apidocs/sample-api.md to a file named _apidocs/apiname.md 
        2. Create a folder _apidocs/apiname/v1/ (or the correct version).
        3. In this new folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3) or openapi.json (if it is OpenAPI or Swagger v.2)
        4. In the new apinamed.md file, modify the `url: "v1/openapi.yaml",` entry to match the name of your OpenAPI specification file.

    * If you do _not_ want to use the Swagger UI for interactive documentation, then in the new branch:

        1. Copy the file _apidocs/sample-api-basic.md to a file named _apidocs/apiname.md 
        2. Create a folder _apidocs/apiname/v1/ (or the correct version).
        3. In this new folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3) or openapi.json (if it is OpenAPI or Swagger v.2)
 
    Note: the side navigation bar is automatically generated from the headings in the markdown file. You can customize the headings, and your customizations will be reflected in the navigation bar.

4. Edit the `apiname.md` file with all of the information about your API. When you commit your changes to your repo in GitHub, a preview will be available of the site (with your doco) at this URL after waiting 5 min or so for the preview to build:

    https://federalist-ecc58765-2903-48b3-920c-5d93318ad084.app.cloud.gov/preview/gsa/open-gsa-redesign/YOUR_BRANCH_NAME/api/YOUR_API_NAME/ (insert your branch name and API name where indicated)
     
5. When you are ready to publish in the API directory, [open a pull request (PR)](https://github.com/GSA/open-gsa-redesign/pulls) to merge your branch with the `master` branch. Email the [CISS API team](mailto:api.ciss@gsa.gov) with your PR number or a link to your PR, informing them that your branch is ready to be merged.

6. The CISS team will merge your branch with `master`, resulting in your doco going to the live website. At this point, you will see your API doco at: https://open.gsa.gov/api/YOUR_API_NAME/

    You can also ask the CISS team to add your API to the `/_data/api-list.yml` file, which will add your API to the directory page: https://open.gsa.gov/api/

## Adding Swagger UI to your existing API documentation (with Try It Out functionality)

If you already host your documentation on this site, and you'd like to add the Swagger UI, add this code above the first section:

```
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >
```

Next, add this section following the section with the OpenAPI specification:

```
## API Calls

[Insert descriptive text here]


{% include swagger-section-header.html %}
    url: "v1/[Name of OpenAPI file]", 
{% include swagger-section-footer.html %}


<p><small><a href="#">Back to top</a></small></p>
```

## Adding Swagger UI to your existing API documentation (no Try It Out functionality)

If you already host your documentation on this site, and you'd like to add the Swagger UI, add this code above the first section:

```
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >
```

Next, this section following the section with the OpenAPI specification:

```
## API Calls

[Insert descriptive text here]


{% include swagger-section-header-disable-try-it-out.html %}
    url: "v1/[Name of OpenAPI file]", 
{% include swagger-section-footer-disable-try-it-out.html %}


<p><small><a href="#">Back to top</a></small></p>
```

# Removing API Documentation

If a decision has been made to deprecate an API, one step will include removing the documentation from the open.gsa.gov site.  A best practice is to first edit the API documentation to add a highly visible banner (an example that can be easily reused is [this alpha alert banner](https://raw.githubusercontent.com/GSA/open-gsa-redesign/master/_apidocs/dap.md)) several weeks or months before the API is to be deprecated.  

In order to remove the API documentation: 

1. Create a branch of the site from the master branch. Naming convention for new branch: `apidocs-apiname-YYYYMMDD` (replace apiname with the name of your API without spaces). 
2. In that branch, delete the relevant markdown file in the `_apidocs` [folder](https://github.com/GSA/open-gsa-redesign/tree/master/_apidocs).
3. In that branch, delete the relevant openapi yml file that is in a subfolder of the `_apidocs` [folder](https://github.com/GSA/open-gsa-redesign/tree/master/_apidocs).
4. In that branch, delete the reference to your API in [the api-list.yml file](https://github.com/GSA/open-gsa-redesign/blob/master/_data/api-list.yml) which populates the [directory page](https://open.gsa.gov/api/).
5. When you are ready to complete the removal, [open a pull request](https://github.com/GSA/open-gsa-redesign/pulls) to merge your branch with the master branch. [Email the CISS API team](mailto:api.ciss@gsa.gov) with your PR number or a link to your PR, informing them that your branch is ready to be merged.
6. The CISS team will merge your branch with master, resulting in your documentation being deleted from the live website, and the reference to it on the directory page being removed.  
