import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Newsletter from './Newsletter'
import SearchFilter from './SearchFilter'
import Feedback from './Feedback'
import InviteMembers from './InviteMembers'
import Settings from './Settings'

const CAT = 'forms'

/**
 * Forms - Composed Forms
 * @returns {JSX.Element}
 */
export default function FormsComposedFormsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-newsletter" label="Newsletter" category={CAT} size="auto" className="w-72">
          <Newsletter />
        </ExampleBox>
        <ExampleBox id="form-search-filter" label="Search + filters" category={CAT} size="auto" className="w-72">
          <SearchFilter />
        </ExampleBox>
        <ExampleBox id="form-feedback" label="Feedback" category={CAT} size="auto" className="w-72">
          <Feedback />
        </ExampleBox>
        <ExampleBox id="form-invite" label="Invite members" category={CAT} size="auto" className="w-72">
          <InviteMembers />
        </ExampleBox>
        <ExampleBox id="form-settings" label="Settings section" category={CAT} size="auto" className="w-72">
          <Settings />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
