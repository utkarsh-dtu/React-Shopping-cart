import React from "react";

// we need to refresh on updating the state
// Pushing all this to GitHub
class CartItem extends React.Component {
  

//   testing() {
//       const promise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve('Done');
//           }, 5000);
//       })

//       promise.then((x) => {

//         // setState acts like a synchronous call
//           this.setState({qty: this.state.qty + 10});
//           this.setState({qty: this.state.qty + 10});
//           this.setState({qty: this.state.qty + 10});
//           console.log('state',x, this.state);
//       })
//   }
  increaseQuantity = () =>{
    // console.log("increasing");
    //   (this.state.qty)++;
    // console.log(this.state);
    // this.state.qty+=1;

    // setState form 1
    // the render function will be automatically be called on using setState

    // on calling setState it will be re-rendered
    // but here we are calling setState thrice, but render is being called only Once
    // but due to a concept called batching, react will call setState only once to increase efficiency
    // it will merge all these setState calls

    // it will take the last call and last object
    // below in the first two increase it by a large amount, but only the last form will be considered
    // ------------------------------------------------------
    // this.setState({
    //     qty : this.state.qty + 1000
    // });
    // this.setState({
    //     qty : this.state.qty + 32914
    // });
    // this.setState({
    //     qty : this.state.qty + 1
    //     // qty : this.state.qty + 1
    //     // qty : this.state.qty + 4
    // });
    // ------------------------------------------------------
    // now in the second form, although the setState has been called thrice, it will increment by 3, but render is called only once
    // this will do shallow merging on doing this

    // now react will maintain a queue and keep updating the previous states
    // because while using this callBack function, we have access to prevState
    // batching is still performed, means it is re-rendered only once
    // this.setState((prevState) => {
    //     return { 
    //         qty : prevState.qty + 1
    //     } , () => {
    //         console.log(this.state);
    //     }
    // });
    // console.log(this.state); this form of setState is asyncchronous, so we cannot rely on this.state because we dont know whether at this point state is the old one or updated one
    // this.setState((prevState) => {
    //     return { 
    //         qty : prevState.qty + 1
    //     }
    // });


    // the second argument is the callback function which is called when the re-rendering is done
    this.setState((prevState) => {
        return { 
            qty : prevState.qty + 1
        }
    },()=>{
        console.log(this.state);
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
    console.log(this.props);
    
    // const { price, title, qty } = this.state;
    
    const { price, title, qty } = this.props.product;
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
