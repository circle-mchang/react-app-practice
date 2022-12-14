import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

// const mainCardList = [
//     {
//         cardNumber: '4007400000000007',
//         CVV: '123',
//         expY: '2025',
//         expM: '01',
//         fullName: 'Customer 001',
//         addressl1: 'test',
//         postal: '11111',
//         city: 'Test City',
//         district: 'MA',
//         countryCode: 'US',
//         phone: '+12025550180',
//         email: 'customer-0001@circle.com'
//     }
// ]
function CardList(props) {
    return (
        <React.Fragment>
        <hr/>
        {props.cardList.map((card, index) =>
            <Card cardNumber={card.cardNumber}
            // CVV={card.CVV}
            // expM={card.expM}
            // expY={card.expY}
            // fullName={card.fullName}
            // addressl1={card.addressl1}
            // postal={card.postal}
            // city={card.city}
            // district={card.district}
            // countryCode={card.countryCode}
            // phone={card.phone}
            // email={card.email}
            key={index}/>
        )}
      </React.Fragment>
    )
}

CardList.propTypes = {
    cardList: PropTypes.array
};

export default CardList;