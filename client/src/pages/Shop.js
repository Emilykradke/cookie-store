import React, { Component } from "react";
import { Link } from "react-router-dom"
import Container from "../components/Layout/Container/Container"
import ProductContainer from "../components/Pages/Shop/ProductContainer/ProductContainer"
import DropdownMenu from "../components/Pages/Shop/DropdownMenu/DropdownMenu";

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
        <DropdownMenu></DropdownMenu>
        <div id="products">
          <ul>
            {this.state.products.map(product => (
              // console.log(product),
                <ProductContainer key={product._id}>
                  <Link to={"/products/" + product._id}>
                    <img src={product.imagePath} alt="cookie"/>
                    <div className="flavor">{product.flavor}</div>
                    <div className="price">{product.price}</div>
                  </Link>
                </ProductContainer>
            ))}
          </ul> 
        </div>
      </Container>
    )
  }
};

export default Shop;