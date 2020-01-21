import React , { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import Header from '../header'
// import RandomPlanet from '../random-planet'
// import PeoplePage from '../people-page'
// import ItemList from '../item-list'
import ErrorIndicator from '../error-indicator'
// import  { ItemDetails, Record } from '../item-details'

import { SwapiServiceProvider } from '../swapi-sevice-context' 

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails } from '../sw-components'

import './app.scss'
import ErrorBoundary from '../error-boundary'

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

        return(
            <ErrorBoundary>
                <SwapiServiceProvider value = {this.swapiService}>
                    <div>
                        <Header />
                        <div className = 'row'>
                            <PersonList />
                            <PersonDetails itemId = {1} />
                        </div>

                        <div className = 'row'>
                            <StarshipList />
                            <StarshipDetails itemId = {9} />
                        </div>
                        
                        <div className = 'row'>
                            <PlanetList />
                            <PlanetDetails itemId = {2}/>
                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

