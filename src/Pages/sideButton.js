import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import SearchIcon from "material-ui-icons/Search";

// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
// import blue from "material-ui/colors/blue";
// import green from "material-ui/colors/green";

// const btnTheme = createMuiTheme({
//   palette: {
//     primary: blue,
//     secondary: green
//   }
// });

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: "#fff"
  },

  buttonWrapper: {
    position: "fixed",
    right: "2%",
    bottom: "10%",
    zIndex: "10000"
  }
});

function sideButton(props) {
  const { classes } = props;

  return (
    <div className={classes.buttonWrapper}>
      <div>
        <Link to="/searchPanel">
          <Button
            fab
            color="primary"
            aria-label="search"
            className={classes.button}
          >
            <SearchIcon />
          </Button>
        </Link>
      </div>

      <div>
        <Link to="/activityWish">
          <Button
            fab
            color="secondary"
            aria-label="add"
            className={classes.button}
          >
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