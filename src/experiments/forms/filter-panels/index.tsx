import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import AdvancedFilterPanel from './AdvancedFilterPanel'
import FilterSidebarPane from './FilterSidebarPane'
import ActiveFiltersSummary from './ActiveFiltersSummary'

const CAT = 'forms'

/**
 * Forms - Filter Panels
 * @returns {JSX.Element}
 */
export default function FormsFilterPanelsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="filter-advanced-panel" label="Advanced filter panel" category={CAT} size="md">
          <AdvancedFilterPanel />
        </ExampleBox>
        <ExampleBox id="filter-sidebar-pane" label="Filter sidebar pane" category={CAT} size="md">
          <FilterSidebarPane />
        </ExampleBox>
        <ExampleBox id="filter-active-summary" label="Active filters summary" category={CAT} size="sm">
          <ActiveFiltersSummary />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
