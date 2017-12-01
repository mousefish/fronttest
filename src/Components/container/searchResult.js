import React from 'react';
import {connect} from 'react-redux';

const searchResult = (props) => {
    return (
     <div>
       {props.searchResult[0].city}
     </div>

    )
}


const mapStateToProps = (state)=>{
    return {searchResult: state.SearchDataReducer}

}


export default connect(mapStateToProps)(searchResult);