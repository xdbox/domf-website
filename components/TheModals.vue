<script setup lang="ts">
const { active, open, close } = useModals()
const { t } = useLocale()
const email = ref('')
function subscribe() {
  if (!email.value) return
  open('success')
}
</script>

<template>
  <!-- Newsletter -->
  <BaseModal :open="active === 'newsletter'" @close="close">
    <div class="m">
      <span class="tag tag--quiet">{{ t('Foundation updates', 'फाउंडेशन अपडेट') }}</span>
      <h3 class="h3">{{ t('Stay close to the work.', 'कार्य के निकट रहें।') }}</h3>
      <p>{{ t('A quarterly briefing with programme results, field stories and our latest research — no fundraising appeals, just evidence.', 'कार्यक्रम परिणामों, क्षेत्र की कहानियों और हमारे नवीनतम शोध के साथ एक त्रैमासिक ब्रीफिंग — कोई धन-संग्रह अपील नहीं, केवल साक्ष्य।') }}</p>
      <form class="m__form" @submit.prevent="subscribe">
        <input v-model="email" type="email" required :placeholder="t('you@email.com', 'aap@email.com')" />
        <button class="btn btn--green" type="submit">{{ t('Subscribe', 'सदस्यता लें') }}</button>
      </form>
      <button class="m__skip" @click="close">{{ t('Not now', 'अभी नहीं') }}</button>
    </div>
  </BaseModal>

  <!-- Success -->
  <BaseModal :open="active === 'success'" @close="close">
    <div class="m text-center">
      <div class="m__check">
        <svg width="32" height="32" viewBox="0 0 34 34"><path d="M7 18l6 6 14-14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h3 class="h3">{{ t('You\'re subscribed.', 'आपने सदस्यता ले ली है।') }}</h3>
      <p>{{ t('Thank you. Look out for our next quarterly briefing in your inbox.', 'धन्यवाद। अपने इनबॉक्स में हमारी अगली त्रैमासिक ब्रीफिंग की प्रतीक्षा करें।') }}</p>
      <button class="btn btn--ink" @click="close">{{ t('Done', 'पूर्ण') }}</button>
    </div>
  </BaseModal>
</template>

<style scoped>
.m h3 { margin: 14px 0 12px; }
.m p { max-width: 44ch; margin-bottom: 24px; }
.m__form { display: flex; gap: 10px; margin-bottom: 14px; }
.m__form input { flex: 1; padding: 14px 18px; border-radius: var(--r-pill); border: 1.5px solid var(--line-strong); background: #fff; font: inherit; color: var(--ink); }
.m__form input:focus { outline: none; border-color: var(--green); }
.m__skip { color: var(--body-dim); font-weight: 600; font-size: 14px; }
.m__skip:hover { color: var(--ink); }
.m__check { width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 18px; display: grid; place-items: center; color: #fff; background: var(--green); }
.text-center { text-align: center; }
.text-center p { margin-inline: auto; }
@media (max-width: 460px) { .m__form { flex-direction: column; } }
</style>
