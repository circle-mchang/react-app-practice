import React from "react";
import NewCardForm from "./NewCardForm";
import CardList from "./CardList"

class CardControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false,
            // move mainCardList into state
            mainCardList: [] 
        }
    }

    handleClick = () => {
        // pass current state(formVisibleOnPage) to prevState and set new state to opposite of the old state
        this.setState(prevState => (
            {formVisibleOnPage: !prevState.formVisibleOnPage}))
    }

    handleAddingNewCardToList = (newCard) => {
        const newMainCardList = this.state.mainCardList.concat(newCard);
        this.setState({mainCardList: newMainCardList, formVisibleOnPage: false});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if(this.state.formVisibleOnPage) {
            // passing handleAddingNewCardToList method down to the NewCardForm component as a prop
            currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList}/>
            buttonText = "Return to Card List"
        } else {
            // passing mainCardList state as a prop to cardList <CardList cardList={this.state.mainCardList}/>
            currentlyVisibleState = <CardList cardList={this.state.mainCardList}/>
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