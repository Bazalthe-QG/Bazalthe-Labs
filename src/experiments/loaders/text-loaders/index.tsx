import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Typewriter from './Typewriter'
import Ellipsis from './Ellipsis'
import TextShimmer from './TextShimmer'

const CAT = 'loaders'

/**
 * Loaders - Text Loaders
 * @returns {JSX.Element}
 */
export default function LoadersTextLoadersIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-typewriter" label="Typewriter" category={CAT}>
          <Typewriter />
        </ExampleBox>
        <ExampleBox id="loader-ellipsis" label="Ellipsis" category={CAT}>
          <Ellipsis />
        </ExampleBox>
        <ExampleBox id="loader-text-shimmer" label="Text shimmer" category={CAT}>
          <TextShimmer />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
