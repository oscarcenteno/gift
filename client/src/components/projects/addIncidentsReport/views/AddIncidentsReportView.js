import React from 'react';

import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import DateTime from 'grommet/components/DateTime';
import Layer from 'grommet/components/Layer';

const AddIncidentsReportView = ({ viewModel }) => {
  const { errors } = viewModel;
  const { formCallbacks } = viewModel;
  const { projectName } = viewModel;
  const { reportDate } = viewModel;
  const { totalIncidents } = viewModel;
  const { rationale } = viewModel;

  return (
    <Layer align='center' closer={true} onClose={formCallbacks.onClose}>

      <Box pad={{ vertical: 'large', horizontal: 'small' }}>

        <Heading>Add an incidents report</Heading>

        <Form compact={false}>
          <FormFields>
            <fieldset>

              <FormField label='Report date' htmlFor="reportDateInput" error={errors.reportDate}>
                <DateTime id='reportDateInput' format='YYYY-MM-DD' value={reportDate} onChange={formCallbacks.onReportDateChange} />
              </FormField>

              <FormField label='Total incidents' htmlFor='totalIncidentsInputId' error={errors.totalIncidents}>
                <NumberInput id='totalIncidentsInputId' step={1} min={1} max={100} value={totalIncidents} onChange={formCallbacks.onTotalIncidentsChange} />
              </FormField>

              <FormField label='Rationale' htmlFor="rationaleInputId" error={errors.rationale}>
                <textarea rows={4} id='rationaleInputId' value={rationale} onChange={formCallbacks.onRationaleChange} />
              </FormField>

            </fieldset>
          </FormFields>

          <Footer pad={{ "vertical": "medium" }}>
            <Box>
              <Button label='Add' type='submit' primary={true} onClick={formCallbacks.onClick} />
            </Box>
            <Box pad={{ horizontal: 'small' }}>
              <Button label='Cancel' secondary={true} onClick={formCallbacks.onClose} />
            </Box>
          </Footer>
        </Form>
      </Box>
    </Layer>
  );
};

export default AddIncidentsReportView;