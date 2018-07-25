import * as types from '../actions/actions-types';

const initialState = {
    band: [],
    hasErrored: false,
    isLoading: false,
    visibilityFilter: 'SHOW_ALL',
};

const bandReducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case types.BAND_FETCH_DATA_REJECT:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };
        case types.BAND_FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case types.BAND_FETCH_DATA_SUCCESS:
            return {
                ...state,
                band: action.band,
            };
        case types.BAND_SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.visibilityFilter,
            };
        default:
            return state;
    }
};
export default bandReducer;
