import React, { Component } from "react";
import * as actions from "../Actions";
import SideButton from "./sideButton";
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import ImageIcon from "material-ui-icons/Image";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

class UserWishes extends Component {
    componentWillMount() {
        const { userId } = this.props.match.params;
        this.props.fetchUserWishes(userId);
    }

    renderUserWishes(userWishes) {
        if (userWishes && typeof userWishes[0] === "string") {
            return <div style={{ textAlign: "center" }}>{userWishes[0]}</div>;
        }
        // TEMP VERSION CH FOR AVOIDING MISTAKE!
        return userWishes.map(item => {
            return (
                <Link to={`/wish/${item.id}/CH`} className="unlink" key={item.id}>
                    <ListItem>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText
                            primary={item.location}
                            secondary={`${item.budget} 元`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Stars" />
                        </ListItemSecondaryAction>
                    </ListItem>
                </Link>
            );
        });
    }

    render() {
        const { userWishes } = this.props;
        return (
            <div className="wrapper">
                <PageHeader title="我的愿望" history={this.props.history} />
                <ul className="unlist">{this.renderUserWishes(userWishes)}</ul>
                <SideButton />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("userWishes",state.WishReducer.userWishes )
    return {
        userWishes: state.WishReducer.userWishes
    };
};
export default connect(mapStateToProps, actions)(UserWishes);