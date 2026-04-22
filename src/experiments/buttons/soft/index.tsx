import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SoftRose from './SoftRose'
import SoftOrange from './SoftOrange'
import SoftAmber from './SoftAmber'
import SoftLime from './SoftLime'
import SoftTeal from './SoftTeal'
import SoftSky from './SoftSky'
import SoftBlue from './SoftBlue'
import SoftIndigo from './SoftIndigo'
import SoftFuchsia from './SoftFuchsia'
import SoftPink from './SoftPink'

const CAT = 'buttons'

/**
 * Buttons - Soft
 * @returns {JSX.Element}
 */
export default function ButtonsSoftIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-soft-rose" label="Rose" category={CAT} size="sm">
          <SoftRose />
        </ExampleBox>
        <ExampleBox id="btn-soft-orange" label="Orange" category={CAT} size="sm">
          <SoftOrange />
        </ExampleBox>
        <ExampleBox id="btn-soft-amber" label="Amber" category={CAT} size="sm">
          <SoftAmber />
        </ExampleBox>
        <ExampleBox id="btn-soft-lime" label="Lime" category={CAT} size="sm">
          <SoftLime />
        </ExampleBox>
        <ExampleBox id="btn-soft-teal" label="Teal" category={CAT} size="sm">
          <SoftTeal />
        </ExampleBox>
        <ExampleBox id="btn-soft-sky" label="Sky" category={CAT} size="sm">
          <SoftSky />
        </ExampleBox>
        <ExampleBox id="btn-soft-blue" label="Blue" category={CAT} size="sm">
          <SoftBlue />
        </ExampleBox>
        <ExampleBox id="btn-soft-indigo" label="Indigo" category={CAT} size="sm">
          <SoftIndigo />
        </ExampleBox>
        <ExampleBox id="btn-soft-fuchsia" label="Fuchsia" category={CAT} size="sm">
          <SoftFuchsia />
        </ExampleBox>
        <ExampleBox id="btn-soft-pink" label="Pink" category={CAT} size="sm">
          <SoftPink />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
