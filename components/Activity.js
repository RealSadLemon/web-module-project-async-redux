import React from "react";
import { connect } from "react-redux";

const Activity = (props) => {

    return(
        <div className="activity">
            <h2 className="description">{props.activity}</h2>
            <p className="type">{props.type}</p>
            <p className="participants">{props.participants}</p>
            <p className="price">{props.price}</p>
            <p className="link">{props.link}</p>
            <p className="accessibility">{props.accessibility}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activity: state.activityObj.activity,
        type: state.activityObj.type,
        participants: state.activityObj.participants,
        price: state.activityObj.price,
        link: state.activityObj.link,
        accessibility: state.activityObj.accessibility
    }
}

export default connect(mapStateToProps, {})(Activity);