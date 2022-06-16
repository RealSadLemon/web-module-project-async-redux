import React from "react";
import { connect } from "react-redux";

const Activity = (props) => {

    return(
        <div className="activity">
            <h2 className="description"></h2>
            <p className="type"></p>
            <p className="participants"></p>
            <p className="price"></p>
            <p className="link"></p>
            <p className="accessibility"></p>
        </div>
    )
}

export default connect(null, {})(Activity);