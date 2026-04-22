import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import KeyCmd from './KeyCmd'
import KeyCtrl from './KeyCtrl'
import KeyAlt from './KeyAlt'
import KeyShift from './KeyShift'
import KeyEnter from './KeyEnter'
import KeyEsc from './KeyEsc'
import KeyTab from './KeyTab'
import KeyDel from './KeyDel'
import KeyUp from './KeyUp'
import KeySpace from './KeySpace'
import KeyShortcut from './KeyShortcut'

const CAT = 'badges'

/**
 * Badges - Keyboard
 * @returns {JSX.Element}
 */
export default function BadgesKeyboardIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badges-key-cmd" label="Cmd" category={CAT} size="sm">
          <KeyCmd />
        </ExampleBox>
        <ExampleBox id="badges-key-ctrl" label="Ctrl" category={CAT} size="sm">
          <KeyCtrl />
        </ExampleBox>
        <ExampleBox id="badges-key-alt" label="Alt" category={CAT} size="sm">
          <KeyAlt />
        </ExampleBox>
        <ExampleBox id="badges-key-shift" label="Shift" category={CAT} size="sm">
          <KeyShift />
        </ExampleBox>
        <ExampleBox id="badges-key-enter" label="Enter" category={CAT} size="sm">
          <KeyEnter />
        </ExampleBox>
        <ExampleBox id="badges-key-esc" label="Escape" category={CAT} size="sm">
          <KeyEsc />
        </ExampleBox>
        <ExampleBox id="badges-key-tab" label="Tab" category={CAT} size="sm">
          <KeyTab />
        </ExampleBox>
        <ExampleBox id="badges-key-del" label="Delete" category={CAT} size="sm">
          <KeyDel />
        </ExampleBox>
        <ExampleBox id="badges-key-up" label="↑" category={CAT} size="sm">
          <KeyUp />
        </ExampleBox>
        <ExampleBox id="badges-key-space" label="Space" category={CAT} size="sm">
          <KeySpace />
        </ExampleBox>
        <ExampleBox id="badges-shortcut" label="⌘K combo" category={CAT} size="sm">
          <KeyShortcut />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
