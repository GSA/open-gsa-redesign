---
title: SAM.gov Contract Data (Formerly FPDS.gov)
banner-heading: SAM.gov Contract Data (Formerly FPDS.gov)
---


<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/swagger-ui.css" >
<link rel="stylesheet" type="text/css" href="../../assets/swaggerui-dist/custom.css" >


## Overview
The awards data in SAM.gov (formerly in the Federal Procurement Data System, or FPDS) is information that awarding agencies are required by law to provide for certain awards. All modifications to those awards must also be reported, regardless of dollar value. This information is available to the public. 
<p><small><a href="#">Back to top</a></small></p>


## Getting Started
- [Quick Start Guide](https://iae-prd-opengsa.s3.amazonaws.com/FPDS_v15_quick_start_guide_(3).doc)
- [Atom Feed Demo](https://iae-prd-opengsa.s3.amazonaws.com/Atom_feed.ppt)
- [Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_Certification_Process.doc)
- [FAADC Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_FPDS_Certification_Process.doc)
<p><small><a href="#">Back to top</a></small></p>

## General Information
- Certified COTS/GOTS List
- [Certification Form](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_certification_form_March_2022_update.pdf)
<p><small><a href="#">Back to top</a></small></p>

## Current Version Specifications
- [Version 1.5 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.5_March_2022_update.pdf)
- [Other Transactions (OT) Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V15_OT_March_2022_update.pdf)
- [NASA Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/NASA_Specific_Data_Dictionary_Version_1.2.doc)
- WSDL Zip File
- XSD Zip File
- [Web Services Specifications](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-WebServices_Integration_Specifications_V1.5.docx)
- [Validation Rules](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_V1.5_Data_Validation_rules_document.docx)
- [Version 1.5 Changes](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-Specifications-Version15-Changes_(4).doc)
- [Version 1.5 Quick Start Guide](https://iae-prd-opengsa.s3.amazonaws.com/FPDS_v15_quick_start_guide_(3).doc)
- <details>
  <summary>Atom Feed Specifications V1.5.2</summary>
  <pre>
  <code class="xml">
  &lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot;&gt;
  &lt;/feed&gt;
  </code></pre>
  </details>
  
<p><small><a href="#">Back to top</a></small></p>

## Current FAADC Specifications
- [FAADC Web Services Specifications V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Webservice_Integration_Specifications_V1.1-March_2022_update.pdf)
- [FAADC Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_FPDS_Certification_Process.doc)
- [FAADC Help Guide V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Help_Guide_V1.1_(2).docx)
- FAADC WSDL Files
- [FAADC Validation Rules V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Validation_Rules_V1.1.doc)
- [FAADC Data Dictionary V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Data_Dictionary_V1.1.doc)
- FAADC Atom Feed Specifications V1.1
<p><small><a href="#">Back to top</a></small></p>

## XML Schemas
   
<link href="//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/skin-win8/ui.fancytree.min.css" rel="stylesheet">
{% raw %}
<script>
/* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var fancyTree = document.createElement('script'); fancyTree.type = 'text/javascript'; //fancyTree.async = true;
    fancyTree.src = '//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/jquery.fancytree-all-deps.min.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(fancyTree);

    
  })();
 </script>
<noscript>Please enable JavaScript to show the links in Tree format .</noscript>
{% endraw %}

<div id="fpds_doc_tree">
    <ul id="treeData">
        <li id="id3" class="expanded folder">FPDS
            <ul>
                <li id="id3.1" class="expanded folder">Schema
                    <ul>
                        <li id="id3.1.2" class="expanded folder">DataCollection
                            <ul>
                                <li id="id3.1.3" class="expanded folder">Contracts
                                    <ul>
                                        <li id="id3.1.3" class="expanded folder">1.0
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/IDV.html">IDV.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/NASASpecificContractElements.xsd">NASASpecificContractElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/NASASpecificContractElements.html">NASASpecificContractElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.0/NASASpecificIDVElements.xsd">NASASpecificIDVElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.0/NASASpecificIDVElements.html">NASASpecificIDVElements.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.1
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/IDV.html">IDV.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/NASASpecificContractElements.xsd">NASASpecificContractElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/NASASpecificContractElements.html">NASASpecificContractElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.1/NASASpecificIDVElements.xsd">NASASpecificIDVElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.1/NASASpecificIDVElements.html">NASASpecificIDVElements.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.2
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/ContractSummary.xsd">ContractSummary.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/ContractSummary.html">ContractSummary.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/IDV.html">IDV.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/NASASpecificContractElements.xsd">NASASpecificContractElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/NASASpecificContractElements.html">NASASpecificContractElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.2/NASASpecificIDVElements.xsd">NASASpecificIDVElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.2/NASASpecificIDVElements.html">NASASpecificIDVElements.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.3
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.3/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.3/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.3/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.3/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.3/ContractSummary.xsd">ContractSummary.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.3/ContractSummary.html">ContractSummary.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.3/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.3/IDV.html">IDV.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.4
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/ContractSummary.xsd">ContractSummary.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/ContractSummary.html">ContractSummary.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/IDV.html">IDV.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/NASASpecificContractElements.xsd">NASASpecificContractElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/NASASpecificContractElements.html">NASASpecificContractElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/NASASpecificIDVElements.xsd">NASASpecificIDVElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/NASASpecificIDVElements.html">NASASpecificIDVElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                <li id="id3.1.3" class="expanded folder">1.4.1
                                                    <ul>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/Award.xsd">Award.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/Award.html">Award.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/Contract.xsd">Contract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/Contract.html">Contract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/IDV.xsd">IDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/IDV.html">IDV.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.1/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.1/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                    </ul>
                                                </li>
                                                <li id="id3.1.3" class="expanded folder">1.4.2
                                                    <ul>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/Award.xsd">Award.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/Award.html">Award.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/Contract.xsd">Contract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/Contract.html">Contract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/IDV.xsd">IDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/IDV.html">IDV.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.2/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.2/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                    </ul>
                                                </li>
                                                <li id="id3.1.3" class="expanded folder">1.4.3
                                                    <ul>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/Award.xsd">Award.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/Award.html">Award.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/Contract.xsd">Contract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/Contract.html">Contract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/IDV.xsd">IDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/IDV.html">IDV.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.3/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.3/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                    </ul>
                                                </li>
                                                <li id="id3.1.3" class="expanded folder">1.4.4
                                                    <ul>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/Award.xsd">Award.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/Award.html">Award.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/Contract.xsd">Contract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/Contract.html">Contract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/IDV.xsd">IDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/IDV.html">IDV.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.4/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.4/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                    </ul>
                                                </li>
                                                <li id="id3.1.3" class="expanded folder">1.4.5
                                                    <ul>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/Award.xsd">Award.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/Award.html">Award.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/Contract.xsd">Contract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/Contract.html">Contract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/IDV.xsd">IDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/IDV.html">IDV.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.4.5/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                        <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.4.5/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.5
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/Award.xsd">Award.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/Award.html">Award.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/AwardExtension.xsd">AwardExtension.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/AwardExtension.html">AwardExtension.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/Contract.xsd">Contract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/Contract.html">Contract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/ContractExtension.xsd">ContractExtension.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/ContractExtension.html">ContractExtension.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/IDV.xsd">IDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/IDV.html">IDV.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/IDVExtension.xsd">IDVExtension.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/IDVExtension.html">IDVExtension.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/NASASpecificAwardElements.xsd">NASASpecificAwardElements.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/NASASpecificAwardElements.html">NASASpecificAwardElements.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/OtherTransactionAward.xsd">OtherTransactionAward.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/OtherTransactionAward.html">OtherTransactionAward.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/OtherTransactionContract.xsd">OtherTransactionContract.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/OtherTransactionContract.html">OtherTransactionContract.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/contracts/1.5/OtherTransactionIDV.xsd">OtherTransactionIDV.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/contracts/1.5/OtherTransactionIDV.html">OtherTransactionIDV.html</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li id="id3.1.3" class="expanded folder">Organizations
                                    <ul>
                                        <li id="id3.1.3" class="expanded folder">1.5
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/organizations/1.5/Agency.xsd">Agency.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/organizations/1.5/Agency.html">Agency.html</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/organizations/1.5/GovernmentOffice.xsd">GovernmentOffice.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/organizations/1.5/GovernmentOffice.html">GovernmentOffice.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.6
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/organizations/1.6/GovernmentOffice.xsd">GovernmentOffice.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/organizations/1.6/GovernmentOffice.html">GovernmentOffice.html</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li id="id3.1.3" class="expanded folder">Vendors
                                    <ul>
                                        <li id="id3.1.3" class="expanded folder">1.5
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/vendors/1.5/Vendor.xsd">Vendor.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/vendors/1.5/Vendor.html">Vendor.html</a></li>
                                            </ul>
                                        </li>
                                        <li id="id3.1.3" class="expanded folder">1.6
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/DataCollection/vendors/1.6/Vendor.xsd">Vendor.xsd</a></li>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/DataCollection/vendors/1.6/Vendor.html">Vendor.html</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li id="id3.1.2" class="expanded folder">System Administration
                            <ul>
                                <li id="id3.1.3" class="expanded folder">Users
                                    <ul>
                                        <li id="id3.1.3" class="expanded folder">1.5
                                            <ul>
                                                <li><a href="https://www.fpds.gov/FPDS-Schema/schema/SystemAdministration/users/1.5/User.xsd">User.xsd</a></li>
			                                    <li><a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/SystemAdministration/users/1.5/User.html">User.html</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="id3" class="expanded folder">FAADC
            <ul>
                <li id="id3.1" class="expanded folder">Schema
                    <ul>
                        <li id="id3.1.2" class="expanded folder">DataCollection
                            <ul>
                                <li id="id3.1.3" class="expanded folder">1.1
                                    <ul>
                                        <li><a href="https://www.fpds.gov/FAADC/schema/DataCollection/1.1/Assistance.xsd">Assistance.xsd</a></li>
			                            <li><a href="https://www.fpds.gov/FAADC/schemaDocs/DataCollection/1.1/Assistance.html">Assistance.html</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li id="id3.1.2" class="expanded folder">SystemServices
                            <ul>
                                <li id="id3.1.3" class="expanded folder">1.1
                                    <ul>
                                       <li><a href="https://www.fpds.gov/FAADC/schema/SystemServices/1.1/Audit.xsd">Audit.xsd</a></li>
			                            <li><a href="https://www.fpds.gov/FAADC/schemaDocs/SystemServices/1.1/Audit.html">Audit.html</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

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
{% endraw %}


<p><small><a href="#">Back to top</a></small></p>

## Previous Version Specifications
#### Version 1.4.5
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.5_March_2022_update.pdf)

#### Version 1.4.4
- [Web Services Specifications](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-WebServices_Integration_Specifications_V1.4.4.docx)
- [WSDL and Specification Changes for CO Determination of Business Size](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-COBusSizeWebService-Changes_V1.4.4_(1).doc)
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.4_March_2022_update.pdf)

#### Version 1.4.3
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.3_March_2022_update.pdf)

#### Version 1.4.2
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.2_March_2022_update.pdf)

#### Version 1.4.1
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.1_March_2022_update.pdf)
- [OT Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4.1_OT_March_2022_update.pdf)

#### Version 1.4
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version14-Changes_(1).doc)
- [OT Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V14_OT_March_2022_update.pdf)
- [Web Services Specifications](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-NG_14_Data_Validation_rules_document_(3).doc)
- Changes in XSD and WSDLs
- SOAP Examples
- WSDL Zip file
- [Validation Rules](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_14_Data_Validation_rules_document.doc)

#### Version 1.3
- [FPDS Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.3_March_2022_update.pdf)
- [Web Services Integration Specifications](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-Specifications-WebServices_Integration_Specifications_V1.4_(5).doc)
- WSDL Files
- [Changes Outline](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version13-Changes-V16.doc)
- SOAP Request Samples
- XML Examples
- [Validation Rules Document](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version13-Changes-V16...docx)

#### Version 1.2 and Earlier
- [Version 1.2 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_1.2_March_2022_update.pdf)
- [Version 1.1 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-DES-SDD-data_dictionary-DESversion1.1_(1).doc)
- [Version 1.0 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-DES-SDD-data_dictionary-DES_version1.0.doc)
<p><small><a href="#">Back to top</a></small></p>

## Previous FAADC Specifications
- FAADC 1.0 WSDL ZIP File
- [FAADC Web Services Specifications V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Webservice_Integration_Specifications_(1).docx)
- [FAADC Help Guide V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Help_Guide_March_2022_update.pdf)
- [FAADC Validation Rules V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Validation_Rules.docx)
- [FAADC Data Dictionary V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Data_Dictionary.docx)
- FAADC Atom Feed Specifications V1.0
<p><small><a href="#">Back to top</a></small></p>

## Contact Us
- Reach out to the SAM.gov team at [fsd.gov](http://www.fsd.gov) for inquiries and help desk support.
- We encourage you to join our Technical Interface Community (TIC) by sending an email to [IAE_Admin@gsa.gov](mailto:IAE_Admin@gsa.gov). The TIC meets every one to two months.
<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
3/22/2022 | 1.0 | Base Version

<p><small><a href="#">Back to top</a></small></p>
