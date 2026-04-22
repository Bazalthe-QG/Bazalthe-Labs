import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import StepWizard from './StepWizard'

const CAT = 'forms'

/**
 * Forms - Step Wizard
 * @returns {JSX.Element}
 */
export default function FormsStepWizardIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-wizard" label="3-step wizard" category={CAT} size="auto" className="w-96">
          <StepWizard />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
