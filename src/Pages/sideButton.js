import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import SearchIcon from "material-ui-icons/Search";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    backgroundColor: "#43A047"
  },
  button: {
    margin: theme.spacing.unit
  },

  buttonWrapper: {
    position: "fixed",
    right: "10%",
    bottom: "10%",
    zIndex: "1000"
  }
});

function sideButton(props) {
  const { classes } = props;
  return (
    <div className={classes.buttonWrapper}>
      <div>
        <Button
          onClick={props.onClick}
          fab
          color="primary"
          aria-label="search"
          className={classes.button}
        >
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Link
          to="/activityDemand"
        >
          <Button fab color="accent" aria-label="add" className={classes.root}>
            <AddIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}

sideButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(sideButton);