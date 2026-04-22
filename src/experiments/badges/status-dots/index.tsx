import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import DotOnline from './DotOnline'
import DotBusy from './DotBusy'
import DotAway from './DotAway'
import DotOffline from './DotOffline'
import DotDnd from './DotDnd'
import DotSyncing from './DotSyncing'

const CAT = 'badges'

/**
 * Badges - Status Dots
 * @returns {JSX.Element}
 */
export default function BadgesStatusDotsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-dot-online" label="Online" category={CAT} size="sm">
          <DotOnline />
        </ExampleBox>
        <ExampleBox id="badges-dot-busy" label="Busy" category={CAT} size="sm">
          <DotBusy />
        </ExampleBox>
        <ExampleBox id="badges-dot-away" label="Away" category={CAT} size="sm">
          <DotAway />
        </ExampleBox>
        <ExampleBox id="badges-dot-offline" label="Offline" category={CAT} size="sm">
          <DotOffline />
        </ExampleBox>
        <ExampleBox id="badges-dot-dnd" label="Do not disturb" category={CAT} size="sm">
          <DotDnd />
        </ExampleBox>
        <ExampleBox id="badges-dot-syncing" label="Syncing" category={CAT} size="sm">
          <DotSyncing />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
