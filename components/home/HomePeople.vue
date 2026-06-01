<script setup lang="ts">
const people = [
  { name: 'Anita Kerketta', role: 'Executive Director', img: 47 },
  { name: 'Rohan Minz', role: 'Director, Programmes', img: 12 },
  { name: 'Sunita Topno', role: 'Director, Impact & Research', img: 31 },
  { name: 'David Ekka', role: 'Director, Finance & Compliance', img: 14 }
]
</script>

<template>
  <section class="section band">
    <div class="container">
      <div class="head reveal">
        <div class="section-head">
          <span class="kicker kicker--green">Leadership &amp; People</span>
          <h2 class="h2">Accountable people behind accountable work.</h2>
        </div>
        <NuxtLink to="/people" class="link-arrow">Meet everyone
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
      <div class="people">
        <figure v-for="(p, i) in people" :key="p.name" class="person reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
          <img :src="PLACEHOLDER_AVATAR" :alt="p.name" loading="lazy" />
          <figcaption><strong>{{ p.name }}</strong><em>{{ p.role }}</em></figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 44px; }
.head .h2 { margin-top: 16px; }
.people { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.person img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: var(--r-md); margin-bottom: 16px; }
.person strong { display: block; font-family: var(--serif); font-size: 19px; color: var(--ink); font-weight: 600; }
.person em { font-style: normal; font-size: 14px; color: var(--green); font-weight: 700; }
@media (max-width: 860px) { .people { grid-template-columns: 1fr 1fr; } }
@media (max-width: 420px) { .people { grid-template-columns: 1fr; } }
</style>
