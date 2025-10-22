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
          <Card>
            <Title level={2}>英语学习路径规划</Title>
            <Steps direction="vertical" size="small">
              {learningLevels.map((level, index) => (
                <Step
                  key={index}
                  title={level.title}
                  description={level.description}
                  icon={<CheckCircleOutlined />}
                >
                  <Card size="small" style={{ marginTop: '16px' }}>
                    <Row gutter={16}>
                      <Col span={18}>
                        <Title level={4}>学习内容：</Title>
                        <List
                          dataSource={level.content}
                          renderItem={item => (
                            <List.Item>
                              <Text>• {item}</Text>
                            </List.Item>
                          )}
                        />
                      </Col>
                      <Col span={6}>
                        <Title level={4}>预计时间：</Title>
                        <Tag color="blue" style={{ fontSize: '16px', padding: '8px 16px' }}>
                          {level.duration}
                        </Tag>
                      </Col>
                    </Row>
                  </Card>
                </Step>
              ))}
            </Steps>
          </Card>
        );

      case '/english-learning/skills':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {Object.entries(skills).map(([key, skill]) => (
              <Card key={key}>
                <Row gutter={24}>
                  <Col span={4} style={{ textAlign: 'center' }}>
                    {skill.icon}
                    <Title level={3} style={{ marginTop: '8px' }}>
                      {skill.title}
                    </Title>
                  </Col>
                  <Col span={20}>
                    <Title level={4}>学习建议：</Title>
                    <List
                      dataSource={skill.tips}
                      renderItem={item => (
                        <List.Item>
                          <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                    <Title level={4} style={{ marginTop: '16px' }}>推荐资源：</Title>
                    <Space wrap>
                      {skill.resources.map((resource, index) => (
                        <Tag key={index} color="blue">{resource}</Tag>
                      ))}
                    </Space>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
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
                <Col span={24/7} key={index}>
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
