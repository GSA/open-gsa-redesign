---
layout: docs
title: Open Source Software (OSS) Policy | Implementation Guide
permalink: /oss-implementation/
category: code
banner-heading: Open Source Software
banner-text:
sidenav: docs
subnav:
  - text: Inventory inclusion
    href: '#inventory-inclusion'
  - text: How to open source
    href: '#how-to-open-source'
---

### Implementation

There are two parts of implementing the OSS policy at GSA.  

1.) Inventorying all repositories (open and closed) and adding them to the gsa.gov/code.json file.  
2.) Turning closed source code into open source code.  

The initial policy speaks to new custom code being developed after August 2016. However, in the Agency's effort to become 100% open, we are looking to make all custom code developed by GSA employees and contracted partners to be open sourced.

In evangelizing OSS at GSA, several questions arise:

1.) Why are we releasing our code, and is anyone going to use it?  
2.) How do we release our code, and who is going to scrub it for sensitive content?  
3.) What about licensing, and what types of licenses apply?  
4.) What about security, and are we going to open ourselves to vulnerabilities?  

Here are some general thoughts relating to these questions and the remaining will provide specific instructions for inventorying and publicly releasing code:

1.) Even if no one uses the code, open sourcing the code helps goverment to implement good code management and vendor turnover.  If the code is public, the federal project team can see the code on a regular basis and check for pragmatic prose.  As vendors transition, the code will be complete in one place and the handoff of disks or large zip files will be a thing of the past.  Finally, in moving to DevOps (including [12Factor.Net](https://12factor.net/) principles), we need to have one version of the *truth*.

2.) The project team that releases the code is responsible for scrubbing for sensitive content.  This includes the GSA employees responsible for the project and vendors who are writing the custom code.  The CTO team is working on two scripts ([#1](https://github.com/GSA/codeinventory-github) and [#2](https://github.com/GSA/codeinventory)) to help scrub the code and project teams should start moving towards [12Factor.net](https://12factor.net/) principles.

3.) It will be up to the project team producing the code to determine the best license.  The team should consult legal and the CTO's office will assist.

4.) The project team should be working with security on a regular basis to have the code scanned for vulnerabilities.  The team should also look at [12Factor.net](https://12factor.net/) on some ideas about moving configuration information and sensitive content out of code files.  Plus, the project team can use scripts developed by the CTO team ([#1](https://github.com/GSA/codeinventory-github) and [#2](https://github.com/GSA/codeinventory)).

---

### Inventory inclusion

We are mandated to include all repositories with custom developed code in the code.json file (open and closed source code).  This helps us to account for all code produced by GSA and provides metadata about the code.  Not only is this a requirement of the agency by OMB, but it is beneficial to the public.

#### What is a source code repository?

In this context, a *source code repository* is any place where source code is stored. This is often done in a version control system such as Git, Subversion, Mercurial, CVS, or Jazz SCM. The repository could be hosted on a public website or in internal agency systems.

#### Does your repository need to be added to the inventory?

We need to account for all source code at GSA, regardless of whether the project is open source or closed source. You must add your repository to the GSA inventory if:

* it contains source code, and
* it has active development (i.e., creating or changing source code files) on or after August 9, 2016

Additionally, even if your source code has not had any active development since August 9, 2016, it is recommended that it be included in the inventory.

When you submit your source code repository metadata to the inventory, the public will see the metadata. If your code is closed source, this does not change the fact that your project is closed source, and it will remain closed source. The public will only see the metadata and not the source code.

The only source code that should *not* be submitted to the inventory is code that is truly exploratory or disposable in nature, such as that written by a developer experimenting with a new language or library. If your repository only contains test code and does not serve as the foundation of a real app, tool, website, or other product, then do not include it in the GSA inventory.

---

#### How to add your source code repository to the inventory

If you have determined that your source code repository should be included in the inventory, the submission process depends on where it is located: [GitHub](https://github.com/) or elsewhere.

##### If your source code is on GitHub

This specifically refers to projects that are under the [GSA organization on GitHub](https://github.com/GSA/).

**If your code is on GitHub, you do not have to take any further action.** We automatically pull metadata from GitHub projects for the inventory. If you want to provide custom metadata for your project, see below.

###### Custom Metadata

If you want to customize your project metadata, add a YAML or JSON metadata file to the root folder of your repository. This file should be named `.codeinventory.yml` or `.codeinventory.json`. It should contain metadata about your project. [We have a tool to help you generate a YAML or JSON file](https://gsa.github.io/codeinventory-metadata-generator/). Once you add this metadata file to your repository, we can automatically scan it to include your project in the GSA source code inventory. Leave the file in your repository and keep it updated. We will regularly pull the metadata from the file to refresh the GSA inventory. If you no longer want custom metadata and want us to automatically build metadata for you, just remove the file from your repository.

Please see the [GSA CTO Website repository](https://github.com/GSA/cto-website/blob/master/.codeinventory.yml) for an example of how to use a `.codeinventory.yml` file.

**Example YAML File (`.codeinventory.yml`)**

```yaml
name: 'CTO Website'
description: 'A website for the GSA Office of the CTO'
license: 'https://www.usa.gov/government-works'
openSourceProject: 1
governmentWideReuseProject: 1
tags:
    - jekyll
    - cto
contact:
    email: cto@gsa.gov
```

**Example JSON File (`.codeinventory.json`)**

```json
{
  "name": "CTO Website",
  "description": "A website for the GSA Office of the CTO",
  "license": "https://www.usa.gov/government-works",
  "openSourceProject": 1,
  "governmentWideReuseProject": 1,
  "tags": [
    "jekyll",
    "cto"
  ],
  "contact": {
    "email": "cto@gsa.gov"
  }
}
```

[Code.gov provides specifics on field values](https://code.gov/about/compliance/inventory-code).

#### If your source code is *not* on GitHub

If your source code is in a version control system other than the GSA organization in GitHub, manually submit your source code information via an [online form](https://goo.gl/forms/UgYwvEks2jsB59Kh2) (accessible only by GSA.gov users).

*Note: GSA users are welcome to create a new open source repository under the GitHub GSA organization. [Learn how to create a GitHub account, join the GSA organization, and create a new public repository to publish your project as open source](https://github.com/GSA/GitHub-Administration/blob/master/README.md#workflows).*

---

### How to open source
(Note: There is a GSA IT Workgroup with representatives from CTO, IS, Legal, IQ, IP, and ID developing further guidance on process and tools for open sourcing code at GSA.  The guidance will be updated and added here.)

#### Modern code management practices
You should begin with reading [12Factor.net](https://12factor.net/) principles for code management, particularly [#1](https://12factor.net/codebase) and [#3](https://12factor.net/config) for proper modern code management practices.  Questions around code base exposure commonly arise when we are out evangelizing OSS for the Agency.  This suggests that we are not familiar with modern code management.

Having open source code creates one version of the *truth* in code and supports server/development environment management (in the cloud).  Furthermore, it supports vendor turnover as the code is being managed publicly and processes supporting modern DevOps practices.  This should allow a new vendor and GSA feds to smoothly transition new team members.

#### Scanning code for public release
As good IT project management and development practice, project teams should be conducting regular code reviews.  This should be done in coordination with the contractor teams.  One way to do this is for all project members to be included in the VCS (Version Control System) and to schedule regular code reviews.  This should not be done at the end of a contract or end of a build cycle, rather should be done through the development/release cycle.

Furthermore, the project team should be working with the IT security office to conduct regular code scans (this is both at the application and source code levels).  The CTO team works regularly with security and is creating two scripts ([#1](https://github.com/GSA/codeinventory-github) and [#2](https://github.com/GSA/codeinventory)) that project teams can use to scan their code.  These scans are different than those done by security, as they are specific to the code to be released.  The scripts scan all files for sensitive content.

As with all of these open sourcing tasks, one approach would be to work on open sourcing closed source code on a project by project basis.  This could be as an update is planned, as vendors transition, etc.  Eventually all projects would become open sourced.

#### Start with moving to a VCS, private, and then public repositories
Project teams should be using a GSA approved Version Control Solution (VCS) for all code management.  To get the code to a public release state (as determined by the project team), the teams should be conducting code reviews and scans in a private repository with the ultimate goal to make the code public on the [GitHub GSA organization](https://github.com/GSA).

#### Licensing

Licensing needs to be worked with GSA Legal and further guidance will be provided in the near future.  

#### Feedback

Feedback is encouraged through this [site's GitHub repository issues page](https://github.com/GSA/open-gsa-redesign/issues).  In the title of the issue, denote that it is OSS related to call attention to it from the appropriate CTO team members.  To suggest multiple changes, you may also submit a pull request.
