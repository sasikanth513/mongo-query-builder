import React from 'react';
import './App.css';
import ListRender from './components/listRender.js';
import DATA from './base.js';

import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="container App-logo">
            <h1>Mongo Query Builder</h1>
          </div>
        </Header>
        <Content className='container App-content'>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <ListRender data={DATA} label="I want to..." className="options-root" />
            <div style={{ marginTop: 50 }} className="output-root">
              <div id="output"></div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
