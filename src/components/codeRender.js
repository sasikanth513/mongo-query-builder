import React, { Component } from 'react';
import { Card } from 'antd';


class CodeRender extends Component {
  render() {
    return (
      <div className="output-block">
        <Card className="code-card">
          {this.props.code}
        </Card>
      </div>
    );
  }
}

export default CodeRender; // Don’t forget to use export default!