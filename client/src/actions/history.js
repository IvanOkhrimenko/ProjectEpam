import axios from 'axios';
import * as types from './actions-types';

export function historyHasErrores(bool) {
    return {
        type: types.HISTORY_FETCH_DATA_REJECT,
        hasErrores: bool,
    };
}
export function historyIsLoading(bool) {
    return {
        type: types.HISTORY_FETCH_DATA_REQUEST,
        isLoading: bool,
    };
}
export function historyFetchDataSuccess(history) {
    return {
        type: types.HISTORY_FETCH_DATA_SUCCESS,
        history,
    };
}
export function historyFetchData(url) {
    return (dispatch) => {
        dispatch(historyIsLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(historyIsLoading(false));
                return response.data;
            })
            .then(history => dispatch(historyFetchDataSuccess(history)))
            .catch(() => {
                dispatch(historyIsLoading(false));
                dispatch(historyHasErrores(true));
            }
            )
    }
}