import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'antd';
import CodeRender from './codeRender.js';

const { Option } = Select;

class ListRender extends Component {
  constructor(props) {
    super(props);
    this.id = Date.now();
  }

  render() {
    function onChange(index) {
      // reset output
      ReactDOM.unmountComponentAtNode(document.getElementById('output'));
      ReactDOM.unmountComponentAtNode(document.getElementById(this.id));

      const data = this.props.data[index];
      if (data && data.children && data.children.length > 0) {
        ReactDOM.render(
          <ListRender data={data.children} label={data.label || false} />,
          document.getElementById(this.id)
        );
      }

      if (data.command) {
        ReactDOM.render(
          <CodeRender code={data.command} />,
          document.getElementById('output')
        );
      }
    }

    const className = this.props.className ? this.props.className : 'm2'
    return (
      <div className={className}>
        {this.props.label ? <label>{this.props.label}</label> : ''}
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Select an option"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
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