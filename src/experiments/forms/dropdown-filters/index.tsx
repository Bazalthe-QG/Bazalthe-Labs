import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FilterRow from './FilterRow'
import InlineFilterBar from './InlineFilterBar'
import RangeFilter from './RangeFilter'
import DateFilter from './DateFilter'

const CAT = 'forms'

/**
 * Forms - Dropdown Filters
 * @returns {JSX.Element}
 */
export default function FormsDropdownFiltersIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="filter-dropdowns-row" label="Filter row" category={CAT} size="sm">
          <FilterRow />
        </ExampleBox>
        <ExampleBox id="filter-inline-bar" label="Inline filter bar" category={CAT} size="sm">
          <InlineFilterBar />
        </ExampleBox>
        <ExampleBox id="filter-range" label="Range / price filter" category={CAT} size="sm">
          <RangeFilter />
        </ExampleBox>
        <ExampleBox id="filter-date" label="Date filter" category={CAT} size="sm">
          <DateFilter />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
