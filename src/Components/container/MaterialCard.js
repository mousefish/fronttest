import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import travel from '../../Assets/Images/travel.jpg'
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import { green } from 'material-ui/colors';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';

const styleSheet = ({
  card: {
    width: "100%",
    marginBottom: 10,
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
 flexGrow: { flex: '1 1 auto' },
});
class  NowPlayingCard extends Component
{
  render(){
  const classes = this.props.classes;

  return (
    <div>
     <Card className={classes.card}>
       <CardHeader
         avatar={
           <Avatar aria-label="Recipe" className={classes.avatar}>
             W
           </Avatar>
         }
         title="旧金山周边十日游"
         subheader="出发日期: 2018-09-30"
       />
       <Typography type="headline" style={{float:'right', marginTop:-55, marginRight: 20}}>999元</Typography>
       <CardMedia >
         <img style={{width: '100%'}} src={travel} alt="Contemplative Reptile" />
       </CardMedia>
       <CardContent>
         <Chip label="美食达人" className={classes.chip} /> <Chip label="完美导游" className={classes.chip} />
         <Typography component="p" style={{marginTop:5}}>
          这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩,  这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩...
         </Typography>
       </CardContent>
       <CardActions disableActionSpacing>
         <IconButton aria-label="Add to favorites">
           <FavoriteIcon />
         </IconButton>
         <IconButton aria-label="Share">
           <ShareIcon />
         </IconButton>
          <div className={classes.flexGrow} />
          <Button raised color={green} className={classes.button}>
      详情
    </Button>
         </CardActions>
</Card>


    </div>
  );
}
}


export default withStyles(styleSheet)(NowPlayingCard);
