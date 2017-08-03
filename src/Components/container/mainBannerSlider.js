import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel'
import Swipe from 'react-swipe-component';
class BannerSlider extends Component
{

constructor()
{
  super();
  this.state={
    activeIndex: 0
  }
}
onSwipeLeftListener()
{
  var _index = this.state.activeIndex;
  if(_index<2)
  {
    _index = _index+1;
    this.setState({activeIndex: _index});
  }
  else
  {
    this.setState({activeIndex: 0});
  }
}
onSwipeRightListener()
{
  var _index = this.state.activeIndex;
  if(_index>0)
  {
    _index = _index-1;
    this.setState({activeIndex: _index});
  }
  else
  {
    this.setState({activeIndex: 2});
  }
}
onSelect()
{
  console.log('onselect');
}

componentDidMount()
{

  setInterval( () => {
    var _index = this.state.activeIndex;
    if(_index<2)
    {
      _index = _index+1;
      this.setState({activeIndex: _index});
    }
    else
    {
      this.setState({activeIndex: 0});
    }
  }, 10000 );
}

 render() {

   return(
     <Swipe
                nodeName="div"
                className="test"
                mouseSwipe={true}
                onSwipedLeft={this.onSwipeLeftListener.bind(this)}
                onSwipedRight={this.onSwipeRightListener.bind(this)}
              >
<div>
     <Carousel controls={false} onSelect={this.onSelect.bind(this)} activeIndex={this.state.activeIndex}>
   <Carousel.Item>
     <div style={{height:300, width:"100%",backgroundColor:"skyblue"}}/>
     <Carousel.Caption>
       <h3>第一张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
      <div style={{height: 300, width:"100%",backgroundColor:"aqua"}}/>
     <Carousel.Caption>
       <h3>第二张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <div style={{height: 300, width:"100%",backgroundColor:"lightpink"}}/>
     <Carousel.Caption>
       <h3>第三张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
 </div>
</Swipe>
   )
 }

}

export default BannerSlider;
