import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SlideLeft from './SlideLeft'
import SlideRight from './SlideRight'
import SlideTop from './SlideTop'
import SlideBottom from './SlideBottom'

const CAT = 'animations'

/**
 * Animations - Slide
 * @returns {JSX.Element}
 */
export default function AnimationsSlideIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-slide-left" label="slide-from-left" category={CAT}>
          <SlideLeft />
        </ExampleBox>
        <ExampleBox id="anim-slide-right" label="slide-from-right" category={CAT}>
          <SlideRight />
        </ExampleBox>
        <ExampleBox id="anim-slide-up" label="slide-from-top" category={CAT}>
          <SlideTop />
        </ExampleBox>
        <ExampleBox id="anim-slide-down" label="slide-from-bottom" category={CAT}>
          <SlideBottom />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
