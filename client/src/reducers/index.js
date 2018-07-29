import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import bandReducer from './band'
import historyReducer from './history';
import musicReducer from './music';


//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	bandState: bandReducer,
	historyState: historyReducer,
	musicState: musicReducer,
});

export default reducers;
