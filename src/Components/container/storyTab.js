import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class StoryTab extends Component {
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
          <Tab label="金牌老司机" />
          <Tab label="男司机" />
            <Tab label="女司机" />
        </Tabs>
      </Paper>
    );
  }
}

export default StoryTab;
