import React, { Component } from 'react'

export default class Card extends Component {
    constructor() {
        super()

        this.state = {
            image: './images/item.png',
        }

    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.name}.png`)
            .then(res => res.blob())
            .then(result => {
                const urlImage = URL.createObjectURL(result)
                this.setState({ image: urlImage })
            });

    }
    render() {
        // console.log(this.props.name);
        return (
            <>
                <div className='container'>
                    <div className='row col'>
                        <button onClick={() => (
                            this.props.onClick(this.props.name, this.props.price)
                        )}>
                            <img

                                style={{ width: 200 }}
                                src={this.state.image}
                                alt='imag of product' />
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
