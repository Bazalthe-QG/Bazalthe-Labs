import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BellWithBadge from './BellWithBadge'
import AvatarOnline from './AvatarOnline'
import AvatarBusy from './AvatarBusy'
import StackedAvatars from './StackedAvatars'
import ButtonBadge from './ButtonBadge'

const CAT = 'badges'

/**
 * Badges - Notifications
 * @returns {JSX.Element}
 */
export default function BadgesNotificationsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-notif-icon" label="Bell with badge" category={CAT} size="sm">
          <BellWithBadge />
        </ExampleBox>
        <ExampleBox id="badges-notif-avatar" label="Avatar online" category={CAT} size="sm">
          <AvatarOnline />
        </ExampleBox>
        <ExampleBox id="badges-notif-avatar2" label="Avatar busy" category={CAT} size="sm">
          <AvatarBusy />
        </ExampleBox>
        <ExampleBox id="badges-stacked" label="Stacked avatars" category={CAT} size="sm">
          <StackedAvatars />
        </ExampleBox>
        <ExampleBox id="badges-btn-badge" label="Button + badge" category={CAT} size="sm">
          <ButtonBadge />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
