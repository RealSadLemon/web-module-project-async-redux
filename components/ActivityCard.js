import React, { useEffect } from "react";
import Activity from './Activity';
import { connect } from "react-redux";
import { getActivityObject } from "../actions";

const ActivityCard = (props) => {
    useEffect(() => {
        props.getActivityObject();
    }, [])
    
    return(
        <div className="activity-card">
            { props.loaded ? 
                <Activity /> : 
                'Activity is loading... One moment please.'
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
      loaded: state.loaded
    })
}

export default connect(mapStateToProps, {getActivityObject})(ActivityCard);