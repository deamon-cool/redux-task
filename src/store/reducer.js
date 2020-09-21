import * as actionTypes from './actions';

const initState = {
    persons: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(),
                name: 'Daemon',
                age: action.age
            };

            return { persons: [...state.persons, newPerson] };
        case actionTypes.DELETE:
            const person = state.persons.filter(p => p.id === action.id);
            const index = state.persons.indexOf(person[0]);

            return { persons: state.persons.slice(0, index).concat(state.persons.slice(index + 1)) };
        default:
            return state;
    }
};

export default reducer;