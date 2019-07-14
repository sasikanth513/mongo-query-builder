import React, { Component } from 'react';
import './App.css';
import ListRender from './components/listRender.js';
import CodeRender from './components/codeRender.js';
import DATA from './base.js';

import { Layout } from 'antd';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: null,
      method: null,
    };

    this.setQuery = this.setQuery.bind(this);
    this.setMethod = this.setMethod.bind(this);
    this.methods = {
      setQuery: this.setQuery,
      setMethod: this.setMethod,
    }
  }

  setQuery(query) {
    this.setState({
      query,
    })
  }
  setMethod(method) {
    this.setState({
      method,
    })
  }

  getCodeData() {
    return {
      query: this.state.query,
      method: this.state.method,
    }
  }

  render() {
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
              <ListRender data={DATA} label="I want to..." className="options-root" methods={this.methods} />
              <div style={{ marginTop: 50 }} className="output-root">
                <CodeRender {...this.getCodeData()} />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
