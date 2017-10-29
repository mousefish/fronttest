import React, { Component } from "react";
import NotFoundPage from "./404.png";
class PageNotFound extends Component {
    render() {
        return (
            <div style={{ maxWidth: "800px", position:'relative'}}>
                <img style={{ maxWidth: "100%" }} src={NotFoundPage} />
            </div>
        );
    }
}

export default PageNotFound;