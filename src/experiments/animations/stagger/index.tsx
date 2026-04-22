import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import StaggerVertical from './StaggerVertical'
import StaggerCascade from './StaggerCascade'
import LetterStagger from './LetterStagger'

const CAT = 'animations'

/**
 * Animations - Stagger
 * @returns {JSX.Element}
 */
export default function AnimationsStaggerIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="anim-stagger-v" label="stagger-vertical" category={CAT}>
          <StaggerVertical />
        </ExampleBox>
        <ExampleBox id="anim-stagger-h" label="stagger-cascade" category={CAT}>
          <StaggerCascade />
        </ExampleBox>
        <ExampleBox id="anim-letters" label="letter-stagger" category={CAT}>
          <LetterStagger />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
