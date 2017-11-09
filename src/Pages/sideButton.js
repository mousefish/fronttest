import React, {Component} from "react";
import { Fab, Icon } from "framework7-react";


class SideButton extends Component {
  render(){

    return (
      <div>
      <Fab
        color="pink"
        style={{
          position:'fixed',
          bottom: 140,
          width: 40,
          height: 40,
          right: 30,
          backgroundColor: "#3d9fe7"
        }}
      >
        <Icon icon="icon-plus" />
      </Fab>

      <Fab
        color="pink"
        style={{
          position:'fixed',
          bottom: 90,
          width: 40,
          height: 40,
          right: 30,
          backgroundColor: "#16c53d"
        }}
        onClick={this.props.onBtnClick}
      >
        <Icon material="search" />
      </Fab>
      </div>
    )

}

}

export default SideButton;