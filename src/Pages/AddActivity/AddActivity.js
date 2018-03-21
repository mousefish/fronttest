import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import Button from "material-ui/Button";

import WizardFirst from "./WizardFirst";
import WizardSecond from "./WizardSecond";
import WizardThird from "./WizardThird";



class AddActivity extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            page: 1
        };
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    handleSubmit(values) {
       console.log('value', values);
        const images = [];
        for(let i = 1 ; i <= 8; i ++){
            if(values['img'+i]){
                images.push(values['img'+i]);
            }
        }
        let { theme, location,departdate,finishdate, budget, numberOfPeople, services,story } = values;
        const modifiedValues={
            theme,
            location,
            departdate,
            finishdate,
            budget,
            numberOfPeople,
            services,
            story,
            images
        };

      // console.log('aftervalue', modifiedValues);
      // blob:http://localhost:3000/95ed0c2e-7b16-4d37-8e69-250a6f57a860

        this.props.submitActivityData(modifiedValues, this.props.history);
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && (
                    <WizardFirst
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 2 && (
                    <WizardSecond
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <WizardThird
                        previousPage={this.previousPage}
                        onSubmit={this.handleSubmit}
                    />
                )}
                <div className='input-success'>{this.props.msg}</div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { msg: state.ActivityReducer.message };
};

// AddActivity.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, actions)(withRouter(AddActivity));