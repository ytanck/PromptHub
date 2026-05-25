import { createContentLoader } from 'vitepress'

interface PromptData {
  title: string
  url: string
  date: string
  tags: string[]
  author: string
  model: string
  excerpt: string | undefined
}

export default createContentLoader('prompts/**/*.md', {
  excerpt: true,
  transform(raw): PromptData[] {
    return raw
      .filter(p => p.frontmatter.title)
      .sort((a, b) => {
        const da = a.frontmatter.date ? +new Date(a.frontmatter.date) : 0
        const db = b.frontmatter.date ? +new Date(b.frontmatter.date) : 0
        return db - da
      })
      .slice(0, 10)
      .map(p => ({
        title: p.frontmatter.title,
        url: p.url,
        date: p.frontmatter.date || '',
        tags: p.frontmatter.tags || [],
        author: p.frontmatter.author || 'Anonymous',
        model: p.frontmatter.model || 'General',
        excerpt: p.excerpt || undefined
      }))
  }
})