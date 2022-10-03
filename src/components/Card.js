import React from "react";
import PropTypes from "prop-types";

function Card(props) {
    return (
        <React.Fragment>
            <h3>{props.cardNumber}</h3>

        </React.Fragment>
    )
}
// This is just defining what type of prop they are
Card.propTypes = {
    cardNumber: PropTypes.string,
    CVV: PropTypes.string,
    expY: PropTypes.string,
    expM: PropTypes.string,
    fullName: PropTypes.string,
    addressl1: PropTypes.string,
    postal: PropTypes.string,
    city: PropTypes.string,
    district: PropTypes.string,
    countryCode: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

export default Card;