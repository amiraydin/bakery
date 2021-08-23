import React from "react";
// import Pay from "./compenants/Pay";
import Add from "./compenants/Add";
import List from "./compenants/List";
import Button from "./compenants/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as yup from 'yup'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    };
  }

  selectAdd = (e) => {
    console.log("App.js selectAdd e.target.value", e.target.value);
    this.setState({ activeTab: e.target.value });
  };
  selectList = (e) => {
    console.log(e.target.value);
  };
  selectPay = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <div className="container">
          <Button onChange={this.selectAdd} >Add</Button>
          <Button onChange={this.selectList}>List</Button>
          <Button onChange={this.selectPay}>Pay</Button>

          <Add />
          <List />
        </div>
      </>
    );
  }
}

export default App;
