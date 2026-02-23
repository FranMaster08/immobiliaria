import type { ReactNode } from 'react'

export function Icon({
  name,
  className,
}: {
  name:
    | 'search'
    | 'pin'
    | 'sparkles'
    | 'shield'
    | 'doc'
    | 'phone'
    | 'mail'
    | 'chevron-left'
    | 'grid'
    | 'star'
    | 'user'
  className?: string
}) {
  const common = `h-4 w-4 ${className ?? ''}`
  switch (name) {
    case 'search':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M12 12.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 2l1.2 4.2L17.4 7.4l-4.2 1.2L12 12.8l-1.2-4.2L6.6 7.4l4.2-1.2L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M19 13l.8 2.6L22 16.4l-2.2.8L19 20l-.8-2.8L16 16.4l2.2-.8L19 13Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'doc':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M7 3h7l3 3v15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M7 2h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3c0 1.1-.9 2-2 2-9.4 0-17-7.6-17-17 0-1.1.9-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M15 18 9 12l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 2.75 14.8 8.6l6.45.55-4.9 4.2 1.5 6.25L12 16.5 6.15 19.6l1.5-6.25-4.9-4.2 6.45-.55L12 2.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M4.5 21a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}

export function Badge({ variant, children }: { variant: 'neutral' | 'brand'; children: ReactNode }) {
  return <span className={`badge ${variant === 'brand' ? 'badge-brand' : 'badge-neutral'}`}>{children}</span>
}

