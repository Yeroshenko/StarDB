import React from 'react'
import { withRouter } from 'react-router-dom'

import { StarshipList } from '../sw-components'

const StarshipsPage = ({ history }) => {
        return(
            <StarshipList 
                onItemSelected = {(itemId) => {
                    const newPath = `/starships/${itemId}`
                    history.push(newPath)
                }} />
        )
}

export default withRouter(StarshipsPage)