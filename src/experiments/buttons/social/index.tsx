import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import AuthGithub from './AuthGithub'
import AuthGoogle from './AuthGoogle'
import AuthTwitter from './AuthTwitter'
import AuthDiscord from './AuthDiscord'
import AuthApple from './AuthApple'

const CAT = 'buttons'

/**
 * Buttons - Social
 * @returns {JSX.Element}
 */
export default function ButtonsSocialIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="btn-github" label="GitHub" category={CAT} size="sm">
          <AuthGithub />
        </ExampleBox>
        <ExampleBox id="btn-google" label="Google" category={CAT} size="sm">
          <AuthGoogle />
        </ExampleBox>
        <ExampleBox id="btn-twitter" label="Twitter / X" category={CAT} size="sm">
          <AuthTwitter />
        </ExampleBox>
        <ExampleBox id="btn-discord" label="Discord" category={CAT} size="sm">
          <AuthDiscord />
        </ExampleBox>
        <ExampleBox id="btn-apple" label="Apple" category={CAT} size="sm">
          <AuthApple />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
