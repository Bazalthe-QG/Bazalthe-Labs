import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import DefaultInput from './DefaultInput'
import FilledInput from './FilledInput'
import UnderlineInput from './UnderlineInput'
import SearchInput from './SearchInput'
import ErrorInput from './ErrorInput'
import SuccessInput from './SuccessInput'
import PasswordInput from './PasswordInput'
import PrefixInput from './PrefixInput'
import CurrencyInput from './CurrencyInput'
import DateInput from './DateInput'

const CAT = 'forms'

/**
 * Forms - Text Inputs
 * @returns {JSX.Element}
 */
export default function FormsTextInputsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-default" label="Default" category={CAT} size="auto" className="w-52">
          <DefaultInput />
        </ExampleBox>
        <ExampleBox id="form-filled" label="Filled style" category={CAT} size="auto" className="w-52">
          <FilledInput />
        </ExampleBox>
        <ExampleBox id="form-underline" label="Underline" category={CAT} size="auto" className="w-52">
          <UnderlineInput />
        </ExampleBox>
        <ExampleBox id="form-search" label="Search" category={CAT} size="auto" className="w-52">
          <SearchInput />
        </ExampleBox>
        <ExampleBox id="form-error" label="Error state" category={CAT} size="auto" className="w-52">
          <ErrorInput />
        </ExampleBox>
        <ExampleBox id="form-success-input" label="Success state" category={CAT} size="auto" className="w-52">
          <SuccessInput />
        </ExampleBox>
        <ExampleBox id="form-password" label="Password" category={CAT} size="auto" className="w-52">
          <PasswordInput />
        </ExampleBox>
        <ExampleBox id="form-prefix" label="With prefix" category={CAT} size="auto" className="w-52">
          <PrefixInput />
        </ExampleBox>
        <ExampleBox id="form-currency" label="Currency" category={CAT} size="auto" className="w-52">
          <CurrencyInput />
        </ExampleBox>
        <ExampleBox id="form-date" label="Date" category={CAT} size="auto" className="w-52">
          <DateInput />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
