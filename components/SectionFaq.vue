<script setup lang="ts">
const props = defineProps<{
  heading?: string
  items?: { q: string; a: string }[]
}>()
const { locale, t } = useLocale()

const defaultFaqsEn = [
  { q: 'How can I support the Foundation?', a: 'You can give securely online, set up a recurring contribution, volunteer your time, or partner with us as a company or trust. Every contribution is tracked to a programme outcome and reported transparently.' },
  { q: 'Where does my contribution go?', a: 'We publish a transparent breakdown for every programme. The large majority of funds reach the field directly, with the remainder covering essential operations and independent reporting.' },
  { q: 'How can I get involved as a volunteer?', a: 'Join our volunteer network and we will match your skills and availability to programmes in the regions we serve — from learning support to professional, pro-bono expertise.' },
  { q: 'Is the Foundation independently audited?', a: 'Yes. Our accounts are audited annually by an independent firm and the full statements are published on our Governance & Transparency page.' },
  { q: 'How can I stay updated on your work?', a: 'Subscribe to our quarterly briefing for field stories, impact reports and upcoming events.' }
]
const defaultFaqsHi = [
  { q: 'मैं फाउंडेशन का सहयोग कैसे कर सकता/सकती हूँ?', a: 'आप ऑनलाइन सुरक्षित रूप से दान कर सकते हैं, नियमित योगदान दे सकते हैं, स्वयंसेवा कर सकते हैं, या किसी कंपनी/ट्रस्ट के रूप में हमारे साथ जुड़ सकते हैं। हर योगदान को कार्यक्रम परिणाम तक ट्रैक किया जाता है और पारदर्शिता से रिपोर्ट किया जाता है।' },
  { q: 'मेरा योगदान कहाँ जाता है?', a: 'हम हर कार्यक्रम का पारदर्शी विवरण प्रकाशित करते हैं। अधिकांश धनराशि सीधे क्षेत्र तक पहुँचती है, शेष आवश्यक संचालन एवं स्वतंत्र रिपोर्टिंग में लगती है।' },
  { q: 'मैं स्वयंसेवक के रूप में कैसे जुड़ सकता/सकती हूँ?', a: 'हमारे स्वयंसेवक नेटवर्क से जुड़ें और हम आपके कौशल एवं उपलब्धता के अनुसार आपको कार्यक्रमों से जोड़ेंगे — शिक्षा सहायता से लेकर पेशेवर विशेषज्ञता तक।' },
  { q: 'क्या फाउंडेशन का स्वतंत्र ऑडिट होता है?', a: 'हाँ। हमारे खातों का प्रतिवर्ष स्वतंत्र फर्म द्वारा ऑडिट होता है और पूर्ण विवरण हमारे शासन एवं पारदर्शिता पृष्ठ पर प्रकाशित होते हैं।' },
  { q: 'मैं आपके कार्य की जानकारी कैसे पाता रहूँ?', a: 'क्षेत्र की कहानियों, प्रभाव रिपोर्ट और आगामी आयोजनों के लिए हमारी त्रैमासिक ब्रीफिंग की सदस्यता लें।' }
]

const faqs = computed(() => {
  if (props.items?.length) return props.items
  return locale.value === 'hi' ? defaultFaqsHi : defaultFaqsEn
})
</script>

<template>
  <section class="faq section band">
    <div class="container faq__inner">
      <div class="faq__head">
        <span class="kicker">{{ t('General Questions', 'सामान्य प्रश्न') }}</span>
        <h2 class="h2">{{ heading || t('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न') }}</h2>
        <p class="lede">{{ t('Still curious? Reach our team any time — we reply within one business day.', 'और जानना चाहते हैं? हमारी टीम से कभी भी संपर्क करें — हम एक कार्यदिवस में उत्तर देते हैं।') }}</p>
        <NuxtLink to="/contact" class="btn btn--outline">{{ t('Contact us', 'संपर्क करें') }}</NuxtLink>
      </div>
      <div class="faq__list"><FaqList :items="faqs" /></div>
    </div>
  </section>
</template>

<style scoped>
.faq__inner { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(32px, 6vw, 72px); align-items: start; }
.faq__head { position: sticky; top: 110px; }
.faq__head .h2 { margin: 16px 0 16px; }
.faq__head .btn { margin-top: 26px; }
.faq__list :deep(.faq) { margin-top: 0; }
@media (max-width: 880px) { .faq__inner { grid-template-columns: 1fr; } .faq__head { position: static; } }
</style>
