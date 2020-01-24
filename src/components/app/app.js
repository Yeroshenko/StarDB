import React , { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from '../../services/swapi-service'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundary from '../error-boundary'
import { StarshipDetails } from '../sw-components'
import { 
    WelcomePage, 
    PeoplePage, 
    PlanetsPage, 
    StarshipsPage,
    LoginPage,
    SecretPage } from '../pages'

 
import { SwapiServiceProvider } from '../swapi-sevice-context' 

import './reses.scss'
import './app.scss'

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
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

        const { isLoggedIn } = this.state 

        return(
            <ErrorBoundary>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <Router>
                        <div>
                            <Header onServiceChange = {this.onServiceChange}/>
                            
                            <RandomPlanet />

                            <Switch>
                                <Route path = '/' component = {WelcomePage} exact />
                                <Route path = '/people/:id?' component = {PeoplePage} />
                                <Route path = '/planets' component = {PlanetsPage} />
                                <Route path = '/starships' component = {StarshipsPage} exact />
                                <Route path = '/starships/:id' 
                                        render = { ({match}) => {
                                            const { id } = match.params
                                            return <StarshipDetails itemId = {id}/> 
                                        } } />
                                <Route 
                                    path = '/login'
                                    render ={() => (
                                        <LoginPage 
                                            isLoggedIn = {isLoggedIn} 
                                            onLogin = {this.onLogin}/>
                                    )} />
                                <Route 
                                    path = '/secret'
                                    render  = {() => (
                                        <SecretPage
                                            isLoggedIn = {isLoggedIn}/>
                                    )} />

                                <Redirect to = '/'/>
                            </Switch>
                        </div>
                    </Router>
                    
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

