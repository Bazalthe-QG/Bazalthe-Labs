import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import StarRating from './StarRating'
import EmojiRating from './EmojiRating'
import NpsScale from './NpsScale'
import ColorPicker from './ColorPicker'

const CAT = 'forms'

/**
 * Forms - Ratings
 * @returns {JSX.Element}
 */
export default function FormsRatingsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-stars" label="Star rating" category={CAT} size="sm">
          <StarRating />
        </ExampleBox>
        <ExampleBox id="form-emoji-rate" label="Emoji rating" category={CAT} size="sm">
          <EmojiRating />
        </ExampleBox>
        <ExampleBox id="form-nps" label="NPS scale" category={CAT} size="sm">
          <NpsScale />
        </ExampleBox>
        <ExampleBox id="form-color-picker" label="Color picker" category={CAT} size="sm">
          <ColorPicker />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
