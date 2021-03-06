import React, { Component } from "react";
import Pay from "./compenants/Pay";
import Add from "./compenants/Add";
import Button from "./compenants/Button"
import List from "./compenants/List";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import Card from "./compenants/Card";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    };
  }

  handleButtonClick = (e) => {
    // console.log(e);
    this.setState({ activeTab: e.target.innerText })
  }

  addItem = (itemName, itemPrice) => {
    /*let products = this.state.items;
    products.push({name: name, price: price});
    this.setState({
      items: products
    });*/
    this.setState({ items: [...this.state.items, { name: itemName, price: itemPrice }] })
  }

  removeItem = (item) => {
    /*let newItems = this.state.items;
    newItems.forEach(i => {
      if (item === i) {
        newItems.splice(newItems.indexOf(item), 1);
      }
    });
    this.setState({
      items: newItems
    });*/
    this.setState({
      items: this.state.items.filter(product => (
        product !== item
      ))
    });
    localStorage.setItem("product", item.name);
  }

  render() {
    // console.log("items", this.state.items);
    // console.log(this.state.activeTab && <Component />);
    return (
      <>
        <div className='container col-6 mt-5'>
          <h1 className='text-center'>Bakery </h1>
          <div className='d-flex align-items-center'>
            <Button isSelected={this.state.activeTab === "add"} handelClick={this.handleButtonClick}>
              add
            </Button>
            <Button isSelected={this.state.activeTab === "list"} handelClick={this.handleButtonClick}>
              list
            </Button>
            <Button isSelected={this.state.activeTab === "pay"} handelClick={this.handleButtonClick}>
              pay
            </Button>
          </div>
          {this.state.activeTab === "add" && <Add addItem={this.addItem} />}
          {this.state.activeTab === "list" && <List items={this.state.items} removeItem={this.removeItem} />}
          {this.state.activeTab === "pay" && <Pay items={this.state.items} />}
        </div>
      </>
    );
  }
}

export default App;
