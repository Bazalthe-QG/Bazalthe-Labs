import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FadeInUp from './FadeInUp'
import ScaleIn from './ScaleIn'
import ElasticIn from './ElasticIn'
import RotateFade from './RotateFade'
import ZoomOut from './ZoomOut'
import ClipReveal from './ClipReveal'

const CAT = 'animations'

/**
 * Animations - Entrance
 * @returns {JSX.Element}
 */

export default function AnimationsEntranceIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-fade-up" label="Fade-in-up" category={CAT} size="sm">
          <FadeInUp />
        </ExampleBox>
        <ExampleBox id="anim-scale-in" label="Scale-in" category={CAT} size="sm">
          <ScaleIn />
        </ExampleBox>
        <ExampleBox id="anim-elastic" label="Elastic-in" category={CAT} size="sm">
          <ElasticIn />
        </ExampleBox>
        <ExampleBox id="anim-rotate-fade" label="Rotate-fade" category={CAT} size="sm">
          <RotateFade />
        </ExampleBox>
        <ExampleBox id="anim-zoom-out" label="Zoom-out" category={CAT} size="sm">
          <ZoomOut />
        </ExampleBox>
        <ExampleBox id="anim-clip" label="Clip-reveal" category={CAT} size="sm">
          <ClipReveal />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
