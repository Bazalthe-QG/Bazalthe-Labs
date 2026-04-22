import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import GroupBasic from './GroupBasic'
import GroupSolid from './GroupSolid'
import GroupIcon from './GroupIcon'

const CAT = 'buttons'

/**
 * Buttons - Groups
 * @returns {JSX.Element}
 */
export default function ButtonsGroupsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-group-basic" label="Basic group" category={CAT} size="auto">
          <GroupBasic />
        </ExampleBox>
        <ExampleBox id="btn-group-solid" label="Solid group" category={CAT} size="auto">
          <GroupSolid />
        </ExampleBox>
        <ExampleBox id="btn-group-icon" label="Icon group" category={CAT} size="auto">
          <GroupIcon />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
