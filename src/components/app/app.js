import React , { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page'
import ErrorIndicator from '../error-indicator'
import ItemDetails from '../item-details'


import './app.css'

export default class App extends Component {
    
    swapiService = new SwapiService()

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        if(this.setState.hasError) {
            return <ErrorIndicator />
        }

    const {getPerson, getStarship} = this.swapiService

    const personDetails = (
        <ItemDetails 
            itemId = {11}
            getData = {getPerson} />
    )

    const starshipDetails = (
        <ItemDetails
            itemId = {3}
            getData = {getStarship} />
    )

        return(
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage/>
            </div>
        )
    }
}
