import React from "react";

function Card(props) {
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

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