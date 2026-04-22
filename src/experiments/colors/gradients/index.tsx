// Central system imports
import ExampleBox from '../../../components/ExampleBox'
import { Page, Section, Grid } from '../../../system'

// Individual gradient imports
import GradSwatch from './GradSwatch'
import GradText from './GradText'
import GradBorder from './GradBorder'

// Category token
const CAT = 'colors'

// Gradient definitions
const gradients = [
  { id: 'violet-pink', label: 'Violet → Pink', style: 'linear-gradient(135deg, #7c3aed, #ec4899)' },
  { id: 'blue-cyan', label: 'Blue → Cyan', style: 'linear-gradient(135deg, #2563eb, #06b6d4)' },
  { id: 'orange-rose', label: 'Orange → Rose', style: 'linear-gradient(135deg, #f97316, #f43f5e)' },
  {
    id: 'emerald-teal',
    label: 'Emerald → Teal',
    style: 'linear-gradient(135deg, #10b981, #0891b2)',
  },
  {
    id: 'amber-orange',
    label: 'Amber → Orange',
    style: 'linear-gradient(135deg, #f59e0b, #f97316)',
  },
  {
    id: 'indigo-violet',
    label: 'Indigo → Violet',
    style: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  },
  {
    id: 'rainbow',
    label: 'Rainbow',
    style: 'linear-gradient(135deg, #f43f5e, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6)',
  },
  { id: 'aurora', label: 'Aurora', style: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)' },
  { id: 'sunset', label: 'Sunset', style: 'linear-gradient(135deg, #fcd34d, #f97316, #e11d48)' },
  { id: 'ocean', label: 'Ocean', style: 'linear-gradient(135deg, #0ea5e9, #0369a1, #1e3a8a)' },
  {
    id: 'rose-gold',
    label: 'Rose gold',
    style: 'linear-gradient(135deg, #fecdd3, #fb7185, #e11d48)',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    style: 'linear-gradient(135deg, #1e293b, #334155, #475569)',
  },
]

// Gradient examples collection
/**
 * Colors - Gradients
 * @returns {JSX.Element}
 */
export default function ColorsGradientsIndex() {
  return (
    <Page>
      {/* Gradient swatches */}
      <Section title="Gradients" />
      <Grid>
        {gradients.map(({ id, label, style }) => (
          <ExampleBox
            key={id}
            id={`grad-${id}`}
            label={label}
            category={CAT}
            size="auto"
            className="w-36"
          >
            <GradSwatch style={style} />
          </ExampleBox>
        ))}
      </Grid>

      {/* Gradient text */}
      <Section title="Gradient text" />
      <Grid>
        {gradients.slice(0, 6).map(({ id, label, style }) => (
          <ExampleBox
            key={`text-${id}`}
            id={`text-grad-${id}`}
            label={label}
            category={CAT}
            size="auto"
            className="w-36"
          >
            <GradText style={style} />
          </ExampleBox>
        ))}
      </Grid>

      {/* Gradient borders */}
      <Section title="Gradient borders" />
      <Grid>
        {gradients.slice(0, 4).map(({ id, label, style }) => (
          <ExampleBox
            key={`border-${id}`}
            id={`border-grad-${id}`}
            label={label}
            category={CAT}
            size="auto"
            className="w-36"
          >
            <GradBorder style={style} />
          </ExampleBox>
        ))}
      </Grid>
    </Page>
  )
}
