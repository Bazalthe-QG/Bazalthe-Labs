// Central system imports
import ExampleBox from '../../../components/ExampleBox'
import { Page } from '../../../system'

// Individual palette imports
import PaletteViolet from './PaletteViolet'
import PaletteRose from './PaletteRose'
import PaletteBlue from './PaletteBlue'
import PaletteEmerald from './PaletteEmerald'
import PaletteAmber from './PaletteAmber'
import PaletteSlate from './PaletteSlate'

// Category token
const CAT = 'colors'

// Color palette collection
/**
 * Colors - Palettes
 * @returns {JSX.Element}
 */
export default function ColorsPaletteIndex() {
  return (
    <Page>
      <div className="space-y-6">
        {/* Violet palette */}
        <ExampleBox id="color-violet" label="Violet" category={CAT} size="auto">
          <PaletteViolet />
        </ExampleBox>

        {/* Rose palette */}
        <ExampleBox id="color-rose" label="Rose" category={CAT} size="auto">
          <PaletteRose />
        </ExampleBox>

        {/* Blue palette */}
        <ExampleBox id="color-blue" label="Blue" category={CAT} size="auto">
          <PaletteBlue />
        </ExampleBox>

        {/* Emerald palette */}
        <ExampleBox id="color-emerald" label="Emerald" category={CAT} size="auto">
          <PaletteEmerald />
        </ExampleBox>

        {/* Amber palette */}
        <ExampleBox id="color-amber" label="Amber" category={CAT} size="auto">
          <PaletteAmber />
        </ExampleBox>

        {/* Slate palette */}
        <ExampleBox id="color-slate" label="Slate" category={CAT} size="auto">
          <PaletteSlate />
        </ExampleBox>
      </div>
    </Page>
  )
}
