import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import W100Thin from './W100Thin'
import W200ExtraLight from './W200ExtraLight'
import W300Light from './W300Light'
import W400Regular from './W400Regular'
import W500Medium from './W500Medium'
import W600SemiBold from './W600SemiBold'
import W700Bold from './W700Bold'
import W800ExtraBold from './W800ExtraBold'
import W900Black from './W900Black'

const CAT = 'typography'

/**
 * Typography - Weights
 * @returns {JSX.Element}
 */
export default function TypographyWeightsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="type-w100" label="100 Thin" category={CAT} size="auto" className="w-40">
          <W100Thin />
        </ExampleBox>
        <ExampleBox id="type-w200" label="200 ExtraLight" category={CAT} size="auto" className="w-40">
          <W200ExtraLight />
        </ExampleBox>
        <ExampleBox id="type-w300" label="300 Light" category={CAT} size="auto" className="w-40">
          <W300Light />
        </ExampleBox>
        <ExampleBox id="type-w400" label="400 Regular" category={CAT} size="auto" className="w-40">
          <W400Regular />
        </ExampleBox>
        <ExampleBox id="type-w500" label="500 Medium" category={CAT} size="auto" className="w-40">
          <W500Medium />
        </ExampleBox>
        <ExampleBox id="type-w600" label="600 SemiBold" category={CAT} size="auto" className="w-40">
          <W600SemiBold />
        </ExampleBox>
        <ExampleBox id="type-w700" label="700 Bold" category={CAT} size="auto" className="w-40">
          <W700Bold />
        </ExampleBox>
        <ExampleBox id="type-w800" label="800 ExtraBold" category={CAT} size="auto" className="w-40">
          <W800ExtraBold />
        </ExampleBox>
        <ExampleBox id="type-w900" label="900 Black" category={CAT} size="auto" className="w-40">
          <W900Black />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
