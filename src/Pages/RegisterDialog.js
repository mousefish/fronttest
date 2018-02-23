import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from "material-ui/Dialog";

import { withStyles } from "material-ui/styles";

const styles = {
  right:{
    marginRight:30
  },
  bottom:{
    marginBottom:10
  },
};

const RegisterDialog = props => {
    const { classes } = props;
    return (
        <div>
            <DialogTitle id="responsive-dialog-title">{"请登录"}</DialogTitle>
            <DialogContent>
                <div className={classes.bottom}>
                    <Link to="/login" className={classes.right}>
                        <Button color="primary" raised>
                            登陆已有账户
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button color="primary" raised>
                            创建新账户
                        </Button>
                    </Link>
                </div>
                <DialogContentText>
                    注册代表已经同意<Link to="/">服务条款</Link>，<Link to="/">隐私政策</Link>，<Link to="/">免责声明</Link>，<Link to="/">保障计划条款</Link>，<Link to="/">使用政策须知</Link>。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClick} color="primary">
                    稍后再说
                </Button>
            </DialogActions>
        </div>
    );
};

export default withStyles(styles)(RegisterDialog);