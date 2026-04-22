import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import StickyHeader from './StickyHeader'
import ModalOverlay from './ModalOverlay'
import Drawer from './Drawer'
import TabsPanel from './TabsPanel'
import BottomNav from './BottomNav'
import ToastStack from './ToastStack'
import CommandPalette from './CommandPalette'

const CAT = 'layouts'

/**
 * Layouts - Components
 * @returns {JSX.Element}
 */
export default function LayoutsComponentsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-sticky-header"
          label="sticky-header"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <StickyHeader />
        </ExampleBox>
        <ExampleBox
          id="layout-modal"
          label="modal-overlay"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <ModalOverlay />
        </ExampleBox>
        <ExampleBox id="layout-drawer" label="drawer" category={CAT} size="auto" className="w-64">
          <Drawer />
        </ExampleBox>
        <ExampleBox id="layout-tabs" label="tabs-panel" category={CAT} size="auto" className="w-64">
          <TabsPanel />
        </ExampleBox>
        <ExampleBox
          id="layout-bottom-nav"
          label="bottom-nav"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <BottomNav />
        </ExampleBox>
        <ExampleBox
          id="layout-toast"
          label="toast-stack"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <ToastStack />
        </ExampleBox>
        <ExampleBox
          id="layout-command"
          label="command-palette"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <CommandPalette />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
