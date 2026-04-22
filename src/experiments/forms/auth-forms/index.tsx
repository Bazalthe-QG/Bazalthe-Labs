import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import SignIn from './SignIn'
import SignUp from './SignUp'

const CAT = 'forms'

/**
 * Forms - Auth Forms
 * @returns {JSX.Element}
 */
export default function FormsAuthFormsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-signin" label="Sign in" category={CAT} size="auto" className="w-72">
          <SignIn />
        </ExampleBox>
        <ExampleBox id="form-signup" label="Sign up" category={CAT} size="auto" className="w-72">
          <SignUp />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
