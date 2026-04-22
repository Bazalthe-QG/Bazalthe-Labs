import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import DecorativePro from './DecorativePro'
import DecorativeNew from './DecorativeNew'
import DecorativeHot from './DecorativeHot'
import DecorativeDark from './DecorativeDark'
import DecorativeFeatured from './DecorativeFeatured'
import DecorativeTrending from './DecorativeTrending'

const CAT = 'badges'

/**
 * Badges - Decorative
 * @returns {JSX.Element}
 */
export default function BadgesDecorativeIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-grad-pro" label="Pro" category={CAT} size="sm">
          <DecorativePro />
        </ExampleBox>
        <ExampleBox id="badges-grad-new" label="New" category={CAT} size="sm">
          <DecorativeNew />
        </ExampleBox>
        <ExampleBox id="badges-grad-hot" label="Hot" category={CAT} size="sm">
          <DecorativeHot />
        </ExampleBox>
        <ExampleBox id="badges-dark" label="Dark" category={CAT} size="sm">
          <DecorativeDark />
        </ExampleBox>
        <ExampleBox id="badges-icon-star" label="Featured" category={CAT} size="sm">
          <DecorativeFeatured />
        </ExampleBox>
        <ExampleBox id="badges-icon-fire" label="Trending" category={CAT} size="sm">
          <DecorativeTrending />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
