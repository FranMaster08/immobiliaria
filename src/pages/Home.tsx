import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { l, properties, site } from '../data'
import { Badge, Icon } from '../components/shared'
import { useI18n } from '../i18n'

function MapModal({
  open,
  onClose,
  title,
  subtitle,
  closeLabel,
  openExternalLabel,
}: {
  open: boolean
  onClose: () => void
  title: string
  subtitle: string
  closeLabel: string
  openExternalLabel: string
}) {
  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  // Jois, Burgenland (aprox.)
  const lat = 47.962
  const lon = 16.796
  const bbox = `${lon - 0.03}%2C${lat - 0.02}%2C${lon + 0.03}%2C${lat + 0.02}`
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`
  const external = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=14/${lat}/${lon}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,24,39,0.35)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-panel">
        <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-[14px] font-medium text-text-primary">{title}</div>
            <div className="text-[12px] text-text-secondary">{subtitle}</div>
          </div>
          <div className="ms-auto flex items-center gap-2">
            <a className="btn btn-secondary h-9" href={external} target="_blank" rel="noreferrer">
              {openExternalLabel}
            </a>
            <button onClick={onClose} className="btn btn-ghost h-9 px-3" type="button">
              {closeLabel}
            </button>
          </div>
        </div>

        <div className="aspect-[16/10] w-full bg-subtle">
          <iframe title={title} src={src} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { lang, t } = useI18n()
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <div className="container-readable py-6">
      <MapModal
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        title={t('map.modal.title')}
        subtitle={t('map.modal.subtitle')}
        closeLabel={t('map.close')}
        openExternalLabel={t('map.openExternal')}
      />

      <div className="grid grid-cols-12 gap-6">
        <main className="col-span-12 lg:col-span-8">
          <section id="inicio" className="card overflow-hidden">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              <div className="p-6 lg:col-span-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="brand">Jois</Badge>
                  <Badge variant="neutral">160 m²</Badge>
                  <Badge variant="neutral">{t('hero.chip.private')}</Badge>
                </div>

                <h1 className="mt-4 text-[32px] font-semibold leading-tight text-text-primary">
                  {t('hero.title')}
                </h1>
                <p className="mt-3 text-[14px] leading-normal text-text-secondary">
                  {t('hero.desc')}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[12px] text-text-secondary">
                  <span className="text-text-primary">★★★★★</span>
                  <span>{t('hero.rating')}</span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">
                      {t('form.location')}
                    </div>
                    <input className="input" defaultValue="Jois, Burgenland" />
                  </label>
                  <label className="block">
                    <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('form.type')}</div>
                    <select className="select" defaultValue="casa">
                      <option value="casa">{t('form.type.house')}</option>
                      <option value="departamento">{t('form.type.apartment')}</option>
                      <option value="vacacional">{t('form.type.vacation')}</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('form.need')}</div>
                    <input className="input" placeholder={t('form.need.placeholder')} />
                  </label>
                  <div className="flex flex-wrap gap-2 sm:col-span-2">
                    <a href="#propiedades" className="btn btn-primary">
                      {t('btn.viewProperties')}
                    </a>
                    <a href="#contacto" className="btn btn-ghost">
                      {t('btn.requestInfo')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-6">
                <img src={site.images.hero} alt={t('img.heroAlt')} className="h-full w-full object-cover" />
                <div className="absolute start-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(17,24,39,0.55)] px-3 py-1 text-[12px] font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                    {t('hero.galleryBadge')}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="propiedades" className="mt-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('properties.kicker')}</div>
                <div className="mt-1 text-[18px] font-semibold leading-snug text-text-primary">{t('properties.title')}</div>
              </div>
              <a href="#contacto" className="btn btn-secondary">
                {t('properties.action')}
              </a>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {properties.map((p) => (
                <article key={p.id} className="card overflow-hidden">
                  <Link to={`/propiedad/${p.id}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.coverImage} alt={l(p.title, lang)} className="h-full w-full object-cover" />
                      <div className="absolute end-3 top-3">
                        <span className="inline-flex items-center rounded-full bg-[rgba(17,24,39,0.55)] px-2 py-1 text-[12px] font-medium text-white">
                          {l(p.facts, lang)[0]}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="neutral">{l(p.facts, lang)[0]}</Badge>
                        <Badge variant="neutral">{l(p.facts, lang)[1]}</Badge>
                        <Badge variant="brand">{t('badge.new')}</Badge>
                      </div>
                      <div className="mt-3 text-[14px] font-medium text-text-primary">{l(p.title, lang)}</div>
                      <div className="mt-1 flex items-center gap-2 text-[12px] text-text-secondary">
                        <span className="inline-flex items-center gap-1 text-text-primary">
                          <Icon name="star" className="h-4 w-4 text-text-primary" />
                          {p.rating.toFixed(2)}
                        </span>
                        <span>·</span>
                        <span>
                          {p.reviewsCount} {t('meta.reviews')}
                        </span>
                        <span>·</span>
                        <span>{p.locationLabel}</span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <span className="btn btn-primary">{t('btn.details')}</span>
                        <span className="btn btn-ghost">{t('btn.compare')}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: t('feature.modern.title'),
                desc: t('feature.modern.desc'),
                icon: 'sparkles' as const,
              },
              {
                title: t('feature.simple.title'),
                desc: t('feature.simple.desc'),
                icon: 'shield' as const,
              },
              {
                title: t('feature.docs.title'),
                desc: t('feature.docs.desc'),
                icon: 'doc' as const,
              },
            ].map((f) => (
              <div key={f.title} className="card p-4">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-text-primary">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-brand-softBg text-brand-softText">
                    <Icon name={f.icon} />
                  </span>
                  {f.title}
                </div>
                <p className="mt-2 text-[13px] leading-snug text-text-secondary">{f.desc}</p>
              </div>
            ))}
          </section>

          <section id="ubicacion" className="mt-6 card overflow-hidden">
            <div className="card-header">
              <div>
                <div className="card-title">{t('location.title')}</div>
                <div className="mt-1 text-[12px] text-text-secondary">{t('location.subtitle')}</div>
              </div>
              <span className="badge badge-brand">
                <Icon name="pin" className="text-brand-softText" />
                Jois
              </span>
            </div>
            <div className="relative">
              <img src={site.images.location} alt={t('img.locationAlt')} className="h-[280px] w-full object-cover" />
              <button
                type="button"
                onClick={() => setMapOpen(true)}
                className="absolute inset-0"
                aria-label={t('map.open')}
              />
              <div className="absolute bottom-4 end-4">
                <button type="button" className="btn btn-secondary h-9" onClick={() => setMapOpen(true)}>
                  <Icon name="pin" />
                  {t('map.open')}
                </button>
              </div>
              <div className="absolute end-4 top-4 flex flex-col gap-2">
                <button className="btn btn-ghost h-8 w-8 p-0" aria-label={t('map.zoomIn')}>
                  +
                </button>
                <button className="btn btn-ghost h-8 w-8 p-0" aria-label={t('map.zoomOut')}>
                  −
                </button>
              </div>
              <div className="absolute start-6 top-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-3 py-1 text-[12px] font-medium text-white shadow-card">
                  <Icon name="pin" className="text-white" />
                  Jois
                </span>
              </div>
            </div>
          </section>
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <section id="contacto" className="card">
            <div className="card-header">
              <div className="card-title">{t('contact.title')}</div>
              <span className="badge badge-brand">{t('contact.badge')}</span>
            </div>
            <div className="card-body space-y-3">
              <div className="text-[13px] text-text-secondary">{t('contact.body')}</div>
              <div className="grid gap-2">
                <a className="btn btn-secondary justify-start" href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  <Icon name="phone" className="text-text-secondary" />
                  {site.contact.phone}
                </a>
                <a className="btn btn-secondary justify-start" href={`mailto:${site.contact.email}`}>
                  <Icon name="mail" className="text-text-secondary" />
                  {site.contact.email}
                </a>
              </div>
              <div className="rounded-sm border border-border-subtle bg-subtle p-3 text-[12px] text-text-secondary">
                {t('contact.tip')}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}

