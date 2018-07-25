import * as types from '../actions/actions-types';

const initialState = {
    history: [],
    hasErrored: false,
    isLoading: false,
};

const historyReducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case types.HISTORY_FETCH_DATA_REJECT:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };
        case types.HISTORY_FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case types.HISTORY_FETCH_DATA_SUCCESS:
            return {
                ...state,
                history: action.history,
            };
        default:
            return state;
    }
};
export default historyReducer;
