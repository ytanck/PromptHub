---
title: "PromptHub - 提示词展示与协作网站"
tags: ["code"]
date: 2026-05-26
author: "Yangtao"
model: "deepseek-v4-flash"
---

# 项目名称：PromptHub - 提示词展示与协作网站

## 项目描述
使用VitePress构建一个用于记录和展示AI Prompt提示词的静态网站。每个Prompt独立为一个Markdown文件，支持语法高亮、分类标签。项目托管在GitHub，通过GitHub Actions实现PR自动构建部署，允许社区贡献。

## 技术栈要求
- VitePress (最新版)
- GitHub Pages (部署目标)
- GitHub Actions (CI/CD)
- Markdown + YAML Frontmatter

## 功能需求

### 1. 内容组织
- `prompts/` 目录下按分类存放Prompt的.md文件
- 每个MD文件包含Frontmatter：标题(title)、标签(tags)、创建日期(date)、作者(author)、适用模型(model)
- 支持代码块内的Prompt内容高亮

### 2. 网站特性
- 左侧侧边栏自动生成分类导航
- 首页展示最近添加/更新的Prompt列表
- 每个Prompt页面包含复制到剪贴板按钮
- 支持暗色/亮色主题切换
- 响应式移动端适配

### 3. GitHub协作流程
- 提交PR时自动触发构建检查
- 合并到main分支后自动部署到GitHub Pages
- 提供CONTRIBUTING.md指导用户如何提交新Prompt

