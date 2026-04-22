import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Profile from './Profile'
import TeamMember from './TeamMember'
import Contact from './Contact'
import HoverProfile from './HoverProfile'
import AvatarStack from './AvatarStack'

const CAT = 'cards'

/**
 * Cards - Identity Cards
 * @returns {JSX.Element}
 */
export default function CardsIdentityCardsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-profile" label="Profile" category={CAT} size="auto" className="w-56">
          <Profile />
        </ExampleBox>
        <ExampleBox id="cards-team-member" label="Team member" category={CAT} size="auto" className="w-52">
          <TeamMember />
        </ExampleBox>
        <ExampleBox id="cards-contact" label="Contact" category={CAT} size="auto" className="w-52">
          <Contact />
        </ExampleBox>
        <ExampleBox id="cards-hoverprofile" label="Hover profile" category={CAT} size="auto" className="w-52">
          <HoverProfile />
        </ExampleBox>
        <ExampleBox id="cards-avatar-list" label="Avatar stack" category={CAT} size="auto" className="w-52">
          <AvatarStack />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
