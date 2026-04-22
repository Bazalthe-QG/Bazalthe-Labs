// Central system imports
import ExampleBox from '../../../components/ExampleBox'
import { Page } from '../../../system'

// Individual token imports
import TextPrimary from './TextPrimary'
import TextMuted from './TextMuted'
import TextAccent from './TextAccent'
import BgBase from './BgBase'
import BgSurface from './BgSurface'
import BgSidebar from './BgSidebar'
import BorderDefault from './BorderDefault'
import SemSuccess from './SemSuccess'
import SemWarning from './SemWarning'
import SemError from './SemError'
import SemInfo from './SemInfo'

// Category token
const CAT = 'colors'

// Group header
function GroupLabel({ children }: { children: string }) {
  return (
    <p
      className="text-[9px] font-bold uppercase tracking-[0.14em] mb-6 mt-12 first:mt-0"
      style={{ color: 'var(--c-muted)', opacity: 0.6 }}
    >
      {children}
    </p>
  )
}

// Design token swatches
/**
 * Colors - Tokens
 * @returns {JSX.Element}
 */
export default function ColorsTokensIndex() {
  return (
    <Page>
      <div className="p-10 max-w-5xl">
        {/* Text tokens */}
        <GroupLabel>Text</GroupLabel>
        <div className="flex flex-wrap gap-4">
          <ExampleBox
            id="token-text-primary"
            label="Primary"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <TextPrimary />
          </ExampleBox>
          <ExampleBox
            id="token-text-muted"
            label="Muted"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <TextMuted />
          </ExampleBox>
          <ExampleBox
            id="token-text-accent"
            label="Accent"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <TextAccent />
          </ExampleBox>
        </div>

        {/* Background tokens */}
        <GroupLabel>Background</GroupLabel>
        <div className="flex flex-wrap gap-4">
          <ExampleBox id="token-bg-base" label="Base" category={CAT} size="auto" className="w-44">
            <BgBase />
          </ExampleBox>
          <ExampleBox
            id="token-bg-surface"
            label="Surface"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <BgSurface />
          </ExampleBox>
          <ExampleBox
            id="token-bg-sidebar"
            label="Sidebar"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <BgSidebar />
          </ExampleBox>
        </div>

        {/* Border tokens */}
        <GroupLabel>Border</GroupLabel>
        <div className="flex flex-wrap gap-4">
          <ExampleBox
            id="token-border-default"
            label="Default"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <BorderDefault />
          </ExampleBox>
        </div>

        {/* Semantic tokens */}
        <GroupLabel>Semantic</GroupLabel>
        <div className="flex flex-wrap gap-4">
          <ExampleBox
            id="token-sem-success"
            label="Success"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <SemSuccess />
          </ExampleBox>
          <ExampleBox
            id="token-sem-warning"
            label="Warning"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <SemWarning />
          </ExampleBox>
          <ExampleBox
            id="token-sem-error"
            label="Error"
            category={CAT}
            size="auto"
            className="w-44"
          >
            <SemError />
          </ExampleBox>
          <ExampleBox id="token-sem-info" label="Info" category={CAT} size="auto" className="w-44">
            <SemInfo />
          </ExampleBox>
        </div>
      </div>
    </Page>
  )
}
