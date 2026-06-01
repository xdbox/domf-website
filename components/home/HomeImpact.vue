<script setup lang="ts">
const metrics = [
  { value: 11200, unit: '', label: 'Children in learning programmes', color: 'green' },
  { value: 21500, unit: '+', label: 'Health consultations a year', color: 'red' },
  { value: 640, unit: '', label: 'Self-help groups supported', color: 'green' },
  { value: 92, unit: '%', label: 'Of spend reaching the field', color: 'ink' }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head section-head--center reveal">
        <span class="kicker kicker--center">Impact in Numbers</span>
        <h2 class="h2">Counted honestly. Reported openly.</h2>
        <p class="lede">We measure both how many people we reach and how deeply — and we publish what works alongside what does not.</p>
      </div>
      <div class="impact__grid">
        <div v-for="(m, i) in metrics" :key="i" class="impact__metric reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
          <p class="metric__value" :class="`is-${m.color}`"><span :data-countup="m.value" :data-suffix="m.unit">0</span></p>
          <p class="metric__label">{{ m.label }}</p>
        </div>
      </div>
      <div class="impact__foot reveal">
        <NuxtLink to="/impact/dashboard" class="btn btn--ink">View the impact dashboard
          <svg class="arrow" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 52px; }
.impact__metric { padding-top: 22px; border-top: 2px solid var(--ink); }
.metric__value.is-red { color: var(--red); } .metric__value.is-green { color: var(--green); } .metric__value.is-ink { color: var(--ink); }
.impact__foot { text-align: center; margin-top: 48px; }
@media (max-width: 860px) { .impact__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 460px) { .impact__grid { grid-template-columns: 1fr; } }
</style>
