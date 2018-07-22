import axios from 'axios';
import * as types from './actions-types';

export function bandHasErrored(bool) {
    return {
        type: types.BAND_FETCH_DATA_REJECT,
        hasErrored: bool,
    }
}
export function bandIsLoading(bool) {
    return {
        type: types.BAND_FETCH_DATA_REQUEST,
        isLoading: bool,
    }
}
export function bandFetchDataSuccess(band) {
    return {
        type: types.BAND_FETCH_DATA_SUCCESS,
        band,
    }
}
export function bandSetFilter(visibilityFilter) {
    return {
        type: types.BAND_SET_VISIBILITY_FILTER,
        visibilityFilter,
    }
}
export function bandFetchData(url) {
    return (dispatch) => {
        dispatch(bandIsLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(bandIsLoading(false));
                return response.data;
            })
            .then(band => dispatch(bandFetchDataSuccess(band)))
            .catch(() => {
                dispatch(bandIsLoading(false));
                dispatch(bandHasErrored(true));
            })
    }
}