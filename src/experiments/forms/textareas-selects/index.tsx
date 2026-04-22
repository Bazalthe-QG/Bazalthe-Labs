import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import TextareaInput from './TextareaInput'
import SelectInput from './SelectInput'
import TextareaCharCount from './TextareaCharCount'
import GroupedSelect from './GroupedSelect'

const CAT = 'forms'

/**
 * Forms - Textareas Selects
 * @returns {JSX.Element}
 */
export default function FormsTextareasSelectsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-textarea" label="Textarea" category={CAT} size="auto" className="w-56">
          <TextareaInput />
        </ExampleBox>
        <ExampleBox id="form-select" label="Select" category={CAT} size="auto" className="w-48">
          <SelectInput />
        </ExampleBox>
        <ExampleBox id="form-textarea-char" label="Textarea + char count" category={CAT} size="auto" className="w-64">
          <TextareaCharCount />
        </ExampleBox>
        <ExampleBox id="form-select-grouped" label="Grouped select" category={CAT} size="auto" className="w-48">
          <GroupedSelect />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
