import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import TabsPill from './TabsPill'
import TabsUnderline from './TabsUnderline'
import TabsBordered from './TabsBordered'
import TabsMinimal from './TabsMinimal'
import TabsVertical from './TabsVertical'
import TabsScrollable from './TabsScrollable'
import TabsIcon from './TabsIcon'

const CAT = 'buttons'

/**
 * Buttons - Tabs
 * @returns {JSX.Element}
 */
export default function ButtonsTabsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-tabs-pill" label="Pill tabs" category={CAT} size="auto">
          <TabsPill />
        </ExampleBox>
        <ExampleBox id="btn-tabs-underline" label="Underline tabs" category={CAT} size="auto">
          <TabsUnderline />
        </ExampleBox>
        <ExampleBox id="btn-tabs-bordered" label="Bordered tabs" category={CAT} size="auto">
          <TabsBordered />
        </ExampleBox>
        <ExampleBox id="btn-tabs-minimal" label="Minimal tabs" category={CAT} size="auto">
          <TabsMinimal />
        </ExampleBox>
        <ExampleBox id="btn-tabs-vertical" label="Vertical tabs" category={CAT} size="auto">
          <TabsVertical />
        </ExampleBox>
        <ExampleBox id="btn-tabs-scrollable" label="Scrollable tabs" category={CAT} size="auto">
          <TabsScrollable />
        </ExampleBox>
        <ExampleBox id="btn-tabs-icon" label="Icon tabs" category={CAT} size="auto">
          <TabsIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
