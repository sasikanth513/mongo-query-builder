import React, { Component } from 'react';
import { Card } from 'antd';


class CodeRender extends Component {
  showCodeBlock() {
    return this.props.method && this.props.query;
  }

  render() {
    return (
      <div>
        {
          this.showCodeBlock() ? (
            <div className="output-block" >
              <Card className="code-card">
                {`db.orders.${this.props.method}(${this.props.query});`}
              </Card>
            </div>
          ) : ''
        }
      </div>
    )
  }
}

export default CodeRender; // Don’t forget to use export default!