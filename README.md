# Open GSA Redesign

Open.gsa.gov is the current developer portal for all GSA data, APIs, and code open to the public. This repo is where we will be managing development of this portal.

This particular site is made for use with [cloud.gov Pages](https://cloud.gov/pages) in mind.

See the [wiki](https://github.com/GSA/open-gsa-redesign/wiki) for more info related to this site including a product roadmap, personas, and guides.

## Running locally

This is a statically generated site built using Jekyll.

### Before you start

You will need to have the following installed on your machine:

* Ruby 3 (see the `.ruby-version` file for the current version this project uses)
* Bundler

### Running Jekyll

The preferred method for running Jekyll is with `bundle exec jekyll serve`.

Note that this method will rebuild the entire site every time you make a change to any file. If you want faster builds, you can use `bundle exec jekyll incrementalserve`, which comes with [some caveats](https://jekyllrb.com/docs/configuration/incremental-regeneration/), notably only changed files will be rebuilt. This means if you change a data file, HTML pages that use that data file won't be updated.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
