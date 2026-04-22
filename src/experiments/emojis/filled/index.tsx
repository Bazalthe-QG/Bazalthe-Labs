import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'
import HomeIcon from './HomeIcon'
import SearchIcon from './SearchIcon'
import BellIcon from './BellIcon'
import HeartIcon from './HeartIcon'
import StarIcon from './StarIcon'
import SettingsIcon from './SettingsIcon'
import UserIcon from './UserIcon'
import MailIcon from './MailIcon'
import CheckIcon from './CheckIcon'
import CloseIcon from './CloseIcon'
import PlusIcon from './PlusIcon'
import TrashIcon from './TrashIcon'
import EditIcon from './EditIcon'
import DownloadIcon from './DownloadIcon'
import UploadIcon from './UploadIcon'
import LockIcon from './LockIcon'
import EyeIcon from './EyeIcon'
import ShareIcon from './ShareIcon'
import BookmarkIcon from './BookmarkIcon'
import CopyIcon from './CopyIcon'
import VioletVariant from './VioletVariant'
import PinkVariant from './PinkVariant'
import BlueVariant from './BlueVariant'
import GreenVariant from './GreenVariant'
import OrangeVariant from './OrangeVariant'
import RedVariant from './RedVariant'
import Size12 from './Size12'
import Size16 from './Size16'
import Size20 from './Size20'
import Size24 from './Size24'
import Size32 from './Size32'
import Size40 from './Size40'
import Size48 from './Size48'

const CAT = 'emojis'

/**
 * Emojis - Filled
 * @returns {JSX.Element}
 */
export default function EmojisFilledIndex() {
  return (
    <Page>
      <Section title="Filled icons">
        <Grid>
          <ExampleBox id="icon-filled-home" label="Home" category={CAT} size="sm">
            <HomeIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-search" label="Search" category={CAT} size="sm">
            <SearchIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-bell" label="Bell" category={CAT} size="sm">
            <BellIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-heart" label="Heart" category={CAT} size="sm">
            <HeartIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-star" label="Star" category={CAT} size="sm">
            <StarIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-settings" label="Settings" category={CAT} size="sm">
            <SettingsIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-user" label="User" category={CAT} size="sm">
            <UserIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-mail" label="Mail" category={CAT} size="sm">
            <MailIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-check" label="Check" category={CAT} size="sm">
            <CheckIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-close" label="Close" category={CAT} size="sm">
            <CloseIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-plus" label="Plus" category={CAT} size="sm">
            <PlusIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-trash" label="Trash" category={CAT} size="sm">
            <TrashIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-edit" label="Edit" category={CAT} size="sm">
            <EditIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-download" label="Download" category={CAT} size="sm">
            <DownloadIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-upload" label="Upload" category={CAT} size="sm">
            <UploadIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-lock" label="Lock" category={CAT} size="sm">
            <LockIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-eye" label="Eye" category={CAT} size="sm">
            <EyeIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-share" label="Share" category={CAT} size="sm">
            <ShareIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-bookmark" label="Bookmark" category={CAT} size="sm">
            <BookmarkIcon />
          </ExampleBox>
          <ExampleBox id="icon-filled-copy" label="Copy" category={CAT} size="sm">
            <CopyIcon />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Color variants">
        <Grid>
          <ExampleBox id="icon-color-violet" label="violet" category={CAT} size="sm">
            <VioletVariant />
          </ExampleBox>
          <ExampleBox id="icon-color-pink" label="pink" category={CAT} size="sm">
            <PinkVariant />
          </ExampleBox>
          <ExampleBox id="icon-color-blue" label="blue" category={CAT} size="sm">
            <BlueVariant />
          </ExampleBox>
          <ExampleBox id="icon-color-green" label="green" category={CAT} size="sm">
            <GreenVariant />
          </ExampleBox>
          <ExampleBox id="icon-color-orange" label="orange" category={CAT} size="sm">
            <OrangeVariant />
          </ExampleBox>
          <ExampleBox id="icon-color-red" label="red" category={CAT} size="sm">
            <RedVariant />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Size scale">
        <Grid align="end">
          <ExampleBox id="icon-size-12" label="12px" category={CAT} size="sm">
            <Size12 />
          </ExampleBox>
          <ExampleBox id="icon-size-16" label="16px" category={CAT} size="sm">
            <Size16 />
          </ExampleBox>
          <ExampleBox id="icon-size-20" label="20px" category={CAT} size="sm">
            <Size20 />
          </ExampleBox>
          <ExampleBox id="icon-size-24" label="24px" category={CAT} size="sm">
            <Size24 />
          </ExampleBox>
          <ExampleBox id="icon-size-32" label="32px" category={CAT} size="sm">
            <Size32 />
          </ExampleBox>
          <ExampleBox id="icon-size-40" label="40px" category={CAT} size="sm">
            <Size40 />
          </ExampleBox>
          <ExampleBox id="icon-size-48" label="48px" category={CAT} size="sm">
            <Size48 />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
