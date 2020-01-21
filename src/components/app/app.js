import React , { Component } from 'react'

import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from '../../services/swapi-service'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundary from '../error-boundary'
import { PeoplePage, PlanetPage, StarshipPage } from '../pages'

 
import { SwapiServiceProvider } from '../swapi-sevice-context' 

import './app.scss'

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                            DummySwapiService : SwapiService

            return {
                swapiService: new Service ()
            }
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        return(
            <ErrorBoundary>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <div>
                        <Header onServiceChange = {this.onServiceChange}/>
                        
                        <RandomPlanet />
                        <PeoplePage /> 
                        <PlanetPage />
                        <StarshipPage />
                    
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

