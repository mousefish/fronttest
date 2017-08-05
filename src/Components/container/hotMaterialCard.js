import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
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
import TouchRipple from 'material-ui/internal/TouchRipple'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet({
  card: {
    width: "100%",

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
 padding:
 {
   paddingTop: 0
 },
 flexGrow: { flex: '1 1 auto' },
});
class  HotMaterialCard extends Component
{
  render(){
  const classes = this.props.classes;

  return (
    <div>
 <List className={classes.padding}>
 <ListItem button>
 <Avatar aria-label="Recipe" className={classes.avatar}>
   W
 </Avatar>
 <ListItemText primary="旧金山周边十日游" secondary="出发日期: 2018-09-30" />
  <Typography type="headline" style={{float:'right', marginRight: 10}}>999元</Typography>
</ListItem>

<Divider />

<ListItem button>
<Avatar aria-label="Recipe" className={classes.avatar}>
  W
</Avatar>
<ListItemText primary="旧金山周边十日游" secondary="出发日期: 2018-09-30" />
 <Typography type="headline" style={{float:'right', marginRight: 10}}>999元</Typography>
</ListItem>

<Divider />

<ListItem button>
<Avatar aria-label="Recipe" className={classes.avatar}>
  W
</Avatar>
<ListItemText primary="旧金山周边十日游" secondary="出发日期: 2018-09-30" />
 <Typography type="headline" style={{float:'right', marginRight: 10}}>999元</Typography>
</ListItem>
</List>

    </div>
  );
}
}


export default withStyles(styleSheet)(HotMaterialCard);
