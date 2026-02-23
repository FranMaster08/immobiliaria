import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeBaseUrl(input: string) {
  const trimmed = input.trim()
  if (!trimmed) return '/'

  let base = trimmed
  if (!base.startsWith('/')) base = `/${base}`
  if (!base.endsWith('/')) base = `${base}/`
  return base
}

export default defineConfig(() => {
  const base = normalizeBaseUrl(process.env.BASE_URL ?? '/')

  return {
    base,
    plugins: [react()],
  }
})