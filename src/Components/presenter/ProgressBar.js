import React from "react";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

const newtheme = createMuiTheme({
    palette: {
        primary: {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#1976d2",
            600: "#1976d2",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            A100: "#82b1ff",
            A200: "#448aff",
            A400: "#2979ff",
            A700: "#2962ff",
            contrastDefaultColor: "light"
        }
    }
});

const styles = theme => ({
    progress: {
        width: "95%",
        margin: "auto"
    }
});
const ProgressBar = props => {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={newtheme}>
            <LinearProgress
                className={classes.progress}
                mode="determinate"
                value={props.completed}
            />
        </MuiThemeProvider>
    );
};

export default withStyles(styles)(ProgressBar);