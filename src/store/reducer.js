import * as actionTypes from './actions';

const initState = {
    persons: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(),
                name: action.name,
                age: action.age
            };

            return { persons: [...state.persons, newPerson] };
        case actionTypes.DELETE:
            const arr = [...state.persons];

            const person = arr.filter(p => p.id === action.id);
            const index = arr.indexOf(person[0]);

            return { persons: arr.slice(0, index).concat(arr.slice(index + 1)) };
        default:
            return state;
    }
};

export default reducer;