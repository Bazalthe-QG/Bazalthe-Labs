import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SolidRed from './SolidRed'
import SolidOrange from './SolidOrange'
import SolidAmber from './SolidAmber'
import SolidLime from './SolidLime'
import SolidGreen from './SolidGreen'
import SolidTeal from './SolidTeal'
import SolidSky from './SolidSky'
import SolidBlue from './SolidBlue'
import SolidIndigo from './SolidIndigo'
import SolidViolet from './SolidViolet'
import SolidFuchsia from './SolidFuchsia'
import SolidPink from './SolidPink'

const CAT = 'badges'

/**
 * Badges - Solid Spectrum
 * @returns {JSX.Element}
 */
export default function BadgesSolidSpectrumIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-solid-red" label="Red" category={CAT} size="sm">
          <SolidRed />
        </ExampleBox>
        <ExampleBox id="badges-solid-orange" label="Orange" category={CAT} size="sm">
          <SolidOrange />
        </ExampleBox>
        <ExampleBox id="badges-solid-amber" label="Amber" category={CAT} size="sm">
          <SolidAmber />
        </ExampleBox>
        <ExampleBox id="badges-solid-lime" label="Lime" category={CAT} size="sm">
          <SolidLime />
        </ExampleBox>
        <ExampleBox id="badges-solid-green" label="Green" category={CAT} size="sm">
          <SolidGreen />
        </ExampleBox>
        <ExampleBox id="badges-solid-teal" label="Teal" category={CAT} size="sm">
          <SolidTeal />
        </ExampleBox>
        <ExampleBox id="badges-solid-sky" label="Sky" category={CAT} size="sm">
          <SolidSky />
        </ExampleBox>
        <ExampleBox id="badges-solid-blue" label="Blue" category={CAT} size="sm">
          <SolidBlue />
        </ExampleBox>
        <ExampleBox id="badges-solid-indigo" label="Indigo" category={CAT} size="sm">
          <SolidIndigo />
        </ExampleBox>
        <ExampleBox id="badges-solid-violet" label="Violet" category={CAT} size="sm">
          <SolidViolet />
        </ExampleBox>
        <ExampleBox id="badges-solid-fuchsia" label="Fuchsia" category={CAT} size="sm">
          <SolidFuchsia />
        </ExampleBox>
        <ExampleBox id="badges-solid-pink" label="Pink" category={CAT} size="sm">
          <SolidPink />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
