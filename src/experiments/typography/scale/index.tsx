import ExampleBox from '../../../components/ExampleBox'
import { Page } from '../../../system'
import Display from './Display'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import Body from './Body'
import Small from './Small'
import Xs from './Xs'
import Mono from './Mono'
import Label from './Label'

const CAT = 'typography'

/**
 * Typography - Scale
 * @returns {JSX.Element}
 */
export default function TypographyScaleIndex() {
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <ExampleBox id="type-display" label="Display" category={CAT} size="auto" className="w-full">
          <Display />
        </ExampleBox>
        <ExampleBox id="type-h1" label="H1" category={CAT} size="auto" className="w-full">
          <H1 />
        </ExampleBox>
        <ExampleBox id="type-h2" label="H2" category={CAT} size="auto" className="w-full">
          <H2 />
        </ExampleBox>
        <ExampleBox id="type-h3" label="H3" category={CAT} size="auto" className="w-full">
          <H3 />
        </ExampleBox>
        <ExampleBox id="type-h4" label="H4" category={CAT} size="auto" className="w-full">
          <H4 />
        </ExampleBox>
        <ExampleBox id="type-body" label="Body" category={CAT} size="auto" className="w-full">
          <Body />
        </ExampleBox>
        <ExampleBox id="type-small" label="Small" category={CAT} size="auto" className="w-full">
          <Small />
        </ExampleBox>
        <ExampleBox id="type-xs" label="XS" category={CAT} size="auto" className="w-full">
          <Xs />
        </ExampleBox>
        <ExampleBox id="type-mono" label="Mono" category={CAT} size="auto" className="w-full">
          <Mono />
        </ExampleBox>
        <ExampleBox id="type-label" label="Label" category={CAT} size="auto" className="w-full">
          <Label />
        </ExampleBox>
      </div>
    </Page>
  )
}
