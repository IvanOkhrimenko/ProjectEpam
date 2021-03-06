import axios from 'axios';
import * as types from './actions-types';

export function postsHasErrored(bool) {
	return {
		type: types.POSTS_FETCH_DATA_REJECT,
		hasErrored: bool,
	};
}

export function postsIsLoading(bool) {
	return {
		type: types.POSTS_FETCH_DATA_REQUEST,
		isLoading: bool,
	};
}

export function postsFetchDataSuccess(posts) {
	return {
		type: types.POSTS_FETCH_DATA_SUCCESS,
		posts,
	};
}

export function postsFetchData(url) {
	return (dispatch) => {
		dispatch(postsIsLoading(true));

		axios.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error(response.statusText);
				}

				dispatch(postsIsLoading(false));

				return response.data;
			})
			.then(posts => dispatch(postsFetchDataSuccess(posts)))
			.catch(() => {
				dispatch(postsIsLoading(false));
				dispatch(postsHasErrored(true));
			});
	};
}

export function postsLoadMore(limit) {
	return {
		type: types.POSTS_LOAD_MORE,
		limit,
	};
}

export function postsResetLimit() {
	return {
		type: types.POSTS_RESET_LIMIT,
		limit: 10,
	};
}

export function postsSearch(searchFilter) {
	return {
		type: types.FIND_POSTS,
		searchFilter,
	};
}
