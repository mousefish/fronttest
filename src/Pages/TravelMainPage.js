import React, {Component} from 'react';
import Bottom from '../Components/container/mainBottom'
import MainSearchBar from '../Components/container/mainSearchBar'
import BannerSlider from '../Components/container/mainBannerSlider'
import CategoryNav from '../Components/container/mainCategoryNav'
import MainTravelInfo from '../Components/container/mainTravelInfo'

class TravelMainPage extends Component
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

export default TravelMainPage;
