import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Danger from './Danger'
import DangerOutline from './DangerOutline'
import DangerGhost from './DangerGhost'
import DangerSoft from './DangerSoft'
import DangerGradient from './DangerGradient'
import DangerIcon from './DangerIcon'

const CAT = 'buttons'

/**
 * Buttons - Danger
 * @returns {JSX.Element}
 */
export default function ButtonsDangerIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-danger" label="Solid" category={CAT} size="sm">
          <Danger />
        </ExampleBox>
        <ExampleBox id="btn-danger-outline" label="Outline" category={CAT} size="sm">
          <DangerOutline />
        </ExampleBox>
        <ExampleBox id="btn-danger-ghost" label="Ghost" category={CAT} size="sm">
          <DangerGhost />
        </ExampleBox>
        <ExampleBox id="btn-danger-soft" label="Soft" category={CAT} size="sm">
          <DangerSoft />
        </ExampleBox>
        <ExampleBox id="btn-danger-gradient" label="Gradient" category={CAT} size="sm">
          <DangerGradient />
        </ExampleBox>
        <ExampleBox id="btn-danger-icon" label="With icon" category={CAT} size="sm">
          <DangerIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
