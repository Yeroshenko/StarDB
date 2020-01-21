import React, { Component } from 'react'

import { StarshipList, StarshipDetails } from '../sw-components'

export default class StarshipPage extends Component {

    state = {
        selectedItem: 15
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {

        const selectedItem = this.state.selectedItem

        return (
            <div className = 'row'>
                <StarshipList onItemSelected = {this.onItemSelected} />
                <StarshipDetails itemId = {selectedItem} />
            </div>
        )
    }
}