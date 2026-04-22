import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import StateDisabled from './StateDisabled'
import StateLoading from './StateLoading'
import StateGradient from './StateGradient'
import StateGlow from './StateGlow'

const CAT = 'buttons'

/**
 * Buttons - States
 * @returns {JSX.Element}
 */
export default function ButtonsStatesIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-state-disabled" label="Disabled" category={CAT} size="sm">
          <StateDisabled />
        </ExampleBox>
        <ExampleBox id="btn-state-loading" label="Loading" category={CAT} size="sm">
          <StateLoading />
        </ExampleBox>
        <ExampleBox id="btn-state-gradient" label="Gradient" category={CAT} size="sm">
          <StateGradient />
        </ExampleBox>
        <ExampleBox id="btn-state-glow" label="Glow" category={CAT} size="sm">
          <StateGlow />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
