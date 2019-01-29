# Adding API documentation

GSA teams can host their API documentation directly on this site if they prefer. 

A live example of this is available here: https://open.gsa.gov/api/sample-api-basic/


## Steps to add API doco

1. Contact cto@gsa.gov and ask for access to manage API docs, sharing your github ID. (Your GitHub ID will have to be in the GSA org.)

2. Create a branch of the site from the `master` branch. Naming convention for new branch: `apidocs-apiname-YYYYMMDD` (replace `apiname` with the name of your API without spaces)

3. In the new branch:
* Copy the file _apidocs/sample-api-basic.md to a file named _apidocs/apiname.md 
* Create a folder _apidocs/apiname/v1/ (or the correct version).
* In this new folder, add the OpenAPI specification file, with the name openapi.yaml (if it is OpenAPI v.3) or openapi.json (if it is OpenAPI or Swagger v.2)
 
  Note: the navigation bar is generated from the headings in the markdown file, so those can be customized to meet your needs.

4. When you are ready to publish in the API directory, submit a pull request to merge your branch with the `master` branch and @mention Ryan Day or Jeff Fredrickson from the CTO team.

  At this point, you will see your API doco at: https://open.gsa.gov/api/apiname/


5. The CTO team will merge your branch with master, publishing your doco. They will also update the /_data/api-list.yml, which will add your API to the directory page: https://open.gsa.gov/api/
