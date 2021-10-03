import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  // we can pass anything to children via props (like function arguments)
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 12339,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 3,
        },
        {
          price: 52304,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 2,
        },
      ],
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);

    // using arrow function will automatically bind the this keyword to the function that
    // in normal function this keyword is not bound to the function
    // this.testing();
  }
  render() {
    const products = this.state;
    return (
      <div className="cart">
        {this.state.products.map((product) => {
          return <CartItem product={product} key={product.id} func = {() => console.log('sdsf')}
        
          />;
        })}
      </div>
    );
  }
}

export default Cart;
