import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import OutlineRed from './OutlineRed'
import OutlineOrange from './OutlineOrange'
import OutlineAmber from './OutlineAmber'
import OutlineGreen from './OutlineGreen'
import OutlineTeal from './OutlineTeal'
import OutlineBlue from './OutlineBlue'
import OutlineViolet from './OutlineViolet'
import OutlinePink from './OutlinePink'

const CAT = 'badges'

/**
 * Badges - Outline Spectrum
 * @returns {JSX.Element}
 */
export default function BadgesOutlineSpectrumIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-out-red" label="Red" category={CAT} size="sm">
          <OutlineRed />
        </ExampleBox>
        <ExampleBox id="badges-out-orange" label="Orange" category={CAT} size="sm">
          <OutlineOrange />
        </ExampleBox>
        <ExampleBox id="badges-out-amber" label="Amber" category={CAT} size="sm">
          <OutlineAmber />
        </ExampleBox>
        <ExampleBox id="badges-out-green" label="Green" category={CAT} size="sm">
          <OutlineGreen />
        </ExampleBox>
        <ExampleBox id="badges-out-teal" label="Teal" category={CAT} size="sm">
          <OutlineTeal />
        </ExampleBox>
        <ExampleBox id="badges-out-blue" label="Blue" category={CAT} size="sm">
          <OutlineBlue />
        </ExampleBox>
        <ExampleBox id="badges-out-violet" label="Violet" category={CAT} size="sm">
          <OutlineViolet />
        </ExampleBox>
        <ExampleBox id="badges-out-pink" label="Pink" category={CAT} size="sm">
          <OutlinePink />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
