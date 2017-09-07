import React,{Component} from 'react'
import '../CSS/main.css'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Home from 'material-ui-icons/Home';
import Flight from 'material-ui-icons/Flight';
import Message from 'material-ui-icons/Message';
import Person from 'material-ui-icons/Person';
import WebFontLoader from 'webfontloader';
import BannerSlider from '../Components/container/mainBannerSlider'

import NowPlayingCard from '../Components/container/MaterialCard'
import SearchBar from '../Components/container/searchBar'
import TabSelect from '../Components/container/tabSelect'
import {Page} from 'framework7-react'
import {Popup, Button, Link,Navbar, View,Toolbar} from 'framework7-react'
import PopupSearch from '../Components/container/popupSearch'
import Typography from 'material-ui/Typography';
import TLogo from '../Assets/Images/logo.jpg'
import HotTab from '../Components/container/hotTab'
import HotMaterialCard from '../Components/container/hotMaterialCard'
import RButton from 'material-ui/Button';
import {getFramework7} from '../index';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const styleSheet = createStyleSheet({
  root:{
    width: "100%",
    bottom: 0,
  //  inlineHeight: 1,
    position: 'fixed',
    zIndex: 1000
  },
  icon:{
    display:'block'
  }
});

class FPageHome extends Component
{
  constructor()
  {
    super();
    this.state = {
    value: 0,
    popup: false
  };
  }

  componentWillMount()
  {
    console.log("component will mount")
  }

componentWillUnmount()
{
  console.log("component will unmount")
}

  componentDidMount()
  {
      console.log("component did mount")
  }

 clicklink()
 {
   getFramework7().mainView.router.loadPage('/test/');
   console.log(getFramework7().mainView.router)
 }


    render(){
       const classes = this.props.classes;
      return(

        <div>
        <img src={TLogo} style={{float:'left',marginRight:5, width:50, height:50, marginTop: -10}} /><Typography type="headline" className="u-title-h1" gutterBottom style={{marginBottom: 30,marginTop:10}}>
   <div style={{display:'inline', color: '#ff2d55'}}>携U行 </div><div style={{fontSize: 17, display:'inline'}}>我们一起去旅行</div>
  </Typography>
        <div style={{marginBottom:10, height:'10%'}}>
        <Button style={{textAlign: 'left', paddingLeft: 20}} color='gray' big={true} raised={true} iconMaterial={'search'} openPopup={true}>搜索</Button>
        </div>

                <Typography type="headline" className="u-title-h1" gutterBottom style={{marginBottom: 10,marginTop:30}}>
                    本月首推
                    </Typography>
                    <NowPlayingCard />

        <Typography type="headline" className="u-title-h1" gutterBottom style={{marginBottom: 10,marginTop:30}}>
            本月热门
            </Typography>
            <HotTab />
            <HotMaterialCard />
        <Link onClick={this.clicklink}>查看更多</Link>

            <Typography type="headline" className="u-title-h1" gutterBottom style={{marginBottom: 10,marginTop:30}}>
                猜你喜欢
                </Typography>
                <HotMaterialCard />
                <Button>查看更多</Button>
        </div>

      )
    }
}


export default withStyles(styleSheet)(FPageHome)
