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
        this.setState({formVisibleOnPage: true})
    }

    render(){
        let currentlyVisibleState = null;
        let addCardButton = null;
        if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCardForm/>
        } else {
            currentlyVisibleState = <CardList/>
            addCardButton = <button onClick={this.handleClick}>
                Add Card
            </button>
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                {addCardButton}
            </React.Fragment>
        );
    }
}

export default CardControl;