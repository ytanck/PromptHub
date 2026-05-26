import { readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { categoryMap, promptTitleMap } from './mapping'

// 读取文件的 frontmatter title，简化版正则
function getFileTitle(filePath: string): string {
  const content = readFileSync(filePath, 'utf-8')
  const match = content.match(/^title:\s*(.+)$/m)
  if (match) {
    return match[1].replace(/^['"]|['"]$/g, '')
  }
  // fallback: 文件名格式化
  return basename(filePath, '.md').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

// 自动生成 prompts 分类侧边栏
export function generatePromptSidebar() {
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
      .map(f => {
        const name = f.replace('.md', '')
        const filePath = join(catDir, f)
        // 优先使用 mapping 中的标题，其次读取 frontmatter
        const title = promptTitleMap[cat]?.[name] ?? getFileTitle(filePath)
        return {
          text: title,
          link: `/prompts/${cat}/${name}`
        }
      })

    return {
      text: categoryMap[cat] || cat.charAt(0).toUpperCase() + cat.slice(1),
      collapsed: false,
      items: files
    }
  })
}

export default {
  '/prompts/': [
    // {
    //   text: '📂 PromptHub',
    //   items: [
    //     { text: '📋 浏览全部', link: '/prompts/guide' },
    //     { text: '📝 如何贡献', link: '/contributing' }
    //   ]
    // },
    ...generatePromptSidebar()
  ]
}