import { Suspense, useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import PageHeader from './components/layout/PageHeader'
import CategoryHub from './components/CategoryHub'
import LoginPage from './components/LoginPage'
import { categories, type Category } from './experiments'
import { FavoritesProvider, useFavorites } from './context/FavoritesContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { DbProvider } from './context/DbContext'
import { PageKeyContext } from './context/PageKeyContext'
import { ViewModeContext, type ViewMode } from './system'

// Inner app that can access FavoritesContext + AuthContext
function AppInner() {
  const { user } = useAuth()
  const [activeCategory, setActiveCategory] = useState<Category>('buttons')
  const [activeSubPageId, setActiveSubPageId] = useState<string | null>(null)
  const [dark, setDark] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('categorize')
  const { currentProject } = useFavorites()

  const activeCategoryData = categories.find((c) => c.id === activeCategory)!
  const activeSubPage = activeSubPageId
    ? (activeCategoryData.subPages.find((s) => s.id === activeSubPageId) ?? null)
    : null
  const Preview = activeSubPage?.component ?? null

  const pageKey = activeSubPageId ? `${activeCategory}/${activeSubPageId}` : ''

  const handleSelectCategory = (catId: Category) => {
    setActiveCategory(catId)
    setActiveSubPageId(null)
    setViewMode('categorize')
  }

  const handleSelectSubPage = (catId: Category, subPageId: string) => {
    setActiveCategory(catId)
    setActiveSubPageId(subPageId)
  }

  if (!user) return <LoginPage />

  return (
    <div
      className={`${dark ? 'dark' : ''} flex h-screen overflow-hidden font-sans antialiased`}
      style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}
    >
      <Sidebar
        activeCategory={activeCategory}
        activeSubPageId={activeSubPageId}
        onSelectCategory={handleSelectCategory}
        onSelectSubPage={handleSelectSubPage}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <PageHeader
          category={activeCategoryData}
          subPage={activeSubPage ?? undefined}
          onBack={activeSubPage ? () => setActiveSubPageId(null) : undefined}
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
        />
        <main className="flex-1 overflow-auto relative" style={{ background: 'var(--c-bg)' }}>
          {currentProject !== '' && !Preview ? (
            // Simple project-filter empty state check handled in ExampleBox — just show content
            <Suspense fallback={<LoadingSpinner />}>
              <PageKeyContext.Provider value={pageKey}>
                <ViewModeContext.Provider value={viewMode}>
                  <CategoryHub
                    category={activeCategoryData}
                    onNavigate={setActiveSubPageId}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                  />
                </ViewModeContext.Provider>
              </PageKeyContext.Provider>
            </Suspense>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              <PageKeyContext.Provider value={pageKey}>
                <ViewModeContext.Provider value={viewMode}>
                  {Preview ? (
                    <Preview />
                  ) : (
                    <CategoryHub
                      category={activeCategoryData}
                      onNavigate={setActiveSubPageId}
                      viewMode={viewMode}
                      onViewModeChange={setViewMode}
                    />
                  )}
                </ViewModeContext.Provider>
              </PageKeyContext.Provider>
            </Suspense>
          )}
        </main>
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center h-full text-sm"
      style={{ color: 'var(--c-muted)' }}
    >
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <DbProvider>
        <FavoritesProvider>
          <AppInner />
        </FavoritesProvider>
      </DbProvider>
    </AuthProvider>
  )
}
