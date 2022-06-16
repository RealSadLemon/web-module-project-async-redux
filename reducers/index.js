import { GET_ACTIVITY_OBJECT, GET_ACTIVITY_OF_TYPE, GET_ACTIVITY_OF_PRICE, GET_ACTIVITY_OF_PARTICIPANTS } from "../actions";

const loadingState = {
    loaded: false
}

const reducer = (state = loadingState, action) => {
    switch(action.type) {
        case GET_ACTIVITY_OBJECT:
            return {
                ...state,
                loaded: true,
                activityObj: action.payload
            };
        case GET_ACTIVITY_OF_TYPE:
            return {
                ...state,
                loaded: false,
                activityObj: action.payload
            };
        case GET_ACTIVITY_OF_PRICE:
            return {
                ...state,
                loaded: false,
                activityObj: action.payload
            };
        case GET_ACTIVITY_OF_PARTICIPANTS:
            return {
                ...state,
                loaded: false,
                activityObj: action.payload
            };
        default:
            return state;
    }
}

export default reducer;