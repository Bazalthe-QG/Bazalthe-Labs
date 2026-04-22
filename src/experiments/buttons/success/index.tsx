import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Success from './Success'
import SuccessOutline from './SuccessOutline'
import SuccessGhost from './SuccessGhost'
import SuccessSoft from './SuccessSoft'
import SuccessGradient from './SuccessGradient'
import SuccessIcon from './SuccessIcon'

const CAT = 'buttons'

/**
 * Buttons - Success
 * @returns {JSX.Element}
 */
export default function ButtonsSuccessIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-success" label="Solid" category={CAT} size="sm">
          <Success />
        </ExampleBox>
        <ExampleBox id="btn-success-outline" label="Outline" category={CAT} size="sm">
          <SuccessOutline />
        </ExampleBox>
        <ExampleBox id="btn-success-ghost" label="Ghost" category={CAT} size="sm">
          <SuccessGhost />
        </ExampleBox>
        <ExampleBox id="btn-success-soft" label="Soft" category={CAT} size="sm">
          <SuccessSoft />
        </ExampleBox>
        <ExampleBox id="btn-success-gradient" label="Gradient" category={CAT} size="sm">
          <SuccessGradient />
        </ExampleBox>
        <ExampleBox id="btn-success-icon" label="With icon" category={CAT} size="sm">
          <SuccessIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
