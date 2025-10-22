import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Typography, Button, Drawer, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined, CarOutlined, BookOutlined, GiftOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = AntLayout;
const { Title } = Typography;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/driving-license',
      icon: <CarOutlined />,
      label: '驾照考试',
      children: [
        { key: '/driving-license/overview', label: '考试流程' },
        { key: '/driving-license/subject1', label: '科目一' },
        { key: '/driving-license/subject2', label: '科目二' },
        { key: '/driving-license/subject3', label: '科目三' },
        { key: '/driving-license/subject4', label: '科目四' },
        { key: '/driving-license/tips', label: '考试技巧' },
      ]
    },
    {
      key: '/english-learning',
      icon: <BookOutlined />,
      label: '英语学习',
      children: [
        { key: '/english-learning/overview', label: '学习概览' },
        { key: '/english-learning/skills', label: '听说读写' },
        { key: '/english-learning/methods', label: '学习方法' },
        { key: '/english-learning/mistakes', label: '常见错误' },
        { key: '/english-learning/plan', label: '学习计划' },
        { key: '/english-learning/advanced', label: '进阶技巧' },
      ]
    },
    {
      key: '/gift-guide',
      icon: <GiftOutlined />,
      label: '礼物推荐',
      children: [
        { key: '/gift-guide/overview', label: '礼物分类' },
        { key: '/gift-guide/relationship', label: '关系类型' },
        { key: '/gift-guide/age', label: '年龄阶段' },
        { key: '/gift-guide/ideas', label: '创意想法' },
        { key: '/gift-guide/mistakes', label: '避坑指南' },
        { key: '/gift-guide/tips', label: '实用建议' },
      ]
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setDrawerVisible(false);
  };

  const isMobile = window.innerWidth <= 768;

  // 获取当前页面的面包屑信息
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [{ title: '首页' }];
    
    if (pathSegments.length > 0) {
      const mainCategory = menuItems.find(item => item.key === `/${pathSegments[0]}`);
      if (mainCategory) {
        items.push({ title: mainCategory.label });
        
        if (pathSegments.length > 1) {
          const subItem = mainCategory.children?.find(child => child.key === location.pathname);
          if (subItem) {
            items.push({ title: subItem.label });
          }
        }
      }
    }
    
    return items;
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{
            background: '#fff',
            boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
              {collapsed ? '知识' : '知识库'}
            </Title>
          </div>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ border: 'none' }}
            defaultOpenKeys={[`/${location.pathname.split('/')[1]}`]}
          />
        </Sider>
      )}

      <AntLayout>
        <Header
          style={{
            background: '#fff',
            padding: '0 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {isMobile && (
            <>
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
                style={{ fontSize: '18px' }}
              />
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                知识库
              </Title>
              <div style={{ width: '32px' }} />
            </>
          )}
          {!isMobile && (
            <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
              知识库 - 学习各种知识的好帮手
            </Title>
          )}
        </Header>

        <Content style={{ padding: '24px', background: '#f5f5f5' }}>
          <div style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minHeight: 'calc(100vh - 112px)'
          }}>
            <Breadcrumb 
              items={getBreadcrumbItems()} 
              style={{ marginBottom: '24px' }}
            />
            {children}
          </div>
        </Content>
      </AntLayout>

      {isMobile && (
        <Drawer
          title="知识库"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={280}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ border: 'none' }}
            defaultOpenKeys={[`/${location.pathname.split('/')[1]}`]}
          />
        </Drawer>
      )}
    </AntLayout>
  );
};

export default Layout;
