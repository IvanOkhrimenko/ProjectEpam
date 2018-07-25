import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import bandReducer from './band'
import historyReducer from './history';


//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	bandState: bandReducer,
	historyState:historyReducer,
});

export default reducers;
