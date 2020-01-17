import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import ItmeList from '../item-list'
import ItemDetails from '../item-details'
import ErrorBoundery from '../error-boundery'
import ErrorIndicator from '../error-indicator'

import './people-page.css'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItem: 1
    }
        
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        if(this.state.hasError) return <ErrorIndicator />

        const itemList = (
            <ErrorBoundery>
                <ItmeList 
                    onItemSelected = {this.onItemSelected}
                    getData = {this.swapiService.getAllPeople}>

                    {(i) =>  (`${i.name} ${i.birthYear})`) }
                </ItmeList>
            </ErrorBoundery>
            
        )

        const itemDetails = (
            <ErrorBoundery> 
                <ItemDetails  itemId = {this.state.selectedItem}/>
            </ErrorBoundery>
        )

        return(
            <div className = 'wrap'>
                { itemList }
                { itemDetails }
            </div>
            
        )
    }
}