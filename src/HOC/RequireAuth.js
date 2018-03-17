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
                this.context.router.history.push("/openPage");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.context.router.history.push("/openPage");
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