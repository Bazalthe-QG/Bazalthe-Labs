import { lazy, type ComponentType } from 'react'

export type Category =
  | 'buttons'
  | 'cards'
  | 'forms'
  | 'typography'
  | 'animations'
  | 'colors'
  | 'shadows'
  | 'layouts'
  | 'badges'
  | 'loaders'
  | 'emojis'

export interface SubPage {
  id: string
  label: string
  description: string
  component: React.LazyExoticComponent<ComponentType>
}

export interface CategoryMeta {
  id: Category
  label: string
  description: string
  subPages: SubPage[]
}

export const categories: CategoryMeta[] = [
  {
    id: 'buttons',
    label: 'Buttons',
    description: 'Interactive controls for every action and context',
    subPages: [
      {
        id: 'variants',
        label: 'Variants',
        description: 'Solid, outline, ghost, soft and glass button styles',
        component: lazy(() => import('./buttons/ButtonsVariants')),
      },
      /** Danger Buttons
       * @params - Destructive actions
       */
      {
        id: 'danger',
        label: 'Danger',
        description: 'Destructive action button styles in multiple variants',
        component: lazy(() => import('./buttons/ButtonsDanger')),
      },
      /** Success & Warning
       * @params - Semantic states
       */
      {
        id: 'success',
        label: 'Success',
        description: 'Confirmation and success action button styles',
        component: lazy(() => import('./buttons/ButtonsSuccess')),
      },
      {
        id: 'warning',
        label: 'Warning',
        description: 'Caution and warning action button styles',
        component: lazy(() => import('./buttons/ButtonsWarning')),
      },
      /** Size & Shape Variants
       * @params - Layout options
       */
      {
        id: 'sizes',
        label: 'Sizes',
        description: 'Button size scale from XS to 2XL',
        component: lazy(() => import('./buttons/ButtonsSizes')),
      },
      {
        id: 'shapes',
        label: 'Shapes',
        description: 'Pill, square, brutalist and neon shape variants',
        component: lazy(() => import('./buttons/ButtonsShapes')),
      },
      /** Icons & States
       * @params - Interactive elements
       */
      {
        id: 'icons',
        label: 'With Icons',
        description: 'Buttons with leading, trailing and standalone icons',
        component: lazy(() => import('./buttons/ButtonsIcons')),
      },
      {
        id: 'states',
        label: 'States',
        description: 'Loading, disabled, gradient and glow states',
        component: lazy(() => import('./buttons/ButtonsStates')),
      },
      /** Color & Theme Variants
       * @params - Visual themes
       */
      {
        id: 'colors',
        label: 'Color Spectrum',
        description: 'Buttons in every color of the spectrum',
        component: lazy(() => import('./buttons/ButtonsColors')),
      },
      {
        id: 'soft',
        label: 'Soft Colors',
        description: 'Pastel-background colored button variants',
        component: lazy(() => import('./buttons/ButtonsSoft')),
      },
      /** Social & Layout
       * @params - Special uses
       */
      {
        id: 'social',
        label: 'Social / OAuth',
        description: 'Third-party authentication and social login buttons',
        component: lazy(() => import('./buttons/ButtonsSocial')),
      },
      {
        id: 'full-width',
        label: 'Full-width',
        description: 'Buttons that span the full container width',
        component: lazy(() => import('./buttons/ButtonsFullWidth')),
      },
      /** Composite Controls
       * @params - Complex patterns
       */
      {
        id: 'groups',
        label: 'Button Groups',
        description: 'Grouped buttons in various styles',
        component: lazy(() => import('./buttons/ButtonsGroups')),
      },
      {
        id: 'segments',
        label: 'Segmented Controls',
        description: 'Segmented toggle and switcher variants',
        component: lazy(() => import('./buttons/ButtonsSegments')),
      },
      {
        id: 'tabs',
        label: 'Tab Bars',
        description: 'Tab navigation patterns in various styles',
        component: lazy(() => import('./buttons/ButtonsTabs')),
      },
      {
        id: 'toggles',
        label: 'Interactive Toggles',
        description: 'Like, bookmark, follow and other toggle buttons',
        component: lazy(() => import('./buttons/ButtonsToggles')),
      },
      {
        id: 'with-badges',
        label: 'With Badges',
        description: 'Buttons with notification and count badges',
        component: lazy(() => import('./buttons/ButtonsBadges')),
      },
    ],
  },
  {
    id: 'cards',
    label: 'Cards',
    description: 'Content containers for every use case',
    subPages: [
      {
        id: 'identity-cards',
        label: 'Identity',
        description: 'Profile, team member and contact cards',
        component: lazy(() => import('./cards/CardsIdentityCards')),
      },
      /** Content Types
       * @params - Article formats
       */
      {
        id: 'content',
        label: 'Content',
        description: 'Article, quote, recipe and event cards',
        component: lazy(() => import('./cards/CardsContent')),
      },
      /** Data & Display
       * @params - Information cards
       */
      {
        id: 'data-stats',
        label: 'Data & Stats',
        description: 'Stat, chart, invoice and progress cards',
        component: lazy(() => import('./cards/CardsDataStats')),
      },
      /** Special & Interactive
       * @params - Unique designs
       */
      {
        id: 'special',
        label: 'Special',
        description: 'Glass, settings, weather, code and file cards',
        component: lazy(() => import('./cards/CardsSpecial')),
      },
      /** Commerce
       * @params - Business cards
       */
      {
        id: 'interactive',
        label: 'Interactive',
        description: 'Notifications, tasks, media and social cards',
        component: lazy(() => import('./cards/CardsInteractive')),
      },
      {
        id: 'product',
        label: 'Product',
        description: 'E-commerce product and pricing cards',
        component: lazy(() => import('./cards/CardsProduct')),
      },
      {
        id: 'empty-states',
        label: 'Empty States',
        description: 'Placeholder cards for empty and error states',
        component: lazy(() => import('./cards/CardsEmptyStates')),
      },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',
    description: 'Input components for collecting user data',
    subPages: [
      {
        id: 'text-inputs',
        label: 'Text Inputs',
        description: 'Default, filled, underline and special text inputs',
        component: lazy(() => import('./forms/FormsTextInputs')),
      },
      /** OTP & Selection
       * @params - Specialized inputs
       */
      {
        id: 'otp-pin',
        label: 'OTP / PIN',
        description: 'One-time password and PIN code inputs',
        component: lazy(() => import('./forms/FormsOtpPin')),
      },
      {
        id: 'tag-multi',
        label: 'Tag & Multi-select',
        description: 'Tag input and multi-select chip inputs',
        component: lazy(() => import('./forms/FormsTagMulti')),
      },
      /** Textareas & Toggles
       * @params - Extended inputs
       */
      {
        id: 'textareas-selects',
        label: 'Textarea & Select',
        description: 'Multiline text and select dropdowns',
        component: lazy(() => import('./forms/FormsTextareasSelects')),
      },
      {
        id: 'file-upload',
        label: 'File Upload',
        description: 'File buttons, drag and drop zones',
        component: lazy(() => import('./forms/FormsFileUpload')),
      },
      /** Toggles & Radio
       * @params - Selection controls
       */
      {
        id: 'toggles-checks',
        label: 'Toggles & Checkboxes',
        description: 'Toggle switches and checkbox controls',
        component: lazy(() => import('./forms/FormsTogglesChecks')),
      },
      {
        id: 'radio',
        label: 'Radio Buttons',
        description: 'Radio and plan selection cards',
        component: lazy(() => import('./forms/FormsRadio')),
      },
      /** Sliders & Ratings
       * @params - Range controls
       */
      {
        id: 'sliders',
        label: 'Sliders & Ranges',
        description: 'Single and double range sliders',
        component: lazy(() => import('./forms/FormsSliders')),
      },
      {
        id: 'ratings',
        label: 'Ratings & Feedback',
        description: 'Star, emoji, NPS ratings and color picker',
        component: lazy(() => import('./forms/FormsRatings')),
      },
      /** Wizards & Search
       * @params - Advanced forms
       */
      {
        id: 'step-wizard',
        label: 'Step Wizard',
        description: 'Multi-step form wizards',
        component: lazy(() => import('./forms/FormsStepWizard')),
      },
      {
        id: 'search-bars',
        label: 'Search Bars',
        description: 'Text search input patterns',
        component: lazy(() => import('./forms/FormsSearchBars')),
      },
      /** Filters & Panels
       * @params - Data filtering
       */
      {
        id: 'chip-filters',
        label: 'Chip Filters',
        description: 'Single and multi-select chip filters',
        component: lazy(() => import('./forms/FormsChipFilters')),
      },
      {
        id: 'dropdown-filters',
        label: 'Dropdown Filters',
        description: 'Filter row, inline bar and range filters',
        component: lazy(() => import('./forms/FormsDropdownFilters')),
      },
      /** Authentication & Composition
       * @params - Complex workflows
       */
      {
        id: 'filter-panels',
        label: 'Filter Panels',
        description: 'Advanced and sidebar filter panels',
        component: lazy(() => import('./forms/FormsFilterPanels')),
      },
      {
        id: 'auth-forms',
        label: 'Authentication',
        description: 'Sign in and sign up form patterns',
        component: lazy(() => import('./forms/FormsAuth')),
      },
      {
        id: 'composed-forms',
        label: 'Composed Forms',
        description: 'Newsletter, feedback, settings and invite forms',
        component: lazy(() => import('./forms/FormsComposedForms')),
      },
    ],
  },
  {
    id: 'typography',
    label: 'Typography',
    description: 'Type system, weights and text utilities',
    subPages: [
      {
        id: 'scale',
        label: 'Type Scale',
        description: 'Display, headings, body and label sizes',
        component: lazy(() => import('./typography/TypographyScale')),
      },
      {
        id: 'weights',
        label: 'Font Weights',
        description: 'From Thin (100) to Black (900)',
        component: lazy(() => import('./typography/TypographyWeights')),
      },
      {
        id: 'style-combos',
        label: 'Style Combinations',
        description: 'Bold italic, uppercase, eyebrow and numeric styles',
        component: lazy(() => import('./typography/TypographyStyleCombos')),
      },
      {
        id: 'special',
        label: 'Special Effects',
        description: 'Gradient text, letter spacing and truncation',
        component: lazy(() => import('./typography/TypographySpecial')),
      },
    ],
  },
  {
    id: 'animations',
    label: 'Animations',
    description: 'Motion patterns and transition effects',
    subPages: [
      {
        id: 'entrance',
        label: 'Entrance',
        description: 'Fade, scale, elastic and rotate entrance animations',
        component: lazy(() => import('./animations/AnimationsEntrance')),
      },
      /** Directional & Sequential
       * @params - Motion variations
       */
      {
        id: 'slide',
        label: 'Slide',
        description: 'Directional slide-in animations',
        component: lazy(() => import('./animations/AnimationsSlide')),
      },
      {
        id: 'stagger',
        label: 'Stagger',
        description: 'Staggered and sequential animations',
        component: lazy(() => import('./animations/AnimationsStagger')),
      },
      /** Loops & Interactions
       * @params - Continuous effects
       */
      {
        id: 'loops',
        label: 'Continuous Loops',
        description: 'Infinite looping animation patterns',
        component: lazy(() => import('./animations/AnimationsLoops')),
      },
      {
        id: 'click',
        label: 'Click Interactions',
        description: 'Click-triggered animation effects',
        component: lazy(() => import('./animations/AnimationsClick')),
      },
      {
        id: 'hover',
        label: 'Hover Effects',
        description: 'Hover-triggered lift, glow and scale',
        component: lazy(() => import('./animations/AnimationsHover')),
      },
    ],
  },
  {
    id: 'colors',
    label: 'Colors',
    description: 'Color palettes, gradients and design tokens',
    subPages: [
      {
        id: 'palettes',
        label: 'Palettes',
        description: 'Full color palettes with shade scales',
        component: lazy(() => import('./colors/ColorsPalette')),
      },
      {
        id: 'gradients',
        label: 'Gradients',
        description: 'Named gradient presets',
        component: lazy(() => import('./colors/ColorsGradients')),
      },
      {
        id: 'tokens',
        label: 'System Tokens',
        description: 'CSS custom property tokens used across the lab',
        component: lazy(() => import('./colors/ColorsTokens')),
      },
    ],
  },
  {
    id: 'shadows',
    label: 'Shadows',
    description: 'Elevation, glow and special shadow effects',
    subPages: [
      {
        id: 'elevation-scale',
        label: 'Elevation Scale',
        description: 'From flat to 2XL depth levels',
        component: lazy(() => import('./shadows/ShadowsElevationScale')),
      },
      {
        id: 'in-use',
        label: 'In Use',
        description: 'Shadow elevation applied to real components',
        component: lazy(() => import('./shadows/ShadowsInUse')),
      },
      {
        id: 'glow',
        label: 'Glow Effects',
        description: 'Colored glow shadow effects',
        component: lazy(() => import('./shadows/ShadowsGlow')),
      },
      {
        id: 'creative',
        label: 'Creative Shadows',
        description: 'Soft lift, hard bottom, pressed, 3D and brutalist',
        component: lazy(() => import('./shadows/ShadowsCreative')),
      },
      {
        id: 'on-elements',
        label: 'On Elements',
        description: 'Shadow effects applied to buttons, cards and inputs',
        component: lazy(() => import('./shadows/ShadowsOnElements')),
      },
    ],
  },
  {
    id: 'layouts',
    label: 'Layouts',
    description: 'Page and component layout patterns',
    subPages: [
      {
        id: 'pages',
        label: 'Page Patterns',
        description: 'Holy grail, sidebar, dashboard, masonry and more',
        component: lazy(() => import('./layouts/LayoutsPages')),
      },
      {
        id: 'components',
        label: 'Component Patterns',
        description: 'Sticky headers, split panes, modals and drawers',
        component: lazy(() => import('./layouts/LayoutsComponents')),
      },
      {
        id: 'sidebar-left',
        label: 'Left Sidebar',
        description: 'Classic, icon-only, collapsible and rail left sidebar patterns',
        component: lazy(() => import('./layouts/LayoutsSidebarLeft')),
      },
      {
        id: 'sidebar-right',
        label: 'Right Sidebar',
        description: 'Right panel, details pane and context sidebar patterns',
        component: lazy(() => import('./layouts/LayoutsSidebarRight')),
      },
      {
        id: 'sidebar-header',
        label: 'Header + Sidebar',
        description: 'Combined top bar and side navigation layout patterns',
        component: lazy(() => import('./layouts/LayoutsSidebarHeader')),
      },
      {
        id: 'sidebar-footer',
        label: 'Sidebar + Footer',
        description: 'Sidebar with fixed footer bar and action dock patterns',
        component: lazy(() => import('./layouts/LayoutsSidebarFooter')),
      },
      {
        id: 'sidebar-divers',
        label: 'Sidebar Divers',
        description: 'Floating, mini, tabbed and overlay sidebar patterns',
        component: lazy(() => import('./layouts/LayoutsSidebarDivers')),
      },
    ],
  },
  {
    id: 'badges',
    label: 'Badges',
    description: 'Labels, tags and status indicators',
    subPages: [
      {
        id: 'pills',
        label: 'Pill Badges',
        description: 'Pill badges with semantic colors',
        component: lazy(() => import('./badges/BadgesPills')),
      },
      /** Color Spectrums
       * @params - Color schemes
       */
      {
        id: 'solid-spectrum',
        label: 'Solid Spectrum',
        description: 'Full-color solid badge spectrum',
        component: lazy(() => import('./badges/BadgesSolidSpectrum')),
      },
      {
        id: 'soft-spectrum',
        label: 'Soft Spectrum',
        description: 'Pastel soft badge color spectrum',
        component: lazy(() => import('./badges/BadgesSoftSpectrum')),
      },
      {
        id: 'outline-spectrum',
        label: 'Outline Spectrum',
        description: 'Outline badge color spectrum',
        component: lazy(() => import('./badges/BadgesOutlineSpectrum')),
      },
      /** Status & Styles
       * @params - Badge types
       */
      {
        id: 'status-dots',
        label: 'Status Dots',
        description: 'Online, busy, away and syncing status indicators',
        component: lazy(() => import('./badges/BadgesStatusDots')),
      },
      {
        id: 'square-mono',
        label: 'Square / Mono',
        description: 'Monospace version and label badges',
        component: lazy(() => import('./badges/BadgesSquareMono')),
      },
      {
        id: 'keyboard',
        label: 'Keyboard Keys',
        description: 'Keyboard shortcut and key cap badges',
        component: lazy(() => import('./badges/BadgesKeyboard')),
      },
      /** Special & Tags
       * @params - Specialty badges
       */
      {
        id: 'decorative',
        label: 'Decorative',
        description: 'Gradient, dark and featured decorative badges',
        component: lazy(() => import('./badges/BadgesDecorative')),
      },
      {
        id: 'tag-chips',
        label: 'Tag Chips',
        description: 'Department and category tag chips',
        component: lazy(() => import('./badges/BadgesTagChips')),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        description: 'Badge positions on icons, avatars and buttons',
        component: lazy(() => import('./badges/BadgesNotifications')),
      },
      /** Progress & Labels
       * @params - Semantic badges
       */
      {
        id: 'progress-steps',
        label: 'Progress & Steps',
        description: 'Progress bars, step indicators and XP badges',
        component: lazy(() => import('./badges/BadgesProgressSteps')),
      },
      {
        id: 'animated',
        label: 'Animated',
        description: 'Pulse, live, typing and loading animated badges',
        component: lazy(() => import('./badges/BadgesAnimated')),
      },
      {
        id: 'labels',
        label: 'Semantic Labels',
        description: 'Primary, success, warning, danger, info and neutral labels',
        component: lazy(() => import('./badges/BadgesLabels')),
      },
    ],
  },
  {
    id: 'loaders',
    label: 'Loaders',
    description: 'Loading indicators and skeleton screens',
    subPages: [
      {
        id: 'spinners',
        label: 'Spinners',
        description: 'Ring and square spinning loaders',
        component: lazy(() => import('./loaders/LoadersSpinners')),
      },
      /** Dots & Bars
       * @params - Loading animations
       */
      {
        id: 'dots',
        label: 'Dots',
        description: 'Bouncing, pulsing and growing dot loaders',
        component: lazy(() => import('./loaders/LoadersDots')),
      },
      {
        id: 'bars',
        label: 'Bars & Progress',
        description: 'Bar chart, progress and striped loaders',
        component: lazy(() => import('./loaders/LoadersBars')),
      },
      {
        id: 'overlay',
        label: 'Overlay & Button',
        description: 'Full-page overlay and button loading states',
        component: lazy(() => import('./loaders/LoadersOverlay')),
      },
      /** Skeleton & Text
       * @params - Placeholder effects
       */
      {
        id: 'skeleton',
        label: 'Skeleton Screens',
        description: 'Content placeholder skeleton screens',
        component: lazy(() => import('./loaders/LoadersSkeleton')),
      },
      {
        id: 'text-loaders',
        label: 'Text Loaders',
        description: 'Typewriter, ellipsis and shimmer text effects',
        component: lazy(() => import('./loaders/LoadersTextLoaders')),
      },
    ],
  },
  {
    id: 'emojis',
    label: 'Emojis',
    description: 'Icons and emoji glyphs for every use case',
    subPages: [
      {
        id: 'filled',
        label: 'Filled Icons',
        description: 'Solid filled SVG icons for UI elements',
        component: lazy(() => import('./emojis/EmojisFilled')),
      },
      /** Icons & People
       * @params - Icon variations
       */
      {
        id: 'outlined',
        label: 'Outlined Icons',
        description: 'Stroke-only SVG icons for a minimal look',
        component: lazy(() => import('./emojis/EmojisOutlined')),
      },
      {
        id: 'faces',
        label: 'Faces & People',
        description: 'Emoji characters for people and expressions',
        component: lazy(() => import('./emojis/EmojisFaces')),
      },
      {
        id: 'objects',
        label: 'Objects & Symbols',
        description: 'Emoji characters for objects, nature and symbols',
        component: lazy(() => import('./emojis/EmojisObjects')),
      },
    ],
  },
]

export const categoryGroups: { label: string; ids: Category[] }[] = [
  { label: 'Components', ids: ['buttons', 'cards', 'forms', 'badges'] },
  { label: 'Visual', ids: ['colors', 'shadows', 'typography', 'emojis'] },
  { label: 'Motion', ids: ['animations', 'loaders'] },
  { label: 'Structure', ids: ['layouts'] },
]
