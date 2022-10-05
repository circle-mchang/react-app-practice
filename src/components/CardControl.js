import React from "react";
import NewCardForm from "./NewCardForm";
import CardList from "./CardList"

class CardControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false
        }
    }

    handleClick = () => {
        // pass current state(formVisibleOnPage) to prevState and set new state to opposite of the old state
        this.setState(prevState => (
            {formVisibleOnPage: !prevState.formVisibleOnPage}))
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCardForm/>
            buttonText = "Return to Card List"
        } else {
            currentlyVisibleState = <CardList/>
            buttonText = "Link New Card"
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default CardControl;