import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import LocationSearching from 'material-ui-icons/LocationSearching';
import Flag from 'material-ui-icons/Flag';



class TabSelect extends Component{

constructor()
{
  super();
  this.state={
     index: 0,
  }
}
    handleChange = (event, index) => {
      this.setState({ index });
    };
   render(){
     return(
       <Paper style={{ width: '100%', margin: 'auto' }}>
              <Tabs
                index={this.state.index}
                onChange={this.handleChange.bind(this)}
                fullWidth
                indicatorColor="accent"
                textColor="accent"
                style = {{margin: 'auto'}}
              >
                <Tab style={{maxWidth: 383}} icon={<Flag />} label="导游活动" />
                <Tab style={{maxWidth: 383}} icon={<LocationSearching />} label="寻找向导" />
              </Tabs>
            </Paper>
     )
   }
}


export default TabSelect
