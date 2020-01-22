import React , { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from '../../services/swapi-service'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundary from '../error-boundary'
import { WelcomePage, PeoplePage, PlanetPage, StarshipPage } from '../pages'

 
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
                    <Router>
                        <div>
                            <Header onServiceChange = {this.onServiceChange}/>
                            
                            <RandomPlanet />
                            <Route path = '/' component = {WelcomePage} exact />
                            <Route path = '/people' component = {PeoplePage} />
                            <Route path = '/planets' component = {PlanetPage} />
                            <Route path = '/starships' component = {StarshipPage} />
                        
                        </div>
                    </Router>
                    
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

