import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom"
import API from "../utils/API";

class ProductDetails extends Component {
  state = {
    product: {},
    total: "",
    addedToCart: false
  }

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => 
        this.setState({ 
          product: res.data
        }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { value } = event.target 
    this.setState({
      quantity: value,
      total: this.state.product.price * parseInt(value)
    }, () => {console.log(this.state)})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const quantity = parseInt(this.state.quantity);
    // const quantity = parseInt(value)
    console.log(typeof quantity)
    if (isNaN(quantity) || quantity < 1) {
      console.log("That is an invalid number")
    } else {
      this.props.addToCart(this.state)
      this.setState({
        addedToCart: true,
        quantity: ""
      })
    }
  }

render(){
  const { addedToCart, product } = this.state;
  return(
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.imagePath} alt={product.flavor}/>
        </div>
        
        <div className="details-right">
          <div className="product-details">
            <h1>{product.flavor}</h1>
            <p className="description">{product.description}</p>
            <p className="price">$ {product.price}.00</p>
          </div>

          <form>
            <div className="quantity-container"></div>
              <div className="block">
                <label>QTY</label>
                <input
                  onChange={this.handleInputChange}
                  name="quantity"
                  placeholder="Enter Quantity Here"
                  defaultValue=""
                ></input>
                <button className="add-button"
                  onClick={this.handleFormSubmit}
                >
                Add to Cart
                </button>
              </div>

            {addedToCart ?

              <Fragment>
                <div className="conditional-render">
                  <p className="product-added"><b>{this.state.product.flavor} Cookies</b> Added To Cart!</p>
                  <div className="buttons">
                    <Link to="/Shop">
                      <button className="continueShopping">
                        Continue Shopping
                      </button>
                    </Link>
                    <Link to="/Cart">
                      <button className="checkoutLink">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </Fragment>
              :null
              }
            </form>
          </div>
        
        </div>
      </div>
    )
  }
};

export default withRouter(ProductDetails);