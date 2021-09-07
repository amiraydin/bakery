import React from "react";
import Card from "./Card";

export default class Pay extends React.Component {
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
    const { total, totalEcoTax, totalTTC, totalTVA, basket } = this.state;
    this.setState({
      basket: [...basket, { name: name, price: price }],
      total: total + parseFloat(price),
      totalEcoTax: totalEcoTax + 0.03,
      totalTVA: totalTVA + (price * 0.20),
      totalTTC: totalTTC + total + parseFloat(price) + totalEcoTax + 0.03 + totalTVA + (price * 0.20)

    })
  }
  render() {
    const { total, totalEcoTax, totalTTC, totalTVA } = this.state;
    return (
      <>
        <div className='container'>
          <h1>Pay</h1>
          <div>
            <p>Total TVA : {totalTVA}</p>
            <p>Total eco taxe : {totalEcoTax}</p>
            <p>Total TTC : {totalTTC}</p>
            <p>Total : {total}</p>
          </div>
          <div className='card'>
            {this.props.items.map((elm, index) => {
              return (
                <div key={index}>
                  <Card
                    name={elm.name}
                    price={elm.price}
                    onClick={() => this.handleSelect(elm.name, elm.price)} />
                </div>
              )

            })}
          </div>
        </div>
      </>
    )

  }
}
