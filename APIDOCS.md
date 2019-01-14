# Adding API documentation

GSA teams can host their API documentation directly on this site if they prefer. 

## Steps to add API doco

1. Contact cto@gsa.gov and ask for access to manage API docs, sharing your github ID. (Your GitHub ID will have to be in the GSA org.)

2. Create a branch of the site from the `hosted-api-docs` branch. Naming convention for new branch: `apidocs-apiname`

3. In the new branch:
* Add a markdown file _apidocs/apiname.md
* Create a folder _apidocs/apiname/v1/ (or different version).
* In this folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3)
 
4. When you are ready to publish in the API directory, submit a pull request to merge your branch with the `hosted-api-docs` branch and @mention Ryan Day or Jeff Fredrickson.