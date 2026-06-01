<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container about">
      <figure class="about__media reveal">
        <img :src="PLACEHOLDER_IMG" alt="Placeholder image" />
        <figcaption>Community learning centre · Gumla district</figcaption>
      </figure>
      <div class="about__body reveal">
        <span class="kicker">About the Foundation</span>
        <h2 class="h2">We follow people, not projects — and we stay.</h2>
        <p class="lede">
          Named for a village schoolteacher who believed opportunity should not depend
          on where a child is born, the Foundation builds long-term programmes with the
          communities we serve.
        </p>
        <p>
          We invest where reliable services are scarce and need is high, measuring
          ourselves not by activity but by what endures: children who finish school,
          families who stay healthy, and villages with institutions of their own.
        </p>
        <div class="about__foot">
          <NuxtLink to="/who-we-are" class="link-arrow link-arrow--ink">
            Read our story
            <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
          <p class="about__sign">Est. 2009 · In memory of Dharmes Oraon</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: clamp(36px, 6vw, 76px); align-items: center; }
.about__media img { width: 100%; border-radius: var(--r-lg); aspect-ratio: 6/5; object-fit: cover; box-shadow: var(--shadow-sm); }
.about__media figcaption { font-size: 13px; color: var(--body-dim); margin-top: 12px; }
.about__body .h2 { margin: 16px 0 18px; }
.about__body .lede { margin-bottom: 16px; }
.about__foot { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line); }
.about__sign { font-family: var(--serif); font-style: italic; font-size: 15px; color: var(--body-dim); }
@media (max-width: 860px) { .about { grid-template-columns: 1fr; } }
</style>
