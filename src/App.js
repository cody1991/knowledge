import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import Layout from './components/Layout';
import DrivingLicense from './pages/DrivingLicense';
import EnglishLearning from './pages/EnglishLearning';
import GiftGuide from './pages/GiftGuide';
import './App.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/driving-license/overview" replace />} />
            <Route path="/driving-license" element={<Navigate to="/driving-license/overview" replace />} />
            <Route path="/driving-license/*" element={<DrivingLicense />} />
            <Route path="/english-learning" element={<Navigate to="/english-learning/overview" replace />} />
            <Route path="/english-learning/*" element={<EnglishLearning />} />
            <Route path="/gift-guide" element={<Navigate to="/gift-guide/overview" replace />} />
            <Route path="/gift-guide/*" element={<GiftGuide />} />
          </Routes>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
