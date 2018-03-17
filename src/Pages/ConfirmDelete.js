import React from "react";
import {
    DialogActions,
    DialogTitle,
    withMobileDialog
} from "material-ui/Dialog";
import Button from "material-ui/Button";

const ConfirmDelete = (props) => {
    return (
        <div>
           <DialogTitle id="responsive-dialog-title">确定要删除该活动吗？</DialogTitle>
            <DialogActions>
                <Button onClick={()=>props.onClick()} color="primary">
                    稍后再说
                </Button>
                <Button
                    autoFocus
                    style={{ color: "#D32F2F" }}
                    onClick={()=>props.onDelete()}
                >
                    删除
                </Button>
            </DialogActions>
        </div>
    );
};

export default withMobileDialog()(ConfirmDelete);