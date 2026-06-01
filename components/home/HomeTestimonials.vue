<script setup lang="ts">
const { t } = useLocale()
const reviews = [
  { name: ['Amara D.', 'अमरा डी.'], role: ['Volunteer · 6 years', 'स्वयंसेवक · 6 वर्ष'], text: ['I came to give a weekend. I stayed for the people. The way this team turns support into real outcomes is unlike anything I have seen.', 'मैं एक सप्ताहांत देने आई थी। मैं लोगों के लिए रुक गई। यह टीम जिस तरह सहयोग को वास्तविक परिणामों में बदलती है, वैसा मैंने कहीं नहीं देखा।'] },
  { name: ['Marcus L.', 'मार्कस एल.'], role: ['Supporter · 3 years', 'सहयोगी · 3 वर्ष'], text: ['Every report is transparent down to the rupee. I finally trust where my contribution goes — and the impact speaks for itself.', 'हर रिपोर्ट एक-एक रुपये तक पारदर्शी है। अब मुझे भरोसा है कि मेरा योगदान कहाँ जाता है — और इसका प्रभाव स्वयं बोलता है।'] },
  { name: ['Priya N.', 'प्रिया एन.'], role: ['Partner · 9 years', 'साझेदार · 9 वर्ष'], text: ['Our organisation has collaborated on five projects. Each delivered more than promised, on time, with real heart.', 'हमारे संगठन ने पाँच परियोजनाओं में सहयोग किया है। हर एक ने वादे से अधिक, समय पर और सच्चे मन से काम किया।'] }
]
</script>

<template>
  <section class="ts section band">
    <div class="container">
      <div class="section-head section-head--center reveal">
        <span class="kicker kicker--center">{{ t('Be the Light', 'प्रकाश बनें') }}</span>
        <h2 class="h2">{{ t('Voices from the communities we serve.', 'जिन समुदायों की हम सेवा करते हैं, उनकी आवाज़ें।') }}</h2>
      </div>
      <div class="ts__grid">
        <article v-for="(r, i) in reviews" :key="r.name" class="ts__card reveal" :style="{ transitionDelay: i * 90 + 'ms' }">
          <div class="ts__stars" aria-label="5 out of 5">
            <svg v-for="n in 5" :key="n" width="18" height="18" viewBox="0 0 20 20"><path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.2l1-5.8L1.5 7.2l5.9-.9z" fill="var(--amber)"/></svg>
          </div>
          <p class="ts__text">“{{ t(r.text[0], r.text[1]) }}”</p>
          <footer class="ts__person">
            <img :src="PLACEHOLDER_AVATAR" :alt="t(r.name[0], r.name[1])" loading="lazy" />
            <span><strong>{{ t(r.name[0], r.name[1]) }}</strong><em>{{ t(r.role[0], r.role[1]) }}</em></span>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ts__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; margin-top: 50px; }
.ts__card { background: var(--cream); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 34px 32px; transition: transform .3s var(--ease), box-shadow .3s var(--ease), opacity .7s var(--ease); }
.ts__card:nth-child(2) { background: var(--green); border-color: var(--green); }
.ts__card:nth-child(2) .ts__text { color: #eef3ef; }
.ts__card:nth-child(2) .ts__person strong { color: #fff; }
.ts__card:nth-child(2) .ts__person em { color: var(--panel); }
.ts__card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.ts__stars { display: flex; gap: 3px; margin-bottom: 18px; }
.ts__text { font-size: 17px; line-height: 1.6; color: var(--ink); margin-bottom: 24px; }
.ts__person { display: flex; align-items: center; gap: 12px; }
.ts__person img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.ts__person strong { display: block; font-family: var(--display); font-weight: 700; color: var(--ink); font-size: 16px; }
.ts__person em { font-style: normal; font-size: 13px; color: var(--body-dim); }
@media (max-width: 900px) { .ts__grid { grid-template-columns: 1fr; max-width: 460px; margin-inline: auto; } }
</style>
