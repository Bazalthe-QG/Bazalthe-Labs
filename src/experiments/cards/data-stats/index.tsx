import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Stat from './Stat'
import MiniChart from './MiniChart'
import Invoice from './Invoice'
import Progress from './Progress'
import KpiGrid from './KpiGrid'

const CAT = 'cards'

/**
 * Cards - Data Stats
 * @returns {JSX.Element}
 */
export default function CardsDataStatsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-stat" label="Stat" category={CAT} size="auto" className="w-44">
          <Stat />
        </ExampleBox>
        <ExampleBox id="cards-analytics" label="Mini chart" category={CAT} size="auto" className="w-52">
          <MiniChart />
        </ExampleBox>
        <ExampleBox id="cards-invoice" label="Invoice" category={CAT} size="auto" className="w-56">
          <Invoice />
        </ExampleBox>
        <ExampleBox id="cards-progress" label="Progress" category={CAT} size="auto" className="w-52">
          <Progress />
        </ExampleBox>
        <ExampleBox id="cards-kpi-grid" label="KPI grid" category={CAT} size="auto" className="w-64">
          <KpiGrid />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
