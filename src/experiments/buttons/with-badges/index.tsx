import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BadgeNotif from './BadgeNotif'
import BadgeNew from './BadgeNew'
import BadgeBeta from './BadgeBeta'
import BadgeCount from './BadgeCount'
import FloatingAction from './FloatingAction'

const CAT = 'buttons'

/**
 * Buttons - With Badges
 * @returns {JSX.Element}
 */
export default function ButtonsWithBadgesIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-badge-notif" label="Notification" category={CAT} size="sm">
          <BadgeNotif />
        </ExampleBox>
        <ExampleBox id="btn-badge-new" label="New badge" category={CAT} size="sm">
          <BadgeNew />
        </ExampleBox>
        <ExampleBox id="btn-badge-beta" label="Beta badge" category={CAT} size="sm">
          <BadgeBeta />
        </ExampleBox>
        <ExampleBox id="btn-badge-count" label="Cart count" category={CAT} size="sm">
          <BadgeCount />
        </ExampleBox>
        <ExampleBox id="btn-floating-action" label="FAB" category={CAT} size="sm">
          <FloatingAction />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
