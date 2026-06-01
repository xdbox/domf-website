/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view, and
 * powers `[data-countup]` number animations. Call once from a page's onMounted.
 * SSR-safe.
 *
 * Robustness: Vue re-patches the `class` attribute whenever a component re-renders
 * (e.g. an accordion toggling, or the EN/हिंदी switch swapping page content). That
 * would wipe the imperatively-added `is-visible` class and make revealed content
 * disappear. A MutationObserver re-applies `is-visible` to elements we've already
 * revealed, so it survives any Vue re-render.
 */
export function useScrollReveal() {
  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const revealed = new WeakSet<Element>()

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealed.add(entry.target)
            revealObserver.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    const observeAll = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => revealObserver.observe(el))
    observeAll()

    // Guard: if Vue re-patches and strips `is-visible` from an already-revealed
    // element, put it straight back. Also pick up any newly inserted .reveal nodes.
    const guard = new MutationObserver((mutations) => {
      let scan = false
      for (const m of mutations) {
        if (m.type === 'attributes' && m.target instanceof Element) {
          if (revealed.has(m.target) && !m.target.classList.contains('is-visible')) {
            m.target.classList.add('is-visible')
          }
        } else if (m.type === 'childList' && m.addedNodes.length) {
          scan = true
        }
      }
      if (scan) observeAll()
    })
    guard.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    })

    // Count-up numbers
    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.countup || '0')
      const suffix = el.dataset.suffix || ''
      const decimals = (el.dataset.decimals && parseInt(el.dataset.decimals)) || 0
      const duration = 1600
      const start = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const val = target * eased
        el.textContent =
          val.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          }) + suffix
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const countObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLElement)
            countObserver.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('[data-countup]').forEach((el) => countObserver.observe(el))

    onBeforeUnmount(() => {
      revealObserver.disconnect()
      countObserver.disconnect()
      guard.disconnect()
    })
  })
}
