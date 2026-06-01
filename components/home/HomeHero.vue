<script setup lang="ts">
const { locale, t } = useLocale()
const words = ['Support', 'Kindness', 'Compassion', 'Solidarity']
const index = ref(0)
let timer: ReturnType<typeof setInterval>
onMounted(() => { timer = setInterval(() => (index.value = (index.value + 1) % words.length), 2200) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="hero">
    <div class="hero__decor" aria-hidden="true">
      <span class="blob blob--leaf"></span>
      <span class="blob blob--teal"></span>
    </div>
    <div class="container hero__inner">
      <p class="hero__motto" lang="hi">
        “ आओ मिलकर करें प्रयास, हो समग्र विकास ”
        <span v-if="locale === 'en'" class="hero__motto-en">— Let us strive together for holistic development</span>
      </p>
      <h1 v-if="locale === 'en'" class="hero__title">
        <span class="hero__line">Your&nbsp;<span class="hero__rot">
          <Transition name="word" mode="out-in"><span :key="index" class="hero__word">{{ words[index] }}</span></Transition>
        </span></span>
        <span class="hero__line">Transforms Lives</span>
      </h1>
      <h1 v-else class="hero__title">
        <span class="hero__line">आपका&nbsp;<span class="hero__word">सहयोग</span></span>
        <span class="hero__line">जीवन बदलता है</span>
      </h1>
      <p class="hero__lede">
        {{ t(
          'Empowering rural and tribal communities through sustainable agro-based livelihoods, education, healthcare, skill development and community leadership — using local land, resources, culture and technology for self-reliant village development.',
          'ग्रामीण एवं आदिवासी समुदायों को स्थानीय भूमि, संसाधन, संस्कृति और तकनीक के माध्यम से कृषि-आधारित आजीविका, शिक्षा, स्वास्थ्य, कौशल विकास एवं आत्मनिर्भर ग्राम विकास द्वारा सशक्त बनाना।'
        ) }}
      </p>
      <div class="hero__actions">
        <NuxtLink to="/get-involved" class="btn btn--green">
          {{ t('Join the Movement', 'आंदोलन से जुड़ें') }}
          <svg class="arrow" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
        <NuxtLink to="/impact" class="btn hero__outline">{{ t('See our impact', 'हमारा प्रभाव देखें') }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; background: var(--forest); margin-top: calc(-1 * var(--hdr-h)); padding-block: calc(var(--hdr-h) + clamp(40px, 7vw, 96px)) clamp(56px, 8vw, 104px); }
.hero__decor .blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: .55; }
.blob--leaf { width: 480px; height: 480px; background: radial-gradient(circle, rgba(138,212,74,0.5), transparent 70%); right: -120px; top: -160px; }
.blob--teal { width: 320px; height: 320px; background: radial-gradient(circle, rgba(4,141,0,0.55), transparent 70%); left: -80px; bottom: -40px; }
.hero__inner { position: relative; max-width: 1100px; }
.hero__motto { font-family: var(--serif); font-size: clamp(15px, 1.6vw, 19px); font-weight: 600; color: var(--lime); margin-bottom: 18px; letter-spacing: -0.01em; }
.hero__motto-en { display: block; font-family: var(--sans); font-weight: 500; font-size: 14px; color: rgba(255,255,255,0.7); letter-spacing: 0; margin-top: 4px; }
.hero__title { font-family: var(--display); font-weight: 700; letter-spacing: -0.04em; line-height: 0.98; font-size: clamp(46px, 9vw, 112px); color: #fff; }
.hero__line { display: block; }
.hero__rot { position: relative; display: inline-block; overflow: hidden; vertical-align: bottom; }
.hero__word { display: inline-block; color: var(--lime); white-space: nowrap; }
.hero__lede { margin-top: 28px; font-size: clamp(17px, 2vw, 21px); max-width: 56ch; color: rgba(255,255,255,0.82); }
.hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }
.hero__outline { border: 1.5px solid rgba(255,255,255,0.4); color: #fff; }
.hero__outline:hover { background: #fff; color: var(--forest); border-color: #fff; }

.word-enter-active, .word-leave-active { transition: transform .4s var(--ease), opacity .4s var(--ease); }
.word-enter-from { transform: translateY(100%); opacity: 0; }
.word-leave-to { transform: translateY(-100%); opacity: 0; }
</style>
