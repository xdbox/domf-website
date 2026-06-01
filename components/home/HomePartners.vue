<script setup lang="ts">
const { t } = useLocale()
const partners = ['Aurora CSR', 'Banyan Trust', 'GreenLeaf', 'Sahyog', 'Unnati', 'Prayas']
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head section-head--center reveal">
        <span class="kicker kicker--center">{{ t('Partners & Collaborators', 'साझेदार एवं सहयोगी') }}</span>
        <h2 class="h2">{{ t('We build through partnership, never alone.', 'हम साझेदारी से निर्माण करते हैं, अकेले नहीं।') }}</h2>
        <p class="lede">{{ t('Companies, government, grassroots organisations and individuals who share our patience and our standards.', 'कंपनियाँ, सरकार, ज़मीनी संगठन और व्यक्ति — जो हमारे धैर्य और हमारे मानकों को साझा करते हैं।') }}</p>
      </div>
      <div class="logos reveal">
        <span v-for="p in partners" :key="p" class="logos__item">{{ p }}</span>
      </div>
      <div class="partners__foot reveal">
        <NuxtLink to="/partners" class="link-arrow">{{ t('See all partners', 'सभी साझेदार देखें') }}
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
        <NuxtLink to="/get-involved/partner-with-us" class="link-arrow link-arrow--red">{{ t('Become a partner', 'साझेदार बनें') }}
          <svg width="16" height="12" viewBox="0 0 18 14"><path d="M1 7h15M11 2l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(28px, 5vw, 60px); margin-top: 44px; }
.logos__item { font-family: var(--serif); font-size: clamp(20px, 3vw, 26px); color: var(--ink-2); opacity: .45; transition: opacity .2s, color .2s; }
.logos__item:hover { opacity: 1; color: var(--green); }
.partners__foot { display: flex; justify-content: center; gap: 36px; margin-top: 40px; flex-wrap: wrap; }
</style>
