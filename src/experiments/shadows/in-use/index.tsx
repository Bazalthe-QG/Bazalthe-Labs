import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import InuseXs from './InuseXs'
import InuseSm from './InuseSm'
import InuseMd from './InuseMd'
import InuseLg from './InuseLg'

const CAT = 'shadows'

/**
 * Shadows - In Use
 * @returns {JSX.Element}
 */
export default function ShadowsInUseIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="shadow-inuse-xs" label="XS" category={CAT} size="auto" className="w-36">
          <InuseXs />
        </ExampleBox>
        <ExampleBox id="shadow-inuse-sm" label="SM" category={CAT} size="auto" className="w-36">
          <InuseSm />
        </ExampleBox>
        <ExampleBox id="shadow-inuse-md" label="MD" category={CAT} size="auto" className="w-36">
          <InuseMd />
        </ExampleBox>
        <ExampleBox id="shadow-inuse-lg" label="LG" category={CAT} size="auto" className="w-36">
          <InuseLg />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
