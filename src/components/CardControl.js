import React from "react";
import NewCardForm from "./NewCardForm";
import CardList from "./CardList"
import CardDetail from "./CardDetail"

class CardControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false,
            // move mainCardList into state
            mainCardList: [], 
            selectedCard: null
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
    // filtering out the array to have the id that matches the UUID since there is only one unique UUID for every card
    // then set the state to show only the selectedCard within the array and specifying the index of the array to 0 since it will only have one card in the array
    handleChangingSelectedCard = (id) => {
        const newDetail = this.state.mainCardList.filter(card => card.id === id)[0];
        this.setState({selectedCard: selectedCard});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        // if(this.state.formVisibleOnPage) {
        //     // passing handleAddingNewCardToList method down to the NewCardForm component as a prop
        //     currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList}/>
        //     buttonText = "Return to Card List"
        // } else {
        //     // passing mainCardList state as a prop to cardList <CardList cardList={this.state.mainCardList}/>
        //     currentlyVisibleState = <CardList cardList={this.state.mainCardList}/>
        //     buttonText = "Link New Card"
        // }
        if (this.state.selectedCard != null) {
            currentlyVisibleState = <CardDetail card = {this.state.selectedCard} />
            buttonText= "Return to Card List"
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList}/>
            buttonText = "Return to Card List"
        } else {
            // passing mainCardList and cardSelection state as a prop to cardList <CardList cardList={this.state.mainCardList}/>
            currentlyVisibleState = <CardList cardList={this.state.mainCardList} onCardSelection={this.handleChangingSelectedCard}/>
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