import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class HotTab extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <Paper>
        <Tabs
          index={this.state.index}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="导游活动" />
          <Tab label="游客需求" />
        </Tabs>
      </Paper>
    );
  }
}

export default HotTab;
