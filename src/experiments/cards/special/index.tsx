import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Glass from './Glass'
import Settings from './Settings'
import Weather from './Weather'
import CodeSnippet from './CodeSnippet'
import File from './File'

const CAT = 'cards'

/**
 * Cards - Special
 * @returns {JSX.Element}
 */
export default function CardsSpecialIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-glass" label="Glass" category={CAT} size="auto" className="w-52">
          <Glass />
        </ExampleBox>
        <ExampleBox id="cards-settings" label="Settings" category={CAT} size="auto" className="w-56">
          <Settings />
        </ExampleBox>
        <ExampleBox id="cards-weather" label="Weather" category={CAT} size="auto" className="w-44">
          <Weather />
        </ExampleBox>
        <ExampleBox id="cards-code" label="Code snippet" category={CAT} size="auto" className="w-64">
          <CodeSnippet />
        </ExampleBox>
        <ExampleBox id="cards-file" label="File" category={CAT} size="auto" className="w-44">
          <File />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
