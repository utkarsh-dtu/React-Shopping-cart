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
          id: 1,
        },
        {
          price: 12339,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 52304,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);

    // using arrow function will automatically bind the this keyword to the function that
    // in normal function this keyword is not bound to the function
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    // console.log("hey please increase the quantity of ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    console.log(index);
  
    products[index].qty +=1;
    this.setState({
        products 
    });
  };

  handleDecreaseQuantity = (product) => {
    if(product.qty === 0) return;
    
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty-=1;

    this.setState({
        products
    });


  }
  render() {
    // const products = this.state;
    const {products} = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
