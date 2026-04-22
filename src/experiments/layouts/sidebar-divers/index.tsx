import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FloatingSidebar from './FloatingSidebar'
import MiniOverlay from './MiniOverlay'
import DrawerSidebar from './DrawerSidebar'
import TabbedSidebar from './TabbedSidebar'
import BottomSidebar from './BottomSidebar'
import PopoverSidebar from './PopoverSidebar'

const CAT = 'layouts'

/**
 * Layouts - Sidebar Divers
 * @returns {JSX.Element}
 */
export default function SidebarDivers() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-sidebar-divers-floating"
          label="Floating sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <FloatingSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-divers-mini-overlay"
          label="Mini overlay"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <MiniOverlay />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-divers-drawer"
          label="Drawer / sheet"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <DrawerSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-divers-tabbed"
          label="Tabbed sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <TabbedSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-divers-bottom"
          label="Bottom sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <BottomSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-divers-popover"
          label="Popover sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <PopoverSidebar />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
