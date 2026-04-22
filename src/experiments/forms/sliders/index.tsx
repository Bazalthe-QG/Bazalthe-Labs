import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import RangeSlider from './RangeSlider'
import DoubleRange from './DoubleRange'

const CAT = 'forms'

/**
 * Forms - Sliders
 * @returns {JSX.Element}
 */
export default function FormsSlidersIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-range" label="Range slider" category={CAT} size="sm">
          <RangeSlider />
        </ExampleBox>
        <ExampleBox id="form-range2" label="Double range" category={CAT} size="sm">
          <DoubleRange />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
