import React from "react";
import Pay from "./compenants/Pay";
import Add from "./compenants/Add";
import Button from "./compenants/Button"
import List from "./compenants/List";
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

  isSelected = (e) => {
    this.state.activeTab !== e.target.value && this.setState({ activeTab: e.target.value })
    console.log('this.state.activeTab', this.state.activeTab);
  }


  render() {
    return (
      <>
        <div className="container">
          <Button value="add" onClick={this.isSelected} />
          <Button value="list" onClick={this.isSelected} />
          <Button value="pay" onClick={this.isSelected} />

          <div>{this.state.activeTab === "add" && <Add />}
            {this.state.activeTab === "list" && <List />}
            {this.state.activeTab === "pay" && <Pay />}
          </div>
        </div>
      </>
    );
  }
}

export default App;
