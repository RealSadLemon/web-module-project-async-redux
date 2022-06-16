import React from "react";
import Activity from './Activity';
import { connect } from "react-redux";

const ActivityCard = (props) => {

    return(
        <div className="activity-card">
            { props.loading ? 
                'Activity is loading... One moment please.' : 
                <Activity />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    let loading = true;
    if(state.loading === !null) loading = state.loading;
    return({
      loading: loading
    })
}

export default connect(mapStateToProps, {})(ActivityCard);