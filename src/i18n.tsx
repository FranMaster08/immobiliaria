import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'de' | 'es' | 'en' | 'ar'

type Dict = Record<string, string>

const dict: Record<Lang, Dict> = {
  de: {
    'lang.de': 'DE',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.ar': 'AR',
    'lang.label': 'Sprache',
    'lang.option.de': 'Deutsch',
    'lang.option.es': 'Español',
    'lang.option.en': 'English',
    'lang.option.ar': 'العربية',

    'site.tagline': 'Klar. Professionell. Immobilien ohne Reibung.',
    'nav.home': 'Start',
    'nav.properties': 'Immobilien',
    'nav.location': 'Lage',
    'nav.contact': 'Kontakt',

    'cta.contact': 'Kontakt',
    'cta.explore': 'Entdecken',

    'footer.note': 'Mit leichtem, professionellem Design gebaut.',

    'notFound.title': 'Seite nicht gefunden',
    'notFound.body': 'Gehe zurück zur Startseite, um weiter zu entdecken.',
    'notFound.backHome': 'Zur Startseite',

    'hero.chip.private': 'Privat',
    'hero.title': 'Dein Traumhaus in Jois wartet',
    'hero.desc':
      'Entdecke ein modernes Zuhause in Jois: 160 m², privat und naturnah. Ideal für Familien und Gruppen.',
    'hero.rating': '5 Sterne · Zufriedene Gäste',
    'form.location': 'Ort',
    'form.type': 'Typ',
    'form.need': 'Wunsch',
    'form.type.house': 'Haus',
    'form.type.apartment': 'Wohnung',
    'form.type.vacation': 'Ferien',
    'form.need.placeholder': 'z.B. 2 Gäste, Klimaanlage, schnelles WLAN',
    'btn.viewProperties': 'Immobilien ansehen',
    'btn.requestInfo': 'Infos anfragen',
    'hero.galleryBadge': 'Highlights',

    'properties.kicker': 'Immobilien',
    'properties.title': 'Auswahl im Fokus',
    'properties.action': 'Inserieren / Anfragen',
    'badge.new': 'Neu',
    'meta.reviews': 'Bewertungen',
    'btn.details': 'Details ansehen',
    'btn.compare': 'Vergleichen',

    'feature.modern.title': 'Modernes Design',
    'feature.modern.desc': 'Helle Flächen, angenehme Aufteilung und saubere Details.',
    'feature.simple.title': 'Einfache Verwaltung',
    'feature.simple.desc': 'Finden, vergleichen und Aktionen an einem Ort koordinieren.',
    'feature.docs.title': 'Dokumente bereit',
    'feature.docs.desc': 'Checklisten, Galerien und Zusammenfassungen griffbereit.',

    'location.title': 'Lage',
    'location.subtitle': 'Visueller Kontext und schneller Zugriff.',

    'contact.title': 'Kontakt',
    'contact.badge': 'Schnelle Antwort',
    'contact.body': 'Schreib uns oder ruf an, um einen Besuch zu koordinieren.',
    'contact.tip':
      'Tipp: Bring deine Fragen mit und definiere deine „Must-haves“ vor dem Termin.',

    'property.notFound.title': 'Immobilie nicht gefunden',
    'property.notFound.body': 'Der Link ist möglicherweise unvollständig oder wurde geändert.',
    'property.back': 'Zurück',
    'property.contact': 'Kontaktieren',
    'property.call': 'Anrufen',

    'gallery.aria': 'Fotogalerie',
    'gallery.count': '{n} Fotos',
    'gallery.close': 'Schließen',
    'gallery.showAll': 'Alle Fotos anzeigen',
    'gallery.open': 'Galerie öffnen',
    'photo.alt': 'Foto {n}',
    'img.heroAlt': 'Ansicht der Immobilie in Jois',
    'img.locationAlt': 'Umgebung von Jois, Burgenland',
    'map.zoomIn': 'Hineinzoomen',
    'map.zoomOut': 'Herauszoomen',
    'map.open': 'Karte ansehen',
    'map.close': 'Schließen',
    'map.modal.title': 'Karte & Lage',
    'map.modal.subtitle': 'Jois, Burgenland, Österreich',
    'map.openExternal': 'In Karten öffnen',

    'section.amenities': 'Ausstattung',
    'section.host': 'Gastgeberin',
    'section.morePhotos': 'Weitere Fotos',
    'badge.favorite': 'Favorit bei Gästen',
    'amenities.included': 'inklusive',

    'host.label': 'Gastgeberin',
    'host.meta': 'Superhost · 3 Jahre Gastgeberin',
    'host.note':
      'Fragen? Schreib uns mit deinem Zeitraum und der Gästezahl – wir melden uns mit Verfügbarkeit.',

    'price.perNight': 'pro Nacht',
    'booking.checkIn': 'Anreise',
    'booking.checkOut': 'Abreise',
    'booking.guests': 'Gäste',
    'booking.guest.1': '1 Gast',
    'booking.guest.n': '{n} Gäste',
    'booking.fees': 'Preise inkl. aller Gebühren.',
    'booking.request': 'Reservierung anfragen',
    'booking.tip':
      'Tipp: Wenn du noch keine fixen Daten hast, sende einen groben Zeitraum – wir helfen bei der Koordination.',

    'email.reserve.subject': 'Reservierung: {title}',
    'email.reserve.body':
      'Hallo, ich möchte "{title}" reservieren.\n\nAnreise: {in}\nAbreise: {out}\nGäste: {guests}\n\nDanke.',
    'email.ask.subject': 'Anfrage zu {title}',
  },
  es: {
    'lang.de': 'DE',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.ar': 'AR',
    'lang.label': 'Idioma',
    'lang.option.de': 'Deutsch',
    'lang.option.es': 'Español',
    'lang.option.en': 'English',
    'lang.option.ar': 'العربية',

    'site.tagline': 'Plataforma inmobiliaria clara, sin fricción.',
    'nav.home': 'Inicio',
    'nav.properties': 'Propiedades',
    'nav.location': 'Ubicación',
    'nav.contact': 'Contacto',

    'cta.contact': 'Contactar',
    'cta.explore': 'Explorar',

    'footer.note': 'Hecho con un diseño ligero y profesional.',

    'notFound.title': 'Página no encontrada',
    'notFound.body': 'Vuelve al inicio para seguir explorando.',
    'notFound.backHome': 'Volver al inicio',

    'hero.chip.private': 'Privado',
    'hero.title': 'Tu casa ideal en Jois te espera',
    'hero.desc':
      'Descubre una propiedad moderna en Jois: 160 m², ambiente privado y naturaleza cerca. Ideal para familias y grupos.',
    'hero.rating': '5 estrellas · Huéspedes satisfechos',
    'form.location': 'Ubicación',
    'form.type': 'Tipo',
    'form.need': 'Necesidad',
    'form.type.house': 'Casa',
    'form.type.apartment': 'Departamento',
    'form.type.vacation': 'Vacacional',
    'form.need.placeholder': 'Ej. 2 huéspedes, aire acondicionado, Wi‑Fi rápido',
    'btn.viewProperties': 'Ver propiedades',
    'btn.requestInfo': 'Solicitar info',
    'hero.galleryBadge': 'Galería destacada',

    'properties.kicker': 'Propiedades',
    'properties.title': 'Selección destacada',
    'properties.action': 'Publicar / Consultar',
    'badge.new': 'Nuevo',
    'meta.reviews': 'reseñas',
    'btn.details': 'Ver detalles',
    'btn.compare': 'Comparar',

    'feature.modern.title': 'Diseño moderno',
    'feature.modern.desc': 'Superficies claras, distribución cómoda y detalles cuidados.',
    'feature.simple.title': 'Gestión simple',
    'feature.simple.desc': 'Encuentra, compara y coordina acciones en un solo lugar.',
    'feature.docs.title': 'Documentos listos',
    'feature.docs.desc': 'Checklist, galerías y resúmenes en un panel lateral.',

    'location.title': 'Ubicación',
    'location.subtitle': 'Contexto visual y acceso rápido.',

    'contact.title': 'Contacto',
    'contact.badge': 'Respuesta rápida',
    'contact.body': 'Escríbenos o llámanos para coordinar una visita.',
    'contact.tip': 'Consejo: trae tus preguntas y define tus “no negociables” antes de la visita.',

    'property.notFound.title': 'Propiedad no encontrada',
    'property.notFound.body': 'Puede que el enlace esté incompleto o haya cambiado.',
    'property.back': 'Volver',
    'property.contact': 'Contactar',
    'property.call': 'Llamar',

    'gallery.aria': 'Galería de fotos',
    'gallery.count': '{n} fotos',
    'gallery.close': 'Cerrar',
    'gallery.showAll': 'Mostrar todas las fotos',
    'gallery.open': 'Ver galería',
    'photo.alt': 'Foto {n}',
    'img.heroAlt': 'Vista de la propiedad en Jois',
    'img.locationAlt': 'Entorno de Jois, Burgenland',
    'map.zoomIn': 'Acercar',
    'map.zoomOut': 'Alejar',
    'map.open': 'Ver mapa',
    'map.close': 'Cerrar',
    'map.modal.title': 'Mapa y ubicación',
    'map.modal.subtitle': 'Jois, Burgenland, Austria',
    'map.openExternal': 'Abrir en mapas',

    'section.amenities': 'Servicios',
    'section.host': 'Anfitrión',
    'section.morePhotos': 'Más fotos',
    'badge.favorite': 'Favorito entre huéspedes',
    'amenities.included': 'incluidos',

    'host.label': 'Anfitrión',
    'host.meta': 'Superanfitrión · 3 años hospedando',
    'host.note':
      '¿Tienes dudas? Escríbenos con tu fecha estimada y número de huéspedes y te respondemos con disponibilidad.',

    'price.perNight': 'por noche',
    'booking.checkIn': 'Llegada',
    'booking.checkOut': 'Salida',
    'booking.guests': 'Huéspedes',
    'booking.guest.1': '1 huésped',
    'booking.guest.n': '{n} huéspedes',
    'booking.fees': 'Los precios incluyen todas las tarifas.',
    'booking.request': 'Solicitar reserva',
    'booking.tip':
      'Consejo: si aún no tienes fechas, envía un mensaje con tu rango aproximado y te ayudamos a coordinar.',

    'email.reserve.subject': 'Reserva: {title}',
    'email.reserve.body':
      'Hola, me interesa reservar "{title}".\n\nLlegada: {in}\nSalida: {out}\nHuéspedes: {guests}\n\nGracias.',
    'email.ask.subject': 'Consulta por {title}',
  },
  en: {
    'lang.de': 'DE',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.ar': 'AR',
    'lang.label': 'Language',
    'lang.option.de': 'Deutsch',
    'lang.option.es': 'Español',
    'lang.option.en': 'English',
    'lang.option.ar': 'العربية',

    'site.tagline': 'Clear, professional real estate—no friction.',
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.location': 'Location',
    'nav.contact': 'Contact',

    'cta.contact': 'Contact',
    'cta.explore': 'Explore',

    'footer.note': 'Built with a light, professional design.',

    'notFound.title': 'Page not found',
    'notFound.body': 'Go back home to keep exploring.',
    'notFound.backHome': 'Back to home',

    'hero.chip.private': 'Private',
    'hero.title': 'Your ideal home in Jois awaits',
    'hero.desc': 'Discover a modern place in Jois: 160 m², private and close to nature. Ideal for families and groups.',
    'hero.rating': '5 stars · Happy guests',
    'form.location': 'Location',
    'form.type': 'Type',
    'form.need': 'Need',
    'form.type.house': 'House',
    'form.type.apartment': 'Apartment',
    'form.type.vacation': 'Vacation',
    'form.need.placeholder': 'e.g. 2 guests, air conditioning, fast Wi‑Fi',
    'btn.viewProperties': 'View properties',
    'btn.requestInfo': 'Request info',
    'hero.galleryBadge': 'Featured gallery',

    'properties.kicker': 'Properties',
    'properties.title': 'Featured selection',
    'properties.action': 'List / Ask',
    'badge.new': 'New',
    'meta.reviews': 'reviews',
    'btn.details': 'View details',
    'btn.compare': 'Compare',

    'feature.modern.title': 'Modern design',
    'feature.modern.desc': 'Light surfaces, comfortable layout, and clean details.',
    'feature.simple.title': 'Simple management',
    'feature.simple.desc': 'Find, compare, and coordinate actions in one place.',
    'feature.docs.title': 'Docs ready',
    'feature.docs.desc': 'Checklists, galleries, and summaries at hand.',

    'location.title': 'Location',
    'location.subtitle': 'Visual context and quick access.',

    'contact.title': 'Contact',
    'contact.badge': 'Fast reply',
    'contact.body': 'Message or call us to coordinate a visit.',
    'contact.tip': 'Tip: bring your questions and define your “must‑haves” before the visit.',

    'property.notFound.title': 'Property not found',
    'property.notFound.body': 'The link may be incomplete or has changed.',
    'property.back': 'Back',
    'property.contact': 'Contact',
    'property.call': 'Call',

    'gallery.aria': 'Photo gallery',
    'gallery.count': '{n} photos',
    'gallery.close': 'Close',
    'gallery.showAll': 'Show all photos',
    'gallery.open': 'Open gallery',
    'photo.alt': 'Photo {n}',
    'img.heroAlt': 'Property view in Jois',
    'img.locationAlt': 'Jois surroundings, Burgenland',
    'map.zoomIn': 'Zoom in',
    'map.zoomOut': 'Zoom out',
    'map.open': 'View map',
    'map.close': 'Close',
    'map.modal.title': 'Map & location',
    'map.modal.subtitle': 'Jois, Burgenland, Austria',
    'map.openExternal': 'Open in maps',

    'section.amenities': 'Amenities',
    'section.host': 'Host',
    'section.morePhotos': 'More photos',
    'badge.favorite': 'Guest favorite',
    'amenities.included': 'included',

    'host.label': 'Host',
    'host.meta': 'Superhost · 3 years hosting',
    'host.note': 'Questions? Message us with your dates and guest count—we’ll reply with availability.',

    'price.perNight': 'per night',
    'booking.checkIn': 'Check-in',
    'booking.checkOut': 'Check-out',
    'booking.guests': 'Guests',
    'booking.guest.1': '1 guest',
    'booking.guest.n': '{n} guests',
    'booking.fees': 'Prices include all fees.',
    'booking.request': 'Request booking',
    'booking.tip': 'Tip: if you don’t have dates yet, send an approximate range—we’ll help coordinate.',

    'email.reserve.subject': 'Booking: {title}',
    'email.reserve.body': 'Hi, I’d like to book "{title}".\n\nCheck-in: {in}\nCheck-out: {out}\nGuests: {guests}\n\nThanks.',
    'email.ask.subject': 'Inquiry about {title}',
  },
  ar: {
    'lang.de': 'DE',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'lang.ar': 'AR',
    'lang.label': 'اللغة',
    'lang.option.de': 'Deutsch',
    'lang.option.es': 'Español',
    'lang.option.en': 'English',
    'lang.option.ar': 'العربية',

    'site.tagline': 'منصة عقارية واضحة واحترافية بدون تعقيد.',
    'nav.home': 'الرئيسية',
    'nav.properties': 'العقارات',
    'nav.location': 'الموقع',
    'nav.contact': 'التواصل',

    'cta.contact': 'تواصل',
    'cta.explore': 'استكشف',

    'footer.note': 'مصمم بأسلوب خفيف واحترافي.',

    'notFound.title': 'الصفحة غير موجودة',
    'notFound.body': 'عد إلى الرئيسية لمتابعة الاستكشاف.',
    'notFound.backHome': 'العودة للرئيسية',

    'hero.chip.private': 'خاص',
    'hero.title': 'منزلك المثالي في جويس بانتظارك',
    'hero.desc': 'اكتشف مكاناً حديثاً في جويس: 160 م²، خاص وقريب من الطبيعة. مناسب للعائلات والمجموعات.',
    'hero.rating': '5 نجوم · ضيوف راضون',
    'form.location': 'الموقع',
    'form.type': 'النوع',
    'form.need': 'المتطلبات',
    'form.type.house': 'منزل',
    'form.type.apartment': 'شقة',
    'form.type.vacation': 'إجازة',
    'form.need.placeholder': 'مثال: ضيفان، تكييف، واي فاي سريع',
    'btn.viewProperties': 'عرض العقارات',
    'btn.requestInfo': 'طلب معلومات',
    'hero.galleryBadge': 'معرض مميز',

    'properties.kicker': 'العقارات',
    'properties.title': 'مختارات مميزة',
    'properties.action': 'أضف / اسأل',
    'badge.new': 'جديد',
    'meta.reviews': 'مراجعة',
    'btn.details': 'عرض التفاصيل',
    'btn.compare': 'مقارنة',

    'feature.modern.title': 'تصميم حديث',
    'feature.modern.desc': 'أسطح فاتحة وتوزيع مريح وتفاصيل نظيفة.',
    'feature.simple.title': 'إدارة سهلة',
    'feature.simple.desc': 'اعثر وقارن ونسّق الخطوات في مكان واحد.',
    'feature.docs.title': 'مستندات جاهزة',
    'feature.docs.desc': 'قوائم ومعارض وملخصات في متناول اليد.',

    'location.title': 'الموقع',
    'location.subtitle': 'سياق بصري ووصول سريع.',

    'contact.title': 'التواصل',
    'contact.badge': 'رد سريع',
    'contact.body': 'راسلنا أو اتصل بنا لتنسيق زيارة.',
    'contact.tip': 'نصيحة: أحضر أسئلتك وحدد “الأساسيات” قبل الزيارة.',

    'property.notFound.title': 'العقار غير موجود',
    'property.notFound.body': 'قد يكون الرابط غير مكتمل أو تغير.',
    'property.back': 'رجوع',
    'property.contact': 'تواصل',
    'property.call': 'اتصال',

    'gallery.aria': 'معرض الصور',
    'gallery.count': '{n} صورة',
    'gallery.close': 'إغلاق',
    'gallery.showAll': 'عرض كل الصور',
    'gallery.open': 'فتح المعرض',
    'photo.alt': 'صورة {n}',
    'img.heroAlt': 'منظر للعقار في جويس',
    'img.locationAlt': 'محيط جويس، بورغنلاند',
    'map.zoomIn': 'تكبير',
    'map.zoomOut': 'تصغير',
    'map.open': 'عرض الخريطة',
    'map.close': 'إغلاق',
    'map.modal.title': 'الخريطة والموقع',
    'map.modal.subtitle': 'جويس، بورغنلاند، النمسا',
    'map.openExternal': 'فتح في الخرائط',

    'section.amenities': 'الخدمات',
    'section.host': 'المضيف',
    'section.morePhotos': 'مزيد من الصور',
    'badge.favorite': 'مفضل لدى الضيوف',
    'amenities.included': 'متضمن',

    'host.label': 'المضيف',
    'host.meta': 'سوبرهوست · 3 سنوات استضافة',
    'host.note': 'لديك أسئلة؟ اكتب لنا بتاريخك وعدد الضيوف وسنرد بالتوفر.',

    'price.perNight': 'لكل ليلة',
    'booking.checkIn': 'الوصول',
    'booking.checkOut': 'المغادرة',
    'booking.guests': 'الضيوف',
    'booking.guest.1': 'ضيف واحد',
    'booking.guest.n': '{n} ضيوف',
    'booking.fees': 'الأسعار تشمل كل الرسوم.',
    'booking.request': 'طلب حجز',
    'booking.tip': 'نصيحة: إن لم تحدد التواريخ بعد، أرسل نطاقاً تقريبياً وسنساعدك.',

    'email.reserve.subject': 'حجز: {title}',
    'email.reserve.body': 'مرحباً، أود حجز "{title}".\n\nالوصول: {in}\nالمغادرة: {out}\nالضيوف: {guests}\n\nشكراً.',
    'email.ask.subject': 'استفسار عن {title}',
  },
}

function format(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
}

type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'es' || saved === 'de' || saved === 'en' || saved === 'ar' ? saved : 'de'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key, vars) => format(dict[lang][key] ?? dict.de[key] ?? key, vars),
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de I18nProvider')
  return ctx
}

