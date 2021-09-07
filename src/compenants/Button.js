import React from "react";

class Button extends React.Component {
  render() {
    // console.log("Button render this.props -->", this.props);
    return (
      <>
        <button className={`btn btn-outline-danger  ${this.props.isSelected && "bg-danger text-light"} m-2 `} onClick={this.props.handelClick}>

          {this.props.children}
        </button>

      </>
    )
  }
}

export default Button;