import {SET_AUTH} from '../Actions/types'
import {isEmpty} from 'lodash'

const initState={
  isAuthenticated: false,
  user: {}
};

export default (state=initState, action={})=>{
  switch(action.type)
  {
    case SET_AUTH:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default: return state;
  }
}
