import React, { useState } from "react";
import { connect } from "react-redux";
import { getActivityOfType, getActivityOfPrice, getActivityOfParticipants, getActivityObject } from '../actions';

const initialFormState = {
    formType: '',
    activityType: '',
    priceType: '',
    participantsAmount: 1
}

const ConstraintsForm = (props) => {
    const [formState, setFormState] = useState(initialFormState)
    
    const handleFormTypeChange = (e) => {
        setFormState({
            ...formState,
            formType: e.target.value
        })
    }

    const handleActivityTypeChange = (e) => {
        setFormState({
            ...formState,
            activityType: e.target.value
        })
    }

    const handlePriceTypeChange = (e) => {
        setFormState({
            ...formState,
            priceType: e.target.value
        })
    }

    const handleParticipantsAmountChange = (e) => {
        setFormState({
            ...formState,
            participantsAmount: +e.target.value
        })
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        switch(formState.formType) {
            case '':
                props.getActivityObject();
                break;
            case 'type' :
                formState.activityType ? props.getActivityOfType(formState.activityType) : alert('You need a type');
                break;
            case 'price' :
                formState.priceType ? props.getActivityOfPrice(formState.priceType) : alert('You need a type');
                break;
            case 'participants' :
                formState.participantsAmount ? props.getActivityOfParticipants(formState.participantsAmount) : alert('You need a type');
                break;
            
        }
    }

    console.log(formState)
    return (
        <form className="constraints-form" onSubmit={handleFormSubmission}>
            <label> Choose specification{': '}
                <select value={formState.formType} onChange={handleFormTypeChange}>
                    <option value={''}>Any</option>
                    <option value={'type'}>Type</option>
                    <option value={'price'}>Price</option>
                    <option value={'participants'}>Participants</option>
                </select>
            </label>
            {formState.formType === 'type' ?
                <select value={formState.activityType} onChange={handleActivityTypeChange}>
                    <option value={''}>Choose an option</option>
                    <option value={'education'}>Education</option>
                    <option value={'recreational'}>Recreational</option>
                    <option value={'charity'}>Charity</option>
                    <option value={'relaxation'}>Relaxation</option>
                    <option value={'music'}>Music</option>
                    <option value={'busywork'}>Busywork</option>
                    <option value={'social'}>Social</option>
                    <option value={'diy'}>DIY</option>
                    <option value={'cooking'}>Cooking</option>
                </select>
            : ''}
            {formState.formType === 'price' ? 
                <select value={formState.priceType} onChange={handlePriceTypeChange}>
                    <option value={''}>Choose an option</option>
                    <option value={'Free'}>Free</option>
                    <option value={'Cheap'}>Cheap</option>
                    <option value={'Not-So-Cheap'}>Not-So-Cheap</option>
                </select>
            : ''}
            {formState.formType === 'participants' ?
                <select value={formState.participantsAmount} onChange={handleParticipantsAmountChange}>
                    <option value={''}>Choose an option</option>
                    <option value={'1'}>1 Person</option>
                    <option value={'2'}>2 People {'(less results)'}</option>
                    <option value={'3'}>3 People</option>
                    <option value={'4'}>4 People</option>
                </select>
            : ''}
            <button className="submit-butt">Submit</button>
        </form>
    )
}

export default connect(null, {getActivityOfType, getActivityOfPrice, getActivityOfParticipants, getActivityObject})(ConstraintsForm);