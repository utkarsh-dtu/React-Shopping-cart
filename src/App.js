// import './App.css';
import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from "./firebase";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };

    this.db = firebase.firestore();

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);

    // using arrow function will automatically bind the this keyword to the function that
    // in normal function this keyword is not bound to the function
    // this.testing();
  }

  componentDidMount() {
    // fetching from the db
    // .onSnapshot() is listening for any changes in any documents in the database
    this.db.collection("products").onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      // filling the product array with all the documents
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  handleIncreaseQuantity = (product) => {
    // console.log("hey please increase the quantity of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // console.log(index);

    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty : products[index].qty + 1

      })
      .then(() => {
        console.log('document Updated successfully !')

      })
      .catch(err => {
        console.log('could not update product',err);
      })
  };

  handleDecreaseQuantity = (product) => {
    if (product.qty === 0) return;

    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });

    // const docRef = this.db.collection('products').doc(product[index].id);
    if(products[index].qty === 0) return ;
    // returns a reference to the required document in the database
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty : products[index].qty - 1
      });

  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("deleted successfully")
      })
      .catch((err) => {
        console.log('Could not delete',err);
      })
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.price * product.qty;
    });
    return cartTotal;
  };
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://m.media-amazon.com/images/I/81erN8t-57L._SL1500_.jpg",
        price: 900,
        qty: 3,
        title: "washing machine",
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);
      })
      .catch((err) => {
        console.log('could not add product', err);
      })
  }
  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style = {{padding: 20, fontSize : 20}}> Add Product</button> */}
        <Cart
          // passing props to the children
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
