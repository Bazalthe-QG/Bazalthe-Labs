import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import PillDefault from './PillDefault'
import PillPrimary from './PillPrimary'
import PillSuccess from './PillSuccess'
import PillWarning from './PillWarning'
import PillDanger from './PillDanger'
import PillInfo from './PillInfo'
import PillOutline from './PillOutline'
import PillOutlineGray from './PillOutlineGray'

const CAT = 'badges'

/**
 * Badges - Pills
 * @returns {JSX.Element}
 */
export default function BadgesPillsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-default" label="Default" category={CAT} size="sm">
          <PillDefault />
        </ExampleBox>
        <ExampleBox id="badges-primary" label="Primary" category={CAT} size="sm">
          <PillPrimary />
        </ExampleBox>
        <ExampleBox id="badges-success" label="Success" category={CAT} size="sm">
          <PillSuccess />
        </ExampleBox>
        <ExampleBox id="badges-warning" label="Warning" category={CAT} size="sm">
          <PillWarning />
        </ExampleBox>
        <ExampleBox id="badges-danger" label="Danger" category={CAT} size="sm">
          <PillDanger />
        </ExampleBox>
        <ExampleBox id="badges-info" label="Info" category={CAT} size="sm">
          <PillInfo />
        </ExampleBox>
        <ExampleBox id="badges-outline-v" label="Outline" category={CAT} size="sm">
          <PillOutline />
        </ExampleBox>
        <ExampleBox id="badges-outline-g" label="Outline gray" category={CAT} size="sm">
          <PillOutlineGray />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
