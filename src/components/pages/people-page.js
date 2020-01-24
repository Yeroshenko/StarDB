import React from 'react'
import { withRouter } from 'react-router-dom'

import { PersonList, PersonDetails } from '../sw-components'

const PeoplePage = ({ history, match }) => {

    const { id } = match.params

    return (
        <div className = 'row'>
            <PersonList onItemSelected = { (id) => history.push(id) } />
            <PersonDetails itemId = {id} />
        </div>
    )

}

export default withRouter(PeoplePage)