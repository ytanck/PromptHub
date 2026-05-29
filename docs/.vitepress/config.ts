import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

const base = process.env.GITHUB_ACTIONS ? '/PromptHub/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: 'PromptHub',
  description: 'A community-driven collection of AI prompts',
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: `${base}favicon.svg`,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Prompts', link: '/prompts/guide' },
      { text: 'Contribute', link: '/contributing' }
    ],

    sidebar,

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/prompt-hub' }
    ],

    editLink: {
      pattern: 'https://github.com/YOUR_USERNAME/prompt-hub/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Powered by VitePress',
      copyright: 'MIT Licensed | PromptHub Community'
    }
  },

  markdown: {
    headers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})