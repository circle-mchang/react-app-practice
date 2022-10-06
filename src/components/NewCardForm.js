import React from "react";

function NewCardForm(){
    function handleNewCardFormSubmission(event) {
        event.preventDefault();
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

export default NewCardForm;