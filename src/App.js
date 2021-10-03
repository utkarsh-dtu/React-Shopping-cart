// import './App.css';
import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "watch",
          qty: 1,
          img: "https://media.istockphoto.com/photos/mens-wristwatch-picture-id118803311?s=612x612",
          id: 1,
        },
        {
          price: 12339,
          title: "Mobile Phone",
          qty: 1,
          img: "https://media.istockphoto.com/photos/man-hand-holding-black-smartphone-isolated-on-white-clipping-path-picture-id930865224?s=612x612",
          id: 2,
        },
        {
          price: 52304,
          title: "Laptop",
          qty: 1,
          img: "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?s=612x612",
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
    const { products } = this.state;
    const index = products.indexOf(product);
    console.log(index);

    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    if (product.qty === 0) return;

    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count+=product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += (product.price * product.qty);
    });
    return cartTotal;
  }
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart

          // passing props to the children
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        <div style = {{fontSize : 20,padding : 10}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
