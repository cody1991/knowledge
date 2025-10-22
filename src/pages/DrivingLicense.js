import React from 'react';
import { Card, Typography, Steps, Alert, List, Tag, Space, Button, Collapse, Row, Col } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;
const { Panel } = Collapse;

const DrivingLicense = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const examSteps = [
    {
      title: '报名准备',
      description: '准备相关材料，选择驾校',
      content: [
        '身份证原件及复印件',
        '体检证明（指定医院）',
        '一寸白底彩色照片',
        '选择合适的驾校和教练'
      ]
    },
    {
      title: '科目一',
      description: '理论考试',
      content: [
        '道路交通安全法律法规',
        '交通信号、安全行车、文明驾驶',
        '机动车基本知识',
        '考试形式：100道题，90分及格'
      ]
    },
    {
      title: '科目二',
      description: '场地驾驶技能考试',
      content: [
        '倒车入库',
        '侧方停车',
        '坡道定点停车和起步',
        '直角转弯',
        '曲线行驶'
      ]
    },
    {
      title: '科目三',
      description: '道路驾驶技能考试',
      content: [
        '上车准备',
        '起步',
        '直线行驶',
        '变更车道',
        '通过路口',
        '靠边停车'
      ]
    },
    {
      title: '科目四',
      description: '安全文明驾驶常识',
      content: [
        '安全行车常识',
        '恶劣气候和复杂道路条件下的安全驾驶知识',
        '紧急情况下的临危处置知识',
        '交通事故救护及常见危化品处置知识'
      ]
    }
  ];

  const tips = {
    subject1: [
      '多刷题库，理解记忆比死记硬背更有效',
      '注意题目中的关键词，如"不得"、"禁止"等',
      '模拟考试要达到95分以上再预约正式考试',
      '考试时仔细审题，不要急于答题'
    ],
    subject2: [
      '熟练掌握离合器的控制',
      '记住每个项目的关键点位',
      '保持稳定的心态，不要紧张',
      '多练习，形成肌肉记忆',
      '注意车速控制，宁慢勿快'
    ],
    subject3: [
      '熟悉考试路线和考试项目',
      '注意观察路况，提前预判',
      '保持安全距离，礼让行人',
      '正确使用转向灯',
      '注意档位和速度的匹配'
    ],
    subject4: [
      '重点掌握安全驾驶知识',
      '理解各种交通标志的含义',
      '掌握紧急情况的处理方法',
      '注意文明驾驶的相关规定'
    ]
  };

  const commonMistakes = [
    {
      subject: '科目一',
      mistakes: [
        '混淆相似标志的含义',
        '忽略题目中的限定词',
        '对交通法规理解不准确',
        '考试时过于紧张导致失误'
      ]
    },
    {
      subject: '科目二',
      mistakes: [
        '离合器控制不当导致熄火',
        '倒车入库时方向打错',
        '侧方停车时车身出线',
        '坡道起步时溜车'
      ]
    },
    {
      subject: '科目三',
      mistakes: [
        '忘记系安全带',
        '起步时忘记打转向灯',
        '变更车道时观察不足',
        '靠边停车时距离路边过远'
      ]
    },
    {
      subject: '科目四',
      mistakes: [
        '对安全驾驶知识理解不深',
        '忽略文明驾驶的重要性',
        '对紧急情况处理不当',
        '对交通标志理解错误'
      ]
    }
  ];

  // 根据当前路径渲染不同的内容
  const renderContent = () => {
    switch (currentPath) {
      case '/driving-license/overview':
        return (
          <Card>
            <Title level={2}>驾照考试完整流程</Title>
            <Steps direction="vertical" size="small">
              {examSteps.map((step, index) => (
                <Step
                  key={index}
                  title={step.title}
                  description={step.description}
                  icon={<CheckCircleOutlined />}
                >
                  <Card size="small" style={{ marginTop: '16px' }}>
                    <Title level={4}>主要内容：</Title>
                    <List
                      dataSource={step.content}
                      renderItem={item => (
                        <List.Item>
                          <Text>• {item}</Text>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Step>
              ))}
            </Steps>
          </Card>
        );

      case '/driving-license/subject1':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={2}>📚 科目一：理论考试</Title>
              <Paragraph>
                科目一是机动车驾驶证考试的第一关，主要测试考生对道路交通安全法律法规、
                交通信号、安全行车、文明驾驶等基础知识的掌握程度。
              </Paragraph>

              <Title level={3}>考试内容：</Title>
              <List
                dataSource={[
                  '道路交通安全法律法规和规章',
                  '交通信号及其含义',
                  '安全行车、文明驾驶知识',
                  '高速公路、山区道路、桥梁、隧道、夜间、恶劣气象和复杂道路条件下的安全驾驶知识',
                  '出现爆胎、转向失控、制动失灵等紧急情况时的临危处置知识',
                  '机动车总体构造、主要安全装置常识、日常检查和维护基本知识',
                  '发生交通事故后的自救、急救等基本知识，以及常见危险物品知识'
                ]}
                renderItem={item => (
                  <List.Item>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>💡 学习建议：</Title>
              <List
                dataSource={tips.subject1}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>⚠️ 常见错误：</Title>
              <List
                dataSource={commonMistakes[0].mistakes}
                renderItem={item => (
                  <List.Item>
                    <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Space>
        );

      case '/driving-license/subject2':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={2}>🚙 科目二：场地驾驶技能考试</Title>
              <Paragraph>
                科目二主要测试考生在场地内的驾驶技能，包括倒车入库、侧方停车等基本驾驶技能。
                这是实际驾驶技能的基础，需要反复练习才能掌握。
              </Paragraph>

              <Title level={3}>考试项目：</Title>
              <Row gutter={[16, 16]}>
                {[
                  { name: '倒车入库', desc: '掌握倒车技巧，准确入库' },
                  { name: '侧方停车', desc: '路边停车的基本技能' },
                  { name: '坡道定点停车和起步', desc: '坡道驾驶技能' },
                  { name: '直角转弯', desc: '直角转弯技巧' },
                  { name: '曲线行驶', desc: 'S型路线驾驶' }
                ].map((item, index) => (
                  <Col span={8} key={index}>
                    <Card size="small" style={{ textAlign: 'center' }}>
                      <Title level={4}>{item.name}</Title>
                      <Text>{item.desc}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>

            <Card>
              <Title level={3}>💡 学习建议：</Title>
              <List
                dataSource={tips.subject2}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>⚠️ 常见错误：</Title>
              <List
                dataSource={commonMistakes[1].mistakes}
                renderItem={item => (
                  <List.Item>
                    <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Space>
        );

      case '/driving-license/subject3':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={2}>🛣️ 科目三：道路驾驶技能考试</Title>
              <Paragraph>
                科目三是在实际道路上进行的驾驶技能考试，主要测试考生在实际交通环境中的驾驶能力，
                包括安全驾驶、文明驾驶等方面的技能。
              </Paragraph>

              <Title level={3}>考试项目：</Title>
              <Collapse>
                {[
                  { title: '上车准备', content: '检查车辆状况，调整座椅、后视镜，系好安全带' },
                  { title: '起步', content: '正确启动车辆，观察路况，安全起步' },
                  { title: '直线行驶', content: '保持车辆直线行驶，控制车速和方向' },
                  { title: '变更车道', content: '观察路况，正确使用转向灯，安全变更车道' },
                  { title: '通过路口', content: '观察信号灯，礼让行人，安全通过路口' },
                  { title: '靠边停车', content: '观察路况，正确停车，拉手刹，熄火' }
                ].map((item, index) => (
                  <Panel header={item.title} key={index}>
                    <Text>{item.content}</Text>
                  </Panel>
                ))}
              </Collapse>
            </Card>

            <Card>
              <Title level={3}>💡 学习建议：</Title>
              <List
                dataSource={tips.subject3}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>⚠️ 常见错误：</Title>
              <List
                dataSource={commonMistakes[2].mistakes}
                renderItem={item => (
                  <List.Item>
                    <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Space>
        );

      case '/driving-license/subject4':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={2}>🛡️ 科目四：安全文明驾驶常识</Title>
              <Paragraph>
                科目四是驾照考试的最后一关，主要测试考生对安全文明驾驶常识的掌握程度。
                通过科目四后，就可以领取驾驶证了。
              </Paragraph>

              <Title level={3}>考试内容：</Title>
              <List
                dataSource={[
                  '安全行车常识',
                  '恶劣气候和复杂道路条件下的安全驾驶知识',
                  '紧急情况下的临危处置知识',
                  '交通事故救护及常见危化品处置知识',
                  '安全驾驶行为、文明驾驶知识',
                  '恶劣气象和复杂道路条件下的安全驾驶知识'
                ]}
                renderItem={item => (
                  <List.Item>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>💡 学习建议：</Title>
              <List
                dataSource={tips.subject4}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card>
              <Title level={3}>⚠️ 常见错误：</Title>
              <List
                dataSource={commonMistakes[3].mistakes}
                renderItem={item => (
                  <List.Item>
                    <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Space>
        );

      case '/driving-license/tips':
        return (
          <Card>
            <Title level={2}>🎯 考试技巧总结</Title>

            <Title level={3}>考前准备：</Title>
            <List
              dataSource={[
                '提前熟悉考试场地和路线',
                '保持良好的作息，确保考试时精神状态良好',
                '带齐考试所需证件和材料',
                '提前到达考场，避免迟到',
                '穿着舒适的服装和鞋子'
              ]}
              renderItem={item => (
                <List.Item>
                  <ClockCircleOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>考试心态：</Title>
            <List
              dataSource={[
                '保持冷静，不要紧张',
                '相信自己的练习成果',
                '遇到问题不要慌张，冷静处理',
                '不要被其他考生的表现影响',
                '专注于自己的考试过程'
              ]}
              renderItem={item => (
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>实用建议：</Title>
            <List
              dataSource={[
                '多练习，熟能生巧',
                '注意细节，避免不必要的扣分',
                '听从考官指示，不要自作主张',
                '保持车辆平稳，避免急刹车或急转弯',
                '考试结束后，无论结果如何都要保持良好心态'
              ]}
              renderItem={item => (
                <List.Item>
                  <ExclamationCircleOutlined style={{ color: '#fa8c16', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        );

      default:
        return (
          <Card>
            <Title level={2}>欢迎来到驾照考试指南</Title>
            <Paragraph>请从左侧菜单选择您要了解的内容。</Paragraph>
          </Card>
        );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1} style={{ color: '#1890ff', textAlign: 'center' }}>
          🚗 驾照考试完全指南
        </Title>
        <Alert
          message="重要提示"
          description="驾照考试需要认真准备，建议提前了解考试流程和要求，合理安排学习时间。"
          type="info"
          showIcon
          style={{ marginBottom: '24px' }}
        />
      </div>

      {renderContent()}
    </div>
  );
};

export default DrivingLicense;
