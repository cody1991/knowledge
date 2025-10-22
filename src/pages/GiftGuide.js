import React from 'react';
import { Card, Typography, List, Tag, Space, Button, Collapse, Row, Col, Rate, Alert, Divider } from 'antd';
import { HeartOutlined, GiftOutlined, StarOutlined, ShoppingOutlined, BulbOutlined, CrownOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const GiftGuide = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const giftCategories = [
    {
      category: '美妆护肤',
      icon: <CrownOutlined style={{ fontSize: '24px', color: '#ff69b4' }} />,
      gifts: [
        { name: '口红套装', price: '100-500元', reason: '每个女孩都需要的必备品，选择热门色号或限量款', rating: 5 },
        { name: '护肤品套装', price: '200-1000元', reason: '关心她的肌肤健康，选择适合她肤质的产品', rating: 4 },
        { name: '香水', price: '300-800元', reason: '选择清新淡雅的香型，让她每天都有好心情', rating: 4 },
        { name: '化妆刷套装', price: '150-400元', reason: '提升化妆体验，选择质量好的品牌', rating: 3 },
        { name: '面膜礼盒', price: '100-300元', reason: '日常护肤必备，选择补水或美白功效的', rating: 4 }
      ]
    },
    {
      category: '时尚配饰',
      icon: <StarOutlined style={{ fontSize: '24px', color: '#ffd700' }} />,
      gifts: [
        { name: '项链', price: '200-1000元', reason: '选择简约优雅的设计，可以刻字增加纪念意义', rating: 5 },
        { name: '手链', price: '150-600元', reason: '日常佩戴频率高，选择有特殊含义的款式', rating: 4 },
        { name: '耳环', price: '100-500元', reason: '根据她的脸型和风格选择，珍珠或简约金属款', rating: 4 },
        { name: '包包', price: '300-2000元', reason: '实用性强，选择经典款式或当季流行款', rating: 5 },
        { name: '围巾', price: '100-400元', reason: '秋冬必备，选择柔软舒适的材质', rating: 3 }
      ]
    },
    {
      category: '生活用品',
      icon: <HeartOutlined style={{ fontSize: '24px', color: '#ff6b6b' }} />,
      gifts: [
        { name: '保温杯', price: '100-300元', reason: '关心她的健康，选择颜值高的保温杯', rating: 3 },
        { name: '香薰蜡烛', price: '80-200元', reason: '营造浪漫氛围，选择她喜欢的香味', rating: 4 },
        { name: '蓝牙音箱', price: '200-800元', reason: '提升生活品质，选择音质好的品牌', rating: 4 },
        { name: '床上用品', price: '200-600元', reason: '关心她的睡眠质量，选择舒适的面料', rating: 3 },
        { name: '小家电', price: '300-1000元', reason: '如咖啡机、榨汁机等，提升生活便利性', rating: 4 }
      ]
    },
    {
      category: '兴趣爱好',
      icon: <BulbOutlined style={{ fontSize: '24px', color: '#4ecdc4' }} />,
      gifts: [
        { name: '书籍', price: '50-200元', reason: '根据她的兴趣选择，可以是小说、励志书或专业书籍', rating: 4 },
        { name: '手工艺品', price: '100-500元', reason: '如手工皂、刺绣作品等，体现用心', rating: 4 },
        { name: '运动装备', price: '200-800元', reason: '如瑜伽垫、运动服等，支持她的健康生活', rating: 3 },
        { name: '乐器', price: '500-2000元', reason: '如尤克里里、口琴等，培养音乐爱好', rating: 4 },
        { name: '绘画用品', price: '100-400元', reason: '如画笔、颜料、画册等，支持她的艺术创作', rating: 3 }
      ]
    }
  ];

  const relationshipGifts = [
    {
      relationship: '女朋友',
      suggestions: [
        '定制情侣手链或项链',
        '浪漫的烛光晚餐',
        '手写情书+小礼物',
        '一起旅行或短途游',
        '定制相册或照片书'
      ],
      budget: '300-2000元',
      tips: '重点体现用心和浪漫，不一定要很贵，但要有纪念意义'
    },
    {
      relationship: '普通朋友',
      suggestions: [
        '精美的手工艺品',
        '实用的生活用品',
        '书籍或文具',
        '小饰品',
        '美食礼盒'
      ],
      budget: '50-300元',
      tips: '选择实用且不过分亲密的礼物，避免引起误会'
    },
    {
      relationship: '同事',
      suggestions: [
        '办公用品',
        '小盆栽',
        '咖啡或茶叶',
        '小零食礼盒',
        '文具套装'
      ],
      budget: '30-200元',
      tips: '选择中性、实用的礼物，避免过于个人化的物品'
    },
    {
      relationship: '同学',
      suggestions: [
        '学习用品',
        '小饰品',
        '书籍',
        '文具',
        '小零食'
      ],
      budget: '20-150元',
      tips: '根据关系亲密度选择，可以是实用品或小装饰品'
    }
  ];

  const ageGifts = [
    {
      age: '18-25岁',
      characteristics: '年轻活力，追求时尚',
      suggestions: [
        '时尚配饰（项链、手链、耳环）',
        '美妆产品（口红、眼影盘）',
        '潮流服饰',
        '数码产品',
        '体验类礼物（SPA、美甲）'
      ],
      budget: '100-800元'
    },
    {
      age: '26-35岁',
      characteristics: '成熟稳重，注重品质',
      suggestions: [
        '高品质护肤品',
        '经典款包包',
        '珠宝首饰',
        '家居用品',
        '健康相关产品'
      ],
      budget: '300-1500元'
    },
    {
      age: '36-45岁',
      characteristics: '事业有成，追求舒适',
      suggestions: [
        '高端护肤品',
        '舒适的家居用品',
        '养生保健品',
        '高品质服装',
        '旅行用品'
      ],
      budget: '500-2000元'
    },
    {
      age: '45岁以上',
      characteristics: '注重健康，喜欢实用',
      suggestions: [
        '养生保健品',
        '舒适的家居用品',
        '健康监测设备',
        '高品质茶叶',
        '养生书籍'
      ],
      budget: '200-1000元'
    }
  ];

  const giftIdeas = [
    {
      idea: 'DIY手工礼物',
      description: '亲手制作的礼物最能体现心意',
      examples: [
        '手工相册或照片书',
        '手绘画像或插画',
        '手工编织的围巾或帽子',
        '手工制作的饰品',
        '手写的祝福卡片'
      ],
      difficulty: '中等',
      time: '1-3天',
      cost: '50-200元'
    },
    {
      idea: '体验类礼物',
      description: '创造美好回忆的体验',
      examples: [
        'SPA或按摩体验',
        '烹饪课程',
        '摄影课程',
        '音乐会或演出门票',
        '短途旅行'
      ],
      difficulty: '简单',
      time: '半天到一天',
      cost: '200-1000元'
    },
    {
      idea: '定制礼物',
      description: '独一无二的个性化礼物',
      examples: [
        '刻字首饰',
        '定制手机壳',
        '个性化马克杯',
        '定制T恤',
        '刻字钢笔'
      ],
      difficulty: '简单',
      time: '1-2天',
      cost: '100-500元'
    },
    {
      idea: '实用礼物',
      description: '日常生活中经常使用的物品',
      examples: [
        '保温杯',
        '蓝牙耳机',
        '充电宝',
        '护肤品',
        '书籍'
      ],
      difficulty: '简单',
      time: '当天',
      cost: '100-800元'
    }
  ];

  const commonMistakes = [
    '选择过于昂贵的礼物，给对方造成压力',
    '选择过于便宜的礼物，显得不够重视',
    '不了解对方的喜好，选择不合适的礼物',
    '选择过于个人化的礼物（如内衣、化妆品等）',
    '选择有特殊含义的礼物（如戒指）给普通朋友',
    '选择过于实用的礼物，缺乏浪漫感',
    '选择过于花哨的礼物，显得不够成熟',
    '选择重复的礼物（如她已经有类似物品）',
    '选择有争议的礼物（如减肥产品）',
    '选择过于大众化的礼物，缺乏个性'
  ];

  const tips = [
    '提前了解她的兴趣爱好和需求',
    '注意礼物的包装，精美的包装能增加惊喜感',
    '考虑礼物的实用性，避免华而不实',
    '根据关系亲密度选择合适的礼物',
    '注意礼物的寓意，避免不吉利的物品',
    '考虑礼物的保存性，选择不易损坏的物品',
    '注意礼物的尺寸和重量，便于携带',
    '考虑礼物的季节性，选择应季的物品',
    '注意礼物的品牌和品质，选择有保障的产品',
    '准备一张温馨的祝福卡片'
  ];

  // 根据当前路径渲染不同的内容
  const renderContent = () => {
    switch (currentPath) {
      case '/gift-guide/overview':
        return (
          <div>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={2}>女孩生日礼物完全指南</Title>
              <Paragraph>
                选择生日礼物是一门艺术，也是一门学问。一个好的礼物不仅能表达您的心意，
                还能让对方感受到您的用心和关心。本指南将为您详细介绍各种类型的礼物，
                从美妆护肤到时尚配饰，从生活用品到兴趣爱好，帮助您找到最合适的礼物。
                记住，礼物的价值不在于价格，而在于您的心意和选择的用心程度。
              </Paragraph>
              <Paragraph>
                在选择礼物之前，您需要考虑几个重要因素：对方的关系类型、年龄阶段、
                兴趣爱好、生活方式等。不同的因素会影响礼物的选择，本指南将为您提供
                详细的建议和实用的技巧，让您成为送礼高手。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>美妆护肤类礼物 - 让美丽更持久</Title>
              <Paragraph>
                美妆护肤类礼物是女孩们最常收到的礼物类型之一，这类礼物实用性强，
                使用频率高，是很好的选择。但选择这类礼物需要了解对方的肤质、
                喜好和品牌偏好，这样才能选到合适的礼物。
              </Paragraph>

              <Title level={4}>口红套装 - 每个女孩的必备品</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 100-500元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                口红是每个女孩都需要的必备品，选择热门色号或限量款会更有意义。
                建议选择知名品牌，如MAC、YSL、Dior、Chanel等。
                热门色号包括正红色、豆沙色、玫瑰色等，这些颜色比较百搭。
                如果是限量款或联名款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的口红颜色，选择相似或互补的色号。
                如果不确定，可以选择经典的正红色，这个颜色比较百搭。
                建议购买套装，包含多个色号，让对方有更多选择。
              </Paragraph>

              <Title level={4}>护肤品套装 - 关心她的肌肤健康</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 200-1000元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择适合她肤质的产品，如干性、油性、混合性或敏感性肌肤。
                建议选择知名品牌，如SK-II、兰蔻、雅诗兰黛、资生堂等。
                可以选择基础护肤套装，包含洁面、爽肤水、精华、面霜等。
                如果是抗衰老套装，适合25岁以上的女性。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                如果不确定对方的肤质，可以选择温和型的产品。
                建议选择套装，这样更实用，也更有仪式感。
                可以关注品牌的新品发布，选择最新推出的产品。
              </Paragraph>

              <Title level={4}>香水 - 让她每天都有好心情</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 300-800元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择清新淡雅的香型，如花香、果香或木质香。
                建议选择知名品牌，如Chanel、Dior、Gucci、Hermès等。
                可以选择经典款，如Chanel No.5、Dior J'adore等。
                如果是限量款或季节款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的香水类型，选择相似或互补的香型。
                如果不确定，可以选择经典的花香调，这个香型比较受欢迎。
                建议购买小瓶装，这样对方可以尝试不同的香型。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>时尚配饰类礼物 - 提升个人魅力</Title>
              <Paragraph>
                时尚配饰类礼物能够提升个人魅力，展现品味和个性。
                这类礼物选择范围广，从项链到手链，从耳环到包包，
                每种配饰都有其独特的魅力和意义。
              </Paragraph>

              <Title level={4}>项链 - 优雅的颈部装饰</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 200-1000元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择简约优雅的设计，可以刻字增加纪念意义。
                建议选择知名品牌，如Tiffany、Pandora、Swarovski等。
                可以选择经典款，如心形、圆形、字母等。
                如果是定制款，可以刻上对方的名字或特殊日期。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时佩戴的项链风格，选择相似或互补的款式。
                如果不确定，可以选择经典的圆形吊坠，这个款式比较百搭。
                建议选择925银或18K金材质，这样更耐用。
              </Paragraph>

              <Title level={4}>手链 - 日常佩戴频率高</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 150-600元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择有特殊含义的款式，如星座、生肖、幸运数字等。
                建议选择知名品牌，如Pandora、Swarovski、施华洛世奇等。
                可以选择串珠款，这样对方可以自己搭配不同的珠子。
                如果是定制款，可以刻上对方的名字或特殊日期。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时佩戴的手链风格，选择相似或互补的款式。
                如果不确定，可以选择经典的串珠款，这个款式比较百搭。
                建议选择925银或18K金材质，这样更耐用。
              </Paragraph>

              <Title level={4}>包包 - 实用性强的生活伴侣</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 300-2000元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择经典款式或当季流行款，如单肩包、双肩包、手提包等。
                建议选择知名品牌，如Coach、Michael Kors、Kate Spade等。
                可以选择经典款，如黑色、棕色、米色等。
                如果是限量款或联名款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的包包风格，选择相似或互补的款式。
                如果不确定，可以选择经典的黑色单肩包，这个款式比较百搭。
                建议选择真皮材质，这样更耐用，也更有质感。
              </Paragraph>
            </Card>

            <Card style={{ marginBottom: '24px' }}>
              <Title level={3}>生活用品类礼物 - 关心她的日常生活</Title>
              <Paragraph>
                生活用品类礼物体现了您对她日常生活的关心，这类礼物实用性强，
                使用频率高，是很好的选择。选择这类礼物需要考虑对方的
                生活方式、生活习惯和实际需求。
              </Paragraph>

              <Title level={4}>保温杯 - 关心她的健康</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 100-300元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择颜值高的保温杯，如粉色、蓝色、白色等。
                建议选择知名品牌，如膳魔师、象印、虎牌等。
                可以选择智能款，如带温度显示、自动加热等。
                如果是定制款，可以刻上对方的名字或特殊日期。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的保温杯风格，选择相似或互补的款式。
                如果不确定，可以选择经典的白色保温杯，这个颜色比较百搭。
                建议选择不锈钢材质，这样更耐用，保温效果更好。
              </Paragraph>

              <Title level={4}>香薰蜡烛 - 营造浪漫氛围</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 80-200元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择她喜欢的香味，如花香、果香、木质香等。
                建议选择知名品牌，如Diptyque、Jo Malone、Voluspa等。
                可以选择经典款，如玫瑰、薰衣草、香草等。
                如果是限量款或季节款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的香薰类型，选择相似或互补的香型。
                如果不确定，可以选择经典的玫瑰香，这个香型比较受欢迎。
                建议选择大豆蜡材质，这样更环保，燃烧时间更长。
              </Paragraph>

              <Title level={4}>蓝牙音箱 - 提升生活品质</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 200-800元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择音质好的品牌，如Bose、JBL、Sony等。
                可以选择便携款，如小音箱、蓝牙耳机等。
                可以选择智能款，如带语音助手、无线充电等。
                如果是限量款或联名款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的音响设备，选择相似或互补的款式。
                如果不确定，可以选择经典的黑色小音箱，这个款式比较百搭。
                建议选择蓝牙5.0版本，这样连接更稳定，音质更好。
              </Paragraph>
            </Card>

            <Card>
              <Title level={3}>兴趣爱好类礼物 - 支持她的爱好</Title>
              <Paragraph>
                兴趣爱好类礼物体现了您对她个人爱好的支持和理解，这类礼物
                能够让她感受到您的用心和关心。选择这类礼物需要了解对方的
                兴趣爱好、技能水平和实际需求。
              </Paragraph>

              <Title level={4}>书籍 - 知识的礼物</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 50-200元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                根据她的兴趣选择，可以是小说、励志书或专业书籍。
                建议选择知名作者的作品，如村上春树、东野圭吾、余华等。
                可以选择经典款，如《百年孤独》、《1984》、《小王子》等。
                如果是限量款或签名版，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时阅读的书籍类型，选择相似或互补的题材。
                如果不确定，可以选择经典的文学作品，这个类型比较受欢迎。
                建议选择精装版，这样更有收藏价值。
              </Paragraph>

              <Title level={4}>手工艺品 - 体现用心</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 100-500元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择手工制作的物品，如手工皂、刺绣作品、陶瓷制品等。
                建议选择知名品牌，如无印良品、宜家、Zara Home等。
                可以选择经典款，如简约风格、北欧风格等。
                如果是定制款，可以刻上对方的名字或特殊日期。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时使用的家居用品风格，选择相似或互补的款式。
                如果不确定，可以选择经典的简约风格，这个风格比较百搭。
                建议选择天然材质，这样更环保，也更有质感。
              </Paragraph>

              <Title level={4}>运动装备 - 支持她的健康生活</Title>
              <Paragraph>
                <Text strong>价格范围：</Text> 200-800元
              </Paragraph>
              <Paragraph>
                <Text strong>选择建议：</Text>
                选择适合她运动类型的装备，如瑜伽垫、运动服、跑步鞋等。
                建议选择知名品牌，如Nike、Adidas、Lululemon等。
                可以选择经典款，如黑色、白色、灰色等。
                如果是限量款或联名款，会更有纪念意义。
              </Paragraph>
              <Paragraph>
                <Text strong>购买技巧：</Text>
                可以观察对方平时进行的运动类型，选择相应的装备。
                如果不确定，可以选择经典的瑜伽垫，这个装备比较通用。
                建议选择专业品牌，这样质量更好，使用体验更佳。
              </Paragraph>
            </Card>
          </div>
        );

      case '/gift-guide/relationship':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {relationshipGifts.map((rel, index) => (
              <Card key={index}>
                <Title level={3}>{rel.relationship}</Title>
                <Row gutter={24}>
                  <Col span={16}>
                    <Title level={4}>推荐礼物：</Title>
                    <List
                      dataSource={rel.suggestions}
                      renderItem={item => (
                        <List.Item>
                          <GiftOutlined style={{ color: '#ff69b4', marginRight: '8px' }} />
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span={8}>
                    <Title level={4}>预算范围：</Title>
                    <Tag color="pink" style={{ fontSize: '16px', padding: '8px 16px' }}>
                      {rel.budget}
                    </Tag>
                    <Title level={4} style={{ marginTop: '16px' }}>注意事项：</Title>
                    <Text>{rel.tips}</Text>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        );

      case '/gift-guide/age':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {ageGifts.map((age, index) => (
              <Card key={index}>
                <Row gutter={24}>
                  <Col span={6}>
                    <Title level={3}>{age.age}</Title>
                    <Text type="secondary">{age.characteristics}</Text>
                    <br />
                    <Tag color="blue" style={{ marginTop: '8px' }}>
                      预算：{age.budget}
                    </Tag>
                  </Col>
                  <Col span={18}>
                    <Title level={4}>适合的礼物：</Title>
                    <List
                      dataSource={age.suggestions}
                      renderItem={item => (
                        <List.Item>
                          <StarOutlined style={{ color: '#ffd700', marginRight: '8px' }} />
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        );

      case '/gift-guide/ideas':
        return (
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {giftIdeas.map((idea, index) => (
              <Card key={index}>
                <Row gutter={24}>
                  <Col span={18}>
                    <Title level={3}>{idea.idea}</Title>
                    <Paragraph>{idea.description}</Paragraph>
                    <Title level={4}>具体例子：</Title>
                    <List
                      dataSource={idea.examples}
                      renderItem={item => (
                        <List.Item>
                          <BulbOutlined style={{ color: '#4ecdc4', marginRight: '8px' }} />
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span={6}>
                    <Space direction="vertical" size="middle">
                      <div>
                        <Title level={4}>难度：</Title>
                        <Tag color="green">{idea.difficulty}</Tag>
                      </div>
                      <div>
                        <Title level={4}>时间：</Title>
                        <Tag color="blue">{idea.time}</Tag>
                      </div>
                      <div>
                        <Title level={4}>成本：</Title>
                        <Tag color="orange">{idea.cost}</Tag>
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        );

      case '/gift-guide/mistakes':
        return (
          <Card>
            <Title level={2}>⚠️ 常见送礼错误</Title>
            <List
              dataSource={commonMistakes}
              renderItem={item => (
                <List.Item>
                  <Text>• {item}</Text>
                </List.Item>
              )}
            />

            <Divider />

            <Title level={2}>💡 送礼小贴士</Title>
            <List
              dataSource={tips}
              renderItem={item => (
                <List.Item>
                  <HeartOutlined style={{ color: '#ff69b4', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        );

      case '/gift-guide/tips':
        return (
          <Card>
            <Title level={2}>🎯 如何选择合适的礼物</Title>

            <Title level={3}>送礼前的准备：</Title>
            <List
              dataSource={[
                '了解她的兴趣爱好和生活方式',
                '观察她平时使用的物品和品牌偏好',
                '了解她的经济状况，避免选择过于昂贵的礼物',
                '考虑你们的关系亲密度',
                '了解她的生日愿望或需求'
              ]}
              renderItem={item => (
                <List.Item>
                  <ShoppingOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>送礼时的注意事项：</Title>
            <List
              dataSource={[
                '选择合适的时间和地点',
                '准备温馨的祝福语',
                '注意礼物的包装和呈现方式',
                '保持自然和真诚的态度',
                '不要过分强调礼物的价格'
              ]}
              renderItem={item => (
                <List.Item>
                  <GiftOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Title level={3}>送礼后的跟进：</Title>
            <List
              dataSource={[
                '询问她对礼物的感受',
                '观察她是否经常使用这个礼物',
                '记住她的反馈，为下次送礼做准备',
                '不要期待立即的回报或感谢',
                '保持平常心，礼物只是表达心意的方式'
              ]}
              renderItem={item => (
                <List.Item>
                  <HeartOutlined style={{ color: '#ff69b4', marginRight: '8px' }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />

            <Alert
              message="温馨提示"
              description="送礼最重要的是心意，而不是价格。一个用心选择的礼物，即使价格不高，也能让对方感受到你的关心和重视。"
              type="success"
              showIcon
              style={{ marginTop: '24px' }}
            />
          </Card>
        );

      default:
        return (
          <Card>
            <Title level={2}>欢迎来到礼物推荐指南</Title>
            <Paragraph>请从左侧菜单选择您要了解的内容。</Paragraph>
          </Card>
        );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1} style={{ color: '#ff69b4', textAlign: 'center' }}>
          🎁 女孩生日礼物完全指南
        </Title>
        <Alert
          message="送礼小贴士"
          description="选择生日礼物时，最重要的是体现你的用心和关心。价格不是最重要的，关键是要符合她的喜好和你们的关系。"
          type="info"
          showIcon
          style={{ marginBottom: '24px' }}
        />
      </div>

      {renderContent()}
    </div>
  );
};

export default GiftGuide;
