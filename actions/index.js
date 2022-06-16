export const GET_ACTIVITY_OBJECT = 'GET_ACTIVITY_OBJECT';
export const GET_ACTIVITY_OF_TYPE = 'GET_ACTIVITY_OF_TYPE';
export const GET_ACTIVITY_OF_PRICE = 'GET_ACTIVITY_OF_PRICE';
export const GET_ACTIVITY_OF_PARTICIPANTS = 'GET_ACTIVITY_OF_PARTICIPANTS';

export const getActivityObject = () => {
    return {
        type: GET_ACTIVITY_OBJECT
    }
}

export const getActivityOfType = (type) => {
    return {
        type: GET_ACTIVITY_OF_TYPE,
        payload: type
    }
}

export const getActivityOfPrice = (price) => {
    return {
        type: GET_ACTIVITY_OF_TYPE,
        payload: price
    }
}

export const getActivityOfParticipants = (numOfParticipants) => {
    return {
        type: GET_ACTIVITY_OF_PARTICIPANTS,
        payload: numOfParticipants
    }
}