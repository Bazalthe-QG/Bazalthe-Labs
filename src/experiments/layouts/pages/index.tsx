import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import HolyGrail from './HolyGrail'
import SidebarLayout from './SidebarLayout'
import Dashboard from './Dashboard'
import TwoColumn from './TwoColumn'
import ThreeColumn from './ThreeColumn'
import Masonry from './Masonry'
import CardGrid from './CardGrid'
import SplitScreen from './SplitScreen'
import HeroSection from './HeroSection'
import AppShell from './AppShell'

const CAT = 'layouts'

/**
 * Layouts - Pages
 * @returns {JSX.Element}
 */
export default function LayoutsPagesIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox
          id="layout-holy-grail"
          label="holy-grail"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <HolyGrail />
        </ExampleBox>
        <ExampleBox
          id="layout-sidebar"
          label="sidebar-layout"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <SidebarLayout />
        </ExampleBox>
        <ExampleBox
          id="layout-dashboard"
          label="dashboard"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <Dashboard />
        </ExampleBox>
        <ExampleBox
          id="layout-two-col"
          label="two-column"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <TwoColumn />
        </ExampleBox>
        <ExampleBox
          id="layout-three-col"
          label="three-column"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <ThreeColumn />
        </ExampleBox>
        <ExampleBox id="layout-masonry" label="masonry" category={CAT} size="auto" className="w-64">
          <Masonry />
        </ExampleBox>
        <ExampleBox
          id="layout-card-grid"
          label="card-grid"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <CardGrid />
        </ExampleBox>
        <ExampleBox
          id="layout-split"
          label="split-screen"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <SplitScreen />
        </ExampleBox>
        <ExampleBox
          id="layout-hero"
          label="hero-sections"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <HeroSection />
        </ExampleBox>
        <ExampleBox
          id="layout-app-shell"
          label="app-shell"
          category={CAT}
          size="auto"
          className="w-64"
        >
          <AppShell />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
