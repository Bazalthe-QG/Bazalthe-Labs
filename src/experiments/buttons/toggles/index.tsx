import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import ToggleLike from './ToggleLike'
import ToggleBookmark from './ToggleBookmark'
import ToggleFollow from './ToggleFollow'
import ToggleSubscribe from './ToggleSubscribe'
import ToggleCopy from './ToggleCopy'
import ToggleUpvote from './ToggleUpvote'
import ToggleStar from './ToggleStar'

const CAT = 'buttons'

/**
 * Buttons - Toggles
 * @returns {JSX.Element}
 */
export default function ButtonsTogglesIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-like" label="Like" category={CAT} size="sm">
          <ToggleLike />
        </ExampleBox>
        <ExampleBox id="btn-bookmark" label="Bookmark" category={CAT} size="sm">
          <ToggleBookmark />
        </ExampleBox>
        <ExampleBox id="btn-follow" label="Follow" category={CAT} size="sm">
          <ToggleFollow />
        </ExampleBox>
        <ExampleBox id="btn-subscribe" label="Subscribe" category={CAT} size="sm">
          <ToggleSubscribe />
        </ExampleBox>
        <ExampleBox id="btn-copy" label="Copy" category={CAT} size="sm">
          <ToggleCopy />
        </ExampleBox>
        <ExampleBox id="btn-upvote" label="Upvote" category={CAT} size="sm">
          <ToggleUpvote />
        </ExampleBox>
        <ExampleBox id="btn-star" label="Star" category={CAT} size="sm">
          <ToggleStar />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
