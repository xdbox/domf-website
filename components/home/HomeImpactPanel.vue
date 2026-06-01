<script setup lang="ts">
const { t } = useLocale()
const goals = [
  ['Raise ₹2 crore for clean-water wells', 'स्वच्छ-जल कुओं के लिए ₹2 करोड़ जुटाना'],
  ['Reach 10,000 children with learning', '10,000 बच्चों तक शिक्षा पहुँचाना'],
  ['Award 200 scholarships this year', 'इस वर्ष 200 छात्रवृत्तियाँ प्रदान करना'],
  ['Train 100 community teachers', '100 सामुदायिक शिक्षकों को प्रशिक्षित करना']
]
</script>

<template>
  <section class="ip section">
    <div class="container ip__grid">
      <!-- Green stat panel -->
      <div class="ip__panel reveal">
        <p class="ip__stat"><span data-countup="80000" data-suffix="+">0</span></p>
        <h2 class="ip__title">{{ t('People reached, and we\'re just getting started.', 'लोगों तक पहुँचे — और यह तो बस शुरुआत है।') }}</h2>
        <NuxtLink to="/impact" class="link-arrow link-arrow--ink">
          {{ t('Learn More', 'और जानें') }}
          <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>

      <!-- Our Next Goal -->
      <div class="ip__goals reveal">
        <span class="kicker">{{ t('Our Next Goal', 'हमारा अगला लक्ष्य') }}</span>
        <ul>
          <li v-for="(g, i) in goals" :key="i">
            <span class="ip__no">{{ String(i + 1).padStart(2, '0') }}</span>{{ t(g[0], g[1]) }}
          </li>
        </ul>
      </div>

      <!-- Dark testimonial card -->
      <figure class="ip__quote reveal">
        <img :src="PLACEHOLDER_AVATAR" alt="Placeholder portrait" />
        <figcaption>
          <p>{{ t('“Supporting this Foundation has been life-changing. I have seen first-hand the difference it makes in communities that others overlook.”', '“इस फाउंडेशन का सहयोग करना जीवन बदल देने वाला अनुभव रहा है। मैंने स्वयं देखा है कि यह उन समुदायों में कैसा बदलाव लाता है जिन्हें अक्सर अनदेखा कर दिया जाता है।”') }}</p>
          <span>{{ t('— Robin S., monthly supporter', '— रॉबिन एस., मासिक सहयोगी') }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.ip__grid { display: grid; grid-template-columns: 1.15fr 0.85fr 1fr; gap: 22px; align-items: stretch; }
.ip__panel { background: var(--panel); border-radius: var(--r-lg); padding: 38px 36px; display: flex; flex-direction: column; }
.ip__stat { font-family: var(--display); font-weight: 800; font-size: clamp(56px, 7vw, 88px); letter-spacing: -0.04em; color: var(--ink); line-height: 0.9; font-variant-numeric: tabular-nums; }
.ip__title { font-size: clamp(22px, 2.4vw, 30px); margin: 18px 0 auto; max-width: 16ch; }
.ip__panel .link-arrow { margin-top: 24px; }

.ip__goals { background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 34px 32px; }
.ip__goals .kicker { margin-bottom: 20px; }
.ip__goals li { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid var(--line); font-weight: 600; color: var(--ink); font-size: 15.5px; }
.ip__goals li:last-child { border-bottom: 0; }
.ip__no { font-family: var(--display); color: var(--green); font-weight: 800; font-size: 14px; }

.ip__quote { position: relative; border-radius: var(--r-lg); overflow: hidden; background: var(--ink); min-height: 320px; display: flex; align-items: flex-end; }
.ip__quote img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .42; }
.ip__quote figcaption { position: relative; z-index: 1; padding: 30px; }
.ip__quote p { color: #fff; font-size: 16px; line-height: 1.5; }
.ip__quote span { display: block; margin-top: 14px; color: var(--panel); font-weight: 700; font-size: 14px; }

@media (max-width: 980px) { .ip__grid { grid-template-columns: 1fr 1fr; } .ip__quote { grid-column: 1 / -1; min-height: 260px; } }
@media (max-width: 620px) { .ip__grid { grid-template-columns: 1fr; } }
</style>
