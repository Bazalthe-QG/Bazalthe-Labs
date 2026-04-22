import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import HoverLift from './HoverLift'
import HoverGlow from './HoverGlow'
import HoverScale from './HoverScale'

const CAT = 'animations'

/**
 * Animations - Hover
 * @returns {JSX.Element}
 */
export default function AnimationsHoverIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-hover-lift" label="hover-lift" category={CAT}>
          <HoverLift />
        </ExampleBox>
        <ExampleBox id="anim-hover-glow" label="hover-glow" category={CAT}>
          <HoverGlow />
        </ExampleBox>
        <ExampleBox id="anim-hover-scale" label="hover-scale" category={CAT}>
          <HoverScale />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
