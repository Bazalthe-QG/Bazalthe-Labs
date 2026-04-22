import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BarChart from './BarChart'
import ProgressBar from './ProgressBar'
import StepsBar from './StepsBar'
import IndeterminateBar from './IndeterminateBar'
import StripedBar from './StripedBar'
import GradientBar from './GradientBar'

const CAT = 'loaders'

/**
 * Loaders - Bars
 * @returns {JSX.Element}
 */
export default function LoadersBarsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-bars" label="Bar chart" category={CAT} size="sm">
          <BarChart />
        </ExampleBox>
        <ExampleBox id="loader-progress" label="Progress" category={CAT} size="sm">
          <ProgressBar />
        </ExampleBox>
        <ExampleBox id="loader-progress-steps" label="Steps" category={CAT} size="sm">
          <StepsBar />
        </ExampleBox>
        <ExampleBox id="loader-progress-indeterminate" label="Indeterminate" category={CAT} size="sm">
          <IndeterminateBar />
        </ExampleBox>
        <ExampleBox id="loader-progress-striped" label="Striped" category={CAT} size="sm">
          <StripedBar />
        </ExampleBox>
        <ExampleBox id="loader-progress-gradient" label="Gradient bar" category={CAT} size="sm">
          <GradientBar />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
