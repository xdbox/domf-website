<script setup lang="ts">
import { getPage } from '~/utils/content'

const route = useRoute()
const { locale } = useLocale()
const path = '/' + (Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug || '')

// 404 on the base (locale-independent) lookup
if (!getPage(path)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Locale-reactive content
const page = computed(() => getPage(path, locale.value)!)
</script>

<template>
  <PageTemplate :page="page" :path="path" />
</template>
