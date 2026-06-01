<script setup lang="ts">
const stats = [
  { n: 650, suffix: 'M+', label: 'people live in extreme poverty' },
  { n: 15, suffix: '%', label: 'of children under five face stunted growth' },
  { n: 260, suffix: 'M', label: 'children and youth are out of school' },
  { n: 1, suffix: 'in 5', label: 'children worldwide live in poverty', raw: true }
]
</script>

<template>
  <section class="sg section">
    <div class="container">
      <div class="sg__grid">
        <div v-for="(s, i) in stats" :key="i" class="sg__item reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
          <p class="sg__num">
            <template v-if="s.raw">{{ s.n }} <span class="sg__suffix">{{ s.suffix }}</span></template>
            <template v-else><span :data-countup="s.n" :data-suffix="s.suffix">0</span></template>
          </p>
          <p class="sg__label">{{ s.label }}</p>
        </div>
      </div>
      <div class="sg__foot reveal">
        <NuxtLink to="/what-we-do" class="link-arrow">Learn more about our programmes
          <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sg__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.sg__item { padding-top: 22px; border-top: 2px solid var(--ink); }
.sg__num { font-family: var(--display); font-weight: 800; font-size: clamp(40px, 5vw, 58px); color: var(--ink); letter-spacing: -0.04em; line-height: 1; }
.sg__item:nth-child(2) .sg__num { color: var(--green); }
.sg__item:nth-child(4) .sg__num { color: var(--green); }
.sg__suffix { font-size: 0.55em; }
.sg__label { margin-top: 12px; font-size: 15px; }
.sg__foot { text-align: center; margin-top: 46px; }
@media (max-width: 900px) { .sg__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 460px) { .sg__grid { grid-template-columns: 1fr; } }
</style>
