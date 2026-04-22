import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Warning from './Warning'
import WarningOutline from './WarningOutline'
import WarningGhost from './WarningGhost'
import WarningSoft from './WarningSoft'
import WarningGradient from './WarningGradient'
import WarningIcon from './WarningIcon'

const CAT = 'buttons'

/**
 * Buttons - Warning
 * @returns {JSX.Element}
 */
export default function ButtonsWarningIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-warning" label="Solid" category={CAT} size="sm">
          <Warning />
        </ExampleBox>
        <ExampleBox id="btn-warning-outline" label="Outline" category={CAT} size="sm">
          <WarningOutline />
        </ExampleBox>
        <ExampleBox id="btn-warning-ghost" label="Ghost" category={CAT} size="sm">
          <WarningGhost />
        </ExampleBox>
        <ExampleBox id="btn-warning-soft" label="Soft" category={CAT} size="sm">
          <WarningSoft />
        </ExampleBox>
        <ExampleBox id="btn-warning-gradient" label="Gradient" category={CAT} size="sm">
          <WarningGradient />
        </ExampleBox>
        <ExampleBox id="btn-warning-icon" label="With icon" category={CAT} size="sm">
          <WarningIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
