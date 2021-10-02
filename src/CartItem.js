import React from "react";

// we need to refresh on updating the state
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 12339,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);

    // using arrow function will automatically bind the this keyword to the function that
    // in normal function this keyword is not bound to the function
  }
  increaseQuantity = () =>{
    // console.log("increasing");
    //   (this.state.qty)++;
    // console.log(this.state);
    // this.state.qty+=1;

    // setState form 1
    // the render function will be automatically be called on using setState
    // this.setState({
    //     qty : this.state.qty + 1
    // });

    // this will do shallow merging on doing this
    this.setState((prevState) => {
        return { 
            qty : prevState.qty + 1
        }
    });
  }
  decreaseQuantity = () => {
    // console.log("decreasing");
    // console.log(this.state);
    // if(this.state.qty > 0) this.state.qty-=1;
    if(this.state.qty > 0) {
        // this.setState({
        //     qty : this.state.qty - 1
        // });
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });
    }
  }
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ fontSize: "#777" }}>Qty : {qty}</div>
          <div style={{ fontSize: 25 }} className="cart-item-actions">
            {/* Buttons*/}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
