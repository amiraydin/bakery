import React from "react";
import Card from "./Card";

class Pay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    }

  }

  handleSelect = (name, price) => {
    console.log('name', name, 'price', price);
  }
  render() {
    return (
      <>
        <div className='container'>
          <h1>Pay</h1>
          <div>
            <p>
              {this.state.total}
            </p>
          </div>
          <div className='card'>
            {this.props.items.map((elm) => {
              return (

                <Card name={elm.name} price={elm.price} />
              )

            })}
          </div>
        </div>
      </>
    )

  }
}

export default Pay;
