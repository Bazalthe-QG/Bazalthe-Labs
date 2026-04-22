// Central layout system
import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'

// Base shapes
import ShapePill from './ShapePill'
import ShapeSquare from './ShapeSquare'
import ShapeRoundedSm from './ShapeRoundedSm'
import ShapeRoundedXl from './ShapeRoundedXl'
import ShapeSkewed from './ShapeSkewed'
import ShapeCutCorner from './ShapeCutCorner'
import ShapeFloating from './ShapeFloating'
import ShapeGradient from './ShapeGradient'
import ShapeGhost from './ShapeGhost'

// Box-border variants
import ShapeOutline from './ShapeOutline'
import ShapeDashed from './ShapeDashed'
import ShapeDotted from './ShapeDotted'
import ShapeDouble from './ShapeDouble'

// Specific styles
import ShapeBrutalist from './ShapeBrutalist'
import ShapeRetro from './ShapeRetro'
import ShapeNeon from './ShapeNeon'

const CAT = 'buttons'

// Buttons — shapes & border styles
export default function ButtonsShapesIndex() {
  return (
    <Page>
      <Section title="Shapes">
        <Grid>
          <ExampleBox id="btn-shape-pill" label="Pill" category={CAT} size="auto">
            <ShapePill />
          </ExampleBox>
          <ExampleBox id="btn-shape-square" label="Square" category={CAT} size="auto">
            <ShapeSquare />
          </ExampleBox>
          <ExampleBox id="btn-shape-sm-round" label="Rounded SM" category={CAT} size="auto">
            <ShapeRoundedSm />
          </ExampleBox>
          <ExampleBox id="btn-shape-rounded-xl" label="Rounded XL" category={CAT} size="auto">
            <ShapeRoundedXl />
          </ExampleBox>
          <ExampleBox id="btn-shape-skewed" label="Skewed" category={CAT} size="auto">
            <ShapeSkewed />
          </ExampleBox>
          <ExampleBox id="btn-shape-cut-corner" label="Cut Corner" category={CAT} size="auto">
            <ShapeCutCorner />
          </ExampleBox>
          <ExampleBox id="btn-shape-floating" label="Floating" category={CAT} size="auto">
            <ShapeFloating />
          </ExampleBox>
          <ExampleBox id="btn-shape-gradient" label="Gradient" category={CAT} size="auto">
            <ShapeGradient />
          </ExampleBox>
          <ExampleBox id="btn-shape-ghost" label="Ghost" category={CAT} size="auto">
            <ShapeGhost />
          </ExampleBox>
        </Grid>
      </Section>

      <Section title="Box styles">
        <Grid>
          <ExampleBox id="btn-shape-outline" label="Outline" category={CAT} size="auto">
            <ShapeOutline />
          </ExampleBox>
          <ExampleBox id="btn-shape-dashed" label="Dashed" category={CAT} size="auto">
            <ShapeDashed />
          </ExampleBox>
          <ExampleBox id="btn-shape-dotted" label="Dotted" category={CAT} size="auto">
            <ShapeDotted />
          </ExampleBox>
          <ExampleBox id="btn-shape-double" label="Double" category={CAT} size="auto">
            <ShapeDouble />
          </ExampleBox>
        </Grid>
      </Section>

      <Section title="Specific styles">
        <Grid>
          <ExampleBox id="btn-shape-brutalist" label="Brutalist" category={CAT} size="auto">
            <ShapeBrutalist />
          </ExampleBox>
          <ExampleBox id="btn-shape-retro" label="Retro" category={CAT} size="auto">
            <ShapeRetro />
          </ExampleBox>
          <ExampleBox id="btn-shape-neon" label="Neon" category={CAT} size="auto">
            <ShapeNeon />
          </ExampleBox>
        </Grid>
      </Section>
    </Page>
  )
}
