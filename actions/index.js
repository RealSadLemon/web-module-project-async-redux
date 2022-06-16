import axios from 'axios';
export const GET_ACTIVITY_OBJECT = 'GET_ACTIVITY_OBJECT';
export const GET_ACTIVITY_OF_TYPE = 'GET_ACTIVITY_OF_TYPE';
export const GET_ACTIVITY_OF_PRICE = 'GET_ACTIVITY_OF_PRICE';
export const GET_ACTIVITY_OF_PARTICIPANTS = 'GET_ACTIVITY_OF_PARTICIPANTS';

export function getActivityObject() {
    return (dispatch) => {
        axios.get('https://www.boredapi.com/api/activity')
            .then(res => {
                const activityObj = res.data
                dispatch({type: GET_ACTIVITY_OBJECT, payload: activityObj})
            })
            .catch(err => {
                console.log(err);
                debugger
            })
    }
}

export const getActivityOfType = (type) => {
    return (dispatch) => {
        axios.get(`https://www.boredapi.com/api/activity?type=${type}`)
            .then(res => {
                const activityObj = res.data
                dispatch({type: GET_ACTIVITY_OBJECT, payload: activityObj})
            })
            .catch(err => {
                console.log(err);
                debugger
            })
    }
}

export const getActivityOfPrice = (price) => {
    let actualPrice = [0.0, 1.0];
    if(price === 'Free') actualPrice = [0.0, 0.0];
    if(price === 'Cheap') actualPrice = [0.1, 0.4];
    if(price === 'Not-So-Cheap') actualPrice = [0.5, 1.0];
    return (dispatch) => {
        axios.get(`https://www.boredapi.com/api/activity?minprice=${actualPrice[0]}&maxprice=${actualPrice[1]}`)
            .then(res => {
                const activityObj = res.data
                dispatch({type: GET_ACTIVITY_OBJECT, payload: activityObj})
            })
            .catch(err => {
                console.log(err);
                debugger
            })
    }
}

export const getActivityOfParticipants = (numOfParticipants) => {
    return (dispatch) => {
        axios.get(`https://www.boredapi.com/api/activity?participants=${numOfParticipants}`)
            .then(res => {
                const activityObj = res.data
                dispatch({type: GET_ACTIVITY_OBJECT, payload: activityObj})
            })
            .catch(err => {
                console.log(err);
                debugger
            })
    }
}