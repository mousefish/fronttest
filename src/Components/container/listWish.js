import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Schedule from 'material-ui-icons/Schedule';
import travel from '../../Assets/Images/travel.jpg'
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import { green } from 'material-ui/colors';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocationCity from 'material-ui-icons/LocationCity';
import LocationOn from 'material-ui-icons/LocationOn';
import AttachMoney from 'material-ui-icons/AttachMoney';


const styleSheet = createStyleSheet({
  card: {
    width: "100%",
    marginBottom: 1,
    margin: 'auto',

  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '0 1 auto',
  },
  cover: {
    width: '100%',
    height: '100%',
    display: "inline-block",
    paddingTop: 10
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  chip: {
    height: 22,
    display: 'inline-flex',
    backgroundColor: 'accent'
  },
  button:
  {
   float: 'right',
   backgroundColor: green[700],
   color: 'white'
 },
 avatar: {float: 'right', width: 50, height: 50},
 flexGrow: { flex: '1 1 auto' },
});
class  ListWish extends Component
{
  render(){
  const classes = this.props.classes;

  return (
    <div>
    <List style={{paddingTop: 0}}>

<ListItem button style={{padding:1, paddingBottom: -3}}>
<div className="md-paper md-paper--2" style={{width: '100%'}}>
    <div className="col-xs-12" style={{overflowWrap:"break-word", fontSize:18, marginBottom: 5, marginTop: 10}}><LocationCity style={{width: 18, height:18, verticalAlign:"middle"}} />我要去美国旧金山周边玩一个月...</div>

    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><Schedule style={{width: 16, height: 16,verticalAlign:"middle"}}/> 2017/02/03 出发</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><LocationOn style={{width: 15, height: 15,verticalAlign:"middle"}}/> 旧金山: 渔人码头, 花街</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><AttachMoney style={{width: 15, height: 15, verticalAlign:"middle"}}/> 300/天</div>

    <div className="col-xs-11 md-paper--1" style={{color:"white",overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9, textAlign: "center", marginLeft: 20,backgroundColor:"#1d86c9",marginBottom: 5 }}>接单3人</div>

    </div>
</ListItem>

<ListItem button style={{padding:1, paddingBottom: -3}}>
<div className="md-paper md-paper--2" style={{width: '100%'}}>
    <div className="col-xs-12" style={{overflowWrap:"break-word", fontSize:18, marginBottom: 5, marginTop: 10}}><LocationCity style={{width: 18, height:18, verticalAlign:"middle"}} />我要去美国旧金山周边玩一个月...</div>

    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><Schedule style={{width: 16, height: 16,verticalAlign:"middle"}}/> 2017/02/03 出发</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><LocationOn style={{width: 15, height: 15,verticalAlign:"middle"}}/> 旧金山: 渔人码头, 花街</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><AttachMoney style={{width: 15, height: 15, verticalAlign:"middle"}}/> 300/天</div>

    <div className="col-xs-11 md-paper--1" style={{color:"white",overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9, textAlign: "center", marginLeft: 20,backgroundColor:"#1d86c9",marginBottom: 5 }}>接单3人</div>

    </div>
</ListItem>

<ListItem button style={{padding:1, paddingBottom: -3}}>
<div className="md-paper md-paper--2" style={{width: '100%'}}>
    <div className="col-xs-12" style={{overflowWrap:"break-word", fontSize:18, marginBottom: 5, marginTop: 10}}><LocationCity style={{width: 18, height:18, verticalAlign:"middle"}} />我要去美国旧金山周边玩一个月...</div>

    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><Schedule style={{width: 16, height: 16,verticalAlign:"middle"}}/> 2017/02/03 出发</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><LocationOn style={{width: 15, height: 15,verticalAlign:"middle"}}/> 旧金山: 渔人码头, 花街</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><AttachMoney style={{width: 15, height: 15, verticalAlign:"middle"}}/> 300/天</div>

    <div className="col-xs-11 md-paper--1" style={{color:"white",overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9, textAlign: "center", marginLeft: 20,backgroundColor:"#1d86c9",marginBottom: 5 }}>接单3人</div>

    </div>
</ListItem>

<ListItem button style={{padding:1, paddingBottom: -3}}>
<div className="md-paper md-paper--2" style={{width: '100%'}}>
    <div className="col-xs-12" style={{overflowWrap:"break-word", fontSize:18, marginBottom: 5, marginTop: 10}}><LocationCity style={{width: 18, height:18, verticalAlign:"middle"}} />我要去美国旧金山周边玩一个月...</div>

    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><Schedule style={{width: 16, height: 16,verticalAlign:"middle"}}/> 2017/02/03 出发</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><LocationOn style={{width: 15, height: 15,verticalAlign:"middle"}}/> 旧金山: 渔人码头, 花街</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><AttachMoney style={{width: 15, height: 15, verticalAlign:"middle"}}/> 300/天</div>

    <div className="col-xs-11 md-paper--1" style={{color:"white",overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9, textAlign: "center", marginLeft: 20,backgroundColor:"#1d86c9",marginBottom: 5 }}>接单3人</div>

    </div>
</ListItem>

<ListItem button style={{padding:1, paddingBottom: -3}}>
<div className="md-paper md-paper--2" style={{width: '100%'}}>
    <div className="col-xs-12" style={{overflowWrap:"break-word", fontSize:18, marginBottom: 5, marginTop: 10}}><LocationCity style={{width: 18, height:18, verticalAlign:"middle"}} />我要去美国旧金山周边玩一个月...</div>

    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><Schedule style={{width: 16, height: 16,verticalAlign:"middle"}}/> 2017/02/03 出发</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><LocationOn style={{width: 15, height: 15,verticalAlign:"middle"}}/> 旧金山: 渔人码头, 花街</div>


    <div className="col-xs-12" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9}}><AttachMoney style={{width: 15, height: 15, verticalAlign:"middle"}}/> 300/天</div>

    <div className="col-xs-11 md-paper--1" style={{color:"white",overflowWrap:"break-word", verticalAlign:"center", fontSize: 15, lineHeight: 1.9, textAlign: "center", marginLeft: 20,backgroundColor:"#1d86c9",marginBottom: 5 }}>接单3人</div>

    </div>
</ListItem>
</List>

    </div>
  );
}
}


export default withStyles(styleSheet)(ListWish);
