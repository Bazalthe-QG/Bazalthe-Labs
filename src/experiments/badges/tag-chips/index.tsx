import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import TagDesign from './TagDesign'
import TagEngineering from './TagEngineering'
import TagMarketing from './TagMarketing'
import TagSales from './TagSales'
import TagSupport from './TagSupport'
import TagProduct from './TagProduct'

const CAT = 'badges'

/**
 * Badges - Tag Chips
 * @returns {JSX.Element}
 */
export default function BadgesTagChipsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-tag-design" label="Design" category={CAT} size="sm">
          <TagDesign />
        </ExampleBox>
        <ExampleBox id="badges-tag-eng" label="Engineering" category={CAT} size="sm">
          <TagEngineering />
        </ExampleBox>
        <ExampleBox id="badges-tag-mkt" label="Marketing" category={CAT} size="sm">
          <TagMarketing />
        </ExampleBox>
        <ExampleBox id="badges-tag-sales" label="Sales" category={CAT} size="sm">
          <TagSales />
        </ExampleBox>
        <ExampleBox id="badges-tag-support" label="Support" category={CAT} size="sm">
          <TagSupport />
        </ExampleBox>
        <ExampleBox id="badges-tag-product" label="Product" category={CAT} size="sm">
          <TagProduct />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
