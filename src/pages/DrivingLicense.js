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
          <div>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={2}>驾照考试完整流程详解</Title>
              <Paragraph>
                驾照考试是一个系统性的过程，需要按照规定的步骤逐步完成。整个考试过程分为四个科目，
                每个科目都有其特定的考试内容和要求。了解完整的考试流程对于顺利通过考试至关重要。
                下面将详细介绍每个阶段的具体要求和注意事项。
              </Paragraph>
            </Card>

            <Card>
              <Title level={3}>第一阶段：报名准备</Title>
              <Paragraph>
                在开始驾照考试之前，需要进行充分的准备工作。首先，你需要准备相关的身份证明材料，
                包括身份证原件及复印件。其次，需要到指定的医院进行体检，获得体检证明。
                体检主要检查视力、听力、色觉等基本身体条件，确保你具备驾驶的基本身体条件。
              </Paragraph>
              <Paragraph>
                接下来需要准备一寸白底彩色照片，照片要求清晰、正面、无遮挡。
                然后选择合适的驾校和教练，这是影响学习效果的重要因素。
                建议选择口碑好、教学质量高的驾校，并选择经验丰富、耐心负责的教练。
              </Paragraph>
              <List
                dataSource={examSteps[0].content}
                renderItem={item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card style={{ marginTop: '16px' }}>
              <Title level={3}>第二阶段：科目一理论考试</Title>
              <Paragraph>
                科目一是机动车驾驶证考试的第一关，主要测试考生对道路交通安全法律法规、
                交通信号、安全行车、文明驾驶等基础知识的掌握程度。考试形式为计算机考试，
                共100道题，每题1分，90分及格。考试时间为45分钟。
              </Paragraph>
              <Paragraph>
                科目一的考试内容非常广泛，涵盖了交通法规的各个方面。包括道路交通安全法律法规和规章、
                交通信号及其含义、安全行车和文明驾驶知识等。考生需要系统学习这些知识，
                理解其背后的原理，而不是简单的死记硬背。
              </Paragraph>
              <List
                dataSource={examSteps[1].content}
                renderItem={item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card style={{ marginTop: '16px' }}>
              <Title level={3}>第三阶段：科目二场地驾驶技能考试</Title>
              <Paragraph>
                科目二主要测试考生在场地内的驾驶技能，包括倒车入库、侧方停车等基本驾驶技能。
                这是实际驾驶技能的基础，需要反复练习才能掌握。科目二考试在专门的考试场地进行，
                使用考试专用车辆，考官通过监控系统观察考生的操作。
              </Paragraph>
              <Paragraph>
                科目二考试项目包括倒车入库、侧方停车、坡道定点停车和起步、直角转弯、曲线行驶五个项目。
                每个项目都有具体的评分标准，考生需要在规定时间内完成所有项目，
                且不能出现严重错误。考试过程中要保持冷静，按照平时练习的方法进行操作。
              </Paragraph>
              <List
                dataSource={examSteps[2].content}
                renderItem={item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card style={{ marginTop: '16px' }}>
              <Title level={3}>第四阶段：科目三道路驾驶技能考试</Title>
              <Paragraph>
                科目三是在实际道路上进行的驾驶技能考试，主要测试考生在实际交通环境中的驾驶能力，
                包括安全驾驶、文明驾驶等方面的技能。这是对考生综合驾驶能力的全面检验。
              </Paragraph>
              <Paragraph>
                科目三考试包括上车准备、起步、直线行驶、变更车道、通过路口、靠边停车等项目。
                考试过程中，考生需要在实际道路上驾驶，面对真实的交通情况。
                考官会观察考生的驾驶技能、安全意识、文明驾驶习惯等方面。
              </Paragraph>
              <List
                dataSource={examSteps[3].content}
                renderItem={item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>

            <Card style={{ marginTop: '16px' }}>
              <Title level={3}>第五阶段：科目四安全文明驾驶常识</Title>
              <Paragraph>
                科目四是驾照考试的最后一关，主要测试考生对安全文明驾驶常识的掌握程度。
                通过科目四后，就可以领取驾驶证了。科目四考试形式与科目一类似，
                但更侧重于安全驾驶和文明驾驶方面的知识。
              </Paragraph>
              <Paragraph>
                科目四的考试内容主要包括安全行车常识、恶劣气候和复杂道路条件下的安全驾驶知识、
                紧急情况下的临危处置知识、交通事故救护及常见危化品处置知识等。
                这些知识对于成为一名合格的驾驶员非常重要。
              </Paragraph>
              <List
                dataSource={examSteps[4].content}
                renderItem={item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </div>
        );

      case '/driving-license/subject1':
        return (
          <div>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={2}>科目一：道路交通安全法律法规考试</Title>
              <Paragraph>
                科目一是机动车驾驶证考试的第一关，也是整个驾照考试的理论基础。
                这个科目主要测试考生对道路交通安全法律法规、交通信号、安全行车、
                文明驾驶等基础知识的掌握程度。通过科目一考试，不仅是为了获得驾照，
                更重要的是培养正确的交通安全意识和法律观念。
              </Paragraph>
              <Paragraph>
                科目一考试采用计算机考试的形式，共100道题，每题1分，90分及格。
                考试时间为45分钟，题型包括判断题和选择题。考试内容涵盖了交通法规的各个方面，
                从基本的交通信号到复杂的道路驾驶规则，从车辆构造到事故处理，
                内容非常全面和系统。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>考试内容详解</Title>
              <Paragraph>
                科目一的考试内容可以分为以下几个主要部分：
              </Paragraph>

              <Title level={4}>1. 道路交通安全法律法规和规章</Title>
              <Paragraph>
                这部分内容包括《道路交通安全法》、《道路交通安全法实施条例》等法律法规。
                考生需要了解基本的交通法律条文，理解各种交通违法行为的法律后果，
                掌握交通管理的基本原则和制度。这些法律法规是维护交通秩序、
                保障交通安全的重要依据，也是驾驶员必须遵守的基本准则。
              </Paragraph>

              <Title level={4}>2. 交通信号及其含义</Title>
              <Paragraph>
                交通信号是道路交通管理的重要手段，包括交通信号灯、交通标志、交通标线等。
                考生需要熟练掌握各种交通信号的含义，理解信号灯的变化规律，
                掌握标志标线的分类和作用。在实际驾驶中，正确识别和遵守交通信号
                是确保行车安全的基本要求。
              </Paragraph>

              <Title level={4}>3. 安全行车、文明驾驶知识</Title>
              <Paragraph>
                这部分内容强调安全驾驶和文明驾驶的重要性。包括安全驾驶的基本要求、
                文明驾驶的行为规范、礼让行人的原则等。考生需要树立安全第一的理念，
                培养文明驾驶的习惯，理解安全驾驶与文明驾驶的内在联系。
              </Paragraph>

              <Title level={4}>4. 复杂道路条件下的安全驾驶知识</Title>
              <Paragraph>
                包括高速公路、山区道路、桥梁、隧道、夜间、恶劣气象等复杂道路条件下的安全驾驶知识。
                这些特殊条件下的驾驶需要特殊的技能和知识，考生需要了解不同道路条件的特点，
                掌握相应的驾驶技巧和安全措施。
              </Paragraph>

              <Title level={4}>5. 紧急情况处置知识</Title>
              <Paragraph>
                包括出现爆胎、转向失控、制动失灵等紧急情况时的临危处置知识。
                在实际驾驶中，可能会遇到各种紧急情况，掌握正确的处置方法
                对于保障人身安全至关重要。考生需要了解各种紧急情况的特点，
                掌握基本的处置原则和方法。
              </Paragraph>

              <Title level={4}>6. 机动车构造和维护知识</Title>
              <Paragraph>
                包括机动车总体构造、主要安全装置常识、日常检查和维护基本知识。
                了解车辆的基本构造和安全装置，掌握日常检查和维护的方法，
                对于确保车辆安全运行、预防事故发生具有重要意义。
              </Paragraph>

              <Title level={4}>7. 交通事故处理知识</Title>
              <Paragraph>
                包括发生交通事故后的自救、急救等基本知识，以及常见危险物品知识。
                在发生交通事故时，正确的自救和急救方法可以最大程度地减少人员伤亡。
                了解危险物品的特性，可以避免在运输过程中发生危险。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>学习方法和建议</Title>
              <Paragraph>
                科目一的学习需要系统性和针对性，不能简单地死记硬背。
                以下是一些有效的学习方法和建议：
              </Paragraph>

              <Title level={4}>1. 理解记忆法</Title>
              <Paragraph>
                多刷题库，理解记忆比死记硬背更有效。在刷题的过程中，要理解每道题背后的原理，
                掌握交通法规的逻辑关系。比如，为什么在特定情况下要减速慢行？
                这背后有什么安全考虑？通过理解这些原理，可以更好地记忆和应用。
              </Paragraph>

              <Title level={4}>2. 关键词识别法</Title>
              <Paragraph>
                注意题目中的关键词，如"不得"、"禁止"、"必须"等。这些关键词往往决定了答案的正确性。
                在考试中，要仔细审题，准确理解题目的要求，避免因为理解错误而失分。
              </Paragraph>

              <Title level={4}>3. 模拟考试法</Title>
              <Paragraph>
                模拟考试要达到95分以上再预约正式考试。通过多次模拟考试，
                可以熟悉考试的形式和节奏，发现自己的薄弱环节，有针对性地进行复习。
                同时，模拟考试也可以帮助考生建立信心，减少考试时的紧张情绪。
              </Paragraph>

              <Title level={4}>4. 分类学习法</Title>
              <Paragraph>
                将考试内容按照不同的类别进行分类学习，比如按交通信号、交通标志、
                交通法规等分类。这样可以更有条理地掌握知识，也便于复习和记忆。
              </Paragraph>

              <Title level={4}>5. 实际应用法</Title>
              <Paragraph>
                将学到的知识与实际生活相结合，观察身边的交通现象，
                思考其中的交通法规依据。这样可以让抽象的法律条文变得具体和生动，
                提高学习的兴趣和效果。
              </Paragraph>
            </Card>

            <Card>
              <Title level={3}>常见错误和注意事项</Title>
              <Paragraph>
                在科目一考试中，考生容易犯一些常见的错误，了解这些错误并加以避免，
                可以提高考试的通过率：
              </Paragraph>

              <Title level={4}>1. 混淆相似标志的含义</Title>
              <Paragraph>
                交通标志中有很多相似的标志，容易混淆。比如，禁止通行和禁止驶入、
                注意危险和注意行人等。考生需要仔细区分这些标志的细微差别，
                理解它们的具体含义和适用范围。
              </Paragraph>

              <Title level={4}>2. 忽略题目中的限定词</Title>
              <Paragraph>
                题目中的限定词往往决定了答案的正确性。比如，"在高速公路上"、
                "在夜间"、"在雨天"等限定条件，会改变答案的选择。
                考生要仔细阅读题目，准确理解题目的条件和要求。
              </Paragraph>

              <Title level={4}>3. 对交通法规理解不准确</Title>
              <Paragraph>
                有些考生对交通法规的理解不够准确，容易产生误解。
                比如，认为只要没有警察就可以违法，或者认为某些违法行为不会受到处罚。
                这种错误的认识会影响答题的准确性，需要及时纠正。
              </Paragraph>

              <Title level={4}>4. 考试时过于紧张导致失误</Title>
              <Paragraph>
                考试时的紧张情绪会影响考生的正常发挥，导致一些本来会做的题目出错。
                考生要保持良好的心态，相信自己的学习成果，冷静应对考试。
                如果遇到不会的题目，可以先跳过，做完其他题目后再回来思考。
              </Paragraph>

              <Title level={4}>5. 审题不仔细</Title>
              <Paragraph>
                考试时审题不仔细是导致失分的重要原因。考生要仔细阅读每道题目，
                理解题目的要求，注意题目中的关键词和限定条件。
                不要急于答题，要确保理解正确后再选择答案。
              </Paragraph>
            </Card>
          </div>
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
