import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import PrimarySolid from './PrimarySolid'
import PrimarySoft from './PrimarySoft'
import PrimaryOutline from './PrimaryOutline'
import PrimaryPill from './PrimaryPill'
import PrimaryDot from './PrimaryDot'
import SuccessSolid from './SuccessSolid'
import SuccessSoft from './SuccessSoft'
import SuccessOutline from './SuccessOutline'
import SuccessPill from './SuccessPill'
import SuccessDot from './SuccessDot'
import WarningSolid from './WarningSolid'
import WarningSoft from './WarningSoft'
import WarningOutline from './WarningOutline'
import WarningPill from './WarningPill'
import WarningDot from './WarningDot'
import DangerSolid from './DangerSolid'
import DangerSoft from './DangerSoft'
import DangerOutline from './DangerOutline'
import DangerPill from './DangerPill'
import DangerDot from './DangerDot'
import InfoSolid from './InfoSolid'
import InfoSoft from './InfoSoft'
import InfoOutline from './InfoOutline'
import InfoPill from './InfoPill'
import InfoDot from './InfoDot'
import NeutralSolid from './NeutralSolid'
import NeutralSoft from './NeutralSoft'
import NeutralOutline from './NeutralOutline'
import NeutralPill from './NeutralPill'
import NeutralDot from './NeutralDot'

const CAT = 'badges'

/**
 * Badges - Labels
 * @returns {JSX.Element}
 */
export default function BadgesLabelsIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="badge-primary-solid" label="Primary Solid" category={CAT} size="sm">
          <PrimarySolid />
        </ExampleBox>
        <ExampleBox id="badge-primary-soft" label="Primary Soft" category={CAT} size="sm">
          <PrimarySoft />
        </ExampleBox>
        <ExampleBox id="badge-primary-outline" label="Primary Outline" category={CAT} size="sm">
          <PrimaryOutline />
        </ExampleBox>
        <ExampleBox id="badge-primary-pill" label="Primary Pill" category={CAT} size="sm">
          <PrimaryPill />
        </ExampleBox>
        <ExampleBox id="badge-primary-dot" label="Primary Dot" category={CAT} size="sm">
          <PrimaryDot />
        </ExampleBox>
        <ExampleBox id="badge-success-solid" label="Success Solid" category={CAT} size="sm">
          <SuccessSolid />
        </ExampleBox>
        <ExampleBox id="badge-success-soft" label="Success Soft" category={CAT} size="sm">
          <SuccessSoft />
        </ExampleBox>
        <ExampleBox id="badge-success-outline" label="Success Outline" category={CAT} size="sm">
          <SuccessOutline />
        </ExampleBox>
        <ExampleBox id="badge-success-pill" label="Success Pill" category={CAT} size="sm">
          <SuccessPill />
        </ExampleBox>
        <ExampleBox id="badge-success-dot" label="Success Dot" category={CAT} size="sm">
          <SuccessDot />
        </ExampleBox>
        <ExampleBox id="badge-warning-solid" label="Warning Solid" category={CAT} size="sm">
          <WarningSolid />
        </ExampleBox>
        <ExampleBox id="badge-warning-soft" label="Warning Soft" category={CAT} size="sm">
          <WarningSoft />
        </ExampleBox>
        <ExampleBox id="badge-warning-outline" label="Warning Outline" category={CAT} size="sm">
          <WarningOutline />
        </ExampleBox>
        <ExampleBox id="badge-warning-pill" label="Warning Pill" category={CAT} size="sm">
          <WarningPill />
        </ExampleBox>
        <ExampleBox id="badge-warning-dot" label="Warning Dot" category={CAT} size="sm">
          <WarningDot />
        </ExampleBox>
        <ExampleBox id="badge-danger-solid" label="Danger Solid" category={CAT} size="sm">
          <DangerSolid />
        </ExampleBox>
        <ExampleBox id="badge-danger-soft" label="Danger Soft" category={CAT} size="sm">
          <DangerSoft />
        </ExampleBox>
        <ExampleBox id="badge-danger-outline" label="Danger Outline" category={CAT} size="sm">
          <DangerOutline />
        </ExampleBox>
        <ExampleBox id="badge-danger-pill" label="Danger Pill" category={CAT} size="sm">
          <DangerPill />
        </ExampleBox>
        <ExampleBox id="badge-danger-dot" label="Danger Dot" category={CAT} size="sm">
          <DangerDot />
        </ExampleBox>
        <ExampleBox id="badge-info-solid" label="Info Solid" category={CAT} size="sm">
          <InfoSolid />
        </ExampleBox>
        <ExampleBox id="badge-info-soft" label="Info Soft" category={CAT} size="sm">
          <InfoSoft />
        </ExampleBox>
        <ExampleBox id="badge-info-outline" label="Info Outline" category={CAT} size="sm">
          <InfoOutline />
        </ExampleBox>
        <ExampleBox id="badge-info-pill" label="Info Pill" category={CAT} size="sm">
          <InfoPill />
        </ExampleBox>
        <ExampleBox id="badge-info-dot" label="Info Dot" category={CAT} size="sm">
          <InfoDot />
        </ExampleBox>
        <ExampleBox id="badge-neutral-solid" label="Neutral Solid" category={CAT} size="sm">
          <NeutralSolid />
        </ExampleBox>
        <ExampleBox id="badge-neutral-soft" label="Neutral Soft" category={CAT} size="sm">
          <NeutralSoft />
        </ExampleBox>
        <ExampleBox id="badge-neutral-outline" label="Neutral Outline" category={CAT} size="sm">
          <NeutralOutline />
        </ExampleBox>
        <ExampleBox id="badge-neutral-pill" label="Neutral Pill" category={CAT} size="sm">
          <NeutralPill />
        </ExampleBox>
        <ExampleBox id="badge-neutral-dot" label="Neutral Dot" category={CAT} size="sm">
          <NeutralDot />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
