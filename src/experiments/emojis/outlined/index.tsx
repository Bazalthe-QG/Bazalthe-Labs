import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'
import HomeOutlined from './HomeOutlined'
import SearchOutlined from './SearchOutlined'
import BellOutlined from './BellOutlined'
import HeartOutlined from './HeartOutlined'
import StarOutlined from './StarOutlined'
import UserOutlined from './UserOutlined'
import MailOutlined from './MailOutlined'
import CheckOutlined from './CheckOutlined'
import CloseOutlined from './CloseOutlined'
import PlusOutlined from './PlusOutlined'
import TrashOutlined from './TrashOutlined'
import EditOutlined from './EditOutlined'
import DownloadOutlined from './DownloadOutlined'
import LockOutlined from './LockOutlined'
import EyeOutlined from './EyeOutlined'
import ShareOutlined from './ShareOutlined'
import BookmarkOutlined from './BookmarkOutlined'
import CopyOutlined from './CopyOutlined'
import RefreshOutlined from './RefreshOutlined'
import FilterOutlined from './FilterOutlined'
import HairlineWeight from './HairlineWeight'
import ThinWeight from './ThinWeight'
import RegularWeight from './RegularWeight'
import MediumWeight from './MediumWeight'
import BoldWeight from './BoldWeight'
import HeavyWeight from './HeavyWeight'
import OnBgSurface from './OnBgSurface'
import OnAccentSurface from './OnAccentSurface'
import OnMutedSurface from './OnMutedSurface'

const CAT = 'emojis'

/**
 * Emojis - Outlined
 * @returns {JSX.Element}
 */
export default function EmojisOutlinedIndex() {
  return (
    <Page>
      <Section title="Outlined icons">
        <Grid>
          <ExampleBox id="icon-outlined-home" label="Home" category={CAT} size="sm">
            <HomeOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-search" label="Search" category={CAT} size="sm">
            <SearchOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-bell" label="Bell" category={CAT} size="sm">
            <BellOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-heart" label="Heart" category={CAT} size="sm">
            <HeartOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-star" label="Star" category={CAT} size="sm">
            <StarOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-user" label="User" category={CAT} size="sm">
            <UserOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-mail" label="Mail" category={CAT} size="sm">
            <MailOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-check" label="Check" category={CAT} size="sm">
            <CheckOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-close" label="Close" category={CAT} size="sm">
            <CloseOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-plus" label="Plus" category={CAT} size="sm">
            <PlusOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-trash" label="Trash" category={CAT} size="sm">
            <TrashOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-edit" label="Edit" category={CAT} size="sm">
            <EditOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-download" label="Download" category={CAT} size="sm">
            <DownloadOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-lock" label="Lock" category={CAT} size="sm">
            <LockOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-eye" label="Eye" category={CAT} size="sm">
            <EyeOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-share" label="Share" category={CAT} size="sm">
            <ShareOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-bookmark" label="Bookmark" category={CAT} size="sm">
            <BookmarkOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-copy" label="Copy" category={CAT} size="sm">
            <CopyOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-refresh" label="Refresh" category={CAT} size="sm">
            <RefreshOutlined />
          </ExampleBox>
          <ExampleBox id="icon-outlined-filter" label="Filter" category={CAT} size="sm">
            <FilterOutlined />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="Stroke weight variants">
        <Grid>
          <ExampleBox id="icon-weight-Hairline" label="Hairline" category={CAT} size="sm">
            <HairlineWeight />
          </ExampleBox>
          <ExampleBox id="icon-weight-Thin" label="Thin" category={CAT} size="sm">
            <ThinWeight />
          </ExampleBox>
          <ExampleBox id="icon-weight-Regular" label="Regular" category={CAT} size="sm">
            <RegularWeight />
          </ExampleBox>
          <ExampleBox id="icon-weight-Medium" label="Medium" category={CAT} size="sm">
            <MediumWeight />
          </ExampleBox>
          <ExampleBox id="icon-weight-Bold" label="Bold" category={CAT} size="sm">
            <BoldWeight />
          </ExampleBox>
          <ExampleBox id="icon-weight-Heavy" label="Heavy" category={CAT} size="sm">
            <HeavyWeight />
          </ExampleBox>
        </Grid>
      </Section>
      <Section title="On surface">
        <Grid>
          <ExampleBox id="icon-on-surface-default" label="On bg" category={CAT} size="sm">
            <OnBgSurface />
          </ExampleBox>
          <ExampleBox id="icon-on-surface-accent" label="On accent" category={CAT} size="sm">
            <OnAccentSurface />
          </ExampleBox>
          <ExampleBox id="icon-on-surface-muted" label="Muted" category={CAT} size="sm">
            <OnMutedSurface />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
