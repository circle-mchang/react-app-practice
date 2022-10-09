import React from "react";
import PropTypes from "prop-types"
import { v4 } from "uuid";

function NewCardForm(props){
    function handleNewCardFormSubmission(event) {
        event.preventDefault();
        props.onNewCardCreation({
            cardNumber: event.target.cardNumber.value,
            id: v4()
        })
        console.log(event.target.cardNumber.value);
    }
    // This will show all the necessary parameters for the API call
    return (
        <React.Fragment>
            <form onSubmit={handleNewCardFormSubmission}>
                <input
                type='string'
                name='cardNumber'
                placeholder='Card Number'/>
                <input
                type='string'
                name='CVV'
                placeholder='CVV'/>
                <input
                type='string'
                name='expM'
                placeholder='Expiry Month'/>
                <input
                type='string'
                name='expY'
                placeholder='Expiry Year'/>
                <input
                type='string'
                name='fullName'
                placeholder='Full Name'/>
                <input
                type='string'
                name='addressl1'
                placeholder='Address Line 1'/>
                <input
                type='string'
                name='postal'
                placeholder='Postal Code'/>
                <input
                type='string'
                name='city'
                placeholder='City'/>
                <input
                type='string'
                name='district'
                placeholder='District'/>
                <input
                type='string'
                name='countryCode'
                placeholder='Country Code'/>
                <input
                type='string'
                name='phone'
                placeholder='Phone Number'/>
                <input
                type='string'
                name='email'
                placeholder='Email'/>
                <button type="submit">Add Card</button>
            </form>
        </React.Fragment>
    )
}

NewCardForm.propTypes = {
    onNewCardCreation: PropTypes.func
}

export default NewCardForm;