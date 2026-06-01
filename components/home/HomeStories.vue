<script setup lang="ts">
const { t } = useLocale()
const feature = {
  tag: ['Education', 'शिक्षा'],
  title: ['From a forest hamlet to nursing college', 'एक वनवासी गाँव से नर्सिंग कॉलेज तक'],
  place: ['Gumla, Jharkhand', 'गुमला, झारखंड'],
  text: ['A scholarship and steady mentorship carried Anjali through the years most children leave school. Today she is training to be the first nurse from her village.', 'एक छात्रवृत्ति और निरंतर मार्गदर्शन ने अंजली को उन वर्षों में आगे बढ़ाया जब अधिकांश बच्चे स्कूल छोड़ देते हैं। आज वह अपने गाँव की पहली नर्स बनने का प्रशिक्षण ले रही है।'],
  img: PLACEHOLDER_IMG
}
const more = [
  { tag: ['Livelihoods', 'आजीविका'], title: ['A savings group that became a business', 'एक बचत समूह जो व्यवसाय बन गया'], place: ['Chhattisgarh', 'छत्तीसगढ़'] },
  { tag: ['Health', 'स्वास्थ्य'], title: ['A safe birth, two hours from any hospital', 'किसी भी अस्पताल से दो घंटे दूर, एक सुरक्षित प्रसव'], place: ['Odisha', 'ओडिशा'] }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="head reveal">
        <div class="section-head">
          <span class="kicker">{{ t('Stories from the Field', 'ज़मीन से कहानियाँ') }}</span>
          <h2 class="h2">{{ t('Change you can put a name to.', 'ऐसा बदलाव जिसे आप नाम दे सकें।') }}</h2>
        </div>
        <NuxtLink to="/impact/success-stories" class="link-arrow">{{ t('All stories', 'सभी कहानियाँ') }}
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>

      <div class="stories">
        <NuxtLink to="/impact/success-stories" class="feature reveal">
          <div class="feature__media"><img :src="feature.img" :alt="t(feature.title[0], feature.title[1])" /></div>
          <div class="feature__body">
            <h3 class="feature__title">{{ t(feature.title[0], feature.title[1]) }}</h3>
            <p class="feature__place">{{ t(feature.place[0], feature.place[1]) }}</p>
            <p>{{ t(feature.text[0], feature.text[1]) }}</p>
            <span class="link-arrow link-arrow--ink">{{ t('Read the story', 'कहानी पढ़ें') }}
              <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </div>
        </NuxtLink>

        <div class="side">
          <NuxtLink v-for="(s, i) in more" :key="i" to="/impact/success-stories" class="scard reveal" :style="{ transitionDelay: (i + 1) * 80 + 'ms' }">
            <h4 class="h3">{{ t(s.title[0], s.title[1]) }}</h4>
            <p class="scard__place">{{ t(s.place[0], s.place[1]) }}</p>
          </NuxtLink>
          <NuxtLink to="/blog" class="scard scard--cta reveal" style="transition-delay:.24s">
            <span>{{ t('Read dispatches from our programmes', 'हमारे कार्यक्रमों की रिपोर्टें पढ़ें') }}</span>
            <svg width="20" height="14" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 44px; }
.head .h2 { margin-top: 16px; }
.stories { display: grid; grid-template-columns: 1.4fr 1fr; gap: 26px; }
.feature { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; transition: transform .3s var(--ease), box-shadow .3s var(--ease); }
.feature:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.feature__media { aspect-ratio: 16/10; overflow: hidden; }
.feature__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s var(--ease); }
.feature:hover .feature__media img { transform: scale(1.05); }
.feature__body { padding: 30px 32px 34px; }
.feature__title { font-size: clamp(22px, 2.6vw, 30px); margin: 14px 0 4px; }
.feature__place { color: var(--red); font-weight: 700; font-size: 13px; margin-bottom: 14px; }
.feature__body p { margin-bottom: 18px; }

.side { display: grid; grid-template-rows: 1fr 1fr auto; gap: 18px; }
.scard { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); padding: 26px; transition: transform .3s var(--ease), box-shadow .3s var(--ease); }
.scard:hover { transform: translateY(-4px); box-shadow: var(--shadow-sm); }
.scard h4 { margin: 12px 0 4px; }
.scard__place { color: var(--green); font-weight: 700; font-size: 13px; }
.scard--cta { background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.scard--cta span { font-family: var(--serif); font-size: 18px; }
@media (max-width: 860px) { .stories { grid-template-columns: 1fr; } }
</style>
