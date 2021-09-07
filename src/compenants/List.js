import React from "react";

export default class List extends React.Component {
  render() {
    console.log(this.props);
    return (

      <>
        <div className='container'>
          <div>
            <h1>List</h1>
            <ul>
              {this.props.items.map(item => {
                console.log(item);
                return (
                  <li>
                    {item.name} :<strong>{item.price}$ </strong>
                  </li>
                )

              })}
            </ul>
          </div>
        </div>
      </>

    )
  }
}
