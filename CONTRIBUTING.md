## Welcome!

We're so glad you're thinking about contributing to this open source project! If you're unsure about anything, just ask -- or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions just [shoot us an email](mailto:sara.cope@gsa.gov).



## Front end architecture
### CSS
- Styling will be built from the US Web Design Standards.
- CSS methodology will be inherited from the WDS, which inherits mostly from the [18f front end guide](https://pages.18f.gov/frontend/css-coding-styleguide/architecture/).
  - Use [18F modifed BEM naming convention](https://pages.18f.gov/frontend/css-coding-styleguide/naming/)
  - Componentized CSS: start with tag rules and only becomes more specific as necessary, using component classes.
- Will update the WDS library when it publishes a change required by the guide. Otherwise will update bi-monthly.
- The codebase will be visual regression tested when a suitable tool is found for 18F.
- The Sass code will be linted with `scss-lint`
  - The [18F CSS linting configuration](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml) will be used.
  - If linting fails, it will also fail the tests, but not the build.
- Will default to [semantic HTML5](http://www.w3schools.com/html/html5_semantic_elements.asp).


### Images
- Will use `<svg>` and `xlink` (looking for link) for icons.
- All images should be under 800kb in total, un-minified size.
- Images should be under 600Kb after being minified
- All raster images should be minified with a tool such as [grunt-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin).


### JavaScript
- The site will be developed with Jekyll so will have a ruby-based build.
- Is required to work without JavaScript.
- jQuery will be required for the WDS.
- No heavy JS framework is required.
- Should use the AirBnB linter configuration for JavaScript, if linting fails, it will also fail the tests, but not the build.
- Ruby gems will be used for front end dependency management.
- JavaScript will not be bundled.
- There will be a manual testing script that will be required to walk through for each PR.


### Devices
-  All versions of IE that Microsoft supports (IE9 and up); newest Chrome/FF.
-  Mobile first will be employed.
-  Every applicable change should be run through HTML code sniffer.


### Performance
- Will measure against the following custom events:
  - Time to main image and callout text.
- Each of these should load in under a second


## Where Contributions Go

Submit contributions to https://github.com/GSA/open-gsa-redesign as pull requests to the `master` branch.

## Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
