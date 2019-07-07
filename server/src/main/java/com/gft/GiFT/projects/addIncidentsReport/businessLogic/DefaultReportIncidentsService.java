package com.gft.GiFT.projects.addIncidentsReport.businessLogic;

import com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs.IncidentsReport;
import com.gft.GiFT.projects.addIncidentsReport.dataAccess.ReportIncidentsRepository;
import org.springframework.stereotype.Service;

import java.text.ParseException;

@Service
public class DefaultReportIncidentsService implements ReportIncidentsService {
    private final ReportIncidentsRepository reportRepository;

    public DefaultReportIncidentsService(ReportIncidentsRepository reportRepository){
        this.reportRepository= reportRepository;
    }

    @Override
    public IncidentsReport createIncidentsReport(IncidentsReport newReport) throws ParseException {
        NewReportValidation.validate(newReport);
        reportRepository.save(newReport);
        return newReport;
    }
}
