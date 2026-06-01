<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  intro?: string
  path?: string
  image?: string
}>()
</script>

<template>
  <section class="phero" :class="{ 'phero--image': image }">
    <div class="phero__bg" aria-hidden="true"></div>
    <div class="container phero__inner">
      <span v-if="kicker" class="kicker">{{ kicker }}</span>
      <h1 class="phero__title display">{{ title }}</h1>
      <p v-if="intro" class="lede phero__intro">{{ intro }}</p>
    </div>
    <div v-if="image" class="phero__photo"><img :src="PLACEHOLDER_IMG" :alt="title" /></div>
  </section>
</template>

<style scoped>
.phero { position: relative; overflow: hidden; padding-block: clamp(56px, 9vw, 104px) clamp(40px, 6vw, 72px); }
.phero__bg { position: absolute; inset: 0; z-index: -1; background: radial-gradient(70% 90% at 88% -10%, var(--green-soft), transparent 60%), radial-gradient(50% 80% at 0% 120%, var(--red-soft), transparent 55%); opacity: .6; }
.phero__inner { max-width: 880px; }
.phero .kicker { margin-bottom: 18px; }
.phero__title { margin-bottom: 22px; }
.phero__intro { font-size: clamp(18px, 2vw, 22px); }
.phero__photo { margin-top: clamp(36px, 5vw, 56px); }
.phero__photo img { width: 100%; max-height: 460px; object-fit: cover; }
.phero--image .phero__photo { }
</style>
