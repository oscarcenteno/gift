package com.gft.GiFT.projects.addIncidentsReport.newReportValidation

import com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs.IncidentsReport
import com.gft.GiFT.projects.addIncidentsReport.businessLogic.NewReportValidation
import spock.lang.Specification

class ValidateTests extends Specification {

    IncidentsReport newReport

    def setup() {
        newReport = createValidReport()
    }

    def createValidReport() {
        IncidentsReport newReport = new IncidentsReport()
        newReport.projectId = 1
        newReport.reportDate = "2017-08-31"
        newReport.totalIncidents = 3
        newReport.rationale = 'The release caused issues'

        return newReport
    }

    def "All filed are valid"() {
        when:
        NewReportValidation.validate(newReport)

        then:
        notThrown IllegalArgumentException
    }

    def "Report date is required"() {
        setup:
        newReport.reportDate = ""

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }

//    def "Report date should be a valid one"() {
//        setup:
//        newReport.reportDate = "09-04-2000"
//
//        when:
//        NewReportValidation.isValidDate(newReport)
//
//        then:
//        thrown IllegalArgumentException
//    }

//    def "Total incidents is required for empty value"() {
//        setup:
//        newReport.totalIncidents
//
//        when:
//        NewReportValidation.isValidDate(newReport)
//
//        then:
//        thrown IllegalArgumentException
//    }

    def "Total incidents min is 1"() {
        setup:

        newReport.totalIncidents = 0

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }

    def "Total incidents of 1 is valid "() {
        setup:

        newReport.totalIncidents = 1

        when:
        NewReportValidation.validate(newReport)

        then:
        notThrown IllegalArgumentException
    }

    def "Total incidents max is 100 "() {
        setup:

        newReport.totalIncidents = 101

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }

    def "Total incidents of 100 is valid"() {
        setup:

        newReport.totalIncidents = 100

        when:
        NewReportValidation.validate(newReport)

        then:
        notThrown IllegalArgumentException
    }

    def "Rationale is required"() {
        setup:

        newReport.rationale = ""

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }

    def "A rationale with whitespaces is not valid"() {
        setup:

        newReport.rationale = "   "

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }

    def "Rationale has a max length of 1000 characters"() {
        setup:

        newReport.rationale = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\"qq\"  "

        when:
        NewReportValidation.validate(newReport)

        then:
        thrown IllegalArgumentException
    }
}
