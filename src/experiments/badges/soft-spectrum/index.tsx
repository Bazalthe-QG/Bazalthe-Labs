import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SoftRed from './SoftRed'
import SoftOrange from './SoftOrange'
import SoftAmber from './SoftAmber'
import SoftLime from './SoftLime'
import SoftGreen from './SoftGreen'
import SoftTeal from './SoftTeal'
import SoftSky from './SoftSky'
import SoftBlue from './SoftBlue'
import SoftIndigo from './SoftIndigo'
import SoftViolet from './SoftViolet'
import SoftFuchsia from './SoftFuchsia'
import SoftPink from './SoftPink'

const CAT = 'badges'

/**
 * Badges - Soft Spectrum
 * @returns {JSX.Element}
 */
export default function BadgesSoftSpectrumIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-soft-red" label="Red" category={CAT} size="sm">
          <SoftRed />
        </ExampleBox>
        <ExampleBox id="badges-soft-orange" label="Orange" category={CAT} size="sm">
          <SoftOrange />
        </ExampleBox>
        <ExampleBox id="badges-soft-amber" label="Amber" category={CAT} size="sm">
          <SoftAmber />
        </ExampleBox>
        <ExampleBox id="badges-soft-lime" label="Lime" category={CAT} size="sm">
          <SoftLime />
        </ExampleBox>
        <ExampleBox id="badges-soft-green" label="Green" category={CAT} size="sm">
          <SoftGreen />
        </ExampleBox>
        <ExampleBox id="badges-soft-teal" label="Teal" category={CAT} size="sm">
          <SoftTeal />
        </ExampleBox>
        <ExampleBox id="badges-soft-sky" label="Sky" category={CAT} size="sm">
          <SoftSky />
        </ExampleBox>
        <ExampleBox id="badges-soft-blue" label="Blue" category={CAT} size="sm">
          <SoftBlue />
        </ExampleBox>
        <ExampleBox id="badges-soft-indigo" label="Indigo" category={CAT} size="sm">
          <SoftIndigo />
        </ExampleBox>
        <ExampleBox id="badges-soft-violet" label="Violet" category={CAT} size="sm">
          <SoftViolet />
        </ExampleBox>
        <ExampleBox id="badges-soft-fuchsia" label="Fuchsia" category={CAT} size="sm">
          <SoftFuchsia />
        </ExampleBox>
        <ExampleBox id="badges-soft-pink" label="Pink" category={CAT} size="sm">
          <SoftPink />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
