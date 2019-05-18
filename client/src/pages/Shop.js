import React, { Component } from "react";
import { Link } from "react-router-dom"

class Shop extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    })
  }

  render(){
    return(
      <div className="shop-container">
        <>
          {(this.props.isProductsLoaded) ? 
            <div className="products-container">
              {this.props.products.map(product => (
                <Link className="product" to={"/products/" + product._id} key={product._id}>
                  <img src={product.imagePath} alt="cookie"/>
                  <p className="flavor">{product.flavor}</p>
                  <p className="price">${product.price}.00</p>
                </Link>
              ))}
            </div>
          :
          null
          }
        </>
      </div>
        
    )
  }
};

export default Shop;