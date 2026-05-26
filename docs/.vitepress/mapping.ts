// 英文目录名 → 中文分类名
export const categoryMap: Record<string, string> = {
  writing: '内容创作',
  coding: '编程开发',
  analysis: '分析师',
  education: '学习辅导',
  creative: '创意设计',
  productivity: '工作效率',
  special: '特色专题',
  'image-generation':'图片生成',
  'video-generation':'视频生成',
  'audio-generation':'音频生成',
  tools: '工具',
}

// 可选：文件名 → 中文标题（优先级高于 frontmatter title）
export const promptTitleMap: Record<string, Record<string, string>> = {
  // 可按需添加，不在此表中的文件会使用 frontmatter title
  writing: {},
  'image-generation': {
    'image1': '如何创建一个好的图片提示'
  }
}
  
