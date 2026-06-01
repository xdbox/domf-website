<script setup lang="ts">
const route = useRoute()
const { getPost, getPosts } = useBlog()
const post = getPost(route.params.slug as string)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Story not found', fatal: true })
}

const { locale, t } = useLocale()
useScrollReveal()
useHead({ title: () => t(post!.title, post!.titleHi) })
const fmt = (iso: string) => new Date(iso).toLocaleDateString(locale.value === 'hi' ? 'hi-IN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
const related = getPosts().filter((p) => p.slug !== post!.slug).slice(0, 2)
</script>

<template>
  <article v-if="post" class="post">
    <header class="post__hero">
      <div class="container post__head">
        <span class="tag tag--red">{{ t(post.category, post.categoryHi) }}</span>
        <h1 class="post__title display">{{ t(post.title, post.titleHi) }}</h1>
        <div class="post__byline">
          <span><strong>{{ t(post.author, post.authorHi) }}</strong></span>
          <span>{{ fmt(post.publishedAt) }}</span>
          <span>{{ t(post.readingTime, post.readingTimeHi) }}</span>
        </div>
      </div>
    </header>

    <div class="container post__cover-wrap reveal">
      <img class="post__cover" :src="post.cover" :alt="t(post.title, post.titleHi)" />
    </div>

    <div class="container post__layout">
      <div class="post__body reveal">
        <p class="post__lead">{{ t(post.excerpt, post.excerptHi) }}</p>
        <p>{{ t(post.body, post.bodyHi) }}</p>
      </div>
    </div>

    <section class="section band">
      <div class="container">
        <h2 class="h2 reveal">{{ t('More field stories', 'और क्षेत्र की कहानियाँ') }}</h2>
        <div class="related">
          <NuxtLink v-for="r in related" :key="r.id" :to="`/blog/${r.slug}`" class="rcard reveal">
            <img :src="r.cover" :alt="t(r.title, r.titleHi)" loading="lazy" />
            <div>
              <span class="tag tag--quiet">{{ t(r.category, r.categoryHi) }}</span>
              <h3 class="h3">{{ t(r.title, r.titleHi) }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SectionFaq />
  </article>
</template>

<style scoped>
.post__hero { padding-block: clamp(56px, 9vw, 104px) 28px; background: radial-gradient(70% 90% at 88% -10%, var(--green-soft), transparent 60%); }
.post__head { max-width: 820px; }
.post__title { margin: 16px 0; }
.post__byline { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 8px; font-size: 14px; color: var(--body); }
.post__byline strong { color: var(--ink); }

.post__cover-wrap { margin-block: 8px clamp(36px, 5vw, 56px); }
.post__cover { width: 100%; max-height: 520px; object-fit: cover; border-radius: var(--r-lg); box-shadow: var(--shadow-md); }

.post__layout { display: flex; justify-content: center; }
.post__body { max-width: 720px; }
.post__lead { font-family: var(--serif); font-size: clamp(20px, 2.6vw, 26px); line-height: 1.45; color: var(--ink); margin-bottom: 28px; }
.post__body p { margin-bottom: 22px; }

.related { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px; }
.rcard { display: flex; gap: 18px; align-items: center; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); padding: 16px; transition: transform .3s var(--ease), box-shadow .3s var(--ease); }
.rcard:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.rcard img { width: 110px; height: 90px; object-fit: cover; border-radius: var(--r-sm); flex-shrink: 0; }
.rcard h3 { margin-top: 8px; font-size: 18px; }
@media (max-width: 700px) { .related { grid-template-columns: 1fr; } }
</style>
