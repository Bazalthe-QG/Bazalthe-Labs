import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Seed concepts from the JSON config (hardcoded here to avoid import issues)
const SEED_CONCEPTS = [
  { label: 'Action', description: 'Core interactive triggers used to perform user actions' },
  {
    label: 'Semantic States',
    description: 'Components that communicate outcome, risk or progress status',
  },
  {
    label: 'Composite Controls',
    description: 'Multi-part interactive controls that switch or group options',
  },
  {
    label: 'Data Display',
    description: 'Cards and containers that present structured content or data',
  },
  {
    label: 'Form Input',
    description: 'Controls and patterns for collecting and submitting user data',
  },
  {
    label: 'Navigation',
    description: 'Layout shells and patterns for moving between pages or sections',
  },
  {
    label: 'Feedback',
    description: 'Indicators that communicate progress, loading or async state',
  },
  {
    label: 'Label & Tag',
    description: 'Small inline components for categorizing or annotating content',
  },
  { label: 'Motion', description: 'Animation and transition patterns for bringing UI to life' },
  {
    label: 'Color & Token',
    description: 'Color systems, gradients, shadows and CSS design token primitives',
  },
  {
    label: 'Type Scale',
    description: 'Type scale, font weights, text effects and typographic patterns',
  },
  {
    label: 'Iconography',
    description: 'SVG icon sets and emoji glyphs for communicating meaning without text',
  },
]

async function main() {
  console.log('Seeding concepts…')
  for (const c of SEED_CONCEPTS) {
    await prisma.concept.upsert({
      where: { label: c.label },
      update: { description: c.description },
      create: c,
    })
  }
  console.log(`✓ ${SEED_CONCEPTS.length} concepts seeded`)
  console.log('\nDone. First user to register will be assigned the admin role.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

