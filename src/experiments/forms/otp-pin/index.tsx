import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import OtpInput from './OtpInput'
import PinInput from './PinInput'

const CAT = 'forms'

/**
 * Forms - Otp Pin
 * @returns {JSX.Element}
 */
export default function FormsOtpPinIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-otp" label="6-digit OTP" category={CAT} size="auto" className="w-auto">
          <OtpInput />
        </ExampleBox>
        <ExampleBox id="form-pin" label="4-digit PIN" category={CAT} size="auto" className="w-auto">
          <PinInput />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
