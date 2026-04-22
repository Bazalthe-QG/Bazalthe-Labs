import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import FileButton from './FileButton'
import DropZone from './DropZone'
import FileUploaded from './FileUploaded'

const CAT = 'forms'

/**
 * Forms - File Upload
 * @returns {JSX.Element}
 */
export default function FormsFileUploadIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="form-file" label="File button" category={CAT} size="auto" className="w-52">
          <FileButton />
        </ExampleBox>
        <ExampleBox id="form-dropzone" label="Drag & drop zone" category={CAT} size="auto" className="w-64">
          <DropZone />
        </ExampleBox>
        <ExampleBox id="form-file-uploaded" label="File uploaded" category={CAT} size="auto" className="w-60">
          <FileUploaded />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
