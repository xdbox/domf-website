<script setup lang="ts">
defineProps<{ items: { q: string; a: string }[] }>()
const open = ref<number | null>(0)
const toggle = (i: number) => (open.value = open.value === i ? null : i)
</script>

<template>
  <div class="faq">
    <div v-for="(f, i) in items" :key="i" class="faq__item" :class="{ 'is-open': open === i }">
      <button class="faq__q" :aria-expanded="open === i" @click="toggle(i)">
        <span>{{ f.q }}</span>
        <span class="faq__icon" aria-hidden="true"></span>
      </button>
      <div class="faq__a"><p>{{ f.a }}</p></div>
    </div>
  </div>
</template>

<style scoped>
.faq { margin-top: 40px; max-width: 860px; }
.faq__item { border-bottom: 1px solid var(--line); }
.faq__q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 24px 0; text-align: left; font-family: var(--serif); font-weight: 500; font-size: clamp(18px, 2vw, 22px); color: var(--ink); }
.faq__icon { position: relative; flex: 0 0 20px; height: 20px; }
.faq__icon::before, .faq__icon::after { content: ''; position: absolute; background: var(--red); border-radius: 2px; transition: transform .3s var(--ease); }
.faq__icon::before { top: 9px; left: 0; right: 0; height: 2px; }
.faq__icon::after { left: 9px; top: 0; bottom: 0; width: 2px; }
.is-open .faq__icon::after { transform: scaleY(0); }
.faq__a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s var(--ease); }
.is-open .faq__a { grid-template-rows: 1fr; }
.faq__a > p { overflow: hidden; max-width: 70ch; }
.is-open .faq__a > p { padding-bottom: 24px; }
</style>
