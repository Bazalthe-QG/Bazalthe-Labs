import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'
import StandardSidebar from './StandardSidebar'
import IconRail from './IconRail'
import CollapsibleSidebar from './CollapsibleSidebar'
import SidebarWithHeader from './SidebarWithHeader'
import NestedNav from './NestedNav'
import MiniTooltip from './MiniTooltip'
import ActiveState from './ActiveState'
import HoverIndicator from './HoverIndicator'

const CAT = 'layouts'

/**
 * Layouts - Sidebar Left
 * @returns {JSX.Element}
 */
export default function SidebarLeft() {
  return (
    <Page>
      <Section title="Classic left sidebar">
        <Grid>
          <ExampleBox
            id="layout-sidebar-left-standard"
            label="Standard sidebar"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <StandardSidebar />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-icon-rail"
            label="Icon-only rail"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <IconRail />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-collapsible"
            label="Collapsible"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <CollapsibleSidebar />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-with-header"
            label="Sidebar + top bar"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <SidebarWithHeader />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-nested"
            label="Nested navigation"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <NestedNav />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-mini-tooltip"
            label="Mini + tooltips"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <MiniTooltip />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="States & interactions">
        <Grid>
          <ExampleBox
            id="layout-sidebar-left-active-state"
            label="Active item styles"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <ActiveState />
          </ExampleBox>
          <ExampleBox
            id="layout-sidebar-left-hover"
            label="Hover indicators"
            category={CAT}
            size="auto"
            className="w-56"
          >
            <HoverIndicator />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
