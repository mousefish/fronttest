import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel'

class BannerSlider extends Component
{

 render() {
   return(
     <Carousel>
   <Carousel.Item>
     <div style={{height: 500, width:"100%",backgroundColor:"skyblue"}}/>
     <Carousel.Caption>
       <h3>第一张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
      <div style={{height: 500, width:"100%",backgroundColor:"aqua"}}/>
     <Carousel.Caption>
       <h3>第二张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <div style={{height: 500, width:"100%",backgroundColor:"lightpink"}}/>
     <Carousel.Caption>
       <h3>第三张页面</h3>
       <p>需要写文字在这吗.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
   )
 }

}

export default BannerSlider;
