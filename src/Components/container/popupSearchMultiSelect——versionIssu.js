import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Chip from 'material-ui/Chip';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },

  fontRegular:{
    fontWeight:theme.typography.fontWeightRegular
  },

  fontMedium:{
    fontWeight:theme.typography.fontWeightMedium
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



class popSearchMultiSelect extends Component {
    state={
      name:[]
    }

  handleChange = event => {
    this.setState({
      name: [...this.state.name, event.target.value]});
  };

  render(){
    console.log(this.props.names)
  return(
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={this.props.classes.chips}>
                {selected.map(value => <Chip key={value} label={value} className={this.props.classes.chip} />)}
              </div>
            )}
            MenuProps={MenuProps}
            {...this.props.input}
          >
            {this.props.names.map(name => (
              <MenuItem
                key={name}
                value={name}
                className={this.props.names.indexOf(name) === -1 ?
                  this.props.classes.fontRegular : this.props.classes.fontMedium}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
    )
}

  }

export default withStyles(styles)(popSearchMultiSelect)