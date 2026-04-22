import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import DotsBounce from './DotsBounce'
import DotsPulse from './DotsPulse'
import DotsGrow from './DotsGrow'
import PingLoader from './PingLoader'
import TypingIndicator from './TypingIndicator'

const CAT = 'loaders'

/**
 * Loaders - Dots
 * @returns {JSX.Element}
 */
export default function LoadersDotsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-dots-bounce" label="Dots bounce" category={CAT}>
          <DotsBounce />
        </ExampleBox>
        <ExampleBox id="loader-dots-pulse" label="Dots pulse" category={CAT}>
          <DotsPulse />
        </ExampleBox>
        <ExampleBox id="loader-dots-grow" label="Dots grow" category={CAT}>
          <DotsGrow />
        </ExampleBox>
        <ExampleBox id="loader-ping" label="Ping" category={CAT}>
          <PingLoader />
        </ExampleBox>
        <ExampleBox id="loader-typing" label="Typing" category={CAT}>
          <TypingIndicator />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
