import * as types from '../actions/actions-types';

const initialState = {
    songs: [],
    hasErrored: false,
    isLoading: false,
    activeIndex: null,
    searchFilter: '',
};

const musicReducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case types.MUSIC_FETCH_DATA_REJECT:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };

        case types.MUSIC_FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case types.MUSIC_FETCH_DATA_SUCCESS:
            return {
                ...state,
                songs: action.songs,
            };
        case types.MUSIC_SET_ACTIVE_INDEX:
            return {
                ...state,
                limit: action.activeIndex,
            };
        case types.FIND_MUSIC:
            return {
                ...state,
                searchFilter: action.searchFilter,
            };
        default:
            return state;
    }
};

export default musicReducer;

