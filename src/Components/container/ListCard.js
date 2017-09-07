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
class  ListCard extends Component
{
  render(){
  const classes = this.props.classes;

  return (
    <div>
    <List style={{paddingTop: 0}}>

    <ListItem button style={{padding:1}}>
     <Card className={classes.card}>
     <CardMedia>
        <div style={{position:'relative'}}>
        <Typography component="p" style={{marginTop:140, marginLeft:'75%', position:'absolute', backgroundColor:'white', padding: 3, width: 72, textAlign: 'center' }}>
        2 / 3 满
        </Typography>
        <Typography component="p" style={{marginTop:180,position:'absolute', marginLeft:'75%', backgroundColor:'white', padding: 3,width: 72, textAlign: 'center'}}>
        3天截止
        </Typography>
         <img style={{height: 220, width: '100%'}} src={travel} alt="Contemplative Reptile" />

          </div>
          </CardMedia>
       <CardContent>
        <div className="row">
        <div className="col-xs-8" style={{overflowWrap:"break-word", fontSize:20, marginBottom: 5}}>成都IFS一日游</div>
        <div className="col-xs-4" style={{overflowWrap:"break-word", textAlign:"right",fontSize:20, marginBottom: 5, marginLeft: -5}}>$200</div>
        </div>
        <div className="row">
        <div className="col-xs-8" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 13, lineHeight: 2}}><Schedule style={{width: 13, height: 13}}/> <div style={{display:"inline", color: "#3d9fe7"}}>2017/02/03</div> 出发<br / ><div style={{textDecoration:"underline", display:"inline", color:"purple"}}>包吃</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>专车接送</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>shopping折扣</div></div>
        <div className="col-xs-4" style={{float:"right"}}> <Avatar aria-label="Recipe" className={classes.avatar}>
           W
         </Avatar></div>
        </div>
       </CardContent>
</Card>
</ListItem>

<ListItem button style={{padding:1}}>
 <Card className={classes.card}>
 <CardMedia>
    <div style={{position:'relative'}}>
    <Typography component="p" style={{marginTop:140, marginLeft:'75%', position:'absolute', backgroundColor:'white', padding: 3, width: 72, textAlign: 'center' }}>
    2 / 3 满
    </Typography>
    <Typography component="p" style={{marginTop:180,position:'absolute', marginLeft:'75%', backgroundColor:'white', padding: 3,width: 72, textAlign: 'center'}}>
    3天截止
    </Typography>
     <img style={{height: 220, width: '100%'}} src={travel} alt="Contemplative Reptile" />

      </div>
      </CardMedia>
   <CardContent>
    <div className="row">
    <div className="col-xs-8" style={{overflowWrap:"break-word", fontSize:20, marginBottom: 5}}>成都IFS一日游</div>
    <div className="col-xs-4" style={{overflowWrap:"break-word", textAlign:"right",fontSize:20, marginBottom: 5, marginLeft: -5}}>$200</div>
    </div>
    <div className="row">
    <div className="col-xs-8" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 13, lineHeight: 2}}><Schedule style={{width: 13, height: 13}}/> <div style={{display:"inline", color: "#3d9fe7"}}>2017/02/03</div> 出发<br / ><div style={{textDecoration:"underline", display:"inline", color:"purple"}}>包吃</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>专车接送</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>shopping折扣</div></div>
    <div className="col-xs-4" style={{float:"right"}}> <Avatar aria-label="Recipe" className={classes.avatar}>
       W
     </Avatar></div>
    </div>
   </CardContent>
</Card>
</ListItem>

<ListItem button style={{padding:1}}>
 <Card className={classes.card}>
 <CardMedia>
    <div style={{position:'relative'}}>
    <Typography component="p" style={{marginTop:140, marginLeft:'75%', position:'absolute', backgroundColor:'white', padding: 3, width: 72, textAlign: 'center' }}>
    2 / 3 满
    </Typography>
    <Typography component="p" style={{marginTop:180,position:'absolute', marginLeft:'75%', backgroundColor:'white', padding: 3,width: 72, textAlign: 'center'}}>
    3天截止
    </Typography>
     <img style={{height: 220, width: '100%'}} src={travel} alt="Contemplative Reptile" />

      </div>
      </CardMedia>
   <CardContent>
    <div className="row">
    <div className="col-xs-8" style={{overflowWrap:"break-word", fontSize:20, marginBottom: 5}}>成都IFS一日游</div>
    <div className="col-xs-4" style={{overflowWrap:"break-word", textAlign:"right",fontSize:20, marginBottom: 5, marginLeft: -5}}>$200</div>
    </div>
    <div className="row">
    <div className="col-xs-8" style={{overflowWrap:"break-word", verticalAlign:"center", fontSize: 13, lineHeight: 2}}><Schedule style={{width: 13, height: 13}}/> <div style={{display:"inline", color: "#3d9fe7"}}>2017/02/03</div> 出发<br / ><div style={{textDecoration:"underline", display:"inline", color:"purple"}}>包吃</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>专车接送</div> <div style={{textDecoration:"underline", display:"inline", color:"purple"}}>shopping折扣</div></div>
    <div className="col-xs-4" style={{float:"right"}}> <Avatar aria-label="Recipe" className={classes.avatar}>
       W
     </Avatar></div>
    </div>
   </CardContent>
</Card>
</ListItem>
</List>

    </div>
  );
}
}


export default withStyles(styleSheet)(ListCard);
