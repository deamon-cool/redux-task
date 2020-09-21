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
            return null;
        default:
            return state;
    }
};

export default reducer;