import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Notifications from './Notifications'
import TaskList from './TaskList'
import MediaPlayer from './MediaPlayer'
import SocialPost from './SocialPost'
import Comment from './Comment'
import DraggableCard from './DraggableCard'

const CAT = 'cards'

/**
 * Cards - Interactive
 * @returns {JSX.Element}
 */
export default function CardsInteractiveIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-notifications" label="Notifications" category={CAT} size="auto" className="w-60">
          <Notifications />
        </ExampleBox>
        <ExampleBox id="cards-tasks" label="Task list" category={CAT} size="auto" className="w-52">
          <TaskList />
        </ExampleBox>
        <ExampleBox id="cards-media" label="Media player" category={CAT} size="auto" className="w-56">
          <MediaPlayer />
        </ExampleBox>
        <ExampleBox id="cards-social" label="Social post" category={CAT} size="auto" className="w-52">
          <SocialPost />
        </ExampleBox>
        <ExampleBox id="cards-comment" label="Comment" category={CAT} size="auto" className="w-60">
          <Comment />
        </ExampleBox>
        <ExampleBox id="cards-drag" label="Draggable card" category={CAT} size="auto" className="w-52">
          <DraggableCard />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
