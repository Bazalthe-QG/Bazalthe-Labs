/**
 * Application-wide configuration constants.
 * Centralized for easy tuning and maintenance.
 */

// UI Colors
export const COLORS = {
  primary: '#EC4899', // Pink from logo
  accent: '#6D28D9', // Purple fallback
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
} as const

// Pagination & Limits
export const PAGINATION = {
  defaultPageSize: 20,
  sidebarMaxItems: 5, // Show "see more" if > this
  gridColsSmall: 2,
  gridColsMed: 3,
  gridColsLarge: 4,
  gridColsXL: 5,
} as const

// Rate Limiting
export const RATE_LIMIT = {
  otpWindow: 60_000, // 60s between OTP requests
  otpExpiry: 15 * 60_000, // 15 minutes
} as const

// Animation & Transitions
export const ANIMATIONS = {
  transitionFast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionBase: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionSlow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  skeletonPulse: '2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
} as const

// Layout
export const LAYOUT = {
  sidebarWidth: '250px',
  headerHeight: '64px',
  contentPadding: '2.5rem', // 40px
  maxContentWidth: '1536px',
} as const

// Debounce & Timing
export const TIMING = {
  debounceSearch: 300,
  debounceResize: 150,
  toastDuration: 3000,
} as const
