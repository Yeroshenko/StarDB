import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

import './item-details.css'

export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem() 
            this.setState({
                loading: true
            })
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item, 
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    } 

    updateItem() {
        const { itemId } = this.props

        if (!itemId) { 
            return
        }

        this.swapiService
            .getPerson(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError)
    }

    render() {

        if (!this.state.item) {
            return <Spinner />
        }

        const {item, loading, error } = this.state

        
        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <ItemView  item = {item}/> : null

        return (
            <div className = 'item-details card'>
                {errorMessage}
                {spinner}
                {content} 
            </div>
        )
    }
}

const ItemView = ({item}) => {

    const { id, name, gender, birthYear, eyeColor } = item

    return (
        <React.Fragment>
            <img className = 'item-details__image' alt = 'item'
                src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        
            <div className="item-description item-details__description">
                <h3 className = 'item-description__name'>{name}  </h3>

                <ul className = 'item-description__list'>
                    <li className="item-description__item">
                        <span className = 'item-description__key'>Gender:</span>
                        <span className = 'item-description__value'>{gender}</span>
                    </li>
                    <li className="item-description__item">
                        <span className = 'item-description__key'>Birth Year:</span>
                        <span className = 'item-description__value'>{birthYear}</span>
                    </li>
                    <li className="item-description__item">
                        <span className = 'item-description__key'>Eye Colorred:</span>
                        <span className = 'item-description__value'>{eyeColor}</span>
                    </li>
                    
                </ul>
            </div>
        </React.Fragment>
    )
}