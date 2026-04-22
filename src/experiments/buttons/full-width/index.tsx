import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FwPrimary from './FwPrimary'
import FwOutline from './FwOutline'
import FwGoogle from './FwGoogle'

const CAT = 'buttons'

/**
 * Buttons - Full Width
 * @returns {JSX.Element}
 */
export default function ButtonsFullWidthIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-fw-primary" label="Full-width primary" category={CAT} size="auto" className="w-64">
          <FwPrimary />
        </ExampleBox>
        <ExampleBox id="btn-fw-outline" label="Full-width outline" category={CAT} size="auto" className="w-64">
          <FwOutline />
        </ExampleBox>
        <ExampleBox id="btn-fw-google" label="Full-width Google" category={CAT} size="auto" className="w-64">
          <FwGoogle />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
