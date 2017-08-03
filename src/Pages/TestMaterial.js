import React,{Component} from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Home from 'material-ui-icons/Home';
import Flight from 'material-ui-icons/Flight';
import Message from 'material-ui-icons/Message';
import Person from 'material-ui-icons/Person';
import WebFontLoader from 'webfontloader';
import BannerSlider from '../Components/container/mainBannerSlider'

import NowPlayingCard from '../Components/container/MaterialCard'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const styleSheet = createStyleSheet({
  root:{
    width: "100%",
    bottom: 0,
    inlineHeight: 1,
    position: 'fixed',
    zIndex: 1000
  },
  icon:{
    display:'block'
  }
});

class TestMaterial extends Component
{
  constructor()
  {
    super();
    this.state = {
    value: 0,
  };
  }
  handleChange = (event, value) => {
   this.setState({ value });
 };
 onSwipeLeftListener()
 {
   console.log("left");
 }
 onSwipeRightListener()
 {
   console.log("right");
 }

    render(){
       const classes = this.props.classes;
      return(
        <div>
        <div style={{maxWidth: 800, margin: 'auto',marginBottom:98}}>
        <div style={{marginBottom:10, height:'10%'}}>
        <BannerSlider />
        </div>
        <NowPlayingCard />
        </div>
        <div className={classes.root}>
                <BottomNavigation value={this.state.value} onChange={this.handleChange.bind(this)} showLabels>
                  <BottomNavigationButton classes={{icon: classes.icon}} label="发现" icon={<Home />} />
                  <BottomNavigationButton classes={{icon: classes.icon}} label="行程" icon={<Flight />} />
                  <BottomNavigationButton classes={{icon: classes.icon}} label="消息" icon={<Message />} />
                    <BottomNavigationButton classes={{icon: classes.icon}} label="我" icon={<Person />} />
                </BottomNavigation>
              </div>
        </div>
      )
    }
}


export default withStyles(styleSheet)(TestMaterial)
