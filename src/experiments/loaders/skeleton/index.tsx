import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import CardSkeleton from './CardSkeleton'
import ListSkeleton from './ListSkeleton'
import ProfileSkeleton from './ProfileSkeleton'
import TableSkeleton from './TableSkeleton'
import PulseBlock from './PulseBlock'

const CAT = 'loaders'

/**
 * Loaders - Skeleton
 * @returns {JSX.Element}
 */
export default function LoadersSkeletonIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="loader-skeleton-card" label="Card skeleton" category={CAT} size="lg">
          <CardSkeleton />
        </ExampleBox>
        <ExampleBox id="loader-skeleton-list" label="List skeleton" category={CAT} size="lg">
          <ListSkeleton />
        </ExampleBox>
        <ExampleBox id="loader-skeleton-profile" label="Profile skeleton" category={CAT} size="lg">
          <ProfileSkeleton />
        </ExampleBox>
        <ExampleBox id="loader-skeleton-table" label="Table skeleton" category={CAT} size="lg">
          <TableSkeleton />
        </ExampleBox>
        <ExampleBox id="loader-pulse-block" label="Pulse block" category={CAT} size="sm">
          <PulseBlock />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
