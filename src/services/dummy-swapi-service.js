export default class DummySwapiService {

    _people = [
        {
            id: 1,
            name: 'Iron Man [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            height: 175,
            eyeColor: 'dark brown'
        },
  
        {
            id: 2,
            name: 'Thor [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            height: 190,
            eyeColor: 'blue'
        },
    
        {
            id: 3,
            name: 'Quicksilver [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            height: 180,
            eyeColor: 'grey'
        },
    
        {
            id: 4,
            name: 'Carol Danvers [TEST DATA]',
            gender: 'female',
            birthYear: 'long ago',
            height: 170,
            eyeColor: 'blue'
        }
    ];

    _planets = [
      {
        id: 1,
        name: 'Mercury [TEST DATA]',
        population: 'not known',
        rotationPeriod: '59 days',
        diameter: '4 879.4 km' 
      },

      {
        id: 2,
        name: 'Venus [TEST DATA]',
        population: 'not known',
        rotationPeriod: '243 days',
        diameter: '12 104 km'
      },

      {
        id: 3,
        name: 'Earth [TEST DATA]',
        population: '7.530.000.000',
        rotationPeriod: '23 hours 56 seconds',
        diameter: '12 742 km'
      },

      {
        id: 4,
        name: 'Mars [TEST DATA]',
        population: 'not known',
        rotationPeriod: '24 hours',
        diameter: '6 779 km'
      }


    ];
  
    _starships = [
      {
        id: 1,
        name: 'North American [TEST DATA]',
        model: 'X-15',
        manufacturer: 'Northrop Grumman Shipbuilding',
        costInCredits: 'not known',
        length: 'approx 300 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100
      },

      {
        id: 2,
        name: 'Space Shuttle [TEST DATA]',
        model: 'N-A-S-A',
        manufacturer: 'Northrop Grumman Shipbuilding',
        costInCredits: 'not known',
        length: 'approx 300 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100
      }
    ];
  
    getAllPeople = async () => {
      return this._people;
    };
  
    getPerson = async () => {
      return this._people[0];
    };
  
    getAllPlanets = async () => {
      return this._planets;
    };
  
    getPlanet = async () => {
      return this._planets[0]
    };
  
    getAllStarships = async () => {
      return this._starships;
    };
  
    getStarship = async () => {
      return this._starships[0];
    };
  
    getPersonImage = () => {
      return `https://placeimg.com/200/200/people`;
    };
  
    getStarshipImage = () => {
      return `https://placeimg.com/200/200/tech`;
    };
  
    getPlanetImage = () => {
      return `https://placeimg.com/200/200/nature`;
    };
  }
  