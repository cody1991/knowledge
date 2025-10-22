# 添加新知识页面的 Prompt 模板

## 基本 Prompt 模板

```
我需要为知识库应用添加一个新的知识页面。请按照以下步骤帮我完成：

### 1. 页面基本信息
- 页面主题：[填写你的知识主题，如"编程学习"、"健身指南"等]
- 页面图标：[选择antd图标，如CodeOutlined、FireOutlined等]
- 页面描述：[简要描述这个知识页面的内容]

### 2. 子页面结构
请为这个知识页面设计6个子页面，每个子页面包含不同的内容：

子页面1：[名称] - [描述]
子页面2：[名称] - [描述]
子页面3：[名称] - [描述]
子页面4：[名称] - [描述]
子页面5：[名称] - [描述]
子页面6：[名称] - [描述]

### 3. 具体内容要求
请为每个子页面提供详细的内容，包括：
- 标题和描述
- 具体的学习内容或建议
- 实用的列表、卡片或步骤
- 相关的图标和颜色搭配
- 如果有的话，提供学习资源、工具推荐等

### 4. 实现步骤
请按照以下顺序实现：

1. 更新Layout.js中的menuItems数组，添加新的菜单项和子菜单
2. 更新App.js中的路由配置，添加新的路由规则
3. 创建新的页面组件文件（如NewKnowledge.js）
4. 在页面组件中实现renderContent函数，根据路由显示不同内容
5. 确保页面样式和布局与其他页面保持一致

### 5. 代码风格要求
- 使用Antd组件库
- 保持与其他页面一致的代码结构
- 使用合适的图标和颜色
- 确保响应式设计
- 添加适当的提示信息和警告框

### 示例参考
可以参考现有的页面结构：
- 驾照考试页面：包含考试流程、各科目详解、考试技巧等
- 英语学习页面：包含学习路径、听说读写、学习方法等
- 礼物推荐页面：包含礼物分类、关系类型、年龄阶段等

请确保新页面的内容实用、详细，并且符合知识库的整体风格。
```

## 使用示例

### 示例 1：编程学习页面

```
我需要为知识库应用添加一个新的知识页面。请按照以下步骤帮我完成：

### 1. 页面基本信息
- 页面主题：编程学习
- 页面图标：CodeOutlined
- 页面描述：从零开始学习编程的完整指南

### 2. 子页面结构
请为这个知识页面设计6个子页面：

子页面1：学习路径 - 不同编程语言的学习顺序和路径规划
子页面2：编程语言 - 主流编程语言的特点和选择建议
子页面3：开发工具 - 必备的开发工具和环境配置
子页面4：实战项目 - 适合初学者的项目练习
子页面5：学习资源 - 推荐的学习网站、书籍和课程
子页面6：职业规划 - 编程职业发展方向和技能要求

### 3. 具体内容要求
请为每个子页面提供详细的内容，包括：
- 具体的学习建议和步骤
- 推荐的编程语言和工具
- 实用的项目案例
- 学习时间规划
- 相关的在线资源和社区

### 4. 实现步骤
请按照以下顺序实现：
1. 更新Layout.js中的menuItems数组
2. 更新App.js中的路由配置
3. 创建ProgrammingLearning.js页面组件
4. 实现renderContent函数
5. 确保样式一致性

请确保内容实用且符合知识库的整体风格。
```

### 示例 2：健身指南页面

```
我需要为知识库应用添加一个新的知识页面。请按照以下步骤帮我完成：

### 1. 页面基本信息
- 页面主题：健身指南
- 页面图标：FireOutlined
- 页面描述：科学健身的完整指南

### 2. 子页面结构
请为这个知识页面设计6个子页面：

子页面1：健身基础 - 健身的基本概念和原理
子页面2：训练计划 - 不同目标的训练计划制定
子页面3：营养饮食 - 健身期间的饮食搭配
子页面4：器械使用 - 常见健身器械的使用方法
子页面5：常见问题 - 健身过程中的常见问题和解决方案
子页面6：进阶技巧 - 高级训练技巧和注意事项

### 3. 具体内容要求
请为每个子页面提供详细的内容，包括：
- 科学的训练方法
- 营养搭配建议
- 安全注意事项
- 训练计划模板
- 相关工具和APP推荐

### 4. 实现步骤
请按照以下顺序实现：
1. 更新Layout.js中的menuItems数组
2. 更新App.js中的路由配置
3. 创建FitnessGuide.js页面组件
4. 实现renderContent函数
5. 确保样式一致性

请确保内容科学实用且符合知识库的整体风格。
```

## 技术实现细节

### 1. Layout.js 更新示例

```javascript
{
  key: '/new-knowledge',
  icon: <NewIcon />,
  label: '新知识页面',
  children: [
    { key: '/new-knowledge/overview', label: '概览' },
    { key: '/new-knowledge/topic1', label: '主题1' },
    { key: '/new-knowledge/topic2', label: '主题2' },
    { key: '/new-knowledge/topic3', label: '主题3' },
    { key: '/new-knowledge/topic4', label: '主题4' },
    { key: '/new-knowledge/topic5', label: '主题5' },
  ]
}
```

### 2. App.js 路由更新示例

```javascript
<Route path="/new-knowledge" element={<Navigate to="/new-knowledge/overview" replace />} />
<Route path="/new-knowledge/*" element={<NewKnowledge />} />
```

### 3. 页面组件结构示例

```javascript
import React from 'react';
import { Card, Typography, List, Space, Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const NewKnowledge = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) {
      case '/new-knowledge/overview':
        return (
          <Card>
            <Title level={2}>概览内容</Title>
            {/* 具体内容 */}
          </Card>
        );
      // 其他case...
      default:
        return (
          <Card>
            <Title level={2}>欢迎来到新知识页面</Title>
            <Paragraph>请从左侧菜单选择您要了解的内容。</Paragraph>
          </Card>
        );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1} style={{ color: '#1890ff', textAlign: 'center' }}>
          🎯 新知识页面标题
        </Title>
        <Alert
          message="提示信息"
          description="页面的简要说明和重要提示。"
          type="info"
          showIcon
          style={{ marginBottom: '24px' }}
        />
      </div>
      {renderContent()}
    </div>
  );
};

export default NewKnowledge;
```

## 注意事项

1. **保持一致性**：新页面的样式和结构应该与现有页面保持一致
2. **响应式设计**：确保页面在不同设备上都能正常显示
3. **内容质量**：提供实用、详细、准确的内容
4. **用户体验**：使用合适的图标、颜色和布局来提升用户体验
5. **代码规范**：遵循项目的代码规范和最佳实践

## 可用的 Antd 图标

常用的图标包括：

- `CodeOutlined` - 编程相关
- `FireOutlined` - 健身、运动相关
- `BookOutlined` - 学习、教育相关
- `HeartOutlined` - 健康、生活相关
- `ToolOutlined` - 工具、技能相关
- `StarOutlined` - 推荐、精选相关
- `BulbOutlined` - 创意、想法相关
- `CrownOutlined` - 高级、专业相关

更多图标请参考 [Antd Icons](https://ant.design/components/icon-cn)
