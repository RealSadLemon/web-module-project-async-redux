import React from "react";
import { connect } from "react-redux";

const Activity = (props) => {
    

    return(
        <div className="activity">
            <h2 className="description">{props.activity}</h2>
            <p className="type">Type: {props.type}</p>
            <p className="participants">People suggested: {props.participants}</p>
            <p className="price">Price estimate: {props.price}</p>
            <p className="link">{props.link ? 'Link: ': ''}{props.link}</p>
            <p className="accessibility">Difficulty of access: {props.accessibility}</p>
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