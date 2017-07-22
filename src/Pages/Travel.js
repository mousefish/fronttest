import React, {Component} from 'react';
import Bottom from './Bottom'
import MainSearchBar from '../Components/mainSearchBar'
import BannerSlider from '../Components/BannerSlider'
import CategoryNav from '../Components/categoryNav'
import MainTravelInfo from '../Components/mainTravelInfo'

class TravelPage extends Component
{


  render()
  {
return(
    <div>
    <MainSearchBar />
    <BannerSlider />
    <CategoryNav />
    <MainTravelInfo />
    <Bottom />
    </div>


    )

  }

}

export default TravelPage;
