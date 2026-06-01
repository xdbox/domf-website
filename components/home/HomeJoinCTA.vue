<script setup lang="ts">
const { t, locale } = useLocale()
</script>

<template>
  <section class="jc section">
    <div class="container">
      <div class="jc__card reveal">
        <span class="jc__decor" aria-hidden="true"></span>
        <div class="jc__content">
          <span class="jc__kicker">{{ t('Get Involved', 'सहभागी बनें') }}</span>
          <h2 v-if="locale !== 'hi'" class="jc__title">Join the movement, and <span class="hl-lime">change a life</span>.</h2>
          <h2 v-else class="jc__title">आंदोलन से जुड़ें, और <span class="hl-lime">एक जीवन बदलें</span>।</h2>
          <p class="jc__sub">{{ t('Be one of the thousands turning patient, everyday support into lasting change for communities that others overlook.', 'उन हज़ारों लोगों में शामिल हों जो धैर्यपूर्ण, रोज़मर्रा के सहयोग को उन समुदायों के लिए स्थायी बदलाव में बदल रहे हैं जिन्हें अक्सर अनदेखा किया जाता है।') }}</p>
        </div>
        <div class="jc__actions">
          <NuxtLink to="/get-involved/donate" class="btn jc__donate">{{ t('Donate', 'दान करें') }}</NuxtLink>
          <NuxtLink to="/get-involved" class="btn btn--outline jc__outline">{{ t('Other ways to help', 'मदद के अन्य तरीके') }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jc__card { position: relative; overflow: hidden; background: var(--forest); border-radius: var(--r-lg); padding: clamp(40px, 6vw, 72px); display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
.jc__decor { position: absolute; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(circle, rgba(138,212,74,0.32), transparent 70%); right: -120px; top: -140px; filter: blur(20px); }
.jc__content { position: relative; z-index: 1; }
.jc__kicker { font-family: var(--sans); font-weight: 700; font-size: 12.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--lime); }
.jc__title { color: #fff; font-size: clamp(28px, 4vw, 50px); max-width: 16ch; margin-top: 14px; }
.jc__sub { color: rgba(255,255,255,0.82); margin-top: 14px; max-width: 46ch; }
.jc__actions { position: relative; z-index: 1; display: flex; gap: 12px; flex-wrap: wrap; }
.jc__donate { background: var(--lime); color: var(--forest); }
.jc__donate:hover { background: #fff; box-shadow: var(--shadow-md); }
.jc__outline { border: 1.5px solid rgba(255,255,255,0.5); color: #fff; }
.jc__outline:hover { background: #fff; color: var(--green-700); border-color: #fff; }
</style>
