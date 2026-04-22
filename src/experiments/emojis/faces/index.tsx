import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'
import GrinningFace from './GrinningFace'
import JoyFace from './JoyFace'
import HeartEyesFace from './HeartEyesFace'
import CoolFace from './CoolFace'
import PleadingFace from './PleadingFace'
import CryingFace from './CryingFace'
import ThinkingFace from './ThinkingFace'
import SleepingFace from './SleepingFace'
import StarStruckFace from './StarStruckFace'
import AngryFace from './AngryFace'
import ColdFace from './ColdFace'
import HotFace from './HotFace'
import ScreamingFace from './ScreamingFace'
import ExplodingHeadFace from './ExplodingHeadFace'
import MoneyEyesFace from './MoneyEyesFace'
import AngelicFace from './AngelicFace'
import DevilFace from './DevilFace'
import RobotFace from './RobotFace'
import GhostFace from './GhostFace'
import JackOLanternFace from './JackOLanternFace'
import ThumbsUpHand from './ThumbsUpHand'
import ThumbsDownHand from './ThumbsDownHand'
import WaveHand from './WaveHand'
import HandshakeHand from './HandshakeHand'
import ClapHand from './ClapHand'
import PeaceHand from './PeaceHand'
import FingersCrossedHand from './FingersCrossedHand'
import CallMeHand from './CallMeHand'
import MuscleHand from './MuscleHand'
import RaiseHandsHand from './RaiseHandsHand'
import LoveCombo from './LoveCombo'
import FireCombo from './FireCombo'
import PartyCombo from './PartyCombo'
import SuccessCombo from './SuccessCombo'
import SadCombo from './SadCombo'

const CAT = 'emojis'

/**
 * Emojis - Faces
 * @returns {JSX.Element}
 */
export default function EmojisFacesIndex() {
  return (
    <Page>
      <Section title="Faces & expressions">
        <Grid>
          <ExampleBox id="emoji-face-grinning" label="Grinning" category={CAT} size="sm">
            <GrinningFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-joy" label="Joy" category={CAT} size="sm">
            <JoyFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-heart-eyes" label="Heart eyes" category={CAT} size="sm">
            <HeartEyesFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-cool" label="Cool" category={CAT} size="sm">
            <CoolFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-pleading" label="Pleading" category={CAT} size="sm">
            <PleadingFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-crying" label="Crying" category={CAT} size="sm">
            <CryingFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-thinking" label="Thinking" category={CAT} size="sm">
            <ThinkingFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-sleeping" label="Sleeping" category={CAT} size="sm">
            <SleepingFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-star-struck" label="Star struck" category={CAT} size="sm">
            <StarStruckFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-angry" label="Angry" category={CAT} size="sm">
            <AngryFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-cold" label="Cold" category={CAT} size="sm">
            <ColdFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-hot" label="Hot" category={CAT} size="sm">
            <HotFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-screaming" label="Screaming" category={CAT} size="sm">
            <ScreamingFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-exploding-head" label="Exploding head" category={CAT} size="sm">
            <ExplodingHeadFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-money-eyes" label="Money eyes" category={CAT} size="sm">
            <MoneyEyesFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-angelic" label="Angelic" category={CAT} size="sm">
            <AngelicFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-devil" label="Devil" category={CAT} size="sm">
            <DevilFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-robot" label="Robot" category={CAT} size="sm">
            <RobotFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-ghost" label="Ghost" category={CAT} size="sm">
            <GhostFace />
          </ExampleBox>
          <ExampleBox id="emoji-face-jack-o-lantern" label="Jack-o-lantern" category={CAT} size="sm">
            <JackOLanternFace />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Hand gestures">
        <Grid>
          <ExampleBox id="emoji-hand-Thumbs up" label="Thumbs up" category={CAT} size="sm">
            <ThumbsUpHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Thumbs down" label="Thumbs down" category={CAT} size="sm">
            <ThumbsDownHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Wave" label="Wave" category={CAT} size="sm">
            <WaveHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Handshake" label="Handshake" category={CAT} size="sm">
            <HandshakeHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Clap" label="Clap" category={CAT} size="sm">
            <ClapHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Peace" label="Peace" category={CAT} size="sm">
            <PeaceHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Fingers crossed" label="Fingers crossed" category={CAT} size="sm">
            <FingersCrossedHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Call me" label="Call me" category={CAT} size="sm">
            <CallMeHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Muscle" label="Muscle" category={CAT} size="sm">
            <MuscleHand />
          </ExampleBox>
          <ExampleBox id="emoji-hand-Raise hands" label="Raise hands" category={CAT} size="sm">
            <RaiseHandsHand />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Combinations">
        <Grid>
          <ExampleBox id="emoji-combo-love" label="Love combo" category={CAT} size="sm">
            <LoveCombo />
          </ExampleBox>
          <ExampleBox id="emoji-combo-fire" label="Fire combo" category={CAT} size="sm">
            <FireCombo />
          </ExampleBox>
          <ExampleBox id="emoji-combo-party" label="Party combo" category={CAT} size="sm">
            <PartyCombo />
          </ExampleBox>
          <ExampleBox id="emoji-combo-success" label="Success combo" category={CAT} size="sm">
            <SuccessCombo />
          </ExampleBox>
          <ExampleBox id="emoji-combo-sad" label="Sad combo" category={CAT} size="sm">
            <SadCombo />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
