import React, {Component} from 'react'
import {Button} from 'framework7-react'
import Autocomplete from 'react-md/lib/Autocompletes';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Radio from 'react-md/lib/SelectionControls/Radio';

class PopupSearch extends Component
{
  constructor()
  {
    super();
    this.state=
    {
      inlineValue: 'A'
    }
  }


  handleInlineChange(e)
  {
  this.setState({ inlineValue: e.target.value });
  }

  render()
  {
    const location= ['北京','河南','山西']
    return(
      <div>
      <Button  color='black' big={true} iconMaterial={'clear' } closePopup={true} style={{width:'10%'}}></Button>
      <div style={{marginLeft:30, marginTop:30}}>
    <Autocomplete
         style={{marginRight:30, width: 300, display:'block', marginBottom:30}}
         id="location list"
         label="请输入目的地,城市,国家"
         className="md-cell md-cell--4"
         data={location}
       />
       <DatePicker
       style={{width:300}}
       icon={null}
        id="appointment"
          label="选择出发时间"
            className="md-cell"
              />
              <fieldset onChange={this.handleInlineChange.bind(this)} style={{marginTop: 43, marginLeft:-8}}>
              <Radio
                id="inlineRadio1"
                inline
                name="inlineRadios"
                value="A"
                label="导游活动"
                checked={this.state.inlineValue === 'A'}
                       />
                       <Radio
                         id="inlineRadio2"
                         inline
                         name="inlineRadios"
                         value="B"
                         label="游客需求"
                         checked={this.state.inlineValue === 'B'}
                       />
              </fieldset>
          <Button big={true} raised={true} style={{width: 300, marginTop: 30}} closePopup={true} bg="pink" color="white">搜索</Button>
       </div>
      </div>
    )
  }
}


export default PopupSearch
