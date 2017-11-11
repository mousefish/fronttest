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
          value={this.state.index}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="本月推荐" />
          <Tab label="最新活动" />
          <Tab label="附近活动" />
        </Tabs>
      </Paper>
    );
  }
}

export default HotTab;
