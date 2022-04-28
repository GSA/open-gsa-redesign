---
title: SAM.gov Assistance Award Data (Formerly FPDS.gov)
banner-heading: SAM.gov Assistance Award Data (Formerly FPDS.gov)
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
- [FAADC Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_FPDS_Certification_Process.doc)
<p><small><a href="#">Back to top</a></small></p>

## General Information
- [Certified COTS/GOTS List](https://www.fpds.gov/wiki/index.php/Certified_Agency-CWS_COTS/GOTS_List)
- [Certification Form](https://iae-prd-opengsa.s3.amazonaws.com/ContractData_certification_form_March_2022_update.pdf)
<p><small><a href="#">Back to top</a></small></p>

## Current FAADC Specifications
- [FAADC Web Services Specifications V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Webservice_Integration_Specifications_V1.1-March_2022_update.pdf)
- [FAADC Certification Process](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_FPDS_Certification_Process.doc)
- [FAADC Help Guide V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Help_Guide_V1.1_(2).docx)
- [FAADC WSDL Files](https://www.fpds.gov/downloads/FAADC/FAADC_WSDL.zip)
- [FAADC Validation Rules V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Validation_Rules_V1.1.doc)
- [FAADC Data Dictionary V1.1](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Data_Dictionary_V1.1.doc)
- FAADC Atom Feed Specifications V1.1
    <details>
    <summary>Introduction</summary>
    <p>
        FAADC has data reporting web services that provide access in real-time to FPDS central data repository. Atom Feeds provides access to the same data with real time feeds.
    </p>
    </details>
    <details>
    <summary>FAADC Atom feed format</summary>
    <p>
        FAADC Atom feed specification is based on the industry standard Atom 1.0 format RFC4287 as defined by Internet Engineering Task Force (IETF) in December 2005.<br>
        FAADC Assistance data will follow FAADC Version 1.1 Assistance specifications.
    </p>
    </details>
    <details>
    <summary>Feed XML specification</summary>
    <pre>
    <code class="xml">
        &lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot;&gt;
            &lt;title&gt;FAADC matching assistance records for the search query : &lt;![CDATA[: recovery]]&gt;&lt;/title&gt;
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
                &lt;content xmlns:ns1=&quot;https://www.fpds.gov&quot; type=&quot;application/xml&quot;&gt; 
                    ... Assistance XML
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
    <summary>Assistance XML</summary>
    <pre>
    <code class="xml">
        &lt;assistance xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;assistanceID&gt;
                &lt;agencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/agencyCode&gt;
                &lt;FAIN&gt;String&lt;/FAIN&gt;
                &lt;amendmentNumber&gt;0&lt;/amendmentNumber&gt;
            &lt;/assistanceID&gt;
            &lt;assistanceDates&gt;
                &lt;actionDate&gt;0000-00-00 00:00:00&lt;/actionDate&gt;
                &lt;periodOfPerformanceStartDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceStartDate&gt;
                &lt;periodOfPerformanceEndDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceEndDate&gt;
                &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
            &lt;/assistanceDates&gt;
            &lt;assistanceData&gt;
            &lt;assistanceIndicators&gt;
                &lt;businessFundsIndicator description=&quot;String&quot;&gt;String&lt;/businessFundsIndicator&gt;
                &lt;individualRecipientIndicator&gt;String&lt;/individualRecipientIndicator&gt;
                &lt;researchAndDevelopmentFundsIndicator&gt;String&lt;/researchAndDevelopmentFundsIndicator&gt;
            &lt;/assistanceIndicators&gt;
            &lt;assistanceCompetition&gt;
                &lt;competedOpportunity description=&quot;String&quot;&gt;String&lt;/competedOpportunity&gt;
                &lt;numberOfProposalsOrApplications&gt;String&lt;/numberOfProposalsOrApplications&gt;
            &lt;/assistanceCompetition&gt;
            &lt;actionType description=&quot;String&quot;&gt;String&lt;/actionType&gt;
            &lt;assistanceType description=&quot;String&quot;&gt;String&lt;/assistanceType&gt;
            &lt;assistanceDescription&gt;String&lt;/assistanceDescription&gt;
            &lt;recordType description=&quot;String&quot;&gt;String&lt;/recordType&gt;
            &lt;typeOfFundsCode description=&quot;String&quot;&gt;String&lt;/typeOfFundsCode&gt;
            &lt;/assistanceData&gt;
            &lt;dollarValues&gt;
                &lt;federalActionObligationAmount&gt;3.1415&lt;/federalActionObligationAmount&gt;
                &lt;nonFederalFundingAmount&gt;3.1415&lt;/nonFederalFundingAmount&gt;
                &lt;totalFederalAwardValueAmount&gt;3.1415&lt;/totalFederalAwardValueAmount&gt;
                &lt;researchDollarValues&gt;
                    &lt;researchAndDevelopmentAmount&gt;3.1415&lt;/researchAndDevelopmentAmount&gt;
                    &lt;fellowshipsAndTraineeshipsAmount&gt;3.1415&lt;/fellowshipsAndTraineeshipsAmount&gt;
                    &lt;researchAndDevelopmentPlantAmount&gt;3.1415&lt;/researchAndDevelopmentPlantAmount&gt;
                    &lt;facilitiesAndEquipmentForInstructionAmount&gt;3.1415&lt;/facilitiesAndEquipmentForInstructionAmount&gt;
                    &lt;generalSupportForScienceAndEngineeringAmount&gt;3.1415&lt;/generalSupportForScienceAndEngineeringAmount&gt;
                    &lt;otherActivitiesRelatedToScienceAndEngineeringAmount&gt;3.1415&lt;/otherActivitiesRelatedToScienceAndEngineeringAmount&gt;
                    &lt;allOtherActivitiesNotRelatedToScienceAndEngineeringAmount&gt;3.1415&lt;/allOtherActivitiesNotRelatedToScienceAndEngineeringAmount&gt;
                &lt;/researchDollarValues&gt;
            &lt;/dollarValues&gt;
            &lt;providerInformation&gt;
                &lt;awardingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/awardingSubTierAgencyCode&gt;
                &lt;awardingOfficeCode&gt;String&lt;/awardingOfficeCode&gt;
                &lt;fundingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingSubTierAgencyCode&gt;
                &lt;fundingOfficeCode name=&quot;String&quot;&gt;String&lt;/fundingOfficeCode&gt;
            &lt;/providerInformation&gt;
            &lt;programInformation&gt;
            &lt;CFDANumber&gt;00.000&lt;/CFDANumber&gt;
            &lt;CFDAProgramTitle&gt;String&lt;/CFDAProgramTitle&gt;
            &lt;/programInformation&gt;
            &lt;placeOfPerformance&gt;
                &lt;PPOPCode&gt;String&lt;/PPOPCode&gt;
                &lt;PPOPDescription&gt;String&lt;/PPOPDescription&gt;
                &lt;PPOPCountryCode&gt;String&lt;/PPOPCountryCode&gt;
                &lt;PPOPCountryName&gt;String&lt;/PPOPCountryName&gt;
                &lt;PPOPStateName&gt;String&lt;/PPOPStateName&gt;
                &lt;PPOPStateISO2Code&gt;String&lt;/PPOPStateISO2Code&gt;
                &lt;PPOPCountyName&gt;String&lt;/PPOPCountyName&gt;
                &lt;PPOPCountyFIPSCode&gt;String&lt;/PPOPCountyFIPSCode&gt;
                &lt;PPOPCityName&gt;String&lt;/PPOPCityName&gt;
                &lt;PPOPZIPCode&gt;String&lt;/PPOPZIPCode&gt;
                &lt;PPOPCongressionalDistrict&gt;String&lt;/PPOPCongressionalDistrict&gt;
            &lt;/placeOfPerformance&gt;
            &lt;recipient&gt;
                &lt;recipientDetails&gt;
                    &lt;vendorHeader&gt;
                        &lt;vendorName&gt;String&lt;/vendorName&gt;
                        &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                        &lt;vendorEnabled&gt;false&lt;/vendorEnabled&gt;
                    &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                    &lt;vendorSocioEconomicIndicators&gt;
                        &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;false&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                        &lt;isAmericanIndianOwned&gt;false&lt;/isAmericanIndianOwned&gt;
                        &lt;isIndianTribe&gt;false&lt;/isIndianTribe&gt;
                        &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;false&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                        &lt;isTriballyOwnedFirm&gt;false&lt;/isTriballyOwnedFirm&gt;
                        &lt;isSmallBusiness&gt;false&lt;/isSmallBusiness&gt;
                        &lt;isVeteranOwned&gt;false&lt;/isVeteranOwned&gt;
                        &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;false&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                        &lt;isWomenOwned&gt;false&lt;/isWomenOwned&gt;
                        &lt;minorityOwned&gt;
                            &lt;isMinorityOwned&gt;false&lt;/isMinorityOwned&gt;
                            &lt;isSubContinentAsianAmericanOwnedBusiness&gt;false&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                            &lt;isAsianPacificAmericanOwnedBusiness&gt;false&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                            &lt;isBlackAmericanOwnedBusiness&gt;false&lt;/isBlackAmericanOwnedBusiness&gt;
                            &lt;isHispanicAmericanOwnedBusiness&gt;false&lt;/isHispanicAmericanOwnedBusiness&gt;
                            &lt;isNativeAmericanOwnedBusiness&gt;false&lt;/isNativeAmericanOwnedBusiness&gt;
                            &lt;isOtherMinorityOwned&gt;false&lt;/isOtherMinorityOwned&gt;
                        &lt;/minorityOwned&gt;
                        &lt;isVerySmallBusiness&gt;false&lt;/isVerySmallBusiness&gt;
                        &lt;isWomenOwnedSmallBusiness&gt;false&lt;/isWomenOwnedSmallBusiness&gt;
                        &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;false&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureWomenOwnedSmallBusiness&gt;false&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;false&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                    &lt;/vendorSocioEconomicIndicators&gt;
                    &lt;vendorBusinessTypes&gt;
                        &lt;isCommunityDevelopedCorporationOwnedFirm&gt;false&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                        &lt;isLaborSurplusAreaFirm&gt;false&lt;/isLaborSurplusAreaFirm&gt;
                        &lt;federalGovernment&gt;
                            &lt;isFederalGovernment&gt;false&lt;/isFederalGovernment&gt;
                            &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;false&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                            &lt;isFederalGovernmentAgency&gt;false&lt;/isFederalGovernmentAgency&gt;
                        &lt;/federalGovernment&gt;
                        &lt;isStateGovernment&gt;false&lt;/isStateGovernment&gt;
                        &lt;localGovernment&gt;
                            &lt;isLocalGovernment&gt;false&lt;/isLocalGovernment&gt;
                            &lt;isCityLocalGovernment&gt;false&lt;/isCityLocalGovernment&gt;
                            &lt;isCountyLocalGovernment&gt;false&lt;/isCountyLocalGovernment&gt;
                            &lt;isInterMunicipalLocalGovernment&gt;false&lt;/isInterMunicipalLocalGovernment&gt;
                            &lt;isLocalGovernmentOwned&gt;false&lt;/isLocalGovernmentOwned&gt;
                            &lt;isMunicipalityLocalGovernment&gt;false&lt;/isMunicipalityLocalGovernment&gt;
                            &lt;isSchoolDistrictLocalGovernment&gt;false&lt;/isSchoolDistrictLocalGovernment&gt;
                            &lt;isTownshipLocalGovernment&gt;false&lt;/isTownshipLocalGovernment&gt;
                        &lt;/localGovernment&gt;
                        &lt;isTribalGovernment&gt;false&lt;/isTribalGovernment&gt;
                        &lt;isForeignGovernment&gt;false&lt;/isForeignGovernment&gt;
                        &lt;businessOrOrganizationType&gt;
                        &lt;isCorporateEntityNotTaxExempt&gt;false&lt;/isCorporateEntityNotTaxExempt&gt;
                        &lt;isCorporateEntityTaxExempt&gt;false&lt;/isCorporateEntityTaxExempt&gt;
                        &lt;isPartnershipOrLimitedLiabilityPartnership&gt;false&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                        &lt;isSolePropreitorship&gt;false&lt;/isSolePropreitorship&gt;
                        &lt;isSmallAgriculturalCooperative&gt;false&lt;/isSmallAgriculturalCooperative&gt;
                        &lt;isInternationalOrganization&gt;false&lt;/isInternationalOrganization&gt;
                        &lt;isOtherbusinessOrOrganization&gt;false&lt;/isOtherbusinessOrOrganization&gt;
                        &lt;isUSGovernmentEntity&gt;false&lt;/isUSGovernmentEntity&gt;
                        &lt;/businessOrOrganizationType&gt;
                    &lt;/vendorBusinessTypes&gt;
                    &lt;vendorLineOfBusiness&gt;
                        &lt;isArchitectureAndEngineering&gt;false&lt;/isArchitectureAndEngineering&gt;
                        &lt;isCommunityDevelopmentCorporation&gt;false&lt;/isCommunityDevelopmentCorporation&gt;
                        &lt;isConstructionFirm&gt;false&lt;/isConstructionFirm&gt;
                        &lt;isDomesticShelter&gt;false&lt;/isDomesticShelter&gt;
                        &lt;isEducationalInstitution&gt;false&lt;/isEducationalInstitution&gt;
                        &lt;isFoundation&gt;false&lt;/isFoundation&gt;
                        &lt;isHospital&gt;false&lt;/isHospital&gt;
                        &lt;isManufacturerOfGoods&gt;false&lt;/isManufacturerOfGoods&gt;
                        &lt;isResearchAndDevelopment&gt;false&lt;/isResearchAndDevelopment&gt;
                        &lt;isServiceProvider&gt;false&lt;/isServiceProvider&gt;
                        &lt;isVeterinaryHospital&gt;false&lt;/isVeterinaryHospital&gt;
                        &lt;isHispanicServicingInstitution&gt;false&lt;/isHispanicServicingInstitution&gt;
                    &lt;/vendorLineOfBusiness&gt;
                    &lt;vendorRelationshipWithFederalGovernment&gt;
                        &lt;receivesContracts&gt;false&lt;/receivesContracts&gt;
                        &lt;receivesGrants&gt;false&lt;/receivesGrants&gt;
                        &lt;receivesContractsAndGrants&gt;false&lt;/receivesContractsAndGrants&gt;
                    &lt;/vendorRelationshipWithFederalGovernment&gt;
                    &lt;typeOfGovernmentEntity&gt;
                        &lt;isAirportAuthority&gt;false&lt;/isAirportAuthority&gt;
                        &lt;isCouncilOfGovernments&gt;false&lt;/isCouncilOfGovernments&gt;
                        &lt;isHousingAuthoritiesPublicOrTribal&gt;false&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                        &lt;isInterstateEntity&gt;false&lt;/isInterstateEntity&gt;
                        &lt;isPlanningCommission&gt;false&lt;/isPlanningCommission&gt;
                        &lt;isPortAuthority&gt;false&lt;/isPortAuthority&gt;
                        &lt;isTransitAuthority&gt;false&lt;/isTransitAuthority&gt;
                    &lt;/typeOfGovernmentEntity&gt;
                    &lt;vendorOrganizationFactors&gt;
                    &lt;isSubchapterSCorporation&gt;false&lt;/isSubchapterSCorporation&gt;
                    &lt;isLimitedLiabilityCorporation&gt;false&lt;/isLimitedLiabilityCorporation&gt;
                    &lt;isForeignOwnedAndLocated&gt;false&lt;/isForeignOwnedAndLocated&gt;
                    &lt;profitStructure&gt;
                        &lt;isForProfitOrganization&gt;false&lt;/isForProfitOrganization&gt;
                        &lt;isNonprofitOrganization&gt;false&lt;/isNonprofitOrganization&gt;
                        &lt;isOtherNotForProfitOrganization&gt;false&lt;/isOtherNotForProfitOrganization&gt;
                    &lt;/profitStructure&gt;
                    &lt;isShelteredWorkshop&gt;false&lt;/isShelteredWorkshop&gt;
                        &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                        &lt;/vendorOrganizationFactors&gt;
                    &lt;typeOfEducationalEntity&gt;
                        &lt;is1862LandGrantCollege&gt;false&lt;/is1862LandGrantCollege&gt;
                        &lt;is1890LandGrantCollege&gt;false&lt;/is1890LandGrantCollege&gt;
                        &lt;is1994LandGrantCollege&gt;false&lt;/is1994LandGrantCollege&gt;
                        &lt;isHistoricallyBlackCollegeOrUniversity&gt;false&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                        &lt;isMinorityInstitution&gt;false&lt;/isMinorityInstitution&gt;
                        &lt;isPrivateUniversityOrCollege&gt;false&lt;/isPrivateUniversityOrCollege&gt;
                        &lt;isSchoolOfForestry&gt;false&lt;/isSchoolOfForestry&gt;
                        &lt;isStateControlledInstitutionofHigherLearning&gt;false&lt;/isStateControlledInstitutionofHigherLearning&gt;
                        &lt;isTribalCollege&gt;false&lt;/isTribalCollege&gt;
                        &lt;isVeterinaryCollege&gt;false&lt;/isVeterinaryCollege&gt;
                        &lt;isAlaskanNativeServicingInstitution&gt;false&lt;/isAlaskanNativeServicingInstitution&gt;
                        &lt;isNativeHawaiianServicingInstitution&gt;false&lt;/isNativeHawaiianServicingInstitution&gt;
                    &lt;/typeOfEducationalEntity&gt;
                    &lt;vendorCertifications&gt;
                        &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;false&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                        &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertified8AProgramParticipant&gt;false&lt;/isSBACertified8AProgramParticipant&gt;
                        &lt;isSelfCertifiedHUBZoneJointVenture&gt;false&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                        &lt;isSBACertifiedHUBZone&gt;false&lt;/isSBACertifiedHUBZone&gt;
                        &lt;isSBACertified8AJointVenture&gt;false&lt;/isSBACertified8AJointVenture&gt;
                    &lt;/vendorCertifications&gt;
                    &lt;vendorLocation&gt;
                        &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                        &lt;city&gt;String&lt;/city&gt;
                        &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                        &lt;ZIPCode city=&quot;String&quot;&gt;String&lt;/ZIPCode&gt;
                        &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                        &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                        &lt;faxNo&gt;String&lt;/faxNo&gt;
                        &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                        &lt;vendorLocationDisabledFlag&gt;false&lt;/vendorLocationDisabledFlag&gt;
                        &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                    &lt;/vendorLocation&gt;
                    &lt;entityIdentifiers&gt;
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
                    &lt;ccrRegistrationDetails&gt;
                    &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                    &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                    &lt;/ccrRegistrationDetails&gt;
                    &lt;/vendorSiteDetails&gt;
                &lt;/recipientDetails&gt;
                &lt;listOfBusinessTypes&gt;
                    &lt;businessTypes&gt;
                            &lt;BusinessTypesCode&gt;String&lt;/BusinessTypesCode&gt;
                            &lt;BusinessTypesDescription&gt;String&lt;/BusinessTypesDescription&gt;
                        &lt;/businessTypes&gt;
                        &lt;businessTypes&gt;
                        &lt;BusinessTypesCode&gt;String&lt;/BusinessTypesCode&gt;
                        &lt;BusinessTypesDescription&gt;String&lt;/BusinessTypesDescription&gt;
                    &lt;/businessTypes&gt;
                &lt;/listOfBusinessTypes&gt;
                &lt;smallBusinessIndicator description=&quot;String&quot;&gt;String&lt;/smallBusinessIndicator&gt;
                &lt;SAMException description=&quot;String&quot;&gt;String&lt;/SAMException&gt;
            &lt;/recipient&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;closedStatus&gt;String&lt;/closedStatus&gt;
                &lt;status&gt;String&lt;/status&gt;
                &lt;version&gt;String&lt;/version&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;/transactionInformation&gt;
            &lt;genericTags&gt;
                &lt;genericStrings&gt;
                    &lt;genericString01&gt;String&lt;/genericString01&gt;
                    &lt;genericString02&gt;String&lt;/genericString02&gt;
                    &lt;genericString03&gt;String&lt;/genericString03&gt;
                    &lt;genericString04&gt;String&lt;/genericString04&gt;
                    &lt;genericString05&gt;String&lt;/genericString05&gt;
                    &lt;genericString06&gt;String&lt;/genericString06&gt;
                    &lt;genericString07&gt;String&lt;/genericString07&gt;
                    &lt;genericString08&gt;String&lt;/genericString08&gt;
                    &lt;genericString09&gt;String&lt;/genericString09&gt;
                    &lt;genericString10&gt;String&lt;/genericString10&gt;
                    &lt;genericString11&gt;String&lt;/genericString11&gt;
                    &lt;genericString12&gt;String&lt;/genericString12&gt;
                    &lt;genericString13&gt;String&lt;/genericString13&gt;
                    &lt;genericString14&gt;String&lt;/genericString14&gt;
                    &lt;genericString15&gt;String&lt;/genericString15&gt;
                    &lt;genericString16&gt;String&lt;/genericString16&gt;
                    &lt;genericString17&gt;String&lt;/genericString17&gt;
                    &lt;genericString18&gt;String&lt;/genericString18&gt;
                &lt;/genericStrings&gt;
                &lt;genericBooleans&gt;
                    &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                    &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
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
        &lt;/assistance&gt;
    </code></pre>
    </details>
    <details>
    <summary>Assistance Deleted XML</summary>
    <pre>
    <code class="xml">
        &lt;assistance xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;assistanceID&gt;
                &lt;agencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/agencyCode&gt;
                &lt;URI&gt;String&lt;/URI&gt;
            &lt;/assistanceID&gt;
            &lt;assistanceDates&gt;
                &lt;actionDate&gt;0000-00-00 00:00:00&lt;/actionDate&gt;
                &lt;periodOfPerformanceStartDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceStartDate&gt;
                &lt;periodOfPerformanceEndDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceEndDate&gt;
                &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
                &lt;FABSSentDate&gt;0000-00-00 00:00:00&lt;/FABSSentDate&gt;
            &lt;/assistanceDates&gt;
            &lt;assistanceData&gt;
                &lt;assistanceIndicators&gt;
                    &lt;businessFundsIndicator description=&quot;String&quot;&gt;String&lt;/businessFundsIndicator&gt;
                    &lt;correctionDeleteIndicator&gt;String&lt;/correctionDeleteIndicator&gt;
                    &lt;individualRecipientIndicator&gt;String&lt;/individualRecipientIndicator&gt;
                &lt;/assistanceIndicators&gt;
                &lt;actionType description=&quot;String&quot;&gt;String&lt;/actionType&gt;
                &lt;assistanceType description=&quot;String&quot;&gt;String&lt;/assistanceType&gt;
                &lt;assistanceDescription&gt;String&lt;/assistanceDescription&gt;
                &lt;recordType description=&quot;String&quot;&gt;String&lt;/recordType&gt;
            &lt;/assistanceData&gt;
            &lt;dollarValues&gt;
                &lt;federalActionObligationAmount&gt;3.1415&lt;/federalActionObligationAmount&gt;
                &lt;nonFederalFundingAmount&gt;3.1415&lt;/nonFederalFundingAmount&gt;
                &lt;totalFederalAwardValueAmount&gt;3.1415&lt;/totalFederalAwardValueAmount&gt;
            &lt;/dollarValues&gt;
            &lt;providerInformation&gt;
                &lt;awardingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/awardingSubTierAgencyCode&gt;
                &lt;awardingOfficeCode name=&quot;String&quot;&gt;String&lt;/awardingOfficeCode&gt;
                &lt;fundingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingSubTierAgencyCode&gt;
                &lt;fundingOfficeCode name=&quot;String&quot;&gt;String&lt;/fundingOfficeCode&gt;
            &lt;/providerInformation&gt;
            &lt;programInformation&gt;
                &lt;CFDANumber&gt;3.1415&lt;/CFDANumber&gt;
            &lt;/programInformation&gt;
            &lt;placeOfPerformance&gt;
                &lt;PPOPCode&gt;String&lt;/PPOPCode&gt;
                &lt;PPOPDescription&gt;String&lt;/PPOPDescription&gt;
                &lt;PPOPCountryCode&gt;String&lt;/PPOPCountryCode&gt;
                &lt;PPOPCountryName&gt;String&lt;/PPOPCountryName&gt;
                &lt;PPOPStateName&gt;String&lt;/PPOPStateName&gt;
                &lt;PPOPStateISO2Code&gt;String&lt;/PPOPStateISO2Code&gt;
            &lt;/placeOfPerformance&gt;
            &lt;recipient&gt;
                &lt;recipientDetails&gt;
                &lt;vendorHeader&gt;
                    &lt;vendorName&gt;String&lt;/vendorName&gt;
                &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                        &lt;vendorLocation&gt;
                            &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                            &lt;entityDataSource&gt;String&lt;/entityDataSource&gt;
                        &lt;/vendorLocation&gt;
                        &lt;entityIdentifiers&gt;
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
                    &lt;/vendorSiteDetails&gt;
                &lt;/recipientDetails&gt;
                &lt;listOfBusinessTypes&gt;
                    &lt;businessTypes&gt;
                    &lt;BusinessTypesCode&gt;String&lt;/BusinessTypesCode&gt;
                    &lt;BusinessTypesDescription&gt;String&lt;/BusinessTypesDescription&gt;
                    &lt;/businessTypes&gt;
                &lt;/listOfBusinessTypes&gt;
                &lt;smallBusinessIndicator description=&quot;String&quot;&gt;String&lt;/smallBusinessIndicator&gt;
                &lt;SAMException description=&quot;String&quot;&gt;String&lt;/SAMException&gt;
            &lt;/recipient&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;closedStatus&gt;String&lt;/closedStatus&gt;
                &lt;status&gt;String&lt;/status&gt;
                &lt;version&gt;String&lt;/version&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;/transactionInformation&gt;
            &lt;genericTags&gt;
                &lt;genericStrings&gt;
                    &lt;genericString01&gt;String&lt;/genericString01&gt;
                    &lt;genericString02&gt;String&lt;/genericString02&gt;
                    &lt;genericString03&gt;String&lt;/genericString03&gt;
                    &lt;genericString04&gt;String&lt;/genericString04&gt;
                    &lt;genericString05&gt;String&lt;/genericString05&gt;
                    &lt;genericString06&gt;String&lt;/genericString06&gt;
                    &lt;genericString07&gt;String&lt;/genericString07&gt;
                    &lt;genericString08&gt;String&lt;/genericString08&gt;
                    &lt;genericString09&gt;String&lt;/genericString09&gt;
                    &lt;genericString10&gt;String&lt;/genericString10&gt;
                    &lt;genericString11&gt;String&lt;/genericString11&gt;
                    &lt;genericString12&gt;String&lt;/genericString12&gt;
                    &lt;genericString13&gt;String&lt;/genericString13&gt;
                    &lt;genericString14&gt;String&lt;/genericString14&gt;
                    &lt;genericString15&gt;String&lt;/genericString15&gt;
                    &lt;genericString16&gt;String&lt;/genericString16&gt;
                    &lt;genericString17&gt;String&lt;/genericString17&gt;
                    &lt;genericString18&gt;String&lt;/genericString18&gt;
                &lt;/genericStrings&gt;
                &lt;genericBooleans&gt;
                    &lt;genericBoolean01&gt;false&lt;/genericBoolean01&gt;
                    &lt;genericBoolean02&gt;false&lt;/genericBoolean02&gt;
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
        &lt;/assistance&gt;
    </code></pre>
    </details>
    <details>
    <summary>Assistance Closed XML</summary>
    <pre>
    <code class="xml">
        &lt;assistanceclosed xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;assistanceID&gt;
                &lt;agencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/agencyCode&gt;
                &lt;FAIN&gt;String&lt;/FAIN&gt;
                &lt;amendmentNumber&gt;0&lt;/amendmentNumber&gt;
            &lt;/assistanceID&gt;
            &lt;assistanceDates&gt;
                &lt;actionDate&gt;0000-00-00 00:00:00&lt;/actionDate&gt;
                &lt;periodOfPerformanceStartDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceStartDate&gt;
                &lt;periodOfPerformanceEndDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceEndDate&gt;
                &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
                &lt;FABSSentDate&gt;0000-00-00 00:00:00&lt;/FABSSentDate&gt;
            &lt;/assistanceDates&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;closedBy&gt;String&lt;/closedBy&gt;
                &lt;closedDate&gt;0000-00-00 00:00:00&lt;/closedDate&gt;
                &lt;closedStatus&gt;Y&lt;/closedStatus&gt;
                &lt;status&gt;String&lt;/status&gt;
                &lt;version&gt;String&lt;/version&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;/transactionInformation&gt;
        &lt;/assistanceclosed&gt;
    </code></pre>
    </details>
<p><small><a href="#">Back to top</a></small></p>

{% raw %} 
    <script> /* * * DON'T EDIT BELOW THIS LINE * * */ 
        (function() { 
            var fancyTreeScript = document.createElement('script'); fancyTreeScript.type = 'text/javascript'; 
            fancyTreeScript.async = false;
            fancyTreeScript.src = '//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/jquery.fancytree-all-deps.min.js'; 
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(fancyTreeScript);
        })();   
    </script>
{% endraw %}

## XML Schemas

<div id="fpds_doc_tree">
    <ul id="treeData">
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

## Previous FAADC Specifications
- [FAADC 1.0 WSDL ZIP File](https://www.fpds.gov/downloads/FAADC/FAADC_WSDL.zip)
- [FAADC Web Services Specifications V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Webservice_Integration_Specifications_(1).docx)
- [FAADC Help Guide V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Help_Guide_March_2022_update.pdf)
- [FAADC Validation Rules V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Validation_Rules.docx)
- [FAADC Data Dictionary V1.0](https://iae-prd-opengsa.s3.amazonaws.com/FAADC_Data_Dictionary.docx)
- FAADC Atom Feed Specifications V1.0
    <details>
    <summary>Introduction</summary>
    <p>
        FAADC has data reporting web services that provide access in real-time to FPDS central data repository. Atom Feeds provides access to the same data with real time feeds.
    </p>
    </details>
    <details>
    <summary>FAADC Atom feed format</summary>
    <p>
        FAADC Atom feed specification is based on the industry standard Atom 1.0 format RFC4287 as defined by Internet Engineering Task Force (IETF) in December 2005.<br>
        FAADC Assistance data will follow FAADC Version 1.0 Assistance specifications.
    </p>
    </details>
    <details>
    <summary>Feed XML specification</summary>
    <pre>
    <code class="xml">
        &lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot;&gt;
            &lt;title&gt;FAADC matching assistance records for the search query : &lt;![CDATA[: recovery]]&gt;&lt;/title&gt;
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
                &lt;content xmlns:ns1=&quot;https://www.fpds.gov&quot; type=&quot;application/xml&quot;&gt; 
                    ... Assistance XML
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
    <summary>Assistance XML</summary>
    <pre>
    <code class="xml">
        &lt;assistance xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;assistanceID&gt;
                &lt;agencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/agencyCode&gt;
                &lt;FAIN&gt;String&lt;/FAIN&gt;
                &lt;amendmentNumber&gt;0&lt;/amendmentNumber&gt;
            &lt;/assistanceID&gt;
            &lt;assistanceDates&gt;
                &lt;actionDate&gt;0000-00-00 00:00:00&lt;/actionDate&gt;
                &lt;periodOfPerformanceStartDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceStartDate&gt;
                &lt;periodOfPerformanceEndDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceEndDate&gt;
                &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
            &lt;/assistanceDates&gt;
            &lt;assistanceData&gt;
            &lt;assistanceIndicators&gt;
                &lt;businessFundsIndicator description=&quot;String&quot;&gt;String&lt;/businessFundsIndicator&gt;
                &lt;individualRecipientIndicator&gt;String&lt;/individualRecipientIndicator&gt;
                &lt;researchAndDevelopmentFundsIndicator&gt;String&lt;/researchAndDevelopmentFundsIndicator&gt;
            &lt;/assistanceIndicators&gt;
            &lt;assistanceCompetition&gt;
                &lt;competedOpportunity description=&quot;String&quot;&gt;String&lt;/competedOpportunity&gt;
                &lt;numberOfProposalsOrApplications&gt;String&lt;/numberOfProposalsOrApplications&gt;
            &lt;/assistanceCompetition&gt;
            &lt;actionType description=&quot;String&quot;&gt;String&lt;/actionType&gt;
            &lt;assistanceType description=&quot;String&quot;&gt;String&lt;/assistanceType&gt;
            &lt;assistanceDescription&gt;String&lt;/assistanceDescription&gt;
            &lt;recordType description=&quot;String&quot;&gt;String&lt;/recordType&gt;
            &lt;typeOfFundsCode description=&quot;String&quot;&gt;String&lt;/typeOfFundsCode&gt;
            &lt;/assistanceData&gt;
            &lt;dollarValues&gt;
                &lt;federalActionObligationAmount&gt;3.1415&lt;/federalActionObligationAmount&gt;
                &lt;nonFederalFundingAmount&gt;3.1415&lt;/nonFederalFundingAmount&gt;
                &lt;totalFederalAwardValueAmount&gt;3.1415&lt;/totalFederalAwardValueAmount&gt;
                &lt;researchDollarValues&gt;
                    &lt;researchAndDevelopmentAmount&gt;3.1415&lt;/researchAndDevelopmentAmount&gt;
                    &lt;fellowshipsAndTraineeshipsAmount&gt;3.1415&lt;/fellowshipsAndTraineeshipsAmount&gt;
                    &lt;researchAndDevelopmentPlantAmount&gt;3.1415&lt;/researchAndDevelopmentPlantAmount&gt;
                    &lt;facilitiesAndEquipmentForInstructionAmount&gt;3.1415&lt;/facilitiesAndEquipmentForInstructionAmount&gt;
                    &lt;generalSupportForScienceAndEngineeringAmount&gt;3.1415&lt;/generalSupportForScienceAndEngineeringAmount&gt;
                    &lt;otherActivitiesRelatedToScienceAndEngineeringAmount&gt;3.1415&lt;/otherActivitiesRelatedToScienceAndEngineeringAmount&gt;
                    &lt;allOtherActivitiesNotRelatedToScienceAndEngineeringAmount&gt;3.1415&lt;/allOtherActivitiesNotRelatedToScienceAndEngineeringAmount&gt;
                &lt;/researchDollarValues&gt;
            &lt;/dollarValues&gt;
            &lt;providerInformation&gt;
                &lt;awardingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/awardingSubTierAgencyCode&gt;
                &lt;awardingOfficeCode&gt;String&lt;/awardingOfficeCode&gt;
                &lt;fundingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingSubTierAgencyCode&gt;
                &lt;fundingOfficeCode name=&quot;String&quot;&gt;String&lt;/fundingOfficeCode&gt;
            &lt;/providerInformation&gt;
            &lt;programInformation&gt;
            &lt;CFDANumber&gt;00.000&lt;/CFDANumber&gt;
            &lt;CFDAProgramTitle&gt;String&lt;/CFDAProgramTitle&gt;
            &lt;/programInformation&gt;
            &lt;placeOfPerformance&gt;
                &lt;PPOPCode&gt;String&lt;/PPOPCode&gt;
                &lt;PPOPDescription&gt;String&lt;/PPOPDescription&gt;
                &lt;PPOPCountryCode&gt;String&lt;/PPOPCountryCode&gt;
                &lt;PPOPCountryName&gt;String&lt;/PPOPCountryName&gt;
                &lt;PPOPStateName&gt;String&lt;/PPOPStateName&gt;
                &lt;PPOPStateISO2Code&gt;String&lt;/PPOPStateISO2Code&gt;
                &lt;PPOPCountyName&gt;String&lt;/PPOPCountyName&gt;
                &lt;PPOPCountyFIPSCode&gt;String&lt;/PPOPCountyFIPSCode&gt;
                &lt;PPOPCityName&gt;String&lt;/PPOPCityName&gt;
                &lt;PPOPZIPCode&gt;String&lt;/PPOPZIPCode&gt;
                &lt;PPOPCongressionalDistrict&gt;String&lt;/PPOPCongressionalDistrict&gt;
            &lt;/placeOfPerformance&gt;
            &lt;recipient&gt;
                &lt;recipientDetails&gt;
                    &lt;vendorHeader&gt;
                        &lt;vendorName&gt;String&lt;/vendorName&gt;
                        &lt;vendorDoingAsBusinessName&gt;String&lt;/vendorDoingAsBusinessName&gt;
                        &lt;vendorEnabled&gt;false&lt;/vendorEnabled&gt;
                    &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                    &lt;vendorSocioEconomicIndicators&gt;
                        &lt;isAlaskanNativeOwnedCorporationOrFirm&gt;false&lt;/isAlaskanNativeOwnedCorporationOrFirm&gt;
                        &lt;isAmericanIndianOwned&gt;false&lt;/isAmericanIndianOwned&gt;
                        &lt;isIndianTribe&gt;false&lt;/isIndianTribe&gt;
                        &lt;isNativeHawaiianOwnedOrganizationOrFirm&gt;false&lt;/isNativeHawaiianOwnedOrganizationOrFirm&gt;
                        &lt;isTriballyOwnedFirm&gt;false&lt;/isTriballyOwnedFirm&gt;
                        &lt;isSmallBusiness&gt;false&lt;/isSmallBusiness&gt;
                        &lt;isVeteranOwned&gt;false&lt;/isVeteranOwned&gt;
                        &lt;isServiceRelatedDisabledVeteranOwnedBusiness&gt;false&lt;/isServiceRelatedDisabledVeteranOwnedBusiness&gt;
                        &lt;isWomenOwned&gt;false&lt;/isWomenOwned&gt;
                        &lt;minorityOwned&gt;
                            &lt;isMinorityOwned&gt;false&lt;/isMinorityOwned&gt;
                            &lt;isSubContinentAsianAmericanOwnedBusiness&gt;false&lt;/isSubContinentAsianAmericanOwnedBusiness&gt;
                            &lt;isAsianPacificAmericanOwnedBusiness&gt;false&lt;/isAsianPacificAmericanOwnedBusiness&gt;
                            &lt;isBlackAmericanOwnedBusiness&gt;false&lt;/isBlackAmericanOwnedBusiness&gt;
                            &lt;isHispanicAmericanOwnedBusiness&gt;false&lt;/isHispanicAmericanOwnedBusiness&gt;
                            &lt;isNativeAmericanOwnedBusiness&gt;false&lt;/isNativeAmericanOwnedBusiness&gt;
                            &lt;isOtherMinorityOwned&gt;false&lt;/isOtherMinorityOwned&gt;
                        &lt;/minorityOwned&gt;
                        &lt;isVerySmallBusiness&gt;false&lt;/isVerySmallBusiness&gt;
                        &lt;isWomenOwnedSmallBusiness&gt;false&lt;/isWomenOwnedSmallBusiness&gt;
                        &lt;isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;false&lt;/isEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureWomenOwnedSmallBusiness&gt;false&lt;/isJointVentureWomenOwnedSmallBusiness&gt;
                        &lt;isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;false&lt;/isJointVentureEconomicallyDisadvantagedWomenOwnedSmallBusiness&gt;
                    &lt;/vendorSocioEconomicIndicators&gt;
                    &lt;vendorBusinessTypes&gt;
                        &lt;isCommunityDevelopedCorporationOwnedFirm&gt;false&lt;/isCommunityDevelopedCorporationOwnedFirm&gt;
                        &lt;isLaborSurplusAreaFirm&gt;false&lt;/isLaborSurplusAreaFirm&gt;
                        &lt;federalGovernment&gt;
                            &lt;isFederalGovernment&gt;false&lt;/isFederalGovernment&gt;
                            &lt;isFederallyFundedResearchAndDevelopmentCorp&gt;false&lt;/isFederallyFundedResearchAndDevelopmentCorp&gt;
                            &lt;isFederalGovernmentAgency&gt;false&lt;/isFederalGovernmentAgency&gt;
                        &lt;/federalGovernment&gt;
                        &lt;isStateGovernment&gt;false&lt;/isStateGovernment&gt;
                        &lt;localGovernment&gt;
                            &lt;isLocalGovernment&gt;false&lt;/isLocalGovernment&gt;
                            &lt;isCityLocalGovernment&gt;false&lt;/isCityLocalGovernment&gt;
                            &lt;isCountyLocalGovernment&gt;false&lt;/isCountyLocalGovernment&gt;
                            &lt;isInterMunicipalLocalGovernment&gt;false&lt;/isInterMunicipalLocalGovernment&gt;
                            &lt;isLocalGovernmentOwned&gt;false&lt;/isLocalGovernmentOwned&gt;
                            &lt;isMunicipalityLocalGovernment&gt;false&lt;/isMunicipalityLocalGovernment&gt;
                            &lt;isSchoolDistrictLocalGovernment&gt;false&lt;/isSchoolDistrictLocalGovernment&gt;
                            &lt;isTownshipLocalGovernment&gt;false&lt;/isTownshipLocalGovernment&gt;
                        &lt;/localGovernment&gt;
                        &lt;isTribalGovernment&gt;false&lt;/isTribalGovernment&gt;
                        &lt;isForeignGovernment&gt;false&lt;/isForeignGovernment&gt;
                        &lt;businessOrOrganizationType&gt;
                        &lt;isCorporateEntityNotTaxExempt&gt;false&lt;/isCorporateEntityNotTaxExempt&gt;
                        &lt;isCorporateEntityTaxExempt&gt;false&lt;/isCorporateEntityTaxExempt&gt;
                        &lt;isPartnershipOrLimitedLiabilityPartnership&gt;false&lt;/isPartnershipOrLimitedLiabilityPartnership&gt;
                        &lt;isSolePropreitorship&gt;false&lt;/isSolePropreitorship&gt;
                        &lt;isSmallAgriculturalCooperative&gt;false&lt;/isSmallAgriculturalCooperative&gt;
                        &lt;isInternationalOrganization&gt;false&lt;/isInternationalOrganization&gt;
                        &lt;isOtherbusinessOrOrganization&gt;false&lt;/isOtherbusinessOrOrganization&gt;
                        &lt;isUSGovernmentEntity&gt;false&lt;/isUSGovernmentEntity&gt;
                        &lt;/businessOrOrganizationType&gt;
                    &lt;/vendorBusinessTypes&gt;
                    &lt;vendorLineOfBusiness&gt;
                        &lt;isArchitectureAndEngineering&gt;false&lt;/isArchitectureAndEngineering&gt;
                        &lt;isCommunityDevelopmentCorporation&gt;false&lt;/isCommunityDevelopmentCorporation&gt;
                        &lt;isConstructionFirm&gt;false&lt;/isConstructionFirm&gt;
                        &lt;isDomesticShelter&gt;false&lt;/isDomesticShelter&gt;
                        &lt;isEducationalInstitution&gt;false&lt;/isEducationalInstitution&gt;
                        &lt;isFoundation&gt;false&lt;/isFoundation&gt;
                        &lt;isHospital&gt;false&lt;/isHospital&gt;
                        &lt;isManufacturerOfGoods&gt;false&lt;/isManufacturerOfGoods&gt;
                        &lt;isResearchAndDevelopment&gt;false&lt;/isResearchAndDevelopment&gt;
                        &lt;isServiceProvider&gt;false&lt;/isServiceProvider&gt;
                        &lt;isVeterinaryHospital&gt;false&lt;/isVeterinaryHospital&gt;
                        &lt;isHispanicServicingInstitution&gt;false&lt;/isHispanicServicingInstitution&gt;
                    &lt;/vendorLineOfBusiness&gt;
                    &lt;vendorRelationshipWithFederalGovernment&gt;
                        &lt;receivesContracts&gt;false&lt;/receivesContracts&gt;
                        &lt;receivesGrants&gt;false&lt;/receivesGrants&gt;
                        &lt;receivesContractsAndGrants&gt;false&lt;/receivesContractsAndGrants&gt;
                    &lt;/vendorRelationshipWithFederalGovernment&gt;
                    &lt;typeOfGovernmentEntity&gt;
                        &lt;isAirportAuthority&gt;false&lt;/isAirportAuthority&gt;
                        &lt;isCouncilOfGovernments&gt;false&lt;/isCouncilOfGovernments&gt;
                        &lt;isHousingAuthoritiesPublicOrTribal&gt;false&lt;/isHousingAuthoritiesPublicOrTribal&gt;
                        &lt;isInterstateEntity&gt;false&lt;/isInterstateEntity&gt;
                        &lt;isPlanningCommission&gt;false&lt;/isPlanningCommission&gt;
                        &lt;isPortAuthority&gt;false&lt;/isPortAuthority&gt;
                        &lt;isTransitAuthority&gt;false&lt;/isTransitAuthority&gt;
                    &lt;/typeOfGovernmentEntity&gt;
                    &lt;vendorOrganizationFactors&gt;
                    &lt;isSubchapterSCorporation&gt;false&lt;/isSubchapterSCorporation&gt;
                    &lt;isLimitedLiabilityCorporation&gt;false&lt;/isLimitedLiabilityCorporation&gt;
                    &lt;isForeignOwnedAndLocated&gt;false&lt;/isForeignOwnedAndLocated&gt;
                    &lt;profitStructure&gt;
                        &lt;isForProfitOrganization&gt;false&lt;/isForProfitOrganization&gt;
                        &lt;isNonprofitOrganization&gt;false&lt;/isNonprofitOrganization&gt;
                        &lt;isOtherNotForProfitOrganization&gt;false&lt;/isOtherNotForProfitOrganization&gt;
                    &lt;/profitStructure&gt;
                    &lt;isShelteredWorkshop&gt;false&lt;/isShelteredWorkshop&gt;
                        &lt;organizationalType&gt;String&lt;/organizationalType&gt;
                        &lt;/vendorOrganizationFactors&gt;
                    &lt;typeOfEducationalEntity&gt;
                        &lt;is1862LandGrantCollege&gt;false&lt;/is1862LandGrantCollege&gt;
                        &lt;is1890LandGrantCollege&gt;false&lt;/is1890LandGrantCollege&gt;
                        &lt;is1994LandGrantCollege&gt;false&lt;/is1994LandGrantCollege&gt;
                        &lt;isHistoricallyBlackCollegeOrUniversity&gt;false&lt;/isHistoricallyBlackCollegeOrUniversity&gt;
                        &lt;isMinorityInstitution&gt;false&lt;/isMinorityInstitution&gt;
                        &lt;isPrivateUniversityOrCollege&gt;false&lt;/isPrivateUniversityOrCollege&gt;
                        &lt;isSchoolOfForestry&gt;false&lt;/isSchoolOfForestry&gt;
                        &lt;isStateControlledInstitutionofHigherLearning&gt;false&lt;/isStateControlledInstitutionofHigherLearning&gt;
                        &lt;isTribalCollege&gt;false&lt;/isTribalCollege&gt;
                        &lt;isVeterinaryCollege&gt;false&lt;/isVeterinaryCollege&gt;
                        &lt;isAlaskanNativeServicingInstitution&gt;false&lt;/isAlaskanNativeServicingInstitution&gt;
                        &lt;isNativeHawaiianServicingInstitution&gt;false&lt;/isNativeHawaiianServicingInstitution&gt;
                    &lt;/typeOfEducationalEntity&gt;
                    &lt;vendorCertifications&gt;
                        &lt;isDOTCertifiedDisadvantagedBusinessEnterprise&gt;false&lt;/isDOTCertifiedDisadvantagedBusinessEnterprise&gt;
                        &lt;isSelfCertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSelfCertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertifiedSmallDisadvantagedBusiness&gt;false&lt;/isSBACertifiedSmallDisadvantagedBusiness&gt;
                        &lt;isSBACertified8AProgramParticipant&gt;false&lt;/isSBACertified8AProgramParticipant&gt;
                        &lt;isSelfCertifiedHUBZoneJointVenture&gt;false&lt;/isSelfCertifiedHUBZoneJointVenture&gt;
                        &lt;isSBACertifiedHUBZone&gt;false&lt;/isSBACertifiedHUBZone&gt;
                        &lt;isSBACertified8AJointVenture&gt;false&lt;/isSBACertified8AJointVenture&gt;
                    &lt;/vendorCertifications&gt;
                    &lt;vendorLocation&gt;
                        &lt;streetAddress&gt;String&lt;/streetAddress&gt;
                        &lt;city&gt;String&lt;/city&gt;
                        &lt;state name=&quot;String&quot;&gt;String&lt;/state&gt;
                        &lt;ZIPCode city=&quot;String&quot;&gt;String&lt;/ZIPCode&gt;
                        &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                        &lt;phoneNo&gt;String&lt;/phoneNo&gt;
                        &lt;faxNo&gt;String&lt;/faxNo&gt;
                        &lt;congressionalDistrictCode&gt;String&lt;/congressionalDistrictCode&gt;
                        &lt;vendorLocationDisabledFlag&gt;false&lt;/vendorLocationDisabledFlag&gt;
                    &lt;/vendorLocation&gt;
                    &lt;vendorDUNSInformation&gt;
                        &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                        &lt;vendorName&gt;String&lt;/vendorName&gt;
                        &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                        &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                        &lt;domesticParentDUNSNumber&gt;&lt;/domesticParentDUNSNumber&gt;
                        &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                        &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                        &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                        &lt;cageCode&gt;String&lt;/cageCode&gt;
                    &lt;/vendorDUNSInformation&gt;
                    &lt;ccrRegistrationDetails&gt;
                    &lt;registrationDate&gt;0000-00-00 00:00:00&lt;/registrationDate&gt;
                    &lt;renewalDate&gt;0000-00-00 00:00:00&lt;/renewalDate&gt;
                    &lt;/ccrRegistrationDetails&gt;
                    &lt;/vendorSiteDetails&gt;
                &lt;/recipientDetails&gt;
                &lt;listOfBusinessTypes&gt;
                    &lt;businessTypes&gt;
                        &lt;BusinessTypesCode&gt;String&lt;/BusinessTypesCode&gt;
                        &lt;BusinessTypesDescription&gt;String&lt;/BusinessTypesDescription&gt;
                    &lt;/businessTypes&gt;
                &lt;/listOfBusinessTypes&gt;
                &lt;smallBusinessIndicator description=&quot;String&quot;&gt;String&lt;/smallBusinessIndicator&gt;
                &lt;SAMException description=&quot;String&quot;&gt;String&lt;/SAMException&gt;
            &lt;/recipient&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;status&gt;String&lt;/status&gt;
                &lt;version&gt;String&lt;/version&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;/transactionInformation&gt;
        &lt;/assistance&gt;
    </code></pre>
    </details>
    <details>
    <summary>Assistance Deleted XML</summary>
    <pre>
    <code class="xml">
        &lt;assistance xmlns:ns1=&quot;https://www.fpds.gov/FPDS&quot;&gt;
            &lt;assistanceID&gt;
                &lt;agencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/agencyCode&gt;
                &lt;URI&gt;String&lt;/URI&gt;
            &lt;/assistanceID&gt;
            &lt;assistanceDates&gt;
                &lt;actionDate&gt;0000-00-00 00:00:00&lt;/actionDate&gt;
                &lt;periodOfPerformanceStartDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceStartDate&gt;
                &lt;periodOfPerformanceEndDate&gt;0000-00-00 00:00:00&lt;/periodOfPerformanceEndDate&gt;
                &lt;fiscalYear&gt;0000&lt;/fiscalYear&gt;
                &lt;FABSSentDate&gt;0000-00-00 00:00:00&lt;/FABSSentDate&gt;
            &lt;/assistanceDates&gt;
            &lt;assistanceData&gt;
                &lt;assistanceIndicators&gt;
                    &lt;businessFundsIndicator description=&quot;String&quot;&gt;String&lt;/businessFundsIndicator&gt;
                    &lt;correctionDeleteIndicator&gt;String&lt;/correctionDeleteIndicator&gt;
                    &lt;individualRecipientIndicator&gt;String&lt;/individualRecipientIndicator&gt;
                &lt;/assistanceIndicators&gt;
                &lt;actionType description=&quot;String&quot;&gt;String&lt;/actionType&gt;
                &lt;assistanceType description=&quot;String&quot;&gt;String&lt;/assistanceType&gt;
                &lt;assistanceDescription&gt;String&lt;/assistanceDescription&gt;
                &lt;recordType description=&quot;String&quot;&gt;String&lt;/recordType&gt;
            &lt;/assistanceData&gt;
            &lt;dollarValues&gt;
                &lt;federalActionObligationAmount&gt;3.1415&lt;/federalActionObligationAmount&gt;
                &lt;nonFederalFundingAmount&gt;3.1415&lt;/nonFederalFundingAmount&gt;
                &lt;totalFederalAwardValueAmount&gt;3.1415&lt;/totalFederalAwardValueAmount&gt;
            &lt;/dollarValues&gt;
            &lt;providerInformation&gt;
                &lt;awardingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/awardingSubTierAgencyCode&gt;
                &lt;awardingOfficeCode name=&quot;String&quot;&gt;String&lt;/awardingOfficeCode&gt;
                &lt;fundingSubTierAgencyCode name=&quot;String&quot; departmentID=&quot;String&quot; departmentName=&quot;String&quot;&gt;String&lt;/fundingSubTierAgencyCode&gt;
                &lt;fundingOfficeCode name=&quot;String&quot;&gt;String&lt;/fundingOfficeCode&gt;
            &lt;/providerInformation&gt;
            &lt;programInformation&gt;
                &lt;CFDANumber&gt;3.1415&lt;/CFDANumber&gt;
            &lt;/programInformation&gt;
            &lt;placeOfPerformance&gt;
                &lt;PPOPCode&gt;String&lt;/PPOPCode&gt;
                &lt;PPOPDescription&gt;String&lt;/PPOPDescription&gt;
                &lt;PPOPCountryCode&gt;String&lt;/PPOPCountryCode&gt;
                &lt;PPOPCountryName&gt;String&lt;/PPOPCountryName&gt;
                &lt;PPOPStateName&gt;String&lt;/PPOPStateName&gt;
                &lt;PPOPStateISO2Code&gt;String&lt;/PPOPStateISO2Code&gt;
            &lt;/placeOfPerformance&gt;
            &lt;recipient&gt;
                &lt;recipientDetails&gt;
                &lt;vendorHeader&gt;
                    &lt;vendorName&gt;String&lt;/vendorName&gt;
                &lt;/vendorHeader&gt;
                    &lt;vendorSiteDetails&gt;
                        &lt;vendorLocation&gt;
                            &lt;countryCode name=&quot;String&quot;&gt;String&lt;/countryCode&gt;
                        &lt;/vendorLocation&gt;
                        &lt;vendorDUNSInformation&gt;
                            &lt;DUNSNumber&gt;String&lt;/DUNSNumber&gt;
                            &lt;vendorName&gt;String&lt;/vendorName&gt;
                            &lt;parentDUNSNumber&gt;String&lt;/parentDUNSNumber&gt;
                            &lt;parentDUNSName&gt;String&lt;/parentDUNSName&gt;
                            &lt;domesticParentDUNSNumber&gt;&lt;/domesticParentDUNSNumber&gt;
                            &lt;domesticParentDUNSName&gt;String&lt;/domesticParentDUNSName&gt;
                            &lt;globalParentDUNSNumber&gt;String&lt;/globalParentDUNSNumber&gt;
                            &lt;globalParentDUNSName&gt;String&lt;/globalParentDUNSName&gt;
                            &lt;cageCode&gt;String&lt;/cageCode&gt;
                        &lt;/vendorDUNSInformation&gt;
                    &lt;/vendorSiteDetails&gt;
                &lt;/recipientDetails&gt;
                &lt;listOfBusinessTypes&gt;
                    &lt;businessTypes&gt;
                        &lt;BusinessTypesCode&gt;String&lt;/BusinessTypesCode&gt;
                        &lt;BusinessTypesDescription&gt;String&lt;/BusinessTypesDescription&gt;
                    &lt;/businessTypes&gt;
                &lt;/listOfBusinessTypes&gt;
                &lt;smallBusinessIndicator description=&quot;String&quot;&gt;String&lt;/smallBusinessIndicator&gt;
                &lt;SAMException description=&quot;String&quot;&gt;String&lt;/SAMException&gt;
            &lt;/recipient&gt;
            &lt;transactionInformation&gt;
                &lt;createdBy&gt;String&lt;/createdBy&gt;
                &lt;createdDate&gt;0000-00-00 00:00:00&lt;/createdDate&gt;
                &lt;lastModifiedBy&gt;String&lt;/lastModifiedBy&gt;
                &lt;lastModifiedDate&gt;0000-00-00 00:00:00&lt;/lastModifiedDate&gt;
                &lt;status&gt;String&lt;/status&gt;
                &lt;version&gt;String&lt;/version&gt;
                &lt;approvedBy&gt;String&lt;/approvedBy&gt;
                &lt;approvedDate&gt;0000-00-00 00:00:00&lt;/approvedDate&gt;
            &lt;/transactionInformation&gt;
        &lt;/assistance&gt;
    </code></pre>
    </details>
<p><small><a href="#">Back to top</a></small></p>

## Contact Us
- Reach out to the SAM.gov team at [fsd.gov](http://www.fsd.gov) for inquiries and help desk support.
- We encourage you to join our Technical Interface Community (TIC) by sending an email to [IAE_Admin@gsa.gov](mailto:IAE_Admin@gsa.gov). The TIC meets every one to two months.
<p><small><a href="#">Back to top</a></small></p>

## Change Log

Date | Version | Description
------|---------------|---------
4/12/2022 | 1.0 | Initial Draft - SAM.gov Assistance Award Data (Formerly FPDS.gov)

<p><small><a href="#">Back to top</a></small></p>
