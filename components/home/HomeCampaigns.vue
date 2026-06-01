<script setup lang="ts">
const campaigns = [
  { title: 'Empower tribal youth through education', img: 'domf-camp-edu', raised: 75, goal: 100, tag: 'Education' },
  { title: 'Support families in remote villages', img: 'domf-camp-family', raised: 45, goal: 100, tag: 'Relief' },
  { title: 'Bring healthcare to forest hamlets', img: 'domf-camp-health', raised: 63, goal: 100, tag: 'Healthcare' }
]
</script>

<template>
  <section class="cc section">
    <div class="container">
      <div class="cc__head reveal">
        <div class="section-head">
          <span class="kicker">Active Campaigns</span>
          <h2 class="h2">Choose a cause, start the change.</h2>
        </div>
        <NuxtLink to="/get-involved/donate" class="link-arrow">All campaigns
          <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
      <div class="cc__grid">
        <article v-for="(c, i) in campaigns" :key="c.title" class="cc__card reveal" :style="{ transitionDelay: i * 90 + 'ms' }">
          <div class="cc__media"><img :src="PLACEHOLDER_IMG" :alt="c.title" loading="lazy" /><span class="cc__tag">{{ c.tag }}</span></div>
          <div class="cc__body">
            <h3 class="h3">{{ c.title }}</h3>
            <div class="cc__bar"><span :style="{ width: c.raised + '%' }"></span></div>
            <div class="cc__meta"><span><strong>{{ c.raised }}%</strong> funded</span><span>Goal ₹{{ c.goal }}L</span></div>
            <NuxtLink to="/get-involved/donate" class="btn btn--red cc__btn">
              Donate Now
              <svg class="arrow" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cc__head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 46px; }
.cc__head .h2 { margin-top: 16px; }
.cc__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.cc__card { background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.cc__card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.cc__media { position: relative; aspect-ratio: 16/11; overflow: hidden; }
.cc__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s var(--ease); }
.cc__card:hover .cc__media img { transform: scale(1.06); }
.cc__tag { position: absolute; top: 14px; left: 14px; background: var(--panel); color: var(--ink); font-weight: 700; font-size: 12px; padding: 6px 14px; border-radius: var(--r-pill); }
.cc__body { padding: 26px 26px 28px; }
.cc__body h3 { margin-bottom: 20px; }
.cc__bar { height: 9px; border-radius: var(--r-pill); background: var(--cream-2); overflow: hidden; }
.cc__bar span { display: block; height: 100%; border-radius: var(--r-pill); background: linear-gradient(90deg, var(--green), var(--panel-deep)); }
.cc__meta { display: flex; justify-content: space-between; font-size: 14px; margin: 12px 0 22px; }
.cc__meta strong { color: var(--ink); }
.cc__btn { width: 100%; }
@media (max-width: 900px) { .cc__grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; } }
</style>
