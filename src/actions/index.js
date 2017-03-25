import {
  COURSE_PENDING,
  COURSE_FULFILLED,
  COURSE_REJECTED,
  COURSE_PATH,
  SET_SCREEN,
  SET_EVENT,
} from '../constants';

function coursePending() {
  return {
    type: COURSE_PENDING,
  };
}

function courseFulfilled(payload) {
  return {
    type: COURSE_FULFILLED,
    payload,
  };
}

function courseRejected(payload) {
  return {
    type: COURSE_REJECTED,
    payload,
  };
}

export function fetchCourse() {
  return (dispatch) => {
    dispatch(coursePending());
    return (
      fetch(COURSE_PATH)
        .then((response) => response.json())
        .then((data) => dispatch(courseFulfilled(data)))
        .then(() => dispatch(setScreen(0)))
        .catch((error) => dispatch(courseRejected(error)))
    );
  };
}

export function setScreen(payload) {
  return {
    type: SET_SCREEN,
    payload,
  }
}

export function setEvent(payload) {
  return {
    type: SET_EVENT,
    payload,
  }
}