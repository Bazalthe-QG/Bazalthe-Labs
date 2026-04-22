import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Toggle from './Toggle'
import LargeToggle from './LargeToggle'
import Checkbox from './Checkbox'
import Indeterminate from './Indeterminate'

const CAT = 'forms'

/**
 * Forms - Toggles Checks
 * @returns {JSX.Element}
 */
export default function FormsTogglesChecksIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-toggle" label="Toggle" category={CAT} size="sm">
          <Toggle />
        </ExampleBox>
        <ExampleBox id="form-toggle-lg" label="Large toggle" category={CAT} size="sm">
          <LargeToggle />
        </ExampleBox>
        <ExampleBox id="form-checkbox" label="Checkbox" category={CAT} size="sm">
          <Checkbox />
        </ExampleBox>
        <ExampleBox id="form-checkbox-ind" label="Indeterminate" category={CAT} size="sm">
          <Indeterminate />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
