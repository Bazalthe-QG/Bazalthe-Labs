import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import DetailsPane from './DetailsPane'
import Inspector from './Inspector'
import ChatSidebar from './ChatSidebar'
import ContextSidebar from './ContextSidebar'
import OverlayPanel from './OverlayPanel'
import ResizableSplit from './ResizableSplit'

const CAT = 'layouts'

/**
 * Layouts - Sidebar Right
 * @returns {JSX.Element}
 */
export default function SidebarRight() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-sidebar-right-details"
          label="Details pane"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <DetailsPane />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-right-inspector"
          label="Inspector panel"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <Inspector />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-right-chat"
          label="Chat sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <ChatSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-right-context"
          label="Context sidebar"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <ContextSidebar />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-right-overlay"
          label="Overlay panel"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <OverlayPanel />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar-right-split"
          label="Resizable split"
          category={CAT}
          size="auto"
          className="w-56"
        >
          <ResizableSplit />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
