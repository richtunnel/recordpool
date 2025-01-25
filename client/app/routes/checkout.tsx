import React from "react";
import CheckoutPage from "../pages/checkout";
import ProgressiveClient from "../components/ProgressiveClient";


const Checkout: React.FC = () => {
    return (
        <>
        <ProgressiveClient>
        <CheckoutPage />
        </ProgressiveClient>
        </>
    )
}

export default Checkout;