import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
    <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <span className="badge bg-primary">3</span>
    </div>
    );
}

export default CartWidget;
