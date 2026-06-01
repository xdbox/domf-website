<script setup lang="ts">
const { locale, setLocale } = useLocale()
</script>

<template>
  <div class="lt" role="group" aria-label="Language">
    <button :class="{ 'is-on': locale === 'en' }" :aria-pressed="locale === 'en'" @click="setLocale('en')">EN</button>
    <span class="lt__sep" aria-hidden="true"></span>
    <button :class="{ 'is-on': locale === 'hi' }" :aria-pressed="locale === 'hi'" @click="setLocale('hi')">हिंदी</button>
  </div>
</template>

<style scoped>
.lt { display: inline-flex; align-items: center; gap: 2px; border: 1px solid var(--line-strong); border-radius: var(--r-pill); padding: 3px; }
.lt button { font-family: var(--sans); font-weight: 700; font-size: 13px; color: var(--body-dim); padding: 6px 12px; border-radius: var(--r-pill); line-height: 1; transition: color .2s, background .2s; }
.lt button.is-on { background: var(--ink); color: #fff; }
.lt button:not(.is-on):hover { color: var(--ink); }
.lt__sep { width: 1px; height: 14px; background: var(--line); }
</style>
