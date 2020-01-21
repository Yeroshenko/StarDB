import React, { Component } from 'react'

import { PersonList, PersonDetails } from '../sw-components'

export default class PeoplePage extends Component {

    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {

        const selectedItem = this.state.selectedItem

        return (
            <div className = 'row'>
                <PersonList onItemSelected = {this.onItemSelected} />
                <PersonDetails itemId = {selectedItem} />
            </div>
        )
    }
}