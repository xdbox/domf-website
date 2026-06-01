<script setup lang="ts">
const { t } = useLocale()
const { open } = useModals()
useScrollReveal()
useHead({ title: () => t('Get in Touch', 'संपर्क करें') })

const form = reactive({ first: '', last: '', email: '', phone: '', country: '', subject: '', message: '' })
const submit = () => {
  open('success')
  Object.keys(form).forEach((k) => (form[k as keyof typeof form] = ''))
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="c-hero">
      <div class="container c-hero__inner">
        <h1 class="c-hero__title display">{{ t('Get in Touch', 'संपर्क करें') }}</h1>
      </div>
    </section>

    <div class="container c-body">
      <!-- Three-column contact band -->
      <div class="c-band reveal">
        <div class="c-band__col">
          <h2 class="c-band__head">{{ t('Give Us a Quick Call Anytime by Phone', 'फ़ोन पर कभी भी हमसे संपर्क करें') }}</h2>
          <span class="c-band__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          </span>
          <p class="c-band__detail">+91 00000 00000</p>
        </div>

        <div class="c-band__col">
          <h2 class="c-band__head">{{ t('Easily Get in Touch with Us via Email Support', 'ईमेल के माध्यम से आसानी से हमसे जुड़ें') }}</h2>
          <span class="c-band__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
          </span>
          <p class="c-band__detail">
            <a href="mailto:hello@domf.org">hello@domf.org</a><br />
            <a href="mailto:partners@domf.org">partners@domf.org</a>
          </p>
        </div>

        <div class="c-band__col">
          <h2 class="c-band__head">{{ t('Visit Us at Our Official Registered Address', 'हमारे पंजीकृत कार्यालय पर पधारें') }}</h2>
          <span class="c-band__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <p class="c-band__detail">C/o Karma Oraon, Morabadi,<br />Ranchi, Jharkhand, India – 834008</p>
        </div>
      </div>

      <!-- Contact form -->
      <div class="c-form-wrap reveal">
        <form class="c-form" @submit.prevent="submit">
          <div class="c-form__row">
            <label class="c-field"><input v-model="form.first" type="text" required :placeholder="t('First Name', 'पहला नाम')" /></label>
            <label class="c-field"><input v-model="form.last" type="text" :placeholder="t('Last Name', 'अंतिम नाम')" /></label>
          </div>
          <label class="c-field"><input v-model="form.email" type="email" required :placeholder="t('Your Email Address', 'आपका ईमेल पता')" /></label>
          <div class="c-form__row">
            <label class="c-field"><input v-model="form.phone" type="tel" :placeholder="t('Enter Phone No', 'फ़ोन नंबर दर्ज करें')" /></label>
            <label class="c-field"><input v-model="form.country" type="text" :placeholder="t('Country Name', 'देश का नाम')" /></label>
          </div>
          <label class="c-field"><input v-model="form.subject" type="text" :placeholder="t('Subject', 'विषय')" /></label>
          <label class="c-field"><textarea v-model="form.message" rows="5" required :placeholder="t('Message', 'संदेश')"></textarea></label>
          <div class="c-form__actions">
            <button type="submit" class="btn btn--ink">{{ t('Submit', 'भेजें') }}</button>
          </div>
        </form>
      </div>

      <!-- Legal status -->
      <section class="c-legal reveal">
        <span class="kicker">{{ t('Legal status', 'कानूनी स्थिति') }}</span>
        <p>{{ t(
          'Dharmes Oraon Memorial Foundation is a registered Section 8 non-profit, incorporated on 29 April 2022 under the Companies Act, 2013 with the Ministry of Corporate Affairs, Government of India.',
          'धर्मेश उरांव मेमोरियल फाउंडेशन एक पंजीकृत धारा 8 गैर-लाभकारी संस्था है, जो 29 अप्रैल 2022 को कंपनी अधिनियम, 2013 के तहत भारत सरकार के कॉर्पोरेट कार्य मंत्रालय में निगमित की गई।'
        ) }}</p>
        <ul class="c-legal__ids">
          <li><span>CIN</span> U85300JH2022NPL018588</li>
          <li><span>PAN</span> AAJCD2544A</li>
          <li><span>TAN</span> RCHD02826F</li>
        </ul>
      </section>
    </div>

    <SectionFaq />
  </div>
</template>

<style scoped>
.c-hero { padding-block: clamp(48px, 8vw, 96px) clamp(28px, 4vw, 44px); text-align: center; }
.c-hero__title { font-size: clamp(52px, 9vw, 116px); letter-spacing: -0.045em; line-height: 0.95; }
.c-body { padding-bottom: clamp(56px, 8vw, 100px); }

.c-band { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; background: var(--green-soft); border-radius: var(--r-lg); padding: clamp(32px, 4vw, 56px); }
.c-band__head { font-family: var(--serif); font-weight: 500; font-size: clamp(17px, 1.5vw, 19px); line-height: 1.35; color: var(--ink); max-width: 26ch; }
.c-band__icon { display: inline-flex; margin: 28px 0 18px; color: var(--ink); }
.c-band__detail { font-size: 17px; line-height: 1.7; color: var(--ink); }
.c-band__detail a:hover { color: var(--green); }

.c-form-wrap { background: var(--white); border-radius: var(--r-lg); padding: clamp(28px, 4vw, 56px); margin-top: -40px; box-shadow: var(--shadow-sm); position: relative; }
.c-form { display: grid; gap: 8px; }
.c-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.c-field { display: block; }
.c-field input, .c-field textarea { width: 100%; border: none; border-bottom: 1px solid var(--line-strong); background: transparent; padding: 18px 0; font: inherit; font-size: 17px; color: var(--ink); resize: vertical; }
.c-field input::placeholder, .c-field textarea::placeholder { color: var(--body); opacity: 1; }
.c-field input:focus, .c-field textarea:focus { outline: none; border-bottom-color: var(--ink); }
.c-form__actions { display: flex; justify-content: flex-end; margin-top: 20px; }

.c-legal { margin-top: clamp(48px, 7vw, 80px); max-width: 760px; }
.c-legal .kicker { margin-bottom: 14px; }
.c-legal p { color: var(--body); }
.c-legal__ids { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-top: 20px; font-size: 14.5px; color: var(--ink); }
.c-legal__ids li { display: flex; gap: 8px; }
.c-legal__ids span { font-weight: 700; letter-spacing: .06em; color: var(--body-dim); }

@media (max-width: 900px) { .c-band { grid-template-columns: 1fr; gap: 28px; } .c-form-wrap { margin-top: 0; } }
@media (max-width: 560px) { .c-form__row { grid-template-columns: 1fr; gap: 8px; } }
</style>
