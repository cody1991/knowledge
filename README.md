# 知识库应用

一个基于 React 和 Ant Design 的知识库应用，提供各种实用的学习内容和生活指导。

## 功能特色

- 🚗 **驾照考试指南** - 详细的驾照考试流程，包括科目一、二、三、四的考试要点和注意事项
- 📚 **英语学习指南** - 系统性的英语学习方法，从基础语法到高级应用
- 🎁 **礼物推荐指南** - 女孩生日礼物推荐，帮你选择最合适的礼物表达心意
- 📱 **响应式设计** - 支持手机、平板、电脑等多种设备
- 🎨 **现代化 UI** - 基于 Ant Design 的美观界面

## 技术栈

- React 18
- Ant Design 5
- React Router 6
- CSS3

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # 公共组件
│   └── Layout.js       # 布局组件
├── pages/              # 页面组件
│   ├── Home.js         # 首页
│   ├── DrivingLicense.js  # 驾照考试页面
│   ├── EnglishLearning.js  # 英语学习页面
│   └── GiftGuide.js    # 礼物推荐页面
├── App.js              # 主应用组件
├── App.css             # 应用样式
├── index.js            # 入口文件
└── index.css           # 全局样式
```

## 页面介绍

### 首页

- 展示所有知识分类
- 提供快速导航
- 介绍应用特色

### 驾照考试页面

- 完整的考试流程介绍
- 各科目详细说明
- 学习建议和考试技巧
- 常见错误提醒

### 英语学习页面

- 学习路径规划
- 听说读写技能指导
- 多种学习方法介绍
- 学习资源推荐

### 礼物推荐页面

- 按分类推荐礼物
- 根据关系类型选择
- 年龄阶段适配
- 创意想法和避坑指南

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.js` 中添加路由配置
3. 在 `src/components/Layout.js` 中添加导航菜单项
4. 在首页添加对应的卡片

### 样式定制

- 全局样式在 `src/index.css` 中定义
- 组件样式在各自的 CSS 文件中定义
- 使用 Ant Design 的主题定制功能

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
