import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import OverlayLoader from './OverlayLoader'
import ButtonLoading from './ButtonLoading'

const CAT = 'loaders'

/**
 * Loaders - Overlay
 * @returns {JSX.Element}
 */
export default function LoadersOverlayIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-overlay" label="Overlay" category={CAT} size="lg">
          <OverlayLoader />
        </ExampleBox>
        <ExampleBox id="loader-button-loading" label="Button loading" category={CAT} size="sm">
          <ButtonLoading />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
