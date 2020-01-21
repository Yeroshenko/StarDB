import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorBoundary from '../error-boundary'
import ErrorIndicator from '../error-indicator'

import './people-page.scss'

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
            <ErrorBoundary>
                <ItemList 
                    onItemSelected = {this.onItemSelected}
                    getData = {this.swapiService.getAllPeople}>

                    {(i) =>  (`${i.name} ${i.birthYear})`) }
                </ItemList>
            </ErrorBoundary>
            
        )

        const itemDetails = (
            <ErrorBoundary> 
                <ItemDetails  itemId = {this.state.selectedItem}/>
            </ErrorBoundary>
        )

        return(
            <div className = 'wrap'>
                { itemList }
                { itemDetails }
            </div>
            
        )
    }
}