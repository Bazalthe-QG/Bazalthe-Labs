import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import VioletGlow from './VioletGlow'
import BlueGlow from './BlueGlow'
import PinkGlow from './PinkGlow'
import EmeraldGlow from './EmeraldGlow'
import AmberGlow from './AmberGlow'

const CAT = 'shadows'

/**
 * Shadows - Glow
 * @returns {JSX.Element}
 */
export default function ShadowsGlowIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="shadow-violet-glow" label="Violet glow" category={CAT} size="auto">
          <VioletGlow />
        </ExampleBox>
        <ExampleBox id="shadow-blue-glow" label="Blue glow" category={CAT} size="auto">
          <BlueGlow />
        </ExampleBox>
        <ExampleBox id="shadow-pink-glow" label="Pink glow" category={CAT} size="auto">
          <PinkGlow />
        </ExampleBox>
        <ExampleBox id="shadow-emerald-glow" label="Emerald glow" category={CAT} size="auto">
          <EmeraldGlow />
        </ExampleBox>
        <ExampleBox id="shadow-amber-glow" label="Amber glow" category={CAT} size="auto">
          <AmberGlow />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
