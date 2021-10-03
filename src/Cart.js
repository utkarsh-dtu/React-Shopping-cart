import React from "react";
import CartItem from "./CartItem";


// this is function component

const Cart = (props) => {
  // we can pass anything to children via props (like function arguments)

  // const products = this.state;
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
