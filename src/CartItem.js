import React from "react";

// we need to refresh on updating the state
// Pushing all this to GitHub

// now this is a function component and 
// a function component has access to props by default
const CartItem = (props) => {
  

    // const { price, title, qty } = this.state;

    const { price, title, qty, id } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
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
              // onClick={this.increaseQuantity}
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              onClick = {() => onDeleteProduct(id)}
            />
          </div>
        </div>
      </div>
    );
  
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
