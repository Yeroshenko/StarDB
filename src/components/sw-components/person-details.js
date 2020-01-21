import React from 'react'

import { ItemDetails, Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers/'

const PersonDetails = (props) => {
    return(
        <ItemDetails {...props} >

            <Record field = 'gender' label = 'Gender:' />
            <Record field = 'birthYear' label = 'Birth Year:' />
            <Record field = 'height' label = 'Height:' />
            <Record field = 'eyeColor' label = 'Eye color:' />
            
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)