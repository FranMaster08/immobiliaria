import type { Lang } from './i18n'

export type Localized<T> = { [K in Lang]: T }

export function l<T>(value: Localized<T>, lang: Lang): T {
  return value[lang]
}

export type Property = {
  id: string
  locationLabel: string
  rating: number
  reviewsCount: number
  hostName: string
  title: Localized<string>
  subtitle: Localized<string>
  facts: Localized<string[]>
  highlights: Localized<Array<{ label: string; value: string }>>
  description: Localized<string>
  amenities: Localized<string[]>
  nightlyPriceCop: number
  images: string[]
  coverImage: string
}

export const site = {
  name: 'Has Haus in Jois',
  contact: {
    phone: '+43 676 9512633',
    email: 'karenleyba@hotmail.com',
  },
  images: {
    logo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=344,fit=crop,q=95/mePxX4BPDOi311E9/logo-tonos-terracota-jois-1.1-YbNBM61NLKfnnv1L.png',
    hero: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePxX4BPDOi311E9/img_8176-Y4LD3W5wRNtGVlRQ.JPG',
    location: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePxX4BPDOi311E9/jois-fotos-burgenland-Y4LD6n2oOVUyjpZ6.jpg',
  },
} as const

const gallery = [
  site.images.hero,
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=588,h=531,fit=crop/mePxX4BPDOi311E9/penultimo2-m7V38JE22VtpyN5O.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=581,h=522,fit=crop/mePxX4BPDOi311E9/img_0471-Y4LDlv140nUxzlDQ.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=583,h=544,fit=crop/mePxX4BPDOi311E9/img_0466-d951M4Lgwjs9BePw.jpeg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=589,h=415,fit=crop/mePxX4BPDOi311E9/penultimo3-Y4LDONO0PKfrj4LM.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=593,h=468,fit=crop/mePxX4BPDOi311E9/penultimo-1-AVL736Dg5zsJp3BO.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=586,h=468,fit=crop/mePxX4BPDOi311E9/img-20250402-wa0014-dWxvMKE1jQukLQ13.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePxX4BPDOi311E9/img_0473-d951M4LpbPcpVKzx.jpeg',
]

export const properties: Property[] = [
  {
    id: 'jois-estadia-moderna',
    title: {
      de: 'Modernes Haus in Jois',
      es: 'Casa moderna en Jois',
      en: 'Modern house in Jois',
      ar: 'منزل حديث في جويس',
    },
    subtitle: {
      de: 'Gesamte Unterkunft · Burgenland, Österreich',
      es: 'Alojamiento entero · Burgenland, Austria',
      en: 'Entire place · Burgenland, Austria',
      ar: 'المكان بالكامل · بورغنلاند، النمسا',
    },
    locationLabel: 'Jois, Burgenland',
    rating: 4.88,
    reviewsCount: 273,
    hostName: 'Karen Leyba',
    facts: {
      de: ['160 m²', 'Privat', 'Ideal für Familien'],
      es: ['160 m²', 'Privado', 'Ideal familias'],
      en: ['160 m²', 'Private', 'Great for families'],
      ar: ['160 م²', 'خاص', 'مناسب للعائلات'],
    },
    highlights: {
      de: [
        { label: 'Lage', value: 'Naturnah, gute Anbindung' },
        { label: 'WLAN', value: 'Schnell und stabil' },
        { label: 'Komfort', value: 'Modern & hell' },
      ],
      es: [
        { label: 'Ubicación', value: 'Naturaleza cerca, acceso cómodo' },
        { label: 'Conectividad', value: 'Wi‑Fi rápido' },
        { label: 'Confort', value: 'Ambiente moderno y luminoso' },
      ],
      en: [
        { label: 'Location', value: 'Close to nature, easy access' },
        { label: 'Wi‑Fi', value: 'Fast and stable' },
        { label: 'Comfort', value: 'Modern & bright' },
      ],
      ar: [
        { label: 'الموقع', value: 'قريب من الطبيعة وسهل الوصول' },
        { label: 'واي فاي', value: 'سريع ومستقر' },
        { label: 'الراحة', value: 'حديث ومشرق' },
      ],
    },
    description: {
      de: 'Ein moderner Ort zum Abschalten. Großzügige Räume, viel Licht und eine Lage, die Jois und Umgebung ideal erschließt.',
      es: 'Un espacio moderno pensado para desconectar. Ambientes amplios, buena luz y una ubicación perfecta para explorar Jois y sus alrededores.',
      en: 'A modern place to unwind. Spacious rooms, great light, and a location that makes it easy to enjoy Jois and its surroundings.',
      ar: 'مكان حديث للاسترخاء. غرف واسعة وإضاءة جميلة وموقع يسهل الاستمتاع بجويس وما حولها.',
    },
    amenities: {
      de: ['Klimaanlage', 'WLAN 400 Mb', 'Ausgestattete Küche', 'Parkplatz', 'Flexibler Check-in', 'Ruhige Gegend'],
      es: ['Aire acondicionado', 'Wi‑Fi 400 Mb', 'Cocina equipada', 'Estacionamiento', 'Check‑in flexible', 'Zona tranquila'],
      en: ['Air conditioning', 'Wi‑Fi 400 Mb', 'Equipped kitchen', 'Parking', 'Flexible check‑in', 'Quiet area'],
      ar: ['تكييف', 'واي فاي 400 ميغابت', 'مطبخ مجهز', 'موقف سيارات', 'تسجيل دخول مرن', 'منطقة هادئة'],
    },
    nightlyPriceCop: 90100,
    images: gallery,
    coverImage: gallery[1],
  },
  {
    id: 'jois-interiores',
    title: {
      de: 'Innenräume zum Entspannen',
      es: 'Interiores para descansar',
      en: 'Interiors made to rest',
      ar: 'ديكورات داخلية للاسترخاء',
    },
    subtitle: {
      de: 'Gesamte Unterkunft · Burgenland, Österreich',
      es: 'Alojamiento entero · Burgenland, Austria',
      en: 'Entire place · Burgenland, Austria',
      ar: 'المكان بالكامل · بورغنلاند، النمسا',
    },
    locationLabel: 'Jois, Burgenland',
    rating: 4.88,
    reviewsCount: 273,
    hostName: 'Karen Leyba',
    facts: {
      de: ['Küche', 'Wohnbereich', 'Schlafräume'],
      es: ['Cocina', 'Sala', 'Dormitorios'],
      en: ['Kitchen', 'Living room', 'Bedrooms'],
      ar: ['مطبخ', 'غرفة معيشة', 'غرف نوم'],
    },
    highlights: {
      de: [
        { label: 'Grundriss', value: 'Bequeme Räume' },
        { label: 'Remote', value: 'Stabiles WLAN' },
        { label: 'Details', value: 'Saubere Ausführung' },
      ],
      es: [
        { label: 'Distribución', value: 'Espacios cómodos' },
        { label: 'Trabajo remoto', value: 'Wi‑Fi estable' },
        { label: 'Detalle', value: 'Acabados cuidados' },
      ],
      en: [
        { label: 'Layout', value: 'Comfortable spaces' },
        { label: 'Remote work', value: 'Stable Wi‑Fi' },
        { label: 'Details', value: 'Well-finished' },
      ],
      ar: [
        { label: 'التوزيع', value: 'مساحات مريحة' },
        { label: 'العمل عن بُعد', value: 'واي فاي مستقر' },
        { label: 'التفاصيل', value: 'تشطيبات جيدة' },
      ],
    },
    description: {
      de: 'Saubere, komfortable Innenräume mit Bereichen zum Essen, Entspannen und Zusammensein. Ideal für kurze Aufenthalte.',
      es: 'Interiores limpios y cómodos, con zonas para comer, descansar y compartir. Ideal para estancias cortas o escapadas.',
      en: 'Clean, comfortable interiors with areas to eat, relax, and share. Ideal for short stays or quick getaways.',
      ar: 'مساحات داخلية نظيفة ومريحة مع أماكن للأكل والاسترخاء. مناسبة للإقامات القصيرة.',
    },
    amenities: {
      de: ['Klimaanlage', 'WLAN 400 Mb', 'Ausgestattete Küche', 'Essbereich', 'Bettwäsche', 'Heizung'],
      es: ['Aire acondicionado', 'Wi‑Fi 400 Mb', 'Cocina equipada', 'Comedor', 'Ropa de cama', 'Calefacción'],
      en: ['Air conditioning', 'Wi‑Fi 400 Mb', 'Equipped kitchen', 'Dining area', 'Bed linen', 'Heating'],
      ar: ['تكييف', 'واي فاي 400 ميغابت', 'مطبخ مجهز', 'منطقة طعام', 'مفروشات', 'تدفئة'],
    },
    nightlyPriceCop: 90100,
    images: gallery,
    coverImage: gallery[2],
  },
  {
    id: 'jois-detalles',
    title: {
      de: 'Details & Ausführung',
      es: 'Detalles y acabados',
      en: 'Details & finishes',
      ar: 'تفاصيل وتشطيبات',
    },
    subtitle: {
      de: 'Gesamte Unterkunft · Burgenland, Österreich',
      es: 'Alojamiento entero · Burgenland, Austria',
      en: 'Entire place · Burgenland, Austria',
      ar: 'المكان بالكامل · بورغنلاند، النمسا',
    },
    locationLabel: 'Jois, Burgenland',
    rating: 4.88,
    reviewsCount: 273,
    hostName: 'Karen Leyba',
    facts: {
      de: ['Neu', 'Hell', 'Bezugsfertig'],
      es: ['Nuevo', 'Luminoso', 'Listo para entrar'],
      en: ['New', 'Bright', 'Move‑in ready'],
      ar: ['جديد', 'مشرق', 'جاهز للسكن'],
    },
    highlights: {
      de: [
        { label: 'Zustand', value: 'Sehr gepflegt' },
        { label: 'Stil', value: 'Modern & neutral' },
        { label: 'Erlebnis', value: 'Reibungslos' },
      ],
      es: [
        { label: 'Mantenimiento', value: 'Excelente estado' },
        { label: 'Estilo', value: 'Moderno y neutro' },
        { label: 'Experiencia', value: 'Baja fricción' },
      ],
      en: [
        { label: 'Condition', value: 'Excellent' },
        { label: 'Style', value: 'Modern & neutral' },
        { label: 'Experience', value: 'Low friction' },
      ],
      ar: [
        { label: 'الحالة', value: 'ممتازة' },
        { label: 'الطراز', value: 'حديث ومحايد' },
        { label: 'التجربة', value: 'سلسة' },
      ],
    },
    description: {
      de: 'Details, die sich „fertig“ anfühlen: helle Flächen, gute Beleuchtung und ein moderner Stil.',
      es: 'Una selección de detalles que se sienten “listos”: superficies claras, iluminación cuidada y un estilo moderno.',
      en: 'Details that feel “ready”: light surfaces, thoughtful lighting, and a modern style.',
      ar: 'تفاصيل تشعر بأنها “جاهزة”: أسطح فاتحة وإضاءة مدروسة وطراز حديث.',
    },
    amenities: {
      de: ['Klimaanlage', 'WLAN 400 Mb', 'Ausgestattete Küche', 'Reinigung', 'Nichtraucher', 'Schnelle Antwort'],
      es: ['Aire acondicionado', 'Wi‑Fi 400 Mb', 'Cocina equipada', 'Limpieza', 'No humo', 'Atención rápida'],
      en: ['Air conditioning', 'Wi‑Fi 400 Mb', 'Equipped kitchen', 'Cleaning', 'Non‑smoking', 'Fast reply'],
      ar: ['تكييف', 'واي فاي 400 ميغابت', 'مطبخ مجهز', 'تنظيف', 'ممنوع التدخين', 'رد سريع'],
    },
    nightlyPriceCop: 90100,
    images: gallery,
    coverImage: gallery[3],
  },
]

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id)
}

