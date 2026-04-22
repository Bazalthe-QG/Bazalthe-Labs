import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BtnGlow from './BtnGlow'
import CardLift from './CardLift'
import InputFocus from './InputFocus'

const CAT = 'shadows'

/**
 * Shadows - On Elements
 * @returns {JSX.Element}
 */
export default function ShadowsOnElementsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="shadow-btn-glow" label="Button glow" category={CAT} size="sm">
          <BtnGlow />
        </ExampleBox>
        <ExampleBox id="shadow-card-lift" label="Card lift" category={CAT} size="auto" className="w-44">
          <CardLift />
        </ExampleBox>
        <ExampleBox id="shadow-input-focus" label="Input focus" category={CAT} size="sm">
          <InputFocus />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
