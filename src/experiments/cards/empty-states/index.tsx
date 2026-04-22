import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import EmptyInbox from './EmptyInbox'
import EmptySearch from './EmptySearch'
import EmptyError from './EmptyError'
import EmptyStart from './EmptyStart'

const CAT = 'cards'

/**
 * Cards - Empty States
 * @returns {JSX.Element}
 */
export default function CardsEmptyStatesIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-empty-inbox" label="Empty inbox" category={CAT} size="auto" className="w-52">
          <EmptyInbox />
        </ExampleBox>
        <ExampleBox id="cards-empty-search" label="No results" category={CAT} size="auto" className="w-52">
          <EmptySearch />
        </ExampleBox>
        <ExampleBox id="cards-empty-error" label="Error state" category={CAT} size="auto" className="w-52">
          <EmptyError />
        </ExampleBox>
        <ExampleBox id="cards-empty-start" label="Get started" category={CAT} size="auto" className="w-56">
          <EmptyStart />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
