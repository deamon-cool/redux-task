import * as actionTypes from './actions';

const initState = {
    persons: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return null;
        case actionTypes.DELETE:
            return null;
        default:
            return state;
    }
};

export default reducer;