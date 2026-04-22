import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SegPeriod from './SegPeriod'
import SegViewMode from './SegViewMode'
import SegTheme from './SegTheme'
import SegSize from './SegSize'
import SegStatus from './SegStatus'
import SegPriority from './SegPriority'
import SegRounded from './SegRounded'
import SegIcon from './SegIcon'

const CAT = 'buttons'

/**
 * Buttons - Segments
 * @returns {JSX.Element}
 */
export default function ButtonsSegmentsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-seg-1" label="Period" category={CAT} size="auto">
          <SegPeriod />
        </ExampleBox>
        <ExampleBox id="btn-seg-2" label="View mode" category={CAT} size="auto">
          <SegViewMode />
        </ExampleBox>
        <ExampleBox id="btn-seg-theme" label="Theme" category={CAT} size="auto">
          <SegTheme />
        </ExampleBox>
        <ExampleBox id="btn-seg-size" label="Size" category={CAT} size="auto">
          <SegSize />
        </ExampleBox>
        <ExampleBox id="btn-seg-status" label="Status" category={CAT} size="auto">
          <SegStatus />
        </ExampleBox>
        <ExampleBox id="btn-seg-priority" label="Priority" category={CAT} size="auto">
          <SegPriority />
        </ExampleBox>
        <ExampleBox id="btn-seg-rounded" label="Rounded" category={CAT} size="auto">
          <SegRounded />
        </ExampleBox>
        <ExampleBox id="btn-seg-icon" label="Icon" category={CAT} size="auto">
          <SegIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
