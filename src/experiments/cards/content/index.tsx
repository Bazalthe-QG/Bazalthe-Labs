import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Article from './Article'
import Quote from './Quote'
import Recipe from './Recipe'
import Event from './Event'

const CAT = 'cards'

/**
 * Cards - Content
 * @returns {JSX.Element}
 */
export default function CardsContentIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-article" label="Article" category={CAT} size="auto" className="w-60">
          <Article />
        </ExampleBox>
        <ExampleBox id="cards-quote" label="Quote" category={CAT} size="auto" className="w-56">
          <Quote />
        </ExampleBox>
        <ExampleBox id="cards-recipe" label="Recipe" category={CAT} size="auto" className="w-52">
          <Recipe />
        </ExampleBox>
        <ExampleBox id="cards-event" label="Event" category={CAT} size="auto" className="w-52">
          <Event />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
