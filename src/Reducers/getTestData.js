export default (state=[], action={})=>{
  switch(action.type)
  {
    case 'GET_DATA':
      return Object.assign({},state,{
        data: action.data
      })
    default: return state;
  }
}
