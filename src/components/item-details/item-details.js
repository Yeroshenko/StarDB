import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import './item-details.scss'

const Record = ({ item, field, label }) => {
    return ( 
        <li className="item-description__item">
            <span className = 'item-description__key'>{label}</span>
            <span className = 'item-description__value'>{ item[field]}</span>
        </li>
    )
}

class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem() 
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props

        if (!itemId) { 
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
            .catch(this.onError)
    }

    render() {

        const { item, image } = this.state 

        if (!this.state.item) {
            return <Spinner />
        }

        const { name } = item

        return (
            <div className = 'item-details card'>
                <img className = 'item-details__image' alt = 'item'
                    src = {image} />
      
                <div className="item-description item-details__description">
                    <h3 className = 'item-description__name'> {name} </h3>
                    <ul className = 'item-description__list'>
                        { 
                            React.Children.map(this.props.children, (child, idx) => {
                                return React.cloneElement(child, { item })
                            })
                         }
                    </ul>
                </div>
            </div>
        )
    }
}

export { ItemDetails, Record}