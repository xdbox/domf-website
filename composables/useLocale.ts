/**
 * Lightweight EN / हिंदी localisation.
 * - locale is shared reactive state, persisted in a cookie (SSR-safe).
 * - t(en, hi) returns the Hindi string when in Hindi mode and one is provided,
 *   otherwise falls back to English. Co-locate translations at the call site.
 */
export type Locale = 'en' | 'hi'

export function useLocale() {
  const cookie = useCookie<Locale>('domf-locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })
  const locale = useState<Locale>('locale', () => cookie.value || 'en')

  const setLocale = (l: Locale) => {
    locale.value = l
    cookie.value = l
  }
  const toggle = () => setLocale(locale.value === 'en' ? 'hi' : 'en')

  const t = (en: string, hi?: string) => (locale.value === 'hi' && hi ? hi : en)

  return { locale, setLocale, toggle, t }
}
