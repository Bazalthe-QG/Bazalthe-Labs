import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import ColorRose from './ColorRose'
import ColorOrange from './ColorOrange'
import ColorAmber from './ColorAmber'
import ColorLime from './ColorLime'
import ColorTeal from './ColorTeal'
import ColorSky from './ColorSky'
import ColorBlue from './ColorBlue'
import ColorIndigo from './ColorIndigo'
import ColorFuchsia from './ColorFuchsia'
import ColorPink from './ColorPink'

const CAT = 'buttons'

/**
 * Buttons - Colors
 * @returns {JSX.Element}
 */
export default function ButtonsColorsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-color-rose" label="Rose" category={CAT} size="sm">
          <ColorRose />
        </ExampleBox>
        <ExampleBox id="btn-color-orange" label="Orange" category={CAT} size="sm">
          <ColorOrange />
        </ExampleBox>
        <ExampleBox id="btn-color-amber" label="Amber" category={CAT} size="sm">
          <ColorAmber />
        </ExampleBox>
        <ExampleBox id="btn-color-lime" label="Lime" category={CAT} size="sm">
          <ColorLime />
        </ExampleBox>
        <ExampleBox id="btn-color-teal" label="Teal" category={CAT} size="sm">
          <ColorTeal />
        </ExampleBox>
        <ExampleBox id="btn-color-sky" label="Sky" category={CAT} size="sm">
          <ColorSky />
        </ExampleBox>
        <ExampleBox id="btn-color-blue" label="Blue" category={CAT} size="sm">
          <ColorBlue />
        </ExampleBox>
        <ExampleBox id="btn-color-indigo" label="Indigo" category={CAT} size="sm">
          <ColorIndigo />
        </ExampleBox>
        <ExampleBox id="btn-color-fuchsia" label="Fuchsia" category={CAT} size="sm">
          <ColorFuchsia />
        </ExampleBox>
        <ExampleBox id="btn-color-pink" label="Pink" category={CAT} size="sm">
          <ColorPink />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
