package com.gft.GiFT.projects.addIncidentsReport.dataAccess;

import com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs.IncidentsReport;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ReportIncidentsRepository extends JpaRepository<IncidentsReport, Integer> {
}
