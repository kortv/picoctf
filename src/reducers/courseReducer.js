import get from 'lodash.get';
import {
  COURSE_PENDING,
  COURSE_FULFILLED,
  COURSE_REJECTED,
  SET_SCREEN,
  SET_EVENT,
} from '../constants';

const initialState = {
  screens: [],
  currentScreen: {
    screen: 'Img',
  }
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {

    case COURSE_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case COURSE_FULFILLED:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        error: false,
        errorDetails: '',
      };

    case COURSE_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorDetails: action.response,
        ...action.payload,
      };

    case SET_SCREEN:
      return {
        ...state,
        events: [],
        currentScreen: {
          ...get(state, ['screens', action.payload], {}),
          index: action.payload,
        }
      };

    case SET_EVENT:
      return {
        ...state,
        events: [ ...state.events, action.payload],
      };

    default:
      return state;
  }
};

export default coursesReducer;
