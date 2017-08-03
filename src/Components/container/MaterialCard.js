import React ,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import travel from '../../Assets/Images/travel.jpg'
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import { green } from 'material-ui/colors';

const styleSheet = createStyleSheet({
  card: {
    width: "100%",
    marginBottom: 10,
    margin: 'auto',
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '0 1 auto',
  },
  cover: {
    width: 210,
    height: 156,
    display: "inline-block"
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
  }

});
class  NowPlayingCard extends Component
{
  render(){
  const classes = this.props.classes;

  return (
    <div>
      <Card className={classes.card}>
      <div className={classes.cover}>
        <img style={{width:'100%', height:'100%', objectFit:'fill'}} src={travel} alt="aa" />
      </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">主题在这里</Typography>
            <Typography type="subheading" color="secondary" style={{display:'inline-flex'}}>
              发起人
            </Typography><Chip label="美食达人" className={classes.chip} />
            <Typography type="body1">
              这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩,  这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩...
            </Typography>
            <br />

            <Typography type="body2">
              出发日期: 2019-01-01
            </Typography>
            <Typography type="body2">
              价格: 999
            </Typography>
            <Button raised color={green} className={classes.button}>
        详情
      </Button>
          </CardContent>
        </div>

      </Card>

      <Card className={classes.card}>
      <div className={classes.cover}>
        <img style={{width:'100%', height:'100%', objectFit:'fill'}} src={travel} alt="aa" />
      </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">主题在这里</Typography>
            <Typography type="subheading" color="secondary" style={{display:'inline-flex'}}>
              发起人
            </Typography><Chip label="美食达人" className={classes.chip} />
            <Typography type="body1">
              这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩,  这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩...
            </Typography>
            <br />

            <Typography type="body2">
              出发日期: 2019-01-01
            </Typography>
            <Typography type="body2">
              价格: 999
            </Typography>
            <Button raised color={green} className={classes.button}>
        详情
      </Button>
          </CardContent>
        </div>

      </Card>

      <Card className={classes.card}>
      <div className={classes.cover}>
        <img style={{width:'100%', height:'100%', objectFit:'fill'}} src={travel} alt="aa" />
      </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">主题在这里</Typography>
            <Typography type="subheading" color="secondary" style={{display:'inline-flex'}}>
              发起人
            </Typography><Chip label="美食达人" className={classes.chip} />
            <Typography type="body1">
              这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩,  这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩...
            </Typography>
            <br />

            <Typography type="body2">
              出发日期: 2019-01-01
            </Typography>
            <Typography type="body2">
              价格: 999
            </Typography>
            <Button raised color={green} className={classes.button}>
        详情
      </Button>
          </CardContent>
        </div>

      </Card>

      <Card className={classes.card}>
      <div className={classes.cover}>
        <img style={{width:'100%', height:'100%', objectFit:'fill'}} src={travel} alt="aa" />
      </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">主题在这里</Typography>
            <Typography type="subheading" color="secondary" style={{display:'inline-flex'}}>
              发起人
            </Typography><Chip label="美食达人" className={classes.chip} />
            <Typography type="body1">
              这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩,  这里是简介,这里是简介,这里是简介,我要去玩阿,我要去哪玩,来这玩...
            </Typography>
            <br />

            <Typography type="body2">
              出发日期: 2019-01-01
            </Typography>
            <Typography type="body2">
              价格: 999
            </Typography>
            <Button raised color={green} className={classes.button}>
        详情
      </Button>
          </CardContent>
        </div>

      </Card>
    </div>
  );
}
}


export default withStyles(styleSheet)(NowPlayingCard);
