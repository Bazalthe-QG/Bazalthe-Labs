import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import ProgressBadge from './ProgressBadge'
import StepIndicator from './StepIndicator'
import MiniSteps from './MiniSteps'
import LevelBadge from './LevelBadge'
import XpBar from './XpBar'

const CAT = 'badges'

/**
 * Badges - Progress Steps
 * @returns {JSX.Element}
 */
export default function BadgesProgressStepsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-progress-bar" label="Progress badge" category={CAT} size="sm">
          <ProgressBadge />
        </ExampleBox>
        <ExampleBox id="badges-progress-steps" label="Step indicator" category={CAT} size="sm">
          <StepIndicator />
        </ExampleBox>
        <ExampleBox id="badges-progress-mini" label="Mini steps" category={CAT} size="sm">
          <MiniSteps />
        </ExampleBox>
        <ExampleBox id="badges-level" label="Level badge" category={CAT} size="sm">
          <LevelBadge />
        </ExampleBox>
        <ExampleBox id="badges-xp" label="XP bar" category={CAT} size="sm">
          <XpBar />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
