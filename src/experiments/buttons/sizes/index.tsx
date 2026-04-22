import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SizeXs from './SizeXs'
import SizeSm from './SizeSm'
import SizeMd from './SizeMd'
import SizeLg from './SizeLg'
import SizeXl from './SizeXl'
import Size2xl from './Size2xl'

const CAT = 'buttons'

/**
 * Buttons - Sizes
 * @returns {JSX.Element}
 */
export default function ButtonsSizesIndex() {
  return (
    <Page>
      <Grid align="end">
        <ExampleBox id="btn-size-xs" label="XS" category={CAT} size="sm">
          <SizeXs />
        </ExampleBox>
        <ExampleBox id="btn-size-sm" label="SM" category={CAT} size="sm">
          <SizeSm />
        </ExampleBox>
        <ExampleBox id="btn-size-md" label="MD" category={CAT} size="sm">
          <SizeMd />
        </ExampleBox>
        <ExampleBox id="btn-size-lg" label="LG" category={CAT} size="sm">
          <SizeLg />
        </ExampleBox>
        <ExampleBox id="btn-size-xl" label="XL" category={CAT} size="sm">
          <SizeXl />
        </ExampleBox>
        <ExampleBox id="btn-size-2xl" label="2XL" category={CAT} size="sm">
          <Size2xl />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
