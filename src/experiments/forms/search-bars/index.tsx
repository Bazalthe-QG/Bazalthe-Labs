import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BasicSearch from './BasicSearch'
import LabeledSearch from './LabeledSearch'
import SearchSort from './SearchSort'
import InsetSearch from './InsetSearch'

const CAT = 'forms'

/**
 * Forms - Search Bars
 * @returns {JSX.Element}
 */
export default function FormsSearchBarsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="filter-search-basic" label="Basic search" category={CAT} size="sm">
          <BasicSearch />
        </ExampleBox>
        <ExampleBox id="filter-search-labeled" label="Labeled search" category={CAT} size="sm">
          <LabeledSearch />
        </ExampleBox>
        <ExampleBox id="filter-search-sort" label="Search + sort" category={CAT} size="sm">
          <SearchSort />
        </ExampleBox>
        <ExampleBox id="filter-search-inset" label="Inset search" category={CAT} size="sm">
          <InsetSearch />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
