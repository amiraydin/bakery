import React from 'react'

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      price: 0
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value })
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <div className='container mt-3'>
          <div className='row align-items-center'>
            <h1>Add</h1>
            <div className='d-flex gap-1'>
              <input
                className='col-8 input-group-text'
                type="text"
                onChange={this.handleNameChange}
                value={this.state.name}
                placeholder='Items'
              />
              <button className='btn btn-outline-primary' onClick={() => {
                this.props.addItem(this.state.name, this.state.price)
              }}>Add item</button>
            </div>
            <div className='d-flex gap-1'>
              <input
                className='col-8 mt-3 mx-3'
                type="range"
                step={0.1}
                min="0"
                max="10"
                onChange={this.handlePriceChange}
                value={this.state.price}
              />
              <span className='mt-3'>{this.state.price}</span>
            </div>
            <br />
          </div>
        </div>

      </>
    )
  }
}

export default Add