<script setup lang="ts">
const { t } = useLocale()
const areas = [
  { tag: ['Learning', 'शिक्षा'], title: ['Education', 'शिक्षा'], text: ['Foundational learning, scholarships and teacher support.', 'बुनियादी शिक्षा, छात्रवृत्ति और शिक्षक सहायता।'], to: '/what-we-do/education' },
  { tag: ['Health', 'स्वास्थ्य'], title: ['Healthcare', 'स्वास्थ्य सेवा'], text: ['Mobile clinics, maternal care and child nutrition.', 'मोबाइल क्लीनिक, मातृ देखभाल और बाल पोषण।'], to: '/what-we-do/healthcare' },
  { tag: ['Rights', 'अधिकार'], title: ['Tribal Development', 'आदिवासी विकास'], text: ['Land rights, culture and indigenous livelihoods.', 'भूमि अधिकार, संस्कृति और स्थानीय आजीविका।'], to: '/what-we-do/tribal-development' },
  { tag: ['Opportunity', 'अवसर'], title: ['Youth Empowerment', 'युवा सशक्तिकरण'], text: ['Skills, mentorship and pathways to work.', 'कौशल, मार्गदर्शन और रोज़गार के रास्ते।'], to: '/what-we-do/youth-empowerment' },
  { tag: ['Institutions', 'संस्थाएँ'], title: ['Community Development', 'सामुदायिक विकास'], text: ['Self-help groups, water and village governance.', 'स्वयं-सहायता समूह, जल और ग्राम प्रशासन।'], to: '/what-we-do/community-development' },
  { tag: ['Climate', 'पर्यावरण'], title: ['Environment & Sustainability', 'पर्यावरण एवं स्थिरता'], text: ['Forests, water security and regenerative farming.', 'वन, जल सुरक्षा और पुनर्योजी खेती।'], to: '/what-we-do/environment-sustainability' }
]
</script>

<template>
  <section class="section band">
    <div class="container">
      <div class="head reveal">
        <div class="section-head">
          <span class="kicker kicker--green">{{ t('Focus Areas', 'केंद्रित क्षेत्र') }}</span>
          <h2 class="h2">{{ t('Six programmes, designed to reinforce one another.', 'छह कार्यक्रम, जो एक-दूसरे को मज़बूत करने के लिए बनाए गए हैं।') }}</h2>
        </div>
        <NuxtLink to="/what-we-do" class="link-arrow">{{ t('All programmes', 'सभी कार्यक्रम') }}
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
      <div class="fgrid">
        <NuxtLink v-for="(a, i) in areas" :key="a.to" :to="a.to" class="fcard reveal" :style="{ transitionDelay: i * 60 + 'ms' }">
          <span class="fcard__no">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="h3">{{ t(a.title[0], a.title[1]) }}</h3>
          <p>{{ t(a.text[0], a.text[1]) }}</p>
          <span class="link-arrow">{{ t('Explore', 'देखें') }}<svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 44px; }
.head .h2 { margin-top: 16px; }
.fgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.fcard { display: block; background: #fff; border: 1px solid var(--line); border-radius: var(--r-md); padding: 30px 28px; transition: transform .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease), opacity .7s var(--ease); }
.fcard:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: transparent; }
.fcard__no { font-family: var(--serif); font-size: 14px; color: var(--body-dim); display: block; margin-bottom: 16px; }
.fcard .tag { margin-bottom: 14px; }
.fcard h3 { margin-bottom: 10px; }
.fcard p { font-size: 15px; margin-bottom: 16px; }
@media (max-width: 920px) { .fgrid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .fgrid { grid-template-columns: 1fr; } }
</style>
