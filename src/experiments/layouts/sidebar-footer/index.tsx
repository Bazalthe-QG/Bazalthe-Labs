import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import ActionBarLayout from './ActionBarLayout'
import StatusBarLayout from './StatusBarLayout'
import FloatingDock from './FloatingDock'
import PaginatorLayout from './PaginatorLayout'
import FullLayout from './FullLayout'

const CAT = 'layouts'

/**
 * Layouts - Sidebar Footer
 * @returns {JSX.Element}
 */
export default function SidebarFooter() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-sidebar-footer-action-bar"
          label="Sidebar + action bar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <ActionBarLayout />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-footer-status"
          label="Sidebar + status bar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <StatusBarLayout />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-footer-dock"
          label="Sidebar + floating dock"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <FloatingDock />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-footer-paginator"
          label="Sidebar + paginator"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <PaginatorLayout />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-footer-full"
          label="Header + sidebar + footer"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <FullLayout />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
