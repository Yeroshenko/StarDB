import React, { Component } from 'react'

import { PlanetList, PlanetDetails } from '../sw-components'

export default class PlanetPage extends Component {

    state = {
        selectedItem: 2
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