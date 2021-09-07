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
                    <b>Name: </b>{item.name}<br />
                    <b>Price: </b>{item.price}<br />
                    <button className="btn btn-danger" onClick={() => this.props.removeItem(item)}>
                      Supprimer
                    </button>
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
