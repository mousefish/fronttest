import React,{Component} from 'react'
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
class Tab1Content extends Component{
  componentWillMount()
  {
    console.log("component will mount")
  }

componentWillUnmount()
{
  console.log("component will unmount")
}

  componentDidMount()
  {
      console.log("component did mount")
  }

  render(){
    return(
      <div>
      <Card  className="md-block-centered">


        <CardTitle
          title="我是一张名片卡"
          subtitle="名片卡测试"
        >
          <Button className="md-cell--right" icon>star_outline</Button>
          </CardTitle>

        <CardActions expander>
          <Button flat label="别按我" />
          <Button flat label="别按我" />
        </CardActions>
        <CardText expandable>
          <p>我是一只小老鼠,小呀么小老鼠</p>
        </CardText>
      </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>

    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card  className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    <Card className="md-block-centered">
      <CardTitle
        title="我也是一张名片卡"
        subtitle="名片卡测试"
      >
        <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>

      <CardActions expander>
        <Button flat label="别按我" />
        <Button flat label="别按我" />
      </CardActions>
      <CardText expandable>
        <p>我也是一只小老鼠,小呀么小老鼠</p>
      </CardText>
    </Card>
    </div>
    )
  }

}

export default Tab1Content
