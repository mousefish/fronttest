import React, { Component } from "react";
import { connect } from "react-redux";

export default ComposedComponent => {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                console.log('Authenticated?', this.props.isAuthenticated);
                this.context.router.history.push("/my");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.context.router.history.push("/my");
            }
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return { isAuthenticated:state.UserAuth.isAuthenticated };
    };

    return connect(mapStateToProps)(Authentication);
};