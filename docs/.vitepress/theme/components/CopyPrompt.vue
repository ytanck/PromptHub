<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mounted = ref(false)
const copied = ref(false)
const multipleBlocks = ref(false)

onMounted(() => {
  mounted.value = true
  multipleBlocks.value = document.querySelectorAll('.vp-doc pre').length > 1
})

function copyFirstCodeBlock() {
  const blocks = document.querySelectorAll('.vp-doc pre')
  console.log(123,blocks);
  
  if (blocks.length === 0) return
  const text = blocks[0].textContent || ''
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

function copyAllCodeBlocks() {
  const blocks = document.querySelectorAll('.vp-doc pre')
  if (blocks.length === 0) return
  const text = Array.from(blocks).map(b => b.textContent || '').join('\n\n---\n\n')
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<template>
  <div v-if="mounted" class="copy-prompt-bar">
    <button class="copy-btn" @click="copyFirstCodeBlock">
      {{ copied ? '✓ Copied!' : '📋 Copy Prompt' }}
    </button>
    <button
      v-if="multipleBlocks"
      class="copy-btn secondary"
      @click="copyAllCodeBlocks"
    >
      Copy All
    </button>
  </div>
</template>

<style scoped>
.copy-prompt-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.copy-btn.secondary {
  background: transparent;
  color: var(--vp-c-brand-1);
}

.copy-btn.secondary:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-2);
}
</style>