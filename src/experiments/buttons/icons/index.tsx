import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import IconLeading from './IconLeading'
import IconTrailing from './IconTrailing'
import IconCircle from './IconCircle'
import IconSquare from './IconSquare'
import IconShare from './IconShare'
import IconDownload from './IconDownload'
import IconDelete from './IconDelete'
import IconFilter from './IconFilter'

const CAT = 'buttons'

/**
 * Buttons - Icons
 * @returns {JSX.Element}
 */
export default function ButtonsIconsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-icon-leading" label="Leading icon" category={CAT} size="sm">
          <IconLeading />
        </ExampleBox>
        <ExampleBox id="btn-icon-trailing" label="Trailing icon" category={CAT} size="sm">
          <IconTrailing />
        </ExampleBox>
        <ExampleBox id="btn-icon-circle" label="Icon circle" category={CAT} size="sm">
          <IconCircle />
        </ExampleBox>
        <ExampleBox id="btn-icon-square" label="Icon square" category={CAT} size="sm">
          <IconSquare />
        </ExampleBox>
        <ExampleBox id="btn-icon-share" label="Share" category={CAT} size="sm">
          <IconShare />
        </ExampleBox>
        <ExampleBox id="btn-icon-download" label="Download" category={CAT} size="sm">
          <IconDownload />
        </ExampleBox>
        <ExampleBox id="btn-icon-delete" label="Delete" category={CAT} size="sm">
          <IconDelete />
        </ExampleBox>
        <ExampleBox id="btn-icon-filter" label="Filter" category={CAT} size="sm">
          <IconFilter />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
