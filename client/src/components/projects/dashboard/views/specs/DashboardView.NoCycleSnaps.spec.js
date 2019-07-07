import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DashboardView from '../DashboardView';

describe('DashboardView when project does not have cycle snaps', () => {

    let viewModel;
    let actual;

    it('should render dashboard with no cycle snaps', () => {
        const onRequestAddCycleSnap = jest.fn();
        const onAddCycleSnapSubmit = jest.fn();
        const onAddCycleSnapCancel = jest.fn();

        viewModel = {
            projectId: '2',
            project: getProjectWithNoCycleSnaps(),
            dashboardCallbacks: {
                onRequestAddCycleSnap: onRequestAddCycleSnap,
                onAddCycleSnapSubmit: onAddCycleSnapSubmit,
                onClose: onAddCycleSnapCancel
            },

            errorMessage: '',
            addCycleSnap: false,
            successNotificationOnAdd: undefined,
            failureNotificationOnAdd: undefined
        };

        const renderer = ShallowRenderer.createRenderer();
        actual = renderer.render(<DashboardView viewModel={viewModel} />);

        expect(actual).toMatchSnapshot();
    });

    function getProjectWithNoCycleSnaps() {
        // Test data from http://localhost:8080/api/v1/projects/2/dashboard 
        return { "name": "BAAM", "cycleSnaps": [] };
    }

});