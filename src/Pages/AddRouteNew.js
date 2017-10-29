import React, { Component } from 'react';
import AddRoute from './AddRoute';
import AddRouteReview from './AddRouteReview';

class AddRouteNew extends Component{
    constructor(){
        this.state={ showReview: false };
     }


    render(){
        return(
            if (!this.state.showReview){
                return <AddRoute onSubmitForm={()=>this.setState({ showReview: true})} />
            }else{
                return <AddRouteReview onCancel={()=>this.setState({ showReview: false})} />
            }

        )



    }





}

export default AddRouteNew;