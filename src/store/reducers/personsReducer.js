import * as actionTypes from '../action';

const initialState = {
    persons: []
}

const personsReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            const newArray = state.persons.filter(person => (person.id !== action.personID));
            return {
                ...state,
                persons: newArray
            }
        default: 
            return state;
    }
}

export default personsReducer;