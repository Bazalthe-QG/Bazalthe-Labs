import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import PulseDot from './PulseDot'
import LiveBadge from './LiveBadge'
import NewPulse from './NewPulse'
import TypingBadge from './TypingBadge'
import LoadingPill from './LoadingPill'

const CAT = 'badges'

/**
 * Badges - Animated
 * @returns {JSX.Element}
 */
export default function BadgesAnimatedIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-anim-pulse" label="Pulse dot" category={CAT} size="sm">
          <PulseDot />
        </ExampleBox>
        <ExampleBox id="badges-anim-live" label="Live badge" category={CAT} size="sm">
          <LiveBadge />
        </ExampleBox>
        <ExampleBox id="badges-anim-new" label="New pulse" category={CAT} size="sm">
          <NewPulse />
        </ExampleBox>
        <ExampleBox id="badges-anim-typing" label="Typing" category={CAT} size="sm">
          <TypingBadge />
        </ExampleBox>
        <ExampleBox id="badges-anim-loading" label="Loading pill" category={CAT} size="sm">
          <LoadingPill />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
