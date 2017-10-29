import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FIELDS from "./routeFormFields";
import * as actions from "../Actions";
import { formValueSelector } from 'redux-form';

const AddRouteReview = () => {
    const renderFields =()=> {
       return FIELDS.map((field) => {
          return (<div key={field.name}><label>{field.label}:</label> </div>);

        });

    }
    return (
        <div>
         <h5>Please confirm your entries:</h5>
         <div>
         {renderFields()}
         </div>
         <button className='yellow darken-3 btn-flat white-text' >Cancel</button>

        </div>

    );

}

function mapStateToProps(state){
    const selector = formValueSelector('addRouteForm')
    const location = selector(state, 'location')
    console.log('loc',location)
    return {
        location

    }

}

export default connect(mapStateToProps)(AddRouteReview)