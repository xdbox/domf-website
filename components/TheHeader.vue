<script setup lang="ts">
import { NAV, GET_INVOLVED } from '~/utils/nav'

const { t } = useLocale()
const route = useRoute()
const scrolled = ref(false)
const openMenu = ref<string | null>(null)
const mobileOpen = ref(false)
const mobileExpanded = ref<string | null>(null)

function onScroll() { scrolled.value = window.scrollY > 16 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(() => route.fullPath, () => { mobileOpen.value = false; openMenu.value = null })
watch(mobileOpen, (v) => { if (import.meta.client) document.body.style.overflow = v ? 'hidden' : '' })

const isActive = (to: string) => route.path === to || (to !== '/' && route.path.startsWith(to))
// The homepage hero is dark; the header floats over it with light text until scrolled.
const overDark = computed(() => route.path === '/' && !scrolled.value)
let leaveTimer: ReturnType<typeof setTimeout>
const enter = (label: string) => { clearTimeout(leaveTimer); openMenu.value = label }
const leave = () => { leaveTimer = setTimeout(() => (openMenu.value = null), 120) }

// Decorative tile glyphs (cycled by index) — all on a 0 0 24 24 grid
const tileIcons = [
  '<path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  '<path d="M12 21S4 14 4 8a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 13-8 13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  '<rect x="3" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  '<path d="M5 4h9l5 5v11H5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 4v5h5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  '<circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 20a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  '<path d="M12 3l2.4 5.6L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
]
</script>

<template>
  <header class="hdr" :class="{ 'is-scrolled': scrolled, 'is-over-dark': overDark }">
    <div class="hdr__inner">
      <NuxtLink to="/" class="brand" aria-label="Dharmes Oraon Memorial Foundation — home">
        <span class="brand__word"><strong>Dharmes&nbsp;Oraon</strong><em>Memorial&nbsp;Foundation</em></span>
      </NuxtLink>

      <nav class="nav" aria-label="Primary">
        <ul class="nav__list">
          <li
            v-for="item in NAV"
            :key="item.label"
            class="nav__item"
            @mouseenter="item.children && enter(item.label)"
            @mouseleave="leave"
          >
            <NuxtLink :to="item.to" class="nav__link" :class="{ 'is-active': isActive(item.to) }">
              {{ t(item.label, item.labelHi) }}
              <svg v-if="item.children" class="nav__caret" width="11" height="11" viewBox="0 0 12 12"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hdr__actions">
        <LocaleToggle class="hdr__lt" />
        <NuxtLink to="/get-involved/donate" class="btn btn--red hdr__donate">{{ t('Donate Now', 'अभी दान करें') }}</NuxtLink>
        <button class="burger" :class="{ 'is-open': mobileOpen }" :aria-expanded="mobileOpen" aria-label="Menu" @click="mobileOpen = !mobileOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mega menu -->
    <Transition name="mega">
      <div
        v-if="openMenu"
        class="mega"
        @mouseenter="enter(openMenu!)"
        @mouseleave="leave"
      >
        <div class="mega__inner" v-for="item in NAV.filter(n => n.label === openMenu)" :key="item.label">
          <div class="mega__main">
            <div class="mega__head">
              <span class="mega__heading">{{ t(item.label, item.labelHi) }}</span>
            </div>
            <ul class="mega__tiles">
              <li v-for="(c, i) in item.children" :key="c.to">
                <NuxtLink :to="c.to">
                  <span class="mega__ic"><svg viewBox="0 0 24 24" width="22" height="22" v-html="tileIcons[i % tileIcons.length]" /></span>
                  <span class="mega__tx"><strong>{{ t(c.label, c.labelHi) }}</strong><span>{{ t(c.desc || '', c.descHi) }}</span></span>
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="mobileOpen" class="drawer">
        <ul class="drawer__list">
          <li v-for="item in NAV" :key="item.label" class="drawer__item">
            <div class="drawer__row">
              <NuxtLink :to="item.to" class="drawer__link">{{ t(item.label, item.labelHi) }}</NuxtLink>
              <button v-if="item.children" class="drawer__toggle" :class="{ 'is-open': mobileExpanded === item.label }" :aria-label="`Expand ${item.label}`" @click="mobileExpanded = mobileExpanded === item.label ? null : item.label">
                <svg width="12" height="12" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </button>
            </div>
            <ul v-if="item.children && mobileExpanded === item.label" class="drawer__sub">
              <li v-for="c in item.children" :key="c.to"><NuxtLink :to="c.to">{{ t(c.label, c.labelHi) }}</NuxtLink></li>
            </ul>
          </li>
        </ul>
        <div class="drawer__cta">
          <NuxtLink to="/get-involved" class="btn btn--green">{{ t('Get Involved', 'सहभागी बनें') }}</NuxtLink>
          <NuxtLink to="/get-involved/donate" class="btn btn--red">{{ t('Donate', 'दान करें') }}</NuxtLink>
          <NuxtLink to="/contact" class="btn btn--outline">{{ t('Contact', 'संपर्क') }}</NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.hdr { position: sticky; top: 0; z-index: 70; background: transparent; transition: background .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease); border-bottom: 1px solid transparent; }
.hdr.is-scrolled { background: rgba(255,255,255,0.92); backdrop-filter: blur(12px); border-bottom-color: var(--line); }

/* Floating over the dark hero (homepage, before scroll) — light text */
.hdr.is-over-dark .brand__word strong { color: #fff; }
.hdr.is-over-dark .brand__word em { color: rgba(255,255,255,0.7); }
.hdr.is-over-dark :deep(.lt) { border-color: rgba(255,255,255,0.45); }
.hdr.is-over-dark :deep(.lt button) { color: rgba(255,255,255,0.85); }
.hdr.is-over-dark :deep(.lt button.is-on) { background: #fff; color: var(--ink); }
.hdr.is-over-dark .brand__mark { background: rgba(255,255,255,0.1); }
.hdr.is-over-dark .nav__link { color: rgba(255,255,255,0.9); }
.hdr.is-over-dark .nav__link:hover { color: var(--lime); }
.hdr.is-over-dark .nav__link.is-active { color: var(--lime); }
.hdr.is-over-dark .burger span { background: #fff; }
.hdr.is-over-dark .hdr__contact { color: #fff; }
.hdr__inner { width: 100%; max-width: 1500px; margin-inline: auto; padding-inline: var(--gutter); display: flex; align-items: center; justify-content: space-between; gap: 18px; height: 84px; }

/* Brand */
.brand { display: inline-flex; align-items: center; gap: 11px; }
.brand__mark { width: 38px; height: 38px; border-radius: 9px; display: grid; place-items: center; background: var(--ink); font-family: var(--display); font-weight: 700; letter-spacing: -0.02em; line-height: 1; }
.brand__mark .brand__d { color: var(--green); font-size: 16px; }
.brand__mark .brand__o { color: var(--red); font-size: 16px; }
.brand__word { display: flex; flex-direction: column; line-height: 1.08; white-space: nowrap; }
.brand__word strong { font-family: var(--display); font-weight: 700; font-size: 18px; color: var(--ink); letter-spacing: -0.02em; }
.brand__word em { font-style: normal; font-weight: 600; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--body-dim); }

/* Nav — match demo: dark Inter links, generous spacing, chevron carets */
.nav__list { display: flex; align-items: center; gap: 2px; }
.nav__link { display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; font-family: var(--sans); font-weight: 600; font-size: 15px; color: var(--ink); padding: 8px 10px; border-radius: 8px; transition: color .2s, opacity .2s; position: relative; }
.nav__link:hover { color: var(--green-700); }
.nav__link.is-active { color: var(--red); }
.nav__caret { opacity: 0.75; transition: transform .25s var(--ease); }
.nav__item:hover .nav__caret { transform: rotate(180deg); }

.hdr__actions { display: flex; align-items: center; gap: 13px; }
.hdr__contact { padding: 8px 4px; }
.hdr__donate { padding: 13px 22px; font-size: 15px; white-space: nowrap; flex-shrink: 0; }

/* Mega menu — icon tiles + featured campaign card (matches demo) */
.mega { position: absolute; left: 0; right: 0; top: 100%; background: var(--cream); border-top: 1px solid var(--line); box-shadow: var(--shadow-md); }
.mega__inner { width: 100%; max-width: 1500px; margin-inline: auto; padding: 36px var(--gutter) 42px; }
.mega__head { margin-bottom: 18px; }
.mega__heading { font-family: var(--sans); font-weight: 700; font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink); }
.mega__tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 4px 24px; }
.mega__tiles a { display: flex; align-items: center; gap: 16px; padding: 14px 14px; border-radius: 14px; transition: background .18s; }
.mega__tiles a:hover { background: var(--paper); }
.mega__ic { flex-shrink: 0; width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center; background: var(--green-soft); color: var(--green-700); transition: background .2s, color .2s; }
.mega__tiles a:hover .mega__ic { background: var(--panel); color: var(--ink); }
.mega__tx strong { display: block; font-family: var(--sans); font-weight: 700; font-size: 16px; color: var(--ink); letter-spacing: 0; }
.mega__tx > span { font-size: 13.5px; color: var(--body-dim); }


.mega-enter-active, .mega-leave-active { transition: opacity .2s var(--ease), transform .2s var(--ease); }
.mega-enter-from, .mega-leave-to { opacity: 0; transform: translateY(-8px); }

/* Burger */
.burger { display: none; width: 44px; height: 44px; border-radius: 10px; position: relative; }
.burger span { position: absolute; left: 11px; right: 11px; height: 2px; background: var(--ink); border-radius: 2px; transition: transform .3s var(--ease), opacity .2s; }
.burger span:nth-child(1) { top: 15px; } .burger span:nth-child(2) { top: 21px; } .burger span:nth-child(3) { top: 27px; }
.burger.is-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.burger.is-open span:nth-child(2) { opacity: 0; }
.burger.is-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Drawer */
.drawer { position: fixed; top: 84px; left: 0; right: 0; bottom: 0; z-index: 65; background: var(--cream); overflow-y: auto; padding: 12px var(--gutter) 32px; }
.drawer__item { border-bottom: 1px solid var(--line); }
.drawer__row { display: flex; align-items: center; justify-content: space-between; }
.drawer__link { display: block; padding: 13px 0; font-family: var(--serif); font-size: 17px; color: var(--ink); flex: 1; }
.drawer__toggle { width: 44px; height: 44px; display: grid; place-items: center; color: var(--body); transition: transform .25s; }
.drawer__toggle.is-open { transform: rotate(180deg); color: var(--red); }
.drawer__sub { padding: 0 0 14px 4px; display: grid; gap: 2px; }
.drawer__sub a { display: block; padding: 7px 0; font-weight: 600; font-size: 14px; color: var(--body); }
.drawer__sub a:hover { color: var(--green); }
.drawer__cta { display: grid; gap: 10px; margin-top: 24px; }

.drawer-enter-active, .drawer-leave-active { transition: opacity .25s var(--ease); }
.drawer-enter-from, .drawer-leave-to { opacity: 0; }

@media (max-width: 1300px) {
  .nav, .hdr__contact { display: none; }
  .burger { display: block; }
}
.drawer__lt { justify-self: start; margin-bottom: 6px; }
@media (max-width: 520px) {
  .hdr__donate { display: none; }
}
</style>
