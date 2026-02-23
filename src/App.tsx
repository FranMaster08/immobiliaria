import { useEffect } from 'react'
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { site } from './data'
import { Icon } from './components/shared'
import Home from './pages/Home'
import PropertyPage from './pages/Property'
import { type Lang, useI18n } from './i18n'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
  return null
}

function Layout() {
  const { lang, setLang, t } = useI18n()
  const nav = [
    { label: t('nav.home'), href: '/#inicio' },
    { label: t('nav.properties'), href: '/#propiedades' },
    { label: t('nav.location'), href: '/#ubicacion' },
    { label: t('nav.contact'), href: '/#contacto' },
  ]

  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-30 border-b border-border-subtle bg-surface/80 backdrop-blur">
        <div className="container-readable flex h-14 items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={site.images.logo} alt={`${site.name} logo`} className="h-7 w-7 rounded-sm" />
            <div className="hidden leading-tight lg:block">
              <div className="text-[13px] font-semibold text-text-primary">{site.name}</div>
              <div className="text-[12px] text-text-secondary">{t('site.tagline')}</div>
            </div>
          </Link>

          <nav className="ms-auto hidden items-center gap-4 text-[13px] text-text-secondary lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-1 hover:bg-neutral-100 hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-2 lg:ms-4">
            <label className="sr-only" htmlFor="lang">
              {t('lang.label')}
            </label>
            <select
              id="lang"
              className="select h-9 w-[120px] text-[12px] sm:w-[140px]"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              aria-label={t('lang.label')}
            >
              <option value="de">{t('lang.option.de')}</option>
              <option value="es">{t('lang.option.es')}</option>
              <option value="en">{t('lang.option.en')}</option>
              <option value="ar">{t('lang.option.ar')}</option>
            </select>
            <a href="/#contacto" className="btn btn-secondary hidden lg:inline-flex">
              {t('cta.contact')}
            </a>
            <a href="/#propiedades" className="btn btn-primary hidden lg:inline-flex">
              <Icon name="search" className="text-text-inverse" />
              {t('cta.explore')}
            </a>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-border-subtle bg-surface">
        <div className="container-readable py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[12px] text-text-secondary">
              © {new Date().getFullYear()} {site.name}. {t('footer.note')}
            </div>
            <div className="flex flex-wrap gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-sm px-2 py-1 text-[12px] text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const { t } = useI18n()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/propiedad/:id" element={<PropertyPage />} />
          <Route
            path="*"
            element={
              <div className="container-readable py-10">
                <div className="card p-6">
                  <div className="text-[18px] font-semibold text-text-primary">{t('notFound.title')}</div>
                  <div className="mt-1 text-[13px] text-text-secondary">{t('notFound.body')}</div>
                  <div className="mt-4">
                    <Link to="/" className="btn btn-primary">
                      {t('notFound.backHome')}
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  )
}
