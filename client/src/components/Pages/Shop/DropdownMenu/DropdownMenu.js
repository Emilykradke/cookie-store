import React, { Component } from 'react';

class DropdownMenu extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Sort By: </div>

          { this.state.displayMenu ? (
          <ul>
            <li>Price: low - high</li>
            <li>Price: high - low</li>
            <li>Alphabetical</li>
            <li>Gluten Free</li>
            <li>Nut Free</li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default DropdownMenu;