import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import ElevNone from './ElevNone'
import ElevXs from './ElevXs'
import ElevSm from './ElevSm'
import ElevMd from './ElevMd'
import ElevLg from './ElevLg'
import ElevXl from './ElevXl'
import Elev2xl from './Elev2xl'
import ElevInner from './ElevInner'

const CAT = 'shadows'

/**
 * Shadows - Elevation Scale
 * @returns {JSX.Element}
 */
export default function ShadowsElevationScaleIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="shadow-none" label="None" category={CAT} size="auto">
          <ElevNone />
        </ExampleBox>
        <ExampleBox id="shadow-xs" label="XS" category={CAT} size="auto">
          <ElevXs />
        </ExampleBox>
        <ExampleBox id="shadow-sm" label="SM" category={CAT} size="auto">
          <ElevSm />
        </ExampleBox>
        <ExampleBox id="shadow-md" label="MD" category={CAT} size="auto">
          <ElevMd />
        </ExampleBox>
        <ExampleBox id="shadow-lg" label="LG" category={CAT} size="auto">
          <ElevLg />
        </ExampleBox>
        <ExampleBox id="shadow-xl" label="XL" category={CAT} size="auto">
          <ElevXl />
        </ExampleBox>
        <ExampleBox id="shadow-2xl" label="2XL" category={CAT} size="auto">
          <Elev2xl />
        </ExampleBox>
        <ExampleBox id="shadow-inner" label="Inner" category={CAT} size="auto">
          <ElevInner />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
