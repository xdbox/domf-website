<script setup lang="ts">
const { locale, t } = useLocale()
const { getPosts } = useBlog()
const posts = getPosts().slice(0, 3)
const fmt = (iso: string) => new Date(iso).toLocaleDateString(locale.value === 'hi' ? 'hi-IN' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="head reveal">
        <div class="section-head">
          <span class="kicker">{{ t('Latest Updates', 'नवीनतम अपडेट') }}</span>
          <h2 class="h2">{{ t('News, events and field dispatches.', 'समाचार, कार्यक्रम और ज़मीनी रिपोर्टें।') }}</h2>
        </div>
        <NuxtLink to="/news" class="link-arrow">{{ t('All updates', 'सभी अपडेट') }}
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
      <div class="cards">
        <NuxtLink v-for="(p, i) in posts" :key="p.id" :to="`/blog/${p.slug}`" class="card reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
          <div class="card__media"><img :src="p.cover" :alt="t(p.title, p.titleHi)" loading="lazy" /><span class="card__tag">{{ t(p.category, p.categoryHi) }}</span></div>
          <div class="card__body">
            <p class="card__meta">{{ fmt(p.publishedAt) }} · {{ t(p.readingTime, p.readingTimeHi) }}</p>
            <h3 class="h3">{{ t(p.title, p.titleHi) }}</h3>
            <p>{{ t(p.excerpt, p.excerptHi) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 44px; }
.head .h2 { margin-top: 16px; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.card { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease); }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.card__media { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s var(--ease); }
.card:hover .card__media img { transform: scale(1.05); }
.card__tag { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,.94); color: var(--ink); font-weight: 700; font-size: 12px; padding: 5px 12px; border-radius: var(--r-pill); }
.card__body { padding: 24px 24px 28px; }
.card__meta { font-size: 13px; color: var(--body-dim); font-weight: 600; margin-bottom: 8px; }
.card__body h3 { margin-bottom: 8px; }
.card__body p { font-size: 15px; }
@media (max-width: 920px) { .cards { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .cards { grid-template-columns: 1fr; } }
</style>
