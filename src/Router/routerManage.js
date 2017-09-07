import HomePageNew from '../Pages/HomePageNew'
import TestMain from '../Pages/TestMain'
import TabNav from '../Pages/TabNav'
import Tab1Content from '../Pages/tab1content'
import Tab2Content from '../Pages/tab2content'
import Tab3Content from '../Pages/tab3content'
import Testback from '../Pages/Testback'
import App from '../App'
export default
    [
      {
       path: '/home/',
       component: HomePageNew,
       tabs: [
         {
           path: '/',
            tabId: 'tab1',
           component: Tab1Content
         },
         {
           path: '/tab-2/',
            tabId: 'tab2',
           component: Tab2Content
         },
         {
           path: '/tab-3/',
            tabId: 'tab3',
           component: Tab3Content
         },
         {
           path: '/tab-4/',
           component: Tab3Content
         },
         {
           path: '/tab-5/',
           component: Tab3Content
         }
       ]
     },
      {
        path: '/test/',
        component: TestMain
      },
      {
      path:'/testback/',
      component: Testback
    }
    ]
