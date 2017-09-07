import React, {Component} from 'react'
import {Link, Tabs, Tab,Toolbar, Page, ContentBlock} from 'framework7-react'
import Home from 'material-ui-icons/Home';
import Flight from 'material-ui-icons/Flight';
import Message from 'material-ui-icons/Message';
import Person from 'material-ui-icons/Person';
import '../CSS/link.css'


class TabNav extends Component{

  render()
  {

    return(
      <Page style={{position:'fixed'}}>

      <Tabs animated>
    <Tab routeTabId="tab1" id="tab1" active> aaaaaaaaaaaaaa</Tab>
    <Tab routeTabId="tab1" id="tab2" > bbbbbbbbbbbbbbbbbbb</Tab>
    <Tab routeTabId="tab1" >cccccccccccc</Tab>
  </Tabs>



      </Page>
    )
  }
}


export default TabNav;
