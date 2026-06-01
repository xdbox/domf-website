<script setup lang="ts">
const { locale } = useLocale()
useHead({ htmlAttrs: { lang: locale } })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
