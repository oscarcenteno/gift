package com.gft.GiFT.projects.addIncidentsReport.businessLogic;
import com.gft.GiFT.projects.addIncidentsReport.businessLogic.inputs.IncidentsReport;

import java.text.ParseException;

public interface ReportIncidentsService {
    IncidentsReport createIncidentsReport(IncidentsReport releaseSnap) throws ParseException;

}

