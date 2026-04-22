import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Pulse from './Pulse'
import Bounce from './Bounce'
import Spin from './Spin'
import Ping from './Ping'
import ColorShift from './ColorShift'
import RotateIn from './RotateIn'
import SpinSlow from './SpinSlow'
import DotsBounce from './DotsBounce'
import Bars from './Bars'
import GradientShift from './GradientShift'
import Heartbeat from './Heartbeat'
import WaveAnim from './WaveAnim'

const CAT = 'animations'

/**
 * Animations - Loops
 * @returns {JSX.Element}
 */
export default function AnimationsLoopsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-pulse" label="Pulse" category={CAT} size="sm">
          <Pulse />
        </ExampleBox>
        <ExampleBox id="anim-bounce" label="Bounce" category={CAT} size="sm">
          <Bounce />
        </ExampleBox>
        <ExampleBox id="anim-spin" label="Spin" category={CAT} size="sm">
          <Spin />
        </ExampleBox>
        <ExampleBox id="anim-ping" label="Ping" category={CAT} size="sm">
          <Ping />
        </ExampleBox>
        <ExampleBox id="anim-color-shift" label="Color-shift" category={CAT} size="sm">
          <ColorShift />
        </ExampleBox>
        <ExampleBox id="anim-rotate-in" label="Rotate-in" category={CAT} size="sm">
          <RotateIn />
        </ExampleBox>
        <ExampleBox id="anim-spin-slow" label="Spin-slow" category={CAT} size="sm">
          <SpinSlow />
        </ExampleBox>
        <ExampleBox id="anim-dots-bounce" label="Dots-bounce" category={CAT} size="sm">
          <DotsBounce />
        </ExampleBox>
        <ExampleBox id="anim-bars" label="Bars" category={CAT} size="sm">
          <Bars />
        </ExampleBox>
        <ExampleBox id="anim-gradient-shift" label="Gradient-shift" category={CAT} size="sm">
          <GradientShift />
        </ExampleBox>
        <ExampleBox id="anim-heartbeat" label="Heartbeat" category={CAT} size="sm">
          <Heartbeat />
        </ExampleBox>
        <ExampleBox id="anim-wave" label="Wave" category={CAT} size="sm">
          <WaveAnim />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
