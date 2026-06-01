<script setup lang="ts">
import type { PageContent } from '~/utils/content'
const props = defineProps<{ page: PageContent; path?: string }>()
useScrollReveal()
useHead({ title: () => props.page.title })

// Avoid a duplicate FAQ when a page already includes one in its content blocks.
const hasFaqBlock = computed(() => props.page.blocks.some((b) => b.type === 'faq'))
</script>

<template>
  <div>
    <PageHero :kicker="page.kicker" :title="page.title" :intro="page.intro" :path="path" :image="page.heroImage" />
    <PageBlocks :blocks="page.blocks" />
    <SectionFaq v-if="!hasFaqBlock" />
  </div>
</template>
