import action from './concepts/action.json'
import semanticStates from './concepts/semantic-states.json'
import compositeControls from './concepts/composite-controls.json'
import dataDisplay from './concepts/data-display.json'
import formInput from './concepts/form-input.json'
import navigation from './concepts/navigation.json'
import feedback from './concepts/feedback.json'
import labelTag from './concepts/label-tag.json'
import motion from './concepts/motion.json'
import colorToken from './concepts/color-token.json'
import typeScale from './concepts/type-scale.json'
import iconography from './concepts/iconography.json'

export interface ConceptEntry {
  category: string
  subPageId: string
}

export interface ConceptConfig {
  id: string
  label: string
  description: string
  entries: ConceptEntry[]
}

export const seedConcepts: ConceptConfig[] = [
  action,
  semanticStates,
  compositeControls,
  dataDisplay,
  formInput,
  navigation,
  feedback,
  labelTag,
  motion,
  colorToken,
  typeScale,
  iconography,
]

/** Map from "category/subPageId" → concept labels */
export const subPageConceptMap: Record<string, string[]> = {}
for (const concept of seedConcepts) {
  for (const entry of concept.entries) {
    const key = `${entry.category}/${entry.subPageId}`
    if (!subPageConceptMap[key]) subPageConceptMap[key] = []
    subPageConceptMap[key].push(concept.label)
  }
}
