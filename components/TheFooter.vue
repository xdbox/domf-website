<script setup lang="ts">
import { NAV, GET_INVOLVED } from '~/utils/nav'
const { open } = useModals()
const { t } = useLocale()
const year = 2026
const footerCols = NAV.slice(0, 8)
</script>

<template>
  <footer class="ft">
    <!-- Newsletter / engage band -->
    <div class="ft__engage band-top">
      <div class="container ft__engage-inner">
        <div>
          <span class="kicker kicker--green">{{ t('Stay informed', 'जुड़े रहें') }}</span>
          <h2 class="h2">{{ t('Follow the work, the evidence, and the communities we serve.', 'हमारे कार्य, साक्ष्य और समुदायों से जुड़े रहें।') }}</h2>
        </div>
        <form class="ft__form" @submit.prevent="open('newsletter')">
          <input type="email" required :placeholder="t('Your email address', 'आपका ईमेल पता')" aria-label="Email address" />
          <button type="submit" class="btn btn--green">{{ t('Subscribe', 'सदस्यता लें') }}</button>
        </form>
      </div>
    </div>

    <div class="container ft__main">
      <div class="ft__brand">
        <NuxtLink to="/" class="brand">
          <span class="brand__text"><strong>Dharmes Oraon</strong><em>Memorial Foundation</em></span>
        </NuxtLink>
        <p class="ft__motto" lang="hi">“ आओ मिलकर करें प्रयास, हो समग्र विकास ”</p>
        <p>{{ t('Empowering rural and tribal communities through sustainable agro-based livelihoods, education, healthcare and community leadership.', 'सतत कृषि-आधारित आजीविका, शिक्षा, स्वास्थ्य और सामुदायिक नेतृत्व के माध्यम से ग्रामीण एवं आदिवासी समुदायों का सशक्तिकरण।') }}</p>
        <div class="ft__socials">
          <a v-for="s in ['in','X','f','ig']" :key="s" :href="`#${s}`" :aria-label="`Follow us on ${s}`">{{ s }}</a>
        </div>
      </div>

      <nav class="ft__cols" aria-label="Footer">
        <div v-for="col in footerCols" :key="col.label" class="ft__col">
          <h4><NuxtLink :to="col.to">{{ t(col.label, col.labelHi) }}</NuxtLink></h4>
          <ul>
            <li v-for="c in col.children" :key="c.to"><NuxtLink :to="c.to">{{ t(c.label, c.labelHi) }}</NuxtLink></li>
          </ul>
        </div>
        <div class="ft__col">
          <h4><NuxtLink :to="GET_INVOLVED.to">{{ t('Get Involved', 'सहभागी बनें') }}</NuxtLink></h4>
          <ul>
            <li v-for="c in GET_INVOLVED.children" :key="c.to"><NuxtLink :to="c.to">{{ t(c.label, c.labelHi) }}</NuxtLink></li>
            <li><NuxtLink to="/contact">{{ t('Contact', 'संपर्क') }}</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container ft__bottom">
      <p>© {{ year }} Dharmes Oraon Memorial Foundation. {{ t('Section 8 non-profit · CIN U85300JH2022NPL018588 · Ranchi, Jharkhand.', 'धारा 8 गैर-लाभकारी संस्था · CIN U85300JH2022NPL018588 · रांची, झारखंड।') }}</p>
      <nav class="ft__legal">
        <NuxtLink to="/who-we-are/governance-transparency">{{ t('Transparency', 'पारदर्शिता') }}</NuxtLink>
        <a href="#">{{ t('Privacy Policy', 'गोपनीयता नीति') }}</a>
        <a href="#">{{ t('Terms of Use', 'उपयोग की शर्तें') }}</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.ft { background: var(--forest); color: rgba(255,255,255,0.8); }
.ft__engage { padding-block: clamp(40px, 6vw, 72px); }
.ft__engage-inner { display: flex; align-items: center; justify-content: space-between; gap: 36px; flex-wrap: wrap; }
.ft__engage .kicker { color: var(--lime); }
.ft__engage .h2 { margin-top: 14px; color: #fff; max-width: 22ch; }
.ft__form { display: flex; gap: 10px; }
.ft__form input { padding: 14px 18px; border-radius: var(--r-pill); border: 1.5px solid var(--forest-line); background: rgba(255,255,255,0.06); font: inherit; min-width: 260px; color: #fff; }
.ft__form input::placeholder { color: rgba(255,255,255,0.55); }
.ft__form input:focus { outline: none; border-color: var(--lime); }

.ft__main { display: grid; grid-template-columns: 1.4fr 3fr; gap: 56px; padding-block: clamp(48px, 7vw, 80px); border-top: 1px solid var(--forest-line); }
.ft__brand .brand { margin-bottom: 20px; }
.ft__motto { font-family: var(--serif); font-weight: 600; color: var(--lime); margin-bottom: 12px !important; }
.ft__brand p { font-size: 15px; max-width: 36ch; margin-bottom: 22px; color: rgba(255,255,255,0.7); }
.ft__socials { display: flex; gap: 10px; }
.ft__socials a { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--forest-line); font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.85); text-transform: lowercase; transition: all .2s; }
.ft__socials a:hover { background: var(--lime); color: var(--forest); border-color: var(--lime); }

.ft__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px 28px; }
.ft__col h4 { font-family: var(--sans); font-weight: 700; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: #fff; margin-bottom: 16px; }
.ft__col h4 a:hover { color: var(--lime); }
.ft__col li { margin-bottom: 10px; }
.ft__col a { font-size: 14.5px; color: rgba(255,255,255,0.68); transition: color .18s; }
.ft__col a:hover { color: var(--lime); }

.ft__bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding-block: 26px; border-top: 1px solid var(--forest-line); font-size: 13.5px; color: rgba(255,255,255,0.55); }
.ft__legal { display: flex; gap: 24px; }
.ft__legal a { color: rgba(255,255,255,0.7); }
.ft__legal a:hover { color: var(--lime); }

/* shared brand styles (footer copy) */
.brand { display: inline-flex; align-items: center; gap: 12px; }
.brand__mark { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; background: rgba(255,255,255,0.08); font-family: var(--serif); font-weight: 600; line-height: 1; }
.brand__mark .brand__d { color: var(--red); font-size: 19px; } .brand__mark .brand__o { color: var(--lime); font-size: 19px; }
.brand__text { display: flex; flex-direction: column; line-height: 1.1; }
.brand__text strong { font-family: var(--serif); font-weight: 600; font-size: 17px; color: #fff; }
.brand__text em { font-style: normal; font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,0.5); font-weight: 600; }

@media (max-width: 920px) { .ft__main { grid-template-columns: 1fr; gap: 40px; } }
@media (max-width: 620px) { .ft__cols { grid-template-columns: 1fr 1fr; } .ft__form input { min-width: 0; flex: 1; } }
@media (max-width: 420px) { .ft__cols { grid-template-columns: 1fr; } }
</style>
