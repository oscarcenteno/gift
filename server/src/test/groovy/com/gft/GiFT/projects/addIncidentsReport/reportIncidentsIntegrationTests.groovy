package com.gft.GiFT.projects.addIncidentsReport

import com.gft.GiFT.AbstractIntegrationSpecification
import com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs.IncidentsReport
import org.springframework.http.HttpStatus
import org.springframework.test.context.jdbc.*

@SqlGroup([
        @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "classpath:/test-sql/projects/addIncidentsReport/before.sql"),
        @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "classpath:/test-sql/projects/addIncidentsReport/after.sql")
])
class reportIncidentsIntegrationTests extends AbstractIntegrationSpecification{
//    def "Create Incidents report"() {
//        given:
//        def incidentsReport = getNewIncidentsReport()
//
//        when:
//        def response = postForEntity("${baseUrl}/projects/incidents", incidentsReport, IncidentsReport.class)
//
//        then:
//        response.statusCode == HttpStatus.CREATED
//    }

    IncidentsReport getNewIncidentsReport() {
        return new IncidentsReport(
                projectId: 1,
                setReportDate: "2017-08-31",
                totalIncidents: 3,
                rationale  :'The release caused issues'

        )
    }
}