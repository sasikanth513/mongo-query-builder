import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'antd';
// import CodeRender from './codeRender.js';

const { Option } = Select;

class ListRender extends Component {
  constructor(props) {
    super(props);
    this.id = Date.now();

    this.methods = {
      setQuery: this.props.methods.setQuery,
      setMethod: this.props.methods.setMethod,
    }
  }

  render() {
    function onChange(index) {
      // remove existing children dropdowns
      ReactDOM.unmountComponentAtNode(document.getElementById(this.id));

      const data = this.props.data[index];
      if (data && data.children && data.children.length > 0) {
        ReactDOM.render(
          <ListRender data={data.children} label={data.label || false} methods={this.methods} />,
          document.getElementById(this.id)
        );
      }

      if (data.query) {
        this.methods.setQuery(data.query);
      } else {
        this.methods.setQuery(null);
      }

      if (data.method) {
        this.methods.setMethod(data.method);
      }
    }

    const className = this.props.className ? this.props.className : 'm2'
    return (
      <div className={className}>
        {this.props.label ? <label>{this.props.label}</label> : ''}
        <Select
          style={{ width: '100%' }}
          placeholder="Select an option"
          onChange={onChange.bind(this)}
        >
          {this.props.data.map(function (item, index) {
            return <Option value={index} key={index}>{item.desc}</Option>
          })}
        </Select>
        <div id={this.id}></div>
      </div>
    );
  }
}

export default ListRender; // Don’t forget to use export default!