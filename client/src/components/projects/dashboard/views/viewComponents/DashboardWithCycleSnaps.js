import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import CycleSnapsTable from './CycleSnapsTable'

const DashboardWithCycleSnaps = ({ viewModel, elements }) => {
  const { dashboardCallbacks } = viewModel;
  const { name } = viewModel.project;

  return (<Box>
    <Heading>Dashboard: {name}</Heading>
    <Footer>
      <Box direction='row'
        pad={{ "between": "medium" }}>
        <Button
          label='Add cycle snap'
          onClick={dashboardCallbacks.onRequestAddCycleSnap}
          onSubmit={dashboardCallbacks.onAddCycleSnapSubmit}
          primary={true} />

        <Button
          label='Add release snap'
          onClick={dashboardCallbacks.onRequestAddReleaseSnap}
          onSubmit={dashboardCallbacks.onAddReleaseSnapSubmit}
          primary={true} />

        <Button
          label='Add incidents report'
          onClick={dashboardCallbacks.onRequestAddIncidentsReport}
          onSubmit={dashboardCallbacks.onAddIncidentsReportSubmit}
          primary={true} />

      </Box>
    </Footer>

    <CycleSnapsTable viewModel={viewModel} />

    {elements.addCycleSnapLayer}
    {elements.addReleaseSnapLayer}
    {elements.addIncidentsReportLayer}

    {elements.successNotification}
    {elements.failureNotification}
  </Box>
  );
}
export default DashboardWithCycleSnaps;