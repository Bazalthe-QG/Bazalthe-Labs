import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SoftLift from './SoftLift'
import HardBottom from './HardBottom'
import Pressed from './Pressed'
import Card3d from './Card3d'
import Brutalist from './Brutalist'

const CAT = 'shadows'

/**
 * Shadows - Creative
 * @returns {JSX.Element}
 */
export default function ShadowsCreativeIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="shadow-soft-lift" label="Soft lift" category={CAT} size="auto">
          <SoftLift />
        </ExampleBox>
        <ExampleBox id="shadow-hard-bottom" label="Hard bottom" category={CAT} size="auto">
          <HardBottom />
        </ExampleBox>
        <ExampleBox id="shadow-pressed" label="Pressed" category={CAT} size="auto">
          <Pressed />
        </ExampleBox>
        <ExampleBox id="shadow-card-3d" label="3D card" category={CAT} size="auto">
          <Card3d />
        </ExampleBox>
        <ExampleBox id="shadow-brutalist" label="Brutalist" category={CAT} size="auto">
          <Brutalist />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
