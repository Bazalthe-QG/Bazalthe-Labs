import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'
import RocketObj from './RocketObj'
import LightningObj from './LightningObj'
import FireObj from './FireObj'
import DiamondObj from './DiamondObj'
import Wave2Obj from './Wave2Obj'
import MoonObj from './MoonObj'
import Star2Obj from './Star2Obj'
import RainbowObj from './RainbowObj'
import CloudObj from './CloudObj'
import SnowflakeObj from './SnowflakeObj'
import TargetObj from './TargetObj'
import TrophyObj from './TrophyObj'
import GameObj from './GameObj'
import MusicObj from './MusicObj'
import ArtObj from './ArtObj'
import PhoneObj from './PhoneObj'
import LaptopObj from './LaptopObj'
import Watch2Obj from './Watch2Obj'
import KeyObj from './KeyObj'
import BulbObj from './BulbObj'
import BooksObj from './BooksObj'
import EmailObj from './EmailObj'
import ChartObj from './ChartObj'
import Bell2Obj from './Bell2Obj'
import Lock2Obj from './Lock2Obj'
import EarthObj from './EarthObj'
import Home2Obj from './Home2Obj'
import CarObj from './CarObj'
import PlaneObj from './PlaneObj'
import FlowerObj from './FlowerObj'
import FranceFlag from './FranceFlag'
import USAFlag from './USAFlag'
import UKFlag from './UKFlag'
import JapanFlag from './JapanFlag'
import GermanyFlag from './GermanyFlag'
import SpainFlag from './SpainFlag'
import ItalyFlag from './ItalyFlag'
import KoreaFlag from './KoreaFlag'
import BrazilFlag from './BrazilFlag'
import CanadaFlag from './CanadaFlag'
import EmojiButton from './EmojiButton'
import EmojiBadge from './EmojiBadge'
import EmojiAlert from './EmojiAlert'
import EmojiAvatar from './EmojiAvatar'
import EmojiMenu from './EmojiMenu'

const CAT = 'emojis'

/**
 * Emojis - Objects
 * @returns {JSX.Element}
 */
export default function EmojisObjectsIndex() {
  return (
    <Page>
      <Section title="Objects & symbols">
        <Grid>
          <ExampleBox id="emoji-obj-rocket" label="Rocket" category={CAT} size="sm">
            <RocketObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-lightning" label="Lightning" category={CAT} size="sm">
            <LightningObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-fire" label="Fire" category={CAT} size="sm">
            <FireObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-diamond" label="Diamond" category={CAT} size="sm">
            <DiamondObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-wave" label="Wave" category={CAT} size="sm">
            <Wave2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-moon" label="Moon" category={CAT} size="sm">
            <MoonObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-star" label="Star" category={CAT} size="sm">
            <Star2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-rainbow" label="Rainbow" category={CAT} size="sm">
            <RainbowObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-cloud" label="Cloud" category={CAT} size="sm">
            <CloudObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-snowflake" label="Snowflake" category={CAT} size="sm">
            <SnowflakeObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-target" label="Target" category={CAT} size="sm">
            <TargetObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-trophy" label="Trophy" category={CAT} size="sm">
            <TrophyObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-game" label="Game" category={CAT} size="sm">
            <GameObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-music" label="Music" category={CAT} size="sm">
            <MusicObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-art" label="Art" category={CAT} size="sm">
            <ArtObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-phone" label="Phone" category={CAT} size="sm">
            <PhoneObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-laptop" label="Laptop" category={CAT} size="sm">
            <LaptopObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-watch" label="Watch" category={CAT} size="sm">
            <Watch2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-key" label="Key" category={CAT} size="sm">
            <KeyObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-bulb" label="Bulb" category={CAT} size="sm">
            <BulbObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-books" label="Books" category={CAT} size="sm">
            <BooksObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-email" label="Email" category={CAT} size="sm">
            <EmailObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-chart" label="Chart" category={CAT} size="sm">
            <ChartObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-bell" label="Bell" category={CAT} size="sm">
            <Bell2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-lock" label="Lock" category={CAT} size="sm">
            <Lock2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-earth" label="Earth" category={CAT} size="sm">
            <EarthObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-home" label="Home" category={CAT} size="sm">
            <Home2Obj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-car" label="Car" category={CAT} size="sm">
            <CarObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-plane" label="Plane" category={CAT} size="sm">
            <PlaneObj />
          </ExampleBox>
          <ExampleBox id="emoji-obj-flower" label="Flower" category={CAT} size="sm">
            <FlowerObj />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Flags">
        <Grid>
          <ExampleBox id="emoji-flag-France" label="France" category={CAT} size="sm">
            <FranceFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-USA" label="USA" category={CAT} size="sm">
            <USAFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-UK" label="UK" category={CAT} size="sm">
            <UKFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Japan" label="Japan" category={CAT} size="sm">
            <JapanFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Germany" label="Germany" category={CAT} size="sm">
            <GermanyFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Spain" label="Spain" category={CAT} size="sm">
            <SpainFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Italy" label="Italy" category={CAT} size="sm">
            <ItalyFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Korea" label="Korea" category={CAT} size="sm">
            <KoreaFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Brazil" label="Brazil" category={CAT} size="sm">
            <BrazilFlag />
          </ExampleBox>
          <ExampleBox id="emoji-flag-Canada" label="Canada" category={CAT} size="sm">
            <CanadaFlag />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Emoji in UI context">
        <Grid>
          <ExampleBox id="emoji-ui-button" label="Emoji button" category={CAT} size="sm">
            <EmojiButton />
          </ExampleBox>
          <ExampleBox id="emoji-ui-badge" label="Emoji badge" category={CAT} size="sm">
            <EmojiBadge />
          </ExampleBox>
          <ExampleBox id="emoji-ui-alert" label="Emoji alert" category={CAT} size="sm">
            <EmojiAlert />
          </ExampleBox>
          <ExampleBox id="emoji-ui-avatar" label="Emoji avatar" category={CAT} size="sm">
            <EmojiAvatar />
          </ExampleBox>
          <ExampleBox id="emoji-ui-menu" label="Emoji menu" category={CAT} size="sm">
            <EmojiMenu />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
