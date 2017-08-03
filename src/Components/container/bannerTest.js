import React ,{Component} from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

class BannerTest extends Component{

    render() {
        return (
            <Carousel showThumbs={true} showArrows={true} dynamicHeight emulateTouch>
                <div>
                    <div style={{height:300, width:"100%",backgroundColor:"skyblue"}}/>
                    <p>需要写文字在这吗.</p>
                </div>
                <div>
                  <div style={{height:300, width:"100%",backgroundColor:"aqua"}}/>
                  <p>需要写文字在这吗.</p>
                </div>
                <div>
                  <div style={{height:300, width:"100%",backgroundColor:"lightpink"}}/>
                  <p>需要写文字在这吗.</p>
                </div>
            </Carousel>
        );
    }
};

export default BannerTest
