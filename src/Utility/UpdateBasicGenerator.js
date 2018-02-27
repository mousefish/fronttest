export default that => {
    let inputValue = that.state.value;
    const p = new Promise((resolve, reject) => {
        if (!inputValue) {
            that.setState({
                err: "值不能为空"
            });
        }
        // Make sure the it works on number-typed input too!
        if (("" + inputValue).trim() === "" + that.state.original) {
            that.setState({
                err: "值未发生更新"
            });
        }
        switch (that.state.key) {
            case "mail":
                if (
                    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                        inputValue
                    )
                ) {
                    that.setState({
                        err: "请输入有效邮箱"
                    });
                }
                break;

            case "password":
                if (inputValue.length !== 6) {
                    that.setState({
                        err: "密码长度为六位"
                    });
                }
                break;
        }
        resolve(that.state.err);
    });

    p.then(() => {
        if (that.state.err === "") {
            let value = {
                userId: that.state.userId,
                key: that.state.key,
                value: inputValue
            };

            // console.log("submitValue", value);
            that.props.updateUserBasicInfo(value);
            setTimeout(() => {
                if (that.props.user.err === "") {
                    that.setState({ open: false });
                }
            }, 100);
        }
    });
};