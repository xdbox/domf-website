<script setup lang="ts">
const { locale, t } = useLocale()
const { getPosts } = useBlog()
const posts = getPosts()
useScrollReveal()
const fmt = (iso: string) => new Date(iso).toLocaleDateString(locale.value === 'hi' ? 'hi-IN' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
useHead({ title: () => t('Field Stories', 'क्षेत्र की कहानियाँ') })
</script>

<template>
  <div>
    <PageHero
      :kicker="t('Field Stories', 'क्षेत्र की कहानियाँ')"
      :title="t('Dispatches from our programmes.', 'हमारे कार्यक्रमों से रिपोर्टें।')"
      :intro="t('Reports from the field, written close to the work — the people, places and patient change behind the numbers.', 'ज़मीन से रिपोर्टें, काम के निकट लिखी गईं — संख्याओं के पीछे के लोग, स्थान और धैर्यपूर्ण बदलाव।')"
      path="/blog"
    />

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="grid">
          <NuxtLink v-for="(p, i) in posts" :key="p.id" :to="`/blog/${p.slug}`" class="card reveal" :style="{ transitionDelay: (i % 3) * 70 + 'ms' }">
            <div class="card__media"><img :src="p.cover" :alt="t(p.title, p.titleHi)" loading="lazy" /><span class="card__tag">{{ t(p.category, p.categoryHi) }}</span></div>
            <div class="card__body">
              <p class="card__meta">{{ fmt(p.publishedAt) }} · {{ t(p.readingTime, p.readingTimeHi) }}</p>
              <h3 class="h3">{{ t(p.title, p.titleHi) }}</h3>
              <p class="card__excerpt">{{ t(p.excerpt, p.excerptHi) }}</p>
              <span class="card__author">{{ t('By', 'द्वारा') }} {{ t(p.author, p.authorHi) }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SectionFaq />
  </div>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.card { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.card__media { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s var(--ease); }
.card:hover .card__media img { transform: scale(1.05); }
.card__tag { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,.94); color: var(--ink); font-weight: 700; font-size: 12px; padding: 5px 12px; border-radius: var(--r-pill); }
.card__body { padding: 24px 24px 28px; }
.card__meta { font-size: 13px; color: var(--body-dim); font-weight: 600; margin-bottom: 8px; }
.card__body h3 { margin-bottom: 10px; }
.card__excerpt { font-size: 15px; margin-bottom: 14px; }
.card__author { font-size: 13px; font-weight: 700; color: var(--green); }
@media (max-width: 920px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; max-width: 440px; margin-inline: auto; } }
</style>
