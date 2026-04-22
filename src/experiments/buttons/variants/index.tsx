import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Solid from './Solid'
import Outline from './Outline'
import Ghost from './Ghost'
import Soft from './Soft'
import Dark from './Dark'
import BtnLink from './BtnLink'
import White from './White'
import Glass from './Glass'

const CAT = 'buttons'

/**
 * Buttons - Variants
 * @returns {JSX.Element}
 */
export default function ButtonsVariantsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-solid" label="Solid" category={CAT} size="sm">
          <Solid />
        </ExampleBox>
        <ExampleBox id="btn-outline" label="Outline" category={CAT} size="sm">
          <Outline />
        </ExampleBox>
        <ExampleBox id="btn-ghost" label="Ghost" category={CAT} size="sm">
          <Ghost />
        </ExampleBox>
        <ExampleBox id="btn-soft" label="Soft" category={CAT} size="sm">
          <Soft />
        </ExampleBox>
        <ExampleBox id="btn-dark" label="Dark" category={CAT} size="sm">
          <Dark />
        </ExampleBox>
        <ExampleBox id="btn-link" label="Link" category={CAT} size="sm">
          <BtnLink />
        </ExampleBox>
        <ExampleBox id="btn-white" label="White" category={CAT} size="sm">
          <White />
        </ExampleBox>
        <ExampleBox id="btn-glass" label="Glass" category={CAT} size="sm">
          <Glass />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
