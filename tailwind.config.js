/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      colors: {
        canvas: '#F6F7FB',
        surface: '#FFFFFF',
        sidebar: '#EEF2F7',
        subtle: '#F9FAFB',
        text: {
          primary: '#111827',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        border: {
          subtle: '#E6EAF0',
          strong: '#D6DBE5',
        },
        brand: {
          primary: '#14B8A6',
          hover: '#0F9F90',
          active: '#0B7F74',
          softBg: '#E6FFFB',
          softBorder: '#BFF7EF',
          softText: '#0B6B62',
        },
        semantic: {
          info: '#2563EB',
          infoSoftBg: '#EFF6FF',
          success: '#16A34A',
          successSoftBg: '#ECFDF5',
          warning: '#D97706',
          warningSoftBg: '#FFFBEB',
          danger: '#DC2626',
          dangerSoftBg: '#FEF2F2',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 24, 39, 0.06)',
        panel: '0 6px 18px rgba(17, 24, 39, 0.08)',
        focus: '0 0 0 3px rgba(20, 184, 166, 0.25)',
      },
      maxWidth: {
        readable: '1120px',
      },
    },
  },
  plugins: [],
}

