import { combineReducers } from 'redux';

// Reducers
import courseReducer from './courseReducer';

// Combine Reducers
const reducers = combineReducers({
  course: courseReducer,
});

export default reducers;
