import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SingleSelectChips from './SingleSelectChips'
import MultiSelectChips from './MultiSelectChips'
import TagCloud from './TagCloud'
import IconChips from './IconChips'

const CAT = 'forms'

/**
 * Forms - Chip Filters
 * @returns {JSX.Element}
 */
export default function FormsChipFiltersIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="filter-chips-single" label="Single-select chips" category={CAT} size="sm">
          <SingleSelectChips />
        </ExampleBox>
        <ExampleBox id="filter-chips-multi" label="Multi-select chips" category={CAT} size="sm">
          <MultiSelectChips />
        </ExampleBox>
        <ExampleBox id="filter-tag-cloud" label="Tag cloud" category={CAT} size="sm">
          <TagCloud />
        </ExampleBox>
        <ExampleBox id="filter-chips-icon" label="Icon chips" category={CAT} size="sm">
          <IconChips />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
