import React, { Component } from "react";
import { connect } from "react-redux";

export default (ComposedComponent) => {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.context.router.history.push("/openPage/CH");
            }
        }

        componentWillUpdate(nextProps) {

            if (!nextProps.isAuthenticated) {
                this.context.router.history.push("/openPage/CH");
            }
        }
        render() {

            const {
                location: { pathname },
                isAuthenticated,
                history
            } = this.props;

            if (isAuthenticated && pathname === "/") {
                history.push("/recommendation/CH");
            }
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { isAuthenticated: state.UserAuth.isAuthenticated };
    };

    return connect(mapStateToProps)(Authentication);
};