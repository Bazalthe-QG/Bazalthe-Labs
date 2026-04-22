import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import TagInput from './TagInput'
import MultiSelectInput from './MultiSelectInput'

const CAT = 'forms'

/**
 * Forms - Tag Multi
 * @returns {JSX.Element}
 */
export default function FormsTagMultiIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-tag-input" label="Tag input" category={CAT} size="auto" className="w-72">
          <TagInput />
        </ExampleBox>
        <ExampleBox id="form-multiselect" label="Multi-select chips" category={CAT} size="auto" className="w-64">
          <MultiSelectInput />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
