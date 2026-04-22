import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Shake from './Shake'
import Flip from './Flip'
import Morph from './Morph'
import ColorTap from './ColorTap'
import Ripple from './Ripple'
import SvgDraw from './SvgDraw'

const CAT = 'animations'

/**
 * Animations - Click
 * @returns {JSX.Element}
 */
export default function AnimationsClickIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-shake" label="shake" category={CAT}>
          <Shake />
        </ExampleBox>
        <ExampleBox id="anim-flip" label="flip" category={CAT}>
          <Flip />
        </ExampleBox>
        <ExampleBox id="anim-morph" label="morph" category={CAT}>
          <Morph />
        </ExampleBox>
        <ExampleBox id="anim-color-tap" label="color-tap" category={CAT}>
          <ColorTap />
        </ExampleBox>
        <ExampleBox id="anim-ripple" label="ripple" category={CAT}>
          <Ripple />
        </ExampleBox>
        <ExampleBox id="anim-draw" label="svg-draw" category={CAT}>
          <SvgDraw />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
