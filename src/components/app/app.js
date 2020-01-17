import React , { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItmeList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'

export default class App extends Component {
    
    state = {
        selectedPerson: 1
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return(
            <div>
                <Header />
                <RandomPlanet />
                <div className = 'wrap'>
                    <ItmeList onItemSelected = {this.onPersonSelected}/>
                    <PersonDetails  personId = {this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}
