import React, { Component } from 'react'

import { PlanetList, PlanetDetails } from '../sw-components'

export default class PlanetsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {

        const selectedItem = this.state.selectedItem

        return (
            <div className = 'row'>
                <PlanetList onItemSelected = {this.onItemSelected} />
                <PlanetDetails itemId = {selectedItem} />
            </div>
        )
    }
}