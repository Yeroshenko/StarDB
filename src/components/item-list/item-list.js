import React from 'react'
import PropTypes from 'prop-types'

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

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.props = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children : PropTypes.func.isRequired
}

export default ItemList