---
title: SAM.gov Acquisition Award Data (Formerly FPDS.gov)
banner-heading: SAM.gov Acquisition Award Data (Formerly FPDS.gov)
tree_js_load: true
---

<link href="//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/skin-win8/ui.fancytree.min.css" rel="stylesheet">

<div class="usa-alert usa-alert-warning" id="site-wide-alert" role="alert">
   <div class="usa-alert-body">
     <p class="usa-alert-text">
        <b>Note</b>: Some users of Microsoft Edge have issues downloading files from this site. If this happens, go to your browser settings, then to the downloads section, and disable Open Office files.
     </p>
   </div>
 </div>

## Overview
The awards data in SAM.gov (formerly in the Federal Procurement Data System, or FPDS) is information that awarding agencies are required by law to provide for certain awards. All modifications to those awards must also be reported, regardless of dollar value. This information is available to the public. 
<p><small><a href="#">Back to top</a></small></p>


## Getting Started
- [Quick Start Guide](https://iae-prd-opengsa.s3.amazonaws.com/FPDS_v15_quick_start_guide_(3).doc)
- [Atom Feed Demo](https://iae-prd-opengsa.s3.amazonaws.com/Atom_feed.ppt)
- [Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_Certification_Process.doc)
<p><small><a href="#">Back to top</a></small></p>

## General Information
- [Certified COTS/GOTS List](https://www.fpds.gov/wiki/index.php/Certified_Agency-CWS_COTS/GOTS_List)
- [Certification Form](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_certification_form_March_2022_update.pdf)
<p><small><a href="#">Back to top</a></small></p>

## Current Version Specifications
- [Version 1.5 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.5_March_2022_update.pdf)
- [Other Transactions (OT) Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V15_OT_March_2022_update.pdf)
- [NASA Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/NASA_Specific_Data_Dictionary_Version_1.2.doc)
- [WSDL Zip File](https://www.fpds.gov/downloads/V15WSDLFiles.zip)
- [XSD Zip File](https://www.fpds.gov/downloads/V15XSDFiles.zip)
- [Web Services Specifications](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-WebServices_Integration_Specifications_V1.5.docx)
- [Validation Rules](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_V1.5_Data_Validation_rules_document.docx)
- [Version 1.5 Changes](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-Specifications-Version15-Changes_(4).doc)
- [Version 1.5 Quick Start Guide](https://iae-prd-opengsa.s3.amazonaws.com/FPDS_v15_quick_start_guide_(3).doc)
- Atom Feed Specifications V1.5.2
    <details>
    <summary>Introduction</summary>
    <p>
        FPDS has data reporting web services that provide access in real-time to FPDS central data repository. Atom Feeds provides access to the same contractual data with real time feeds.
    </p>
    </details>
    <details>
    <summary>FPDS Atom feed format</summary>
    <p>
        FPDS Atom feed specification is based of the industry standard Atom 1.0 format <a href="https://datatracker.ietf.org/doc/html/rfc4287" target="_blank">RFC4287</a> as defined by Internet Engineering Task Force (IETF) in December 2005. <br>
        FPDS contract data will follow FPDS Version 1.5 Award and IDV specification.
    </p>
    </details>
    <details>
    <summary>Feed XML specification</summary>
    <pre>
    <code class="xml">
        &lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot;&gt;
            &lt;title&gt;FFATA Portal search results for&lt;![CDATA[: recovery]]&gt;&lt;/title&gt;
            &lt;link rel=&quot;alternate&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
            &lt;link rel=&quot;first&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
            &lt;link rel=&quot;last&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
            &lt;link rel=&quot;previous&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
            &lt;link rel=&quot;next&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
            &lt;modified/&gt;
            &lt;author&gt;
                &lt;name/&gt;
            &lt;/author&gt;
            &lt;entry&gt;
                &lt;title&gt;&lt;![CDATA[Entry Title]]&gt;&lt;/title&gt;
                &lt;link rel=&quot;alternate&quot; type=&quot;text/html&quot; href=&quot;url_link&quot;/&gt;
                &lt;modified&gt;2009-08-08 00:33:48&lt;/modified&gt;
                &lt;content type=&quot;application/xml&quot; xmlns:ns1=&quot;https://www.fpds.gov&quot;&gt;
                    ... Award/IDV XML
                &lt;/content&gt;
            &lt;/entry&gt;
        &lt;/feed&gt;
    </code></pre>
    </details>
    <details>
    <summary>Atom Element Definitions</summary>
    <p>
       <b>Container Elements</b>
       <ul style="list-style-type: disc">
       <li>“feed” Element – It is the top-level element of an Atom Feed Document, acting as a container for metadata and data associated with the feed</li>
       <li> “entry” Element – It represents an individual entry, acting as a container for metadata and data associated with the entry.</li>
       <li>“content” Element – It contains either links or content of the entry. The “type” attribute specifies the MIME media type. It “type” attribute is not present then the content is treated as “text”. The content of the element is either an Award/IDV xml.</li>
       </ul>
       <b>Metadata Elements</b>
       <ul style="list-style-type: disc">
       <li>"author” Element – It indicates the author or the entry or the feed.</li>
       <li>“link” Element – It defines a reference from an entry or feed to a web resource. The “type” attribute is n advisory media type. It is a hint about the the type of representation that is expected to be returned when the value of href attribute is deferenced. The “rel” attribute indicates the link relation type.</li>
       <li>“alternate” signifies an alternate version of the resource described by the containing element.</li>
       <li>“first” signifies the first entry element in the feed.</li>
       <li>“last” signifies the last entry element in the feed.</li>
       <li>“previous” signifies the previously read entry element of the feed.</li>
       <li>“next” signifies the next available entry elements of the feed.</li>
       <li>“title” Element - It conveys a human-readable title for an entry or feed.</li>
       <li>“modified” Element with in the “entry” section represents the last modified date of the entry.</li>
       </ul>
    </p>
    </details>
    <details>
    <summary>Award XML</summary>
    <pre>
    <code class="xml">
        &lt;award xmlns=&quot;https://www.fpds.gov/FPDS&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; version=&quot;String&quot;&gt;
        &lt;awardID&gt;
            &lt;awardContractID&gt;
                &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                &lt;PIID&gt;String&lt;/PIID&gt;
                &lt;modNumber&gt;0&lt;/modNumber&gt;
                &lt;transactionNumber&gt;0&lt;/transactionNumber&gt;
            &lt;/awardContractID&gt;
            &lt;referencedIDVID&gt;
                &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                &lt;PIID&gt;String&lt;/PIID&gt;
                &lt;modNumber&gt;0&lt;/modNumber&gt;
            &lt;/referencedIDVID&gt;
        &lt;/awardID&gt;
        &lt;listOfOtherIDsForThisAward&gt;
            &lt;awardID&gt;
                &lt;awardContractID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;0&lt;/modNumber&gt;
                    &lt;transactionNumber&gt;0&lt;/transactionNumber&gt;
                &lt;/awardContractID&gt;
                &lt;referencedIDVID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;0&lt;/modNumber&gt;
                &lt;/referencedIDVID&gt;
            &lt;/awardID&gt;
        &lt;/listOfOtherIDsForThisAward&gt;
        &lt;relevantContractDates&gt;
            &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
            &lt;effectiveDate&gt;0000-00-00 00:00:00&lt;/effectiveDate&gt;
            &lt;currentCompletionDate&gt;0000-00-00 00:00:00&lt;/currentCompletionDate&gt;
            &lt;ultimateCompletionDate&gt;0000-00-00 00:00:00&lt;/ultimateCompletionDate&gt;
        &lt;/relevantContractDates&gt;
        &lt;dollarValues&gt;
            &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
            &lt;baseAndExercisedOptionsValue&gt;3.1415&lt;/baseAndExercisedOptionsValue&gt;
            &lt;baseAndAllOptionsValue&gt;3.1415&lt;/baseAndAllOptionsValue&gt;
        &lt;/dollarValues&gt;
            &lt;totalDollarValues&gt;
            &lt;totalObligatedAmount&gt;3.1415&lt;/totalObligatedAmount&gt;
            &lt;totalBaseAndExercisedOptionsValue&gt;3.1415&lt;/totalBaseAndExercisedOptionsValue&gt;
            &lt;totalBaseAndAllOptionsValue&gt;3.1415&lt;/totalBaseAndAllOptionsValue&gt;
        &lt;/totalDollarValues&gt;
        &lt;purchaserInformation&gt;
            &lt;contractingOfficeAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/contractingOfficeAgencyID&gt;
            &lt;contractingOfficeID Description=&quot;String&quot; regionCode=&quot;String&quot; country=&quot;String&quot;&gt;String&lt;/contractingOfficeID&gt;
            &lt;fundingRequestingAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingRequestingAgencyID&gt;
            &lt;fundingRequestingOfficeID name=&quot;String&quot;&gt;String&lt;/fundingRequestingOfficeID&gt;
                    &lt;foreignFunding description=&quot;String&quot;&gt;String&lt;/foreignFunding&gt;
            &lt;purchaseReason description=&quot;String&quot;&gt;String&lt;/purchaseReason&gt;
        &lt;/purchaserInformation&gt;
        &lt;contractMarketingData&gt;
            &lt;feePaidForUseOfService&gt;3.1415&lt;/feePaidForUseOfService&gt;
            &lt;totalEstimatedOrderValue&gt;3.1415&lt;/totalEstimatedOrderValue&gt;
        &lt;/contractMarketingData&gt;
        &lt;contractData&gt;
            &lt;contractActionType description=&quot;String&quot; part8OrPart13=&quot;String&quot;&gt;String&lt;/contractActionType&gt;
            &lt;typeOfContractPricing description=&quot;String&quot;&gt;String&lt;/typeOfContractPricing&gt;
            &lt;reasonForModification description=&quot;String&quot;&gt;String&lt;/reasonForModification&gt;
            &lt;majorProgramCode&gt;String&lt;/majorProgramCode&gt;
            &lt;nationalInterestActionCode description=&quot;String&quot;&gt;String&lt;/nationalInterestActionCode&gt;
            &lt;costOrPricingData description=&quot;String&quot;&gt;String&lt;/costOrPricingData&gt;
            &lt;solicitationID&gt;String&lt;/solicitationID&gt;
            &lt;costAccountingStandardsClause description=&quot;String&quot;&gt;String&lt;/costAccountingStandardsClause&gt;
                    &lt;descriptionOfContractRequirement&gt;String&lt;/descriptionOfContractRequirement&gt;
                    &lt;inherentlyGovernmentalFunction description=&quot;String&quot;&gt;String&lt;/inherentlyGovernmentalFunction&gt; 
            &lt;GFE-GFP description=&quot;String&quot;&gt;String&lt;/GFE-GFP&gt;
            &lt;seaTransportation description=&quot;String&quot;&gt;String&lt;/seaTransportation&gt;
            &lt;undefinitizedAction description=&quot;String&quot;&gt;String&lt;/undefinitizedAction&gt;
            &lt;consolidatedContract description=&quot;String&quot;&gt;String&lt;/consolidatedContract&gt;
            &lt;performanceBasedServiceContract description=&quot;String&quot;&gt;String&lt;/performanceBasedServiceContract&gt;
            &lt;multiYearContract description=&quot;String&quot;&gt;String&lt;/multiYearContract&gt;
            &lt;listOfTreasuryAccounts&gt;
                &lt;treasuryAccount&gt;
                    &lt;treasuryAccountSymbol&gt;
                        &lt;subLevelPrefixCode&gt;St&lt;/subLevelPrefixCode&gt;
                        &lt;allocationTransferAgencyIdentifier&gt;Str&lt;/allocationTransferAgencyIdentifier&gt;
                        &lt;agencyIdentifier name=&quot;String&quot;&gt;String&lt;/agencyIdentifier&gt;
                        &lt;beginningPeriodOfAvailability&gt;Stri&lt;/beginningPeriodOfAvailability&gt;
                        &lt;endingPeriodOfAvailability&gt;Stri&lt;/endingPeriodOfAvailability&gt;
                        &lt;availabilityTypeCode description=&quot;String&quot;&gt;String&lt;/availabilityTypeCode&gt;
                        &lt;mainAccountCode&gt;Stri&lt;/mainAccountCode&gt;
                        &lt;subAccountCode&gt;Str&lt;/subAccountCode&gt;
                    &lt;/treasuryAccountSymbol&gt;
                    &lt;initiative description=&quot;String&quot;&gt;String&lt;/initiative&gt;
                    &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
                &lt;/treasuryAccount&gt;
            &lt;/listOfTreasuryAccounts&gt;
            &lt;referencedIDVPart8OrPart13&gt;String&lt;/referencedIDVPart8OrPart13&gt;
            &lt;referencedIDVMultipleOrSingle&gt;String&lt;/referencedIDVMultipleOrSingle&gt;
            &lt;referencedIDVType&gt;String&lt;/referencedIDVType&gt;
            &lt;contingencyHumanitarianPeacekeepingOperation description=&quot;String&quot;&gt;String&lt;/contingencyHumanitarianPeacekeepingOperation&gt;
            &lt;contractFinancing description=&quot;String&quot;&gt;String&lt;/contractFinancing&gt;
            &lt;purchaseCardAsPaymentMethod description=&quot;String&quot;&gt;String&lt;/purchaseCardAsPaymentMethod&gt;
            &lt;numberOfActions&gt;1&lt;/numberOfActions&gt;
        &lt;/contractData&gt;
        &lt;legislativeMandates&gt;
            &lt;ClingerCohenAct description=&quot;String&quot;&gt;String&lt;/ClingerCohenAct&gt;
            &lt;materialsSuppliesArticlesEquipment description=&quot;String&quot;&gt;String&lt;/materialsSuppliesArticlesEquipment&gt;
            &lt;laborStandards description=&quot;String&quot;&gt;String&lt;/laborStandards&gt;
            &lt;constructionWageRateRequirements description=&quot;String&quot;&gt;String&lt;/constructionWageRateRequirements&gt;
            &lt;interagencyContractingAuthority description=&quot;String&quot;&gt;String&lt;/interagencyContractingAuthority&gt;
            &lt;otherStatutoryAuthority&gt;String&lt;/otherStatutoryAuthority&gt;
            &lt;listOfAdditionalReportingValues&gt;
                &lt;additionalReportingValue&gt;S&lt;/additionalReportingValue&gt;
                &lt;additionalReportingValue&gt;S&lt;/additionalReportingValue&gt;
            &lt;/listOfAdditionalReportingValues&gt;
        &lt;/legislativeMandates&gt;
        &lt;productOrServiceInformation&gt;
            &lt;productOrServiceCode description=&quot;String&quot; productOrServiceType=&quot;String&quot;&gt;String&lt;/productOrServiceCode&gt;
            &lt;contractBundling description=&quot;String&quot;&gt;String&lt;/contractBundling&gt;
            &lt;claimantProgramCode description=&quot;String&quot;&gt;String&lt;/claimantProgramCode&gt;
            &lt;principalNAICSCode description=&quot;String&quot;&gt;String&lt;/principalNAICSCode&gt;
            &lt;recoveredMaterialClauses description=&quot;String&quot;&gt;String&lt;/recoveredMaterialClauses&gt;
            &lt;manufacturingOrganizationType description=&quot;String&quot;&gt;String&lt;/manufacturingOrganizationType&gt;
            &lt;systemEquipmentCode description=&quot;String&quot;&gt;String&lt;/systemEquipmentCode&gt;
            &lt;informationTechnologyCommercialItemCategory description=&quot;String&quot;&gt;String&lt;/informationTechnologyCommercialItemCategory&gt;
            &lt;useOfEPADesignatedProducts description=&quot;String&quot;&gt;String&lt;/useOfEPADesignatedProducts&gt;
            &lt;countryOfOrigin name=&quot;String&quot;&gt;String&lt;/countryOfOrigin&gt;
            &lt;placeOfManufacture description=&quot;String&quot;&gt;String&lt;/placeOfManufacture&gt;
            &lt;IDVNAICS description=&quot;String&quot;&gt;String&lt;/IDVNAICS&gt;
            &lt;NAICSSource description=&quot;String&quot;&gt;String&lt;/NAICSSource&gt;
        &lt;/productOrServiceInformation&gt;
        &lt;vendor&gt;
            &lt;vendorHeader&gt;
                &lt;vendorName&gt;String&lt;/vendorName&gt;
                &lt;vendorAlternateName&gt;String&lt;/vendorAlternateName&gt;
                &lt;vendorLegalOrganizationName&gt;String&lt;/vendorLegalOrganizationName&gt;
                &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                &lt;vendorEnabled&gt;false&lt;/vendorEnabled&gt;
            &lt;/vendorHeader&gt;
            &lt;vendorSiteDetails&gt;
                &lt;vendorSocioEconomicIndicators&gt;
                    &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;1&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                    &lt;isAmericanIndianOwned&gt;1&lt;/isAmericanIndianOwned&gt;
                    &lt;isIndianTribe&gt;1&lt;/isIndianTribe&gt;
                    &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;1&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                    &lt;isVeteranOwned&gt;1&lt;/isVeteranOwned&gt;
                    &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;1&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                    &lt;isWomenOwned&gt;1&lt;/isWomenOwned&gt;
                    &lt;isWomenOwnedSmallBusiness&gt;1&lt;/isWomenOwnedSmallBusiness&gt;
                    &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                    &lt;isJointVentureWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                    &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                    &lt;minorityOwned&gt;
                        &lt;isMinorityOwned&gt;1&lt;/isMinorityOwned&gt;
                        &lt;isSubContinentAsianAmericanOwnedBusiness&gt;1&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                        &lt;isAsianPacificAmericanOwnedBusiness&gt;1&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                        &lt;isBlackAmericanOwnedBusiness&gt;1&lt;/isBlackAmericanOwnedBusiness&gt;
                        &lt;isHispanicAmericanOwnedBusiness&gt;1&lt;/isHispanicAmericanOwnedBusiness&gt;
                        &lt;isNativeAmericanOwnedBusiness&gt;1&lt;/isNativeAmericanOwnedBusiness&gt;
                        &lt;isOtherMinorityOwned&gt;1&lt;/isOtherMinorityOwned&gt;
                    &lt;/minorityOwned&gt;
                    &lt;isVerySmallBusiness&gt;false&lt;/isVerySmallBusiness&gt;
                &lt;/vendorSocioEconomicIndicators&gt;
                &lt;vendorBusinessTypes&gt;
                    &lt;isCommunityDevelopedCorporationOwnedFirm&gt;1&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                    &lt;isLaborSurplusAreaFirm&gt;1&lt;/isLaborSurplusAreaFirm&gt;
                    &lt;federalGovernment&gt;
                        &lt;isFederalGovernment&gt;1&lt;/isFederalGovernment&gt;
                        &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;1&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                        &lt;isFederalGovernmentAgency&gt;1&lt;/isFederalGovernmentAgency&gt;
                    &lt;/federalGovernment&gt;
                    &lt;isStateGovernment&gt;false&lt;/isStateGovernment&gt;
                    &lt;localGovernment&gt;
                        &lt;isLocalGovernment&gt;1&lt;/isLocalGovernment&gt;
                        &lt;isCityLocalGovernment&gt;1&lt;/isCityLocalGovernment&gt;
                        &lt;isCountyLocalGovernment&gt;1&lt;/isCountyLocalGovernment&gt;
                        &lt;isInterMunicipalLocalGovernment&gt;1&lt;/isInterMunicipalLocalGovernment&gt;
                        &lt;isLocalGovernmentOwned&gt;1&lt;/isLocalGovernmentOwned&gt;
                        &lt;isMunicipalityLocalGovernment&gt;1&lt;/isMunicipalityLocalGovernment&gt;
                        &lt;isSchoolDistrictLocalGovernment&gt;1&lt;/isSchoolDistrictLocalGovernment&gt;
                        &lt;isTownshipLocalGovernment&gt;1&lt;/isTownshipLocalGovernment&gt;
                    &lt;/localGovernment&gt;
                    &lt;isTribalGovernment&gt;1&lt;/isTribalGovernment&gt;
                    &lt;isForeignGovernment&gt;false&lt;/isForeignGovernment&gt;
                    &lt;businessOrOrganizationType&gt;
                                        &lt;isCorporateEntityNotTaxExempt&gt;1&lt;/isCorporateEntityNotTaxExempt&gt;
                                        &lt;isCorporateEntityTaxExempt&gt;1&lt;/isCorporateEntityTaxExempt&gt;
                                        &lt;isPartnershipOrLimitedLiabilityPartnership&gt;1&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                                        &lt;isSolePropreitorship&gt;1&lt;/isSolePropreitorship&gt;
                                        &lt;isSmallAgriculturalCooperative&gt;1&lt;/isSmallAgriculturalCooperative&gt;
                                        &lt;isInternationalOrganization&gt;1&lt;/isInternationalOrganization&gt;
                                        &lt;isUSGovernmentEntity&gt;&lt;/isUSGovernmentEntity&gt;
                                &lt;/businessOrOrganizationType&gt;
                &lt;/vendorBusinessTypes&gt;
                &lt;vendorLineOfBusiness&gt;
                                &lt;isCommunityDevelopmentCorporation&gt;1&lt;/isCommunityDevelopmentCorporation&gt;
                                &lt;isDomesticShelter&gt;1&lt;/isDomesticShelter&gt;
                                &lt;isEducationalInstitution&gt;1&lt;/isEducationalInstitution&gt;
                                &lt;isFoundation&gt;1&lt;/isFoundation&gt;
                                &lt;isHospital&gt;1&lt;/isHospital&gt;
                                &lt;isManufacturerOfGoods&gt;1&lt;/isManufacturerOfGoods&gt;
                                &lt;isVeterinaryHospital&gt;1&lt;/isVeterinaryHospital&gt;
                                &lt;isHispanicServicingInstitution&gt;1&lt;/isHispanicServicingInstitution&gt;
                        &lt;/vendorLineOfBusiness&gt;
                &lt;vendorRelationshipWithFederalGovernment&gt;
                    &lt;receivesContracts&gt;1&lt;/receivesContracts&gt;
                    &lt;receivesGrants&gt;1&lt;/receivesGrants&gt;
                    &lt;receivesContractsAndGrants&gt;1&lt;/receivesContractsAndGrants&gt;
                &lt;/vendorRelationshipWithFederalGovernment&gt;
                &lt;typeOfGovernmentEntity&gt;
                    &lt;isAirportAuthority&gt;1&lt;/isAirportAuthority&gt;
                    &lt;isCouncilOfGovernments&gt;1&lt;/isCouncilOfGovernments&gt;
                    &lt;isHousingAuthoritiesPublicOrTribal&gt;1&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                    &lt;isInterstateEntity&gt;1&lt;/isInterstateEntity&gt;
                    &lt;isPlanningCommission&gt;1&lt;/isPlanningCommission&gt;
                    &lt;isPortAuthority&gt;1&lt;/isPortAuthority&gt;
                    &lt;isTransitAuthority&gt;1&lt;/isTransitAuthority&gt;
                &lt;/typeOfGovernmentEntity&gt;
                &lt;vendorOrganizationFactors&gt;
                    &lt;isSubchapterSCorporation&gt;1&lt;/isSubchapterSCorporation&gt;
                    &lt;isLimitedLiabilityCorporation&gt;1&lt;/isLimitedLiabilityCorporation&gt;
                    &lt;isForeignOwnedAndLocated&gt;1&lt;/isForeignOwnedAndLocated&gt;
                    &lt;profitStructure&gt;
                        &lt;isForProfitOrganization&gt;false&lt;/isForProfitOrganization&gt;
                        &lt;isNonprofitOrganization&gt;false&lt;/isNonprofitOrganization&gt;
                        &lt;isOtherNotForProfitOrganization&gt;false&lt;/isOtherNotForProfitOrganization&gt;
                    &lt;/profitStructure&gt;
                    &lt;isShelteredWorkshop&gt;1&lt;/isShelteredWorkshop&gt;
                    &lt;stateOfIncorporation name=&quot;String&quot;&gt;String&lt;/stateOfIncorporation&gt;
                    &lt;countryOfIncorporation name=&quot;String&quot;&gt;String&lt;/countryOfIncorporation&gt;
                    &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                &lt;/vendorOrganizationFactors&gt;
                &lt;typeOfEducationalEntity&gt;
                    &lt;is1862LandGrantCollege&gt;1&lt;/is1862LandGrantCollege&gt;
                    &lt;is1890LandGrantCollege&gt;1&lt;/is1890LandGrantCollege&gt;
                    &lt;is1994LandGrantCollege&gt;1&lt;/is1994LandGrantCollege&gt;
                    &lt;isHistoricallyBlackCollegeOrUniversity&gt;1&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                    &lt;isMinorityInstitution&gt;1&lt;/isMinorityInstitution&gt;
                    &lt;isPrivateUniversityOrCollege&gt;1&lt;/isPrivateUniversityOrCollege&gt;
                    &lt;isSchoolOfForestry&gt;1&lt;/isSchoolOfForestry&gt;
                    &lt;isStateControlledInstitutionofHigherLearning&gt;1&lt;/isStateControlledInstitutionofHigherLearning&gt;
                    &lt;isTribalCollege&gt;1&lt;/isTribalCollege&gt;
                    &lt;isVeterinaryCollege&gt;1&lt;/isVeterinaryCollege&gt;
                    &lt;isAlaskanNativeServicingInstitution&gt;&lt;/isAlaskanNativeServicingInstitution&gt;
                    &lt;isNativeHawaiianServicingInstitution&gt;&lt;/isNativeHawaiianServicingInstitution&gt;
                &lt;/typeOfEducationalEntity&gt;
                &lt;vendorCertifications&gt;
                    &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;1&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                    &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                    &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                    &lt;isSBACertified8AProgramParticipant&gt;1&lt;/isSBACertified8AProgramParticipant&gt;
                    &lt;isSelfCertifiedHUBZoneJointVenture&gt;false&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                    &lt;isSBACertifiedHUBZone&gt;false&lt;/isSBACertifiedHUBZone&gt;
                    &lt;isSBACertified8AJointVenture&gt;1&lt;/isSBACertified8AJointVenture&gt;
                &lt;/vendorCertifications&gt;
                &lt;vendorLocation&gt;
                    &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                    &lt;streetAddress2&gt;String&lt;/streetAddress2&gt;
                    &lt;streetAddress3&gt;String&lt;/streetAddress3&gt;
                    &lt;city&gt;String&lt;/city&gt;
                    &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                    &lt;province&gt;St&lt;/province&gt;
                    &lt;ZIPCode&gt;String&lt;/ZIPCode&gt;
                    &lt;countryCode name=&quot;String&quot;&gt;USA&lt;/countryCode&gt;
                    &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                    &lt;faxNo&gt;String&lt;/faxNo&gt;
                    &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                    &lt;vendorLocationDisabledFlag&gt;false&lt;/vendorLocationDisabledFlag&gt;
                    &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                &lt;/vendorLocation&gt;
                &lt;vendorSiteCode&gt;String&lt;/vendorSiteCode&gt;
                &lt;vendorAlternateSiteCode&gt;String&lt;/vendorAlternateSiteCode&gt;
                &lt;entityIdentifiers&gt;
                    &lt;vendorDUNSInformation&gt;
                        &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                        &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                        &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                        &lt;domesticParentDUNSNumber&gt;String&lt;/domesticParentDUNSNumber&gt;
                        &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                        &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                        &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                    &lt;/vendorDUNSInformation&gt;
                    &lt;vendorUEIInformation&gt;
                        &lt;UEI&gt;String&lt;/UEI&gt;
                        &lt;UEILegalBusinessName&gt;String&lt;/UEILegalBusinessName&gt;
                        &lt;immediateParentUEI&gt;String&lt;/parentUEI&gt;
                        &lt;immediateParentUEIName&gt;String&lt;/parentUEIName&gt;
                        &lt;domesticParentUEI&gt;String&lt;/domesticParentUEI&gt;
                        &lt;domesticParentUEIName&gt;String&lt;/domesticParentUEIName&gt;
                        &lt;ultimateParentUEI&gt;String&lt;/ultimateParentUEI&gt;
                        &lt;ultimateParentUEIName&gt;String&lt;/ultimateParentUEIName&gt;
                    &lt;/vendorUEIInformation&gt;
                    &lt;cageCode&gt;String&lt;/cageCode&gt;
                &lt;/entityIdentifiers&gt;
                &lt;divisionName&gt;String&lt;/divisionName&gt;
                &lt;divisionNumberOrOfficeCode&gt;String&lt;/divisionNumberOrOfficeCode&gt;
                &lt;ccrRegistrationDetails&gt;
                    &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                    &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                &lt;/ccrRegistrationDetails&gt;
            &lt;/vendorSiteDetails&gt;
            &lt;CCRException description=&quot;String&quot;&gt;String&lt;/CCRException&gt;
            &lt;contractingOfficerBusinessSizeDetermination description=&quot;String&quot;&gt;String&lt;/contractingOfficerBusinessSizeDetermination&gt;
        &lt;/vendor&gt;
        &lt;placeOfPerformance&gt;
            &lt;principalPlaceOfPerformance&gt;
                &lt;locationCode&gt;Strin&lt;/locationCode&gt;
                &lt;stateCode name=&quot;String&quot;&gt;String&lt;/stateCode&gt;
                &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
            &lt;/principalPlaceOfPerformance&gt;
            &lt;placeOfPerformanceZIPCode county=&quot;&quot; city=&quot;&quot;&gt;String&lt;/placeOfPerformanceZIPCode&gt;
            &lt;placeOfPerformanceCongressionalDistrict&gt;String&lt;/placeOfPerformanceCongressionalDistrict&gt;
        &lt;/placeOfPerformance&gt;
        &lt;competition&gt;
            &lt;extentCompeted description=&quot;String&quot;&gt;String&lt;/extentCompeted&gt;
            &lt;competitiveProcedures&gt;String&lt;/competitiveProcedures&gt;
            &lt;solicitationProcedures description=&quot;String&quot;&gt;String&lt;/solicitationProcedures&gt;
            &lt;typeOfSetAside description=&quot;String&quot;&gt;String&lt;/typeOfSetAside&gt;
            &lt;evaluatedPreference description=&quot;String&quot;&gt;String&lt;/evaluatedPreference&gt;
            &lt;research description=&quot;String&quot;&gt;String&lt;/research&gt;
            &lt;statutoryExceptionToFairOpportunity description=&quot;String&quot;&gt;String&lt;/statutoryExceptionToFairOpportunity&gt;
            &lt;reasonNotCompeted description=&quot;String&quot;&gt;String&lt;/reasonNotCompeted&gt;
            &lt;numberOfOffersReceived&gt;999&lt;/numberOfOffersReceived&gt;
            &lt;commercialItemAcquisitionProcedures description=&quot;String&quot;&gt;String&lt;/commercialItemAcquisitionProcedures&gt;
            &lt;commercialItemTestProgram description=&quot;String&quot;&gt;String&lt;/commercialItemTestProgram&gt;
            &lt;smallBusinessCompetitivenessDemonstrationProgram&gt;1&lt;/smallBusinessCompetitivenessDemonstrationProgram&gt;
            &lt;A76Action description=&quot;String&quot;&gt;String&lt;/A76Action&gt;
            &lt;fedBizOpps description=&quot;String&quot;&gt;String&lt;/fedBizOpps&gt;
            &lt;localAreaSetAside description=&quot;String&quot;&gt;String&lt;/localAreaSetAside&gt;
            &lt;preAwardSynopsisRequirement&gt;1&lt;/preAwardSynopsisRequirement&gt;
            &lt;priceEvaluationPercentDifference&gt;100&lt;/priceEvaluationPercentDifference&gt;
            &lt;synopsisWaiverException&gt;1&lt;/synopsisWaiverException&gt;
            &lt;alternativeAdvertising&gt;1&lt;/alternativeAdvertising&gt;
            &lt;IDVTypeOfSetAside description=&quot;String&quot;&gt;String&lt;/IDVTypeOfSetAside&gt;
            &lt;typeOfSetAsideSource description=&quot;String&quot;&gt;String&lt;/typeOfSetAsideSource&gt;
            &lt;IDVnumberOfOffersReceived description=&quot;String&quot;&gt;1&lt;/IDVnumberOfOffersReceived&gt;
            &lt;numberOfOffersSource description=&quot;String&quot;&gt;String&lt;/numberOfOffersSource&gt;
        &lt;/competition&gt;
        &lt;preferencePrograms&gt;
            &lt;subcontractPlan description=&quot;String&quot;&gt;String&lt;/subcontractPlan&gt;
            &lt;reasonNotAwardedToSmallDisadvantagedBusiness description=&quot;String&quot;&gt;String&lt;/reasonNotAwardedToSmallDisadvantagedBusiness&gt;
            &lt;reasonNotAwardedToSmallBusiness description=&quot;String&quot;&gt;String&lt;/reasonNotAwardedToSmallBusiness&gt;
        &lt;/preferencePrograms&gt;
        &lt;transactionInformation&gt;
            &lt;createdBy&gt;String&lt;/createdBy&gt;
            &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
            &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
            &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
            &lt;status description=&quot;String&quot;&gt;String&lt;/status&gt;
            &lt;approvedBy&gt;String&lt;/approvedBy&gt;
            &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;closedStatus&gt;String&lt;/closedStatus&gt;
            &lt;closedBy&gt;String&lt;/closedBy&gt;
            &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
            &lt;/transactionInformation&gt;
        &lt;genericTags&gt;
            &lt;genericStrings&gt;
                &lt;genericString01&gt;0000-00-00 00:00:00&lt;/genericString01&gt;
                &lt;genericString02&gt;11A2222222B1&lt;/genericString02&gt;
                &lt;genericString03&gt;String&lt;/genericString03&gt;
                &lt;genericString04&gt;String&lt;/genericString04&gt;
                &lt;genericString05&gt;String&lt;/genericString05&gt;
                &lt;genericString06&gt;LPTA&lt;/genericString06&gt;
                &lt;genericString07&gt;String&lt;/genericString07&gt;
                &lt;genericString08&gt;String&lt;/genericString08&gt;
                &lt;genericString09&gt;String&lt;/genericString09&gt;
                &lt;genericString10&gt;String&lt;/genericString10&gt;
            &lt;/genericStrings&gt;
            &lt;genericBooleans&gt;
                &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
                &lt;genericBoolean03&gt;false&lt;/genericBoolean03&gt;
                &lt;genericBoolean04&gt;false&lt;/genericBoolean04&gt;
                &lt;genericBoolean05&gt;false&lt;/genericBoolean05&gt;
                &lt;genericBoolean06&gt;false&lt;/genericBoolean06&gt;
                &lt;genericBoolean07&gt;false&lt;/genericBoolean07&gt;
                &lt;genericBoolean08&gt;false&lt;/genericBoolean08&gt;
                &lt;genericBoolean09&gt;false&lt;/genericBoolean09&gt;
                &lt;genericBoolean10&gt;false&lt;/genericBoolean10&gt;
            &lt;/genericBooleans&gt;
            &lt;genericFloats&gt;
                &lt;genericFloat01&gt;3.1415&lt;/genericFloat01&gt;
                &lt;genericFloat02&gt;3.1415&lt;/genericFloat02&gt;
            &lt;/genericFloats&gt;
            &lt;genericIntegers&gt;
                &lt;genericInteger01&gt;1&lt;/genericInteger01&gt;
                &lt;genericInteger02&gt;1&lt;/genericInteger02&gt;
            &lt;/genericIntegers&gt;
        &lt;/genericTags&gt;
        &lt;/award&gt;
    </code>
    </pre>
    </details>
    <details>
    <summary>IDV XML</summary>
    <pre>
    <code class="xml">
        &lt;IDV xmlns=&quot;https://www.fpds.gov/FPDS&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; version=&quot;String&quot;&gt;
            &lt;contractID&gt;
                &lt;IDVID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;0&lt;/modNumber&gt;
                &lt;/IDVID&gt;
                &lt;referencedIDVID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;0&lt;/modNumber&gt;
                &lt;/referencedIDVID&gt;
            &lt;/contractID&gt;
            &lt;listOfOtherIDsForThisIDV&gt;
                &lt;IDVID&gt;
                            &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                            &lt;PIID&gt;String&lt;/PIID&gt;
                            &lt;modNumber&gt;0&lt;/modNumber&gt;
                        &lt;/IDVID&gt;
                    &lt;referencedIDVID&gt;
                        &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;0&lt;/modNumber&gt;
                &lt;/referencedIDVID&gt;
            &lt;/listOfOtherIDsForThisIDV&gt;
            &lt;relevantContractDates&gt;
                &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
                &lt;effectiveDate&gt;0000-00-00 00:00:00&lt;/effectiveDate&gt;
                &lt;lastDateToOrder&gt;0000-00-00 00:00:00&lt;/lastDateToOrder&gt;
            &lt;/relevantContractDates&gt;
            &lt;dollarValues&gt;
                &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
                &lt;baseAndAllOptionsValue&gt;3.1415&lt;/baseAndAllOptionsValue&gt;
            &lt;/dollarValues&gt;
                &lt;totalDollarValues&gt;
                &lt;totalObligatedAmount&gt;3.1415&lt;/totalObligatedAmount&gt;
                &lt;totalBaseAndAllOptionsValue&gt;3.1415&lt;/totalBaseAndAllOptionsValue&gt;
            &lt;/totalDollarValues&gt; 
            &lt;purchaserInformation&gt;
                &lt;contractingOfficeAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/contractingOfficeAgencyID&gt;
                &lt;contractingOfficeID Description=&quot;String&quot; regionCode=&quot;String&quot; country=&quot;String&quot;&gt;String&lt;/contractingOfficeID&gt;
                &lt;fundingRequestingAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingRequestingAgencyID&gt;
                &lt;fundingRequestingOfficeID name=&quot;String&quot;&gt;String&lt;/fundingRequestingOfficeID&gt;
                &lt;foreignFunding description=&quot;String&quot;&gt;String&lt;/foreignFunding&gt;
            &lt;/purchaserInformation&gt;
            &lt;contractMarketingData&gt;
                &lt;websiteURL&gt;String&lt;/websiteURL&gt;
                &lt;whoCanUse description=&quot;String&quot;&gt;String&lt;/whoCanUse&gt;
                &lt;emailAddress&gt;String&lt;/emailAddress&gt;
                &lt;individualOrderLimit&gt;3.1415&lt;/individualOrderLimit&gt;
                &lt;typeOfFeeForUseOfService description=&quot;String&quot;&gt;String&lt;/typeOfFeeForUseOfService&gt;
                &lt;fixedFeeValue&gt;100&lt;/fixedFeeValue&gt;
                &lt;orderingProcedure&gt;String&lt;/orderingProcedure&gt;
            &lt;/contractMarketingData&gt;
            &lt;contractData&gt;
                &lt;contractActionType description=&quot;String&quot; part8OrPart13=&quot;String&quot;&gt;String&lt;/contractActionType&gt;
                &lt;typeOfContractPricing description=&quot;String&quot;&gt;String&lt;/typeOfContractPricing&gt;
                &lt;reasonForModification description=&quot;String&quot;&gt;String&lt;/reasonForModification&gt;
                &lt;majorProgramCode&gt;String&lt;/majorProgramCode&gt;
                &lt;nationalInterestActionCode description=&quot;String&quot;&gt;String&lt;/nationalInterestActionCode&gt;
                &lt;costOrPricingData description=&quot;String&quot;&gt;String&lt;/costOrPricingData&gt;
                &lt;solicitationID&gt;String&lt;/solicitationID&gt;
                &lt;costAccountingStandardsClause description=&quot;String&quot;&gt;String&lt;/costAccountingStandardsClause&gt;	
                &lt;descriptionOfContractRequirement&gt;String&lt;/descriptionOfContractRequirement&gt;
                &lt;inherentlyGovernmentalFunction description=&quot;String&quot;&gt;String&lt;/inherentlyGovernmentalFunction&gt; 
                &lt;GFE-GFP description=&quot;String&quot;&gt;String&lt;/GFE-GFP&gt;
                &lt;seaTransportation description=&quot;String&quot;&gt;String&lt;/seaTransportation&gt;
                &lt;undefinitizedAction description=&quot;String&quot;&gt;String&lt;/undefinitizedAction&gt;
                &lt;consolidatedContract description=&quot;String&quot;&gt;String&lt;/consolidatedContract&gt;
                &lt;performanceBasedServiceContract description=&quot;String&quot;&gt;String&lt;/performanceBasedServiceContract&gt;
                &lt;multiYearContract description=&quot;String&quot;&gt;String&lt;/multiYearContract&gt;
                &lt;listOfTreasuryAccounts&gt;
                    &lt;treasuryAccount&gt;
                        &lt;treasuryAccountSymbol&gt;
                            &lt;subLevelPrefixCode&gt;St&lt;/subLevelPrefixCode&gt;
                            &lt;allocationTransferAgencyIdentifier&gt;Str&lt;/allocationTransferAgencyIdentifier&gt;
                            &lt;agencyIdentifier name=&quot;String&quot;&gt;String&lt;/agencyIdentifier&gt;
                            &lt;beginningPeriodOfAvailability&gt;Stri&lt;/beginningPeriodOfAvailability&gt;
                            &lt;endingPeriodOfAvailability&gt;Stri&lt;/endingPeriodOfAvailability&gt;
                            &lt;availabilityTypeCode description=&quot;String&quot;&gt;String&lt;/availabilityTypeCode&gt;
                            &lt;mainAccountCode&gt;Stri&lt;/mainAccountCode&gt;
                            &lt;subAccountCode&gt;Str&lt;/subAccountCode&gt;
                        &lt;/treasuryAccountSymbol&gt;
                        &lt;initiative description=&quot;String&quot;&gt;String&lt;/initiative&gt;
                        &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
                    &lt;/treasuryAccount&gt;
                &lt;/listOfTreasuryAccounts&gt;
                &lt;referencedIDVPart8OrPart13&gt;String&lt;/referencedIDVPart8OrPart13&gt;
                &lt;referencedIDVMultipleOrSingle&gt;String&lt;/referencedIDVMultipleOrSingle&gt;
                &lt;referencedIDVType&gt;String&lt;/referencedIDVType&gt;
                &lt;typeOfIDC description=&quot;String&quot;&gt;String&lt;/typeOfIDC&gt;
                &lt;multipleOrSingleAwardIDC description=&quot;String&quot;&gt;String&lt;/multipleOrSingleAwardIDC&gt;
                &lt;programAcronym&gt;String&lt;/programAcronym&gt;
            &lt;/contractData&gt;
            &lt;legislativeMandates&gt;
                &lt;ClingerCohenAct description=&quot;String&quot;&gt;String&lt;/ClingerCohenAct&gt;
                &lt;materialsSuppliesArticlesEquipment description=&quot;String&quot;&gt;String&lt;/materialsSuppliesArticlesEquipment&gt;
                &lt;laborStandards description=&quot;String&quot;&gt;String&lt;/laborStandards&gt;
                &lt;constructionWageRateRequirements description=&quot;String&quot;&gt;String&lt;/constructionWageRateRequirements&gt;
                &lt;interagencyContractingAuthority description=&quot;String&quot;&gt;String&lt;/interagencyContractingAuthority&gt;
                &lt;otherStatutoryAuthority&gt;String&lt;/otherStatutoryAuthority&gt;
                &lt;listOfAdditionalReportingValues&gt;
                    &lt;additionalReportingValue&gt;S&lt;/additionalReportingValue&gt;
                    &lt;additionalReportingValue&gt;S&lt;/additionalReportingValue&gt;
                &lt;/listOfAdditionalReportingValues&gt;
            &lt;/legislativeMandates&gt;
            &lt;productOrServiceInformation&gt;
                &lt;productOrServiceCode description=&quot;String&quot; productOrServiceType=&quot;String&quot;&gt;String&lt;/productOrServiceCode&gt;
                &lt;contractBundling description=&quot;String&quot;&gt;String&lt;/contractBundling&gt;
                &lt;claimantProgramCode description=&quot;String&quot;&gt;String&lt;/claimantProgramCode&gt;
                &lt;principalNAICSCode description=&quot;String&quot;&gt;String&lt;/principalNAICSCode&gt;
                &lt;recoveredMaterialClauses description=&quot;String&quot;&gt;String&lt;/recoveredMaterialClauses&gt;
                &lt;manufacturingOrganizationType description=&quot;String&quot;&gt;String&lt;/manufacturingOrganizationType&gt;
                &lt;IDVNAICS description=&quot;String&quot;&gt;String&lt;/IDVNAICS&gt;
                &lt;NAICSSource description=&quot;String&quot;&gt;String&lt;/NAICSSource&gt;
            &lt;/productOrServiceInformation&gt;
            &lt;vendor&gt;
                &lt;vendorHeader&gt;
                    &lt;vendorName&gt;String&lt;/vendorName&gt;
                    &lt;vendorAlternateName&gt;String&lt;/vendorAlternateName&gt;
                    &lt;vendorLegalOrganizationName&gt;String&lt;/vendorLegalOrganizationName&gt;
                    &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                    &lt;vendorEnabled&gt;false&lt;/vendorEnabled&gt;
                &lt;/vendorHeader&gt;
                &lt;vendorSiteDetails&gt;
                    &lt;vendorSocioEconomicIndicators&gt;
                        &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;1&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                        &lt;isAmericanIndianOwned&gt;1&lt;/isAmericanIndianOwned&gt;
                        &lt;isIndianTribe&gt;1&lt;/isIndianTribe&gt;
                        &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;1&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                        &lt;isTriballyOwnedFirm&gt;1&lt;/isTriballyOwnedFirm&gt;
                        &lt;isVeteranOwned&gt;1&lt;/isVeteranOwned&gt;
                        &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;1&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                        &lt;isWomenOwned&gt;1&lt;/isWomenOwned&gt;
                        &lt;isWomenOwnedSmallBusiness&gt;1&lt;/isWomenOwnedSmallBusiness&gt;
                        &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;				
                        &lt;minorityOwned&gt;
                            &lt;isMinorityOwned&gt;1&lt;/isMinorityOwned&gt;
                            &lt;isSubContinentAsianAmericanOwnedBusiness&gt;1&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                            &lt;isAsianPacificAmericanOwnedBusiness&gt;1&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                            &lt;isBlackAmericanOwnedBusiness&gt;1&lt;/isBlackAmericanOwnedBusiness&gt;
                            &lt;isHispanicAmericanOwnedBusiness&gt;1&lt;/isHispanicAmericanOwnedBusiness&gt;
                            &lt;isNativeAmericanOwnedBusiness&gt;1&lt;/isNativeAmericanOwnedBusiness&gt;
                            &lt;isOtherMinorityOwned&gt;1&lt;/isOtherMinorityOwned&gt;
                        &lt;/minorityOwned&gt;
                        &lt;isVerySmallBusiness&gt;false&lt;/isVerySmallBusiness&gt;
                    &lt;/vendorSocioEconomicIndicators&gt;
                    &lt;vendorBusinessTypes&gt;
                        &lt;isCommunityDevelopedCorporationOwnedFirm&gt;1&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                        &lt;isLaborSurplusAreaFirm&gt;1&lt;/isLaborSurplusAreaFirm&gt;
                        &lt;federalGovernment&gt;
                            &lt;isFederalGovernment&gt;1&lt;/isFederalGovernment&gt;
                            &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;1&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                            &lt;isFederalGovernmentAgency&gt;1&lt;/isFederalGovernmentAgency&gt;
                        &lt;/federalGovernment&gt;
                        &lt;isStateGovernment&gt;false&lt;/isStateGovernment&gt;
                        &lt;localGovernment&gt;
                            &lt;isLocalGovernment&gt;1&lt;/isLocalGovernment&gt;
                            &lt;isCityLocalGovernment&gt;1&lt;/isCityLocalGovernment&gt;
                            &lt;isCountyLocalGovernment&gt;1&lt;/isCountyLocalGovernment&gt;
                            &lt;isInterMunicipalLocalGovernment&gt;1&lt;/isInterMunicipalLocalGovernment&gt;
                            &lt;isLocalGovernmentOwned&gt;1&lt;/isLocalGovernmentOwned&gt;
                            &lt;isMunicipalityLocalGovernment&gt;1&lt;/isMunicipalityLocalGovernment&gt;
                            &lt;isSchoolDistrictLocalGovernment&gt;1&lt;/isSchoolDistrictLocalGovernment&gt;
                            &lt;isTownshipLocalGovernment&gt;1&lt;/isTownshipLocalGovernment&gt;
                        &lt;/localGovernment&gt;
                        &lt;isTribalGovernment&gt;1&lt;/isTribalGovernment&gt;
                        &lt;isForeignGovernment&gt;false&lt;/isForeignGovernment&gt;
                        &lt;businessOrOrganizationType&gt;
                                            &lt;isCorporateEntityNotTaxExempt&gt;1&lt;/isCorporateEntityNotTaxExempt&gt;
                                            &lt;isCorporateEntityTaxExempt&gt;1&lt;/isCorporateEntityTaxExempt&gt;
                                            &lt;isPartnershipOrLimitedLiabilityPartnership&gt;1&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                                            &lt;isSolePropreitorship&gt;1&lt;/isSolePropreitorship&gt;
                                            &lt;isSmallAgriculturalCooperative&gt;1&lt;/isSmallAgriculturalCooperative&gt;
                                            &lt;isInternationalOrganization&gt;1&lt;/isInternationalOrganization&gt;
                                            &lt;isUSGovernmentEntity&gt;&lt;/isUSGovernmentEntity&gt;
                                    &lt;/businessOrOrganizationType&gt;
                    &lt;/vendorBusinessTypes&gt;
                    &lt;vendorLineOfBusiness&gt;
                                    &lt;isCommunityDevelopmentCorporation&gt;1&lt;/isCommunityDevelopmentCorporation&gt;
                                    &lt;isDomesticShelter&gt;1&lt;/isDomesticShelter&gt;
                                    &lt;isEducationalInstitution&gt;1&lt;/isEducationalInstitution&gt;
                                    &lt;isFoundation&gt;1&lt;/isFoundation&gt;
                                    &lt;isHospital&gt;1&lt;/isHospital&gt;
                                    &lt;isManufacturerOfGoods&gt;1&lt;/isManufacturerOfGoods&gt;
                                    &lt;isVeterinaryHospital&gt;1&lt;/isVeterinaryHospital&gt;
                                    &lt;isHispanicServicingInstitution&gt;1&lt;/isHispanicServicingInstitution&gt;
                            &lt;/vendorLineOfBusiness&gt;
                    &lt;vendorRelationshipWithFederalGovernment&gt;
                        &lt;receivesContracts&gt;1&lt;/receivesContracts&gt;
                        &lt;receivesGrants&gt;1&lt;/receivesGrants&gt;
                        &lt;receivesContractsAndGrants&gt;1&lt;/receivesContractsAndGrants&gt;
                    &lt;/vendorRelationshipWithFederalGovernment&gt;
                    &lt;typeOfGovernmentEntity&gt;
                        &lt;isAirportAuthority&gt;1&lt;/isAirportAuthority&gt;
                        &lt;isCouncilOfGovernments&gt;1&lt;/isCouncilOfGovernments&gt;
                        &lt;isHousingAuthoritiesPublicOrTribal&gt;1&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                        &lt;isInterstateEntity&gt;1&lt;/isInterstateEntity&gt;
                        &lt;isPlanningCommission&gt;1&lt;/isPlanningCommission&gt;
                        &lt;isPortAuthority&gt;1&lt;/isPortAuthority&gt;
                        &lt;isTransitAuthority&gt;1&lt;/isTransitAuthority&gt;
                    &lt;/typeOfGovernmentEntity&gt;
                    &lt;vendorOrganizationFactors&gt;
                        &lt;isSubchapterSCorporation&gt;1&lt;/isSubchapterSCorporation&gt;
                        &lt;isLimitedLiabilityCorporation&gt;1&lt;/isLimitedLiabilityCorporation&gt;
                        &lt;isForeignOwnedAndLocated&gt;1&lt;/isForeignOwnedAndLocated&gt;
                        &lt;profitStructure&gt;
                            &lt;isForProfitOrganization&gt;false&lt;/isForProfitOrganization&gt;
                            &lt;isNonprofitOrganization&gt;false&lt;/isNonprofitOrganization&gt;
                            &lt;isOtherNotForProfitOrganization&gt;false&lt;/isOtherNotForProfitOrganization&gt;
                        &lt;/profitStructure&gt;
                        &lt;isShelteredWorkshop&gt;1&lt;/isShelteredWorkshop&gt;
                        &lt;stateOfIncorporation name=&quot;String&quot;&gt;String&lt;/stateOfIncorporation&gt;
                        &lt;countryOfIncorporation name=&quot;String&quot;&gt;String&lt;/countryOfIncorporation&gt;
                        &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                    &lt;/vendorOrganizationFactors&gt;
                    &lt;typeOfEducationalEntity&gt;
                        &lt;is1862LandGrantCollege&gt;1&lt;/is1862LandGrantCollege&gt;
                        &lt;is1890LandGrantCollege&gt;1&lt;/is1890LandGrantCollege&gt;
                        &lt;is1994LandGrantCollege&gt;1&lt;/is1994LandGrantCollege&gt;
                        &lt;isHistoricallyBlackCollegeOrUniversity&gt;1&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                        &lt;isMinorityInstitution&gt;1&lt;/isMinorityInstitution&gt;
                        &lt;isPrivateUniversityOrCollege&gt;1&lt;/isPrivateUniversityOrCollege&gt;
                        &lt;isSchoolOfForestry&gt;1&lt;/isSchoolOfForestry&gt;
                        &lt;isStateControlledInstitutionofHigherLearning&gt;1&lt;/isStateControlledInstitutionofHigherLearning&gt;
                        &lt;isTribalCollege&gt;1&lt;/isTribalCollege&gt;
                        &lt;isVeterinaryCollege&gt;1&lt;/isVeterinaryCollege&gt;
                        &lt;isAlaskanNativeServicingInstitution&gt;&lt;/isAlaskanNativeServicingInstitution&gt;
                        &lt;isNativeHawaiianServicingInstitution&gt;&lt;/isNativeHawaiianServicingInstitution&gt;
                    &lt;/typeOfEducationalEntity&gt;
                    &lt;vendorCertifications&gt;
                        &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;1&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                        &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertified8AProgramParticipant&gt;1&lt;/isSBACertified8AProgramParticipant&gt;
                        &lt;isSelfCertifiedHUBZoneJointVenture&gt;false&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                        &lt;isSBACertifiedHUBZone&gt;false&lt;/isSBACertifiedHUBZone&gt;
                        &lt;isSBACertified8AJointVenture&gt;1&lt;/isSBACertified8AJointVenture&gt;
                    &lt;/vendorCertifications&gt;
                    &lt;vendorLocation&gt;
                        &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                        &lt;streetAddress2&gt;String&lt;/streetAddress2&gt;
                        &lt;streetAddress3&gt;String&lt;/streetAddress3&gt;
                        &lt;city&gt;String&lt;/city&gt;
                        &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                        &lt;province&gt;St&lt;/province&gt;
                        &lt;ZIPCode&gt;String&lt;/ZIPCode&gt;
                        &lt;countryCode name=&quot;String&quot;&gt;USA&lt;/countryCode&gt;
                        &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                        &lt;faxNo&gt;String&lt;/faxNo&gt;
                        &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                        &lt;vendorLocationDisabledFlag&gt;false&lt;/vendorLocationDisabledFlag&gt;
                        &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                    &lt;/vendorLocation&gt;
                    &lt;vendorSiteCode&gt;String&lt;/vendorSiteCode&gt;
                    &lt;vendorAlternateSiteCode&gt;String&lt;/vendorAlternateSiteCode&gt;
                    &lt;entityIdentifiers&gt;
                        &lt;vendorDUNSInformation&gt;
                            &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                            &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                            &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                            &lt;domesticParentDUNSNumber&gt;String&lt;/domesticParentDUNSNumber&gt;
                            &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                            &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                            &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                        &lt;/vendorDUNSInformation&gt;
                        &lt;vendorUEIInformation&gt;
                            &lt;UEI&gt;String&lt;/UEI&gt;
                            &lt;UEILegalBusinessName&gt;String&lt;/UEILegalBusinessName&gt;
                            &lt;immediateParentUEI&gt;String&lt;/parentUEI&gt;
                            &lt;immediateParentUEIName&gt;String&lt;/parentUEIName&gt;
                            &lt;domesticParentUEI&gt;String&lt;/domesticParentUEI&gt;
                            &lt;domesticParentUEIName&gt;String&lt;/domesticParentUEIName&gt;
                            &lt;ultimateParentUEI&gt;String&lt;/ultimateParentUEI&gt;
                            &lt;ultimateParentUEIName&gt;String&lt;/ultimateParentUEIName&gt;
                        &lt;/vendorUEIInformation&gt;
                        &lt;cageCode&gt;String&lt;/cageCode&gt;
                    &lt;/entityIdentifiers&gt;
                    &lt;divisionName&gt;String&lt;/divisionName&gt;
                    &lt;divisionNumberOrOfficeCode&gt;String&lt;/divisionNumberOrOfficeCode&gt;
                    &lt;ccrRegistrationDetails&gt;
                        &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                        &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                    &lt;/ccrRegistrationDetails&gt;
                &lt;/vendorSiteDetails&gt;
                &lt;CCRException description=&quot;String&quot;&gt;String&lt;/CCRException&gt;
                &lt;contractingOfficerBusinessSizeDetermination description=&quot;String&quot;&gt;String&lt;/contractingOfficerBusinessSizeDetermination&gt;
                &lt;IDVcontractingOfficerBusinessSize description=&quot;String&quot;&gt;String&lt;/IDVcontractingOfficerBusinessSize&gt;
                &lt;IDVcontractingOfficerBusinessSizeSource description=&quot;String&quot;&gt;String&lt;/IDVcontractingOfficerBusinessSizeSource&gt;
            &lt;/vendor&gt;
            &lt;competition&gt;
                &lt;extentCompeted description=&quot;String&quot;&gt;String&lt;/extentCompeted&gt;
                &lt;competitiveProcedures&gt;Str&lt;/competitiveProcedures&gt;
                &lt;solicitationProcedures description=&quot;String&quot;&gt;String&lt;/solicitationProcedures&gt;
                &lt;typeOfSetAside description=&quot;String&quot;&gt;String&lt;/typeOfSetAside&gt;
                &lt;evaluatedPreference description=&quot;String&quot;&gt;String&lt;/evaluatedPreference&gt;
                &lt;research description=&quot;String&quot;&gt;String&lt;/research&gt;
                &lt;statutoryExceptionToFairOpportunity description=&quot;String&quot;&gt;String&lt;/statutoryExceptionToFairOpportunity&gt;
                &lt;reasonNotCompeted description=&quot;String&quot;&gt;String&lt;/reasonNotCompeted&gt;
                &lt;numberOfOffersReceived&gt;999&lt;/numberOfOffersReceived&gt;
                &lt;commercialItemAcquisitionProcedures description=&quot;String&quot;&gt;String&lt;/commercialItemAcquisitionProcedures&gt;
                &lt;commercialItemTestProgram description=&quot;String&quot;&gt;String&lt;/commercialItemTestProgram&gt;
                &lt;smallBusinessCompetitivenessDemonstrationProgram&gt;1&lt;/smallBusinessCompetitivenessDemonstrationProgram&gt;
                &lt;A76Action description=&quot;String&quot;&gt;String&lt;/A76Action&gt;
                &lt;fedBizOpps description=&quot;String&quot;&gt;String&lt;/fedBizOpps&gt;
                &lt;localAreaSetAside description=&quot;String&quot;&gt;String&lt;/localAreaSetAside&gt;
                &lt;IDVTypeOfSetAside description=&quot;String&quot;&gt;String&lt;/IDVTypeOfSetAside&gt;
                &lt;typeOfSetAsideSource description=&quot;String&quot;&gt;String&lt;/typeOfSetAsideSource&gt;
                &lt;IDVnumberOfOffersReceived description=&quot;String&quot;&gt;1&lt;/IDVnumberOfOffersReceived&gt;
                &lt;numberOfOffersSource description=&quot;String&quot;&gt;String&lt;/numberOfOffersSource&gt;
            &lt;/competition&gt;
            &lt;preferencePrograms&gt;
                &lt;subcontractPlan description=&quot;String&quot;&gt;String&lt;/subcontractPlan&gt;
            &lt;/preferencePrograms&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;status description=&quot;String&quot;&gt;String&lt;/status&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
                &lt;closedStatus&gt;String&lt;/closedStatus&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
            &lt;/transactionInformation&gt;
            &lt;genericTags&gt;
                &lt;genericStrings&gt;
                    &lt;genericString01&gt;0000-00-00 00:00:00&lt;/genericString01&gt;
                    &lt;genericString02&gt;11A2222222B1&lt;/genericString02&gt;
                    &lt;genericString03&gt;String&lt;/genericString03&gt;
                    &lt;genericString04&gt;String&lt;/genericString04&gt;
                    &lt;genericString05&gt;String&lt;/genericString05&gt;
                    &lt;genericString06&gt;LPTA&lt;/genericString06&gt;
                    &lt;genericString07&gt;String&lt;/genericString07&gt;
                    &lt;genericString08&gt;String&lt;/genericString08&gt;
                    &lt;genericString09&gt;String&lt;/genericString09&gt;
                    &lt;genericString10&gt;String&lt;/genericString10&gt;
                &lt;/genericStrings&gt;
                &lt;genericBooleans&gt;
                    &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                    &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
                    &lt;genericBoolean03&gt;false&lt;/genericBoolean03&gt;
                    &lt;genericBoolean04&gt;false&lt;/genericBoolean04&gt;
                    &lt;genericBoolean05&gt;false&lt;/genericBoolean05&gt;
                    &lt;genericBoolean06&gt;false&lt;/genericBoolean06&gt;
                    &lt;genericBoolean07&gt;false&lt;/genericBoolean07&gt;
                    &lt;genericBoolean08&gt;false&lt;/genericBoolean08&gt;
                    &lt;genericBoolean09&gt;false&lt;/genericBoolean09&gt;
                    &lt;genericBoolean10&gt;false&lt;/genericBoolean10&gt;
                &lt;/genericBooleans&gt;
                &lt;genericFloats&gt;
                    &lt;genericFloat01&gt;3.1415&lt;/genericFloat01&gt;
                    &lt;genericFloat02&gt;3.1415&lt;/genericFloat02&gt;
                &lt;/genericFloats&gt;
                &lt;genericIntegers&gt;
                    &lt;genericInteger01&gt;1&lt;/genericInteger01&gt;
                    &lt;genericInteger02&gt;1&lt;/genericInteger02&gt;
                &lt;/genericIntegers&gt;
            &lt;/genericTags&gt;
            &lt;/IDV&gt;    
    </code>
    </pre>
    </details>
    <details>
    <summary>OTHER TRANSACTION AWARD XML</summary>
    <pre>
    <code class="xml">
        &lt;OtherTransactionAward xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;OtherTransactionAwardID&gt;
                &lt;OtherTransactionAwardContractID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                &lt;/OtherTransactionAwardContractID&gt;
                &lt;referencedIDVID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                &lt;/referencedIDVID&gt;
            &lt;/OtherTransactionAwardID&gt;
            &lt;contractDetail&gt;
                &lt;relevantContractDates&gt;
                    &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
                    &lt;effectiveDate&gt;0000-00-00 00:00:00&lt;/effectiveDate&gt;
                    &lt;currentCompletionDate&gt;0000-00-00 00:00:00&lt;/currentCompletionDate&gt;
                    &lt;ultimateCompletionDate&gt;0000-00-00 00:00:00&lt;/ultimateCompletionDate&gt;
                    &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
                &lt;/relevantContractDates&gt;
                &lt;dollarValues&gt;
                    &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
                    &lt;baseAndExercisedOptionsValue&gt;3.1415&lt;/baseAndExercisedOptionsValue&gt;
                    &lt;baseAndAllOptionsValue&gt;3.1415&lt;/baseAndAllOptionsValue&gt;
                    &lt;nonGovernmentalDollars&gt;3.1415&lt;/nonGovernmentalDollars&gt;
                &lt;/dollarValues&gt;
                &lt;totalDollarValues&gt;
                    &lt;totalObligatedAmount&gt;3.1415&lt;/totalObligatedAmount&gt;
                    &lt;totalBaseAndExercisedOptionsValue&gt;3.1415&lt;/totalBaseAndExercisedOptionsValue&gt;
                    &lt;totalBaseAndAllOptionsValue&gt;3.1415&lt;/totalBaseAndAllOptionsValue&gt;
                    &lt;totalNonGovernmentalDollars&gt;3.1415&lt;/totalNonGovernmentalDollars&gt;
                &lt;/totalDollarValues&gt;
                &lt;purchaserInformation&gt;
                    &lt;contractingOfficeAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/contractingOfficeAgencyID&gt;
                &lt;contractingOfficeID Description=&quot;String&quot; regionCode=&quot;String&quot; country=&quot;String&quot;&gt;String&lt;/contractingOfficeID&gt;
                &lt;fundingRequestingAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingRequestingAgencyID&gt;
                &lt;fundingRequestingOfficeID name=&quot;String&quot;&gt;String&lt;/fundingRequestingOfficeID&gt;
                &lt;/purchaserInformation&gt;
                &lt;contractData&gt;
                    &lt;contractActionType description=&quot;String&quot; part8OrPart13=&quot;String&quot;&gt;String&lt;/contractActionType&gt;
                    &lt;typeOfAgreement&gt;String&lt;/typeOfAgreement&gt;
                    &lt;reasonForModification description=&quot;String&quot;&gt;String&lt;/reasonForModification&gt;
                    &lt;descriptionOfContractRequirement&gt;String&lt;/descriptionOfContractRequirement&gt;
                    &lt;listOfTreasuryAccounts&gt;
                        &lt;treasuryAccount&gt;
                            &lt;treasuryAccountSymbol&gt;
                                &lt;agencyIdentifier&gt;String&lt;/agencyIdentifier&gt;
                                &lt;mainAccountCode&gt;Stri&lt;/mainAccountCode&gt;
                                &lt;subAccountCode&gt;Str&lt;/subAccountCode&gt;
                            &lt;/treasuryAccountSymbol&gt;
                            &lt;initiative description=&quot;String&quot;&gt;String&lt;/initiative&gt;
                        &lt;/treasuryAccount&gt;
                    &lt;/listOfTreasuryAccounts&gt;
                    &lt;nonTraditionalGovernmentContractorParticipation description=&quot;String&quot;&gt;String&lt;/nonTraditionalGovernmentContractorParticipation&gt;
                &lt;/contractData&gt;
                &lt;PSCCode description=&quot;String&quot; productOrServiceType=&quot;String&quot;&gt;String&lt;/PSCCode&gt;
                &lt;vendor&gt;
                    &lt;vendorHeader&gt;
                        &lt;vendorName&gt;String&lt;/vendorName&gt;
                        &lt;vendorAlternateName&gt;String&lt;/vendorAlternateName&gt;
                        &lt;vendorLegalOrganizationName&gt;String&lt;/vendorLegalOrganizationName&gt;
                        &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                    &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                        &lt;vendorSocioEconomicIndicators&gt;
                            &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;1&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                            &lt;isAmericanIndianOwned&gt;1&lt;/isAmericanIndianOwned&gt;
                            &lt;isIndianTribe&gt;1&lt;/isIndianTribe&gt;
                            &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;1&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                            &lt;isTriballyOwnedFirm&gt;1&lt;/isTriballyOwnedFirm&gt;
                            &lt;isVeteranOwned&gt;1&lt;/isVeteranOwned&gt;
                        &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;1&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                            &lt;isWomenOwned&gt;1&lt;/isWomenOwned&gt;
                            &lt;isWomenOwnedSmallBusiness&gt;1&lt;/isWomenOwnedSmallBusiness&gt;
                            &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                            &lt;isJointVentureWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                            &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;					
                            &lt;minorityOwned&gt;
                                &lt;isMinorityOwned&gt;1&lt;/isMinorityOwned&gt;
                                &lt;isSubContinentAsianAmericanOwnedBusiness&gt;1&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                                &lt;isAsianPacificAmericanOwnedBusiness&gt;1&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                                &lt;isBlackAmericanOwnedBusiness&gt;1&lt;/isBlackAmericanOwnedBusiness&gt;
                                &lt;isHispanicAmericanOwnedBusiness&gt;1&lt;/isHispanicAmericanOwnedBusiness&gt;
                                &lt;isNativeAmericanOwnedBusiness&gt;1&lt;/isNativeAmericanOwnedBusiness&gt;
                                &lt;isOtherMinorityOwned&gt;1&lt;/isOtherMinorityOwned&gt;
                            &lt;/minorityOwned&gt;
                            &lt;isVerySmallBusiness&gt;1&lt;/isVerySmallBusiness&gt;
                        &lt;/vendorSocioEconomicIndicators&gt;
                        &lt;vendorBusinessTypes&gt;
                            &lt;isCommunityDevelopedCorporationOwnedFirm&gt;1&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                            &lt;isLaborSurplusAreaFirm&gt;1&lt;/isLaborSurplusAreaFirm&gt;
                            &lt;federalGovernment&gt;
                                &lt;isFederalGovernment&gt;1&lt;/isFederalGovernment&gt;
                                &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;1&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                                &lt;isFederalGovernmentAgency&gt;1&lt;/isFederalGovernmentAgency&gt;
                            &lt;/federalGovernment&gt;
                            &lt;isStateGovernment&gt;1&lt;/isStateGovernment&gt;
                            &lt;localGovernment&gt;
                                &lt;isLocalGovernment&gt;1&lt;/isLocalGovernment&gt;
                                &lt;isCityLocalGovernment&gt;1&lt;/isCityLocalGovernment&gt;
                                &lt;isCountyLocalGovernment&gt;1&lt;/isCountyLocalGovernment&gt;
                                &lt;isInterMunicipalLocalGovernment&gt;1&lt;/isInterMunicipalLocalGovernment&gt;
                                &lt;isLocalGovernmentOwned&gt;1&lt;/isLocalGovernmentOwned&gt;
                                &lt;isMunicipalityLocalGovernment&gt;1&lt;/isMunicipalityLocalGovernment&gt;
                                &lt;isSchoolDistrictLocalGovernment&gt;1&lt;/isSchoolDistrictLocalGovernment&gt;
                                &lt;isTownshipLocalGovernment&gt;1&lt;/isTownshipLocalGovernment&gt;
                            &lt;/localGovernment&gt;
                            &lt;isTribalGovernment&gt;1&lt;/isTribalGovernment&gt;
                            &lt;isForeignGovernment&gt;1&lt;/isForeignGovernment&gt;
                            &lt;businessOrOrganizationType&gt;
                                &lt;isCorporateEntityNotTaxExempt&gt;1&lt;/isCorporateEntityNotTaxExempt&gt;
                                &lt;isCorporateEntityTaxExempt&gt;1&lt;/isCorporateEntityTaxExempt&gt;
                                &lt;isPartnershipOrLimitedLiabilityPartnership&gt;1&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                                &lt;isSolePropreitorship&gt;1&lt;/isSolePropreitorship&gt;
                                &lt;isSmallAgriculturalCooperative&gt;1&lt;/isSmallAgriculturalCooperative&gt;
                                &lt;isInternationalOrganization&gt;1&lt;/isInternationalOrganization&gt;
                                &lt;isUSGovernmentEntity&gt;&lt;/isUSGovernmentEntity&gt;
                            &lt;/businessOrOrganizationType&gt;
                        &lt;/vendorBusinessTypes&gt;
                        &lt;vendorLineOfBusiness&gt;
                            &lt;isCommunityDevelopmentCorporation&gt;1&lt;/isCommunityDevelopmentCorporation&gt;
                            &lt;isDomesticShelter&gt;1&lt;/isDomesticShelter&gt;
                            &lt;isEducationalInstitution&gt;1&lt;/isEducationalInstitution&gt;
                            &lt;isFoundation&gt;1&lt;/isFoundation&gt;
                            &lt;isHospital&gt;1&lt;/isHospital&gt;
                            &lt;isManufacturerOfGoods&gt;1&lt;/isManufacturerOfGoods&gt;
                            &lt;isVeterinaryHospital&gt;1&lt;/isVeterinaryHospital&gt;
                            &lt;isHispanicServicingInstitution&gt;1&lt;/isHispanicServicingInstitution&gt;
                        &lt;/vendorLineOfBusiness&gt;
                        &lt;vendorRelationshipWithFederalGovernment&gt;
                            &lt;receivesContracts&gt;1&lt;/receivesContracts&gt;
                            &lt;receivesGrants&gt;1&lt;/receivesGrants&gt;
                            &lt;receivesContractsAndGrants&gt;1&lt;/receivesContractsAndGrants&gt;
                        &lt;/vendorRelationshipWithFederalGovernment&gt;
                        &lt;typeOfGovernmentEntity&gt;
                            &lt;isAirportAuthority&gt;1&lt;/isAirportAuthority&gt;
                            &lt;isCouncilOfGovernments&gt;1&lt;/isCouncilOfGovernments&gt;
                            &lt;isHousingAuthoritiesPublicOrTribal&gt;1&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                            &lt;isInterstateEntity&gt;1&lt;/isInterstateEntity&gt;
                            &lt;isPlanningCommission&gt;1&lt;/isPlanningCommission&gt;
                            &lt;isPortAuthority&gt;1&lt;/isPortAuthority&gt;
                            &lt;isTransitAuthority&gt;1&lt;/isTransitAuthority&gt;
                        &lt;/typeOfGovernmentEntity&gt;
                        &lt;vendorOrganizationFactors&gt;
                            &lt;isSubchapterSCorporation&gt;1&lt;/isSubchapterSCorporation&gt;
                            &lt;isLimitedLiabilityCorporation&gt;1&lt;/isLimitedLiabilityCorporation&gt;
                            &lt;isForeignOwnedAndLocated&gt;1&lt;/isForeignOwnedAndLocated&gt;
                            &lt;profitStructure&gt;
                                &lt;isForProfitOrganization&gt;1&lt;/isForProfitOrganization&gt;
                                &lt;isNonprofitOrganization&gt;1&lt;/isNonprofitOrganization&gt;
                                &lt;isOtherNotForProfitOrganization&gt;1&lt;/isOtherNotForProfitOrganization&gt;
                            &lt;/profitStructure&gt;
                            &lt;isShelteredWorkshop&gt;1&lt;/isShelteredWorkshop&gt;
                            &lt;stateOfIncorporation&gt;String&lt;/stateOfIncorporation&gt;
                            &lt;countryOfIncorporation&gt;String&lt;/countryOfIncorporation&gt;
                            &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                            
                        &lt;/vendorOrganizationFactors&gt;
                        &lt;typeOfEducationalEntity&gt;
                            &lt;is1862LandGrantCollege&gt;1&lt;/is1862LandGrantCollege&gt;
                            &lt;is1890LandGrantCollege&gt;1&lt;/is1890LandGrantCollege&gt;
                            &lt;is1994LandGrantCollege&gt;1&lt;/is1994LandGrantCollege&gt;
                            &lt;isHistoricallyBlackCollegeOrUniversity&gt;1&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                            &lt;isMinorityInstitution&gt;1&lt;/isMinorityInstitution&gt;
                            &lt;isPrivateUniversityOrCollege&gt;1&lt;/isPrivateUniversityOrCollege&gt;
                            &lt;isSchoolOfForestry&gt;1&lt;/isSchoolOfForestry&gt;
                            &lt;isStateControlledInstitutionofHigherLearning&gt;1&lt;/isStateControlledInstitutionofHigherLearning&gt;
                            &lt;isTribalCollege&gt;1&lt;/isTribalCollege&gt;
                            &lt;isVeterinaryCollege&gt;1&lt;/isVeterinaryCollege&gt;
                            &lt;isAlaskanNativeServicingInstitution&gt;&lt;/isAlaskanNativeServicingInstitution&gt;
                            &lt;isNativeHawaiianServicingInstitution&gt;&lt;/isNativeHawaiianServicingInstitution&gt;
                        &lt;/typeOfEducationalEntity&gt;
                        &lt;vendorCertifications&gt;
                            &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;1&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                            &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                            &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                            &lt;isSBACertified8AProgramParticipant&gt;1&lt;/isSBACertified8AProgramParticipant&gt;
                            &lt;isSelfCertifiedHUBZoneJointVenture&gt;1&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                            &lt;isSBACertifiedHUBZone&gt;1&lt;/isSBACertifiedHUBZone&gt;
                            &lt;isSBACertified8AJointVenture&gt;1&lt;/isSBACertified8AJointVenture&gt;
                        &lt;/vendorCertifications&gt;
                        &lt;vendorLocation&gt;
                            &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                            &lt;streetAddress2&gt;String&lt;/streetAddress2&gt;
                            &lt;streetAddress3&gt;String&lt;/streetAddress3&gt;
                            &lt;city&gt;String&lt;/city&gt;
                            &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                            &lt;ZIPCode&gt;String&lt;/ZIPCode&gt;
                            &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                            &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                            &lt;faxNo&gt;String&lt;/faxNo&gt;
                            &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                            &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                        &lt;/vendorLocation&gt;
                        &lt;vendorSiteCode&gt;String&lt;/vendorSiteCode&gt;
                        &lt;vendorAlternateSiteCode&gt;String&lt;/vendorAlternateSiteCode&gt;
                        &lt;entityIdentifiers&gt;
                            &lt;vendorDUNSInformation&gt;
                                &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                                &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                                &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                                &lt;domesticParentDUNSNumber&gt;String&lt;/domesticParentDUNSNumber&gt;
                                &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                                &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                                &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                            &lt;/vendorDUNSInformation&gt;
                            &lt;vendorUEIInformation&gt;
                                &lt;UEI&gt;String&lt;/UEI&gt;
                                &lt;UEILegalBusinessName&gt;String&lt;/UEILegalBusinessName&gt;
                                &lt;immediateParentUEI&gt;String&lt;/parentUEI&gt;
                                &lt;immediateParentUEIName&gt;String&lt;/parentUEIName&gt;
                                &lt;domesticParentUEI&gt;String&lt;/domesticParentUEI&gt;
                                &lt;domesticParentUEIName&gt;String&lt;/domesticParentUEIName&gt;
                                &lt;ultimateParentUEI&gt;String&lt;/ultimateParentUEI&gt;
                                &lt;ultimateParentUEIName&gt;String&lt;/ultimateParentUEIName&gt;
                            &lt;/vendorUEIInformation&gt;
                            &lt;cageCode&gt;String&lt;/cageCode&gt;
                        &lt;/entityIdentifiers&gt;
                        &lt;divisionName&gt;String&lt;/divisionName&gt;
                        &lt;divisionNumberOrOfficeCode&gt;String&lt;/divisionNumberOrOfficeCode&gt;
                        &lt;ccrRegistrationDetails&gt;
                            &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                            &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                        &lt;/ccrRegistrationDetails&gt;
                    &lt;/vendorSiteDetails&gt;
                    &lt;CCRException description=&quot;String&quot;&gt;String&lt;/CCRException&gt;
                    &lt;contractingOfficerBusinessSizeDetermination description=&quot;String&quot;&gt;String&lt;/contractingOfficerBusinessSizeDetermination&gt;
                &lt;/vendor&gt;
                &lt;placeOfPerformance&gt;
                    &lt;principalPlaceOfPerformance&gt;
                        &lt;locationCode name=&quot;&quot;&gt;Strin&lt;/locationCode&gt;
                        &lt;stateCode name=&quot;&quot;&gt;String&lt;/stateCode&gt;
                        &lt;countryCode name=&quot;&quot;&gt;String&lt;/countryCode&gt;
                    &lt;/principalPlaceOfPerformance&gt;
                    &lt;placeOfPerformanceZIPCode&gt;String&lt;/placeOfPerformanceZIPCode&gt;
                    &lt;placeOfPerformanceCongressionalDistrict&gt;String&lt;/placeOfPerformanceCongressionalDistrict&gt;
                &lt;/placeOfPerformance&gt;
                &lt;competition&gt;
                    &lt;extentCompeted description=&quot;String&quot;&gt;String&lt;/extentCompeted&gt;
                    &lt;solicitationProcedures description=&quot;String&quot;&gt;String&lt;/solicitationProcedures&gt;
                    &lt;IDVTypeOfSetAside description=&quot;String&quot;&gt;String&lt;/IDVTypeOfSetAside&gt;
                    &lt;typeOfSetAsideSource description=&quot;String&quot;&gt;String&lt;/typeOfSetAsideSource&gt;
                    &lt;IDVnumberOfOffersReceived description=&quot;String&quot;&gt;1&lt;/IDVnumberOfOffersReceived&gt;
                    &lt;numberOfOffersSource description=&quot;String&quot;&gt;String&lt;/numberOfOffersSource&gt;
                &lt;/competition&gt;
                &lt;transactionInformation&gt;
                    &lt;createdBy&gt;String&lt;/createdBy&gt;
                    &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                    &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                    &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                    &lt;status description=&quot;String&quot;&gt;String&lt;/status&gt;
                    &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                    &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
                    &lt;closedStatus&gt;String&lt;/closedStatus&gt;
                    &lt;closedBy&gt;String&lt;/closedBy&gt;
                    &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;/transactionInformation&gt;
                &lt;genericTags&gt;
                    &lt;genericStrings&gt;
                    &lt;genericString01&gt;0000-00-00 00:00:00&lt;/genericString01&gt;
                    &lt;genericString02&gt;11A2222222B1&lt;/genericString02&gt;
                    &lt;genericString03&gt;String&lt;/genericString03&gt;
                    &lt;genericString04&gt;String&lt;/genericString04&gt;
                    &lt;genericString05&gt;String&lt;/genericString05&gt;
                    &lt;genericString06&gt;String&lt;/genericString06&gt;
                    &lt;genericString07&gt;String&lt;/genericString07&gt;
                    &lt;genericString08&gt;String&lt;/genericString08&gt;
                    &lt;genericString09&gt;String&lt;/genericString09&gt;
                    &lt;genericString10&gt;String&lt;/genericString10&gt;
                    &lt;/genericStrings&gt;
                    &lt;genericBooleans&gt;
                        &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                        &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
                        &lt;genericBoolean03&gt;false&lt;/genericBoolean03&gt;
                        &lt;genericBoolean04&gt;false&lt;/genericBoolean04&gt;
                        &lt;genericBoolean05&gt;false&lt;/genericBoolean05&gt;
                        &lt;genericBoolean06&gt;false&lt;/genericBoolean06&gt;
                        &lt;genericBoolean07&gt;false&lt;/genericBoolean07&gt;
                        &lt;genericBoolean08&gt;false&lt;/genericBoolean08&gt;
                        &lt;genericBoolean09&gt;false&lt;/genericBoolean09&gt;
                        &lt;genericBoolean10&gt;false&lt;/genericBoolean10&gt;
                    &lt;/genericBooleans&gt;
                    &lt;genericFloats&gt;
                        &lt;genericFloat01&gt;3.1415&lt;/genericFloat01&gt;
                        &lt;genericFloat02&gt;3.1415&lt;/genericFloat02&gt;
                    &lt;/genericFloats&gt;
                    &lt;genericIntegers&gt;
                        &lt;genericInteger01&gt;1&lt;/genericInteger01&gt;
                        &lt;genericInteger02&gt;1&lt;/genericInteger02&gt;
                    &lt;/genericIntegers&gt;
                &lt;/genericTags&gt;
            &lt;/contractDetail&gt;
        &lt;/OtherTransactionAward&gt;
    </code>
    </pre>
    </details>
    <details>
    <summary>OTHER TRANSACTION IDV XML</summary>
    <pre>
    <code class="xml">
        &lt;OtherTransactionIDV xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;OtherTransactionIDVID&gt;
                &lt;OtherTransactionIDVContractID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                &lt;/OtherTransactionIDVContractID&gt;
                &lt;referencedIDVID&gt;
                    &lt;agencyID name=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                &lt;/referencedIDVID&gt;
            &lt;/OtherTransactionIDVID&gt;
            &lt;contractDetail&gt;
                &lt;relevantContractDates&gt;
                    &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
                    &lt;effectiveDate&gt;0000-00-00 00:00:00&lt;/effectiveDate&gt;
                    &lt;currentCompletionDate&gt;0000-00-00 00:00:00&lt;/currentCompletionDate&gt;
                    &lt;ultimateCompletionDate&gt;0000-00-00 00:00:00&lt;/ultimateCompletionDate&gt;
                    &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
                &lt;/relevantContractDates&gt;
                &lt;dollarValues&gt;
                    &lt;obligatedAmount&gt;3.1415&lt;/obligatedAmount&gt;
                    &lt;baseAndExercisedOptionsValue&gt;3.1415&lt;/baseAndExercisedOptionsValue&gt;
                    &lt;baseAndAllOptionsValue&gt;3.1415&lt;/baseAndAllOptionsValue&gt;
                    &lt;nonGovernmentalDollars&gt;3.1415&lt;/nonGovernmentalDollars&gt;
                &lt;/dollarValues&gt;
                &lt;totalDollarValues&gt;
                    &lt;totalObligatedAmount&gt;3.1415&lt;/totalObligatedAmount&gt;
                    &lt;totalBaseAndExercisedOptionsValue&gt;3.1415&lt;/totalBaseAndExercisedOptionsValue&gt;
                    &lt;totalBaseAndAllOptionsValue&gt;3.1415&lt;/totalBaseAndAllOptionsValue&gt;
                    &lt;totalNonGovernmentalDollars&gt;3.1415&lt;/totalNonGovernmentalDollars&gt;
                &lt;/totalDollarValues&gt;
                &lt;purchaserInformation&gt;
                    &lt;contractingOfficeAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/contractingOfficeAgencyID&gt;
                &lt;contractingOfficeID Description=&quot;String&quot; regionCode=&quot;String&quot; country=&quot;String&quot;&gt;String&lt;/contractingOfficeID&gt;
                &lt;fundingRequestingAgencyID name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingRequestingAgencyID&gt;
                &lt;fundingRequestingOfficeID name=&quot;String&quot;&gt;String&lt;/fundingRequestingOfficeID&gt;
                &lt;/purchaserInformation&gt;
                &lt;contractData&gt;
                    &lt;contractActionType description=&quot;String&quot; part8OrPart13=&quot;String&quot;&gt;String&lt;/contractActionType&gt;
                    &lt;typeOfAgreement&gt;String&lt;/typeOfAgreement&gt;
                    &lt;reasonForModification description=&quot;String&quot;&gt;String&lt;/reasonForModification&gt;
                    &lt;descriptionOfContractRequirement&gt;String&lt;/descriptionOfContractRequirement&gt;
                    &lt;listOfTreasuryAccounts&gt;
                        &lt;treasuryAccount&gt;
                            &lt;treasuryAccountSymbol&gt;
                                &lt;agencyIdentifier&gt;String&lt;/agencyIdentifier&gt;
                                &lt;mainAccountCode&gt;Stri&lt;/mainAccountCode&gt;
                                &lt;subAccountCode&gt;Str&lt;/subAccountCode&gt;
                            &lt;/treasuryAccountSymbol&gt;
                            &lt;initiative description=&quot;String&quot;&gt;String&lt;/initiative&gt;
                        &lt;/treasuryAccount&gt;
                    &lt;/listOfTreasuryAccounts&gt;
                    &lt;nonTraditionalGovernmentContractorParticipation description=&quot;String&quot;&gt;String&lt;/nonTraditionalGovernmentContractorParticipation&gt;
                &lt;/contractData&gt;
                &lt;PSCCode description=&quot;String&quot; productOrServiceType=&quot;String&quot;&gt;String&lt;/PSCCode&gt;
                &lt;vendor&gt;
                    &lt;vendorHeader&gt;
                        &lt;vendorName&gt;String&lt;/vendorName&gt;
                        &lt;vendorAlternateName&gt;String&lt;/vendorAlternateName&gt;
                        &lt;vendorLegalOrganizationName&gt;String&lt;/vendorLegalOrganizationName&gt;
                        &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                    &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                        &lt;vendorSocioEconomicIndicators&gt;
                            &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;1&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                            &lt;isAmericanIndianOwned&gt;1&lt;/isAmericanIndianOwned&gt;
                            &lt;isIndianTribe&gt;1&lt;/isIndianTribe&gt;
                            &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;1&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                            &lt;isTriballyOwnedFirm&gt;1&lt;/isTriballyOwnedFirm&gt;
                            &lt;isVeteranOwned&gt;1&lt;/isVeteranOwned&gt;
                            &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;1&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                            &lt;isWomenOwned&gt;1&lt;/isWomenOwned&gt;
                            &lt;isWomenOwnedSmallBusiness&gt;1&lt;/isWomenOwnedSmallBusiness&gt;
                            &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                            &lt;isJointVentureWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                            &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;1&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;					
                            &lt;minorityOwned&gt;
                                &lt;isMinorityOwned&gt;1&lt;/isMinorityOwned&gt;
                                &lt;isSubContinentAsianAmericanOwnedBusiness&gt;1&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                                &lt;isAsianPacificAmericanOwnedBusiness&gt;1&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                                &lt;isBlackAmericanOwnedBusiness&gt;1&lt;/isBlackAmericanOwnedBusiness&gt;
                                &lt;isHispanicAmericanOwnedBusiness&gt;1&lt;/isHispanicAmericanOwnedBusiness&gt;
                                &lt;isNativeAmericanOwnedBusiness&gt;1&lt;/isNativeAmericanOwnedBusiness&gt;
                                &lt;isOtherMinorityOwned&gt;1&lt;/isOtherMinorityOwned&gt;
                            &lt;/minorityOwned&gt;
                            &lt;isVerySmallBusiness&gt;1&lt;/isVerySmallBusiness&gt;
                        &lt;/vendorSocioEconomicIndicators&gt;
                        &lt;vendorBusinessTypes&gt;
                            &lt;isCommunityDevelopedCorporationOwnedFirm&gt;1&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                            &lt;isLaborSurplusAreaFirm&gt;1&lt;/isLaborSurplusAreaFirm&gt;
                            &lt;federalGovernment&gt;
                                &lt;isFederalGovernment&gt;1&lt;/isFederalGovernment&gt;
                                &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;1&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                                &lt;isFederalGovernmentAgency&gt;1&lt;/isFederalGovernmentAgency&gt;
                            &lt;/federalGovernment&gt;
                            &lt;isStateGovernment&gt;1&lt;/isStateGovernment&gt;
                            &lt;localGovernment&gt;
                                &lt;isLocalGovernment&gt;1&lt;/isLocalGovernment&gt;
                                &lt;isCityLocalGovernment&gt;1&lt;/isCityLocalGovernment&gt;
                                &lt;isCountyLocalGovernment&gt;1&lt;/isCountyLocalGovernment&gt;
                                &lt;isInterMunicipalLocalGovernment&gt;1&lt;/isInterMunicipalLocalGovernment&gt;
                                &lt;isLocalGovernmentOwned&gt;1&lt;/isLocalGovernmentOwned&gt;
                                &lt;isMunicipalityLocalGovernment&gt;1&lt;/isMunicipalityLocalGovernment&gt;
                                &lt;isSchoolDistrictLocalGovernment&gt;1&lt;/isSchoolDistrictLocalGovernment&gt;
                                &lt;isTownshipLocalGovernment&gt;1&lt;/isTownshipLocalGovernment&gt;
                            &lt;/localGovernment&gt;
                            &lt;isTribalGovernment&gt;1&lt;/isTribalGovernment&gt;
                            &lt;isForeignGovernment&gt;1&lt;/isForeignGovernment&gt;
                            &lt;businessOrOrganizationType&gt;
                                &lt;isCorporateEntityNotTaxExempt&gt;1&lt;/isCorporateEntityNotTaxExempt&gt;
                                &lt;isCorporateEntityTaxExempt&gt;1&lt;/isCorporateEntityTaxExempt&gt;
                                &lt;isPartnershipOrLimitedLiabilityPartnership&gt;1&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                                &lt;isSolePropreitorship&gt;1&lt;/isSolePropreitorship&gt;
                                &lt;isSmallAgriculturalCooperative&gt;1&lt;/isSmallAgriculturalCooperative&gt;
                                &lt;isInternationalOrganization&gt;1&lt;/isInternationalOrganization&gt;
                                &lt;isUSGovernmentEntity&gt;&lt;/isUSGovernmentEntity&gt;
                            &lt;/businessOrOrganizationType&gt;
                        &lt;/vendorBusinessTypes&gt;
                        &lt;vendorLineOfBusiness&gt;
                            &lt;isCommunityDevelopmentCorporation&gt;1&lt;/isCommunityDevelopmentCorporation&gt;
                            &lt;isDomesticShelter&gt;1&lt;/isDomesticShelter&gt;
                            &lt;isEducationalInstitution&gt;1&lt;/isEducationalInstitution&gt;
                            &lt;isFoundation&gt;1&lt;/isFoundation&gt;
                            &lt;isHospital&gt;1&lt;/isHospital&gt;
                            &lt;isManufacturerOfGoods&gt;1&lt;/isManufacturerOfGoods&gt;
                            &lt;isVeterinaryHospital&gt;1&lt;/isVeterinaryHospital&gt;
                            &lt;isHispanicServicingInstitution&gt;1&lt;/isHispanicServicingInstitution&gt;
                        &lt;/vendorLineOfBusiness&gt;
                        &lt;vendorRelationshipWithFederalGovernment&gt;
                            &lt;receivesContracts&gt;1&lt;/receivesContracts&gt;
                            &lt;receivesGrants&gt;1&lt;/receivesGrants&gt;
                            &lt;receivesContractsAndGrants&gt;1&lt;/receivesContractsAndGrants&gt;
                        &lt;/vendorRelationshipWithFederalGovernment&gt;
                        &lt;typeOfGovernmentEntity&gt;
                            &lt;isAirportAuthority&gt;1&lt;/isAirportAuthority&gt;
                            &lt;isCouncilOfGovernments&gt;1&lt;/isCouncilOfGovernments&gt;
                            &lt;isHousingAuthoritiesPublicOrTribal&gt;1&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                            &lt;isInterstateEntity&gt;1&lt;/isInterstateEntity&gt;
                            &lt;isPlanningCommission&gt;1&lt;/isPlanningCommission&gt;
                            &lt;isPortAuthority&gt;1&lt;/isPortAuthority&gt;
                            &lt;isTransitAuthority&gt;1&lt;/isTransitAuthority&gt;
                        &lt;/typeOfGovernmentEntity&gt;
                        &lt;vendorOrganizationFactors&gt;
                            &lt;isSubchapterSCorporation&gt;1&lt;/isSubchapterSCorporation&gt;
                            &lt;isLimitedLiabilityCorporation&gt;1&lt;/isLimitedLiabilityCorporation&gt;
                            &lt;isForeignOwnedAndLocated&gt;1&lt;/isForeignOwnedAndLocated&gt;
                            &lt;profitStructure&gt;
                                &lt;isForProfitOrganization&gt;1&lt;/isForProfitOrganization&gt;
                                &lt;isNonprofitOrganization&gt;1&lt;/isNonprofitOrganization&gt;
                                &lt;isOtherNotForProfitOrganization&gt;1&lt;/isOtherNotForProfitOrganization&gt;
                            &lt;/profitStructure&gt;
                            &lt;isShelteredWorkshop&gt;1&lt;/isShelteredWorkshop&gt;
                            &lt;stateOfIncorporation&gt;String&lt;/stateOfIncorporation&gt;
                            &lt;countryOfIncorporation&gt;String&lt;/countryOfIncorporation&gt;
                            &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                        &lt;/vendorOrganizationFactors&gt;
                        &lt;typeOfEducationalEntity&gt;
                            &lt;is1862LandGrantCollege&gt;1&lt;/is1862LandGrantCollege&gt;
                            &lt;is1890LandGrantCollege&gt;1&lt;/is1890LandGrantCollege&gt;
                            &lt;is1994LandGrantCollege&gt;1&lt;/is1994LandGrantCollege&gt;
                            &lt;isHistoricallyBlackCollegeOrUniversity&gt;1&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                            &lt;isMinorityInstitution&gt;1&lt;/isMinorityInstitution&gt;
                            &lt;isPrivateUniversityOrCollege&gt;1&lt;/isPrivateUniversityOrCollege&gt;
                            &lt;isSchoolOfForestry&gt;1&lt;/isSchoolOfForestry&gt;
                            &lt;isStateControlledInstitutionofHigherLearning&gt;1&lt;/isStateControlledInstitutionofHigherLearning&gt;
                            &lt;isTribalCollege&gt;1&lt;/isTribalCollege&gt;
                            &lt;isVeterinaryCollege&gt;1&lt;/isVeterinaryCollege&gt;
                            &lt;isAlaskanNativeServicingInstitution&gt;&lt;/isAlaskanNativeServicingInstitution&gt;
                            &lt;isNativeHawaiianServicingInstitution&gt;&lt;/isNativeHawaiianServicingInstitution&gt;
                        &lt;/typeOfEducationalEntity&gt;
                        &lt;vendorCertifications&gt;
                            &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;1&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                            &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                            &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;1&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                            &lt;isSBACertified8AProgramParticipant&gt;1&lt;/isSBACertified8AProgramParticipant&gt;
                            &lt;isSelfCertifiedHUBZoneJointVenture&gt;1&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                            &lt;isSBACertifiedHUBZone&gt;1&lt;/isSBACertifiedHUBZone&gt;
                            &lt;isSBACertified8AJointVenture&gt;1&lt;/isSBACertified8AJointVenture&gt;
                        &lt;/vendorCertifications&gt;
                        &lt;vendorLocation&gt;
                            &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                            &lt;streetAddress2&gt;String&lt;/streetAddress2&gt;
                            &lt;streetAddress3&gt;String&lt;/streetAddress3&gt;
                            &lt;city&gt;String&lt;/city&gt;
                            &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                            &lt;ZIPCode&gt;String&lt;/ZIPCode&gt;
                            &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                            &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                            &lt;faxNo&gt;String&lt;/faxNo&gt;
                            &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                            &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                        &lt;/vendorLocation&gt;
                        &lt;vendorSiteCode&gt;String&lt;/vendorSiteCode&gt;
                        &lt;vendorAlternateSiteCode&gt;String&lt;/vendorAlternateSiteCode&gt;
                        &lt;entityIdentifiers&gt;
                            &lt;vendorDUNSInformation&gt;
                                &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                                &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                                &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                                &lt;domesticParentDUNSNumber&gt;String&lt;/domesticParentDUNSNumber&gt;
                                &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                                &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                                &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                            &lt;/vendorDUNSInformation&gt;
                            &lt;vendorUEIInformation&gt;
                                &lt;UEI&gt;String&lt;/UEI&gt;
                                &lt;UEILegalBusinessName&gt;String&lt;/UEILegalBusinessName&gt;
                                &lt;immediateParentUEI&gt;String&lt;/parentUEI&gt;
                                &lt;immediateParentUEIName&gt;String&lt;/parentUEIName&gt;
                                &lt;domesticParentUEI&gt;String&lt;/domesticParentUEI&gt;
                                &lt;domesticParentUEIName&gt;String&lt;/domesticParentUEIName&gt;
                                &lt;ultimateParentUEI&gt;String&lt;/ultimateParentUEI&gt;
                                &lt;ultimateParentUEIName&gt;String&lt;/ultimateParentUEIName&gt;
                            &lt;/vendorUEIInformation&gt;
                            &lt;cageCode&gt;String&lt;/cageCode&gt;
                        &lt;/entityIdentifiers&gt;
                        &lt;divisionName&gt;String&lt;/divisionName&gt;
                        &lt;divisionNumberOrOfficeCode&gt;String&lt;/divisionNumberOrOfficeCode&gt;
                        &lt;ccrRegistrationDetails&gt;
                            &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                            &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                        &lt;/ccrRegistrationDetails&gt;
                    &lt;/vendorSiteDetails&gt;
                    &lt;CCRException description=&quot;String&quot;&gt;String&lt;/CCRException&gt;
                    &lt;contractingOfficerBusinessSizeDetermination description=&quot;String&quot;&gt;String&lt;/contractingOfficerBusinessSizeDetermination&gt;
                &lt;/vendor&gt;
                &lt;placeOfPerformance&gt;
                    &lt;principalPlaceOfPerformance&gt;
                        &lt;locationCode name=&quot;&quot;&gt;Strin&lt;/locationCode&gt;
                        &lt;stateCode name=&quot;&quot;&gt;String&lt;/stateCode&gt;
                        &lt;countryCode name=&quot;&quot;&gt;String&lt;/countryCode&gt;
                    &lt;/principalPlaceOfPerformance&gt;
                    &lt;placeOfPerformanceZIPCode&gt;String&lt;/placeOfPerformanceZIPCode&gt;
                    &lt;placeOfPerformanceCongressionalDistrict&gt;String&lt;/placeOfPerformanceCongressionalDistrict&gt;
                &lt;/placeOfPerformance&gt;
                &lt;competition&gt;
                    &lt;extentCompeted description=&quot;String&quot;&gt;String&lt;/extentCompeted&gt;
                    &lt;solicitationProcedures description=&quot;String&quot;&gt;String&lt;/solicitationProcedures&gt;
                    &lt;IDVTypeOfSetAside description=&quot;String&quot;&gt;String&lt;/IDVTypeOfSetAside&gt;
                    &lt;typeOfSetAsideSource description=&quot;String&quot;&gt;String&lt;/typeOfSetAsideSource&gt;
                    &lt;IDVnumberOfOffersReceived description=&quot;String&quot;&gt;1&lt;/IDVnumberOfOffersReceived&gt;
                    &lt;numberOfOffersSource description=&quot;String&quot;&gt;String&lt;/numberOfOffersSource&gt;
                &lt;/competition&gt;
                &lt;transactionInformation&gt;
                    &lt;createdBy&gt;String&lt;/createdBy&gt;
                    &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                    &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                    &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                    &lt;status description=&quot;String&quot;&gt;String&lt;/status&gt;
                    &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                    &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
                    &lt;closedStatus&gt;String&lt;/closedStatus&gt;
                    &lt;closedBy&gt;String&lt;/closedBy&gt;
                    &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;/transactionInformation&gt;
                &lt;genericTags&gt;
                    &lt;genericStrings&gt;
                    &lt;genericString01&gt;0000-00-00 00:00:00&lt;/genericString01&gt;
                    &lt;genericString02&gt;11A2222222B1&lt;/genericString02&gt;
                    &lt;genericString03&gt;String&lt;/genericString03&gt;
                    &lt;genericString04&gt;String&lt;/genericString04&gt;
                    &lt;genericString05&gt;String&lt;/genericString05&gt;
                    &lt;genericString06&gt;LPTA&lt;/genericString06&gt;
                    &lt;genericString07&gt;String&lt;/genericString07&gt;
                    &lt;genericString08&gt;String&lt;/genericString08&gt;
                    &lt;genericString09&gt;String&lt;/genericString09&gt;
                    &lt;genericString10&gt;String&lt;/genericString10&gt;
                    &lt;/genericStrings&gt;
                    &lt;genericBooleans&gt;
                        &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                        &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
                        &lt;genericBoolean03&gt;false&lt;/genericBoolean03&gt;
                        &lt;genericBoolean04&gt;false&lt;/genericBoolean04&gt;
                        &lt;genericBoolean05&gt;false&lt;/genericBoolean05&gt;
                        &lt;genericBoolean06&gt;false&lt;/genericBoolean06&gt;
                        &lt;genericBoolean07&gt;false&lt;/genericBoolean07&gt;
                        &lt;genericBoolean08&gt;false&lt;/genericBoolean08&gt;
                        &lt;genericBoolean09&gt;false&lt;/genericBoolean09&gt;
                        &lt;genericBoolean10&gt;false&lt;/genericBoolean10&gt;
                    &lt;/genericBooleans&gt;
                    &lt;genericFloats&gt;
                        &lt;genericFloat01&gt;3.1415&lt;/genericFloat01&gt;
                        &lt;genericFloat02&gt;3.1415&lt;/genericFloat02&gt;
                    &lt;/genericFloats&gt;
                    &lt;genericIntegers&gt;
                        &lt;genericInteger01&gt;1&lt;/genericInteger01&gt;
                        &lt;genericInteger02&gt;1&lt;/genericInteger02&gt;
                    &lt;/genericIntegers&gt;
                &lt;/genericTags&gt;
            &lt;/contractDetail&gt;
        &lt;/OtherTransactionIDV&gt;
    </code>
    </pre>
    </details>
    <details>
    <summary>CLOSED FEED AWARD XML</summary>
    <pre>
    <code class="xml">
        &lt;award xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;awardID&gt;
                &lt;awardContractID&gt;
                    &lt;agencyID description=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                    &lt;transactionNumber&gt;String&lt;/transactionNumber&gt;
                &lt;/awardContractID&gt;
            &lt;/awardID&gt;
            &lt;relevantContractDates&gt;
                &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
            &lt;/relevantContractDates&gt;
            &lt;transactionInformation&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;closedStatus&gt;String&lt;/closedStatus&gt;
            &lt;/transactionInformation&gt;
        &lt;/award&gt;
    </code>
    </pre>
    </details>
    <details>
    <summary>CLOSED FEED IDV XML</summary>
    <pre>
    <code class="xml">
        &lt;IDV xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;contractID&gt;
                &lt;IDVID&gt;
                    &lt;agencyID description=&quot;String&quot;&gt;String&lt;/agencyID&gt;
                    &lt;PIID&gt;String&lt;/PIID&gt;
                    &lt;modNumber&gt;String&lt;/modNumber&gt;
                &lt;/IDVID&gt;
            &lt;/contractID&gt;
            &lt;relevantContractDates&gt;
                &lt;signedDate&gt;0000-00-00 00:00:00&lt;/signedDate&gt;
            &lt;/relevantContractDates&gt;
            &lt;transactionInformation&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;closedStatus&gt;String&lt;/closedStatus&gt;
            &lt;/transactionInformation&gt;
        &lt;/IDV&gt;
    </code>
    </pre>
    </details>
  
<p><small><a href="#">Back to top</a></small></p>

## XML Schemas

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
                if(node.data.href){
                   //window.open(node.data.href,  node.data.target);
                }
            },
            
            click: function(event, data){
                var node = data.node,
                orgEvent = data.originalEvent;
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
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.4_March_2022_update.pdf)
- [OT Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V14_OT_March_2022_update.pdf)
- [Web Services Specifications](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-NG_14_Data_Validation_rules_document_(3).doc)
- [Changes in XSD and WSDLs](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version14-Changes_(1).doc)
- [SOAP Examples](https://www.fpds.gov/downloads/Version_1.4_specs/V1.4_Soap_Request_Samples.zip)
- [WSDL Zip file](https://www.fpds.gov/downloads/V14WSDLFiles_11_20_2009.zip)
- [Validation Rules](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_14_Data_Validation_rules_document.doc)

#### Version 1.3
- [Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_V1.3_March_2022_update.pdf)
- [Web Services Integration Specifications](https://iae-prd-opengsa.s3.amazonaws.com/FPDS-Specifications-WebServices_Integration_Specifications_V1.4_(5).doc)
- [WSDL Files](https://www.fpds.gov/downloads/FPDS_WSDL_07182008.zip)
- [Changes Outline](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version13-Changes-V16.doc)
- [SOAP Request Samples](https://www.fpds.gov/downloads/soap1.3.zip)
- [XML Examples](https://www.fpds.gov/downloads/xmls1.3.zip)
- [Validation Rules Document](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-Specifications-Version13-Changes-V16...docx)

#### Version 1.2 and Earlier
- [Version 1.2 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_DataDictionary_1.2_March_2022_update.pdf)
- [Version 1.1 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-DES-SDD-data_dictionary-DESversion1.1_(1).doc)
- [Version 1.0 Data Dictionary](https://iae-prd-opengsa.s3.amazonaws.com/ContractData-DES-SDD-data_dictionary-DES_version1.0.doc)
<p><small><a href="#">Back to top</a></small></p>


## Contact Us
- Reach out to the SAM.gov team at [fsd.gov](http://www.fsd.gov) for inquiries and help desk support.
- We encourage you to join our Technical Interface Community (TIC) by sending an email to [IAE_Admin@gsa.gov](mailto:IAE_Admin@gsa.gov). The TIC meets every one to two months.
<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
4/18/2022 | 1.0 | Initial Draft - SAM.gov Acquisition Award Data (Formerly FPDS.gov)

<p><small><a href="#">Back to top</a></small></p>
