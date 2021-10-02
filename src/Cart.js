import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    // we can pass anything to children via props (like function arguments)
    render() {
        return (
            <div className="cart">

                <CartItem qty={1} price={999} title={"Watch"}/>
                
            </div>
        )
    }
}

export default Cart