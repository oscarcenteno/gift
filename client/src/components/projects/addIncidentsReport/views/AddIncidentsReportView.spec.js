import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import AddIncidentsReportView from './AddIncidentsReportView';

describe('ReportIncidentsView.spec', () => {

    it('should render the correct data values and validation errors', () => {
        const viewModel = getViewModelWithErrors();
        const renderer = ShallowRenderer.createRenderer();
        const actual = renderer.render(<AddIncidentsReportView viewModel={viewModel} />);

        expect(actual).toMatchSnapshot();
    });

    function getViewModelWithErrors() {
        return {
            projectName: 'Exceptional Project',
            reportDate: '2017-01-02',
            totalIncidents: 2,
            rationale: 'Some issues',
            errors: {
                reportDate: 'error reportDate',
                totalIncidents: 'error totalIncidents',
                rationale: 'error rationale',
            },
            formCallbacks: {
                onReportDateChange: jest.fn(),
                onTotalIncidentsChange: jest.fn(),
                onRationaleChange: jest.fn(),
                onClick: jest.fn(),
                onClose: jest.fn()
            }
        };
    }
});