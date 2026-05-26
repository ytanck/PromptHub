<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// import CopyPrompt from './components/CopyPrompt.vue'

const { Layout } = DefaultTheme
const { page } = useData()
</script>

<template>
  <Layout>
    <!-- <template #doc-before>
      <CopyPrompt v-if="page.filePath.startsWith('prompts/')" />
    </template> -->
  </Layout>
</template>