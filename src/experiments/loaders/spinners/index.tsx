import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Spinner from './Spinner'
import DualRing from './DualRing'
import RingPulse from './RingPulse'
import SquareSpin from './SquareSpin'
import GradientRing from './GradientRing'

const CAT = 'loaders'

/**
 * Loaders - Spinners
 * @returns {JSX.Element}
 */
export default function LoadersSpinnersIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-spinner" label="Spinner" category={CAT} size="sm">
          <Spinner />
        </ExampleBox>
        <ExampleBox id="loader-dual-ring" label="Dual ring" category={CAT} size="sm">
          <DualRing />
        </ExampleBox>
        <ExampleBox id="loader-ring-pulse" label="Ring pulse" category={CAT} size="sm">
          <RingPulse />
        </ExampleBox>
        <ExampleBox id="loader-square-spin" label="Square" category={CAT} size="sm">
          <SquareSpin />
        </ExampleBox>
        <ExampleBox id="loader-gradient-ring" label="Gradient ring" category={CAT} size="sm">
          <GradientRing />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
