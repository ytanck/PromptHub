import { readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { defineConfig } from 'vitepress'

function getTitle(filePath: string): string {
  const content = readFileSync(filePath, 'utf-8')
  const match = content.match(/^title:\s*(.+)$/m)
  if (match) return match[1].replace(/^['"]|['"]$/g, '')
  return basename(filePath, '.md').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function generatePromptSidebar() {
  const promptsDir = join(__dirname, '../prompts')
  let categories: string[]
  try {
    categories = readdirSync(promptsDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
  } catch {
    return []
  }

  return categories.map(cat => {
    const catDir = join(promptsDir, cat)
    const files = readdirSync(catDir)
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        text: getTitle(join(catDir, f)),
        link: `/prompts/${cat}/${f.replace('.md', '')}`
      }))

    return {
      text: cat.charAt(0).toUpperCase() + cat.slice(1),
      collapsed: false,
      items: files
    }
  })
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PromptHub',
  description: 'A community-driven collection of AI prompts',
  base: '/prompt-hub/',
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Prompts', link: '/prompts/' },
      { text: 'Contribute', link: '/contributing' }
    ],

    sidebar: {
      '/prompts/': [
        {
          text: 'PromptHub',
          items: [
            { text: 'Browse All', link: '/prompts/' },
            { text: 'How to Contribute', link: '/contributing' }
          ]
        },
        ...generatePromptSidebar()
      ]
    },

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
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})