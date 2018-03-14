import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from "material-ui/styles";


const styles = {

};

class PrivateFavorites extends Component {
    componentWillMount() {
        let token = localStorage["jwtToken"];
        if (token) {
            this.props.fetchUserFavorites();
        }
    }

    deleteFev(e, favId){
        e.preventDefault();
        // console.log(favId);
        this.props.deleteUserFavorite(favId)

    }

    renderFavorites(favorites) {
        const { classes } = this.props;

        if(favorites && favorites.hasOwnProperty("warning")){
            return(<div className="wrapper">
                        <div style={{textAlign:"center"}}>{favorites["warning"]}</div>
                   </div>
            )
        }
        return favorites.map(fav => {
            return (
                <Link
                    key={fav.id}
                    to={`/activity/${fav.id}`}
                    className="unlink"
                 >
                 <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={fav.theme}

                    />
                    <ListItemSecondaryAction >
                      <IconButton
                           aria-label="Delete"
                           className={classes.deleteIcon}
                           onClick={(e)=>{this.deleteFev(e, fav.id)}}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Link>

            );
        });
    }

    render() {
        const { favorites } = this.props;
        return (
            <div className="wrapper">
             <PageHeader history={this.props.history} title="我的活动收藏" />
              <List>{this.renderFavorites(favorites)}</List>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.FavoriteReducer);
    return {
        favorites: state.FavoriteReducer
    };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(PrivateFavorites));