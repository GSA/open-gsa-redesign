# Open GSA Redesign

Open.gsa.gov is the current developer portal for all GSA data, APIs, and code open to the public. This repo is where we will be managing development of this portal.

This particular site is made for use with [cloud.gov Pages](https://cloud.gov/pages) in mind.

See the [wiki](https://github.com/GSA/open-gsa-redesign/wiki) for more info related to this site including a product roadmap, personas, and guides.

## Repository access for API documentation

There are some security requirements governing your participation in editing the API documents hosted in this repository. Namely:

* All commits must have a signature
* All pull requests must be reviewed and approved by someone other than the individual who opened the pull request

### How to sign commits

Commit signing provides an additional layer of verification, ensuring that changes are made by those who are authorized to do so.

If you are making edits directly on the GitHub website, GitHub will automatically handle signing your commits. If you are pushing your change from your local system, then you will have to ensure that you are correctly signing your commits using your Git application. To get started with commit signing, [GitHub's documentation on commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) for instructions on how to configure your Git client and GitHub account. You may use any signing method (GPG, SSH, or S/MIME).

### How to approve pull requests

Reviews help provide additional confirmation that changes to the website are acceptable.

If you are opening a pull request to make a change, please arrange for another person on your team to review and approve your change. That reviewer will need to have the proper access to this repository. Please see the [list of API Documentation Editors](https://github.com/orgs/GSA/teams/open-gsa-gov-api-documentation-editors) to make sure the reviewer already has access to this repository. If not, please contact us to have them added. Reviewers can refer to [GitHub's documentation on approving a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews) for instructions.

## Running a local development server

This is a statically generated site built using Jekyll.

### Before you start

You will need to have Ruby version 3 following installed on your machine. See the `.ruby-version` file for the current version this project uses.

To install Bundler and then the dependencies:

```
gem install bundler
bundle install
```

### Running Jekyll

The preferred method for running Jekyll is with `bundle exec rake serve`.

Note that this method will rebuild the entire site every time you make a change to any file. If you want faster builds, you can use `bundle exec rake incrementalserve`, which comes with [some caveats](https://jekyllrb.com/docs/configuration/incremental-regeneration/), notably only changed files will be rebuilt. This means if you change a data file, HTML pages that use that data file won't be updated.

## License

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

##test - 3/11/2024
