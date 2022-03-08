---
title: SAM.gov Contract Data (Formerly FPDS.gov)
banner-heading: SAM.gov Contract Data (Formerly FPDS.gov)
---


<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >


## Overview
We’re in the process of bringing FPDS into SAM.gov…
<p><small><a href="#">Back to top</a></small></p>

## Getting Started
If people are trying to set up a new connection, how do they do it?
- Quick Start Guide
- Atom Feed Demo
- Certification Process
- FAADC Certification Process
<p><small><a href="#">Back to top</a></small></p>

## General Information
- Certified COTS/GOTS List
- Certification Form
<p><small><a href="#">Back to top</a></small></p>

## Current Version Specifications
- Version 1.5 Data Dictionary
- Other Transactions (OT) Data Dictionary
- NASA Data Dictionary
- WSDL Zip File
- XSD Zip File
- Web Services Specifications
- Validation Rules
- Version 1.5 Changes
- Version 1.5 Quick Start Guide
<p><small><a href="#">Back to top</a></small></p>

## Current FAADC Specifications
- FAADC Web Services Specifications V1.1
- FAADC Certification Process
- FAADC Help Guide V1.1
- FAADC WSDL Files
- FAADC Validation Rules V1.1
- FAADC Data Dictionary V1.1
- FAADC Atom Feed Specifications V1.1
<p><small><a href="#">Back to top</a></small></p>

## XML Schemas
    {% raw %}
    <div id="fpds_doc_tree">
        {% include tree-api.html %}
    </div>
    <script>
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var fancyTree = document.createElement('script'); fancyTree.type = 'text/javascript'; //fancyTree.async = true;
        fancyTree.src = '//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/jquery.fancytree-all-deps.min.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(fancyTree);

        
    })();
    </script>
    <noscript>Please enable JavaScript to show the links in Tree format .</noscript>
    <% endraw %>
<p><small><a href="#">Back to top</a></small></p>

## Previous Version Specifications
#### Version 1.4.5
- Data Dictionary

#### Version 1.4.4
- Web Services Specifications
- WSDL and Specification Changes for CO Determination of Business Size
- Data Dictionary

#### Version 1.4.3
- Data Dictionary

#### Version 1.4.2
- Data Dictionary

#### Version 1.4.1
- Data Dictionary
- OT Data Dictionary

#### Version 1.4
- Data Dictionary
- OT Data Dictionary
- Web Services Specifications
- Changes in XSD and WSDLs
- SOAP Examples
- WSDL Zip file
- Validation Rules

#### Version 1.3
- FPDS Data Dictionary
- Web Services Integration Specifications
- WSDL Files
- Changes Outline
- SOAP Request Samples
- XML Examples
- Validation Rules Document

#### Version 1.2 and Earlier
- Version 1.2 Data Dictionary
- Version 1.1 Data Dictionary
- Version 1.0 Data Dictionary
<p><small><a href="#">Back to top</a></small></p>

## Previous FAADC Specifications
- FAADC 1.0 WSDL ZIP File
- FAADC Web Services Specifications V1.0
- FAADC Help Guide V1.0
- FAADC Validation Rules V1.0
- FAADC Data Dictionary V1.0
- FAADC Atom Feed Specifications V1.0
<p><small><a href="#">Back to top</a></small></p>

## Contact Us
Standard verbiage on what to prepare and then how to reach FSD
<p><small><a href="#">Back to top</a></small></p>

## Change Log
Log of changes to this page
<p><small><a href="#">Back to top</a></small></p>

{% raw %}
<script>
  (function() {
    window.onload = function() {
        
        jQuery("#fpds_doc_tree").fancytree({

            activate: function(event, data){
                var node = data.node,
                    orgEvent = data.originalEvent;
                console.log("activate", orgEvent)
                if(node.data.href){
                   //window.open(node.data.href,  node.data.target);
                }
            },
            
            click: function(event, data){
                var node = data.node,
                orgEvent = data.originalEvent;
                console.log("click", orgEvent, event.keyCode)
                if(node.data.href){
                    window.open(node.data.href,  node.data.target);
                  
                }
            }
        });
        jQuery(".fancytree-container").addClass("fancytree-connectors");
    };

}).call(this);
  
</script>
{% endraw%}