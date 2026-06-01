<script setup lang="ts">
import type { Block } from '~/utils/content'
defineProps<{ blocks: Block[] }>()

// All imagery uses a generic placeholder — no real photos.
const img = (_seed?: string, _w = 800, _h = 600) => PLACEHOLDER_IMG
</script>

<template>
  <component :is="'div'">
    <section
      v-for="(b, bi) in blocks"
      :key="bi"
      class="blk section"
      :class="[`blk--${b.type}`, { band: b.band }]"
    >
      <div class="container" :class="{ 'container--narrow': b.narrow }">

        <!-- Optional heading (skip cta: it renders its own heading inside the band) -->
        <div v-if="(b.kicker || b.heading || b.lede) && b.type !== 'cta'" class="section-head reveal" :class="{ 'section-head--center': b.center }">
          <span v-if="b.kicker" class="kicker" :class="{ 'kicker--green': b.tone === 'green' }">{{ b.kicker }}</span>
          <h2 v-if="b.heading" class="h2" v-html="b.heading" />
          <p v-if="b.lede" class="lede">{{ b.lede }}</p>
        </div>

        <!-- METRICS -->
        <div v-if="b.type === 'metrics'" class="metrics">
          <div v-for="(m, i) in b.items" :key="i" class="metric reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
            <p class="metric__value" :class="`is-${m.color || 'red'}`">
              <span :data-countup="m.value" :data-suffix="m.unit || ''" :data-decimals="m.decimals || 0">0</span>
            </p>
            <p class="metric__label">{{ m.label }}</p>
          </div>
        </div>

        <!-- PROSE -->
        <div v-else-if="b.type === 'prose'" class="prose reveal">
          <p v-for="(p, i) in b.body" :key="i" :class="{ 'prose__lead': i === 0 && b.lead }">{{ p }}</p>
        </div>

        <!-- FOCUS GRID -->
        <div v-else-if="b.type === 'focusGrid'" class="fgrid">
          <component :is="f.to ? 'NuxtLink' : 'div'" v-for="(f, i) in b.items" :key="i" :to="f.to" class="fcard reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
            <span class="fcard__no">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="h3">{{ f.title }}</h3>
            <p>{{ f.text }}</p>
            <span v-if="f.to" class="link-arrow">Explore<svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </component>
        </div>

        <!-- CARDS (with imagery) -->
        <div v-else-if="b.type === 'cards'" class="cards">
          <component :is="c.to ? 'NuxtLink' : 'div'" v-for="(c, i) in b.items" :key="i" :to="c.to" class="card reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
            <div class="card__media"><img :src="img(c.img || `domf-${bi}-${i}`, 720, 500)" :alt="c.title" loading="lazy" /><span v-if="c.tag" class="card__tag">{{ c.tag }}</span></div>
            <div class="card__body">
              <p v-if="c.meta" class="card__meta">{{ c.meta }}</p>
              <h3 class="h3">{{ c.title }}</h3>
              <p v-if="c.text">{{ c.text }}</p>
            </div>
          </component>
        </div>

        <!-- SPLIT (image + text, alternating) -->
        <div v-else-if="b.type === 'split'" class="split reveal" :class="{ 'split--rev': b.side === 'right' }">
          <figure class="split__media"><img :src="img(b.img || `split-${bi}`, 900, 760)" :alt="b.heading || 'Field photograph'" loading="lazy" /><figcaption v-if="b.caption">{{ b.caption }}</figcaption></figure>
          <div class="split__body">
            <span v-if="b.subkicker" class="kicker kicker--green">{{ b.subkicker }}</span>
            <h2 v-if="b.subheading" class="h2">{{ b.subheading }}</h2>
            <p v-for="(p, i) in b.body" :key="i">{{ p }}</p>
            <ul v-if="b.bullets" class="split__bullets">
              <li v-for="(li, i) in b.bullets" :key="i"><svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="var(--green-soft)"/><path d="M6 10l3 3 5-6" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>{{ li }}</li>
            </ul>
            <NuxtLink v-if="b.link" :to="b.link.to" class="link-arrow" style="margin-top:8px">{{ b.link.label }}<svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></NuxtLink>
          </div>
        </div>

        <!-- NUMBERED LIST (values / principles) — heading comes from section-head above -->
        <div v-else-if="b.type === 'list'" class="nlist">
          <div v-for="(it, i) in b.items" :key="i" class="nlist__item reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
            <span class="nlist__no">{{ String(i + 1).padStart(2, '0') }}</span>
            <div><h3 class="h3">{{ it.title }}</h3><p>{{ it.text }}</p></div>
          </div>
        </div>

        <!-- PEOPLE -->
        <div v-else-if="b.type === 'people'" class="people">
          <figure v-for="(p, i) in b.items" :key="i" class="person reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
            <div class="person__avatar" role="img" :aria-label="p.name">
              <svg viewBox="0 0 24 24" width="46" height="46" fill="currentColor" aria-hidden="true"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z"/></svg>
            </div>
            <figcaption>
              <strong>{{ p.name }}</strong>
              <em>{{ p.role }}</em>
              <p v-if="p.bio">{{ p.bio }}</p>
            </figcaption>
          </figure>
        </div>

        <!-- REPORTS / DOCUMENTS -->
        <ul v-else-if="b.type === 'reports'" class="reports">
          <li v-for="(r, i) in b.items" :key="i" class="report reveal" :style="{ transitionDelay: i * 50 + 'ms' }">
            <span class="report__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2v4h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
            <div class="report__body"><strong>{{ r.title }}</strong><span>{{ r.meta }}</span></div>
            <span class="tag tag--quiet">{{ r.tag }}</span>
            <a href="#" class="report__dl" aria-label="Download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
            </a>
          </li>
        </ul>

        <!-- REGIONS / STATS-BY-PLACE -->
        <div v-else-if="b.type === 'regions'" class="regions">
          <div v-for="(r, i) in b.items" :key="i" class="region reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
            <p class="region__name">{{ r.name }}</p>
            <p class="region__stat is-green"><span :data-countup="r.value" :data-suffix="r.unit || ''">0</span></p>
            <p class="region__label">{{ r.label }}</p>
          </div>
        </div>

        <!-- TIMELINE -->
        <div v-else-if="b.type === 'timeline'" class="timeline">
          <div v-for="(t, i) in b.items" :key="i" class="tl reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
            <span class="tl__year">{{ t.year }}</span>
            <div class="tl__dot" aria-hidden="true"></div>
            <div class="tl__body"><h3 class="h3">{{ t.title }}</h3><p>{{ t.text }}</p></div>
          </div>
        </div>

        <!-- GALLERY -->
        <div v-else-if="b.type === 'gallery'" class="gallery">
          <figure v-for="(g, i) in b.images" :key="i" class="reveal" :style="{ transitionDelay: (i % 4) * 50 + 'ms' }"><img :src="img(g, 600, 600)" :alt="`Gallery image ${i + 1}`" loading="lazy" /></figure>
        </div>

        <!-- QUOTE -->
        <blockquote v-else-if="b.type === 'quote'" class="pquote reveal">
          <p>“{{ b.text }}”</p>
          <footer><strong>{{ b.name }}</strong><span>{{ b.role }}</span></footer>
        </blockquote>

        <!-- LOGOS -->
        <div v-else-if="b.type === 'logos'" class="logos reveal">
          <span v-for="l in b.items" :key="l" class="logos__item">{{ l }}</span>
        </div>

        <!-- FAQ -->
        <FaqList v-else-if="b.type === 'faq'" :items="b.items" />

        <!-- CTA -->
        <div v-else-if="b.type === 'cta'" class="ctaband reveal" :class="`ctaband--${b.tone || 'green'}`">
          <div class="ctaband__pattern" aria-hidden="true"></div>
          <div class="ctaband__content">
            <h2 class="h2">{{ b.heading }}</h2>
            <p>{{ b.text }}</p>
          </div>
          <div class="ctaband__actions">
            <NuxtLink :to="b.primary.to" class="btn btn--light">{{ b.primary.label }}</NuxtLink>
            <NuxtLink v-if="b.secondary" :to="b.secondary.to" class="btn btn--ghost-light">{{ b.secondary.label }}</NuxtLink>
          </div>
        </div>

        <!-- STORIES -->
        <div v-else-if="b.type === 'stories'" class="stories">
          <article v-for="(s, i) in b.items" :key="i" class="story reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
            <div class="story__media"><img :src="img(s.img || `story-${i}`, 760, 560)" :alt="s.title" loading="lazy" /></div>
            <div class="story__body">
              <h3 class="h3">{{ s.title }}</h3>
              <p class="story__place">{{ s.place }}</p>
              <p>{{ s.text }}</p>
            </div>
          </article>
        </div>

      </div>
    </section>
  </component>
</template>

<style scoped>
.blk + .blk { padding-top: 0; }
.blk.band { padding-block: var(--section-y); margin-block: clamp(40px, 6vw, 80px); }
.blk.band + .blk { padding-top: var(--section-y); }

/* Metrics */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 8px; }
.metrics:not(:first-child) { margin-top: 48px; }
.metric { padding-top: 22px; border-top: 2px solid var(--ink); }
.metric__value.is-red .unit, .metric__value.is-red { color: var(--red); }
.metric__value.is-green { color: var(--green); }
.metric__value.is-ink { color: var(--ink); }
@media (max-width: 860px) { .metrics { grid-template-columns: 1fr 1fr; } }
@media (max-width: 460px) { .metrics { grid-template-columns: 1fr; } }

/* Prose */
.prose { max-width: 68ch; }
.prose p { margin-bottom: 20px; }
.prose__lead { font-family: var(--serif); font-size: clamp(20px, 2.4vw, 26px); line-height: 1.45; color: var(--ink); }

/* Focus grid */
.fgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 48px; }
.fcard { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); padding: 30px 28px; transition: transform .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease), opacity .7s var(--ease); }
.fcard:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: transparent; }
.fcard__no { font-family: var(--serif); font-size: 14px; color: var(--body-dim); display: block; margin-bottom: 16px; }
.fcard .tag { margin-bottom: 14px; }
.fcard h3 { margin-bottom: 10px; }
.fcard p { font-size: 15px; margin-bottom: 16px; }
@media (max-width: 920px) { .fgrid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .fgrid { grid-template-columns: 1fr; } }

/* Cards */
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; margin-top: 48px; }
.card { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.card__media { position: relative; aspect-ratio: 16/11; overflow: hidden; }
.card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s var(--ease); }
.card:hover .card__media img { transform: scale(1.05); }
.card__tag { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,.94); color: var(--ink); font-weight: 700; font-size: 12px; padding: 5px 12px; border-radius: var(--r-pill); }
.card__body { padding: 24px 24px 28px; }
.card__meta { font-size: 13px; color: var(--body-dim); font-weight: 600; margin-bottom: 8px; }
.card__body h3 { margin-bottom: 8px; }
.card__body p { font-size: 15px; }
@media (max-width: 920px) { .cards { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .cards { grid-template-columns: 1fr; } }

/* Split */
.split { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 72px); align-items: center; }
.split--rev .split__media { order: 2; }
.split__media img { width: 100%; border-radius: var(--r-md); aspect-ratio: 5/4; object-fit: cover; box-shadow: var(--shadow-sm); }
.split__media figcaption { font-size: 13px; color: var(--body-dim); margin-top: 10px; }
.split__body .h2 { margin: 14px 0 18px; }
.split__body p { margin-bottom: 16px; }
.split__bullets { display: grid; gap: 12px; margin-top: 8px; }
.split__bullets li { display: flex; align-items: center; gap: 12px; font-weight: 600; color: var(--ink); }
.split__bullets svg { flex-shrink: 0; }
@media (max-width: 820px) { .split { grid-template-columns: 1fr; } .split--rev .split__media { order: 0; } }

/* Numbered list */
.nlist { display: grid; gap: 0; margin-top: 40px; max-width: 860px; }
.nlist__item { display: grid; grid-template-columns: auto 1fr; gap: 28px; padding: 28px 0; border-top: 1px solid var(--line); }
.nlist__item:last-child { border-bottom: 1px solid var(--line); }
.nlist__no { font-family: var(--serif); font-size: 24px; color: var(--red); }
.nlist__item h3 { margin-bottom: 8px; }
@media (max-width: 560px) { .nlist__item { grid-template-columns: 1fr; gap: 10px; } }

/* People */
.people { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 48px; }
.person__avatar { width: 100%; aspect-ratio: 1; display: grid; place-items: center; border-radius: var(--r-md); margin-bottom: 16px; background: var(--green-soft); color: var(--panel-deep); }
.person strong { display: block; font-family: var(--serif); font-size: 19px; color: var(--ink); font-weight: 600; }
.person em { font-style: normal; font-size: 14px; color: var(--green); font-weight: 700; }
.person p { font-size: 14px; margin-top: 8px; }
@media (max-width: 920px) { .people { grid-template-columns: 1fr 1fr; } }
@media (max-width: 460px) { .people { grid-template-columns: 1fr; } }

/* Reports */
.reports { margin-top: 40px; border-top: 1px solid var(--line); }
.report { display: flex; align-items: center; gap: 18px; padding: 20px 4px; border-bottom: 1px solid var(--line); }
.report__icon { color: var(--red); flex-shrink: 0; }
.report__body { flex: 1; }
.report__body strong { display: block; font-family: var(--sans); font-weight: 700; color: var(--ink); }
.report__body span { font-size: 14px; color: var(--body-dim); }
.report__dl { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--line-strong); font-weight: 700; transition: all .2s; }
.report__dl:hover { background: var(--green); color: #fff; border-color: var(--green); }

/* Regions */
.regions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 48px; }
.region { padding-top: 20px; border-top: 2px solid var(--green); }
.region__name { font-family: var(--serif); font-size: 20px; color: var(--ink); margin-bottom: 12px; }
.region__stat { font-family: var(--sans); font-weight: 800; font-size: clamp(34px, 4vw, 46px); letter-spacing: -0.03em; font-variant-numeric: tabular-nums; }
.region__stat.is-green { color: var(--green); }
.region__label { font-size: 14px; color: var(--body); margin-top: 6px; }
@media (max-width: 860px) { .regions { grid-template-columns: 1fr 1fr; } }

/* Timeline */
.timeline { margin-top: 48px; max-width: 820px; border-left: 2px solid var(--line); padding-left: 0; }
.tl { display: grid; grid-template-columns: 90px 1fr; gap: 24px; padding: 6px 0 34px 28px; position: relative; }
.tl__year { font-family: var(--sans); font-weight: 800; color: var(--red); font-variant-numeric: tabular-nums; }
.tl__dot { position: absolute; left: -7px; top: 8px; width: 12px; height: 12px; border-radius: 50%; background: var(--green); border: 3px solid #fff; }
.tl__body h3 { margin-bottom: 6px; }
@media (max-width: 560px) { .tl { grid-template-columns: 1fr; gap: 6px; } }

/* Gallery */
.gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 48px; }
.gallery figure { overflow: hidden; border-radius: var(--r-sm); }
.gallery img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: transform .5s var(--ease); }
.gallery figure:hover img { transform: scale(1.06); }
@media (max-width: 760px) { .gallery { grid-template-columns: 1fr 1fr; } }

/* Quote */
.pquote { max-width: 880px; margin-inline: auto; text-align: center; }
.pquote p { font-family: var(--serif); font-style: italic; font-size: clamp(24px, 3.6vw, 40px); line-height: 1.3; color: var(--ink); }
.pquote footer { margin-top: 24px; }
.pquote strong { font-family: var(--sans); color: var(--ink); display: block; }
.pquote span { font-size: 14px; color: var(--body-dim); }

/* Logos */
.logos { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(24px, 5vw, 56px); margin-top: 40px; }
.logos__item { font-family: var(--serif); font-size: 22px; color: var(--ink-2); opacity: .5; transition: opacity .2s; }
.logos__item:hover { opacity: 1; }

/* CTA band */
.ctaband { position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; border-radius: var(--r-lg); padding: clamp(36px, 5vw, 64px); margin-top: 24px; }
.ctaband--green { background: var(--green); } .ctaband--red { background: var(--red); }
.ctaband__pattern { position: absolute; inset: 0; background: radial-gradient(120% 140% at 100% 0%, rgba(255,255,255,.16), transparent 55%); }
.ctaband__content { position: relative; z-index: 1; }
.ctaband__content .h2 { color: #fff; max-width: 20ch; }
.ctaband__content p { color: rgba(255,255,255,.9); margin-top: 12px; max-width: 48ch; }
.ctaband__actions { position: relative; z-index: 1; display: flex; gap: 12px; flex-wrap: wrap; }
.btn--light { background: #fff; color: var(--ink); } .btn--light:hover { background: #fff; }
.btn--ghost-light { border: 1.5px solid rgba(255,255,255,.5); color: #fff; } .btn--ghost-light:hover { border-color: #fff; }

/* Stories */
.stories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 48px; }
.story { background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.story:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.story__media { aspect-ratio: 4/3; overflow: hidden; }
.story__media img { width: 100%; height: 100%; object-fit: cover; }
.story__body { padding: 24px; }
.story__body h3 { margin: 12px 0 4px; }
.story__place { font-size: 13px; color: var(--red); font-weight: 700; margin-bottom: 10px; }
.story__body p:last-child { font-size: 15px; }
@media (max-width: 920px) { .stories { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .stories { grid-template-columns: 1fr; } }
</style>
