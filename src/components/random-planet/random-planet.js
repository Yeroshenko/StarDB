import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service' 
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

import './random-planet.css'

export default class RandomPlanet extends Component {
    
    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000)

    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet, 
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
    
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 1
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PlanetView  planet = {planet}/> : null

        return (
            <div className = 'random-planet card'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }

}


const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet

    return(
        <React.Fragment>
            <img className = 'random-planet__image' alt = 'planet'
                    src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                
            <div className = 'planet-description random-planet__description'>
                <h3 className = 'planet-description__name'>{name}</h3>

                <ul className='planet-description__list'>
                    <li className='planet-description__item'>
                        <span className='planet-description__key'>Population:</span>
                        <span className = 'planet-description__value'>{population}</span>
                    </li>
                    <li className='planet-description__item'>
                        <span className='planet-description__key'>Rotation Period:</span>
                        <span className = 'planet-description__value'>{rotationPeriod}</span>
                    </li>
                    <li className='planet-description__item'>
                        <span className='planet-description__key'>Diameter:</span>
                        <span className = 'planet-description__value'>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}