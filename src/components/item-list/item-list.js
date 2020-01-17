import React, { Component } from 'react'

import Spinner from '../spinner'

import './item-list.css'

export default class ItmeList extends Component {

    state = {
        itemList: null
    }
 
    componentDidMount() {

        const { getData } = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item
            const label = this.props.children(item)

            return (
                <li className = 'item-list__item'
                    key = {id}
                    onClick = {() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state

        if(!itemList) return <Spinner />

        const items = this.renderItems(itemList)

        return (
            <ul className = 'item-list card'>
               {items}
            </ul>
        )
    }
}
