import {
  COURSE_PENDING,
  COURSE_FULFILLED,
  COURSE_REJECTED,
} from '../constants';

const initialState = {};

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

    default:
      return state;
  }
};

export default coursesReducer;
