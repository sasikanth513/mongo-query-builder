import React, { Component } from 'react';
import { Card } from 'antd';


class CodeRender extends Component {
  showCodeBlock() {
    return this.props.method && this.props.query;
  }

  getCommand() {
    const { query, method } = this.props;
    if (Array.isArray(query)) {
      let command = '';

      for (let i = 0; i < query.length; i++) {
        command += `db.orders.${method}(${query[i]});`;

        if (i !== query.length - 1) {
          command += `\n\nOR\n\n`;
        }
      };
      return command;
    } else {
      return `db.orders.${method}(${query});`;
    }
  }

  render() {
    return (
      <div>
        {
          this.showCodeBlock() ? (
            <div className="output-block" >
              <Card className="code-card">
                {this.getCommand()}
              </Card>
            </div>
          ) : ''
        }
      </div>
    )
  }
}

export default CodeRender; // Don’t forget to use export default!