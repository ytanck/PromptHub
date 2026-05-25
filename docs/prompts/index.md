# Browse Prompts

Explore prompts by category. Each prompt is a community contribution — try it, tweak it, share your own.

<div class="category-grid">
  <div class="category-card">
    <div class="icon">✍️</div>
    <h3><a href="/prompts/writing/">Writing</a></h3>
  </div>
  <div class="category-card">
    <div class="icon">💻</div>
    <h3><a href="/prompts/coding/">Coding</a></h3>
  </div>
  <div class="category-card">
    <div class="icon">📊</div>
    <h3><a href="/prompts/analysis/">Analysis</a></h3>
  </div>
  <div class="category-card">
    <div class="icon">🎨</div>
    <h3><a href="/prompts/creative/">Creative</a></h3>
  </div>
</div>

## Latest Additions

<script setup>
import { data } from './recent.data'
import { withBase } from 'vitepress'
</script>

<div v-for="p of data" :key="p.url" class="prompt-card">
  <h3><a :href="withBase(p.url)">{{ p.title }}</a></h3>
  <div class="meta">
    {{ p.date }} · by {{ p.author }} · {{ p.model }}
  </div>
  <p class="excerpt" v-if="p.excerpt">{{ p.excerpt }}</p>
  <div class="tags">
    <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
  </div>
</div>