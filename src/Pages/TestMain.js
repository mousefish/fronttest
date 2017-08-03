import React, {Component} from 'react'
import BottomNavigation from 'react-md/lib/BottomNavigations';
import '../CSS/main.css'
import {Link} from 'react-router-dom'
import Button from 'react-md/lib/Buttons/Button'
import ExpandableMediaCard from '../Components/container/CardTest'
import Paper from 'react-md/lib/Papers'


import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const links = [{
  label: 'Recents',
  iconChildren: 'access_time',
}, {
  label: 'Favorites',
  iconChildren: 'favorite',
}, {
  label: 'Favorites',
  iconChildren: 'favorite',
},{
  label: 'Nearby',
  iconChildren: 'place',
}];


class TestMain extends Component{

  constructor(props) {
      super(props);

      this.state = { page: 0 };
      this._setPage = this._setPage.bind(this);
    }

  _setPage(page) {
     this.setState({ page });
   }

    render(){
      const page = this.state.page;
      return(
<div>
    {page==0 && <ExpandableMediaCard />}
      {page==1 && <Button flat primary label="按钮正常,测试按钮阿测试按钮">chat_bubble_outline</Button>}
      {page==2 &&   <Paper style={{width:300,height:300, marginTop: 50, marginLeft:50}} zDepth={5} >paper测试哦 </Paper>}
        <BottomNavigation
     links={links}
     dynamic={false}
     onNavChange={this._setPage}
   />
</div>
 );
    }

}


export default TestMain
