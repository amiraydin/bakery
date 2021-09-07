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
        const { name, price, onClick } = this.props;
        return (
            <>
                <div className='container'>
                    <div className='row col'>
                        <button onClick={() => onClick(name, price)}>

                            <img
                                style={{ width: 200 }}
                                src={this.state.image}
                                alt='default' />
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
