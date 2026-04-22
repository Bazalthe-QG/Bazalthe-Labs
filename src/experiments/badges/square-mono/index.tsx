import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SquareVersion from './SquareVersion'
import SquareHash from './SquareHash'
import SquareNew from './SquareNew'
import SquareBeta from './SquareBeta'
import SquareFree from './SquareFree'
import SquareHot from './SquareHot'
import SquareSale from './SquareSale'
import SquareAlpha from './SquareAlpha'
import SquareRc from './SquareRc'

const CAT = 'badges'

/**
 * Badges - Square Mono
 * @returns {JSX.Element}
 */
export default function BadgesSquareMonoIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-sq-version" label="Version" category={CAT} size="sm">
          <SquareVersion />
        </ExampleBox>
        <ExampleBox id="badges-sq-hash" label="Hash" category={CAT} size="sm">
          <SquareHash />
        </ExampleBox>
        <ExampleBox id="badges-sq-new" label="New" category={CAT} size="sm">
          <SquareNew />
        </ExampleBox>
        <ExampleBox id="badges-sq-beta" label="Beta" category={CAT} size="sm">
          <SquareBeta />
        </ExampleBox>
        <ExampleBox id="badges-sq-free" label="Free" category={CAT} size="sm">
          <SquareFree />
        </ExampleBox>
        <ExampleBox id="badges-sq-hot" label="Hot" category={CAT} size="sm">
          <SquareHot />
        </ExampleBox>
        <ExampleBox id="badges-sq-sale" label="Sale" category={CAT} size="sm">
          <SquareSale />
        </ExampleBox>
        <ExampleBox id="badges-sq-alpha" label="Alpha" category={CAT} size="sm">
          <SquareAlpha />
        </ExampleBox>
        <ExampleBox id="badges-sq-rc" label="RC" category={CAT} size="sm">
          <SquareRc />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
