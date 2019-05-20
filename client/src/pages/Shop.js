import React, { Component } from "react";
import { Link } from "react-router-dom"

class Shop extends Component {
  state = {
    products: [],
    sortedProducts: [],
    dropdownExpanded: false,
    selectedItem: null
  }

  componentDidMount() {
    this.setState({
      products: this.props.products,
      sortedProducts: this.props.products
    })
  }

  componentDidUpdate(prevState, nextState) {

    // Sort products array if new dropdown item is selected
    if (prevState.selectedItem !== nextState.selectedItem) {
      this.sortProducts(nextState.selectedItem);
    }
  }

  // Sort products array in state
  sortProducts = (selectedItem) => {
    // const temp = this.state.products;

    // i'm the new selected item to use in sortProducts()
    console.log(selectedItem);

    switch (selectedItem) {
      case "Price":
        break;
      case "Alphabetical":

        break;
      case "Gluten free":

        break;
      case "Nut free":
        break;
      default:
        break;
    }
  }

  toggleDropdown = () => {
    this.setState({ 
      dropdownExpanded: !this.state.dropdownExpanded
    });
  }

  handleItemClick = (selectedItem) => {
    switch (selectedItem) {
      case "price":
        this.setState({ selectedItem: "Price" });
        break;
      case "alphabetical":
        this.setState({ selectedItem: "Alphabetical" });
        break;
      case "gluten_free":
        this.setState({ selectedItem: "Gluten free" });
        break;
      case "nut_free":
        this.setState({ selectedItem: "Nut free" });
        break;
      default:
        break;
    }
  }

  render(){
    const { selectedItem, dropdownExpanded } = this.state;

    return(
      <div className="shop-page">
    
        <div className="shop-container">
          <div className="hero">
            <h1 className="hero-title">All Flavors</h1>
          </div>
        

        <div className="dropdown-container"> 
          <div className="dropdown">
            <p className="dropdown-label">Sort by:</p>
            <button className={dropdownExpanded ? "btn-toggle expanded" : "btn-toggle"} onClick={this.toggleDropdown}>
              <span className="selected-item">
                { selectedItem ? selectedItem : "Choose:"}
              </span>
              <svg width='1792' height='1792' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z'/>
              </svg>
            </button>
            <ul className={dropdownExpanded ? "list expanded" : "list"}>
              <li className="item">
                <button onClick={() => this.handleItemClick("price")}>
                  Price: high - low
                </button>
              </li>
              <li className="item">
                <button onClick={() => this.handleItemClick("alphabetical")}>
                  Alphabetical
                </button>
              </li>
              <li className="item">
                <button onClick={() => this.handleItemClick("gluten_free")}>
                  Gluten Free
                </button>
              </li>
              <li className="item">
                <button onClick={() => this.handleItemClick("nut_free")}>
                  Nut Free
                </button>
              </li>
            </ul>
          </div>
        </div>

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
      </div>
      </div>
      
        
    )
  }
};

export default Shop;