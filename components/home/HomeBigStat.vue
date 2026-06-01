<script setup lang="ts"></script>

<template>
  <section class="bs">
    <div class="container bs__inner reveal">
      <p class="bs__num"><span data-countup="350" data-suffix="M+">0</span></p>
      <h2 class="bs__title">children on this planet still live in extreme poverty.</h2>
      <p class="bs__sub">It does not have to stay that way. Patient, community-led support rewrites the odds — one child, one village at a time.</p>
      <NuxtLink to="/what-we-do" class="link-arrow bs__link">
        Learn More
        <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.bs { background: var(--paper); padding-block: clamp(64px, 9vw, 120px); text-align: center; border-radius: var(--r-lg); margin: 0 var(--gutter); border: 1px solid var(--line); }
.bs__inner { max-width: 760px; margin-inline: auto; }
.bs__num { font-family: var(--display); font-weight: 700; font-size: clamp(72px, 15vw, 168px); line-height: 0.86; letter-spacing: -0.05em; color: var(--red); }
.bs__title { color: var(--ink); font-size: clamp(26px, 4.4vw, 48px); margin-top: 6px; letter-spacing: -0.03em; }
.bs__sub { color: var(--body); margin: 20px auto 26px; max-width: 50ch; }
.bs__link { color: var(--ink); }
.bs__link:hover { color: var(--green-700); }
</style>
