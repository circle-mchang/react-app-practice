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
    return (
        <React.Fragment>
            <form onSubmit={handleNewCardFormSubmission}>
                <input
                type='string'
                name='cardNumber'
                placeholder='Card Number'/>
                <button type="submit">Add Card</button>
            </form>
        </React.Fragment>
    )
}

NewCardForm.propTypes = {
    onNewCardCreation: PropTypes.func
}

export default NewCardForm;