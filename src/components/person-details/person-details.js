import React, { Component } from 'react'

import './person-details.css'
import SwapiService from '../../services/swapi-service'

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    } 

    updatePerson() {
        const { personId } = this.props

        if (!personId) { 
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person })
            })
            .catch(this.onError)
    }

    render() {

        if (!this.state.person) {
            return <span> Select a person from a list </span>
        }

        const { person: {   id, name, gender, 
                            birthYear, eyeColor } } = this.state

        return (
            <div className = 'person-details card'>
                <img className = 'person-details__image' alt = 'person'
                    src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
    
                <div className="person-description person-details__description">
                    <h3 className = 'person-description__name'>{name}  </h3>

                    <ul className = 'person-description__list'>
                        <li className="person-description__item">
                            <span className = 'person-description__key'>Gender:</span>
                            <span className = 'person-description__value'>{gender}</span>
                        </li>
                        <li className="person-description__item">
                            <span className = 'person-description__key'>Birth Year:</span>
                            <span className = 'person-description__value'>{birthYear}</span>
                        </li>
                        <li className="person-description__item">
                            <span className = 'person-description__key'>Eye Colorred:</span>
                            <span className = 'person-description__value'>{eyeColor}</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

