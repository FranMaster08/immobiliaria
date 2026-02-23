import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyById, l, site } from '../data'
import { Badge, Icon } from '../components/shared'
import { useI18n } from '../i18n'

function formatCop(value: number, locale: string) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)
}

function GalleryModal({
  open,
  title,
  images,
  onClose,
  ariaLabel,
  closeLabel,
  countText,
  photoAlt,
}: {
  open: boolean
  title: string
  images: string[]
  onClose: () => void
  ariaLabel: string
  closeLabel: string
  countText: string
  photoAlt: (n: number) => string
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,24,39,0.35)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${ariaLabel}: ${title}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-panel">
        <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-[14px] font-medium text-text-primary">{title}</div>
            <div className="text-[12px] text-text-secondary">{countText}</div>
          </div>
          <button onClick={onClose} className="btn btn-ghost ms-auto h-9 px-3" aria-label={closeLabel}>
            {closeLabel}
          </button>
        </div>

        <div className="max-h-[calc(100vh-140px)] overflow-auto p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {images.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className={`overflow-hidden rounded-md border border-border-subtle bg-surface ${idx === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`${idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img src={src} alt={photoAlt(idx + 1)} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PropertyPage() {
  const { lang, t } = useI18n()
  const { id } = useParams()
  const property = useMemo(() => (id ? getPropertyById(id) : undefined), [id])

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [galleryOpen, setGalleryOpen] = useState(false)

  if (!property) {
    return (
      <div className="container-readable py-10">
        <div className="card p-6">
          <div className="text-[18px] font-semibold text-text-primary">{t('property.notFound.title')}</div>
          <div className="mt-1 text-[13px] text-text-secondary">{t('property.notFound.body')}</div>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary">
              {t('notFound.backHome')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const main = property.images[0]
  const thumbs = property.images.slice(1, 5)
  const extra = property.images.slice(5)
  const title = l(property.title, lang)
  const subtitle = l(property.subtitle, lang)
  const facts = l(property.facts, lang)
  const highlights = l(property.highlights, lang)
  const desc = l(property.description, lang)
  const amenities = l(property.amenities, lang)
  const locale = lang === 'de' ? 'de-DE' : lang === 'es' ? 'es-CO' : lang === 'en' ? 'en-US' : 'ar'

  return (
    <div className="container-readable py-6">
      <GalleryModal
        open={galleryOpen}
        title={title}
        images={property.images}
        onClose={() => setGalleryOpen(false)}
        ariaLabel={t('gallery.aria')}
        closeLabel={t('gallery.close')}
        countText={t('gallery.count', { n: property.images.length })}
        photoAlt={(n) => t('photo.alt', { n })}
      />

      <div className="flex flex-wrap items-center gap-2">
        <Link to="/" className="btn btn-ghost h-9">
          <Icon name="chevron-left" />
          {t('property.back')}
        </Link>
        <div className="ms-auto flex items-center gap-2">
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(t('email.ask.subject', { title }))}`}
            className="btn btn-secondary"
          >
            {t('property.contact')}
          </a>
          <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="btn btn-primary">
            <Icon name="phone" className="text-text-inverse" />
            {t('property.call')}
          </a>
        </div>
      </div>

      <header className="mt-4">
        <div className="text-[24px] font-semibold leading-snug text-text-primary">{title}</div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[13px] text-text-secondary">
          <span className="inline-flex items-center gap-1 text-text-primary">
            <Icon name="star" className="h-4 w-4 text-text-primary" />
            {property.rating.toFixed(2)}
          </span>
          <span>·</span>
          <span>
            {property.reviewsCount} {t('meta.reviews')}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Icon name="pin" className="h-4 w-4" />
            {property.locationLabel}
          </span>
        </div>
      </header>

      <section className="mt-4 overflow-hidden rounded-md border border-border-subtle bg-surface">
        <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <img src={main} alt={title} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:col-span-5">
            {thumbs.map((src, idx) => (
              <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img src={src} alt={t('photo.alt', { n: idx + 2 })} className="h-full w-full object-cover" />
              </div>
            ))}
            <div className="relative col-span-2 hidden md:block">
              <button
                className="btn btn-secondary absolute bottom-2 end-2 h-9"
                onClick={() => setGalleryOpen(true)}
                type="button"
              >
                <Icon name="grid" />
                {t('gallery.showAll')}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border-subtle px-4 py-3 md:hidden">
          <div className="text-[12px] text-text-secondary">{t('gallery.count', { n: property.images.length })}</div>
          <button className="btn btn-secondary h-9" onClick={() => setGalleryOpen(true)} type="button">
            <Icon name="grid" />
            {t('gallery.open')}
          </button>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <main className="col-span-12 lg:col-span-8">
          <section className="card">
            <div className="card-body">
              <div className="flex flex-wrap items-center gap-2">
                {facts.slice(0, 3).map((f) => (
                  <Badge key={f} variant="neutral">
                    {f}
                  </Badge>
                ))}
                <Badge variant="brand">{t('badge.favorite')}</Badge>
              </div>

              <div className="mt-4 text-[13px] text-text-secondary">{subtitle}</div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div key={h.label} className="rounded-sm border border-border-subtle bg-subtle p-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{h.label}</div>
                    <div className="mt-1 text-[13px] font-medium text-text-primary">{h.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[14px] leading-normal text-text-secondary">{desc}</div>
            </div>
          </section>

          <section className="mt-4 card">
            <div className="card-header">
              <div className="card-title">{t('section.amenities')}</div>
              <span className="badge badge-neutral">
                {amenities.length} {t('amenities.included')}
              </span>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 rounded-sm border border-border-subtle bg-surface px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                    <div className="text-[13px] text-text-primary">{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-4 card">
            <div className="card-header">
              <div className="card-title">{t('section.host')}</div>
              <span className="badge badge-brand">{t('contact.badge')}</span>
            </div>
            <div className="card-body">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-text-secondary">
                  <Icon name="user" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[14px] font-medium text-text-primary">
                    {t('host.label')}: {property.hostName}
                  </div>
                  <div className="text-[12px] text-text-secondary">{t('host.meta')}</div>
                </div>
              </div>

              <div className="mt-4 rounded-sm border border-border-subtle bg-subtle p-3 text-[12px] text-text-secondary">
                {t('host.note')}
              </div>
            </div>
          </section>

          <section className="mt-4 card">
            <div className="card-header">
              <div className="card-title">{t('section.morePhotos')}</div>
              <span className="badge badge-neutral">{extra.length}</span>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {extra.map((src, idx) => (
                  <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border-subtle">
                    <img src={src} alt={t('photo.alt', { n: idx + 6 })} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="card lg:sticky lg:top-20">
            <div className="card-body">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div className="text-[12px] text-text-secondary">{t('price.perNight')}</div>
                  <div className="text-[24px] font-semibold leading-tight text-text-primary">
                    {formatCop(property.nightlyPriceCop, locale)}
                  </div>
                </div>
                <div className="text-end text-[12px] text-text-secondary">
                  <div className="inline-flex items-center gap-1 text-text-primary">
                    <Icon name="star" className="h-4 w-4 text-text-primary" />
                    {property.rating.toFixed(2)}
                  </div>
                  <div>
                    {property.reviewsCount} {t('meta.reviews')}
                  </div>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-sm border border-border-subtle">
                <div className="grid grid-cols-2">
                  <label className="border-e border-border-subtle p-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('booking.checkIn')}</div>
                    <input
                      type="date"
                      className="mt-1 w-full bg-transparent text-[13px] text-text-primary outline-none"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </label>
                  <label className="p-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('booking.checkOut')}</div>
                    <input
                      type="date"
                      className="mt-1 w-full bg-transparent text-[13px] text-text-primary outline-none"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </label>
                  <label className="col-span-2 border-t border-border-subtle p-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-text-muted">{t('booking.guests')}</div>
                    <select
                      className="mt-1 w-full bg-transparent text-[13px] text-text-primary outline-none"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1">{t('booking.guest.1')}</option>
                      <option value="2">{t('booking.guest.n', { n: 2 })}</option>
                      <option value="3">{t('booking.guest.n', { n: 3 })}</option>
                      <option value="4">{t('booking.guest.n', { n: 4 })}</option>
                      <option value="5">{t('booking.guest.n', { n: 5 })}</option>
                      <option value="6">{t('booking.guest.n', { n: 6 })}</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="mt-3 text-[12px] text-text-secondary">{t('booking.fees')}</div>

              <a
                className="btn btn-primary mt-4 w-full"
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                  t('email.reserve.subject', { title }),
                )}&body=${encodeURIComponent(
                  t('email.reserve.body', {
                    title,
                    in: checkIn || '—',
                    out: checkOut || '—',
                    guests,
                  }),
                )}`}
              >
                {t('booking.request')}
              </a>

              <div className="mt-4 rounded-sm border border-border-subtle bg-subtle p-3 text-[12px] text-text-secondary">
                {t('booking.tip')}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

