import { createContext, useContext } from 'react'

/** "category/subPageId" string for the currently displayed sub-page, or '' */
export const PageKeyContext = createContext<string>('')

// eslint-disable-next-line react-refresh/only-export-components
export function usePageKey() {
  return useContext(PageKeyContext)
}
