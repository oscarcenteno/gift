package com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table( name = "t_incidents_report" )
public class IncidentsReport {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "report_id")
    private int id;

    @Column(name = "report_date", columnDefinition = "DATE", nullable = false)
    private String reportDate;

    @Column(name = "total_incidents", columnDefinition = "INT", nullable = false)
    private int totalIncidents;

    @Column(name = "rationale_issues",  nullable = false)
    private String rationale;

    private int projectId;


}
