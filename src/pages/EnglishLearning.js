import React from 'react';
import { Card, Typography, Steps, Alert, List, Tag, Space, Button, Collapse, Row, Col, Progress } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined, BookOutlined, SoundOutlined, EditOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;
const { Panel } = Collapse;

const EnglishLearning = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const learningLevels = [
    {
      title: '入门级 (Beginner)',
      description: '掌握基础词汇和简单语法',
      content: [
        '学习基础词汇（1000-2000词）',
        '掌握基本语法结构',
        '练习简单对话',
        '培养英语学习兴趣'
      ],
      duration: '3-6个月'
    },
    {
      title: '初级 (Elementary)',
      description: '能够进行基本交流',
      content: [
        '扩充词汇量（2000-4000词）',
        '学习常用语法规则',
        '练习日常对话',
        '开始阅读简单文章'
      ],
      duration: '6-12个月'
    },
    {
      title: '中级 (Intermediate)',
      description: '能够处理大部分日常情况',
      content: [
        '词汇量达到4000-6000词',
        '掌握复杂语法结构',
        '能够进行较深入的讨论',
        '阅读各种类型的文章'
      ],
      duration: '1-2年'
    },
    {
      title: '中高级 (Upper-Intermediate)',
      description: '能够流利表达观点',
      content: [
        '词汇量6000-8000词',
        '掌握高级语法',
        '能够进行学术讨论',
        '阅读专业文献'
      ],
      duration: '2-3年'
    },
    {
      title: '高级 (Advanced)',
      description: '接近母语水平',
      content: [
        '词汇量8000+词',
        '掌握所有语法规则',
        '能够进行专业交流',
        '理解复杂的文学作品'
      ],
      duration: '3-5年'
    }
  ];

  const skills = {
    listening: {
      title: '听力技能',
      icon: <SoundOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      tips: [
        '从慢速英语开始，逐步提高语速',
        '多听英语新闻、播客、电影',
        '练习听写，提高听力准确性',
        '学习连读、弱读等发音规则',
        '使用英语学习APP进行听力练习'
      ],
      resources: [
        'VOA慢速英语',
        'BBC Learning English',
        'TED Talks',
        '英语播客',
        '英语电影和电视剧'
      ]
    },
    speaking: {
      title: '口语技能',
      icon: <SoundOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      tips: [
        '大胆开口，不要害怕犯错',
        '模仿标准发音，练习语音语调',
        '参加英语角或语言交换',
        '录音练习，自我纠正',
        '学习常用表达和俚语'
      ],
      resources: [
        '英语角活动',
        '语言交换伙伴',
        '在线口语课程',
        '英语演讲俱乐部',
        '口语练习APP'
      ]
    },
    reading: {
      title: '阅读技能',
      icon: <BookOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />,
      tips: [
        '从简单文章开始，逐步提高难度',
        '学习阅读技巧，如略读、扫读',
        '积累词汇，建立词汇本',
        '分析文章结构和逻辑',
        '培养阅读习惯，每天坚持阅读'
      ],
      resources: [
        '英语新闻网站',
        '英语小说和散文',
        '学术论文',
        '英语杂志',
        '在线英语阅读平台'
      ]
    },
    writing: {
      title: '写作技能',
      icon: <EditOutlined style={{ fontSize: '32px', color: '#722ed1' }} />,
      tips: [
        '从简单句子开始，逐步写复杂文章',
        '学习英语写作结构和逻辑',
        '多练习不同类型的写作',
        '学习常用连接词和过渡词',
        '请老师或朋友帮忙修改'
      ],
      resources: [
        '英语写作教材',
        '在线写作课程',
        '写作练习平台',
        '英语写作指导书',
        '写作批改服务'
      ]
    }
  };

  const studyMethods = [
    {
      method: '沉浸式学习法',
      description: '创造英语环境，全方位接触英语',
      steps: [
        '将手机、电脑系统语言设置为英语',
        '观看英语电影和电视剧（带英文字幕）',
        '听英语音乐和播客',
        '阅读英语新闻和文章',
        '尝试用英语思考'
      ],
      effectiveness: 90
    },
    {
      method: '间隔重复法',
      description: '科学安排复习时间，提高记忆效率',
      steps: [
        '学习新内容后立即复习',
        '1天后再次复习',
        '3天后第三次复习',
        '1周后第四次复习',
        '1个月后第五次复习'
      ],
      effectiveness: 85
    },
    {
      method: '主题学习法',
      description: '围绕特定主题深入学习',
      steps: [
        '选择一个感兴趣的主题',
        '收集相关词汇和表达',
        '阅读相关文章和资料',
        '练习相关对话和写作',
        '总结和复习所学内容'
      ],
      effectiveness: 80
    },
    {
      method: '任务驱动法',
      description: '通过完成具体任务来学习英语',
      steps: [
        '设定具体的学习目标',
        '设计相关的学习任务',
        '完成任务并记录过程',
        '反思和总结学习效果',
        '调整学习策略'
      ],
      effectiveness: 75
    }
  ];

  const commonMistakes = [
    {
      category: '语法错误',
      mistakes: [
        '时态使用错误',
        '主谓不一致',
        '介词使用不当',
        '冠词使用错误',
        '语序错误'
      ]
    },
    {
      category: '发音问题',
      mistakes: [
        '音标发音不准确',
        '重音位置错误',
        '连读和弱读掌握不好',
        '语调不自然',
        '语速过快或过慢'
      ]
    },
    {
      category: '词汇使用',
      mistakes: [
        '词汇搭配错误',
        '同义词使用不当',
        '词汇使用过于简单',
        '中式英语表达',
        '词汇记忆不牢固'
      ]
    },
    {
      category: '学习方法',
      mistakes: [
        '只背单词不练习应用',
        '忽视听说训练',
        '学习时间不规律',
        '缺乏系统性学习',
        '急于求成，基础不扎实'
      ]
    }
  ];

  // 根据当前路径渲染不同的内容
  const renderContent = () => {
    switch (currentPath) {
      case '/english-learning/overview':
        return (
          <div>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={2}>英语学习完整路径规划</Title>
              <Paragraph>
                英语学习是一个系统性的过程，需要按照科学的路径和方法逐步提高。
                本指南将为您提供从零基础到高级水平的完整学习路径，每个阶段都有明确的学习目标、
                具体的学习内容和详细的学习方法。无论您现在的英语水平如何，都能找到适合您的学习起点。
              </Paragraph>
              <Paragraph>
                学习英语不仅仅是掌握一门语言，更是打开世界大门的钥匙。通过系统性的学习，
                您将能够阅读英文资料、与外国人交流、观看英文电影、甚至在国际舞台上展现自己。
                让我们开始这段精彩的英语学习之旅吧！
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>第一阶段：入门级（Beginner）- 建立基础</Title>
              <Paragraph>
                <Text strong>学习目标：</Text> 掌握基础词汇和简单语法，能够进行最基本的日常交流。
              </Paragraph>
              <Paragraph>
                <Text strong>学习内容详解：</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>1. 基础词汇学习（1000-2000词）：</Text>
                这个阶段需要掌握最常用的英语单词。建议从以下类别开始：
                数字（1-100）、颜色、家庭成员、身体部位、食物、动物、天气、时间等。
                每天学习20-30个新单词，同时复习之前学过的单词。
                可以使用单词卡片、手机APP或者制作自己的单词本。
                重要的是要理解单词的含义，而不是死记硬背。
              </Paragraph>
              <Paragraph>
                <Text strong>2. 基本语法结构：</Text>
                学习英语的基本语法规则，包括：
                名词的单复数形式（如：book-books, child-children）
                动词的基本形式（如：be动词am/is/are的使用）
                简单的时态（现在时、过去时、将来时的基本用法）
                形容词和副词的用法
                基本的句型结构（主语+谓语+宾语）
              </Paragraph>
              <Paragraph>
                <Text strong>3. 简单对话练习：</Text>
                学习最基本的日常对话，如：
                问候语（Hello, Hi, Good morning, How are you?）
                自我介绍（My name is..., I am from..., I am...years old）
                询问和回答基本信息（What's your name? Where are you from?）
                购物、点餐、问路等基本场景对话
              </Paragraph>
              <Paragraph>
                <Text strong>4. 培养英语学习兴趣：</Text>
                通过观看简单的英文动画片、听英文儿歌、阅读简单的英文故事等方式，
                培养对英语的兴趣。选择您感兴趣的内容，让学习变得有趣而不是负担。
              </Paragraph>
              <Paragraph>
                <Text strong>学习时间：</Text> 3-6个月，每天学习1-2小时
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>第二阶段：初级（Elementary）- 能够进行基本交流</Title>
              <Paragraph>
                <Text strong>学习目标：</Text> 扩充词汇量，学习常用语法规则，能够进行日常对话。
              </Paragraph>
              <Paragraph>
                <Text strong>学习内容详解：</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>1. 扩充词汇量（2000-4000词）：</Text>
                在基础词汇的基础上，学习更多类别的单词：
                职业、教育、健康、运动、娱乐、科技、环境等
                学习同义词和反义词，丰富表达方式
                学习常用短语和固定搭配（如：look after, get up, go on）
                开始学习词根词缀，帮助记忆和理解单词
              </Paragraph>
              <Paragraph>
                <Text strong>2. 学习常用语法规则：</Text>
                深入学习英语语法，包括：
                各种时态的详细用法（现在进行时、过去进行时、现在完成时等）
                情态动词的使用（can, could, may, might, must, should等）
                被动语态的基本用法
                条件句（if条件句的三种类型）
                比较级和最高级
                定语从句的基本用法
              </Paragraph>
              <Paragraph>
                <Text strong>3. 练习日常对话：</Text>
                能够进行更复杂的日常对话：
                谈论兴趣爱好、工作、学习、家庭等话题
                表达观点和感受（I think..., I feel..., In my opinion...）
                描述过去发生的事情
                制定计划和安排（I'm going to..., I plan to...）
                处理日常生活中的各种情况
              </Paragraph>
              <Paragraph>
                <Text strong>4. 开始阅读简单文章：</Text>
                阅读适合初级水平的英文材料：
                简单的新闻文章、故事书、杂志文章
                学习如何通过上下文猜测生词的含义
                提高阅读速度和理解能力
                学习如何总结文章的主要内容
              </Paragraph>
              <Paragraph>
                <Text strong>学习时间：</Text> 6-12个月，每天学习1.5-2小时
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>第三阶段：中级（Intermediate）- 能够处理大部分日常情况</Title>
              <Paragraph>
                <Text strong>学习目标：</Text> 词汇量达到4000-6000词，掌握复杂语法结构，能够进行较深入的讨论。
              </Paragraph>
              <Paragraph>
                <Text strong>学习内容详解：</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>1. 词汇量达到4000-6000词：</Text>
                学习更专业和高级的词汇：
                学术词汇、商务英语词汇、科技词汇
                学习词汇的多种含义和用法
                掌握词汇的搭配和用法（collocations）
                学习习语和俚语，使表达更地道
                通过阅读和听力自然地积累词汇
              </Paragraph>
              <Paragraph>
                <Text strong>2. 掌握复杂语法结构：</Text>
                深入学习复杂的语法结构：
                各种从句的详细用法（定语从句、状语从句、名词性从句）
                虚拟语气的使用
                倒装句和强调句
                非谓语动词（不定式、动名词、分词）
                复杂句型的分析和使用
              </Paragraph>
              <Paragraph>
                <Text strong>3. 能够进行较深入的讨论：</Text>
                参与各种话题的讨论：
                社会问题、环境问题、科技发展等
                表达复杂的观点和论证
                进行辩论和说服
                处理工作中的各种沟通情况
                参与学术讨论和会议
              </Paragraph>
              <Paragraph>
                <Text strong>4. 阅读各种类型的文章：</Text>
                阅读更复杂的英文材料：
                报纸、杂志、学术文章、小说
                理解文章的结构和逻辑关系
                分析作者的观点和态度
                学习不同文体的写作特点
                提高批判性思维能力
              </Paragraph>
              <Paragraph>
                <Text strong>学习时间：</Text> 1-2年，每天学习2-3小时
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>第四阶段：中高级（Upper-Intermediate）- 能够流利表达观点</Title>
              <Paragraph>
                <Text strong>学习目标：</Text> 词汇量6000-8000词，掌握高级语法，能够进行学术讨论。
              </Paragraph>
              <Paragraph>
                <Text strong>学习内容详解：</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>1. 词汇量6000-8000词：</Text>
                掌握高级和专业词汇：
                学术写作词汇、商务高级词汇
                掌握词汇的细微差别和精确用法
                学习修辞手法和文学语言
                掌握正式和非正式语体的区别
                能够根据语境选择恰当的词汇
              </Paragraph>
              <Paragraph>
                <Text strong>2. 掌握高级语法：</Text>
                精通所有语法规则：
                复杂句型的熟练运用
                语法的灵活运用和变化
                掌握语法的细微差别
                能够创造性地使用语法
                语法错误的自我纠正能力
              </Paragraph>
              <Paragraph>
                <Text strong>3. 能够进行学术讨论：</Text>
                参与学术和专业讨论：
                分析复杂的问题和现象
                提出创新的观点和解决方案
                进行学术演讲和报告
                参与国际会议和研讨会
                进行跨文化交流和合作
              </Paragraph>
              <Paragraph>
                <Text strong>4. 阅读专业文献：</Text>
                阅读各种专业文献：
                学术论文、研究报告、专业书籍
                理解复杂的理论和概念
                分析数据和图表
                批判性地评价文献内容
                进行文献综述和研究
              </Paragraph>
              <Paragraph>
                <Text strong>学习时间：</Text> 2-3年，每天学习2-3小时
              </Paragraph>
            </Card>

            <Card>
              <Title level={3}>第五阶段：高级（Advanced）- 接近母语水平</Title>
              <Paragraph>
                <Text strong>学习目标：</Text> 词汇量8000+词，掌握所有语法规则，能够进行专业交流。
              </Paragraph>
              <Paragraph>
                <Text strong>学习内容详解：</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>1. 词汇量8000+词：</Text>
                掌握母语水平的词汇：
                掌握词汇的所有含义和用法
                能够创造性地使用词汇
                掌握词汇的文化内涵
                能够进行词汇的精确翻译
                具备词汇教学的能力
              </Paragraph>
              <Paragraph>
                <Text strong>2. 掌握所有语法规则：</Text>
                语法运用的最高水平：
                语法的创造性运用
                掌握语法的文化背景
                能够解释复杂的语法现象
                具备语法教学的能力
                语法的跨文化理解
              </Paragraph>
              <Paragraph>
                <Text strong>3. 能够进行专业交流：</Text>
                在专业领域内流利交流：
                进行专业翻译工作
                参与国际项目合作
                进行专业培训和教育
                处理复杂的跨文化沟通
                在国际舞台上展现专业能力
              </Paragraph>
              <Paragraph>
                <Text strong>4. 理解复杂的文学作品：</Text>
                阅读和理解文学作品：
                古典文学、现代文学、诗歌、戏剧
                理解文学技巧和手法
                分析文学作品的主题和意义
                进行文学批评和评论
                创作英文文学作品
              </Paragraph>
              <Paragraph>
                <Text strong>学习时间：</Text> 3-5年，每天学习2-3小时
              </Paragraph>
            </Card>
          </div>
        );

      case '/english-learning/skills':
        return (
          <div>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={2}>英语四项基本技能详细训练指南</Title>
              <Paragraph>
                英语学习包括听、说、读、写四项基本技能，这四项技能相互关联、相互促进。
                本指南将为您详细介绍每项技能的训练方法、学习技巧和实用资源，
                帮助您全面提高英语水平。记住，语言学习是一个整体过程，
                四项技能需要平衡发展，不能偏废任何一项。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>听力技能训练 - 从听懂到理解</Title>
              <Paragraph>
                <Text strong>听力训练的重要性：</Text>
                听力是语言学习的基础，也是日常交流中最重要的技能之一。
                良好的听力能力不仅能帮助您理解他人的话语，还能提高您的发音和语感。
                听力训练需要循序渐进，从简单到复杂，从慢速到正常语速。
              </Paragraph>

              <Title level={4}>1. 听力训练的具体步骤</Title>
              <Paragraph>
                <Text strong>第一步：选择合适难度的材料</Text>
                初学者建议从慢速英语开始，如VOA慢速英语、BBC Learning English等。
                选择您感兴趣的话题，这样更容易坚持下去。
                材料难度应该略高于您目前的水平，但不要过于困难。
              </Paragraph>

              <Paragraph>
                <Text strong>第二步：第一遍听 - 整体理解</Text>
                第一遍听的时候，不要暂停，不要看文本，专注于理解大意。
                即使有很多听不懂的地方，也要坚持听完。
                听完后，尝试用中文或英文总结一下主要内容。
                这一步的目的是培养整体理解能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第三步：第二遍听 - 细节理解</Text>
                第二遍听的时候，可以暂停，仔细听每个句子。
                如果遇到听不懂的单词或短语，先尝试通过上下文猜测含义。
                记录下听不懂的地方，但不要急于查字典。
                这一步的目的是提高细节理解能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第四步：对照文本 - 查漏补缺</Text>
                现在可以看文本了，对照刚才听不懂的地方。
                查字典了解生词的含义和用法。
                注意连读、弱读、语调等语音现象。
                这一步的目的是解决理解障碍。
              </Paragraph>

              <Paragraph>
                <Text strong>第五步：跟读练习 - 模仿发音</Text>
                跟着录音朗读，模仿发音、语调、节奏。
                可以录音自己的朗读，与原音对比，找出差距。
                这一步的目的是提高发音和语感。
              </Paragraph>

              <Title level={4}>2. 听力训练的具体方法</Title>
              <Paragraph>
                <Text strong>听写练习：</Text>
                选择1-2分钟的音频材料，边听边写。
                第一遍听大意，第二遍听细节，第三遍检查。
                听写可以训练听力的精确性和注意力。
                建议每天练习15-30分钟。
              </Paragraph>

              <Paragraph>
                <Text strong>影子跟读：</Text>
                播放音频，延迟0.5-1秒后开始跟读。
                不要看文本，完全依靠听力。
                这种方法可以训练听力的即时反应能力。
                适合有一定基础的学习者。
              </Paragraph>

              <Paragraph>
                <Text strong>精听练习：</Text>
                选择3-5分钟的音频，反复听10-20遍。
                直到能够完全理解每个单词、每个句子。
                精听可以训练听力的深度理解能力。
                建议每周选择1-2个材料进行精听。
              </Paragraph>

              <Title level={4}>3. 听力资源推荐</Title>
              <Paragraph>
                <Text strong>新闻类：</Text>
                VOA慢速英语（适合初学者）、BBC News（适合中级）、CNN（适合高级）
                新闻内容更新及时，语言标准，是很好的听力材料。
              </Paragraph>

              <Paragraph>
                <Text strong>教育类：</Text>
                BBC Learning English、TED Talks、Coursera课程
                这些资源内容丰富，讲解详细，适合系统学习。
              </Paragraph>

              <Paragraph>
                <Text strong>娱乐类：</Text>
                英语电影、电视剧、播客、音乐
                选择您感兴趣的内容，让学习变得有趣。
                建议先看带字幕的，然后看无字幕的。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>口语技能训练 - 从开口到流利</Title>
              <Paragraph>
                <Text strong>口语训练的重要性：</Text>
                口语是语言学习的最终目标，也是检验学习效果的重要标准。
                很多人学了很多年英语，但就是不敢开口说，这是最大的障碍。
                口语训练需要克服心理障碍，大胆开口，不怕犯错。
              </Paragraph>

              <Title level={4}>1. 口语训练的具体步骤</Title>
              <Paragraph>
                <Text strong>第一步：克服心理障碍</Text>
                很多人不敢开口是因为害怕犯错、害怕被嘲笑。
                记住，犯错是学习的一部分，没有人会因为您说错而嘲笑您。
                相反，敢于开口的人会受到尊重和鼓励。
                从简单的句子开始，逐步增加难度。
              </Paragraph>

              <Paragraph>
                <Text strong>第二步：模仿标准发音</Text>
                选择标准的英语发音材料，如BBC、VOA等。
                仔细听每个音素的发音，注意口型、舌位、气流等。
                可以对着镜子练习，观察自己的口型是否正确。
                录音自己的发音，与原音对比，找出差距。
              </Paragraph>

              <Paragraph>
                <Text strong>第三步：练习语音语调</Text>
                英语的语调与中文不同，需要特别注意。
                练习重音、连读、弱读、语调变化等。
                可以通过朗读诗歌、绕口令等方式练习。
                注意句子的节奏和韵律。
              </Paragraph>

              <Paragraph>
                <Text strong>第四步：积累常用表达</Text>
                学习常用的口语表达，如：
                问候语：How are you? / What's up? / How's it going?
                感谢：Thank you / Thanks a lot / I appreciate it
                道歉：Sorry / I apologize / My bad
                请求：Could you...? / Would you mind...? / Can I...?
                这些表达要熟练掌握，能够脱口而出。
              </Paragraph>

              <Paragraph>
                <Text strong>第五步：实际对话练习</Text>
                找机会与外国人或其他学习者进行实际对话。
                可以参加英语角、语言交换、在线对话等。
                不要害怕犯错，大胆表达自己的想法。
                在实际对话中提高口语能力。
              </Paragraph>

              <Title level={4}>2. 口语训练的具体方法</Title>
              <Paragraph>
                <Text strong>自言自语练习：</Text>
                每天花15-30分钟用英语自言自语。
                可以描述今天发生的事情、表达对某件事的看法、讲述一个故事等。
                这种方法可以随时练习，不受时间和地点限制。
              </Paragraph>

              <Paragraph>
                <Text strong>角色扮演练习：</Text>
                模拟各种生活场景，如购物、问路、点餐、面试等。
                可以一个人扮演多个角色，也可以和朋友一起练习。
                这种方法可以训练在不同情况下的口语表达。
              </Paragraph>

              <Paragraph>
                <Text strong>话题讨论练习：</Text>
                选择感兴趣的话题进行讨论，如环保、科技、教育等。
                可以自己先准备一些观点和论据。
                然后尝试用英语表达这些观点。
                这种方法可以训练逻辑思维和表达能力。
              </Paragraph>

              <Title level={4}>3. 口语资源推荐</Title>
              <Paragraph>
                <Text strong>语言交换：</Text>
                HelloTalk、Tandem、Speaky等APP
                可以找到母语为英语的学习伙伴，互相帮助。
              </Paragraph>

              <Paragraph>
                <Text strong>在线课程：</Text>
                Cambly、italki、Preply等平台
                可以预约外教进行一对一的口语练习。
              </Paragraph>

              <Paragraph>
                <Text strong>英语角：</Text>
                参加当地的英语角活动，与其他学习者交流。
                也可以组织自己的英语角，邀请朋友参加。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>阅读技能训练 - 从看懂到理解</Title>
              <Paragraph>
                <Text strong>阅读训练的重要性：</Text>
                阅读是获取知识和信息的重要途径，也是提高语言水平的重要手段。
                通过阅读，您可以接触到丰富的词汇、语法结构和表达方式。
                阅读训练需要从简单到复杂，从泛读到精读，从理解到分析。
              </Paragraph>

              <Title level={4}>1. 阅读训练的具体步骤</Title>
              <Paragraph>
                <Text strong>第一步：选择合适的阅读材料</Text>
                初学者建议从简单的故事书、新闻文章开始。
                选择您感兴趣的话题，这样更容易坚持下去。
                材料难度应该略高于您目前的水平，但不要过于困难。
                建议生词量控制在5-10%以内。
              </Paragraph>

              <Paragraph>
                <Text strong>第二步：预读 - 了解大意</Text>
                先快速浏览文章的标题、副标题、第一段和最后一段。
                了解文章的主题、结构和主要观点。
                这一步的目的是建立对文章的整体认识。
              </Paragraph>

              <Paragraph>
                <Text strong>第三步：第一遍读 - 整体理解</Text>
                第一遍读的时候，不要查字典，专注于理解大意。
                遇到生词时，先尝试通过上下文猜测含义。
                不要因为个别生词而影响整体理解。
                这一步的目的是培养整体理解能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第四步：第二遍读 - 细节理解</Text>
                第二遍读的时候，可以查字典，了解生词的含义。
                注意文章的细节、逻辑关系、作者的观点等。
                这一步的目的是提高细节理解能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第五步：分析总结 - 深度理解</Text>
                分析文章的结构、写作手法、语言特点等。
                总结文章的主要观点和论据。
                思考作者的观点是否合理，是否有不同意见。
                这一步的目的是培养批判性思维能力。
              </Paragraph>

              <Title level={4}>2. 阅读训练的具体方法</Title>
              <Paragraph>
                <Text strong>略读（Skimming）：</Text>
                快速浏览文章，抓住主要信息。
                注意标题、副标题、首句、尾句等关键信息。
                略读可以训练快速获取信息的能力。
              </Paragraph>

              <Paragraph>
                <Text strong>扫读（Scanning）：</Text>
                在文章中寻找特定信息，如数字、日期、人名等。
                扫读可以训练快速定位信息的能力。
              </Paragraph>

              <Paragraph>
                <Text strong>精读（Intensive Reading）：</Text>
                仔细阅读文章，理解每个细节。
                分析语言特点、写作手法、逻辑关系等。
                精读可以训练深度理解能力。
              </Paragraph>

              <Paragraph>
                <Text strong>泛读（Extensive Reading）：</Text>
                大量阅读各种类型的文章，扩大知识面。
                泛读可以训练阅读速度和语感。
              </Paragraph>

              <Title level={4}>3. 阅读资源推荐</Title>
              <Paragraph>
                <Text strong>新闻网站：</Text>
                BBC News、CNN、The Guardian、The New York Times
                新闻内容更新及时，语言标准，是很好的阅读材料。
              </Paragraph>

              <Paragraph>
                <Text strong>杂志：</Text>
                National Geographic、Time、The Economist、Reader's Digest
                杂志内容丰富，语言生动，适合提高阅读水平。
              </Paragraph>

              <Paragraph>
                <Text strong>小说：</Text>
                选择适合您水平的英文小说，如Harry Potter、The Little Prince等。
                小说情节有趣，语言生动，是很好的阅读材料。
              </Paragraph>
            </Card>

            <Card>
              <Title level={3}>写作技能训练 - 从模仿到创作</Title>
              <Paragraph>
                <Text strong>写作训练的重要性：</Text>
                写作是语言学习的最高形式，也是检验语言掌握程度的重要标准。
                通过写作，您可以巩固所学的词汇和语法，提高语言表达能力。
                写作训练需要从模仿开始，逐步过渡到独立创作。
              </Paragraph>

              <Title level={4}>1. 写作训练的具体步骤</Title>
              <Paragraph>
                <Text strong>第一步：模仿写作</Text>
                选择优秀的英文文章，分析其结构、语言特点、写作手法等。
                然后模仿这些特点，写一篇类似的文章。
                模仿写作可以学习优秀的表达方式和写作技巧。
              </Paragraph>

              <Paragraph>
                <Text strong>第二步：改写练习</Text>
                选择一篇文章，用自己的话重新表达。
                可以改变文章的角度、语气、结构等。
                改写练习可以训练语言转换能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第三步：续写练习</Text>
                选择一篇文章的开头，继续写下去。
                续写练习可以训练想象力和逻辑思维能力。
              </Paragraph>

              <Paragraph>
                <Text strong>第四步：自由写作</Text>
                选择感兴趣的话题，自由表达自己的想法。
                自由写作可以训练独立思考和表达能力。
              </Paragraph>

              <Title level={4}>2. 写作训练的具体方法</Title>
              <Paragraph>
                <Text strong>日记写作：</Text>
                每天用英语写日记，记录当天发生的事情。
                日记写作可以训练日常表达能力和写作习惯。
              </Paragraph>

              <Paragraph>
                <Text strong>话题写作：</Text>
                选择感兴趣的话题，写一篇议论文或说明文。
                话题写作可以训练逻辑思维和论证能力。
              </Paragraph>

              <Paragraph>
                <Text strong>故事写作：</Text>
                写一个故事，可以是真实的，也可以是虚构的。
                故事写作可以训练想象力和叙述能力。
              </Paragraph>

              <Title level={4}>3. 写作资源推荐</Title>
              <Paragraph>
                <Text strong>写作指导：</Text>
                Grammarly、Hemingway Editor等工具可以帮助检查语法和写作风格。
              </Paragraph>

              <Paragraph>
                <Text strong>写作社区：</Text>
                Medium、Wattpad等平台可以发布您的作品，获得反馈。
              </Paragraph>

              <Paragraph>
                <Text strong>写作课程：</Text>
                Coursera、edX等平台有专门的英语写作课程。
              </Paragraph>
            </Card>
          </div>
        );

      case '/english-learning/methods':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {studyMethods.map((method, index) => (
              <Card key={index}>
                <Row gutter={24}>
                  <Col span={18}>
                    <Title level={3}>{method.method}</Title>
                    <Paragraph>{method.description}</Paragraph>
                    <Title level={4}>实施步骤：</Title>
                    <List
                      dataSource={method.steps}
                      renderItem={(item, stepIndex) => (
                        <List.Item>
                          <Text>{stepIndex + 1}. {item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span={6}>
                    <div style={{ textAlign: 'center' }}>
                      <Title level={4}>效果评分</Title>
                      <Progress
                        type="circle"
                        percent={method.effectiveness}
                        format={percent => `${percent}%`}
                        strokeColor="#52c41a"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        );

      case '/english-learning/mistakes':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {commonMistakes.map((category, index) => (
              <Card key={index}>
                <Title level={3}>{category.category}</Title>
                <List
                  dataSource={category.mistakes}
                  renderItem={item => (
                    <List.Item>
                      <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            ))}
          </Space>
        );

      case '/english-learning/plan':
        return (
          <Card>
            <Title level={2}>📅 制定你的英语学习计划</Title>

            <Title level={3}>每日学习计划（建议2-3小时）：</Title>
            <List
              dataSource={[
                '30分钟：词汇学习和复习',
                '30分钟：听力练习',
                '30分钟：阅读练习',
                '30分钟：口语练习',
                '30分钟：语法学习和写作练习',
                '30分钟：复习和总结'
              ]}
              renderItem={item => (
                <List.Item>
                  <ClockCircleOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>每周学习重点：</Title>
            <Row gutter={16}>
              {[
                { day: '周一', focus: '词汇和语法' },
                { day: '周二', focus: '听力和口语' },
                { day: '周三', focus: '阅读和写作' },
                { day: '周四', focus: '综合练习' },
                { day: '周五', focus: '复习和测试' },
                { day: '周六', focus: '兴趣学习' },
                { day: '周日', focus: '总结和规划' }
              ].map((item, index) => (
                <Col span={24 / 7} key={index}>
                  <Card size="small" style={{ textAlign: 'center' }}>
                    <Title level={4}>{item.day}</Title>
                    <Text>{item.focus}</Text>
                  </Card>
                </Col>
              ))}
            </Row>

            <Title level={3}>学习工具推荐：</Title>
            <Row gutter={[16, 16]}>
              {[
                { name: 'Anki', desc: '间隔重复记忆软件' },
                { name: 'Duolingo', desc: '游戏化学习应用' },
                { name: 'BBC Learning English', desc: '权威英语学习资源' },
                { name: 'TED Talks', desc: '英语演讲视频' },
                { name: 'Grammarly', desc: '英语写作助手' },
                { name: 'HelloTalk', desc: '语言交换平台' }
              ].map((tool, index) => (
                <Col span={8} key={index}>
                  <Card size="small" style={{ textAlign: 'center' }}>
                    <Title level={4}>{tool.name}</Title>
                    <Text>{tool.desc}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        );

      case '/english-learning/advanced':
        return (
          <Card>
            <Title level={2}>🚀 英语学习进阶技巧</Title>

            <Title level={3}>提高学习效率：</Title>
            <List
              dataSource={[
                '使用番茄工作法，25分钟专注学习，5分钟休息',
                '建立学习日志，记录学习进度和心得',
                '设定SMART目标（具体、可衡量、可实现、相关、有时限）',
                '利用碎片时间学习，如通勤、排队等',
                '定期测试自己的水平，调整学习策略'
              ]}
              renderItem={item => (
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>克服学习障碍：</Title>
            <List
              dataSource={[
                '建立学习习惯，让学习成为生活的一部分',
                '寻找学习伙伴，互相监督和鼓励',
                '奖励自己的进步，保持学习动力',
                '接受错误，从错误中学习',
                '保持耐心，语言学习需要时间'
              ]}
              renderItem={item => (
                <List.Item>
                  <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>实用学习资源：</Title>
            <Collapse>
              <Panel header="在线课程平台" key="1">
                <List
                  dataSource={[
                    'Coursera - 大学英语课程',
                    'edX - 免费英语课程',
                    'Udemy - 实用英语技能',
                    'Khan Academy - 基础英语语法',
                    'FutureLearn - 英国大学英语课程'
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Panel>
              <Panel header="英语学习APP" key="2">
                <List
                  dataSource={[
                    'HelloTalk - 语言交换',
                    'Tandem - 找语伴',
                    'Memrise - 词汇记忆',
                    'LingQ - 阅读学习',
                    'FluentU - 视频学习'
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Panel>
              <Panel header="英语媒体资源" key="3">
                <List
                  dataSource={[
                    'BBC News - 英国新闻',
                    'CNN - 美国新闻',
                    'The Economist - 经济学人',
                    'National Geographic - 国家地理',
                    'TED - 技术娱乐设计演讲'
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Panel>
            </Collapse>
          </Card>
        );

      default:
        return (
          <Card>
            <Title level={2}>欢迎来到英语学习指南</Title>
            <Paragraph>请从左侧菜单选择您要了解的内容。</Paragraph>
          </Card>
        );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1} style={{ color: '#1890ff', textAlign: 'center' }}>
          📚 英语学习完全指南
        </Title>
        <Alert
          message="学习建议"
          description="英语学习是一个长期过程，需要坚持和耐心。建议制定合理的学习计划，循序渐进地提高英语水平。"
          type="info"
          showIcon
          style={{ marginBottom: '24px' }}
        />
      </div>

      {renderContent()}
    </div>
  );
};

export default EnglishLearning;
