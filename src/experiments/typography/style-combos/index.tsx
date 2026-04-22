import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import BoldItalic from './BoldItalic'
import ThinUppercase from './ThinUppercase'
import Eyebrow from './Eyebrow'
import Numeric from './Numeric'
import Caption from './Caption'

const CAT = 'typography'

/**
 * Typography - Style Combos
 * @returns {JSX.Element}
 */
export default function TypographyStyleCombosIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="type-bold-italic" label="Bold italic" category={CAT} size="auto" className="w-44">
          <BoldItalic />
        </ExampleBox>
        <ExampleBox id="type-thin-upper" label="Thin uppercase" category={CAT} size="auto" className="w-44">
          <ThinUppercase />
        </ExampleBox>
        <ExampleBox id="type-semibold-sub" label="Eyebrow" category={CAT} size="auto" className="w-44">
          <Eyebrow />
        </ExampleBox>
        <ExampleBox id="type-num-bold" label="Numeric" category={CAT} size="auto" className="w-44">
          <Numeric />
        </ExampleBox>
        <ExampleBox id="type-caption" label="Caption" category={CAT} size="auto" className="w-44">
          <Caption />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
