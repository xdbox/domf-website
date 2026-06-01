<script setup lang="ts">
const paths = [
  { tag: 'Give', title: 'Donate', text: 'Fund a programme and follow its outcomes, tracked and reported transparently.', to: '/get-involved/donate', cta: 'Donate' },
  { tag: 'Time', title: 'Volunteer', text: 'Offer your time and skills where they make the most difference.', to: '/get-involved/volunteer', cta: 'Volunteer' },
  { tag: 'Build', title: 'Partner With Us', text: 'For companies, trusts and institutions seeking measurable, durable impact.', to: '/get-involved/partner-with-us', cta: 'Partner with us' }
]
</script>

<template>
  <section class="section band">
    <div class="container">
      <div class="section-head section-head--center reveal">
        <span class="kicker kicker--center kicker--green">Get Involved</span>
        <h2 class="h2">Stand with communities, for the long term.</h2>
        <p class="lede">Three ways to be part of the work — each one tracked to a real, reported outcome.</p>
      </div>
      <div class="paths">
        <div v-for="(p, i) in paths" :key="p.to" class="path reveal" :class="{ 'path--feature': i === 0 }" :style="{ transitionDelay: i * 80 + 'ms' }">
          <span class="tag" :class="i === 0 ? 'tag--red' : ''">{{ p.tag }}</span>
          <h3 class="h3">{{ p.title }}</h3>
          <p>{{ p.text }}</p>
          <NuxtLink :to="p.to" class="btn" :class="i === 0 ? 'btn--red' : 'btn--green'">
            {{ p.cta }}
            <svg class="arrow" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.paths { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.path { background: #fff; border: 1px solid var(--line); border-radius: var(--r-lg); padding: 34px 32px; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.path:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.path h3 { font-size: clamp(22px, 2.4vw, 28px); }
.path p { flex: 1; }
.path .btn { margin-top: 8px; }
.path--feature { border-color: transparent; box-shadow: var(--shadow-md); border-top: 3px solid var(--red); }
@media (max-width: 860px) { .paths { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; } }
</style>
