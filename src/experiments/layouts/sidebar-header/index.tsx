import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FullHeaderSidebar from './FullHeaderSidebar'
import TabbedHeaderSidebar from './TabbedHeaderSidebar'
import MegaHeaderSidebar from './MegaHeaderSidebar'
import StickyHeaderSidebar from './StickyHeaderSidebar'
import BreadcrumbSidebar from './BreadcrumbSidebar'
import SearchHeaderSidebar from './SearchHeaderSidebar'

const CAT = 'layouts'

/**
 * Layouts - Sidebar Header
 * @returns {JSX.Element}
 */
export default function SidebarHeader() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-header-sidebar-full"
          label="Header + left sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <FullHeaderSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-header-sidebar-tabs"
          label="Header + tabbed sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <TabbedHeaderSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-header-sidebar-mega"
          label="Mega header + sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <MegaHeaderSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-header-sidebar-sticky"
          label="Sticky header + scroll"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <StickyHeaderSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-header-sidebar-breadcrumb"
          label="Breadcrumb + sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <BreadcrumbSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-header-sidebar-search"
          label="Search header + sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <SearchHeaderSidebar />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
