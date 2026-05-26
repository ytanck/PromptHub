---
layout: home

hero:
  name: PromptHub
  text: A Community Prompt Collection
  tagline: Discover, share, and collaborate on AI prompts. Built by the community, for the community.
  actions:
    - theme: brand
      text: Browse Prompts
      link: /prompts/guide
    - theme: alt
      text: How to Contribute
      link: /contributing

features:
  - icon: 🏷️
    title: Organized by Category
    details: Prompts are organized into categories like Writing, Coding, Analysis, and Creative — easy to browse and discover.
  - icon: 📋
    title: One-Click Copy
    details: Each prompt page includes a copy-to-clipboard button. Grab what you need and paste it into your AI tool of choice.
  - icon: 🌐
    title: Community Driven
    details: Open source on GitHub. Anyone can submit new prompts via pull request. Moderated for quality and usefulness.
  - icon: 🎨
    title: Syntax Highlighting
    details: Prompt content is displayed with full syntax highlighting, making structured prompts easy to read and understand.
  - icon: 🌙
    title: Dark Mode
    details: Seamless light/dark theme switching to match your working environment.
  - icon: 📱
    title: Mobile Friendly
    details: Fully responsive design — browse and copy prompts from any device.
---

<script setup>
import { data } from './prompts/recent.data'
import { withBase } from 'vitepress'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
const members = [
  {
    avatar: 'https://www.github.com/ytanck.png',
    name: 'Yang',
    title: 'vibe coding',
    desc: 'Developer<br/>Creator @ <a href="" target="_blank">PromptHub</a>',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'youtube', link: 'https://www.youtube.com'},
    ]
  }
]
</script>

## Recently Added

<div class="prompt-grid">
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
</div>

<div v-if="data.length === 0" style="text-align: center; color: var(--vp-c-text-2); padding: 2rem;">
  No prompts yet — <a href="/contributing">be the first to contribute!</a>
</div>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributors
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>