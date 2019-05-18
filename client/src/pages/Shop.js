import React, { Component } from "react";
import { Link } from "react-router-dom"
import Container from "../components/Layout/Container/Container"

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
      <Container>
        <div id="products">
          <ul>
            {this.state.products.map(product => (
              <Link to={"/products/" + product._id} key={product._id}>
                <img src={product.imagePath} alt="cookie"/>
                <div className="flavor">{product.flavor}</div>
                <div className="price">${product.price}.00</div>
              </Link>
            ))}
          </ul> 
        </div>
      </Container>
    )
  }
};

export default Shop;