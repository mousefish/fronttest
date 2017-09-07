import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class WishTab extends Component {
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
          <Tab label="我的心愿" />
          <Tab label="别人的心愿" />
        </Tabs>
      </Paper>
    );
  }
}

export default WishTab;
