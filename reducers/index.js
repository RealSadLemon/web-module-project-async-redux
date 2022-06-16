import { GET_ACTIVITY_OBJECT, GET_ACTIVITY_OF_TYPE, GET_ACTIVITY_OF_PRICE, GET_ACTIVITY_OF_PARTICIPANTS } from "../actions";

const loadingState = {
    loading: "Activity is loading... One moment."
}

export default reducer = (state = loadingState, action) => {
    switch(action.type) {
        case GET_ACTIVITY_OBJECT:
            return state;
        default:
            return state;
    }
} 