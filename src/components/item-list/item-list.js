import React from 'react'

import './item-list.scss'

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props

    const items = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)

        return (
            <li className = 'item-list__element'
                key = {id}
                onClick = {() => onItemSelected(id)}>
                {label}
            </li>
        )
    })

    return (
        <ul className = 'item-list card'>
            {items}
        </ul>
    )
}

export default ItemList