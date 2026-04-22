import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import GradientText from './GradientText'
import WarmGradient from './WarmGradient'
import TextStroke from './TextStroke'
import TextShadow from './TextShadow'
import TextBalance from './TextBalance'
import LetterSpacing from './LetterSpacing'
import Truncate from './Truncate'
import Highlighted from './Highlighted'
import InlineCode from './InlineCode'

const CAT = 'typography'

/**
 * Typography - Special
 * @returns {JSX.Element}
 */
export default function TypographySpecialIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="type-gradient" label="Gradient text" category={CAT} size="auto" className="w-56">
          <GradientText />
        </ExampleBox>
        <ExampleBox id="type-gradient2" label="Warm gradient" category={CAT} size="auto" className="w-56">
          <WarmGradient />
        </ExampleBox>
        <ExampleBox id="type-stroke" label="Text stroke" category={CAT} size="auto" className="w-56">
          <TextStroke />
        </ExampleBox>
        <ExampleBox id="type-shadow" label="Text shadow" category={CAT} size="auto" className="w-56">
          <TextShadow />
        </ExampleBox>
        <ExampleBox id="type-balance" label="Text balance" category={CAT} size="auto" className="w-48">
          <TextBalance />
        </ExampleBox>
        <ExampleBox id="type-tracking" label="Letter spacing" category={CAT} size="auto" className="w-48">
          <LetterSpacing />
        </ExampleBox>
        <ExampleBox id="type-truncate" label="Truncate" category={CAT} size="auto" className="w-44">
          <Truncate />
        </ExampleBox>
        <ExampleBox id="type-highlight" label="Highlighted" category={CAT} size="auto" className="w-52">
          <Highlighted />
        </ExampleBox>
        <ExampleBox id="type-code" label="Inline code" category={CAT} size="auto" className="w-52">
          <InlineCode />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
