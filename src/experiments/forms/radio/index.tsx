import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Radio from './Radio'
import PlanRadio from './PlanRadio'

const CAT = 'forms'

/**
 * Forms - Radio
 * @returns {JSX.Element}
 */
export default function FormsRadioIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-radio" label="Radio" category={CAT} size="sm">
          <Radio />
        </ExampleBox>
        <ExampleBox id="form-plan" label="Plan radio cards" category={CAT} size="sm">
          <PlanRadio />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
