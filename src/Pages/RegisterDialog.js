import React from "react";
import { Link } from "react-router-dom";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from "material-ui/Dialog";

import { withStyles } from "material-ui/styles";

const styles = {
  bottom: {
    marginBottom: 20,
  },
  choice: {
    color: "#1976D2",
    backgroundColor: "#fff",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginRight: 40,
  },
  actions: {
    color: "#1976D2",
    fontSize: 12
  }
};

const RegisterDialog = props => {
  const { classes } = props;
  return (
    <div>
      <DialogTitle id="responsive-dialog-title">{"请注册"}</DialogTitle>
      <DialogContent>
        <div className={classes.bottom}>

            <span className={classes.choice}>
             <Link to="/login" className="unlink">
              登陆已有账户
              </Link>
            </span>


            <span className={classes.choice}>
             <Link to="/signup" className="unlink">
              创建新账户
              </Link>
            </span>

        </div>
        <DialogContentText>
          注册代表已经同意<Link to="/" className="unlink">
            服务条款
          </Link>，<Link to="/" className="unlink">
            隐私政策
          </Link>，<Link to="/" className="unlink">
            免责声明
          </Link>，<Link to="/" className="unlink">
            保障计划条款
          </Link>，<Link to="/" className="unlink">
            使用政策须知
          </Link>。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <span className={classes.actions} onClick={props.onClick}>
          稍后再说
        </span>
      </DialogActions>
    </div>
  );
};

export default withMobileDialog()(withStyles(styles)(RegisterDialog));